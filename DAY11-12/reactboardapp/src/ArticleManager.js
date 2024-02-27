import React, { useState } from 'react';

const ArticleManager = ({ onInsert, onRemove }) => {
  //단일할일정보 데이터 구조정의 및 초기값할당
  const [article, setArticle] = useState({ title: '', text: '', writer: '' });

  //할일 정보 입력시 관련 UI요소에 바인딩된 상태 속성값 변경처리 이벤트 처리함수
  const onArticleChange = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  //폼내 submit 이벤트가 발생하면 실행되는 이벤트 핸들러 함수 정의
  const onSubmit = (e) => {
    //App.js컴포넌트에서 props로 전달된 onInsert()이벤트 처리함수를 호출해 toDolist에 데이터를 반영한다.
    onInsert(article.title, article.text, article.writer);

    setArticle({ title: '', text: '', writer: '' });

    // 자바스크립트에서 UI요소이벤트 파생을 최소시키는 함수
    // 현재 발생한 e(Submit)이벤트를 더이상 진행되지 않게 차단하는 기능
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        제목:
        <input
          type='text'
          name='title'
          value={article.title}
          onChange={onArticleChange}
        />
        내용:
        <input
          type='text'
          name='text'
          value={article.text}
          onChange={onArticleChange}
        />
        등록자:
        <input
          type='text'
          name='writer'
          value={article.writer}
          onChange={onArticleChange}
        />
        <button type='submit'>등록</button>
        <button type='submit'>수정</button>
        <button type='submit'>삭제</button>
        <button type='submit'>초기화</button>
      </form>
    </div>
  );
};

export default ArticleManager;
