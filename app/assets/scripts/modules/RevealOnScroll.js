import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor(els, offset) {
        this.itemsToReveal = els;
        this.offset = offset;
        //console.log(this.itemsToReveal);
        this.hideInitially();
        this.createWaypoints();
        
    }
    hideInitially(){
        this.itemsToReveal.forEach((el) => {
            el.classList.add('reveal-item');
        })

    }

    createWaypoints() {
        let thatObj = this;
        this.itemsToReveal.forEach((el) => {
            let that = el;
            new Waypoint({
                element: that,
                handler: () => {
                    that.classList.add('reveal-item-visible');
                },
                offset: thatObj.offset
            });
        })
    }
}

export default RevealOnScroll;
