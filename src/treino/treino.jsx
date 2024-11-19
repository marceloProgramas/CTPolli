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
                imagemLink={"https://media.gettyimages.com/id/1184007131/pt/foto/brazilian-jiu-jitsu-training-bjj-instructor-standing-in-front-of-the-line-of-his-students-at.jpg?b=1&s=2048x2048&w=0&k=20&c=KcvwD8HoNb3Dctdx69mKLt6kJb8zNvAszBFJHefajhU="}
                Titulo={"Aulas de JiuJitsu para Iniciantes"}
                Texto={"Comece sua jornada no JiuJitsu com aulas práticas e acessíveis para todos os níveis."}
                />
                <Card 
                imagemLink={"https://media.gettyimages.com/id/1134128180/photo/brazilian-jiu-jitsu-bjj-fighter-in-a-fighting-stance.jpg?b=1&s=2048x2048&w=0&k=20&c=WZyaoPnwvLQSnRM889VaJ4eei2SKgpf7zkYQiiaCx_k="}
                Titulo={"Treinamento Avançado de Competição"}
                Texto={"Desenvolva suas habilidades competitivas com técnicas avançadas e estratégias eficazes."}
                />
                <Card 
                imagemLink={"https://media.gettyimages.com/id/1329778860/photo/brazilian-jiu-jistu-bjj-no-gi-grappling-training-two-male-athletes-drilling-technique-from.jpg?b=1&s=2048x2048&w=0&k=20&c=xWd0xD7JdVru8Cjptrb4C7akXnSGTHznQjH1Xs-D4Js="}
                Titulo={"Workshops de Defesa Pessoal"}
                Texto={"Aprenda habilidades essenciais de autodefesa em workshops focados para situações do dia a dia."}
                />
            </S.cards>
        </S.embrulho>
        </>
    )
}