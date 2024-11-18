import * as S from "./card"

export default function Card({imagemLink, Titulo, Texto}){

    return(
        <>
        <S.card URL={imagemLink}>
                <S.Black>
                <S.Titulo>
                    {Titulo}
                </S.Titulo>
                <S.TextoC>
                    {Texto}
                </S.TextoC>
                </S.Black>
        </S.card>
        </>
    )
}