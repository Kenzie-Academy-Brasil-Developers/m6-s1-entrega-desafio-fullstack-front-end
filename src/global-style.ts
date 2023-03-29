import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;
    --grey1: #868E96;
    --grey2: #343B41;
    --grey3: #212529;
    --grey4: #121214;
    --success: #3FE864;
    --negative: #E83F5B;
    --whiteFixed: #FFFFFF;
    --fontDefault: #F8F9FA;
    --modalBgColor: #121214a2;
}
/* Buttons */
.btn-primary{
    padding: 10px 20px;
    background-color: var(--color-primary);
    color: var(--fontDefault);
    text-align: center;
    border: transparent;
    border-radius: 5px;
    cursor: pointer;
    transition: .2s;
}
.btn-primary:hover{
    background-color: var(--color-primary-focus);
}
.btn-primary-negative{
    background-color: var(--color-primary-negative);
}
.btn-primary-off{
    padding: 10px 20px;
    background-color: var(--grey1);
    color: var(--fontDefault);
    text-align: center;
    border: transparent;
    border-radius: 5px;
    cursor: pointer;
    transition: .2s;
}
.btn-primary-off:hover{
    background-color: var(--grey2);
}
.btn-secondary{
    padding: 5px 10px;
    background-color: var(--grey3);
    color: var(--fontDefault);
    text-align: center;
    border: transparent;
    border-radius: 5px;
    cursor: pointer;
    transition: .2s;
}
.btn-secondary:hover{
    background-color: var(--grey2);
}
.btn-third{
    padding: 10px 20px;
    background-color: var(--grey1);
    color: var(--fontDefault);
    text-align: center;
    border: transparent;
    border-radius: 5px;
    cursor: pointer;
    transition: .2s;
}
.btn-third:hover{
    background-color: var(--grey2);
}
.btn-transparent{
    background: transparent;
    color: var(--whiteFixed);
    border: none;
    cursor: pointer;
}
/* Inputs */
.input-default{
    outline: transparent;
    background-color: var(--grey2);
    border: 1px solid var(--grey1);
    border-radius: 5px;
    padding: 10px;
    color: var(--fontDefault);
}
.input-default:focus{
    border: 1px solid var(--whiteFixed);
}
/* Selectors */
.select-default{
    outline: transparent;
    background-color: var(--grey2);
    border: 1px solid var(--grey1);
    border-radius: 5px;
    padding: 10px;
    color: var(--fontDefault);
}
/* System messages */

.error-text{
    color: var(--negative);
    font-size: 0.8em;
}

/* Link Reset */
a{
    text-decoration: none;
}

/* default styles */

body{
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    padding-bottom: 40px;
    background-color: var(--grey4);
}
`;
export default GlobalStyle;
