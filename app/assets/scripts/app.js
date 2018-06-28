import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';


const mobileMenu = new MobileMenu();
//const revealOnScroll = new RevealOnScroll();

new RevealOnScroll(document.querySelectorAll('.feature-item'), '85%');
new RevealOnScroll(document.querySelectorAll('.testimonial'), '60%');