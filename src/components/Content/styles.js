import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: calc(100vh - 6rem);
    background: var(--yellow-200);

    main{
        width: 70%;
        height: 100%;
        margin: 0 auto;
        padding: 1rem;

        border-radius: 20px 20px 0 0 ;

        background: var(--orange-100);

        .gain, .loss {
            padding: 1rem;
            display: flex;
        }

        .gain {
            svg:first-child{
                font-size: 38px;
            }

            background: var(--green-50);
            filter: brightness(90%);

            margin-bottom: 0.75rem;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

            &:last-child {
                margin-bottom: 0;
            }
        }

        .loss {
            svg:first-child{
                font-size: 38px;
            }

            background: var(--red-100);
            filter: brightness(90%);

            margin-bottom: 0.75rem;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

            &:last-child {
                margin-bottom: 0;
            }
        }

        .text {
            width: 100%;
            max-width: 500px;

            margin-left: 1rem;

            #name-text {
                margin-bottom: 0.25rem;
                font-weight: 600;
            }

            #reason-text {
                font-size: 14px;
                font-weight: 400;
            }
        }

        .value-and-date {
            width: 100%;
            max-width: 300px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            
            h2{
                margin-left: 5rem;
            }

            h3 {
                margin-left: 5rem;
                font-weight: 400;
            }
        }

        .icons {
            width: 100%;
            max-width: 81px;

            display: flex;
            align-items: center;
            justify-content: right;
            color: black;

            svg:last-child {         
                font-size: 22px;
                color: gray;
            
                &:hover{
                    cursor: pointer;
                    filter: opacity(0.8);
                }
            }
        }
    }
`