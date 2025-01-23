import Image from "next/image";

export default function Footer() {
    return (
      <footer className=" w-full  min-h-screen lg:w-[1440px] lg:h-[450px]  lg:justify-center items-center bg-[#F0F0F0]">
        <div>
          <div className=" w-full lg:w-[1340] lg:h-[180px]  bg-[#000000] text-[#FFFFFF]  justify center text-center md:text-left md:flex lg:items-center lg:justify-between items-center rounded-3xl mx-10 sm:pb-6 ">
            <h1 className="text-2xl md:text-3xl lg:text-5xl   font-extrabold rounded-3xl pl-12">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h1>
            <div className="mt-4 md:mt-0  md:flex-row items-center md:space-x-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-4 py-2 rounded-full text-[#000000]  md:w-auto mb-5"
              /> 
              <button className="mt-2 md:mt-0 px-6 py-2 rounded-full bg-white text-black font-semibold">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-[1440px] mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-5  bg-[#F0F0F0] text-gray-700 justify-center items-center text-center">
          <div className="flex-col justify-center items-center ">
            <h3 className="font-extrabold lg:text-2xl text-[#383030]  ">SHOP.CO</h3>
            <p className="mt-2 text-sm  w-[200px] hidden lg:block  lg:ml-10 ">
            We have clothes that suits your style and which you re proud to wear. From women to men.
            </p>
            <div className="flex space-x-4  pt-5 justify-center items-center mr-10">
                <Image src={"/v05.png"}  width={18} height={12} alt="" className="rounded-full bg-gray-100"/>
                <Image src={"/fb.png"}  width={14} height={16} alt="" className="bg-[#000000] rounded-full"/>
                <Image src={"/insta.png"}  width={18} height={16} alt="" className=" bg-gray-100 rounded-full"/>
                <Image src={"/git.png"}  width={18} height={16} alt="" className="rounded-full bg-gray-100"/>
       
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg">COMPANY</h3>
            <ul className="mt-2 space-y-4 text-sm">
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg">HELP</h3>
            <ul className="mt-2 space-y-4 text-sm">
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Condition</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg">FAQ</h3>
            <ul className="mt-2 space-y-4 text-sm">
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg">RESOURCES</h3>
            <ul className="mt-2 space-y-4 text-sm">
              <li>Free eBooks</li>
              <li>Development Tutoria</li>
              <li>How to - Blo</li>
              <li>Youtube Playlis</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-300 py-4">
          <div className="mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 px-4">
            <p>Shop.co © 2000-2023, All Rights Reserved</p>
            <div className="flex space-x-4 mt-2 md:mt-0  pr-32">
              <Image src="/Visa.png" width={32}  height={10} alt="Visa" className="h-3" />
              <Image src="/Mastercard.png"  width={25}  height={15} alt="Mastercard" className="h-3" />
              <Image src="/paypal.png"  width={34}  height={10} alt="Paypal" className="h-3" />
              <Image src="/dot.png"  width={26}  height={12} alt="Apple Pay" className="h-4" />
              <Image src="/dot1.png"  width={28}  height={12} alt="Google Pay" className="h-4" />
            </div>
          </div>
        </div>
      </footer>
    );
  }
