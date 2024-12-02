// Function to display the pop-up for each domain
function Display1() {
  document.querySelector(".popup-text1").style.display = "block";
  document.querySelector(".popup-text1").style.opacity = "1";
  document.querySelector(".dcontainer").style.opacity = "0.5"; // Reduce opacity for background
}

function Hide1() {
  document.querySelector(".popup-text1").style.display = "none";
  document.querySelector(".dcontainer").style.opacity = "1"; // Restore opacity
}

function Display2() {
  document.querySelector(".popup-text2").style.display = "block";
  document.querySelector(".popup-text2").style.opacity = "1";
  document.querySelector(".dcontainer").style.opacity = "0.5";
}

function Hide2() {
  document.querySelector(".popup-text2").style.display = "none";
  document.querySelector(".dcontainer").style.opacity = "1";
}

function Display3() {
  document.querySelector(".popup-text3").style.display = "block";
  document.querySelector(".popup-text3").style.opacity = "1";
  document.querySelector(".dcontainer").style.opacity = "0.5";
}

function Hide3() {
  document.querySelector(".popup-text3").style.display = "none";
  document.querySelector(".dcontainer").style.opacity = "1";
}

function Display4() {
  document.querySelector(".popup-text4").style.display = "block";
  document.querySelector(".popup-text4").style.opacity = "1";
  document.querySelector(".dcontainer").style.opacity = "0.5";
}

function Hide4() {
  document.querySelector(".popup-text4").style.display = "none";
  document.querySelector(".dcontainer").style.opacity = "1";
}

function Display5() {
  document.querySelector(".popup-text5").style.display = "block";
  document.querySelector(".popup-text5").style.opacity = "1";
  document.querySelector(".dcontainer").style.opacity = "0.5";
}

function Hide5() {
  document.querySelector(".popup-text5").style.display = "none";
  document.querySelector(".dcontainer").style.opacity = "1";
}

// Event listeners for closing the pop-ups when the close icon is clicked
document.querySelectorAll('.popup-close').forEach(item => {
  item.addEventListener('click', (event) => {
      let popup = item.closest('.popup-text');
      popup.style.display = 'none';
      document.querySelector(".dcontainer").style.opacity = "1"; // Restore opacity
  });
});
