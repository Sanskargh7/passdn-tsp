import MobilityIcon from '../assets/Home/icons/Mobility.png'
import FintechIcon from '../../src/assets/Home/icons/Fintech.png';
import RetailIcon from '../../src/assets/Home/icons/retail.png';
import LogisticsIcon from '../../src/assets/Home/icons/logistics.png';
import HotelIcon from '../../src/assets/Home/icons/Hotel.png';
import AIIcon from '../../src/assets/Home/icons/ai.png';

import B1Icon from '../../src/assets/Home/icons/b1.png';
import B2Icon from '../../src/assets/Home/icons/b2.png';
import B3Icon from '../../src/assets/Home/icons/b3.png';
import B4Icon from '../../src/assets/Home/icons/b4.png';

//industry card data
const cardList = [
    {
        h: 'Mobility',
        sub: 'All Kind of ONDC Travel, Transportation & Mobility solutions.',
        img: MobilityIcon,
    },
    {
        h: 'Fintech',
        sub: 'Credit, investments, and insurance solutions for ONDC Financial Services.',
        img: FintechIcon,
    },
    {
        h: 'Retail',
        sub: 'Comprehensive Tech solutions for Retail category.',
        img: RetailIcon,
    },
    {
        h: 'Logistics',
        sub: 'ONDC enable tech that can make your operations simplify.',
        img: LogisticsIcon,
    },
    {
        h: 'Hotel',
        sub: 'New Age ONDC CRM + Seller app & Buyer app.',
        img: HotelIcon,
    },
    {
        h: 'GEN AI and ML',
        sub: 'Deep dive into Gen AI and ML use cases for your business',
        img: AIIcon,
    }
];
//benefit card data
const cardList2 = [
    {
        h: 'Expertise and Experience',
        sub: 'Passdn brings a wealth of experience and deep expertise in the industry, ensuring that you receive top-notch service and solutions tailored to your needs.',
        img: B1Icon,
    },
    {
        h: 'Comprehensive Solutions',
        sub: 'We offer a wide range of services and products, covering various industries such as Food & Beverage, Electronics, Financial Services, Logistics, Agriculture, and more.',
        img: B2Icon,
    },
    {
        h: 'Reliable Support',
        sub: 'We help you to find Gap and figuring out where you can stay with new age tech, no matter which business are you in, we are here to co-build innovative solutions only.',
        img: B3Icon,
    },
    {
        h: 'Customer-Centric Approach',
        sub: 'we are committed to placing our customers at the heart of everything we do. Your satisfaction is our top priority. We strive to provide seamless, reliable, and personalized tech Solutions.',
        img: B4Icon,
    },
];

//blog post card list 
const cardList3 = [
    {
        id: 1,
        img: '',
        sub: 'DPIs',
        h: 'What is Open Credit Enablement Network?',
        text: 'In this article, we will delve into the intricacies of OCEN, its impact on the financial sector',
        author: 'Keval Sondarva',
        date: '20 Jan 2024',
    },
    {
        id: 2,
        img: '',
        sub: 'New age Tech',
        h: 'India’s World-Class Digital Infrastructure.',
        text: "Indian Digital Infrastructure wasn't just a showcase of innovation, it was a game-changer  for India's digitally empowered future.",
        author: 'Umesh Vadhiya',
        date: '15 Feb 2023',
    },
    {
        id: 3,
        img: '',
        sub: 'ONDC',
        h: 'ONDC APIs Explained: How APIs Work',
        text: 'Ever wondered how ONDC seamlessly connects buyers with sellers, transforming digital commerce?',
        author: 'Umesh Vadhiya',
        date: '20 Jan 2022',
    }
];

export { cardList, cardList2, cardList3 };