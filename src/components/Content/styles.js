import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 6rem);
    background: var(--yellow-200);

    main{
        width: 70%;
        height: 100%;
        margin: 0 auto;
        padding: 1rem;

        border-radius: 20px 20px 0 0 ;

        background: var(--orange-100);

        .gain, .lose{
            padding: 1rem 1rem;
            line-height: 1rem;
            display: flex;
        }

        .gain{
            background: var(--green-50);
            filter: brightness(90%);

            margin-bottom: 1rem;
            border-radius: 10px;

            &:last-child{
                margin-bottom: 0;
            }
        }

        .lose{
            background: var(--red-100);
            filter: brightness(90%);

            margin-bottom: 1rem;
            border-radius: 10px;

            &:last-child{
                margin-bottom: 0;
            }
        }

        .text{
            width: 50%;

            #name-text{
                margin-bottom: 1rem;
                font-weight: 700;
            }

            #reason-text{
                font-weight: 500;
                
            }
        }

        .value{
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`