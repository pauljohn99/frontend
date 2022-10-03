let memories = [];

function num(x) {
  document.getElementById("text").value += x;
}
function result() {
  let regex = /^\d+([+\-*\/]*\d+)*$/;
  let temp = document.getElementById("text").value;
  let result = regex.test(temp);
  console.log(temp);
  let nums = temp.split(/[^0-9\.]+/);
  console.log(nums);
  let operators = temp.split(/[0-9\.]+/).filter((x) => x);
  console.log(operators);
  if (result == false) {
    alert("wrong input");
  } else {
    while (operators.length > 0) {
      for (let i = 0; i < operators.length; ++i) {
        let x = 0;
        if (operators[i] == "/") {
          x = parseFloat(nums[i]) / parseFloat(nums[i + 1]);
          nums.splice(i, 2, x);
          console.log(nums);
          operators.splice(i, 1);
          console.log(operators);
        }
      }
      for (let i = 0; i < operators.length; ++i) {
        let x = 0;

        if (operators[i] == "*") {
          x = parseFloat(nums[i]) * parseFloat(nums[i + 1]);
          nums.splice(i, 2, x);
          console.log(nums);
          operators.splice(i, 1);
          console.log(operators);
        }
      }
      for (let i = 0; i < operators.length; ++i) {
        let x = 0;
        if (operators[i] == "+") {
          x = parseFloat(nums[i]) + parseFloat(nums[i + 1]);
          nums.splice(i, 2, x);
          console.log(nums);
          operators.splice(i, 1);
          console.log(operators);
        }
      }
      for (let i = 0; i < operators.length; ++i) {
        let x = 0;
        if (operators[i] == "-") {
          x = parseFloat(nums[i]) - parseFloat(nums[i + 1]);
          nums.splice(i, 2, x);
          console.log(nums);
          operators.splice(i, 1);
          console.log(operators);
        }
      }
    }
    console.log(nums);
    console.log(operators);
    document.getElementById("text").value = nums;

    memories.push({
      inp: temp,
      res: nums[0],
    });
  }
  console.log(memories);
}

function memr() {
  let temps = [];
  for (let i = 0; i < memories.length; i++) {
    temps += "{" + memories[i].inp + "=" + memories[i].res + " }" + "   ";
  }
  document.getElementById("text").value = temps;
}

function clearit() {
  document.getElementById("text").value = "";
}
