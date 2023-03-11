

import { CheckoutCoffees } from "./components/CheckoutCoffees";
import { CheckoutForm } from "./components/CheckoutForm";
import { CheckoutContainer } from "./styles";

import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from 'zod';
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../hooks/useCartContext";

type handleRegisterAddressData = OrderData;


export type OrderData = zod.infer<typeof schemaFormOrderValidation>

const schemaFormOrderValidation = zod
    .object({
        cep: zod.string().min(1, 'Preencha o CEP').min(8, 'Digite um CEP válido').max(9, 'CEP pode ter no máximo 9 caracteres'),
        street: zod.string().min(1, 'Preencha o nome da rua'),
        number: zod.string().min(1, 'Preencha o número'),
        complement: zod.string(),
        neighborhood: zod.string().min(1, 'Preencha o bairro'),
        city: zod.string().min(1, 'Preencha a cidade'),
        uf: zod.string().min(1, 'Preencha a UF').min(2, 'Digite uma UF válida').max(2, 'UF pode ter no máximo 2 caracteres'),
        billing: zod.enum(['Cartão de crédito', 'Cartão de débito', 'Dinheiro'])
    })

export function Checkout() {

    const { clearCart } = useCartContext()
    const navigate = useNavigate()
    const confirmForm = useForm<handleRegisterAddressData>({
        resolver: zodResolver(schemaFormOrderValidation),
        defaultValues: {
            billing: 'Dinheiro'
        }
    });

    const { handleSubmit } = confirmForm;

    function handleRegisterAddress(data: handleRegisterAddressData) {
        navigate('/order_completed_success', {
            state: data
        })
        clearCart();
    }

    return (
        <FormProvider {...confirmForm}>
            <CheckoutContainer onSubmit={handleSubmit(handleRegisterAddress)}>
                <CheckoutForm />
                <CheckoutCoffees />
            </CheckoutContainer>
        </FormProvider>
    )
}