import sublinks from "../data";

const Sidebar = () => {
    return (
        <>
            {sublinks.map((eachLink) => {
                const { pageId, page, links } = eachLink;

                return (
                    <div key={pageId} className="nav-container">
                        <h2>{page}</h2>

                        <div className="sub-nav-container">
                            {links.map((link) => {
                                const { id, url, icon, label } = link;

                                return (
                                    <div key={id}>
                                        <button
                                            type="button"
                                            className="icon-button"
                                        >
                                            {icon}
                                        </button>
                                        <a href={url}>
                                            <h3>{label}</h3>
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </>
    );
};
export default Sidebar;
