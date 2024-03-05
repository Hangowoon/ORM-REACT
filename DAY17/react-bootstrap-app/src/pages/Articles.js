import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

import axios from 'axios';

const Articles = () => {
  // navigate훅 생성하기
  const navigate = useNavigate();

  //게시글 목록 데이터 상태 구조 정의하기
  const [articleList, setArticleList] = useState([]);

  //최초 화면렌더링시에 백엔드 게시글 목록 조회/바인딩하기
  useEffect(() => {
    console.log('최초 화면렌더링시에 호출됩니다.');
    axios
      .get('http://localhost:3005/api/articles')
      .then((res) => {
        console.log('백엔드에서 전달된 데이터 목록:', res);
      })

      if (res.data.code == "200") {
        setArticleList(res.data.data);
      }elss{

      }


      .catch((err) => {
        console.log('맥엔드 호출 에러발생...', err);
      });
  }, []);

  return (
    <div className='article-wrapper'>
      <div className='row mb-2'>
        <div className='col'>
          <h4>게시글목록</h4>
        </div>
        <div className='col'>
          {/* <button
            className='btn btn-secondary float-end'
            onClick={() => navigate('/article')}
          >
            글작성
          </button> */}

          <Link className='btn btn-secondary float-end' to='/article'>
            글작성
          </Link>
        </div>
      </div>

      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>글순번</th>
            <th scope='col'>제목</th>
            <th scope='col'>조회수</th>
            <th scope='col'>글쓴이</th>
            <th scope='col'>등록일시</th>
          </tr>
        </thead>

        <tbody>

            {articleList.map((item,index)=>(
                <tr>
                    <th scope='row'>{item.article_id}</th>
                    <td><Link to={{ pathname: "/article/" + item.article_id}}>{item.title}</Link></td>
                    <td>{item.view_count}</td>
                    <td>{item.reg_member_id}</td>
                    <td>{item.reg_data}</td>
                </tr>
            ))}
          
        </tbody>
      </table>
    </div>
  );
};

export default Articles;
