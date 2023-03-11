import { ReactNode } from "react";
import { LabelWithIconCheckoutContainer } from "./styles";

interface LabelWithIconCheckoutProps {
    title: string;
    subtitle: string;
    icon: ReactNode;
}

export function LabelWithIconCheckout({ title, subtitle, icon }: LabelWithIconCheckoutProps) {
    return (
        <LabelWithIconCheckoutContainer>
            {icon}
            <div>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
            </div>
        </LabelWithIconCheckoutContainer>
    );
}