import AppHeader from "./styles";
import Globe from "../../assets/logo.svg";
import Menu from "../../assets/menu.svg";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <article>
            <AppHeader>
                <Link to="/">
                    <img className="logo" src={Globe} alt="globe-logo"/>
                </Link>
                <Link to="/menu">
                    <img className="menu" src={Menu} alt="menu-logo"/>
                </Link>
            </AppHeader>
        </article>
    )
};

export default Header;