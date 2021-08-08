function loadPage(event){
event.preventDefault()    
var elementId = event.target
console.log(elementId)

for (const section of sectionArray){
    section.setAttribute("data-display", "hide")
}

    // hero.setAttribute("data-display", "hide")
    // aboutME.setAttribute("data-display", "hide")
    // portfolio.setAttribute("data-display", "hide")
    // contact.setAttribute("data-display", "hide")
    
if( elementId.getAttribute("href") === '#about') {
    aboutME.setAttribute("data-display", "show")
} else if( elementId.getAttribute("href") === '#port-start') {
    portfolio.setAttribute("data-display", "show")
} else if( elementId.getAttribute("href") === '#contact') {
    contact.setAttribute("data-display", "show")
}else if(elementId.getAttribute("href") === '#hero'){
    hero.setAttribute("data-display", "show")
} else {
    return;
}};

// var aboutLink = document.getElementsByTagName("a[href='#about']");
var aboutLink = document.querySelector(".aboutLink")
console.log(aboutLink)
var portfolioLink = document.getElementsByTagName("a[href='#port-start']");
var contactLink = document.getElementsByTagName("a[href='#contact']");
var nav = document.querySelector('.nav-bar');
var links = nav.querySelectorAll('a')
console.log(links)

var hero = document.getElementById("hero");
console.log(hero)
var aboutME = document.getElementById("about");
var portfolio = document.getElementById("port-start");
var contact = document.getElementById("contact");

var sectionArray= [hero, aboutME, portfolio, contact]


for (const link of links) {
link.addEventListener("click", loadPage);
};