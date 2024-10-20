import image1 from "../assets/image.webp";
import Card from "./Card";
import image2 from "../assets/add.png"
import image3 from "../assets/image3.png"

const Home = () => {
    const cards = [
        {
            title: "Git workflow",
            image: image3,
            creationDate: '2023-10-22',
            type: 'Read-only'
        },
        {
            title: "Git workflow",
            image: image3,
            creationDate: '2023-10-22',
            type: 'Read-only'
        },
        {
            title: "Git workflow",
            image: image3,
            creationDate: '2023-10-22',
            type: 'Read-only'
        },
        {
            title: "Git workflow",
            image: image3,
            creationDate: '2023-10-22',
            type: 'Read-only'
        },
    ];

    return (
        <div className="flex justify-center items-center flex-col">
            <h1 className="text-4xl font-bold m-5">Excalidraw Link Manager</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 w-full px-4 ">
                {/* Static Card */}
                <div>
                    <div>
                        <div className="p-4">
                            <img src={image2} alt="" className=" w-full  rounded-2xl border-black border-2 border-b-4 border-r-4" />
                        </div>
                        <p className="pl-8 text-xl font-bold">Add new link</p>
                    </div>
                </div>
                {/* Dynamic Cards */}
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        image={card.image}
                        title={card.title}
                        creationDate={card.creationDate}
                        type={card.type}
                     className="w-full  rounded-xl border-black border-2"/>
                ))}
            </div>
        </div>
    );
}

export default Home;
