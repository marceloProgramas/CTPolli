import * as S from "./Main.js"

export default function Main(){
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      };
    

    return(
        <>
        <S.embalador>
        <S.Titulo>Aprenda Jiu Jitsu com os Melhores</S.Titulo>
        <S.texto>
        Jiu-Jitsu no Burgo Paulista: Conscientização e Transformação 
        </S.texto>
        <S.texto>
            Bem-vindo ao site oficial do Projeto Jiu-Jitsu no Burgo Paulista, uma iniciativa que visa fortalecer a comunidade por meio do esporte e da união. Criado em parceria com a Associação de Moradores do Burgo Paulista, nosso propósito vai além da prática esportiva: buscamos promover saúde, disciplina e engajamento social.  
        </S.texto>
        <S.texto>
            Nossa Missão  <br/>
            Transformar o Burgo Paulista em um espaço de oportunidades por meio do jiu-jitsu, unindo esporte e gestão eficiente. Com isso, queremos melhorar as condições do ambiente, atrair mais alunos e fortalecer a conexão entre a administração, os praticantes e a comunidade.  
        </S.texto>
        <S.texto>
            O Desafio  <br/>
            A Associação de Moradores do Burgo Paulista enfrenta problemas como uma administração ausente e uma estrutura precária. Essas condições desmotivam alunos, afetam a qualidade dos treinos e criam barreiras para novos participantes. Por isso, nosso projeto busca resolver essas questões, promovendo uma solução prática e eficiente.   
        </S.texto>
        <S.texto>
            A Solução: Um Site para Engajamento Administrativo <br/>
            Criamos este site como uma ferramenta para conectar gestores, alunos e a comunidade em geral. Ele servirá como um canal direto de comunicação, promovendo:  
            <ul>
            <li>Transparência: maior visibilidade das ações da administração.</li>
            <li>Feedbacks: recebimento de sugestões e opiniões da comunidade.</li>
            <li>Organização: divulgação de horários, eventos e avisos importantes.</li>
            <li>Engajamento: incentivo à participação ativa nas decisões administrativas.</li>
            </ul>
        </S.texto>
        <S.texto>
            Impacto na Comunidade <br/>
            Com a implementação deste site, esperamos:  
            <ul>
                <li>Melhorar a relação entre os gestores e os alunos.</li>
                <li>Aumentar a confiança e a motivação dos praticantes.</li>
                <li>Facilitar o acesso a informações e o planejamento de atividades.</li>
                <li>Criar um ambiente mais profissional e atrativo, que inspire novos alunos.</li>
            </ul>
        </S.texto>

        <S.texto>
            Quem se Beneficia?
            <ul>
                <li>Entre 30 e 50 alunos atuais, que terão um espaço mais organizado e eficiente para seus treinos.</li>  
                <li>Futuros alunos, que encontrarão um ambiente acolhedor e bem estruturado.</li>  
                <li>A comunidade em geral, que terá acesso a um local de práticas esportivas e convivência mais seguro e convidativo.</li>
            </ul>
        </S.texto>
            

        <S.texto>
            Feedback da Comunidade<br/>
            Nossa ideia recebeu um retorno muito positivo. A criação do site foi vista como um sinal de profissionalismo e comprometimento com a melhoria da administração e organização do dojo. Acreditamos que esta iniciativa é um passo essencial para atrair novos patrocinadores, organizar eventos e criar oportunidades para nossos atletas.              
        </S.texto>

        <S.texto>
            Participe da Transformação!<br/> 
            Juntos, podemos transformar o Burgo Paulista em um centro de referência para o jiu-jitsu e o bem-estar comunitário. Acesse o site, deixe sua opinião e ajude-nos a construir um futuro melhor para todos.  
        </S.texto>
        <S.texto>
            Unidos pelo esporte, pela saúde e pela comunidade.
            
        </S.texto>
        <S.btn onClick={() => scrollToSection("inscricao")}>inscreva-se</S.btn>
        </S.embalador>
        </>
    )
}