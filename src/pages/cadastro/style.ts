import styled from "styled-components";

export const StyledContainer = styled.div`
    background-color: var(--grey4);
    width: 100%;
    min-height: 100vh;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    .return-window{
        max-width: 370px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        a{
            font-size: 0.9em;
        }
    }
`