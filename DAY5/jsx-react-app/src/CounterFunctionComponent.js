import React, { useState } from 'react'

const CounterFunctionComponent = () => {
  const [count, setCount] = useState(100)

  const [userName, setUserName] = useState('한고운')

  const [goods, setGoods] = useState([
    { id: 1, productName: '제품명1', price: 5000 },
    { id: 2, productName: '제품명2', price: 5000 },
  ])

  const [isLoggined, setIsLoggined] = useState(true)

  const [user, setUser] = useState({ userId: 'gowoon', userName: '한고운' })

  // 증가 버튼 클릭시 호출되는 이벤트 처리 핸들러 함수 정의
  const handleIncrease = () => {
    console.log('증가 버튼이 클릭되었습니다.')
    //setCount(count + 1)
    setCount((prevCount) => prevCount + 1)
  }

  // 감소 버튼 클릭시 호출되는 이벤트 처리 핸들러 함수 정의
  const handelDecrease = () => {
    console.log('감소 버튼이 클릭되었습니다.')
    setCount((prevCount) => prevCount - 1)
  }

  return (
    <div>
      <h1>카운터 상태값 표시: {count}</h1>
      <button onClick={handleIncrease}>1증가</button>
      <button onClick={handelDecrease}>1감소</button>
    </div>
  )
}

export default CounterFunctionComponent
