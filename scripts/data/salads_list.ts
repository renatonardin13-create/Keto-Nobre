import { RawRecipeInput } from '../recipe_helper';

export function getFullSaladsList(): RawRecipeInput[] {
  const items: { title: string; sub: string; diff: 'easy' | 'medium' | 'hard'; prep: number; cook: number; cal: number; p: number; c: number; fib: number; f: number; prem: boolean; tags: string[]; tip: string; ings: [string, number, string, any][]; steps: [string, string, number | null][] }[] = [
    // 1-10: Caesar (10)
    {
      title: 'Salada Caesar Nobre com Tiras de Frango Grelhado e Crocante de Parmesão',
      sub: 'caesar', diff: 'easy', prep: 12, cook: 8, cal: 420, p: 38, c: 3, fib: 2, f: 28, prem: false,
      tags: ['caesar', 'frango', 'parmesão', 'clássico', 'molho_caseiro'],
      tip: 'Faça os croutons usando queijo parmesão ralado dourado na frigideira antiaderente.',
      ings: [['Peito de frango grelhado fatiado', 250, 'g', 'proteínas'], ['Alface romana crocante rasgada', 150, 'g', 'vegetais'], ['Queijo parmesão ralado e lascas', 60, 'g', 'laticínios'], ['Molho caesar caseiro com alcaparras e gema', 50, 'ml', 'laticínios'], ['Bacon frito crocante picadinho', 40, 'g', 'proteínas']],
      steps: [['Grelhar frango e bacon', 'Doure o peito de frango e o bacon até ficarem no ponto.', 360], ['Croutons de parmesão', 'Aqueça montinhos de parmesão na frigideira até dourarem e crocitar.', 180], ['Misturar e servir', 'Envolva as folhas no molho caesar e decore com frango, bacon e crocantes de queijo.', null]]
    },
    {
      title: 'Salada Caesar com Camarões Rosa Grelhados e Flor de Sal',
      sub: 'caesar', diff: 'easy', prep: 10, cook: 6, cal: 390, p: 34, c: 3, fib: 2, f: 26, prem: true,
      tags: ['caesar', 'camarão', 'gourmet', 'leve'],
      tip: 'Os camarões grelhados no alho quentes sobre a alface fria dão um contraste de temperatura espetacular.',
      ings: [['Camarões rosa médios limpos', 250, 'g', 'proteínas'], ['Alface romana fresca lavada', 150, 'g', 'vegetais'], ['Molho caesar cremoso', 45, 'ml', 'laticínios'], ['Lascas de queijo Grana Padano', 40, 'g', 'laticínios'], ['Azeite de oliva e alho', 20, 'ml', 'despensa']],
      steps: [['Saltear camarões', 'Doure os camarões no azeite com alho por 3 minutos.', 180], ['Envolver salada', 'Misture a alface americana e romana com o molho caesar.', 60], ['Montar', 'Disponha os camarões fumegantes sobre a salada com Grana Padano.', null]]
    },
    {
      title: 'Salada Caesar com Bacon Artesanal em Cubos e Ovos Mollet',
      sub: 'caesar', diff: 'medium', prep: 12, cook: 8, cal: 440, p: 26, c: 3, fib: 2, f: 36, prem: false,
      tags: ['caesar', 'bacon', 'ovo_mollet', 'conforto'],
      tip: 'Cozinhe os ovos por exatamente 6 minutos e dê choque térmico em água com gelo para gema aveludada.',
      ings: [['Bacon artesanal cortado em cubos dourados', 100, 'g', 'proteínas'], ['Ovos caipiras cozidos mollet (gema mole)', 2, 'unidades', 'proteínas'], ['Alface romana crocante', 150, 'g', 'vegetais'], ['Molho caesar keto com azeite e anchovas', 50, 'ml', 'laticínios'], ['Parmesão ralado fino', 30, 'g', 'laticínios']],
      steps: [['Fritar bacon', 'Doure o bacon até soltar a gordura e ficar crocante.', 300], ['Cozinhar ovos mollet', 'Ferva os ovos por 6 minutos exatos e descasque com cuidado.', 360], ['Montagem', 'Monte a alface com molho, bacon e abra os ovos ao meio no topo.', null]]
    },
    {
      title: 'Salada Caesar Tradicional com Anchovas do Mediterrâneo e Gema Fresca',
      sub: 'caesar', diff: 'hard', prep: 15, cook: 0, cal: 380, p: 18, c: 2, fib: 2, f: 33, prem: true,
      tags: ['caesar_original', 'anchovas', 'tradicional', 'artesanal'],
      tip: 'O verdadeiro molho caesar leva filés de anchova amassados com alho e emulsão de gema fresca.',
      ings: [['Alface romana fresca', 180, 'g', 'vegetais'], ['Filés de anchova em conserva esmagados', 4, 'filés', 'proteínas'], ['Gema caipira pasteurizada', 1, 'unidade', 'proteínas'], ['Azeite extravirgem batido', 40, 'ml', 'despensa'], ['Queijo Parmigiano Reggiano em lascas', 50, 'g', 'laticínios'], ['Mostarda Dijon e limão siciliano', 1, 'colher de sopa', 'temperos']],
      steps: [['Emulsão caesar', 'Bata a gema com anchova, mostarda, limão e azeite em fio até espessar.', 240], ['Rasgar folhas', 'Rasgue a alface romana seca com as mãos.', 60], ['Finalizar', 'Misture a emulsão vigorosamente e cubra com as lascas de Parmigiano.', null]]
    },
    {
      title: 'Salada Caesar com Salmão Grelhado em Lascas e Molho de Ervas',
      sub: 'caesar', diff: 'easy', prep: 10, cook: 8, cal: 450, p: 36, c: 3, fib: 2, f: 32, prem: true,
      tags: ['caesar', 'salmão', 'ômega_3', 'jantar_leve'],
      tip: 'Desmanche o salmão em lascas suculentas sobre as folhas frias.',
      ings: [['Filé de salmão grelhado', 200, 'g', 'proteínas'], ['Folhas de alface romana e americana', 150, 'g', 'vegetais'], ['Molho caesar com dill fresco', 45, 'ml', 'laticínios'], ['Queijo parmesão em lascas', 40, 'g', 'laticínios']],
      steps: [['Grelhar salmão', 'Doure o filé até soltar em lascas macias.', 420], ['Temperar folhas', 'Misture as folhas com o molho caesar e dill.', 60], ['Dispor salmão', 'Arrume as lascas quentes no topo com o parmesão.', null]]
    },
    {
      title: 'Salada Caesar com Tiras de Mignon Selado e Gorgonzola',
      sub: 'caesar', diff: 'medium', prep: 10, cook: 6, cal: 460, p: 38, c: 2, fib: 2, f: 33, prem: true,
      tags: ['caesar', 'filé_mignon', 'gorgonzola', 'refeição_completa'],
      tip: 'As tiras de mignon no ponto menos rosado harmonizam perfeitamente com a acidez do molho caesar.',
      ings: [['Tiras de filé mignon grelhadas', 200, 'g', 'proteínas'], ['Alface romana', 150, 'g', 'vegetais'], ['Queijo gorgonzola esfarelado', 40, 'g', 'laticínios'], ['Molho caesar rico em azeite', 40, 'ml', 'laticínios'], ['Parmesão ralado', 30, 'g', 'laticínios']],
      steps: [['Grelhar tiras de mignon', 'Sele a carne na frigideira quente com manteiga.', 240], ['Montar folhas', 'Envolva as folhas no molho.', 60], ['Coroar com carne e queijo', 'Coloque a carne e o gorgonzola por cima.', null]]
    },
    {
      title: 'Salada Caesar com Couve-Flor Crocante Assada no Lugar de Croutons',
      sub: 'caesar', diff: 'easy', prep: 12, cook: 15, cal: 360, p: 16, c: 5, fib: 3, f: 30, prem: false,
      tags: ['caesar', 'couve-flor', 'crocante', 'vegetariano_keto'],
      tip: 'Asse os floretes pequenos de couve-flor com azeite e páprica até ficarem dourados e crocantes.',
      ings: [['Floretes bem pequenos de couve-flor assados', 150, 'g', 'vegetais'], ['Alface romana crocante', 150, 'g', 'vegetais'], ['Molho caesar cremoso', 50, 'ml', 'laticínios'], ['Parmesão ralado grosso', 40, 'g', 'laticínios']],
      steps: [['Assar couve-flor', 'Asse os mini floretes temperados a 210°C até tostarem.', 900], ['Misturar salada', 'Envolva a alface no molho caesar.', 60], ['Adicionar crocância', 'Junte a couve-flor crocante como crouton.', null]]
    },
    {
      title: 'Salada Caesar com Peito de Peru Defumado e Amêndoas Tostadas',
      sub: 'caesar', diff: 'easy', prep: 8, cook: 0, cal: 380, p: 32, c: 3, fib: 2, f: 27, prem: false,
      tags: ['caesar', 'peito_de_peru', 'amêndoas', 'prática'],
      tip: 'Prato refrescante que não exige forno nem fogão se usar frios artesanais.',
      ings: [['Peito de peru defumado artesanal em cubos', 180, 'g', 'proteínas'], ['Amêndoas laminadas tostadas', 30, 'g', 'despensa'], ['Alface americana e romana', 150, 'g', 'vegetais'], ['Molho caesar cremoso', 45, 'ml', 'laticínios'], ['Parmesão ralado', 30, 'g', 'laticínios']],
      steps: [['Tostar amêndoas', 'Doure as amêndoas rapidamente na frigideira seca.', 120], ['Montar', 'Misture a alface com molho, peru e cubra com as amêndoas crocantes.', null]]
    },
    {
      title: 'Salada Caesar com Frango Desfiado, Bacon e Abacate Cremoso',
      sub: 'caesar', diff: 'easy', prep: 10, cook: 5, cal: 460, p: 36, c: 4, fib: 3, f: 34, prem: false,
      tags: ['caesar', 'abacate', 'frango_desfiado', 'bacon'],
      tip: 'O abacate adiciona uma textura amanteigada que substitui a necessidade de maioneses pesadas.',
      ings: [['Frango cozido desfiado temperado', 200, 'g', 'proteínas'], ['Abacate em cubos firmes', 100, 'g', 'vegetais'], ['Bacon crocante', 40, 'g', 'proteínas'], ['Alface romana', 150, 'g', 'vegetais'], ['Molho caesar com azeite', 40, 'ml', 'laticínios']],
      steps: [['Juntar ingredientes', 'Rasgue a alface e adicione o frango e abacate.', 120], ['Temperar', 'Regue o molho caesar e salpique o bacon crocante.', 60], ['Servir', 'Apresente fresca.', null]]
    },
    {
      title: 'Salada Caesar Rústica com Frango Empanado na Farinha de Amêndoas',
      sub: 'caesar', diff: 'medium', prep: 15, cook: 12, cal: 480, p: 40, c: 4, fib: 2, f: 33, prem: true,
      tags: ['caesar', 'crispy_chicken', 'amêndoas', 'crocante'],
      tip: 'Empane o peito de frango no parmesão com farinha de amêndoas e asse na airfryer para efeito crispy incrível.',
      ings: [['Tiras de frango empanadas em amêndoas e parmesão', 250, 'g', 'proteínas'], ['Alface romana fresca', 150, 'g', 'vegetais'], ['Molho caesar autêntico', 50, 'ml', 'laticínios'], ['Parmesão em lascas', 30, 'g', 'laticínios']],
      steps: [['Fritar ou assar tiras', 'Asse as tiras de frango empanadas na airfryer a 190°C.', 720], ['Montar prato', 'Disponha a alface temperada no molho e acomode as tiras crocantes quentes.', null]]
    },

    // 11-20: Mediterrânea (10)
    {
      title: 'Salada Grega Autêntica com Queijo Feta, Azeitonas Kalamata e Azeite Grego',
      sub: 'mediterranea', diff: 'easy', prep: 10, cook: 0, cal: 360, p: 14, c: 5, fib: 2, f: 32, prem: false,
      tags: ['grega', 'feta', 'kalamata', 'mediterrânea', 'sem_fogão'],
      tip: 'Corte o queijo feta em uma fatia inteira sobre a salada e polvilhe orégano seco e azeite extravirgem por cima.',
      ings: [['Queijo feta autêntico de ovelha em bloco', 120, 'g', 'laticínios'], ['Tomates maduros em gomos', 150, 'g', 'vegetais'], ['Pepino japonês em rodelas grossas', 120, 'g', 'vegetais'], ['Azeitonas pretas Kalamata inteiras', 50, 'g', 'vegetais'], ['Cebola roxa em lâminas finas', 30, 'g', 'vegetais'], ['Azeite de oliva extravirgem e orégano grego', 30, 'ml', 'despensa']],
      steps: [['Cortar vegetais', 'Corte o tomate, pepino e cebola em pedaços rústicos generosos.', 240], ['Montar tigela', 'Junte os vegetais e azeitonas temperando com azeite e sal.', 120], ['Coroar com feta', 'Disponha a placa de feta por cima, regue azeite abundante e orégano.', null]]
    },
    {
      title: 'Salada Caprese Nobre com Muçarela de Búfala Artesanal e Pesto Genovês',
      sub: 'mediterranea', diff: 'easy', prep: 8, cook: 0, cal: 380, p: 18, c: 4, fib: 1, f: 33, prem: false,
      tags: ['caprese', 'muçarela_de_búfala', 'pesto', 'italiano'],
      tip: 'Intercale fatias grossas de muçarela de búfala fresca com rodelas de tomate maduro e folhas de manjericão gigante.',
      ings: [['Muçarela de búfala fresca em bolas', 180, 'g', 'laticínios'], ['Tomates italianos maduros em rodelas', 180, 'g', 'vegetais'], ['Folhas de manjericão fresco', 15, 'folhas', 'vegetais'], ['Molho pesto genovês de manjericão', 40, 'g', 'despensa'], ['Azeite de oliva extravirgem e flor de sal', 20, 'ml', 'despensa']],
      steps: [['Fatiar', 'Corte a muçarela e os tomates em fatias de 1cm.', 180], ['Intercalar', 'Arrume em espiral alternando tomate, queijo e folha de manjericão.', 120], ['Regar pesto', 'Despeje o pesto e azeite com pitada de flor de sal.', null]]
    },
    {
      title: 'Salada Mediterrânea de Folhas Escuras com Queijo de Cabra e Nozes Tostadas',
      sub: 'mediterranea', diff: 'easy', prep: 8, cook: 0, cal: 390, p: 15, c: 4, fib: 2, f: 35, prem: true,
      tags: ['queijo_de_cabra', 'nozes', 'folhas_nobres', 'mediterrânea'],
      tip: 'Aqueça o queijo de cabra ligeiramente no forno para amolecer antes de colocar sobre a salada.',
      ings: [['Rúcula selvagem e radicchio', 150, 'g', 'vegetais'], ['Queijo de cabra tipo boursin ou chèvre', 100, 'g', 'laticínios'], ['Nozes tostadas quebradas', 40, 'g', 'despensa'], ['Vinagre balsâmico keto e azeite extravirgem', 30, 'ml', 'despensa']],
      steps: [['Preparar folhas', 'Lave e seque bem a rúcula e o radicchio.', 120], ['Montar', 'Distribua as porções de queijo de cabra e as nozes tostadas.', 90], ['Vinagrete', 'Bata o azeite com gotas de balsâmico e regue uniformemente.', null]]
    },
    {
      title: 'Salada de Polvo Confitado com Ervas Mediterrâneas e Azeitonas',
      sub: 'mediterranea', diff: 'medium', prep: 15, cook: 10, cal: 370, p: 32, c: 3, fib: 1, f: 26, prem: true,
      tags: ['polvo', 'azeitonas', 'frutos_do_mar', 'alta_gastronomia'],
      tip: 'Misture o polvo ainda morno com o azeite de ervas para absorver os aromas imediatamente.',
      ings: [['Tentáculos de polvo cozidos em rodelas', 250, 'g', 'proteínas'], ['Azeitonas pretas picadas', 40, 'g', 'vegetais'], ['Pimentão vermelho e alho picados fino', 40, 'g', 'vegetais'], ['Azeite extravirgem e suco de limão', 35, 'ml', 'despensa'], ['Salsinha fresca picada', 2, 'colheres de sopa', 'temperos']],
      steps: [['Saltear polvo', 'Doure as rodelas de polvo no azeite por 2 minutos.', 120], ['Misturar marinada', 'Junte o alho, pimentão, azeitonas e suco de limão.', 120], ['Servir morna ou fria', 'Finalize com salsinha e sirva aromática.', null]]
    },
    {
      title: 'Salada Mediterrânea de Abobrinha Crua Marinada com Queijo Parmesão',
      sub: 'mediterranea', diff: 'easy', prep: 10, cook: 0, cal: 290, p: 12, c: 4, fib: 2, f: 25, prem: false,
      tags: ['abobrinha', 'carpaccio_vegetal', 'parmesão', 'refrescante'],
      tip: 'Use o descascador de legumes para laminar a abobrinha em fitas finas e translúcidas.',
      ings: [['Abobrinhas italianas pequenas bem firmes', 2, 'unidades', 'vegetais'], ['Queijo Parmigiano Reggiano em lascas', 50, 'g', 'laticínios'], ['Suco de limão siciliano e azeite extravirgem', 30, 'ml', 'despensa'], ['Pinoli ou castanhas tostadas', 20, 'g', 'despensa'], ['Hortelã fresca picada', 1, 'colher de sopa', 'temperos']],
      steps: [['Laminar abobrinha', 'Faça fitas finas com o descascador descartando as sementes.', 180], ['Marinar', 'Envolva no limão, azeite, sal e pimenta por 5 minutos.', 300], ['Finalizar', 'Cubra com as lascas de parmesão, hortelã e pinoli.', null]]
    },
    {
      title: 'Salada Mediterrânea de Frango com Queijo Feta e Tomatinhos Confit',
      sub: 'mediterranea', diff: 'easy', prep: 10, cook: 8, cal: 420, p: 38, c: 4, fib: 2, f: 28, prem: false,
      tags: ['frango', 'feta', 'tomate_confit', 'completa'],
      tip: 'Os tomatinhos caramelizados aquecem a salada e criam um molho natural com o azeite.',
      ings: [['Peito de frango grelhado em tiras', 250, 'g', 'proteínas'], ['Queijo feta em cubos', 70, 'g', 'laticínios'], ['Tomates-cereja confitados no azeite', 80, 'g', 'vegetais'], ['Folhas verdes mistas', 120, 'g', 'vegetais'], ['Orégano fresco', 1, 'colher de sopa', 'temperos']],
      steps: [['Dispor folhas', 'Faça uma cama com as folhas verdes.', 60], ['Adicionar frango e feta', 'Distribua as tiras de frango e os cubos de queijo feta.', 90], ['Regar tomates confit', 'Despeje os tomates e o azeite aromático por cima.', null]]
    },
    {
      title: 'Salada Niçoise Cetogênica com Lascas de Atum e Ovos Cozidos',
      sub: 'mediterranea', diff: 'medium', prep: 12, cook: 6, cal: 430, p: 36, c: 4, fib: 2, f: 30, prem: false,
      tags: ['niçoise', 'atum', 'ovos', 'francesa'],
      tip: 'Substitua as batatas clássicas por palmito pupunha fresco ou vagens cozidas al dente.',
      ings: [['Atum sólido de alta qualidade em azeite', 160, 'g', 'proteínas'], ['Ovos caipiras cozidos partidos em quatro', 2, 'unidades', 'proteínas'], ['Vagens francesas cozidas no vapor', 80, 'g', 'vegetais'], ['Azeitonas pretas e folhas verdes', 100, 'g', 'vegetais'], ['Molho vinagrete de Dijon', 35, 'ml', 'despensa']],
      steps: [['Organizar prato', 'Acomode as folhas, as vagens verdes e os ovos nos cantos.', 180], ['Adicionar atum', 'Coloque as lascas nobres de atum no centro.', 60], ['Temperar', 'Regue o vinagrete de mostarda Dijon e azeite.', null]]
    },
    {
      title: 'Salada de Berinjela Assada Rústica com Alho e Queijo de Cabra',
      sub: 'mediterranea', diff: 'easy', prep: 10, cook: 20, cal: 340, p: 12, c: 6, fib: 4, f: 28, prem: false,
      tags: ['berinjela', 'queijo_de_cabra', 'forno', 'mediterrânea'],
      tip: 'Asse os cubos de berinjela com azeite generoso até caramelizarem e ficarem aveludados.',
      ings: [['Berinjelas em cubos assadas com azeite', 200, 'g', 'vegetais'], ['Queijo de cabra cremoso', 80, 'g', 'laticínios'], ['Nozes tostadas', 30, 'g', 'despensa'], ['Folhas de hortelã fresca e salsinha', 2, 'colheres de sopa', 'temperos'], ['Azeite de oliva extravirgem', 25, 'ml', 'despensa']],
      steps: [['Assar berinjela', 'Asse a berinjela a 200°C até amaciar bem.', 1200], ['Misturar morna', 'Junte o queijo de cabra, nozes e ervas frescas.', 120], ['Apresentar', 'Sirva morna com azeite extravirgem.', null]]
    },
    {
      title: 'Salada Mediterrânea de Camarões com Abacate e Molho Cítrico de Dill',
      sub: 'mediterranea', diff: 'easy', prep: 10, cook: 5, cal: 380, p: 30, c: 4, fib: 3, f: 27, prem: true,
      tags: ['camarão', 'abacate', 'dill', 'refrescante'],
      tip: 'O dill fresco traz aroma anisado sofisticado que complementa a doçura do camarão.',
      ings: [['Camarões cozidos no vapor', 250, 'g', 'proteínas'], ['Abacate em cubos', 120, 'g', 'vegetais'], ['Tomatinhos-cereja cortados ao meio', 80, 'g', 'vegetais'], ['Azeite com raspas de limão e dill picado', 30, 'ml', 'despensa']],
      steps: [['Juntar ingredientes', 'Reúna camarões, abacate e tomatinhos na tigela.', 120], ['Emulsão cítrica', 'Bata o azeite com limão e dill fresco.', 90], ['Envolver e servir', 'Misture delicadamente para não esmagar o abacate.', null]]
    },
    {
      title: 'Salada de Rúcula com Carpaccio Bovino, Alcaparras e Parmesão',
      sub: 'mediterranea', diff: 'easy', prep: 8, cook: 0, cal: 360, p: 32, c: 2, fib: 1, f: 25, prem: false,
      tags: ['carpaccio', 'rúcula', 'alcaparras', 'parmesão', 'sem_fogão'],
      tip: 'Disponha as lâminas finas de carne congelada diretamente no prato e deixe descongelar 3 minutos.',
      ings: [['Fatias ultrafinas de carpaccio de carne bovina', 200, 'g', 'proteínas'], ['Folhas de rúcula fresca', 60, 'g', 'vegetais'], ['Alcaparras drenadas', 2, 'colheres de sopa', 'temperos'], ['Queijo parmesão em lascas', 40, 'g', 'laticínios'], ['Molho clássico de azeite, mostarda e limão', 30, 'ml', 'despensa']],
      steps: [['Montar carpaccio', 'Forre o prato com as lâminas de carne.', 120], ['Centro de folhas', 'Acomode a rúcula no centro.', 60], ['Finalizar molho', 'Regue o molho de mostarda, alcaparras e queijo parmesão.', null]]
    },

    // 21-30: Verdes e Crocantes (10)
    {
      title: 'Salada Verde Detox Nobre com Pepino Crocante, Abacate e Sementes de Abóbora',
      sub: 'verdes_e_crocantes', diff: 'easy', prep: 8, cook: 0, cal: 320, p: 9, c: 4, fib: 4, f: 29, prem: false,
      tags: ['verde', 'detox_keto', 'abacate', 'crocante'],
      tip: 'Toste as sementes de abóbora com uma pitada de sal marinho na frigideira seca para crocância máxima.',
      ings: [['Mix de folhas verdes (espinafre, alface frisée e rúcula)', 150, 'g', 'vegetais'], ['Pepino japonês em rodelas estaladiças', 100, 'g', 'vegetais'], ['Abacate em fatias', 100, 'g', 'vegetais'], ['Sementes de abóbora tostadas', 30, 'g', 'despensa'], ['Molho verde de ervas frescas e azeite', 35, 'ml', 'despensa']],
      steps: [['Montar verdes', 'Combine as folhas, pepino e fatias de abacate.', 120], ['Salpicar sementes', 'Distribua as sementes tostadas.', 60], ['Temperar', 'Regue o molho verde batido.', null]]
    },
    {
      title: 'Salada Crocante de Couve-Flor Crua Ralada com Maionese de Bacon',
      sub: 'verdes_e_crocantes', diff: 'easy', prep: 10, cook: 5, cal: 390, p: 12, c: 5, fib: 3, f: 35, prem: false,
      tags: ['couve-flor_crua', 'bacon', 'maionese', 'salada_americana'],
      tip: 'Rale a couve-flor crua no ralo grosso; fica com textura idêntica a arroz e sabor fresco surpreendente.',
      ings: [['Couve-flor crua ralada em flocos', 200, 'g', 'vegetais'], ['Bacon frito crocante picado', 60, 'g', 'proteínas'], ['Maionese caseira feita com azeite', 50, 'g', 'laticínios'], ['Cebolinha fresca e sementes de girassol', 2, 'colheres de sopa', 'temperos']],
      steps: [['Ralar couve-flor', 'Rale a couve-flor limpa e seca.', 180], ['Incorporar maionese', 'Misture a couve-flor com a maionese e cebolinha.', 120], ['Cobrir de bacon', 'Finalize com o bacon estaladiço por cima.', null]]
    },
    {
      title: 'Salada de Aspargos Verdes Crocantes com Lascas de Parmesão e Flor de Sal',
      sub: 'verdes_e_crocantes', diff: 'easy', prep: 8, cook: 4, cal: 280, p: 12, c: 3, fib: 2, f: 24, prem: true,
      tags: ['aspargos', 'parmesão', 'crocante', 'elegante'],
      tip: 'Salteie os aspargos por apenas 3 minutos na manteiga; eles devem manter cor verde viva e morder firme.',
      ings: [['Aspargos verdes frescos cortados', 250, 'g', 'vegetais'], ['Manteiga clarificada', 25, 'g', 'despensa'], ['Queijo Parmigiano Reggiano em lascas', 40, 'g', 'laticínios'], ['Flor de sal e pimenta moída', 1, 'colher de café', 'temperos']],
      steps: [['Saltear aspargos', 'Passe os aspargos na manteiga quente com flor de sal.', 180], ['Acomodar', 'Disponha em travessa rasa.', 60], ['Lascas de queijo', 'Cubra com as lascas nobres de parmesão.', null]]
    },
    {
      title: 'Salada de Rúcula Selvagem com Nozes Pecã Caramelizadas no Eritritol',
      sub: 'verdes_e_crocantes', diff: 'easy', prep: 10, cook: 4, cal: 340, p: 8, c: 3, fib: 2, f: 33, prem: true,
      tags: ['rúcula', 'pecã_caramelizada', 'gourmet', 'agridoce_keto'],
      tip: 'Derreta eritritol com canela e manteiga e envolva as nozes pecã até cristalizarem.',
      ings: [['Folhas de rúcula selvagem fresca', 150, 'g', 'vegetais'], ['Nozes pecã caramelizadas com eritritol e manteiga', 50, 'g', 'despensa'], ['Queijo gorgonzola ou queijo azul esfarelado', 50, 'g', 'laticínios'], ['Azeite extravirgem e vinagre de maçã', 25, 'ml', 'despensa']],
      steps: [['Caramelizar pecã', 'Toste as nozes com eritritol e manteiga e deixe esfriar.', 240], ['Montar rúcula', 'Disponha a rúcula com o queijo azul esfarelado.', 90], ['Finalizar', 'Adicione as nozes crocantes e regue o azeite.', null]]
    },
    {
      title: 'Salada Crocante de Repolho Roxo e Couve com Gergelim e Molho de Amendoim',
      sub: 'verdes_e_crocantes', diff: 'easy', prep: 12, cook: 0, cal: 330, p: 11, c: 6, fib: 3, f: 28, prem: false,
      tags: ['repolho_roxo', 'coleslaw_oriental', 'amendoim', 'asiático'],
      tip: 'Amasse o repolho fatiado com as mãos e sal por 1 minuto para amaciar sem perder a crocância.',
      ings: [['Repolho roxo e repolho verde finamente fatiados', 200, 'g', 'vegetais'], ['Pasta de amendoim pura sem açúcar', 35, 'g', 'despensa'], ['Óleo de gergelim e limão', 20, 'ml', 'despensa'], ['Gergelim torrado e coentro', 2, 'colheres de sopa', 'temperos']],
      steps: [['Fatiar repolho', 'Corte o repolho em fios finos como cabelo.', 240], ['Bater molho', 'Misture a pasta de amendoim com limão, óleo de gergelim e água morna.', 120], ['Envolver salada', 'Misture o molho no repolho e salpique gergelim.', null]]
    },
    {
      title: 'Salada de Agrião Fresco com Bacon Crocante e Gorgonzola Doce',
      sub: 'verdes_e_crocantes', diff: 'easy', prep: 8, cook: 5, cal: 370, p: 16, c: 2, fib: 1, f: 33, prem: false,
      tags: ['agrião', 'picante', 'gorgonzola', 'bacon'],
      tip: 'A picância natural do agrião equilibra a gordura rica do queijo gorgonzola cremoso.',
      ings: [['Folhas e talos macios de agrião fresco', 150, 'g', 'vegetais'], ['Cubos de bacon fritos bem secos', 60, 'g', 'proteínas'], ['Queijo gorgonzola', 60, 'g', 'laticínios'], ['Azeite extravirgem e gotas de limão', 25, 'ml', 'despensa']],
      steps: [['Dourar bacon', 'Frite o bacon até crocância total.', 240], ['Montar verdes', 'Acomode o agrião em tigela funda com pedaços de queijo.', 90], ['Finalizar', 'Espalhe o bacon quente com seu azeite sobre as folhas.', null]]
    },
    {
      title: 'Salada Crocante de Aipo (Salsão) com Nozes e Creme de Parmesão',
      sub: 'verdes_e_crocantes', diff: 'easy', prep: 10, cook: 0, cal: 310, p: 10, c: 3, fib: 2, f: 28, prem: false,
      tags: ['salsão', 'waldorf_keto', 'nozes', 'refrescante'],
      tip: 'Puxe os fios externos dos talos de aipo antes de fatiar para textura super macia e crocante.',
      ings: [['Talos de salsão fatiados em meias-luas finas', 180, 'g', 'vegetais'], ['Nozes tostadas picadas', 40, 'g', 'despensa'], ['Creme de nata com queijo parmesão e limão', 60, 'g', 'laticínios'], ['Folhas de aipo picadinhas', 2, 'colheres de sopa', 'temperos']],
      steps: [['Fatiar aipo', 'Corte o salsão bem fininho.', 180], ['Preparar molho', 'Misture a nata com parmesão ralado e suco de limão.', 120], ['Misturar', 'Envolva o aipo e nozes no molho cremoso.', null]]
    },
    {
      title: 'Salada de Espinafre Baby com Castanha de Caju Tostada e Queijo Parmesão',
      sub: 'verdes_e_crocantes', diff: 'easy', prep: 6, cook: 0, cal: 320, p: 11, c: 4, fib: 2, f: 28, prem: false,
      tags: ['espinafre_baby', 'castanha_de_caju', 'rápida'],
      tip: 'O espinafre baby cru tem sabor adocicado suave e textura muito macia.',
      ings: [['Folhas jovens de espinafre baby lavadas', 150, 'g', 'vegetais'], ['Castanhas de caju tostadas', 40, 'g', 'despensa'], ['Queijo parmesão em lascas', 40, 'g', 'laticínios'], ['Azeite extravirgem com mostarda Dijon', 25, 'ml', 'despensa']],
      steps: [['Secar espinafre', 'Seque as folhas perfeitamente.', 60], ['Misturar', 'Junte as castanhas e o parmesão.', 60], ['Temperar', 'Regue o molho e sirva imediatamente.', null]]
    },
    {
      title: 'Salada de Radicchio Grelhado com Azeite de Alho e Queijo Roquefort',
      sub: 'verdes_e_crocantes', diff: 'medium', prep: 8, cook: 6, cal: 350, p: 12, c: 3, fib: 2, f: 31, prem: true,
      tags: ['radicchio', 'grelhado', 'roquefort', 'italiano'],
      tip: 'Grelhar o radicchio suaviza seu amargor natural e carameliza as folhas externas.',
      ings: [['Pés de radicchio cortados em quatro', 2, 'unidades', 'vegetais'], ['Queijo Roquefort esfarelado', 60, 'g', 'laticínios'], ['Azeite de oliva aromatizado com alho', 30, 'ml', 'despensa'], ['Pimenta-do-reino moída', 1, 'pitada', 'temperos']],
      steps: [['Grelhar radicchio', 'Doure os quartos de radicchio na frigideira de ferro por 2 minutos de cada lado.', 240], ['Acomodar', 'Coloque no prato ainda fumegante.', 60], ['Queijo azul', 'Cubra com o queijo roquefort para derreter suavemente.', null]]
    },
    {
      title: 'Salada de Brotos Nobres com Sementes de Girassol e Vinagrete de Framboesa Keto',
      sub: 'verdes_e_crocantes', diff: 'easy', prep: 8, cook: 0, cal: 290, p: 9, c: 3, fib: 2, f: 26, prem: true,
      tags: ['brotos', 'microgreens', 'alta_gastronomia', 'framboesa_keto'],
      tip: 'Os microgreens contêm até 40 vezes mais densidade de nutrientes do que as plantas adultas.',
      ings: [['Mix de brotos de alfafa, beterraba e rúcula', 120, 'g', 'vegetais'], ['Sementes de girassol tostadas', 30, 'g', 'despensa'], ['Vinagre de framboesa sem açúcar com azeite', 30, 'ml', 'despensa'], ['Flor de sal', 1, 'pitada', 'temperos']],
      steps: [['Dispor brotos', 'Acomode os brotos fofos no prato.', 90], ['Sementes', 'Polvilhe as sementes douradas.', 60], ['Vinagrete delicado', 'Goteje o vinagrete aromático com flor de sal.', null]]
    },

    // 31-40: Com Proteína (10)
    {
      title: 'Salada Cobb Cetogênica Nobre com Frango, Bacon, Ovos e Abacate',
      sub: 'com_proteina', diff: 'medium', prep: 15, cook: 8, cal: 520, p: 42, c: 4, fib: 3, f: 41, prem: true,
      tags: ['cobb', 'refeição_completa', 'abacate', 'bacon', 'clássico'],
      tip: 'Arrume todos os ingredientes em fileiras paralelas e elegantes sobre a cama de alface.',
      ings: [['Peito de frango grelhado em cubos', 200, 'g', 'proteínas'], ['Bacon artesanal em cubos frito', 50, 'g', 'proteínas'], ['Abacate maduro em cubos', 100, 'g', 'vegetais'], ['Ovos caipiras cozidos picados', 2, 'unidades', 'proteínas'], ['Queijo gorgonzola esfarelado', 50, 'g', 'laticínios'], ['Mix de alfaces frescas', 150, 'g', 'vegetais'], ['Molho ranch caseiro rico em nata', 45, 'ml', 'laticínios']],
      steps: [['Base de alface', 'Forre o prato fundo com as folhas rasgadas.', 120], ['Fileiras coloridas', 'Arrume em listras: frango, bacon, ovos, abacate e gorgonzola.', 240], ['Molho ranch', 'Sirva com a molheira de molho ranch cremoso.', null]]
    },
    {
      title: 'Salada de Rosbife de Mignon com Rúcula Selvagem e Molho de Mostarda Dijon',
      sub: 'com_proteina', diff: 'easy', prep: 10, cook: 0, cal: 420, p: 40, c: 2, fib: 1, f: 28, prem: true,
      tags: ['rosbife', 'filé_mignon', 'mostarda_dijon', 'jantar_elegante'],
      tip: 'O rosbife caseiro bem fino e rosado é a estrela proteica desta salada gourmet.',
      ings: [['Fatias finas de rosbife de filé mignon caseiro', 220, 'g', 'proteínas'], ['Folhas de rúcula fresca lavada', 120, 'g', 'vegetais'], ['Queijo parmesão em lascas', 40, 'g', 'laticínios'], ['Molho vinagrete de mostarda Dijon e azeite', 35, 'ml', 'despensa']],
      steps: [['Acomodar rosbife', 'Disponha as fatias de rosbife dobradas em ondas no prato.', 180], ['Folhas e queijo', 'Coloque a rúcula temperada no centro e as lascas de queijo.', 120], ['Regar vinagrete', 'Despeje o molho de mostarda e salpique pimenta moída.', null]]
    },
    {
      title: 'Salada de Camarões ao Vapor com Maionese de Abacate e Coentro',
      sub: 'com_proteina', diff: 'easy', prep: 10, cook: 4, cal: 390, p: 34, c: 4, fib: 3, f: 27, prem: false,
      tags: ['camarão', 'abacate', 'sem_lactose', 'leve'],
      tip: 'A maionese de abacate com limão e azeite cria um molho verde ultra cremoso sem laticínios.',
      ings: [['Camarões rosa limpos cozidos no vapor', 280, 'g', 'proteínas'], ['Maionese caseira de abacate', 80, 'g', 'vegetais'], ['Folhas de alface romana crocante', 120, 'g', 'vegetais'], ['Coentro fresco e raspas de limão taiti', 2, 'colheres de sopa', 'temperos']],
      steps: [['Cozinhar camarão', 'Cozinhe o camarão por 3 minutos e resfrie no gelo.', 180], ['Envolver no molho', 'Misture com a maionese verde de abacate.', 120], ['Dispor nas folhas', 'Acomode em barquinhas de folhas de alface.', null]]
    },
    {
      title: 'Salada de Sobrecoxa Desfiada com Pesto Cremoso e Tomatinhos Confit',
      sub: 'com_proteina', diff: 'easy', prep: 10, cook: 0, cal: 460, p: 38, c: 3, fib: 1, f: 33, prem: false,
      tags: ['frango_desfiado', 'pesto', 'confit', 'marmita_perfeita'],
      tip: 'A sobrecoxa de frango tem muito mais sabor e umidade do que o peito para saladas frias.',
      ings: [['Sobrecoxa de frango assada e desfiada', 250, 'g', 'proteínas'], ['Pesto genovês com nata fresca', 50, 'g', 'despensa'], ['Tomates-cereja confitados', 60, 'g', 'vegetais'], ['Mix de folhas verdes crocantes', 120, 'g', 'vegetais']],
      steps: [['Misturar frango e pesto', 'Incorpore o pesto ao frango desfiado suculento.', 120], ['Montar com folhas', 'Acomode sobre as folhas verdes.', 60], ['Decorar', 'Junte os tomatinhos confitados brilhantes.', null]]
    },
    {
      title: 'Salada de Salmão Defumado Nobre com Cream Cheese de Ervas e Alcaparras',
      sub: 'com_proteina', diff: 'easy', prep: 10, cook: 0, cal: 410, p: 30, c: 3, fib: 1, f: 31, prem: true,
      tags: ['salmão_defumado', 'cream_cheese', 'alcaparras', 'brunch'],
      tip: 'Use cream cheese temperado com cebolinha francesa e raspas de limão siciliano.',
      ings: [['Fatias de salmão defumado', 180, 'g', 'proteínas'], ['Cream cheese batido com ervas', 70, 'g', 'laticínios'], ['Alcaparras drenadas', 2, 'colheres de sopa', 'temperos'], ['Mix de folhas verdes nobres', 120, 'g', 'vegetais'], ['Azeite de oliva e limão', 20, 'ml', 'despensa']],
      steps: [['Dispor folhas', 'Faça a base com as folhas verdes.', 60], ['Rolos de salmão', 'Enrole as lâminas de salmão defumado com cream cheese no meio.', 180], ['Finalizar', 'Salpique alcaparras e fio de azeite.', null]]
    },
    {
      title: 'Salada Proteica de Carne Seca Desfiada com Queijo Coalho Dourado',
      sub: 'com_proteina', diff: 'easy', prep: 12, cook: 6, cal: 480, p: 42, c: 4, fib: 2, f: 33, prem: false,
      tags: ['carne_seca', 'queijo_coalho', 'nordestina', 'refeição'],
      tip: 'Doure os cubos de queijo coalho na frigideira de ferro até criarem casquinha dourada estaladiça.',
      ings: [['Carne seca cozida desfiada refogada', 200, 'g', 'proteínas'], ['Queijo coalho em cubos grelhados', 100, 'g', 'laticínios'], ['Folhas de couve fatiadas fininhas cruas', 100, 'g', 'vegetais'], ['Cebola roxa e cheiro-verde', 40, 'g', 'vegetais'], ['Manteiga de garrafa e limão', 25, 'ml', 'despensa']],
      steps: [['Dourar coalho', 'Doure os cubos de queijo na frigideira seca.', 180], ['Misturar couve', 'Tempere a couve crua com limão e azeite.', 120], ['Reunir quentes', 'Acomode a carne seca e o queijo coalho por cima.', null]]
    },
    {
      title: 'Salada de Atum Nobre com Ovos Caipiras e Maionese de Azeite',
      sub: 'com_proteina', diff: 'easy', prep: 8, cook: 6, cal: 440, p: 38, c: 2, fib: 1, f: 31, prem: false,
      tags: ['atum', 'ovos', 'maionese_caseira', 'rápida'],
      tip: 'A maionese feita exclusivamente com gemas e azeite de oliva é a alma das saladas cetogênicas proteicas.',
      ings: [['Atum sólido em azeite de oliva', 200, 'g', 'proteínas'], ['Ovos caipiras cozidos picados', 3, 'unidades', 'proteínas'], ['Maionese caseira de azeite', 50, 'g', 'laticínios'], ['Salsinha fresca e cebolinha', 2, 'colheres de sopa', 'temperos'], ['Folhas de alface americana crocante', 100, 'g', 'vegetais']],
      steps: [['Misturar recheio proteico', 'Amasse o atum com os ovos, maionese e ervas.', 180], ['Barcas de alface', 'Distribua a pasta proteica dentro das folhas de alface.', 120], ['Servir fresca', 'Decore com páprica doce.', null]]
    },
    {
      title: 'Salada de Tiras de Lombo Suíno com Bacon e Vinagrete de Chimichurri',
      sub: 'com_proteina', diff: 'easy', prep: 10, cook: 8, cal: 470, p: 44, c: 2, fib: 1, f: 32, prem: false,
      tags: ['lombo_suíno', 'bacon', 'chimichurri', 'saborosa'],
      tip: 'O chimichurri fresco confere acidez perfeita que corta a gordura do bacon crocante.',
      ings: [['Lombo suíno grelhado em tiras', 220, 'g', 'proteínas'], ['Bacon artesanal crocante', 40, 'g', 'proteínas'], ['Mix de folhas verdes amargas', 120, 'g', 'vegetais'], ['Molho chimichurri caseiro rico em azeite', 40, 'ml', 'temperos']],
      steps: [['Grelhar lombo', 'Doure as tiras de lombo suíno na frigideira.', 300], ['Compor salada', 'Coloque as folhas e adicione a carne suína morna e o bacon.', 90], ['Regar chimichurri', 'Despeje o chimichurri sobre o prato.', null]]
    },
    {
      title: 'Salada de Peito de Pato Defumado com Rúcula e Queijo Feta',
      sub: 'com_proteina', diff: 'medium', prep: 10, cook: 0, cal: 460, p: 32, c: 3, fib: 1, f: 36, prem: true,
      tags: ['magret_defumado', 'pato', 'feta', 'alta_gastronomia'],
      tip: 'A gordura nobre do peito de pato traz riqueza incomparável para a salada verde.',
      ings: [['Magret de pato defumado fatiado fino', 160, 'g', 'proteínas'], ['Queijo feta esfarelado', 60, 'g', 'laticínios'], ['Folhas de rúcula selvagem', 120, 'g', 'vegetais'], ['Azeite de oliva e redução de vinagre balsâmico keto', 25, 'ml', 'despensa']],
      steps: [['Dispor pato', 'Arrume as fatias de pato defumado no prato.', 120], ['Juntar rúcula e queijo', 'Coloque a rúcula temperada e o queijo feta.', 90], ['Finalizar', 'Pincele o azeite balsâmico.', null]]
    },
    {
      title: 'Salada de Frango Tikka com Molho de Iogurte Grego e Pepino',
      sub: 'com_proteina', diff: 'medium', prep: 12, cook: 10, cal: 410, p: 40, c: 4, fib: 2, f: 26, prem: false,
      tags: ['tikka', 'frango_indiano', 'iogurte', 'especiarias'],
      tip: 'Marine o frango com garam masala e gengibre para um sabor exótico arrebatador.',
      ings: [['Cubos de peito de frango temperados com especiarias tikka', 250, 'g', 'proteínas'], ['Molho de iogurte grego com hortelã e pepino (Tzatziki)', 80, 'g', 'laticínios'], ['Folhas verdes e tomates em cubos', 150, 'g', 'vegetais']],
      steps: [['Grelhar frango tikka', 'Doure os cubos temperados na frigideira quente.', 360], ['Dispor salada', 'Coloque as folhas e tomates.', 60], ['Finalizar com molho', 'Acomode o frango quente e cubra com o molho frio de iogurte.', null]]
    },

    // 41-50: Mornas (10)
    {
      title: 'Salada Morna de Cogumelos Salteados no Alho com Queijo Brie Derretido',
      sub: 'mornas', diff: 'easy', prep: 10, cook: 8, cal: 390, p: 14, c: 5, fib: 2, f: 34, prem: true,
      tags: ['salada_morna', 'cogumelos', 'brie', 'bistrô', 'outono'],
      tip: 'Despeje os cogumelos fumegantes com a manteiga de alho diretamente sobre as fatias de queijo brie.',
      ings: [['Mix de cogumelos frescos (shimeji, paris e portobello)', 250, 'g', 'vegetais'], ['Queijo Brie francês fatiado', 100, 'g', 'laticínios'], ['Manteiga com alho e tomilho', 35, 'g', 'despensa'], ['Folhas de rúcula e espinafre fresco', 120, 'g', 'vegetais']],
      steps: [['Saltear cogumelos', 'Doure os cogumelos na manteiga bem quente até dourarem sem soltar água.', 300], ['Base de queijo', 'Acomode as fatias de brie sobre as folhas verdes.', 60], ['Despejar quente', 'Despeje os cogumelos e o molho borbulhante derretendo o brie.', null]]
    },
    {
      title: 'Salada Morna de Frango Grelhado com Bacon e Espinafre Salteado',
      sub: 'mornas', diff: 'easy', prep: 8, cook: 10, cal: 450, p: 40, c: 3, fib: 2, f: 31, prem: false,
      tags: ['salada_morna', 'frango', 'espinafre', 'bacon'],
      tip: 'O espinafre deve apenas murchar com o calor residual do frango para manter os nutrientes.',
      ings: [['Tiras de filé de frango', 220, 'g', 'proteínas'], ['Bacon artesanal em fatias crocantes', 50, 'g', 'proteínas'], ['Folhas de espinafre frescas', 150, 'g', 'vegetais'], ['Azeite de oliva e suco de limão', 25, 'ml', 'despensa']],
      steps: [['Dourar bacon e frango', 'Frite o bacon e depois doure o frango na gordura saborosa.', 360], ['Murchar espinafre', 'Apague o fogo e junte o espinafre mexendo por 30 segundos.', 60], ['Servir morno', 'Regue azeite e limão e sirva imediatamente.', null]]
    },
    {
      title: 'Salada Morna de Tiras de Picanha com Rúcula e Manteiga de Chimichurri',
      sub: 'mornas', diff: 'easy', prep: 8, cook: 8, cal: 510, p: 42, c: 2, fib: 1, f: 38, prem: true,
      tags: ['salada_morna', 'picanha', 'rúcula', 'churrasco'],
      tip: 'A gordura da picanha fatiada quente derrete temperando as folhas frescas de rúcula.',
      ings: [['Tiras de picanha grelhadas no ponto', 220, 'g', 'proteínas'], ['Folhas de rúcula selvagem', 120, 'g', 'vegetais'], ['Manteiga batida com chimichurri fresco', 35, 'g', 'despensa'], ['Flor de sal', 1, 'pitada', 'temperos']],
      steps: [['Grelhar picanha', 'Sele as tiras na frigideira quente.', 240], ['Cama de rúcula', 'Arrume a rúcula na travessa com flor de sal.', 60], ['Coroar com carne e manteiga', 'Coloque a carne e a noz de manteiga de chimichurri para derreter.', null]]
    },
    {
      title: 'Salada Morna de Aspargos com Ovos Pochê e Lascas de Grana Padano',
      sub: 'mornas', diff: 'medium', prep: 10, cook: 6, cal: 340, p: 18, c: 4, fib: 2, f: 28, prem: true,
      tags: ['salada_morna', 'aspargos', 'ovo_pochê', 'elegante'],
      tip: 'Rompa a gema do ovo pochê sobre os aspargos quentes no momento de levar à mesa.',
      ings: [['Aspargos verdes salteados no azeite', 200, 'g', 'vegetais'], ['Ovos caipiras frescos para pochê', 2, 'unidades', 'proteínas'], ['Queijo Grana Padano em lascas', 40, 'g', 'laticínios'], ['Manteiga e flor de sal', 20, 'g', 'despensa']],
      steps: [['Grelhar aspargos', 'Salteie os aspargos na manteiga com sal.', 180], ['Fazer pochê', 'Cozinhe os ovos em água fervente com vinagre por 3 minutos.', 180], ['Montar', 'Acomode os ovos sobre os aspargos e salpique Grana Padano.', null]]
    },
    {
      title: 'Salada Morna de Couve-de-Bruxelas com Bacon e Castanhas Tostadas',
      sub: 'mornas', diff: 'medium', prep: 10, cook: 12, cal: 380, p: 14, c: 6, fib: 4, f: 31, prem: false,
      tags: ['couve-de-bruxelas', 'bacon', 'castanhas', 'inverno'],
      tip: 'Corte as couves-de-bruxelas ao meio e doure o lado plano na frigideira até caramelizar intensamente.',
      ings: [['Couves-de-bruxelas cortadas ao meio', 250, 'g', 'vegetais'], ['Bacon em cubos dourado', 60, 'g', 'proteínas'], ['Castanhas picadas tostadas', 30, 'g', 'despensa'], ['Azeite e raspas de limão', 20, 'ml', 'despensa']],
      steps: [['Dourar bacon e couve', 'Frite o bacon e depois doure as couves na mesma gordura com a face para baixo.', 480], ['Tostar castanhas', 'Junte as castanhas nos últimos 2 minutos.', 120], ['Servir fumegante', 'Finalize com raspas de limão e sirva morno.', null]]
    },
    {
      title: 'Salada Morna de Salmão Fresco com Pupunha Salteada na Manteiga de Alho',
      sub: 'mornas', diff: 'easy', prep: 10, cook: 8, cal: 440, p: 36, c: 4, fib: 2, f: 31, prem: false,
      tags: ['salmão', 'palmito_pupunha', 'manteiga_de_alho', 'morna'],
      tip: 'O palmito pupunha salteado adquire doçura amanteigada excelente.',
      ings: [['Cubos de salmão fresco selados', 200, 'g', 'proteínas'], ['Palmito pupunha fresco em rodelas', 150, 'g', 'vegetais'], ['Manteiga clarificada com alho', 30, 'g', 'despensa'], ['Rúcula para a base', 80, 'g', 'vegetais']],
      steps: [['Saltear pupunha', 'Doure a pupunha na manteiga de alho por 4 minutos.', 240], ['Selar salmão', 'Junte os cubos de salmão por 3 minutos delicadamente.', 180], ['Servir sobre rúcula', 'Despeje sobre as folhas de rúcula fresca.', null]]
    },
    {
      title: 'Salada Morna de Berinjela com Abobrinha Grelhadas e Queijo Minas Curado',
      sub: 'mornas', diff: 'easy', prep: 10, cook: 10, cal: 360, p: 16, c: 5, fib: 3, f: 30, prem: false,
      tags: ['vegetais_grelhados', 'abobrinha', 'berinjela', 'queijo_curado'],
      tip: 'Pincele azeite com alho nos vegetais antes de grelhar na chapa estriada.',
      ings: [['Fatias de abobrinha e berinjela grelhadas', 250, 'g', 'vegetais'], ['Queijo minas curado fatiado fino', 80, 'g', 'laticínios'], ['Azeite extravirgem e orégano fresco', 30, 'ml', 'despensa']],
      steps: [['Grelhar legumes', 'Marque os vegetais na grelha de ferro.', 360], ['Intercalar', 'Monte camadas dos vegetais quentes com fatias de queijo.', 120], ['Derreter', 'O calor dos legumes amolece o queijo minas perfeitamente.', null]]
    },
    {
      title: 'Salada Morna de Polvo Grelhado com Tomatinhos Caramelizados e Coentro',
      sub: 'mornas', diff: 'medium', prep: 12, cook: 8, cal: 360, p: 30, c: 4, fib: 1, f: 25, prem: true,
      tags: ['polvo', 'tomate_confit', 'morna', 'alta_gastronomia'],
      tip: 'Aqueça a frigideira até soltar fumaça para dourar o polvo rapidamente sem perder umidade.',
      ings: [['Tentáculos de polvo cozidos fatiados', 220, 'g', 'proteínas'], ['Tomatinhos-cereja estourados na frigideira', 100, 'g', 'vegetais'], ['Azeite extravirgem e alho', 30, 'ml', 'despensa'], ['Folhas verdes e coentro fresco', 100, 'g', 'vegetais']],
      steps: [['Grelhar polvo', 'Doure o polvo com o azeite e alho por 3 minutos.', 180], ['Adicionar tomatinhos', 'Junte os tomates até começarem a estourar a pele.', 180], ['Compor prato', 'Despeje sobre a cama de folhas verdes frescas.', null]]
    },
    {
      title: 'Salada Morna de Iscas de Fígado com Cebolas Douradas e Rúcula',
      sub: 'mornas', diff: 'easy', prep: 8, cook: 6, cal: 380, p: 38, c: 4, fib: 1, f: 23, prem: false,
      tags: ['fígado', 'órgãos', 'denso_em_nutrientes', 'rúcula'],
      tip: 'Frite o fígado bem rápido para manter o centro suculento e macio.',
      ings: [['Iscas de fígado bovino fresco', 220, 'g', 'proteínas'], ['Cebola fatiada dourada na banha', 80, 'g', 'vegetais'], ['Folhas de rúcula fresca', 120, 'g', 'vegetais'], ['Vinagre de maçã e azeite', 20, 'ml', 'despensa']],
      steps: [['Dourar cebola', 'Frite a cebola na manteiga ou banha até dourar.', 240], ['Saltear iscas', 'Junte o fígado em fogo alto por 2 minutos.', 120], ['Servir morno', 'Acomode imediatamente sobre a rúcula fresca.', null]]
    },
    {
      title: 'Salada Morna de Queijo Brie Empanado em Castanhas com Folhas Nobres',
      sub: 'mornas', diff: 'medium', prep: 12, cook: 6, cal: 460, p: 18, c: 4, fib: 2, f: 42, prem: true,
      tags: ['brie_empanado', 'castanhas', 'salada_morna', 'luxo'],
      tip: 'Asse o triângulo de queijo brie empanado na farinha de castanhas na airfryer até inflar e derreter.',
      ings: [['Triângulo de queijo Brie (120g)', 120, 'g', 'laticínios'], ['Farinha de castanhas de caju e gergelim', 40, 'g', 'despensa'], ['Ovo batido para empanar', 1, 'unidade', 'proteínas'], ['Mix de folhas nobres com azeite e flor de sal', 120, 'g', 'vegetais']],
      steps: [['Empanar o brie', 'Passe o queijo no ovo e na farinha de castanhas.', 120], ['Assar crocante', 'Asse a 200°C por 5 minutos até a casca ficar dourada e o miolo líquido.', 300], ['Coroar salada', 'Coloque o brie quente no centro das folhas temperadas.', null]]
    }
  ];

  return items.map((r) => ({
    title: r.title,
    shortDesc: `${r.title} com folhas selecionadas e molho artesanal 100% cetogênico.`,
    desc: `Salada fresca e densa em micronutrientes, vitaminas e gorduras monoinsaturadas com crocância extraordinária.`,
    category: 'salads',
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
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    ingredients: r.ings.map(([name, qty, unit, cat]) => ({ name, qty, unit, cat })),
    steps: r.steps.map(([title, desc, timer]) => ({ title, desc, timer })),
    chefTip: r.tip
  })).slice(0, 50);
}
