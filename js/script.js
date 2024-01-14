const $ = (s) => document.querySelector(s);

$('#hamburger-menu').addEventListener('click', function () {
    $('nav .navbar-nav').classList.toggle('active');
});

document.addEventListener('click', function (e) {
    if (!e.target.matches('#hamburger-menu *, .navbar-nav *')) {
        $('nav .navbar-nav').classList.remove('active');
    }
});
