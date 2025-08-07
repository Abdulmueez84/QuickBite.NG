import { Search, ShoppingCart, Heart, ChevronDown, User, Instagram, XCircle, Factory, Youtube, Facebook, Twitter } from 'lucide-react'
import React from 'react'

import image_food1 from '../assets/Categories/Category-1.png'
import image_food2 from '../assets/Categories/Category-2.png'
import image_food3 from '../assets/Categories/Category-3.png'

//foods
import food_img1 from "../assets/Foods/shop1.png"
import food_img2 from "../assets/Foods/shop2.png"
import food_img3 from "../assets/Foods/shop3.png"
import food_img4 from "../assets/Foods/shop4.png"
import food_img5 from "../assets/Foods/shop5.png"
import food_img6 from "../assets/Foods/shop6.png"
import food_img7 from "../assets/Foods/shop7.png"
import food_img8 from "../assets/Foods/shop8.png"
import food_img9 from "../assets/Foods/shop9.png"
import food_img10 from "../assets/Foods/shop10.png"
import food_img11 from "../assets/Foods/shop11.png"
import food_img12 from "../assets/Foods/shop12.png"
import food_img13 from "../assets/Foods/shop13.png"
import food_img14 from "../assets/Foods/shop14.png"
import food_img15 from "../assets/Foods/shop15.png"
import food_img16 from "../assets/Foods/shop16.png"
import food_img17 from "../assets/Foods/shop17.png"
import food_img18 from "../assets/Foods/shop18.png"
import food_img19 from "../assets/Foods/shop19.png"
import food_img20 from "../assets/Foods/shop20.png"

import product_img11 from "../assets/NG_FOODS/Puff_puff.jpg"
import product_img2 from "../assets/Foods/shop2.png"
import product_img4 from "../assets/Foods/shop4.png"
import product_img5 from "../assets/Foods/shop5.png"
import product_img6 from "../assets/Foods/shop6.png"
import product_img7 from "../assets/Foods/shop7.png"
import product_img8 from "../assets/Foods/shop8.png"
import product_img9 from "../assets/Foods/shop9.png"
import product_img15 from "../assets/Foods/shop15.png"
import product_img10 from "../assets/NG_FOODS/Suya.jpeg"
import product_img1 from "../assets/NG_FOODS/ChinChin.jpg"
import product_img12 from "../assets/NG_FOODS/Eba.jpeg"
import product_img13 from "../assets/NG_FOODS/Fried-plantains.jpeg"
import product_img14 from "../assets/NG_FOODS/Fufu.jpeg"
import product_img16 from "../assets/NG_FOODS/Jollof-rice.jpeg"
import product_img17 from "../assets/NG_FOODS/Nkwobi.jpeg"
import product_img18 from "../assets/NG_FOODS/okra_soup.jpg"
import product_img19 from "../assets/NG_FOODS/Pepper_soup.jpg"

import menu1 from '../assets/Other_logo/Menu_1.png'
import menu2 from '../assets/Other_logo/menu_2.webp'
import menu3 from '../assets/Other_logo/menu_3.webp'
import menu4 from '../assets/Other_logo/menu_4.webp'

import testimonial1 from '../assets/testimonials/testimonia_1.png'
import testimonial2 from '../assets/testimonials/testimonia_2.png'
import testimonial3 from '../assets/testimonials/testimonia_3.png'
import testimonial4 from '../assets/testimonials/testimonia_4.png'

import gal1 from '../assets/Gallary/img_1.png'
import gal2 from '../assets/Gallary/img_2.png'
import gal3 from '../assets/Gallary/img_3.png'
import gal4 from '../assets/Gallary/img_4.png'
import gal5 from '../assets/Gallary/img_5.png'
import { Link } from 'react-router-dom'

import iconImg1 from '../assets/New folder/abt_icon1.webp'
import iconImg2 from '../assets/New folder/abt_icon2.webp'
import iconImg3 from '../assets/New folder/abt_icon3.webp'
import iconImg4 from '../assets/New folder/abt_icon4.webp'



export const navItems = [
    { label: <Link to='/'>Home</Link> },
    { label: <Link to='/Shop.jsx'>Shop</Link> },
    { label: <Link to='/About.jsx'>About</Link> },
    { label: <Link to='/Blog.jsx'>Blog</Link> },
]

export const icons = [
    { icon: <Search size={20} strokeWidth={2.5} />, href: "#" },
    { icon: <Heart size={20} strokeWidth={2.5} />, href: "#" },
    { icon: <ShoppingCart size={20} strokeWidth={2.5} />, href: "#" },
    { icon: <User size={20} strokeWidth={2.5} />, href: "#" },
]


export const category = [
    {
        image: image_food1,
        heading: "Burger",
        price: 'Starting at N1,200',
    },


    {
        image: image_food2,
        heading: "Spaghetti",
        price: 'Starting at N2,600',
    },

    {
        image: image_food3,
        heading: "Pizza",
        price: 'Starting at N4,200',
    },
]

export const foods = [
    {
        image: food_img1,
        href: '#',
        label: "Chicken Biryani",
        price: 2900,
    },
    {
        image: food_img2,
        href: '#',
        label: "Paneer Korma",
        price: 2500,

    },
    {
        image: food_img15,
        href: '#',
        label: "Homemade Pizza",
        price: 2300,
    },
    {
        image: food_img4,
        href: '#',
        label: "Garlic Chicken Cheese",
        price: 2500
    },
    {
        image: food_img5,
        href: '#',
        label: "Chana Masala",
        price: 2900,
    },
    {
        image: food_img6,
        href: '#',
        label: "Gobi Manchurian",
        price: 2100,
    },
    {
        image: food_img7,
        href: '#',
        label: "Spicy Butter Chicken",
        price: 3000
    },
    {
        image: food_img8,
        href: '#',
        label: "Spicy Pepper Chicken",
        price: 1800
    },
    {
        image: food_img9,
        href: '#',
        label: "Chana",
        price: 2900
    }


]

export const FFoods = [
    { food: menu1 },
    { food: menu2 },
    { food: menu3 },
    { food: menu4 },
]


export const testimonial = [
    {
        image: testimonial1,
        name: 'Bay',
        duty: 'Fry Chef',
    },


    {
        image: testimonial2,
        name: 'Lara',
        duty: 'Pantry chef',
    },

    {
        image: testimonial3,
        name: 'Elena',
        duty: 'Sauce Chef ',
    },
    {
        image: testimonial4,

        name: 'James',
        duty: 'pastry  chef',
    },
]


export const gallery = [
    { gal: gal1 },
    { gal: gal2 },
    { gal: gal3 },
    { gal: gal4 },
    { gal: gal5 },
]


// ///////////////////// SHOPS CATEGORIES

export const productCartegories = [
   
    {
        id: 1,
        image: product_img11,
        label: "Puff Puff",
        count: 1,
        price: 2900,
        description: ' Puff puff is a popular snack in Nigeria, often sold by street vendors. It’s made from a simple batter of flour, sugar, yeast, and water, then deep-fried until golden brown. These sweet, doughy balls are a staple at parties, celebrations, and street markets, making them a beloved snack for Nigerians of all ages.',
    },
    {
        id: 2,
        image: product_img2,
        label: "Paneer Korma",
        count: 1,
        price: 2500,
        description: ' Pellentesque id nibh tortor id aliquet magna sit amet Arcu dictum varius duis at consectetur lorem. Lobortis scelerisque fermentum dui faucibus in. Nam aliquam sem et tortor consequat',

    },
    {
        id: 3,
        image: product_img15,
        label: "Homemade Pizza",
        count: 1,
        price: 2300,
        description: ' Pellentesque id nibh tortor id aliquet magna sit amet Arcu dictum varius duis at consectetur lorem. Lobortis scelerisque fermentum dui faucibus in. Nam aliquam sem et tortor consequat',
    },
    {
        id: 4,
        image: product_img4,
        label: "Garlic Chicken Cheese",
        count: 1,
        price: 2500,
        description: ' Pellentesque id nibh tortor id aliquet magna sit amet Arcu dictum varius duis at consectetur lorem. Lobortis scelerisque fermentum dui faucibus in. Nam aliquam sem et tortor consequat',
    },
    {
        id: 5,
        image: product_img5,
        label: "Chana Masala",
        count: 1,
        price: 2900,
        description: ' Pellentesque id nibh tortor id aliquet magna sit amet Arcu dictum varius duis at consectetur lorem. Lobortis scelerisque fermentum dui faucibus in. Nam aliquam sem et tortor consequat',
    },
    {
        id: 6,
        image: product_img6,
        label: "Gobi Manchurian",
        count: 1,
        price: 2100,
        description: ' Pellentesque id nibh tortor id aliquet magna sit amet Arcu dictum varius duis at consectetur lorem. Lobortis scelerisque fermentum dui faucibus in. Nam aliquam sem et tortor consequat',
    },
    {
        id: 7,
        image: product_img7,
        label: "Spicy Butter Chicken",
        count: 1,
        price: 3000,
        description: ' Pellentesque id nibh tortor id aliquet magna sit amet Arcu dictum varius duis at consectetur lorem. Lobortis scelerisque fermentum dui faucibus in. Nam aliquam sem et tortor consequat',
    },
    {
        id: 8,
        image: product_img8,
        label: "Spicy Pepper Chicken",
        count: 1,
        price: 1800,
        description: ' Pellentesque id nibh tortor id aliquet magna sit amet Arcu dictum varius duis at consectetur lorem. Lobortis scelerisque fermentum dui faucibus in. Nam aliquam sem et tortor consequat',
    },
    {
        id: 9,
        image: product_img9,
        label: "Chana Spice",
        count: 1,
        price: 2900,
        description: ' Pellentesque id nibh tortor id aliquet magna sit amet Arcu dictum varius duis at consectetur lorem. Lobortis scelerisque fermentum dui faucibus in. Nam aliquam sem et tortor consequat',
    },
    {
        id: 10,
        image: product_img10,
        label: "Suya",
        count: 1,
        price: 2000,
        description: ' A recipe from the Hausa people, suya is a savory protein dish. It’s typically made with seasoned beef or chicken that’s grilled on a skewer. “Suya” is the name of the seasoning mix used to coat the meat.',
    },
    {
        id: 11,
        image: product_img12,
        label: "Eba",
        count: 1,
        price: 1700,
        description: ' Similar to fufu, eba is a starch ball that’s often served as a side dish for soup. Also called garri, eba is made from refined cassava flour and water.',
    },
    {
        id: 12,
        image: product_img13,
        label: "Fried Plantains",
        count: 1,
        price: 2500,
        description: 'Also called dodo, sweet fried plantains are a popular side dish and appetizer in Nigerian cuisine. All you need are plantains, frying oil, and salt for seasoning.',
    },
    {
        id: 13,
        image: product_img14,
        label: "Fufu",
        count: 1,
        price: 1200,
        description: ' Fufu  is a starch ball that you make by boiling plants like rice, cassava, or plantains. You grind the starches into a paste, form them, and then boil them to make fufu. For those who aren’t familiar, the texture is somewhere between bread dough and mashed potatoes.',
    },
  
    {
        id: 14,
        image: product_img16,
        label: "Jollof Rice",
        count: 1,
        price: 3000,
        description: ' Jollof rice is made from a base of rice, tomato, and broth that’s cooked down with bell peppers, habaneros (also called scotch bonnet peppers), curry, thyme, and bay leaves.',
    },
    {
        id: 15,
        image: product_img18,
        label: "Okra Soup",
        count: 1,
        price: 1500,
        description: 'Okro soup is a versatile dish that varies in preparation across different regions of Nigeria. It is often served with fufu or eba, making it a hearty and filling meal. Here’s a traditional Okro soup recipe to try at home.',
    },
    {
        id: 16,
        image: product_img17,
        label: "Nkwobi",
        count: 1,
        price: 1500,
        description: ' his hearty meat stew makes for delicious street food; it’s not unusual to see Nigerians eating nkwobi over a beer at the bar.',
    },
    {
        id: 17,
        image: product_img19,
        label: "Pepper Soup",
        count: 1,
        price: 2500,
        description: 'Pepper Soup is prepared with meats like goat, chicken, or fish, and the soup is served piping hot, often as a remedy for colds or simply as comfort food.',
    },
    {
        id: 18,
        image: product_img1,
        label: "ChinChin",
        count: 1,
        price: 1400,
        description: ' Chin chin is a crunchy, deep-fried snack made from dough flavored with sugar, nutmeg, and occasionally milk. It’s a common sight at Nigerian celebrations, from weddings to birthdays, where it’s served alongside other snacks. Chin chin’s crispy texture and sweet flavor make it a favorite treat for both adults and children.',
    },

]



// //////////////ABOUT  SECTIONS 

export const services = [
    {
        iconImg: iconImg1,
        heading: 'Natural Ingredients',
        text: 'Pellentesque id nibh tortor id aliquet magna sit amet',
    },
    {
        iconImg: iconImg2,
        heading: 'Safe Preparation',
        text: 'Pellentesque id nibh tortor id aliquet magna sit amet',
    },
    {
        iconImg: iconImg3,
        heading: 'Deliciously Cooked',
        text: 'Pellentesque id nibh tortor id aliquet magna sit amet',
    },
    {
        iconImg: iconImg4,
        heading: 'Well Garnished',
        text: 'Pellentesque id nibh tortor id aliquet magna sit amet',
    },
]
