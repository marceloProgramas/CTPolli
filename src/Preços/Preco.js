import styled from "styled-components";
import { Titulo } from "../componentes/Texto";

export const empacotador = styled.div`
    text-align: center;
    padding: 0;
    justify-content: center;

    margin-block: 1rem;
`

export const Titul = styled(Titulo)`
    color: #221f1c;
    max-width: 300rem;
    margin-bottom: 4rem;
    margin-top: 4rem;
`

export const cards = styled.div`
    padding: 0;
    display: flex;
    gap: 1rem;
    justify-content: center;

    @media (max-width: 769px) {
        flex-direction: column;
    }
`