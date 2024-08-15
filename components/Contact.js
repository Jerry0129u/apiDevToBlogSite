import { Footer } from "./Footer";
import { Header } from "./Header";

export default function Contact() {
return (
  <div>
    <Header />
      <div className="my-[100px] w-[895px] h-[895px] mx-auto" id="Contact">
       <div className="max-w-[768px] w-full flex flex-col gap-5 mx-[63px]">
        <div className="w-[624px] flex flex-col gap-5 pt-4">
        <h3 className="font-[600] text-[36px] leading-10 text-black">Contact Us</h3>
        <p className="font=[400] text-[16px] leading-6 text-zinc-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        </div>
        <div className="w-[638px] flex gap-12 pb-10">
            <div className="w-[294px] h-[133px] rounded-xl border-[1px] border-gray-200 p-4">
                <h4 className="font-[600] text-[24px] leading-10 text-black">Address</h4>
                <p className="font-[400] text-[18px] leading-7 text-zinc-500">1328 Oak Ridge Drive, Saint Louis, Missouri</p>
            </div>
            <div className="w-[294px] h-[133px] rounded-xl border-[1px] border-gray-200 p-4">
                <h4 className="font-[600] text-[24px] leading-10 text-black">Contact</h4>
                <p className="font-[400] text-[18px] leading-7 text-zinc-500 w-[160px]">313-332-8662
                info@email.com</p>
            </div>
        </div>
       </div>
        <form className="w-[643px] bg-neutral-100 rounded-lg mx-[126px]">
           <div className="pt-[29px] pl-[35px] pb-[44px] flex flex-col gap-6">
            <h4 className="font-[600] text-[18px] leading-6 text-black">Leave a Message</h4>
            <div className="flex gap-7">
              <input type="text" placeholder="Your Name" class="h-9 w-[225px] bg-white rounded pl-4"/>
              <input type="text" placeholder="Your Email" class="h-9 w-[225px] bg-white rounded pl-4"/>
            </div>
            <input type="text" placeholder="Subject" class="h-9 w-[478px] bg-white rounded pl-4"/>
            <input type="text" placeholder="Write a message" class="h-[134px] w-[478px] bg-white rounded pl-4 pb-[90px]"/>
            <div className="w-[130px] h-[40px] rounded-md py-[10px] px-4 bg-indigo-500">
               <p className="font-[500] text-[14px] leading-5 items-center">Send Message</p>
            </div>
           </div>
        </form>
      </div>
    <Footer />
  </div>
)}
