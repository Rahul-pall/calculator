let input = document.getElementById("input1");
let buttons = document.querySelectorAll("button");
let string = "";

let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    
    if (e.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
    }
    else if (e.target.innerHTML == 'AC') {
      string = "";
      input.value = string;
    }
    else if(e.target.innerHTML == 'DEL'){
      let str=string.substring(0,string.length-1);
      string=str;
      input.value=string;
    }
    else if(e.target.innerHTML<0){
      string += e.target.innerHTML;
      input.value = -string;
    }
   
     else {
              string += e.target.innerHTML;
              input.value = string;
    }
   
  });
});
