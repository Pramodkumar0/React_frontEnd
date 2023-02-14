import React, { useEffect , useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    const [dataBolly,setDataBolly] = useState([]);
    const [dataFit,setDataFit] = useState([])
    const [dataTech,setDataTech] = useState([])
    const [dataFood,setDataFood] = useState([])
    const [dataTop,setDataTop] = useState([]);

    useEffect(() => {

        fetch("https://super-bee-wrap.cyclic.app/api/bollywood")
            .then(response => response.json())
            .then((details) => {
                setDataBolly(details)
            })

        fetch("https://super-bee-wrap.cyclic.app/api/fitness")
            .then(response => response.json())
            .then((details) => {
                setDataFit(details)
            })

        fetch("https://super-bee-wrap.cyclic.app/api/technology")
            .then(response => response.json())
            .then((details) => {
                setDataTech(details)
            })

        fetch("https://super-bee-wrap.cyclic.app/api/food")
            .then(response => response.json())
            .then((details) => {
                setDataFood(details)
            })

        fetch("https://super-bee-wrap.cyclic.app/api/top")
            .then(response => response.json())
            .then((details) => {
                setDataTop(details)
            })

    },[])

  return (
    <div className='home'>

        {/* The Banner Part */}
        <div className='bannerContainer'>
            <div className="leftBanner">
                <h1 className='bannerOneTitle'>Title of Vertical Gallery</h1>
            </div>
            <div className="rightBanner">
                <div className="rightSubBanner" id='firstSBanner'>

                </div>
                <div className="rightSubBanner" id='secondSBanner'>
                    
                </div>
            </div>
        </div>


        {/* latest news three cards */}
        <h1 className="headLine">
          Latest Bollywood Article
        </h1>

        <div className='cardContainer'>
        {
            dataBolly.slice(0,3).map((desc,index) => {
                return(
                        <Link className='blogItem-link' to={`/bollywood/${desc.id}`} key={index}>
                    <div className='card' >
                        <img src={desc.image} alt="not found" className='cardImg' />
                        <div className="cardTitle">
                            <h3 className="title">
                                    {desc.title}
                            </h3>
                        </div>
                        <h5 className="dateTitle">
                        release date : <span> {desc.date}</span>
                        </h5>
                    </div>
                </Link> 
                )
            })
        }
        </div>
           
{/*------------------------------- Fitness news three cards---------------------- */}

        <h1 className="headLine">
          Latest Fitness Stories
        </h1>

        <div className='cardContainer'>
        {
            dataFit.slice(0,3).map((desc,index) => {
                return(
                        <Link className='blogItem-link' to={`/fitness/${desc.id}`} key={index}>
                    <div className='card' >
                        <img src={desc.image} alt="not found" className='cardImg' />
                        <div className="cardTitle">
                            <h3 className="title">
                                    {desc.title}
                            </h3>
                        </div>
                        <h5 className="dateTitle">
                        release date : <span> {desc.date}</span>
                        </h5>
                    </div>
                </Link> 
                )
            })
        }
        </div>


{/*------------------------------- Top News cards---------------------- */}
        <div className='mainContainer'>
        
        <div className="leftContainer">
        <h1 className="headingArt">
          Latest Top Article
        </h1>

        {
            dataTop.slice(0,4).map((info,index) => {
                return(
            <Link className='blogItem-link' to={`/top/${info.id}`} key={index}>
            <div className="cardArticle">
                    <img src={info.image} alt="link not found" />
                    <div className="discr">
                        <div className="titleDisc">
                            {info.title}
                        </div>
                        <h4 className="categ">Category : <span>Hollywood</span></h4>
                        <h4 className="issueD">issue Date : <span>{info.date}</span></h4>
                    </div>
            </div>
        </Link>

                )
            })
        }
        
        </div>

        
        <div className="ritContainer">

            <div className="advertise">
                Advertisments
            </div>
            <div className="advertise">
                Advertisments
            </div>
        </div>    
    </div>
        


        {/*------------------------------- Technology news three cards---------------------- */}
        <h1 className="headLine">
          Latest Technology News
        </h1>
        
        <div className='cardContainer'>
        {
            dataTech.slice(0,3).map((desc,index) => {
                return(
                        <Link className='blogItem-link' to={`/technology/${desc.id}`} key={index}>
                    <div className='card' >
                        <img src={desc.image} alt="not found" className='cardImg' />
                        <div className="cardTitle">
                            <h3 className="title">
                                    {desc.title}
                            </h3>
                        </div>
                        <h5 className="dateTitle">
                        release date : <span> {desc.date}</span>
                        </h5>
                    </div>
                </Link> 
                )
            })
        }
        </div>



        {/*------------------------------- Food news three cards---------------------- */}
        <h1 className="headLine">
          Latest Food Article
        </h1>
        <div className='cardContainer'>
        {
            dataFood.slice(0,3).map((desc,index) => {
                return(
                        <Link className='blogItem-link' to={`/food/${desc.id}`} key={index}>
                    <div className='card' >
                        <img src={desc.image} alt="not found" className='cardImg' />
                        <div className="cardTitle">
                            <h3 className="title">
                                    {desc.title}
                            </h3>
                        </div>
                        <h5 className="dateTitle">
                        release date : <span> {desc.date}</span>
                        </h5>
                    </div>
                </Link> 
                )
            })
        }
        </div>

    </div>
  )
}

export default Home;