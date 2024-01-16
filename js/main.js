import products from './data-seed.js';

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
            const { id, price } = product;

            const cartItem = this.cart.items.find((chunk) => chunk.id === id);

            if (!cartItem) {
                this.cart.items.push({ ...product, qty: 1, total: price });
                this.cart.total += price;
                this.cart.qty++;
            } else {
                this.cart.items = this.cart.items.map((chunk) => {
                    if (chunk.id !== id) {
                        return chunk;
                    } else {
                        chunk.qty++;
                        chunk.total = chunk.price * chunk.qty;
                        this.cart.qty++;
                        this.cart.total += chunk.price;
                        return chunk;
                    }
                });
            }
        },
        removeFromCart(product) {
            const { id } = product;
            const cartItem = this.cart.items.find((chunk) => chunk.id === id);

            if (cartItem.qty > 1) {
                this.cart.items = this.cart.items.map((chunk) => {
                    if (chunk.id !== id) {
                        return chunk;
                    } else {
                        chunk.qty--;
                        chunk.total = chunk.price * chunk.qty;
                        this.cart.qty--;
                        this.cart.total -= chunk.price;
                        return chunk;
                    }
                });
            } else {
                this.cart.items = this.cart.items.filter((chunk) => chunk.id !== id);
                this.cart.qty--;
                this.cart.total -= cartItem.total;
            }
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
            const { navbarNav, hamburgerMenu, btnCart, shoppingCart, searchForm, btnSearch, modal } = this.$refs;

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
