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

    .react-modal-overlay{
        position: fixed;
        background: gray;
        height: 50vh;
        width: 100%;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

    }

    .react-modal-content{
        position: fixed;
        z-index: 1000;
        background: black;
        height: 50vh;
        margin: 0 auto;
    }

`