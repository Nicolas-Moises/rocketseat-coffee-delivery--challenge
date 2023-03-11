import { NavLink } from 'react-router-dom'
import { HeaderContainer } from "./styles";

import { ShoppingCart, MapPin } from "phosphor-react";
import logoCoffeeDelivery from '../../assets/coffee-delivery-logo.svg';
import { useCartContext } from '../../hooks/useCartContext';

export function Header() {

    const { cartAmountNumber } = useCartContext()

    return (
        <HeaderContainer>
            <NavLink to='/'>
                <img src={logoCoffeeDelivery} />
            </NavLink>
            <nav>
                <span>
                    <MapPin weight="fill" size={22} />
                    Porto Alegre, RS
                </span>

                <NavLink to='/checkout'>
                    <div>

                        {cartAmountNumber > 0 &&
                            <span>
                                {cartAmountNumber}
                            </span>
                        }
                        <ShoppingCart
                            weight="fill"
                            size={22}
                        />
                    </div>

                </NavLink>
            </nav>
        </HeaderContainer>
    )
}