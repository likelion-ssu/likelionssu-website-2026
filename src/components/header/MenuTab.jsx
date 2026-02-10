import React from "react";
import MenuTextBold from "../menu_text/MenuTextBold";

export default function MenuTab() {
  return (
    <div className="hidden sm:flex items-start gap-[2.5rem] typo-cardtexte text-text">
      <MenuTextBold>ABOUT US</MenuTextBold>
      <MenuTextBold>PART</MenuTextBold>
      <MenuTextBold>PROJECT</MenuTextBold>
    </div>
  );
}
