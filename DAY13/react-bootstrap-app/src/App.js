import React from 'react';

// bootstrap css 파일 참조하기
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// bootstrap css Sass(scss)파일을 직접 참조하고 css번들링을 통해 부트스트랩.css파일 생성해서 사용하기
// React프로젝트에서 ~.scss파일을 참조한 경우 반드시 번들링 SW를 통해서 CSS번들링과정을 거친후에야 CSS사용가능함
// yarn add node-sass를 리엑트 프로젝트에 설치하면 리엑트 파일내 ~.scss파일이 node-sass에 의해 자동 번들링(웹팩)되어 순수 css로 변환됨
// import "../node_modules/bootstrap/scss/bootstrap.scss";

//라우팅을 위한 react-router-dom 패키지의 BrowserRouter, Routers, Route 참조하기
import { BrowserRouter as Router, Routes, Route } from 'react-fouter-dom';

//React.lazy()사용하지 않고 직접 컴포넌트 참조하여 라우팅처리하기- 비권장 (컴포넌트가 많지 않을 때 사용)
import GNB from './components/GNB';
import Footer from './components/Footer';

import Main from './pages/Main';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className='App'>
      {/* 최상위 컴포넌트에 전체 어플리케이션 레이아웃을 구성합니다. */}

      {/*최상위 GNB 전역메뉴 표시 영역 */}
      <GNB />

      {/*라우트를 이용한 컨텐츠 표시 영역*/}
      <div className='auth-wrapper'>
        <div className='auth-inner'>
          <Routes>
            <Route path='/' Component={Main} />
            <Route path='/singin' Component={Login} />
            <Route path='/singup' Component={Register} />
          </Routes>
        </div>
      </div>

      {/* 최하단 카피라이트 공통 레이아웃 영역 */}
      <Footer />
    </div>
  );
}

export default App;
