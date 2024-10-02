# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
-   [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the site depending on their device's screen size
-   See hover states for all interactive elements on the page
-   Open a lightbox gallery by clicking on the large product image
-   Switch the large product image by clicking on the small thumbnail images
-   Add items to the cart
-   View the cart and remove items from it

### Screenshots

#### Desktop Mode

![desktop screenshot](images\screenshots\desktop.png)

#### LightBox

![lightbox screenshot](images\screenshots\lightbox.png)

#### Mobile Mode

![mobile screenshot](images\screenshots\mobile.jpeg)

### Links

-   Solution URL: [Add solution URL here](https://your-solution-url.com)
-   Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   CSS Grid
-   Tailwind

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

-   Learned how to create a notification component:

```html
<div
    id="notification"
    class="hidden fixed top-4 right-4 bg-red-500 text-white p-3 rounded-md"
>
    Please add more than one item.
</div>
```

-   SVG icons were used to for navigation buttons:

```html
<svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-8 w-8"
    viewBox="0 0 20 20"
    fill="currentColor"
>
    <path
        fill-rule="evenodd"
        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
        clip-rule="evenodd"
    />
</svg>
```

### Continued development

1. Efficient Cart Management: While the current cart functionality works, optimization is needed to handle more complex cases, such as multiple products, different item quantities, and calculating the total with varying product prices
2. Enhanced Lightbox Feature: The lightbox implementation can be improved by adding touch gestures for mobile devices, like swiping between images.
3. Dynamic Product Price Calculation: The cart currently calculates a static total amount based on a single product price. In the future, it could handle various product prices, and applying discounts or coupons.

## Author

-   GitHub - [@yeruvasaijahnavi](https://github.com/yeruvasaijahnavi)
-   LinkedIn - [@yeruvasaijahnavi](https://www.linkedin.com/in/yeruvasaijahnavi/)
-   Frontend Mentor - [@yeruvasaijahnavi](https://www.frontendmentor.io/profile/yeruvasaijahnavi)
