class MinjQuery {


    constructor(element) {
        this.element = element;
        this.visibale = true;
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

    fadeToggle(duration) {
        // fade toggle
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
