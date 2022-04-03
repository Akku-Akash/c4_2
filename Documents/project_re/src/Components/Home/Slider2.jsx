import { Slider2images } from "./Slider2images";
import { useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
// import "../App.css";

export const Slider2 = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    return (
        <div className="ibox1">
            <IoChevronBackOutline className="left1" onClick={prevSlide} />
            <IoChevronForwardOutline className="right1" onClick={nextSlide} />
            {
                Slider2images.map((slide, index) => {
                    return (
                        <div className={index === current ? "slide active" : "slide"} key={index}>
                            {
                                index === current && (<img src={slide.images} className="image1" />)
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}