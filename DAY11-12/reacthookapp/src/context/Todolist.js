

import React,{useState useEffect, useRef, useCallback, useContext} from 'react';

import { AppContext } from '../App';

//전역 데이터 값 조회하고 반환하는 함수 정의
function useTodoCountState() {
    const value = useContext(AppContext);
    return value;
}

const Todolist = () => {
    const refTitle = useRef(null);

    // 전역 데이터 중 카운터 상태값을 관리해주는 개발자 정의 훅을 이용한 데이터 제어 하기
    //전역 데이터 사태값을 관리해주는 useState 개발자 정의 훅 구현하기
    //전역데이터를 Setter함수로 해당 컴포넌트에서 관리해주기 위한 전용 훅 정의
    const [,setTodoCount] = useTodoCountState();

    //단일 할일정보
    const [todo, setTodo] = useState({
        title:"",
        contents:"",
        orderby: ""
    });

    //할일 추가하기
    const onAdd = useCallback(
        
    );


    //전역데이터 값 변경처리하기 
    setTodoCount(()=>Todolist.length +1);

  return <div></div>;
};

export default Todolist;
