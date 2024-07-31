import Image from "next/image";
import React from "react";

function Features() {
  return (
    <div className="flex gap-4">
      <div className="bg-white px-4 py-2 rounded-md flex items-center space-x-2">
        <Image
          src="/img/features-img-1.png"
          alt="featues image 1"
          width={77}
          height={61}
          className="w-20 h-16 aspect-video"
        />
        <div className="">
          <h1 className="text-sm font-semibold text-gray-600">
            Introducing tags
          </h1>
          <p className="text-gray-500 text-xs">
            Easily categorize and find your notes by adding tags. Keep your
            workspace clutter-free and effecient.
          </p>
        </div>
      </div>
      <div className="bg-white px-4 py-2 rounded-md flex items-center space-x-2">
        <Image
          src="/img/features-img-2.png"
          alt="featues image 2"
          width={77}
          height={61}
          className="w-20 h-16 aspect-video"
        />
        <div className="">
          <h1 className="text-sm font-semibold text-gray-600">
            Share Notes Instantly
          </h1>
          <p className="text-gray-500 text-xs">
            Effortlessly share your notes with others via email or link. Enhance
            collaboration with quick sharing options.
          </p>
        </div>
      </div>
      <div className="bg-white px-2 py-2 rounded-md flex items-center space-x-2">
        <Image
          src="/img/features-img-3.png"
          alt="featues image 3"
          width={77}
          height={61}
          className="w-20 h-16 aspect-video"
        />
        <div className="">
          <h1 className="text-sm font-semibold text-gray-600">
            Access Anywhere
          </h1>
          <p className="text-gray-500 text-xs">
            Sync your notes across all devices. Stay productive whether you{`'`}re
            on your phone, tablet, or computer.
          </p>
        </div>
      </div>
      
    </div>
  );
}

export default Features;
