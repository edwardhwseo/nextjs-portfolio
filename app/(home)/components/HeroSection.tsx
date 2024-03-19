import Link from "next/link";
import React from "react";

export default function HeroSection() {
  return (
    <div>
      <div>
        <h1>
          Nice to meet you! 👋
          <br /> <span>{"I'm Edward."}</span>
        </h1>
        <p>
          Based in Winnipeg, Manitoba, I'm a passionate Web Developer interested
          in building user-friendly web solutions.
        </p>
        <Link href={"mailto:edwardhwseo@gmail.com"}>
          <div>
            <h1>Contact Me 📧</h1>
          </div>
        </Link>
      </div>
      <div>
        <div className="w-72 h-72 space-y-3 -rotate-[30deg]">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
