import { coffees } from "../../../../constants/coffees";
import { CardCoffee } from "../CardCoffee";
import { MenuCoffeeContainer } from "./styles";

export function MenuCoffee() {
    return (
        <MenuCoffeeContainer>
            <h2>
                Nossos Cafés
            </h2>

            <div>
                {coffees.map((coffee) => {
                    return (
                        <CardCoffee
                            key={coffee.id}
                            coffee={coffee}
                        />
                    )
                })}
            </div>
        </MenuCoffeeContainer>
    )
}