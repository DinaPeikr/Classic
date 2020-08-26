import checkNumInputs from './checkNumInputs';
const forms = (state) => {
    console.log(state);
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');

    checkNumInputs('input[name="user_phone"]');

    const message = {
        loading: 'Loading',
        success: 'Thanks for order!',
        failure: 'Something wrong...',
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: "POST",
            body: data
        });
        return await res.text();

    };
    const clearInputs = () => {
        inputs.forEach((input) => {
            input.value = '';
        })
    };
    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);
            if (item.getAttribute('data-calc') === 'end'){
                for (let key in state){
                    formData.append(key, state[key]);
                }
            }

            postData('assets/server.php', formData)
                .then((res) => {
                    console.log('Send', res);
                    statusMessage.textContent = message.success;
                })
                .catch((err) => {
                    console.log(err);
                    statusMessage.textContent = message.failure;
                })
                .finally(() => {
                    // form.reset();
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                });

        })
    })
};
export default forms;
