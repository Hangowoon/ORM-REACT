import logo from './logo.svg';
import './App.css';

//라우터 참조
import { Route, Routes } from 'react-router-dom';

// 레이아웃 컴포넌트 참조
import TopMenuBar from './components/TopMenu';
import FooterBar from './components/Footer';

// 페이지 컴포넌트 참조
import MainPage from './pages/Main';
import AboutPage from './pages/About';

import ArticleListPage from './pages/articles/ArticleList';
import ArticleRegistPage from './pages/articles/ArticleRegist';
import ArticleModifyPage from './pages/articles/ArticleModify';

function App() {
  return (
    <div className='App'>
      <TopMenuBar></TopMenuBar>

      {/* 페이지 라우팅 주소체계 */}
      <Routes>
        <Route path='/' Component={MainPage} exact={true}></Route>

        <Route
          path='/article/list'
          Component={ArticleListPage}
          exact={true}
        ></Route>
        <Route
          path='/article/regist'
          Component={ArticleRegistPage}
          exact={true}
        ></Route>
        <Route
          path='/article/modify/:idx'
          Component={ArticleModifyPage}
          exact={true}
        ></Route>

        <Route path='/about' Component={AboutPage} exact={true}></Route>
        <Route path='/company' Component={AboutPage} exact={true}></Route>
      </Routes>

      <FooterBar></FooterBar>
    </div>
  );
}

export default App;
