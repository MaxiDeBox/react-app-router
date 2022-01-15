import React from 'react'
import './Car.scss'


const Car = props => {
  return (
    <div className={'Car'}>
      <h3>Название машины: {props.name}</h3>
      <p>Год: <strong>{props.year}</strong></p>
    </div>
  )
}

export default Car
