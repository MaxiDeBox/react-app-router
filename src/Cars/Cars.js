import React, {Component} from 'react'
import Car from './Car/Car'
import { useNavigate } from "react-router-dom";

export default class Cars extends Component {
  state = {
    cars: [
      {name: 'Ford', year: 2018},
      {name: 'Audi', year: 2016},
      {name: 'Mazda', year: 2010}
    ]
  }

  render() {
    return (
      <div style={{
        width: 400,
        margin: 'auto',
        paddingTop: '20px',
        textAlign: 'center'
      }}>
        <GoHome />
        <hr/>
        {this.state.cars.map((car, index) => {
          return (
            <Car
              key={index}
              name={car.name}
              year={car.year}
            />
          )
        })}
      </div>
    )
  }
}

function GoHome(props) {
  let navigate = useNavigate();
  let goToHomePage = () => {
    navigate({
      pathname: '/'
    });
  } ;
  return (<button onClick={goToHomePage}>Go to home page</button>);
}
