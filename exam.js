var math = document.getElementById("math");
var english = document.getElementById("english");
var bangla = document.getElementById("bangla");
var islam = document.getElementById("islam");
var science = document.getElementById("science");
var add_btn = document.getElementById("add_btn");

var input = document.querySelectorAll(".inputs");

for (var i = 0; i < input.length; i++) {
  input[i].addEventListener("input", function () {
    for (var f = 0; f < input.length; f++) {
      if (input[f].value > 100) {
        input[f].style.background = "black";
        input[f].style.color = "red";
        alert("please inter a valid number 1-100");
      } else {
        input[f].style.background = "rgb(255, 223, 253)";
        input[f].style.color = "black";
      }
    }
  });
}

add_btn.addEventListener("click", function () {
  if (
    math.value == "" ||
    english.value == "" ||
    bangla.value == "" ||
    islam.value == "" ||
    science.value == ""
  ) {
    alert("fill the all input");
  } else {
    var newMath = parseInt(math.value);
    var newenglish = parseInt(english.value);
    var newbangla = parseInt(bangla.value);
    var newislam = parseInt(islam.value);
    var newscience = parseInt(science.value);
    var newTotal_mark = document.getElementById("total_mark");
    var Total_marks = newMath + newenglish + newbangla + newislam + newscience;
    // alert(total_mark);
    newTotal_mark.innerHTML = Total_marks;
    newTotal_mark.style.background = "rgb(155, 123, 253)";
    var avg_marks = document.getElementById("avg_marks");
    var avg = Total_marks / 5;
    avg_marks.innerHTML = avg;
    avg_marks.style.background = "rgb(55, 23, 253)";

    var grade = document.getElementById("grade");
    if (avg > 80 && avg < 100) {
      grade.innerHTML = "A+";
    } else if (avg > 70 && avg < 79) {
      grade.innerHTML = "A";
    } else if (avg > 60 && avg < 69) {
      grade.innerHTML = "-A";
    } else if (avg > 50 && avg < 59) {
      grade.innerHTML = "B";
    } else if (avg > 40 && avg < 49) {
      grade.innerHTML = "C";
    } else if (avg > 33 && avg < 39) {
      grade.innerHTML = "d";
    } else {
      grade.innerHTML = "F";
    }
    grade.style.background = "yellow";
  }
  var result = document.getElementById("result");
  if (avg > 32.5) {
    result.innerHTML = "Successfully!!! you passed your exam";
    result.style.background = "rgb(11, 273, 126)";
    result.style.color = "white";
  }
  if (avg < 32.5) {
    result.innerHTML = " You Are Failed";
    result.style.background = "red";
    result.style.color = "white";
  }

  //   var input = document.querySelectorAll(".inputs");
  //   if( math.value>33 ||
  //   english.value >33||
  //   bangla.value>33 ||
  //   islam.value >33){

  //   }
});