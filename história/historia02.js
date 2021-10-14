// var classe = prompt(`Escolha sua classe:`)
// var nome = prompt("Digite o nome do seu robo: ");

var nome = prompt("Digite  o nome para o robo: ");
var elemento = document.getElementById('conteudo1');
var classe;
var telaAtual = document.querySelector("#telaApresenta");

function mudarTela(){
    telaAtual.addEventListener("click", function() {
        window.scrollTo(0, 0);
    });
    telaAtual.remove();
}

function proximaTela(conteudo1){
    elemento.innerHTML = conteudo1;
    window.scrollTo(0, 0);
}

function recarregar(){
    window.scrollTo(0, 0);
    location.reload();
}

var conteudoA =         

"<p>Após o acordar em uma cidade deserta chamada Kardor que fica no centro da terra e é flutuante, quase sem batéria e seu livro ao seu lado, a única lembrança que restou de seu hd, é que as criaturas misteriosas mataram todos os ciêntistas e que precisa achar seu fantasma. Antes dos ciêntistas morrerem, um ciêntista em si, conseguiu deixar você("+nome+") escondido na cidade de Kardor, programado para acordar depois de 5 dias após a morte dos ciêntistas, porém o ciêntista esqueceu de levar junto com o robo o fantasma dele, e então o fantasma está junto com o único ciêntista sobrevivente.</p>"+

"<p> Sem saber o que fazer, o robo se levanta e começa a procura de como ele vai achar seu fantasma para recarregar sua bateria,andando pela cidade perdida Kandor, o robo se depara com o uma criatura misteriosa atacando um humano.</p>"+

"<p> O robo caminha em direção a criatura, chamando a atenção dela, e tentar usar sua magia, porém ele percebe que não pode usar magia porque está com a bateria muito baixa, a criatura parte para cima do robo e acaba pulando em cima dele, quebrando algumas peças, o "+nome+" empurra a criatura e acaba golpenado ela, jogando ela para longe, a criatura se levanta e corre em direção do robo, o robo olha para o lado e acha uma adaga no chão, ele pega e joga em direção a criatura, acertando a cabeça dela e a matando de uma vez por todas.</p>"+

"<p> O humano agradece mas fica meio assutado com o robo, porém o robo explica que está lá para ajudar os humanos e matar todas as criaturas, o humano agradece mais uma vez, e explica para o robo que sua família foi morta por eles,e o humano pergunta se você pode ajuda-lo.</p>"+

"<img src='imagens/arcanoarcodando.jpg'>"+


"<p>Escolha: <br>A)Ajudar o humano e levar ele com você para achar o fantasma. <br>B) Dizer que não pode ajudar, e deixar ele onde está.</p>"+

"<div class='row' >"+

    "<div class='col-sm d-flex justify-content-center'>"+

        "<button class='btn btn-danger' onclick='proximaTela(escolhaA)'>A</button>"+

    "</div>"+

    "<div class='col-sm d-flex justify-content-center'>"+

        "<button class='btn btn-danger' onclick='proximaTela(escolhaB)'>B</button>"+

    "</div>"+

"</div>"

var escolhaA = 
"<p>Você e o humano acabam indo a procura do fantasma perdido, no caminho vocês encontram um predio tecnológico abandonado e decidam entrar para ver se acham alguma coisa.</p>"+

"<p> Após entrarem o robo acha algumas peças tecnológicas perdidas, e pede ajuda do humano para consertar algumas peças, que acabou sendo quebradas durante a batalha.</p>"+

"<p>O humano começa a ajudar você e de repente vocês escutam um barulho estranho, vindo do segundo andar do prédio, vocês vão na direção do barulho, e a cada passo, o barulho fica mais alto. </p>"+

"<p> Vocês se deparam com outra criatura batendo em uma porta, como se tivesse alguém lá dentro, o próprio humano consegue tomar lança que está com você, e lança na direção da criatura, porém, por falta mira acaba errando o alvo e chamando a atenção dela.</p>"+

"<p> Você parte para cima da critura e começa a golpear, porém como está com pouco bateria, acaba sendo derrubado e não consegue reagir, quando o humano, pega a adaga e enfia na cabeça da criatura, salvando você e matando ela.</p>"+
"<p>Você agradece o humano e vocês vão na direção da porta que a criatura estava batendo, vocês abrem e acabam se deparando com mais um humano você pergunta se o humano está bem e se precisa de ajuda, o humano ao olhar para você diz</p>"+
"<p>-É você mesmo quem eu procuro. <br> O robo fica meio confuso, e então o humano explica que ele é um ciêntista e com a ajuda de seus colegas de trabalho, criaram você e seu fantasma para proteger a terra dessas criaturas.</p>"+
"<p> O robo começa a falar, porém o sistema dele começa a travar devido a falta de bateria. <br> O humano e o ciêntista começam a procurar o fantasma desesperadamente para conseguir carregar o robo, o ciêntista consegue lembrar onde o fantasma está e consegue ativar o fantasma, sendo assim o fantasma vai até o robo e consegue recarregar o robo. <br> Depois de alguns minutos, o fantasma consegue carregar a bateria inteira do robo, e o próprio fantasma avisa que você recebeu uma mensagem anônima falando que você precisa encontrar os outros robos para se juntar a eles e as cordenadas que leva até o sul. <br> E o ciêntista diz <br>-Acho que a única maneira de acabar com a ameaça é se juntando aos outros robos. <br>O humano decide ficar e ajudar o ciêntista. <br> E o "+nome+" parti em direçao ao sul para encontrar novos aliados, chegando nas cordenadas, a única coisa que ele vê é uma parede, e quando ele decide tocar a parede, percebe que a parede é uma ilusão, e que ele pode atravesar ela. <br> Ao atravaessar a parede ele encontra outro robo.</p>"+

"<img src='imagens/arcanodecosta.jpg'>"+

"<p>A)Ir encontrar os outros robos</p>"+

"<div class='row' >"+

    "<div class='col-sm d-flex justify-content-center'>"+

        "<button class='btn btn-danger' onclick='proximaTela(encontrarRobos)'>A</button>"+

    "</div>"+

"</div>"

var escolhaB = 
"<p> Você acaba partindo sem o humano, e volta a procurar seu fantasma, você acaba escutando barulhos vindo de um túnel próximo e acaba se escondendo.Sai muitas criaturas do túnel e você acaba vendo o humano que você ajudou a morrer, você espera eles passar e tenta se levantar, mas não consegue se levantar porque está com a bateria baixa e você acaba ficando 'preso', tendo que esperar alguém.</p>"+

"<p> Por coincidência o ciêntista que deixou você, volta para tentar achar você mas ele não consegue te achar e muitas criaturas vão em direação a ele para mata-lo, sendo assim, antes do ciêntista morrer, ele consegue soltar o seu fantasma e ativa-lo, sendo assim como ele é seu fantasma, ele consegue te localizar em qualquer lugar que você esteja.</p>"+

"<p> Por sorte, o fantasma chega até você a tempo e começa a te carrega, poucos minutos depois, você e o fantasma antes de sairem, começam a aperfeiçoar a lança na qual usou para matar a criatura, deixando sua adaga com magia suficiente para matar qualquer criatura com apenas um corte.Eles começam andar pela cidade e encontra algumas criaturas e chama a atenção delas, todas as criaturas vão em sua direção, mas você com suas magias consegue desenvolver uma magia chamada NOVA BOMB, são alguns dardos explosivos, desintegrando quem for atingido na explosão.A batalha começa e você até que consegue se dar bem, porém percebe que são muitos deles.</p>"+

"<img src='imagens/batalha.jpg'>"+

"<p>A)Continuar a batalha <br> B)Fugir para tentar encontrar outros aliados para ajudar</p>"+

"<div class='row' >"+

    "<div class='col-sm d-flex justify-content-center'>"+

        "<button class='btn btn-danger' onclick='proximaTela(fim)'>A</button>"+

    "</div>"+
    "<div class='col-sm d-flex justify-content-center'>"+

        "<button class='btn btn-danger' onclick='proximaTela(encontrarRobos)'>B</button>"+

    "</div>"+

"</div>"

var encontrarRobos=
"<p>Os dois robos recém conhecidos conversam sobre o motivo de estarem ali. Nesse momento a gravação de um olograma de um humano, aparentemente um cientista, inicia na frente deles.</p>"+

"<p> A gravação explica o porquê das criatura terem vindo para terra e também informações sobre seus pontos fracos. O olograma também fala sobre uma criatura que detém o comando de todas as outras e fala que o objetivo de ter programado esse sinal era para juntar robos guerreiros para destruir essa criatura mãe, o qual ele apelida de Lord Nito.</p>"+

"<p>Depois de ouvirema gravação, eles decidem:</p>"+
"<img src='imagens/des.jpg'>"+

"<p>A)Explorar o local <br> B) Caçar o lord nito (pula a opção 1)</p>"+

"<div class='row' >"+

    "<div class='col-sm d-flex justify-content-center'>"+

        "<button class='btn btn-danger' onclick='proximaTela(explorarLocal)'>A</button>"+

    "</div>"+

    "<div class='col-sm d-flex justify-content-center'>"+

    "<button class='btn btn-danger' onclick='proximaTela(atacar)'>B</button>"+

"</div>"+

"</div>"

var explorarLocal =
"<p>Os 2 heróis vão atrás de Nito, e depois de pegarem vários equipamentos ficam prontos para mata-lo. Logo após lutarem contra vários lacaios do Nito eles chegam ao Nito.</p>"+

"<p> Depois de o matarem descobrem que não havia apenas uma forma, e Nito se multiplica após morrer e fica mais poderoso e vai para cima do (Samurai) e o (Arcano)....., tudo parecia perdido, eles não tinham mais equipamentos sólidos para matar Nito, eles se sentem em desvatagem, quando tudo parecia perdido....., DAS CINZAS, SURGE UM TIRO QUE ATRAVESSA OS HERÓIS. Mata um dos lacaios infernais de Nito e ele suga energia Arcana dos Lacaios Infernais, os 2 heróis ficam aterrorizados com o tamanho poder do pistoleiro, que ao passar perto do (Arcano) suga um pouco de energia dele, porém não suficiente para machuca-lo. O pistoleiro totalmente frio segue em direção aos Lacaios Infernais do Nito, os Lacaios vão para cima do Pistoleiro, e assim os heróis fogem de lá salvando o mundo, porém o pistoleiro em um ato de heroismo o Pistoleiro luta até sua ultima munição e fica fraco. Após cair no chão ele atira em um barril que ve ao longe e explode toda construção a sua volta, os heróis vem de longe e simplesmente não compreendem o que aconteceu. Mas a paz foi restaurada, pelo menos por enquanto... Até mais heróis....</p>"+

"<img src='imagens/destiny-2-forsaken.jpg'>"+

"<h2>FIM DA HISTÓRIA</h2>"+

"<div class='row' >"+

    "<div class='col-sm d-flex justify-content-center'>"+

        "<button class='btn btn-danger' onclick='recarregar()'>Jogar novamente</button>"+

    "</div>"+

"</div>";

var atacar =
"<p>Os 2 heróis sem preparo algum vão para cima de Nito, sem saber o que esperar eles lutam contra os lacaios de Nito, matam vários dos lacaios porém ficam cansados, com o Samurai tendo sua espada nada afiada e o Arcano ficando totalmente sem Mana, eles tentam lutar mais e mais...., a dificuldade se torna algo normal e ficam fracos, não sequer chegam perto de Nito..., os 2 estão fracos, sem equipamento, sem direcionamento, e quando se pensa que nada poderia ser pior, Samurai vira a cabeça para olhar o Arcano o Arcano leva um tiro na cabeça vindo de longe, muito óleo e peças são esparramadas pelo chão, o Samurai fica assustado e irritado, e num ultimo ato de luta ele se levanta e vai pra cima da criatura que atirou no Arcano, ja fraco o Samurai ve um pistoleiro ao longe, com rosto frio e confiança, o Samurai corre em direção a ele, sua espada corta o ar...., e o Pistoleiro mantém a pistola na cabeça do Samurai....., de repente o Samurai se contorce e uma energia negra sai do corpo dele assim desfalecendo na frente do Pistoleiro, sem entender ele olha para trás e ve o arcano de pé de novo...., porém dessa vez totalmente diferente, com olhos vermelhos e com uma energia vermelha a sua volta ele vai para cima do Pistoleiro que atira novamente em sua cabeça. O Arcano segura o tiro no ar e joga de volta contra o Pistoleiro, o Pistoleiro desvia mas percebe que o Arcano está sendo controlado por Nito, e assim o Pistoleiro atira em Nito que faz o Arcano entrar na frente e receber a bala, o Arcano cai novamente, o Pistoleiro da um sorriso de canto e vai caminhando para cima de Nito, porém o Pistoleiro sente uma dor no Peito e é quando ele percebe que uma espada está atravessada em seu peito, o Pistoleiro fica de joelhos e começa a sangrar...., após a morte de todos eles se tornam lacaios Infernais de Nito e agora disseminam o caos por onde passam, será que não haverá heróis para dete-los?......Até o fim do mundo acontecer, talvez nós descobriremos....Até mais senhorita morte...</p>"+

"<img src='imagens/final-final.png'>"+

"<h2>FIM DA HISTÓRIA</h2>"+
"<div class='row' >"+

    "<div class='col-sm d-flex justify-content-center'>"+

        "<button class='btn btn-danger' onclick='recarregar()'>Jogar novamente</button>"+

    "</div>"+

"</div>";


var fim = 
"<p>Você e seu fantasma continuam na batalha, matando todos que conseguem, mas pouco tempo depois, você acaba se destraindo e seu fantasma morre, você até tenta ajudar, mas percebe que já é tarde, você até tenta fica na batalha, mas você não resiste e acaba sendo atingido por uma criatura, e então sem ter o que fazer, todas as criaturas pulam em cima de você e te matam, sendo assim o seu fim..</p>"+

"<img src='imagens/fim.png'>"+

"<p>FIM DA HISTÓRIA</p>"+

"<div class='row' >"+

    "<div class='col-sm d-flex justify-content-center'>"+

        "<button class='btn btn-danger' onclick='recarregar()'>Jogar novamente</button>"+

    "</div>"+

"</div>";


var argumentoA =         

"<p>Uma maquina com aspectos humanos se levanta em modo low batery sem se lembrar do que havia acontecido ele caminha por uma cidade completamente destruida enquanto seu sistema que aparenta estar iniciando é carregado. Rapidamente, ele percebe que tem poucos minutos para se recarregar antes de ser desligado definitivamente. Em sua frente ele encontra um carro aparentemente quebrado, a seu lado vê um prédio comercial e atrás dele vê outro robo parecido com ele mas com a cabeça esmagada. Então ele decide rapidamente:</p>"+


"<img src='imagens-samurai/templo.jpg'>"+


"<p>Escolha: <br>A) Averiguar o robo <br>B) Averiguar o carro <br>B) Averiguar o prédio</p>"+


"<div class='row'>"+

    "<div class='col-sm d-flex justify-content-center'>"+

        "<button class='btn btn-danger' onclick='proximaTela(e1)'>A</button>"+

    "</div>"+

    "<div class='col-sm d-flex justify-content-center'>"+

        "<button class='btn btn-danger' onclick='proximaTela(e2)'>B</button>"+

    "</div>"+

    "<div class='col-sm d-flex justify-content-center'>"+

        "<button class='btn btn-danger' onclick='proximaTela(e3)'>C</button>"+

    "</div>"+

    

"</div>"









var e1 = 

"<p> O robo caido sofreu um dano fisico muito alto, não tem mais volta. Porém sua bateria está intacita pensando nisso o robo tira a bateria dele e encaixa no slote reserva de seu corpo. <br> Anteriormente, ele estava operando com apenas 1/4 do seu sistema e hardware, no momento que conectou a bateria que incrivelmente estava completamente carregada, nesse momento seu sistema volta a funcioar em 100% e então ele acessa um HD que contém os arquivos doque havia acontecido, assim ele lembra que era um robo de combate especial e estava defendendo a capital de  kong hong de um ataque  devastador de Anor londo, nesse momento uma sombra passa  rapidamente em direção a um beco, então ele decide ir averiguar e vê que era apenas um menino, então ele:</p>"+


"<img src='imagens-Samurai/beco.jpg'>"+


"<p>Escolha: <br>A) Ataca o garoto <br>B) Conversar com o garoto <br>B) Ignorar o garoto</p>"+


"<div class='row' >"+

    "<div class='col-sm d-flex justify-content-center'>"+

        "<button class='btn btn-danger' onclick='proximaTela(e1A)'>A</button>"+

    "</div>"+

    "<div class='col-sm d-flex justify-content-center'>"+

        "<button class='btn btn-danger' onclick='proximaTela(e1_B_C)'>B</button>"+

    "</div>"+

    "<div class='col-sm d-flex justify-content-center'>"+

        "<button class='btn btn-danger' onclick='proximaTela(e1_B_C)'>C</button>"+

"   </div>"+

    
"</div>"

var e1A = 

"<p>" + nome + " ameaça atacar o garoto e ele com medo corre na direção contraria ao robo. O garoto topa de cara com seu robo sonda  que avista o "+nome+" de longe e define ele como ameaça a seu dono, sendo assim efetua um disparo de energia que sobrecarrega os  sistemas do robo o matando.</p>"+


"<img src='imagens-Samurai/sefudeu.png'>"+


"<p>Começar de novo?</p>"+


"<div class='row' >"+

    "<div class='col-sm d-flex justify-content-center'>"+

        "<button class='btn btn-danger' onclick='recarregar()'>Sim</button>"+

    "</div>"+

    "<div class='col-sm d-flex justify-content-center'>"+

        "<button class='btn btn-danger' onclick='window.close()'>Não</button>"+

    "</div>"+
    
"</div>"

// Pois B e C levama ao mesmo desfecho
var e1_B_C = 

"<p>Conversando com o garoto, ele explica que é um mebro da familia real de KG (kong hong) e que está a procura  de um robo soldado para uma missão que seu robo sonda recebeu a pouco tempo. O garoto explica também o motivo do ataque de arno anor londo, que na verdade  anor londo nunca tinha atacado new londo e sim enviado ajuda contra os destruidores. "+ nome +", fica confuso quanto aos destruidpres, mas lembra vagamente de criatura estranhas atacando a cidade. Nesse momento uma criatura que parece um gato mas 10x maior e com presas enormes atacam o grupo. " + nome +" decide:</p>"+


"<img src='imagens-Samurai/gatomonstro.jpg'>"+


"<p>Escolha: <br>A) Atacar a criatura <br>B) Fugir</p>"+


"<div class='row' >"+

    "<div class='col-sm d-flex justify-content-center'>"+

        "<button class='btn btn-danger' onclick='proximaTela(e1_B_C_e1)'>A</button>"+

    "</div>"+

    "<div class='col-sm d-flex justify-content-center'>"+

        "<button class='btn btn-danger' onclick='proximaTela(e1_B_C_e2)'>B</button>"+

    "</div>"+
    
"</div>"


//encontro

var e1_B_C_e1 = 

"<p>O grupo trava uma batalha muito dificil contra a criatura, no meio da luta a criança é acertado pelas garras enormes do gato gigante."+ 
"" + nome + "vendo aquilo entra em desespero e ativa sua função morte subita, que usa muita enegia em troca de uma técnica muito forte. "+
"O robo sonda consegue acertar um tiro artodoador na fera dando uma bracha para o " + nome + "cortar facilmente a cabeça da fera."+
"Porém quando morte subta está ativada, infelizmente " + nome + "n está no controle e sim uma IA secundária, e infelizmente ele acaba executando também"+
"o robo sonda do garoto."+
"Após matar o robo sonda, o tempo de execução da morte subita é esgotado e " + nome + "recupera sua conciencia. Ele escuta uma voz ecoando baixo"+ 
"entre seus receptores de audio e percebe que o garoto ainda está vivo. Conversando com ele, " + nome + "percebe que o garoto não tinha muito tempo, então o" +
"garoto já quase sem forças faz umm pedido ao robo. Ele diz: - Meu nome é  Kuro, membro do clâ  Hirata. Preciso que siga essas coordenadas... Então o garoto"+
"perde sua conciencia. " + nome + "lembra que sua divisão tinha a função especifica de proteger o clâ Hirata e fica despontado, mas cumpre o que o ultimo membro da"+ 
"linhagem a qual devia proteger pediu, Vai em direção ao sul seguindo as coordenadas.</P>"+


"<img src='imagens-Samurai/samurairobo.jpg'>"+


"<div class='row' >"+

    "<div class='col-sm d-flex justify-content-center'>"+

        "<button class='btn btn-danger' onclick='proximaTela(encontrarRobos)'>Continuar</button>"+

    "</div>"+

"</div>"


var e1_B_C_e2 = 

"<p>O A fera pula em cima do robo a corta sua cabeça</P>"+


"<img src='imagens-Samurai/sefudeu.png'>"+

"<p>Começar de novo?</p>"+


"<div class='row' >"+

    "<div class='col-sm d-flex justify-content-center'>"+

        "<button class='btn btn-danger' onclick='recarregar()'>Sim</button>"+

    "</div>"+

    "<div class='col-sm d-flex justify-content-center'>"+

        "<button class='btn btn-danger' onclick='window.close()'>Não</button>"+

    "</div>"+


"</div>"














var e2 = 

"<p>O carro n tinha nenhuma fonte de enrgia capaz de recarregar o robo, então ele é totalmente descarregado.</p>"+


"<img src='imagens-Samurai/sefudeu.png'>"+


"<p>Começar de novo?</p>"+


"<div class='row' >"+

    "<div class='col-sm d-flex justify-content-center'>"+

        "<button class='btn btn-danger' onclick='recarregar()'>Sim</button>"+

    "</div>"+

    "<div class='col-sm d-flex justify-content-center'>"+

        "<button class='btn btn-danger' onclick='window.close()'>Não</button>"+

    "</div>"+


"</div>"

















var e3 = 

"<p>	Ele decide entrar no prédio, entrando, apesar de ser um robo, fica assustado com a imagem. Várias crianças assassinadas brutalmente estão nesse prédio. O robo recebe um aviso de seu sistema dizendo que tem 1min restante de bateria então ele começa desesperadamente a encontrar uma estação de recarga pelo prédio. Até consegue achar uma, mas faltando"+ 
"apenas algun passos o robo cai e seu sistema desliga."+

	
	"O robo acorda novamente com um garoto em sua frente, ele ve na roupa do garoto um simbolo, por algum motivo o robo estava totalmente"+
"recarregado, e buscando no banco de dados dele, viu que aquele simbolo, pertencia a familia real de kong hong provincia de new londo. Nesse momento entra um robo sonda no prédio, então o" + nome + "decide:"+


"<img src='imagens-Samurai/drope.jpg'>"+


"<p>Escolha: <br>A) Atacar a sonda <br>B) Tentar se esconder </p>"+


"<div class='row' >"+

    "<div class='col-sm d-flex justify-content-center'>"+

        "<button class='btn btn-danger' onclick='proximaTela(e3_A)'>A</button>"+

    "</div>"+

    "<div class='col-sm d-flex justify-content-center'>"+

        "<button class='btn btn-danger' onclick='proximaTela(e3_B)'>B</button>"+

    "</div>"+
    
"</div>"



var e3_A = "<p>A sonda era do garoto e ao perceber a postura de ataque do robo, efetua um disparo que sobrecarrega todos sistemas do robo, o matando.</p>"+


"<img src='imagens-Samurai/sefudeu.png'>"+


"<p>Começar de novo?</p>"+


"<div class='row' >"+

    "<div class='col-sm d-flex justify-content-center'>"+

        "<button class='btn btn-danger' onclick='recarregar()'>Sim</button>"+

    "</div>"+

    "<div class='col-sm d-flex justify-content-center'>"+

        "<button class='btn btn-danger' onclick='window.close()'>Não</button>"+

    "</div>"+


"</div>"


var e3_B = 

"<p>O garoto acha engraçado e diz ao robo que a sonda servia a ele. Robo então levanta e xinga a sonda com códigos"+ 
"binários, para que seu mestre n entendesse. A sonda fica brava e ameaça dar um tiro no robo, mas o garoto interfere"+
"e lembra a sonda quem realmente é o robo a sua frente. O robo fica confuso, pois lembra que era apenas um soldado"+
"mas por conta de um circuito estar afetado ele n lembrava que pertecia a uma eqipe de robos unicos destinadas a proteger"+
"o clã da crinaça. A criança fala seu nome a ele e explica tudo o que aocnteceu. Nesse momento um código encripítado é "+
"enviado aos sistemas do "+ nome +", o código dizia: - Precisamos da sua ajuda, encontrenos nas coordenadas: -23.528099737599383, -46.69185079298419."+

"O robo sonda do menino já havia recebido essa mensagem antes, mas decidiu ficar com o menino e ajudar a recuperar oque sobrou do clã Hirata."+
"A sonda conta ao menino o que está acontecendo e então o garoto diz: Meu nome é Kuro, o unico sobrevivento do ataque dessas criaturas estranhas"+
"a escolha é sua, voce pode ir averiguar esse local ou me ajudar a reabilitar meu clã, então como vai ser?</p>"+


"<img src='imagens-Samurai/analise.jpg'>"+


"<p>Escolha: <br>A) Ficar com kuro <br>B) Ir ao local desconhecido</p>"+


"<div class='row' >"+

    "<div class='col-sm d-flex justify-content-center'>"+

        "<button class='btn btn-danger' onclick='proximaTela(e3_B_A)'>A</button>"+

    "</div>"+

    "<div class='col-sm d-flex justify-content-center'>"+

        "<button class='btn btn-danger' onclick='proximaTela(e3_B_B)'>B</button>"+

    "</div>"+
    
"</div>"



var e3_B_A = 

"<p>Conversando com o garoto, ele explica que é um mebro da familia real de KG (kong hong) e que está a procura  de um robo soldado para uma missão que seu robo sonda recebeu a pouco tempo. O garoto explica também o motivo do ataque de arno anor londo, que na verdade  anor londo nunca tinha atacado new londo e sim enviado ajuda contra os destruidores." + nome + ", fica confuso quanto aos destruidpres, mas lembra vagamente de criatura estranhas atacando a cidade. Nesse momento uma criatura que parece um gato mas 10x maior e com presas enormes atacam o grupo. " + nome +" decide:</p>"+


"<img src='imagens-Samurai/gatomonstro.jpg'>"+


"<p>Escolha: <br>A) Atacar a criatura <br>B) Fugir</p>"+


"<div class='row' >"+

    "<div class='col-sm d-flex justify-content-center'>"+

        "<button class='btn btn-danger' onclick='proximaTela(e1_B_C_e1)'>A</button>"+

    "</div>"+

    "<div class='col-sm d-flex justify-content-center'>"+

        "<button class='btn btn-danger' onclick='proximaTela(e1_B_C_e2)'>B</button>"+

    "</div>"+
    
"</div>"



//encontro

var e1_B_C_e1 = 

"<p>O grupo trava uma batalha muito dificil contra a criatura, no meio da luta a criança é acertado pelas garras enormes do gato gigante."+ 
"" + nome + "vendo aquilo entra em desespero e ativa sua função morte subita, que usa muita enegia em troca de uma técnica muito forte. "+
"O robo sonda consegue acertar um tiro artodoador na fera dando uma bracha para o " + nome + "cortar facilmente a cabeça da fera."+
"Porém quando morte subta está ativada, infelizmente " + nome + "n está no controle e sim uma IA secundária, e infelizmente ele acaba executando também"+
"o robo sonda do garoto."+
"Após matar o robo sonda, o tempo de execução da morte subita é esgotado e " + nome + "recupera sua conciencia. Ele escuta uma voz ecoando baixo"+ 
"entre seus receptores de audio e percebe que o garoto ainda está vivo. Conversando com ele, " + nome + "percebe que o garoto não tinha muito tempo, então o" +
"garoto já quase sem forças faz umm pedido ao robo. Ele diz: - Meu nome é  Kuro, membro do clâ  Hirata. Preciso que siga essas coordenadas... Então o garoto"+
"perde sua conciencia. " + nome + "lembra que sua divisão tinha a função especifica de proteger o clâ Hirata e fica despontado, mas cumpre o que o ultimo membro da"+ 
"linhagem a qual devia proteger pediu, Vai em direção ao sul seguindo as coordenadas.</P>"+


"<img src='imagens-Samurai/samurairobo.jpg'>"+


"<div class='row' >"+

    "<div class='col-sm d-flex justify-content-center'>"+

        "<button class='btn btn-danger' onclick='prximaTela(encontrarRobos)'>Continuar</button>"+

    "</div>"+

"</div>"


var e1_B_C_e2 = 

"<p>O A fera pula em cima do robo a corta sua cabeça</P>"+


"<img src='imagens-Samurai/sefudeu.png'>"+

"<p>Começar de novo?</p>"+


"<div class='row' >"+

    "<div class='col-sm d-flex justify-content-center'>"+

        "<button class='btn btn-danger' onclick='recarregar()'>Sim</button>"+

    "</div>"+

    "<div class='col-sm d-flex justify-content-center'>"+

        "<button class='btn btn-danger' onclick='window.close()'>Não</button>"+

    "</div>"+


"</div>"







// encontro

var e3_B_B = 

"<p>"+ nome +" não ve sentido em recuperar um clâ que já está morto, então decide ir embora. Nunca mais vendo Kuro e seu robo sonda.</p>"+


"<img src='imagens-Samurai/chau.jpg'>"+



"<div class='row' >"+

    "<div class='col-sm d-flex justify-content-center'>"+

        "<button class='btn btn-danger' onclick='proximaTela(encontrarRobos)'>Continuar</button>"+

    "</div>"+
    
"</div>"