import React from 'react';
import { useParams } from 'react-router-dom';

const ArticleModify = () => {
  // 파라메터 방식 url 추출
  const { idx } = useParams();
  console.log('파라메터 방식으로 URL을 통해전달되는 값을 추출합니다.', idx);

  return (
    <div>
      <h1>게시글 수정 페이지</h1>
    </div>
  );
};

export default ArticleModify;
