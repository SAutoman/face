import {
  Link,
  Events,
  animateScroll,
  Element,
  scrollSpy,
  scroller
} from "react-scroll";
import React, { useEffect } from "react";

import img1 from "../../public/assets/img/img1.png"
import img2 from "../../public/assets/img/img2.png"
import img3 from "../../public/assets/img/img3.png"
import img4 from "../../public/assets/img/img4.png"
import img5 from "../../public/assets/img/img5.png"
import img6 from "../../public/assets/img/img6.png"
import img7 from "../../public/assets/img/img7.png"
import img8 from "../../public/assets/img/img8.png"
import img9 from "../../public/assets/img/img9.png"
import img10 from "../../public/assets/img/img10.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBars, faLock, faRoadLock } from '@fortawesome/free-solid-svg-icons';


const durationFn = function (deltaTop) {
  return deltaTop;
};



const Contact = () => {

  useEffect(() => {
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const scrollTo = (offset) => {
    scroller.scrollTo("scroll-to-element", {
      horizontal: true,
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: offset
    });
  };

  const scrollToWithContainer = () => {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register("end", () => {
        resolve();
        Events.scrollEvent.remove("end");
      });

      scroller.scrollTo("scroll-container", {
        horizontal: true,
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart"
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo("scroll-container-second-element", {
        horizontal: true,
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "scroll-container",
        offset: 50
      })
    );
  };
    
      return (
        <div className="pageContainer">
          {/* <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li>
                    <Link
                      activeClass="active"
                      className="test1"
                      to="test1"
                      spy={true}
                      horizontal
                      smooth={true}
                      duration={500}
                      offset={50}
                    >
                      Test 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      className="test2"
                      to="test2"
                      spy={true}
                      horizontal
                      smooth={true}
                      duration={500}
                      offset={-55}
                    >
                      Test 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      className="test3"
                      to="test3"
                      spy={true}
                      horizontal
                      smooth={true}
                      duration={500}
                    >
                      Test 3
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      className="test4"
                      to="test4"
                      spy={true}
                      horizontal
                      smooth={true}
                      duration={500}
                    >
                      Test 4
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      className="test5"
                      to="test5"
                      spy={true}
                      horizontal
                      smooth={true}
                      duration={500}
                      delay={1000}
                    >
                      Test 5 ( delay )
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      className="test6"
                      to="anchor"
                      spy={true}
                      horizontal
                      smooth={true}
                      duration={500}
                    >
                      Test 6 (anchor)
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      className="test7"
                      to="test7"
                      spy={true}
                      horizontal
                      smooth={true}
                      duration={durationFn}
                    >
                      Test 7 (duration and container)
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <a onClick={() => animateScroll.scrollTo(100, { horizontal: true })}>
                      Scroll To 100!
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a onClick={() => animateScroll.scrollToBottom({ horizontal: true })}>
                      Scroll To Bottom
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a onClick={() => animateScroll.scrollMore(500, { horizontal: true })}>
                      Scroll 500 More!
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a
                      onClick={() =>
                        animateScroll.scrollMore(1000, { delay: 1500, horizontal: true })
                      }
                    >
                      Scroll 1000 More! ( delay ){" "}
                    </a>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      className="test8"
                      to="same"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Same target
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      className="test9"
                      to="same"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Same target
                    </Link>
                  </li>
                  <li>
                    <a
                      className="test1"
                      to="test1"
                      onClick={() => this.scrollTo()}
                    >
                      Scroll to element
                    </a>
                  </li>
                  <li>
                    <a
                      className="test1"
                      to="test1"
                      onClick={() => this.scrollTo(-50)}
                    >
                      Scroll to element (offset -50)
                    </a>
                  </li>
                  <li>
                    <a
                      className="test1"
                      to="test1"
                      onClick={() => this.scrollToWithContainer()}
                    >
                      Scroll to element within container
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav> */}
  
          <div>
            <Element name="test1" className="element-first ml-5">
              <h1 className="first-text">The most</h1>
              <h1 className="first-text">comprehensive </h1>
              <h1 className="special-text">analysis of your face</h1>
            </Element>
          </div>
  
          <div>
              <Element name="test2" className="element  flex items-center justify-center mr-11">
                        <img src={img1} className="w-full" />
              </Element>
          </div>

          <div>
              <Element name="test2" className="element  flex items-center justify-center mr-11">
                        <img src={img2} className="w-full" />

              </Element>
          </div>

          <div>
              <Element name="test3" className="element  flex items-center justify-center mr-11">
                        <img src={img3} className="w-full" />

              </Element>
          </div>

          <div>
              <Element name="test4" className="element  flex items-center justify-center mr-11">
                        <img src={img4} className="w-full" />

              </Element>
          </div>

          
          <div>
              <Element name="test5" className="element  flex items-center justify-center mr-11">
                        <img src={img5} className="w-full" />

              </Element>
          </div>

          
          <div>
              <Element name="test6" className="element  flex items-center justify-center mr-11">
                        <img src={img6} className="w-full" />

              </Element>
          </div>


          
          <div>
              <Element name="test7" className="element  flex items-center justify-center mr-11">
                        <img src={img7} className="w-full" />

              </Element>
          </div>

          <div>
              <Element name="test8" className="element  flex items-center justify-center mr-11">
                        <img src={img8} className="w-full" />

              </Element>
          </div>

          <div>
              <Element name="test9" className="element  flex items-center justify-center mr-11">
                        <img src={img9} className="w-full" />

              </Element>
          </div>

          <div className="w-1/2 flex justify-center items-center last-element1">
              <Element name="test11" className="w-[960px] h-full no-padding  mr-11 p-10">
                        {/* <img src={img4} className="w-full" /> */}
                        <h1 className="first-text gap-3 pb-4">Documented into</h1>
                        <h1 className="first-text gap-3 pb-8">200 pages<span className="special-text">report of you</span></h1>

                        <p className=" text-2xl gap-10 pb-8">Professional facial assessments and clear facial changes 
                        visualisation.</p>

                        <button className="flex justify-around items-center bg-slate-400 transition ease-in-out duration-300 border-2 border- text-white w-[312px] h-[60px]  hover:bg-[#ffdd59] bg-transparent text-primary hover:text-black">ALL REPORTS<FontAwesomeIcon icon={faArrowRight} /></button>

              </Element>
          </div>

          <div className="last-element2">
              <Element name="test10" className="w-[960px] no-padding flex items-start justify-center mr-11">
                        <img src={img10} className="w-1/2 h-[580px]" />

              </Element>
          </div>


          

  


  

        </div>
      );
}

export default Contact;