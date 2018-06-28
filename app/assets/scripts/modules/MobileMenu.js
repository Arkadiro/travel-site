class MobileMenu {
    constructor() {
        this.siteHeader =  document.querySelector('.site-header');
        this.mobileMenu = document.querySelector('.site-header-menu-icon');
        this.menuContent = document.querySelector('.site-header-menu-content');
        this.events();
    }

    events() {
        this.mobileMenu.addEventListener('click', this.toggleMenu.bind(this));
        //console.log(this.menuContent)
    }

    toggleMenu() {
        this.menuContent.classList.toggle('site-header-menu-content-visible');
        this.siteHeader.classList.toggle('site-header-expand');
        this.mobileMenu.classList.toggle('site-header-menu-icon-close-x');
        //console.log(this)
    }

}

export default MobileMenu;