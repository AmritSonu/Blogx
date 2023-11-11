import Logo from "../Components/Logo";
import SearchBar from "../Components/SearchBar";
import { NavLinks } from "../Components/Navlinks";
export function NavBar() {
  return (
    <nav className="navBar">
      <Logo />

      <SearchBar />
      <NavLinks />
    </nav>
  );
}
