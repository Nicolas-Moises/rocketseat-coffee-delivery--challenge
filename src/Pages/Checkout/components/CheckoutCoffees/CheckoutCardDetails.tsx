import { CheckoutCardDetailsContainer, RemoveItemButton } from "./styles";
import { ItemsAmountInput } from "../../../../components/ItemsAmountInput";
import americano from '../../../../assets/americano.png'
import { Trash } from "phosphor-react";
import { CardCoffeeProps } from "../../../HomeCatalog/components/CardCoffee";
import { CartItem } from "../../../../contexts/CartContext";
import { formatMoney } from "../../../../utils/formatMoney";
import { useCartContext } from "../../../../hooks/useCartContext";

interface CheckoutCardDetailsProps {
    coffee: CartItem
}

export function CheckoutCardDetails({ coffee }: CheckoutCardDetailsProps) {
    const priceTotalOrder = coffee.price * coffee.amount
    const priceFormatted = formatMoney(priceTotalOrder);

    const { checkoutHandleItemsAmount, deleteCardFromCart } = useCartContext();

    function handleAddItemOnCart() {
        checkoutHandleItemsAmount(coffee.id, 'addItem')
    }

    function handleRemoveItemOnCart() {
        checkoutHandleItemsAmount(coffee.id, 'removeItem')
    }

    function handleRemoveCardOnCart() {
        deleteCardFromCart(coffee.id)
    }

    return (
        <CheckoutCardDetailsContainer>
            <section>
                <img src={`/coffees/${coffee.photo}`} alt="" />
                <div>
                    <h5>{coffee.name}</h5>
                    <div>
                        <ItemsAmountInput size="sm" amount={coffee.amount} onAddItem={handleAddItemOnCart} onRemoveItem={handleRemoveItemOnCart} />
                        <RemoveItemButton onClick={handleRemoveCardOnCart}>
                            <Trash />
                            Remover
                        </RemoveItemButton>
                    </div>
                </div>
            </section>

            <span>
                R${' '} {priceFormatted}
            </span>

        </CheckoutCardDetailsContainer>
    )
}