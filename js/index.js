const siteContent = {
    nav: {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    cta: {
        h1: "DOM Is Awesome",
        button: "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content":
            "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content":
            "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content":
            "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content":
            "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content":
            "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
    },
    contact: {
        "contact-h4": "Contact",
        address: "123 Way 456 Street Somewhere, USA",
        phone: "1 (888) 888-8888",
        email: "sales@greatidea.io"
    },
    footer: {
        copyright: "Copyright Great Idea! 2018"
    }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const anchors = document.querySelectorAll("nav a");
anchors[0].textContent = siteContent.nav["nav-item-1"];
anchors[1].textContent = siteContent.nav["nav-item-2"];
anchors[2].textContent = siteContent.nav["nav-item-3"];
anchors[3].textContent = siteContent.nav["nav-item-4"];
anchors[4].textContent = siteContent.nav["nav-item-5"];
anchors[5].textContent = siteContent.nav["nav-item-6"];

const ctaH1 = document.querySelector(".cta-text h1");
ctaH1.textContent = siteContent.cta.h1;

const ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent.cta.button;

const ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent.cta["img-src"];

const topContent = document.querySelector(".top-content");
topContent.children[0].children[0].textContent =
    siteContent["main-content"]["features-h4"];
topContent.children[0].children[1].textContent =
    siteContent["main-content"]["features-content"];
topContent.children[1].children[0].textContent =
    siteContent["main-content"]["about-h4"];
topContent.children[1].children[1].textContent =
    siteContent["main-content"]["about-content"];

const middleImg = document.querySelector(".middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

const bottomContent = document.querySelector(".bottom-content");
bottomContent.children[0].children[0].textContent =
    siteContent["main-content"]["services-h4"];
bottomContent.children[0].children[1].textContent =
    siteContent["main-content"]["services-content"];
bottomContent.children[1].children[0].textContent =
    siteContent["main-content"]["product-h4"];
bottomContent.children[1].children[1].textContent =
    siteContent["main-content"]["product-content"];
bottomContent.children[2].children[0].textContent =
    siteContent["main-content"]["vision-h4"];
bottomContent.children[2].children[1].textContent =
    siteContent["main-content"]["vision-content"];

const contact = document.querySelector(".contact");
contact.children[0].textContent = siteContent["contact"]["contact-h4"];
contact.children[1].textContent = siteContent["contact"]["address"];
contact.children[2].textContent = siteContent["contact"]["phone"];
contact.children[3].textContent = siteContent["contact"]["email"];

const footerParagraph = document.querySelector("footer p");
footerParagraph.textContent = siteContent.footer.copyright;