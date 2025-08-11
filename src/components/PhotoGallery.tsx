"use client";
import Image from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  { src: "/gallery/minar-e-pakistan.jpg", alt: "Minar-e-Pakistan, Lahore" },
  { src: "/gallery/badshahi-mosque.jpg", alt: "Badshahi Mosque, Lahore" },
  { src: "/gallery/pakistan-flag.jpg", alt: "Waving Pakistan Flag" },
  { src: "/gallery/karakoram.jpg", alt: "Karakoram Mountains" },
  { src: "/gallery/muhammad-ali-jinnah.jpg", alt: "Quaid-e-Azam Muhammad Ali Jinnah" },
  { src: "/gallery/independence-day.jpg", alt: "Independence Day Celebrations" },
];

export default function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setCurrentIndex(null);
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev !== null ? (prev - 1 + photos.length) % photos.length : null
    );
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev !== null ? (prev + 1) % photos.length : null
    );
  };

  return (
    <section className="w-full max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        Photo Gallery 📷
      </h2>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={500}
              height={350}
              className="object-cover w-full h-64 transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-lg font-semibold transition-opacity duration-300">
              {photo.alt}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {currentIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className="absolute top-5 right-5 text-white text-3xl hover:text-gray-400"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
          >
            <X size={32} />
          </button>

          {/* Prev Button */}
          <button
            className="absolute left-5 text-white hover:text-gray-400"
            onClick={showPrev}
          >
            <ChevronLeft size={40} />
          </button>

          {/* Image */}
          <div className="relative w-full max-w-4xl h-[80vh]">
            <Image
              src={photos[currentIndex].src}
              alt={photos[currentIndex].alt}
              fill
              className="object-contain"
            />
          </div>

          {/* Next Button */}
          <button
            className="absolute right-5 text-white hover:text-gray-400"
            onClick={showNext}
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </section>
  );
}









// "use client";
// import Image from "next/image";

// const photos = [
//   { src: "/gallery/minar-e-pakistan.jpg", alt: "Minar-e-Pakistan, Lahore" },
//   { src: "/gallery/badshahi-mosque.jpg", alt: "Badshahi Mosque, Lahore" },
//   { src: "/gallery/pakistan-flag.jpg", alt: "Waving Pakistan Flag" },
//   { src: "/gallery/karakoram.jpg", alt: "Karakoram Mountains" },
//   { src: "/gallery/muhammad-ali-jinnah.jpg", alt: "Quaid-e-Azam Muhammad Ali Jinnah" },
//   { src: "/gallery/independence-day.jpg", alt: "Independence Day Celebrations" },
// ];

// export default function PhotoGallery() {
//   return (
//     <section className="w-full max-w-6xl mx-auto py-10 px-4">
//       <h2 className="text-3xl font-bold text-center text-white mb-8">
//         Photo Gallery 📷
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {photos.map((photo, index) => (
//           <div
//             key={index}
//             className="relative overflow-hidden rounded-lg shadow-lg group"
//           >
//             <Image
//               src={photo.src}
//               alt={photo.alt}
//               width={500}
//               height={350}
//               className="object-cover w-full h-64 transform group-hover:scale-110 transition-transform duration-500"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-lg font-semibold transition-opacity duration-300">
//               {photo.alt}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
