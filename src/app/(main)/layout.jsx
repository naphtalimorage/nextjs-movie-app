"use client"
import CarouselPage from "../components/Carousel";
import { Footer } from "../components/Footer";
import ComplexNavbar from "../components/Navbar";
import { usePathname } from "next/navigation";
import Link from "next/link";


const navListItems = [
  {
    label: "Movies",
    href1: "/movies",
    href2: "/moviedetails",
  },
  {
    label: "Tvshows",
    href1: "/tvshows",
    href2: "/tvshowlist",
  },

];

function NavList() {
  const pathname = usePathname();
  return (
    <ul className="flex space-x-5 text-white px-8">
      {navListItems.map((navListItem) => {
        const isActive = pathname.startsWith(navListItem.href1) || pathname.startsWith(navListItem.href2);
         return (
          <li key={navListItem.label} className="relative text-sm text-gray-400">
            <Link href={navListItem.href1} className={isActive ? " text-white border-b-2 border-red-500" : ""}>
              {navListItem.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const isTvShowDetailsPage = (pathname.startsWith("/tvshowlist/") || pathname.startsWith("/moviedetails/") || pathname.startsWith("/searchbar/")) && pathname.split("/").length === 3;


  return (
    <>
      <ComplexNavbar NavList={NavList} />
      {!isTvShowDetailsPage && <CarouselPage />}
      
      {children}
      <Footer />
    </>

  );
}