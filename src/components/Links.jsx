import Sublinks from "./Sublinks";
import { useGlobalContextApp } from "../ContextApp";

const Links = () => {
    const { data, handleMouseEnter, handleMouseOut, handleMouseOver } =
        useGlobalContextApp();

    return (
        <article
            className="large-screen-menu-items"
            onMouseLeave={handleMouseOut}
        >
            <section onMouseOver={handleMouseOver} className="links-container">
                {data.map((link) => {
                    const { page, pageId } = link;

                    return (
                        <div key={pageId}>
                            <h2 onMouseEnter={() => handleMouseEnter(pageId)}>
                                {page}
                            </h2>
                        </div>
                    );
                })}
            </section>
            <Sublinks />
        </article>
    );
};

export default Links;
