"use strict";
// 데이터 타입 종류 
// 1. 기본 데이터 타입
// number : 숫자 (정수, 실수)
// string : 문자열
// boolean : 참/거짓
// null : 값이 없음
// undefined : 값이 정의되지 않음
let num = 10; // 숫자 타입
let str = "Hello, TypeScript"; // 문자열 타입
let isTrue = true; // 불리언 타입
let nothing = null; // 널 타입
let notDefined = undefined; // 정의되지 않은 타입
// 2. 객체 타입
// object : 객체
// array : 동일한 타입의 요소를 가진 배열
// tuple : 서로 다른 타입의 요소를 가질 수 있는 배열
// object
const obj = {
    name: "Alice",
    age: 30,
    // age: "30" // 오류: 타입 'string'은 'number'에 할당할 수 없습니다.
}; // 객체 타입 정의
// array
let arr1 = [1, 2, 3]; // 방법1 : 타입 + []
let arr2 = ["apple", "banana", "cherry"]; // 방법2 : Array<타입>
// tuple
let tuple = [1, "TypeScript", true]; // 숫자, 문자열, 불리언을 가지는 튜플
// array와 tuple의 차이
// array는 동일한 타입의 요소를 가지며, 길이가 가변적임
// tuple은 서로 다른 타입의 요소를 가지며, 길이가 고정되어 있습니다. / 자바스크립트에는 존재하지 않음
// 3. 특수 타입
// any : 모든 타입을 허용
// unknown : 모든 타입을 허용하지만, 사용하기 전에 타입 검사가 필요 / 타입을 알 수 없는 경우 사용
// never : 절대 발생하지 않는 값 (예: 무한 루프, 예외 던지기 등)
// void : 함수가 값을 반환하지 않을 때 사용
// enum : 열거형 타입
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {})); // 열거형 타입 정의
function printSomthing(value) {
    console.log(value); // any 타입은 어떤 값이든 허용
    return; // void 타입은 값을 반환하지 않음
}
function loopForever() {
    while (true) {
        console.log("This will run forever"); // never 타입은 절대 종료되지 않는 함수
    }
}
// 타입 추론
// TypeScript는 변수 선언 시 초기값을 통해 타입을 추론합니다.
// 타입스크립트 함수의 데이터 타입
// 매개 변수와 반환값의 타입을 지정
function add(a, b) {
    return a + b;
}
// 선택적 매개 변수 사용
function greet(name, greeting) {
    if (greeting) {
        return `${greeting}, ${name}!`; // greeting이 있을 경우 해당 인사말 사용
    }
    else {
        return `Hello, ${name}!`; // 값이 없을 경우 기본 인사말 사용
    }
}
// type alias 사용
// 원시 데이터 타입 별칭
// type Age = number; // 타입 별칭 생성
const myAge = 25; // 타입 별칭 사용
const myFriends = ["Alice", "Bob", "Charlie"]; // 타입 별칭 사용
const myLocation = [37.7749, -122.4194]; // 타입 별칭 사용
// 객체
// type User = {
//     id: string;
//     name: string;
//     age: number;
// };
const user = {
    id: "user123",
    name: "John Doe",
    age: 30
}; // 객체 타입 별칭 사용
const grret2 = (name) => `Hello, ${name}!`; // 함수 타입 별칭 사용
const user2 = { id: "user456", name: "Jane Smith", age: 28 }; // 복잡한 타입 사용
