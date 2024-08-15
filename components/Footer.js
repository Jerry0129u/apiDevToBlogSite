import Link from "next/link";
import Image from "next/image";

export function Footer() {
return (
<div className="bg-gray-200">
 <div className="flex flex-col md:py-16 py-0 max-w-[1215px] w-full mx-auto">
   <div className="flex gap-5">
    <div className="max-w-[289px] w-full pr-[9px] hidden md:block">
        <h3 className="mb-3 font-[600] text-[18px] leading-7 text-gray-900">About</h3>
        <p className="font-[400] text-[16px] leading-6 text-zinc-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        <div className="mt-6 font-[400] text-[16px] leading-[24px] text-gray-900">
        <p>Email : info@jstemplate.net</p>
        <p>Phone : 880 123 456 789</p>
        </div>
    </div>
    <div className="flex-col ml-[120px] md:ml-[20px]">
    <div className="max-w-[521px] w-full flex flex-col gap-2 items-center font-[400] text-[16px] leading-6 text-zinc-700 md:mr-32">
        <Link href="/#">Home</Link>
        <Link href="/#">Blog</Link>
        <Link href="/#">Contact</Link>
    </div>
    <div className="flex gap-[26.67px] mt-8 md:mt-[-85px] md:ml-[561px]">    
        <Image src={"/images/fb-icon.png"} width={16} height={16} alt="fb icon" className="w-4 h-4"/>
        <Image src={"/images/tw-icon.png"} width={16} height={16} alt="tw icon" className="w-4 h-4"/>
        <Image src={"/images/ig-icon.png"} width={16} height={16} alt="ig icon" className="w-4 h-4"/>
        <Image src={"/images/li-icon.png"} width={16} height={16} alt="li icon" className="w-4 h-4"/>
    </div>
    </div>
    </div>
   <hr class="mt-[25px] h-px mb-[20.5px] border-0 bg-slate-400 max-w-[1216px] w-full hidden md:block"></hr>
   <div className="flex gap-16 pb-[20.5px]">
    <div className="w-[231px] h-[54px] mx-auto mt-8 md:mt-0">
         <Image src={"/images/Footer-logo.png"} width={500} height={500} alt="logo"/>
    </div>
    <div className="font-[400] text-[16px] leading-6 text-zinc-700 flex items-center pl-[575px] max-md:hidden">
        <p>Terms of Use</p>
        <hr class="h-px border-0 bg-slate-400 w-[24px] rotate-90"></hr>
        <p>Privacy Policy</p>
        <hr class="h-px border-0 bg-slate-400 w-[24px] rotate-90"></hr> 
        <p>Cookie Policy</p>
    </div>
   </div>
 </div>
</div>
)}

