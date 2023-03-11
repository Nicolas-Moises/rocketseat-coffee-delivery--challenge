import { Minus, Plus } from "phosphor-react";
import { ButtonIconContainer, ItemsAmountInputContainer } from "./styles";

interface ItemsAmountInputProps {
    size?: 'md' | 'sm';
    onAddItem: () => void;
    onRemoveItem: () => void;
    amount: number;
}


export function ItemsAmountInput({ size = 'md', onAddItem, onRemoveItem, amount }: ItemsAmountInputProps) {
    return (
        <ItemsAmountInputContainer size={size}>
            <ButtonIconContainer onClick={onRemoveItem} disabled={amount <= 1} >
                <Minus
                    size={14}
                />
            </ButtonIconContainer>

            <input type="number" value={amount} readOnly />

            <ButtonIconContainer onClick={onAddItem}>
                <Plus
                    size={14}
                />
            </ButtonIconContainer>

        </ItemsAmountInputContainer>
    )
}