// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container



function Header() {
    const headerParent = document.createElement('div');
    const dateSpan = document.createElement('span');
    const h1Title = document.createElement('h1');
    const tempSpan = document.createElement('span');

    headerParent.appendChild(dateSpan);
    headerParent.appendChild(h1Title);
    headerParent.appendChild(tempSpan);

    headerParent.classList.add('header');
    dateSpan.classList.add('date');
    tempSpan.classList.add('temp');

return headerParent;
};

const headerContainer = document.querySelector('.header-container');

headerContainer.append(Header());
console.log(headerContainer);
