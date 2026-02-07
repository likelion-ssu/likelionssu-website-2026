import React from "react";

export default function Footer() {
  return (
    <div
        className="
            w-full bg-secondarybrand typo-footer1ew flex flex-col justify-center
            px-[1.25rem] py-[2.5rem]
            items-start gap-[0.625rem]
            text-black/50

            !text-[0.75rem]
            sm:!text-[0.9375rem]

            sm:w-full sm:p-[3.75rem]
            sm:h-[13.9375rem]
            sm:gap-[0.6875rem]
        "
    >

      <div className="w-full flex justify-between items-end whitespace-pre">
        ABOUT  /  PART  /  PROJECT
      </div>

      <br />

      <div
        className="
          w-full flex flex-col items-start
          sm:flex-row sm:justify-between sm:items-end
        "
      >
        <div className="order-1 sm:order-2 flex flex-col items-start sm:items-end gap-[0.69rem]">
          <p>CONTACT</p>
          <div className="flex flex-row gap-[1.875rem]">
            <p>ssu@likelion.org</p>
            <p>INSTA</p>
            <p>GIT</p>
          </div>
        </div>

        <div className="order-2 sm:hidden">
          <br />
          <br />
        </div>

        <div className="order-3 sm:order-1 flex flex-col items-start gap-[0.69rem]">
          <p>COPYRIGHT LIKELION SSU</p>
          <p>TECHIT</p>
        </div>
      </div>
    </div>
  );
}
