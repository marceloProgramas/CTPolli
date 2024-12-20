import * as S from "./Contato"
import * as T from "../componentes/Texto"

export default function Contato(){
    const click = () => {
        window.open("https://wa.me/+5511939396459", "_blank");
    }

    return(
        <>
        <S.embalador>
            <S.Imagem
            src="https://media.gettyimages.com/id/1365536433/photo/front-view-of-adult-male-athlete-bjj-brazilian-jiu-jistu-black-belt-sitting-in-front-of-white.jpg?b=1&s=2048x2048&w=0&k=20&c=h-0Itmyn010tvT6a8u-_1gjgpOG0sVvIcAQAAhjgp-M="
            alt="professor"
            />
            <S.texto> 
                <T.Titulo>
                    Impulsione seu potencial no Jiujitsu
                </T.Titulo>
                <T.CorpoT>
                CT POLLI é um centro de treinamento de JiuJitsu localizado no bairro Burgo Paulista em São Paulo, SP. Nosso compromisso é proporcionar um ambiente acolhedor e desafiador para praticantes de todos os níveis, desde iniciantes até profissionais. Com uma equipe de instrutores experientes e apaixonados, nos dedicamos a desenvolver habilidades técnicas, promover o bem-estar físico e mental, e cultivar valores como respeito e disciplina em nossos alunos.
                </T.CorpoT>
                <T.btn onClick={click} style={{cursor: "pointer",}}>Contato</T.btn>
            </S.texto>
        </S.embalador>
        </>
    )
}
