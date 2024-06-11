import Image from 'next/image';

const images = [
    { src: '/earlytimeimage_481.jpg', alt: 'Image 2' },
    { src: '/earlytimePassenger-cruise-ship-Panama-Canal.webp', alt: 'Image 1' },
    { src: '/concept3.png', alt: 'Image 3' },
    { src: '/conceptDALL·E 2024-06-10 01.39.36 - A series of drawings in a flat, minimalist, and retro-futuristic style of an airship labeled Flying Whales lifting cargo containers over a city. The.webp', alt: 'Image 4' },
    { src: '/conceptDALL·E 2024-06-10 02.01.12 - A series of drawings in a flat, minimalist, and retro-futuristic style of an airship labeled Flying Whales lifting cargo containers over a city. The.webp', alt: 'Image 4' },
    { src: '/conceptsections world engine.png', alt: 'Image 2' },
    { src: '/conceptC0178040-Panama_Canal_cross-section,_artwork.png', alt: 'Image 1' },
    { src: '/1-2024.png', alt: 'Image 3' },
    { src: '/2-2024.png', alt: 'Image 4' },
    { src: '/1-2030.png', alt: 'Image 2' },
    { src: '/2-2030.png', alt: 'Image 1' },
    { src: '/image copy.png', alt: 'Image 3' },
    { src: '/bigpanama.png', alt: 'Image 4' },
    // Add more images as needed
];

export default function Gallery() {
    return (
      <main className="flex flex-col items-center justify-between p-24 bg-cover bg-center" style={{ backgroundImage: "url('/clouds.jpeg')" }}>
        <h1 className="text-4xl font-bold mb-8">Image Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
          {images.map((image, index) => (
            <div key={index} className="relative w-full h-64">
              <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" className="rounded-lg shadow-md"/>
            </div>
          ))}
        </div>
      </main>
    );
}
