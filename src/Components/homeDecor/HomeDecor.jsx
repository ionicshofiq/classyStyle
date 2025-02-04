
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import slider1 from '../../assets/slider1.jpg'
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { TiArrowShuffle } from "react-icons/ti";
const HomeDecor = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <section className="lg:grid lg:grid-cols-12 justify-items-center gap-5 place-content-center pt-10 flex flex-col justify-center items-center  ">
             
             <div className="lg:hidden w-full ">

        
               <h1 className="text-3xl text-center font-bold text-[#f7941f] pb-5">
          Trending
        </h1>
        <p className="border"> </p>
        <hr
          className="bg-red-600 h-1 -mt-1  mx-auto
           w-64"
        />
        

        </div>
            <section className=" lg:w-64 w-72 mr-10 col-span-2 pt-20  lg:-mt-72 xl-mt-32  md:mx-0 mx-auto xl:mt-32">
         
    
                
            <Carousel
             autoPlay 
             infiniteLoop 
             showThumbs={false}
             showArrows={false}
             showStatus={false}
             showIndicators={false}
             className=""
             >
                <div>
                    <img className="h-[500px]  " src={slider1} />
                
                </div>
                <div>
                    <img className="h-[500px]" src={slider1}  />
               
                </div>
                <div>
                    <img className="h-[500px]" src={slider1}  />
                    
                </div>
            </Carousel>
            </section>



            {/* card part start */}




            <section className="col-span-10 ">
            <div className="mt-16">
      <div>
        <div className="hidden lg:block">
        <h1 className="text-3xl text-center font-bold text-[#f7941f]">
          Trending
        </h1>
        <p className="border mt-5"> </p>
        <hr
          className="bg-red-600 h-1 -mt-1 mx-auto
           w-64"
        />
        </div>

{/* tab area start */}

        <div>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList role="tablist" className="text-center md:block flex  justify-center tabs-bordered bg-transparent mt-10  ">
            
              <Tab
                
                role="tab"
                className="tab md:h-8 h-14  overflow-hidden text-left text-[10px] md:text-xl  md:w-auto  bg-transparent  ">
                New Product
              </Tab>
              <Tab
                
                role="tab"
                className="tab md:h-8 h-14  overflow-hidden text-left text-[10px] md:text-xl  md:w-auto  bg-transparent ">
                Top Rated Product
              </Tab>
          
          </TabList>

    <TabPanel>
    <section className="grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-10 md:grid-cols-2 mt-12 md:ml-5 lg:ml-20">
      
      <Link to="/product">
      <div className="relative  text-center group transform duration-500 cursor-pointer">
        <div className="absolute hidden  group-hover:block md:top-8 lg:left-48 md:left-64 left-[70px] rounded-md  bg-white ">
          <div className="flex flex-col items-center justify-center gap-4 ">
            <div data-tip="Compare" className="tooltip tooltip-left">
            <TiArrowShuffle className="text-2xl" />
           </div>
            <div data-tip="Search" className="tooltip tooltip-left">
            <IoSearch className="text-2xl" />
            </div>
            <div data-tip="Add to Wishlist" className="tooltip tooltip-left">
            <CiHeart className="text-2xl" />
            </div>
          </div>
        </div>
        <img
        className="rounded-md"
          src="https://i.postimg.cc/YCYzjf8L/1716107102-404977792-IMG20240515193224-800x800.jpg"
          alt=""
        />

        <h1 className="md:text-base text-sm my-5 font-semibold">
          All Over Multi Stone Work Gorgeous 4 Part Party
        </h1>
        <p>
          <span className="font-bold">SKU:</span> 173113-1
        </p>
        <h2 className="font-semibold ">
          {" "}
          <span className="text-2xl font-bold">&#2547;</span> 29.99
        </h2>
        <div className=" flex justify-center mt-2">
          <svg
            className="w-4 h-4 mx-px fill-current text-[#27aae1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
          <svg
            className="w-4 h-4 mx-px fill-current text-[#27aae1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
          <svg
            className="w-4 h-4 mx-px fill-current text-[#27aae1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
          <svg
            className="w-4 h-4 mx-px fill-current text-[#27aae1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
          <svg
            className="w-4 h-4 mx-px fill-current text-[#27aae1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
        </div>
        <div className="mt-8 flex md:flex-row flex-col gap-3 items-center justify-start">
          <div className="flex">
            <div className="text-2xl border px-2  pb-1 border-l-2 rounded-l-full font-bold">
              -
            </div>
            <input
              className="border w-8 text-center"
              type="text"
              defaultValue={1}
            />
            <div className="text-2xl border px-2 pb-1 border-l-2 rounded-r-full font-bold">
              +
            </div>
          </div>
          <div>

            <Link to='/cart'>
            <button className="px-3 py-2 bg-[#27aae1] transition ease-in duration-200 rounded-full text-xs  text-white border-2  focus:outline-none">
              Add to cart
            </button>
            </Link>
          </div>
        </div>
      </div>
      </Link>
      <Link to="/product">
      <div className="relative  text-center group transform duration-500 cursor-pointer">
        <div className="absolute hidden  group-hover:block md:top-8 lg:left-48 md:left-64 left-[70px] rounded-md  bg-white ">
          <div className="flex flex-col items-center justify-center gap-4 ">
            <div data-tip="Compare" className="tooltip tooltip-left">
            <TiArrowShuffle className="text-2xl" />
           </div>
            <div data-tip="Search" className="tooltip tooltip-left">
            <IoSearch className="text-2xl" />
            </div>
            <div data-tip="Add to Wishlist" className="tooltip tooltip-left">
            <CiHeart className="text-2xl" />
            </div>
          </div>
        </div>
        <img
        className="rounded-md"
          src="https://i.postimg.cc/YCYzjf8L/1716107102-404977792-IMG20240515193224-800x800.jpg"
          alt=""
        />

        <h1 className="md:text-base text-sm my-5 font-semibold">
          All Over Multi Stone Work Gorgeous 4 Part Party
        </h1>
        <p>
          <span className="font-bold">SKU:</span> 173113-1
        </p>
        <h2 className="font-semibold ">
          {" "}
          <span className="text-2xl font-bold">&#2547;</span> 29.99
        </h2>
        <div className=" flex justify-center mt-2">
          <svg
            className="w-4 h-4 mx-px fill-current text-[#27aae1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
          <svg
            className="w-4 h-4 mx-px fill-current text-[#27aae1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
          <svg
            className="w-4 h-4 mx-px fill-current text-[#27aae1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
          <svg
            className="w-4 h-4 mx-px fill-current text-[#27aae1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
          <svg
            className="w-4 h-4 mx-px fill-current text-[#27aae1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
        </div>
        <div className="mt-8 flex md:flex-row flex-col gap-3 items-center justify-start">
          <div className="flex">
            <div className="text-2xl border px-2  pb-1 border-l-2 rounded-l-full font-bold">
              -
            </div>
            <input
              className="border w-8 text-center"
              type="text"
              defaultValue={1}
            />
            <div className="text-2xl border px-2 pb-1 border-l-2 rounded-r-full font-bold">
              +
            </div>
          </div>
          <div>

            <Link to='/cart'>
            <button className="px-3 py-2 bg-[#27aae1] transition ease-in duration-200 rounded-full text-xs  text-white border-2  focus:outline-none">
              Add to cart
            </button>
            </Link>
          </div>
        </div>
      </div>
      </Link>
      <Link to="/product">
      <div className="relative  text-center group transform duration-500 cursor-pointer">
        <div className="absolute hidden  group-hover:block md:top-8 lg:left-48 md:left-64 left-[70px] rounded-md  bg-white ">
          <div className="flex flex-col items-center justify-center gap-4 ">
            <div data-tip="Compare" className="tooltip tooltip-left">
            <TiArrowShuffle className="text-2xl" />
           </div>
            <div data-tip="Search" className="tooltip tooltip-left">
            <IoSearch className="text-2xl" />
            </div>
            <div data-tip="Add to Wishlist" className="tooltip tooltip-left">
            <CiHeart className="text-2xl" />
            </div>
          </div>
        </div>
        <img
        className="rounded-md"
          src="https://i.postimg.cc/YCYzjf8L/1716107102-404977792-IMG20240515193224-800x800.jpg"
          alt=""
        />

        <h1 className="md:text-base text-sm my-5 font-semibold">
          All Over Multi Stone Work Gorgeous 4 Part Party
        </h1>
        <p>
          <span className="font-bold">SKU:</span> 173113-1
        </p>
        <h2 className="font-semibold ">
          {" "}
          <span className="text-2xl font-bold">&#2547;</span> 29.99
        </h2>
        <div className=" flex justify-center mt-2">
          <svg
            className="w-4 h-4 mx-px fill-current text-[#27aae1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
          <svg
            className="w-4 h-4 mx-px fill-current text-[#27aae1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
          <svg
            className="w-4 h-4 mx-px fill-current text-[#27aae1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
          <svg
            className="w-4 h-4 mx-px fill-current text-[#27aae1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
          <svg
            className="w-4 h-4 mx-px fill-current text-[#27aae1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
        </div>
        <div className="mt-8 flex md:flex-row flex-col gap-3 items-center justify-start">
          <div className="flex">
            <div className="text-2xl border px-2  pb-1 border-l-2 rounded-l-full font-bold">
              -
            </div>
            <input
              className="border w-8 text-center"
              type="text"
              defaultValue={1}
            />
            <div className="text-2xl border px-2 pb-1 border-l-2 rounded-r-full font-bold">
              +
            </div>
          </div>
          <div>

            <Link to='/cart'>
            <button className="px-3 py-2 bg-[#27aae1] transition ease-in duration-200 rounded-full text-xs  text-white border-2  focus:outline-none">
              Add to cart
            </button>
            </Link>
          </div>
        </div>
      </div>
      </Link>
      <Link to="/product">
      <div className="relative  text-center group transform duration-500 cursor-pointer">
        <div className="absolute hidden  group-hover:block md:top-8 lg:left-48 md:left-64 left-[70px] rounded-md  bg-white ">
          <div className="flex flex-col items-center justify-center gap-4 ">
            <div data-tip="Compare" className="tooltip tooltip-left">
            <TiArrowShuffle className="text-2xl" />
           </div>
            <div data-tip="Search" className="tooltip tooltip-left">
            <IoSearch className="text-2xl" />
            </div>
            <div data-tip="Add to Wishlist" className="tooltip tooltip-left">
            <CiHeart className="text-2xl" />
            </div>
          </div>
        </div>
        <img
        className="rounded-md"
          src="https://i.postimg.cc/YCYzjf8L/1716107102-404977792-IMG20240515193224-800x800.jpg"
          alt=""
        />

        <h1 className="md:text-base text-sm my-5 font-semibold">
          All Over Multi Stone Work Gorgeous 4 Part Party
        </h1>
        <p>
          <span className="font-bold">SKU:</span> 173113-1
        </p>
        <h2 className="font-semibold ">
          {" "}
          <span className="text-2xl font-bold">&#2547;</span> 29.99
        </h2>
        <div className=" flex justify-center mt-2">
          <svg
            className="w-4 h-4 mx-px fill-current text-[#27aae1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
          <svg
            className="w-4 h-4 mx-px fill-current text-[#27aae1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
          <svg
            className="w-4 h-4 mx-px fill-current text-[#27aae1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
          <svg
            className="w-4 h-4 mx-px fill-current text-[#27aae1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
          <svg
            className="w-4 h-4 mx-px fill-current text-[#27aae1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
        </div>
        <div className="mt-8 flex md:flex-row flex-col gap-3 items-center justify-start">
          <div className="flex">
            <div className="text-2xl border px-2  pb-1 border-l-2 rounded-l-full font-bold">
              -
            </div>
            <input
              className="border w-8 text-center"
              type="text"
              defaultValue={1}
            />
            <div className="text-2xl border px-2 pb-1 border-l-2 rounded-r-full font-bold">
              +
            </div>
          </div>
          <div>

            <Link to='/cart'>
            <button className="px-3 py-2 bg-[#27aae1] transition ease-in duration-200 rounded-full text-xs  text-white border-2  focus:outline-none">
              Add to cart
            </button>
            </Link>
          </div>
        </div>
      </div>
      </Link>
      
      
     
     
      </section>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>



          
        </div>





{/* tab area end */}



      </div>
    </div>
            </section>



            {/* card part end */}
        </section>
    );
};

export default HomeDecor;