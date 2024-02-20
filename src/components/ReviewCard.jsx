const ReviewCard = ({ imgURL, customerName, feedback }) => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <img
        src={imgURL}
        alt='customer'
        className='rounded-full object-cover w-[120px] h-[120px]'
      />
       <h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>
        {customerName}
      </h3>
      <p className='max-w-sm text-center info-text'>{feedback}</p>
      <div className='mt-3 flex justify-center items-center gap-2.5'>
        <p className='text-xl font-montserrat text-slate-gray'></p>
      </div>
     
    </div>
  )
}

export default ReviewCard