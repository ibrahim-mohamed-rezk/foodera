import React from 'react'
import './card.css'

const Card = (props) => {
  return (
    <div className='card'>
        <div className="card-img">
            <img src={props.img} alt="card-img" />
        </div>
        <br />
        <br />
        <h4>
            {props.title}
        </h4>
        <p>
            {props.desc}
        </p>
        <div className="price">
            <span>
                {props.price}
            </span>
            <del>
                {props.oldprice}
            </del>
        </div>
        <hr />
        <button>Order Now</button>
    </div>
  )
}

export default Card