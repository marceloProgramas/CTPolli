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
                imagemLink={"https://i0.statig.com.br/bancodeimagens/9r/ck/rh/9rckrheckoqxy7x1h98irabt7.jpg"}
                Titulo={"amo a maria joaquina mas ela so quer o amor do jorge"}
                Texto={"Aprenda técnicas comprovadas para criar conexões significativas e aumentar sua confiança com nosso curso especializado, projetado para transformar suas interações."}
                />
                <Card 
                imagemLink={"https://extra.globo.com/incoming/5137698-c3f-315/w533h800/jaime1.jpg"}
                Titulo={"Quero imagracer comendo hamburguer"}
                Texto={"Alcance seus objetivos de emagrecimento de forma rápida e saudável com nosso produto exclusivo, desenvolvido para maximizar resultados e transformar sua jornada de bem-estar."}
                />
                <Card 
                imagemLink={"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6RmW9w4N_HF5raJHXWNjG3GxVFWhAvNOIdp50HP-AGSACtlbu7EOAw96hRj4ZQy4go3EUEQvgrWEY_fSsPhqYD-wf1d1U3eTA0iAu6DLhre1l32e2gwOQd_LXobuErS3NVWcAKO74-CU5/s1600/337px-Carmem.jpg"}
                Titulo={"Passo fome"}
                Texto={"Passar fome é uma condição grave que afeta milhões de pessoas no mundo, causando sérios danos à saúde física e mental."}
                />
            </S.cards>
        </S.embrulho>
        </>
    )
}