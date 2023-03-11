
import { HeroBenefitsIconContainer, HeroContainer } from "./styles";
import heroHome from '../../../../assets/hero-home.png'
import { LabelWithIcon } from "../../../../components/LabelWithIcon";
import { useTheme } from "styled-components";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function Hero() {

    const { colors } = useTheme()

    return (
        <HeroContainer>
            <section>
                <div>
                    <h1>
                        Encontre o café perfeito para qualquer hora do dia
                    </h1>

                    <span>
                        Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                    </span>

                    <HeroBenefitsIconContainer>
                        <LabelWithIcon
                            icon={<ShoppingCart weight="fill" />}
                            iconBg={colors["brand-yellow-dark"]}
                            text='Compra simples e segura'
                        />
                        <LabelWithIcon
                            icon={<Package weight="fill" />}
                            iconBg={colors["base-text"]}
                            text='Embalagem mantém o café intacto'
                        />

                        <LabelWithIcon
                            icon={<Timer weight="fill" />}
                            iconBg={colors["brand-yellow"]}
                            text='Entrega rápida e rastreada'
                        />
                        <LabelWithIcon
                            icon={<Coffee weight="fill" />}
                            iconBg={colors["brand-purple"]}
                            text='O café chega fresquinho até você'
                        />
                    </HeroBenefitsIconContainer>
                </div>

                <img src={heroHome} alt="" />
            </section>
        </HeroContainer>
    )
}