import { RawRecipeInput } from '../recipe_helper';

export function getFullDessertsList(): RawRecipeInput[] {
  const items: { title: string; sub: string; diff: 'easy' | 'medium' | 'hard'; prep: number; cook: number; cal: number; p: number; c: number; fib: number; f: number; prem: boolean; tags: string[]; tip: string; ings: [string, number, string, any][]; steps: [string, string, number | null][] }[] = [
    // 1-12: Chocolate (12)
    {
      title: 'Torta Ganache Intensa de Chocolate 85% com Base de Nozes Pecã',
      sub: 'chocolate', diff: 'medium', prep: 20, cook: 10, cal: 380, p: 7, c: 6, fib: 4, f: 38, prem: true,
      tags: ['chocolate', 'ganache', 'pecã', 'sobremesa_nobre', 'sem_açúcar'],
      tip: 'Aqueça o creme de leite sem ferver e verta sobre o chocolate picado, descansando 2 minutos antes de emulsionar.',
      ings: [['Chocolate amargo 85% cacau picado fino', 250, 'g', 'despensa'], ['Creme de leite fresco sem açúcar', 200, 'ml', 'laticínios'], ['Nozes pecã trituradas para a base', 150, 'g', 'despensa'], ['Manteiga derretida', 40, 'g', 'laticínios'], ['Eritritol ou estévia natural', 30, 'g', 'despensa'], ['Extrato de baunilha pura', 1, 'colher de chá', 'temperos']],
      steps: [['Base crocante', 'Misture as nozes trituradas com a manteiga derretida e forre o fundo da forma de fundo removível.', 300], ['Fazer ganache', 'Verta o creme de leite quente sobre o chocolate e mexa até obter brilho espelhado.', 240], ['Gelar', 'Despeje sobre a base e refrigere por 3 horas até firmar.', 10800]]
    },
    {
      title: 'Trufas Nobres de Cacau Belga com Recheio Cremoso de Avelã',
      sub: 'chocolate', diff: 'easy', prep: 15, cook: 5, cal: 190, p: 4, c: 3, fib: 2, f: 19, prem: false,
      tags: ['trufas', 'cacau_belga', 'avelã', 'bombom_keto'],
      tip: 'Mantenha as mãos frias ao enrolar as trufas para não derreter a manteiga de cacau.',
      ings: [['Chocolate 70% a 85% cacau derretido', 180, 'g', 'despensa'], ['Pasta pura de avelã sem açúcar', 80, 'g', 'despensa'], ['Creme de leite fresco', 80, 'ml', 'laticínios'], ['Cacau em pó 100% alcalino para envolver', 40, 'g', 'despensa']],
      steps: [['Emulsionar ganache', 'Misture o chocolate derretido com o creme e a pasta de avelã.', 180], ['Friccionar e gelar', 'Leve à geladeira por 60 minutos até moldar.', 3600], ['Bolear e passar no cacau', 'Forme bolinhas e passe no cacau em pó 100%.', 300]]
    },
    {
      title: 'Brownie Cetogênico Fudgy Molhadinho com Castanhas e Pedaços de Cacau',
      sub: 'chocolate', diff: 'easy', prep: 12, cook: 20, cal: 290, p: 8, c: 5, fib: 3, f: 28, prem: false,
      tags: ['brownie', 'fudgy', 'castanhas', 'cacau', 'favorito'],
      tip: 'Não asse demais: o centro deve sair levemente úmido no palito para manter a textura densa.',
      ings: [['Farinha de amêndoas fina', 100, 'g', 'despensa'], ['Chocolate 80% derretido com manteiga', 150, 'g', 'despensa'], ['Ovos caipiras batidos', 3, 'unidades', 'proteínas'], ['Eritritol culinário', 60, 'g', 'despensa'], ['Castanhas picadas', 50, 'g', 'despensa']],
      steps: [['Bater ovos com adoçante', 'Bata os ovos com o eritritol até espumar.', 180], ['Juntar chocolate derretido', 'Incorpore o chocolate com a manteiga e farinha de amêndoas.', 180], ['Assar no forno', 'Asse a 180°C por 18 minutos.', 1080]]
    },
    {
      title: 'Fondue Cetogênico de Chocolate Suíço com Morangos Frescos e Nozes',
      sub: 'chocolate', diff: 'easy', prep: 8, cook: 6, cal: 320, p: 6, c: 6, fib: 3, f: 31, prem: true,
      tags: ['fondue', 'chocolate', 'morangos', 'romântico', 'inverno'],
      tip: 'Mantenha a chama bem baixa para o chocolate não queimar no fundo da panelinha.',
      ings: [['Chocolate amargo 80%', 200, 'g', 'despensa'], ['Creme de leite fresco', 150, 'ml', 'laticínios'], ['Morangos frescos higienizados e secos', 150, 'g', 'vegetais'], ['Nozes e lascas de coco', 50, 'g', 'despensa']],
      steps: [['Derreter em banho-maria', 'Derreta o chocolate com o creme de leite em fogo brando.', 300], ['Servir na chama', 'Transfira para o réchaud de fondue.', 60], ['Mergulhar frutas', 'Espete os morangos e nozes no chocolate quente.', null]]
    },
    {
      title: 'Petit Gâteau Cetogênico com Recheio Cremoso Escorrendo',
      sub: 'chocolate', diff: 'hard', prep: 10, cook: 8, cal: 340, p: 9, c: 5, fib: 3, f: 33, prem: true,
      tags: ['petit_gateau', 'escorrendo', 'alta_confeitaria', 'restaurante'],
      tip: 'O tempo de forno é cirúrgico: exatamente 8 minutos em forno alto a 210°C.',
      ings: [['Chocolate 85% nobre', 100, 'g', 'despensa'], ['Manteiga sem sal', 60, 'g', 'laticínios'], ['Gemas e ovos caipiras', 3, 'unidades', 'proteínas'], ['Eritritol ou xilitol', 35, 'g', 'despensa'], ['Farinha de amêndoas', 20, 'g', 'despensa']],
      steps: [['Derreter manteiga e cacau', 'Funda a manteiga com o chocolate.', 180], ['Bater ovos', 'Bata os ovos com o adoçante e junte à mistura delicadamente com a farinha.', 180], ['Forno alto', 'Asse em forminhas untadas com cacau a 210°C por 7 a 8 minutos.', 480]]
    },
    {
      title: 'Bombons Crocantes de Chocolate Amargo Recheados com Pasta de Amendoim',
      sub: 'chocolate', diff: 'easy', prep: 10, cook: 5, cal: 210, p: 6, c: 3, fib: 2, f: 20, prem: false,
      tags: ['bombom', 'amendoim', 'reese_keto', 'petisco_doce'],
      tip: 'Passe uma camada de chocolate na forminha de silicone, congele por 5 min e coloque a pasta.',
      ings: [['Chocolate amargo 70%+ sem açúcar', 150, 'g', 'despensa'], ['Pasta de amendoim pura integral cremosa', 100, 'g', 'despensa'], ['Flor de sal da Guérande', 1, 'pitada', 'temperos'], ['Óleo de coco para fluidez', 15, 'ml', 'despensa']],
      steps: [['Casquinha', 'Pincele chocolate na forminha e leve ao freezer.', 300], ['Recheio', 'Coloque a pasta de amendoim com uma pitada de flor de sal.', 120], ['Fechar com chocolate', 'Cubra com o restante do chocolate e congele por 15 minutos.', 900]]
    },
    {
      title: 'Cascas de Laranja Cristalizadas Cetogênicas Banhadas no Chocolate 85%',
      sub: 'chocolate', diff: 'medium', prep: 20, cook: 30, cal: 170, p: 3, c: 5, fib: 3, f: 16, prem: false,
      tags: ['laranja_com_chocolate', 'elegante', 'chá_da_tarde'],
      tip: 'Ferva as cascas de laranja em água três vezes para retirar todo o amargor antes de cozinhar no eritritol.',
      ings: [['Cascas grossas de laranja cortadas em tiras finas', 3, 'unidades', 'vegetais'], ['Eritritol para a calda', 100, 'g', 'despensa'], ['Chocolate 85% temperado derretido', 150, 'g', 'despensa']],
      steps: [['Tirar amargor', 'Ferva as tiras de casca em 3 trocas de água.', 900], ['Confitar no adoçante', 'Cozinhe na calda de eritritol até ficarem translúcidas e seque.', 900], ['Banho de chocolate', 'Mergulhe metade de cada tira no chocolate derretido e espere endurecer.', 300]]
    },
    {
      title: 'Bark Crocante de Chocolate Amargo com Sal Maldon, Amêndoas e Coco',
      sub: 'chocolate', diff: 'easy', prep: 8, cook: 3, cal: 220, p: 5, c: 4, fib: 2, f: 22, prem: false,
      tags: ['bark', 'chocolate', 'maldon', 'amêndoas', 'fácil'],
      tip: 'Espalhe o chocolate derretido sobre papel manteiga e salpique os frutos secos antes de endurecer.',
      ings: [['Chocolate amargo 80% derretido', 200, 'g', 'despensa'], ['Amêndoas torradas picadas grosseiramente', 40, 'g', 'despensa'], ['Flocos de coco tostados sem açúcar', 25, 'g', 'despensa'], ['Flocos de sal Maldon', 1, 'colher de café', 'temperos']],
      steps: [['Espalhar chocolate', 'Verta sobre papel manteiga formando placa fina.', 120], ['Salpicar toppings', 'Espalhe as amêndoas, coco e sal Maldon.', 60], ['Quebrar rústico', 'Gele por 20 minutos e quebre em cacos rústicos com as mãos.', 1200]]
    },
    {
      title: 'Creme de Avelã Tipo Nutella Cetogênica de Colher',
      sub: 'chocolate', diff: 'easy', prep: 12, cook: 5, cal: 260, p: 6, c: 4, fib: 3, f: 26, prem: false,
      tags: ['nutella_keto', 'avelã', 'creme_de_colher', 'caseiro'],
      tip: 'Toste as avelãs no forno antes de processar para soltarem seus óleos naturais ricos e perfumados.',
      ings: [['Avelãs torradas sem casca trituradas até virar pasta', 200, 'g', 'despensa'], ['Cacau em pó 100% puro', 30, 'g', 'despensa'], ['Manteiga de cacau ou óleo de coco', 30, 'g', 'despensa'], ['Eritritol em pó ou estévia', 40, 'g', 'despensa'], ['Extrato de baunilha', 1, 'colher de chá', 'temperos']],
      steps: [['Processar avelãs', 'Bata no processador potente até virar manteiga líquida.', 360], ['Incorporar cacau e adoçante', 'Junte o cacau, adoçante e óleo de coco batendo bem.', 180], ['Armazenar', 'Guarde em pote de vidro para comer de colher.', null]]
    },
    {
      title: 'Mousse de Chocolate Intenso com Sal Rosa e Raspas de Laranja',
      sub: 'chocolate', diff: 'easy', prep: 10, cook: 4, cal: 290, p: 6, c: 4, fib: 2, f: 29, prem: false,
      tags: ['mousse_chocolate', 'laranja', 'sal_rosa', 'rápido'],
      tip: 'Apenas uma pitada de sal rosa realça a doçura e atenua o amargor do cacau.',
      ings: [['Chocolate 75%+ derretido', 150, 'g', 'despensa'], ['Creme de leite batido em picos firmes', 180, 'ml', 'laticínios'], ['Raspas finas de casca de laranja', 1, 'colher de chá', 'temperos'], ['Sal rosa do Himalaia', 1, 'pitada', 'temperos']],
      steps: [['Emulsionar chocolate', 'Misture o chocolate morno com um terço do chantilly.', 120], ['Incorporar delicado', 'Adicione o restante do chantilly em movimentos envolventes de baixo para cima.', 120], ['Gelar', 'Distribua em taças com raspas de laranja.', 1800]]
    },
    {
      title: 'Barrinhas de Coco com Cobertura Espessa de Chocolate Amargo (Prestígio Keto)',
      sub: 'chocolate', diff: 'easy', prep: 15, cook: 5, cal: 270, p: 4, c: 4, fib: 3, f: 28, prem: false,
      tags: ['prestígio', 'coco', 'chocolate', 'barrinha'],
      tip: 'Aperte a massa de coco ralado com óleo de coco em forminhas retangulares e congele antes de banhar.',
      ings: [['Coco ralado seco sem açúcar', 150, 'g', 'despensa'], ['Óleo de coco derretido e leite de coco cremoso', 80, 'ml', 'despensa'], ['Eritritol', 30, 'g', 'despensa'], ['Chocolate amargo 80% derretido para cobertura', 120, 'g', 'despensa']],
      steps: [['Moldar barras de coco', 'Misture o coco com óleo e leite de coco e pressione na forma.', 240], ['Congelar barrinhas', 'Leve ao freezer por 30 minutos.', 1800], ['Banhar no chocolate', 'Mergulhe cada barrinha no chocolate derretido.', 180]]
    },
    {
      title: 'Palha Italiana Cetogênica com Biscoito de Farinha de Amêndoas',
      sub: 'chocolate', diff: 'medium', prep: 15, cook: 10, cal: 310, p: 7, c: 4, fib: 2, f: 31, prem: true,
      tags: ['palha_italiana', 'amêndoas', 'chocolate', 'confeitaria'],
      tip: 'Use biscoitinhos caseiros de amêndoas assados e quebrados para imitar a textura do biscoito maisena.',
      ings: [['Brigadeiro cetogênico de nata e chocolate', 250, 'g', 'laticínios'], ['Biscoitinhos keto de amêndoa picados', 80, 'g', 'despensa'], ['Farinha de coco para envolver os quadradinhos', 30, 'g', 'despensa']],
      steps: [['Misturar biscoito no brigadeiro', 'Incorpore os pedacinhos crocantes no brigadeiro morno.', 120], ['Prensar em forma', 'Espalhe em assadeira forrada com papel manteiga.', 120], ['Cortar cubos', 'Após gelar, corte em quadrados e passe na farinha de coco.', 240]]
    },

    // 13-22: Mousses (10)
    {
      title: 'Mousse Aerada de Limão Siciliano com Nata Fresca e Raspas',
      sub: 'mousses', diff: 'easy', prep: 10, cook: 0, cal: 280, p: 4, c: 4, fib: 1, f: 28, prem: false,
      tags: ['mousse', 'limão_siciliano', 'nata', 'cítrico', 'refrescante'],
      tip: 'A acidez do limão siciliano reage com as gorduras da nata criando firmeza aveludada sem gelatina.',
      ings: [['Nata fresca de fazenda ou creme de leite fresco', 250, 'ml', 'laticínios'], ['Suco de limão siciliano coado', 50, 'ml', 'temperos'], ['Raspas finas de casca de limão siciliano', 1, 'colher de sopa', 'temperos'], ['Eritritol pulverizado fino', 40, 'g', 'despensa']],
      steps: [['Bater nata com adoçante', 'Bata na batedeira até começar a espessar.', 180], ['Gotejar suco', 'Verta o suco de limão devagar enquanto bate até montar picos firmes.', 120], ['Gelar em taças', 'Refrigere por 1 hora e finalize com as raspas amarelas.', 3600]]
    },
    {
      title: 'Mousse de Maracujá da Fruta Concentrado com Sementes Crocantes',
      sub: 'mousses', diff: 'easy', prep: 10, cook: 3, cal: 290, p: 5, c: 5, fib: 2, f: 29, prem: false,
      tags: ['mousse', 'maracujá', 'sementes', 'tropical', 'clássico'],
      tip: 'Reduza a polpa do maracujá na panela por 3 minutos para concentrar a fragrância tropical.',
      ings: [['Polpa fresca de maracujá maduro', 120, 'ml', 'vegetais'], ['Creme de leite fresco batido em chantilly', 200, 'ml', 'laticínios'], ['Cream cheese amolecido', 80, 'g', 'laticínios'], ['Eritritol ou xilitol', 45, 'g', 'despensa']],
      steps: [['Reduzir maracujá', 'Aqueça metade da polpa com adoçante até calda aromática.', 180], ['Bater creme', 'Incorpore o cream cheese ao chantilly batido.', 120], ['Montar taças', 'Intercale o creme aveludado com fios da calda com sementes.', null]]
    },
    {
      title: 'Mousse de Café Espresso com Mascarpone Italiano (Verrine Tiramisù)',
      sub: 'mousses', diff: 'medium', prep: 12, cook: 0, cal: 340, p: 6, c: 3, fib: 1, f: 35, prem: true,
      tags: ['mousse', 'café', 'mascarpone', 'tiramisù', 'alta_confeitaria'],
      tip: 'O queijo mascarpone confere densidade nobre incomparável à combinação com espresso.',
      ings: [['Queijo mascarpone autêntico ou nata gorda', 200, 'g', 'laticínios'], ['Café espresso concentrado gelado', 50, 'ml', 'despensa'], ['Claras em neve batidas firmes', 2, 'unidades', 'proteínas'], ['Eritritol em pó', 35, 'g', 'despensa'], ['Cacau 100% para polvilhar', 1, 'colher de sopa', 'temperos']],
      steps: [['Bater mascarpone', 'Misture o mascarpone com o café e adoçante.', 180], ['Envolver claras', 'Adicione as claras em neve suavemente com espátula.', 120], ['Polvilhar cacau', 'Sirva em taças de cristal polvilhadas com cacau.', null]]
    },
    {
      title: 'Mousse Cremosa de Abacate com Cacau Nobre e Gotas de Menta',
      sub: 'mousses', diff: 'easy', prep: 6, cook: 0, cal: 310, p: 5, c: 5, fib: 4, f: 30, prem: false,
      tags: ['mousse', 'abacate', 'cacau', 'menta', 'sem_lactose'],
      tip: 'O abacate maduro batido com cacau fica indistinguível de uma mousse tradicional de padaria francesa.',
      ings: [['Polpa de abacate manteiga bem maduro', 250, 'g', 'vegetais'], ['Cacau em pó 100% puro alcalino', 40, 'g', 'despensa'], ['Leite de coco denso', 80, 'ml', 'despensa'], ['Eritritol ou estévia e gotas de menta', 30, 'g', 'despensa']],
      steps: [['Bater no processador', 'Triture o abacate com cacau, leite de coco e adoçante até textura ultra sedosa.', 180], ['Acertar frescor', 'Adicione 2 gotas de extrato de hortelã ou menta.', 30], ['Servir gelado', 'Refrigere por 30 minutos.', 1800]]
    },
    {
      title: 'Mousse Leve de Morango Silvestre com Gelatina Incolor e Nata',
      sub: 'mousses', diff: 'easy', prep: 12, cook: 4, cal: 260, p: 7, c: 5, fib: 2, f: 25, prem: false,
      tags: ['mousse', 'morango', 'nata', 'delicado'],
      tip: 'Bata os morangos frescos no liquidificador com a nata e a gelatina hidratada morna.',
      ings: [['Morangos frescos maduros', 200, 'g', 'vegetais'], ['Nata fresca', 180, 'ml', 'laticínios'], ['Gelatina incolor sem sabor hidratada', 6, 'g', 'despensa'], ['Eritritol culinário', 40, 'g', 'despensa']],
      steps: [['Bater base', 'Processe os morangos com a nata e o adoçante.', 120], ['Juntar gelatina', 'Acrescente a gelatina derretida em fio contínuo batendo sempre.', 60], ['Gelar em tacinhas', 'Deixe firmar por 2 horas na geladeira.', 7200]]
    },
    {
      title: 'Mousse de Frutas Vermelhas com Chantilly de Baunilha Bourbon',
      sub: 'mousses', diff: 'easy', prep: 10, cook: 3, cal: 270, p: 5, c: 5, fib: 2, f: 27, prem: true,
      tags: ['mousse', 'frutas_vermelhas', 'baunilha_bourbon', 'sofisticado'],
      tip: 'Misture framboesas e mirtilos para equilíbrio perfeito entre doçura e acidez vibrante.',
      ings: [['Mix de frutas vermelhas (framboesa, amora e mirtilo)', 150, 'g', 'vegetais'], ['Creme de leite batido com fava de baunilha', 200, 'ml', 'laticínios'], ['Eritritol e raspas de limão', 35, 'g', 'despensa']],
      steps: [['Purê de frutas', 'Amasse as frutas na panela com adoçante até compota rústica.', 180], ['Envolver no chantilly', 'Incorpore a compota fria ao chantilly aromático.', 120], ['Taças de cristal', 'Sirva com frutas inteiras no topo.', null]]
    },
    {
      title: 'Mousse de Queijo Cream Cheese com Calda de Mirtilos Naturais',
      sub: 'mousses', diff: 'easy', prep: 10, cook: 5, cal: 320, p: 7, c: 5, fib: 2, f: 31, prem: false,
      tags: ['mousse', 'cheesecake_na_taça', 'mirtilos', 'fácil'],
      tip: 'Tem sabor idêntico ao recheio de um cheesecake novaiorquino clássico.',
      ings: [['Cream cheese tradicional', 200, 'g', 'laticínios'], ['Creme de leite fresco batido', 100, 'ml', 'laticínios'], ['Mirtilos frescos para a calda', 100, 'g', 'vegetais'], ['Eritritol e extrato de baunilha', 40, 'g', 'despensa']],
      steps: [['Bater mousse branca', 'Bata o cream cheese com o creme e baunilha até aveludar.', 180], ['Fazer calda', 'Cozinhe os mirtilos com adoçante até soltarem suco púrpura.', 300], ['Compor taças', 'Cubra o creme branco com a calda roxa quente ou fria.', null]]
    },
    {
      title: 'Mousse de Coco Queimado com Leite de Coco e Flocos Dourados',
      sub: 'mousses', diff: 'easy', prep: 10, cook: 5, cal: 310, p: 4, c: 4, fib: 3, f: 32, prem: false,
      tags: ['mousse', 'coco_queimado', 'dourado', 'aromático'],
      tip: 'Toste o coco ralado na frigideira seca até cor de caramelo antes de incorporar ao creme.',
      ings: [['Coco ralado tostado douradinho', 60, 'g', 'despensa'], ['Leite de coco concentrado gelado batido', 200, 'ml', 'despensa'], ['Nata fresca', 100, 'ml', 'laticínios'], ['Eritritol caramelizado suave', 35, 'g', 'despensa']],
      steps: [['Tostar coco', 'Doure o coco na frigideira com aroma amendoado.', 180], ['Bater cremes', 'Monte o leite de coco com a nata e adoçante.', 180], ['Misturar e gelar', 'Incorpore o coco tostado e leve para gelar.', 1800]]
    },
    {
      title: 'Mousse de Pistache Nobre com Base de Nata e Pedaços Crocantes',
      sub: 'mousses', diff: 'hard', prep: 15, cook: 0, cal: 360, p: 8, c: 4, fib: 2, f: 36, prem: true,
      tags: ['mousse', 'pistache', 'alta_gastronomia', 'verde_esmeralda'],
      tip: 'Utilize pasta pura de pistache 100% para cor esmeralda natural sem corantes.',
      ings: [['Pasta pura de pistache sem açúcar', 80, 'g', 'despensa'], ['Nata fresca batida em chantilly denso', 220, 'ml', 'laticínios'], ['Pistaches tostados picadinhos', 40, 'g', 'despensa'], ['Eritritol em pó', 30, 'g', 'despensa']],
      steps: [['Misturar pasta e nata', 'Incorpore a pasta de pistache na nata batida.', 180], ['Aveludar', 'Mexa delicadamente até homogeneizar a cor verde elegante.', 60], ['Decorar', 'Finalize as taças com os pistaches crocantes picados.', null]]
    },
    {
      title: 'Mousse Dourada de Gengibre com Canela do Ceilão e Nata Fresca',
      sub: 'mousses', diff: 'medium', prep: 10, cook: 3, cal: 280, p: 4, c: 3, fib: 1, f: 29, prem: false,
      tags: ['mousse', 'especiarias', 'gengibre', 'canela', 'conforto'],
      tip: 'Infundir o gengibre no creme quente antes de bater garante notas perfumadas sutis.',
      ings: [['Nata fresca de fazenda', 250, 'ml', 'laticínios'], ['Suco de gengibre fresco espremido', 1, 'colher de sopa', 'temperos'], ['Canela do Ceilão pura em pó', 1, 'colher de chá', 'temperos'], ['Eritritol culinário', 35, 'g', 'despensa']],
      steps: [['Infundir aroma', 'Misture o suco de gengibre e a canela na nata com adoçante.', 120], ['Bater até montar', 'Bata até consistência de mousse firme e espumosa.', 180], ['Gelar', 'Refrigere e sirva com polvilho de canela.', null]]
    },

    // 23-32: Bolos e Tortas (10)
    {
      title: 'Bolo Toalha Felpuda Cetogênico com Calda Farta de Leite de Coco',
      sub: 'bolos_e_tortas', diff: 'easy', prep: 15, cook: 25, cal: 330, p: 9, c: 5, fib: 4, f: 31, prem: false,
      tags: ['bolo', 'toalha_felpuda', 'coco', 'molhadinho', 'afetivo'],
      tip: 'Fure o bolo quente com garfo e regue toda a calda de leite de coco gelada para absorção total.',
      ings: [['Farinha de amêndoas e farinha de coco', 150, 'g', 'despensa'], ['Ovos caipiras separados em claras em neve', 4, 'unidades', 'proteínas'], ['Leite de coco puro para a massa e calda', 250, 'ml', 'despensa'], ['Coco ralado úmido sem açúcar para cobrir', 100, 'g', 'despensa'], ['Eritritol e fermento químico', 60, 'g', 'despensa']],
      steps: [['Bater massa fofa', 'Bata as gemas com adoçante, junte farinhas e leite de coco, e envolva as claras.', 360], ['Assar', 'Asse a 180°C por 25 minutos até dourar.', 1500], ['Regar na travessa', 'Fure o bolo morno, despeje a calda de coco e cubra com coco ralado.', 300]]
    },
    {
      title: 'Cheesecake Basco Queimado Cetogênico (San Sebastián) com Centro Cremoso',
      sub: 'bolos_e_tortas', diff: 'medium', prep: 15, cook: 30, cal: 390, p: 10, c: 4, fib: 1, f: 38, prem: true,
      tags: ['cheesecake', 'san_sebastian', 'basco', 'queimadinho', 'luxo'],
      tip: 'Asse em forno bem alto para caramelizar a superfície enquanto o miolo permanece macio como queijo brie derretido.',
      ings: [['Cream cheese em temperatura ambiente', 400, 'g', 'laticínios'], ['Nata fresca ou creme de leite fresco', 150, 'ml', 'laticínios'], ['Ovos inteiros caipiras', 3, 'unidades', 'proteínas'], ['Eritritol ou xilitol culinário', 70, 'g', 'despensa'], ['Extrato de baunilha pura', 1, 'colher de sopa', 'temperos']],
      steps: [['Bater recheio liso', 'Bata o cream cheese com adoçante, adicione ovos um a um e a nata.', 300], ['Forno a 220°C', 'Despeje na forma forrada com papel manteiga amassado e asse por 28 minutos.', 1680], ['Resfriar em repouso', 'Deixe esfriar na bancada: o centro tremerá como pudim.', 3600]]
    },
    {
      title: 'Bolo de Cenoura Cetogênico com Cobertura Crocante de Brigadeiro',
      sub: 'bolos_e_tortas', diff: 'easy', prep: 15, cook: 30, cal: 320, p: 9, c: 6, fib: 3, f: 29, prem: false,
      tags: ['bolo_de_cenoura', 'brigadeiro', 'amêndoas', 'família'],
      tip: 'Rale a cenoura bem fina e utilize em quantidade balanceada com farinha de amêndoas para manter os carboidratos baixos.',
      ings: [['Cenoura ralada fresca', 100, 'g', 'vegetais'], ['Farinha de amêndoas fina', 160, 'g', 'despensa'], ['Ovos caipiras', 3, 'unidades', 'proteínas'], ['Óleo de coco ou manteiga', 50, 'g', 'despensa'], ['Cobertura de chocolate 70% derretido com nata', 120, 'g', 'despensa']],
      steps: [['Bater líquidos', 'Processe no liquidificador a cenoura, ovos e óleo.', 180], ['Juntar secos', 'Misture com a farinha de amêndoas e fermento.', 120], ['Assar e cobrir', 'Asse a 180°C por 25 minutos e espalhe a calda de chocolate.', 1500]]
    },
    {
      title: 'Torta de Limão com Merengue Tostado no Maçarico e Base de Amêndoas',
      sub: 'bolos_e_tortas', diff: 'hard', prep: 20, cook: 15, cal: 350, p: 9, c: 5, fib: 3, f: 33, prem: true,
      tags: ['torta_de_limão', 'merengue', 'maçarico', 'alta_confeitaria'],
      tip: 'Toste as pontas do merengue de claras com maçarico culinário para visual profissional de pâtisserie.',
      ings: [['Base assada de farinha de amêndoas e manteiga', 1, 'unidade', 'despensa'], ['Creme de limão siciliano com gemas e nata', 250, 'g', 'laticínios'], ['Claras batidas com eritritol em merengue firme', 3, 'claras', 'proteínas']],
      steps: [['Assar fundo de torta', 'Asse a base a 180°C por 12 minutos até dourar.', 720], ['Rechear com creme', 'Despeje o creme cítrico aveludado.', 120], ['Puxar merengue', 'Cubra com bico de confeitar e toste as pontinhas no fogo.', 180]]
    },
    {
      title: 'Bolo Cetogênico Fofo de Laranja com Casca e Farinha de Coco',
      sub: 'bolos_e_tortas', diff: 'easy', prep: 12, cook: 30, cal: 280, p: 8, c: 5, fib: 4, f: 26, prem: false,
      tags: ['bolo_caseiro', 'laranja', 'café_da_tarde', 'sem_glúten'],
      tip: 'Utilize raspas abundantes da casca da laranja para conferir sabor cítrico marcante sem os açúcares do suco.',
      ings: [['Farinha de coco fina peneirada', 60, 'g', 'despensa'], ['Farinha de amêndoas', 100, 'g', 'despensa'], ['Raspas de duas laranjas e pitada de suco', 2, 'unidades', 'vegetais'], ['Ovos caipiras batidos', 4, 'unidades', 'proteínas'], ['Manteiga derretida e eritritol', 60, 'g', 'despensa']],
      steps: [['Bater ovos e aromas', 'Bata os ovos com adoçante e raspas de laranja.', 180], ['Incorporar farinhas', 'Junte as farinhas e manteiga.', 120], ['Assar aromático', 'Asse por 30 minutos em forma com furo central.', 1800]]
    },
    {
      title: 'Torta Salgada e Doce de Frutas Vermelhas com Creme Pâtissière Keto',
      sub: 'bolos_e_tortas', diff: 'medium', prep: 20, cook: 15, cal: 340, p: 8, c: 6, fib: 3, f: 32, prem: true,
      tags: ['tartelette', 'frutas_vermelhas', 'creme_confeiteiro', 'francês'],
      tip: 'O creme pâtissière feito com gemas, nata, fava de baunilha e goma xantana tem aveludado perfeito.',
      ings: [['Base de tortinha de amêndoas assada', 1, 'unidade', 'despensa'], ['Creme de confeiteiro cetogênico frio', 200, 'g', 'laticínios'], ['Morangos, amoras e mirtilos frescos', 150, 'g', 'vegetais']],
      steps: [['Base crocante', 'Prepare e asse a massinha de amêndoas.', 720], ['Rechear creme', 'Espalhe o creme de baunilha gelado na cavidade.', 120], ['Dispor frutas', 'Acomode as frutas frescas com simetria elegante.', 240]]
    },
    {
      title: 'Bolo de Canela Formigueiro Cetogênico com Gotas de Chocolate 85%',
      sub: 'bolos_e_tortas', diff: 'easy', prep: 12, cook: 25, cal: 310, p: 8, c: 5, fib: 3, f: 29, prem: false,
      tags: ['bolo_formigueiro', 'chocolate', 'canela', 'café'],
      tip: 'Passe as gotinhas de chocolate em um pouco de farinha de amêndoas para não afundarem na massa.',
      ings: [['Farinha de amêndoas', 160, 'g', 'despensa'], ['Gotas de chocolate 85% cacau', 60, 'g', 'despensa'], ['Canela em pó e ovos', 3, 'unidades', 'proteínas'], ['Manteiga e eritritol', 50, 'g', 'despensa']],
      steps: [['Bater massa', 'Misture todos os ingredientes úmidos e secos.', 240], ['Adicionar gotas', 'Envolva as gotas de chocolate por último com espátula.', 60], ['Assar', 'Asse a 180°C por 25 minutos.', 1500]]
    },
    {
      title: 'Torta Mousse de Chocolate e Café com Crosta de Amêndoas Tostadas',
      sub: 'bolos_e_tortas', diff: 'medium', prep: 18, cook: 10, cal: 370, p: 8, c: 5, fib: 3, f: 37, prem: true,
      tags: ['torta_mousse', 'café', 'amêndoas', 'alta_gastronomia'],
      tip: 'A camada de mousse sobre a massa assada e fria deve descansar uma noite na geladeira.',
      ings: [['Base crocante de amêndoas e cacau', 1, 'unidade', 'despensa'], ['Mousse densa de chocolate 80% e espresso', 300, 'g', 'despensa'], ['Amêndoas laminadas tostadas', 30, 'g', 'despensa']],
      steps: [['Assar base', 'Asse a crosta de amêndoas por 10 minutos e deixe esfriar.', 600], ['Verter mousse', 'Preencha com a mousse de chocolate e café cremosa.', 180], ['Gelar e desenformar', 'Refrigere por 4 horas e salpique lâminas crocantes.', 14400]]
    },
    {
      title: 'Bolo Inglês Cetogênico de Nozes com Toque de Especiarias e Cravo',
      sub: 'bolos_e_tortas', diff: 'easy', prep: 15, cook: 30, cal: 330, p: 9, c: 4, fib: 3, f: 32, prem: false,
      tags: ['bolo_de_nozes', 'bolo_inglês', 'especiarias', 'chá'],
      tip: 'Pedaços médios de nozes na massa criam textura estaladiça maravilhosa a cada mordida.',
      ings: [['Nozes picadas e farinha de nozes', 150, 'g', 'despensa'], ['Farinha de linhaça dourada fina', 40, 'g', 'despensa'], ['Ovos caipiras e manteiga', 3, 'unidades', 'proteínas'], ['Noz-moscada, canela e cravo em pó', 1, 'colher de café', 'temperos']],
      steps: [['Misturar massa', 'Emulsione os ovos com a manteiga e incorpore as nozes e especiarias.', 300], ['Forma de bolo inglês', 'Despeje na forma untada.', 120], ['Assar dourado', 'Asse por 30 minutos a 175°C.', 1800]]
    },
    {
      title: 'Cuca Alemã Cetogênica de Canela com Farofa Crocante de Castanhas',
      sub: 'bolos_e_tortas', diff: 'medium', prep: 15, cook: 25, cal: 350, p: 9, c: 5, fib: 3, f: 34, prem: false,
      tags: ['cuca', 'farofa_doce', 'canela', 'alemã', 'conforto'],
      tip: 'A farofinha de castanhas com manteiga fria e canela por cima da massa fica ultra estaladiça.',
      ings: [['Massa fofa de amêndoas com nata', 250, 'g', 'despensa'], ['Castanhas picadas para a farofa (streusel)', 80, 'g', 'despensa'], ['Manteiga gelada em cubos e eritritol', 50, 'g', 'laticínios'], ['Canela em pó abundante', 1, 'colher de sopa', 'temperos']],
      steps: [['Massa base', 'Espalhe a massa macia na forma.', 180], ['Fazer streusel', 'Amasse as castanhas com a manteiga gelada, canela e adoçante até farofa rústica.', 180], ['Cobrir e assar', 'Cubra o bolo com a farofa e asse a 180°C por 25 minutos.', 1500]]
    },

    // 33-41: Sorvetes (9)
    {
      title: 'Gelato Italiano de Pistache Nobre com Base de Nata sem Açúcar',
      sub: 'sorvetes', diff: 'medium', prep: 15, cook: 5, cal: 340, p: 8, c: 4, fib: 2, f: 34, prem: true,
      tags: ['gelato', 'pistache', 'sorvete_keto', 'cremoso', 'italiano'],
      tip: 'Bata o sorvete a cada 40 minutos no freezer para quebrar cristais de gelo caso não use máquina.',
      ings: [['Pasta pura de pistache 100%', 80, 'g', 'despensa'], ['Nata fresca e leite de amêndoas integral', 300, 'ml', 'laticínios'], ['Gemas de ovos pasteurizadas', 2, 'unidades', 'proteínas'], ['Eritritol com estévia e goma xantana', 40, 'g', 'despensa']],
      steps: [['Base inglesa', 'Aqueça o leite de amêndoas e nata com as gemas até espessar levemente.', 300], ['Bater com pistache', 'Adicione a pasta de pistache e goma xantana emulsionando com mixer.', 180], ['Maturar e bater', 'Processe na sorveteira ou congele batendo a cada 40 minutos.', 7200]]
    },
    {
      title: 'Sorvete Artesanal de Baunilha Fava Bourbon com Pedaços de Chocolate 85%',
      sub: 'sorvetes', diff: 'easy', prep: 12, cook: 5, cal: 310, p: 6, c: 3, fib: 1, f: 32, prem: false,
      tags: ['sorvete', 'baunilha_bourbon', 'flocos', 'clássico'],
      tip: 'Raspe as sementinhas pretas de uma fava de baunilha verdadeira para aroma floral incomparável.',
      ings: [['Nata fresca bem gelada', 300, 'ml', 'laticínios'], ['Sementes raspadas de 1 fava de baunilha Bourbon', 1, 'unidade', 'temperos'], ['Gotas ou flocos de chocolate 85%', 60, 'g', 'despensa'], ['Eritritol em pó', 45, 'g', 'despensa']],
      steps: [['Bater nata em chantilly suave', 'Bata a nata com o adoçante e a baunilha.', 180], ['Incorporar flocos', 'Junte o chocolate picadinho.', 60], ['Congelar', 'Leve ao freezer por 3 horas até textura de servir.', 10800]]
    },
    {
      title: 'Sorvete Cremoso de Coco com Leite de Coco e Lascas Crocantes Tostadas',
      sub: 'sorvetes', diff: 'easy', prep: 10, cook: 3, cal: 320, p: 4, c: 4, fib: 3, f: 33, prem: false,
      tags: ['sorvete', 'coco', 'tropical', 'sem_lactose'],
      tip: 'O alto teor de óleo natural do leite de coco garante maciez espontânea ao congelar.',
      ings: [['Leite de coco integral cremoso', 350, 'ml', 'despensa'], ['Lascas de coco tostadas', 40, 'g', 'despensa'], ['Óleo de coco virgem', 20, 'ml', 'despensa'], ['Eritritol culinário', 40, 'g', 'despensa']],
      steps: [['Emulsionar base', 'Bata o leite de coco com óleo e adoçante.', 120], ['Congelar', 'Transfira para pote hermético e congele.', 7200], ['Servir', 'Salpique as lascas douradas de coco estaladiças.', null]]
    },
    {
      title: 'Gelato de Chocolate Amargo Intenso 85% com Flor de Sal',
      sub: 'sorvetes', diff: 'medium', prep: 15, cook: 5, cal: 330, p: 7, c: 4, fib: 3, f: 33, prem: true,
      tags: ['gelato', 'chocolate_amargo', 'flor_de_sal', 'luxo'],
      tip: 'A flor de sal eleva as nuances frutadas do cacau nobre a outro patamar.',
      ings: [['Chocolate amargo nobre 85% derretido', 150, 'g', 'despensa'], ['Nata fresca', 250, 'ml', 'laticínios'], ['Cacau 100% alcalino', 25, 'g', 'despensa'], ['Eritritol e flor de sal', 40, 'g', 'despensa']],
      steps: [['Fundir base', 'Misture o chocolate com a nata aquecida e cacau.', 240], ['Bater no mixer', 'Emulsione até brilho uniforme.', 120], ['Congelar cremoso', 'Leve ao congelador e finalize as bolas com flor de sal.', 7200]]
    },
    {
      title: 'Sorbet Cetogênico Refrescante de Morango e Hortelã com Limão Siciliano',
      sub: 'sorvetes', diff: 'easy', prep: 8, cook: 0, cal: 140, p: 2, c: 6, fib: 3, f: 8, prem: false,
      tags: ['sorbet', 'morango', 'hortelã', 'verão', 'leve'],
      tip: 'Congele os morangos previamente e bata ainda congelados no processador com suco de limão.',
      ings: [['Morangos congelados', 300, 'g', 'vegetais'], ['Folhas de hortelã fresca', 10, 'folhas', 'vegetais'], ['Suco de meio limão siciliano', 20, 'ml', 'temperos'], ['Goma xantana (pitada) e eritritol', 30, 'g', 'despensa']],
      steps: [['Processar congelado', 'Bata os morangos de pedra no processador até esfarelar.', 180], ['Emulsionar creme', 'Junte o limão, hortelã e adoçante até virar sorbet sedoso imediato.', 120], ['Servir na hora', 'Apresente em taças refrescantes.', null]]
    },
    {
      title: 'Sorvete de Doce de Leite Cetogênico com Flor de Sal',
      sub: 'sorvetes', diff: 'medium', prep: 15, cook: 20, cal: 350, p: 8, c: 5, fib: 1, f: 35, prem: true,
      tags: ['sorvete', 'doce_de_leite', 'flor_de_sal', 'irresistível'],
      tip: 'O doce de leite keto reduzido na manteiga e nata traz notas de toffee encantadoras.',
      ings: [['Doce de leite cetogênico apurado na panela', 180, 'g', 'laticínios'], ['Nata fresca gelada batida', 200, 'ml', 'laticínios'], ['Flor de sal da Guérande', 1, 'colher de café', 'temperos']],
      steps: [['Mesclar doce e nata', 'Misture delicadamente o doce de leite frio no chantilly de nata.', 180], ['Congelar mesclado', 'Coloque no pote deixando ondas visíveis do doce de leite.', 120], ['Finalizar', 'Polvilhe flor de sal ao servir.', null]]
    },
    {
      title: 'Sorvete de Manteiga de Amendoim com Pedaços de Chocolate Crocante',
      sub: 'sorvetes', diff: 'easy', prep: 10, cook: 0, cal: 360, p: 10, c: 4, fib: 2, f: 35, prem: false,
      tags: ['sorvete', 'pasta_de_amendoim', 'chocolate', 'nutritivo'],
      tip: 'A gordura da pasta de amendoim impede a formação de gelo deixando textura elástica.',
      ings: [['Pasta de amendoim integral cremosa', 120, 'g', 'despensa'], ['Nata fresca ou creme de leite', 200, 'ml', 'laticínios'], ['Raspas de chocolate 85%', 50, 'g', 'despensa'], ['Eritritol pulverizado', 40, 'g', 'despensa']],
      steps: [['Bater no mixer', 'Bata a pasta de amendoim com a nata e adoçante.', 180], ['Juntar raspas', 'Misture o chocolate picado com colher.', 60], ['Congelar', 'Gele por 2 horas e sirva cremoso.', 7200]]
    },
    {
      title: 'Gelato de Café Mocha com Cacau Puro e Chantilly Gelado',
      sub: 'sorvetes', diff: 'easy', prep: 10, cook: 3, cal: 300, p: 6, c: 3, fib: 2, f: 30, prem: false,
      tags: ['gelato', 'mocha', 'café', 'cacau', 'energia'],
      tip: 'Um shot de café espresso bem tirado dá vida nova ao gelato de chocolate.',
      ings: [['Café espresso duplo concentrado', 60, 'ml', 'despensa'], ['Cacau 100% em pó', 30, 'g', 'despensa'], ['Nata fresca de fazenda', 250, 'ml', 'laticínios'], ['Eritritol e essência de baunilha', 40, 'g', 'despensa']],
      steps: [['Misturar mocha', 'Dissolva o cacau no espresso quente com adoçante.', 120], ['Bater com nata', 'Incorpore a nata gelada e bata até encorpar.', 180], ['Levar ao freezer', 'Congele e sirva com grãos de café moídos por cima.', 7200]]
    },
    {
      title: 'Sorvete Refrescante de Maracujá Cremoso com Toque de Nata',
      sub: 'sorvetes', diff: 'easy', prep: 10, cook: 3, cal: 290, p: 5, c: 5, fib: 2, f: 29, prem: false,
      tags: ['sorvete', 'maracujá', 'tropical', 'ácido_e_cremoso'],
      tip: 'O equilíbrio perfeito entre a acidez vívida do maracujá e o aveludado da nata pura.',
      ings: [['Suco concentrado de maracujá coado', 100, 'ml', 'vegetais'], ['Nata fresca batida', 250, 'ml', 'laticínios'], ['Eritritol culinário', 50, 'g', 'despensa']],
      steps: [['Bater suco e nata', 'Emulsione o maracujá com a nata e adoçante.', 180], ['Congelar batendo', 'Mexa após 1 hora no freezer para consistência aveludada.', 3600], ['Servir em bolas', 'Decore com algumas sementes frescas.', null]]
    },

    // 42-50: Doces de Colher (9)
    {
      title: 'Brigadeiro Gourmet Cetogênico Puxa-Puxa com Cacau 100% e Manteiga',
      sub: 'doces_de_colher', diff: 'easy', prep: 5, cook: 12, cal: 270, p: 5, c: 3, fib: 2, f: 27, prem: false,
      tags: ['brigadeiro', 'doce_de_colher', 'cacau', 'festa', 'afetivo'],
      tip: 'Cozinhe a nata com o cacau e adoçante em fogo brando mexendo sempre até soltar do fundo da panela.',
      ings: [['Nata fresca de fazenda ou creme de leite fresco', 250, 'ml', 'laticínios'], ['Cacau em pó 100% puro alcalino', 35, 'g', 'despensa'], ['Manteiga pura de primeira qualidade', 30, 'g', 'laticínios'], ['Eritritol ou xilitol em pó', 45, 'g', 'despensa']],
      steps: [['Misturar na panela', 'Junte todos os ingredientes em fogo brando.', 120], ['Mexer até engrossar', 'Mexa com espátula de silicone por 10 minutos até desgrudar do fundo.', 600], ['Servir de colher', 'Coma morno da panela ou frio no potinho.', null]]
    },
    {
      title: 'Pudim de Leite Cetogênico com Calda Dourada de Eritritol Caramelizado',
      sub: 'doces_de_colher', diff: 'hard', prep: 15, cook: 50, cal: 310, p: 9, c: 4, fib: 0, f: 30, prem: true,
      tags: ['pudim', 'leite_condensado_keto', 'calda_de_caramelo', 'clássico'],
      tip: 'Asse em banho-maria coberto com papel alumínio a 160°C para ficar sem furinhos, macio como seda.',
      ings: [['Nata fresca e leite de coco cremoso', 350, 'ml', 'laticínios'], ['Ovos caipiras inteiros e gemas', 4, 'unidades', 'proteínas'], ['Eritritol ou alulose caramelizada para o fundo', 60, 'g', 'despensa'], ['Extrato de baunilha pura', 1, 'colher de sopa', 'temperos']],
      steps: [['Fazer calda dourada', 'Derreta a alulose até dourar cor de âmbar e caramelize a forma.', 300], ['Bater líquidos', 'Misture a nata, leite de coco, ovos e baunilha delicadamente sem espumar.', 240], ['Banho-maria', 'Asse a 160°C por 50 minutos e gele antes de desenformar.', 3000]]
    },
    {
      title: 'Doce de Leite Cetogênico de Colher Apurado na Panela de Fundo Triplo',
      sub: 'doces_de_colher', diff: 'medium', prep: 5, cook: 35, cal: 290, p: 5, c: 4, fib: 0, f: 29, prem: false,
      tags: ['doce_de_leite', 'colher', 'conforto', 'mineiro'],
      tip: 'Adicione uma pitadinha minúscula de bicarbonato de sódio para intensificar a cor caramelo brilhante.',
      ings: [['Nata fresca de boa procedência', 300, 'ml', 'laticínios'], ['Manteiga pura', 30, 'g', 'laticínios'], ['Xilitol ou alulose (douram perfeitamente)', 60, 'g', 'despensa'], ['Bicarbonato de sódio (pitadinha)', 1, 'pitada', 'temperos']],
      steps: [['Cozinhar em fogo brando', 'Misture na panela grossa em fogo baixo.', 180], ['Apurar lentamente', 'Mexa a cada 3 minutos enquanto reduz e carameliza.', 1800], ['Resfriar espesso', 'Ao esfriar vira um doce de leite cremosíssimo.', null]]
    },
    {
      title: 'Curd Francês de Limão Siciliano com Manteiga Gelada e Gemas Caipiras',
      sub: 'doces_de_colher', diff: 'medium', prep: 10, cook: 8, cal: 260, p: 6, c: 3, fib: 0, f: 26, prem: true,
      tags: ['lemon_curd', 'limão_siciliano', 'francês', 'gourmet'],
      tip: 'Adicione a manteiga gelada em cubos após retirar do fogo para emulsionar brilho acetinado.',
      ings: [['Gemas de ovos caipiras', 4, 'unidades', 'proteínas'], ['Suco de limão siciliano coado', 60, 'ml', 'temperos'], ['Manteiga gelada cortada em cubos', 60, 'g', 'laticínios'], ['Eritritol em pó e raspas da casca', 45, 'g', 'despensa']],
      steps: [['Cozinhar gemas e suco', 'Mexa o suco, gemas e adoçante em banho-maria até encorpar.', 360], ['Emulsionar manteiga fria', 'Fora do fogo, incorpore os cubos de manteiga gelada mexendo com batedor.', 180], ['Envasar sedoso', 'Guarde em pote de vidro esterilizado na geladeira.', null]]
    },
    {
      title: 'Beijinho Cetogênico Cremoso com Coco Ralado e Cravo-da-Índia',
      sub: 'doces_de_colher', diff: 'easy', prep: 5, cook: 10, cal: 280, p: 4, c: 3, fib: 3, f: 29, prem: false,
      tags: ['beijinho', 'coco', 'doce_de_festa', 'afetivo'],
      tip: 'Um clássico das festas brasileiras feito de colher com leite de coco cremoso e nata.',
      ings: [['Coco ralado fino úmido sem açúcar', 80, 'g', 'despensa'], ['Nata fresca ou leite de coco integral', 200, 'ml', 'laticínios'], ['Manteiga sem sal', 25, 'g', 'laticínios'], ['Eritritol e cravos-da-índia para decorar', 40, 'g', 'despensa']],
      steps: [['Apurar panela', 'Cozinhe a nata, manteiga, adoçante e coco até soltar da lateral.', 480], ['Servir em copinhos', 'Coloque em tacinhas com um cravo-da-índia cravado no topo.', null]]
    },
    {
      title: 'Creme Brûlée Cetogênico com Crosta Queimada Crocante de Eritritol',
      sub: 'doces_de_colher', diff: 'hard', prep: 15, cook: 40, cal: 360, p: 6, c: 3, fib: 0, f: 37, prem: true,
      tags: ['creme_brulee', 'maçarico', 'francês', 'baunilha', 'alta_gastronomia'],
      tip: 'Salpique uma camada finíssima de eritritol antes de queimar com o maçarico para estalar a casquinha.',
      ings: [['Creme de leite fresco', 250, 'ml', 'laticínios'], ['Gemas de ovos caipiras', 4, 'unidades', 'proteínas'], ['Fava de baunilha aberta e raspada', 1, 'unidade', 'temperos'], ['Eritritol para a massa e crosta', 50, 'g', 'despensa']],
      steps: [['Infundir baunilha', 'Aqueça o creme com a fava e misture com as gemas adoçadas.', 300], ['Assar ramequins', 'Asse em banho-maria a 150°C por 35 minutos até firmar com centro trêmulo.', 2100], ['Queimar crosta', 'Gele e queime o eritritol com maçarico na hora de quebrar com a colher.', 120]]
    },
    {
      title: 'Cocada Mole de Colher Cremosa com Flocos de Coco e Canela',
      sub: 'doces_de_colher', diff: 'easy', prep: 5, cook: 12, cal: 290, p: 4, c: 4, fib: 3, f: 30, prem: false,
      tags: ['cocada_mole', 'coco', 'canela', 'conforto'],
      tip: 'Sirva morna com uma pitada de canela moída na hora.',
      ings: [['Flocos de coco frescos ou desidratados sem açúcar', 100, 'g', 'despensa'], ['Leite de coco puro e nata', 200, 'ml', 'despensa'], ['Eritritol ou xilitol', 40, 'g', 'despensa'], ['Canela em pau e em pó', 1, 'ramo', 'temperos']],
      steps: [['Cozinhar com canela', 'Ferva os flocos de coco com os leites e a canela em pau.', 600], ['Apurar cremoso', 'Mexa até o líquido encorpar e o coco ficar tenro.', 180], ['Servir morna', 'Polvilhe canela em pó por cima.', null]]
    },
    {
      title: 'Chantilly Nobre de Fava de Baunilha com Frutas Silvestres Frescas',
      sub: 'doces_de_colher', diff: 'easy', prep: 6, cook: 0, cal: 280, p: 3, c: 4, fib: 2, f: 29, prem: false,
      tags: ['chantilly', 'frutas_frescas', 'baunilha', 'sobremesa_rápida'],
      tip: 'Mantenha a tigela e os batedores no freezer por 15 minutos antes de bater o chantilly.',
      ings: [['Nata fresca ou creme de leite fresco geladíssimo', 250, 'ml', 'laticínios'], ['Sementes de fava de baunilha', 1, 'colher de café', 'temperos'], ['Eritritol em pó', 30, 'g', 'despensa'], ['Morangos e amoras frescas higienizadas', 100, 'g', 'vegetais']],
      steps: [['Montar chantilly', 'Bata a nata gelada com adoçante e baunilha até picos sedosos.', 180], ['Dispor em taças', 'Preencha taças com colheradas volumosas.', 60], ['Acomodar frutas', 'Coroe com as amoras e morangos frescos.', null]]
    },
    {
      title: 'Pudim Cetogênico de Chia com Leite de Coco e Geleia de Framboesa',
      sub: 'doces_de_colher', diff: 'easy', prep: 8, cook: 3, cal: 240, p: 6, c: 5, fib: 5, f: 22, prem: false,
      tags: ['chia_pudding', 'framboesa', 'fibras', 'saudável'],
      tip: 'Deixe as sementes de chia hidratarem no leite de coco por no mínimo 4 horas ou durante a noite.',
      ings: [['Sementes de chia puras', 40, 'g', 'despensa'], ['Leite de coco cremoso e essência de baunilha', 200, 'ml', 'despensa'], ['Framboesas frescas reduzidas com eritritol', 80, 'g', 'vegetais']],
      steps: [['Hidratar chia', 'Misture a chia no leite de coco com baunilha e leve à geladeira.', 240], ['Fazer geleia de framboesa', 'Aqueça as framboesas com adoçante por 3 minutos amassando com garfo.', 180], ['Montar camadas', 'Coloque a geleia sobre o pudim de chia espesso.', null]]
    }
  ];

  return items.map((r) => ({
    title: r.title,
    shortDesc: `${r.title} para matar a vontade de doces mantendo cetose profunda e sabor espetacular.`,
    desc: `Sobremesa formulada com adoçantes naturais de índice glicêmico zero e gorduras de altíssima pureza nutricional.`,
    category: 'desserts',
    subcategory: r.sub,
    difficulty: r.diff,
    prepTime: r.prep,
    cookTime: r.cook,
    servings: 4,
    calories: r.cal,
    protein: r.p,
    carbs: r.c,
    fiber: r.fib,
    fat: r.f,
    isPremium: r.prem,
    tags: r.tags,
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    ingredients: r.ings.map(([name, qty, unit, cat]) => ({ name, qty, unit, cat })),
    steps: r.steps.map(([title, desc, timer]) => ({ title, desc, timer })),
    chefTip: r.tip
  })).slice(0, 50);
}
