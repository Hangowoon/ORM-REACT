import React from 'react';

//단일 할일 화면 참조하기
import ArticleItem from './ArticleItem';

const ArticleList = ({ articles, onSelect }) => {
  return (
    <div>
      <table style={{ margin: '0 auto', width: 'center' }}>
        <thead>
          <tr>
            <th>글번호</th>
            <th>제목</th>
            <th>내용</th>
            <th>선택</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article, i) => (
            <ArticleItem
              key={article.id}
              board={article}
              onSelect={onSelect}
            ></ArticleItem>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArticleList;
