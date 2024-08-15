import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

export function Header() {
    const [open, setOpen] = useState(false);

function toggleMenu() {
    setOpen(!open);
  }

return (
 <div className="py-6 px-5 flex max-w-[1130px] w-full mx-auto md:py-8">
  <div className="md:max-w-[158px] w-full md:h-9 flex gap-[183px]">  
   <Image src={"/images/Logo.png"} width={135} height={26} alt="logo"/>
   <Image src={"/images/Menu-icon.png"} width={32} height={24} alt="menu" className="md:hidden cursor-pointer" onClick={toggleMenu}/>
  </div>

  <div className="hidden md:flex md:gap-5 md:visible ">
    <div className="flex gap-10 px-[222.5px] py-[6px] text-slate-600 ml-[118px] w-[667px]">
     <Link href="#Home">Home</Link>
     <Link href="#Blog">Blog</Link>
     <Link href="#Contact">Contact</Link>
    </div>
    <div class="relative max-w-40 w-full"> 
     <input type="text" placeholder="Search" class="h-9 pl-4 bg-zinc-100 rounded"/>
     <Image src={"/images/Search-icon.png"} width={16} height={16} alt="search icon" class="absolute top-[10px] right-[-20px]"/>
    </div>
  </div>

  <div className={open ? 'fixed inset-0 z-30' : 'hidden'}>
    <div className="h-20 bg-white mx-0 z-40">
     <div className="flex px-2 py-[12px] gap-[145px]">
      <div className="flex gap-5 py-4 pl-4 text-slate-600">
       <Link href="/#">Home</Link>
       <Link href="/#">Blog</Link>
       <Link href="/#">Contact</Link>
      </div>
      <div>
      <Image src={"/images/Close-icon.png"} width={64} height={64} alt="Close Menu" onClick={toggleMenu} class="w-[32px] h-[32px] mt-3"/>
      </div>
     </div>
    </div>
   </div>
 </div>
)}

