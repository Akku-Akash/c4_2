import { Slider1images } from "./Slider1images";
import { useState } from "react";
import { IoArrowForwardCircleSharp, IoArrowBackCircleSharp } from "react-icons/io5";
// import "../App.css"

export const Slider1 = ({ slides }) => {
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
        <div className="ibox">
            <IoArrowBackCircleSharp className="left1" onClick={prevSlide} />
            <IoArrowForwardCircleSharp className="right1" onClick={nextSlide} />
            {
                Slider1images.map((slide, index) => {
                    return (
                        <div className={index === current ? "slide active" : "slide"} key={index}>
                            {
                                index === current && (<img src={slide.images} className="image" />)
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}