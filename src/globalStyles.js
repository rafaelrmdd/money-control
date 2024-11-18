import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        //background
        --yellow-200: #f5f5dc;
        //details
        --orange-100: #F0A500;
        //warning
        --peach-100: #ff9c73;
        //gain
        --green-50: #4CAF50;
        //lose
        --red-100: #ff4545;

        //border
        --gray-100: #333;
    }

    body {
        font-family: "Poppins", sans-serif;
    }

    button {
        cursor: pointer;
        font-family: "Poppins", sans-serif;
    }

`