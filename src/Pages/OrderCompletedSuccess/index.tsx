import { OrderCompletedSuccessContainer, OrderDetailsSuccess } from "./styles";
import confirmedOrder from '../../assets/confirmed-order.svg'
import { LabelWithIcon } from "../../components/LabelWithIcon";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useTheme } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";



export function OrderCompletedSuccess() {
    const { colors } = useTheme();

    const { state } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!state) {
            navigate('/')
        }
    }, [])

    if (!state) {
        return <></>
    }
    return (
        <OrderCompletedSuccessContainer>
            <div>
                <h2>
                    Uhu! Pedido confirmado
                </h2>
                <p>Agora é só aguardar que logo o café chegará até você</p>
            </div>

            <section>
                <OrderDetailsSuccess>
                    <LabelWithIcon
                        icon={<MapPin size={16} weight='fill' />}
                        iconBg={colors["brand-purple"]}
                        text={
                            <p>
                                Entrega em
                                <strong>
                                    {' '}{state.street}, {state.number}
                                </strong>
                                <br />
                                {state.neighborhood} - {state.city}, {state.uf}
                            </p>
                        }
                    />
                    <LabelWithIcon
                        icon={<Timer size={16} weight='fill' />}
                        iconBg={colors["brand-yellow"]}
                        text={
                            <p>
                                Previsão de entrega <br />
                                <strong>
                                    {' '}20 min - 30 min
                                </strong>
                            </p>
                        }
                    />
                    <LabelWithIcon
                        icon={<CurrencyDollar size={16} weight='fill' />}
                        iconBg={colors["brand-yellow-dark"]}
                        text={
                            <p>
                                Pagamento na entrega<br />
                                <strong>
                                    {' '}{state.billing}
                                </strong>
                            </p>
                        }
                    />
                </OrderDetailsSuccess>
                <img src={confirmedOrder} alt="" />
            </section>
        </OrderCompletedSuccessContainer>
    )
}