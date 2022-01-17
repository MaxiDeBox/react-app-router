import React from 'react';
import {useParams} from 'react-router';

const CarDetail = (props) => {
  let params = useParams();

  return (
    <div style={{textAlign: 'center'}}>
      <h1>{params.name}</h1>
    </div>
  );
}

export default CarDetail
