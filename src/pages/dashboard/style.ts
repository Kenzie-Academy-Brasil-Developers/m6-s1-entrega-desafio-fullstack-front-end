import styled from "styled-components";


export const StyledDashboard = styled.div`
    background-color: var(--grey4);
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    color: var(--whiteFixed);
    header{
        padding: 10px;
        border-bottom: 1px solid var(--grey2);
    }
    .header-container{
        flex-grow: 1;
        max-width: 1100px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
    }
    .intro-container{
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid var(--grey2);
        section{
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
            flex-grow: 1;
            max-width: 1100px;
            margin: 0 auto;
        }
        span{
            font-size: .9em;
            color: var(--grey1);
        }
    }
    @media screen and (min-width: 500px) {
        .intro-container{
            section{
                align-items: center;
                flex-direction: row;
            }
        }
    }
`