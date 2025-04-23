import { ShoppingCartIcon } from '@heroicons/react/24/solid'

import { NavLink } from "react-router-dom";
import { useContext } from 'react';
import { ShoppingCartContext } from "../../Context";

const Navbar = () => {
    const context = useContext(ShoppingCartContext);
    const activeStyle = 'underline underline-offset-4 decoration-2 decoration-primary font-semibold';

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink
                        to="/"
                        end
                    >
                        Aether Skateshop
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? activeStyle : undefined)}
                        end
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/clothes"
                        className={({ isActive }) => (isActive ? activeStyle : undefined)}
                        end
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/electronics"
                        className={({ isActive }) => (isActive ? activeStyle : undefined)}
                        end
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/furnitures"
                        className={({ isActive }) => (isActive ? activeStyle : undefined)}
                        end
                    >
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/toys"
                        className={({ isActive }) => (isActive ? activeStyle : undefined)}
                        end
                    >
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/others"
                        className={({ isActive }) => (isActive ? activeStyle : undefined)}
                        end
                    >
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li>
                    hello@aether.com
                </li>
                <li>
                    <NavLink
                        to="/my-orders"
                        className={({ isActive }) => (isActive ? activeStyle : undefined)}
                        end
                    >
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/my-accounts"
                        className={({ isActive }) => (isActive ? activeStyle : undefined)}
                        end
                    >
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/signin"
                        className={({ isActive }) => (isActive ? activeStyle : undefined)}
                        end
                    >
                        Sig In
                    </NavLink>
                </li>
                <li className='flex justify-center items-center'>
                    <ShoppingCartIcon className="size-4 text-gray-950 mr-1" />
                    <div>
                        {context.count}
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;