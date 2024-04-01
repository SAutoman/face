import React, { useState } from "react";
import logo from "../../public/assets/img/footer.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBars, faLock, faRoadLock } from '@fortawesome/free-solid-svg-icons';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = ({ }) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
        // Add your sidebar toggle logic here
    };
    return (
        <div className="fixed w-screen top-0 left-0">
        <div className="w-screen  mx-auto header text-white bg-transparent flex items-end border-2"> 
            <div className="flex justify-start w-1/2 ">
                <button className="flex justify-center items-center transition ease-in-out duration-300 border-2 text-black w-[72px] h-[49px]  hover:bg-[#ffdd59] bg-transparent text-primary hover:text-black"><FontAwesomeIcon icon={faBars} /></button>
                <button className="flex justify-center items-center transition ease-in-out duration-300 border-2 text-black w-[48px] h-[49px]  hover:bg-[#ffdd59] bg-transparent text-primary hover:text-black">Q</button>

            </div>
            <div className="flex justify-end w-1/2 ">
                <a href="#" className="flex justify-center items-center transition ease-in-out duration-300 border-2 text-black w-[240px] h-[49px]  hover:bg-[#ffdd59] bg-transparent text-primary hover:text-black">
                    <div className=" text-lg mr-2">
                    Facial Assessment
                    </div>
                    <div className=" text-xs bg-sky-200">
                        FREE
                    </div>
                </a>
                <button className="flex justify-center items-center transition ease-in-out duration-300 border-2 text-black w-[90px] h-[49px]  hover:bg-[#ffdd59] bg-transparent text-primary hover:text-black">
                <FontAwesomeIcon icon={faLock}  className="mr-2 text-lg"/>
                <div>0</div>
                    
                </button>

            </div>




        </div>

        <div className="w-screen  mx-auto small-header text-white bg-transparent flex items-end border-2 flex-col"> 
            <div className="flex justify-start w-full ">

                <div className="flex w-1/2 justify-start items-center">
                <button className="flex justify-center items-center transition ease-in-out duration-300 border-2 text-black w-[48px] h-[49px]  hover:bg-[#ffdd59] bg-transparent text-primary hover:text-black">Q</button>
                </div>
                <div className="flex w-1/2 justify-end items-end">
                    <button className="flex justify-center items-center transition ease-in-out duration-300 border-2 text-black w-[90px] h-[49px]  hover:bg-[#ffdd59] bg-transparent text-primary hover:text-black">
                        <FontAwesomeIcon icon={faLock}  className="mr-2 text-lg"/>
                        <div>0</div>
                        
                    </button>
                    <button className="flex justify-center items-center transition ease-in-out duration-300 border-2 text-black w-[72px] h-[49px]  hover:bg-[#ffdd59] bg-transparent text-primary hover:text-black"><FontAwesomeIcon icon={faBars} /></button>

                </div>

                
               


            </div>
            <div className="flex  w-full justify-start">
                
                <div className="w-1/2 flex justify-start">
                    <a href="#" className="flex justify-center items-center transition ease-in-out duration-300 border-2 text-black w-full h-[49px]  hover:bg-[#ffdd59] bg-transparent text-primary hover:text-black">
                        <div className=" text-lg mr-2">
                        Facial Assessment
                        </div>
                        <div className=" text-xs bg-sky-200">
                            FREE
                        </div>
                    </a>
                </div>


                    <div className="w-1/2 first-text flex text-black items-center justify-end"><FontAwesomeIcon icon={faArrowRight}  className="mr-2 text-lg"/></div>




            </div>




        </div>

            <div  className="small-element ml-5 w-screen flex flex-col justify-center items-center text-center" >
              <h1 className="first-text">The most</h1>
              <h1 className="first-text">comprehensive </h1>
              <h1 className="special-text">analysis of your face</h1>
            </div>

        </div>
    );
}

export default Header;