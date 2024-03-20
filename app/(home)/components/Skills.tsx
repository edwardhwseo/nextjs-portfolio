"use client";
import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiBootstrap,
  SiCsharp,
  SiCss3,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiPhp,
  SiReact,
  SiRubyonrails,
  SiSqlite,
  SiTailwindcss,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { text: "React", Icon: SiReact },
    { text: "Next.js", Icon: SiNextdotjs },
    { text: "JavaScript", Icon: SiJavascript },
    { text: "Tailwind", Icon: SiTailwindcss },
    { text: "Bootstrap", Icon: SiBootstrap },
    { text: "HTML", Icon: SiHtml5 },
    { text: "CSS", Icon: SiCss3 },
    { text: "C#", Icon: SiCsharp },
    { text: "PHP", Icon: SiPhp },
    { text: "Ruby on Rails", Icon: SiRubyonrails },
    { text: "SQL", Icon: SiSqlite },
    { text: "Git", Icon: SiGit },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text="Skills 🎯"
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <HoverEffect items={skills} />
    </div>
  );
}
