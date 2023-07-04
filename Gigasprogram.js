var images = [
    "./Images/E-City.jpg",
    "./Images/Drones.gif",
    "./Images/code.gif"
  ];
  
  var currentIndex = 0;
  var slideshow = document.querySelector(".slideshow");
  
  function changeImage() {
    slideshow.style.backgroundImage = "url(" + images[currentIndex] + ")";
    currentIndex = (currentIndex + 1) % images.length;
  }
  
  setInterval(changeImage, 7000); // Change image every 7 seconds

  var textElement = document.getElementById('text');
  var text = 'მექატრონი კომპანია რომელიც დაარსდა 2017 წელს არის მიზანდასახული რომ შეიტანას\n' +
    'წვლილი რობოტიკის რობოტიკაში:\n' +
    'Lego Robotics\n' +
    'Electronic Engineering \n' +
    'Arduino Programming\n' +
    'Drone Programming\n' +
    'Drone Engineering\n' +
    '3D მოდელირება Fusion360\n' +
    'Programming';
  
  // Replace line breaks with <br> tags
  text = text.replace(/\n/g, '<br>');
  
  // Split the text into individual lines
  var lines = text.split('<br>');
  
  // Function to display text gradually
  function displayText(lineIndex, charIndex) {
    if (lineIndex < lines.length) {
      var line = lines[lineIndex];
  
      // Add line break starting from the third line
      if (lineIndex > 1 && charIndex === 0) {
        textElement.innerHTML += '<br>';
      }
  
      // Add dot at the start of each line, except the first and second lines
      if (lineIndex > 1 && charIndex === 0) {
        textElement.innerHTML += '&#11044; ';
      }
  
      // Display characters of the current line one by one
      if (charIndex < line.length) {
        textElement.innerHTML += line.charAt(charIndex);
        charIndex++;
        setTimeout(function() {
          displayText(lineIndex, charIndex);
        }, 20);
      } else {
        // Move to the next line
        textElement.innerHTML += '<br>';
        lineIndex++;
        setTimeout(function() {
          displayText(lineIndex, 0);
        }, 20);
      }
    }
  }
  
  // Start displaying the text from the first line
  displayText(0, 0);
  
var textElement = document.getElementById('text');

function changeTextColor() {
  textElement.style.color = '#00ff16';
  setTimeout(function() {
    textElement.style.color = 'white';
    textElement.style.animation = 'none';
  }, 7000); // Reset text color and animation after 7 seconds
}

setInterval(changeTextColor, 21000); // Repeat every 21 seconds

  
