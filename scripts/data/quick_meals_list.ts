import { RawRecipeInput } from '../recipe_helper';

export function getFullQuickMealsList(): RawRecipeInput[] {
  const items: { title: string; sub: string; diff: 'easy' | 'medium' | 'hard'; prep: number; cook: number; cal: number; p: number; c: number; fib: number; f: number; prem: boolean; tags: string[]; tip: string; ings: [string, number, string, any][]; steps: [string, string, number | null][] }[] = [
    // 1-15: 15min (15)
    {
      title: 'Iscas de Filé Mignon ao Alho e Manteiga na Frigideira Pelando',
      sub: '15min', diff: 'easy', prep: 4, cook: 6, cal: 480, p: 46, c: 2, fib: 0, f: 33, prem: false,
      tags: ['15min', 'filé_mignon', 'manteiga_de_alho', 'rápido', 'suculento'],
      tip: 'Aqueça a frigideira de ferro até soltar fumaça antes de adicionar as tiras de carne.',
      ings: [['Filé mignon cortado em tiras médias', 450, 'g', 'proteínas'], ['Manteiga sem sal pura', 40, 'g', 'laticínios'], ['Dentes de alho picados fino', 4, 'unidades', 'vegetais'], ['Salsinha picada e flor de sal', 2, 'colheres de sopa', 'temperos']],
      steps: [['Aquecer ferro', 'Aqueça a frigideira em fogo alto com um fio de azeite.', 120], ['Dourar carne', 'Coloque as iscas sem amontoar por 3 minutos mexendo rápido.', 180], ['Finalizar manteiga', 'Apague o fogo, adicione a manteiga e alho e envolva a carne.', 60]]
    },
    {
      title: 'Omelete Francês Dobrado com Queijo Gruyère e Ciboulette Fresca',
      sub: '15min', diff: 'easy', prep: 3, cook: 4, cal: 390, p: 26, c: 2, fib: 0, f: 32, prem: false,
      tags: ['15min', 'omelete', 'gruyère', 'bistrô', 'express'],
      tip: 'Bata os ovos vigorosamente com garfo e mexa na frigideira com manteiga como ovos mexidos nos primeiros 30 segundos.',
      ings: [['Ovos caipiras frescos batidos', 4, 'unidades', 'proteínas'], ['Queijo Gruyère ralado fino', 60, 'g', 'laticínios'], ['Manteiga clarificada', 25, 'g', 'despensa'], ['Ciboulette fresca picada', 2, 'colheres de sopa', 'temperos']],
      steps: [['Mexer rápido', 'Despeje os ovos na manteiga espumante mexendo em círculos com espátula.', 60], ['Colocar queijo', 'Disponha o queijo no centro enquanto a superfície ainda está úmida (baveuse).', 30], ['Enrolar charuto', 'Dobre as abas formando um cilindro perfeito e deslize no prato.', 30]]
    },
    {
      title: 'Tiras de Peito de Frango Salteadas no Óleo de Gergelim com Brócolis',
      sub: '15min', diff: 'easy', prep: 5, cook: 8, cal: 410, p: 44, c: 4, fib: 2, f: 24, prem: false,
      tags: ['15min', 'frango', 'brócolis', 'stir_fry', 'oriental'],
      tip: 'Corte o frango e os brócolis finos para cozinharem juntos no vapor do próprio refogado.',
      ings: [['Peito de frango em tiras finas', 400, 'g', 'proteínas'], ['Floretes pequenos de brócolis', 150, 'g', 'vegetais'], ['Óleo de gergelim torrado e shoyu sem açúcar', 30, 'ml', 'despensa'], ['Gengibre ralado e gergelim', 1, 'colher de sopa', 'temperos']],
      steps: [['Dourar frango', 'Salteie o frango no óleo de gergelim por 4 minutos.', 240], ['Adicionar brócolis', 'Junte o brócolis, gengibre e um gole de água tampando a panela.', 180], ['Finalizar', 'Regue shoyu sem açúcar e salpique sementes de gergelim.', 60]]
    },
    {
      title: 'Camarões Rápidos no Alho com Manteiga e Gotas de Limão Siciliano',
      sub: '15min', diff: 'easy', prep: 4, cook: 5, cal: 360, p: 35, c: 2, fib: 0, f: 24, prem: false,
      tags: ['15min', 'camarão', 'limão_siciliano', 'express', 'leve'],
      tip: 'Camarões médios descongelados e secos cozinham em exatamente 2 minutos por lado.',
      ings: [['Camarões médios limpos', 450, 'g', 'proteínas'], ['Manteiga', 35, 'g', 'despensa'], ['Alho fatiado', 3, 'dentes', 'vegetais'], ['Suco de meio limão siciliano', 1, 'colher de sopa', 'temperos'], ['Salsinha fresca picada', 2, 'colheres de sopa', 'temperos']],
      steps: [['Saltear alho', 'Aqueça a manteiga e doure o alho rapidamente.', 60], ['Grelhar camarões', 'Coloque os camarões e cozinhe por 4 minutos mexendo.', 240], ['Suco cítrico', 'Desligue com o suco de limão e salsinha fresca.', null]]
    },
    {
      title: 'Ovos Estrelados no Azeite com Queijo Coalho Dourado e Tomilho',
      sub: '15min', diff: 'easy', prep: 3, cook: 5, cal: 420, p: 28, c: 2, fib: 0, f: 34, prem: false,
      tags: ['15min', 'ovos', 'queijo_coalho', 'nordestino', 'almoço_rápido'],
      tip: 'Doure o queijo coalho primeiro na frigideira e quebre os ovos diretamente nos vãos entre os cubos.',
      ings: [['Ovos caipiras', 3, 'unidades', 'proteínas'], ['Queijo coalho em cubos ou fatias', 80, 'g', 'laticínios'], ['Azeite de oliva extravirgem', 20, 'ml', 'despensa'], ['Folhas de tomilho fresco e flor de sal', 1, 'colher de café', 'temperos']],
      steps: [['Dourar coalho', 'Doure o queijo coalho no azeite quente.', 120], ['Quebrar ovos', 'Abra os ovos ao lado do queijo e frite até clara firme e gema mole.', 180], ['Servir', 'Salpique o tomilho e flor de sal.', null]]
    },
    {
      title: 'Atum Selado Relâmpago com Manteiga de Ervas Finas e Salada de Rúcula',
      sub: '15min', diff: 'easy', prep: 4, cook: 3, cal: 390, p: 42, c: 2, fib: 1, f: 24, prem: false,
      tags: ['15min', 'atum', 'manteiga_de_ervas', 'rúcula', 'gourmet'],
      tip: 'Deixe a frigideira fumegante para selar o atum em apenas 1 minuto por lado, mantendo miolo rubi.',
      ings: [['Steaks de atum fresco', 400, 'g', 'proteínas'], ['Manteiga com ervas finas', 35, 'g', 'despensa'], ['Folhas de rúcula fresca', 100, 'g', 'vegetais'], ['Azeite e flor de sal', 15, 'ml', 'despensa']],
      steps: [['Selar atum', 'Doure o atum por 60 segundos de cada lado.', 120], ['Manteiga aromática', 'Coloque a manteiga sobre o peixe para derreter.', 30], ['Servir com rúcula', 'Apresente fatiado sobre as folhas de rúcula no azeite.', null]]
    },
    {
      title: 'Picanha em Tiras Finas na Frigideira de Ferro com Sal de Parrilla',
      sub: '15min', diff: 'easy', prep: 3, cook: 5, cal: 520, p: 44, c: 0, fib: 0, f: 39, prem: false,
      tags: ['15min', 'picanha', 'churrasco_rápido', 'ferro'],
      tip: 'Corte as tiras finas para que atinjam crosta dourada e ponto suculento em menos de 4 minutos.',
      ings: [['Tiras de picanha com a capa de gordura', 450, 'g', 'proteínas'], ['Sal de parrilla', 1, 'colher de sobremesa', 'temperos'], ['Manteiga para dourar', 15, 'g', 'despensa']],
      steps: [['Selar na gordura', 'Coloque as tiras na frigideira de ferro bem quente.', 180], ['Virar rápido', 'Vire as tiras por mais 1 minuto.', 60], ['Servir', 'Polvilhe o sal de parrilla ao tirar do fogo.', null]]
    },
    {
      title: 'Queijo Brie Morno Derretido na Frigideira com Castanhas de Caju',
      sub: '15min', diff: 'easy', prep: 3, cook: 4, cal: 430, p: 18, c: 4, fib: 1, f: 38, prem: true,
      tags: ['15min', 'brie', 'castanhas', 'sem_fogão_demorado', 'petisco'],
      tip: 'Aqueça em fogo baixíssimo com tampa para o queijo amolecer sem vazar totalmente.',
      ings: [['Triângulo ou disco de queijo Brie', 150, 'g', 'laticínios'], ['Castanhas de caju picadas tostadas', 35, 'g', 'despensa'], ['Ramos de alecrim fresco', 1, 'ramo', 'temperos'], ['Azeite extravirgem', 10, 'ml', 'despensa']],
      steps: [['Aquecer queijo', 'Coloque o brie na frigideirinha untada com tampa por 3 minutos.', 180], ['Tostar castanhas', 'Salpique as castanhas e o alecrim por cima.', 60], ['Servir com garfo', 'Deguste o queijo fundente imediatamente.', null]]
    },
    {
      title: 'Strogonoff Expresso de Frango com Creme de Nata e Mostarda Dijon',
      sub: '15min', diff: 'easy', prep: 5, cook: 8, cal: 460, p: 42, c: 4, fib: 1, f: 32, prem: false,
      tags: ['15min', 'strogonoff', 'frango', 'nata', 'conforto'],
      tip: 'Corte o peito de frango em cubinhos bem pequenos para cozinhar em apenas 4 minutos.',
      ings: [['Cubos pequenos de peito de frango', 400, 'g', 'proteínas'], ['Nata fresca ou creme de leite fresco', 150, 'ml', 'laticínios'], ['Cogumelos Paris fatiados', 100, 'g', 'vegetais'], ['Mostarda Dijon e extrato de tomate puro', 2, 'colheres de sopa', 'temperos'], ['Manteiga', 20, 'g', 'despensa']],
      steps: [['Dourar frango e cogumelos', 'Salteie na manteiga bem quente até dourarem.', 240], ['Adicionar temperos', 'Junte a mostarda e extrato de tomate.', 60], ['Finalizar com nata', 'Incorpore a nata até borbulhar e desligue.', 120]]
    },
    {
      title: 'Abobrinha Refogada na Manteiga com Ovos Mexidos e Parmesão',
      sub: '15min', diff: 'easy', prep: 4, cook: 6, cal: 360, p: 22, c: 4, fib: 2, f: 29, prem: false,
      tags: ['15min', 'abobrinha', 'ovos', 'parmesão', 'econômica'],
      tip: 'Rale a abobrinha no ralo grosso para refogar em apenas 2 minutos na manteiga.',
      ings: [['Abobrinha ralada grossa', 200, 'g', 'vegetais'], ['Ovos caipiras batidos', 3, 'unidades', 'proteínas'], ['Queijo parmesão ralado', 40, 'g', 'laticínios'], ['Manteiga clarificada', 25, 'g', 'despensa']],
      steps: [['Refogar abobrinha', 'Doure a abobrinha na manteiga com sal.', 120], ['Juntar ovos', 'Despeje os ovos mexendo delicadamente até consistência cremosa.', 180], ['Queijo parmesão', 'Desligue e polvilhe parmesão abundante.', null]]
    },
    {
      title: 'Linguiça de Frango Artesanal Fatiada Salteada com Couve Rasgada',
      sub: '15min', diff: 'easy', prep: 4, cook: 8, cal: 420, p: 34, c: 3, fib: 2, f: 31, prem: false,
      tags: ['15min', 'linguiça', 'couve', 'dia_a_dia', 'fácil'],
      tip: 'Corte as linguiças em rodelas finas para tostarem rapidamente na frigideira.',
      ings: [['Linguiça artesanal de frango em rodelas', 350, 'g', 'proteínas'], ['Folhas de couve rasgadas', 100, 'g', 'vegetais'], ['Alho picado e cebola', 30, 'g', 'vegetais'], ['Azeite de oliva', 15, 'ml', 'despensa']],
      steps: [['Dourar rodelas', 'Frite a linguiça até ficar tostadinha.', 300], ['Juntar couve', 'Acrescente o alho e as folhas de couve mexendo até murchar.', 180], ['Servir', 'Apresente fumegante.', null]]
    },
    {
      title: 'Bife de Chorizo Fatiado com Molho Rápido de Queijo Gorgonzola',
      sub: '15min', diff: 'easy', prep: 4, cook: 8, cal: 540, p: 48, c: 2, fib: 0, f: 39, prem: true,
      tags: ['15min', 'chorizo', 'gorgonzola', 'refeição_rápida'],
      tip: 'Doure a carne primeiro e faça o molho fundindo o queijo na gordura residual da mesma frigideira.',
      ings: [['Bife de chorizo fatiado em tiras grossas', 450, 'g', 'proteínas'], ['Queijo gorgonzola amassado', 60, 'g', 'laticínios'], ['Creme de leite', 80, 'ml', 'laticínios'], ['Manteiga', 20, 'g', 'despensa']],
      steps: [['Grelhar carne', 'Doure as tiras de chorizo na frigideira quente.', 240], ['Retirar carne e fazer molho', 'Coloque a carne no prato e funda o gorgonzola com creme na panela.', 120], ['Despejar', 'Regue o molho cremoso sobre as fatias de carne.', null]]
    },
    {
      title: 'Fritada Rápida de Espinafre com Queijo Feta e Ovos Caipiras',
      sub: '15min', diff: 'easy', prep: 3, cook: 7, cal: 370, p: 24, c: 3, fib: 2, f: 29, prem: false,
      tags: ['15min', 'fritada', 'espinafre', 'feta', 'vegetariano_keto'],
      tip: 'Tampe a frigideira em fogo brando para a fritada inflar e o queijo derreter.',
      ings: [['Ovos batidos com sal e pimenta', 4, 'unidades', 'proteínas'], ['Folhas de espinafre frescas', 120, 'g', 'vegetais'], ['Queijo feta em pedaços', 60, 'g', 'laticínios'], ['Manteiga', 20, 'g', 'despensa']],
      steps: [['Murchar espinafre', 'Refogue o espinafre na manteiga por 1 minuto.', 60], ['Adicionar ovos e queijo', 'Despeje os ovos batidos e espalhe o queijo feta.', 60], ['Abafar', 'Tampe a frigideira em fogo baixo por 5 minutos até dourar por baixo e cozinhar o topo.', 300]]
    },
    {
      title: 'Filé de Tilápia com Manteiga e Alcaparras em Frigideira Antiaderente',
      sub: '15min', diff: 'easy', prep: 3, cook: 6, cal: 360, p: 38, c: 2, fib: 0, f: 23, prem: false,
      tags: ['15min', 'tilápia', 'alcaparras', 'peixe_rápido'],
      tip: 'A tilápia fina cozinha em menos de 3 minutos de cada lado na manteiga.',
      ings: [['Filés de tilápia frescos', 400, 'g', 'proteínas'], ['Manteiga clarificada', 30, 'g', 'despensa'], ['Alcaparras drenadas', 2, 'colheres de sopa', 'temperos'], ['Suco de limão e salsinha', 1, 'colher de sopa', 'temperos']],
      steps: [['Grelhar peixe', 'Doure os filés na frigideira por 3 minutos de cada lado.', 360], ['Manteiga cítrica', 'Junte alcaparras, manteiga e limão nos últimos 30 segundos.', 60], ['Servir', 'Apresente com os sucos da frigideira.', null]]
    },
    {
      title: 'Cogumelos Paris Salteados no Bacon com Alho e Cheiro-Verde',
      sub: '15min', diff: 'easy', prep: 4, cook: 6, cal: 340, p: 14, c: 4, fib: 2, f: 30, prem: false,
      tags: ['15min', 'cogumelos', 'bacon', 'petisco', 'acompanhamento'],
      tip: 'Não lave os cogumelos em água; limpe com pano úmido para dourarem perfeitamente na gordura do bacon.',
      ings: [['Cogumelos Paris cortados em quatro', 250, 'g', 'vegetais'], ['Bacon em cubos dourados', 70, 'g', 'proteínas'], ['Dentes de alho picados', 2, 'unidades', 'vegetais'], ['Cebolinha e salsinha picadas', 2, 'colheres de sopa', 'temperos']],
      steps: [['Fritar bacon', 'Doure o bacon até soltar a gordura.', 180], ['Saltear cogumelos', 'Adicione os cogumelos e o alho em fogo alto por 3 minutos.', 180], ['Finalizar', 'Polvilhe o cheiro-verde fresco e sirva.', null]]
    },

    // 16-30: Panela Única (15)
    {
      title: 'Frigideira Nobre de Frango com Bacon, Creme de Queijo e Espinafre',
      sub: 'panela_unica', diff: 'easy', prep: 10, cook: 18, cal: 520, p: 46, c: 4, fib: 2, f: 37, prem: false,
      tags: ['panela_unica', 'frango', 'bacon', 'creme_de_queijo', 'família'],
      tip: 'Prepare todo o prato na mesma frigideira funda para absorver o fundo caramelizado de cada ingrediente.',
      ings: [['Sobrecoxas de frango desossadas em cubos', 450, 'g', 'proteínas'], ['Bacon em cubinhos dourado', 60, 'g', 'proteínas'], ['Cream cheese ou requeijão', 100, 'g', 'laticínios'], ['Folhas de espinafre frescas', 120, 'g', 'vegetais'], ['Queijo parmesão para gratinar', 50, 'g', 'laticínios']],
      steps: [['Dourar bacon e frango', 'Frite o bacon e doure o frango na mesma frigideira.', 480], ['Creme rico', 'Junte o cream cheese com 50ml de água e mexa até criar molho sedoso.', 180], ['Espinafre e queijo', 'Acrescente o espinafre, cubra com queijo parmesão e tampe por 4 minutos até derreter.', 240]]
    },
    {
      title: 'Picadinho de Carne Bovino na Panela de Ferro com Bacon e Azeitonas',
      sub: 'panela_unica', diff: 'easy', prep: 12, cook: 25, cal: 480, p: 44, c: 3, fib: 1, f: 33, prem: false,
      tags: ['panela_unica', 'picadinho', 'carne_bovina', 'azeitonas', 'conforto'],
      tip: 'Deglace a panela com um gole de água ou vinho tinto para soltar a crosta saborosa do fundo.',
      ings: [['Alcatra ou coxão mole em cubinhos pequenos', 450, 'g', 'proteínas'], ['Bacon em cubinhos frito', 50, 'g', 'proteínas'], ['Azeitonas verdes fatiadas', 40, 'g', 'vegetais'], ['Tomates pelados picados', 120, 'g', 'vegetais'], ['Cheiro-verde picadinho', 3, 'colheres de sopa', 'temperos']],
      steps: [['Dourar bacon e carne', 'Frite o bacon e sele os cubinhos de carne em fogo alto.', 360], ['Apurar molho', 'Adicione os tomates e azeitonas, abafe e cozinhe por 18 minutos.', 1080], ['Finalizar', 'Polvilhe cheiro-verde abundante.', null]]
    },
    {
      title: 'Moqueca Rápida de Peixe Branco e Camarão em Panela Única',
      sub: 'panela_unica', diff: 'easy', prep: 10, cook: 15, cal: 440, p: 42, c: 5, fib: 2, f: 29, prem: true,
      tags: ['panela_unica', 'moqueca', 'peixe', 'camarão', 'dendê'],
      tip: 'Monte camadas dos ingredientes e cozinhe sob tampa fechada para cozinhar no próprio vapor de coco.',
      ings: [['Filé de peixe branco em pedaços e camarões', 450, 'g', 'proteínas'], ['Leite de coco integral', 200, 'ml', 'despensa'], ['Azeite de dendê', 15, 'ml', 'despensa'], ['Pimentões coloridos e cebola em rodelas', 100, 'g', 'vegetais'], ['Coentro fresco', 3, 'colheres de sopa', 'temperos']],
      steps: [['Montar camadas', 'Coloque os legumes, o peixe e os camarões na panela.', 180], ['Adicionar líquidos', 'Despeje o leite de coco e o azeite de dendê.', 60], ['Cozinhar tampado', 'Cozinhe por 12 minutos em fogo médio até o peixe desmanchar.', 720]]
    },
    {
      title: 'Carne Moída Refogada com Abobrinha em Cubos e Queijo Minas Derretido',
      sub: 'panela_unica', diff: 'easy', prep: 8, cook: 15, cal: 430, p: 38, c: 5, fib: 2, f: 29, prem: false,
      tags: ['panela_unica', 'carne_moida', 'abobrinha', 'queijo_derretido', 'dia_a_dia'],
      tip: 'Adicione os cubos de queijo minas por cima no final e desligue com tampa fechada para derreter no vapor.',
      ings: [['Carne moída bovina fresca', 400, 'g', 'proteínas'], ['Abobrinhas em cubinhos pequenos', 250, 'g', 'vegetais'], ['Queijo minas padrão em cubos', 80, 'g', 'laticínios'], ['Cebola, alho e azeite', 40, 'g', 'vegetais']],
      steps: [['Dourar carne', 'Frite a carne moída com cebola e alho até secar e dourar.', 360], ['Juntar abobrinha', 'Acrescente a abobrinha e cozinhe por 6 minutos.', 360], ['Derreter queijo', 'Espalhe os cubos de queijo, tampe e deixe derreter.', 180]]
    },
    {
      title: 'Arroz Cetogênico de Couve-Flor com Frango Desfiado e Açafrão',
      sub: 'panela_unica', diff: 'easy', prep: 10, cook: 12, cal: 390, p: 38, c: 5, fib: 3, f: 25, prem: false,
      tags: ['panela_unica', 'arroz_de_couve_flor', 'frango', 'açafrão', 'galinhada_keto'],
      tip: 'Refogue a couve-flor triturada na manteiga com cúrcuma por apenas 4 minutos para manter textura al dente.',
      ings: [['Couve-flor fresca triturada em grãos de arroz', 350, 'g', 'vegetais'], ['Frango cozido desfiado', 250, 'g', 'proteínas'], ['Cúrcuma (açafrão-da-terra) pura e alho', 1, 'colher de sopa', 'temperos'], ['Manteiga com cheiro-verde', 30, 'g', 'despensa']],
      steps: [['Refogar aromáticos', 'Doure o alho e cúrcuma na manteiga na panela grande.', 120], ['Adicionar couve-flor e frango', 'Junte o arroz de couve-flor e o frango desfiado mexendo sempre.', 300], ['Finalizar', 'Polvilhe salsinha e cebolinha fresca e sirva.', null]]
    },
    {
      title: 'Frigideira de Linguiça Artesanal com Pimentões e Ovos Pochê na Panela',
      sub: 'panela_unica', diff: 'easy', prep: 10, cook: 14, cal: 460, p: 32, c: 5, fib: 2, f: 35, prem: false,
      tags: ['panela_unica', 'shakshuka_keto', 'linguiça', 'ovos'],
      tip: 'Abra covinhas no refogado de linguiça e pimentão para quebrar os ovos diretamente dentro.',
      ings: [['Linguiça artesanal de pernil em pedaços', 300, 'g', 'proteínas'], ['Ovos caipiras inteiros', 3, 'unidades', 'proteínas'], ['Pimentões e tomate pelado picados', 150, 'g', 'vegetais'], ['Páprica defumada e cheiro-verde', 1, 'colher de sopa', 'temperos']],
      steps: [['Dourar linguiça e pimentão', 'Refogue a linguiça com os pimentões até dourarem.', 360], ['Adicionar tomate', 'Junte o tomate pelado e páprica fazendo molho borbulhante.', 240], ['Pochê de ovos', 'Abra os ovos no molho, tampe e cozinhe por 4 minutos até claras firmes e gemas moles.', 240]]
    },
    {
      title: 'Frango ao Curry Indiano com Leite de Coco e Couve-Flor na Panela',
      sub: 'panela_unica', diff: 'medium', prep: 10, cook: 18, cal: 450, p: 40, c: 6, fib: 3, f: 31, prem: false,
      tags: ['panela_unica', 'curry', 'leite_de_coco', 'couve-flor', 'indiano'],
      tip: 'A pasta de curry dourada na manteiga ghee libera os óleos aromáticos essenciais.',
      ings: [['Cubos de peito ou sobrecoxa de frango', 450, 'g', 'proteínas'], ['Floretes de couve-flor pequenos', 200, 'g', 'vegetais'], ['Leite de coco cremoso', 200, 'ml', 'despensa'], ['Pasta ou pó de curry aromático e ghee', 2, 'colheres de sopa', 'temperos']],
      steps: [['Dourar frango no ghee', 'Sele o frango com o curry em fogo médio.', 300], ['Adicionar couve-flor e coco', 'Despeje o leite de coco e couve-flor.', 120], ['Cozinhar em fogo baixo', 'Cozinhe tampado por 12 minutos até o molho encorpar.', 720]]
    },
    {
      title: 'Tiras de Lombo Suíno ao Molho de Mostarda e Nata na Frigideira',
      sub: 'panela_unica', diff: 'easy', prep: 8, cook: 12, cal: 480, p: 44, c: 3, fib: 1, f: 33, prem: false,
      tags: ['panela_unica', 'lombo_suíno', 'mostarda', 'nata', 'rápido'],
      tip: 'A carne suína em tiras cozinha em apenas 5 minutos mantendo maciez extraordinária.',
      ings: [['Tiras de lombo suíno fresco', 450, 'g', 'proteínas'], ['Nata fresca da fazenda', 120, 'ml', 'laticínios'], ['Mostarda amarela e Dijon', 2, 'colheres de sopa', 'temperos'], ['Manteiga com alho', 25, 'g', 'despensa']],
      steps: [['Dourar carne suína', 'Frite as tiras de lombo na manteiga quente.', 300], ['Incorporar mostarda e nata', 'Acrescente a mostarda e a nata mexendo até formar molho aveludado.', 180], ['Servir', 'Salpique pimenta preta e sirva.', null]]
    },
    {
      title: 'Ensopadinho Rápido de Peixe com Leite de Coco, Tomates e Coentro',
      sub: 'panela_unica', diff: 'easy', prep: 10, cook: 14, cal: 390, p: 38, c: 5, fib: 2, f: 25, prem: false,
      tags: ['panela_unica', 'peixe', 'leite_de_coco', 'coentro', 'leve'],
      tip: 'Não mexa o peixe vigorosamente para manter as postas íntegras e suculentas.',
      ings: [['Filés de peixe branco em pedaços grandes', 450, 'g', 'proteínas'], ['Leite de coco integral', 200, 'ml', 'despensa'], ['Tomates e cebola picados', 100, 'g', 'vegetais'], ['Azeite de oliva e coentro fresco abundante', 3, 'colheres de sopa', 'temperos']],
      steps: [['Refogar aromáticos', 'Doure a cebola e tomate no azeite.', 180], ['Adicionar peixe e coco', 'Acomode o peixe e despeje o leite de coco.', 120], ['Cozimento brando', 'Tampe e cozinhe por 8 minutos sem ferver forte.', 480]]
    },
    {
      title: 'Frigideira de Carne Seca com Cebola Roxa e Manteiga de Garrafa',
      sub: 'panela_unica', diff: 'easy', prep: 10, cook: 12, cal: 490, p: 44, c: 3, fib: 1, f: 34, prem: false,
      tags: ['panela_unica', 'carne_seca', 'manteiga_de_garrafa', 'nordestino'],
      tip: 'Use carne seca já cozida e desfiada para preparar em apenas 10 minutos.',
      ings: [['Carne seca cozida desfiada', 400, 'g', 'proteínas'], ['Manteiga de garrafa pura', 40, 'ml', 'despensa'], ['Cebolas roxas cortadas em meia-lua', 150, 'g', 'vegetais'], ['Cheiro-verde e pimenta-de-cheiro', 2, 'colheres de sopa', 'temperos']],
      steps: [['Caramelizar cebola', 'Frite a cebola na manteiga de garrafa até ficar transparente e dourada.', 300], ['Dourar carne seca', 'Junte a carne seca e toste em fogo alto.', 300], ['Finalizar', 'Salpique cheiro-verde e sirva na própria frigideira.', null]]
    },
    {
      title: 'Frango Cremoso com Cogumelos Paris e Espinafre na Frigideira',
      sub: 'panela_unica', diff: 'easy', prep: 10, cook: 15, cal: 470, p: 44, c: 4, fib: 2, f: 31, prem: false,
      tags: ['panela_unica', 'frango', 'cogumelos', 'espinafre', 'jantar'],
      tip: 'Um clássico reconfortante da dieta cetogênica feito em apenas 20 minutos totais.',
      ings: [['Peito de frango cortado em cubos', 450, 'g', 'proteínas'], ['Cogumelos Paris fatiados', 150, 'g', 'vegetais'], ['Folhas de espinafre', 100, 'g', 'vegetais'], ['Nata ou creme de leite', 120, 'ml', 'laticínios'], ['Manteiga', 25, 'g', 'despensa']],
      steps: [['Dourar frango e cogumelos', 'Salteie na manteiga até dourar.', 360], ['Juntar espinafre', 'Adicione o espinafre deixando murchar por 1 minuto.', 60], ['Aveludar molho', 'Coloque a nata e apure por 3 minutos.', 180]]
    },
    {
      title: 'Kafta de Frigideira com Queijo Feta e Rodelas de Cebola Roxa',
      sub: 'panela_unica', diff: 'easy', prep: 12, cook: 10, cal: 460, p: 42, c: 3, fib: 1, f: 32, prem: false,
      tags: ['panela_unica', 'kafta', 'feta', 'árabe', 'fácil'],
      tip: 'Modele mini hambúrgueres compridos de kafta e grelhe na frigideira de ferro com azeite.',
      ings: [['Carne bovina moída temperada com hortelã e pimenta síria', 450, 'g', 'proteínas'], ['Queijo feta esfarelado', 70, 'g', 'laticínios'], ['Cebola roxa em rodelas', 80, 'g', 'vegetais'], ['Azeite extravirgem', 20, 'ml', 'despensa']],
      steps: [['Grelhar kaftas', 'Doure os rolinhos de kafta na frigideira por 6 minutos virando.', 360], ['Dourar cebolas', 'Adicione as rodelas de cebola ao lado para dourarem.', 180], ['Finalizar com queijo', 'Salpique o queijo feta nos rolinhos quentes.', null]]
    },
    {
      title: 'Frigideira de Camarão com Espaguete de Abobrinha e Molho de Parmesão',
      sub: 'panela_unica', diff: 'easy', prep: 10, cook: 10, cal: 420, p: 36, c: 4, fib: 2, f: 29, prem: false,
      tags: ['panela_unica', 'camarão', 'zoodles', 'parmesão', 'italiano'],
      tip: 'Adicione a abobrinha apenas no último minuto para não soltar líquido no molho.',
      ings: [['Camarões médios limpos', 350, 'g', 'proteínas'], ['Abobrinha espiralizada em fios de espaguete', 200, 'g', 'vegetais'], ['Creme de leite fresco com queijo parmesão ralado', 100, 'g', 'laticínios'], ['Manteiga com alho', 25, 'g', 'despensa']],
      steps: [['Dourar camarões', 'Salteie os camarões na manteiga de alho por 3 minutos.', 180], ['Fazer molho', 'Junte o creme e parmesão mexendo até engrossar.', 120], ['Envolver abobrinha', 'Coloque o espaguete de abobrinha por 60 segundos e sirva.', 60]]
    },
    {
      title: 'Costelinha Suína Desfiada Salteada com Couve e Alho Crocante',
      sub: 'panela_unica', diff: 'easy', prep: 8, cook: 12, cal: 510, p: 42, c: 2, fib: 1, f: 38, prem: false,
      tags: ['panela_unica', 'costelinha_suína', 'couve', 'alho_frito'],
      tip: 'Aproveite sobras de costelinha assada para um refogado ultra saboroso.',
      ings: [['Costelinha de porco desfiada', 400, 'g', 'proteínas'], ['Folhas de couve rasgadas', 120, 'g', 'vegetais'], ['Alho laminado frito', 4, 'dentes', 'vegetais'], ['Banha de porco', 20, 'g', 'despensa']],
      steps: [['Aquecer carne', 'Toste a costelinha desfiada na banha bem quente.', 300], ['Juntar couve', 'Acrescente a couve mexendo até murchar.', 180], ['Alho crocante', 'Finalize com as lâminas douradas de alho.', null]]
    },
    {
      title: 'Ovos Rancheros Cetogênicos com Carne Moída, Abacate e Coentro',
      sub: 'panela_unica', diff: 'easy', prep: 10, cook: 12, cal: 480, p: 38, c: 5, fib: 3, f: 34, prem: false,
      tags: ['panela_unica', 'huevos_rancheros', 'abacate', 'mexicano', 'brunch'],
      tip: 'Sirva na própria frigideira com fatias frescas de abacate e folhas de coentro.',
      ings: [['Carne moída temperada com páprica e cominho', 300, 'g', 'proteínas'], ['Ovos caipiras', 3, 'unidades', 'proteínas'], ['Tomates pelados em cubos', 120, 'g', 'vegetais'], ['Abacate em fatias e coentro fresco', 100, 'g', 'vegetais']],
      steps: [['Refogar carne', 'Doure a carne moída com os tomates até secar o molho.', 360], ['Quebrar ovos', 'Abra os ovos sobre a carne e cozinhe tampado por 4 minutos.', 240], ['Adicionar abacate', 'Acomode as fatias de abacate e coentro ao desligar.', null]]
    },

    // 31-42: Airfryer (12)
    {
      title: 'Coxas de Frango Ultra Crocantes na Airfryer com Alho e Páprica',
      sub: 'airfryer', diff: 'easy', prep: 5, cook: 25, cal: 460, p: 42, c: 1, fib: 0, f: 32, prem: false,
      tags: ['airfryer', 'frango_crocante', 'páprica', 'fácil', 'sem_sujeira'],
      tip: 'Seque bem a pele das coxas com papel toalha e salgue antes de colocar na cesta.',
      ings: [['Coxas de frango com pele', 600, 'g', 'proteínas'], ['Páprica defumada e alho em pó', 1, 'colher de sopa', 'temperos'], ['Azeite de oliva e sal marinho', 1, 'colher de sopa', 'temperos']],
      steps: [['Temperar pele seca', 'Massageie o azeite, páprica e sal na pele das coxas.', 120], ['Assar na airfryer', 'Asse a 180°C por 20 minutos virando na metade.', 1200], ['Pururucar pele', 'Aumente para 200°C por 5 minutos para estalar a pele.', 300]]
    },
    {
      title: 'Almôndegas Recheadas com Queijo na Airfryer com Crosta Dourada',
      sub: 'airfryer', diff: 'easy', prep: 12, cook: 12, cal: 440, p: 40, c: 2, fib: 1, f: 31, prem: false,
      tags: ['airfryer', 'almôndegas', 'queijo_derretido', 'rápido'],
      tip: 'O queijo no interior fica derretido e a casquinha externa bem selada e crocante.',
      ings: [['Carne moída temperada', 450, 'g', 'proteínas'], ['Cubos de queijo muçarela ou provolone', 80, 'g', 'laticínios'], ['Ovo caipira e salsinha', 1, 'unidade', 'proteínas']],
      steps: [['Modelar almôndegas', 'Molde bolinhas com o cubo de queijo no centro.', 240], ['Airfryer', 'Asse a 190°C por 12 minutos sacudindo a cesta aos 6 minutos.', 720], ['Servir', 'Sirva douradas com queijo puxa.', null]]
    },
    {
      title: 'Torresmo Crocante Sequinho na Airfryer sem Espirrar Óleo',
      sub: 'airfryer', diff: 'easy', prep: 8, cook: 30, cal: 580, p: 36, c: 0, fib: 0, f: 49, prem: true,
      tags: ['airfryer', 'torresmo', 'pururuca', 'petisco', 'mineiro'],
      tip: 'Passe bicarbonato de sódio com vinagre na pele para pururucar perfeitamente.',
      ings: [['Pancetta suína em cubos com couro', 500, 'g', 'proteínas'], ['Sal refinado e pitada de bicarbonato', 1, 'colher de sopa', 'temperos']],
      steps: [['Temperar couro', 'Esfregue o sal e bicarbonato no couro bem seco.', 120], ['Desidratar', 'Asse a 160°C por 20 minutos.', 1200], ['Pururucar a 200°C', 'Aumente para 200°C por 10 minutos até estourar pururuca.', 600]]
    },
    {
      title: 'Espetos de Camarão com Bacon na Airfryer',
      sub: 'airfryer', diff: 'easy', prep: 10, cook: 10, cal: 410, p: 38, c: 1, fib: 0, f: 29, prem: false,
      tags: ['airfryer', 'camarão', 'bacon', 'espetinho'],
      tip: 'Enrole meia fatia de bacon fino ao redor de cada camarão rosa grande.',
      ings: [['Camarões rosa grandes limpos', 400, 'g', 'proteínas'], ['Fatias finas de bacon', 8, 'fatias', 'proteínas'], ['Pimenta-do-reino moída', 1, 'pitada', 'temperos']],
      steps: [['Enrolar camarões', 'Prenda uma tira de bacon ao redor de cada camarão com palito.', 240], ['Airfryer', 'Asse a 190°C por 9 a 10 minutos até o bacon dourar.', 600], ['Servir crocante', 'Apresente com gomos de limão.', null]]
    },
    {
      title: 'Filé de Salmão com Crosta Crocante de Ervas na Airfryer',
      sub: 'airfryer', diff: 'easy', prep: 5, cook: 10, cal: 450, p: 39, c: 1, fib: 0, f: 32, prem: false,
      tags: ['airfryer', 'salmão', 'ervas', '10_minutos'],
      tip: 'A cesta de ar quente deixa a pele ultra crocante e o centro tenro e suculento.',
      ings: [['Filés de salmão com pele', 400, 'g', 'proteínas'], ['Manteiga derretida com dill e alho', 25, 'g', 'despensa'], ['Sal marinho e raspas de limão', 1, 'colher de sopa', 'temperos']],
      steps: [['Pincelar salmão', 'Passe a manteiga de ervas sobre a carne do peixe.', 60], ['Airfryer a 190°C', 'Asse com a pele voltada para baixo por 9 minutos.', 540], ['Servir', 'Apresente fumegante.', null]]
    },
    {
      title: 'Asinhas de Frango Estilo Buffalo Wings sem Farinha na Airfryer',
      sub: 'airfryer', diff: 'easy', prep: 8, cook: 22, cal: 480, p: 40, c: 2, fib: 0, f: 35, prem: false,
      tags: ['airfryer', 'buffalo_wings', 'picante', 'petisco'],
      tip: 'Envolva as asinhas quentes na manteiga batida com molho de pimenta após assar.',
      ings: [['Meios de asinhas de frango (tulipas)', 600, 'g', 'proteínas'], ['Manteiga derretida batida com molho de pimenta caiena', 40, 'g', 'despensa'], ['Sal e alho em pó', 1, 'colher de sopa', 'temperos']],
      steps: [['Assar as asas', 'Coloque as tulipas temperadas a 190°C por 20 minutos.', 1200], ['Banhar em molho', 'Transfira para tigela e envolva no molho de pimenta com manteiga.', 60], ['Servir', 'Acompanhe com molho blue cheese.', null]]
    },
    {
      title: 'Bifes de Picanha Fatiados na Airfryer no Ponto Perfeito',
      sub: 'airfryer', diff: 'easy', prep: 4, cook: 10, cal: 540, p: 46, c: 0, fib: 0, f: 40, prem: false,
      tags: ['airfryer', 'picanha', 'churrasco_prático', 'suculento'],
      tip: 'Pré-aqueça a airfryer na temperatura máxima por 5 minutos para simular a grelha de churrasco.',
      ings: [['Bifes altos de picanha de 2 dedos', 450, 'g', 'proteínas'], ['Sal de parrilla', 1, 'colher de sopa', 'temperos']],
      steps: [['Pré-aquecer airfryer', 'Aqueça a 200°C vazia por 5 minutos.', 300], ['Assar bifes', 'Coloque a carne e asse por 5 minutos de um lado e 4 do outro.', 540], ['Descansar', 'Repouse 2 minutos e sirva fatiada.', 120]]
    },
    {
      title: 'Brócolis e Couve-Flor Tostadinhos com Parmesão na Airfryer',
      sub: 'airfryer', diff: 'easy', prep: 5, cook: 10, cal: 260, p: 12, c: 5, fib: 3, f: 21, prem: false,
      tags: ['airfryer', 'vegetais_tostados', 'parmesão', 'crocante'],
      tip: 'A circulação rápida de ar tosta os floretes dando notas amendoadas deliciosas.',
      ings: [['Floretes de brócolis e couve-flor misturados', 300, 'g', 'vegetais'], ['Queijo parmesão ralado grosso', 50, 'g', 'laticínios'], ['Azeite de oliva e alho em pó', 25, 'ml', 'despensa']],
      steps: [['Temperar vegetais', 'Envolva os legumes no azeite, alho e sal.', 60], ['Airfryer', 'Asse a 190°C por 8 minutos sacudindo a cesta.', 480], ['Polvilhar queijo', 'Salpique o queijo parmesão e asse mais 2 minutos até gratinar.', 120]]
    },
    {
      title: 'Linguiça Toscana Aperitivo com Queijo Provolone na Airfryer',
      sub: 'airfryer', diff: 'easy', prep: 5, cook: 15, cal: 490, p: 36, c: 1, fib: 0, f: 38, prem: false,
      tags: ['airfryer', 'linguiça', 'provolone', 'petisco'],
      tip: 'Abra a linguiça ao meio como canoa e cubra de fatias de provolone nos 3 minutos finais.',
      ings: [['Gomos de linguiça toscana artesanal', 400, 'g', 'proteínas'], ['Fatias de queijo provolone', 60, 'g', 'laticínios'], ['Chimichurri seco', 1, 'colher de café', 'temperos']],
      steps: [['Assar linguiça', 'Asse a 180°C por 12 minutos virando.', 720], ['Abrir e cobrir de queijo', 'Abra as linguiças, coloque o provolone e asse a 200°C por 3 minutos.', 180], ['Servir', 'Apresente borbulhante.', null]]
    },
    {
      title: 'Cogumelos Portobello Recheados com Gorgonzola e Bacon na Airfryer',
      sub: 'airfryer', diff: 'easy', prep: 8, cook: 10, cal: 360, p: 14, c: 4, fib: 2, f: 32, prem: true,
      tags: ['airfryer', 'portobello', 'gorgonzola', 'bacon', 'gourmet'],
      tip: 'Retire o talo central do cogumelo e use a cavidade como tigela para o queijo.',
      ings: [['Cogumelos Portobello médios limpos', 4, 'unidades', 'vegetais'], ['Queijo gorgonzola amassado', 80, 'g', 'laticínios'], ['Bacon picado frito', 40, 'g', 'proteínas'], ['Azeite de oliva', 15, 'ml', 'despensa']],
      steps: [['Rechear cogumelos', 'Coloque o queijo gorgonzola e bacon dentro dos cogumelos.', 180], ['Airfryer', 'Asse a 180°C por 10 minutos até o cogumelo amaciar e o queijo borbulhar.', 600], ['Servir', 'Sirva quente como entrada nobre.', null]]
    },
    {
      title: 'Espetinhos de Coração de Frango com Alho na Airfryer',
      sub: 'airfryer', diff: 'easy', prep: 8, cook: 12, cal: 410, p: 44, c: 1, fib: 0, f: 26, prem: false,
      tags: ['airfryer', 'coração_de_frango', 'churrasco', 'petisco'],
      tip: 'Marine os coraçõezinhos com alho, sal e chimichurri para sabor autêntico de espetinho.',
      ings: [['Corações de frango limpos', 450, 'g', 'proteínas'], ['Alho amassado com azeite', 30, 'g', 'vegetais'], ['Sal grosso moído e pimenta', 1, 'colher de sopa', 'temperos']],
      steps: [['Temperar', 'Envolva os corações no tempero por 5 minutos.', 300], ['Assar na cesta', 'Asse a 190°C por 12 minutos sacudindo na metade.', 720], ['Servir suculento', 'Sirva fumegante com limão.', null]]
    },
    {
      title: 'Tiras de Tilápia Empanadas no Queijo Parmesão Crocante na Airfryer',
      sub: 'airfryer', diff: 'easy', prep: 10, cook: 10, cal: 410, p: 42, c: 2, fib: 0, f: 26, prem: false,
      tags: ['airfryer', 'peixe_empanado', 'parmesão', 'crocante'],
      tip: 'Passe as tiras de peixe na maionese antes do queijo ralado para criar uma casquinha dourada perfeita.',
      ings: [['Tiras de filé de tilápia', 400, 'g', 'proteínas'], ['Queijo parmesão ralado fino', 70, 'g', 'laticínios'], ['Maionese caseira para fixar', 30, 'g', 'laticínios'], ['Raspas de limão e páprica', 1, 'colher de café', 'temperos']],
      steps: [['Empanar', 'Passe a tilápia na maionese e depois aperte no queijo parmesão temperado.', 240], ['Airfryer', 'Asse a 200°C por 9 minutos até dourar e crocitar.', 540], ['Servir', 'Acompanhe com molho tártaro caseiro.', null]]
    },

    // 43-52: Sem Fogão (10)
    {
      title: 'Carpaccio Bovino Nobre com Alcaparras, Rúcula e Molho de Mostarda',
      sub: 'sem_fogao', diff: 'easy', prep: 8, cook: 0, cal: 360, p: 32, c: 2, fib: 1, f: 25, prem: false,
      tags: ['sem_fogão', 'carpaccio', 'alcaparras', 'rúcula', 'express'],
      tip: 'Monte o prato diretamente da geladeira e sirva com fatias finas de pão cetogênico tostado.',
      ings: [['Fatias ultrafinas de carpaccio bovino', 200, 'g', 'proteínas'], ['Alcaparras drenadas', 2, 'colheres de sopa', 'temperos'], ['Queijo parmesão em lascas', 40, 'g', 'laticínios'], ['Folhas de rúcula fresca', 50, 'g', 'vegetais'], ['Molho clássico de azeite, mostarda e limão', 30, 'ml', 'despensa']],
      steps: [['Dispor carpaccio', 'Forre o prato raso com as lâminas de carne.', 120], ['Centro de rúcula', 'Acomode a rúcula no miolo e espalhe as alcaparras.', 60], ['Regar molho', 'Despeje o molho e as lascas de parmesão.', null]]
    },
    {
      title: 'Tábua Nobre de Queijos Maturados com Presunto Parma e Castanhas',
      sub: 'sem_fogao', diff: 'easy', prep: 8, cook: 0, cal: 520, p: 34, c: 3, fib: 1, f: 42, prem: true,
      tags: ['sem_fogão', 'tábua_de_frios', 'parma', 'queijo_maturado', 'petisco'],
      tip: 'Retire os queijos da geladeira 20 minutos antes para que os aromas amanteigados atinjam a plenitude.',
      ings: [['Fatias de presunto tipo Parma artesanal', 100, 'g', 'proteínas'], ['Queijo Parmesão ou Manchego em lascas', 80, 'g', 'laticínios'], ['Queijo Brie ou Camembert', 80, 'g', 'laticínios'], ['Castanhas de caju e nozes pecã', 40, 'g', 'despensa'], ['Azeitonas pretas carnudas', 40, 'g', 'vegetais']],
      steps: [['Compor a tábua', 'Arrume as dobras de presunto Parma e as fatias de queijo em leque.', 240], ['Adicionar castanhas e azeitonas', 'Preencha os vãos com as castanhas e azeitonas.', 120], ['Servir imediatamente', 'Apresente como almoço leve ou jantar elegante sem fogão.', null]]
    },
    {
      title: 'Tartar de Salmão Fresco com Abacate em Cubos e Flor de Sal',
      sub: 'sem_fogao', diff: 'easy', prep: 12, cook: 0, cal: 420, p: 34, c: 4, fib: 3, f: 31, prem: true,
      tags: ['sem_fogão', 'tartar', 'salmão', 'abacate', 'fresco'],
      tip: 'Pique o salmão na faca e misture com azeite de oliva, raspas de limão e ciboulette fresca.',
      ings: [['Salmão fresco limpo cortado em cubinhos', 350, 'g', 'proteínas'], ['Abacate em cubinhos pequenos', 120, 'g', 'vegetais'], ['Azeite de oliva extravirgem', 25, 'ml', 'despensa'], ['Ciboulette picadinha e flor de sal', 1, 'colher de sopa', 'temperos']],
      steps: [['Picar salmão e abacate', 'Corte ambos em cubos uniformes delicadamente.', 300], ['Temperar', 'Misture com o azeite, ciboulette e flor de sal.', 120], ['Moldar no aro', 'Disponha no prato e retire o aro com cuidado.', 60]]
    },
    {
      title: 'Patê Proteico de Atum com Maionese de Azeite e Folhas de Endívia',
      sub: 'sem_fogao', diff: 'easy', prep: 6, cook: 0, cal: 360, p: 34, c: 3, fib: 2, f: 24, prem: false,
      tags: ['sem_fogão', 'patê_de_atum', 'endívia', 'canapés', 'rápido'],
      tip: 'Use as folhas de endívia como barquinhas crocantes e refrescantes sem carboidrato.',
      ings: [['Atum sólido em azeite', 200, 'g', 'proteínas'], ['Maionese caseira rica em azeite', 50, 'g', 'laticínios'], ['Folhas firmes de endívia ou alface romana', 100, 'g', 'vegetais'], ['Cebolinha fresca e raspas de limão', 1, 'colher de sopa', 'temperos']],
      steps: [['Fazer patê', 'Amasse o atum com a maionese, cebolinha e limão com um garfo.', 180], ['Rechear folhas', 'Distribua colheradas generosas dentro das folhas de endívia.', 120], ['Servir frio', 'Apresente como refeição expressa crocante.', null]]
    },
    {
      title: 'Salada Caprese Rápida com Muçarela de Búfala e Pesto Pronto',
      sub: 'sem_fogao', diff: 'easy', prep: 5, cook: 0, cal: 370, p: 18, c: 4, fib: 1, f: 32, prem: false,
      tags: ['sem_fogão', 'caprese', 'muçarela_de_búfala', 'pesto', 'express'],
      tip: 'Almoço fresco montado em 5 minutos exatos.',
      ings: [['Bolas de muçarela de búfala fresca fatiadas', 180, 'g', 'laticínios'], ['Tomates maduros fatiados', 180, 'g', 'vegetais'], ['Molho pesto de manjericão', 40, 'g', 'despensa'], ['Folhas de manjericão fresco e azeite', 15, 'ml', 'despensa']],
      steps: [['Fatiar ingredientes', 'Corte o queijo e os tomates.', 120], ['Arrumar no prato', 'Alterne as fatias formando espiral colorida.', 120], ['Regar pesto', 'Despeje o pesto e o azeite com flor de sal.', null]]
    },
    {
      title: 'Rolls de Presunto Cru com Cream Cheese, Rúcula e Nozes',
      sub: 'sem_fogao', diff: 'easy', prep: 8, cook: 0, cal: 380, p: 24, c: 3, fib: 1, f: 31, prem: false,
      tags: ['sem_fogão', 'presunto_cru', 'cream_cheese', 'canapés'],
      tip: 'Espalhe o cream cheese sobre a fatia de presunto cru e enrole com a rúcula e nozes dentro.',
      ings: [['Fatias de presunto cru tipo Parma', 140, 'g', 'proteínas'], ['Cream cheese com ervas', 80, 'g', 'laticínios'], ['Folhas de rúcula fresca', 40, 'g', 'vegetais'], ['Nozes picadas crocantes', 30, 'g', 'despensa']],
      steps: [['Espalhar recheio', 'Passe cream cheese nas lâminas de presunto.', 180], ['Adicionar rúcula e nozes', 'Coloque as folhinhas e nozes picadas.', 120], ['Enrolar', 'Enrole como rocambolinhos e sirva imediatamente.', 120]]
    },
    {
      title: 'Sashimi de Salmão Fresco com Azeite Trufado e Flor de Sal',
      sub: 'sem_fogao', diff: 'easy', prep: 8, cook: 0, cal: 380, p: 34, c: 0, fib: 0, f: 28, prem: true,
      tags: ['sem_fogão', 'sashimi', 'salmão', 'trufas', 'japonês'],
      tip: 'Corte fatias precisas e mantenha sobre gelo até o segundo de servir.',
      ings: [['Lombo de salmão fresco de peixaria selecionada', 350, 'g', 'proteínas'], ['Azeite aromatizado com trufas brancas', 15, 'ml', 'despensa'], ['Flor de sal e cebolinha francesa fininha', 1, 'colher de sopa', 'temperos']],
      steps: [['Fatiar peixe', 'Fatie em lâminas de 5mm com faca afiada.', 240], ['Dispor no prato', 'Arrume em leque no prato frio.', 120], ['Gota de azeite trufado', 'Pincele o azeite e finalize com flor de sal e cebolinha.', null]]
    },
    {
      title: 'Salada de Ovos Caipiras com Abacate Amassado e Limão Siciliano',
      sub: 'sem_fogao', diff: 'easy', prep: 6, cook: 0, cal: 390, p: 20, c: 4, fib: 3, f: 33, prem: false,
      tags: ['sem_fogão', 'ovos', 'abacate', 'guacamole_de_ovo', 'nutritivo'],
      tip: 'Use ovos já cozidos na geladeira para uma refeição ultra rápida e rica em colina.',
      ings: [['Ovos caipiras cozidos descascados picados', 3, 'unidades', 'proteínas'], ['Abacate maduro amassado com garfo', 100, 'g', 'vegetais'], ['Suco de limão siciliano e azeite extravirgem', 20, 'ml', 'despensa'], ['Flor de sal e pimenta moída', 1, 'colher de café', 'temperos']],
      steps: [['Amassar abacate', 'Amasse o abacate com o limão, azeite e sal.', 120], ['Incorporar ovos', 'Misture os ovos cozidos picados mantendo textura rústica.', 120], ['Servir', 'Aprecie puro ou sobre folhas verdes crocantes.', null]]
    },
    {
      title: 'Poke de Atum Cru com Pepino em Espiral e Gergelim Tostado',
      sub: 'sem_fogao', diff: 'easy', prep: 8, cook: 0, cal: 390, p: 40, c: 3, fib: 1, f: 24, prem: false,
      tags: ['sem_fogão', 'poke', 'atum', 'pepino', 'havaiano'],
      tip: 'O pepino japonês espiralizado forma uma base crocante perfeita para os cubos de peixe.',
      ings: [['Atum fresco em cubos para sashimi', 350, 'g', 'proteínas'], ['Pepino japonês espiralizado em fios', 120, 'g', 'vegetais'], ['Óleo de gergelim torrado e shoyu sem açúcar', 25, 'ml', 'despensa'], ['Sementes de gergelim preto e branco', 15, 'g', 'despensa']],
      steps: [['Preparar fios de pepino', 'Disponha o pepino no fundo da tigela.', 120], ['Temperar atum', 'Envolva o atum no óleo de gergelim e shoyu.', 120], ['Montar bowl', 'Coloque o peixe sobre o pepino e salpique o gergelim.', null]]
    },
    {
      title: 'Canapés de Salmão Defumado com Cream Cheese no Pepino em Rodelas',
      sub: 'sem_fogao', diff: 'easy', prep: 6, cook: 0, cal: 320, p: 22, c: 3, fib: 1, f: 25, prem: false,
      tags: ['sem_fogão', 'canapés', 'salmão_defumado', 'pepino', 'festa'],
      tip: 'As rodelas grossas de pepino japonês servem como base crocante para o salmão defumado.',
      ings: [['Fatias de salmão defumado', 150, 'g', 'proteínas'], ['Rodelas grossas de pepino japonês', 150, 'g', 'vegetais'], ['Cream cheese batido com dill', 60, 'g', 'laticínios'], ['Alcaparras drenadas', 1, 'colher de sopa', 'temperos']],
      steps: [['Base de pepino', 'Disponha as rodelas de pepino em prato raso.', 60], ['Colocar cream cheese', 'Aplique uma ponta de cream cheese em cada rodela.', 120], ['Coroar com salmão', 'Acomode uma rosa de salmão defumado e uma alcaparra.', 120]]
    },

    // 53-60: Wraps e Rolinhos (8)
    {
      title: 'Wrap Cetogênico de Alface Romana com Peito de Frango, Bacon e Ranch',
      sub: 'wraps_e_rolinhos', diff: 'easy', prep: 8, cook: 0, cal: 420, p: 38, c: 3, fib: 2, f: 29, prem: false,
      tags: ['wraps', 'alface_romana', 'frango', 'bacon', 'ranch'],
      tip: 'Escolha folhas grandes e firmes de alface romana para enrolar com facilidade como um taco.',
      ings: [['Folhas grandes de alface romana lavadas e secas', 4, 'folhas', 'vegetais'], ['Frango cozido desfiado', 250, 'g', 'proteínas'], ['Bacon picado frito crocante', 40, 'g', 'proteínas'], ['Molho ranch cremoso rico em nata', 40, 'ml', 'laticínios'], ['Cebolinha fresca', 1, 'colher de sopa', 'temperos']],
      steps: [['Preparar folhas', 'Acomode as folhas de alface em tábua.', 60], ['Preencher recheio', 'Distribua o frango, bacon crocante e molho ranch.', 180], ['Enrolar', 'Feche as laterais e dobre como wrap.', 60]]
    },
    {
      title: 'Rolinhos de Rosbife de Mignon com Rúcula Selvagem e Queijo Parmesão',
      sub: 'wraps_e_rolinhos', diff: 'easy', prep: 8, cook: 0, cal: 390, p: 40, c: 2, fib: 1, f: 25, prem: true,
      tags: ['wraps', 'rosbife', 'rúcula', 'parmesão', 'gourmet'],
      tip: 'Pincele azeite com mostarda Dijon nas fatias de carne antes de enrolar com as folhas de rúcula.',
      ings: [['Fatias de rosbife caseiro de mignon', 250, 'g', 'proteínas'], ['Folhas de rúcula fresca', 60, 'g', 'vegetais'], ['Bastões ou lascas de queijo parmesão', 50, 'g', 'laticínios'], ['Mostarda Dijon e azeite extravirgem', 20, 'ml', 'despensa']],
      steps: [['Abrir fatias', 'Disponha as lâminas de rosbife na tábua.', 120], ['Rechear', 'Coloque a rúcula temperada e a lasca de parmesão.', 120], ['Enrolar charutinhos', 'Enrole firmemente e disponha em travessa.', 120]]
    },
    {
      title: 'Wrap de Queijo Derretido na Frigideira com Carne Seca e Catupiry',
      sub: 'wraps_e_rolinhos', diff: 'medium', prep: 10, cook: 6, cal: 490, p: 44, c: 3, fib: 1, f: 35, prem: false,
      tags: ['wraps', 'casquinha_de_queijo', 'carne_seca', 'catupiry'],
      tip: 'Derreta queijo muçarela ralado em círculo na frigideira até formar uma casquinha dourada flexível.',
      ings: [['Queijo muçarela ralado para o wrap', 100, 'g', 'laticínios'], ['Carne seca desfiada refogada', 150, 'g', 'proteínas'], ['Requeijão cremoso legítimo', 40, 'g', 'laticínios'], ['Cheiro-verde picadinho', 1, 'colher de sopa', 'temperos']],
      steps: [['Fazer o disco de queijo', 'Derreta o queijo na frigideira antiaderente até borbulhar e dourar a borda.', 180], ['Rechear na panela', 'Coloque a carne seca e requeijão sobre metade do disco.', 60], ['Dobrar e enrolar', 'Dobre ao meio e retire crocante da panela.', 60]]
    },
    {
      title: 'Rolinhos de Abobrinha Grelhada Recheados com Queijo de Cabra e Nozes',
      sub: 'wraps_e_rolinhos', diff: 'medium', prep: 12, cook: 5, cal: 340, p: 14, c: 4, fib: 2, f: 30, prem: true,
      tags: ['wraps', 'abobrinha', 'queijo_de_cabra', 'nozes', 'vegetariano_keto'],
      tip: 'Grelhe as fatias longitudinais de abobrinha rapidamente para amaciarem antes de enrolar.',
      ings: [['Fatias finas no comprimento de abobrinha', 2, 'unidades', 'vegetais'], ['Queijo de cabra cremoso', 80, 'g', 'laticínios'], ['Nozes picadas tostadas', 30, 'g', 'despensa'], ['Azeite de oliva e tomilho fresco', 20, 'ml', 'despensa']],
      steps: [['Grelhar fatias', 'Doure as fitas de abobrinha por 1 minuto de cada lado na grelha.', 120], ['Rechear com queijo', 'Passe o queijo de cabra e salpique as nozes.', 120], ['Enrolar', 'Enrole cada tira formando canelones vegetais frios.', 120]]
    },
    {
      title: 'Wrap de Folhas de Couve Cruas com Hambúrguer de Fraldinha e Cheddar',
      sub: 'wraps_e_rolinhos', diff: 'easy', prep: 8, cook: 8, cal: 530, p: 42, c: 4, fib: 2, f: 40, prem: false,
      tags: ['wraps', 'couve', 'burger_wrap', 'cheddar', 'sem_pão'],
      tip: 'Corte a parte dura do talo central da folha de couve para dobrar como envelope sem quebrar.',
      ings: [['Folhas grandes de couve-manteiga', 2, 'folhas', 'vegetais'], ['Hambúrguer de fraldinha grelhado com cheddar', 200, 'g', 'proteínas'], ['Maionese com bacon e mostarda', 30, 'g', 'laticínios'], ['Tomate em rodelas', 40, 'g', 'vegetais']],
      steps: [['Grelhar hambúrguer', 'Doure a carne e derreta o cheddar por cima.', 360], ['Montar na folha', 'Coloque o hambúrguer no centro da couve com maionese e tomate.', 60], ['Fechar envelope', 'Dobre as 4 pontas da folha de couve formando um sanduíche perfeito.', 60]]
    },
    {
      title: 'Rolinhos de Salmão Fresco Recheados com Cream Cheese e Pepino em Fios',
      sub: 'wraps_e_rolinhos', diff: 'medium', prep: 12, cook: 0, cal: 390, p: 32, c: 3, fib: 1, f: 29, prem: true,
      tags: ['wraps', 'salmão_fresco', 'cream_cheese', 'sushi_keto', 'sem_arroz'],
      tip: 'Enrole as fatias de salmão sashimi com auxílio de esteirinha ou filme plástico.',
      ings: [['Fatias largas de salmão fresco para sashimi', 250, 'g', 'proteínas'], ['Cream cheese firme', 70, 'g', 'laticínios'], ['Fios fininhos de pepino japonês', 50, 'g', 'vegetais'], ['Gergelim torrado e cebolinha', 1, 'colher de sopa', 'temperos']],
      steps: [['Dispor fatias', 'Coloque as lâminas de salmão alinhadas no filme plástico.', 180], ['Rechear', 'Espalhe o cream cheese e os fios de pepino.', 120], ['Enrolar e cortar', 'Enrole firme como rocambole japonês e corte em rodelas.', 180]]
    },
    {
      title: 'Wrap Cetogênico de Presunto Parma com Muçarela de Búfala e Manjericão',
      sub: 'wraps_e_rolinhos', diff: 'easy', prep: 6, cook: 0, cal: 410, p: 28, c: 2, fib: 1, f: 33, prem: false,
      tags: ['wraps', 'parma', 'muçarela_de_búfala', 'manjericão', 'express'],
      tip: 'Um wrap italiano sem farinha nem fogão.',
      ings: [['Fatias de presunto Parma', 120, 'g', 'proteínas'], ['Bastões de muçarela de búfala', 120, 'g', 'laticínios'], ['Folhas frescas de manjericão gigante', 8, 'folhas', 'vegetais'], ['Fio de azeite extravirgem', 15, 'ml', 'despensa']],
      steps: [['Enrolar queijo', 'Envolva os bastões de queijo com as folhas de manjericão e o presunto Parma.', 180], ['Regar azeite', 'Pincele azeite com flor de sal na apresentação.', 60], ['Servir', 'Aprecie fresco e aromático.', null]]
    },
    {
      title: 'Wrap Crocante de Queijo Provolone com Tiras de Mignon e Chimichurri',
      sub: 'wraps_e_rolinhos', diff: 'medium', prep: 10, cook: 8, cal: 520, p: 46, c: 2, fib: 0, f: 38, prem: true,
      tags: ['wraps', 'provolone', 'filé_mignon', 'chimichurri', 'luxo'],
      tip: 'A casca de provolone tostado na frigideira fica crocante por fora e maleável para enrolar recheios quentes.',
      ings: [['Fatias finas de queijo provolone', 100, 'g', 'laticínios'], ['Tiras de filé mignon salteadas', 180, 'g', 'proteínas'], ['Molho chimichurri caseiro', 30, 'ml', 'temperos']],
      steps: [['Casquinha de provolone', 'Funda as fatias de provolone na frigideira até formar disco dourado.', 180], ['Rechear carne', 'Coloque a carne e o chimichurri sobre o disco.', 60], ['Enrolar quente', 'Enrole antes que o queijo esfrie e endureça.', 60]]
    }
  ];

  return items.map((r) => ({
    title: r.title,
    shortDesc: `${r.title} perfeito para uma refeição prática, rápida e 100% cetogênica.`,
    desc: `Prato elaborado para rotinas produtivas e alta praticidade sem abrir mão de ingredientes nobres e cetose profunda.`,
    category: 'quick_meals',
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
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    ingredients: r.ings.map(([name, qty, unit, cat]) => ({ name, qty, unit, cat })),
    steps: r.steps.map(([title, desc, timer]) => ({ title, desc, timer })),
    chefTip: r.tip
  })).slice(0, 60);
}
