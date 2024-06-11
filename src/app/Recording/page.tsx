import React from 'react';

export default function Gallery() {
  return (
    <main className="flex flex-col items-center justify-center p-24 bg-cover bg-center">
      <h1 className="text-4xl font-bold mb-8">Video Gallery</h1>
      <div className="relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-auto">
        <div className="rounded-lg shadow-md w-full overflow-hidden" style={{ paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/ZjBgEkbnX2I"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube Video"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
