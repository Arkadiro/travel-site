import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';


const mobileMenu = new MobileMenu();
const stickyHeader = new StickyHeader();
//const revealOnScroll = new RevealOnScroll();

new RevealOnScroll(document.querySelectorAll('.feature-item'), '85%');
new RevealOnScroll(document.querySelectorAll('.testimonial'), '85%');