import * as S from "./Contato"
import * as T from "../componentes/Texto"

export default function Contato(){
    return(
        <>
        <S.embalador>
            <S.Imagem
            src="https://pbs.twimg.com/media/GcnqO6SWUAA9F5f?format=jpg&name=large"
            alt="professor"
            />
            <S.texto> 
                <T.Titulo>
                    Impulsione seu potencial no Jiujitsu
                </T.Titulo>
                <T.CorpoT>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin orci vel dui efficitur tincidunt. Pellentesque pulvinar posuere mauris, id rhoncus magna vulputate viverra. Praesent fermentum, ex eu efficitur egestas, augue mi eleifend ipsum, vitae sagittis risus dolor eget nisi. Sed laoreet mattis est, ut elementum nibh bibendum suscipit. Donec mattis ante vitae ipsum suscipit, quis tincidunt sem auctor.
                </T.CorpoT>
                <T.btn>Contato</T.btn>
            </S.texto>
        </S.embalador>
        </>
    )
}