import Button from "../components/Button"
import { shoe8 } from "../assets/images";


const SuperQuality = () => {
  return (
    
    <section
      id="about-us"
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='text-blue font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          We are New Special Interest Club!
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
        If you think you have what it takes, then sign up and join us in shaping an innovative future!

Be a member of ISATech - ISAT U Innovators and Technopreneurs Society!
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Be part of our organization!
        </p>
        <div className='mt-11'>
          <Button label='Sign up now' />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>  
    </section>
  )
}

export default SuperQuality