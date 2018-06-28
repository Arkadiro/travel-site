import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
    constructor() {
        this.siteHeader = document.querySelector('.site-header');
        this.headerTriggerElement = document.querySelector('.large-hero-title');
        this.createHeaderWaypoint()
        console.log(this.siteHeader);
        this.pageSections = document.querySelectorAll('.page-section');
        this.headerLinks = document.querySelectorAll('.primary-nav a');
        this.createPageSectionWaypoints();
    }

    createHeaderWaypoint() {
        //let that = this; 
        new Waypoint({
            element: this.headerTriggerElement,
            handler: (direction) => {
                if (direction == 'down') {
                    this.siteHeader.classList.add('site-header-dark');
                } else {
                    this.siteHeader.classList.remove('site-header-dark');
                }
            }
        });
    }

    createPageSectionWaypoints() {
        this.pageSections.forEach((el) => {
            var currentPageSection = el;
            new Waypoint({
                element: currentPageSection,
                handler: (direction) => {
                    if (direction == "down") {
                        const headerLink = currentPageSection.getAttribute("data-link");
                        this.headerLinks.forEach((el) => {
                            el.classList.remove('current-link');
                        })
                        document.getElementById(`${headerLink}`).classList.add('current-link');
                    }
                },
                offset: '18%'
            })

            new Waypoint({
                element: currentPageSection,
                handler: (direction) => {
                    if (direction == "up") {
                        const headerLink = currentPageSection.getAttribute("data-link");
                        this.headerLinks.forEach((el) => {
                            el.classList.remove('current-link');
                        })
                        document.getElementById(`${headerLink}`).classList.add('current-link');
                    }
                },
                offset: '-60%'
            })
        })
    }
}

export default StickyHeader