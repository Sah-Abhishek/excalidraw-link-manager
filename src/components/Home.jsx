import image1 from "../assets/image.webp";
import Card from "./Card";
import image2 from "../assets/add.png"
import image3 from "../assets/image3.png"
import { useState } from "react";
import Modal from "./Modal";
import useCardStore from '../store/cardStore.js'

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleToggleModal = () => {
        setIsModalOpen(prev => !prev)
    }

    const cards = useCardStore(state => state.cards)


    // const cards = [
    //     {
    //         title: "Git workflow",
    //         image: image3,
    //         creationDate: '2023-10-22',
    //         type: 'Read-only',
    //         link: 'https://excalidraw.com/#room=fac1f49f6c5937037738,pO4Fqng-6R-aNtjH95KxeQ'
    //     },
    //     {
    //         title: "Git workflow",
    //         image: image3,
    //         creationDate: '2023-10-22',
    //         type: 'Read-only',
    //         link: '#'
    //     },
    //     {
    //         title: "Git workflow",
    //         image: image3,
    //         creationDate: '2023-10-22',
    //         type: 'Read-only',
    //         link: '#'
    //     },
    //     {
    //         title: "Git workflow",
    //         image: image3,
    //         creationDate: '2023-10-22',
    //         type: 'Read-only',
    //         link: '#'
    //     },
    // ];

    return (
        <div className="flex justify-center items-center flex-col">
            <h1 className="text-4xl font-bold m-5">Excalidraw Link Manager</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 w-full px-4 ">
                {/* Static Card */}
                <div>
                    <div>
                        <div className="p-4">
                            <button onClick={handleToggleModal}>
                                <img src={image2} alt="" className=" w-full  rounded-2xl border-black border-2 border-b-4 border-r-4" />
                            </button>
                        </div>
                        <p className="pl-8 text-xl font-bold">Add new link</p>
                    </div>
                </div>
                {/* Dynamic Cards */}
                {cards.map((card, index) => (
                    <Card
                        isModalOpen={isModalOpen}
                        handleToggleModal={handleToggleModal}
                        key={index}
                        image={card.image}
                        title={card.name}
                        creationDate={card.creationDate}
                        type={card.type}
                        link={card.link}
                        date={card.date}
                        className="w-full  rounded-xl border-black border-2" />
                ))}
            </div>

            {/* Modal */}
            {isModalOpen &&
                <Modal isModalOpen={isModalOpen} handleToggleModal={handleToggleModal} />
            }
        </div>
    );
}

export default Home;
