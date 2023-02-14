import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import './Style.css';

const Explore = () => {

  const { pageRoute,userId } = useParams();
  const [data,setData] = useState({})
  
  useEffect(() => {
        fetch(`https://super-bee-wrap.cyclic.app/api/${pageRoute}`)
            .then(response => response.json())
            .then((details) => {
                console.log(details);
                const filterArr = details.filter((blog) => blog.id === parseInt(userId))
                setData(filterArr[0])
            })
    },[userId,pageRoute])

    return (
      
        <div>
          <div className="detailsContainer">
    
            <img src={data.image} alt="link can't resolved" className='detailImage'/>
            <h2 className="detailTitle">
             {data.title} 
            </h2>
            <p className="details">
              {data.content}
            </p>
            <h3 className="detailIssue">
              release date : <span className="date">{data.date}</span>
            </h3>
          </div>
          
        </div>
      )
}

export default Explore