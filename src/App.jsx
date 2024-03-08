import Links from "./components/Links";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import { RiMenu3Fill } from "react-icons/ri";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { useGlobalContextApp } from "./ContextApp";

const App = () => {
    const { isOpen, setIsOpen } = useGlobalContextApp();

    return (
        <>
            <header>
                <div
                    className={`top-header-div ${
                        isOpen ? "" : "hide-top-header-div"
                    }`}
                >
                    <h1>
                        Innovi<span className="title-span">Craft</span>
                    </h1>
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="menu-button"
                    >
                        <RiMenu3Fill />
                    </button>
                </div>

                <nav className={`nav ${isOpen ? "hide-nav" : ""}`}>
                    <div className="close-button">
                        <button
                            type="button"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <MdOutlineRestaurantMenu />
                        </button>
                    </div>
                    <Sidebar />
                </nav>
                <Links />
            </header>
            <Hero />
        </>
    );
};

export default App;
