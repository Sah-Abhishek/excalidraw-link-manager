import { useRef, useState } from "react";

import useCardStore from "../store/cardStore.js";

const Modal = ({ isModalOpen, handleToggleModal }) => {
    const [formData, setFormData] = useState({
        image: '',
        name: '',
        link: '',
        type: 'session',
        progress: 'Not started',
        date: new Date().toISOString().split('T')[0],
        cardId: '',
    });
    const addCard = useCardStore((state) => state.addCard);

    const fileInputRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault(); // Added parentheses here

        // Add random cardId
        const cardId = Math.floor(Math.random()*1000000);
        const newCardData = {...formData, cardId}
        
        
        addCard(newCardData);
        console.log(newCardData);
        setFormData({
            image: '',
            cardId: '',
            name: '',
            link: '',
            type: 'session',
            progress: 'Not started',
            date: new Date().toISOString().split('T')[0]
        });
        // console.log(formData);

        handleToggleModal(); // Close the modal after submission
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setFormData((prev) => ({ ...prev, image: reader.result })); // Fixed this line
            };
            reader.readAsDataURL(file);
        }
    };

    const handleParentClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-xl pt-20 pr-20 pl-20 pb-10 relative">
                <button onClick={handleToggleModal} className="font-bold text-3xl hover:scale-125 hover:text-gray-700 transition border border-white absolute top-2 right-3 px-2">
                    &times;
                </button>
                <div className="bg-white h-52 w-72 hover:scale-105 transition border border-black mx-20 mt-5 mb-10 rounded-lg flex justify-center items-center border-r-4 border-b-4 hover:bg-gray-300 relative">
                    <input type="file" accept="image/*" className="hidden" id="imageUpload" ref={fileInputRef} onChange={handleImageChange} />
                    <label htmlFor="imageUpload" className={`cursor-pointer font-bold hover:text-gray-600 ${formData.image ? 'hidden' : ''}`}>+ Upload Thumbnail</label>
                    {formData.image && (
                        <img
                            src={formData.image}
                            alt="Preview"
                            className="absolute inset-0 w-full h-full object-cover rounded-lg" // Use object-cover to maintain aspect ratio
                        />
                    )}
                </div>


                <div className="flex flex-col space-y-4">
                    <div className="flex items-center">
                        <label className="font-bold text-lg w-32">Name:</label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="border border-black rounded-md flex-1 p-2 border-r-4 border-b-4 hover:scale-105 transition duration-200"
                        />
                    </div>

                    <div className="flex items-center">
                        <label className="font-bold text-lg w-32">Link:</label>
                        <input
                            type="text"
                            value={formData.link}
                            onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                            className="border border-black rounded-md flex-1 p-2 border-r-4 border-b-4 hover:scale-105 transition duration-200"
                        />
                    </div>

                    <div className="flex items-center">
                        <label className="font-bold text-lg w-32">Type:</label>
                        <select
                            value={formData.type}
                            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                            className="border border-black rounded-md flex-1 p-2 border-r-4 border-b-4 hover:scale-105 transition duration-200"
                        >
                            <option value="session">Session</option>
                            <option value="readonly">Readonly</option>
                        </select>
                    </div>

                    <div className="flex items-center">
                        <label className="font-bold text-lg w-32">Progress:</label>
                        <select
                            value={formData.progress}
                            onChange={(e) => setFormData({ ...formData, progress: e.target.value })}
                            className="rounded-md flex-1 p-2 border-2 border-black border-r-4 border-b-4 hover:scale-105 transition duration-200"
                        >
                            <option value="Not Started">Not Started</option>
                            <option value="Hiatus">Hiatus</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>

                    <div className="flex justify-center items-center">
                        <button onClick={handleSubmit} className="justify-center font-bold hover:font-extrabold items-center px-6 py-2 border-2 border-black rounded-xl border-r-4 border-b-4 hover:bg-gray-400 hover:scale-110 hover:-translate-y-0 -translate-y-2 transition mt-10">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
