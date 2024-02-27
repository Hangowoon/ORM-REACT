import React, { useState } from 'react';

const UseStateHook = () => {
  //스테이트 훅의 상태값 구조 정의 및 값할당
  const [count, setCount] = useState(0);

  //증가 처리 이벤트
  const onIncrease = () => {
    setCount(count + 1);
  };

  //감소 처리 이벤트
  const onDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>UseState 훅 개발 샘플</h1>

      <h3>카운터:{count}</h3>
      <button onClick={onIncrease}>증가</button>
      <button onClick={onDecrease}>감소</button>
    </div>
  );
};

export default UseStateHook;
