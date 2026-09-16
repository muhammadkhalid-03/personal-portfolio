"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const images = [
  {
    src: "/project photos/pioneermart/home.png",
    alt: "PioneerMart marketplace home screen",
  },
  {
    src: "/project photos/pioneermart/login.jpg",
    alt: "PioneerMart sign-in screen",
  },
  {
    src: "/project photos/pioneermart/additem.png",
    alt: "PioneerMart add-item screen",
  },
  {
    src: "/project photos/pioneermart/notification.png",
    alt: "PioneerMart notifications screen",
  },
  {
    src: "/project photos/pioneermart/profile.png",
    alt: "PioneerMart profile screen",
  },
];

export default function PioneerMartCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = images[currentIndex];

  const showPrevious = () => {
    setCurrentIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  };

  const showNext = () => {
    setCurrentIndex((index) => (index + 1) % images.length);
  };

  return (
    <div className="flex min-h-80 flex-col items-center justify-center bg-[#071413] p-6 sm:p-8">
      <div className="flex h-[28rem] w-full items-center justify-center">
        <Image
          src={currentImage.src}
          alt={currentImage.alt}
          width={420}
          height={840}
          className="max-h-[26rem] w-auto rounded-2xl object-contain shadow-2xl shadow-black/50"
        />
      </div>

      <div className="mt-5 flex w-full items-center justify-between gap-4">
        <button
          type="button"
          onClick={showPrevious}
          aria-label="Show previous PioneerMart image"
          className="rounded-full border border-white/15 bg-white/5 p-2 text-white transition-colors hover:border-emerald-300/60 hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="flex items-center justify-center gap-2" aria-label="Choose PioneerMart image">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Show image ${index + 1} of ${images.length}`}
              aria-current={index === currentIndex ? "true" : undefined}
              className={`h-2.5 w-2.5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071413] ${
                index === currentIndex
                  ? "bg-emerald-300"
                  : "bg-white/25 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={showNext}
          aria-label="Show next PioneerMart image"
          className="rounded-full border border-white/15 bg-white/5 p-2 text-white transition-colors hover:border-emerald-300/60 hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
