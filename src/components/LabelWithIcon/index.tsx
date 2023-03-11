import { ReactNode } from "react";
import { IconContainer, LabelWithIconContainer } from "./styles";

interface LabelWithIconProps {
    iconBg: string;
    icon: ReactNode;
    text: string | ReactNode;
}

export function LabelWithIcon({ iconBg, icon, text }: LabelWithIconProps) {
    return (
        <LabelWithIconContainer>
            <IconContainer iconBg={iconBg}>{icon}</IconContainer>
            {typeof text === "string" ? <p>{text}</p> : text}
        </LabelWithIconContainer>
    )
}