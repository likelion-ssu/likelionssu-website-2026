import React from "react";
import { useNavigate } from "react-router-dom";
import BottomTab from "./BottomTab";

export default function BottomTabbar() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white flex">
      <BottomTab text="ABOUT US" />
      <BottomTab text="PART" onClick={() => navigate("/part")} />
      <BottomTab text="PROJECT" onClick={() => navigate("/project")} />
    </div>
  );
}
