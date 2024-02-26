let string = "";
let buttons = document.querySelectorAll(".button");
let btn = document.querySelector(".btn");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
        console.log("Before evaluation:", string);
        string = eval(string);
        console.log("After evaluation:", string);
      document.querySelector("input").value = string;
    }
    else if (e.target.innerHTML == "C" || e.target.innerHTML == "AC") {
      string = "";
      document.querySelector("input").value = string;
    }
    else {
      console.log(e);
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  })
})
