import { useCartContext } from "../../../../hooks/useCartContext";
import { formatMoney } from "../../../../utils/formatMoney";
import { CheckoutConfirmedInfoContainer } from "./styles";

export function CheckoutConfirmedInfo() {

    const { cartValueTotal } = useCartContext();


    const totalOrderWithoutDeliveryFormatted = formatMoney(cartValueTotal)
    const total = cartValueTotal + 3.5;
    const totalOrderFormatted = formatMoney(total);


    return (
        <CheckoutConfirmedInfoContainer>
            <div>
                <h5>
                    Total de itens
                </h5>
                <h5>
                    R$ {totalOrderWithoutDeliveryFormatted}
                </h5>
            </div>
            <div>
                <h5>
                    Entrega
                </h5>
                <h5>
                    R$ 3,50
                </h5>
            </div>
            <div>
                <h3>
                    Total
                </h3>
                <h3>
                    R$ {totalOrderFormatted}
                </h3>
            </div>
        </CheckoutConfirmedInfoContainer>
    )
}