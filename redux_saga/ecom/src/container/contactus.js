import React from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import '../../src/container/contanct.css'
const Contact = () => {
    return (
        <>
            <section class=" ">
                <div class="container px-6 py-10 mx-auto">
                    <div class="lg:flex lg:items-center">
                        <div class="w-full space-y-12 lg:w-1/2 ">
                            <div>
                                <h1 class="text-3xl font-semibold text-black-800 capitalize lg:text-4xl ">explore our <br /> awesome Components</h1>

                                <div class="mt-2">
                                    <span class="inline-block w-40 h-1 rounded-full bg-green-500"></span>
                                    <span class="inline-block w-3 h-1 ml-1 rounded-full bg-green-500"></span>
                                    <span class="inline-block w-1 h-1 ml-1 rounded-full bg-green-500"></span>
                                </div>
                            </div>

                            <div class="md:flex md:items-start md:-mx-4">
                                <span class="inline-block p-2 text-black-800 bg-blue-100 rounded-xl md:mx-4 dark:bg-green-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                    </svg>
                                </span>

                                <div class="mt-4 md:mx-4 md:mt-0">
                                    <h1 class="text-2xl font-semibold text-black-800 capitalize ">Copy & paste components</h1>

                                    <p class="mt-3 text-black-800 ">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                                    </p>
                                </div>
                            </div>

                            <div class="md:flex md:items-start md:-mx-4">
                                <span class="inline-block p-2 text-black-500 bg-blue-100 rounded-xl md:mx-4 dark:text-black dark:bg-green-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                    </svg>
                                </span>

                                <div class="mt-4 md:mx-4 md:mt-0">
                                    <h1 class="text-2xl font-semibold  capitalize text-black-800">Zero Configrations</h1>

                                    <p class="mt-3 text-black-800 ">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                                    </p>
                                </div>
                            </div>

                            <div class="md:flex md:items-start md:-mx-4">
                                <span class="inline-block p-2 text-black-800   bg-blue-100 rounded-xl md:mx-4 dark:text-black dark:bg-green-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                    </svg>
                                </span>

                                <div class="mt-4 md:mx-4 md:mt-0">
                                    <h1 class="text-2xl font-semibold text-black-700 capitalize ">elegant Dark Mode</h1>

                                    <p class="mt-3 text-black-500 text-black-700">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                            <img class="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80" alt="" />
                        </div>
                    </div>

                    <hr class="border-gray-200 my-12 dark:border-gray-700" />

                    <div class="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">



                    </div>
                </div>
            </section>
            <div className="flex justify-center">
                <h1 className=" font-serif text-7xl underline to-green-300 ">
                    Get in Touch
                </h1></div>
            {/*  */}
            {/* <div class="flex justify-center items-center w-screen h-screen bg-gray-800"> */}
            <section class="w-full bg-green-400 p-10 mt-5">
                <div class="container px-4 mx-auto">
                    <div class="grid grid-cols-1 my-10 lg:grid-cols-2">
                        <div class="text-center text-white my-auto mx-4">
                            <h1 class="font-GT-Pressura-Regular font-bold text-3xl">WANT DISCOUNTS?</h1>
                            <h2 class="font-GT-Pressura-Regular text-xl">Join our mail list for news & coupons</h2>
                        </div>
                        <div class="py-2 mx-4 lg:py-10">
                            <div class="rounded-full bg-white shadow flex w-full">
                                <input
                                    type="text"
                                    placeholder="Enter your email to join our mailing list"
                                    class="w-full rounded-tl-full rounded-bl-full py-2 px-4" />
                                <button class="bg-yellow-400 rounded-tr-full rounded-br-full hover:bg-green-300 py-2 px-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* </div> */}

            <div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
                <div>
                    {/* <a title="Buy me a pizza" href="https://www.buymeacoffee.com/Dekartmc" target="_blank" class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
                        <img class="object-cover object-center w-full h-full rounded-full" src="https://img.icons8.com/emoji/48/000000/pizza-emoji.png" />
                    </a> */}
                </div>
            </div>
            {/*  */}
            <div class="pb-16">
                <dh-component>
                    <section class="max-w-8xl mx-auto container bg-white pt-16">
                        <div>
                            <div role="contentinfo" class="flex items-center flex-col px-4">
                                <p tabindex="0" class="focus:outline-none uppercase text-sm text-center text-gray-600 leading-4">in few easy steps</p>
                                <hh1 tabindex="0" class="focus:outline-none text-4xl lg:text-4xl font-extrabold text-center leading-10 text-gray-800 lg:w-5/12 md:w-9/12 pt-4">Create Beautiful Landing Pages & Web Apps in a Jiffy</hh1>
                            </div>
                            <div tabindex="0" aria-label="group of cards" class="focus:outline-none mt-20 flex flex-wrap justify-center gap-10 px-4">
                                <div tabindex="0" aria-label="card 1" class="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                                    <div class="w-20 h-20 relative mr-5">
                                        <div class="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1"></div>
                                        <div class="absolute text-white bottom-0 left-0 bg-green-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG1.svg" alt="drawer" />
                                        </div>
                                    </div>
                                    <div class="w-10/12">
                                        <h2 tabindex="0" class="focus:outline-none text-lg font-bold leading-tight text-gray-800">Ready to use components</h2>
                                        <p tabindex="0" class="focus:outline-none text-base text-gray-600 leading-normal pt-2">It provides a very simple start, no need to write a lot of code, you just import it and start the primitive components and create the ones you need.</p>
                                    </div>
                                </div>
                                <div tabindex="0" aria-label="card 2" class="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                                    <div class="w-20 h-20 relative mr-5">
                                        <div class="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1"></div>
                                        <div class="absolute text-white bottom-0 left-0 bg-green-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG2.svg" alt="check" />
                                        </div>
                                    </div>
                                    <div class="w-10/12">
                                        <h2 tabindex="0" class="focus:outline-none text-lg font-semibold leading-tight text-gray-800">Hight Quality UI you can reply on</h2>
                                        <p tabindex="0" class="focus:outline-none text-base text-gray-600 leading-normal pt-2">Modify the visual appearance of your site – including colors, fonts, margins and other style-related properties – with a sophisticated style.</p>
                                    </div>
                                </div>
                                <div tabindex="0" aria-label="card 3" class="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                                    <div class="w-20 h-20 relative mr-5">
                                        <div class="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1"></div>
                                        <div class="absolute text-white bottom-0 left-0 bg-green-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG3.svg" alt="html tag" />
                                        </div>
                                    </div>
                                    <div class="w-10/12">
                                        <h2 tabindex="0" class="focus:outline-none text-lg font-semibold leading-tight text-gray-800">Coded by Developers for Developers</h2>
                                        <p tabindex="0" class="focus:outline-none text-base text-gray-600 leading-normal pt-2">Instead of just giving you the tools to create your own site, they offer you a list of themes you can choose from. Thus a handy product.</p>
                                    </div>
                                </div>
                                <div tabindex="0" aria-label="card 4" class="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                                    <div class="w-20 h-20 relative mr-5">
                                        <div class="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1"></div>
                                        <div class="absolute text-white bottom-0 left-0 bg-green-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG4.svg" alt="monitor" />
                                        </div>
                                    </div>
                                    <div class="w-10/12">
                                        <h2 tabindex="0" class="focus:outline-none text-lg font-semibold leading-tight text-gray-800">The Last UI kit you’ll ever need</h2>
                                        <p tabindex="0" class="focus:outline-none text-base text-gray-600 leading-normal pt-2">We have chosen the bright color palettes that arouse the only positive emotions. The kit that simply assures to be loved by everyone.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </dh-component>

            </div>
            {/*  */}
            <section class="w-full bg-green-300 p-10 mb-16">
                <div class="container px-4 mx-auto">
                    <div class="grid grid-cols-1 my-10 lg:grid-cols-2">
                        <div class="text-center text-white my-auto mx-4">
                            <h1 class="font-GT-Pressura-Regular font-bold text-3xl">WANT DISCOUNTS?</h1>
                            <h2 class="font-GT-Pressura-Regular text-xl">Join our mail list for news & coupons</h2>
                        </div>
                        <div class="py-2 mx-4 lg:py-10">
                            <div class="rounded-full bg-white shadow flex w-full">
                                <input
                                    type="text"
                                    placeholder="Enter your email to join our mailing list"
                                    class="w-full rounded-tl-full rounded-bl-full py-2 px-4" />
                                <button class="bg-yellow-400 rounded-tr-full rounded-br-full hover:bg-green-300 py-2 px-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*  */}
            <section class="text-gray-600 body-font relative">
                <div class="absolute inset-0 ">
                    <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" ></iframe>
                </div>
                <div class="container px-5 py-24 mx-auto ">
                    <div class=" bg-slate-50  rounded-lg p-8 ml-96  w-7/12  relative z-10 shadow-md">
                        <h2 class="text-gray-900 text-2xl mb-1 font-medium title-font  m-15 ml-28">Feedback</h2>
                        <p class="leading-relaxed mb-5 text-gray-600 m-15 ml-28 ">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                        <div class="flex flex-wrap mt-10">
                            
                            <div class="col-md-5 col-lg-4 m-15 ml-28 px-tb">
                                <div class="contact-name">
                                    <h5>Mail</h5>
                                    <p>info@domainname.com</p>
                                </div>
                                <div class="contact-name">
                                    <h5>Visit My Studio</h5>
                                    <p>Warnwe Park Streetperrine, <br />FL 33157 New York City</p>
                                </div>
                                <div class="contact-name">
                                    <h5>Phone</h5>
                                    <p>+01 123 654 8096</p>
                                </div>

                            </div>
                            <div class=" flex ml-10 mt-15 px-tb">
                                <div class="contact-form">
                                    <form action="/" method="post" class="contactform contact_form" id="contact_form">
                                        <div class="returnmessage valid-feedback p-15 px-b" data-success="Your message has been received, We will contact you soon."></div>
                                        <div class="empty_notice invalid-feedback p-15px-b"><span>Please Fill Required Fields</span></div>
                                        <div class="row ">
                                            <div class=" mt-3    ">
                                                <div class="form-group">
                                                    <input id="name" type="text" placeholder="Full Name" class="form-control "style={{width:"400px"}} />
                                                </div>
                                            </div>
                                            <div class="col-md-6 mt-10">
                                                <div class="form-group">
                                                    <input id="email" type="text" placeholder="Email Address" class="form-control"style={{width:"400px"}} />
                                                </div>
                                            </div>
                                            <div class="col-12 mt-12">
                                                <div class="form-group">
                                                    <input id="subject" type="text" placeholder="Subject" class="form-control"style={{width:"400px"}} />
                                                </div>
                                            </div>
                                            <div class="col-md-12 mt-12">
                                                <div class="form-group">
                                                    <textarea id="message" placeholder="Message" class="form-control" style={{width:"400px"}}></textarea>
                                                </div>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-0">
                            <button class="bg-green-500 text-red-50  hover:bg-green-400 text-xl w-44 font-bold py-2 px-4 border-b-4 rounded">
                                SUBMIT
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/*  */}
            <footer class="text-gray-600 body-font bg-green-300 mt-16">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap md:text-left text-center order-first">
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">First Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">First Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">First Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
                            <div class=" flex ">
                                <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                                    <label for="footer-field" class="leading-7 text-sm text-gray-600">Placeholder</label>
                                    <input type="text" id="footer-field" name="footer-field" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-green-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <button class="bg-green-700 h-10 mt-7 text-red-50  hover:bg-green-600 text-xl w-44 font-bold border-b-4 rounded">
                                    SUBMIT
                                </button>
                            </div>
                            <p class="text-gray-500 text-sm mt-2 md:text-left text-center">Bitters chicharrones fanny pack
                                <br class="lg:block hidden" />waistcoat green juice
                            </p>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-100">
                    <div class="container px-5 pb-3 pt-2 mx-auto flex items-center sm:flex-row flex-col">
                        <a class=" flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <div fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24"><AddShoppingCartIcon /></div>
                            <span class="ml-3 text-xl">FASHION BOX
                            </span>
                        </a>
                        <p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2023 fashion box —
                            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@abhiii</a>
                        </p>
                        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                            <a class="text-gray-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a class="ml-3 text-gray-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a class="ml-3 text-gray-500">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a class="ml-3 text-gray-500">
                            </a>
                        </span>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Contact;


