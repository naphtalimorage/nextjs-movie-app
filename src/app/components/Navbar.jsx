import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    MenuItem,
    IconButton,
    Collapse,
} from "@material-tailwind/react";
import {
    Bars2Icon,
} from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
import Searchbar from "../(main)/searchbar/SearchBar";


// nav list component
export default function ComplexNavbar({ NavList }) {
    const [isNavOpen, setIsNavOpen] = React.useState(false);

    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setIsNavOpen(false),
        );
    }, []);

    return (
        <Navbar className="w-full rounded-none bg-black p-2  lg:pl-6">
            <div className="relative mx-auto flex items-center  text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    className="mr-4 text-red-700 font-extrabold py-1.5  font-serif text-2xl"
                >
                    StreamFilm
                </Typography>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <div className="hidden lg:block ml-[500px]">
                    <Searchbar />
                </div>
                <IconButton
                    size="sm"
                    color="blue-gray"
                    variant="text"
                    onClick={toggleIsNavOpen}
                    className="ml-auto mr-2 lg:hidden"
                >
                    <Bars2Icon className="h-6 w-6" />
                </IconButton>

            </div>
            <Collapse open={isNavOpen} className="overflow-scroll">
                <NavList />
                <Searchbar />
            </Collapse>
        </Navbar>
    );
}