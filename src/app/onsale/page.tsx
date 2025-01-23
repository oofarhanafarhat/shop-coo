import React from "react";
import Image from "next/image";

export default function Sale() {
  const products = [
    { name: 'Gradient Graphic T-shirt', price: 145, Image: '/h1.png', rating: 4.5 },
    { name: 'Polo with Tipping Details', price: 180, Image: '/p01.png', rating: 4.4 },
    { name: 'Black Striped T-shirt', price: 120, Image: '/p04.png', rating: 5.0 },
    { name: 'Skinny Fit Jeans', price: 240, Image: '/h2.png', rating: 4.2 },
    { name: 'Checkered Shirt', price: 180, Image: '/h3.png', rating: 4.3 },
    { name: 'Sleeve Striped T-shirt', price: 130, Image: '/h4.png', rating: 4.6 },
    { name: 'COURAGE GRAPHIC T-SHIRT', price: 240, Image: '/t2.png', rating: 4.2 },
    { name: 'LOOSE FIT BERMUDA SHORTS', price: 180, Image: '/t3.png', rating: 4.3 },
    { name: 'COURAGE GRAPHIC T-SHIRT', price: 130, Image: '/t1.png', rating: 4.6 },
  ];

  return (
    <div className="flex flex-col lg:flex-row">
      <aside className="w-full lg:w-[295px] p-4 bg-gray-100">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        <div className="mb-4">
          <h3 className="font-medium mb-2">Price</h3>
          <input type="range" min="50" max="500" className="w-full" />
        </div>
        <div className="mb-4">
          <h3 className="font-bold text-xl mb-2">Colors</h3>
          <div className="flex flex-wrap gap-2 py-3">
            {['#00C12B', '#F50606', '#F5DD06', '#F57906', '#06CAF5', '#7D06F5', '#F506A4', '#FFFFFF', '#000000', '#FFD700'].map(
              (color, index) => (
                <div key={index} className="w-6 h-6 rounded-full" style={{ backgroundColor: color }}></div>
              )
            )}
          </div>
          <h1 className="text-xl font-bold">Size</h1>
          <div className="lg:flex flex-wrap justify-center items-center lg:gap-5 mt-2">
            {['Small', 'XX-Small', 'X-Small', 'Medium', 'Large', 'X-Large', 'XX-Large', '3X-Large', '4X-Large'].map((size, index) => (
              <button
                key={index}
                className={`px-4 py-2 border rounded-full ${
                  index === 2
                    ? 'bg-black text-white'
                    : 'bg-gray-200 text-black hover:bg-gray-300'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
          <div className="mt-5  hidden lg:flex flex-col ">
            <h1 className="text-xl font-bold">Dress Style</h1>
            {['Casual', 'Party', 'Formal', 'Gym'].map((style, index) => (
              <h2 key={index} className="text-gray-400 text-md">
                {style}
              </h2>
            ))}
            <button className="w-full mt-4 py-3 text-white bg-black rounded-full">Apply Filter</button>
          </div>
        </div>
      </aside>
      <main className="flex-1 p-4">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Casual</h1>
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            <button className="text-gray-400 shadow-lg px-4 py-2 rounded-full">
              Showing 1-10 of 100 Products
            </button>
            <button className="text-black shadow-lg px-4 py-2 rounded-full">Sort by: Most Popular</button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="border p-4 rounded-lg hover:shadow-lg transition-shadow justify-center items-center">
              <Image
                src={product.Image}
                alt={product.name}
                width={285}
                height={290}
                className="w-[285px] h-[290px] object-cover mb-4 rounded "
              />
              <h3 className="font-semibold text-lg text-center">{product.name}</h3>
              <p className="text-gray-600 text-center">${product.price}</p>
              <p className="text-yellow-500 text-center">⭐⭐⭐⭐ {product.rating}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-10 space-x-4">
          <button className="bg-gray-200 px-6 py-2 rounded-lg">Previous</button>
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-lg"
            >
              {page}
            </button>
          ))}
          <button className="bg-gray-200 px-6 py-2 rounded-lg">Next</button>
        </div>
      </main>
    </div>
  );
}
