document.querySelector('.menu').addEventListener('click', () => {
    document.querySelectorAll('.target').forEach((item) => {
        item.classList.toggle('pull')
    })
});

const icons = document.querySelectorAll('.section-1-icons i');
const links = document.querySelectorAll('.section-1-links a');
let i = 1;

setInterval(() => {
    i++
   
    const icon = document.querySelector('.section-1-icons .change');
    const link = document.querySelector('.section-1-links .changey');

    icon.classList.remove('change');
    link.classList.remove('changey');

    if(i> icons.length && i>links.length) {
        icons[0].classList.add('change')
        links[0].classList.add('changey')
        i=1;
    } else {
        icon.nextElementSibling.classList.add('change')
        link.nextElementSibling.classList.add('changey')
    };
}, 4000)


