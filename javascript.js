document.querySelector('a[href="#about"]').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
});