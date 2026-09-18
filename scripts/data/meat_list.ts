import { RawRecipeInput } from '../recipe_helper';

export function getFullMeatList(): RawRecipeInput[] {
  const items: { title: string; sub: string; diff: 'easy' | 'medium' | 'hard'; prep: number; cook: number; cal: number; p: number; c: number; fib: number; f: number; prem: boolean; tags: string[]; tip: string; ings: [string, number, string, any][]; steps: [string, string, number | null][] }[] = [
    // 1-18: Bife (18)
    {
      title: 'Picanha na Frigideira de Ferro com Manteiga de Alho Negro',
      sub: 'bife', diff: 'easy', prep: 5, cook: 10, cal: 580, p: 48, c: 2, fib: 0, f: 43, prem: true,
      tags: ['picanha', 'bife', 'ferro', 'churrasco_em_casa', 'luxo'],
      tip: 'Sele primeiro o lado da capa de gordura em pé para render o azeite natural da carne.',
      ings: [['Steaks de picanha de 250g', 500, 'g', 'proteínas'], ['Manteiga com alho negro amassado', 40, 'g', 'despensa'], ['Sal de parrilla grosso', 1, 'colher de sopa', 'temperos'], ['Ramos de alecrim', 2, 'ramos', 'temperos']],
      steps: [['Selar gordura', 'Apoie os steaks com a gordura voltada para a frigideira de ferro bem quente.', 240], ['Grelhar bifes', 'Doure cada lado por 3 minutos para ponto menos.', 360], ['Bastear com manteiga', 'Junte a manteiga de alho negro e banhe a carne com colher.', 60]]
    },
    {
      title: 'Bife Ancho ao Molho Poivre Vert com Nata Fresca',
      sub: 'bife', diff: 'medium', prep: 8, cook: 12, cal: 610, p: 46, c: 2, fib: 0, f: 47, prem: true,
      tags: ['ancho', 'poivre_vert', 'francês', 'alta_gastronomia'],
      tip: 'Esmague os grãos de pimenta verde com a lateral da faca para liberar os óleos aromáticos.',
      ings: [['Bife de ancho alto (ribeye)', 500, 'g', 'proteínas'], ['Grãos de pimenta verde em conserva', 1, 'colher de sopa', 'temperos'], ['Nata fresca ou creme de leite fresco', 120, 'g', 'laticínios'], ['Conhaque para flambar (opcional)', 20, 'ml', 'despensa'], ['Manteiga', 25, 'g', 'despensa']],
      steps: [['Grelhar ancho', 'Sele a carne na manteiga bem quente até ponto desejado e reserve.', 360], ['Flambar e pimenta', 'Adicione a pimenta verde e flambe rapidamente.', 60], ['Molho aveludado', 'Incorpore a nata fresca raspando o fundo dourado da panela.', 180]]
    },
    {
      title: 'Bife de Chorizo com Manteiga de Chimichurri Fresco',
      sub: 'bife', diff: 'easy', prep: 8, cook: 10, cal: 560, p: 49, c: 1, fib: 0, f: 40, prem: false,
      tags: ['chorizo', 'argentino', 'chimichurri', 'grelhado'],
      tip: 'Deixe o bife atingir a temperatura ambiente antes de colocar na frigideira fumegante.',
      ings: [['Bifes de chorizo bovino', 500, 'g', 'proteínas'], ['Manteiga em ponto de pomada', 40, 'g', 'laticínios'], ['Chimichurri argentino fresco', 2, 'colheres de sopa', 'temperos'], ['Sal marinho', 1, 'colher de sopa', 'temperos']],
      steps: [['Grelhar forte', 'Coloque o chorizo na grelha ou frigideira bem quente.', 300], ['Virar uma única vez', 'Vire e deixe criar crosta caramelizada.', 240], ['Derreter manteiga', 'Coloque a manteiga de chimichurri sobre a carne para derreter.', null]]
    },
    {
      title: 'Filé Mignon ao Molho de Cogumelos Porcini e Nata',
      sub: 'bife', diff: 'hard', prep: 15, cook: 12, cal: 520, p: 47, c: 3, fib: 1, f: 36, prem: true,
      tags: ['mignon', 'porcini', 'alta_gastronomia', 'italiano'],
      tip: 'Hidrate os cogumelos porcini secos em pouca água morna e use o líquido coado para enriquecer o molho.',
      ings: [['Medalhões de filé mignon altos', 500, 'g', 'proteínas'], ['Cogumelos porcini secos hidratados', 30, 'g', 'vegetais'], ['Nata fresca da fazenda', 150, 'g', 'laticínios'], ['Manteiga ghee', 30, 'g', 'despensa']],
      steps: [['Grelhar medalhões', 'Sele os medalhões na manteiga ghee garantindo centro rosado.', 360], ['Saltear porcini', 'Junte os cogumelos e o líquido reduzido.', 180], ['Nata aveludada', 'Acrescente a nata até formar molho rico e encorpado.', 180]]
    },
    {
      title: 'Entrecôte com Crosta de Queijo Roquefort e Nozes Tostadas',
      sub: 'bife', diff: 'medium', prep: 10, cook: 12, cal: 630, p: 48, c: 2, fib: 1, f: 48, prem: true,
      tags: ['entrecôte', 'roquefort', 'nozes', 'gourmet'],
      tip: 'Gratine a crosta de roquefort sob a resistência superior do forno ou maçarico culinário.',
      ings: [['Bifes de entrecôte', 500, 'g', 'proteínas'], ['Queijo Roquefort amassado com manteiga', 70, 'g', 'laticínios'], ['Nozes picadas tostadas', 30, 'g', 'despensa'], ['Flor de sal', 1, 'pitada', 'temperos']],
      steps: [['Selar carne', 'Grelhe a carne na frigideira de ferro.', 360], ['Cobrir de queijo', 'Espalhe a pasta de roquefort e nozes por cima.', 60], ['Gratinar', 'Leve ao forno alto por 2 minutos para derreter.', 120]]
    },
    {
      title: 'Fraldinha Grelhada na Manteiga de Garrafa com Alho Laminado',
      sub: 'bife', diff: 'easy', prep: 5, cook: 12, cal: 540, p: 46, c: 2, fib: 0, f: 39, prem: false,
      tags: ['fraldinha', 'manteiga_de_garrafa', 'alho', 'brasileiro'],
      tip: 'Corte a fraldinha sempre contra as fibras para que a carne desmanche na boca.',
      ings: [['Peça de fraldinha limpa', 600, 'g', 'proteínas'], ['Manteiga de garrafa pura', 40, 'ml', 'despensa'], ['Alho fatiado em lâminas', 4, 'dentes', 'vegetais'], ['Sal grosso moído', 1, 'colher de sopa', 'temperos']],
      steps: [['Grelhar inteira', 'Grelhe a peça em fogo bem alto.', 480], ['Dourar alho', 'Aqueça a manteiga de garrafa com as lâminas de alho até dourarem.', 120], ['Fatiar e regar', 'Fatie a fraldinha fininha e despeje o alho e manteiga borbulhantes.', null]]
    },
    {
      title: 'Bife de T-Bone com Manteiga de Alecrim e Tomilho Fresco',
      sub: 'bife', diff: 'medium', prep: 5, cook: 14, cal: 670, p: 55, c: 0, fib: 0, f: 51, prem: true,
      tags: ['t-bone', 'osso', 'manteiga_de_ervas', 'churrasco'],
      tip: 'A carne próxima ao osso precisa de um minuto a mais de calor para cozinhar por igual.',
      ings: [['Steak de T-Bone bovino (600g)', 600, 'g', 'proteínas'], ['Manteiga sem sal', 50, 'g', 'laticínios'], ['Alecrim e tomilho frescos', 3, 'ramos', 'temperos'], ['Dente de alho esmagado', 2, 'unidades', 'vegetais']],
      steps: [['Grelhar steak', 'Sele o T-Bone em fogo vivo virando com pinça.', 480], ['Arroser', 'Coloque a manteiga, alho e ervas e regue a carne continuamente.', 240], ['Descanso', 'Deixe descansar 4 minutos antes de servir.', 240]]
    },
    {
      title: 'Medalhão de Filé Mignon Envolto em Bacon Artesanal',
      sub: 'bife', diff: 'easy', prep: 10, cook: 12, cal: 490, p: 48, c: 1, fib: 0, f: 33, prem: false,
      tags: ['medalhão', 'bacon', 'clássico', 'suculento'],
      tip: 'Amarre uma tira de bacon ao redor do medalhão com barbante culinário para segurar a forma cilíndrica.',
      ings: [['Medalhões de filé mignon', 500, 'g', 'proteínas'], ['Fatias de bacon artesanal', 4, 'fatias', 'proteínas'], ['Manteiga para dourar', 25, 'g', 'despensa'], ['Pimenta preta moída', 1, 'colher de café', 'temperos']],
      steps: [['Enrolar bacon', 'Prenda o bacon em volta da lateral dos medalhões.', 180], ['Dourar na frigideira', 'Grelhe os dois lados e role a lateral para tostar o bacon.', 420], ['Servir macio', 'Retire o barbante e sirva imediatamente.', null]]
    },
    {
      title: 'Steak Tartare Nobre com Gema Caipira e Alcaparras',
      sub: 'bife', diff: 'hard', prep: 20, cook: 0, cal: 380, p: 42, c: 2, fib: 1, f: 23, prem: true,
      tags: ['steak_tartare', 'cru', 'bistrô', 'sem_fogão'],
      tip: 'Pique a carne na ponta da faca e mantenha a tigela sobre pedras de gelo durante o preparo.',
      ings: [['Filé mignon ultra fresco picado na faca', 400, 'g', 'proteínas'], ['Gemas caipiras frescas', 2, 'unidades', 'proteínas'], ['Alcaparras picadas', 2, 'colheres de sopa', 'temperos'], ['Mostarda Dijon e molho inglês sem açúcar', 1, 'colher de sopa', 'temperos'], ['Ciboulette e azeite extravirgem', 2, 'colheres de sopa', 'temperos']],
      steps: [['Picar a carne', 'Corte o mignon gelado em cubinhos milimétricos na ponta da faca.', 480], ['Temperar delicadamente', 'Misture com alcaparras, mostarda, azeite e ciboulette.', 180], ['Montar com gema', 'Molde em aro e coroe com a gema de ovo caipira no centro.', 60]]
    },
    {
      title: 'Picanha com Crosta de Sal Grosso e Manteiga Queimada no Forno',
      sub: 'bife', diff: 'medium', prep: 8, cook: 20, cal: 620, p: 47, c: 0, fib: 0, f: 49, prem: false,
      tags: ['picanha', 'forno', 'manteiga_queimada', 'suculenta'],
      tip: 'Asse a picanha inteira e fatie apenas na hora de servir para reter 100% dos sucos.',
      ings: [['Peça de picanha inteira', 1000, 'g', 'proteínas'], ['Sal grosso para churrasco', 2, 'colheres de sopa', 'temperos'], ['Manteiga', 50, 'g', 'laticínios']],
      steps: [['Selar a peça', 'Doure a gordura e os lados da peça na frigideira de ferro.', 360], ['Assar', 'Transfira ao forno a 200°C por 18 minutos.', 1080], ['Fatiar', 'Corte em fatias nobres de 2 dedos e regue a manteiga dourada.', null]]
    },
    {
      title: 'Bife de Alcatra ao Molho de Queijo Gorgonzola Cremoso',
      sub: 'bife', diff: 'easy', prep: 6, cook: 10, cal: 510, p: 46, c: 2, fib: 0, f: 36, prem: false,
      tags: ['alcatra', 'gorgonzola', 'dia_a_dia', 'fácil'],
      tip: 'Um corte mais acessível que atinge maciez extraordinária com o molho aveludado.',
      ings: [['Bifes de miolo de alcatra', 500, 'g', 'proteínas'], ['Queijo gorgonzola', 70, 'g', 'laticínios'], ['Creme de leite', 120, 'ml', 'laticínios'], ['Manteiga', 20, 'g', 'despensa']],
      steps: [['Grelhar bifes', 'Doure os bifes na frigideira quente.', 300], ['Fundir queijo', 'Na mesma panela, adicione o creme e o gorgonzola.', 180], ['Cobrir a carne', 'Despeje o molho quente sobre os bifes.', null]]
    },
    {
      title: 'Bife de Chorizo com Molho Béarnaise Cetogênico',
      sub: 'bife', diff: 'hard', prep: 15, cook: 12, cal: 640, p: 48, c: 2, fib: 0, f: 50, prem: true,
      tags: ['béarnaise', 'chorizo', 'francês', 'emulsão', 'luxo'],
      tip: 'A redução de vinagre branco com estragão fresco é a alma do molho Béarnaise.',
      ings: [['Bifes de chorizo', 500, 'g', 'proteínas'], ['Gemas caipiras para a emulsão', 2, 'unidades', 'proteínas'], ['Manteiga clarificada morna', 80, 'g', 'laticínios'], ['Estragão fresco picado', 2, 'colheres de sopa', 'temperos'], ['Redução de vinagre e chalota', 20, 'ml', 'despensa']],
      steps: [['Fazer o Béarnaise', 'Bata as gemas com a redução e incorpore a manteiga morna em fio contínuo.', 360], ['Grelhar chorizo', 'Doure a carne na frigideira estriada.', 360], ['Servir com molho', 'Acompanhe a carne quente com o molho aveludado à temperatura morna.', null]]
    },
    {
      title: 'Filé Mignon com Crosta de Ervas Finas e Crocante de Parmesão',
      sub: 'bife', diff: 'easy', prep: 8, cook: 10, cal: 480, p: 46, c: 2, fib: 0, f: 32, prem: false,
      tags: ['mignon', 'parmesão', 'ervas', 'elegante'],
      tip: 'Misture as ervas frescas com o parmesão e aperte contra a carne antes de selar.',
      ings: [['Medalhões de filé mignon', 500, 'g', 'proteínas'], ['Queijo parmesão ralado', 50, 'g', 'laticínios'], ['Tomilho, salsa e alecrim picadinhos', 2, 'colheres de sopa', 'temperos'], ['Azeite de oliva', 20, 'ml', 'despensa']],
      steps: [['Crosta de ervas', 'Empane a superfície dos medalhões no queijo com ervas.', 120], ['Selar', 'Doure na frigideira com azeite até criar crosta firme.', 360], ['Ponto suculento', 'Deixe descansar 2 minutos antes de servir.', 120]]
    },
    {
      title: 'Bife de Vazio com Manteiga de Alho Assado e Alecrim',
      sub: 'bife', diff: 'easy', prep: 5, cook: 12, cal: 570, p: 47, c: 2, fib: 0, f: 42, prem: false,
      tags: ['vazio', 'gaúcho', 'alho_assado', 'churrasco'],
      tip: 'O bife de vazio (ou fraldinha gaúcha) tem sabor bovino intenso e marmoreio perfeito.',
      ings: [['Peça de vazio bovino', 600, 'g', 'proteínas'], ['Manteiga com alho assado em pasta', 40, 'g', 'despensa'], ['Sal fino e pimenta', 1, 'colher de sopa', 'temperos']],
      steps: [['Grelhar brasa ou frigideira', 'Sele a carne com calor intenso dos dois lados.', 480], ['Manteiga aromática', 'Espalhe a manteiga de alho assado sobre a carne fatiada.', 60], ['Servir', 'Apresente fatiado em tiras grossas.', null]]
    },
    {
      title: 'Bife Ancho com Ovos Fritos no Ghee e Flor de Sal (Bife a Cavalo Nobre)',
      sub: 'bife', diff: 'easy', prep: 5, cook: 10, cal: 620, p: 52, c: 1, fib: 0, f: 46, prem: false,
      tags: ['bife_a_cavalo', 'ancho', 'ovo_frito', 'conforto'],
      tip: 'A gema mole do ovo escorre sobre o bife quente criando um molho natural fantástico.',
      ings: [['Bife de ancho', 500, 'g', 'proteínas'], ['Ovos caipiras', 2, 'unidades', 'proteínas'], ['Manteiga ghee', 30, 'g', 'despensa'], ['Flor de sal e pimenta moída', 1, 'colher de café', 'temperos']],
      steps: [['Grelhar ancho', 'Doure o ancho na manteiga ghee e passe para o prato.', 360], ['Estrelar os ovos', 'Na mesma manteiga rica, frite os 2 ovos mantendo as gemas líquidas.', 180], ['Coroar o bife', 'Acomode os ovos sobre a carne e salpique flor de sal.', null]]
    },
    {
      title: 'Bife de Contrafilé com Manteiga de Café e Pimenta da Jamaica',
      sub: 'bife', diff: 'medium', prep: 6, cook: 10, cal: 550, p: 47, c: 1, fib: 0, f: 40, prem: true,
      tags: ['contrafilé', 'café', 'manteiga_composta', 'exclusivo'],
      tip: 'O café solúvel com manteiga e pimenta da jamaica cria notas tostadas profundas na carne bovina.',
      ings: [['Bifes de contrafilé', 500, 'g', 'proteínas'], ['Manteiga batida com café expresso em pó', 40, 'g', 'laticínios'], ['Pimenta da jamaica moída', 1, 'pitada', 'temperos'], ['Sal grosso', 1, 'colher de chá', 'temperos']],
      steps: [['Grelhar bifes', 'Doure os bifes até o ponto desejado.', 360], ['Manteiga de café', 'Coloque a noz de manteiga de café para derreter sobre a carne.', 60], ['Servir', 'Sirva fumegante.', null]]
    },
    {
      title: 'Bife de Fígado Bovino ao Vinho Branco com Cebolas Caramelizadas Keto',
      sub: 'bife', diff: 'easy', prep: 8, cook: 8, cal: 420, p: 45, c: 4, fib: 1, f: 24, prem: false,
      tags: ['fígado', 'órgãos', 'denso_em_nutrientes', 'ferro'],
      tip: 'Não cozinhe o fígado em excesso; ele deve permanecer levemente rosado no centro para não endurecer.',
      ings: [['Bifes de fígado bovino fresco limpo', 500, 'g', 'proteínas'], ['Cebola fatiada fininha dourada em azeite', 100, 'g', 'vegetais'], ['Vinho branco seco', 30, 'ml', 'despensa'], ['Manteiga', 25, 'g', 'despensa']],
      steps: [['Dourar fígado', 'Frite os bifes rapidamente na manteiga bem quente (2 min de cada lado).', 240], ['Deglaçar panela', 'Adicione o vinho branco e as cebolas douradas.', 120], ['Finalizar', 'Sirva imediatamente suculento.', null]]
    },
    {
      title: 'Bife Prime Rib Grelhado com Salmoura de Ervas e Manteiga de Tutano',
      sub: 'bife', diff: 'hard', prep: 15, cook: 16, cal: 720, p: 58, c: 0, fib: 0, f: 56, prem: true,
      tags: ['prime_rib', 'tutano', 'luxo', 'alta_gastronomia'],
      tip: 'A gordura rica do tutano derretida sobre o corte nobre eleva o umami a outro nível.',
      ings: [['Prime Rib com osso de 700g', 700, 'g', 'proteínas'], ['Tutano bovino assado extraído', 50, 'g', 'proteínas'], ['Manteiga com flor de sal', 30, 'g', 'laticínios'], ['Alecrim fresco', 2, 'ramos', 'temperos']],
      steps: [['Grelhar com osso', 'Sele o prime rib em braseiro muito forte.', 600], ['Acrescentar tutano', 'Amasse o tutano com manteiga e pincele durante o descanso da carne.', 180], ['Apresentar', 'Sirva na tábua de madeira fatiado.', null]]
    },

    // 19-33: Carne Moída (15)
    {
      title: 'Almôndegas Nobres Recheadas com Muçarela de Búfala ao Pomodoro Caseiro',
      sub: 'carne_moida', diff: 'easy', prep: 15, cook: 20, cal: 490, p: 42, c: 5, fib: 2, f: 34, prem: false,
      tags: ['almôndegas', 'muçarela_de_búfala', 'pomodoro', 'família'],
      tip: 'Envolva uma bolinha de muçarela de búfala no centro de cada almôndega vedando bem.',
      ings: [['Patinho ou fraldinha moída duas vezes', 500, 'g', 'proteínas'], ['Muçarela de búfala em bolinhas (cerejinha)', 100, 'g', 'laticínios'], ['Molho de tomate pelado caseiro sem açúcar', 250, 'g', 'vegetais'], ['Parmesão ralado e manjericão fresco', 40, 'g', 'laticínios'], ['Ovo caipira', 1, 'unidade', 'proteínas']],
      steps: [['Temperar carne', 'Misture a carne moída com ovo, sal, pimenta e queijo parmesão.', 180], ['Rechear bolinhas', 'Molde as almôndegas com o queijo no miolo.', 240], ['Cozinhar no molho', 'Acomode no molho pomodoro fervente e cozinhe por 15 minutos tampado.', 900]]
    },
    {
      title: 'Escondidinho Cetogênico de Carne Seca com Purê Aveludado de Couve-Flor',
      sub: 'carne_moida', diff: 'medium', prep: 20, cook: 25, cal: 460, p: 38, c: 6, fib: 3, f: 31, prem: false,
      tags: ['escondidinho', 'carne_seca', 'couve-flor', 'conforto'],
      tip: 'Bata a couve-flor cozida ainda quente com creme de leite e manteiga para obter consistência de purê sedoso.',
      ings: [['Carne seca desfiada dessalgada refogada', 400, 'g', 'proteínas'], ['Purê de couve-flor com manteiga e nata', 400, 'g', 'vegetais'], ['Queijo coalho ralado para gratinar', 100, 'g', 'laticínios'], ['Cebola e cheiro-verde', 1, 'xícara', 'vegetais']],
      steps: [['Camada de carne', 'Coloque a carne seca refogada no fundo de um refratário.', 120], ['Cobrir de purê', 'Espalhe o purê de couve-flor aveludado por cima.', 120], ['Gratinar queijo', 'Polvilhe queijo coalho e asse a 200°C até dourar.', 1200]]
    },
    {
      title: 'Rocambole de Carne Recheado com Provolone, Bacon e Espinafre',
      sub: 'carne_moida', diff: 'medium', prep: 20, cook: 35, cal: 520, p: 46, c: 3, fib: 1, f: 36, prem: true,
      tags: ['rocambole', 'provolone', 'bacon', 'forno'],
      tip: 'Abra a carne sobre filme plástico ou papel manteiga para facilitar o enrolamento.',
      ings: [['Carne bovina moída temperada', 600, 'g', 'proteínas'], ['Queijo provolone fatiado', 100, 'g', 'laticínios'], ['Fatias de bacon', 6, 'fatias', 'proteínas'], ['Folhas de espinafre refogadas', 80, 'g', 'vegetais']],
      steps: [['Abrir a carne', 'Abra a carne em retângulo de 1,5cm de altura.', 180], ['Rechear e enrolar', 'Distribua o espinafre, provolone e bacon e enrole com a ajuda do papel.', 300], ['Assar', 'Asse a 190°C por 35 minutos até dourar.', 2100]]
    },
    {
      title: 'Chili Cetogênico sem Feijão com Cheddar Inglês e Jalapeños',
      sub: 'carne_moida', diff: 'easy', prep: 12, cook: 25, cal: 480, p: 41, c: 5, fib: 2, f: 33, prem: false,
      tags: ['chili', 'tex-mex', 'picante', 'cheddar'],
      tip: 'Use cominho em pó abundante e cacau puro 100% (1 colher de chá) para dar profundidade ao chili.',
      ings: [['Carne bovina moída (acém ou peito)', 500, 'g', 'proteínas'], ['Tomates pelados em cubos', 200, 'g', 'vegetais'], ['Queijo Cheddar ralado', 80, 'g', 'laticínios'], ['Pimentão picadinho e jalapeño', 60, 'g', 'vegetais'], ['Cominho e cacau 100%', 1, 'colher de sopa', 'temperos']],
      steps: [['Dourar a carne', 'Refogue a carne com o pimentão e cominho.', 360], ['Cozinhar molho', 'Junte o tomate pelado e cacau e apure por 20 minutos.', 1200], ['Servir com queijo', 'Finalize na tigela com cheddar ralado e fatias de jalapeño.', null]]
    },
    {
      title: 'Kafta Nobre de Carne Bovina com Hortelã e Molho de Iogurte Keto',
      sub: 'carne_moida', diff: 'easy', prep: 15, cook: 10, cal: 440, p: 44, c: 3, fib: 1, f: 28, prem: false,
      tags: ['kafta', 'árabe', 'hortelã', 'espeto'],
      tip: 'Amasse bem a carne com as mãos até liberar a proteína miozina, garantindo que não quebre no espeto.',
      ings: [['Carne moída com gordura (patinho com bacon)', 500, 'g', 'proteínas'], ['Hortelã fresca picada', 3, 'colheres de sopa', 'temperos'], ['Cebola ralada espremida', 40, 'g', 'vegetais'], ['Molho de iogurte com azeite e alho', 80, 'g', 'laticínios'], ['Pimenta síria', 1, 'colher de chá', 'temperos']],
      steps: [['Trabalhar a massa', 'Misture a carne com a hortelã, cebola e especiarias sovando bem.', 240], ['Modelar no espeto', 'Molde em formato cilíndrico nos espetos.', 180], ['Grelhar', 'Grelhe na frigideira de ferro ou churrasqueira por 10 minutos.', 600]]
    },
    {
      title: 'Carne Moída com Quiabo Crocante na Manteiga Ghee',
      sub: 'carne_moida', diff: 'easy', prep: 10, cook: 15, cal: 410, p: 38, c: 5, fib: 2, f: 27, prem: false,
      tags: ['quiabo', 'carne_moida', 'brasileiro', 'dia_a_dia'],
      tip: 'Frite o quiabo em rodelas na banha bem quente antes de juntar à carne moída refogada.',
      ings: [['Carne moída refogada', 450, 'g', 'proteínas'], ['Quiabos em rodelas selados no ghee', 150, 'g', 'vegetais'], ['Alho picado e cebola', 50, 'g', 'vegetais'], ['Manteiga ghee', 25, 'g', 'despensa']],
      steps: [['Refogar a carne', 'Doure a carne com alho e cebola até ficar soltinha.', 360], ['Saltear quiabo', 'Frite o quiabo em outra frigideira até dourar.', 240], ['Misturar', 'Junte o quiabo à carne e tempere com cheiro-verde.', 120]]
    },
    {
      title: 'Hambúrguer no Prato Recheado com Queijo Cheddar e Crosta de Bacon',
      sub: 'carne_moida', diff: 'easy', prep: 12, cook: 12, cal: 560, p: 46, c: 2, fib: 0, f: 42, prem: false,
      tags: ['burger_no_prato', 'cheddar', 'bacon', 'rápido'],
      tip: 'Coloque um cubo generoso de cheddar no meio de dois discos finos de carne e aperte as bordas.',
      ings: [['Carne moída (blend de peito e acém)', 500, 'g', 'proteínas'], ['Queijo Cheddar inglês em cubo', 80, 'g', 'laticínios'], ['Bacon picado frito crocante', 60, 'g', 'proteínas'], ['Manteiga para fritar', 20, 'g', 'despensa']],
      steps: [['Modelar burger recheado', 'Coloque o queijo no miolo da carne e sele as laterais.', 180], ['Grelhar', 'Cozinhe na frigideira de ferro com manteiga virando delicadamente.', 480], ['Finalizar crocante', 'Cubra com o bacon crocante e sirva com salada verde.', null]]
    },
    {
      title: 'Bolinhos de Carne Cetogênicos com Crosta de Parmesão',
      sub: 'carne_moida', diff: 'easy', prep: 12, cook: 15, cal: 430, p: 39, c: 2, fib: 1, f: 30, prem: false,
      tags: ['petisco', 'bolinho_de_carne', 'parmesão', 'airfryer'],
      tip: 'Asse na airfryer a 190°C para ficarem crocantes por fora e super suculentos por dentro.',
      ings: [['Carne moída fresca', 500, 'g', 'proteínas'], ['Farinha de linhaça dourada', 30, 'g', 'despensa'], ['Queijo parmesão ralado fino', 50, 'g', 'laticínios'], ['Ovo', 1, 'unidade', 'proteínas'], ['Salsinha e cebolinha picadas', 3, 'colheres de sopa', 'temperos']],
      steps: [['Misturar', 'Misture todos os ingredientes até dar liga homogênea.', 180], ['Fazer bolinhas', 'Modele bolinhos pequenos de 30g.', 180], ['Airfryer', 'Asse por 14 minutos até dourarem.', 840]]
    },
    {
      title: 'Torta de Carne Moída com Massa Folhada Fake de Queijo (Fathead)',
      sub: 'carne_moida', diff: 'medium', prep: 20, cook: 25, cal: 520, p: 44, c: 4, fib: 2, f: 37, prem: true,
      tags: ['torta', 'fathead', 'carne_moida', 'forno'],
      tip: 'A massa fathead à base de muçarela e farinha de amêndoas cria uma crosta dourada inacreditável.',
      ings: [['Carne moída temperada refogada', 400, 'g', 'proteínas'], ['Queijo muçarela derretido', 150, 'g', 'laticínios'], ['Farinha de amêndoas', 80, 'g', 'despensa'], ['Cream cheese', 30, 'g', 'laticínios'], ['Ovo', 1, 'unidade', 'proteínas']],
      steps: [['Massa fathead', 'Funda a muçarela com cream cheese e incorpore a farinha de amêndoas e ovo.', 180], ['Forrar forma', 'Abra metade da massa na forma, coloque o recheio de carne e cubra.', 300], ['Assar dourada', 'Asse a 180°C por 25 minutos.', 1500]]
    },
    {
      title: 'Charuto Cetogênico de Couve Recheado com Carne Moída e Especiarias',
      sub: 'carne_moida', diff: 'medium', prep: 20, cook: 25, cal: 390, p: 38, c: 5, fib: 3, f: 24, prem: false,
      tags: ['charuto', 'couve', 'árabe', 'saudável'],
      tip: 'Mergulhe as folhas de couve em água fervente por 30 segundos para amaciarem antes de enrolar.',
      ings: [['Folhas grandes de couve-manteiga', 8, 'folhas', 'vegetais'], ['Carne bovina moída com especiarias árabes', 500, 'g', 'proteínas'], ['Molho de tomate com azeite de oliva', 200, 'g', 'vegetais'], ['Suco de limão fresco', 2, 'colheres de sopa', 'temperos']],
      steps: [['Branquear folhas', 'Passe a couve na água fervente e retire a parte grossa do talo.', 180], ['Enrolar charutinhos', 'Coloque porções de carne e enrole dobrando as pontas.', 300], ['Cozinhar na panela', 'Arrume na panela com o molho de tomate e limão e cozinhe por 25 min.', 1500]]
    },
    {
      title: 'Berinjela Recheada com Carne Moída Gratinada com Queijo Parmesão',
      sub: 'carne_moida', diff: 'easy', prep: 15, cook: 25, cal: 420, p: 36, c: 6, fib: 3, f: 28, prem: false,
      tags: ['berinjela', 'gratinado', 'italiano', 'conforto'],
      tip: 'Asse as metades de berinjela antes de rechear para que fiquem macias e doces.',
      ings: [['Berinjelas médias cortadas ao meio', 2, 'unidades', 'vegetais'], ['Carne moída refogada com tomate e ervas', 400, 'g', 'proteínas'], ['Queijo parmesão e muçarela ralados', 80, 'g', 'laticínios'], ['Azeite extravirgem', 25, 'ml', 'despensa']],
      steps: [['Cavar berinjela', 'Retire a polpa das metades de berinjela e junte ao refogado de carne.', 180], ['Rechear', 'Preencha as canoas com a carne rica.', 120], ['Gratinar', 'Cubra com queijos e asse a 200°C até borbulhar.', 1200]]
    },
    {
      title: 'Pimentões Recheados com Carne Moída e Queijo Coalho',
      sub: 'carne_moida', diff: 'easy', prep: 15, cook: 25, cal: 410, p: 37, c: 6, fib: 2, f: 27, prem: false,
      tags: ['pimentão', 'recheado', 'queijo_coalho', 'colorido'],
      tip: 'Use pimentões vermelhos e amarelos, que são mais doces e menos ácidos que o verde.',
      ings: [['Pimentões médios sem sementes', 4, 'unidades', 'vegetais'], ['Carne bovina moída refogada', 450, 'g', 'proteínas'], ['Queijo coalho em cubinhos', 80, 'g', 'laticínios'], ['Cheiro-verde', 2, 'colheres de sopa', 'temperos']],
      steps: [['Preparar pimentões', 'Corte a tampa dos pimentões e retire as sementes.', 120], ['Rechear', 'Preencha com a carne e cubinhos de coalho.', 120], ['Forno', 'Asse em refratário a 190°C até o pimentão murchar e amaciar.', 1500]]
    },
    {
      title: 'Picadinho de Carne Moída com Azeitonas Pretas e Ovos Cozidos',
      sub: 'carne_moida', diff: 'easy', prep: 10, cook: 15, cal: 450, p: 42, c: 3, fib: 1, f: 30, prem: false,
      tags: ['picadinho', 'ovo_cozido', 'azeitona', 'dia_a_dia'],
      tip: 'Incorpore os ovos cozidos picados apenas na hora de servir para manter a gema bonita.',
      ings: [['Carne moída refogada em azeite', 500, 'g', 'proteínas'], ['Ovos caipiras cozidos picados', 3, 'unidades', 'proteínas'], ['Azeitonas pretas chilenas picadas', 50, 'g', 'vegetais'], ['Salsinha fresca picadinha', 2, 'colheres de sopa', 'temperos']],
      steps: [['Refogar carne', 'Doure a carne com cebola, alho e azeitonas.', 360], ['Juntar ovos', 'Desligue o fogo e incorpore delicadamente os ovos cozidos.', 60], ['Servir', 'Salpique a salsinha fresca.', null]]
    },
    {
      title: 'Espaguete de Abobrinha com Molho Bolonhesa Nobre Cozido Lentamente',
      sub: 'carne_moida', diff: 'easy', prep: 12, cook: 30, cal: 420, p: 38, c: 5, fib: 2, f: 28, prem: false,
      tags: ['zoodles', 'bolonhesa', 'abobrinha', 'italiano'],
      tip: 'Salteie a abobrinha em fios por apenas 1 minuto na manteiga para ficar al dente sem soltar água.',
      ings: [['Carne moída bovina (blend rico)', 450, 'g', 'proteínas'], ['Abobrinhas passadas no espirilizador', 3, 'unidades', 'vegetais'], ['Tomates pelados triturados', 250, 'g', 'vegetais'], ['Queijo parmesão ralado', 50, 'g', 'laticínios'], ['Manteiga', 20, 'g', 'despensa']],
      steps: [['Cozinhar o bolonhesa', 'Refogue a carne com o tomate pelado e deixe apurar em fogo baixo.', 1500], ['Saltear abobrinha', 'Doure a abobrinha na manteiga rapidamente por 1 minuto.', 60], ['Montar prato', 'Disponha a abobrinha e cubra com o molho denso e parmesão.', null]]
    },
    {
      title: 'Tacos Cetogênicos com Casquinha de Queijo Crocante e Carne Moída',
      sub: 'carne_moida', diff: 'medium', prep: 15, cook: 12, cal: 490, p: 42, c: 3, fib: 1, f: 35, prem: true,
      tags: ['tacos', 'crocante_de_queijo', 'mexicano', 'divertido'],
      tip: 'Dobre os discos de queijo parmesão derretido sobre o cabo de uma colher de pau para moldar o formato de taco shell.',
      ings: [['Queijo parmesão ou muçarela para os tacos', 120, 'g', 'laticínios'], ['Carne moída temperada com páprica e cominho', 400, 'g', 'proteínas'], ['Guacamole fresco e nata', 80, 'g', 'vegetais'], ['Coentro picado', 1, 'colher de sopa', 'temperos']],
      steps: [['Fazer casquinhas', 'Derreta círculos de queijo na frigideira e dobre para formar a concha.', 240], ['Refogar recheio', 'Cozinhe a carne com tempero de taco.', 360], ['Montar tacos', 'Preencha as casquinhas de queijo com carne, guacamole e nata.', null]]
    }
  ];

  // 34-80 Remaining Meat Recipes: Costela (12), Carne Assada (12), Hambúrguer (12), Suíno e Cordeiro (11)
  const remaining: { title: string; sub: string; diff: 'easy' | 'medium' | 'hard'; prep: number; cook: number; cal: number; p: number; c: number; fib: number; f: number; prem: boolean; tags: string[]; tip: string; ings: [string, number, string, any][]; steps: [string, string, number | null][] }[] = [
    // Costela (12)
    {
      title: 'Costela Bovina Desmanchando Assada no Bafo com Sal Grosso e Alho',
      sub: 'costela', diff: 'medium', prep: 15, cook: 180, cal: 680, p: 48, c: 1, fib: 0, f: 55, prem: true,
      tags: ['costela_bovina', 'bafo', 'churrasco', 'derretendo'],
      tip: 'Embrulhe a costela em 3 voltas de papel celofane culinário ou alumínio para cozinhar no próprio vapor.',
      ings: [['Costela de ripa ou janela bovina', 1500, 'g', 'proteínas'], ['Sal grosso de parrilla', 2, 'colheres de sopa', 'temperos'], ['Dentes de alho amassados com azeite', 6, 'unidades', 'vegetais']],
      steps: [['Temperar a peça', 'Esfregue o alho e sal por toda a costela.', 180], ['Embalar', 'Feche muito bem no papel próprio para assar.', 180], ['Assar lentamente', 'Asse a 160°C por 3 horas até o osso soltar limpo.', 10800]]
    },
    {
      title: 'Costelinha Suína com Molho Barbecue Caseiro Zero Açúcar',
      sub: 'costela', diff: 'easy', prep: 15, cook: 90, cal: 580, p: 45, c: 3, fib: 1, f: 43, prem: false,
      tags: ['costelinha_suína', 'barbecue_keto', 'defumado', 'festa'],
      tip: 'Retire a membrana prateada do osso antes de assar para que os temperos penetrem na carne.',
      ings: [['Racks de costelinha de porco limpas', 1200, 'g', 'proteínas'], ['Molho barbecue cetogênico', 120, 'g', 'temperos'], ['Dry rub de páprica, sal e pimenta', 2, 'colheres de sopa', 'temperos']],
      steps: [['Aplicar dry rub', 'Massageie o dry rub em toda a costela.', 180], ['Assar coberta', 'Asse coberta com papel alumínio a 160°C por 80 min.', 4800], ['Glacear com barbecue', 'Pincele o barbecue e doure aberta por 15 min.', 900]]
    },
    {
      title: 'Costela Bovina Desfiada na Frigideira com Manteiga de Garrafa',
      sub: 'costela', diff: 'easy', prep: 10, cook: 15, cal: 590, p: 46, c: 1, fib: 0, f: 45, prem: false,
      tags: ['costela_desfiada', 'manteiga_de_garrafa', 'nordestino', 'conforto'],
      tip: 'Aqueça bem a frigideira de ferro para tostar as pontinhas da carne desfiada.',
      ings: [['Costela bovina cozida e desfiada', 500, 'g', 'proteínas'], ['Manteiga de garrafa pura', 40, 'ml', 'despensa'], ['Cebola roxa fatiada fina', 80, 'g', 'vegetais'], ['Cheiro-verde picadinho', 3, 'colheres de sopa', 'temperos']],
      steps: [['Dourar cebola', 'Frite a cebola na manteiga de garrafa até murchar.', 180], ['Tostar carne', 'Junte a costela desfiada e deixe criar crosta dourada.', 360], ['Finalizar', 'Salpique cheiro-verde abundante.', null]]
    },
    {
      title: 'Costelinha de Porco Glaceada com Mostarda Dijon e Alecrim',
      sub: 'costela', diff: 'medium', prep: 12, cook: 80, cal: 560, p: 44, c: 2, fib: 0, f: 42, prem: false,
      tags: ['costelinha', 'mostarda_dijon', 'alecrim', 'bistrô'],
      tip: 'A acidez da mostarda Dijon corta a untuosidade da carne de porco com perfeição.',
      ings: [['Costela suína fresca', 1000, 'g', 'proteínas'], ['Mostarda Dijon autêntica', 3, 'colheres de sopa', 'temperos'], ['Azeite extravirgem e alecrim picado', 2, 'colheres de sopa', 'despensa']],
      steps: [['Besuntar', 'Cubra a carne com a mostarda, azeite, sal e alecrim.', 180], ['Forno coberto', 'Asse a 170°C por 1 hora e 15 minutos.', 4500], ['Dourar aberto', 'Deixe dourar por 10 minutos a 210°C.', 600]]
    },
    {
      title: 'Costela Janela Assada no Forno com Ervas Aromáticas e Vinho Seco',
      sub: 'costela', diff: 'hard', prep: 20, cook: 180, cal: 690, p: 49, c: 1, fib: 0, f: 55, prem: true,
      tags: ['costela_janela', 'vinho_tinto', 'assado_lento', 'luxo'],
      tip: 'O fundo de vinho tinto seco evapora gerando um vapor aromático irresistível.',
      ings: [['Costela janela bovina', 1500, 'g', 'proteínas'], ['Vinho tinto seco cabernet', 100, 'ml', 'despensa'], ['Tomilho, sálvia e louro', 5, 'ramos', 'temperos'], ['Alho inteiro e sal grosso', 1, 'colher de sopa', 'temperos']],
      steps: [['Dispor na assadeira', 'Coloque a costela sobre cama de ervas com o vinho no fundo.', 180], ['Vedar assadeira', 'Sele com papel alumínio triplo.', 120], ['Assar', 'Cozinhe lentamente a 150°C por 3 horas.', 10800]]
    },
    {
      title: 'Costelinha Suína na Airfryer com Alho e Ervas Finas',
      sub: 'costela', diff: 'easy', prep: 8, cook: 30, cal: 540, p: 43, c: 1, fib: 0, f: 41, prem: false,
      tags: ['costelinha', 'airfryer', 'prática', '30_minutos'],
      tip: 'Corte as costelinhas ripa a ripa para assarem rapidamente na cesta da airfryer.',
      ings: [['Costelinhas suínas cortadas individuais', 700, 'g', 'proteínas'], ['Alho amassado com azeite', 30, 'g', 'vegetais'], ['Ervas finas e sal marinho', 1, 'colher de sopa', 'temperos']],
      steps: [['Temperar ripas', 'Envolva as costelinhas no alho, azeite e ervas.', 120], ['Airfryer', 'Asse a 180°C virando na metade do tempo.', 1500], ['Dourar', 'Aumente para 200°C por 5 minutos para dourar.', 300]]
    },
    {
      title: 'Costela de Cordeiro Assada com Crosta de Hortelã e Pistache',
      sub: 'costela', diff: 'hard', prep: 15, cook: 25, cal: 620, p: 42, c: 3, fib: 1, f: 49, prem: true,
      tags: ['cordeiro', 'pistache', 'hortelã', 'alta_gastronomia'],
      tip: 'O pistache triturado com folhas de hortelã cria uma crosta verde linda e aromática.',
      ings: [['Carré de costela de cordeiro limpo', 600, 'g', 'proteínas'], ['Pistaches triturados', 50, 'g', 'despensa'], ['Hortelã fresca picada', 2, 'colheres de sopa', 'temperos'], ['Mostarda Dijon para fixar', 1, 'colher de sopa', 'temperos']],
      steps: [['Selar na frigideira', 'Doure a peça inteira rapidamente na manteiga.', 240], ['Pincelar mostarda e empanar', 'Passe mostarda e grude o pistache com hortelã.', 120], ['Assar rosado', 'Asse a 200°C por 15 minutos mantendo o interior rosado.', 900]]
    },
    {
      title: 'Costelinha Suína com Crosta Crocante de Torresmo Ralado',
      sub: 'costela', diff: 'medium', prep: 12, cook: 70, cal: 610, p: 48, c: 1, fib: 0, f: 46, prem: true,
      tags: ['costelinha', 'torresmo', 'crocante', 'mineiro'],
      tip: 'Triture o torresmo seco no processador para criar uma farofa hiper crocante zero carb.',
      ings: [['Costelinha de porco', 1000, 'g', 'proteínas'], ['Farinha de torresmo artesanal pura', 80, 'g', 'proteínas'], ['Banha de porco derretida', 30, 'ml', 'despensa'], ['Limão e pimenta', 1, 'colher de sopa', 'temperos']],
      steps: [['Assar costelinha', 'Cozinhe a costela coberta até amaciar.', 3600], ['Empanar no torresmo', 'Pincele a banha e cubra com a farinha de torresmo.', 120], ['Gratinar crocante', 'Leve ao forno alto até pururucar a crosta.', 600]]
    },
    {
      title: 'Costela Bovina na Panela de Pressão com Vinho Branco e Louro',
      sub: 'costela', diff: 'easy', prep: 10, cook: 40, cal: 620, p: 47, c: 1, fib: 0, f: 48, prem: false,
      tags: ['costela_pressão', 'fácil', 'conforto', 'derretendo'],
      tip: 'Não precisa adicionar água; a costela e as cebolas soltam líquido suficiente para o cozimento.',
      ings: [['Pedaços de costela bovina', 1000, 'g', 'proteínas'], ['Cebolas cortadas em rodelas grossas', 2, 'unidades', 'vegetais'], ['Folhas de louro e sal grosso', 3, 'folhas', 'temperos']],
      steps: [['Cama de cebola', 'Forre o fundo da panela com a cebola e louro.', 120], ['Acomodar costela', 'Coloque a costela salgada sobre a cebola com o osso para baixo.', 120], ['Cozinhar sob pressão', 'Tampe e cozinhe em fogo baixo por 40 minutos após pegar pressão.', 2400]]
    },
    {
      title: 'Costelinha de Porco à Passarinho Crocante na Manteiga Ghee',
      sub: 'costela', diff: 'easy', prep: 10, cook: 20, cal: 520, p: 42, c: 1, fib: 0, f: 39, prem: false,
      tags: ['costelinha', 'petisco', 'ghee', 'crocante'],
      tip: 'Frite em imersão de ghee bem quente para casquinha dourada estaladiça.',
      ings: [['Costelinha suína cortada em cubos pequenos', 700, 'g', 'proteínas'], ['Manteiga ghee para fritar', 100, 'g', 'despensa'], ['Alho picadinho e limão', 2, 'colheres de sopa', 'temperos']],
      steps: [['Marinar no limão', 'Tempere a costelinha com alho, sal e limão.', 300], ['Fritar no ghee', 'Doure os pedaços no ghee até ficarem crocantes.', 720], ['Escorrer e servir', 'Sirva com rodelas de limão fresco.', null]]
    },
    {
      title: 'Costela Bovina Defumada com Dry Rub de Especiarias Texanas',
      sub: 'costela', diff: 'hard', prep: 20, cook: 240, cal: 710, p: 50, c: 1, fib: 0, f: 57, prem: true,
      tags: ['beef_ribs', 'texas', 'dry_rub', 'defumado'],
      tip: 'O anel de fumaça rosado na carne é o selo de maestria na defumação lenta.',
      ings: [['Grandes costelas de boi estilo texano', 1800, 'g', 'proteínas'], ['Dry rub com páprica, alho, cebola e pimenta preta grossa', 3, 'colheres de sopa', 'temperos']],
      steps: [['Aplicar tempero texano', 'Cubra a carne com a pimenta preta e sal.', 180], ['Defumar a 110°C', 'Cozinhe lentamente com fumaça de lenha frutífera por 4 horas.', 14400], ['Fatiar osso a osso', 'Fatie em porções monumentais e suculentas.', null]]
    },
    {
      title: 'Costelinha Suína com Chimichurri de Ervas e Flor de Sal',
      sub: 'costela', diff: 'easy', prep: 10, cook: 60, cal: 550, p: 44, c: 1, fib: 0, f: 41, prem: false,
      tags: ['costelinha', 'chimichurri', 'platino', 'churrasco'],
      tip: 'Regue o chimichurri fresco sobre a costelinha imediatamente ao sair do forno.',
      ings: [['Ripas de costelinha suína', 900, 'g', 'proteínas'], ['Chimichurri caseiro rico em azeite', 80, 'g', 'temperos'], ['Flor de sal', 1, 'colher de café', 'temperos']],
      steps: [['Assar costela', 'Asse a costelinha a 180°C até dourar.', 3600], ['Balançar chimichurri', 'Cubra generosamente com chimichurri fresco.', 60], ['Servir aromática', 'Apresente fumegante.', null]]
    },

    // Carne Assada (12)
    {
      title: 'Maminha Assada na Manteiga com Ramos de Alecrim da Horta',
      sub: 'carne_assada', diff: 'easy', prep: 8, cook: 35, cal: 540, p: 48, c: 1, fib: 0, f: 38, prem: false,
      tags: ['maminha', 'assada', 'manteiga', 'domingo'],
      tip: 'Deixe a maminha descansar 5 minutos antes de fatiar para não perder a suculência.',
      ings: [['Peça de maminha limpa', 1000, 'g', 'proteínas'], ['Manteiga em ponto de pomada', 60, 'g', 'laticínios'], ['Ramos de alecrim fresco', 4, 'ramos', 'temperos'], ['Sal grosso moído', 1, 'colher de sopa', 'temperos']],
      steps: [['Besuntar com manteiga', 'Passe a manteiga e sal grosso por toda a peça.', 120], ['Assar com alecrim', 'Acomode os ramos de alecrim por cima e asse a 200°C por 35 min.', 2100], ['Fatiar no ponto', 'Corte em fatias finas no sentido correto da fibra.', null]]
    },
    {
      title: 'Lagarto ao Molho Madeira Keto com Cogumelos Paris Frescos',
      sub: 'carne_assada', diff: 'medium', prep: 15, cook: 50, cal: 460, p: 46, c: 3, fib: 1, f: 29, prem: false,
      tags: ['lagarto', 'molho_madeira', 'cogumelos', 'clássico'],
      tip: 'Substitua o amido do molho tradicional por redução paciente do vinho com manteiga gelada.',
      ings: [['Peça de lagarto bovino selada', 1000, 'g', 'proteínas'], ['Vinho seco tinto de qualidade', 150, 'ml', 'despensa'], ['Cogumelos Paris fatiados', 150, 'g', 'vegetais'], ['Manteiga gelada em cubos', 40, 'g', 'laticínios']],
      steps: [['Cozinhar lagarto', 'Cozinhe o lagarto na pressão com caldo aromático por 40 min.', 2400], ['Fazer o molho', 'Reduza o caldo com vinho tinto e salteie os cogumelos.', 480], ['Emulsionar com manteiga', 'Desligue e junte a manteiga gelada batendo com batedor de arame.', 120]]
    },
    {
      title: 'Cupim Assado Lentamente na Manteiga com Alho Confitado',
      sub: 'carne_assada', diff: 'medium', prep: 15, cook: 180, cal: 720, p: 42, c: 1, fib: 0, f: 62, prem: true,
      tags: ['cupim', 'marmoreio', 'confit', 'manteiga'],
      tip: 'O cupim possui o maior teor de gordura entremeada da carne bovina brasileira.',
      ings: [['Peça de cupim bovino', 1200, 'g', 'proteínas'], ['Manteiga clarificada ou ghee', 100, 'g', 'despensa'], ['Cabeça de alho confitada', 1, 'unidade', 'vegetais'], ['Sal grosso', 1, 'colher de sopa', 'temperos']],
      steps: [['Embalar', 'Envolva a carne temperada com o alho e manteiga em papel alumínio.', 180], ['Forno brando', 'Asse a 150°C por 3 horas.', 10800], ['Dourar crosta', 'Abra o papel e doure a 220°C por 15 minutos.', 900]]
    },
    {
      title: 'Roast Beef de Filé Mignon com Crosta de Pimenta Preta e Ervas',
      sub: 'carne_assada', diff: 'medium', prep: 10, cook: 20, cal: 430, p: 47, c: 1, fib: 0, f: 26, prem: true,
      tags: ['roast_beef', 'mignon', 'frio_ou_quente', 'elegante'],
      tip: 'Deixe esfriar completamente na geladeira antes de fatiar para conseguir lâminas finas como papel.',
      ings: [['Peça central de filé mignon', 800, 'g', 'proteínas'], ['Mix de pimentas pretas quebradas', 2, 'colheres de sopa', 'temperos'], ['Azeite de oliva e flor de sal', 2, 'colheres de sopa', 'despensa']],
      steps: [['Rolar nas pimentas', 'Pressione o mignon na crosta de pimentas e ervas secas.', 180], ['Selar todos os lados', 'Doure na frigideira bem quente por 2 minutos de cada lado.', 480], ['Forno rápido', 'Leve ao forno a 200°C por 10 minutos e gele antes de fatiar.', 600]]
    },
    {
      title: 'Fraldinha Assada na Mostarda com Crosta de Alho Confit',
      sub: 'carne_assada', diff: 'easy', prep: 10, cook: 30, cal: 530, p: 46, c: 2, fib: 0, f: 38, prem: false,
      tags: ['fraldinha', 'mostarda', 'alho', 'forno'],
      tip: 'A mostarda cria uma película protetora que impede o ressecamento da carne.',
      ings: [['Peça de fraldinha', 800, 'g', 'proteínas'], ['Mostarda amarela com dijon', 3, 'colheres de sopa', 'temperos'], ['Alho confitado amassado', 1, 'cabeça', 'vegetais']],
      steps: [['Passar mostarda', 'Pincele a mostarda com alho em toda a fraldinha.', 120], ['Assar', 'Asse a 200°C por 30 minutos.', 1800], ['Fatiar nobre', 'Fatie em tiras contra a fibra.', null]]
    },
    {
      title: 'Picanha ao Forno Inteira Recheada com Queijo Provolone e Alho',
      sub: 'carne_assada', diff: 'hard', prep: 15, cook: 40, cal: 660, p: 49, c: 2, fib: 0, f: 51, prem: true,
      tags: ['picanha_recheada', 'provolone', 'alho', 'festa'],
      tip: 'Vire a ponta da picanha pelo avesso com auxílio de uma faca afiada para rechear.',
      ings: [['Peça de picanha inteira de 1kg', 1000, 'g', 'proteínas'], ['Queijo provolone em bastão', 120, 'g', 'laticínios'], ['Dentes de alho dourados na manteiga', 6, 'unidades', 'vegetais']],
      steps: [['Abrir cavidade', 'Faça um furo central sem vazar as laterais.', 180], ['Rechear', 'Introduza o provolone e os dentes de alho.', 120], ['Assar na brasa ou forno', 'Asse a 200°C até a capa de gordura dourar por inteiro.', 2400]]
    },
    {
      title: 'Carne Assada de Panela com Cebolinhas Pérola e Vinho Tinto',
      sub: 'carne_assada', diff: 'medium', prep: 15, cook: 55, cal: 480, p: 45, c: 4, fib: 1, f: 30, prem: false,
      tags: ['carne_de_panela', 'cebolinhas', 'conforto', 'almoço'],
      tip: 'Doure a peça de acém intensamente até criar uma borra marrom no fundo da panela de ferro.',
      ings: [['Acém ou miolo de paleta em pedaço grande', 800, 'g', 'proteínas'], ['Cebolinhas pérola descascadas inteiras', 120, 'g', 'vegetais'], ['Vinho tinto seco', 100, 'ml', 'despensa'], ['Caldo de ossos denso', 200, 'ml', 'despensa']],
      steps: [['Selar a carne', 'Doure todos os lados na panela de ferro quente.', 360], ['Deglaçar com vinho', 'Coloque o vinho e o caldo raspando o fundo saboroso.', 180], ['Cozimento lento', 'Cozinhe tampado com as cebolinhas até a carne desfiar ao toque.', 3000]]
    },
    {
      title: 'Alcatra Assada com Ervas da Provence e Manteiga de Alho',
      sub: 'carne_assada', diff: 'easy', prep: 10, cook: 35, cal: 490, p: 46, c: 1, fib: 0, f: 33, prem: false,
      tags: ['alcatra', 'assada', 'ervas', 'família'],
      tip: 'Uma peça inteira de alcatra bem assada rende fatias macias e suculentas para a semana toda.',
      ings: [['Miolo de alcatra inteiro', 1000, 'g', 'proteínas'], ['Manteiga com ervas de provence', 50, 'g', 'despensa'], ['Sal grosso moído', 1, 'colher de sopa', 'temperos']],
      steps: [['Temperar', 'Passe a manteiga de ervas na peça.', 120], ['Assar', 'Asse em assadeira a 190°C por 35 minutos.', 2100], ['Descanso', 'Deixe repousar antes de fatiar.', 300]]
    },
    {
      title: 'Picanha Suína Assada com Crosta de Limão e Ervas Finas',
      sub: 'carne_assada', diff: 'easy', prep: 10, cook: 40, cal: 490, p: 44, c: 2, fib: 0, f: 34, prem: false,
      tags: ['picanha_suína', 'limão', 'ervas', 'suculenta'],
      tip: 'A picanha suína é extremamente macia e possui excelente perfil de gorduras.',
      ings: [['Peça de picanha suína', 800, 'g', 'proteínas'], ['Suco e raspas de 2 limões', 2, 'unidades', 'temperos'], ['Azeite, alecrim e sal', 2, 'colheres de sopa', 'despensa']],
      steps: [['Marinar com limão', 'Esfregue o limão com as ervas na carne.', 180], ['Assar coberta', 'Asse por 30 minutos a 190°C.', 1800], ['Dourar aberta', 'Deixe mais 10 minutos para pururucar a gordura.', 600]]
    },
    {
      title: 'Paleta Bovina Assada no Vinho Tinto com Ramos de Tomilho',
      sub: 'carne_assada', diff: 'medium', prep: 15, cook: 90, cal: 510, p: 47, c: 2, fib: 0, f: 34, prem: false,
      tags: ['paleta', 'assada_lentamente', 'vinho_tinto', 'tomilho'],
      tip: 'O colágeno da paleta derrete durante o cozimento longo tornando o molho aveludado naturalmente.',
      ings: [['Paleta bovina limpa', 1000, 'g', 'proteínas'], ['Vinho tinto seco', 150, 'ml', 'despensa'], ['Ramos de tomilho fresco', 6, 'ramos', 'temperos'], ['Manteiga', 30, 'g', 'despensa']],
      steps: [['Selar carne', 'Doure a paleta em panela grossa.', 360], ['Adicionar vinho', 'Junte o vinho e tomilho.', 120], ['Forno lento', 'Transfira ao forno tampada por 1h30 a 160°C.', 5400]]
    },
    {
      title: 'Maminha Assada Recheada com Queijo Gorgonzola e Bacon',
      sub: 'carne_assada', diff: 'medium', prep: 15, cook: 40, cal: 580, p: 48, c: 2, fib: 0, f: 42, prem: true,
      tags: ['maminha_recheada', 'gorgonzola', 'bacon', 'gourmet'],
      tip: 'O gorgonzola funde e permeia as fibras da maminha conferindo cremosidade a cada fatia.',
      ings: [['Peça de maminha', 1000, 'g', 'proteínas'], ['Queijo gorgonzola amassado', 100, 'g', 'laticínios'], ['Bacon fatiado frito', 60, 'g', 'proteínas']],
      steps: [['Abrir bolsa', 'Corte o centro da maminha com faca afiada.', 180], ['Rechear', 'Coloque o gorgonzola e o bacon.', 120], ['Assar', 'Feche com palitos e asse a 190°C.', 2400]]
    },
    {
      title: 'Fraldinha na Brasa com Manteiga de Trufas Brancas',
      sub: 'carne_assada', diff: 'hard', prep: 5, cook: 15, cal: 590, p: 45, c: 1, fib: 0, f: 45, prem: true,
      tags: ['fraldinha', 'trufas', 'alta_gastronomia', 'churrasco_gourmet'],
      tip: 'Adicione a manteiga trufada no instante do fatiamento para que o aroma suba aos convidados.',
      ings: [['Peça de fraldinha selecionada', 700, 'g', 'proteínas'], ['Manteiga aromatizada com trufas brancas', 40, 'g', 'despensa'], ['Sal de parrilla', 1, 'colher de sopa', 'temperos']],
      steps: [['Grelhar com fogo alto', 'Sele a fraldinha rapidamente na brasa quente.', 480], ['Descansar na tábua', 'Repouse a carne por 3 minutos.', 180], ['Manteiga trufada', 'Fatie fininho e cubra com fatias de manteiga trufada.', null]]
    },

    // Hambúrgueres (12)
    {
      title: 'Smash Burger Cetogênico Duplo com Crosta de Cheddar e Bacon',
      sub: 'hamburguer', diff: 'easy', prep: 10, cook: 6, cal: 580, p: 44, c: 2, fib: 0, f: 45, prem: false,
      tags: ['smash_burger', 'cheddar', 'bacon', 'lanchonete'],
      tip: 'Pressione a bolinha de carne com espátula pesada sobre a chapa pelando para criar crosta maillard estaladiça.',
      ings: [['Bolinhas de blend bovino (peito e acém) de 90g', 2, 'unidades', 'proteínas'], ['Fatias de queijo Cheddar inglês legítimo', 2, 'fatias', 'laticínios'], ['Fatias de bacon artesanal crocante', 2, 'fatias', 'proteínas'], ['Folhas de alface americana crocante para embrulhar', 2, 'folhas', 'vegetais']],
      steps: [['Esmagar na chapa', 'Prense as duas bolinhas com espátula na chapa de ferro.', 120], ['Derreter queijo', 'Vire, coloque uma fatia de cheddar em cada carne e abafe.', 90], ['Montar no alface', 'Empilhe os smash burgers com bacon dentro do wrap de alface.', 60]]
    },
    {
      title: 'Hambúrguer de Cordeiro com Molho de Iogurte, Hortelã e Queijo Feta',
      sub: 'hamburguer', diff: 'medium', prep: 12, cook: 8, cal: 510, p: 42, c: 3, fib: 1, f: 37, prem: true,
      tags: ['cordeiro', 'burger_gourmet', 'hortelã', 'feta'],
      tip: 'A carne de cordeiro harmoniza magnificamente com o frescor da hortelã e a acidez do queijo feta.',
      ings: [['Carne moída de cordeiro fresca', 400, 'g', 'proteínas'], ['Queijo feta esfarelado', 60, 'g', 'laticínios'], ['Iogurte grego com folhas de hortelã', 80, 'g', 'laticínios'], ['Zátar e alho em pó', 1, 'colher de café', 'temperos']],
      steps: [['Modelar hambúrgueres', 'Tempere e molde 2 hambúrgueres altos.', 180], ['Grelhar no ponto', 'Doure por 4 minutos de cada lado na grelha quente.', 480], ['Montar com feta', 'Disponha o queijo feta e o molho refrescante de hortelã por cima.', null]]
    },
    {
      title: 'Hambúrguer de Picanha com Queijo Brie Derretido e Cebola Roxa',
      sub: 'hamburguer', diff: 'easy', prep: 10, cook: 8, cal: 620, p: 46, c: 3, fib: 1, f: 47, prem: true,
      tags: ['burger_picanha', 'brie', 'cebola_roxa', 'luxo'],
      tip: 'Moa a picanha com sua própria gordura na proporção 80/20 para obter maciez incomparável.',
      ings: [['Blend de picanha pura moída', 400, 'g', 'proteínas'], ['Queijo Brie fatiado', 80, 'g', 'laticínios'], ['Cebola roxa salteada na manteiga', 60, 'g', 'vegetais'], ['Manteiga para dourar', 20, 'g', 'despensa']],
      steps: [['Grelhar hambúrguer', 'Coloque na frigideira fumegante.', 240], ['Brie derretido', 'Cubra com o queijo brie e tampe para derreter.', 120], ['Finalizar com cebola', 'Coroe com a cebola roxa amanteigada.', null]]
    },
    {
      title: 'Burger Cetogênico no Prato com Cogumelos Salteados e Gorgonzola',
      sub: 'hamburguer', diff: 'easy', prep: 10, cook: 10, cal: 540, p: 43, c: 3, fib: 1, f: 39, prem: false,
      tags: ['burger_no_prato', 'cogumelos', 'gorgonzola', 'sem_pão'],
      tip: 'Sirva sobre uma generosa base de folhas de rúcula selvagem temperadas com azeite e flor de sal.',
      ings: [['Hambúrgueres de fraldinha (200g)', 2, 'unidades', 'proteínas'], ['Cogumelos frescos salteados no azeite', 100, 'g', 'vegetais'], ['Queijo gorgonzola em pedaços', 60, 'g', 'laticínios'], ['Folhas de rúcula fresca', 50, 'g', 'vegetais']],
      steps: [['Grelhar burger', 'Grelhe a carne até dourar bem os dois lados.', 360], ['Saltear cogumelos', 'Salteie os cogumelos na mesma gordura com tomilho.', 180], ['Montagem no prato', 'Disponha o burger sobre a rúcula, cubra com o queijo e cogumelos quentes.', null]]
    },
    {
      title: 'Hambúrguer de Costela Bovina com Maionese de Bacon e Queijo Prato',
      sub: 'hamburguer', diff: 'easy', prep: 10, cook: 8, cal: 590, p: 44, c: 2, fib: 0, f: 46, prem: false,
      tags: ['burger_costela', 'maionese_de_bacon', 'churrasco', 'clássico'],
      tip: 'A carne de costela bovina moída dispensa qualquer tempero prévio além do sal grosso na chapa.',
      ings: [['Hambúrgueres de costela bovina', 400, 'g', 'proteínas'], ['Maionese caseira feita com gordura de bacon', 50, 'g', 'laticínios'], ['Queijo prato artesanal fatiado', 60, 'g', 'laticínios'], ['Picles de pepino sem açúcar', 30, 'g', 'vegetais']],
      steps: [['Grelhar na brasa ou frigideira', 'Doure os burgers por 4 minutos de cada lado.', 480], ['Fundir queijo prato', 'Abra o queijo prato e deixe borbulhar.', 60], ['Finalizar', 'Sirva com a maionese de bacon e fatias de picles crocante.', null]]
    },
    {
      title: 'Hambúrguer com Pão Cetogênico Fathead de Gergelim',
      sub: 'hamburguer', diff: 'medium', prep: 20, cook: 15, cal: 640, p: 48, c: 5, fib: 2, f: 49, prem: true,
      tags: ['burger_completo', 'pão_fathead', 'lanche', 'artesanal'],
      tip: 'O pão fathead assado na hora aguenta o peso do hambúrguer suculento sem esfarelar.',
      ings: [['Blend de carnes nobres', 400, 'g', 'proteínas'], ['Pães de hambúrguer keto de amêndoas e queijo', 2, 'unidades', 'despensa'], ['Queijo Cheddar', 60, 'g', 'laticínios'], ['Molho especial keto (maionese, mostarda e páprica)', 40, 'g', 'despensa']],
      steps: [['Tostar os pães', 'Doure as faces do pão keto na manteiga.', 120], ['Grelhar hambúrgueres', 'Asse os burgers com o queijo cheddar.', 360], ['Montar lanche', 'Passe o molho especial no pão, coloque a carne e feche.', null]]
    },
    {
      title: 'Smash Burger de Frango e Bacon com Queijo Gouda',
      sub: 'hamburguer', diff: 'easy', prep: 10, cook: 8, cal: 490, p: 43, c: 2, fib: 0, f: 34, prem: false,
      tags: ['burger_frango', 'gouda', 'bacon', 'leve'],
      tip: 'Moa a sobrecoxa de frango com tiras de bacon para criar um smash incrivelmente suculento.',
      ings: [['Sobrecoxa moída com bacon artesanal', 400, 'g', 'proteínas'], ['Queijo Gouda fatiado', 60, 'g', 'laticínios'], ['Maionese verde de ervas', 40, 'g', 'laticínios']],
      steps: [['Esmagar na chapa quente', 'Prense a carne de frango com bacon na chapa.', 180], ['Virar e cobrir de gouda', 'Vire após dourar a crosta e cubra de gouda.', 180], ['Servir', 'Acompanhe com maionese verde fresca.', null]]
    },
    {
      title: 'Hambúrguer de Wagyu com Flor de Sal e Queijo Gruyère',
      sub: 'hamburguer', diff: 'hard', prep: 8, cook: 6, cal: 680, p: 45, c: 1, fib: 0, f: 56, prem: true,
      tags: ['wagyu', 'gruyère', 'luxo', 'alta_gastronomia'],
      tip: 'A gordura do Wagyu tem ponto de fusão mais baixo; grelhe em calor altíssimo por tempo reduzido.',
      ings: [['Carne de Wagyu moída fresca', 400, 'g', 'proteínas'], ['Queijo Gruyère ralado grosso', 70, 'g', 'laticínios'], ['Flor de sal da Guérande', 1, 'pitada', 'temperos']],
      steps: [['Grelhar rápido', 'Sele na frigideira de ferro bem quente (2 min de cada lado).', 240], ['Derreter gruyère', 'Coloque o queijo e tampe por 60 segundos.', 60], ['Servir com flor de sal', 'Polvilhe flor de sal sobre a carne.', null]]
    },
    {
      title: 'Hambúrguer Recheado com Catupiry Legítimo e Alho Crocante',
      sub: 'hamburguer', diff: 'easy', prep: 12, cook: 10, cal: 560, p: 45, c: 2, fib: 0, f: 41, prem: false,
      tags: ['burger_recheado', 'catupiry', 'alho', 'brasileiro'],
      tip: 'Certifique-se de vedar as laterais da carne para o queijo não escapar durante a cocção.',
      ings: [['Carne moída fresca', 450, 'g', 'proteínas'], ['Requeijão cremoso legítimo (catupiry)', 80, 'g', 'laticínios'], ['Alho frito laminado', 2, 'colheres de sopa', 'vegetais']],
      steps: [['Rechear o disco', 'Coloque o catupiry no centro de dois discos e sele as bordas.', 180], ['Grelhar com calma', 'Doure em fogo médio na chapa.', 420], ['Alho crocante', 'Salpique o alho frito na hora de servir.', null]]
    },
    {
      title: 'Burger no Prato com Crosta de Parmesão e Rúcula Silvestre',
      sub: 'hamburguer', diff: 'easy', prep: 8, cook: 8, cal: 510, p: 46, c: 2, fib: 1, f: 36, prem: false,
      tags: ['parmesão', 'rúcula', 'burger_no_prato', 'fácil'],
      tip: 'Passe uma face do hambúrguer no parmesão ralado antes de encostar na frigideira quente.',
      ings: [['Hambúrgueres de fraldinha', 400, 'g', 'proteínas'], ['Queijo parmesão ralado fino', 60, 'g', 'laticínios'], ['Rúcula e azeite extravirgem', 50, 'g', 'vegetais']],
      steps: [['Crosta de queijo', 'Grelhe o lado com o parmesão até dourar como casquinha.', 240], ['Virar', 'Deixe terminar o outro lado.', 180], ['Montar', 'Apresente sobre a rúcula regada no azeite.', null]]
    },
    {
      title: 'Hambúrguer de Linguiça Artesanal com Queijo Meia Cura',
      sub: 'hamburguer', diff: 'easy', prep: 10, cook: 10, cal: 550, p: 42, c: 2, fib: 0, f: 42, prem: false,
      tags: ['burger_linguiça', 'queijo_meia_cura', 'mineiro', 'saboroso'],
      tip: 'Retire a pele da linguiça artesanal de porco e molde os discos diretamente com as mãos.',
      ings: [['Massa de linguiça artesanal de pernil', 400, 'g', 'proteínas'], ['Queijo minas meia cura fatiado', 80, 'g', 'laticínios'], ['Chimichurri ou azeite de alho', 2, 'colheres de sopa', 'despensa']],
      steps: [['Modelar discos', 'Modele os hambúrgueres sem compactar demais.', 120], ['Grelhar bem', 'Cozinhe bem os hambúrgueres de carne suína.', 480], ['Queijo derretido', 'Derreta o queijo meia cura sobre eles.', 60]]
    },
    {
      title: 'Mini Burgers Cetogênicos com Cogumelo Portobello como Pão',
      sub: 'hamburguer', diff: 'medium', prep: 12, cook: 10, cal: 480, p: 40, c: 4, fib: 2, f: 33, prem: true,
      tags: ['burger_portobello', 'vegetais', 'gourmet', 'sem_glúten'],
      tip: 'Grelhe os cogumelos Portobello rapidamente na manteiga para substituir os pães tradicionais.',
      ings: [['Cogumelos Portobello médios limpos', 4, 'unidades', 'vegetais'], ['Minis hambúrgueres de picanha', 4, 'unidades', 'proteínas'], ['Queijo muçarela derretido', 60, 'g', 'laticínios'], ['Manteiga e tomilho', 20, 'g', 'despensa']],
      steps: [['Grelhar cogumelos', 'Doure os cogumelos na frigideira com manteiga.', 240], ['Grelhar carnes', 'Asse os hambúrgueres com o queijo.', 300], ['Montar o sanduíche', 'Use os cogumelos como topo e base do mini burger.', null]]
    },

    // Suíno e Cordeiro (11)
    {
      title: 'Carré de Cordeiro com Crosta de Ervas Frescas e Manteiga de Alho',
      sub: 'suino_e_cordeiro', diff: 'hard', prep: 15, cook: 18, cal: 580, p: 42, c: 2, fib: 1, f: 45, prem: true,
      tags: ['carré', 'cordeiro', 'alta_gastronomia', 'ervas', 'luxo'],
      tip: 'Limpe bem os ossos do carré (técnica francesa chamada manchonner) para um visual de alta gastronomia.',
      ings: [['Carré de cordeiro com 8 ossos', 600, 'g', 'proteínas'], ['Manteiga clarificada', 40, 'g', 'despensa'], ['Tomilho, alecrim e salsa frescos picados', 3, 'colheres de sopa', 'temperos'], ['Mostarda Dijon', 1, 'colher de sopa', 'temperos']],
      steps: [['Selar carne', 'Sele a carne na frigideira quente de ferro.', 300], ['Crosta de ervas', 'Pincele a mostarda e aperte as ervas frescas na carne.', 120], ['Assar rosado', 'Asse no forno a 200°C por 12 minutos.', 720]]
    },
    {
      title: 'Lombo Suíno ao Molho Cremoso de Queijo Gorgonzola e Nozes',
      sub: 'suino_e_cordeiro', diff: 'easy', prep: 10, cook: 20, cal: 490, p: 46, c: 3, fib: 1, f: 32, prem: false,
      tags: ['lombo_suíno', 'gorgonzola', 'nozes', 'jantar'],
      tip: 'Cuidado para não assar o lombo além do ponto; a carne suína moderna deve ser levemente rosada no miolo.',
      ings: [['Medalhões de lombo suíno', 500, 'g', 'proteínas'], ['Queijo gorgonzola', 70, 'g', 'laticínios'], ['Creme de leite fresco', 150, 'ml', 'laticínios'], ['Nozes picadas tostadas', 30, 'g', 'despensa'], ['Manteiga', 20, 'g', 'despensa']],
      steps: [['Grelhar medalhões', 'Doure os medalhões na manteiga por 4 minutos de cada lado.', 480], ['Molho cremoso', 'Incorpore o creme e o queijo gorgonzola na mesma frigideira.', 180], ['Nozes', 'Finalize com as nozes crocantes.', null]]
    },
    {
      title: 'Pancetta Crocante Pururucada na Frigideira de Ferro',
      sub: 'suino_e_cordeiro', diff: 'medium', prep: 15, cook: 40, cal: 640, p: 38, c: 0, fib: 0, f: 55, prem: true,
      tags: ['pancetta', 'pururuca', 'torresmo', 'crocante'],
      tip: 'Passe álcool de cereais ou vinagre de maçã com sal grosso na pele e deixe secar antes de fritar para pururucar perfeitamente.',
      ings: [['Barriga de porco (pancetta) em tiras grossas', 600, 'g', 'proteínas'], ['Sal grosso moído fino', 1, 'colher de sopa', 'temperos'], ['Banha de porco para iniciar', 20, 'g', 'despensa']],
      steps: [['Secar o couro', 'Deixe a pele bem seca e faça micro furos.', 180], ['Cozinhar lentamente', 'Asse a 160°C por 30 minutos.', 1800], ['Pururucar no ferro', 'Encoste a pele na frigideira bem quente com banha até pipocar inteira.', 300]]
    },
    {
      title: 'Pernil de Cordeiro Assado com Alho Inteiro e Vinho Tinto Seco',
      sub: 'suino_e_cordeiro', diff: 'hard', prep: 20, cook: 150, cal: 590, p: 49, c: 2, fib: 0, f: 43, prem: true,
      tags: ['pernil_de_cordeiro', 'assado_lento', 'vinho_tinto', 'festa'],
      tip: 'Fure o pernil com a ponta da faca e insira dentes de alho e folhas de alecrim no interior.',
      ings: [['Pernil de cordeiro com osso', 1500, 'g', 'proteínas'], ['Vinho tinto seco cabernet', 150, 'ml', 'despensa'], ['Dentes de alho inteiros descascados', 10, 'unidades', 'vegetais'], ['Ramos de alecrim fresco', 5, 'ramos', 'temperos']],
      steps: [['Lardear a carne', 'Introduza o alho e alecrim nas perfurações da carne.', 300], ['Assar coberto', 'Coloque o vinho no fundo, cubra com papel alumínio e asse a 160°C por 2 horas.', 7200], ['Dourar aberto', 'Retire o papel e doure a 200°C por 30 minutos.', 1800]]
    },
    {
      title: 'Filé Mignon Suíno Envolvido em Bacon com Redução Balsâmica Keto',
      sub: 'suino_e_cordeiro', diff: 'easy', prep: 10, cook: 15, cal: 480, p: 48, c: 3, fib: 0, f: 30, prem: false,
      tags: ['mignon_suíno', 'bacon', 'balsâmico_keto', 'elegante'],
      tip: 'O mignon suíno é incrivelmente macio e ganha proteção extra de umidade com as tiras de bacon.',
      ings: [['Medalhões de mignon de porco', 500, 'g', 'proteínas'], ['Fatias de bacon artesanal', 6, 'fatias', 'proteínas'], ['Vinagre balsâmico keto reduzido', 30, 'ml', 'temperos'], ['Manteiga', 20, 'g', 'despensa']],
      steps: [['Enrolar bacon', 'Prenda o bacon em volta dos medalhões com palitos.', 180], ['Grelhar', 'Doure os medalhões na manteiga quente.', 420], ['Redução', 'Regue com a redução de balsâmico brilhante.', null]]
    },
    {
      title: 'Costelinha de Cordeiro Grelhada com Manteiga de Hortelã Fresca',
      sub: 'suino_e_cordeiro', diff: 'medium', prep: 10, cook: 10, cal: 570, p: 43, c: 1, fib: 0, f: 44, prem: true,
      tags: ['costelinha_cordeiro', 'hortelã', 'gourmet', 'churrasco'],
      tip: 'A gordura do cordeiro grelhada na brasa adquire sabor tostado inigualável.',
      ings: [['Costelinhas de cordeiro individuais', 600, 'g', 'proteínas'], ['Manteiga batida com hortelã fresca e flor de sal', 40, 'g', 'laticínios'], ['Sal de parrilla', 1, 'colher de sopa', 'temperos']],
      steps: [['Grelhar com fogo alto', 'Sele as costelinhas rapidamente garantindo centro rosado.', 360], ['Manteiga de hortelã', 'Coloque a manteiga de hortelã sobre a carne quente para derreter.', 60], ['Servir', 'Sirva imediatamente.', null]]
    },
    {
      title: 'Pernil Suíno Assado Desfiado com Chimichurri e Manteiga',
      sub: 'suino_e_cordeiro', diff: 'easy', prep: 15, cook: 120, cal: 530, p: 47, c: 1, fib: 0, f: 37, prem: false,
      tags: ['pernil_desfiado', 'pulled_pork_keto', 'chimichurri', 'conforto'],
      tip: 'Perfeito para deixar pronto na geladeira e usar como recheio ao longo de vários dias.',
      ings: [['Pedaço de pernil de porco sem osso', 1000, 'g', 'proteínas'], ['Molho chimichurri caseiro', 100, 'g', 'temperos'], ['Manteiga', 40, 'g', 'despensa']],
      steps: [['Assar lentamente', 'Asse o pernil coberto a 160°C por 2 horas até soltar as fibras.', 7200], ['Desfiar com garfos', 'Desfie a carne quente e misture a manteiga e chimichurri.', 300], ['Servir suculento', 'Apresente úmido e brilhante.', null]]
    },
    {
      title: 'Stinco de Cordeiro Braseado no Vinho Tinto com Purê de Couve-Flor',
      sub: 'suino_e_cordeiro', diff: 'hard', prep: 20, cook: 120, cal: 620, p: 50, c: 4, fib: 2, f: 44, prem: true,
      tags: ['stinco', 'cordeiro', 'alta_gastronomia', 'braseado'],
      tip: 'Cozinhe o stinco em fogo baixíssimo até a carne quase cair do osso central.',
      ings: [['Stinco (canela) de cordeiro', 800, 'g', 'proteínas'], ['Vinho tinto seco', 150, 'ml', 'despensa'], ['Purê cremoso de couve-flor', 200, 'g', 'vegetais'], ['Ramos de alecrim e alho', 3, 'ramos', 'temperos']],
      steps: [['Selar o stinco', 'Doure a carne por todos os lados na panela de ferro.', 360], ['Brasear no vinho', 'Junte o vinho e ervas e asse tampado por 2 horas.', 7200], ['Servir sobre purê', 'Acomode sobre o purê de couve-flor regando o molho reduzido.', null]]
    },
    {
      title: 'Bisteca Suína na Frigideira de Ferro com Manteiga de Sálvia e Limão',
      sub: 'suino_e_cordeiro', diff: 'easy', prep: 5, cook: 10, cal: 480, p: 44, c: 1, fib: 0, f: 33, prem: false,
      tags: ['bisteca', 'sálvia', 'limão', 'rápido'],
      tip: 'Escolha bistecas com boa borda de gordura para que fiquem bem tostadas e estaladiças.',
      ings: [['Bistecas suínas grossas com osso', 500, 'g', 'proteínas'], ['Manteiga', 30, 'g', 'laticínios'], ['Folhas de sálvia fresca', 8, 'folhas', 'temperos'], ['Suco de limão', 1, 'unidade', 'temperos']],
      steps: [['Dourar bistecas', 'Frite as bistecas na manteiga virando para criar crosta dourada.', 420], ['Sálvia crocante', 'Junte as folhas de sálvia e o suco de limão na frigideira.', 60], ['Banhar', 'Regue os sucos aromáticos e sirva.', null]]
    },
    {
      title: 'Ragù de Cordeiro Desfiado com Espaguete de Pupunha',
      sub: 'suino_e_cordeiro', diff: 'medium', prep: 15, cook: 45, cal: 490, p: 44, c: 5, fib: 2, f: 33, prem: true,
      tags: ['ragù', 'cordeiro', 'palmito_pupunha', 'italiano'],
      tip: 'O palmito pupunha fresco em fios tem textura idêntica ao fettuccine tradicional.',
      ings: [['Carne de cordeiro cozida e desfiada', 400, 'g', 'proteínas'], ['Palmito pupunha fresco em fios (espaguete)', 250, 'g', 'vegetais'], ['Molho de tomate pelado rústico', 150, 'g', 'vegetais'], ['Parmesão ralado', 40, 'g', 'laticínios']],
      steps: [['Apurar ragù', 'Cozinhe o cordeiro no molho de tomate com especiarias.', 600], ['Saltear pupunha', 'Passe a pupunha na manteiga por 2 minutos.', 120], ['Montar', 'Cubra com o ragù denso e salpique parmesão.', null]]
    },
    {
      title: 'Torresmo em Rolo Cetogênico Crocante e Pururuca',
      sub: 'suino_e_cordeiro', diff: 'hard', prep: 20, cook: 60, cal: 670, p: 35, c: 0, fib: 0, f: 60, prem: true,
      tags: ['torresmo_em_rolo', 'petisco', 'pururuca', 'clássico_mineiro'],
      tip: 'Amarre a barriga enrolada com barbante fino e congele antes de cortar em rodelas uniformes.',
      ings: [['Pancetta inteira com couro enrolada', 1000, 'g', 'proteínas'], ['Sal refinado e bicarbonato (pitada para pururucar)', 1, 'colher de sopa', 'temperos'], ['Banha para fritar', 100, 'ml', 'despensa']],
      steps: [['Assar enrolado', 'Asse a peça amarrada no forno a 170°C por 45 min.', 2700], ['Fatiar rodelas', 'Corte as rodelas com faca afiada.', 180], ['Pururucar na banha quente', 'Passe as rodelas na banha quente até pururucar por completo.', 300]]
    }
  ];

  const fullList = [...items, ...remaining];

  return fullList.map((r) => ({
    title: r.title,
    shortDesc: `${r.title} selecionado com cortes de carne nobre e perfil cetogênico autêntico.`,
    desc: `Culinária refinada com equilíbrio ótimo de proteínas e gorduras nobres, perfeita para manutenção da cetose e máximo prazer à mesa.`,
    category: 'meat',
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
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    ingredients: r.ings.map(([name, qty, unit, cat]) => ({ name, qty, unit, cat })),
    steps: r.steps.map(([title, desc, timer]) => ({ title, desc, timer })),
    chefTip: r.tip
  })).slice(0, 80);
}
