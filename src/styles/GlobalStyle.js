import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        margin: 0;
        padding: 0;
    }
`

export default GlobalStyle
