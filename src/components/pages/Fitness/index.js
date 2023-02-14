import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Fitness = () => {

    const [data,setData] = useState([]);
    const [dataTop,setDataTop] = useState([]);

    useEffect(() => {
        fetch("https://super-bee-wrap.cyclic.app/api/fitness")
            .then(response => response.json())
            .then((details) => {
                console.log(details);
                setData(details)
            })

        fetch("https://super-bee-wrap.cyclic.app/api/top")
            .then(response => response.json())
            .then((details) => {
                console.log(details);
                setDataTop(details)
            })

    },[])

    return (
        <div className='bollyContainer'>
        <div className="leftContained">
          <h1 className='bollyTitle'>Fitness</h1>
    
          {
            data.slice(0,7).map((data,index) => {
                return(
        <Link className='blogItem-link' to={`/fitness/${data.id}`} key={index}>
          <div className="cardContained">
              <img src={data.image} alt="link not working" />
              <div className="cardContents">
                  <h3 className="newsTitle">
                    {data.title}
                  </h3>
                  <div className="newsContent">
                    {data.content}
                  </div>
                    <h4 className="readMore">...read more</h4>
                  <h3 className="dateIssue">Issue date : <span>05/07/2022</span></h3>
              </div>
    
          </div>
        </Link>
    
                )
            })
          }
    
          
        </div>
    
    
        <div className="rightContained">
          <h1 className='bollyTitle'>Top Posts</h1>
    
          {
            dataTop.slice(0,4).map((data,index) => {
                return(
          <Link className='blogItem-link' to={`/top/${data.id}`} key={index}>
              <div className="cardContaining">
                <div className="topCardImg">
    
                <img src={data.image} alt="" />
                </div>
                <div className="topCardContents">
                  <h3 className="topNewsTitle">
                  {data.title}
                  </h3>
                  <h4 className="topReadMore">...read more</h4>
                  <h4 className="topDateIssue">Issue date : <span>{data.date}</span></h4>
                 
                </div>
              </div>
          </Link>
    
                )
            })
          }
    
    
        </div>
    
      </div>
      )
}

export default Fitness