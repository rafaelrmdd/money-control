import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        //background
        --white-200: #F8F9FA ;
        //details
        --blue-300: #2C3E50;
        //gain
        --green-100: #34A853;
        //lose
        --red-100: #E53E3E;
        //border
        --gray-100: #333;
    }

    body {
        font-family: "Poppins", sans-serif;
    }

    input, button {
        font-family: "Poppins", sans-serif;
    }

    button {
        cursor: pointer;
    }

    //Style
    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 600px;
        background: var(--blue-300);
        padding: 3rem;
        position: relative;
        border-radius: 4px;
        border: none;
    }

    [disabled] {
        background: var(--white-200);
    }

`