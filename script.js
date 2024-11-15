document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    const toggleButton = document.getElementById('toggleButton');
    const container = document.querySelector('.container');
  
    // Add click event to each box
    boxes.forEach((box, index) => {
      box.addEventListener('click', () => {
        console.log(`Box ${index + 1} clicked!`);
      });
    });
  
    // Toggle visibility of the boxes
    toggleButton.addEventListener('click', () => {
      if (container.style.display === 'none') {
        container.style.display = 'flex';
      } else {
        container.style.display = 'none';
      }
    });
  });