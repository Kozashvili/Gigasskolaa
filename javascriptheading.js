var textElement2 = document.getElementById('companyTitleTransformation');

function changeTextColor2() {
  textElement2.style.color = '#00ff16';
  setTimeout(function() {
    textElement2.style.color = 'white';
    textElement2.style.animation = 'none';
  }, 7000); // Reset text color and animation after 7 seconds
}

setInterval(changeTextColor2, 21000); // Repeat every 21 seconds
