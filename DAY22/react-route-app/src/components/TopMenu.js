import React from 'react';

import { Link } from 'react-router-dom';

const TopMenu = () => {
  return (
    <div style={{ width: '100%', height: '50px', backgroundColor: 'gray' }}>
      {/* GNB 공통 상단 메뉴 영역 */}
      <span>
        <Link to='/'>메인</Link>
      </span>
      |
      <span>
        <Link to='/article/list'>블로그 목록</Link>
      </span>
      |
      <span>
        <Link to='/article/regist'>신규 블로그 작성</Link>
      </span>
      |
      <span>
        <Link to='/article/modify/1'>1번 게시글 확인 및 수정</Link>
      </span>
      |
      <span>
        <Link to='/about'>회사소개</Link>
      </span>
    </div>
  );
};

export default TopMenu;
