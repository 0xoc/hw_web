class MinjQuery {


    constructor(element) {
        this.element = element;
        this.visibale = true;

        this.onGoingInterval = null;
    }

    cancelInterval() {
        if (this.onGoingInterval != null){
            clearInterval(this.onGoingInterval);
        }
    }

    addClass(className) {
        this.element.classList.add(className)
    }

    attr(attrName) {
        // get attr value of the element
        return this.element.getAttribute(attrName)
    }

    children() {
        // return a list of children of the element
        return this.element.childNodes
    }

    click(callback) {
        // set on click listener with callback
        this.element.onclick = callback;
    }

    empty() {
        // remove all children
        this.element.innerHTML = '';
    }

    getOpacity() {
        // get element opacity
        return parseFloat(window.getComputedStyle(this.element).opacity);
    }

    setOpacity(opacity) {
        this.element.style.opacity = opacity.toString()
    }

    checkAndSetOpacity(target, isUp){
        let currentOpacity = this.getOpacity();

        console.log(currentOpacity, target);

        // clear interval if target reached
        if (currentOpacity === target)
            this.cancelInterval();

        if (isUp)
            this.setOpacity(currentOpacity + 0.01);
        else
            this.setOpacity(currentOpacity - 0.01);
    }

    fadeToggle(duration) {
        // cancel any on going interval
        this.cancelInterval();

        // initial setup
        duration = duration * 1000;                 // convert to millisecond
        let initialOpacity = this.getOpacity();     // get the initial opacity

        let totalOpacityStepsNeeded;                // total number of intervals needed to get to target opacity
        let timeFactor;                             // amount of time to get to target opacity
        let timeQuantum;                            // interval between each opacity update call
        let target;                                 // target opacity

        if (this.visibale) {
            target = 0;
            totalOpacityStepsNeeded = parseInt(initialOpacity * 100 );
            timeFactor = duration * totalOpacityStepsNeeded/100;
            timeQuantum = timeFactor / (totalOpacityStepsNeeded);

        } else {
            target = 1;
            totalOpacityStepsNeeded = parseInt((1 - initialOpacity) * 100 );
            timeFactor = duration * totalOpacityStepsNeeded/100;
            timeQuantum = timeFactor / (totalOpacityStepsNeeded);
        }

        this.onGoingInterval = setInterval(()=> {
            this.checkAndSetOpacity(target, this.visibale);
        }, timeQuantum);

        // toggle internal visibility state
        this.visibale = !this.visibale;
    }

    hasClass(className) {
        // if element has class

        let allClasses = this.attr('class');

        if (allClasses == null)
            return false;

        return allClasses.split().includes(className);
    }

    hover(callback) {
        // hover class back

        this.element.onmouseover = callback;

    }

    removeAttr(attrName) {
        // remove attr
        this.element.removeAttribute(attrName);
    }

    toggleClass(className) {
        // toggle class
        this.element.classList.toggle(className);
    }
}
