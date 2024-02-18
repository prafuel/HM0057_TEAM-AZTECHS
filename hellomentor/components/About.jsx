import React from 'react'
import { styles } from '@styles'

const About = () => {
  return (
    <section className='pb-14 pt-14 glassmorphism w-screen'>
      <div className='flex justify-center mb-8'>
      <h2 className="mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl">
           About Us
          </h2>
      </div>
<div className='flex justify-center'>
      <p
      className='mt-5 text-lg text-gray-600 sm:text-xl  max-w-5xl leading-[30px] text-justify'
      >
      
Welcome to HelloMentor, where mentorship meets opportunity! We understand that finding the right mentor can be a transformative experience, and that's why we've created a platform dedicated to connecting eager learners with experienced mentors who are passionate about sharing their knowledge.
<br />
<br />
At HelloMentor, we believe in the power of mentorship to inspire, guide, and empower individuals on their professional and personal journeys. Whether you're a student navigating your academic path, a professional seeking career guidance, or an entrepreneur looking to refine your skills, our platform is designed to match you with the perfect mentor tailored to your unique needs.
<br />
<br />
Our mission is to bridge the gap between curiosity and expertise, providing a seamless and enriching experience for both mentors and mentees. We have curated a diverse and accomplished group of mentors spanning various industries, ensuring that you can find guidance in virtually any field. Our mentors are experienced professionals, thought leaders, and experts committed to fostering growth, cultivating talent, and giving back to the community.


      </p>
      </div>
    </section>
  )
}

export default About