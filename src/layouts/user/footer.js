import React from "react";
import logo from "../../public/assets/img/footer.png"
import { FaTwitter, FaVideo, FaFacebook, FaInstagram } from 'react-icons/fa';


const Footer = ({ }) => {

    return (
        <footer className="xl:w-[1075px] lg:w-[992px] md:w-9/12 w-11/12 mx-auto text-[#ccced8]">
            <div className="grid grid-cols-12">
                <img src={logo} className="lg:col-span-2 col-span-12 w-[72px] mb-5" />
                <div className="lg:col-span-3 col-span-6">
                    <h1 className="text-2xl pb-5 mb-2">Learn More</h1>
                    <ul>
                        <li className="pb-2 mb-2"><a href="#">About Volls</a></li>
                        <li className="pb-2 mb-2"><a href="#">Policy</a></li>

                    </ul>
                </div>
                <div className="lg:col-span-2 col-span-6">
                    <h1 className="text-2xl pb-5 mb-2">Quick Links</h1>
                    <ul>
                        <li className="pb-2 mb-2"><a href="#">Services</a></li>
                        <li className="pb-2 mb-2"><a href="#">Products</a></li>
                        <li className="pb-2 mb-2"><a href="#">Cases</a></li>
                    </ul>
                </div>
                <div className="lg:hidden block col-span-12 my-8">
                    <div className="lg:mt-[90px] mt-[75px] border-b-1 border border-solid border-white border-1">
                        <div></div>
                    </div>
                </div>
                <div className="lg:col-span-3 col-span-6">
                    <h1 className="text-2xl pb-5 mb-2">Contact Us</h1>
                    <a className="pb-2 mb-2" href="#">infovolls.eu</a>
                </div>
                <div className="lg:col-span-2 col-span-12">
                    <h1 className="text-2xl pb-5 mb-2">Social</h1>
                    <div className="flex gap-3 ">
                        <FaFacebook size={20} className="text-white hover:text-[#ffdd59] mat-icon-no-color"/>
                        <FaVideo size={20} className="text-white hover:text-[#ffdd59] mat-icon-no-color"/>
                        <FaTwitter size={20} className="text-white hover:text-[#ffdd59] mat-icon-no-color"/>
                        <FaInstagram size={20} className="text-white hover:text-[#ffdd59] mat-icon-no-color" />
                    </div>
                </div>

            </div>
            <div className="lg:mt-[90px] mt-[75px] border-b-1 border border-solid border-white border-1">
                <div></div>
            </div>
            <div className="flex justify-center items-center my-7">
                <p className="text-lg">© 2022 — Voll's Tech</p>
            </div>
        </footer>
    );
}

export default Footer;