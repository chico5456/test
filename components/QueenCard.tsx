/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import * as Flags from 'country-flag-icons/react/3x2';
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type QueenStats = {

  Acting: number;
  Dance: number;
  Comedy: number;
  Design: number;
  Runway: number;
  Singing: number;
};

type Queen = {
  id: string;
  name: string;
  url: string;
  urls?: string[];
  urlObj?: string[];
  franchise?: string;
  seasons?: string;
  wins?: number;
  highs?: number;
  lows?: number;
  bottoms?: number;
  top2s?: number;
  isEliminated?: boolean;
  stats?: QueenStats;
};

const QueenCard = ({ q,
  maxWins,
  viewMode,
  isWinner,
  isBuildCast,
  onRemove,
  onUpdateStats,
}:
  {
    q: Queen,
    maxWins?: number,
    viewMode?: string,
    isWinner?: boolean,
    isBuildCast?: boolean,
    onRemove?: (id: string) => void;
    onUpdateStats?: (id: string, updatedStats: Partial<QueenStats>) => void;
  }
) => {

  const isTopWinner = (maxWins != null) ? q.wins === maxWins && maxWins > 0 : false;
  const isMainScreen = viewMode != null && viewMode != 'eliminated';

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (q.urls && q.urls.length > 0)
      setCurrentIndex((prev) =>
        prev === 0 && q.urls ? q.urls.length - 1 : prev - 1
      );


  };

  const handleNext = () => {
    if (q.urls && q.urls.length > 0)
      setCurrentIndex((prev) =>
        q.urls && prev === q.urls.length - 1 ? 0 : prev + 1
      );
  };

  return (
    <Card
      className={`relative flex flex-col justify-between rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1
    ${q.isEliminated && !isMainScreen ? 'border-2 border-red-400 bg-red-50' : 'border border-gray-200'}
    ${q.isEliminated && !isMainScreen ? 'opacity-40 grayscale' : ''}
    w-56 min-h-80`}
    >
      {isBuildCast && (
        <button
          onClick={() => onRemove?.(q.id)}
          className="absolute top-2 right-2 p-1 rounded-full bg-gray-200 hover:bg-red-500 hover:text-white transition"
        >
          <X size={16} />
        </button>
      )}
      <CardHeader>
        <CardTitle
          className={`text-center text-lg font-semibold tracking-tight
      ${isTopWinner ? "text-yellow-600 drop-shadow-sm" : "text-gray-900"}`}
        >
          {q.name}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col items-center justify-start space-y-3">
        <div className="relative w-26 h-26 flex items-center justify-center group">
          <Image
            src={q.urls ? q.urls[currentIndex] : q.url}
            alt={q.name}
            fill
            className={`rounded-full border-2 border-purple-300 ${(q.isEliminated && !isMainScreen) ? "grayscale" : ""}`}
          />
          {q.urls && q.urls.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-0 bg-white rounded-full shadow p-1 hover:bg-purple-100 
                   opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-0 bg-white rounded-full shadow p-1 hover:bg-purple-100 
                   opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronRight size={16} />
              </button>
            </>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2 text-sm text-gray-700 text-center">
          {q.wins != null && (<p>Wins: {q.wins}</p>)}
          {q.top2s != null && (<p>Top 2: {q.top2s}</p>)}
          {q.highs != null && (<p>Highs: {q.highs}</p>)}
          {q.lows != null && (<p>Lows: {q.lows}</p>)}
          {q.bottoms != null && (<p>Bottoms: {q.bottoms}</p>)}
        </div>

        {isBuildCast && (
          <div className="mt-3 grid grid-cols-1 gap-2 text-sm text-gray-700 text-center">
            <p className="flex items-center justify-center gap-2">
              Country:{" "}
              {(() => {
                const Flag = Flags[q.franchise as keyof typeof Flags];
                return Flag ? (
                  <Flag className="w-6 h-4 rounded-sm shadow-sm" />
                ) : null;
              })()}
            </p>
            <p>Original Season(s): {q.seasons}</p>
          </div>
        )}

        {!isBuildCast ? (
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-[13rem] self-center"
          >
            <AccordionItem value="stats">
              <AccordionTrigger className="text-sm font-medium hover:text-purple-900">Stats</AccordionTrigger>
              <AccordionContent className="pt-2 text-sm text-gray-700">
                {q.stats ? (
                  <div className="grid grid-cols-3 gap-2 justify-items-center w-full">
                    {Object.entries(q.stats).map(([statName, statValue]) => {
                      const radius = 20;
                      const circumference = 2 * Math.PI * radius;
                      const offset = circumference - (statValue / 100) * circumference;
                      return (
                        <div key={statName} className="flex flex-col items-center">
                          <svg width="50" height="50" className="transform -rotate-90">
                            <circle cx="25" cy="25" r={radius} stroke="#e5e7eb" strokeWidth="4" fill="transparent" />
                            <circle
                              cx="25" cy="25"
                              r={radius}
                              stroke="#6b21a8"
                              strokeWidth="4"
                              fill="transparent"
                              strokeDasharray={circumference}
                              strokeDashoffset={offset}
                              strokeLinecap="round"
                              className="transition-all duration-500"
                            />
                          </svg>
                          <span className="text-xs font-medium mt-1 capitalize">{statName}</span>
                          <span className="text-xs text-gray-600">{statValue}</span>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-xs text-gray-500">No stats available</p>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ) : (
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-[13rem] self-center"
          >
            <AccordionItem value="stats">
              <AccordionTrigger className="text-sm font-medium hover:text-purple-900">Edit Stats</AccordionTrigger>
              <AccordionContent className="pt-2 text-sm text-gray-800">
                {q.stats ? (
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(q.stats).map(([statName, statValue]) => (
                      <label
                        key={statName}
                        className="flex flex-col gap-2 text-sm font-medium text-gray-700"
                      >
                        <span className="capitalize">{statName}</span>
                        <input
                          type="number"
                          min={1}
                          max={100}
                          step={1}
                          value={statValue as number}
                          onChange={(e) => {
                            let val = Number(e.target.value);
                            if (val < 1) val = 1;
                            if (val > 100) val = 100;
                            onUpdateStats?.(q.id, { [statName]: val });
                          }}
                          className="rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm 
                     focus:border-purple-500 focus:ring-2 focus:ring-purple-300
                     transition-colors"
                        />
                      </label>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500 italic">No stats available</p>
                )}

              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}

        {(q.isEliminated && !isMainScreen) ? (
          <span className="mt-2 px-2 py-1 bg-red-500 text-white text-xs rounded-full self-center animate-pulse">
            Eliminated
          </span>
        ) : ''}
      </CardContent>
    </Card>


  );
};

export default QueenCard;
