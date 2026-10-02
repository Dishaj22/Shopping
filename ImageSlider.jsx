import { useState, useRef, useEffect } from "react";

function ImageSlider() {
    const images = [
        "https://picsum.photos/id/10/600/400",
        "https://picsum.photos/id/20/600/400",
        "https://picsum.photos/id/30/600/400"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderRef = useRef(null);

    function handleKeyDown(event) {
        if (event.key === "ArrowRight") {
            if (currentIndex === images.length - 1) {
                setCurrentIndex(0);
            } else {
                setCurrentIndex(currentIndex + 1);
            }
        }

        if (event.key === "ArrowLeft") {
            if (currentIndex === 0) {
                setCurrentIndex(images.length - 1);
            } else {
                setCurrentIndex(currentIndex - 1);
            }
        }
    }

    useEffect(() => {
        const slider = sliderRef.current;

        slider.addEventListener("keydown", handleKeyDown);

        return () => {
            slider.removeEventListener("keydown", handleKeyDown);
        };
    }, [currentIndex]);

    function handleNext() {
        if (currentIndex === images.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }

        sliderRef.current.focus();
    }

    function handlePrev() {
        if (currentIndex === 0) {
            setCurrentIndex(images.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }

        sliderRef.current.focus();
    }

    return (
        <div ref={sliderRef} tabIndex="0">
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
            />

            <button onClick={handlePrev}>
                Prev
            </button>

            <button onClick={handleNext}>
                Next
            </button>
        </div>
    );
}

export default ImageSlider;