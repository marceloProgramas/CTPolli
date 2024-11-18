import * as S from "./treino"
import * as T from "../componentes/Texto"
import Card from "./card/card.jsx"

export default function Treino(){
    return(
        <>
        <S.embrulho>
            <T.Titulo>Dominie o Jiu-Jitsu em São paulo</T.Titulo>
            <Card imagemLink={"https://i0.statig.com.br/bancodeimagens/9r/ck/rh/9rckrheckoqxy7x1h98irabt7.jpg"}/>
        </S.embrulho>
        </>
    )
}