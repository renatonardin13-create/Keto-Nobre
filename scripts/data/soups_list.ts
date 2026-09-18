import { RawRecipeInput } from '../recipe_helper';

export function getFullSoupsList(): RawRecipeInput[] {
  const items: { title: string; sub: string; diff: 'easy' | 'medium' | 'hard'; prep: number; cook: number; cal: number; p: number; c: number; fib: number; f: number; prem: boolean; tags: string[]; tip: string; ings: [string, number, string, any][]; steps: [string, string, number | null][] }[] = [
    // 1-12: Cremes (12)
    {
      title: 'Creme Aveludado de Couve-Flor com Gorgonzola Doce e Bacon Crocante',
      sub: 'cremes', diff: 'easy', prep: 10, cook: 20, cal: 380, p: 14, c: 6, fib: 3, f: 32, prem: false,
      tags: ['creme', 'couve-flor', 'gorgonzola', 'bacon', 'conforto'],
      tip: 'Bata a couve-flor no liquidificador com a água do cozimento e a nata até ficar sedosa como veludo.',
      ings: [['Couve-flor fresca em floretes', 400, 'g', 'vegetais'], ['Queijo gorgonzola cremoso', 70, 'g', 'laticínios'], ['Nata fresca ou creme de leite', 120, 'ml', 'laticínios'], ['Bacon frito picadinho bem sequinho', 50, 'g', 'proteínas'], ['Manteiga', 25, 'g', 'despensa']],
      steps: [['Cozinhar couve-flor', 'Cozinhe a couve-flor em caldo de legumes até ficar bem macia.', 720], ['Bater aveludado', 'Bata no liquidificador com a nata, manteiga e gorgonzola até emulsão lisa.', 180], ['Servir', 'Acomode em cumbucas e salpique o bacon crocante.', null]]
    },
    {
      title: 'Creme de Cogumelos Porcini e Paris com Nata Fresca e Tomilho',
      sub: 'cremes', diff: 'medium', prep: 12, cook: 18, cal: 360, p: 11, c: 5, fib: 2, f: 31, prem: true,
      tags: ['creme', 'cogumelos', 'porcini', 'alta_gastronomia'],
      tip: 'Doure os cogumelos na manteiga antes de acrescentar o caldo para intensificar o sabor terroso umami.',
      ings: [['Cogumelos Paris e Shimeji frescos', 300, 'g', 'vegetais'], ['Cogumelos porcini secos hidratados', 20, 'g', 'vegetais'], ['Nata fresca de fazenda', 150, 'ml', 'laticínios'], ['Caldo de ossos ou de legumes caseiro', 300, 'ml', 'despensa'], ['Manteiga clarificada', 30, 'g', 'despensa'], ['Tomilho fresco', 4, 'ramos', 'temperos']],
      steps: [['Dourar cogumelos', 'Salteie os cogumelos fatiados na manteiga com tomilho.', 360], ['Cozinhar no caldo', 'Adicione o caldo e o líquido coado do porcini e ferva 10 minutos.', 600], ['Finalizar aveludado', 'Processe metade do creme e incorpore a nata fresca quente.', 180]]
    },
    {
      title: 'Creme Verde Cetogênico de Espinafre com Queijo Parmesão e Noz-Moscada',
      sub: 'cremes', diff: 'easy', prep: 8, cook: 15, cal: 340, p: 13, c: 4, fib: 2, f: 29, prem: false,
      tags: ['creme_verde', 'espinafre', 'parmesão', 'noz-moscada'],
      tip: 'Adicione noz-moscada ralada na hora no final do cozimento para perfumar todo o creme.',
      ings: [['Folhas de espinafre frescas', 300, 'g', 'vegetais'], ['Creme de leite fresco', 150, 'ml', 'laticínios'], ['Queijo parmesão ralado na hora', 60, 'g', 'laticínios'], ['Caldo caseiro', 300, 'ml', 'despensa'], ['Manteiga com alho', 25, 'g', 'despensa']],
      steps: [['Refogar espinafre', 'Doure o alho na manteiga e murche o espinafre.', 180], ['Juntar caldo', 'Acrescente o caldo e deixe ferver suavemente por 5 minutos.', 300], ['Bater com queijo', 'Bata com o creme de leite, queijo parmesão e noz-moscada.', 120]]
    },
    {
      title: 'Creme Aveludado de Alho-Poró com Nata e Lascas de Queijo Gruyère',
      sub: 'cremes', diff: 'medium', prep: 10, cook: 20, cal: 370, p: 12, c: 6, fib: 2, f: 31, prem: true,
      tags: ['alho-poró', 'gruyère', 'creme_francês', 'bistrô'],
      tip: 'Refogue o alho-poró em fogo muito brando na manteiga para que adoce sem dourar (técnica suer).',
      ings: [['Alho-poró picado fino (apenas a parte branca)', 250, 'g', 'vegetais'], ['Couve-flor cozida para dar corpo', 150, 'g', 'vegetais'], ['Nata fresca', 120, 'ml', 'laticínios'], ['Queijo Gruyère ralado grosso', 50, 'g', 'laticínios'], ['Manteiga sem sal', 30, 'g', 'despensa']],
      steps: [['Suar o alho-poró', 'Refogue o alho-poró na manteiga lentamente com uma pitada de sal.', 480], ['Adicionar couve-flor e caldo', 'Junte a couve-flor e caldo leve e cozinhe por 10 minutos.', 600], ['Bater com nata', 'Bata até consistência aveludada e sirva com o gruyère derretendo.', null]]
    },
    {
      title: 'Creme de Abobrinha com Manjericão Fresco e Azeite Trufado',
      sub: 'cremes', diff: 'easy', prep: 8, cook: 15, cal: 310, p: 9, c: 5, fib: 2, f: 27, prem: false,
      tags: ['abobrinha', 'manjericão', 'trufas', 'leve'],
      tip: 'Deixe a casca da abobrinha para que o creme fique com uma cor verde vibrante linda.',
      ings: [['Abobrinhas italianas em rodelas', 400, 'g', 'vegetais'], ['Caldo de frango ou legumes', 300, 'ml', 'despensa'], ['Folhas de manjericão fresco', 20, 'folhas', 'vegetais'], ['Azeite trufado', 15, 'ml', 'despensa'], ['Creme de leite', 100, 'ml', 'laticínios']],
      steps: [['Cozinhar abobrinha', 'Cozinhe a abobrinha no caldo aromático até ficar macia.', 600], ['Bater com manjericão', 'Bata no liquidificador com manjericão e creme de leite.', 180], ['Finalizar trufado', 'Goteje o azeite de trufas na cumbuca fumegante.', null]]
    },
    {
      title: 'Creme de Brócolis com Queijo Cheddar Inglês Legítimo',
      sub: 'cremes', diff: 'easy', prep: 10, cook: 18, cal: 410, p: 16, c: 6, fib: 3, f: 34, prem: false,
      tags: ['brócolis', 'cheddar', 'conforto', 'família'],
      tip: 'Desligue o fogo antes de misturar o queijo Cheddar para não talhar a emulsão.',
      ings: [['Brócolis frescos em floretes', 350, 'g', 'vegetais'], ['Queijo Cheddar legítimo ralado', 80, 'g', 'laticínios'], ['Creme de leite fresco', 120, 'ml', 'laticínios'], ['Caldo de frango denso', 250, 'ml', 'despensa'], ['Manteiga', 25, 'g', 'despensa']],
      steps: [['Cozinhar brócolis', 'Ferva os brócolis no caldo até amaciar.', 600], ['Bater creme', 'Triture com o mixer mantendo alguns pedacinhos rústicos.', 120], ['Fundir cheddar', 'Incorpore o queijo cheddar e creme de leite fora do fogo.', 120]]
    },
    {
      title: 'Creme de Aspargos Nobres com Nata e Amêndoas Tostadas',
      sub: 'cremes', diff: 'medium', prep: 10, cook: 15, cal: 350, p: 11, c: 4, fib: 2, f: 31, prem: true,
      tags: ['aspargos', 'amêndoas', 'alta_gastronomia', 'luxo'],
      tip: 'Reserve as pontinhas dos aspargos salteadas na manteiga para decorar a superfície.',
      ings: [['Aspargos verdes limpos picados', 300, 'g', 'vegetais'], ['Nata fresca', 120, 'g', 'laticínios'], ['Amêndoas laminadas tostadas', 30, 'g', 'despensa'], ['Caldo claro de legumes', 300, 'ml', 'despensa'], ['Manteiga', 25, 'g', 'despensa']],
      steps: [['Saltear pontas', 'Doure as pontas na manteiga por 2 minutos e reserve.', 120], ['Cozinhar talos', 'Cozinhe os talos no caldo até ficarem bem tenros.', 600], ['Bater e decorar', 'Emulsione com a nata e sirva com as pontas e amêndoas crocantes.', null]]
    },
    {
      title: 'Creme de Queijo Brie Francês com Vinho Branco e Castanhas',
      sub: 'cremes', diff: 'hard', prep: 12, cook: 15, cal: 440, p: 15, c: 4, fib: 1, f: 38, prem: true,
      tags: ['brie', 'vinho_branco', 'castanhas', 'jantar_romântico'],
      tip: 'Retire a crosta branca do queijo brie para um creme de brancura imaculada.',
      ings: [['Queijo Brie limpo sem casca', 150, 'g', 'laticínios'], ['Vinho branco seco', 50, 'ml', 'despensa'], ['Creme de leite fresco', 150, 'ml', 'laticínios'], ['Caldo de frango clarificado', 200, 'ml', 'despensa'], ['Castanhas picadas tostadas', 30, 'g', 'despensa']],
      steps: [['Reduzir vinho', 'Ferva o vinho branco com caldo até reduzir à metade.', 300], ['Derreter queijo', 'Junte o creme de leite e derreta o queijo brie mexendo sempre.', 240], ['Servir aveludado', 'Finalize com castanhas tostadas estaladiças.', null]]
    },
    {
      title: 'Creme de Abóbora Cetogênica (Cabotiá Racionada) com Gengibre e Leite de Coco',
      sub: 'cremes', diff: 'easy', prep: 10, cook: 20, cal: 320, p: 6, c: 7, fib: 3, f: 27, prem: false,
      tags: ['cabotiá_keto', 'gengibre', 'leite_de_coco', 'aromático'],
      tip: 'A abóbora cabotiá possui menor índice glicêmico e combinada com gordura de coco preserva a cetose.',
      ings: [['Abóbora cabotiá em cubos cozida com couve-flor', 200, 'g', 'vegetais'], ['Leite de coco integral cremoso', 150, 'ml', 'despensa'], ['Gengibre fresco ralado', 1, 'colher de sopa', 'temperos'], ['Óleo de coco e sementes de abóbora', 25, 'g', 'despensa']],
      steps: [['Cozinhar vegetais', 'Ferva a cabotiá e couve-flor com gengibre.', 720], ['Processar liso', 'Bata com o leite de coco até textura sedosa.', 180], ['Decorar', 'Sirva com sementes de abóbora tostadas.', null]]
    },
    {
      title: 'Creme de Pimentão Vermelho Assado com Queijo de Cabra e Alho',
      sub: 'cremes', diff: 'medium', prep: 12, cook: 20, cal: 350, p: 10, c: 6, fib: 2, f: 30, prem: false,
      tags: ['pimentão_assado', 'queijo_de_cabra', 'espanhol', 'defumado'],
      tip: 'Queime a casca do pimentão na chama do fogão e retire sob água para sabor defumado espetacular.',
      ings: [['Pimentões vermelhos grandes assados sem pele', 2, 'unidades', 'vegetais'], ['Queijo de cabra cremoso', 80, 'g', 'laticínios'], ['Creme de leite', 100, 'ml', 'laticínios'], ['Caldo de galinha caseiro', 250, 'ml', 'despensa'], ['Alho assado amassado', 1, 'cabeça', 'vegetais']],
      steps: [['Processar pimentões', 'Bata os pimentões pelados com alho e caldo.', 180], ['Aquecer e emulsionar', 'Aqueça na panela e junte o queijo de cabra e creme.', 300], ['Servir aromático', 'Apresente vermelho intenso com ervas.', null]]
    },
    {
      title: 'Creme de Palmito Pupunha Fresco com Nata e Cheiro-Verde',
      sub: 'cremes', diff: 'easy', prep: 10, cook: 18, cal: 330, p: 9, c: 5, fib: 2, f: 29, prem: false,
      tags: ['palmito_pupunha', 'nata', 'brasileiro', 'delicado'],
      tip: 'O palmito pupunha fresco cozinha rápido e confere corpo cremoso natural sem adição de farinhas.',
      ings: [['Palmito pupunha fresco picado', 300, 'g', 'vegetais'], ['Nata fresca de fazenda', 120, 'ml', 'laticínios'], ['Caldo de legumes aromático', 300, 'ml', 'despensa'], ['Manteiga e cebolinha fresca', 30, 'g', 'despensa']],
      steps: [['Cozinhar pupunha', 'Ferva o palmito no caldo até ficar extremamente macio.', 720], ['Bater com nata', 'Triture com a nata e manteiga até consistência sedosa.', 180], ['Finalizar', 'Polvilhe cebolinha verde abundante.', null]]
    },
    {
      title: 'Creme de Queijo Parmesão com Azeite de Alecrim e Chips de Presunto Cru',
      sub: 'cremes', diff: 'hard', prep: 12, cook: 15, cal: 450, p: 18, c: 3, fib: 1, f: 39, prem: true,
      tags: ['parmesão', 'presunto_cru', 'alta_gastronomia', 'luxo'],
      tip: 'Seque fatias de presunto cru no micro-ondas por 1 minuto para chips estaladiços.',
      ings: [['Queijo Parmigiano Reggiano ralado na hora', 100, 'g', 'laticínios'], ['Base de couve-flor cozida neutra batida', 200, 'g', 'vegetais'], ['Creme de leite fresco', 150, 'ml', 'laticínios'], ['Fatias de presunto cru desidratadas crocantes', 40, 'g', 'proteínas'], ['Azeite de alecrim fresco', 20, 'ml', 'despensa']],
      steps: [['Fundir queijo na base', 'Aqueça a base de couve-flor com o creme e derreta o queijo parmesão.', 300], ['Emulsionar', 'Bata com mixer de mão até textura espumosa.', 120], ['Coroar', 'Disponha o azeite de alecrim e as lâminas crocantes de presunto.', null]]
    },

    // 13-22: Caldos Nutritivos (10)
    {
      title: 'Caldo de Ossos Nobre (Bone Broth) Dourado com Cúrcuma e Gengibre',
      sub: 'caldos_nutritivos', diff: 'hard', prep: 20, cook: 480, cal: 180, p: 24, c: 1, fib: 0, f: 9, prem: true,
      tags: ['bone_broth', 'colágeno', 'anti-inflamatório', 'imunidade'],
      tip: 'Adicione 2 colheres de sopa de vinagre de maçã no início para extrair todo o colágeno e minerais dos ossos.',
      ings: [['Ossos bovinos com tutano tostados no forno', 1200, 'g', 'proteínas'], ['Cúrcuma fresca ralada e gengibre', 30, 'g', 'vegetais'], ['Vinagre de maçã orgânico com a mãe', 30, 'ml', 'despensa'], ['Água filtrada abundante', 2500, 'ml', 'despensa'], ['Ramos de alecrim, tomilho e louro', 4, 'ramos', 'temperos']],
      steps: [['Tostar ossos', 'Asse os ossos no forno a 220°C até ficarem bem dourados.', 1800], ['Cozimento longo', 'Transfira para panela funda com água, vinagre e especiarias em fogo baixíssimo por 8 horas.', 28800], ['Coar e gelar', 'Passe pela peneira fina e conserve na geladeira gelatinoso.', 600]]
    },
    {
      title: 'Caldo de Galinha Caipira com Alho Confitado e Couve-Manteiga Fatiada',
      sub: 'caldos_nutritivos', diff: 'easy', prep: 12, cook: 40, cal: 260, p: 28, c: 2, fib: 1, f: 15, prem: false,
      tags: ['galinha_caipira', 'couve', 'conforto', 'antigripal'],
      tip: 'A carcaça e as asas de frango caipira conferem caldo rico em gelatina dourada natural.',
      ings: [['Pedaços de galinha caipira com osso', 600, 'g', 'proteínas'], ['Folhas de couve-manteiga fatiadas fininhas', 80, 'g', 'vegetais'], ['Dentes de alho dourados no azeite', 6, 'unidades', 'vegetais'], ['Caldo concentrado da ave', 600, 'ml', 'despensa']],
      steps: [['Cozinhar frango', 'Cozinhe a galinha caipira com alho e sal por 35 minutos.', 2100], ['Desfiar e coar', 'Desfie a carne e devolva ao caldo borbulhante.', 300], ['Finalizar couve', 'Acrescente a couve fatiada nos últimos 2 minutos de fervura.', 120]]
    },
    {
      title: 'Caldo Revigorante de Mocotó Bovino com Coentro e Pimenta Dedo-de-Moça',
      sub: 'caldos_nutritivos', diff: 'medium', prep: 20, cook: 90, cal: 320, p: 32, c: 2, fib: 0, f: 20, prem: false,
      tags: ['mocotó', 'colágeno_puro', 'energia', 'nordestino'],
      tip: 'O mocotó é a fonte de colágeno natural mais concentrada da culinária brasileira.',
      ings: [['Mocotó bovino limpo em rodelas', 800, 'g', 'proteínas'], ['Alho picado, cebola e pimenta dedo-de-moça', 60, 'g', 'vegetais'], ['Coentro fresco picado e cheiro-verde', 3, 'colheres de sopa', 'temperos'], ['Suco de limão taiti', 1, 'unidade', 'temperos']],
      steps: [['Ferver na pressão', 'Cozinhe o mocotó na pressão com água por 80 minutos até derreter.', 4800], ['Desossar', 'Retire os ossos e pique as cartilagens macias.', 480], ['Temperar caldo', 'Volte ao caldo apurando com alho, pimenta e cheiro-verde abundante.', 300]]
    },
    {
      title: 'Caldo de Peixe Nobre com Limão, Coentro e Pimenta Fresca',
      sub: 'caldos_nutritivos', diff: 'easy', prep: 12, cook: 20, cal: 210, p: 26, c: 2, fib: 0, f: 10, prem: false,
      tags: ['caldo_de_peixe', 'leve', 'ômega_3', 'digestivo'],
      tip: 'Cozinhe a cabeça e espinhas de peixe branco por no máximo 25 minutos para o caldo não amargar.',
      ings: [['Carcaça e postas de peixe branco fresco', 500, 'g', 'proteínas'], ['Água filtrada com legumes aromáticos', 800, 'ml', 'despensa'], ['Suco de limão fresco e coentro picadinho', 3, 'colheres de sopa', 'temperos'], ['Azeite de oliva extravirgem', 20, 'ml', 'despensa']],
      steps: [['Ferver carcaça', 'Cozinhe o peixe com cebola e talos de coentro por 18 minutos.', 1080], ['Coar', 'Passe pela peneira fina aproveitando a carne desmanchada.', 180], ['Temperar', 'Finalize com suco de limão e azeite no momento de servir.', null]]
    },
    {
      title: 'Caldo Dourado de Frango com Alho-Poró, Gengibre e Óleo de Gergelim',
      sub: 'caldos_nutritivos', diff: 'easy', prep: 10, cook: 25, cal: 240, p: 25, c: 3, fib: 1, f: 13, prem: false,
      tags: ['caldo_oriental', 'gengibre', 'óleo_de_gergelim', 'reconfortante'],
      tip: 'O aroma de óleo de gergelim torrado ao final transforma um simples caldo em alta culinária asiática.',
      ings: [['Sobrecoxas de frango cozidas no osso', 400, 'g', 'proteínas'], ['Alho-poró fatiado em rodelas', 100, 'g', 'vegetais'], ['Gengibre fresco em fatias', 20, 'g', 'vegetais'], ['Óleo de gergelim torrado', 15, 'ml', 'despensa'], ['Cebolinha fresca fatiada', 2, 'colheres de sopa', 'temperos']],
      steps: [['Cozinhar caldo', 'Ferva o frango com alho-poró e gengibre.', 1200], ['Desfiar frango', 'Retire a pele e os ossos desfiando a carne.', 240], ['Finalizar', 'Despeje o caldo sobre o frango com óleo de gergelim e cebolinha.', null]]
    },
    {
      title: 'Caldo de Carne com Ervas Frescas e Queijo Parmesão Ralado',
      sub: 'caldos_nutritivos', diff: 'easy', prep: 10, cook: 30, cal: 260, p: 28, c: 1, fib: 0, f: 15, prem: false,
      tags: ['caldo_de_carne', 'parmesão', 'clássico', 'inverno'],
      tip: 'Um caldo límpido e quente servido com montinhos de queijo parmesão ralado na hora.',
      ings: [['Caldo rico de costela bovina apurado', 600, 'ml', 'despensa'], ['Queijo parmesão ralado na hora', 50, 'g', 'laticínios'], ['Alecrim, sálvia e tomilho frescos', 3, 'ramos', 'temperos'], ['Flor de sal e pimenta-do-reino', 1, 'colher de café', 'temperos']],
      steps: [['Aquecer caldo', 'Ferva o caldo com os ramos de ervas aromáticas.', 360], ['Retirar ervas', 'Descarte os ramos após infundirem o aroma.', 60], ['Servir com queijo', 'Polvilhe o parmesão generoso na cumbuca fumegante.', null]]
    },
    {
      title: 'Caldo de Camarão com Leite de Coco e Capim-Santo (Tom Yum Keto)',
      sub: 'caldos_nutritivos', diff: 'medium', prep: 12, cook: 15, cal: 290, p: 26, c: 4, fib: 1, f: 18, prem: true,
      tags: ['tom_yum', 'camarão', 'leite_de_coco', 'tailandês'],
      tip: 'Esmague as folhas de capim-santo (erva-cidreira) para extrair o óleo essencial cítrico.',
      ings: [['Camarões médios com casca', 350, 'g', 'proteínas'], ['Leite de coco puro', 150, 'ml', 'despensa'], ['Capim-santo e gengibre', 30, 'g', 'vegetais'], ['Suco de limão e pimenta dedo-de-moça', 2, 'colheres de sopa', 'temperos']],
      steps: [['Ferver cascas', 'Cozinhe as cascas e cabeças dos camarões para fazer a base.', 600], ['Coar e temperar', 'Junte o leite de coco, capim-santo, limão e pimenta.', 300], ['Cozinhar camarão', 'Mergulhe os camarões por 3 minutos e sirva imediatamente.', 180]]
    },
    {
      title: 'Caldo de Aspargos Verdes com Gema Caipira e Manteiga Noisette',
      sub: 'caldos_nutritivos', diff: 'hard', prep: 12, cook: 15, cal: 270, p: 12, c: 3, fib: 2, f: 23, prem: true,
      tags: ['aspargos', 'gema_caipira', 'manteiga_noisette', 'alta_gastronomia'],
      tip: 'A gema crua é colocada na cumbuca e cozida delicadamente pelo caldo fervente despejado na mesa.',
      ings: [['Caldo aromático de aspargos verdes', 500, 'ml', 'vegetais'], ['Gemas de ovos caipiras', 2, 'unidades', 'proteínas'], ['Manteiga em ponto avelã (noisette)', 30, 'g', 'despensa'], ['Flor de sal da Guérande', 1, 'pitada', 'temperos']],
      steps: [['Fazer o caldo', 'Cozinhe talos de aspargos até extrair todo o sabor e coe.', 600], ['Manteiga noisette', 'Derreta a manteiga até espumar e cheirar avelã tostada.', 180], ['Montagem de mesa', 'Coloque a gema no fundo, regue o caldo fervente e a manteiga espumante.', null]]
    },
    {
      title: 'Caldo de Legumes Cetogênicos com Cúrcuma e Azeite de Oliva Extravirgem',
      sub: 'caldos_nutritivos', diff: 'easy', prep: 10, cook: 25, cal: 190, p: 5, c: 4, fib: 2, f: 17, prem: false,
      tags: ['vegetais', 'cúrcuma', 'leve', 'anti-inflamatório'],
      tip: 'Utilize talos de salsão, couve-flor, alho-poró e abobrinha para um caldo claro e saboroso.',
      ings: [['Mix de legumes keto picados', 400, 'g', 'vegetais'], ['Cúrcuma pura em pó e pimenta preta', 1, 'colher de chá', 'temperos'], ['Azeite de oliva extravirgem nobre', 35, 'ml', 'despensa'], ['Água mineral', 1000, 'ml', 'despensa']],
      steps: [['Ferver legumes', 'Cozinhe os vegetais em fogo brando por 25 minutos.', 1500], ['Coar', 'Separe o líquido límpido e dourado.', 180], ['Servir quente', 'Finalize na tigela com o azeite de oliva cru.', null]]
    },
    {
      title: 'Caldo Verde Português Cetogênico com Couve Rasgada e Chouriço',
      sub: 'caldos_nutritivos', diff: 'easy', prep: 12, cook: 20, cal: 360, p: 20, c: 5, fib: 3, f: 28, prem: false,
      tags: ['caldo_verde', 'chouriço', 'couve', 'português'],
      tip: 'A couve-flor cozida e batida substitui a batata criando a mesma densidade e brancura do prato clássico.',
      ings: [['Couve-flor cozida batida em purê ralo', 350, 'g', 'vegetais'], ['Couve-manteiga rasgada em tiras ultrafinas', 100, 'g', 'vegetais'], ['Rodelas de paio ou chouriço português', 80, 'g', 'proteínas'], ['Azeite português generoso', 30, 'ml', 'despensa']],
      steps: [['Dourar chouriço', 'Frite o chouriço na própria gordura e reserve.', 240], ['Base de couve-flor', 'Aqueça o creme leve de couve-flor temperado com azeite e sal.', 300], ['Juntar couve e chouriço', 'Adicione a couve por 2 minutos e finalize com as rodelas de embutido.', null]]
    },

    // 23-32: Sopas de Carne (10)
    {
      title: 'Sopa Nobre de Músculo Bovino com Pedaços Macios de Abobrinha',
      sub: 'sopas_de_carne', diff: 'easy', prep: 15, cook: 45, cal: 390, p: 38, c: 4, fib: 2, f: 23, prem: false,
      tags: ['músculo', 'abobrinha', 'pressão', 'conforto'],
      tip: 'O músculo bovino é extremamente rico em tecido conjuntivo, rendendo uma sopa gelatinosa incomparável.',
      ings: [['Músculo bovino em cubos', 450, 'g', 'proteínas'], ['Abobrinhas em cubos médios', 200, 'g', 'vegetais'], ['Tomates pelados e cebola', 100, 'g', 'vegetais'], ['Cheiro-verde picadinho', 3, 'colheres de sopa', 'temperos']],
      steps: [['Dourar a carne', 'Sele os cubos de músculo com alho na panela de pressão.', 360], ['Cozimento longo', 'Cubra com água e cozinhe sob pressão por 35 minutos.', 2100], ['Adicionar abobrinha', 'Abra a panela, adicione a abobrinha e cozinhe mais 8 minutos sem pressão.', 480]]
    },
    {
      title: 'Goulash Cetogênico de Carne com Páprica Húngara e Nata',
      sub: 'sopas_de_carne', diff: 'medium', prep: 15, cook: 45, cal: 440, p: 40, c: 5, fib: 2, f: 27, prem: true,
      tags: ['goulash', 'páprica', 'húngaro', 'especiarias'],
      tip: 'Use páprica doce e defumada húngara autêntica para o tom avermelhado característico.',
      ings: [['Carne bovina (acém ou alcatra) em cubos', 500, 'g', 'proteínas'], ['Páprica doce e defumada', 2, 'colheres de sopa', 'temperos'], ['Pimentão vermelho e cebola picados', 100, 'g', 'vegetais'], ['Nata fresca para finalizar', 80, 'g', 'laticínios'], ['Banha para refogar', 20, 'g', 'despensa']],
      steps: [['Refogar carne e páprica', 'Doure a carne na banha e junte a páprica com cebola.', 360], ['Cozinhar lentamente', 'Adicione água até cobrir e cozinhe até a carne amaciar.', 2400], ['Servir com nata', 'Sirva em cumbucas com uma colherada de nata fria no centro.', null]]
    },
    {
      title: 'Sopa de Costela Bovina Desfiada com Agrião Fresco e Caldo Escuro',
      sub: 'sopas_de_carne', diff: 'easy', prep: 12, cook: 40, cal: 460, p: 39, c: 2, fib: 1, f: 32, prem: false,
      tags: ['costela', 'agrião', 'caldo_escuro', 'reconfortante'],
      tip: 'Coloque as folhas de agrião apenas no prato para que murchem com o caldo fervente na hora.',
      ings: [['Costela bovina desfiada suculenta', 400, 'g', 'proteínas'], ['Caldo concentrado da costela', 500, 'ml', 'despensa'], ['Folhas e talos jovens de agrião', 100, 'g', 'vegetais'], ['Alho picado e cebola dourados', 40, 'g', 'vegetais']],
      steps: [['Aquecer o caldo', 'Ferva o caldo com alho e cebola dourados.', 300], ['Juntar costela', 'Adicione a carne desfiada até absorver o calor.', 240], ['Despejar no agrião', 'Distribua o agrião nas cumbucas e despeje a sopa pelando.', null]]
    },
    {
      title: 'Sopa de Frango com Legumes Rústicos e Espaguete de Abobrinha',
      sub: 'sopas_de_carne', diff: 'easy', prep: 12, cook: 20, cal: 330, p: 35, c: 5, fib: 2, f: 17, prem: false,
      tags: ['canja_keto', 'frango', 'zoodles', 'família'],
      tip: 'A abobrinha em fios imita perfeitamente o macarrãozinho da canja de vó.',
      ings: [['Peito de frango cozido desfiado', 350, 'g', 'proteínas'], ['Abobrinha espiralizada em fios de espaguete', 200, 'g', 'vegetais'], ['Caldo de frango dourado caseiro', 600, 'ml', 'despensa'], ['Cebolinha e salsinha picadas', 3, 'colheres de sopa', 'temperos']],
      steps: [['Ferver caldo e frango', 'Aqueça o caldo com o frango desfiado temperado.', 360], ['Adicionar espaguete', 'Coloque a abobrinha em fios por apenas 2 minutos.', 120], ['Servir', 'Salpique cheiro-verde abundante e gotas de limão.', null]]
    },
    {
      title: 'Sopa de Rabada Desfiada com Agrião e Pimenta-de-Cheiro',
      sub: 'sopas_de_carne', diff: 'hard', prep: 20, cook: 60, cal: 490, p: 42, c: 2, fib: 1, f: 34, prem: true,
      tags: ['rabada', 'agrião', 'pimenta_de_cheiro', 'alta_gastronomia'],
      tip: 'Deixe o caldo da rabada esfriar para retirar a camada de gordura sólida excessiva antes de montar a sopa.',
      ings: [['Carne de rabada cozida na pressão e desfiada', 400, 'g', 'proteínas'], ['Caldo clarificado de rabada', 500, 'ml', 'despensa'], ['Folhas frescas de agrião', 100, 'g', 'vegetais'], ['Pimenta-de-cheiro picadinha sem ardor', 2, 'unidades', 'vegetais']],
      steps: [['Desengordurar caldo', 'Retire o excesso de óleo superficial do caldo frio.', 180], ['Apurar sopa', 'Aqueça o caldo com a carne e pimenta-de-cheiro.', 360], ['Finalizar', 'Sirva sobre o agrião fresco.', null]]
    },
    {
      title: 'Sopa de Carne Moída com Vagens Finas e Tomates Rústicos',
      sub: 'sopas_de_carne', diff: 'easy', prep: 10, cook: 15, cal: 340, p: 32, c: 5, fib: 2, f: 21, prem: false,
      tags: ['carne_moida', 'vagem', 'dia_a_dia', 'fácil'],
      tip: 'Refogue a carne moída muito bem até ficar soltinha e dourada antes de cobrir com o caldo.',
      ings: [['Carne moída bovina (acém ou patinho)', 400, 'g', 'proteínas'], ['Vagens francesas cortadas em pedacinhos', 150, 'g', 'vegetais'], ['Tomates picados sem pele', 120, 'g', 'vegetais'], ['Caldo de carne caseiro', 500, 'ml', 'despensa']],
      steps: [['Dourar carne', 'Frite a carne moída com cebola e alho.', 300], ['Juntar vagens e tomate', 'Adicione as vagens e tomate com o caldo.', 180], ['Cozinhar', 'Deixe ferver suavemente por 10 minutos até a vagem ficar tenra.', 600]]
    },
    {
      title: 'Sopa de Cordeiro Desfiado com Hortelã Fresca e Queijo Feta',
      sub: 'sopas_de_carne', diff: 'medium', prep: 15, cook: 30, cal: 420, p: 38, c: 3, fib: 1, f: 28, prem: true,
      tags: ['cordeiro', 'hortelã', 'feta', 'mediterrânea'],
      tip: 'A hortelã fresca picada na tigela traz frescor surpreendente à riqueza do cordeiro.',
      ings: [['Carne de cordeiro assada desfiada', 350, 'g', 'proteínas'], ['Caldo de cordeiro reduzido aromático', 500, 'ml', 'despensa'], ['Queijo feta em cubinhos', 60, 'g', 'laticínios'], ['Folhas de hortelã fresca picadas', 3, 'colheres de sopa', 'temperos']],
      steps: [['Aquecer caldo', 'Ferva o caldo com a carne de cordeiro desfiada.', 360], ['Cumbucas', 'Despeje nas cumbucas e decore com queijo feta.', 60], ['Hortelã fresca', 'Salpique a hortelã por cima.', null]]
    },
    {
      title: 'Sopa de Frango com Bacon Crocante, Nata e Espinafre',
      sub: 'sopas_de_carne', diff: 'easy', prep: 10, cook: 18, cal: 430, p: 38, c: 4, fib: 2, f: 30, prem: false,
      tags: ['frango', 'bacon', 'nata', 'espinafre', 'conforto'],
      tip: 'Uma versão de sopa toscana low carb rica e encorpada.',
      ings: [['Peito de frango cozido em cubos', 350, 'g', 'proteínas'], ['Bacon picadinho frito crocante', 60, 'g', 'proteínas'], ['Nata fresca', 100, 'ml', 'laticínios'], ['Folhas de espinafre', 100, 'g', 'vegetais'], ['Caldo de frango caseiro', 500, 'ml', 'despensa']],
      steps: [['Dourar bacon', 'Frite o bacon e reserve metade para finalização.', 240], ['Ferver sopa', 'Junte o caldo, o frango e o espinafre deixando ferver.', 360], ['Finalizar com nata', 'Adicione a nata e cubra com o bacon crocante.', null]]
    },
    {
      title: 'Sopa Nobre de Peito Bovino (Brisket) Defumado com Caldo Encorpado',
      sub: 'sopas_de_carne', diff: 'hard', prep: 15, cook: 40, cal: 480, p: 44, c: 2, fib: 1, f: 33, prem: true,
      tags: ['brisket', 'defumado', 'texano', 'gourmet'],
      tip: 'A carne defumada passa notas amadeiradas profundas ao caldo da sopa.',
      ings: [['Brisket bovino defumado desfiado ou fatiado', 400, 'g', 'proteínas'], ['Caldo de ossos escuro com tomilho', 500, 'ml', 'despensa'], ['Cebola caramelizada e páprica', 60, 'g', 'vegetais']],
      steps: [['Aquecer caldo', 'Ferva o caldo com as cebolas e páprica.', 300], ['Juntar brisket', 'Adicione a carne defumada e deixe apurar por 15 minutos em fogo baixo.', 900], ['Servir quente', 'Apresente fumegante com cheiro-verde.', null]]
    },
    {
      title: 'Sopa de Linguiça Artesanal Suína com Couve-Manteiga e Alho',
      sub: 'sopas_de_carne', diff: 'easy', prep: 10, cook: 15, cal: 410, p: 26, c: 3, fib: 2, f: 32, prem: false,
      tags: ['linguiça', 'couve', 'mineiro', 'rápido'],
      tip: 'Cozinhe a linguiça em rodelas na frigideira antes de acrescentar ao caldo para dourar a gordura.',
      ings: [['Linguiça artesanal de pernil em rodelas', 350, 'g', 'proteínas'], ['Couve-manteiga fatiada fininha', 120, 'g', 'vegetais'], ['Alho picado frito', 4, 'dentes', 'vegetais'], ['Caldo de carne ou frango', 500, 'ml', 'despensa']],
      steps: [['Dourar linguiça', 'Frite a linguiça até ficar tostadinha.', 300], ['Juntar caldo', 'Acrescente o caldo e deixe ferver.', 240], ['Adicionar couve', 'Junte a couve por 2 minutos e sirva.', 120]]
    },

    // 33-40: Sopas de Legumes (8)
    {
      title: 'Sopa Rústica de Legumes Cetogênicos com Azeite de Ervas e Parmesão',
      sub: 'sopas_de_legumes', diff: 'easy', prep: 12, cook: 18, cal: 240, p: 9, c: 6, fib: 3, f: 19, prem: false,
      tags: ['vegetais_mistos', 'parmesão', 'minestrone_keto', 'leve'],
      tip: 'Corte todos os vegetais no mesmo tamanho para cozinharem por igual mantendo textura al dente.',
      ings: [['Abobrinha, couve-flor e vagem em cubinhos', 350, 'g', 'vegetais'], ['Tomates maduros picados', 100, 'g', 'vegetais'], ['Queijo parmesão ralado na hora', 50, 'g', 'laticínios'], ['Azeite de oliva com orégano fresco', 30, 'ml', 'despensa'], ['Caldo de legumes aromático', 500, 'ml', 'despensa']],
      steps: [['Refogar vegetais', 'Doure os cubinhos de legumes no azeite.', 240], ['Cozinhar no caldo', 'Despeje o caldo e cozinhe por 12 minutos.', 720], ['Servir com queijo', 'Polvilhe parmesão abundante em cada prato.', null]]
    },
    {
      title: 'Sopa de Tomates Rústicos com Manjericão Gigante e Nata',
      sub: 'sopas_de_legumes', diff: 'easy', prep: 10, cook: 20, cal: 280, p: 6, c: 7, fib: 2, f: 26, prem: false,
      tags: ['tomate', 'manjericão', 'nata', 'italiana'],
      tip: 'Asse os tomates cortados com alho antes de bater para concentrar os açúcares naturais.',
      ings: [['Tomates italianos maduros assados', 500, 'g', 'vegetais'], ['Folhas frescas de manjericão', 20, 'folhas', 'vegetais'], ['Nata fresca', 100, 'ml', 'laticínios'], ['Azeite de oliva e alho', 25, 'ml', 'despensa']],
      steps: [['Assar tomates', 'Asse os tomates com azeite até murcharem.', 1200], ['Bater com manjericão', 'Bata com o caldo e manjericão até creme rústico.', 180], ['Finalizar com nata', 'Mexa a nata delicadamente criando espirais brancas.', null]]
    },
    {
      title: 'Sopa Aveludada de Cogumelos com Alho-Poró e Azeite de Trufas',
      sub: 'sopas_de_legumes', diff: 'medium', prep: 10, cook: 15, cal: 290, p: 8, c: 5, fib: 2, f: 26, prem: true,
      tags: ['cogumelos', 'trufas', 'alho-poró', 'gourmet'],
      tip: 'Mantenha alguns cogumelos inteiros fatiados para dar textura à sopa.',
      ings: [['Cogumelos Paris e Portobello fatiados', 300, 'g', 'vegetais'], ['Alho-poró fatiado', 100, 'g', 'vegetais'], ['Azeite de trufas brancas', 15, 'ml', 'despensa'], ['Manteiga com alho', 30, 'g', 'despensa'], ['Caldo leve de legumes', 400, 'ml', 'despensa']],
      steps: [['Saltear cogumelos e alho-poró', 'Doure na manteiga por 5 minutos.', 300], ['Ferver com caldo', 'Adicione o caldo e apure por 8 minutos.', 480], ['Finalizar trufado', 'Goteje o azeite de trufas ao servir.', null]]
    },
    {
      title: 'Sopa de Couve-Flor com Cúrcuma, Gengibre e Sementes de Girassol',
      sub: 'sopas_de_legumes', diff: 'easy', prep: 8, cook: 15, cal: 260, p: 7, c: 5, fib: 3, f: 23, prem: false,
      tags: ['couve-flor', 'cúrcuma', 'dourada', 'anti-inflamatório'],
      tip: 'A cúrcuma com pimenta preta tem biodisponibilidade 2000% maior para combate a inflamações.',
      ings: [['Floretes de couve-flor frescos', 350, 'g', 'vegetais'], ['Cúrcuma pura em pó com pimenta preta', 1, 'colher de sopa', 'temperos'], ['Gengibre ralado', 1, 'colher de café', 'temperos'], ['Sementes de girassol tostadas', 30, 'g', 'despensa'], ['Azeite de oliva', 25, 'ml', 'despensa']],
      steps: [['Cozinhar legumes', 'Ferva a couve-flor com a cúrcuma e gengibre até amaciar.', 600], ['Bater com azeite', 'Bata metade do volume com mixer para consistência cremosa.', 120], ['Decorar com sementes', 'Salpique as sementes douradas crocantes.', null]]
    },
    {
      title: 'Sopa de Brócolis Rústica com Alho Dourado e Queijo Minas Curado',
      sub: 'sopas_de_legumes', diff: 'easy', prep: 8, cook: 15, cal: 290, p: 13, c: 5, fib: 3, f: 24, prem: false,
      tags: ['brócolis', 'alho_frito', 'queijo_curado', 'dia_a_dia'],
      tip: 'O queijo minas curado ralado grosso derrete em fios saborosos no caldo de brócolis quente.',
      ings: [['Floretes e talos macios de brócolis picados', 350, 'g', 'vegetais'], ['Dentes de alho dourados laminados', 4, 'unidades', 'vegetais'], ['Queijo minas curado ralado', 60, 'g', 'laticínios'], ['Caldo caseiro', 450, 'ml', 'despensa'], ['Azeite de oliva', 20, 'ml', 'despensa']],
      steps: [['Cozinhar brócolis', 'Cozinhe os brócolis no caldo até ficarem verdes e tenros.', 600], ['Alho crocante', 'Doure as lâminas de alho no azeite à parte.', 180], ['Compor cumbuca', 'Despeje a sopa, acomode o queijo e o alho crocante.', null]]
    },
    {
      title: 'Sopa de Espinafre com Abobrinha e Queijo Feta Esfarelado',
      sub: 'sopas_de_legumes', diff: 'easy', prep: 8, cook: 12, cal: 270, p: 11, c: 4, fib: 2, f: 23, prem: false,
      tags: ['espinafre', 'abobrinha', 'feta', 'mediterrânea'],
      tip: 'Uma sopa verde rápida e refrescante para qualquer estação do ano.',
      ings: [['Espinafre fresco limpo', 200, 'g', 'vegetais'], ['Abobrinhas em cubos', 200, 'g', 'vegetais'], ['Queijo feta autêntico esfarelado', 60, 'g', 'laticínios'], ['Caldo leve e azeite extravirgem', 400, 'ml', 'despensa']],
      steps: [['Cozinhar abobrinha', 'Ferva a abobrinha no caldo aromático por 8 minutos.', 480], ['Juntar espinafre', 'Adicione o espinafre no último minuto de cozimento.', 60], ['Servir com feta', 'Finalize na cumbuca com o queijo feta esfarelado.', null]]
    },
    {
      title: 'Sopa de Pimentão Amarelo Assado com Leite de Coco e Gengibre',
      sub: 'sopas_de_legumes', diff: 'medium', prep: 10, cook: 18, cal: 310, p: 6, c: 6, fib: 2, f: 28, prem: false,
      tags: ['pimentão_amarelo', 'leite_de_coco', 'gengibre', 'solar'],
      tip: 'O pimentão amarelo é naturalmente doce e cria uma sopa com visual solar lindo.',
      ings: [['Pimentões amarelos assados sem pele', 2, 'unidades', 'vegetais'], ['Leite de coco integral', 150, 'ml', 'despensa'], ['Gengibre fresco ralado', 1, 'colher de sopa', 'temperos'], ['Óleo de coco e cebolinha', 20, 'g', 'despensa']],
      steps: [['Bater base', 'Bata os pimentões com gengibre e caldo vegetal.', 180], ['Aquecer com coco', 'Junte o leite de coco e deixe ferver por 5 minutos.', 300], ['Servir aromática', 'Decore com cebolinha fresca fatiada.', null]]
    },
    {
      title: 'Sopa de Berinjela Assada no Forno com Alho Confit e Tomilho',
      sub: 'sopas_de_legumes', diff: 'easy', prep: 10, cook: 25, cal: 260, p: 6, c: 6, fib: 3, f: 23, prem: false,
      tags: ['berinjela_assada', 'alho_confit', 'rústica', 'forno'],
      tip: 'Asse as metades de berinjela com bastante azeite até a polpa ficar cremosa e dourada.',
      ings: [['Polpa de berinjelas assadas no forno', 300, 'g', 'vegetais'], ['Alho confitado em azeite', 6, 'dentes', 'vegetais'], ['Caldo de legumes fresco', 400, 'ml', 'despensa'], ['Ramos de tomilho fresco e azeite extravirgem', 3, 'ramos', 'temperos']],
      steps: [['Bater a polpa', 'Bata a polpa de berinjela assada com o alho confit e caldo.', 180], ['Ferver aromática', 'Aqueça na panela com os ramos de tomilho.', 300], ['Servir', 'Apresente em cumbucas com fio generoso de azeite.', null]]
    }
  ];

  return items.map((r) => ({
    title: r.title,
    shortDesc: `${r.title} nutritiva, aveludada e com alto teor de micronutrientes cetogênicos.`,
    desc: `Prato quente reconfortante com gorduras nobres e ingredientes de baixo índice glicêmico para alimentar o corpo e aquecer a alma.`,
    category: 'soups',
    subcategory: r.sub,
    difficulty: r.diff,
    prepTime: r.prep,
    cookTime: r.cook,
    servings: 2,
    calories: r.cal,
    protein: r.p,
    carbs: r.c,
    fiber: r.fib,
    fat: r.f,
    isPremium: r.prem,
    tags: r.tags,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
    ingredients: r.ings.map(([name, qty, unit, cat]) => ({ name, qty, unit, cat })),
    steps: r.steps.map(([title, desc, timer]) => ({ title, desc, timer })),
    chefTip: r.tip
  })).slice(0, 40);
}
