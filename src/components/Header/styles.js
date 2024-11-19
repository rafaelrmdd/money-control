import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 8rem;

    background: var(--yellow-200);

    header{
        width: calc(70% + 2rem);
        height: 3rem;
        margin: 0 auto;
        padding: 0 1rem;

        background: transparent;

        nav{
            width: 100%;
            height: 4rem;

            display: flex;
            align-items: center;
            justify-content: center;

        }
    }

    section{
        width: 70%;

        display: flex;
        justify-content: space-between;
        margin: 1rem auto 0 auto;

        
    }

`

export const Button = styled.button`
  
    width: 40%;
    padding: 1rem;
    line-height: 1rem;
    border-radius: 5px;
    border: none;
    background: ${(props) => props.type === 'gain' ? 'var(--green-50)' : 'var(--red-100)'};

    &:hover{
        
        filter: brightness(90%);
    }

`

export const ModalStyle = createGlobalStyle`
    
`
