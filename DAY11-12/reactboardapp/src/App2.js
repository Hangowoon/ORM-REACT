import React, { useState } from 'react';

//import logo from './logo.svg'
//import './App.css'

import BoardTemplate from './BoardTemplate';
import ArticleManager from './ArticleManager';
import ArticleList from './ArticleList';

function App() {
  const [article, setArticles] = useState([
    {
      id: 1,
      title: '제목1',
      text: '내용1',
      writer: '등록자1',
      checked: false,
    },
    {
      id: 2,
      title: '제목2',
      text: '내용2',
      writer: '등록자2',
      checked: false,
    },
  ]);

  // 고유번호 초기값 할당
  const [nextId, setNextId] = useState(3);

  // 등록 처리 이벤트
  const onInsert = (title, text, writer) => {
    //할일목록 데이터에 신규할일 데이터 추가
    setArticles(
      article.concat({
        id: nextId,
        title: title,
        text: text,
        writer: writer,
        checked: false,
      })
    );

    //다음 채번번호 증가처리
    setNextId(nextId + 1);
  };

  // 수정 처리 이벤트

  // 삭제 처리 이벤트
  const onRemove = (id) => {
    setArticles(article.filter((article) => article.id !== id));
  };

  // 선택 처리 이벤트
  const onSelect = (id) => {
    setArticles(
      article.map((article) =>
        article.id === id ? { ...article, checked: !article.checked } : article
      )
    );
  };

  return (
    <div className='App'>
      <BoardTemplate>
        <ArticleManager
          onInsert={onInsert}
          onRemove={onRemove}
        ></ArticleManager>
        <ArticleList onSelect={onSelect}></ArticleList>
      </BoardTemplate>
    </div>
  );
}

export default App;
