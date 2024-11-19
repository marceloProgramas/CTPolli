import * as S from "./Preco";
import Card from "./card/card.jsx";

export default function Preco(){
    return(
        <>
        <S.empacotador>
            <S.Titul>
                Preços
            </S.Titul>
            <S.cards>
                <Card Url={"https://cdn.durable.co/blocks/18mZnsOP9QowIlNOmGfdOYzEpXY3KFpln4mWLJE9hzEQ5E9IcOBAPS9yR3myr3F4.jpg"} plano = {"infantil"} preco={ 60} CorpoText={"Ideal para ensino e defesa das crianças até 15 anos."}/>
                <Card Url={"https://cdn.durable.co/blocks/2d6XVMR73E03s2l5aGzb9CJtwL5Iori1brZ9y2d1BVqwlGUabL1c871yrIfSYsRP.jpg"} plano = {"Adulto"} preco={ 80} CorpoText={"Ideal para adultos que querem uma atividade física intensa e divertida."}/>
            </S.cards>
        </S.empacotador>
        </>
    )
}