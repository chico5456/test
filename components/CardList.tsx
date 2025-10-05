/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import QueenCard from "./QueenCard";
import SeasonTrackRecordTable from "./SeasonTrackRecordTable";
//import SeasonTrackRecordChart from "./SeasonTrackRecordChart";
import SeasonTrackRecordLipsyncs from "./SeasonTrackRecordLipsyncs";
import QueenScoreBreakdownTable from "./QueenScoreBreakdownTable";

type Queen = {
    id: string;
    name: string;
    url: string;
    wins: number;
    highs: number;
    lows: number;
    bottoms: number;
    top2s: number;
    isEliminated: boolean;
    scores: { episodeNumber: string | number; score: number }[];
    placements: any;
};

type Lipsync = {
    episodeNumber: number;
    lipsync: {
        id: string;
        title: string;
        episode: string;
        artist: string;
    }
};

const CardList = ({
    queens,
    lipsyncs,
    episodeType,
    viewMode,
    nonElimination,
    showResults,
    episodes,
}: {
    queens: Queen[];
    lipsyncs: Lipsync[];
    episodeType?: string;
    viewMode?: string;
    nonElimination?: boolean;
    showResults?: boolean;
    episodes: { episodeNumber: number | string; title: string }[];
}) => {

    const maxWins = Math.max(...queens.map((q) => q.wins));
    const filteredQueens = queens;

    return (
        <div className="w-full">
            {showResults ? (
                <Tabs defaultValue="queens" className="w-full">
                    <TabsList className="tabs-list">
                        <TabsTrigger value="queens" className="tabs-trigger" >Queens</TabsTrigger>
                        <TabsTrigger value="table-min" className="tabs-trigger" >Contestant Progess (Minified)</TabsTrigger>
                        <TabsTrigger value="table-full" className="tabs-trigger" >Contestant Progess</TabsTrigger>
                        {/* <TabsTrigger value="chart">Track Record Chart</TabsTrigger> */}
                        <TabsTrigger value="lipsyncs" className="tabs-trigger" >Lipsyncs</TabsTrigger>
                    </TabsList>

                    {/* Queens Tab */}
                    <TabsContent value="queens">
                        <div className="flex flex-wrap justify-center gap-4">
                            {filteredQueens.map((queen) => (
                                <div
                                    key={queen.id}
                                    className={`transition duration-300 inline-flex max-w-xs justify-center 
                      ${queen.isEliminated &&
                                            (viewMode === "eliminated" || viewMode == null)
                                            ? "opacity-40 grayscale"
                                            : ""
                                        }`}
                                >
                                    <QueenCard
                                        q={queen}
                                        maxWins={maxWins}
                                        viewMode={viewMode}
                                        isWinner={showResults && queen.wins === maxWins} // pass down to QueenCard if needed
                                    />
                                </div>
                            ))}
                        </div>
                    </TabsContent>

                    {/* Table Tab */}
                    <TabsContent value="table-min">
                        <div className="w-[95%] mx-auto">
                            <SeasonTrackRecordTable queens={queens} episodes={episodes} isMinified={true} />
                        </div>
                    </TabsContent>

                    <TabsContent value="table-full">
                        <div className="w-[97%] mx-auto">
                            <SeasonTrackRecordTable queens={queens} episodes={episodes} />
                        </div>
                    </TabsContent>
                    {/* Chart Tab */}
                    {/*
                    <TabsContent value="chart">
                        <SeasonTrackRecordChart queens={queens} episodes={episodes} />
                    </TabsContent>
                    */}
                    {/* Lipsync Tab */}
                    <TabsContent value="lipsyncs">
                        <div className="w-[95%] mx-auto">
                            <SeasonTrackRecordLipsyncs queens={queens} episodes={episodes} lipsyncNames={lipsyncs} />
                        </div>
                    </TabsContent>
                </Tabs>
            ) : (
                // Default non-results view (just show queens)
                <div className="flex flex-wrap justify-center gap-4">
                    {filteredQueens.map((queen) => (
                        <div
                            key={queen.id}
                            className={`transition duration-300 inline-flex max-w-xs justify-center 
                  ${queen.isEliminated &&
                                    (viewMode === "eliminated" || viewMode == null)
                                    ? "opacity-40 grayscale"
                                    : ""
                                }`}
                        >
                            <QueenCard
                                q={queen}
                                maxWins={maxWins}
                                viewMode={viewMode}
                            />
                        </div>
                    ))}



                </div>
            )}
            {/* 
            {filteredQueens.map((queen) => (
                <QueenScoreBreakdownTable
                    key={queen.id}
                    queenName={queen.name}
                    scores={queen.scores as any}
                />
            ))} */}

        </div>
    );
};

export default CardList;
