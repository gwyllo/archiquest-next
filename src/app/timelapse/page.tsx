"use client";

import { useState } from "react";
import { describeImagePrompt } from "@/ai/prompts";
import TagCloud from "@/components/TagCloud";
import FastImage from "@/components/FastImage";

//An example of using the tag cloud and fast image component to generate a timeline of images depicting changes from 2020 to 2070

export default function TimelapsePage() {
  const [keywords, setKeywords] = useState<string>("Selected Keywords...");
  const [year, setYear] = useState<number>(2020); // Start year changed to 2020
  const [animateImages, setAnimateImages] = useState<boolean>(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex flex-col">
          <button
            className={`p-4 bg-white rounded-lg hover:shadow ${
              animateImages && "bg-red-600"
            }`}
            onClick={() => setAnimateImages(!animateImages)}
          >
            {animateImages ? "⏹ Stop Animation" : "▶ Start Animation"}
          </button>
          <TagCloud
            prompt="Key aspects of urban transformation and climate adaptation"
            totalTags={20}
            handleSelect={(tags) => setKeywords(tags.join(", "))}
          />
          <FastImage
            prompt={`Urban and environmental transformation without beef production ${year}, ${keywords}`}
            systemPrompt={describeImagePrompt}
            imageSize="landscape_16_9"
            animate={animateImages ? 5000 : 0}
            onChange={() => {
              const nextYear = year + 5;
              if (nextYear > 2070) setYear(2070); // Cap the year at 2070
              else setYear(nextYear);
            }}
          />
        </div>
      </div>
    </main>
  );
}
