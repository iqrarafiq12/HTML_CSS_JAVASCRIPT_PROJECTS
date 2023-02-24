window.addEventListener('scroll',
    function myFunction() {
        let navbar =
            document.getElementById('menu-bar');

        if (window.pageYOffset >= 411) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });