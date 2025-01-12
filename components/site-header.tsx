"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/button";
import { Github, Mail, Linkedin } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex gap-6 md:gap-10"></div>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/TsvetomirGT"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon">
              <Github className="h-4 w-4" />
            </Button>
          </a>
          <a
            href="mailto:thewaffoss@gmail.com"
          >
            <Button variant="ghost" size="icon">
              <Mail className="h-4 w-4" />
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/tsvetomir-tsvetkov-430456144/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon">
              <Linkedin className="h-4 w-4" />
            </Button>
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
} 