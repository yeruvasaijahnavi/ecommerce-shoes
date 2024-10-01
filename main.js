const closeBtn = document.getElementById("close");
const menu = document.getElementById("menu");
const navMenu = document.getElementById("nav-menu");
const counter = document.getElementById("counter");
const iconPlus = document.getElementById("icon-plus");
const iconMinus = document.getElementById("icon-minus");
const backdrop = document.getElementById("lightbox");
const hideBackdrop = document.getElementById("close-lightbox");
const images = document.querySelectorAll(".light-box-image");
const thumbBtns = document.querySelectorAll(".thumbnails");
const img = document.getElementById("lightbox-image");
const heroImg = document.getElementById("main-img");
const cartImg = document.getElementById("cart-img");
const prevBtns = document.querySelectorAll(".previous");
const nextBtns = document.querySelectorAll(".next");

// -------------------- Cart-related --------------------
// Cart Toggle and Interactions
const cart = document.getElementById("cart");
const previewCard = document.getElementById("card");
const addCart = document.getElementById("add-to-cart");
const cartNumber = document.getElementById("cart-number");
const numOfItems = document.getElementById("number-of-items");
const checkout = document.getElementById("checkout");
const amount = document.getElementById("amount");
const emptyCart = document.getElementById("empty-cart");
const cartInfo = document.getElementById("cart-info");
const removeItem = document.getElementById("icon-delete");

cart.addEventListener("click", () => {
    previewCard.classList.remove("hidden");
});

addCart.addEventListener("click", () => {
    // Show number of items ordered in cart if order is greater than one else hide the number of items
    if (counter.textContent > 0) {
        cartNumber.classList.remove("hidden");
        cartNumber.textContent = 1;
        emptyCart.classList.add("hidden");
        cartInfo.classList.remove("hidden");
    } else {
        cartNumber.classList.add("hidden");
        cartInfo.classList.add("hidden");
        emptyCart.classList.remove("hidden");
    }

    // Update the number of items in cart modal
    numOfItems.textContent = counter.textContent;

    // Calculate the total amount to be paid
    let totalAmount = Number(amount.textContent) * numOfItems.textContent;
    checkout.textContent = `$${totalAmount.toFixed(2)}`;
    counter.textContent = 0;
});

removeItem.addEventListener("click", () => {
    counter.textContent = 0;
    cartNumber.classList.add("hidden");
    cartInfo.classList.add("hidden");
    emptyCart.classList.remove("hidden");
});

menu.addEventListener("click", () => {
    navMenu.classList.remove("hidden");
    closeBtn.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
    navMenu.classList.add("hidden");
    closeBtn.classList.add("hidden");
    backdrop.classList.add("hidden");
});

iconPlus.addEventListener("click", () => {
    counter.textContent = Number(counter.textContent) + 1;
});

iconMinus.addEventListener("click", () => {
    counter.textContent = Number(counter.textContent) - 1;
    if (counter.textContent < 0) {
        counter.textContent = 0;
    }
});

// Click outside an area to close
document.onclick = function (e) {
    if (e.target.id !== "cart") {
        previewCard.classList.add("hidden");
    }
};

// Lightbox

hideBackdrop.addEventListener("click", () => {
    backdrop.classList.add("hidden");
});

heroImg.addEventListener("click", () => {
    backdrop.classList.remove("hidden");
});

images.forEach((image) => {
    image.addEventListener("click", () => {
        backdrop.classList.remove("hidden");
        img.src = image.src;
        heroImg.src = image.src;
    });
});

thumbBtns.forEach((thumb) => {
    thumb.addEventListener("click", () => {
        thumbBtns.forEach((btn) => btn.classList.remove("active-thumbnail"));
        thumb.classList.add("active-thumbnail");
        heroImg.src = thumb.src;
        cartImg.src = thumb.src;
        img.src = thumb.src;
    });
});

// Slider

let imageGallery = [
    "images/product/image-product-1.jpg",
    "images/product/image-product-2.jpg",
    "images/product/image-product-3.jpg",
    "images/product/image-product-4.jpg",
];

let current_image_index = 0;

nextBtns.forEach((nextBtn) => {
    nextBtn.addEventListener("click", () => {
        current_image_index += 1;
        if (current_image_index < imageGallery.length) {
            heroImg.src = imageGallery[current_image_index];
            cartImg.src = imageGallery[current_image_index];
            img.src = imageGallery[current_image_index];
        } else {
            current_image_index = 0;

            heroImg.src = imageGallery[current_image_index];
            cartImg.src = imageGallery[current_image_index];
            img.src = imageGallery[current_image_index];
        }

        thumbBtns.forEach((thumb) => {
            if (thumb.src == heroImg.src) {
                thumb.classList.add("active-thumbnail");
            } else {
                thumb.classList.remove("active-thumbnail");
            }
        });
    });
});

prevBtns.forEach((prevBtn) => {
    current_image_index = 4;
    prevBtn.addEventListener("click", () => {
        if (current_image_index <= 0) {
            current_image_index = 4;
            current_image_index -= 1;

            heroImg.src = imageGallery[current_image_index];
            cartImg.src = imageGallery[current_image_index];
            img.src = imageGallery[current_image_index];
        } else {
            current_image_index -= 1;

            heroImg.src = imageGallery[current_image_index];
            cartImg.src = imageGallery[current_image_index];
            img.src = imageGallery[current_image_index];
        }

        thumbBtns.forEach((thumb) => {
            if (thumb.src == heroImg.src) {
                thumb.classList.add("active-thumbnail");
            } else {
                thumb.classList.remove("active-thumbnail");
            }
        });
    });
});
