class MinjQuery {


    constructor(element) {
        this.element = element;
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
    }

    click(callback) {
        // set on click listener with callback
        this.element.onclick = callback;
        console.log("added")
    }

    empty() {
        // remove all children
    }

    fadeToggle(duration) {
        // fade toggle
    }

    hasClass(className) {
        // Determine whether passed element has given class
    }

    hover(callback) {
        // hover call back
    }

    removeAttr(attrName) {
        // remove attr
    }

    toggleClass(className) {
        // toggle class
    }
}
