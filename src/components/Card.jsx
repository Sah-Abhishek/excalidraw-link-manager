import { useEffect, useRef, useState } from "react";
import image1 from "../assets/image.webp";

const Card = ({ image, title, type, link }) => {
    const [isDropDownOpen, setIsdropDownOpen] = useState(false);
    const dropDownRef = useRef(null);

    const toggleDropDown = () => {
        setIsdropDownOpen(prev => !prev)
    }

    const handleClickedOutside = () => {
        if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
            setIsdropDownOpen(false);
        }
    }

    useEffect(() => {
        // Add event listener for clicks outside the dropdown
        document.addEventListener("mousedown", handleClickedOutside);
        return () => {
            // Clean up the event listener
            document.removeEventListener("mousedown", handleClickedOutside);
        };
    }, []);




    return (
        <div className="flex flex-col m-4 relative group">
            <a href={link}>
                <img src={image} alt={title} className="w-full rounded-2xl border-black border-2 border-b-4 border-r-4" />
            </a>
            <div className="absolute top-2 right-2 hidden group-hover:block">
                <button onClick={toggleDropDown}>
                    <div className="hover:opacity-70 rounded-lg" >


                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-10 h-10 text-gray-700">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8h.01M12 12h.01M12 16h.01" />
                        </svg>
                    </div>
                </button>
            </div>
            <div className="px-4 py-2">
                <p className="text-xl font-bold">{title}</p>
                <p className="text-gray-700 font-bold">{type}</p>
            </div>
            {isDropDownOpen && (
                <div className="absolute top-12 right-2 bg-white shadow-lg rounded-lg ">
                    <div ref={dropDownRef} className="p-2">
                        <p className="cursor-pointer hover:bg-gray-100 px-4 py-2 rounded-lg">Description</p>
                        <p className="cursor-pointer hover:bg-gray-100 px-4 py-2 rounded-lg">Edit</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Card;
