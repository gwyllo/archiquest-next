import React from 'react';

export default function Gallery() {
  return (
    <main className="flex flex-col items-center justify-center p-24 bg-cover bg-center">
      <h1 className="text-4xl font-bold mb-8">Video Gallery</h1>
      <div className="relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-auto">
        <video className="rounded-lg shadow-md w-full" controls>
          <source src="/recordingtest1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </main>
  );
}