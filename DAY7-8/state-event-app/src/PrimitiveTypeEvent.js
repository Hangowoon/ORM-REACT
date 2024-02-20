import React from 'react';

const PrimitiveTypeEvent = () => {

    const hndleEnterSave(e)=>{
        console.log("사용자 키보드 이벤트 값 표시하기:",e.keyCode);

        if (e.keyCode===13) {
            console.log("엔터키가 선택되었습니다.")
            var user = {
                email: email,
                

            }
        }

    }
    return (
        <div>
            <h1>회원가입-원시타입 데이터 바인딩</h1>
            
        </div>
    );
};

export default PrimitiveTypeEvent;