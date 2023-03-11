import { ThemeProvider } from "styled-components";
import { Router } from "./Routes/Routes";
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { CartContextProvider } from "./contexts/CartContext";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}