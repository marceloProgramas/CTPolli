import * as S from "./treino"
import * as T from "../componentes/Texto"
import Card from "./card/card.jsx"

export default function Treino(){
    return(
        <>
        <S.embrulho>
            <T.Titulo>Dominie o Jiu-Jitsu em São paulo</T.Titulo>
            <S.cards>
                <Card 
                imagemLink={"./public/mestre-costa.jpg"}
                Titulo={"Aulas de JiuJitsu para Iniciantes"}
                Texto={"Comece sua jornada no JiuJitsu com aulas práticas e acessíveis para todos os níveis."}
                />
                <Card 
                imagemLink={"./public/mestre-counter.jpg"}
                Titulo={"Treinamento Avançado de Competição"}
                Texto={"Desenvolva suas habilidades competitivas com técnicas avançadas e estratégias eficazes."}
                />
                <Card 
                imagemLink={"./public/mestre-sarrada.jpg"}
                Titulo={"Workshops de Defesa Pessoal"}
                Texto={"Aprenda habilidades essenciais de autodefesa em workshops focados para situações do dia a dia."}
                />
            </S.cards>
        </S.embrulho>
        </>
    )
}