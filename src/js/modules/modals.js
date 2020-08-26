const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]');

        trigger.forEach((item) => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault()
                }
                hideAll(windows);
                show(modal)
            })
        })
        close.addEventListener('click', () => {
            hideAll(windows);
            hide(modal);
        })
        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                hideAll(windows);
                hide(modal);
            }
        })
    }

    function show(el) {
        el.style.display = 'block';
        document.body.classList.add('modal-open');
    }

    function hide(el) {
        el.style.display = 'none';
        document.body.classList.remove('modal-open');
    }
    function hideAll(el) {
        el.forEach(item => {
            item.style.display = 'none';
        })
    }


    function showByTime(selector, time) {
        setTimeout(()=>{
            show(document.querySelector(selector));
        }, time);
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);

    // showByTime('.popup', 60000);
}
export default modals;