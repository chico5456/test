/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useMemo, useState, useEffect } from "react";
import CardList from "./CardList";
import { mainChallenge } from "@/lib/utils";
import EpisodeList from "./EpisodeList";
import EpisodeMessage from "./EpisodeMessage";

type Placement = {
  episodeNumber: number | string;
  placement: string;
};

const SimLayout = (
  {
    queens,
    episodes,
    lipsyncs,
    minNonElimEps,
    seasonMode,
    seasonStyle
  }:
    {
      queens: any[];
      episodes: any[];
      lipsyncs: any[];
      minNonElimEps: number;
      seasonMode: string;
      seasonStyle: string
    }) => {

  const initialTrackRecord = useMemo(() => {
    return queens.map(q => ({
      ...q,
      placements: [],
      scores: [],
      wins: 0,
      bottoms: 0,
      highs: 0,
      lows: 0,
      top2s: 0,
      isEliminated: false,
      stats: q.stats ?? {
        Acting: Math.floor(Math.random() * 100) + 1,
        Dance: Math.floor(Math.random() * 100) + 1,
        Comedy: Math.floor(Math.random() * 100) + 1,
        Design: Math.floor(Math.random() * 100) + 1,
        Runway: Math.floor(Math.random() * 100) + 1,
        Singing: Math.floor(Math.random() * 100) + 1,
      }
    }));
  }, [queens]);

  const [episodeHistory, setEpisodeHistory] = useState<{ pre: { [key: number]: any[] }, post: { [key: number]: any[] } }>({ pre: {}, post: {} });
  const [selectedEpisode, setSelectedEpisode] = useState<number | null>(null);
  const [episodeEvent, setEpisodeEvent] = useState('');
  const [showResults, setShowResults] = useState(false);

  useEffect(() => { // Precompute all episode results

    let trackRecord = initialTrackRecord.map(q => ({ ...q }));
    const preHistory: { [key: number]: any[] } = {};
    const postHistory: { [key: number]: any[] } = {};
    const sortedEpisodes = [...episodes].sort((a, b) => a.episodeNumber - b.episodeNumber);

    sortedEpisodes.forEach(e => {
      const typeTokens = e.type
        ? e.type.toLowerCase().split(",").map((t: string) => t.trim())
        : [];
      const isNonElimType = typeTokens.includes("non elim") || typeTokens.includes("nonelim");
      e.nonElimination = isNonElimType;
    }); // Reset all nonElim flags, respecting forced non-elim types

    if (seasonMode === "sp") { // for split premiere, shuffle the queens into 2 seperate groups
      const shuffled = [...trackRecord].sort(() => Math.random() - 0.5);
      const half = Math.ceil(shuffled.length / 2);
      const group1 = shuffled.slice(0, half).map(q => ({ ...q, group: 1 }));
      const group2 = shuffled.slice(half).map(q => ({ ...q, group: 2 }));
      trackRecord = [...group1, ...group2];
    }

    const eligible = sortedEpisodes.filter(
      e => !e.title.toLowerCase().includes("finale") &&
        e.episodeNumber < episodes.length - 2
    );

    if (eligible.length > 0 && Number(minNonElimEps) > 0) {
      for (let i = 0; i < Number(minNonElimEps); i++) {
        const randomIndex = Math.floor(Math.random() * eligible.length);
        sortedEpisodes[eligible[randomIndex].episodeNumber - 1].nonElimination = true;
      }
    }

    for (const e of sortedEpisodes) {

      preHistory[e.episodeNumber] = trackRecord.map(q => ({ // snapshot pre-episode
        ...q,
        placements: [...q.placements],
        scores: [...q.scores],
      }));

      let activeGroup = trackRecord;
      if (seasonMode === "sp") {
        if (e.episodeNumber === 1) {
          activeGroup = trackRecord.filter(q => q.group === 1)
        } else if (e.episodeNumber === 2) {
          activeGroup = trackRecord.filter(q => q.group === 2);
        }
      }

      const updatedGroup = mainChallenge(
        activeGroup,
        e.episodeNumber,
        e.nonElimination,
        e.type,
        seasonStyle
      );

      trackRecord = trackRecord.map(q => {
        const updated = updatedGroup.find(u => u.id === q.id);
        return updated ? updated : q;
      });

      //trackRecord = mainChallenge(trackRecord, e.episodeNumber, e.nonElimination, e.type);
      //postHistory[e.episodeNumber] = trackRecord.map(q => ({ ...q, placements: [...q.placements], scores: [...q.scores] }));

      postHistory[e.episodeNumber] = trackRecord.map(q => ({ // snapshot post-episode
        ...q,
        placements: [...q.placements],
        scores: [...q.scores],
      }));

    }

    setEpisodeHistory({ pre: preHistory, post: postHistory });

  }, [initialTrackRecord, episodes]);

  const handleEpisodeClick = (episodeNumber: number) => {
    setEpisodeEvent('');
    setShowResults(false); // reset show results
    setSelectedEpisode(episodeNumber);
  };

  const handleEpisodeEventClick = (episodeNumber: number, eventType: string) => {
    setSelectedEpisode(episodeNumber);

    if (eventType === "results") {
      setEpisodeEvent("results");
      setShowResults(true);
      return;
    }

    setEpisodeEvent(eventType);
    setShowResults(false);
  };

  const filteredQueens = selectedEpisode
    ? episodeEvent
      ? episodeHistory.post[selectedEpisode] || []
      : episodeHistory.pre[selectedEpisode] || []
    : initialTrackRecord;

  // Determine which queens to display
  const queensToDisplay = selectedEpisode
    ? episodeEvent === "results"
      ? episodeHistory.post[selectedEpisode] || []
      : filteredQueens.filter(q => {
        const placement = (q.placements as Placement[])?.find(
          (p: Placement) => p.episodeNumber === selectedEpisode
        );
        const episode = episodes.find(e => e.episodeNumber === selectedEpisode);
        const isNonElim = episode?.nonElimination;

        switch (episodeEvent) {
          case 'announceSafe':
            return placement?.placement === 'safe';
          case 'winner': {
            if (isNonElim) {
              return placement?.placement === 'win' || placement?.placement === 'top2';
            }
            return placement?.placement === 'win';
          }
          case 'high':
            return placement?.placement === 'high';
          case 'top2':
            return placement?.placement === 'top2';
          case 'bottom':
            return placement?.placement === 'low' || placement?.placement === 'bottom';
          case 'bottom2':
            return placement?.placement === 'bottom';
          case 'eliminated':
            if (isNonElim) return placement?.placement === 'bottom';
            return placement?.placement === 'bottom';
          default:
            return true;
        }
      })
    : filteredQueens;

  // Event message generator
  const generateEventMessage = (queens: any[], event: string, episodeNumber: number) => {
    const names = queens.map(q => q.name);
    const isEliminated = queens.map(q => q.isEliminated);
    if (!names.length) return '';
    const last = names[names.length - 1];
    const others = names.slice(0, names.length - 1);
    const episode = episodes.find(e => e.episodeNumber === episodeNumber);
    const isNonElim = episode?.nonElimination;

    let btmMsg = '';
    if (event == 'eliminated') {
      if (isEliminated[0] == true && isEliminated[1] == false) {
        btmMsg = names[1] + ', shantay you stay. ' + names[0] + ', sashay away.';
      }
      if (isEliminated[0] == false && isEliminated[1] == true) {
        btmMsg = names[0] + ', shantay you stay. ' + names[1] + ', sashay away.';
      }
    };

    let lipsyncTitle = '', lipsyncArtist = '';
    if (lipsyncs[episodeNumber - 2] && lipsyncs[episodeNumber - 2]['lipsync'].season == 9) {
      lipsyncTitle = lipsyncs[episodeNumber - 2]['lipsync'].title;
      lipsyncArtist = lipsyncs[episodeNumber - 2]['lipsync'].artist;
    }
    else if (lipsyncs[episodeNumber - 1] && lipsyncs[episodeNumber - 1]['lipsync'].season != 9) {
      lipsyncTitle = lipsyncs[episodeNumber - 1]['lipsync'].title;
      lipsyncArtist = lipsyncs[episodeNumber - 1]['lipsync'].artist;
    }
    else if (episodeNumber == 1 && lipsyncs[episodeNumber]['lipsync'].season == 3) { // temp fix for season 3
      lipsyncTitle = lipsyncs[episodeNumber - 1]['lipsync'].title;
      lipsyncArtist = lipsyncs[episodeNumber - 1]['lipsync'].artist;
    }
    else if (lipsyncs[episodeNumber - 2] && lipsyncs[episodeNumber - 2]['lipsync'].season === 3) {
      lipsyncTitle = lipsyncs[episodeNumber - 1]['lipsync'].title;
      lipsyncArtist = lipsyncs[episodeNumber - 1]['lipsync'].artist;
    }

    switch (event) {
      case 'announceSafe':
        return names.length === 1 ? `${names[0]} is declared safe.` : `${others.join(', ')}, and ${last} are declared safe.`;
      case 'winner': {
        const placementsForEpisode = queens.map((q) =>
          q.placements.find((p: Placement) => Number(p.episodeNumber) === Number(episodeNumber))
        );
        const top2Queen = placementsForEpisode.find((p) => p?.placement === 'top2');
        if (episode?.title.toLowerCase().includes("finale")) { // Finale special case
          return names.length === 1
            ? `${names[0]} is crowned the WINNER of the season! `
            : `${others.join(', ')}, and ${last} are crowned co-winners of the season!`;
        }
        // Normal weekly challenge
        if (top2Queen) {
          const winnerName = queens.find((q) =>
            q.placements.some((p: Placement) => Number(p.episodeNumber) === Number(episodeNumber) && p.placement === 'win')
          )?.name;
          const runnerUpName = queens.find((q) =>
            q.placements.some((p: Placement) => Number(p.episodeNumber) === Number(episodeNumber) && p.placement === 'top2')
          )?.name;
          if (winnerName && runnerUpName) {
            return `${winnerName} wins the lipsync for the win, while ${runnerUpName} earns a Top 2 placement.`;
          }
        }
        return names.length === 1
          ? `${names[0]} is declared the winner of this week's Maxi Challenge!`
          : `${others.join(', ')}, and ${last} are declared winners!`;
      }
      case 'high':
        return names.length === 1 ? `${names[0]} has placed high.` : `${others.join(', ')}, and ${last} have placed high.`;
      case 'top2':
        return names.length === 1
          ? `${names[0]} earns a Top 2 placement and will lipsync for the win.`
          : `${others.join(', ')}, and ${last} earn Top 2 placements and will lipsync for the win.`;
      case 'bottom':
        return names.length === 1 ? `${names[0]} has placed low.` : `${others.join(', ')}, and ${last} have placed low.`;
      case 'bottom2':
        return names.length === 1 ? `${names[0]} is up for elimination. ${(lipsyncTitle && lipsyncArtist) && "They will now have to lipsync to " + lipsyncTitle + " by " + lipsyncArtist + ". Good luck and don't fuck it up!"}`
          : `${others.join(', ')} and ${last} are up for elimination. ${(lipsyncTitle && lipsyncArtist) ? ("They will now have to lipsync to " + lipsyncTitle + " by " + lipsyncArtist + ". Good luck and don't fuck it up!") : ''}`;
      case 'eliminated':
        if (isNonElim) return 'Both queens have been given a chance to slay another day!';
        return names.length === 1 ? `${names[0]} sashayed away.` : btmMsg;
      default:
        return '';
    }

  };

  const eventMessage = selectedEpisode && episodeEvent
    ? generateEventMessage(queensToDisplay, episodeEvent, selectedEpisode)
    : '';

  let queensForCardList = [...queensToDisplay].sort((a, b) => a.name.localeCompare(b.name));

  if (seasonMode === "sp" && selectedEpisode) {
    if (selectedEpisode === 1) {
      queensForCardList = queensToDisplay.filter(q => q.group === 1);
      queensForCardList.sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectedEpisode === 2) {
      queensForCardList = queensToDisplay.filter(q => q.group === 2);
      queensForCardList.sort((a, b) => a.name.localeCompare(b.name));
    }
  }

  return (
    <div className="flex justify-center gap-2 pt-2">
      <div className="w-1/4 p-4">
        <EpisodeList
          episodes={episodes}
          onEpisodeClick={handleEpisodeClick}
          onEpisodeEventClick={handleEpisodeEventClick}
          episodeHistory={episodeHistory}
          initialTrackRecord={initialTrackRecord}
        />
      </div>
      <div className="w-3/4 pt-2">
        {episodeEvent ? (
          <>
            <EpisodeMessage
              episodeEvent={episodeEvent}
              eventMessage={eventMessage}
            />
            <CardList
              queens={queensForCardList}
              lipsyncs={lipsyncs}
              episodeType={episodes.find(e => e.episodeNumber === selectedEpisode)?.type}
              viewMode={episodeEvent}
              nonElimination={episodes.find(e => e.episodeNumber === selectedEpisode)?.nonElimination || false}
              showResults={showResults}
              episodes={episodes}
            />
          </>
        ) : (
          <>
            {selectedEpisode ? (
              // existing episode preview box
              <div className="e-title-msg">
                <h2 className="e-title-h2">
                  {episodes.find(e => e.episodeNumber === selectedEpisode)?.title}
                </h2>
                <p className="e-title-descr">
                  {episodes.find(e => e.episodeNumber === selectedEpisode)?.description}
                </p>
              </div>
            ) : (
              // initial message
              <div className="e-title-msg">
                <h2 className="e-title-h2"> Mama, the race is on! </h2>
                <p className="e-title-descr">  Who will snatch the crown? Click on any episode to follow their journey!</p>
              </div>
            )}

            <CardList queens={queensForCardList} episodes={episodes} lipsyncs={lipsyncs} />
          </>
        )}
      </div>
    </div>
  );
};

export default SimLayout;
