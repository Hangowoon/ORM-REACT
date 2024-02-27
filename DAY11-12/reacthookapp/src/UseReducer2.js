//Step1) 훅 참조하기
import React, { useReducer } from 'react';
//Step3) Reduser 외부파일 참조하기
import countReducer from './countReducer';

const UseReducer2 = () => {
  //Step2) 훅 변수 정의 및 값 초기화 하기
  const [count, dispatchCount] = useReducer(countReducer, 0);

  return (
    <div>
      <h1>UseReducer 훅 사용하기</h1>

      <h3>카운터:{count}</h3>
      <button onClick={() => dispatchCount({ type: 'INCREASE' })}>증가</button>
      <button onClick={() => dispatchCount({ type: 'DECREASE' })}>감소</button>
      <button onClick={() => dispatchCount({ type: 'INIT' })}>초기화</button>
    </div>
  );
};

export default UseReducer2;
