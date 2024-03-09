/* eslint-disable react/prop-types */

import { useGlobalContextApp } from "../ContextApp";

const Sublinks = () => {
    const { pageId, data } = useGlobalContextApp();

    return (
        <article className="sublinks">
            {data.map((eachLink) => {
                const isActive = eachLink.pageId === pageId;
                return (
                    <div key={eachLink.pageId}>
                        {isActive && <h2>{eachLink.page}</h2>}
                        <div className="sublinks-container">
                            {isActive &&
                                eachLink.links.map((link) => {
                                    const { id, url, icon, label } = link;
                                    return (
                                        <div
                                            key={id}
                                            style={{
                                                width: `${
                                                    eachLink.links.length <= 2
                                                        ? "100%"
                                                        : "50%"
                                                }`,
                                            }}
                                        >
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
        </article>
    );
};
export default Sublinks;
