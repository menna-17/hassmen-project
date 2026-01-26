import React from "react";
import { useNavigate } from "react-router-dom";

const creations = [
  {
    title: "Croissant",
    category: "croissant",
    description:
      "Flaky, buttery pastry with a golden crust, perfect for breakfast or a snack.",
    img: "cross.jpg",
  },
  {
    title: "Tart",
    category: "tart",
    description:
      "A crisp pastry shell filled with fresh fruit, custard, or rich chocolate ganache.",
    img: "tart.jpg",
  },
  {
    title: "Cake",
    category: "cake",
    description:
      "Moist and flavorful cake, available in chocolate, vanilla, red velvet, and more.",
    img: "cake.jpg",
  },
  {
    title: "Puff Pastry",
    category: "puff_pastry",
    description:
      "Light and airy pastry layers, filled with sweet or savory ingredients.",
    img: "puff.jpg",
  },
  {
    title: "Cookies",
    category: "cookies",
    description:
      "Classic cookies, from chocolate chip to oatmeal raisin, perfect for any sweet craving.",
    img: "cookies.jpg",
  },
  {
    title: "Cinnamon Rolls",
    category: "cinnamon",
    description:
      "Soft, sweet rolls swirled with cinnamon and sugar, often topped with icing.",
    img: "cinnamon.jpg",
  },
];

const OurCreations = () => {
  const navigate = useNavigate();

  const handleClick = (item) => {
    navigate(`/shop/${item.category}`);
  };

  return (
    <div className="bg-headbg">
      <section className="py-12 bg-maingreen font-josefin mx-4 sm:mx-6 lg:mx-auto rounded-3xl">
        {/* Heading */}
        <div className="flex justify-center mb-10">
          <div className="inline-block px-8 py-4 rounded-2xl bg-mainpink">
            <h2 className="text-3xl font-bold text-center text-red-50">
              Our Creations
            </h2>
          </div>
        </div>

        {/* Grid */}
        <div className="mx-auto grid gap-8 
                        sm:max-w-2xl sm:grid-cols-1 
                        md:max-w-4xl md:grid-cols-2 
                        lg:max-w-6xl lg:grid-cols-3">
          {creations.map((item, index) => (
            <div
              key={index}
              onClick={() => handleClick(item)}
              className="cursor-pointer bg-pink-50 rounded-2xl shadow-lg overflow-hidden
                         hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-mainpink">
                  {item.title}
                </h3>
                <p className="text-yellow-800">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurCreations;
