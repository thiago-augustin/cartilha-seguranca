var page = 0;
var number = document.getElementById("number");
var div = document.getElementById("content");

function next() {
    if (page == 25){
        console.log("Você já está na última página!")
    }else {
        page++;
    }

    number.textContent = page;
    content(page);
}

function previous() {
    if (page == 0){
        console.log("Você já está na primeira página!")
    }else {
        page--;
    }
    
    number.textContent = page;
    content(page);
}

function content(page){
    switch (page) {
        case 0: 
        div.innerHTML = `
        <div class="cape">
            <div class="names">
                <p> Alunos: Thiago e Heroldi </p>
            </div>
            <div class="title">
                <h1> Cartilha de Segurança </h1>
            </div>
            <div class="image">
                <img src="assets/morfeu.jpg" alt="">
            </div>
        </div>
        `
        break;
        case 1: 
        div.innerHTML = `
        <div class="primary">
            <div class="title-unique">
                <h1> Golpes na Internet </h1>
            </div>
        </div>
        `
        break;
        case 2: 
        div.innerHTML = `
        <div class="secondary">
            <div class="title">
                <h1> Furto de Identidade </h1>
            </div>
            <div class="text">
                <p class="bold">O que é:</p>
                <p>Os ladrões de identidade geralmente obtém informação pessoal como senhas, números de identidade, números de cartão de crédito ou CPF, e fazem mau uso destes dados para agir de forma fraudulenta em nome da vítima. Os detalhes sensíveis podem ser usados com vários propósitos ilegais incluindo pedido de empréstimo, compras online ou acessar os dados médicos e financeiros da vítima.</p>
                </br>
                <p class="bold">Como se proteger do furto de identidade:</p>
                <ul>
                    <li>&#8658; Proteja sua conexão, evite utilizar Wi-Fi público ou então use VPN.</li>
                    <li>&#8658; Mantenha seus dispositivos seguros, utilize uma solução de segurança confiável, multicamadas e atualizada.</li>
                    <li>&#8658; Fique longe de mensagens e sites suspeitos.</li>
                    <li>&#8658; Utilize senhas fortes que sejam longas, difíceis de adivinhar e únicas.</li>
                    <li>&#8658; Monitore suas contas bancárias e crédito.</li>
                    <li>&#8658; Fique longe de mensagens e sites suspeitos.</li>
                </ul>
            </div>
        </div>
        `
        break;
        case 3: 
        div.innerHTML = `
        <div class="secondary">
            <div class="title">
                <h1> Fraude de antecipação de recursos </h1>
            </div>
            <div class="text">
                <p class="bold">O que é:</p>
                <p> É a solicitação de dados pessoais ou pedido de antecipação de quantia financeira com a promessa de recebimento de benefício ou faturamento futuro.</p>
                </br>
                <p class="bold">Como ocorre:</p>
                <p> Por meio de mensagens, ligações ou acesso a sites fraudulentos. Geralmente envolve uma história comovente ou excitante que inclui o envio de dados ou dinheiro. Geralmente é dito que seu contato é uma indicação por ser uma pessoa confiável e honesta. Suas variações envolvem loterias internacionais, oferta de crédito fácil, doação de animais de raça, ofertas de emprego, busca de namorados ou namoradas, entre outros.</p>
                </br>
                <p class="bold">Prevenção:</p>
                <ul>
                    <li>&#8658; Suspeitar de histórias que envolvam prazos e solicitação de sigilo.</li>
                    <li>&#8658; Atentar para erros gramaticais grosseiros.</li>
                    <li>&#8658; Ligar para a polícia ou instituições de defesa do consumidor para verificar se não se trata de uma fraude.</li>
                </ul>
            </div>
        </div>
        `
        break;
        case 4: 
        div.innerHTML = `
        <div class="secondary">
            <div class="title">
                <h1> Phishing </h1>
            </div>
            <div class="text">
                <p class="bold">O que é:</p>
                <p>O phishing se trata de uma ação feita por criminosos que enviam por meio de e-mail, redes sociais, SMS ou outro vetor um texto direcionado, com o objetivo de convencer a vítima a clicar em um link, baixar um anexo, enviar as informações solicitadas ou até mesmo concluir um pagamento real.</p>
                </br>
                <p class="bold">Um ataque de phishing tem três componentes:</p>
                <ul>
                    <li>&#8658; O ataque é realizado por meio de comunicações eletrônicas, como e-mail ou por telefone.</li>
                    <li>&#8658; O golpista finge ser um indivíduo ou organização de confiança.</li>
                    <li>&#8658; O objetivo é obter informações pessoais confidenciais, como credenciais de login ou números de cartão de crédito.</li>
                </ul>
                </br>
                <p class="bold">Formas de se defender de phishing:</p>
                <ul>
                    <li>&#8658; Analise o e-mail.</li>
                    <li>&#8658; Instale antivírus.</li>
                    <li>&#8658; Verificação de dois fatores.</li>
                </ul>
            </div>
        </div>
        `
        break;
        case 5: 
        div.innerHTML = `
        <div class="secondary">
            <div class="title">
                <h1> Pharming </h1>
            </div>
            <div class="text">
                <p class="bold">O que é:</p>
                <p> É um tipo de phishing que envolve o comprometimento de serviços de DNS (Domain Name System). Quando se acessa um site específico ao digitar uma URL no navegador, o serviço corrompido redireciona para um site falso (cópia do original).</p>
                </br>
                <p class="bold">Como ocorre:</p>
                <ul>
                    <li>&#8658; Com ataque a servidores DNS da internet (extremamente raro).</li>
                    <li>&#8658; Códigos maliciosos que alteram o funcionamento do serviço de DNS do computador do usuário (comum).</li>
                    <li>&#8658; Ataque ao serviço de redirecionamento de roteadores (comum).</li>
                </ul>
                </br>
                <p class="bold">Prevenção:</p>
                <ul>
                    <li>&#8658; Uso de antivírus e antimalwares nos computadores pessoais.</li>
                    <li>&#8658; Senhas fortes em modems e roteadores.</li>
                    <li>&#8658; Atenção a mudanças repentinas em sites (podem indicar que se trata de um site falso).</li>
                </ul>
            </div>
        </div>
        `
        break;
        case 6: 
        div.innerHTML = `
        <div class="secondary">
            <div class="title">
                <h1> Golpes de comércio eletrônico </h1>
            </div>
            <div class="text">
                <p class="bold">O que é:</p>
                <p> Existem sites que exploram a confiança de consumidores expondo produtos com preços geralmente abaixo do mercado. Podem ser páginas criadas especificamente para esse fim ou vendedores que utilizam o espaço de sites legítimos.</p>
                </br>
                <p class="bold">Como ocorre:</p>
                <p> Ocorre com a criação de sites falsos, extremamente parecidos com os legítimos, que simulam a existência de grande fluxo de venda de produtos. Ainda, pode ocorrer em sites legítimos de venda coletiva, com a simulação de venda de produtos com preços vantajosos e prazos curtos de oferta.</p>
                </br>
                <p class="bold">Prevenção:</p>
                <ul>
                    <li>&#8658; Realize pesquisa de mercado em relação ao preço do produto e à reputação do vendedor.</li>
                    <li>&#8658; Procure comprar de quem tem grande quantidade de produtos vendidos e boas avaliações.</li>
                    <li>&#8658; Não informe os dados pessoais caso a página não ofereça conexão segura.</li>
                    <li>&#8658; Evite comprar por impulso.</li>
                    <li>&#8658; Realize pesquisas em sites de reclamações.</li>
                    <li>&#8658; Peça o CNPJ do vendedor para realizar a sua validação.</li>
                    <li>&#8658; Marque o encontro para recebimento do produto em locais públicos.</li>
                </ul>
            </div>
        </div>
        `
        break;
        case 7: 
        div.innerHTML = `
        <div class="primary">
            <div class="title-unique">
                <h1> Ataques na Internet </h1>
            </div>
        </div>
        `
        break;
        case 8: 
        div.innerHTML = `
        <div class="secondary">
            <div class="title">
                <h1> Exploração de vulnerabilidades </h1>
            </div>
            <div class="text">
                <p class="bold">O que é:</p>
                <p> Uma vulnerabilidade é definida como uma condição que, quando explorada por um atacante, pode resultar em uma violação de segurança. Exemplos de vulnerabilidades são falhas no projeto, na implementação ou na configuração de programas, serviços ou equipamentos de rede. Um ataque de exploração de vulnerabilidades ocorre quando um atacante, utilizando-se de uma vulnerabilidade, tenta executar ações maliciosas, como invadir um sistema, acessar informações confidenciais, disparar ataques contra outros computadores ou tornar um serviço inacessível.</p>
                </br>
                <p class="bold">Como ocorre:</p>
                <p> Um ataque de exploração de vulnerabilidades ocorre quando um atacante, utilizando-se de uma vulnerabilidade, tenta executar ações maliciosas, como invadir um sistema, acessar informações confidenciais, disparar ataques contra outros computadores ou tornar um serviço inacessível.</p>
            </div>
        </div>
        `
        break;
        case 9: 
        div.innerHTML = `
        <div class="secondary">
            <div class="title">
                <h1> Varredura em redes </h1>
            </div>
            <div class="text">
                <p class="bold">O que é:</p>
                <p>Varredura em redes, ou scan, é uma técnica que consiste em efetuar buscas minuciosas em redes, com o objetivo de identificar computadores ativos e coletar informações sobre eles como, por exemplo, serviços disponibilizados e programas instalados. Com base nas informações coletadas é possível associar possíveis vulnerabilidades aos serviços disponibilizados e aos programas instalados nos computadores ativos detectados.</p>
                </br>
                <p> A varredura em redes e a exploração de vulnerabilidades associadas podem ser usadas de forma:</p>
                <ul>
                    <li>&#8658; <strong class="bold">Legítima:</strong> por pessoas devidamente autorizadas, para verificar a segurança de computadores e redes e, assim, tomar medidas corretivas e preventivas.</li>
                    <li>&#8658; <strong class="bold">Maliciosa:</strong> por atacantes, para explorar as vulnerabilidades encontradas nos serviços disponibilizados e nos programas instalados para a execução de atividades maliciosas. Os atacantes também podem utilizar os computadores ativos detectados como potenciais alvos no processo de propagação automática de códigos maliciosos e em ataques de força bruta.</li>
                </ul>
            </div>
        </div>
        `
        break;
        case 10: 
        div.innerHTML = `
        <div class="secondary">
            <div class="title">
                <h1> E-mail spoofing </h1>
            </div>
            <div class="text">
                <p class="bold">O que é:</p>
                <p> É uma técnica que consiste em alterar campos do cabeçalho de um e-mail, de forma a aparentar que ele foi enviado de uma determinada origem quando, na verdade, foi enviado de outra.</p>
                <p> Ataques deste tipo são bastante usados para propagação de códigos maliciosos, envio de spam e em golpes de phishing. Atacantes utilizam-se de endereços de e-mail coletados de computadores infectados para enviar mensagens e tentar fazer com que os seus destinatários acreditem que elas partiram de pessoas conhecidas.</p>
                </br>
                <p>Exemplos de e-mails com campos falsificados são aqueles recebidos como sendo:</p>
                <ul>
                    <li>&#8658; De alguém conhecido, solicitando que você clique em um link ou execute um arquivo anexo.</li>
                    <li>&#8658; Do seu banco, solicitando que você siga um link fornecido na própria mensagem e informe dados da sua conta bancária.</li>
                    <li>&#8658; Do administrador do serviço de e-mail que você utiliza, solicitando informações pessoais e ameaçando bloquear a sua conta caso você não as envie.</li>
                </ul>
                </br>
                <p>Você também pode já ter observado situações onde o seu próprio endereço de e-mail foi indevidamente utilizado. Alguns indícios disto são:</p>
                <ul>
                    <li>&#8658; Você recebe respostas de e-mails que você nunca enviou.</li>
                    <li>&#8658; Você recebe e-mails aparentemente enviados por você mesmo, sem que você tenha feito isto.</li>
                    <li>&#8658; Você recebe mensagens de devolução de e-mails que você nunca enviou, reportando erros como usuário desconhecido e caixa de entrada lotada (cota excedida).</li>
                </ul>
            </div>
        </div>
        `
        break;
        case 11: 
        div.innerHTML = `
        <div class="secondary">
            <div class="title">
                <h1> Sniffing </h1>
            </div>
            <div class="text">
                <p class="bold">O que é:</p>
                <p> É uma técnica que consiste em inspecionar os dados trafegados em redes de computadores, por meio do uso de programas específicos chamados de sniffers.</p>
                </br>
                <p> Esta técnica pode ser utilizada de forma:</p>
                <ul>
                    <li>&#8658; <strong class="bold">Legítima:</strong> por administradores de redes, para detectar problemas, analisar desempenho e monitorar atividades maliciosas relativas aos computadores ou redes por eles administrados.</li>
                    <li>&#8658; <strong class="bold">Maliciosa:</strong> por atacantes, para capturar informações sensíveis, como senhas, números de cartão de crédito e o conteúdo de arquivos confidenciais que estejam trafegando por meio de conexões inseguras, ou seja, sem criptografia.</li>
                </ul>
                </br>
                <p> As informações capturadas por esta técnica são armazenadas na forma como trafegam, ou seja, informações que trafegam criptografadas apenas serão úteis ao atacante se ele conseguir decodificá-las.</p>
            </div>
        </div>
        `
        break;
        case 12: 
        div.innerHTML = `
        <div class="secondary">
            <div class="title">
                <h1> Força bruta </h1>
            </div>
            <div class="text">
                <p class="bold">O que é:</p>
                <p> É uma técnica que consiste em adivinhar, por tentativa e erro, um nome de usuário e senha e, assim, executar processos e acessar sites, computadores e serviços em nome e com os mesmos privilégios deste usuário.</p>
                <p> Qualquer computador, equipamento de rede ou serviço que seja acessível via Internet, com um nome de usuário e uma senha, pode ser alvo de um ataque de força bruta. Dispositivos móveis, que estejam protegidos por senha, além de poderem ser atacados pela rede, também podem ser alvo deste tipo de ataque caso o atacante tenha acesso físico a eles.</p>
                </br>
                <p> Se um atacante tiver conhecimento do seu nome de usuário e da sua senha ele pode efetuar ações maliciosas em seu nome como, por exemplo:</p>
                <ul>
                    <li>&#8658; Trocar a sua senha, dificultando que você acesse novamente o site ou computador invadido.</li>
                    <li>&#8658; Invadir o serviço de e-mail que você utiliza e ter acesso ao conteúdo das suas mensagens e à sua lista de contatos, além de poder enviar mensagens em seu nome.</li>
                    <li>&#8658; Acessar a sua rede social e enviar mensagens aos seus seguidores contendo códigos maliciosos ou alterar as suas opções de privacidade.</li>
                    <li>&#8658; Invadir o seu computador e, de acordo com as permissões do seu usuário, executar ações, como apagar arquivos, obter informações confidenciais e instalar códigos maliciosos.</li>
                </ul>
                </br>
                <p> Mesmo que o atacante não consiga descobrir a sua senha, você pode ter problemas ao acessar a sua conta caso ela tenha sofrido um ataque de força bruta, pois muitos sistemas bloqueiam as contas quando várias tentativas de acesso sem sucesso são realizadas.</p>
                <p> Apesar dos ataques de força bruta poderem ser realizados manualmente, na grande maioria dos casos, eles são realizados com o uso de ferramentas automatizadas facilmente obtidas na Internet e que permitem tornar o ataque bem mais efetivo.</p>
            </div>
        </div>
        `
        break;
        case 13: 
        div.innerHTML = `
        <div class="secondary">
            <div class="title">
                <h1> Defacement </h1>
            </div>
            <div class="text">
                <p class="bold">O que é:</p>
                <p> Desfiguração de página, defacement ou pichação, é uma técnica que consiste em alterar o conteúdo da página Web de um site.</p>
                </br>
                <p> As principais formas que um atacante, neste caso também chamado de defacer, pode utilizar para desfigurar uma página Web são:</p>
                <ul>
                    <li>&#8658; Explorar erros da aplicação Web.</li>
                    <li>&#8658; Explorar vulnerabilidades do servidor de aplicação Web.</li>
                    <li>&#8658; Explorar vulnerabilidades da linguagem de programação ou dos pacotes utilizados no desenvolvimento da aplicação Web.</li>
                    <li>&#8658; Invadir o servidor onde a aplicação Web está hospedada e alterar diretamente os arquivos que compõem o site.</li>
                    <li>&#8658; Furtar senhas de acesso à interface Web usada para administração remota.</li>
                </ul>
            </div>
        </div>
        `
        break;
        case 14: 
        div.innerHTML = `
        <div class="secondary">
            <div class="title">
                <h1> DDoS </h1>
            </div>
            <div class="text">
                <p class="bold">O que é:</p>
                <p> Negação de serviço, ou DoS (Denial of Service), é uma técnica pela qual um atacante utiliza um computador para tirar de operação um serviço, um computador ou uma rede conectada à Internet. Quando utilizada de forma coordenada e distribuída, ou seja, quando um conjunto de computadores é utilizado no ataque, recebe o nome de negação de serviço distribuído, ou DDoS (Distributed Denial of Service).</p>
                <p> O objetivo destes ataques não é invadir e nem coletar informações, mas sim exaurir recursos e causar indisponibilidades ao alvo. Quando isto ocorre, todas as pessoas que dependem dos recursos afetados são prejudicadas, pois ficam impossibilitadas de acessar ou realizar as operações desejadas.</p>
                <p> Nos casos já registrados de ataques, os alvos ficaram impedidos de oferecer serviços durante o período em que eles ocorreram, mas, ao final, voltaram a operar normalmente, sem que tivesse havido vazamento de informações ou comprometimento de sistemas ou computadores.</p>
                <p> Uma pessoa pode voluntariamente usar ferramentas e fazer com que seu computador seja utilizado em ataques. A grande maioria dos computadores, porém, participa dos ataques sem o conhecimento de seu dono, por estar infectado e fazendo parte de botnets.</p>
                </br>
                <p> Ataques de negação de serviço podem ser realizados por diversos meios, como:</p>
                <ul>
                    <li>&#8658; Pelo envio de grande quantidade de requisições para um serviço, consumindo os recursos necessários ao seu funcionamento (processamento, número de conexões simultâneas, memória e espaço em disco, por exemplo) e impedindo que as requisições dos demais usuários sejam atendidas.</li>
                    <li>&#8658; Pela geração de grande tráfego de dados para uma rede, ocupando toda a banda disponível e tornando indisponível qualquer acesso a computadores ou serviços desta rede.</li>
                    <li>&#8658; Pela exploração de vulnerabilidades existentes em programas, que podem fazer com que um determinado serviço fique inacessível.</li>
                </ul>
                </br>
                <p> Nas situações onde há saturação de recursos, caso um serviço não tenha sido bem dimensionado, ele pode ficar inoperante ao tentar atender as próprias solicitações legítimas. Por exemplo, um site de transmissão dos jogos da Copa de Mundo pode não suportar uma grande quantidade de usuários que queiram assistir aos jogos finais e parar de funcionar.</p>
            </div>
        </div>
        `
        break;
        case 15: 
        div.innerHTML = `
        <div class="secondary">
            <div class="title">
                <h1> Prevenção </h1>
            </div>
            <div class="text">
                <p>O que define as chances de um ataque na Internet ser ou não bem sucedido é o conjunto de medidas preventivas tomadas pelos usuários, desenvolvedores de aplicações e administradores dos computadores, serviços e equipamentos envolvidos.</p>
                </br>                
                <p> A parte que cabe a você, como usuário da Internet, é proteger os seus dados, fazer uso dos mecanismos de proteção disponíveis e manter o seu computador atualizado e livre de códigos maliciosos. Ao fazer isto, você estará contribuindo para a segurança geral da Internet, pois:</p>
                <ul>
                    <li>&#8658; Quanto menor a quantidade de computadores vulneráveis e infectados, menor será a potência das botnets e menos eficazes serão os ataques de negação de serviço.</li>
                    <li>&#8658; Quanto mais consciente dos mecanismos de segurança você estiver, menores serão as chances de sucesso dos atacantes.</li>
                    <li>&#8658; Quanto melhores forem as suas senhas, menores serão as chances de sucesso de ataques de força bruta e, consequentemente, de suas contas serem invadidas.</li>
                    <li>&#8658; Quanto mais os usuários usarem criptografia para proteger os dados armazenados nos computadores ou aqueles transmitidos pela Internet, menores serão as chances de tráfego em texto claro ser interceptado por atacantes.</li>
                    <li>&#8658; Quanto menor a quantidade de vulnerabilidades existentes em seu computador, menores serão as chances de ele ser invadido ou infectado.</li>
                </ul>
                </br>                
                <p> Algumas dicas para evitar ataques na internet:</p>
                <ul>
                    <li>&#8658; Utilizar medidas protetivas nos computadores pessoais.</li>
                    <li>&#8658; Reportar problemas de funcionamento em sites ou aplicações.</li>
                    <li>&#8658; Não informe os dados pessoais caso a página não ofereça conexão segura.</li>
                    <li>&#8658; Configurar corretamente programas e equipamentos de rede.</li>
                    <li>&#8658; Manter softwares e drivers atualizados.</li>
                    <li>&#8658; Utilizar senhas complexas.</li>
                    <li>&#8658; Verificar a confiabilidade de sites, links ou aplicações.</li>
                    <li>&#8658; Agir com calma.</li>
                </ul>
            </div>
        </div>
        `
        break;
        case 16: 
        div.innerHTML = `
        <div class="primary">
            <div class="title-unique">
                <h1> Códigos maliciosos </h1>
            </div>
        </div>
        `
        break;
        case 17: 
        div.innerHTML = `
        <div class="secondary">
            <div class="title">
                <h1> Vírus </h1>
            </div>
            <div class="text">
                <p class="bold">O que é e o que faz??</p>
                </br> 
                <p> Um vírus de computador, assim como um vírus da gripe, tem a habilidade de se replicar e foi desenvolvido para se propagar de um host para outro. Da mesma forma como os vírus não se reproduzem sem uma célula hospedeira, os vírus de computador também não se reproduzem ou se propagam sem programação, como um arquivo ou documento.</p>
                </br> 
                <p> Em termos mais técnicos, um vírus de computador é um tipo de programa ou código malicioso criado para alterar a forma como um computador funciona e desenvolvido para se propagar de um computador para outro. Um vírus atua se inserindo ou se anexando a um programa ou documento legítimo, que tenha suporte para macros, a fim de executar o seu código. Durante esse processo, um vírus pode potencialmente causar efeitos inesperados ou prejudiciais, como danificar o software do sistema, corrompendo ou destruindo os dados.</p>
            </div>
        </div>
        `
        break;
        case 18: 
        div.innerHTML = `
        <div class="secondary">
            <div class="title">
                <h1> Worm </h1>
            </div>
            <div class="text">
                <p class="bold">O que é e o que faz??</p>
                </br> 
                <p> Worm é um programa capaz de se propagar automaticamente por meio de redes de computadores, inclusive a internet. Ele detecta possíveis problemas de segurança nos computadores, e usa isto como ferramenta de invasão.</p>
                </br> 
                <p> Um worm, é semelhante a um vírus, porém com um diferencial, é um programa auto replicante. Enquanto um vírus infecta um programa e necessita deste programa hospedeiro para se propagar, o Worm é um programa completo e não precisa de outro para se propagar. Um Worm pode ser projetado para tomar ações maliciosas após infestar um sistema, além de se auto-replicar, pode deletar arquivos em um sistema ou enviar documentos por e-mail.</p>
            </div>
        </div>
        `
        break;
        case 19: 
        div.innerHTML = `
        <div class="secondary">
            <div class="title">
                <h1> Bot/Botnet </h1>
            </div>
            <div class="text">
                <p class="bold">O que é e o que faz??</p>
                </br> 
                <p> Bot ou também conhecido como Botnet (no caso de uma rede), é um programa que ao invadir um computador torna ele ou a rede invadida sistemas zumbis, podendo ser estes utilizados para atacar outros computadores, redes e sites. Geralmente quando ouvimos falar em ataque DDoS, são estes computadores que estão sendo utilizados para atacar as redes, servidores de DNS ou websites.</p>
                </br> 
                <p> Eles funcionam da seguinte forma:</p>
                <p> Um ataque espalha o worm do bot pela rede na esperança de conseguir invadir a maior quantidade possível de zumbis, depois de atacado, os zumbis ficam à espera de comandos a serem executados, quando o invasor deseja executar algo, ele envia os comandos, então os zumbis passam a processar estas informações por tempo indeterminado. Estes comandos são enviados geralmente por servidores dos invasores, quando finalizado, eles voltam a ficar em espera para os próximos comandos.</p>
            </div>
        </div>
        `
        break;
        case 20: 
        div.innerHTML = `
        <div class="secondary">
            <div class="title">
                <h1> Spyware </h1>
            </div>
            <div class="text">
                <p class="bold">O que é e o que faz??</p>
                </br> 
                <p> Spyware é um software instalado sem que você saiba, seja em um computador tradicional, um aplicativo no navegador da Web ou um aplicativo que reside em seu dispositivo móvel. Ou seja, o spyware transmite suas informações pessoais confidenciais para um invasor. As informações podem ser relatórios sobre suas compras ou seus hábitos de navegação on-line, mas ele também pode ser modificado para registrar pressionamentos de teclas, informações de cartões de crédito, senhas ou credenciais de login.</p>
            </div>
        </div>
        `
        break;
        case 21: 
        div.innerHTML = `
        <div class="secondary">
            <div class="title">
                <h1> Backdoor </h1>
            </div>
            <div class="text">
                <p class="bold">O que é e o que faz??</p>
                </br> 
                <p> Backdoor é a prática usada para que um malware se instale no computador. É um recurso utilizado para garantir o acesso remoto ao sistema ou rede. Ele explora falhas não documentadas em programas, softwares não atualizados, firewalls não seguros. Alguns backdoors podem explorar as vulnerabilidades de navegadores não atualizados, fazendo com que o usuário baixe um arquivo sem perceber.</p>
                </br> 
                <p> Esta prática geralmente está associada a roubo de informações privilegiadas. Este malware permite o retorno do invasor a um computador. Depois de infectado, ele abre portas para que o sistema fique à mercê.</p>
            </div>
        </div>
        `
        break;
        case 22: 
        div.innerHTML = `
        <div class="secondary">
            <div class="title">
                <h1> Trojan Rootkit </h1>
            </div>
            <div class="text">
                <p class="bold">O que é e o que faz??</p>
                </br> 
                <p>Os rootkits visam ocultar determinados objetos ou atividades no seu sistema. Geralmente, o principal objetivo é evitar a detecção desses programas maliciosos, prolongando o período em que são executados em um computador infectado.</p>
            </div>
        </div>
        `
        break;
        case 23: 
        div.innerHTML = `
        <div class="secondary">
            <div class="title">
                <h1> Como me precaver? </h1>
            </div>
            <div class="text"> 
                <p> Agora que você entende o que cada um destes tipos de códigos maliciosos faz, e como podemos ver, a grande maioria utiliza de vulnerabilidades das redes, de softwares, de computadores e até de smartphones, para invadir o seu sistema. Portanto, utilize um antivírus, pago ou grátis e mantenha-o sempre atualizado. Já é uma importante medida a ser tomada. Nunca utilize software desconhecido, não instale programas desnecessários e não acesse links suspeitos. Lembre-se de sempre manter suas coisas importantes em backups atualizados.</p>
            </div>
        </div>
        `
        break;
        case 24: 
        div.innerHTML = `
        <div class="primary">
            <div class="title-unique">
                <h1> Engenharia social </h1>
            </div>
        </div>
        `
        break;
        case 25: 
        div.innerHTML = `
        <div class="secondary">
            <div class="title">
                <h1> Engenharia social </h1>
            </div>
            <div class="text">
                <p class="bold">O que é:</p>
                <p>Engenharia social é uma técnica empregada por criminosos virtuais para induzir usuários desavisados a enviar dados confidenciais, infectar seus computadores com malware ou abrir links para sites infectados.</p>
                </br>
                <p class="bold">Formas de se defender:</p>
                <ul>
                    <li>&#8658; Confira a fonte.</li>
                    <li>&#8658; Desconfie de fontes suspeitas.</li>
                    <li>&#8658; Treinamentos a usuários.</li>
                    <li>&#8658; Não clique em links ou navegue em sites cuja procedência desperte suspeita.</li>
                    <li>&#8658; Não baixe ou abra anexos de fontes suspeitas ou desconhecidas.</li>
                    <li>&#8658; Não confie em pedidos urgentes que incluam dinheiro ou informações confidenciais.</li>
                </ul>
            </div>
        </div>
        `
        break;
    }
}