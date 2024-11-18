import styled from "styled-components";

export const Container = styled.button`
    width: 40%;

    padding: 1rem;
    line-height: 1rem;
    border-radius: 5px;
    border: none;
    background: var(--green-50);


    &:hover{
        
        filter: brightness(90%);
    }
`