import { arrowRight } from "../assets/icons"
import Button from "../components/Button";
import { useState } from 'react';
import { shoes, statistics } from "../constants"
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [bigShoeImg, setBighShoeImg] = useState(bigShoe1)
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
 <div className="relative w-1/2 flex flex-col justify-center items-center mx-auto max-xl:padding-x pt-28 text-center">

<p className="mb-5 text-2xl font-montserrat text-white">ISAT U Innovators and Entrepreneurs Society</p>
<h1 className="mt-10 font-palanquin text-9xl max-sm:text-5xl max-sm:leading-[82px] font-bold">
  <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 font-bold">ISATech</span>
  <br />
  <span className="text-yellow inline-block mt-3 font-bold">Society</span>
</h1>
<br />
<p className="text-white font-bold font-montserrat text-lg leading-7 mt-6 mb-14 sm:max-w-sm">
  Dream, innovate, succeed!
</p>
</div>



      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
        src={bigShoeImg}
        alt='shoe collection'
        width={610} 
        height={500}
        className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm-left-[10%] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <div key={shoe}>
              <ShoeCard
              imgURL={shoe}
              changeBigShoeImage={(shoe) => setBighShoeImg (shoe)}
              bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Hero