import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { isatech, bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Merchandise" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Codelympics 2024 Pin",
        price: "P35.00",
    },
    {
        imgURL: shoe5,
        name: "Codelympics 2024 Stickers",
        price: "15.00",
    },
    {
        imgURL: shoe6,
        name: "Codelympics 2024 Shirt",
        price: "P249.00",
    },
    {
        imgURL: shoe7,
        name: "Codelympics 2024 Tote Bag",
        price: "179.00",
    },
];

export const services = [
    {
        imgURL: isatech,
        label: "Hacker",
        subtext: "Innovative, Tech-savvy individual who thrives on developing innovative solutions and products. They possess coding and problem-solving skills that allow them to build intellectual properties and advance technology. "
    },
    {
        imgURL: isatech,
        label: "Hipster",
        subtext: "Artistic, Creative, and a Designer who comes up with unique and trendy designs that make products stand out. They ensure designs are visually appealing, authentic, and aligned with the brand, enhancing the overall customer experience. "
    },
    {
        imgURL: isatech,
        label: "Hustler",
        subtext: "Persuasive, Good Communicator, and Resourceful individual who's good at selling and making deals happen. They're the ones who can talk to people, make deals, and bring in business."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Nico G. Guarnes',
        rating: 4.5,
        feedback: "President"
    },
    {
        imgURL: customer2,
        customerName: 'Rayjand C. Gellamucho',
        rating: 4.5,
        feedback: "Adviser, Board of Advisers"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Codelympics 2024 Pin", link: "/" },
            { name: "Codelympics 2024 Sticker", link: "/" },
            { name: "Codelympics 2024 Totebag", link: "/" },
            { name: "Codelympics 2024 Shirt", link: "/" },
           
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "Mission", link: "/" },
            { name: "Vision", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "ISATech Society", link: "isatech.club" },
            { name: "+639163378099", link: "tel:(033) 330-4425)" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];