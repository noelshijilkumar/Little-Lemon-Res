import greekSaladImg from "../assets/greek-salad.jpg";
import bruchettaImg from "../assets/bruchetta.svg";
import lemonDessertImg from "../assets/lemon-dessert.jpg";

const menu = [
    {
        id: 5,
        rating: 5,
        image: greekSaladImg,
        title: 'Greek Salad',
        price: '12.99',
        details: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. '
    },
    {
        id: 6,
        rating: 5,
        image: bruchettaImg,
        title: 'Bruchetta',
        price: '5.99',
        details: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
    },
    {
        id: 7,
        rating: 4,
        image: lemonDessertImg,
        title: 'Lemon Pie',
        price: '7.00',
        details: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'
    }
];

export default menu;