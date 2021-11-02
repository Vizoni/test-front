import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #eee;
        --white: #fff;
        --black: #000;
        
        --light-black: #212122;

        --light-orange: #ff7800;
        --mid-orange: #FF6C00;
        --dark-orange: #D45A00;

        --light-grey: #d8d8d8;
        --mid-grey: #ccc;
        --dark-grey: #999
    }

    * {
        margin: 0;
        padding: 0;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    body {
        background-color: var(--background);
        width: 100%;
        height: 100vh;
    }
    
    #root {
        width: 100%;
    }


    input, button, label, p, a, strong {
        color: var(--dark-grey);
    }
`
