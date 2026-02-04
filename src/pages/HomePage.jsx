import React from "react";

export default function HomePage() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-6 px-10">
      <div className="text-3xl font-bold text-purple-500">HomePage</div>

      <nav className="flex flex-col gap-4 text-lg font-medium">
        {["part", "about us", "project"].map((item) => (
          <button
            key={item}
            className="text-black hover:text-purple-500 transition underline underline-offset-8 decoration-transparent hover:decoration-purple-500"
          >
            {item}
          </button>
        ))}
      </nav>
    </div>
  );
}
