import React from 'react';
import Nav2 from '../Nav2.jsx'
import img from '../../assets/Home/Image.png'
import EraSection from '../EraSection';
import Footer from '../Footer';

import OurViewCard from './Home/OurViewCard.jsx';
import { cardList3 } from '../../Data/data.js';
const BlogCard = ({ id, bimg, sub, h, text, author, date }) => (

    <div className=" h-[580px] px-6 pt-6 pb-8 bg-white rounded shadow-md border border-gray-300 flex-col justify-evenly items-start gap-8 inline-flex">
        <img className="w-full h-60 relative" src={img} />
        <div className="self-stretch grow shrink basis-0 flex-col justify-between items-start flex">
            <div className="self-stretch flex-col justify-start items-start gap-3 flex">
                <div className="self-stretch text-violet-700 text-sm font-semibold leading-tight">{sub}</div>
                <div className="self-stretch flex-col justify-start items-start gap-3 ">
                    <div className="grow shrink basis-0 text-gray-900 text-2xl font-semibold ">{h}</div>
                    <div className="self-stretch text-gray-500 text-base font-normal leading-normal mt-4">{text}</div>
                </div>
            </div>
            <div className="justify-start items-center gap-3 inline-flex">
                <div className="flex-col justify-start items-start  flex-wrap">
                    <div className="text-gray-900 text-sm font-medium leading-tight mt-4">{author}</div>
                    <div className="text-gray-500 text-sm font-normal leading-tight">{date}</div>
                </div>
            </div>
        </div>
    </div>
);

const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            bimg: '',
            sub: 'DPIs',
            h: 'What is Open Credit Enablement Networ?',
            text: 'In this article, we will delve into the intricacies of OCEN, its impact on the financial sector',
            author: 'Keval Sondarva',
            date: '20 Jan 2024',
        },
        {
            id: 2,
            bimg: '',
            sub: 'New age Tech',
            h: 'India’s World-Class Digital Infrastructure.',
            text: "Indian Digital Infrastructure wasn't just a showcase of innovation, it was a game-changer  for India's digitally empowered future.",
            author: 'Umesh Vadhiya',
            date: '15 Feb 2023',
        },
        {
            id: 3,
            bimg: '',
            sub: 'ONDC',
            h: 'ONDC APIs Explained: How APIs Work',
            text: 'Ever wondered how ONDC seamlessly connects buyers with sellers, transforming digital commerce?',
            author: 'Umesh Vadhiya',
            date: '20 Jan 2022',
        }


    ];

    return (
        <>
            <Nav2 />
            <section className="container mx-auto px-4 py-12 pt-[120px]">
                <h2 className="text-center text-3xl font-bold text-gray-800 mb-2">Blogs</h2>
                <p className="text-center text-gray-600 mb-8">Click to Learn more About Recent Blogs and DPIs</p>
                <h1 className="text-center text-4xl font-bold text-gray-700 mb-12">
                    Learn More About ONDC and DPIss
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:px-24">
                    {blogPosts.map((post, index) => (
                        <BlogCard key={index} {...post} />
                    ))}
                </div>
                <div className="text-center mt-12">
                    <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition duration-300">
                        See More
                    </button>
                </div>
            </section>
            <EraSection />
            <Footer />
        </>
    );
};

export default Blog;