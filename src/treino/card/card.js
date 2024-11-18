import styled from "styled-components";
import { CorpoT } from "../../componentes/Texto";

export const card = styled.div`
    background-image: url("${props => props.URL}");
    width: 35rem;
    height: 45rem;
    display: flex;
    flex-direction: column-reverse;
    padding: 0;
`
    
export const Black = styled.div`
    text-align: center;
    padding: 0;
    background-color: rgba(34, 31, 28, 0.85);
`

export const TextoC = styled(CorpoT)`
    text-align: left;
    
    margin: 0.7rem 1rem 1.4rem 1rem;
`

export const Titulo = styled.h3`
    text-align: left;
    color: #FEFEFE;
    font-size: 2.5rem;

    margin: 0.7rem 1rem 1.4rem 1rem;
`