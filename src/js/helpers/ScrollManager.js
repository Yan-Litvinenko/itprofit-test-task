class ScrollManager {
    constructor() {
        this.position = 0;
    }

    scrollOff() {
        this.position = window.scrollY;
        document.body.style.cssText = `
            overflow: hidden;
            padding-right: ${window.innerWidth - document.body.offsetWidth}px;
            position: fixed;
            top: -${this.position}px;
            left: 0;
            height: 100vh;
            width: 100vw;
        `;
        document.documentElement.style.scrollBehavior = 'unset';
    }

    scrollOn() {
        document.body.style.cssText = '';
        window.scrollTo({
            top: this.position,
        });
        document.documentElement.style.scrollBehavior = '';
    }
}

export const scrollManager = new ScrollManager();
