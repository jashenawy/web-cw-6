// هنا سوف تنشئ دالة calculate 
function calculate() {
let height = document.getElementById("height").value;
let weight = document.getElementById("weight").value;

// if(height =="" || weight == ""){
//     alert("قم بالتاكد من تعبئه جميع بياناتك المطلوبه");
//     return;
// }

let BMI = weight / (height * height);
let status = "";

if (BMI  < 18.5) {
    status ="تعاني من نقص في الوزن";
} else if (BMI < 25) {
    status = "وزنك صحي";
} else if (BMI < 30) {
    status = "تعاني من زياده في الوزن";
} else {
    status = "تعاني من السمنه المفرطه";
}

BMI = BMI.toFixed(2);
document.getElementById("result").innerHTML =BMI;
document.getElementsByClassName("comment")[0].innerHTML = status;
}