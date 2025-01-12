"use client";

import { Button } from "@/components/button";

export function ScrollButton() {
  return (
    <Button
      size="sm"
      onClick={() => {
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      Get in touch
    </Button>
  );
}
