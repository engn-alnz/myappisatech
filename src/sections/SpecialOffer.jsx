import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
      <img
          src={offer}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full'
        />
        </div>
        <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-yellow'>ISATech Society </span>
          Office
        </h2>
        <p className='text-xl mt-4 info-text'>
          Our office is located at the ISAT U Pugaran, under the KWADRA TBI and Inttelectual Property Office. The building is managed by the university vice president for research and extension, Dr. Carmelo V. Ambut.
          The maintain foucs of researchb hub building is to foster development and innovations through research and extension.
        </p> 
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='View Location' iconURL={arrowRight} />
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />  
        </div>
        </div>
    </section>
  )
}

export default SpecialOffer