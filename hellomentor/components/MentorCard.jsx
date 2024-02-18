
import Image from "next/image"
import photo from "../assets/profile.png"

const MentorCard = ({name, position, experience, contact, email}) => {
  return (
    (
        <div
      className="mt-7 glassmorphism flex flex-wrap items-center justify-center space-x-4 p-12 shadow-md rounded-lg hover:shadow-lg hover:cursor-pointer"
    >
      <div className="flex flex-col items-center justify-start space-y-6 mr-28">
        <Image src={photo} width={40} height={40} alt={name} className=" rounded-full object-cover" />
        {position && <p className="desc_search  text-gray-600 mb-2">{position}</p>}
      </div>
      <div className="flex flex-col ml-12 space-y-2 justify-end">
        <h3 className="search_title text-lg font-semibold text-gray-800">{name}</h3>
        {experience && <p className="desc_search text-gray-600 mb-2">Experience: {experience} years</p>}
        {/* Display contact details only if enabled */}
        <div className="flex items-center space-x-2">
        <a href={`tel:${contact}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
          <svg className="mr-2 h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 32h4a2 2 0 0 1 2-2V7a2 2 0 0 1 2-2v22a2 2 0 0 1-2 2zM8 8v24a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2v22a2 2 0 0 1 2 2z"></path>
          </svg>
          Call
        </a>
        <a href={`mailto:${email}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300">
          <svg className="mr-2 h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l4.615 4.615A2 2 0 0 1 8 13H16m-5-5l6 6a2 2 0 0 0 3-3l-6-6zM15 12v-2m-6 4h2m6 4h2m-6-4h-2m6-4h-2"></path>
          </svg>
          Email
        </a>
      </div>
      </div>
    </div>
      )
  )
}

export default MentorCard