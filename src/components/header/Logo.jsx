import React from 'react'
import logo from "../../assets/logo.svg"

export default function Logo({ onClick }) {
  return (
    <div className="flex items-center gap-[0.3rem] cursor-pointer"
    onClick={onClick}>
        <img src={logo} alt="logo" className="w-[1.25rem] h-[1.25rem]" />
        <p className=" text-primarybrand font-[BookkMyungjo] font-bold text-[0.9625rem] leading-normal">
          LIKELION SOONGSIL
        </p>
    </div>
  )
}
