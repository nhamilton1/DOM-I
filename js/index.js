const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//NAV
const navItem = document.querySelectorAll('a');
// console.log(navItem)
navItem[0].textContent = 'Service'
navItem[1].textContent = 'Product'
navItem[2].textContent = 'Vision'
navItem[3].textContent = 'Features'
navItem[4].textContent = 'About'
navItem[5].textContent = 'Contact'


const navGreen = document.querySelectorAll('a');
navGreen[0].style.color = 'green'
navGreen[1].style.color = 'green'
navGreen[2].style.color = 'green'
navGreen[3].style.color = 'green'
navGreen[4].style.color = 'green'
navGreen[5].style.color = 'green'
console.log(navGreen)

//H1, IMG, BUTTON
const h1ofBody = document.querySelector('h1');
// console.log(h1ofBody);
h1ofBody.textContent = 'DOM IS AWESOME';
h1ofBody.style.width = '230px'


const roundImg = document.getElementById('cta-img');
// console.log(roundImg);
roundImg.setAttribute('src', 'img/header-img.png');
roundImg.setAttribute('alt', 'Image of a code snippet.');




const buttonDOM = document.querySelector('button')
// console.log(buttonDOM)
buttonDOM.textContent = 'Get Started'



//Middle content of page

const contentofMiddle = document.querySelector('.text-content');
// console.log(contentofMiddle);
const pOfMiddle = contentofMiddle.querySelector('p')
const h4OfMiddle = contentofMiddle.querySelector('h4')
h4OfMiddle.textContent = 'Features'
pOfMiddle.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const contentofMiddle2 = document.querySelector('.text-content:nth-of-type(2)');
// console.log(contentofMiddle2)
const pOfMiddle2 = contentofMiddle2.querySelector('p')
const h4OfMiddle2 = contentofMiddle2.querySelector('h4')
h4OfMiddle2.textContent = 'About'
pOfMiddle2.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'




const bottomContent = document.querySelector('.bottom-content')
console.log(bottomContent)
const h4OfBottom = bottomContent.querySelector('h4')
const pOfBottom = bottomContent.querySelector('p')
h4OfBottom.textContent = 'Services'
pOfBottom.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'



const bottomContent1 = document.querySelector('.bottom-content')
bottomContent1.children[1].querySelector('h4').textContent = 'Product'
bottomContent1.children[1].querySelector('p').textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
console.log(bottomContent1.children[1])

const bottomContent2 = document.querySelector('.bottom-content')
bottomContent2.children[2].querySelector('h4').textContent = 'Vision'
bottomContent2.children[2].querySelector('p').textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'


// const bottomContent = document.querySelector('.bottom-content')
// console.log(bottomContent)
// const h4OfBottom = bottomContent.querySelector('h4')
// const pOfBottom = bottomContent.querySelector('p')
// h4OfBottom.textContent = 'Services'
// pOfBottom.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'



// contentofMiddle[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'



const midPageAccent = document.querySelector('.middle-img');
// console.log(midPageAccent)
midPageAccent.setAttribute('src', 'img/mid-page-accent.jpg');
midPageAccent.setAttribute('alt', 'Image of code snippets across the screen');




// adding new content
const newLink = document.createElement('a')
newLink.textContent = 'Blog'
newLink.style.color = 'green'
newLink.href = '#'
document.querySelector('nav').appendChild(newLink)


const contactArea = document.querySelector('.contact')
console.log(contactArea)


//contact section
contactArea.children[0].textContent = 'Contact'
contactArea.children[1].textContent = '123 Way 456 Street Somewhere, USA'
contactArea.children[2].textContent = '1 (888) 888-8888'
contactArea.children[3].textContent = 'sales@greatidea.io'
console.log(contactArea.children)

//footer
const endFooter = document.querySelector('footer')
endFooter.children[0].textContent = 'Copyright Great Idea! 2018'
console.log(endFooter)



