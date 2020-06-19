/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

//const navElements = document.querySelectorAll('section');
//const menuElements = document.getElementById('navbar__list');

/**
 * End Global Variables
 */

// Build menu by iterating through the navelements..

let l1 = document.createElement('li');
l1.innerHTML = '<a href = "#section1"> Section 1';
navbar__list.appendChild(l1);
//l1.id = 'l1';

let l2 = document.createElement('li');
l2.innerHTML = '<a href = "#section2"> Section 2';
navbar__list.appendChild(l2);
//l2.id = 'l2';

let l3 = document.createElement('li');
l3.innerHTML = '<a href = "#section3"> Section 3';
navbar__list.appendChild(l3);
//l3.id = 'l3';

let l4 = document.createElement('li');
l4.innerHTML = '<a href = "#section4"> Section 4';
navbar__list.appendChild(l4);
//l4.id = 'l4';

// change navigaion bgcolor when scroll down/up.
window.addEventListener('scroll', function (e) {
    var nav = document.getElementById("navbar__list");
    if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
            nav.classList.add('nav-colored');
            nav.classList.remove('nav-transparent');
            
        } else {
            nav.classList.add('nav-transparent');
            nav.classList.remove('nav-colored');
        }
});
        // For active class.

        let mainNavLinks = document.querySelectorAll("nav ul li a");
        let mainSections = document.querySelectorAll("main section");
        window.addEventListener("scroll", event => {
        let fromTop = window.scrollY;
        mainNavLinks.forEach(link => {
            let section = document.querySelector(link.hash);

            if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
            ) {
            link.classList.add("current");
            } else {
            link.classList.remove("current");
            }
        });
        }); 