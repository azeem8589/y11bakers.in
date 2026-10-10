
/* ========= EDIT EVERYTHING HERE ========= */

const CONFIG = {
    contactName: "Yusuf Ansari",
    phone: "9974104542",
    waCountry: "91",

    instagram: "https://www.instagram.com/y11.bakers/",

    zomato: "https://www.zomato.com/ahmedabad/super-metro-bakery-secto-25-gandhinagar",
    swiggy: "https://www.swiggy.com/city/ahmedabad/super-metro-bakery-pethapur-gandhinagar-rest986315"
};


/* =========================================================
   PRODUCTS
========================================================= */

// type: "toast" | "khari"
// image: path or "" for placeholder

const PRODUCTS = [
    {
        name: "Jeera Toast",
        type: "toast",
        desc: "Crispy & crunchy, with a hint of jeera",
        image: "images/toast-red.webp - Edited.png"
    },

    {
        name: "Delux Toast",
        type: "toast",
        desc: "Rich, crispy & crunchy",
        image: "images/toast-blue.webp - Edited.png"
    },

    {
        name: "Classic Toast",
        type: "toast",
        desc: "Golden, crispy & crunchy",
        image: "images/toast-green.webp - Edited.png"
    },

    {
        name: "Kaju Toast",
        type: "toast",
        desc: "Crunchy toast with cashew",
        image: "images/toast-brown.webp - Edited.png"
    },

    {
        name: "Brown Toast",
        type: "toast",
        desc: "Wholesome brown toast",
        image: "images/toast-orange.webp - Edited.png"
    },

    {
        name: "Butter Khari",
        type: "khari",
        desc: "100% whole wheat, flaky & buttery",
        image: "images/khari-butter.webp - Edited.png"
    },

    {
        name: "Jeera Khari",
        type: "khari",
        desc: "100% whole wheat, flaky & spiced",
        image: "images/khari-jeera.webp - Edited.png"
    },

    {
        name: "Bulk Order",
        type: "khari",
        desc: "Contact for bulk orders",
        image: "images/bulk.png"
    }
];


/* =========================================================
   CAKES
========================================================= */

// Add "image":"images/cake1.webp" when you have photos

const CAKES = [
    { name: "Chocolate Truffle Cake", type: "Chocolate", desc: "Rich ganache, cherries & chocolate discs", image: "images/Cakes/chocolate truffle.jpeg" },
    { name: "Black Gold Truffle Cake", type: "Chocolate", desc: "Dark glaze with gold leaf & white chocolate", image: "images/Cakes/choco gold.jpeg" },
    { name: "Butterscotch Cake", type: "Classic", desc: "Creamy swirls with crunchy almond flakes", image: "images/Cakes/wc.jpeg" },
    { name: "Couple Cake", type: "Classic", desc: "A cake for couples", image: "images/Cakes/love.jpeg" },
    { name: "Royal Crown Cake", type: "Celebration", desc: "Two-tier elegance with a golden crown", image: "images/Cakes/crown.jpeg" },
    { name: "Mom Special Cake", type: "Celebration", desc: "Glossy white with chocolate details", image: "images/Cakes/mom.jpeg" },
    { name: "Wedding Cake", type: "Wedding", desc: "Red & white tiers with fresh roses", image: "images/Cakes/wedding.jpeg" },
    { name: "Baby Boss Theme Cake", type: "Kids Theme", desc: "Two-tier birthday design with fondant details", image: "images/Cakes/bossbaby.jpeg" },
    { name: "Superhero Theme Cake", type: "Kids Theme", desc: "Three tiers for little heroes", image: "images/Cakes/spiderman cake.jpeg" },
    { name: "Princess Theme Cake", type: "Kids Theme", desc: "Rosette cream cake with a fairytale topper", image: "images/Cakes/princess.jpeg" },
    { name: "Football Theme Cake", type: "Custom Design", desc: "For every football fan", image: "images/Cakes/football.jpeg" },
    { name: "Airplane Theme Cake", type: "Custom Design", desc: "Fondant plane flying through the clouds", image: "images/Cakes/airplane.jpeg" },
    { name: "Wizard Theme Cake", type: "Custom Design", desc: "Magical fondant details", image: "images/Cakes/yellow.jpeg" },
    { name: "Toolbox Cake", type: "Custom Design", desc: "A creative cake for dad", image: "images/Cakes/toolbox.jpeg" },
    { name: "Harry Potter Theme Cake", type: "Custom Design", desc: "Magical fondant details", image: "images/Cakes/hp.jpeg" },
    { name: "Money theme cake", type: "Custom Design", desc: "Dollarsa on cake", image: "images/Cakes/money.jpeg" }
];


/* =========================================================
   HELPERS
========================================================= */

const $ = s => document.querySelector(s);

const wa = t =>
    `https://wa.me/${CONFIG.waCountry}${CONFIG.phone}?text=${encodeURIComponent(t)}`;


/* =========================================================
   CAKE PLACEHOLDER ICON
========================================================= */

const CAKE_ICON = `
<svg
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    stroke-width="2.5"
    stroke-linecap="round"
>
    <path d="M10 34h44v20H10z"/>
    <path d="M10 44c6 5 10-4 14 0s10 5 14 0 10 4 16 0"/>
    <path d="M32 34V24"/>
    <path d="M32 16c-2 3-2 5 0 8 2-3 2-5 0-8"/>
</svg>
`;


/* =========================================================
   PRODUCT / CAKE CARD
========================================================= */

const card = (p, i, cake) => `
    <div
        class="card"
        data-t="${p.type || "cake"}"
        style="animation-delay:${i * 70}ms"
    >

        <div class="im" tabindex="0" role="button" aria-label="Hold to preview ${p.name}">
            ${
                p.image
                    ? `<img
                        loading="lazy"
                        src="${p.image}"
                        alt="${p.name}"
                    >`
                    : CAKE_ICON
            }
                </div>

        <div class="info">

            <span class="badge">
                ${p.type || "Cake"}
            </span>

            <h3>
                ${p.name}
            </h3>

            <p>
                ${p.desc}
            </p>

            <div class="order-links">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="${wa(
                        `Hi Y11 Bakers! I'd like to order ${cake ? "a " : ""}${p.name}.`
                    )}"
                >
                    Order on WhatsApp
                </a>
                <span class="order-sep">·</span>
                <a
                    class="market-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="${CONFIG.zomato || '#'}"
                    ${CONFIG.zomato ? '' : 'hidden'}
                >
                    Zomato
                </a>
                <span class="order-sep zomato-sep" ${CONFIG.zomato ? '' : 'hidden'}>·</span>
                <a
                    class="market-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="${CONFIG.swiggy || '#'}"
                    ${CONFIG.swiggy ? '' : 'hidden'}
                >
                    Swiggy
                </a>
            </div>

        </div>

    </div>
`;

/* =========================================================
   LOAD PRODUCTS
========================================================= */

$("#productGrid").innerHTML =
    PRODUCTS
        .map((p, i) => card(p, i))
        .join("");


/* =========================================================
   FEATURED PRODUCT CAROUSEL
========================================================= */

const productCarousel = $("#productCarousel");

const showcaseItems = [
    ...PRODUCTS,
    ...CAKES
];

const getShowcaseType = p => {
    if (p.type === "khari") return "Khari";
    if (p.type === "toast") return "Toast";
    return "Cake";
};

const showcaseMarkup = showcaseItems.map(p => `
    <article class="showcase-card">
        <div
            class="im showcase-image"
            tabindex="0"
            role="button"
            aria-label="Preview ${p.name}"
        >
            ${p.image ? `<img loading="lazy" src="${p.image}" alt="${p.name}">` : CAKE_ICON}
            <span class="showcase-shine"></span>
        </div>

        <div class="showcase-info">
            <span class="badge">${getShowcaseType(p)}</span>
            <h4>${p.name}</h4>
            <p>${p.desc}</p>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="${wa(`Hi Y11 Bakers! I'd like to order ${p.name}.`)}"
            >
                Order on WhatsApp <span>↗</span>
            </a>
        </div>
    </article>
`).join("");

/* Duplicate the complete range once so the carousel can loop seamlessly. */
productCarousel.innerHTML = showcaseMarkup + showcaseMarkup;

const prevProduct = $("#productPrev");
const nextProduct = $("#productNext");
const carouselDots = $("#productDots");

const getCarouselLoopWidth = () => productCarousel.scrollWidth / 2;

const getCarouselStep = () => {
    const item = productCarousel.querySelector(".showcase-card");
    if (!item) return 300;

    const styles = getComputedStyle(productCarousel);
    const gap = parseFloat(styles.columnGap || styles.gap || 0);

    return item.getBoundingClientRect().width + gap;
};

const normalizeCarousel = () => {
    const loopWidth = getCarouselLoopWidth();
    if (!loopWidth) return;

    if (productCarousel.scrollLeft >= loopWidth) {
        productCarousel.scrollLeft -= loopWidth;
    }
};

const moveCarousel = direction => {
    productCarousel.scrollBy({
        left: direction * getCarouselStep(),
        behavior: "smooth"
    });
};

prevProduct.addEventListener("click", () => moveCarousel(-1));
nextProduct.addEventListener("click", () => moveCarousel(1));

carouselDots.innerHTML = `
    <span class="on"></span>
    <span></span>
    <span></span>
`;

const updateCarouselDots = () => {
    const loopWidth = getCarouselLoopWidth();
    if (!loopWidth) return;

    const progress = (productCarousel.scrollLeft % loopWidth) / loopWidth;
    const active = Math.min(2, Math.floor(progress * 3));

    carouselDots.querySelectorAll("span").forEach((dot, i) => {
        dot.classList.toggle("on", i === active);
    });
};

productCarousel.addEventListener("scroll", updateCarouselDots, { passive: true });

let carouselLastTime = performance.now();
const carouselSpeed = 32;

const animateProductCarousel = now => {
    const delta = Math.min(40, now - carouselLastTime);
    carouselLastTime = now;

    productCarousel.scrollLeft += carouselSpeed * delta / 1000;
    normalizeCarousel();

    requestAnimationFrame(animateProductCarousel);
};

requestAnimationFrame(animateProductCarousel);


/* =========================================================
   LOAD CAKES
========================================================= */

$("#cakeGrid").innerHTML =
    CAKES
        .map((p, i) => card(p, i, 1))
        .join("");




const preview = document.createElement("div");
preview.className = "image-preview";
preview.setAttribute("aria-hidden", "true");
preview.innerHTML = `
    <div class="image-preview-backdrop"></div>
    <div class="image-preview-card">
        <button class="image-preview-close" type="button" aria-label="Close preview">×</button>
        <div class="image-preview-image-wrap">
            <img class="image-preview-image" alt="">
        </div>
        <div class="image-preview-name"></div>
    </div>
`;
document.body.appendChild(preview);

const previewImg = preview.querySelector(".image-preview-image");
const previewName = preview.querySelector(".image-preview-name");

const openPreview = area => {
    if (!area || preview.contains(area)) return;
    const img = area.querySelector("img");
    if (!img) return;
    previewImg.src = img.currentSrc || img.src;
    previewImg.alt = img.alt;
    previewName.textContent = img.alt;
    preview.classList.add("show");
    preview.setAttribute("aria-hidden", "false");
};

const closePreview = () => {
    preview.classList.remove("show");
    preview.setAttribute("aria-hidden", "true");
};

document.addEventListener("click", e => {
    const area = e.target.closest(".im");
    if (!area || preview.contains(e.target) || e.target.closest("a, button")) return;
    openPreview(area);
});

document.addEventListener("keydown", e => {
    if (e.key === "Escape" && preview.classList.contains("show")) {
        closePreview();
        return;
    }
    if (!["Enter", " "].includes(e.key)) return;
    const area = document.activeElement?.closest?.(".im");
    if (!area) return;
    e.preventDefault();
    openPreview(area);
});

preview.querySelector(".image-preview-close").addEventListener("click", closePreview);
preview.querySelector(".image-preview-backdrop").addEventListener("click", closePreview);

/* =========================================================
   PRODUCT FILTERS
========================================================= */

document
    .querySelectorAll(".tabs button")
    .forEach(b => {

        b.onclick = () => {

            document
                .querySelectorAll(".tabs button")
                .forEach(x => {

                    x.classList.toggle(
                        "on",
                        x == b
                    );

                });


            document
                .querySelectorAll("#productGrid .card")
                .forEach((c, i) => {

                    const show =
                        b.dataset.f == "all" ||
                        c.dataset.t == b.dataset.f;


                    c.style.display =
                        show ? "" : "none";


                    if (show) {

                        c.style.animation = "none";

                        c.offsetHeight;

                        c.style.animation =
                            `pop .5s ${i * 50}ms both`;

                    }

                });

        };

    });


/* =========================================================
   WHATSAPP
========================================================= */

const hi = wa(
    "Hi Y11 Bakers, I'd like to place an order."
);


[
    "#waHero",
    "#waBtn",
    "#waNav"
].forEach(s => {

    $(s).href = hi;

});


/* =========================================================
   CONTACT DETAILS
========================================================= */

$("#cName").textContent =
    CONFIG.contactName;

$("#cPhone").textContent =
    CONFIG.phone;

$("#cPhone").href =
    "tel:+" +
    CONFIG.waCountry +
    CONFIG.phone;

$("#callBtn").href =
    "tel:+" +
    CONFIG.waCountry +
    CONFIG.phone;


/* =========================================================
   INSTAGRAM
========================================================= */

$("#igBtn").href =
    CONFIG.instagram;


/* =========================================================
   ZOMATO / SWIGGY
========================================================= */

[
    ["zomato", "#zomBtn"],
    ["zomatoOrder", "#zomOrderBtn"],
    ["swiggy", "#swiBtn"]
].forEach(([k, s]) => {

    if (CONFIG[k]) {

        $(s).href = CONFIG[k];

        $(s).hidden = false;

    }

});


/* =========================================================
   FOOTER YEAR
========================================================= */

/* =========================================================
   NAVIGATION SCROLL EFFECT
========================================================= */

addEventListener(
    "scroll",
    () =>
        document
            .querySelector("#nav")
            .classList
            .toggle("s", scrollY > 30),
    {
        passive: true
    }
);


/* =========================================================
   SCROLL REVEAL
========================================================= */

const io =
    new IntersectionObserver(
        e =>
            e.forEach(x =>
                x.isIntersecting &&
                (
                    x.target.classList.add("in"),
                    io.unobserve(x.target)
                )
            ),
        {
            threshold: 0.15
        }
    );


document
    .querySelectorAll(".reveal")
    .forEach(el => io.observe(el));



/* =========================================================
   CUSTOMIZE CAKE FORM  (edit the option lists freely)
========================================================= */

const CAKE_OPTIONS = {
    occasion: ["Birthday", "Anniversary", "Wedding", "Baby Shower", "Engagement", "Other"],
    flavour:  ["Chocolate", "Chocolate Truffle", "Butterscotch", "Pineapple", "Vanilla", "Black Forest", "Red Velvet", "Rasmalai", "Other"],
    weight:   ["500 g", "1 kg", "1.5 kg", "2 kg", "3 kg", "4 kg +"]
};

const fill = (id, list) =>
    $(id).innerHTML =
        `<option value="" disabled selected>Select</option>` +
        list.map(o => `<option>${o}</option>`).join("");

fill("#cfOccasion", CAKE_OPTIONS.occasion);
fill("#cfFlavour",  CAKE_OPTIONS.flavour);
fill("#cfWeight",   CAKE_OPTIONS.weight);

$("#cfDate").min = new Date().toISOString().split("T")[0];

$("#cakeForm").addEventListener("submit", e => {

    e.preventDefault();

    const v = id => $(id).value.trim();

    const lines = [
        "Hi Y11 Bakers! I would like to order a custom cake.",
        "",
        `Name: ${v("#cfName")}`,
        `Occasion: ${v("#cfOccasion")}`,
        `Flavour: ${v("#cfFlavour")}`,
        `Weight: ${v("#cfWeight")}`,
        `Eggless: ${$("#cfEggless").checked ? "Yes" : "No"}`,
        `Delivery date: ${v("#cfDate")}`,
        v("#cfArea")  && `Delivery area: ${v("#cfArea")}`,
        v("#cfMsg")   && `Message on cake: ${v("#cfMsg")}`,
        v("#cfNotes") && `Design idea: ${v("#cfNotes")}`
    ].filter(x => x !== "" && x !== false && x !== undefined);

    window.open(wa(lines.join("\n")), "_blank", "noopener");
});