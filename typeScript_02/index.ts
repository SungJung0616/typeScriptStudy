// When it's hard to predefine the type for a variable (union type, any, unknown)

let lastName: string | number = 'kim'

lastName = 123;
lastName = 'sung';

// To allow both numbers and strings in an array, use: (number | string)[]
let members: (number | string)[]  = [1, 2, 3, '4']

let object: { a: string | number } = { a: 123 }

// any type = a type shield deactivation syntax
let another: any;

another = 123;
another = [];

// unknown type is similar to any
let other: unknown;
other = 123;
other = {};

let variable1: string = other; // Error occurs, unknown type is convenient for type declaration but prevents type compatibility
let variable2: string = another; // Type shield is deactivated so anything can be assigned. Be cautious

// Arithmetic operations are not possible with unknown type
// TypeScript only allows arithmetic operations with number type
other - 1

// The type is correct, but why can't I add 1?
// TypeScript prefers strictness

let age: string | number;
age + 1; // string type + 1 (allowed)
        // number type + 1 (allowed)
        // string | number type + 1 (not allowed)
        // string | number is a new type itself

let age2: unknown = 1;
age2 - 1; // Same issue, the type itself is unknown

// Homework
let user: string = 'kim';
let age: undefined | number = undefined;
let married: boolean = false;
let chulsoo: (string | undefined | boolean | number)[] = [user, age, married];

let school: { score: (number | boolean)[], teacher: string, friend: string | string } = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
}


//함수에 타입 지정하는 법 & void 타입
function practice(x : number) : number{
    return x *2;
}

// 자바스크립트랑 다른점 , 타입지정된 파라미터는 필수로 입력해야함.
practice(3)

// 파라미터가 입력을 옵션으로 하고 싶은 경우
// x? 의 뜻은 undefined | number 라는 뜻, 숫자 또는 undefined 가 들어올수 있다 라는 생각하면됨. 
function practice3(x? : number) : void {
    
}

practice3(); // 에러가 안생김.

// 함수에서 사용할수 있는 특별한 함수 void type
// 실수로 뭔가 return  하는걸 사전에 막기 위해서
function practice2(x : number) : void{
    1 + 1 ;
}

function practice4(x : number | string) : void {
    // narrowing 을 해야함
    if ( `x의 타입이 숫자면` ){
        console.log(x + 3) // 그냥 하면 에러가남. 타입스크립트는 엄격하기 때문에 number | string 타입에서는 연산이 안됨.
    }
     
}
practice4(2)

//(숙제1) 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
//아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
//파라미터와 return 타입지정도 잘 해봅시다. 

function 입력(x? : string){
    if(x) {
        console.log("안녕하세요 " + x)
    }else{
        console.log("입력해주세요.")
    }
}

//(숙제2) 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
//예를 들어 '245' 이런 문자를 입력하면 3이 return 되어야합니다.
//숫자도 마찬가지로 9567 이런 숫자를 입력하면 4가 return 되어야합니다.
//숫자 또는 문자 이외의 자료가 들어오면 안됩니다. 

// x의 타입은 number 아니면 string으로 하고, 리턴은 무조건 number 가 되도록
// toString() 함수를 사용
function findDigit(x : number | string): number{
    return x.toString().length;
}

//(숙제3) 결혼 가능 확률을 알려주는 함수를 만들어봅시다.
//1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다. 
//2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다. 
//3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.

function marragePoint(monthlyIncome : number, house : boolean, charm : string) : string | void{
    let score : number  = 0
    score += monthlyIncome;
    if (house === true){
        score += 500;
    }
    if (charm === '상'){
        score += 100;
    }
    if (score >= 600){
        return "결혼가능"
    }
}

console.log(marragePoint(100,true,'상'))