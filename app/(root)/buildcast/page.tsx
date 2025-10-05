/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useEffect } from "react";
import Search from "@/components/Search";
import { queens, episodes, seasons, lipsyncs } from "@/constants/queenData";
import type { Queen, QueenStats } from "@/constants/queenData";
import QueenCard from "@/components/QueenCard";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { X, GripVertical } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown, faPlay, faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { Info } from "lucide-react";
import { Separator } from "@/components/ui/separator"

import {
  DndContext,
  closestCenter,
  DragEndEvent
} from "@dnd-kit/core";

import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { CSS } from "@dnd-kit/utilities";
import Image from "next/image";

type BuildCastQueen = Queen & { stats: QueenStats };
type QueenStats = {
  Acting: number;
  Dance: number;
  Comedy: number;
  Design: number;
  Runway: number;
  Singing: number;
};

type BuildCastQueen = (typeof queens)[number] & { stats: QueenStats };

const Page = () => {
  const [queenCards, setQueenCards] = useState<BuildCastQueen[]>([]);
  const [episodeCards, setEpisodeCards] = useState<typeof episodes>([]);
  const [activeTab, setActiveTab] = useState("general");
  const [minEps, setMinEps] = useState(0);
  const [reqQueensMet, setReqQueensMet] = useState(false);
  const [reqEpsMet, setReqEpsMet] = useState(false);
  const [finaleSet, setFinaleSet] = useState(false);
  const [minNonElimEps, setMinNonElimEps] = useState('0');
  const [minFinalists, setMinFinalists] = useState('3');
  const [seasonStyle, setSeasonStyle] = useState("osf");
  const [seasonMode, setSeasonMode] = useState('');
  const [isLoading, setIsLoading] = useState(true); // fix loading issues with the big red Xs
  const router = useRouter();

  const generateRandomStats = (): QueenStats => ({
    Acting: Math.floor(Math.random() * 101),
    Dance: Math.floor(Math.random() * 101),
    Comedy: Math.floor(Math.random() * 101),
    Design: Math.floor(Math.random() * 101),
    Runway: Math.floor(Math.random() * 101),
    Singing: Math.floor(Math.random() * 101),
  });

  const handleSaveToLocalStorage = () => {
    localStorage.setItem("selectedQueens", JSON.stringify(queenCards));
    localStorage.setItem("selectedEpisodes", JSON.stringify(episodeCards));
    localStorage.setItem("minNonElimEps", minNonElimEps);
    localStorage.setItem("seasonStyle", seasonStyle);
    localStorage.setItem("seasonMode", seasonMode);

    const savedLipsyncs = [];
    for (const e in episodeCards) {
      const eNum = episodeCards[e].franchise.toLowerCase() + episodeCards[e].season + 'e' + Number(episodeCards[e].episodeNumber);
      console.log(eNum);
      for (const l in lipsyncs) {
        if (lipsyncs[l].episode === eNum) {
          savedLipsyncs.push({
            episodeNumber: episodeCards[e].episodeNumber,
            lipsync: lipsyncs[l]
          })
        }
      }
    }
    localStorage.setItem('savedLipsyncs', JSON.stringify(savedLipsyncs));
    router.push("/sim");
  };

  const handleRemoveQueen = (id: string) => {
    setQueenCards((prev) => prev.filter((queen) => queen.id !== id));
    setMinEps(minEps - 1);
  };

  const handleRemoveEpisode = (id: string) => {
    setEpisodeCards((prev) => prev.filter((episode) => episode.id !== id));
  };

  //------------- effects and validation ----------------------------

  useEffect(() => { // load existing queens and episodes config

    const savedQueens = localStorage.getItem("selectedQueens");
    const savedEpisodes = localStorage.getItem("selectedEpisodes");
    const savedNonElim = localStorage.getItem("minNonElimEps");
    const savedMode = localStorage.getItem("seasonMode");

    if (savedNonElim !== null) {
      setMinNonElimEps(savedNonElim);
    }

    if (savedMode !== null) {
      setSeasonMode(savedMode);
    }

    let parsedQueens: Queen[] = [];
    let parsedQueens: Array<(typeof queens)[number]> = [];
    let parsedEps: any[] = [];

    if (savedQueens) {
      parsedQueens = JSON.parse(savedQueens);
      parsedQueens.sort((a, b) => a.name.localeCompare(b.name));
      const hydratedQueens = parsedQueens.map<BuildCastQueen>((queen) => ({
      const hydratedQueens: BuildCastQueen[] = parsedQueens.map((queen) => ({
        ...queen,
        stats: queen.stats ?? generateRandomStats(),
      }));
      setQueenCards(hydratedQueens);
    }

    if (savedEpisodes) {
      parsedEps = JSON.parse(savedEpisodes);
      setEpisodeCards(parsedEps);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => { // validate requirements

    const minReqEps = queenCards.length - 2 + Number(minNonElimEps) - (Number(minFinalists) - 3);
    const requiredEps = queenCards.length > 0 && (queenCards.length - 2 + Number(minNonElimEps) > 2) && minReqEps > 2
      ? minReqEps
      : 2;

    setMinEps(requiredEps);
    setReqQueensMet(queenCards.length >= 4 && queenCards.length >= Number(minFinalists) + 1);
    setReqEpsMet(episodeCards.length === requiredEps);

    if (episodeCards.length > 0) {
      const lastEp = episodeCards[episodeCards.length - 1];
      setFinaleSet(lastEp.type?.toLowerCase().includes("finale"));
    } else {
      setFinaleSet(false);
    }

  }, [queenCards, episodeCards, minNonElimEps, minFinalists]);

  useEffect(() => { // handle resetting double shantays to default value
    if (minEps === 2 && (minNonElimEps === "1" || minNonElimEps === "2"))
      setMinNonElimEps("0");
  }, [minEps, minNonElimEps]);

  useEffect(() => {
    if (seasonStyle === "lsftc") {
      setMinFinalists("4");
    }
  }, [seasonStyle]);

  //-------------------------------------------------------------------

  function SortableEpisode({
    episode,
    index,
    onRemove,
  }: {
    episode: any;
    index: number;
    onRemove: (id: string) => void;
  }) {
    const { attributes, listeners, setNodeRef, transform, transition } =
      useSortable({ id: episode.id });

    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
    };

    return (
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        className="flex justify-between items-center p-6 border rounded-lg shadow-sm bg-white hover:shadow-md transition "
      >
        <div className="flex items-start gap-3">
          <div {...listeners} className="cursor-grab text-gray-400 hover:text-gray-600">
            <GripVertical className="w-5 h-5" />
          </div>

          <div>
            <p className="font-medium text-gray-800">
              <span className="text-purple-500 font-bold mr-2">
                Episode {index + 1}:
              </span>
              {episode.type.includes("finale") ? <FontAwesomeIcon icon={faCrown} /> : ''}{episode.type.includes("premiere") ? <FontAwesomeIcon icon={faPlay} /> : ''}{episode.title}
            </p>
            <p className="text-sm text-gray-600">Original Season: {episode.season}</p>
            <p className="text-sm text-gray-600">Description: {episode.description}</p>
            <p className="text-sm text-gray-600">Type: {episode.type}</p>
          </div>
        </div>

        <button
          onClick={() => onRemove(episode.id)}
          className="p-1 rounded-full hover:bg-red-100 transition"
        >
          <X className="w-5 h-5 text-red-500" />
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="flex">
        <div className="flex-1 p-6">

          {/* main tabs (general configuration, queens, episodes) */}
          <Tabs
            defaultValue="general"
            value={activeTab}
            onValueChange={(val) => setActiveTab(val)}
            className="w-full pt-8 bg-gradient-to-b from-violet-50 to-white"
          >
            <TabsList className="tabs-list">
              <TabsTrigger value="general" className="tabs-trigger" > General Configuration </TabsTrigger>
              <TabsTrigger value="queens" className="tabs-trigger" > Queens </TabsTrigger>
              <TabsTrigger value="episodes" className="tabs-trigger" > Episodes </TabsTrigger>
            </TabsList>

            {/* General Tab */}
            <TabsContent value="general">
              <div className="p-6 flex flex-col min-h-screen items-center relative">

                {/* general message and instructions */}
                <div className="p-2 mb-3 flex flex-col items-center justify-center">
                  <div className="flex items-center gap-2 general-msg">
                    <h2 className="font-extrabold text-2xl text-black tracking-wide">
                      General Configurations and Rules:
                    </h2>
                    <p className="mt-2 text-sm font-medium text-purple-800">Configure what set of rules are in place for the season! This will change the rules and requirements to start the simulation:</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-col space-y-2 w-[300px] relative">
                  {/* season style */}
                  <div className="flex flex-col space-y-2 w-[300px] pb-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-800">Select season style:</span>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button
                            type="button"
                            className="p-1 rounded-full text-gray-400 hover:text-gray-600 focus:outline-none"
                          >
                            <Info className="w-4 h-4" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs text-sm">
                          <p>
                            <strong>Classic Finale:</strong> The finalists are judged on their overall
                            performance throughout the season, and the winner is chosen based off track record.
                          </p>
                          <p className="mt-2">
                            <strong>Lipsync for the Crown:</strong> The finalists compete in a lipsync smackdown,
                            and the winner is determined by their performance in a final Lipsync for the Crown.
                          </p>
                          <br /><Separator />
                          {/*
                          <p className="mt-2">
                            <strong>Classic All-Stars:</strong> The all-stars are judged on their overall
                            performance throughout the season, and the winner is chosen based off track record.
                          </p>
                          */}
                          <p className="mt-2">
                            <strong>Top Two & Lipsticks:</strong> In each episode, the top two All-Stars
                            will Lipsync for their Legacy. The winner earns the power to eliminate one of the bottom queens.
                          </p>
                          <p className="mt-2">
                            <strong>Lipsync Assassins:</strong> The top All-Star faces off against a
                            secret Lipsync Assassin. If the top All-Star wins, they choose a queen to
                            eliminate. If the Lipsync Assassin wins, the group vote decides who goes home. If the vote is a tie,
                            the decision will go back to the top All-Star.
                          </p>
                          <br />
                        </TooltipContent>
                      </Tooltip>
                    </div>

                    {/* Select dropdown */}
                    <Select value={seasonStyle} onValueChange={setSeasonStyle}>
                      <SelectTrigger id="seasonStyle" className="gen-config-select">
                        <SelectValue placeholder="Select a series type:" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Regular</SelectLabel>
                          <SelectItem value="osf">Classic Finale</SelectItem>
                          <SelectItem disabled value="lsftc">Lipsync for the Crown (coming soon!)</SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                          <SelectLabel>All-Stars</SelectLabel>
                          {/*<SelectItem value="osas" disabled>Classic All-Stars (coming soon!)</SelectItem>*/}
                          <SelectItem value="ttwalas" disabled>Top-Two and Lipsticks (coming soon!)</SelectItem>
                          <SelectItem value="laas" disabled>Lipsync Assassins (coming soon!)</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>

                  </div>

                  {/* season mode */}
                  <div className="flex flex-col space-y-2 w-[300px] pb-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-800">Select season mode:</span>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button
                            type="button"
                            className="p-1 rounded-full text-gray-400 hover:text-gray-600 focus:outline-none"
                          >
                            <Info className="w-4 h-4" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs text-sm">
                          <p>
                            <strong>Classic Season:</strong> The queens will enter the competition all at once
                            and will be eliminated each week.
                          </p>
                          <p>
                            <strong>Split Premiere:</strong> The queens will be divided into two groups and be judged
                            before making a merge.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </div>

                    {/* Select dropdown */}
                    <Select
                      value={seasonMode}
                      onValueChange={(value) => setSeasonMode(value)}
                    >
                      <SelectTrigger id="seasonMode" className="gen-config-select">
                        <SelectValue placeholder="Select a series type:" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="csp"> Classic Season </SelectItem>
                        <SelectItem value="sp"> Split Premiere </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* number of finalists */}
                  {seasonStyle !== "lsftc" && (<div className="flex flex-col space-y-2 w-[300px] pb-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-800">Number of finalists:</span>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button
                            type="button"
                            className="p-1 rounded-full text-gray-400 hover:text-gray-600 focus:outline-none"
                          >
                            <Info className="w-4 h-4" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs text-sm">
                          <p>
                            How many queens will be included in the finale?
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </div>

                    {/* Select dropdown */}
                    <Select value={minFinalists} onValueChange={(value) => setMinFinalists(value)}>
                      <SelectTrigger id="numFinalists" className="gen-config-select">
                        <SelectValue placeholder="Select a number:" />
                      </SelectTrigger>
                      <SelectContent>

                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                        <SelectItem value="5">5</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>)}

                  {/* double shantays options */}
                  <div className="flex flex-col space-y-2 w-[300px] pb-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-800">Number of double shantays:</span>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button
                            type="button"
                            className="p-1 rounded-full text-gray-400 hover:text-gray-600 focus:outline-none"
                          >
                            <Info className="w-4 h-4" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs text-sm">
                          <p>
                            A double shantay means that in an episode, nobody goes home. All the queens in the bottom are safe to slay another day!
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </div>

                    {/* Select dropdown */}
                    <Select value={minNonElimEps} onValueChange={(value) => setMinNonElimEps(value)}>
                      <SelectTrigger id="numNonElim" className="gen-config-select">
                        <SelectValue placeholder="Select a number:" />
                      </SelectTrigger>
                      <SelectContent>

                        <SelectItem value="0">0</SelectItem>
                        <SelectItem value="1" disabled={minEps == 2}>1</SelectItem>
                        <SelectItem value="2" disabled={minEps == 2}>2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Image
                    src="/assets/graphics/heels.jpg"
                    alt="heels accent"
                    width={120}
                    height={120}
                    className="absolute -right-25 top-full mt-2 opacity-40 pointer-events-none"
                  />

                </div>
              </div>

            </TabsContent>

            {/* Queens Tab */}
            <TabsContent value="queens">
              <div className="p-6 flex flex-col min-h-screen">
                <div className="p-2 mb-3 flex flex-col items-center justify-center">
                  <div className="flex items-center gap-2 general-msg">
                    <h2 className="font-extrabold text-2xl text-black tracking-wide">
                      Queens
                    </h2>
                    <p className="mt-2 text-sm font-medium text-purple-800">Select the queens that you wish you wish to compete in this season!
                      <br /> You can also edit their stats by entering a number between 1-100 - the higher the stat the better! (or keep them randomly generated)</p>
                  </div>
                </div>

                <Search
                  entity={queens}
                  field="name"
                  type="queen"
                  onSelect={(queen: Queen) => {
                  onSelect={(queen: (typeof queens)[number]) => {
                    setQueenCards((prev) => {
                      if (prev.some((q) => q.id === queen.id)) return prev;
                      const stats: QueenStats = queen.stats ?? generateRandomStats();
                      const updatedQueen: BuildCastQueen = { ...queen, stats };
                      return [...prev, updatedQueen];
                    });
                  }}
                />

                <div className="mt-6 flex flex-wrap justify-center gap-4 ">
                  {queenCards.map((queen) => (
                    <QueenCard
                      key={queen.id}
                      q={queen}
                      isBuildCast={true}
                      onRemove={handleRemoveQueen}
                      onUpdateStats={(id, updatedStats) => {
                        setQueenCards((prev) =>
                          prev.map((q) => {
                            if (q.id !== id) {
                              return q;
                            }

                            const mergedStats: QueenStats = {
                              ...q.stats,
                              ...updatedStats,
                            };

                            return { ...q, stats: mergedStats };
                          })
                        );
                      }}
                    />
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Episodes Tab */}
            <TabsContent value="episodes">
              <div className="pb-6 pl-20 pr-20 flex flex-col min-h-screen">
                <div className="p-2 mb-3 flex flex-col items-center justify-center">
                  <div className="flex items-center gap-2 general-msg">
                    <h2 className="font-extrabold text-2xl text-black tracking-wide">
                      Episodes
                    </h2>
                    <p className="mt-2 text-sm font-medium text-purple-800">Select the episodes that you wish to feature! You can rearrange the episode order if needed:</p>
                  </div>
                </div>

                <Search
                  entity={episodes}
                  field="title"
                  type="episode"
                  onSelect={(episode) => {
                    setEpisodeCards((prev) =>
                      prev.some((e) => e.id === episode.id) ? prev : [...prev, episode]
                    );
                  }}
                />

                <p className="flex justify-center mt-4 mb-4 font-bold">
                  OR...import a season! (this will overwrite your current selections)
                </p>

                <Search
                  entity={seasons}
                  field="seasonNumber"
                  type="season"
                  onSelect={(season) => {
                    const seasonEpisodes = episodes.filter(
                      (ep) => ep.franchise + ep.season === season.franchise + season.seasonNumber
                    );
                    setEpisodeCards(seasonEpisodes);
                  }}
                /> {/*onSelect={(season) =>
                setEpisodeCards((prev) =>
                  prev.some((e) => e.id === episode.id) ? prev : [...prev, episode]
                )
              } */}

                <DndContext
                  collisionDetection={closestCenter}
                  onDragEnd={(event: DragEndEvent) => {
                    const { active, over } = event;
                    if (over && active.id !== over.id) {
                      setEpisodeCards((items) => {
                        const oldIndex = items.findIndex((i) => i.id === active.id);
                        const newIndex = items.findIndex((i) => i.id === over.id);
                        return arrayMove(items, oldIndex, newIndex);
                      });
                    }
                  }}
                >
                  <SortableContext
                    items={episodeCards.map((e) => e.id)}
                    strategy={verticalListSortingStrategy}
                  >
                    <div className="mt-6 flex flex-col gap-3">
                      {episodeCards.map((e, idx) => (
                        <SortableEpisode
                          key={e.id}
                          episode={e}
                          index={idx}
                          onRemove={handleRemoveEpisode}
                        />
                      ))}
                    </div>
                  </SortableContext>
                </DndContext>
              </div>
            </TabsContent>
          </Tabs>
        </div>


        {/* Validation and submit button */}

        {!isLoading && (
          <div className="w-full md:w-80 p-6 bg-white border border-gray-200 shadow-xl rounded-2xl relative md:sticky md:top-50 h-fit mr-8 hover:shadow-2xl transition-shadow">
            {/* Container for text and button */}
            <div className="flex flex-col gap-6 text-gray-700">

              {/* Intro / Instructions */}
              <p className="text-sm leading-relaxed text-center">
                To generate a brand-new simulation, you&apos;ll need to meet the minimum requirements below (These will adjust automatically as you add more queens and episodes!)
              </p>

              <hr className="border-gray-300" />

              <div className={`flex items-center gap-2 ${reqQueensMet ? 'text-green-700' : 'text-red-700'}`}>
                {reqQueensMet ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faX} />}
                <span className="font-medium">At least {Number(minFinalists) + 1} Queens</span>
              </div>

              <div className={`flex flex-col gap-1 ${reqEpsMet ? 'text-green-700' : 'text-red-700'}`}>
                <div className="flex items-center gap-2">
                  {reqEpsMet ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faX} />}

                  {/* Label with Tooltip */}
                  <span className="font-medium flex items-center gap-1">
                    Exactly {minEps} Episodes
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          type="button"
                          className="p-1 rounded-full text-gray-400 hover:text-gray-600 focus:outline-none"
                        >
                          <Info className="w-4 h-4" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs text-sm">
                        <p>
                          This number adjusts automatically to allow the season to flow with the number of queens you have selected,
                          number of finalists, and any double shantays you have selected.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </span>
                </div>
                <p className="text-sm text-gray-500 leading-snug">
                  To accommodate {queenCards.length < Number(minFinalists) + 1 ? (`a minimum of ${Number(minFinalists) + 1}`)
                    : `${queenCards.length}`} queens, {minFinalists} finalists, and {minNonElimEps} double shantay(s).
                </p>
              </div>


              <div className={`flex flex-col gap-1 ${finaleSet ? 'text-green-700' : 'text-red-700'}`}>
                <div className="flex items-center gap-2">
                  {finaleSet ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faX} />}
                  <span className="font-medium">Finale Episode {finaleSet ? "Set" : "Not Set"}</span>
                </div>
                <p className="text-sm text-gray-500 leading-snug">
                  Ensure the last episode is of type &quot;finale&quot;.
                </p>
              </div>

              <hr className="border-gray-200" />
              <Button
                onClick={handleSaveToLocalStorage}
                disabled={!(reqEpsMet && queenCards.length >= 4 && finaleSet)}
                className="mt-4 px-8 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg transition-all
      disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 hover:shadow-2xl"
              >
                Show me the results!
              </Button>
            </div>
          </div>
        )}
      </div>

    </>
  );
};

export default Page;
