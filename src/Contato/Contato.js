import styled from "styled-components";

export const embalador = styled.div`
    padding-block: 5rem;
    background-color: #221f1c;

    display: flex;
    

    @media (max-width: 769px) {
        flex-direction: column;
        padding: 10%;
    }

`

export const Imagem = styled.img`
    width: 50rem;
    height: 50rem;
    object-fit: cover; 
    object-position: center;
    
    margin-right: 4rem;

    @media (max-width: 769px) {
        width: 35rem;
        height: 35rem;
        margin: auto;
    }
`

export const texto = styled.div`
    padding-left: 0;
    display: flex;
    flex-direction: column;

    max-width: 60rem;
    
    gap: 2rem;

    @media (max-width: 769px) {
        font-size: 1.5rem;
        max-width: 55rem;
    }
`