"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Form from "@components/Form";
import MentorCard from "@components/MentorCard";
import Image from "next/image";
import gif from '@assets/loading.gif'

import axios from "axios";

const Search = () => {
    const router = useRouter();
  
    const [submitting, setSubmitting] = useState(false);
    const [searchText, setSearchText] = useState({
      data:''
    });

    const search_width = {
        maxWidth: '40rem'
    }

    const [mentorData, setMentorData] = useState([])
  
    const createSearch = async (e) => {
      e.preventDefault();
      setSubmitting(true);
  
    //Our custom API to send the post information to a api route.
    //       const response = await fetch('http://127.0.0.1:8000', 
    //       {
    //         method: 'POST',
    //         body: JSON.stringify(searchText)
    //       })
    //       const inData = await response.json();
  
    //       if(response.ok){
    //           console.log(response);
    //       }
    //   } catch(err){
    //       console.log(err);
    //   } finally {
    //       setSubmitting(false);
    //   }
        const res = await axios.post("http://127.0.0.1:8000",
            {
                data: searchText.data
            }
        ).then((res) => {setMentorData(res.data.output)})
        .catch((err) => {console.log(err)})
        
        setSubmitting(false);
        
}
    
      return (
        <section className="mt-12" >
    <div className="flex flex-col justify-center">
     <Form 
       type="Search"
       search={searchText}
       setSearch={setSearchText}
       submitting={submitting}
       handleSubmit={createSearch}
      />

      {mentorData ?
      (
        <div className="mt-12 mb-12 w-full gap-y-7">
        {mentorData.map((card) => (
            <MentorCard 
             key={card.name}
             name= {card.name}
             position= {`${card.position}`.toUpperCase()}
             experience= {card.yoe}
             contact= {card.contact}
             email= {`${card.name}0${card.yoe}@gmail.com`}
            />
        ))}
     </div> ) : (<div>
      {submitting &&
       <div className="mt-12">
        <p className="desc">Searching...</p>
       </div>
       }
     </div>)}
     </div>
        </section>
      
    )
  }

export default Search