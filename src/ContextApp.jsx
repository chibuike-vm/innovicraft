/* eslint-disable react/prop-types */
import { useContext, createContext, useState } from "react";
import sublinks from "./data";

const contextApp = createContext();
export const useGlobalContextApp = () => useContext(contextApp);

const ContextApp = ({ children }) => {
    const [data, setData] = useState(sublinks);
    const [pageId, setPageId] = useState(null);
    const [isOpen, setIsOpen] = useState(true);

    const handleMouseEnter = (id) => {
        setPageId(id);
        //setData(sublinks);
    };

    const handleMouseOut = () => {
        setPageId(null);
        /* const resetData = sublinks.map((eachLink) => {
            return { ...eachLink, links: [] };
        });
        setData(resetData); 
        console.log("Here: ", resetData); */
    };

    const handleMouseOver = (e) => {
        if (e.target.classList.contains("links-container")) {
            setPageId(null);
        }
    };

    return (
        <contextApp.Provider
            value={{
                data,
                pageId,
                isOpen,
                setPageId,
                handleMouseEnter,
                handleMouseOut,
                setIsOpen,
                handleMouseOver,
            }}
        >
            {children}
        </contextApp.Provider>
    );
};
export default ContextApp;
