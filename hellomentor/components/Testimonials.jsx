import { testimonials } from "@constants"
import TestimonialCard from "./TestimonialCard"
import { styles } from "@styles"
import { Tilt } from "react-tilt"

const Testimonials = () => {
  return (
    <div className='mt-12 bg-tertiary bg-opacity-90 rounded-[20px] w-screen' >
      <div className="pb-48 flex items-center justify-center">

        <h2 className="mt-5 text-5xl font-extrabold leading-[1.15] text-white sm:text-6xl">
           Testimonials 
          </h2>
      
         
        
      </div>
      <div className={`-mt-20 pl-12 pr-12 pb-14 flex flex-wrap gap-16 justify-center`}>
        
          {testimonials.map((testimonial, index) => (
            <Tilt>
          <TestimonialCard
            key= {testimonial.name}
            index={index}
            {...testimonial}
          />
          </Tilt>
        ))}
        
        
      </div>
    </div>
  )
}

export default Testimonials