"use client";
import React, { useRef } from "react";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown, faDownload } from "@fortawesome/free-solid-svg-icons";
import { toPng } from "html-to-image";

type Queen = {
  id: string;
  name: string;
  placements: { episodeNumber: number | string; placement: string }[];
  url: string;
  wins: number;
  top2s?: number;
  highs: number;
  lows: number;
  bottoms: number;
  isEliminated: boolean;
};

type SeasonTrackRecordTableProps = {
  queens: Queen[];
  episodes: { episodeNumber: number | string; title: string; id?: string }[];
  isMinified?: boolean;
};

const SeasonTrackRecordTable = ({
  queens,
  episodes,
  isMinified = false,
}: SeasonTrackRecordTableProps) => {
  const tableRef = useRef<HTMLDivElement>(null);

  const finaleEpNum = Math.max(
    ...episodes.map((ep) => Number(ep.episodeNumber))
  );

  const handleExport = async () => {
    if (!tableRef.current) return;

    const node = tableRef.current;
    const originalOverflow = node.style.overflow;
    const originalWidth = node.style.width;

    try {
      node.style.overflow = "visible";
      node.style.width = node.scrollWidth + "px";

      const dataUrl = await toPng(node, {
        cacheBust: true,
        pixelRatio: 2,
      });

      const link = document.createElement("a");
      link.download = "track-record.png";
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("Export failed:", error);
    } finally {
      node.style.overflow = originalOverflow;
      node.style.width = originalWidth;
    }
  };

  const getPlacement = (queen: Queen, episodeNumber: number | string) => {
    const p = queen.placements.find(
      (pl) => Number(pl.episodeNumber) === Number(episodeNumber)
    );
    const epNum = Number(episodeNumber);

    if (epNum === finaleEpNum) {
      if (!queen.isEliminated) {
        if (p?.placement === "win") return "WINNER";
        return "RUNNER-UP";
      }
    }

    if (!p) return " ";

    const lastPlacement = queen.placements.at(-1);
    if (
      queen.isEliminated &&
      lastPlacement &&
      Number(lastPlacement.episodeNumber) === epNum
    ) {
      return "OUT";
    }

    switch (p.placement) {
      case "win":
        return "WIN";
      case "high":
        return "HIGH";
      case "top2":
        return "TOP2";
      case "safe":
        return "SAFE";
      case "low":
        return "LOW";
      case "bottom":
        return "BTM2";
      case "eliminated":
        return "OUT";
      case "finale":
        return "WINNER";
      default:
        return p.placement;
    }
  };

  const sortedQueens = [...queens].sort((a, b) => {
    const aLast = a.placements.at(-1);
    const bLast = b.placements.at(-1);

    const aFinal =
      !a.isEliminated && Number(aLast?.episodeNumber) === finaleEpNum
        ? aLast?.placement
        : null;
    const bFinal =
      !b.isEliminated && Number(bLast?.episodeNumber) === finaleEpNum
        ? bLast?.placement
        : null;

    if (aFinal === "win") return -1;
    if (bFinal === "win") return 1;

    if (!a.isEliminated && aFinal !== "win") return -1;
    if (!b.isEliminated && bFinal !== "win") return 1;

    const aLastBottomEp =
      Math.max(
        ...a.placements
          .filter((p) => p.placement === "bottom")
          .map((p) => Number(p.episodeNumber))
      ) || 0;

    const bLastBottomEp =
      Math.max(
        ...b.placements
          .filter((p) => p.placement === "bottom")
          .map((p) => Number(p.episodeNumber))
      ) || 0;

    if (aLastBottomEp !== bLastBottomEp) return bLastBottomEp - aLastBottomEp;

    const aElimEp = a.isEliminated
      ? Number(aLast?.episodeNumber)
      : finaleEpNum;
    const bElimEp = b.isEliminated
      ? Number(bLast?.episodeNumber)
      : finaleEpNum;

    return bElimEp - aElimEp;
  });

  const maxWins = Math.max(...queens.map((q) => q.wins));
  const maxTop2s = Math.max(...queens.map((q) => q.top2s ?? 0));
  const maxHighs = Math.max(...queens.map((q) => q.highs));
  const maxLows = Math.max(...queens.map((q) => q.lows));
  const maxBottoms = Math.max(...queens.map((q) => q.bottoms));

  return (
    <div className="relative">
      <div
        ref={tableRef}
        className="p-6 mr-10 bg-white rounded-md shadow-lg border border-gray-200 w-full overflow-auto"
      >
        <Table>
          <TableCaption className="bg-purple-100 text-purple-900 font-semibold py-2 rounded-t-lg mb-2">Contestant Progress</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Queen</TableHead>
              {!isMinified && (
                <TableHead className="text-center">Picture</TableHead>
              )}
              {episodes.map((ep) => (
                <TableHead
                  key={ep.id || ep.episodeNumber}
                  className="text-center px-2 h-20 align-top"
                >
                  <div className="whitespace-normal break-words h-full flex flex-col justify-center">
                    <span className="font-bold block">
                      EP{ep.episodeNumber}
                      {!isMinified && ":"}
                    </span>
                    {!isMinified && (
                      <span className="text-sm font-normal mt-1">
                        {ep.title}
                      </span>
                    )}
                  </div>
                </TableHead>
              ))}
              <TableHead className="text-center">Wins</TableHead>
              <TableHead className="text-center">Top 2</TableHead>
              <TableHead className="text-center">Highs</TableHead>
              <TableHead className="text-center">Lows</TableHead>
              <TableHead className="text-center">Bottoms</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {sortedQueens.map((q) => {
              const elimPlacement = q.isEliminated ? q.placements.at(-1) : null;
              const elimEpNum = elimPlacement
                ? Number(elimPlacement.episodeNumber)
                : null;

              return (
                <TableRow key={q.id} className="border-t">
                  <TableCell className="font-medium">{q.name}</TableCell>

                  {!isMinified && (
                    <TableCell className="p-0 w-24 h-24">
                      <div className="relative w-full h-full aspect-square">
                        <Image
                          src={q.url || "/placeholder.png"}
                          alt={q.name}
                          fill
                          className="object-cover border-2"
                        />
                      </div>
                    </TableCell>
                  )}

                  {episodes.map((ep) => {
                    const placement = getPlacement(q, ep.episodeNumber);
                    const epNum = Number(ep.episodeNumber);

                    const isElimEp =
                      elimEpNum !== null && epNum === elimEpNum;
                    const isAfterElim =
                      elimEpNum !== null && epNum > elimEpNum;

                    return (
                      <TableCell
                        key={ep.id || ep.episodeNumber}
                        className={`text-center 
                          ${isElimEp ? "bg-red-400 font-bold text-black-700" : ""}
                          ${isAfterElim ? "text-gray-400 bg-gray-200 italic" : ""}
                          ${placement == ' ' ? "text-gray-400 bg-gray-200 italic" : ""}
                          ${placement === "HIGH" ? "bg-sky-300 text-black-200" : ""}
                          ${placement === "WIN" ? "bg-blue-400 text-black-200" : ""}
                          ${placement === "LOW" ? "bg-pink-200 text-black-200" : ""}
                          ${placement === "TOP2" ? "bg-purple-200 text-black-200" : ""}
                          ${placement === "BTM2" ? "bg-red-300 text-black-200" : ""}
                          ${placement === "WINNER" ? "sparkle-gold" : ""}
                          ${placement === "RUNNER-UP" ? "bg-green-200 text-black font-medium" : ""}
                        `}
                      >
                        {placement}
                      </TableCell>
                    );
                  })}

                  <TableCell
                    className={`text-center ${
                      q.wins === maxWins ? "ml-1 bg-yellow-200 font-bold" : ""
                    }`}
                  >
                    {q.wins}{" "}
                    {q.wins === maxWins && <FontAwesomeIcon icon={faCrown} />}
                  </TableCell>

                  <TableCell
                    className={`text-center ${
                      (q.top2s ?? 0) === maxTop2s && maxTop2s > 0
                        ? "ml-1 bg-yellow-200 font-bold"
                        : ""
                    }`}
                  >
                    {q.top2s ?? 0}{" "}
                    {(q.top2s ?? 0) === maxTop2s && maxTop2s > 0 && (
                      <FontAwesomeIcon icon={faCrown} />
                    )}
                  </TableCell>

                  <TableCell
                    className={`text-center ${
                      q.highs === maxHighs ? "ml-1 bg-yellow-200 font-bold" : ""
                    }`}
                  >
                    {q.highs}{" "}
                    {q.highs === maxHighs && <FontAwesomeIcon icon={faCrown} />}
                  </TableCell>

                  <TableCell
                    className={`text-center ${
                      q.lows === maxLows ? "ml-1 bg-yellow-200 font-bold" : ""
                    }`}
                  >
                    {q.lows}{" "}
                    {q.lows === maxLows && <FontAwesomeIcon icon={faCrown} />}
                  </TableCell>

                  <TableCell
                    className={`text-center ${
                      q.bottoms === maxBottoms
                        ? "ml-1 bg-yellow-200 font-bold"
                        : ""
                    }`}
                  >
                    {q.bottoms}{" "}
                    {q.bottoms === maxBottoms && (
                      <FontAwesomeIcon icon={faCrown} />
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>

      
      <button
        onClick={handleExport}
        className="m-2 px-3 py-1 bg-purple-600 text-white rounded-md shadow hover:bg-purple-700 flex items-center gap-2"
      >
        <FontAwesomeIcon icon={faDownload} /> Export
      </button>
    </div>
  );
};

export default SeasonTrackRecordTable;
