import styled from "styled-components";

export const StyledModalLoading = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 0;
    .loading-spinner{
        width: 100px;
        height: 100px;
        border: 1em solid var(--grey1);
        border-radius: 50%;
        border-top-color: var(--grey2);
        animation: spin 1.2s infinite;
    }
    @keyframes spin {
        from {
            transform: rotate(0deg);
        } to {
            transform: rotate(360deg);
        }
    }

`