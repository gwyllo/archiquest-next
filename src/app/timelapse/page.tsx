"use client";

import React, { useState, useEffect } from "react";
import { describeImagePrompt } from "@/ai/prompts";
import FastImage from "@/components/FastImage";
import { getGroqCompletion } from "@/ai/groq";
import { getGroqChat } from "@/ai/groq";

//An example of using the tag cloud and fast image component to generate a timeline of images depicting changes from 2020 to 2070

export default function TimelapsePage() {
  const [year, setYear] = useState(2019); // Initial year
  const [animate, setAnimate] = useState(false); // Animation state
  const [prompt, setPrompt] = useState(""); // Prompt to be displayed
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null); // Holds the ID of the interval to clear it later

  // Function to fetch a new prompt based on the year
  const updatePromptForYear = async (currentYear: number) => {
    try {
      const newPrompt = await getGroqCompletion(
        // Replace this with the actual prompt for your use case
        `You are a machine that creates roughly 50 word text that contains statistics and progression of a timeline from the year 2019, Write the statistics for the next year. Here is an example of what u can illustrate: the transformative global impact of the beef industry coming to a halt due to its significant contribution to climate change and carbon emissions, include stats of Cow carbon emissions and the implications of their c02 emissions. The first prompt should start in 2019, showing a world heavily reliant on beef with visible signs of environmental degradation such as deforestation and high carbon emissions. As the timeline advances, depict the transition towards sustainable practices with the emergence of expansive fish farms in the oceans of Norway by 2025, which become a major global source of protein. Illustrate the revitalization of marine ecosystems and cleaner air resulting from reduced beef production. By 2035, show how cities have adapted to new dietary and economic realities, with markets and restaurants prominently featuring fish-based dishes. Conclude the series in 2044 with a vision of a sustainable future where fish farming is fully integrated into society, helping restore terrestrial ecosystems previously dedicated to cattle grazing. This visual narrative should effectively showcase a world undergoing significant ecological and societal changes due to the shift from beef to fish protein. Write these statistics, in clear paragraph forms. Draw on real facts if applicable,  ${currentYear}.`,
        108,
        describeImagePrompt
      );
      setPrompt(newPrompt);
    } catch (error) {
      console.error("Error fetching new prompt: ", error);
    }
  };

  // Function to handle the start/stop animation button click
  const toggleAnimation = () => {
    setAnimate((prev) => {
      if (!prev) {
        // Animation starts
        const id = setInterval(() => {
          setYear((prevYear) => {
            if (prevYear >= 2044) {
              // If the year exceeds 2044, stop the interval and animation
              clearInterval(id);
              setAnimate(false);
              return prevYear; // Return the current year without incrementing
            }
            updatePromptForYear(prevYear + 1); // Fetch the prompt for the next year
            return prevYear + 1; // Increment the year
          });
        }, 15000); // Set the interval to 3 seconds

        setIntervalId(id);
        return true; // Return the new state for 'animate'
      } else {
        // Animation stops
        if (intervalId) clearInterval(intervalId);
        setIntervalId(null);
        return false; // Return the new state for 'animate'
      }
    });
  };

  // Cleanup interval on unmount or when animation state changes
  useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  // Initial prompt fetch
  useEffect(() => {
    updatePromptForYear(year);
  }, []); // Empty dependency array means this runs once on mount

  // JSX for the component
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24" style={{ backgroundColor: 'lightblue' }}>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex" style={{ padding: '2rem' }}>
        <div className="flex flex-col" style={{ gap: '1rem' }}>
          <button
            className={`p-4 rounded-lg ${animate ? "bg-purple-600" : "bg-white"}`}
            onClick={toggleAnimation}
            style={{ marginTop: '1rem', marginBottom: '1rem' }}
          >
            {animate ? "Pause Animation" : "Start Animation"}
          </button>
          <div>
            {/* Display the dynamic prompt here */}
            {prompt}
          </div>
          <FastImage
            prompt={`A visual representation for the year llustrating the transformative global impact of the beef industry coming to a halt due to its significant contribution to climate change and carbon emissions, include stats of Cow carbon emissions and how much beef consumption is happenig globaly vs fish consumption and the implications of their c02 emissions. The first prompt should start in 2019, showing a world heavily reliant on beef with visible signs of environmental degradation such as deforestation and high carbon emissions. As the timeline advances, depict the transition towards sustainable practices with the emergence of expansive fish farms in the oceans of Norway by 2025, which become a major global source of protein. Illustrate the revitalization of marine ecosystems and cleaner air resulting from reduced beef production. By 2035, show how cities have adapted to new dietary and economic realities, with markets and restaurants prominently featuring fish-based dishes. Conclude the series in 2044 with a vision of a sustainable future where fish farming is fully integrated into society, helping restore terrestrial ecosystems previously dedicated to cattle grazing. This visual narrative should effectively showcase a world undergoing significant ecological and societal changes due to the shift from beef to fish protein ${year}`}
            systemPrompt={describeImagePrompt}
            imageSize="landscape_16_9"
            animate={animate ? 5000 : 0} // This value determines how frequently the FastImage component updates
            onChange={(url) => console.log(`New image URL: ${url}`)}
          />
        </div>
      </div>
    </main>
  );
}