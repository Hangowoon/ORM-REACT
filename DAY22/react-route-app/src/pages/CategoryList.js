import React from 'react';
import { useSearchParams } from 'react-router-dom';

//쿼리스트링방식 v.6x
const CategoryList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const cidx = searchParams.get('cidx');
  const sort = searchParams.get('sort');

  return (
    <div>
      <h1>
        상품 분류별 목록 페이지: {cidx} 정렬방식: {sort}
      </h1>
    </div>
  );
};

export default CategoryList;
