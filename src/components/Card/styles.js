import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    width: 70%;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3rem;

    .card-item-gains, .card-item-losses, .card-item-total,
    .card-item-total-positive, .card-item-total-negative {
        width: 30%;
        border-radius: 8px;
        padding: 1rem;
    } 

    .card-item-gains {
        background: var(--green-100);
    }

    .card-item-losses {
        background: var(--red-100);
    }

    .card-item-total, .card-item-total-positive, .card-item-total-negative {
        background: var(--orange-100);
    }

    .card-item-total-positive {
        h2 {
            color: var(--green-100);
        }
    }

    .card-item-total-negative {
        h2 {
            color: var(--red-100);
        }
    }

`

export const CardItem = styled.div`
    background: red;
    border-radius: 20px;

    padding: 1rem;
`