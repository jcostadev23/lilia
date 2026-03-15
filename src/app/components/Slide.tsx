"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import allData from "../storage/allData";

const SlidePicture = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % allData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform ease-in-out duration-1000"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {allData.map((data) => (
          <div className="flex-shrink-0 w-full" key={data.id}>
            <div key={data.id} className="aspect-[1/1]">
              <Image
                className="transition-transform opacity-90 rounded-3xl border border-white/10 bg-slate-950/40 object-contain shadow-[0_30px_80px_rgba(15,23,42,0.6)]"
                src={data.image1}
                width={640}
                height={640}
                alt={"work picture"}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidePicture;
