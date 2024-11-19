import styled from "styled-components";
import { CorpoT } from "../../componentes/Texto";

export const card = styled.div`
    background-image: url("${props => props.URL}");
    background-size: cover;
    background-position: center center;

    width: 45rem;
    height: 60rem;
    
    display: flex;
    flex-direction: column-reverse;
    justify-content: end;

    padding: 0;
`
    
export const Black = styled.div`
    text-align: center;
    padding: 0;
    background-color: rgba(0,0,0, 0.85);
`

export const TextoC = styled(CorpoT)`
    text-align: left;
    
    size: 2rem;
    margin: 0.7rem 1rem 2rem;
`

export const Titulo = styled.h3`
    text-align: left;
    color: #FEFEFE;
    font-size: 3.5rem;

    margin: 0.7rem 1rem 1.4rem 1rem;
`