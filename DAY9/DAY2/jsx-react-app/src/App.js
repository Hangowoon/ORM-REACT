import logo from './logo.svg';
import './App.css';

function App() {
  // P1 : 상수/변수를 정의하고 화면영역에 출력하기
  const userName = '한고운';

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />

        {/* P1 : 변수값 출력하기 */}
        <h3>현재 사용자는 {userName} 입니다.</h3>

        {/* P2 : 삼항연산자를 통해 화면영역에 제어구문 기반 데이터 추력하기 */}
        {userName === '한고운' ? (
          <h4>{userName}님 반가워요.</h4>
        ) : (
          <h4>게스트님 반가워요.</h4>
        )}

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
