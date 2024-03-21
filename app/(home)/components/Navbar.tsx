import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function NavBar({ className }: { className?: string }) {
  const socials = [
    {
      link: "https://www.linkedin.com/in/edwardhwseo/",
      label: "LinkedIn",
      Icon: SiLinkedin,
    },
    {
      link: "https://www.github.com/edwardhwseo/",
      label: "GitHub",
      Icon: SiGithub,
    },
  ];

  return (
    <nav className={cn("py-10 flex justify-between items-center", className)}>
      <h1 className="text02xl front-bold underline underline-offset-8 decoration-green-500 -rotate-2">
        Edward Seo 👩🏻‍💻
      </h1>
      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.Icon;

          return (
            <Link href={social.link} key={index} aria-label={social.label}>
              <Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
