import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Article = () => {
  //초기 데이터 정의
  const [article, setArticle] = useState({ title: '', contents: '' });

  //마우스 포커스 처리를 이한 useRef정의
  const refTitle = useRef();

  //페이지 이동을 위한 navigate 훅 생성하기
  const navigate = useNavigate();

  //최초 로딩시 제목 입력박스에 마우스 포커스 주기
  useEffect(() => {
    refTitle.current.focus();
  }, []);

  //입력요소 데이터 바인딩 처리
  const onArticleChange = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  //저장 버튼 클릭시 데이터 저장 처리 후 게시글 목록으로 이동처리하기
  const onArticleSubmit = () => {
    if (article.title == '') {
      alert('제목을 입력해주세요.');
      refTitle.current.focus();
      e.preventDefault();
      return false;
    }

    //게시글 백엔드 데이터 처리하기
    axios
      .post('http;//localhost:3005/api/articles', article)
      .then((res) => {
        console.log('데이터 처리결과값:', res.data);

        if (res.data.code == '200') {
          alert('등록완료');

          navigate('/articles');
        } else {
          alert('등록실패');
        }
      })
      .catch((err) => {});
  };
  return (
    <div className='article-wrapper'>
      <div className='row mb-2'>
        <div className='col'>
          <h4>게시글작성</h4>
        </div>
      </div>

      <form onSubmit={onArticleSubmit}>
        <div className='row mb-3'>
          <label className='col-sm-2 col-form-label'>제목</label>
          <div className='col-sm-10'>
            <input
              type='text'
              name='title'
              ref={refTitle}
              className='form-control'
              value={article.title}
              onChange={onArticleChange}
            />
          </div>
        </div>
        <div class='row mb-3'>
          <label
            className='col-sm-2 col-form-label'
            value={article.contents}
            onChange={onArticleChange}
          >
            내용
          </label>
          <div className='col-sm-10'>
            <textarea className='form-control' rows={10}></textarea>
          </div>
        </div>
        <button type='submit' className='btn btn-secondary'>
          저장
        </button>
      </form>
    </div>
  );
};

export default Article;
