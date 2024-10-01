// -------------------- Cart-related --------------------
const shoppingCart = document.getElementById("cart");
const cartPreview = document.getElementById("card");
const addToCartBtn = document.getElementById("add-to-cart");
const itemCount = document.getElementById("cart-number");
const totalItems = document.getElementById("number-of-items");
const checkoutBtn = document.getElementById("checkout");
const totalAmountDisplay = document.getElementById("amount");
const clearCartBtn = document.getElementById("empty-cart");
const cartDetails = document.getElementById("cart-info");
const deleteItemBtn = document.getElementById("icon-delete");

shoppingCart.addEventListener("click", () => {
    cartPreview.classList.toggle("hidden");
});

addToCartBtn.addEventListener("click", () => {
    if (counter.textContent <= 0) {
        notification.classList.remove("hidden"); // Show the notification bubble

        // Hide the notification after 3 seconds
        setTimeout(() => {
            notification.classList.add("hidden");
        }, 3000);

        return; // Exit the function if quantity is 0
    }
    const currentCount = Number(counter.textContent);
    // Show number of items ordered in cart if order is greater than one else hide the number of items
    if (counter.textContent > 0) {
        itemCount.classList.remove("hidden");
        itemCount.textContent =
            (Number(itemCount.textContent) || 0) + currentCount;
        clearCartBtn.classList.add("hidden");
        cartDetails.classList.remove("hidden");
    } else {
        itemCount.classList.add("hidden");
        cartDetails.classList.add("hidden");
        clearCartBtn.classList.remove("hidden");
    }

    // Update the number of items in cart modal
    totalItems.textContent = itemCount.textContent; // Show the updated count in the modal

    // Calculate the total amount to be paid
    let calculatedAmount =
        Number(totalAmountDisplay.textContent) * totalItems.textContent;
    checkoutBtn.textContent = `$${calculatedAmount.toFixed(2)}`;
    counter.textContent = 0;
});

deleteItemBtn.addEventListener("click", () => {
    counter.textContent = 0;
    itemCount.classList.add("hidden");
    cartDetails.classList.add("hidden");
    clearCartBtn.classList.remove("hidden");
});

// Click anywhere outside card to close
document.onclick = function (e) {
    if (e.target.id !== "cart") {
        cartPreview.classList.add("hidden");
    }
};

// ------------------Mobile Menu ------------------
// Menu Toggle
const hamburgerMenu = document.getElementById("menu");
const sidebarNav = document.getElementById("nav-menu");
const closeSidebarBtn = document.getElementById("close");

// on clicking the hamburger icon, show the menu
hamburgerMenu.addEventListener("click", () => {
    sidebarNav.classList.remove("hidden"); // show sidebarNav
    closeSidebarBtn.classList.remove("hidden"); // btn to close sidebarNav
});

closeSidebarBtn.addEventListener("click", () => {
    sidebarNav.classList.add("hidden");
    closeSidebarBtn.classList.add("hidden");
    backdrop.classList.add("hidden");
});

// -------------------- Product Counter --------------------
const quantityCounter = document.getElementById("counter");
const incrementBtn = document.getElementById("icon-plus");
const decrementBtn = document.getElementById("icon-minus");

incrementBtn.addEventListener("click", () => {
    quantityCounter.textContent = Number(quantityCounter.textContent) + 1;
});

decrementBtn.addEventListener("click", () => {
    quantityCounter.textContent = Number(quantityCounter.textContent) - 1;
    if (quantityCounter.textContent < 0) {
        quantityCounter.textContent = 0;
    }
});

// -----------------Lightbox Toggle  --------------------
const lightboxBackdrop = document.getElementById("lightbox");
const closeLightboxButton = document.getElementById("close-lightbox");
const lightboxImages = document.querySelectorAll(".light-box-image");
const lightboxImage = document.getElementById("lightbox-image");
const mainProductImage = document.getElementById("main-img");

// show lightbox
mainProductImage.addEventListener("click", () => {
    lightboxBackdrop.classList.remove("hidden");
});

// close lightbox
closeLightboxButton.addEventListener("click", () => {
    lightboxBackdrop.classList.add("hidden");
});

// display lightbox if img is clicked in desktop mode
lightboxImages.forEach((image) => {
    image.addEventListener("click", () => {
        lightboxBackdrop.classList.remove("hidden");
        lightboxImage.src = image.src;
        mainProductImage.src = image.src;
    });
});

// -------------------- Thumbnail Slider --------------------
const thumbnailButtons = document.querySelectorAll(".thumbnails");
const cartProductImage = document.getElementById("cart-img");
const previousButtons = document.querySelectorAll(".previous");
const nextButtons = document.querySelectorAll(".next");
let productImages = [
    "images/product/image-product-1.jpg",
    "images/product/image-product-2.jpg",
    "images/product/image-product-3.jpg",
    "images/product/image-product-4.jpg",
];

let currentImageIndex = 0;

nextButtons.forEach((nextBtn) => {
    nextBtn.addEventListener("click", () => {
        console.log("clicked!");
        currentImageIndex += 1;
        if (currentImageIndex < productImages.length) {
            mainProductImage.src = productImages[currentImageIndex];
            cartProductImage.src = productImages[currentImageIndex];
            lightboxImage.src = productImages[currentImageIndex];
        } else {
            currentImageIndex = 0;

            mainProductImage.src = productImages[currentImageIndex];
            cartProductImage.src = productImages[currentImageIndex];
            lightboxImage.src = productImages[currentImageIndex];
        }

        thumbnailButtons.forEach((thumb) => {
            if (thumb.src === mainProductImage.src) {
                thumb.classList.add("active-thumbnail");
            } else {
                thumb.classList.remove("active-thumbnail");
            }
        });
    });
});

previousButtons.forEach((prevBtn) => {
    currentImageIndex = 4;
    prevBtn.addEventListener("click", () => {
        if (currentImageIndex <= 0) {
            currentImageIndex = 4;
            currentImageIndex -= 1;

            mainProductImage.src = productImages[currentImageIndex];
            cartProductImage.src = productImages[currentImageIndex];
            lightboxImage.src = productImages[currentImageIndex];
        } else {
            currentImageIndex -= 1;

            mainProductImage.src = productImages[currentImageIndex];
            cartProductImage.src = productImages[currentImageIndex];
            lightboxImage.src = productImages[currentImageIndex];
        }

        thumbnailButtons.forEach((thumb) => {
            if (thumb.src === mainProductImage.src) {
                thumb.classList.add("active-thumbnail");
            } else {
                thumb.classList.remove("active-thumbnail");
            }
        });
    });
});

thumbnailButtons.forEach((thumb) => {
    thumb.addEventListener("click", () => {
        thumbnailButtons.forEach((btn) =>
            btn.classList.remove("active-thumbnail")
        );
        thumb.classList.add("active-thumbnail");
        mainProductImage.src = thumb.src;
        cartProductImage.src = thumb.src;
        lightboxImage.src = thumb.src;
    });
});
