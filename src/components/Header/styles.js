import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 6rem;

    background: var(--yellow-200);

    header{
        width: 70%;
        height: 3rem;
        margin: 0 auto;
        padding: 0;

        background: transparent;

        display: flex;
        align-items: center;
        justify-content: space-between;

        span, button{
            margin-bottom: -10px;
        }

        button{
            padding: 0.5rem 1rem;
            border: 1px solid transparent;
            border-radius: 6px;
            background: #2C3E50;
            color: #FFFFFF;
            font-weight: 500;
            font-size: 14px;
            
            &:hover {
                filter: brightness(90%);
            }
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
