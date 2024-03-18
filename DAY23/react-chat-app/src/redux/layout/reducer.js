//해당업무별 모든 액션타입기반 전역데이터 기본구조 및 전역 데이터 관리 기능 리듀서함수 구현 노출

//STEP1: 해당 업무 관련 액션타입 참조하기
import {
  SET_ACTIVE_TAB,
  OPEN_USER_PROFILE_SIDEBAR,
  SET_LAYOUT_MODE,
} from '../../constants/actionTypes';

//STEP2: 관련 액션타입 시나리오 구현을 위한 전역데이터 구조정의 및 초기값세팅하기
const INIT_STATE = {
  activeTab: 'chat', //최좌측 메뉴탭 선택정보
  userSideBar: false, //최우측 채팅대상자의 프로필정보 표시여부 정보
  conversationName: 'Doris Brown', //기본 채팅대장자의 이름
  layoutMode: 'light', //밤낮 레이아웃 테마 적용정보
};

//STEP3:액션타입별 전역상태값 변경관리 리듀서함수정의
const Layout = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return { ...state, activeTab: action.payload };
    case OPEN_USER_PROFILE_SIDEBAR:
      return { ...state, userSideBar: true };
    case SET_LAYOUT_MODE:
      return { ...state, layoutMode: action.payload };
    default:
      return state;
  }
};

//STEP4:리듀서함수를 노출한다.
export default Layout;
