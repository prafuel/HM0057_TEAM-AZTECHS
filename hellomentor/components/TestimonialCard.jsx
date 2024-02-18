
const TestimonialCard = ({name, desc, rating}) => {
  return (
    <div
  className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
  <p className='text-white font-black text-[48px]'>"</p>
    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{desc}</p>
    
    

  <div className='mt-7 flex justify-between items-center gap-1'>
  <div className='flex-1 flex flex-col'>
  <p className='text-white font-medium text-[16px]'> 
    <span className='blue-text-gradient'>@</span> {name}
  </p>
  </div>
  
  </div>
  <div className="mt-5 text-white">
    {rating} ⭐
  </div>
  </div>
  </div>
  )
}

export default TestimonialCard