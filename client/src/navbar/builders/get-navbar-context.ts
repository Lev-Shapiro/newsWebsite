import { NavbarContext } from './Navbar.context';
import { useContext } from 'react';

const getNavbarContext = () => {
    const data = useContext(NavbarContext);

    if(data) return data;

    throw "Navbar context was called inside wrong DOM tree"
}

export default getNavbarContext