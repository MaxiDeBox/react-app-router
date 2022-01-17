import React from 'react'
import './Car.scss'
import { useNavigate } from "react-router-dom";

const Car = (props) => {
  let navigate = useNavigate();

  let goToPage = (name) => {
    navigate({
      pathname: '/cars/' + name.toLowerCase()
    });
  };

  return (
    <div className={'Car'} onClick={() => goToPage(props.name)}>
      <h3>Название машины: {props.name}</h3>
      <p>Год: <strong>{props.year}</strong></p>
    </div>
  )
}

export default Car;
