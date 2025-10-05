import React from "react";

const EVENT_LBLS: Record<string, string> = {
    announceSafe: "Safe Queens",
    winner: "Winner",
    high: "High Queens",
    top2: "Top 2 Queens",
    bottom: "Bottom Queens",
    bottom2: "Bottom 2",
    eliminated: "Eliminated Queen",
    results: "Season Results",
};

const EpisodeMessage = ({ episodeEvent, eventMessage } : { episodeEvent: string, eventMessage: string }) => {

    const label = EVENT_LBLS[episodeEvent] || "Queens";
    let mainMessage = eventMessage;
    let lipsyncMessage = "";
    let afterStr = '';
    
    if (episodeEvent === "bottom2" && eventMessage.includes("lipsync to")) {
        const [before, after] = eventMessage.split("They will now have to lipsync to");
        mainMessage = before.trim();
        lipsyncMessage = "They will now have to lipsync to" + after;
        afterStr = after.split('.')[0];
    }

    return <>
        <div className="flex justify-center mb-4">
            <div className="general-msg">
                <h2 className="font-extrabold text-2xl text-black tracking-wide">
                    {label}
                </h2>
                {mainMessage && (
                    <p className="mt-2 text-base font-medium text-purple-800">
                        {mainMessage}
                    </p>
                )}
                {lipsyncMessage && (
                    <>
                        <hr className="my-3 border-t border-gray-300" />
                        <div className="mt-2 p-3">
                            <p className="text-base font-semibold text-purple-800 italic">
                                They will now have to lipsync to{" "}
                            </p>
                            <br />
                            <p>
                                <span className="text-violet-700 font-bold not-italic">
                                    {afterStr}.
                                </span>
                            </p> <br />
                            <p className="text-base font-semibold text-purple-800 italic">
                                Good luck and don&apos;t fuck it up!
                            </p>
                        </div>
                    </>
                )}
            </div>
        </div>
    </>;
};

export default EpisodeMessage;
