import { useCartContext } from "../../../../hooks/useCartContext";
import { CheckoutCardDetails } from "./CheckoutCardDetails";
import { CheckoutConfirmedInfo } from "./CheckoutConfirmedInfo";
import { ButtonPaymentConfirmation, CheckoutCoffeesContainer, CheckoutDetailsContainer } from "./styles";

export function CheckoutCoffees() {
    const { cartItems, cartValueTotal } = useCartContext()

    return (
        <CheckoutCoffeesContainer>
            <h4>
                Cafés selecionados
            </h4>

            <CheckoutDetailsContainer>
                {cartItems.map((coffee) => {
                    return (
                        <CheckoutCardDetails
                            key={coffee.id}
                            coffee={coffee}
                        />
                    )
                })}


                <CheckoutConfirmedInfo />

                <ButtonPaymentConfirmation disabled={!cartValueTotal} type='submit'>
                    confirmar pedido
                </ButtonPaymentConfirmation>

            </CheckoutDetailsContainer>
        </CheckoutCoffeesContainer>
    )
}