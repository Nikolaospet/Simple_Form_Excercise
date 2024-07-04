document.getElementById("numberForm").onsubmit = function (event) {
    event.preventDefault();
    var input = document.getElementById("numberInput").value;
    var feedback = document.getElementById("feedback");
  
    if (parseInt(input, 10) > 10) {
      feedback.textContent = "Number is accepted!";
      feedback.style.color = "green";
    } else {
      feedback.textContent = "Please enter a number greater than 10.";
      feedback.style.color = "red";
    }
  };
  