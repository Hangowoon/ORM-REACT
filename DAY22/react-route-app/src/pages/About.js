import React from 'react';
import { useParams } from 'react-router-dom';

//파라미터 방식 v.6x
const About = () => {
  //파라미터 방식
  const { category } = useParams();

  return (
    <div>
      <h1>상품 분류 정보: {category}</h1>
    </div>
  );
};

export default About;
