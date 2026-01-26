// AboutUs.jsx
import React from "react";

const AboutUs = () => {
  const teamMembers = [
    { name: "Haneen", photo: "haneen.jpeg" },
    { name: "Shimaa", photo: "shima.jpeg" },
    { name: "Mennatalla", photo: "menna.JPG" },
    { name: "Noor", photo: "noor.jpg" },
    { name: "Nada", photo: "nada.jpeg" },
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-16 font-josefin">
      {/* First Section: Meet the Team + Our Story */}
      <div className="flex flex-col lg:flex-row gap-8 mb-12 items-center lg:items-start">
        
        {/* Left Column: Meet the Team */}
        <div className="lg:w-1/2 bg-maingreen rounded-4xl p-6 sm:p-8 shadow-lg flex flex-col items-center">
          
          {/* Meet the Team Title */}
          <div className="inline-block px-4 py-3 rounded-3xl bg-mainpink mb-6 mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-red-50">
              Meet the Team
            </h2>
          </div>

          {/* Photos */}
          <div className="w-full flex flex-col gap-4 items-center">
            
            {/* Row 1 */}
            <div className="w-full flex justify-around">
              {teamMembers.slice(0, 2).map((member) => (
                <div key={member.name} className="flex flex-col items-center">
                  <img
                    className="w-20 h-20 sm:w-28 sm:h-28 rounded-full object-cover"
                    src={member.photo}
                    alt={member.name}
                  />
                  <p className="text-mainpink text-lg sm:text-xl font-bold mt-2 text-center">
                    {member.name}
                  </p>
                </div>
              ))}
            </div>

            {/* Row 2 */}
            <div className="w-full flex justify-center">
              <div className="flex flex-col items-center">
                <img
                  className="w-20 h-20 sm:w-28 sm:h-28 rounded-full object-cover"
                  src={teamMembers[2].photo}
                  alt={teamMembers[2].name}
                />
                <p className="text-mainpink text-lg sm:text-xl font-bold mt-2 text-center">
                  {teamMembers[2].name}
                </p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="w-full flex justify-around">
              {teamMembers.slice(3, 5).map((member) => (
                <div key={member.name} className="flex flex-col items-center">
                  <img
                    className="w-20 h-20 sm:w-28 sm:h-28 rounded-full object-cover"
                    src={member.photo}
                    alt={member.name}
                  />
                  <p className="text-mainpink text-lg sm:text-xl font-bold mt-2 text-center">
                    {member.name}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Right Column: Our Story + Our Values */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          
          {/* Our Story */}
          <div className="bg-maingreen rounded-4xl p-6 sm:p-8 shadow-lg flex flex-col justify-center mt-10 text-center">
            <div className="inline-block px-4 py-2 rounded-3xl bg-mainpink mb-4 mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-red-50">
                Our Story
              </h2>
            </div>

            <p className="text-yellow-800 text-sm sm:text-base">
              We first met in college, studying Computer Science together in 2020,
              and quickly became a close-knit team, collaborating on every project.
              In 2021, while brainstorming ideas for a project, we dreamed of
              creating something truly special — a bakery store that would bring
              joy to our community. Motivated by our shared passion, we promised
              each other that one day we would turn this idea into reality. After
              years of planning, learning, and preparing, in 2026 our dream came
              true: we opened our very own bakery, combining creativity, love for
              baking, and a commitment to delight every customer who walks through
              our doors.
            </p>
          </div>

          {/* Our Values */}
          <div className="bg-maingreen rounded-4xl p-6 sm:p-8 shadow-lg flex flex-col justify-center text-center">
            <div className="inline-block px-4 py-2 rounded-3xl bg-mainpink mb-4 mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-red-50">
                Our Values
              </h2>
            </div>

            <p className="text-yellow-800 text-sm sm:text-base">
              Our core values guide everything we do: quality, creativity,
              passion, and care. We believe that every baked treat should bring
              a smile, and that using the freshest ingredients with love and
              attention makes our bakery special for our customers.
            </p>
          </div>

        </div>
      </div>

      {/* Second Section: Our Mission */}
      <div className="bg-maingreen w-full rounded-4xl p-6 sm:p-8 shadow-lg mb-8 text-center">
        <div className="inline-block px-4 py-2 rounded-3xl bg-mainpink mb-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-red-50">
            Our Mission
          </h2>
        </div>

        <p className="text-yellow-800 text-sm sm:text-base">
          At Sweet Delights Bakery, our mission is to bring joy to every table
          with freshly baked treats made from the finest ingredients. We are
          passionate about crafting delicious breads, pastries, and cakes that
          create memorable moments for our customers.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
