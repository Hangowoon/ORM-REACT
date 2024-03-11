import React from 'react';

import { useNavigate } from 'react-router-dom';

const ArticleRegist = () => {
  const navigate = useNavigate();

  const handleSave = () => {
    //게시글 입력정보를 백엔드로 전송
    //백엔드에서 게시글 등록처리를 완료 후 특정 페이지로 화면을 이동
    navigate('/article/list');
  };

  return (
    <div>
      <h1>게시글 등록 페이지</h1>
      제목: <input type='text' />
      <br />
      내용: <textarea></textarea>
      <br />
      <button onClick={handleSave}>저장</button>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        메인이동
      </button>
    </div>
  );
};

export default ArticleRegist;
