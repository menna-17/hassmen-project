import React from "react";

export default function VisitUs() {
  return (
    <div className="bg-headbg w-full flex items-center px-4 sm:px-8 py-8">
      <div className="bg-maingreen w-full rounded-4xl overflow-hidden h-48 sm:h-56 md:h-64 lg:h-80 relative">

        {/* Mobile (below md) */}
        <img
          src="p4.png"
          alt="Visit Us Mobile"
          className="w-full h-full object-cover block md:hidden"
        />

        {/* Tablet (md only) */}
        <img
          src="p5.png"
          alt="Visit Us Tablet"
          className="w-full h-full object-cover hidden md:block lg:hidden"
        />

        {/* Desktop (lg and above) */}
        <img
          src="p3.png"
          alt="Visit Us Desktop"
          className="w-full h-full object-cover hidden lg:block"
        />

      </div>
    </div>
  );
}
