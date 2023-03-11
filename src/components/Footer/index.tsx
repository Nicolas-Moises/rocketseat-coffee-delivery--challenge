import { FacebookLogo, InstagramLogo, LinkedinLogo, WhatsappLogo } from "phosphor-react";
import { FooterContainer } from "./styles";

export function Footer() {
    return (
        <FooterContainer>
            <span>
                © 2023 Desenvolvido por Nicolas Moises ツ.
            </span>
            <div>
                <a href="" target='_blank'>
                    <LinkedinLogo size={28} weight='fill' />
                </a>
                <a href="" target='_blank'>
                    <InstagramLogo size={28} weight='fill' />
                </a>
                <a href="" target='_blank'>
                    <FacebookLogo size={28} weight='fill' />
                </a>
                <a href="" target='_blank'>
                    <WhatsappLogo size={28} weight='fill' />
                </a>
            </div>
        </FooterContainer>
    )
}