import checkNumInputs from './checkNumInputs';

const changedModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');
    checkNumInputs('#width');
    checkNumInputs('#height');

    function bindActionToElem(event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case 'SPAN' :
                        state[prop] = i;
                        break;
                    case 'INPUT' :
                        if (item.getAttribute('type') === 'radio') {
                            i === 0 ? state[prop] = 'cold' : state[prop] = 'warm'
                        } else {
                            state[prop] = item.value;
                        }
                        break;
                        case 'SELECT' :
                            state[prop] = item.value;
                        break;
                }
                console.log(state);
            })
        })
    }

    bindActionToElem('click', windowForm, 'form');
    bindActionToElem('input', windowWidth, 'width');
    bindActionToElem('input', windowHeight, 'height');
    bindActionToElem('change', windowType, 'type');
    bindActionToElem('change', windowProfile, 'profile');


}
export default changedModalState;
