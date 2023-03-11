import { Hero } from "./components/Hero";
import { MenuCoffee } from "./components/MenuCoffee";
import { HomeCatalogContainer } from "./styles";

export function HomeCatalog() {
    return (
        <HomeCatalogContainer>
            <Hero />
            <MenuCoffee />
        </HomeCatalogContainer>
    )
}