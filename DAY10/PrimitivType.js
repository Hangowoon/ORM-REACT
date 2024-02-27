// 원시 타입 변수 선언과 할당의 의미를 알아보자

// 참조타입의 불변성에 대해 학습해봅니다.
// 기본적으로 참조타입은 불변성을 지원하지 않습니다. = 동일한 메모리공간을 참조/재사용한다.
//참조타입은 값을 변경해서 새로운 메모리공간을 할당하지 않고 기존 할당된 메모리공간(메모리주소)에 값을 업데이트합니다.
var user1; //참조타입 선언

var object1 = {
  id: 1,
  name: 'gowoon',
  age: 45,
  address: { sido: '경기도', detail: '광주시' },
};

console.log('참조타입-객체정의하고 값할당하기', user1);

//참조타밉 값 변경
user1.name = '한고운';

console.log('참조타입-객체정의하고 값할당하기', user1);

// 참조타입을 복사해봅니다.
// 참조타입을 그냥 복사하면 복사한 원본의 주소를 참조하고 같은 공간의 데이터를 공유하게 되며
// 공유된 공간의 값을 복사하는데 이를 얕은 카피(Shallow Copy라고 합니다.

var user2 = user1;

user2.name = '가브리엘';

console.log('user1', user1);
console.log('user2', user2);

console.log('user1===user2', user1, user2);
