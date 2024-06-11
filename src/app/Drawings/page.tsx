import Image from 'next/image';

const images = [
    { src: '/earlytimeimage_481.jpg', alt: 'Image 2' },
    { src: '/earlytimePassenger-cruise-ship-Panama-Canal.webp', alt: 'Image 1' },
    { src: '/concept3.png', alt: 'Image 3' },
    { src: '/conceptDALL·E 2024-06-10 01.39.36 - A series of drawings in a flat, minimalist, and retro-futuristic style of an airship labeled Flying Whales lifting cargo containers over a city. The.webp', alt: 'Image 4' },
    { src: '/conceptDALL·E 2024-06-10 02.01.12 - A series of drawings in a flat, minimalist, and retro-futuristic style of an airship labeled Flying Whales lifting cargo containers over a container.webp', alt: 'Image 4' },
    { src: '/conceptsections world engine.png', alt: 'Image 2' },
    { src: '/stage2.51.png', alt: 'Image 1' },
    { src: '/stage2.52.png', alt: 'Image 1' },
    { src: '/1-2024.png', alt: 'Image 3' },
    { src: '/2-2024.png', alt: 'Image 4' },
    { src: '/1-2030.png', alt: 'Image 2' },
    { src: '/2-2030.png', alt: 'Image 1' },
    { src: '/stage2.5mage (3).png', alt: 'Image 3' },
    { src: '/bigpanama.png', alt: 'Image 3' },
    { src: '/Imagesunsetpretty.png', alt: 'Image 3' },
    { src: '/3ec48cf2-0965-46f9-86e7-347b7811bf59.jpeg', alt: 'Image 4' },
    { src: '/9e19861f-d5b9-46a8-a178-9c3fb8e2fda5.jpeg', alt: 'Image 4' },
    { src: '/92f556c3-f5ff-4150-8ea5-b71c210062fd.jpeg', alt: 'Image 4' },
    { src: '/627697d2-859f-4857-83cf-7086b978f458.jpeg', alt: 'Image 4' },
    { src: '/be05db59-09b2-47fd-80eb-182b83b26ea6.jpeg', alt: 'Image 4' },
    { src: '/1-2040.png', alt: 'Image 4' },
    { src: '/2-2040.png', alt: 'Image 4' },
    { src: '/1-2050.png', alt: 'Image 4' },
    { src: '/2-2050.png', alt: 'Image 4' },
    { src: '/finalstageimg_4_1372259253_a5bec5950f98ee382a90268f73493a2a.jpg', alt: 'Image 4' },
    { src: '/finalstageimg_8_1372259253_6b7dc8dbbe9b41ba754f9869cdf980d7.jpg', alt: 'Image 4' },
    { src: '/finalstageimg_9_1372259253_db8898a8fabee0735b3c6c8ee29e2b01.jpg', alt: 'Image 4' },
    { src: '/finalstageimg_10_1372259253_dd3a700c935fb03565b6329313194bec.jpg', alt: 'Image 4' },
    { src: '/1-2075.png', alt: 'Image 4' },
    { src: '/2-2075.png', alt: 'Image 4' },
    { src: '/1-2100.png', alt: 'Image 4' },
    { src: '/2-2100.png', alt: 'Image 4' },
    { src: '/finalstageScreenshot 2024-06-11 180142.png', alt: 'Image 4' },
    { src: '/finalstageScreenshot 2024-06-11 181807.png', alt: 'Image 4' },
    { src: '/finalstageScreenshot 2024-06-11 182001.png', alt: 'Image 4' },
    { src: '/finalstageScreenshot 2024-06-11 182308.png', alt: 'Image 4' },
    { src: '/1-2125.png', alt: 'Image 4' },
    { src: '/2-2125.png', alt: 'Image 4' },
 


    // Add more images as needed
];

export default function Gallery() {
    return (
      <main className="flex flex-col items-center justify-between p-24 bg-cover bg-center bg-white">
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
