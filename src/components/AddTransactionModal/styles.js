import styled from "styled-components";

export const Container = styled.form`

    h2 {
        margin-bottom: 2rem;
    }

    input {
        display: block;
        margin-bottom: 1rem;
        width: 100%;
        height: 3rem;
        border-radius: 0.25rem;
        outline: none;
        border: none;
        padding: 1rem;
    }

    #gain-or-loss-input {
        font-style: italic;
        font-weight: bold;
    }

    button:last-child {
        width: 100%;
        height: 3rem;
    }

    .gain-or-loss {
        display: flex;
        margin-bottom: 1rem;
        justify-content: space-between;

        div {
            width: 45%;
            text-align: center;
            transition: 0.5s;
            border-radius: 8px;
        

            &:first-child{
                background: var(--green-100);
            }

            &:last-child{
                background: var(--red-100);
            }

            &:hover{
                cursor: pointer;
                filter: brightness(90%);
            }
        }
    }

    #value-error-message {
        color: red;
        position: relative;
        top: -18px;
        font-size: 12px;
    }
`