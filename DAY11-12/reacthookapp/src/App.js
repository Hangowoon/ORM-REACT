// 전역상태관리를 위한 객체참조하기
import React, { createContext, useState } from 'react';

import logo from './logo.svg';
import './App.css';

import UseStateHook from './UseStateHook';
import UseReducerHook from './UseReducerHook';

import PerformHook from './PerformHook';

import Counter from './context/Counter';
import TodoList from './context/Todolist';

//전역 리엑트 어플리케이션 컨텍스트 만들고 외부로 노출하기
export const AppContext = createContext();

//카운터 전용 데이터 제공 프로바이더 생성함수 정의하기
//전역데이터를 제공해주는 최상위 컴포넌트 정의하기
function CounterProvider([children]) {
  //전역으로 사용될 할일건수 상태값 정의
  //useState를 이용한 데이터 관리시 별도 SETTER함수 없이 사용하는 경우 변수만 할당함..
  const count = useState(0);
  return <AppContext.Provider value={count}>{children}</AppContext.Provider>;
}

function App() {
  return (
    <div className='App'>
      {/* 상태관리 및 컴포넌트 생애주기 관리 훅 테스트 */}
      <UseStateHook></UseStateHook>
      <hr></hr>
      <UseReducerHook></UseReducerHook>
      <hr></hr>
      <PerformHook></PerformHook>
      <hr></hr>
      <CounterProvider>
        <Counter></Counter>
        <hr></hr>
        <TodoList></TodoList>
      </CounterProvider>
    </div>
  );
}

export default App;
