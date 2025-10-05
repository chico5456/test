/* eslint-disable @typescript-eslint/no-explicit-any */

import { clsx, type ClassValue } from "clsx"
import { stat } from "fs";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const episodeTypeToStats: Record<string, (keyof any)[]> = {
  acting: ["Acting", "Comedy"],
  branding: ["Acting", "Comedy"],
  commercial: ["Acting", "Comedy"],
  comedy: ["Comedy", "Acting"],
  design: ["Design", "Runway"],
  dancing: ["Dance"],
  singing: ["Singing", "Dance"],
  improv: ["Comedy", "Acting"],
  roast: ["Comedy"],
  parody: ["Comedy", "Acting"],
  makeover: ["Design", "Runway"],
  musical: ["Acting", "Singing", "Dance", "Comedy"],
  "non elim": ["Acting", "Comedy", "Dance", "Design", "Singing", "Runway"],
  nonelim: ["Acting", "Comedy", "Dance", "Design", "Singing", "Runway"],
  default: ["Acting", "Comedy", "Dance", "Design", "Singing", "Runway"],
};

export function mainChallenge(
  trackRecord: any[],
  episodeNumber: string | number,
  nonElimination: boolean = false,
  episodeType: string,
  seasonStyle: string
) {
  //const episodeNum = Number(episodeNumber);

  const isFinale = episodeType.toLowerCase().includes("finale");

  if (isFinale) {
    const activeQueens = trackRecord.filter(q => !q.isEliminated); // Only active queens
    const maxWins = Math.max(...activeQueens.map(q => q.wins)); // Max wins among active

    const finalists = activeQueens
      .map((q) => (q.wins === maxWins ? trackRecord.indexOf(q) : -1))
      .filter(idx => idx !== -1);

    const winnerIndex = finalists[Math.floor(Math.random() * finalists.length)]; // Random winner

    return trackRecord.map((q, idx) => {
      //console.log(q);
      if (q.isEliminated) return q; // do nothing
      return {
        ...q,
        placements: [
          ...q.placements,
          {
            episodeNumber,
            placement: idx === winnerIndex ? "win" : "finale", // Only update active queens
          },
        ],
      };
    });
  }

  // --- Normal episode logic ---
  //const tempScores: { id: string; queen: string; episodeNumber: string | number; score: number }[] = [];
  const tempScores: {
    id: string;
    queen: string;
    episodeNumber: string | number;
    baseStat: number;
    score: number;
    randomFactor: number;
    bias: number;
    statIncrease: number;
    relevantStatsLen: number;
    wins: number;
    highs: number;
    lows: number;
    bottoms: number;
  }[] = [];

  const normalizedTypes = episodeType
    .toLowerCase()
    .split(",")
    .map((t) => t.trim());

  const isSplitPremiereNonElim = normalizedTypes.includes("non elim") || normalizedTypes.includes("nonelim");
  if (isSplitPremiereNonElim) {
    nonElimination = true;
  }

  const scoredRecord = trackRecord.map(q => {
    if (q.isEliminated) return { ...q };

    //const tempScore = Math.floor(Math.random() * 100) + 1;
    const { baseStat, finalScore, randomFactor, bias, statIncrease, relevantStats } = getEpisodeScore(q, episodeType, Number(episodeNumber));

    tempScores.push({
      id: q.id,
      queen: q.name,
      episodeNumber,
      baseStat: baseStat,
      score: finalScore,
      randomFactor,
      bias,
      statIncrease: statIncrease,
      relevantStatsLen: relevantStats.length,
      wins: q.wins,
      highs: q.highs,
      lows: q.lows,
      bottoms: q.bottoms
    });
    //tempScores.push({ id: q.id, queen: q.name, episodeNumber, score: tempScore });

    return {
      ...q,
      scores: [...q.scores, {
        episodeNumber,
        score: finalScore,
        baseStat: baseStat,
        statIncrease: statIncrease,
        relevantStatsLen: relevantStats.length,
        bias: bias,
        wins: q.wins,
        highs: q.highs,
        lows: q.lows,
        bottoms: q.bottoms
      }]
    };
  });

  tempScores.sort((a, b) => b.score - a.score);

  const [topCount, bottomCount] = nittyGritty({ size: tempScores.length });

  const topQueens = isSplitPremiereNonElim
    ? tempScores.slice(0, Math.min(2, tempScores.length))
    : tempScores.slice(0, topCount);

  const highQueens = isSplitPremiereNonElim
    ? tempScores.slice(2, Math.min(4, tempScores.length))
    : topQueens.slice(1);

  const bottomQueens = isSplitPremiereNonElim
    ? []
    : tempScores.slice(-bottomCount);

  const lipSyncQueens = isSplitPremiereNonElim
    ? []
    : bottomCount > 2
      ? bottomQueens.slice(1)
      : bottomQueens;

  const lowQueenId = !isSplitPremiereNonElim && bottomCount > 2 ? bottomQueens[0]?.id ?? null : null;
  const winnerId = topQueens[0]?.id ?? null;
  const top2Id = isSplitPremiereNonElim ? topQueens[1]?.id ?? null : null;
  const highQueenIds = new Set(highQueens.map((q) => q.id));
  const bottomQueenIds = new Set(lipSyncQueens.map((q) => q.id));

  let eliminatedId = null;
  if (!nonElimination) {
    eliminatedId = lipsync(lipSyncQueens);
  }
  //const = nonElimination ? null : lipsync(bottomQueens.slice(1));

  /*
  if (topCount == 2 && bottomCount == 2) {
    console.log(JSON.stringify(tempScores) + '\n' + nittyGritty({ size: tempScores.length }));
    console.log('top: ' + JSON.stringify(topQueens));
    console.log('bottom ' + JSON.stringify(bottomQueens));
  } */

  const updatedRecord = scoredRecord.map(q => {
    if (q.isEliminated) return { ...q };

    if (winnerId === q.id) {
      return {
        ...q,
        wins: q.wins + 1,
        placements: [...q.placements, { episodeNumber, placement: 'win' }]
      };
    }

    if (top2Id === q.id) {
      return {
        ...q,
        top2s: (q.top2s ?? 0) + 1,
        placements: [...q.placements, { episodeNumber, placement: 'top2' }]
      };
    }

    if (highQueenIds.has(q.id)) {
      return {
        ...q,
        highs: q.highs + 1,
        placements: [...q.placements, { episodeNumber, placement: 'high' }]
      };
    }

    if (lowQueenId && lowQueenId === q.id) {
      return {
        ...q,
        lows: q.lows + 1,
        placements: [...q.placements, { episodeNumber, placement: 'low' }]
      };
    }

    if (bottomQueenIds.has(q.id)) {
      const isEliminated = q.id === eliminatedId;
      return {
        ...q,
        bottoms: q.bottoms + 1,
        isEliminated,
        placements: [...q.placements, { episodeNumber, placement: 'bottom' }]
      };
    }

    return {
      ...q,
      placements: [...q.placements, { episodeNumber, placement: 'safe' }]
    };
  });

  return updatedRecord;
}

function nittyGritty({ size }: { size: number }) {
  // Explicit rules for 4 queens left
  if (size === 4) {
    // Return topCount = 2 (winner + high), bottomCount = 2
    return [2, 2];
  }

  const placementReserve: Record<number, [number, number]> = {
    5: [2, 3],
    6: [3, 3],
    7: [4, 3]
  };

  if (placementReserve[size]) return placementReserve[size];
  return [3, 3]; // default
}

function lipsync(bottomQueens: { id: string; queen: string; wins: number; highs: number; lows: number; bottoms: number }[]) {

  const bottomResults = [];

  for (let b = 0; b < bottomQueens.length; b++) {

    bottomResults.push({
      bottomId: bottomQueens[b].id,
      name: bottomQueens[b].queen,
      result: (Math.floor(Math.random() * 10) + 1)
        + (1 * bottomQueens[b].wins)
        + (.5 * bottomQueens[b].highs)
        - (.6 * bottomQueens[b].lows)
        - (2 * bottomQueens[b].bottoms),
    })
  }

  //console.log(bottomResults);
  // Handle empty array case
  if (bottomResults.length === 0) {
    return null;
  }

  let lowestScore = Infinity;
  let lowestId = null;

  // Loop through each queen to find the one with the lowest score
  for (const q of bottomResults) {
    if (q.result < lowestScore) {
      lowestScore = q.result;
      lowestId = q.bottomId;
    }
  }
  return lowestId;

  //const eliminatedQueen = bottomQueens[Math.floor(Math.random() * bottomQueens.length)];
  //return eliminatedQueen.id; // return ID instead of object
}

function getQueenBiasFromStats(queen: any): number {
  let bias = 0;

  bias += queen.wins * 8;
  bias += queen.highs * 5;
  bias -= queen.bottoms * 12;
  bias -= queen.lows * 8;

  return bias;
}

function getEpisodeScore(queen: any, episodeType: string, episodeNumber: number) {
  const typeKeys = episodeType
    .toLowerCase()
    .split(",")
    .map((key) => key.trim());
  let relevantStats: string[] = [];

  typeKeys.forEach(key => {
    if (episodeTypeToStats[key]) {
      relevantStats = [...relevantStats, ...episodeTypeToStats[key] as string[]];
    }
  });

  relevantStats = [...new Set(relevantStats)]; // Remove duplicates
  if (relevantStats.length === 0) {
    console.log(episodeType);
    relevantStats = episodeTypeToStats["default"] as string[];
  }

  const baseStat = Math.floor(Math.random() * 100) + 1;
  let statIncrease = 0;
  for (const r in relevantStats) {
    //console.log('episode ' + episodeNumber + ': ' + queen.name +  ' ' + queen.stats[relevantStats[r]] +  ' ' + relevantStats.length);
    statIncrease += queen.stats[relevantStats[r]];
  }

  statIncrease = statIncrease / relevantStats.length;


  //console.log(queen.name + ' ' + baseStat + ' ' + finalScore);
  //relevantStats.reduce((sum, stat) => sum + (queen.stats[stat] || 50), 0) / relevantStats.length;

  const randomFactor = Math.floor(Math.random() * 20) - 10;
  const bias = getQueenBiasFromStats(queen);

  const finalScore = (baseStat + statIncrease);
  //const finalScore = Math.min(100, Math.max(1, baseStat + randomFactor + bias));

  return {
    baseStat,
    finalScore,
    randomFactor,
    bias,
    statIncrease,
    relevantStats
  };
}

