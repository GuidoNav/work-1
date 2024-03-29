const buttons = document.querySelectorAll('.read-more-btn');
const textElements = document.querySelectorAll('.hideText');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const textElement = textElements[index];
    textElement.classList.toggle('showText');
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var containers = document.querySelectorAll(".container");

  containers.forEach(function(container) {
      var button = container.querySelector(".read-more-btn");

      button.addEventListener("click", function() {
          container.classList.toggle("expanded");
      });
  });
});
