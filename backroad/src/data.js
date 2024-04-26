import tour1 from'./images/tour1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';
import tour5 from './images/tour-5.jpeg';
import tour6 from './images/tour-6.jpeg';
import {  FaTwitter, FaSquarespace, FaFacebook, FaWallet, FaTree, FaSocks } from 'react-icons/fa';

export const navBar = [
    {
        id: 1,
        link: '#home',
        string: 'Home',
    },
    {
        id: 2,
        link: '#about',
        string: 'About',
    },
    {
        id: 3,
        link: '#services',
        string: 'Services',
    },
    {
        id: 4,
        link: '#tours',
        string: 'Tours',
    }
];

export const navIcons = [
    {
        id: 1,
        iconLink: 'https://www.facebook.com',
        iClass: <FaFacebook />,
        iconTarget: '_blank'
    },
    {
        id: 2,
        iconLink: 'https://www.twitter.com',
        iClass: <FaTwitter />,
        iconTarget: '_blank'
    },
    {
        id: 3,
        iconLink: 'https://www.squarespace.com',
        iClass: <FaSquarespace />,
        iconTarget: '_blank'
    }
];

export const servicesData = [
    {
        id: 1,
        serviceHeading: 'saving money',
        serviceText: 'Our tourist team always try to give their best services in an affordable price and discounts as well',
        icon: <FaWallet />
    },
    {
        id: 2,
        serviceHeading: 'endless hiking',
        serviceText: 'Our Roadmaps team provides tours for all famous places of an particular area',
        icon: <FaTree />
    },
    {
        id: 3,
        serviceHeading: 'amazing comfort',
        serviceText: 'Tourist comfort is our one of the important goal. As comfort you are, that happy and active we are.',
        icon: <FaSocks />
    }
];

export const tourData = [
    {
        id: 1,
        imageSource: tour1,
        date: 'augest 26th, 2020',
        tourHeading: 'Tibet Adventure',
        tourText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dicta ad maiores voluptatum consequatur,   perferendis omnis voluptatem porro modi itaque?',
        tourCountry: 'china',
        tourDays: '6 Days',
        tourPrice: 'from $2100'
    },
    {
        id: 2,
        imageSource: tour2,
        date: 'october 11th, 2020',
        tourHeading: 'best of java',
        tourText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, natus vero! Maiores soluta corrupti dolorem natus aliquid voluptates qui officiis eaque?',
        tourCountry: 'indonesia',
        tourDays: '11 Days',
        tourPrice: 'from $1400'
    },
    {
        id: 3,
        imageSource: tour3,
        date: 'september 15th, 2020',
        tourHeading: 'explore Hong Kong',
        tourText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sit earum amet, porro ab sunt repellat rerum iure? Sequi, maiores maxime. Corrupti, reprehenderit!',
        tourCountry: 'Hong Kong',
        tourDays: '8 Days',
        tourPrice: 'from $5000'
    },
    {
        id: 4,
        imageSource: tour4,
        date: 'december 5th, 2019',
        tourHeading: 'kenya Highlights',
        tourText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste sapiente, corrupti id ipsam nisi fuga repudiandae dignissimos laudantium maiores!',
        tourCountry: 'Kenya',   
        tourDays: '20 Days',
        tourPrice: 'from $3300'
    },
    {
        id: 5,
        imageSource: tour5,
        date: 'september 24th, 2021',
        tourHeading: 'Kazirange Nation Park',
        tourText: 'Kaziranga Nation Park is located in state Assam,India. It is one of the famous Nation Park of India',
        tourCountry: 'India',
        tourDays: '2 Days',
        tourPrice: 'from $500'
    },
    {
        id: 6,
        imageSource: tour6,
        date: 'auguest 10th, 2022',
        tourHeading: 'Taj Mahal',
        tourText: 'Taj Mahal is the 7th wonder of the world which is made by ShahJahan in the memory of his wife',
        tourCountry: 'India',
        tourDays: '3 Days',
        tourPrice: 'from $1000'
    }
];