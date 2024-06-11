import Image from 'next/image';

const images = [
    { src: '/Image.png', alt: 'Image 2' },
    { src: '/Imagesunsetpretty.png', alt: 'Image 1' },
    { src: '/image copy.png', alt: 'Image 3' },
    { src: '/bigpanama.png', alt: 'Image 4' },
    { src: '/Image.png', alt: 'Image 2' },
    { src: '/Imagesunsetpretty.png', alt: 'Image 1' },
    { src: '/image copy.png', alt: 'Image 3' },
    { src: '/bigpanama.png', alt: 'Image 4' },
    { src: '/Image.png', alt: 'Image 2' },
    { src: '/Imagesunsetpretty.png', alt: 'Image 1' },
    { src: '/image copy.png', alt: 'Image 3' },
    { src: '/bigpanama.png', alt: 'Image 4' },
    // Add more images as needed
];

export default function Gallery() {
    return (
      <main className="flex flex-col items-center justify-between p-24 bg-cover bg-center" style={{ backgroundImage: "url('/clouds.jpeg')" }}>
        <h1 className="text-4xl font-bold mb-8">Image Gallery</h1>
        <div className="grid grid-cols-1 gap-4 w-full">
          {images.map((image, index) => (
            <div key={index} className="relative w-full h-auto">
              <Image src={image.src} alt={image.alt} layout="responsive" width={1600} height={900} objectFit="cover" className="rounded-lg shadow-md"/>
            </div>
          ))}
        </div>
      </main>
    );
}
