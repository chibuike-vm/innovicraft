/* eslint-disable react/prop-types */
import { useGlobalContextApp } from "../ContextApp";
import designSvg from "../assets/images/design.svg";
import programmingSvg from "../assets/images/programming.svg";
import dataSvg from "../assets/images/data.svg";

const Hero = () => {
    const { isOpen } = useGlobalContextApp();
    return (
        <main className={`main ${isOpen ? "" : "hide-main"}`}>
            <article>
                <h1>
                    Put in the Work,
                    <br /> Dreams Come True!
                </h1>
            </article>
            <article>
                <p>
                    Innovicraft is a leading institution dedicated to empowering
                    individuals with{" "}
                    <span className="text-span">
                        advanced skills in software development, data science,
                        and digital design.
                    </span>
                </p>
            </article>
            <article className="svg-div-container">
                <div>
                    <img
                        src={programmingSvg}
                        alt="Programming SVG"
                        width={400}
                        height={400}
                    />
                </div>
                <div>
                    <img
                        src={designSvg}
                        alt="Programming SVG"
                        width={400}
                        height={400}
                    />
                </div>
                <div>
                    <img
                        src={dataSvg}
                        alt="Programming SVG"
                        width={400}
                        height={400}
                    />
                </div>
            </article>
        </main>
    );
};
export default Hero;
