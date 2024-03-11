import React from 'react';
import { Outlet } from 'react-router-dom';

const Company = () => {
  return (
    <div>
      <h1>회사소개 페이지</h1>
      <p>
        디지틸문화유산컨텐츠연구소는 디지털문화유산을 바탕으로 하는 컨텐츠를
        제작하는 기업입니다.
      </p>
      <Outlet />
    </div>
  );
};

export default Company;
