import { useEffect, useRef, useState } from "react";
import image1 from "../assets/image.webp";
import Modal from "./Modal";


const Card = ({ image, title, type, link, date, handleToggleModal, isModalOpen }) => {
    const [isDropDownOpen, setIsdropDownOpen] = useState(false);
    const dropDownRef = useRef(null);

    const timeSince = (givenDate) => {
        const now = new Date();
        const pastDate = new Date(givenDate);
        const difference = now - pastDate; // Difference in milliseconds

        const seconds = Math.floor(difference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);
        const years = Math.floor(months / 12);

        if (years > 0) {
            return years === 1 ? '1 year ago' : `${years} years ago`;
        } else if (months > 0) {
            return months === 1 ? '1 month ago' : `${months} months ago`;
        } else if (days > 0) {
            return days === 1 ? '1 day ago' : `${days} days ago`;
        } else if (hours > 0) {
            return hours === 1 ? '1 hour ago' : `${hours} hours ago`;
        } else if (minutes > 0) {
            return minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`;
        } else {
            return seconds === 1 ? '1 second ago' : `${seconds} seconds ago`;
        }
    }

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
            <div className="w-[580px] h-[310px] overflow-hidden">
                <a href={link}>
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover rounded-2xl border-black border-2 border-b-4 border-r-4"
                    />
                </a>
            </div>
            <div className="absolute top-2 right-2 hidden group-hover:block">
                <button onClick={toggleDropDown}>
                    <div className="hover:opacity-70 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-10 h-10 text-gray-700">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8h.01M12 12h.01M12 16h.01" />
                        </svg>
                    </div>
                </button>
            </div>
            <div className="px-4 py-2">
                <p className="text-xl font-bold pb-">{title}</p>
                <p className="text-gray-700 font-bold">{type}</p>
                <p className="text-gray-700 font-bold">{timeSince(date)}</p>
            </div>
            {isDropDownOpen && (
                <div className="absolute top-12 right-2 bg-white shadow-lg rounded-lg">
                    <div ref={dropDownRef} className="p-2">
                        <p className="cursor-pointer hover:bg-gray-100 px-4 py-2 rounded-lg">Description</p>
                        <p className="cursor-pointer hover:bg-gray-100 px-4 py-2 rounded-lg"><button onClick={handleToggleModal}>Edit</button></p>
                    </div>
                </div>

            )}
            {/* {isModalOpen &&
                <Modal isModalOpen={isModalOpen} handleToggleModal={handleToggleModal} />
            } */}
        </div>

    );
};

export default Card;
