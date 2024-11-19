import * as S from "./Contato"
import * as T from "../componentes/Texto"

export default function Contato(){
    const click = () => {
        window.open("https://www.exemplo.com", "_blank");
    }

    return(
        <>
        <S.embalador>
            <S.Imagem
            src="./public/mestre-frente.jpg"
            alt="professor"
            />
            <S.texto> 
                <T.Titulo>
                    Impulsione seu potencial no Jiujitsu
                </T.Titulo>
                <T.CorpoT>
                CT POLLI é um centro de treinamento de JiuJitsu localizado no bairro Burgo Paulista em São Paulo, SP. Nosso compromisso é proporcionar um ambiente acolhedor e desafiador para praticantes de todos os níveis, desde iniciantes até profissionais. Com uma equipe de instrutores experientes e apaixonados, nos dedicamos a desenvolver habilidades técnicas, promover o bem-estar físico e mental, e cultivar valores como respeito e disciplina em nossos alunos.
                </T.CorpoT>
                <T.btn onClick={click}>Contato</T.btn>
            </S.texto>
        </S.embalador>
        </>
    )
}
