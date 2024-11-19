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
                <Card Url={"1245"} text = {"bah"}/>
            </S.cards>
        </S.empacotador>
        </>
    )
}