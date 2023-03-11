import { ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { ItemsAmountInput } from "../../../../components/ItemsAmountInput";
import { useCartContext } from "../../../../hooks/useCartContext";
import { formatMoney } from "../../../../utils/formatMoney";
import { AddCartItems, CardCoffeContainer, Description, Tag, Title } from "./styles";

export interface CardCoffeeProps {
    id: number;
    tags: string[];
    name: string;
    description: string;
    photo: string;
    price: number
}

interface CoffeeProps {
    coffee: CardCoffeeProps;
}


export function CardCoffee({ coffee }: CoffeeProps) {


    const { addItemsToCart } = useCartContext();

    const [amount, setAmount] = useState(1);

    const priceFormatted = formatMoney(coffee.price);

    function handleRemoveItem() {
        if (amount > 1) {
            setAmount(state => state - 1)
        }
    }

    function handleAddItem() {
        setAmount(state => state + 1)
    }

    function addCoffeeToCart() {
        const coffeeToAdd = {
            ...coffee,
            amount
        }
        addItemsToCart(coffeeToAdd)
    }

    return (
        <CardCoffeContainer>
            <img src={`/coffees/${coffee.photo}`} alt="" />
            <Tag>
                {coffee.tags.map((tag) => {
                    return (
                        <span key={`${coffee.id}${tag}`}>
                            {tag}
                        </span>
                    )
                })}
            </Tag>
            <Title>
                {coffee.name}
            </Title>
            <Description>
                {coffee.description}
            </Description>

            <footer>
                <article>
                    <p>
                        R$
                    </p>
                    <span>
                        {priceFormatted}
                    </span>
                </article>

                <AddCartItems>
                    <ItemsAmountInput onAddItem={handleAddItem} onRemoveItem={handleRemoveItem} amount={amount} />
                    <button onClick={addCoffeeToCart}>
                        <ShoppingCart size={22} weight='fill' />
                    </button>
                </AddCartItems>
            </footer>
        </CardCoffeContainer>
    )
}