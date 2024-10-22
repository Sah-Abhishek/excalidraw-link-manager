import { useRef, useState } from "react";

const Modal = ({ isModalOpen, handleToggleModal }) => {
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('session');
    const [link, setLink] = useState('');
    const [progress, setProgress] = useState('Not started');
    const [cardId, setCardId] = useState();

    const fileInputRef = useRef(null);

    const handleSubmit = () => {
         
        handleToggleModal();
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    

    const handleParentClick = () => {
        fileInputRef.current.click();
    }
    
    
    
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-xl pt-20 pr-20 pl-20 pb-10 relative">
                <button onClick={handleToggleModal} className="font-bold text-3xl hover:scale-125 hover:text-gray-700 transition border border-white absolute top-2 right-3  px-2 ">
                    &times;
                </button>
                <div className="bg-white h-52 w-72 hover:scale-105 transition border border-black mx-20 mt-5 mb-10 rounded-lg flex justify-center items-center border-r-4 border-b-4 hover:bg-gray-300" onClick={handleParentClick}>
                    <input type="file" accept="image/*"  className="hidden" id="imageUpload" ref={fileInputRef} onChange={handleImageChange}/>
                    <label htmlFor="imageUpload" className={`cursor-pointer font-bold hover:text-gray-600 ${image ? 'hidden' : ''}`}>+ Upload Thumbnail</label>
                    {image && <img src={image} alt="Preview" className=" relative rounded-lg" />}
                </div>

                <div className="flex flex-col space-y-4"> {/* Added space-y-4 for consistent vertical spacing */}
                    <div className="flex itens-center">
                        <label className="font-bold text-lg w-32">Name:</label> {/* Fixed width for alignment */}
                        <input type="text" className="border border-black rounded-md flex-1 p-2 border-r-4 border-b-4 hover:scale-105 transition duration-200" /> {/* Make input fill the space */}
                    </div>

                    <div className="flex items-center">
                        <label className="font-bold text-lg w-32">Link:</label>
                        <input type="text" className="border border-black rounded-md flex-1 p-2 border-r-4 border-b-4 hover:scale-105 transition duration-200" />
                    </div>

                    <div className="flex items-center">
                        <label className="font-bold text-lg w-32">Type:</label>
                        <select type="text" className="border border-black rounded-md flex-1 p-2 border-r-4 border-b-4 hover:scale-105 transition duration-200">
                        <option value="session">Session</option>
                        <option value="readonly">Readonly</option>
                        
                        </select>
                    </div>
                    <div className="flex items-center">
                        <label className="font-bold text-lg w-32">Progress:</label>
                        <select type="text" className="rounded-md flex-1 p-2 border-2 border-black  border-r-4 border-b-4 hover:scale-105 transition duration-200" >
                        <option value="Not Started">Not Started</option>
                        <option value="Hiatus">Hiatus</option>
                        <option value="Completed">Completed</option>
                        </select>

                    </div>
                    <div className="flex justify-center items-center">
                        <button onClick={handleSubmit} className="justify-center items-center px-6 py-2 border-2 border-black rounded-xl border-r-4 border-b-4 hover:bg-gray-400 hover:scale-110 hover:-translate-y-0 -translate-y-2 transition mt-10">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
