const $ = (s) => {
    const elements = document.querySelectorAll(s);
    return elements.length === 1 ? elements[0] : elements;
};

// Toggle Navbar
$('#hamburger-menu').addEventListener('click', function (e) {
    $('nav .navbar-nav').classList.toggle('active');
});

// Toggle Search
$('#search').addEventListener('click', function (e) {
    $('nav .search-form').classList.toggle('active');
    $('#search-box').focus();
    e.preventDefault();
});

// Toggle Shopping Cart
$('#shopping-cart').addEventListener('click', function (e) {
    $('nav .shopping-cart').classList.toggle('active');
    e.preventDefault();
});

$('.product-detail').forEach((element) => {
    element.addEventListener('click', function (e) {
        e.preventDefault();
        $('#item-detail-modal').style.display = 'flex';
    });
});

$('.modal-close').addEventListener('click', function (e) {
    e.preventDefault();
    $('#item-detail-modal').style.display = 'none';
});

// Close Navbar, Search & Shopping Cart
document.addEventListener('click', function (e) {
    if (!e.target.matches('#hamburger-menu *, .navbar-nav *')) {
        $('nav .navbar-nav').classList.remove('active');
    }

    if (!e.target.matches('#search *, .search-form *')) {
        $('nav .search-form').classList.remove('active');
    }
    if (!e.target.matches('#shopping-cart *, .shopping-cart *')) {
        $('nav .shopping-cart').classList.remove('active');
    }
    if (e.target === $('#item-detail-modal')) {
        $('#item-detail-modal').style.display = 'none';
    }
});
