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
                                        <a href={url}>{icon}</a>
                                        <h3>{label}</h3>
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
