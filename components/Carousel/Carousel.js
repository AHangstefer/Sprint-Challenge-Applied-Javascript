/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carousel(){
  const carouselParent = document.createElement('div');
  const leftButton = document.createElement('div');
  const mountainImg = document.createElement('img');
  const computerImg = document.createElement('img');
  const treeImg = document.createElement('img');
  const turntableImg = document.createElement('img');
  const rightButton = document.createElement('div');

  carouselParent.appendChild(leftButton);
  carouselParent.appendChild(mountainImg);
  carouselParent.appendChild(computerImg);
  carouselParent.appendChild(treeImg);
  carouselParent.appendChild(turntableImg);
  carouselParent.appendChild(rightButton);

  carouselParent.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  mountainImg.src = ("../assets/carousel/mountains.jpeg");  
  computerImg.src = ("../assets/carousel/computer.jpeg");
  treesImg.src = ("../assets/carousel/trees.jpeg");
  turntableImg.src = ("../assets/carousel/turntable.jpeg");

  leftButton.addEventListener('click', (e)=>{
    
  });

  rightButton.addEventListener('click', (e)=>{

  });
  
  
return carouselParent;
}
console.log(carouselParent);

const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.appendChild(carousel());
console.log(carouselContainer);
