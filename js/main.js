import products from './data-seed.js';
// import Navbar from '../views/Navbar.vue';

const app = Vue.createApp({
    data() {
        return {
            products,
            showMenu: false,
            showCart: false,
            showSearch: false,
            showModal: false,
            cart: {
                items: [],
                total: 0,
                qty: 0,
            },
        };
    },
    methods: {
        addToCart(product) {
            this.cart.items.push(product);
            this.cart.total += product.price;
            this.cart.qty++;
            console.log(this.cart.total);
        },
        formattedPrice(price) {
            const rupiah = new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0,
            }).format(price);
            return rupiah;
        },
        toggleCart() {
            this.showCart = !this.showCart;
        },
        toggleMenu() {
            this.showMenu = !this.showMenu;
        },
        toggleSearch() {
            this.showSearch = !this.showSearch;
        },
        toggleModal() {
            this.showModal = !this.showModal;
        },
        closeModal() {
            this.showModal = false;
        },
        handleClickOutside(event) {
            const { navbarNav, hamburgerMenu, btnCart, shoppingCart, searchForm, btnSearch, modalClose, modal } =
                this.$refs;

            if (this.showMenu && !navbarNav.contains(event.target) && !hamburgerMenu.contains(event.target)) {
                this.showMenu = false;
            }
            if (this.showCart && !shoppingCart.contains(event.target) && !btnCart.contains(event.target)) {
                this.showCart = false;
            }
            if (this.showSearch && !searchForm.contains(event.target) && !btnSearch.contains(event.target)) {
                this.showSearch = false;
            }
            if (this.showModal && event.target === modal) {
                this.showModal = false;
            }
        },
    },
    mounted() {
        document.addEventListener('click', this.handleClickOutside);
        feather.replace();
    },
    beforeUnmounted() {
        document.removeEventListener('click', this.handleClickOutside);
    },
});
app.mount('#app');

// const $ = (s) => {
//     const elements = document.querySelectorAll(s);
//     return elements.length === 1 ? elements[0] : elements;
// };

// // Toggle Navbar
// $('#hamburger-menu').addEventListener('click', function (e) {
//     $('nav .navbar-nav').classList.toggle('active');
// });

// // Toggle Search
// $('#search').addEventListener('click', function (e) {
//     $('nav .search-form').classList.toggle('active');
//     $('#search-box').focus();
//     e.preventDefault();
// });

// // Toggle Shopping Cart
// $('#shopping-cart').addEventListener('click', function (e) {
//     $('nav .shopping-cart').classList.toggle('active');
//     e.preventDefault();
// });

// $('.product-detail').forEach((element) => {
//     element.addEventListener('click', function (e) {
//         e.preventDefault();
//         $('#item-detail-modal').style.display = 'flex';
//     });
// });

// $('.modal-close').addEventListener('click', function (e) {
//     e.preventDefault();
//     $('#item-detail-modal').style.display = 'none';
// });

// // Close Navbar, Search & Shopping Cart
// document.addEventListener('click', function (e) {
//     if (!e.target.matches('#hamburger-menu *, .navbar-nav *')) {
//         $('nav .navbar-nav').classList.remove('active');
//     }

//     if (!e.target.matches('#search *, .search-form *')) {
//         $('nav .search-form').classList.remove('active');
//     }
//     if (!e.target.matches('#shopping-cart *, .shopping-cart *')) {
//         $('nav .shopping-cart').classList.remove('active');
//     }
//     if (e.target === $('#item-detail-modal')) {
//         $('#item-detail-modal').style.display = 'none';
//     }
// });
