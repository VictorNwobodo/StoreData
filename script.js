(function () {
    const form = document.querySelector("#form");
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const message = document.querySelector('#message');
        const feedBack = document.querySelector('#valueContent');
        const errorPopOut = document.querySelector('.error');
        
        if (message.value === '') {
            errorPopOut.classList.add('show')
            setTimeout(function () {
                errorPopOut.classList.remove('show');
            }, 4000)
            
        } else {
            feedBack.textContent = message.value;
            message.value = '';
        }
    
    })
})();