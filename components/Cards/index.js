// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//              </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.


// const articleTopics = ['bootstrap', 'javascript', 'jquery', 'node', 'technology'];
// articleTopics.forEach((i)=>{

axios
.get(`https://lambda-times-backend.herokuapp.com/articles/`)

.then((res)=>{
    console.log ('Yes! This is the res:', res)

    res.data.articles.bootstrap.forEach((i)=>{
        const cardsContainer =document.querySelector('.cards-container');
        cardsContainer.appendChild(card(i))
    })
    res.data.articles.javascript.forEach((i)=>{
        const cardsContainer =document.querySelector('.cards-container');
        cardsContainer.appendChild(card(i))
    })
    res.data.articles.jquery.forEach((i)=>{
        const cardsContainer =document.querySelector('.cards-container');
        cardsContainer.appendChild(card(i))
    })
    res.data.articles.node.forEach((i)=>{
        const cardsContainer =document.querySelector('.cards-container');
        cardsContainer.appendChild(card(i) )
    })
    res.data.articles.technology.forEach((i)=>{
        const cardsContainer =document.querySelector('.cards-container');
        cardsContainer.appendChild(card(i))
    })

 .catch((err)=>{
    console.log('What the hell?!:', err)
     });
 });

function card(items){
    const cardParent = document.createElement('div');
    const titleH = document.createElement('div');
    const authorInfo = document.createElement('div');
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    const authorName = document.createElement('span');

    cardParent.appendChild(titleH);
    cardParent.appendChild(authorInfo);
    authorInfo.appendChild(imageContainer);
    imageContainer.appendChild(image);
    authorInfo.appendChild(authorName);

    cardParent.classList.add('card');
    titleH.classList.add('headline');
    authorInfo.classList.add('author');
    imageContainer.classList.add('img-container');

    titleH.textContent = (items['headline']);
    image.src = (items['authorPhoto']);
    authorName.textContent =('By:  ')+(items['authorName']);



 console.log(cardParent);
 return cardParent;
};