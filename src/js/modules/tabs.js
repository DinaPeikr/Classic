const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

    function hideContent() {
        content.forEach(item => {
            hide(item);
        })
        tab.forEach(item => {
            item.classList.remove(activeClass);
        })
    }

    function showContent(i = 0) {
        show(content[i]);
        tab[i].classList.add(activeClass);
    }

    function show(el) {
        el.style.display = display;
    }

    function hide(el) {
        el.style.display = 'none';
    }

    hideContent();
    showContent();

    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target && (target.classList.contains(tabSelector.replace(/\./, '')) ||
            target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideContent();
                    showContent(i);
                }
            })
        }
    })
}
export default tabs;
