import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="relative w-full pt-4">


      {/* Hero Section */}
      <section className=" max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-4">
        {/* Left: Title + Paragraph */}
        <div className="md:w-1/2 mb-12 font-josefin">
          <h2 className="text-3xl md:text-4xl font-bold text-mainpink">
            Welcome to HASMIN
          </h2>
          <p className="mt-4 text-yellow-800 text-l">
            At HASMIN, we believe every bite should be a moment of joy. From
            freshly baked breads to decadent pastries, our
            treats are crafted with love, quality ingredients, and a touch of
            magic. Whether you’re celebrating a special occasion or just
            treating yourself, we’re here to bring sweetness to your day. Come
            taste the difference that passion and care make!
          </p>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2">
          <img
            src="p2.png" // Replace with your image path
            alt="Hero Image"
            width={500}
            height={400}
            className="rounded "
          />
        </div>
      </section>
    </header>
  );
}
