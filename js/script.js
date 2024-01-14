const $ = (s) => {
    const elements = document.querySelectorAll(s);
    return elements.length === 1 ? elements[0] : elements;
};

$('#hamburger-menu').addEventListener('click', function (e) {
    $('nav .navbar-nav').classList.toggle('active');
});

document.addEventListener('click', function (e) {
    if (!e.target.matches('#hamburger-menu *, .navbar-nav *')) {
        $('nav .navbar-nav').classList.remove('active');
    }
});

$('.navbar-nav a').forEach((element) => {
    element.addEventListener('click', function (e) {
        $('nav .navbar-nav').classList.remove('active');
    })
});
