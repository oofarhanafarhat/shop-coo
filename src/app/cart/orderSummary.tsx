import Link from "next/link";
interface OrderSummaryProps {
    subtotal: number;
    discount: number;
    deliveryFee: number;
  }
  
  export default function OrderSummary({ subtotal, discount, deliveryFee }: OrderSummaryProps) {
    const total = subtotal - discount + deliveryFee;
  
    return (
      <div className="bg-white p-6 shadow-md rounded-md">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>${subtotal}</p>
          </div>
          <div className="flex justify-between text-red-500">
            <p>Discount (-20%)</p>
            <p>-${discount}</p>
          </div>
          <div className="flex justify-between">
            <p>Delivery Fee</p>
            <p>${deliveryFee}</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between font-bold text-lg">
            <p>Total</p>
            <p>${total}</p>
          </div>
        </div>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Add promo code"
            className="w-[250px] border rounded-full px-4 py-2 mb-4"
          />
          <button className="rounded-full bg-[#000000] text-[#FFFF] w-full lg:w-[120px] px-10 py-2  mb-6 lg:mb-2 ">Apply</button>
        <Link href={"/"}>  <button className="w-full bg-[#000000] rounded-full text-white py-2  hover:bg-gray-800">
            Go to Checkout →
          </button></Link>
       
        </div>
      </div>
    );
  }