function pop_up() {
     window.open("../popup/popup.html", "팝업테스트", "width=400, height=300, top=10, left=10");
     }
     
function show_clock(){
let currentDate= new Date(); // 현재시스템날짜객체생성
let divclock= document-getElementById('divclock');
let msg = "현재시간: ";
if (currentDate-getHours ()>12){ // 12시보다크면오후아니면오전
msg += "오후";
msg += currentDate.getHours() -12+"A|";
}
else {
     msg += "₽I";
msg += currentDate.getHours()+"A|";
}
msg += currentdate.getMinutes()+"™";
msg += currentDate.getSeconds()+"=";
divclock.innerText- msg;

if (currentDate-getMinutes()>58) { // 정각1분전빨강색출력
divclock.style.color="red";

setTimeout(shon_clock, 1800); //1초마다갱신
}
// function over (obj) {
// obj src="image/LOGO.png*;
// }
}
const over = (obj) => {
obj. src = "image/LOGO.png";
};
function out (obj) {
obj. src="image/LOGO_2-png";
 };