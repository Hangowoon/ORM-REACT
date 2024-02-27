//Step1) 훅 참조하기
import React,{useReducer} from 'react';

//Step3) Reducer 함수로 상태값 변경하기 
function valueReducer(state,action) {
    switch (action.type) {
        case 'INCREASE':
            return state + 1;
        case 'DECREASE':
            return state - 1;
        case 'INIT':
            return 0;
        default:
            return state; // 현재 상태값 반환
    }
}

const UseReducer = () => {

    //Step2) 훅 변수 정의 및 값 초기화 하기
    const [valueState dispatchValue] = useReducer(valueReducer, {value:0});


    return (
        <div>
            <h1>UseReducer 훅 사용하기</h1>

            <h3>카운터:{valueState}</h3>
            <button onClick={() => dispatchValue({ type: 'INCREASE' })}>증가</button>
            <button onClick={() => dispatchValue({ type: 'DECREASE' })}>감소</button>
            <button onClick={() => dispatchValue({ type: 'INIT' })}>초기화</button>
        </div>
    );
};

export default UseReducer;