//Step1) 훅 참조하기
import React, { useState } from 'react';

const UseState = () => {
  //Step2) 훅 변수 정의 및 값 초기화 하기
  const [value, setValue] = useState(0);

  //Step3) Setter함수로 훅 변수 값 변경하기
  const onDecrease = () => {
    setValue(value - 1);
  };

  return <div></div>;
};

export default UseState;
