import React, { useState } from "react"

const Place = ({ image, name, price, info, handleRemove, id }) => {
  const [readmore, setReadMore] = useState(false)
  return (
    <div className="place">
      <img src={image} alt="tour image" />
      <div className="text">
        <div>
          <h3>{name}</h3>
          <span>${price}</span>
        </div>
        <p>{readmore ? info : `${info.substring(0, 200)}...`}</p>
        <span className="readmore" onClick={() => setReadMore(!readmore)}>
          {readmore ? "Read less" : "Read more"}
        </span>
      </div>
      <button onClick={(e) => handleRemove(id, e.target)}>Not interested</button>
    </div>
  )
}

export default Place
