import React, { useState } from 'react';
import './Tour.scss';

export default function Tour({ tour, removeTour }) {
  const { id, img, city, name, info } = tour;
  
  const [showInfo, setShowInfo] = useState(false);
  function setHandleInfo() {
    setShowInfo(showInfo => !showInfo)
  }
  return (
    <article className='tour'>
      <div className='img-container'>
        <img src={img} alt="" />
        <span className="close-btn" onClick={() => removeTour(id)}>
          <i className="fas fa-window-close" />
        </span>
      </div>
      <div className="tour-info">
        <h3>{city}</h3>
        <h4>{name}</h4>
        <h5>
          you want to know more? then click here{" "}
          <span onClick={setHandleInfo}>
            <i className="fas fa-caret-square-down" />
          </span>
        </h5>
        {
          showInfo ? showInfo && <p>{info}</p> : null
        }

      </div>
    </article>
  )
}
