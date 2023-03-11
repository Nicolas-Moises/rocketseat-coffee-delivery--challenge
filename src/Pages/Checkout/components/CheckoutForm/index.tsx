import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { useTheme } from "styled-components";
import { LabelWithIconCheckout } from "../LabelWithIconCheckout";
import { AddressForm } from "./AddressForm";
import { BillingOptionsContainer, BillingTypeButton, CheckoutFormContainer, FormLayout } from "./styles";

export function CheckoutForm() {

    const { colors } = useTheme()

    return (
        <CheckoutFormContainer>
            <h4>
                Complete seu pedido
            </h4>
            <FormLayout>
                <LabelWithIconCheckout
                    icon={<MapPinLine size={22} color={colors["brand-yellow-dark"]} />}
                    title='Endereço de Entrega'
                    subtitle="Informe o endereço onde deseja receber seu pedido"
                />

                <AddressForm />
            </FormLayout>

            <FormLayout>
                <LabelWithIconCheckout
                    icon={<CurrencyDollar size={22} color={colors["brand-purple"]} />}
                    title='Pagamento'
                    subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
                />
                <BillingOptionsContainer>
                    <BillingTypeButton value="credit">
                        <CreditCard size={16} />
                        Cartão de crédito
                    </BillingTypeButton>

                    <BillingTypeButton value="debit_card">
                        <Bank size={16} />
                        Cartão de débito
                    </BillingTypeButton>

                    <BillingTypeButton value="cash">
                        <Money size={16} />
                        Dinheiro
                    </BillingTypeButton>
                </BillingOptionsContainer>
            </FormLayout>
        </CheckoutFormContainer>
    )
}