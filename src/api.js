const CARDS = [
    {
        id: 0,
        text: "Explore the hidden waterfall deep inside the Amazon Jungle",
        label: "Adventure",
        img: "img/img-9.jpg",
        path: "/products",
    },
    {
        id: 1,
        text: "Travel through the Islands of Bali in a Private Cruise",
        label: "Luxury",
        img: "img/img-2.jpg",
        path: "/products",
    },
    {
        id: 2,
        text: "Set Sail in the Atlantic Ocean visiting Uncharted Waters",
        label: "Mystery",
        img: "img/img-3.jpg",
        path: "/products",
    },
    {
        id: 3,
        text: "Experience Football on Top of the Himilayan Mountains",
        label: "Adventure",
        img: "img/img-4.jpg",
        path: "/products",
    },
    {
        id: 4,
        text: "Ride through the Sahara Desert on a guided camel tour",
        label: "Adrenaline",
        img: "img/img-8.jpg",
        path: "/products",
    },
];

const PRODUCTS = [
    {
        id: 0,
        title: "Abu Dhabi",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quidem earum sed. Sint, magnam eligendi!",
        price: "650",
        img: "img/dubai.jpg",
        duration: "2 Days, 3 Nights",
    },
    {
        id: 1,
        title: "Thailand",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quidem earum sed. Sint, magnam eligendi!",
        price: "845",
        img: "img/thailand.jpg",
        duration: "2 Days, 3 Nights",
    },
    {
        id: 2,
        title: "France",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quidem earum sed. Sint, magnam eligendi!",
        price: "450",
        img: "img/france.jpg",
        duration: "2 Days, 3 Nights",
    },
    {
        id: 3,
        title: "Switzerland",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quidem earum sed. Sint, magnam eligendi!",
        price: "1030",
        img: "img/switzerland.jpg",
        duration: "2 Days, 3 Nights",
    },
    {
        id: 4,
        title: "Italy",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quidem earum sed. Sint, magnam eligendi!",
        price: "650",
        img: "img/italy.jpg",
        duration: "2 Days, 3 Nights",
    },
    {
        id: 5,
        title: "England",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quidem earum sed. Sint, magnam eligendi!",
        price: "950",
        img: "img/england.jpg",
        duration: "2 Days, 3 Nights",
    },
    
];

const TESTIMONIALS = [
    {
        id: 0,
        name: "Jhon Doe",
        location: "Pattaya, Thailand",
        text: "Curabitur posuere ullamcorper pulvinar. Donec dignissim bibendum leo, at faucibus enim aliquam eu. Nullam quis pulvinar diam, ac elementum urna. Integer id vehicula tortor, nec pulvinar libero. Ut elit elit, fringilla a nisi ut, dapibus eleifend quam.",
        img: "img/traveler-2.jpg",
    },
    {
        id: 1,
        name: "Jessica Doe",
        location: "Bali, Indonesia",
        text: "Curabitur posuere ullamcorper pulvinar. Donec dignissim bibendum leo, at faucibus enim aliquam eu. Nullam quis pulvinar diam, ac elementum urna. Integer id vehicula tortor, nec pulvinar libero. Ut elit elit, fringilla a nisi ut, dapibus eleifend quam.",
        img: "img/traveler-3.jpg",
    },
    {
        id: 2,
        name: "Slice Boga",
        location: "Zurich, Switzerland",
        text: "Curabitur posuere ullamcorper pulvinar. Donec dignissim bibendum leo, at faucibus enim aliquam eu. Nullam quis pulvinar diam, ac elementum urna. Integer id vehicula tortor, nec pulvinar libero. Ut elit elit, fringilla a nisi ut, dapibus eleifend quam.",
        img: "img/traveler-1.jpg",
    },
];

const api = {
    get:(category) => {
        let results = category === "cards" ? CARDS : category === "products" ? PRODUCTS : category === "testimonials" ? TESTIMONIALS : null;

        return new Promise((resolve) => resolve(results));
    },

};

export default api;