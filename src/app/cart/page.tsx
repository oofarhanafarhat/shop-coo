import Image from "next/image";
import OrderSummary from "@/app/cart/orderSummary";

export default function CartPage() {
  return (
    <div className="bg-[#FFFFFF] p-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-6 text-center lg:text-left">
          Your Cart
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4 border border-gray-200 p-4 rounded-md">
            <div className="lg:col-span-2 space-y-4 border border-gray-200 p-4 rounded-md">
              <div className="flex justify-between items-center w-full h-[160px] lg:h-[124px] shadow-lg border border-gray-100 p-4">
                <div className="flex items-center gap-4">
                  <Image
                    src="/p02.png"
                    width={80}
                    height={80}
                    alt="Gradient Graphic T-shirt"
                    className="rounded-md"
                  />
                  <div className="flex flex-col">
                    <h2 className="lg:text-lg font-semibold">
                      Gradient Graphic T-shirt
                    </h2>
                    <p className="text-sm text-gray-500">Size: Large</p>
                    <p className="text-sm text-gray-500">Color: White</p>
                    <p className="font-bold">$145</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-12 ">
                  <Image
                    src={"/v06.png"}
                    width={18}
                    height={19}
                    alt=""
                    className="text-red-500 hover:text-red-700 text-2xl"
                  />
                  <div className="flex items-center border rounded-md">
                    <button className="px-3 py-1 border-r">-</button>
                    <span className="px-4">1</span>
                    <button className="px-3 py-1 border-l">+</button>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center w-full h-[160px] lg:h-[124px] shadow-lg border border-gray-100 p-4">
                <div className="flex items-center gap-4">
                  <Image
                    src="/h3.png"
                    width={80}
                    height={80}
                    alt="Checkered Shirt"
                    className="rounded-md"
                  />
                  <div className="flex flex-col">
                    <h2 className=" lg:text-lg font-semibold">
                      Checkered Shirt
                    </h2>
                    <p className="text-sm text-gray-500">Size: Medium</p>
                    <p className="text-sm text-gray-500">Color: Red</p>
                    <p className="font-bold">$180</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-12">
                  <Image
                    src={"/v06.png"}
                    width={18}
                    height={19}
                    alt=""
                    className="text-red-500 hover:text-red-700 text-2xl"
                  />
                  <div className="flex items-center border rounded-md">
                    <button className="px-3 py-1 border-r">-</button>
                    <span className="px-4">1</span>
                    <button className="px-3 py-1 border-l">+</button>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center w-full h-[160px] lg:h-[124px] shadow-lg border border-gray-100 p-4">
                <div className="flex items-center gap-4">
                  <Image
                    src="/h2.png"
                    width={80}
                    height={80}
                    alt="Skinny Fit Jeans"
                    className="rounded-md"
                  />
                  <div className="flex flex-col">
                    <h2 className="lg:text-lg font-semibold">
                      Skinny Fit Jeans
                    </h2>
                    <p className="text-sm text-gray-500">Size: Large</p>
                    <p className="text-sm text-gray-500">Color: Blue</p>
                    <p className="font-bold">$240</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-12">
                  <Image
                    src={"/v06.png"}
                    width={18}
                    height={19}
                    alt=""
                    className="text-red-500 hover:text-red-700 text-2xl"
                  />
                  <div className="flex items-center border rounded-md">
                    <button className="px-3 py-1 border-r">-</button>
                    <span className="px-4">1</span>
                    <button className="px-3 py-1 border-l">+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <OrderSummary subtotal={565} discount={113} deliveryFee={15} />
        </div>
      </div>
    </div>
  );
}
