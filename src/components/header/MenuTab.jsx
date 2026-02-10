import React from "react";
import { useNavigate } from "react-router-dom";
import MenuTextBold from "../menu_text/MenuTextBold";

export default function MenuTab() {
  const navigate = useNavigate();

  return (
    <div className="hidden sm:flex items-start gap-[2.5rem] typo-cardtexte text-text">
      <MenuTextBold>ABOUT US</MenuTextBold>

      <button onClick={() => navigate("/part")}>
        <MenuTextBold>PART</MenuTextBold>
      </button>

      <MenuTextBold>PROJECT</MenuTextBold>
    </div>
  );
}
