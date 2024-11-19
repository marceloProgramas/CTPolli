import * as S from "./card.js"

export default function Card({Url, plano, preco, CorpoText, bonus}){
    return(
        <>
        <S.carta>
            <S.imagem src={Url}/>
            <S.plano>Plano {plano}</S.plano>
            <S.preco>R$ {preco}</S.preco>
            <S.precinho>por mes</S.precinho>
            <S.info>Mais informações</S.info>
            <S.precinho>{CorpoText}</S.precinho>
        </S.carta>
        
        </>
    )
}