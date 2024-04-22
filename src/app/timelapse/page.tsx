"use client";

"use client";

import { useState } from "react";
import { describeImagePrompt } from "@/ai/prompts";
import TagCloud from "@/components/TagCloud";
import FastImage from "@/components/FastImage";
import { getGroqCompletion } from "@/ai/groq";
import { getGroqChat } from "@/ai/groq";

//An example of using the tag cloud and fast image component to generate a timeline of images depicting changes from 2020 to 2070

export default function TimelapsePage() {
  const [keywords, setKeywords] = useState<string>("Selected Keywords...");
  const [year, setYear] = useState<number>(2020); // Start year changed to 2020
  const [animateImages, setAnimateImages] = useState<boolean>(false);
  const [prompt, setPrompt] = useState("");
  const [message, setMessage] = useState<string>("Create Artwork");
  const [description, setDescription] = useState("");

  const handleClick = async () => {
    setAnimateImages(!animateImages);
    handleCreate();
  }
  async function handleCreate() {
    setMessage("Generating artwork...");
    //generate the image description
    const description = await getGroqCompletion(
      `Create a 50 word text that contains statistics and progression of a timeline from the year 2019 to 2044, illustrating the transformative global impact of the beef industry coming to a halt due to its significant contribution to climate change and carbon emissions, include stats of Cow carbon emissions and how much beef consumption is happenig globaly vs fish consumption and the implications of their c02 emissions. The first prompt should start in 2019, showing a world heavily reliant on beef with visible signs of environmental degradation such as deforestation and high carbon emissions. As the timeline advances, depict the transition towards sustainable practices with the emergence of expansive fish farms in the oceans of Norway by 2025, which become a major global source of protein. Illustrate the revitalization of marine ecosystems and cleaner air resulting from reduced beef production. By 2035, show how cities have adapted to new dietary and economic realities, with markets and restaurants prominently featuring fish-based dishes. Conclude the series in 2044 with a vision of a sustainable future where fish farming is fully integrated into society, helping restore terrestrial ecosystems previously dedicated to cattle grazing. This visual narrative should effectively showcase a world undergoing significant ecological and societal changes due to the shift from beef to fish protein.`,
      64,
      describeImagePrompt
    );
    setPrompt(description);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex flex-col">
          
          <button
            className={`p-4 bg-white rounded-lg hover:shadow ${
              animateImages && "bg-red-600"
            }`}
            onClick={handleClick}
          >
            {animateImages ? "⏹ Stop Animation" : "▶ Start Animation"}
            <div>
              {prompt}
            </div>
          </button>

        

          <FastImage
            prompt={`Create a series of images depicting the progression of a timeline from 2019 to 2044, illustrating the transformative global impact of the beef industry coming to a halt due to its significant contribution to climate change and carbon emissions. The first image should start in 2019, showing a world heavily reliant on beef with visible signs of environmental degradation such as deforestation and high carbon emissions. As the timeline advances, depict the transition towards sustainable practices with the emergence of expansive fish farms in the oceans of Norway by 2025, which become a major global source of protein. Illustrate the revitalization of marine ecosystems and cleaner air resulting from reduced beef production. By 2035, show how cities have adapted to new dietary and economic realities, with markets and restaurants prominently featuring fish-based dishes. Conclude the series in 2044 with a vision of a sustainable future where fish farming is fully integrated into society, helping restore terrestrial ecosystems previously dedicated to cattle grazing. This visual narrative should effectively showcase a world undergoing significant ecological and societal changes due to the shift from beef to fish protein. ${year}, ${keywords}`}
            systemPrompt={describeImagePrompt}
            imageSize="landscape_16_9"
            animate={animateImages ? 3000 : 0}
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