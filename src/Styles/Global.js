import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {

        --smaller: 0.75rem;
        --small: 0.81rem;
        --mid: 0.87rem;
        --normal: 1rem;
        --normal-plus: 1.07rem;
        --big: 1.25rem;

        --radius-px: 0.18rem;

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

    @media(min-width: 30rem) {
        :root {
            --smaller: 1.07rem;
            --small: 1.125rem;
            --mid: 1.25rem;
            --normal: 1.5rem;
            --normal-plus: 1.75rem;
            --big: 2rem;
        }
    }

    @media(min-width: 75rem) {
        :root {
            --smaller: 1.75rem;
            --small: 2rem;
            --mid: 2.125rem;
            --normal: 2.25rem;
            --normal-plus: 2.5rem;
            --big: 3rem;
        }
    }

`
