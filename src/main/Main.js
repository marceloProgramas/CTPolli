import styled from "styled-components";

export const embalador = styled.div`
    display: flex;
    flex-direction: column;

    max-width: 60rem;
    
    gap: 2rem;

    margin-left: 26rem;
    padding-bottom: 8rem;

    @media (max-width: 425px) {
    margin-inline: 1rem;
    }
    @media(max-width: 769px){
    margin-inline: 2rem;
    }
`
    
export const Titulo = styled.h1`
    color: #FEFEFE;
    font-size: 5rem;
    max-width: 55rem;
    margin: 0;
    margin-top: 8rem;

    @media(max-width: 769px){
    font-size: 4rem;
    }

`
    
export const texto = styled.p`
    color: #FEFEFE;
    font-size: 1.8rem;

    @media(max-width: 425px){
    font-size: 1.2rem;
    }
    @media(max-width: 769){
    font-size: 1.5rem;
    }
`

export const btn = styled.button`
    width: 10rem;
    padding: 1rem;
    background: #f4b61b;
    border: none;
`