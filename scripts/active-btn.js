export const buttons = document.querySelectorAll('.on');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active')
        console.log(88);
    })
})