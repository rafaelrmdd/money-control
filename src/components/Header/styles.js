import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 6rem;

    background: var(--yellow-200);

    header{
        width: calc(25%);
        height: 3rem;
        margin: 0 auto;
        padding: 0 1rem;

        background: transparent;

        nav{
            width: 100%;
            height: 4rem;

            display: flex;
            align-items: center;
            justify-content: space-between;

            span, .vertical-line, button{
                margin-bottom: -10px;
            }
            
            .vertical-line{
                width: 5px;
                height: 75%;
            
                border-left: 1px solid var(--gray-100);
                filter: blur(0.8px);
            }

            button{
                padding: 0.25rem;
                border-radius: 4px;
                
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
