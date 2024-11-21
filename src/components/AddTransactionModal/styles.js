import styled from "styled-components";

export const Container = styled.form`

    h2 {
        margin-bottom: 2rem;
    }

    input{
        display: block;
        margin-bottom: 1rem;
        width: 100%;
        height: 3rem;
        border-radius: 0.25rem;
        outline: none;
        border: none;
        padding: 1rem;
    }

    button:last-child{
        width: 100%;
        height: 3rem;
    }

    .gain-or-loss{
        display: flex;
        margin-bottom: 1rem;
        justify-content: space-between;

        button{
            width: 45%;
        }
    }

    #value-error-message{
        color: red;
        position: relative;
        top: -18px;
        font-size: 12px ;
    }
`