//변수 만들때 타입 미리 정하기 애매할때(union type, any, unknown)

let 이름: string | number = 'kim'

이름 = 123;
이름 = 'sung';

// 배열 안에 숫자 또는 문자가 들어오게 하려면? number [] | string [] (X)
let 회원들: (number | string) []  = [1,2,3, '4']

let object : { a : string | number} = { a : 123 }

// any type =  타입실드 해제문법임
let another : any ;

another = 123;
another = [];

// any type 과 비슷한 unknown
let other : unknown;
other = 123;
other = {};

let 변수1 : string = other; //에러 발생, unknown은 타입지정은 편하지만 호환은 못하게해줌
let 변수2: string = another; // 타입 실드 해제여서 아무거나 막 들어올수있음. 조심해야함

//unknown 타입은 사칙연산도 안됨
//typescript는 연산할때도 number 타입관련해서만 가능함
other - 1

// 타입은 맞는데 +1 이 안되는것?
// typescript는 엄격한걸 좋아함

let 나이 : string | number;
나이 + 1; // string 타입 + 1(허용)
        // number 타입 + 1(허용)
        // string | number  타입 +1(안됨)
        // string | number 는 새로운 타입을 만드는것임. 

let 나이2  : unknown  = 1;
나이2 - 1; // 마찮가지 타입 자체가 unknown 임

//숙제
let user : string = 'kim';
let age : unknown = undefined;
let married : boolean = false; 
let 철수 : any[] = [user, age, married];