// Gsap
let t = gsap.timeline();
let input = document.querySelector("input.input_box");
let audio = new Audio();

t.from("div.main-box", {
  x: -20,
  opacity: 0,
  delay: 0.4,
  duraton: 0.5,
});

t.from("button", {
  opacity: 0,
  duraton: 0.1,
  y: 80,
  stagger: 0.1,
});

// If Enter Key is Pressed, then call calculate Function
window.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    calculate();
  }
});

// C Button
function remove(data) {
  let input_box_data = input.value;
  let input_box_length = input.value.length;
  input.value = input_box_data.slice(0, input_box_length - 1);
  audio.src = "./sounds/keys.mp3";
  audio.play();
}

// Function For Calculating i.e '=' Button
function calculate() {
  try {
    audio.src = "./sounds/calculate.mp3";
    audio.play();
    let cal = eval(input.value);
    let strConvert = cal.toString();
    if (strConvert.includes(".")) {
      input.value = cal.toFixed(4);
    } else {
      input.value = cal;
    }
  } catch (error) {
    audio.src = "./sounds/calculate.mp3";
    audio.play();
    input.value = "Invalid!";
  }
}

// All Keys Sound Effect except '='
function put(key) {
  if (key == "AC") {
    input.value = "";
  } else {
    input.value += key;
  }
  audio.src = "./sounds/keys.mp3";
  audio.play();
}
