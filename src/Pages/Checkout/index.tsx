

import { CheckoutCoffees } from "./components/CheckoutCoffees";
import { CheckoutForm } from "./components/CheckoutForm";
import { CheckoutContainer } from "./styles";

import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type handleRegisterAddressData = OrderData;

export type OrderData = yup.InferType<typeof schemaFormOrderValidation>

const schemaFormOrderValidation = yup
    .object({
        cep: yup.number().required('Preencha o CEP'),
        street: yup.string().required('Preencha o nome da rua'),
        number: yup.number().required('Preencha o número'),
        complement: yup.string(),
        neighborhood: yup.string().required('Preencha o bairro'),
        city: yup.string().required('Preencha a cidade'),
        uf: yup.string().required('Preencha a UF'),
    })

export function Checkout() {

    const confirmForm = useForm<handleRegisterAddressData>({
        resolver: yupResolver(schemaFormOrderValidation),
    });

    const { handleSubmit } = confirmForm;

    function handleRegisterAddress(data: handleRegisterAddressData) {
        console.log(data)
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