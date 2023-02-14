import React from 'react'

const card = (data) => {
  return (
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

  )
}

export default card