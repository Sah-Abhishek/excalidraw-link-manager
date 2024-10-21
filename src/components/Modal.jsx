import { useState } from "react";

const Modal = ({ isModalOpen, handleToggleModal }) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('session');

    const handleSubmit = () => {
         
        handleToggleModal();
    }

    
    
    
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-xl p-20 relative">
                <button onClick={handleToggleModal} className="font-bold text-3xl border border-white absolute top-2 right-3 hover:border hover:border-black px-2  rounded-lg transition">
                    &times;
                </button>
                <div className="bg-white h-52 w-72 border border-black mx-20 mt-5 mb-10 rounded-lg flex justify-center items-center border-r-4 border-b-4">
                    <p className="font-bold">+ Upload Thumbnail</p>
                </div>

                <div className="flex flex-col space-y-4"> {/* Added space-y-4 for consistent vertical spacing */}
                    <div className="flex itens-center">
                        <label className="font-bold text-lg w-32">Name:</label> {/* Fixed width for alignment */}
                        <input type="text" className="border border-black rounded-md flex-1 p-2 border-r-4 border-b-4" /> {/* Make input fill the space */}
                    </div>

                    <div className="flex items-center">
                        <label className="font-bold text-lg w-32">Link:</label>
                        <input type="text" className="border border-black rounded-md flex-1 p-2 border-r-4 border-b-4" />
                    </div>

                    <div className="flex items-center">
                        <label className="font-bold text-lg w-32">Type:</label>
                        <select type="text" className="border border-black rounded-md flex-1 p-2 border-r-4 border-b-4">
                        <option value="session">Session</option>
                        <option value="readonly">Readonly</option>
                        
                        </select>
                    </div>
                    <div className="flex items-center">
                        <label className="font-bold text-lg w-32">Progress:</label>
                        <select type="text" className="rounded-md flex-1 p-2 border-2 border-black  border-r-4 border-b-4" >
                        <option value="Not Started">Not Started</option>
                        <option value="Hiatus">Hiatus</option>
                        <option value="Completed">Completed</option>
                        </select>

                    </div>
                    <div className="flex justify-center items-center">
                        <button onClick={handleSubmit} className="justify-center items-center px-6 py-2 border-2 border-black rounded-xl border-r-4 border-b-4">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
