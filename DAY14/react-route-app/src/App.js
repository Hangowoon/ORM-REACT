import logo from './logo.svg';
import './App.css';

//라우터 참조
import { Route, Routes } from 'react-router-dom';

// 레이아웃 컴포넌트 참조
import TopMenuBar from './components/TopMenu';
import FooterBar from './components/Footer';

// 페이지 컴포넌트 참조
import MainPage from './pages/Main';

import ArticleListPage from './pages/articles/ArticleList';
import ArticleRegistPage from './pages/articles/ArticleRegist';
import ArticleModifyPage from './pages/articles/ArticleModify';

import AboutPage from './pages/About';
import CategoryListPage from './pages/CategoryList';

import CompanyPage from './pages/Company';
import LocationPage from './pages/Location';

function App() {
  return (
    <div className='App'>
      <TopMenuBar></TopMenuBar>

      {/* 페이지 라우팅 주소체계 */}
      <Routes>
        <Route path='/' Component={MainPage} exact={true}></Route>

        {/* 쿼리스트링방식으로 전달 */}
        <Route path='/category' Component={CategoryListPage}></Route>

        <Route path='/article/list' Component={ArticleListPage}></Route>
        <Route path='/article/regist' Component={ArticleRegistPage}></Route>
        <Route
          path='/article/modify/:idx'
          Component={ArticleModifyPage}
        ></Route>

        <Route path='/about/:category' Component={AboutPage}></Route>

        <Route path='/company' Component={CompanyPage}>
          <Route path='location' Component={LocationPage}></Route>
        </Route>
      </Routes>

      <FooterBar></FooterBar>
    </div>
  );
}

export default App;
