import {
    FaNodeJs,
    FaReact,
    FaDatabase,
    FaWpforms,
    FaRegMoneyBillAlt,
} from "react-icons/fa";
import { MdOutlineDeveloperMode } from "react-icons/md";
import {
    SiDatabricks,
    SiCodesignal,
    SiMaterialdesignicons,
    SiGooglescholar,
} from "react-icons/si";
import { GrDatabase } from "react-icons/gr";
import { IoListOutline } from "react-icons/io5";
import { RiDatabaseFill } from "react-icons/ri";
import { nanoid } from "nanoid";

const sublinks = [
    {
        pageId: nanoid(),
        page: "software development",
        links: [
            {
                id: nanoid(),
                label: "frontend development",
                icon: <FaReact />,
                url: "#",
            },
            {
                id: nanoid(),
                label: "backend development",
                icon: <FaNodeJs />,
                url: "#",
            },
            {
                id: nanoid(),
                label: "full-stack development",
                icon: <MdOutlineDeveloperMode />,
                url: "#",
            },
        ],
    },
    {
        pageId: nanoid(),
        page: "data science",
        links: [
            {
                id: nanoid(),
                label: "data analysis",
                icon: <SiDatabricks />,
                url: "#",
            },
            {
                id: nanoid(),
                label: "data visualization",
                icon: <FaDatabase />,
                url: "#",
            },
            {
                id: nanoid(),
                label: "machine learning",
                icon: <GrDatabase />,
                url: "#",
            },
            {
                id: nanoid(),
                label: "big data analytics",
                icon: <RiDatabaseFill />,
                url: "#",
            },
        ],
    },
    {
        page: "digital design",
        pageId: nanoid(),
        links: [
            {
                id: nanoid(),
                label: "graphic design",
                icon: <SiCodesignal />,
                url: "#",
            },
            {
                id: nanoid(),
                label: "user interface design",
                icon: <SiMaterialdesignicons />,
                url: "#",
            },
        ],
    },
    {
        page: "get started",
        pageId: nanoid(),
        links: [
            {
                id: nanoid(),
                label: "application form",
                icon: <FaWpforms />,
                url: "#",
            },
            {
                id: nanoid(),
                label: "admission requirements",
                icon: <IoListOutline />,
                url: "#",
            },

            {
                id: nanoid(),
                label: "tuition and fees",
                icon: <FaRegMoneyBillAlt />,
                url: "#",
            },
            {
                id: nanoid(),
                label: "scholarships",
                icon: <SiGooglescholar />,
                url: "#",
            },
        ],
    },
];

export default sublinks;
