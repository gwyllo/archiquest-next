import Image from 'next/image';

const images = [
    { src: '/scenarioslide1.jpg', alt: 'Image 1' },
    { src: '/scenarioslide2.jpg', alt: 'Image 2' },
    { src: '/scenarioslide3.jpg', alt: 'Image 3' },
    { src: '/scenarioslide4.jpg', alt: 'Image 4' },
    { src: '/scenarioslide5.jpg', alt: 'Image 5' },
    { src: '/scenarioslide6.jpg', alt: 'Image 6' }, 
    { src: '/scenarioslide7.jpg', alt: 'Image 7' },
    { src: '/scenarioslide8.jpg', alt: 'Image 8' },
    { src: '/scenarioslide9.jpg', alt: 'Image 9' },
    { src: '/scenarioslide10.jpg', alt: 'Image 10' },
    { src: '/scenarioslide11.jpg', alt: 'Image 11' },
    { src: '/scenarioslide12.jpg', alt: 'Image 12' },
    { src: '/scenarioslide13.jpg', alt: 'Image 13' },
    // Add more images as needed
];

export default function Gallery() {
    return (
      <main className="flex flex-col items-center justify-between p-24 bg-cover bg-center bg-white">
        <h1 className="text-4xl font-bold mb-8">Lake Gutan Drought Issue</h1>
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
