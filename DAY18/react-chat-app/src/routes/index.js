// 라우팅 페이지 컴포넌트를 통합해서 최종 브라우저에 렌더링 시키는 역할

import React, { Suspense } from 'react';
import { Routes as SwitchRoute, Route, Navigate } from 'react-router-dom';

// Suspense : 화면 컴포넌트 렌더링 작업을 잠시 중단시키고 다른 컴포넌트를 먼저 렌더링하게하는 기능 제공

// routes.js 모듈에서 정의한 화면별 라우팅규칙 참조
import { authProtectedRoutes, publicRoutes } from './routes';

//레이아웃 컴포넌트 호출
//비인증 기반 레이아웃 화면 컴포넌트 참조
import { NonAuthLayout } from '../layouts/NonAuthLayout';
//인증 기반 레이아웃 화면 컴포넌트 참조
import { AuthLayout } from '../layouts/AuthLayout';

//로그인 페이지
const imsAuthProtectedd = (props) => {
  //JWT토큰이 없거나 현재 호출하는 페이지가 인증에 의해 보호되는 페이지
  if (props.imsAuthProtectedd && !localStorage.getItem('authUser')) {
    return (
      <Navigate to={{ pathname: '/login', state: { from: props.location } }} />
    );
  }
};

//메인 라우팅 컴포넌트 구현
const Routes = () => {
  return <></>;
};

export default Routes;
