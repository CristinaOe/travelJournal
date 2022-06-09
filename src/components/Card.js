import React from "react";

export default function Card(props) {
  return (
    <div className='card'>
      <img src={`./images/${props.item.img}`} className='card--image' />
      <div className='card--info'>
        <div className='card--location'>
          <img src='./images/location.png' className='location-pin' />
          <p className='card--country'>{props.item.location.country}</p>
          <a
            href={`${props.item.location.maps}`}
            className='card--maps'
            target='_blank'
          >
            View on Google maps
          </a>
        </div>
        <h2>{props.item.title}</h2>
        <p className='card--dates'>{props.item.dates}</p>
        <p className='card--description'>{props.item.description}</p>
      </div>
    </div>
  );
}
