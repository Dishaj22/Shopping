import { useRef, useEffect } from "react";

function AccessForm() {
    const inputRef = useRef(null);
    const topRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div style={{ height: "1300px" }}>
            <h1 ref={topRef}>Page Top</h1>

            <input
                type="text"
                ref={inputRef}
                placeholder="Enter something"
            />

            <div style={{ marginTop: "300px" }}>
                <button
                    onClick={() => {
                        topRef.current.scrollIntoView({
                            behavior: "smooth",
                        });
                    }}
                >
                    Scroll to Top
                </button>
            </div>
        </div>
    );
}

export default AccessForm;

