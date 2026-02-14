import React from "react";
import ShortcutBtn from "./ShortcutBtn";
import { lineupVersions } from "../../../data/lineup";

export default function Lineup({
  version = "pm",
  onScrollToPmContent,
  onScrollToSession,
}) {
  const lineupData = lineupVersions[version];

  return (
    <div className="flex flex-col sm:items-end sm:flex-row sm:justify-between w-full flex-1 sm:w-[75.8125rem] gap-[4.44rem]">
      <div className="flex flex-col items-start sm:flex-row gap-[1.88rem] sm:gap-auto">
        <div className="flex flex-col gap-[0.69rem]">
          <div className="typo-small1">{lineupData.role}</div>
          <div className="typo-subtitlek">{lineupData.name}</div>
        </div>

        <div className="flex flex-col gap-[0.69rem]">
          <div className="typo-small1">{lineupData.recruitLabel}</div>
          <div className="typo-subtitlek text-text/20">
            {lineupData.recruitStatus}
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center sm:justify-start gap-[1.88rem] sm:gap-[1.5rem] h-[2.125rem]">
        <ShortcutBtn text="파트장의 말" onClick={onScrollToPmContent} />
        <ShortcutBtn text="세션 소개" onClick={onScrollToSession} />
      </div>
    </div>
  );
}
