import { Cards } from "./Cards";
import { Carousel } from "./Carousel";
import { Trend } from "./Trend";

export function Hero() {
return (
 <div className="container mx-auto py-20 max-w-[1216px] w-full mt-[100px] mb-[69px]" id="Home">
   <Carousel />
   <Trend />
   <Cards />
 </div>
)}

