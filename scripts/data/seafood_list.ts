import { RawRecipeInput } from '../recipe_helper';

export function getFullSeafoodList(): RawRecipeInput[] {
  const items: { title: string; sub: string; diff: 'easy' | 'medium' | 'hard'; prep: number; cook: number; cal: number; p: number; c: number; fib: number; f: number; prem: boolean; tags: string[]; tip: string; ings: [string, number, string, any][]; steps: [string, string, number | null][] }[] = [
    // 1-15: Salmão (15)
    {
      title: 'Salmão Grelhado com Manteiga de Alcaparras e Limão Siciliano',
      sub: 'salmao', diff: 'easy', prep: 8, cook: 10, cal: 460, p: 38, c: 2, fib: 0, f: 34, prem: false,
      tags: ['salmão', 'ômega_3', 'alcaparras', 'limão_siciliano', 'rápido'],
      tip: 'Grelhe o salmão com a pele voltada para baixo por 70% do tempo para deixá-la estaladiça.',
      ings: [['Filés de salmão fresco com pele', 400, 'g', 'proteínas'], ['Manteiga clarificada', 35, 'g', 'despensa'], ['Alcaparras drenadas', 2, 'colheres de sopa', 'temperos'], ['Suco e raspas de limão siciliano', 1, 'unidade', 'temperos'], ['Flor de sal e dill fresco', 1, 'colher de sopa', 'temperos']],
      steps: [['Secar e salgar', 'Seque a pele do salmão e tempere com flor de sal.', 120], ['Grelhar pele crocante', 'Coloque na frigideira quente com azeite até a pele ficar dourada.', 360], ['Manteiga cítrica', 'Vire por 1 minuto e junte a manteiga, alcaparras e suco de limão para regar.', 120]]
    },
    {
      title: 'Salmão ao Forno com Crosta Crocante de Castanhas e Parmesão',
      sub: 'salmao', diff: 'medium', prep: 10, cook: 15, cal: 510, p: 40, c: 3, fib: 1, f: 38, prem: true,
      tags: ['salmão', 'castanhas', 'parmesão', 'crocante', 'gourmet'],
      tip: 'Pique as castanhas rusticamente para que a crosta ofereça textura crocante aos cortes macios do peixe.',
      ings: [['Lombo de salmão fresco', 450, 'g', 'proteínas'], ['Castanhas de caju e do pará picadas', 50, 'g', 'despensa'], ['Queijo parmesão ralado fino', 30, 'g', 'laticínios'], ['Mostarda Dijon para pincelar', 1, 'colher de sopa', 'temperos'], ['Manteiga derretida', 20, 'g', 'laticínios']],
      steps: [['Pincelar mostarda', 'Pincele a mostarda sobre a carne do salmão.', 60], ['Aplicar a crosta', 'Pressione a mistura de castanhas, parmesão e manteiga.', 120], ['Assar no forno', 'Asse a 200°C até a crosta dourar e o salmão soltar em lascas suculentas.', 780]]
    },
    {
      title: 'Lombo de Salmão ao Molho Cremoso de Alho-Poró e Nata',
      sub: 'salmao', diff: 'easy', prep: 10, cook: 12, cal: 490, p: 39, c: 3, fib: 1, f: 36, prem: false,
      tags: ['salmão', 'alho-poró', 'cremoso', 'jantar'],
      tip: 'O alho-poró refogado na manteiga confere dulçor suave que harmoniza com a untuosidade do salmão.',
      ings: [['Filés de salmão', 400, 'g', 'proteínas'], ['Alho-poró fatiado bem fininho', 1, 'xícara', 'vegetais'], ['Nata fresca ou creme de leite', 150, 'ml', 'laticínios'], ['Manteiga', 25, 'g', 'despensa'], ['Dill fresco picadinho', 1, 'colher de sopa', 'temperos']],
      steps: [['Selar os filés', 'Doure os filés rapidamente e reserve aquecidos.', 300], ['Refogar alho-poró', 'Aqueça a manteiga e murche o alho-poró em fogo brando.', 240], ['Finalizar molho', 'Junte a nata, devolva o salmão e sirva fumegante com dill.', 180]]
    },
    {
      title: 'Poke Cetogênico Nobre de Salmão com Abacate e Gergelim Preto',
      sub: 'salmao', diff: 'easy', prep: 12, cook: 0, cal: 460, p: 34, c: 5, fib: 4, f: 35, prem: false,
      tags: ['poke', 'salmão_fresco', 'abacate', 'sem_fogão'],
      tip: 'Substitua a base de arroz por pepino em fios finos ou couve-flor em grãos crus temperados.',
      ings: [['Salmão fresco para sashimi em cubos', 350, 'g', 'proteínas'], ['Abacate maduro em cubos', 120, 'g', 'vegetais'], ['Pepino japonês em fios', 100, 'g', 'vegetais'], ['Gergelim preto e branco torrados', 15, 'g', 'despensa'], ['Molho de óleo de gergelim e limão', 25, 'ml', 'despensa']],
      steps: [['Base fresca', 'Acomode o pepino em fios no fundo de duas tigelas.', 120], ['Adicionar salmão e abacate', 'Disponha os cubos de salmão e abacate lado a lado.', 120], ['Finalizar com tempero', 'Regue o molho cítrico e salpique o gergelim.', null]]
    },
    {
      title: 'Tartar de Salmão com Abacate, Flor de Sal e Raspas Cítricas',
      sub: 'salmao', diff: 'medium', prep: 15, cook: 0, cal: 420, p: 32, c: 4, fib: 3, f: 32, prem: true,
      tags: ['tartar', 'salmão', 'abacate', 'alta_gastronomia'],
      tip: 'Mantenha o salmão sempre bem gelado para cortar cubinhos limpos e precisos na ponta da faca.',
      ings: [['Salmão fresco limpo sem pele picado', 350, 'g', 'proteínas'], ['Abacate em cubinhos pequenos', 100, 'g', 'vegetais'], ['Azeite de oliva extravirgem', 25, 'ml', 'despensa'], ['Raspas de limão taiti e siciliano', 1, 'colher de chá', 'temperos'], ['Flor de sal e ciboulette', 1, 'colher de sopa', 'temperos']],
      steps: [['Picar ingredientes', 'Corte o salmão e abacate em cubinhos uniformes de meio centímetro.', 360], ['Temperar no momento', 'Misture azeite, raspas de limão e flor de sal.', 120], ['Moldar em aro', 'Preencha o aro cilíndrico e retire com cuidado no prato.', 60]]
    },
    {
      title: 'Salmão Assado com Espinafre Cremoso e Parmesão Gratinado',
      sub: 'salmao', diff: 'easy', prep: 10, cook: 15, cal: 480, p: 42, c: 3, fib: 1, f: 34, prem: false,
      tags: ['salmão', 'espinafre', 'parmesão', 'forno'],
      tip: 'Acomode os filés de salmão sobre o leito de espinafre temperado antes de levar ao forno.',
      ings: [['Filés de salmão', 400, 'g', 'proteínas'], ['Espinafre picado refogado na manteiga', 150, 'g', 'vegetais'], ['Creme de leite ou nata', 80, 'ml', 'laticínios'], ['Queijo parmesão ralado', 50, 'g', 'laticínios']],
      steps: [['Fundo de espinafre', 'Espalhe o espinafre com creme no fundo do refratário.', 120], ['Acomodar salmão', 'Coloque os filés de salmão temperados por cima.', 60], ['Gratinar', 'Cubra com o parmesão e asse a 200°C por 15 minutos.', 900]]
    },
    {
      title: 'Salmão Confitado em Azeite de Oliva com Tomilho e Alho',
      sub: 'salmao', diff: 'hard', prep: 15, cook: 25, cal: 530, p: 36, c: 1, fib: 0, f: 43, prem: true,
      tags: ['confit', 'azeite', 'textura_perfeita', 'luxo'],
      tip: 'O azeite deve ser mantido entre 50°C e 60°C para que o salmão cozinhe como uma manteiga aveludada.',
      ings: [['Lombo alto de salmão sem espinhas', 400, 'g', 'proteínas'], ['Azeite de oliva extravirgem abundante', 300, 'ml', 'despensa'], ['Dentes de alho esmagados e ramos de tomilho', 4, 'unidades', 'temperos'], ['Flor de sal da Guérande', 1, 'pitada', 'temperos']],
      steps: [['Aquecer azeite', 'Aqueça o azeite em panela baixa com as ervas a 55°C.', 300], ['Submergir o peixe', 'Coloque o salmão completamente coberto de azeite.', 60], ['Cocção lenta', 'Mantenha na temperatura por 25 minutos.', 1500]]
    },
    {
      title: 'Salmão com Crosta de Gergelim Bicolor e Molho Shoyu Zero Açúcar',
      sub: 'salmao', diff: 'easy', prep: 8, cook: 8, cal: 470, p: 40, c: 2, fib: 1, f: 34, prem: false,
      tags: ['salmão', 'gergelim', 'oriental', 'crocante'],
      tip: 'Pressione bem os filés no prato cheio de gergelim para criar uma camada contínua e espessa.',
      ings: [['Filés de salmão limpos', 400, 'g', 'proteínas'], ['Gergelim branco e preto misturados', 50, 'g', 'despensa'], ['Shoyu sem açúcar com gengibre fresco', 30, 'ml', 'temperos'], ['Óleo de gergelim torrado', 15, 'ml', 'despensa']],
      steps: [['Empanar no gergelim', 'Passe os filés no óleo de gergelim e depois na mistura de sementes.', 120], ['Selar na frigideira', 'Grelhe por 3 minutos de cada lado até o gergelim tostar.', 360], ['Servir', 'Acompanhe com o molho de shoyu e gengibre fresco.', null]]
    },
    {
      title: 'Salmão Grelhado com Molho Pesto de Manjericão e Pinhões',
      sub: 'salmao', diff: 'easy', prep: 8, cook: 10, cal: 520, p: 39, c: 3, fib: 1, f: 39, prem: true,
      tags: ['salmão', 'pesto', 'manjericão', 'mediterrâneo'],
      tip: 'Coloque o pesto frio sobre o filé imediatamente ao sair do fogo.',
      ings: [['Filés de salmão', 400, 'g', 'proteínas'], ['Pesto genovês legítimo com nozes/pinhões', 60, 'g', 'despensa'], ['Azeite de oliva e flor de sal', 20, 'ml', 'despensa']],
      steps: [['Grelhar filés', 'Grelhe os filés na frigideira antiaderente.', 360], ['Descanso', 'Acomode nos pratos.', 60], ['Cobrir de pesto', 'Espalhe generosa colherada de pesto aromático.', null]]
    },
    {
      title: 'Salmão ao Molho de Mostarda Ancienne com Alcaparras',
      sub: 'salmao', diff: 'easy', prep: 8, cook: 12, cal: 480, p: 39, c: 3, fib: 1, f: 35, prem: false,
      tags: ['salmão', 'mostarda_ancienne', 'alcaparras', 'bistrô'],
      tip: 'A mostarda com grãos inteiros traz textura e elegância ao prato.',
      ings: [['Filés de salmão', 400, 'g', 'proteínas'], ['Mostarda em grãos', 2, 'colheres de sopa', 'temperos'], ['Alcaparras', 1, 'colher de sopa', 'temperos'], ['Creme de leite', 120, 'ml', 'laticínios'], ['Manteiga', 20, 'g', 'despensa']],
      steps: [['Grelhar salmão', 'Doure os filés na manteiga.', 360], ['Preparar molho', 'Junte o creme, a mostarda e alcaparras deixando ferver suavemente.', 180], ['Envolver peixe', 'Regue o molho sobre o salmão.', null]]
    },
    {
      title: 'Sashimi de Salmão com Azeite Trufado e Flor de Sal',
      sub: 'salmao', diff: 'medium', prep: 12, cook: 0, cal: 390, p: 34, c: 0, fib: 0, f: 29, prem: true,
      tags: ['sashimi', 'trufas', 'japonês_fusion', 'sem_fogão'],
      tip: 'Corte as lâminas com uma única puxada contínua de faca afiada (yanagiba).',
      ings: [['Lombo de salmão sashimi grade fresco', 350, 'g', 'proteínas'], ['Azeite de trufas brancas', 15, 'ml', 'despensa'], ['Flor de sal', 1, 'pitada', 'temperos'], ['Ciboulette cortada fininha', 1, 'colher de sopa', 'temperos']],
      steps: [['Fatiar sashimi', 'Fatie em lâminas precisas de 4mm.', 300], ['Dispor no prato', 'Arrume em leque sobre prato frio.', 120], ['Trufado', 'Pincele o azeite de trufas e polvilhe flor de sal e ciboulette.', null]]
    },
    {
      title: 'Salmão Assado em Papillote com Aspargos e Manteiga de Limão',
      sub: 'salmao', diff: 'medium', prep: 12, cook: 14, cal: 440, p: 38, c: 3, fib: 1, f: 31, prem: false,
      tags: ['papillote', 'aspargos', 'vapor', 'saudável'],
      tip: 'O cozimento em envelope de papel manteiga retém 100% da umidade e dos aromas.',
      ings: [['Filés de salmão', 400, 'g', 'proteínas'], ['Aspargos verdes cortados', 120, 'g', 'vegetais'], ['Manteiga com limão e dill', 30, 'g', 'despensa'], ['Papel manteiga para embrulhar', 2, 'folhas', 'despensa']],
      steps: [['Montar o papillote', 'Coloque os aspargos e o salmão sobre o papel manteiga.', 120], ['Manteiga de ervas', 'Disponha uma noz de manteiga sobre cada filé.', 60], ['Vedar e assar', 'Feche bem as bordas e asse a 200°C por 14 minutos.', 840]]
    },
    {
      title: 'Salmão Grelhado com Crosta de Queijo Parmesão e Raspas de Laranja',
      sub: 'salmao', diff: 'easy', prep: 8, cook: 10, cal: 480, p: 41, c: 2, fib: 0, f: 34, prem: false,
      tags: ['salmão', 'parmesão', 'laranja', 'crosta'],
      tip: 'A raspa de casca de laranja bahia traz uma nota floral exótica que eleva o peixe.',
      ings: [['Filés de salmão', 400, 'g', 'proteínas'], ['Parmesão ralado fino', 50, 'g', 'laticínios'], ['Raspas de laranja fresca', 1, 'unidade', 'temperos'], ['Azeite', 20, 'ml', 'despensa']],
      steps: [['Misturar crosta', 'Junte o parmesão com as raspas de laranja.', 60], ['Empanar topo', 'Pressione a mistura na face superior do filé.', 60], ['Grelhar e dourar', 'Grelhe a base e doure o topo sob a resistência do forno.', 480]]
    },
    {
      title: 'Filé de Salmão ao Molho Cremoso de Curry Amarelo com Leite de Coco',
      sub: 'salmao', diff: 'medium', prep: 10, cook: 14, cal: 470, p: 38, c: 4, fib: 1, f: 34, prem: true,
      tags: ['salmão', 'curry', 'leite_de_coco', 'tailandês'],
      tip: 'Cozinhe os filés delicadamente no molho de coco perfumado sem deixar ferver vigorosamente.',
      ings: [['Filés de salmão', 400, 'g', 'proteínas'], ['Leite de coco cremoso', 200, 'ml', 'despensa'], ['Pasta de curry amarelo', 1, 'colher de sopa', 'temperos'], ['Folhas de coentro fresco', 2, 'ramos', 'temperos']],
      steps: [['Preparar molho', 'Ferva o leite de coco com a pasta de curry por 3 minutos.', 180], ['Pochê de salmão', 'Deslize os filés de salmão no molho e abafe em fogo brando.', 480], ['Servir aromático', 'Finalize com folhas frescas de coentro.', null]]
    },
    {
      title: 'Hambúrguer de Salmão Fresco na Ponta da Faca com Maionese de Abacate',
      sub: 'salmao', diff: 'medium', prep: 15, cook: 8, cal: 450, p: 36, c: 4, fib: 3, f: 33, prem: true,
      tags: ['burger_salmão', 'abacate', 'fresco', 'gourmet'],
      tip: 'Não use processador para não transformar o peixe em pasta; pique manualmente para textura perfeita.',
      ings: [['Salmão fresco picado na ponta da faca', 400, 'g', 'proteínas'], ['Ciboulette e raspas de limão', 1, 'colher de sopa', 'temperos'], ['Gema caipira para dar liga', 1, 'unidade', 'proteínas'], ['Maionese de abacate fresca com limão', 80, 'g', 'vegetais']],
      steps: [['Modelar burgers', 'Misture o salmão picado com a gema, ciboulette e molde 2 hambúrgueres.', 240], ['Grelhar na frigideira', 'Doure com azeite por 3 minutos de cada lado.', 360], ['Servir', 'Apresente coberto com a maionese aveludada de abacate.', null]]
    },

    // 16-30: Camarão (15)
    {
      title: 'Camarão Rosa na Manteiga de Garrafa com Alho Crocante e Coentro',
      sub: 'camarao', diff: 'easy', prep: 10, cook: 6, cal: 380, p: 36, c: 2, fib: 0, f: 26, prem: false,
      tags: ['camarão', 'manteiga_de_garrafa', 'alho', 'nordestino', '15_minutos'],
      tip: 'Camarão cozinha muito rápido; quando mudar da cor cinza para rosa brilhante (cerca de 2 minutos por lado), desligue.',
      ings: [['Camarões rosa médios limpos sem casca', 500, 'g', 'proteínas'], ['Manteiga de garrafa pura', 40, 'ml', 'despensa'], ['Dentes de alho em lâminas crocantes', 4, 'unidades', 'vegetais'], ['Coentro fresco picadinho', 2, 'colheres de sopa', 'temperos'], ['Flor de sal e limão', 1, 'colher de sopa', 'temperos']],
      steps: [['Dourar o alho', 'Aqueça a manteiga e doure o alho até ficar crocante, retirando em seguida.', 120], ['Saltear camarões', 'Coloque os camarões em fogo alto por 2 minutos de cada lado.', 240], ['Finalizar', 'Junte o alho crocante, o coentro fresco e suco de limão.', 60]]
    },
    {
      title: 'Bobó Cetogênico de Camarão com Creme de Couve-Flor e Leite de Coco',
      sub: 'camarao', diff: 'medium', prep: 15, cook: 20, cal: 420, p: 34, c: 6, fib: 3, f: 29, prem: true,
      tags: ['bobó', 'camarão', 'baiano', 'couve-flor', 'dendê'],
      tip: 'O purê de couve-flor substitui a mandioca tradicional preservando a mesma textura sedosa do bobó clássico.',
      ings: [['Camarões limpos', 500, 'g', 'proteínas'], ['Purê de couve-flor aveludado', 300, 'g', 'vegetais'], ['Leite de coco integral espesso', 200, 'ml', 'despensa'], ['Azeite de dendê', 15, 'ml', 'despensa'], ['Pimentões e cebola picados', 80, 'g', 'vegetais'], ['Coentro fresco', 3, 'colheres de sopa', 'temperos']],
      steps: [['Fazer o creme', 'Bata a couve-flor cozida no leite de coco com um fio de dendê.', 180], ['Refogar camarões', 'Doure os camarões com os pimentões e cebola.', 240], ['Unir e cozinhar', 'Despeje o creme sobre os camarões e cozinhe por 5 minutos até borbulhar.', 300]]
    },
    {
      title: 'Camarões Cremosos ao Catupiry Artesanal Gratinados',
      sub: 'camarao', diff: 'easy', prep: 12, cook: 15, cal: 490, p: 38, c: 3, fib: 0, f: 36, prem: false,
      tags: ['camarão', 'catupiry', 'gratinado', 'clássico'],
      tip: 'Gratine em forno alto com queijo parmesão ralado na hora para criar crosta dourada irresistível.',
      ings: [['Camarões médios limpos', 500, 'g', 'proteínas'], ['Requeijão cremoso autêntico (catupiry)', 150, 'g', 'laticínios'], ['Creme de leite', 50, 'ml', 'laticínios'], ['Queijo parmesão ralado', 50, 'g', 'laticínios'], ['Manteiga com alho', 25, 'g', 'despensa']],
      steps: [['Saltear camarões', 'Doure os camarões na manteiga de alho por 3 minutos.', 180], ['Misturar catupiry', 'Adicione o requeijão cremoso e creme de leite formando molho denso.', 120], ['Gratinar', 'Transfira para refratário, polvilhe parmesão e asse a 220°C até borbulhar.', 600]]
    },
    {
      title: 'Camarão ao Curry Vermelho Tailandês com Leite de Coco e Manjericão',
      sub: 'camarao', diff: 'medium', prep: 10, cook: 12, cal: 440, p: 35, c: 4, fib: 1, f: 31, prem: true,
      tags: ['camarão', 'curry_vermelho', 'tailandês', 'manjericão'],
      tip: 'O manjericão adicionado nos últimos segundos mantém o perfume aromático da culinária asiática.',
      ings: [['Camarões rosa limpos', 500, 'g', 'proteínas'], ['Leite de coco cremoso', 250, 'ml', 'despensa'], ['Pasta de curry vermelho', 1, 'colher de sopa', 'temperos'], ['Folhas de manjericão fresco', 15, 'folhas', 'temperos'], ['Óleo de coco', 15, 'ml', 'despensa']],
      steps: [['Fritar curry', 'Doure a pasta de curry no óleo de coco quente.', 90], ['Adicionar leite de coco', 'Despeje o leite de coco e deixe ferver suavemente.', 240], ['Cozinhar camarões', 'Mergulhe os camarões por 3 minutos e finalize com o manjericão.', 180]]
    },
    {
      title: 'Camarões Salteados no Alho e Óleo com Pimenta Dedo-de-Moça',
      sub: 'camarao', diff: 'easy', prep: 8, cook: 6, cal: 360, p: 34, c: 2, fib: 0, f: 25, prem: false,
      tags: ['camarão', 'alho_e_óleo', 'dedo-de-moça', 'bar'],
      tip: 'Mantenha a cauda do camarão para um visual refinado e facilidade para degustar como petisco.',
      ings: [['Camarões com rabo limpos', 500, 'g', 'proteínas'], ['Azeite de oliva extravirgem', 40, 'ml', 'despensa'], ['Alho fatiado fininho', 4, 'dentes', 'vegetais'], ['Pimenta dedo-de-moça sem sementes fatiada', 1, 'unidade', 'vegetais'], ['Salsinha fresca picada', 2, 'colheres de sopa', 'temperos']],
      steps: [['Aqueça o azeite', 'Frite o alho e a pimenta no azeite em fogo médio.', 120], ['Juntar camarões', 'Adicione os camarões em fogo bem alto por 3 minutos mexendo sempre.', 180], ['Finalizar', 'Polvilhe salsinha e flor de sal.', null]]
    },
    {
      title: 'Moqueca Cetogênica de Camarão com Azeite de Dendê e Coentro',
      sub: 'camarao', diff: 'medium', prep: 15, cook: 18, cal: 430, p: 36, c: 5, fib: 2, f: 30, prem: false,
      tags: ['moqueca', 'camarão', 'dendê', 'brasileiro'],
      tip: 'Cozinhe em panela de barro tradicional para preservar o calor constante e o sabor ancestral.',
      ings: [['Camarões limpos', 500, 'g', 'proteínas'], ['Leite de coco puro', 200, 'ml', 'despensa'], ['Azeite de dendê', 20, 'ml', 'despensa'], ['Pimentões coloridos e tomates em rodelas', 150, 'g', 'vegetais'], ['Coentro e cebolinha frescos', 4, 'colheres de sopa', 'temperos']],
      steps: [['Camadas de vegetais', 'Monte camadas de pimentões e tomates na panela.', 180], ['Acomodar camarões', 'Distribua os camarões sobre os vegetais.', 60], ['Leite de coco e dendê', 'Despeje o leite de coco e o dendê e cozinhe por 12 minutos sob tampa.', 720]]
    },
    {
      title: 'Espetos de Camarão Grelhados com Manteiga de Tomilho e Limão',
      sub: 'camarao', diff: 'easy', prep: 10, cook: 6, cal: 350, p: 35, c: 1, fib: 0, f: 23, prem: false,
      tags: ['espetinho', 'camarão', 'churrasco', 'tomilho'],
      tip: 'Espete 4 a 5 camarões por palito paralelamente para que não fiquem girando na hora de virar.',
      ings: [['Camarões rosa grandes', 500, 'g', 'proteínas'], ['Manteiga clarificada derretida', 40, 'g', 'laticínios'], ['Tomilho fresco picado', 1, 'colher de sopa', 'temperos'], ['Gomos de limão para grelhar', 2, 'unidades', 'vegetais']],
      steps: [['Montar espetos', 'Espete os camarões limpos e tempere com sal.', 180], ['Grelhar na brasa', 'Grelhe por 2 minutos de cada lado.', 240], ['Pincelar manteiga', 'Pincele a manteiga aromática nos camarões fumegantes.', 60]]
    },
    {
      title: 'Camarão ao Molho Alfredo Cetogênico com Alho Assado',
      sub: 'camarao', diff: 'easy', prep: 10, cook: 10, cal: 480, p: 38, c: 3, fib: 0, f: 36, prem: false,
      tags: ['camarão', 'alfredo', 'parmesão', 'cremoso'],
      tip: 'Sirva com espaguete de abobrinha ou palmito pupunha para um prato italiano nobre sem carboidratos.',
      ings: [['Camarões limpos', 500, 'g', 'proteínas'], ['Creme de leite fresco', 180, 'ml', 'laticínios'], ['Queijo parmesão ralado na hora', 60, 'g', 'laticínios'], ['Manteiga com alho assado', 30, 'g', 'despensa']],
      steps: [['Dourar camarões', 'Salteie os camarões na manteiga de alho por 3 minutos e reserve.', 180], ['Fazer o molho alfredo', 'Na mesma frigideira, junte o creme de leite e o queijo parmesão até encorpar.', 180], ['Reunir camarões', 'Devolva os camarões e envolva no molho quente.', 60]]
    },
    {
      title: 'Camarão ao Pesto de Nozes e Queijo Minas Curado',
      sub: 'camarao', diff: 'medium', prep: 10, cook: 8, cal: 450, p: 36, c: 3, fib: 1, f: 33, prem: true,
      tags: ['camarão', 'pesto', 'nozes', 'queijo_curado'],
      tip: 'O queijo minas curado confere um toque brasileiro artesanal ao tradicional pesto de manjericão.',
      ings: [['Camarões rosa', 500, 'g', 'proteínas'], ['Pesto caseiro de manjericão com nozes', 60, 'g', 'despensa'], ['Azeite extravirgem', 20, 'ml', 'despensa']],
      steps: [['Grelhar camarões', 'Doure os camarões no azeite por 3 minutos.', 180], ['Adicionar pesto fora do fogo', 'Desligue a panela e misture o pesto fresco para não perder a cor.', 60], ['Servir aromático', 'Decore com folhas frescas de manjericão.', null]]
    },
    {
      title: 'Camarão na Moranga Fake (Recheado em Abobrinha Redonda)',
      sub: 'camarao', diff: 'medium', prep: 20, cook: 25, cal: 410, p: 34, c: 6, fib: 3, f: 28, prem: true,
      tags: ['camarão_na_moranga', 'abobrinha', 'brasileiro', 'festa'],
      tip: 'A abobrinha redonda italiana funciona como a moranga tradicional, mas com uma fração minúscula dos carboidratos.',
      ings: [['Camarões médios limpos', 400, 'g', 'proteínas'], ['Abobrinhas redondas cozidas e cavadas', 2, 'unidades', 'vegetais'], ['Requeijão cremoso', 100, 'g', 'laticínios'], ['Creme de leite e cheiro verde', 50, 'ml', 'laticínios']],
      steps: [['Cavar abobrinhas', 'Retire a polpa das abobrinhas cozidas no vapor.', 180], ['Fazer recheio', 'Refogue os camarões com a polpa, requeijão e creme.', 300], ['Gratinar', 'Recheie as abobrinhas, cubra com parmesão e gratine por 15 min.', 900]]
    },
    {
      title: 'Camarão com Crosta Crocante de Farinha de Amêndoas e Queijo',
      sub: 'camarao', diff: 'medium', prep: 15, cook: 12, cal: 460, p: 37, c: 3, fib: 1, f: 33, prem: true,
      tags: ['camarão_empanado', 'amêndoas', 'crocante', 'airfryer'],
      tip: 'Passe os camarões em clara de ovo batida antes da farinha para garantir fixação total da crosta.',
      ings: [['Camarões grandes com cauda', 500, 'g', 'proteínas'], ['Farinha de amêndoas fina', 70, 'g', 'despensa'], ['Queijo parmesão ralado', 40, 'g', 'laticínios'], ['Clara de ovo batida', 1, 'unidade', 'proteínas']],
      steps: [['Empanar', 'Passe os camarões na clara e depois na mistura de farinha e queijo.', 240], ['Airfryer ou forno', 'Asse a 200°C por 10 minutos até ficarem bem dourados.', 600], ['Servir crocante', 'Sirva com molho tártaro caseiro sem açúcar.', null]]
    },
    {
      title: 'Camarões Flambados no Conhaque com Nata Fresca e Pimenta Branca',
      sub: 'camarao', diff: 'hard', prep: 10, cook: 10, cal: 470, p: 36, c: 2, fib: 0, f: 35, prem: true,
      tags: ['camarão_flambado', 'conhaque', 'nata', 'alta_gastronomia'],
      tip: 'Incline a frigideira ligeiramente sobre a chama para incendiar o conhaque com total segurança.',
      ings: [['Camarões rosa grandes limpos', 500, 'g', 'proteínas'], ['Dose de conhaque nobre', 30, 'ml', 'despensa'], ['Nata fresca da fazenda', 150, 'g', 'laticínios'], ['Manteiga clarificada', 25, 'g', 'despensa']],
      steps: [['Saltear', 'Doure os camarões na manteiga em fogo alto.', 180], ['Flambar', 'Adicione o conhaque e flambe até extinguir a chama.', 60], ['Emulsionar nata', 'Incorpore a nata fresca e reduza por 2 minutos.', 120]]
    },
    {
      title: 'Camarão ao Vinho Branco com Aspargos e Queijo Gorgonzola',
      sub: 'camarao', diff: 'medium', prep: 10, cook: 12, cal: 460, p: 37, c: 3, fib: 1, f: 33, prem: true,
      tags: ['camarão', 'aspargos', 'gorgonzola', 'vinho_branco'],
      tip: 'A combinação de gorgonzola com frutos do mar é uma especialidade da culinária litorânea toscana.',
      ings: [['Camarões médios', 500, 'g', 'proteínas'], ['Pontas de aspargos frescos', 120, 'g', 'vegetais'], ['Queijo gorgonzola', 60, 'g', 'laticínios'], ['Vinho branco seco', 50, 'ml', 'despensa'], ['Creme de leite', 80, 'ml', 'laticínios']],
      steps: [['Saltear aspargos e camarão', 'Grelhe ambos na manteiga por 3 minutos.', 180], ['Deglaçar com vinho', 'Junte o vinho branco e reduza à metade.', 120], ['Fundir queijo', 'Acrescente o queijo gorgonzola e creme até derreter.', 120]]
    },
    {
      title: 'Ceviche Cetogênico de Camarão com Abacate e Pimenta Jalapeño',
      sub: 'camarao', diff: 'easy', prep: 15, cook: 0, cal: 320, p: 32, c: 4, fib: 3, f: 20, prem: false,
      tags: ['ceviche', 'camarão', 'abacate', 'sem_fogão', 'peruano'],
      tip: 'Cozinhe os camarões por apenas 1 minuto em água fervente antes de resfriar em banho de gelo para o ceviche.',
      ings: [['Camarões cozidos no vapor resfriados', 450, 'g', 'proteínas'], ['Suco de limão taiti e siciliano', 3, 'unidades', 'temperos'], ['Abacate em cubos', 100, 'g', 'vegetais'], ['Cebola roxa bem fatiada em água gelada', 40, 'g', 'vegetais'], ['Coentro fresco', 2, 'colheres de sopa', 'temperos']],
      steps: [['Marinar no limão', 'Misture os camarões com o suco de limão e cebola por 5 minutos.', 300], ['Juntar abacate', 'Incorpore delicadamente os cubos de abacate e coentro.', 60], ['Servir gelado', 'Apresente em taças de vidro elegantes.', null]]
    },
    {
      title: 'Camarões Grelhados com Crosta de Ervas Finas e Alho Negro',
      sub: 'camarao', diff: 'medium', prep: 10, cook: 8, cal: 390, p: 36, c: 2, fib: 0, f: 26, prem: true,
      tags: ['camarão', 'alho_negro', 'ervas', 'gourmet'],
      tip: 'A pasta de alho negro adiciona doçura e notas balsâmicas sutis sem elevar carboidratos.',
      ings: [['Camarões rosa grandes', 500, 'g', 'proteínas'], ['Pasta de alho negro', 20, 'g', 'vegetais'], ['Manteiga clarificada', 35, 'g', 'despensa'], ['Tomilho e salsa picadinhos', 2, 'colheres de sopa', 'temperos']],
      steps: [['Temperar camarões', 'Envolva os camarões na manteiga batida com o alho negro.', 120], ['Grelhar na frigideira', 'Doure em calor forte por 2 minutos de cada lado.', 240], ['Servir', 'Salpique as ervas frescas na apresentação.', null]]
    },

    // 31-40: Atum (10)
    {
      title: 'Tataki de Atum Selado com Crosta de Gergelim Bicolor',
      sub: 'atum', diff: 'medium', prep: 10, cook: 4, cal: 390, p: 44, c: 2, fib: 1, f: 23, prem: true,
      tags: ['tataki', 'atum', 'gergelim', 'japonês', 'selado'],
      tip: 'O centro do atum deve permanecer cru e vermelho rubi; sele apenas 40 segundos por lado na chapa fumegante.',
      ings: [['Lombo de atum fresco em bloco retangular', 400, 'g', 'proteínas'], ['Gergelim branco e preto', 50, 'g', 'despensa'], ['Óleo de gergelim torrado', 20, 'ml', 'despensa'], ['Molho shoyu sem açúcar e wasabi', 30, 'ml', 'temperos']],
      steps: [['Empanar bloco', 'Pincele óleo de gergelim e passe no gergelim cobrindo todas as faces.', 120], ['Selar relâmpago', 'Doure por 40 segundos de cada face na frigideira de ferro.', 160], ['Fatiar fino', 'Corte em fatias nobres com faca afiadíssima e sirva.', null]]
    },
    {
      title: 'Filé de Atum Fresco Grelhado com Molho Pesto de Manjericão',
      sub: 'atum', diff: 'easy', prep: 8, cook: 8, cal: 440, p: 45, c: 2, fib: 1, f: 28, prem: false,
      tags: ['atum', 'pesto', 'grelhado', 'mediterrâneo'],
      tip: 'Não cozinhe demais o atum para não deixá-lo seco; o ponto perfeito é rosado no miolo.',
      ings: [['Steaks de atum fresco', 400, 'g', 'proteínas'], ['Pesto fresco de manjericão e nozes', 60, 'g', 'despensa'], ['Azeite de oliva e flor de sal', 20, 'ml', 'despensa']],
      steps: [['Grelhar steak', 'Grelhe por 3 minutos de cada lado em fogo médio-alto.', 360], ['Descansar', 'Retire da frigideira e deixe repousar 1 minuto.', 60], ['Cobrir de pesto', 'Espalhe o pesto fresco sobre o peixe quente.', null]]
    },
    {
      title: 'Tartar de Atum Fresco com Abacate, Gengibre e Óleo de Gergelim',
      sub: 'atum', diff: 'medium', prep: 15, cook: 0, cal: 410, p: 40, c: 4, fib: 3, f: 26, prem: true,
      tags: ['tartar', 'atum', 'abacate', 'gourmet', 'sem_fogão'],
      tip: 'Use óleo de gergelim tostado com parcimônia para não mascarar o sabor delicado do atum.',
      ings: [['Atum fresco cortado na faca em cubinhos', 350, 'g', 'proteínas'], ['Abacate em cubos pequenos', 100, 'g', 'vegetais'], ['Gengibre fresco ralado e cebolinha', 1, 'colher de sopa', 'temperos'], ['Azeite e flor de sal', 20, 'ml', 'despensa']],
      steps: [['Picar nobre', 'Pique o atum e o abacate em cubos de tamanho idêntico.', 300], ['Temperar', 'Misture com o azeite, gengibre, cebolinha e flor de sal.', 120], ['Aro e prato', 'Modele no prato usando um aro metálico.', 60]]
    },
    {
      title: 'Steak de Atum na Manteiga de Alcaparras e Limão Siciliano',
      sub: 'atum', diff: 'easy', prep: 8, cook: 8, cal: 430, p: 44, c: 2, fib: 0, f: 27, prem: false,
      tags: ['atum', 'manteiga', 'alcaparras', 'clássico'],
      tip: 'Regue a manteiga fervilhante com uma colher sobre a superfície do steak enquanto doura.',
      ings: [['Steak de atum fresco', 400, 'g', 'proteínas'], ['Manteiga clarificada', 35, 'g', 'despensa'], ['Alcaparras drenadas', 2, 'colheres de sopa', 'temperos'], ['Suco de limão siciliano fresco', 1, 'colher de sopa', 'temperos']],
      steps: [['Dourar steak', 'Frite no azeite por 3 minutos de cada lado.', 360], ['Manteiga de alcaparras', 'Adicione a manteiga, alcaparras e limão na mesma panela.', 120], ['Regar carne', 'Banhe o atum com o molho borbulhante e sirva.', null]]
    },
    {
      title: 'Salada Niçoise Nobre com Atum Grelhado e Ovos Caipiras',
      sub: 'atum', diff: 'medium', prep: 15, cook: 8, cal: 450, p: 42, c: 4, fib: 2, f: 30, prem: true,
      tags: ['niçoise', 'salada_refeição', 'atum', 'francês'],
      tip: 'Apresente os ingredientes separados harmoniosamente no prato em vez de misturar tudo.',
      ings: [['Steak de atum grelhado fatiado', 300, 'g', 'proteínas'], ['Ovos caipiras cozidos com gema cremosa', 2, 'unidades', 'proteínas'], ['Azeitonas pretas de Nice', 40, 'g', 'vegetais'], ['Mix de folhas amargas e vagens cozidas al dente', 150, 'g', 'vegetais'], ['Vinagrete clássico de azeite e mostarda Dijon', 40, 'ml', 'despensa']],
      steps: [['Grelhar atum', 'Sele o atum e fatie em tiras.', 240], ['Cozinhar ovos', 'Cozinhe os ovos por 6 minutos para gema mole.', 360], ['Compor prato', 'Disponha as folhas, vagens, ovos, atum e azeitonas regando vinagrete.', null]]
    },
    {
      title: 'Atum Selado com Crosta de Pimenta Preta e Molho de Wasabi Suave',
      sub: 'atum', diff: 'medium', prep: 10, cook: 4, cal: 400, p: 45, c: 2, fib: 0, f: 24, prem: true,
      tags: ['atum', 'pimenta_preta', 'wasabi', 'picante'],
      tip: 'Misture um toque de creme de leite ao wasabi para criar um creme sedoso que atenua a picância.',
      ings: [['Lombo de atum fresco', 400, 'g', 'proteínas'], ['Pimenta-do-reino preta moída na hora grossa', 2, 'colheres de sopa', 'temperos'], ['Creme de wasabi com nata', 50, 'g', 'laticínios'], ['Manteiga clarificada', 20, 'g', 'despensa']],
      steps: [['Crosta de pimenta', 'Role o atum na pimenta preta pressionando bem.', 120], ['Selar na frigideira', 'Doure rapidamente por 45 segundos de cada lado.', 180], ['Servir fatiado', 'Corte e sirva com o creme aveludado de wasabi.', null]]
    },
    {
      title: 'Atum ao Molho de Tomates Confitados com Azeitonas e Manjericão',
      sub: 'atum', diff: 'easy', prep: 10, cook: 10, cal: 430, p: 43, c: 5, fib: 2, f: 27, prem: false,
      tags: ['atum', 'tomate_confit', 'azeitona', 'mediterrâneo'],
      tip: 'Os tomatinhos caramelizados no azeite criam uma caldinha adocicada deliciosa.',
      ings: [['Steaks de atum fresco', 400, 'g', 'proteínas'], ['Tomates-cereja confitados no azeite', 100, 'g', 'vegetais'], ['Azeitonas pretas picadas', 40, 'g', 'vegetais'], ['Folhas frescas de manjericão', 10, 'folhas', 'temperos']],
      steps: [['Grelhar atum', 'Doure os filés até ponto rosado.', 360], ['Aquecer molho', 'Junte os tomates confit e azeitonas na panela quente.', 120], ['Cobrir o filé', 'Despeje o molho aromático e manjericão sobre o atum.', null]]
    },
    {
      title: 'Hambúrguer de Atum Nobre com Maionese de Wasabi e Rúcula',
      sub: 'atum', diff: 'easy', prep: 12, cook: 6, cal: 420, p: 41, c: 2, fib: 1, f: 27, prem: false,
      tags: ['burger_atum', 'wasabi', 'rúcula', 'sem_pão'],
      tip: 'Sirva como burger no prato com lâminas de abacate e folhas frescas.',
      ings: [['Atum moído ou picado fino', 400, 'g', 'proteínas'], ['Maionese com toque de wasabi', 50, 'g', 'laticínios'], ['Folhas de rúcula fresca', 40, 'g', 'vegetais'], ['Gengibre ralado e cebolinha', 1, 'colher de sopa', 'temperos']],
      steps: [['Modelar burger', 'Misture o atum com o gengibre e molde 2 hambúrgueres.', 180], ['Grelhar', 'Grelhe por 2 minutos de cada lado.', 240], ['Montar', 'Acomode sobre a rúcula e coroe com a maionese de wasabi.', null]]
    },
    {
      title: 'Atum ao Forno com Crosta de Queijo Parmesão e Ervas Frescas',
      sub: 'atum', diff: 'easy', prep: 8, cook: 10, cal: 460, p: 46, c: 2, fib: 0, f: 30, prem: false,
      tags: ['atum', 'parmesão', 'ervas', 'forno'],
      tip: 'Gratine rapidamente em forno alto para que a crosta doure sem cozinhar o atum em excesso.',
      ings: [['Lombo de atum', 400, 'g', 'proteínas'], ['Parmesão ralado fino', 50, 'g', 'laticínios'], ['Ervas frescas picadas', 2, 'colheres de sopa', 'temperos'], ['Manteiga derretida', 20, 'g', 'laticínios']],
      steps: [['Empanar topo', 'Pressione a mistura de parmesão e ervas no topo dos lombos.', 120], ['Forno alto', 'Asse a 220°C sob grill por 8 a 10 minutos.', 540], ['Servir', 'Apresente imediatamente com fio de azeite.', null]]
    },
    {
      title: 'Poke Bowl de Atum Fresco com Pepino em Fios e Maionese Picante',
      sub: 'atum', diff: 'easy', prep: 12, cook: 0, cal: 440, p: 38, c: 4, fib: 2, f: 30, prem: false,
      tags: ['poke', 'atum', 'spicy_mayo', 'havaiano'],
      tip: 'A spicy mayo é feita facilmente misturando maionese de azeite com sriracha sem açúcar.',
      ings: [['Atum fresco cortado em cubos', 350, 'g', 'proteínas'], ['Pepino japonês ralado em espaguete', 120, 'g', 'vegetais'], ['Maionese temperada com pimenta sriracha', 50, 'g', 'laticínios'], ['Gergelim torrado e cebolinha', 1, 'colher de sopa', 'temperos']],
      steps: [['Base vegetal', 'Coloque os fios de pepino no bowl.', 60], ['Dispor atum', 'Distribua os cubos de atum por cima.', 60], ['Cobrir de molho', 'Regue a maionese picante e polvilhe gergelim.', null]]
    },

    // 41-50: Tilápia e Peixes Brancos (10)
    {
      title: 'Filé de Tilápia com Manteiga de Amêndoas Laminadas Tostadas',
      sub: 'tilapia_e_peixes_brancos', diff: 'easy', prep: 8, cook: 8, cal: 410, p: 38, c: 3, fib: 1, f: 27, prem: false,
      tags: ['tilápia', 'amêndoas', 'manteiga', 'delicado', 'rápido'],
      tip: 'Toste as amêndoas na manteiga até dourarem antes de regar sobre os filés grelhados.',
      ings: [['Filés de tilápia frescos', 450, 'g', 'proteínas'], ['Amêndoas laminadas', 40, 'g', 'despensa'], ['Manteiga clarificada', 40, 'g', 'laticínios'], ['Suco de limão siciliano', 1, 'colher de sopa', 'temperos'], ['Salsinha crespa picada', 2, 'colheres de sopa', 'temperos']],
      steps: [['Grelhar tilápia', 'Doure os filés delicadamente com azeite por 3 minutos de cada lado.', 360], ['Tostar amêndoas', 'Na mesma frigideira derreta a manteiga com as amêndoas até dourar.', 180], ['Servir', 'Despeje as amêndoas crocantes e salsinha sobre o peixe.', null]]
    },
    {
      title: 'Moqueca Nobre de Robalo com Leite de Coco e Azeite de Dendê',
      sub: 'tilapia_e_peixes_brancos', diff: 'medium', prep: 15, cook: 20, cal: 450, p: 40, c: 5, fib: 2, f: 31, prem: true,
      tags: ['moqueca', 'robalo', 'dendê', 'brasileiro', 'alta_gastronomia'],
      tip: 'O robalo é um peixe branco nobre com carne firme que não se desfaz na panela.',
      ings: [['Postas de robalo fresco', 500, 'g', 'proteínas'], ['Leite de coco puro espesso', 200, 'ml', 'despensa'], ['Azeite de dendê', 20, 'ml', 'despensa'], ['Pimentões e cebola em rodelas', 120, 'g', 'vegetais'], ['Coentro e limão', 3, 'colheres de sopa', 'temperos']],
      steps: [['Marinar robalo', 'Tempere o robalo com limão, sal e alho.', 300], ['Camadas aromáticas', 'Monte as postas entre camadas de tomate, pimentão e cebola.', 180], ['Cozinhar moqueca', 'Adicione leite de coco e dendê e cozinhe em panela tampada por 15 min.', 900]]
    },
    {
      title: 'Pescada Amarela Grelhada com Molho de Ervas Frescas e Alcaparras',
      sub: 'tilapia_e_peixes_brancos', diff: 'easy', prep: 8, cook: 8, cal: 390, p: 39, c: 2, fib: 0, f: 25, prem: false,
      tags: ['pescada_amarela', 'ervas', 'alcaparras', 'leve'],
      tip: 'Vire o filé de pescada com espátula larga para manter a integridade da posta macia.',
      ings: [['Filés de pescada amarela', 450, 'g', 'proteínas'], ['Alcaparras drenadas', 2, 'colheres de sopa', 'temperos'], ['Manteiga com tomilho e salsa', 35, 'g', 'despensa'], ['Suco de limão', 1, 'colher de sopa', 'temperos']],
      steps: [['Grelhar filés', 'Grelhe os filés temperados na frigideira antiaderente.', 360], ['Molho', 'Derreta a manteiga com as ervas, alcaparras e limão.', 120], ['Regar', 'Cubra o peixe com o molho perfumado.', null]]
    },
    {
      title: 'Filé de Tilápia com Crosta de Queijo Parmesão e Limão Siciliano',
      sub: 'tilapia_e_peixes_brancos', diff: 'easy', prep: 8, cook: 12, cal: 420, p: 42, c: 2, fib: 0, f: 28, prem: false,
      tags: ['tilápia', 'crosta_parmesão', 'limão', 'forno'],
      tip: 'Asse sobre papel manteiga untado para o queijo formar uma crosta crocante sem grudar na assadeira.',
      ings: [['Filés de tilápia', 450, 'g', 'proteínas'], ['Queijo parmesão ralado grosso', 60, 'g', 'laticínios'], ['Raspas de limão siciliano', 1, 'colher de café', 'temperos'], ['Azeite de oliva', 20, 'ml', 'despensa']],
      steps: [['Empanar', 'Pressione o parmesão e as raspas de limão sobre o peixe.', 120], ['Assar', 'Asse em forno quente a 200°C até o queijo formar crosta dourada.', 720], ['Servir', 'Apresente estaladiço e perfumado.', null]]
    },
    {
      title: 'Linguado ao Molho Meunière Cetogênico com Manteiga e Salsa',
      sub: 'tilapia_e_peixes_brancos', diff: 'medium', prep: 10, cook: 8, cal: 440, p: 38, c: 2, fib: 0, f: 32, prem: true,
      tags: ['linguado', 'meunière', 'francês', 'clássico'],
      tip: 'A autêntica versão cetogênica dispensa farinha de trigo; basta dourar o peixe na manteiga de primeira.',
      ings: [['Filés de linguado frescos', 400, 'g', 'proteínas'], ['Manteiga sem sal pura', 50, 'g', 'laticínios'], ['Suco de meio limão siciliano', 1, 'colher de sopa', 'temperos'], ['Salsinha lisa fresca picada abundante', 3, 'colheres de sopa', 'temperos']],
      steps: [['Dourar linguado', 'Doure os filés delicadamente na manteiga em fogo brando.', 360], ['Manteiga avellanada', 'Deixe a manteiga espumar até tom avelã e adicione o limão.', 120], ['Finalizar com salsa', 'Despeje a salsa picada na manteiga espumante e regue o peixe.', null]]
    },
    {
      title: 'Namorado Grelhado com Alho Confitado e Ervas Mediterrâneas',
      sub: 'tilapia_e_peixes_brancos', diff: 'medium', prep: 10, cook: 12, cal: 410, p: 40, c: 2, fib: 0, f: 27, prem: true,
      tags: ['namorado', 'peixe_nobre', 'alho_confit', 'grelhado'],
      tip: 'O peixe namorado possui sabor delicado e textura compacta ideal para grelhar.',
      ings: [['Postas de peixe namorado limpas', 450, 'g', 'proteínas'], ['Dentes de alho confitados', 8, 'unidades', 'vegetais'], ['Ramos de alecrim e tomilho frescos', 3, 'ramos', 'temperos'], ['Azeite de oliva extravirgem', 30, 'ml', 'despensa']],
      steps: [['Grelhar postas', 'Doure as postas no azeite com ramos de alecrim.', 480], ['Adicionar alho confit', 'Acomode os dentes de alho macios ao lado do peixe na frigideira.', 120], ['Servir', 'Apresente com os sucos aromáticos da frigideira.', null]]
    },
    {
      title: 'Filé de Tilápia com Creme Aveludado de Espinafre e Noz-Moscada',
      sub: 'tilapia_e_peixes_brancos', diff: 'easy', prep: 10, cook: 12, cal: 420, p: 40, c: 3, fib: 1, f: 28, prem: false,
      tags: ['tilápia', 'espinafre', 'cremoso', 'conforto'],
      tip: 'Cozinhe os filés cobertos pelo creme de espinafre para que absorvam todo o sabor aromático.',
      ings: [['Filés de tilápia', 450, 'g', 'proteínas'], ['Espinafre picado refogado', 120, 'g', 'vegetais'], ['Creme de leite fresco', 150, 'ml', 'laticínios'], ['Noz-moscada ralada e queijo parmesão', 30, 'g', 'laticínios']],
      steps: [['Selar peixe', 'Grelhe os filés rapidamente por 2 minutos de cada lado.', 240], ['Creme de espinafre', 'Adicione o creme de leite, espinafre e noz-moscada na frigideira.', 180], ['Servir', 'Polvilhe parmesão e sirva fumegante.', null]]
    },
    {
      title: 'Papillote de Peixe Branco com Legumes Julienne e Manteiga de Limão',
      sub: 'tilapia_e_peixes_brancos', diff: 'easy', prep: 12, cook: 15, cal: 360, p: 36, c: 4, fib: 2, f: 22, prem: false,
      tags: ['papillote', 'peixe_branco', 'julienne', 'saudável'],
      tip: 'Corte a abobrinha e cenoura em tiras bem finas (julienne) para cozinharem no mesmo tempo do peixe.',
      ings: [['Filés de peixe branco fresco', 400, 'g', 'proteínas'], ['Abobrinha e alho-poró em tirinhas finas', 120, 'g', 'vegetais'], ['Manteiga com limão e dill', 30, 'g', 'despensa'], ['Papel manteiga', 2, 'folhas', 'despensa']],
      steps: [['Montar envelopes', 'Coloque os vegetais e o peixe temperado sobre o papel.', 180], ['Manteiga nobre', 'Acomode a manteiga de limão sobre cada filé.', 60], ['Assar', 'Feche bem as bordas e asse a 190°C por 15 minutos.', 900]]
    },
    {
      title: 'Filé de Tilápia com Crosta de Castanhas Brasileiras e Ervas',
      sub: 'tilapia_e_peixes_brancos', diff: 'medium', prep: 10, cook: 12, cal: 440, p: 39, c: 3, fib: 1, f: 30, prem: false,
      tags: ['tilápia', 'castanhas', 'crosta', 'brasileiro'],
      tip: 'As castanhas do pará trituradas conferem gorduras nobres e textura inigualável ao peixe.',
      ings: [['Filés de tilápia', 450, 'g', 'proteínas'], ['Castanhas-do-pará raladas grosso', 45, 'g', 'despensa'], ['Manteiga derretida', 25, 'g', 'laticínios'], ['Salsa e cebolinha picadinhas', 2, 'colheres de sopa', 'temperos']],
      steps: [['Misturar crosta', 'Junte as castanhas com manteiga, ervas e sal.', 90], ['Cobrir filés', 'Espalhe sobre a tilápia em assadeira untada.', 90], ['Assar crocante', 'Leve ao forno a 200°C por 12 minutos.', 720]]
    },
    {
      title: 'Peixe Branco ao Molho de Coco com Pimentões e Gengibre',
      sub: 'tilapia_e_peixes_brancos', diff: 'easy', prep: 10, cook: 15, cal: 420, p: 38, c: 5, fib: 1, f: 28, prem: false,
      tags: ['peixe_branco', 'coco', 'gengibre', 'aromático'],
      tip: 'Um ensopado perfumado que fica pronto em apenas 15 minutos.',
      ings: [['Filés de peixe branco em pedaços', 450, 'g', 'proteínas'], ['Leite de coco', 200, 'ml', 'despensa'], ['Pimentão amarelo e gengibre fatiados', 80, 'g', 'vegetais'], ['Coentro fresco picado', 2, 'colheres de sopa', 'temperos']],
      steps: [['Refogar base', 'Salteie o gengibre e pimentão no óleo de coco.', 180], ['Leite de coco', 'Adicione o leite de coco e deixe ferver.', 180], ['Cozinhar peixe', 'Deslize os pedaços de peixe e cozinhe por 6 minutos.', 360]]
    },

    // 51-60: Bacalhau e Outros Frutos do Mar (10)
    {
      title: 'Bacalhau Nobre Confitado no Azeite com Alho, Alecrim e Azeitonas Azapa',
      sub: 'bacalhau_e_outros', diff: 'medium', prep: 15, cook: 30, cal: 560, p: 44, c: 3, fib: 1, f: 42, prem: true,
      tags: ['bacalhau', 'confit', 'azeite', 'português', 'luxo'],
      tip: 'Use lombo de bacalhau Gadus morhua dessalgado em água gelada para lascas perfeitas.',
      ings: [['Lombos altos de bacalhau dessalgado', 500, 'g', 'proteínas'], ['Azeite de oliva extravirgem português', 250, 'ml', 'despensa'], ['Dentes de alho inteiros com casca', 8, 'unidades', 'vegetais'], ['Azeitonas pretas chilenas ou azapa', 60, 'g', 'vegetais'], ['Ramos de alecrim fresco', 3, 'ramos', 'temperos']],
      steps: [['Acomodar na assadeira', 'Disponha os lombos, alhos, alecrim e azeitonas em assadeira funda.', 180], ['Banhar em azeite', 'Regue azeite abundante até atingir metade da altura do lombo.', 60], ['Confitar no forno', 'Asse lentamente a 150°C por 30 minutos até o peixe soltar em pétalas.', 1800]]
    },
    {
      title: 'Polvo Grelhado à Lagareiro com Páprica Doce e Azeite Nobre',
      sub: 'bacalhau_e_outros', diff: 'hard', prep: 20, cook: 40, cal: 440, p: 42, c: 2, fib: 0, f: 29, prem: true,
      tags: ['polvo', 'lagareiro', 'português', 'gourmet', 'alta_gastronomia'],
      tip: 'Cozinhe o polvo na panela de pressão com uma cebola inteira por 18 minutos sem adicionar água.',
      ings: [['Tentáculos de polvo cozidos macios', 500, 'g', 'proteínas'], ['Azeite extravirgem abundante', 50, 'ml', 'despensa'], ['Dentes de alho esmagados', 6, 'unidades', 'vegetais'], ['Páprica doce espanhola e flor de sal', 1, 'colher de sopa', 'temperos']],
      steps: [['Dourar os tentáculos', 'Grelhe os tentáculos em frigideira de ferro bem quente até ficarem tostados.', 360], ['Aquecer azeite e alho', 'Doure o alho no azeite até espumar sem queimar.', 180], ['Servir à lagareiro', 'Regue o azeite de alho fumegante sobre o polvo com páprica.', null]]
    },
    {
      title: 'Bacalhau Gratinado Cetogênico com Creme de Couve-Flor e Parmesão',
      sub: 'bacalhau_e_outros', diff: 'medium', prep: 20, cook: 25, cal: 470, p: 42, c: 5, fib: 2, f: 32, prem: false,
      tags: ['bacalhau_com_natas', 'couve-flor', 'gratinado', 'conforto'],
      tip: 'Versão cetogênica do clássico Bacalhau com Natas substituindo a batata por couve-flor aveludada.',
      ings: [['Bacalhau dessalgado desfiado em lascas', 400, 'g', 'proteínas'], ['Purê cremoso de couve-flor com nata', 350, 'g', 'vegetais'], ['Cebola fatiada dourada no azeite', 80, 'g', 'vegetais'], ['Queijo parmesão ralado para gratinar', 60, 'g', 'laticínios']],
      steps: [['Refogar bacalhau', 'Refogue o bacalhau com a cebola e azeite.', 300], ['Misturar com purê', 'Incorpore o purê de couve-flor com nata ao bacalhau.', 180], ['Gratinar dourado', 'Coloque em refratário com parmesão e gratine a 210°C.', 900]]
    },
    {
      title: 'Lula Salteada na Manteiga Ghee com Alho, Salsa e Vinho Branco',
      sub: 'bacalhau_e_outros', diff: 'medium', prep: 12, cook: 5, cal: 360, p: 38, c: 3, fib: 0, f: 22, prem: false,
      tags: ['lulas', 'ghee', 'vinho_branco', '15_minutos'],
      tip: 'Cozinhe a lula em fogo altíssimo por apenas 2 a 3 minutos para que fique extremamente macia e tenra.',
      ings: [['Anéis e tentáculos de lula fresca limpa', 500, 'g', 'proteínas'], ['Manteiga ghee nobre', 35, 'g', 'despensa'], ['Vinho branco seco', 30, 'ml', 'despensa'], ['Alho picado e salsinha fresca', 2, 'colheres de sopa', 'temperos']],
      steps: [['Secar lulas', 'Seque muito bem os anéis com papel toalha.', 120], ['Saltear em calor máximo', 'Doure a lula na manteiga com alho por 2 minutos.', 120], ['Deglaçar com vinho', 'Adicione o vinho e salsinha, ferva por 1 minuto e sirva.', 60]]
    },
    {
      title: 'Frigideira de Frutos do Mar Nobres com Manteiga de Ervas e Alho',
      sub: 'bacalhau_e_outros', diff: 'hard', prep: 15, cook: 10, cal: 460, p: 46, c: 3, fib: 1, f: 29, prem: true,
      tags: ['frutos_do_mar', 'camarão', 'lula', 'polvo', 'luxo'],
      tip: 'Adicione os frutos do mar em ordem de tempo de cozimento: polvo já cozido, depois lula e por último camarão.',
      ings: [['Mix de camarões, lulas e tentáculos de polvo', 500, 'g', 'proteínas'], ['Manteiga clarificada', 50, 'g', 'laticínios'], ['Alho picado, raspas de limão e salsinha', 3, 'colheres de sopa', 'temperos'], ['Flor de sal', 1, 'colher de café', 'temperos']],
      steps: [['Aquecer frigideira de ferro', 'Aqueça a manteiga na frigideira grande.', 120], ['Saltear o mix', 'Doure os frutos do mar até caramelizarem.', 360], ['Banhar e servir', 'Finalize com as ervas frescas e suco de limão direto na mesa.', null]]
    },
    {
      title: 'Sardinhas Frescas Grelhadas na Brasa com Azeite e Flor de Sal',
      sub: 'bacalhau_e_outros', diff: 'easy', prep: 10, cook: 8, cal: 410, p: 38, c: 0, fib: 0, f: 29, prem: false,
      tags: ['sardinha', 'brasa', 'ômega_3', 'português'],
      tip: 'A sardinha é um dos alimentos mais ricos em ômega-3 e micronutrientes essenciais do planeta.',
      ings: [['Sardinhas frescas limpas e abertas', 500, 'g', 'proteínas'], ['Azeite extravirgem', 30, 'ml', 'despensa'], ['Flor de sal e pimenta moída', 1, 'colher de sopa', 'temperos'], ['Gomos de limão para servir', 2, 'unidades', 'vegetais']],
      steps: [['Salgar sardinhas', 'Pincele azeite e polvilhe flor de sal nas sardinhas.', 120], ['Grelhar brasa viva', 'Asse na grelha por 3 a 4 minutos de cada lado.', 420], ['Servir aromático', 'Coma fumegante com gotas de limão.', null]]
    },
    {
      title: 'Vieiras Seladas na Manteiga Noisette com Creme de Couve-Flor Trufado',
      sub: 'bacalhau_e_outros', diff: 'hard', prep: 15, cook: 6, cal: 420, p: 32, c: 4, fib: 1, f: 30, prem: true,
      tags: ['vieiras', 'trufas', 'alta_gastronomia', 'luxo'],
      tip: 'Seque as vieiras perfeitamente e sele por 90 segundos de cada lado sem mexer.',
      ings: [['Vieiras frescas grandes limpas', 350, 'g', 'proteínas'], ['Purê de couve-flor com azeite trufado', 200, 'g', 'vegetais'], ['Manteiga de primeira qualidade', 40, 'g', 'laticínios'], ['Flor de sal da Guérande', 1, 'pitada', 'temperos']],
      steps: [['Selar vieiras', 'Doure as vieiras na manteiga espumante até criar crosta âmbar.', 180], ['Aquecer purê', 'Acomode o purê trufado aveludado no centro do prato.', 60], ['Montar', 'Disponha as vieiras sobre o purê e regue a manteiga dourada.', null]]
    },
    {
      title: 'Bacalhau à Brás Cetogênico com Fios de Pupunha e Ovos Caipiras',
      sub: 'bacalhau_e_outros', diff: 'medium', prep: 15, cook: 12, cal: 450, p: 38, c: 4, fib: 2, f: 31, prem: false,
      tags: ['bacalhau_a_bras', 'pupunha', 'ovos', 'português'],
      tip: 'Substitua a batata palha por palmito pupunha salteado e fatiado em palha crocante.',
      ings: [['Bacalhau dessalgado em lascas', 400, 'g', 'proteínas'], ['Palmito pupunha fresco fatiado fininho', 200, 'g', 'vegetais'], ['Ovos caipiras batidos', 4, 'unidades', 'proteínas'], ['Cebola e salsa picadas com azeitonas', 80, 'g', 'vegetais']],
      steps: [['Refogar base', 'Doure a cebola e o bacalhau no azeite com a pupunha.', 360], ['Adicionar ovos', 'Despeje os ovos batidos em fogo baixo mexendo até cremosidade úmida.', 180], ['Servir', 'Decore com azeitonas pretas e salsinha.', null]]
    },
    {
      title: 'Mexilhões na Concha ao Molho de Vinho Branco, Nata e Ervas (Moules)',
      sub: 'bacalhau_e_outros', diff: 'medium', prep: 15, cook: 8, cal: 380, p: 34, c: 4, fib: 0, f: 25, prem: true,
      tags: ['mexilhões', 'moules_marinières', 'bistrô', 'vinho_branco'],
      tip: 'Descarte qualquer mexilhão que não abrir durante o cozimento no vapor.',
      ings: [['Mexilhões frescos limpos nas conchas', 800, 'g', 'proteínas'], ['Vinho branco seco', 100, 'ml', 'despensa'], ['Nata fresca', 100, 'ml', 'laticínios'], ['Manteiga com chalota picada', 30, 'g', 'despensa'], ['Salsinha picada', 3, 'colheres de sopa', 'temperos']],
      steps: [['Refogar chalota', 'Doure a chalota na manteiga em panela grande.', 120], ['Vapor de vinho', 'Junte os mexilhões e o vinho branco, tampando a panela por 5 minutos.', 300], ['Finalizar molho', 'Adicione a nata e salsinha e sirva na própria panela.', null]]
    },
    {
      title: 'Camarões e Lulas à Provençal com Tomatinhos Confit e Ervas',
      sub: 'bacalhau_e_outros', diff: 'easy', prep: 10, cook: 8, cal: 410, p: 38, c: 3, fib: 1, f: 27, prem: false,
      tags: ['provençal', 'camarão', 'lula', 'mediterrâneo'],
      tip: 'Um prato leve e vibrante, perfeito para dias quentes acompanhado de folhas frescas.',
      ings: [['Camarões e anéis de lula', 450, 'g', 'proteínas'], ['Tomates-cereja confitados', 80, 'g', 'vegetais'], ['Manteiga com alho e salsinha', 35, 'g', 'despensa'], ['Suco de limão', 1, 'colher de sopa', 'temperos']],
      steps: [['Saltear frutos do mar', 'Grelhe o camarão e a lula na manteiga quente.', 240], ['Adicionar tomatinhos', 'Junte os tomates confitados e salsinha.', 120], ['Servir', 'Apresente fumegante com rodelas de limão.', null]]
    }
  ];

  return items.map((r) => ({
    title: r.title,
    shortDesc: `${r.title} preparado com frutos do mar frescos e perfil cetogênico autêntico.`,
    desc: `Prato nobre com alto teor de ômega-3, minerais e gorduras nobres, perfeito para um estilo de vida de alta performance.`,
    category: 'seafood',
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
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    ingredients: r.ings.map(([name, qty, unit, cat]) => ({ name, qty, unit, cat })),
    steps: r.steps.map(([title, desc, timer]) => ({ title, desc, timer })),
    chefTip: r.tip
  })).slice(0, 60);
}
