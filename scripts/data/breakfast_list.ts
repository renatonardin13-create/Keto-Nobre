import { RawRecipeInput } from '../recipe_helper';

export const BREAKFAST_RECIPES: RawRecipeInput[] = [
  // 1-20: Ovos & Omeletes
  {
    title: 'Omelete Francesa com Gruyère e Ciboulette',
    shortDesc: 'Omelete aveludada com centro cremoso, queijo gruyère suíço e ervas frescas.',
    desc: 'Clássico da gastronomia francesa com textura macia e dourado uniforme na manteiga ghee.',
    category: 'breakfast',
    subcategory: 'omeletes',
    difficulty: 'easy',
    prepTime: 5,
    cookTime: 7,
    servings: 2,
    calories: 380,
    protein: 26,
    carbs: 2,
    fiber: 0,
    fat: 30,
    isPremium: false,
    tags: ['café_da_manhã', 'baixo_carboidrato', 'rápida', '15_minutos', 'iniciante'],
    image: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { name: 'Ovos caipiras frescos', qty: 4, unit: 'unidades', cat: 'proteínas' },
      { name: 'Queijo gruyère ralado grosso', qty: 60, unit: 'g', cat: 'laticínios' },
      { name: 'Manteiga ghee nobre', qty: 20, unit: 'g', cat: 'despensa' },
      { name: 'Ciboulette fresca picada', qty: 2, unit: 'colheres de sopa', cat: 'temperos' },
      { name: 'Flor de sal e pimenta branca', qty: 1, unit: 'pitada', cat: 'temperos' }
    ],
    steps: [
      { title: 'Bater os ovos', desc: 'Bata os ovos com um garfo até misturar gemas e claras sem espumar em excesso.', timer: 60, tip: 'Não incorpore muito ar para manter a textura cremosa.' },
      { title: 'Aquecer a frigideira', desc: 'Derreta a manteiga em fogo baixo numa frigideira antiaderente de 20cm.', timer: 60 },
      { title: 'Cozinhar mexendo suavemente', desc: 'Despeje os ovos e mexa em círculos rápidos com espátula de silicone até começar a firmar o fundo.', timer: 180, tip: 'Mantenha o fogo brando para não dourar demais.' },
      { title: 'Rechear e enrolar', desc: 'Espalhe o queijo gruyère no centro e enrole com a espátula delicadamente em formato clássico.', timer: 60 },
      { title: 'Finalização', desc: 'Passe para o prato, pincele um fio de manteiga e salpique a ciboulette picada.', timer: null }
    ],
    chefTip: 'O segredo da omelete perfeita é retirá-la do fogo enquanto o centro ainda estiver ligeiramente brilhante e úmido.'
  },
  {
    title: 'Shakshuka Cetogênica com Queijo Feta e Coentro',
    shortDesc: 'Ovos caipiras pochados lentamente em molho rústico de tomates assados, cominho e pimentão.',
    desc: 'Prato aromático de inspiração mediterrânea, rico em gorduras boas e servido fumegante na frigideira de ferro.',
    category: 'breakfast',
    subcategory: 'ovos',
    difficulty: 'medium',
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    calories: 340,
    protein: 20,
    carbs: 6,
    fiber: 2,
    fat: 26,
    isPremium: true,
    tags: ['café_da_manhã', 'mediterrâneo', 'baixo_carboidrato', 'ferro', 'vegetariano'],
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { name: 'Ovos caipiras', qty: 4, unit: 'unidades', cat: 'proteínas' },
      { name: 'Tomates pelados em cubos', qty: 200, unit: 'g', cat: 'vegetais' },
      { name: 'Pimentão vermelho em tiras finas', qty: 50, unit: 'g', cat: 'vegetais' },
      { name: 'Queijo feta esfarelado', qty: 50, unit: 'g', cat: 'laticínios' },
      { name: 'Azeite de oliva extravirgem', qty: 2, unit: 'colheres de sopa', cat: 'despensa' },
      { name: 'Cominho em pó e páprica defumada', qty: 1, unit: 'colher de chá', cat: 'temperos' },
      { name: 'Coentro fresco picado', qty: 2, unit: 'colheres de sopa', cat: 'temperos' }
    ],
    steps: [
      { title: 'Refogar a base', desc: 'Aqueça o azeite na frigideira de ferro e refogue o pimentão com as especiarias aromáticas.', timer: 180 },
      { title: 'Reduzir o molho', desc: 'Junte os tomates picados e cozinhe em fogo brando até engrossar ligeiramente.', timer: 300, tip: 'Abafe a panela para concentrar os aromas.' },
      { title: 'Adicionar os ovos', desc: 'Abra quatro cavidades no molho e quebre um ovo em cada espaço.', timer: 60 },
      { title: 'Pochê sob tampa', desc: 'Tampe a frigideira e cozinhe até a clara ficar firme e a gema líquida.', timer: 240 },
      { title: 'Finalizar', desc: 'Espalhe o queijo feta por cima e decore com folhas frescas de coentro.', timer: null }
    ],
    chefTip: 'Sirva diretamente na frigideira de ferro quente para preservar o calor durante todo o desjejum.'
  },
  {
    title: 'Ovos Mexidos Trufados com Salmão Curado',
    shortDesc: 'Ovos cremosos preparados em banho-maria lento com azeite de trufas brancas e fatias de salmão.',
    desc: 'Uma combinação nobre para manhãs especiais, com textura aveludada sem grumos e toque sofisticado.',
    category: 'breakfast',
    subcategory: 'ovos',
    difficulty: 'easy',
    prepTime: 5,
    cookTime: 10,
    servings: 2,
    calories: 410,
    protein: 30,
    carbs: 1,
    fiber: 0,
    fat: 32,
    isPremium: true,
    tags: ['café_da_manhã', 'sofisticado', 'alto_em_proteína', 'ômega_3', 'premium'],
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { name: 'Ovos caipiras', qty: 4, unit: 'unidades', cat: 'proteínas' },
      { name: 'Salmão defumado ou curado', qty: 80, unit: 'g', cat: 'proteínas' },
      { name: 'Nata fresca ou creme de leite', qty: 30, unit: 'ml', cat: 'laticínios' },
      { name: 'Manteiga sem sal', qty: 25, unit: 'g', cat: 'laticínios' },
      { name: 'Azeite de trufas brancas', qty: 1, unit: 'colher de chá', cat: 'despensa' },
      { name: 'Ciboulette picadinha', qty: 1, unit: 'colher de sopa', cat: 'temperos' }
    ],
    steps: [
      { title: 'Bater suavemente', desc: 'Misture os ovos com a nata fresca e uma pitada sutil de sal.', timer: 60 },
      { title: 'Cozimento lento', desc: 'Derreta a manteiga em panela pequena de fundo grosso em fogo mínimo.', timer: 60 },
      { title: 'Mexer constantemente', desc: 'Despeje os ovos e mexa sem parar com espátula, tirando do fogo intermitentemente.', timer: 300, tip: 'Tire a panela do calor a cada 30 segundos para controlar a temperatura.' },
      { title: 'Finalizar fora do fogo', desc: 'Incorpore o azeite trufado e disponha nos pratos.', timer: 30 },
      { title: 'Decorar com salmão', desc: 'Distribua as fatias de salmão curado sobre os ovos e finalize com a ciboulette.', timer: null }
    ],
    chefTip: 'Nunca deixe os ovos mexidos cozinharem até secar na panela; o calor residual finaliza a textura perfeitamente no prato.'
  },
  {
    title: 'Ovos Benedict Keto no Pão de Amêndoas com Molho Holandês',
    shortDesc: 'Ovos pochê perfeitos sobre fatias de pão cetogênico, presunto de parma e molho holandês aveludado.',
    desc: 'O ápice do brunch nobre sem farinha de trigo, com gema cremosa e molho emulsionado com manteiga e limão.',
    category: 'breakfast',
    subcategory: 'ovos',
    difficulty: 'hard',
    prepTime: 15,
    cookTime: 12,
    servings: 2,
    calories: 520,
    protein: 24,
    carbs: 4,
    fiber: 2,
    fat: 46,
    isPremium: true,
    tags: ['brunch', 'café_da_manhã', 'clássico', 'premium', 'cetogênica'],
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { name: 'Ovos caipiras para o pochê', qty: 4, unit: 'unidades', cat: 'proteínas' },
      { name: 'Gemas para o molho holandês', qty: 2, unit: 'unidades', cat: 'proteínas' },
      { name: 'Manteiga clarificada derretida morna', qty: 100, unit: 'g', cat: 'laticínios' },
      { name: 'Suco de limão siciliano fresco', qty: 1, unit: 'colher de sopa', cat: 'temperos' },
      { name: 'Fatias de pão keto de amêndoas tostadas', qty: 2, unit: 'unidades', cat: 'despensa' },
      { name: 'Presunto cru tipo Parma ou bacon artesanal', qty: 4, unit: 'fatias', cat: 'proteínas' },
      { name: 'Vinagre de maçã para o pochê', qty: 1, unit: 'colher de sopa', cat: 'despensa' }
    ],
    steps: [
      { title: 'Preparar o molho holandês', desc: 'Bata as 2 gemas com o limão em banho-maria brando até espumar. Despeje a manteiga morna em fio constante emulsionando.', timer: 300, tip: 'A água do banho-maria não pode ferver vigorosamente.' },
      { title: 'Fazer o ovo pochê', desc: 'Em água fervente com vinagre, crie um redemoinho suave e deslize os ovos um a um por 3 minutos.', timer: 180 },
      { title: 'Montar a base', desc: 'Coloque as fatias de pão keto tostadas nos pratos e cubra com o presunto cru.', timer: 60 },
      { title: 'Completar o prato', desc: 'Disponha os ovos pochê escorridos sobre o presunto.', timer: 30 },
      { title: 'Cobrir com molho', desc: 'Banhe com o molho holandês morno e salpique pimenta preta moída.', timer: null }
    ],
    chefTip: 'Mantenha o molho holandês em local morno enquanto prepara os ovos pochê para não talhar a emulsão.'
  },
  {
    title: 'Ovos Assados no Abacate com Bacon Crocante',
    shortDesc: 'Metades de abacate hass recheadas com gemas douradas, bacon em cubinhos e queijo parmesão.',
    desc: 'Superalimento cetogênico assado no forno que combina a cremosidade do abacate com o salgado do bacon.',
    category: 'breakfast',
    subcategory: 'ovos',
    difficulty: 'easy',
    prepTime: 5,
    cookTime: 15,
    servings: 2,
    calories: 460,
    protein: 18,
    carbs: 5,
    fiber: 4,
    fat: 42,
    isPremium: false,
    tags: ['café_da_manhã', 'abacate', 'fácil', 'sem_glúten', 'bacon'],
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { name: 'Abacates médios maduros firmes (tipo Hass)', qty: 2, unit: 'unidades', cat: 'vegetais' },
      { name: 'Ovos pequenos caipiras', qty: 4, unit: 'unidades', cat: 'proteínas' },
      { name: 'Bacon artesanal em cubos fritos', qty: 60, unit: 'g', cat: 'proteínas' },
      { name: 'Queijo parmesão ralado na hora', qty: 30, unit: 'g', cat: 'laticínios' },
      { name: 'Pimenta caiena e sal marinho', qty: 1, unit: 'pitada', cat: 'temperos' },
      { name: 'Cebolinha fresca picada', qty: 1, unit: 'colher de sopa', cat: 'temperos' }
    ],
    steps: [
      { title: 'Preparar os abacates', desc: 'Corte os abacates ao meio, retire o caroço e aumente ligeiramente a cavidade com uma colher.', timer: 120 },
      { title: 'Adicionar os ovos', desc: 'Acomode as metades em uma assadeira e quebre cuidadosamente um ovo dentro de cada cavidade.', timer: 60, tip: 'Se a clara for excessiva, reserve um pouco para não transbordar.' },
      { title: 'Temperar e cobrir', desc: 'Tempere com sal, pimenta caiena, cubinhos de bacon e o parmesão ralado.', timer: 60 },
      { title: 'Assar no forno', desc: 'Asse a 200°C até a clara ficar firme e a gema no ponto desejado.', timer: 900 },
      { title: 'Finalização', desc: 'Retire do forno, salpique a cebolinha fresca e sirva ainda quente.', timer: null }
    ],
    chefTip: 'Use abacates de polpa firme para que mantenham a estrutura perfeitamente estável durante o forno.'
  }
];

// Helper to quickly generate the remaining breakfast recipes programmatically with full culinary diversity
const ADDITIONAL_BREAKFAST: { title: string; sub: string; diff: 'easy' | 'medium' | 'hard'; prep: number; cook: number; cal: number; p: number; c: number; fib: number; f: number; prem: boolean; tags: string[]; tip: string; ings: [string, number, string, any][]; steps: [string, string, number | null][] }[] = [
  // 6-20 Ovos restantes
  {
    title: 'Frittata de Alho-Poró com Queijo Canastra',
    sub: 'ovos', diff: 'easy', prep: 10, cook: 15, cal: 360, p: 22, c: 3, fib: 1, f: 28, prem: false,
    tags: ['café_da_manhã', 'almoço', 'forno', 'queijo_canastra'],
    tip: 'Doure bem o alho-poró na manteiga antes de adicionar os ovos batidos.',
    ings: [['Ovos caipiras', 5, 'unidades', 'proteínas'], ['Queijo Minas Meia Cura ou Canastra ralado', 80, 'g', 'laticínios'], ['Alho-poró fatiado fino', 1, 'xícara', 'vegetais'], ['Manteiga ghee', 20, 'g', 'despensa'], ['Tomilho fresco', 1, 'colher de chá', 'temperos']],
    steps: [['Refogar o alho-poró', 'Aqueça a manteiga e refogue o alho-poró com sal e tomilho até murchar.', 240], ['Juntar os ovos', 'Despeje os ovos batidos na frigideira e misture delicadamente.', 120], ['Forno para gratinar', 'Espalhe o queijo canastra e leve ao forno a 190°C para dourar.', 600]]
  },
  {
    title: 'Ovos Pochê sobre Cogumelos Salteados no Ghee',
    sub: 'ovos', diff: 'medium', prep: 8, cook: 10, cal: 310, p: 18, c: 3, fib: 1, f: 25, prem: true,
    tags: ['café_da_manhã', 'cogumelos', 'rápida', 'vegetariano'],
    tip: 'Use cogumelos frescos e bem secos para que dourem sem soltar líquido.',
    ings: [['Ovos frescos', 3, 'unidades', 'proteínas'], ['Cogumelos Paris fatiados', 150, 'g', 'vegetais'], ['Manteiga ghee com alho', 25, 'g', 'despensa'], ['Salsinha crespa picada', 2, 'colheres de sopa', 'temperos']],
    steps: [['Dourar cogumelos', 'Salteie os cogumelos em fogo alto com a manteiga de alho até dourarem.', 300], ['Fazer o pochê', 'Cozinhe os ovos em água suavemente fervente com vinagre por 3 minutos.', 180], ['Montagem', 'Acomode os cogumelos na base e cubra com os ovos pochê fumegantes.', null]]
  },
  {
    title: 'Omelete de Espinafre com Creme de Ricota e Nozes',
    sub: 'omeletes', diff: 'easy', prep: 7, cook: 8, cal: 350, p: 24, c: 3, fib: 1, f: 27, prem: false,
    tags: ['café_da_manhã', 'vegetariano', 'espinafre', '15_minutos'],
    tip: 'Esprema bem o espinafre cozido para não soltar água dentro da omelete.',
    ings: [['Ovos caipiras', 3, 'unidades', 'proteínas'], ['Espinafre refogado e drenado', 80, 'g', 'vegetais'], ['Creme de ricota fresco', 40, 'g', 'laticínios'], ['Nozes picadas tostadas', 20, 'g', 'despensa'], ['Azeite de oliva', 15, 'ml', 'despensa']],
    steps: [['Bater ovos', 'Bata os ovos com sal e pimenta-do-reino.', 60], ['Frigideira', 'Despeje na frigideira untada com azeite até firmar a base.', 180], ['Rechear', 'Adicione o espinafre, o creme de ricota e as nozes crocantes e feche em meia-lua.', 60]]
  },
  {
    title: 'Ovos Mexidos Cremosos com Crocante de Prosciutto',
    sub: 'ovos', diff: 'easy', prep: 5, cook: 7, cal: 390, p: 25, c: 1, fib: 0, f: 31, prem: true,
    tags: ['café_da_manhã', 'presunto_cru', 'gourmet', 'rápido'],
    tip: 'Toste as fatias de presunto em frigideira seca até ficarem estaladiças.',
    ings: [['Ovos caipiras', 4, 'unidades', 'proteínas'], ['Presunto cru tipo prosciutto', 50, 'g', 'proteínas'], ['Manteiga de primeira qualidade', 25, 'g', 'laticínios'], ['Creme de leite fresco', 20, 'ml', 'laticínios']],
    steps: [['Fazer o crocante', 'Grelhe o presunto cru na frigideira até ficar bem crocante e reserve.', 180], ['Mexer os ovos', 'Cozinhe os ovos batidos com a manteiga e o creme de leite em fogo baixo.', 240], ['Montar', 'Sirva os ovos cremosos salpicados com o presunto estaladiço quebrado.', null]]
  },
  {
    title: 'Frittata de Abobrinha com Gorgonzola e Manjericão',
    sub: 'ovos', diff: 'easy', prep: 10, cook: 12, cal: 330, p: 20, c: 4, fib: 1, f: 26, prem: false,
    tags: ['café_da_manhã', 'abobrinha', 'queijo_azul', 'forno'],
    tip: 'O gorgonzola derrete e cria pontos cremosos intensos na frittata.',
    ings: [['Ovos', 4, 'unidades', 'proteínas'], ['Abobrinha italiana ralada', 120, 'g', 'vegetais'], ['Queijo gorgonzola em pedaços', 50, 'g', 'laticínios'], ['Folhas de manjericão fresco', 10, 'folhas', 'temperos'], ['Azeite extravirgem', 15, 'ml', 'despensa']],
    steps: [['Refogar abobrinha', 'Doure a abobrinha rapidamente no azeite.', 180], ['Incorporar ovos', 'Acrescente os ovos temperados e espalhe o queijo gorgonzola.', 120], ['Tampar', 'Deixe firmar em fogo baixo com tampa até dourar o fundo.', 300]]
  },
  {
    title: 'Ovos ao Forno em Ninhos de Presunto de Parma',
    sub: 'ovos', diff: 'easy', prep: 5, cook: 14, cal: 340, p: 28, c: 1, fib: 0, f: 24, prem: true,
    tags: ['café_da_manhã', 'prático', 'elegante', 'alto_em_proteína'],
    tip: 'Unte as forminhas de muffin com azeite antes de forrar com o presunto.',
    ings: [['Ovos médios', 4, 'unidades', 'proteínas'], ['Presunto cru fatiado', 8, 'fatias', 'proteínas'], ['Queijo parmesão ralado', 20, 'g', 'laticínios'], ['Alecrim fresco picado', 1, 'colher de chá', 'temperos']],
    steps: [['Forrar forminhas', 'Acomode 2 fatias de presunto em cada cavidade formando cestinhas.', 120], ['Adicionar ovos', 'Quebre um ovo dentro de cada ninho e tempere com parmesão e alecrim.', 60], ['Assar', 'Asse a 190°C até as claras estarem brancas e o presunto crocante.', 720]]
  },
  {
    title: 'Omelete de Queijo Brie com Amêndoas Tostadas',
    sub: 'omeletes', diff: 'easy', prep: 6, cook: 6, cal: 420, p: 22, c: 2, fib: 1, f: 36, prem: true,
    tags: ['café_da_manhã', 'queijo_brie', 'amêndoas', 'gourmet'],
    tip: 'Corte o brie em fatias finas para que derreta rapidamente no calor dos ovos.',
    ings: [['Ovos', 3, 'unidades', 'proteínas'], ['Queijo Brie maduro', 60, 'g', 'laticínios'], ['Lâminas de amêndoas tostadas', 20, 'g', 'despensa'], ['Manteiga ghee', 15, 'g', 'despensa']],
    steps: [['Bater ovos', 'Bata os ovos ligeiramente com uma pitada de flor de sal.', 60], ['Frigideira quente', 'Coloque a manteiga na frigideira e despeje os ovos.', 120], ['Rechear e servir', 'Disponha o brie, dobre a omelete e polvilhe com as amêndoas crocantes.', 60]]
  },
  {
    title: 'Ovos Caipiras Mexidos com Nata e Alho Negro',
    sub: 'ovos', diff: 'easy', prep: 5, cook: 8, cal: 370, p: 20, c: 2, fib: 0, f: 31, prem: true,
    tags: ['café_da_manhã', 'alho_negro', 'cremoso', 'luxo'],
    tip: 'O alho negro confere um toque adocicado e balsâmico sem carboidratos extras.',
    ings: [['Ovos caipiras', 4, 'unidades', 'proteínas'], ['Nata pura da fazenda', 40, 'g', 'laticínios'], ['Dentes de alho negro amassados', 2, 'dentes', 'temperos'], ['Manteiga clarificada', 20, 'g', 'despensa']],
    steps: [['Preparar base', 'Dissolva a pasta de alho negro na manteiga morna.', 60], ['Cozinhar ovos', 'Despeje os ovos misturados à nata e mexa suavemente até ponto de veludo.', 300], ['Servir', 'Apresente em tigela aquecida com flor de sal.', null]]
  },
  {
    title: 'Ovos Estrelados no Ghee com Crosta de Parmesão',
    sub: 'ovos', diff: 'easy', prep: 3, cook: 6, cal: 380, p: 24, c: 1, fib: 0, f: 31, prem: false,
    tags: ['café_da_manhã', 'crocante', 'fácil', '10_minutos'],
    tip: 'Faça uma caminha de queijo ralado na frigideira antes de quebrar o ovo por cima.',
    ings: [['Ovos frescos', 3, 'unidades', 'proteínas'], ['Queijo parmesão fino', 40, 'g', 'laticínios'], ['Manteiga ghee', 15, 'g', 'despensa'], ['Páprica picante', 1, 'pitada', 'temperos']],
    steps: [['Criar a crosta', 'Polvilhe o parmesão na frigideira quente até começar a chiar e dourar.', 90], ['Quebrar os ovos', 'Quebre os ovos sobre a crosta de queijo e tampe.', 180], ['Servir crocante', 'Levante com espátula com a crosta inteira e dourada.', 30]]
  },
  {
    title: 'Omelete de Carne Seca Desfiada com Manteiga de Garrafa',
    sub: 'omeletes', diff: 'easy', prep: 8, cook: 7, cal: 440, p: 34, c: 1, fib: 0, f: 33, prem: false,
    tags: ['café_da_manhã', 'nordestino', 'alto_em_proteína', 'carne_seca'],
    tip: 'Dessalgue bem a carne seca e desfie fino para integrar perfeitamente aos ovos.',
    ings: [['Ovos', 4, 'unidades', 'proteínas'], ['Carne seca desfiada cozida', 80, 'g', 'proteínas'], ['Manteiga de garrafa pura', 20, 'ml', 'despensa'], ['Cebolinha verde picada', 2, 'colheres de sopa', 'temperos']],
    steps: [['Aquecer a carne', 'Refogue a carne seca desfiada na manteiga de garrafa quente.', 120], ['Adicionar ovos', 'Bata os ovos e cubra a carne na frigideira.', 180], ['Finalizar e enrolar', 'Dobre ao meio e salpique bastante cebolinha.', 60]]
  },
  {
    title: 'Ovos Pochê com Creme de Espinafre e Queijo Gruyère',
    sub: 'ovos', diff: 'medium', prep: 8, cook: 10, cal: 340, p: 21, c: 3, fib: 1, f: 27, prem: true,
    tags: ['café_da_manhã', 'cremoso', 'espinafre', 'parisiense'],
    tip: 'Deixe o creme de espinafre bem aveludado e espesso para sustentar os ovos.',
    ings: [['Ovos', 3, 'unidades', 'proteínas'], ['Espinafre picado', 150, 'g', 'vegetais'], ['Creme de leite fresco', 50, 'ml', 'laticínios'], ['Queijo Gruyère ralado', 40, 'g', 'laticínios'], ['Noz-moscada ralada', 1, 'pitada', 'temperos']],
    steps: [['Fazer o creme', 'Cozinhe o espinafre com o creme de leite, gruyère e noz-moscada.', 240], ['Cozinhar os ovos', 'Faça os ovos pochê em água com vinagre por 3 minutos.', 180], ['Servir junto', 'Coloque o creme em ramequim e acomode os ovos por cima.', null]]
  },
  {
    title: 'Frittata de Salmão Defumado com Erva-Doce Fresca',
    sub: 'ovos', diff: 'easy', prep: 10, cook: 14, cal: 390, p: 30, c: 2, fib: 1, f: 29, prem: true,
    tags: ['café_da_manhã', 'salmão', 'ômega_3', 'premium'],
    tip: 'Adicione o salmão defumado nos últimos momentos para não ressecar a carne delicada.',
    ings: [['Ovos caipiras', 5, 'unidades', 'proteínas'], ['Salmão defumado em tiras', 90, 'g', 'proteínas'], ['Bulbo de erva-doce fatiado fininho', 50, 'g', 'vegetais'], ['Cream cheese ou queijo boursin', 40, 'g', 'laticínios'], ['Azeite de oliva', 15, 'ml', 'despensa']],
    steps: [['Refogar a erva-doce', 'Aqueça o azeite e salteie a erva-doce até ficar tenra e aromática.', 180], ['Despejar ovos', 'Bata os ovos e junte à frigideira em fogo baixo.', 180], ['Adicionar salmão', 'Distribua o salmão e pontinhos de queijo boursin antes de dourar a tampa.', 300]]
  },
  {
    title: 'Ovos Rancheiros Cetogênicos com Abacate e Jalapeño',
    sub: 'ovos', diff: 'easy', prep: 7, cook: 10, cal: 380, p: 19, c: 5, fib: 3, f: 31, prem: false,
    tags: ['café_da_manhã', 'mexicano', 'picante', 'abacate'],
    tip: 'Retire as sementes do jalapeño se preferir um picor mais moderado.',
    ings: [['Ovos', 3, 'unidades', 'proteínas'], ['Abacate em fatias', 80, 'g', 'vegetais'], ['Molho de tomate pelado rústico', 100, 'g', 'vegetais'], ['Pimenta jalapeño fatiada', 1, 'unidade', 'vegetais'], ['Coentro fresco', 2, 'ramos', 'temperos']],
    steps: [['Aquecer o molho', 'Aqueça o molho com o jalapeño e sal na frigideira.', 180], ['Estrelar os ovos', 'Quebre os ovos sobre o molho fervilhante.', 240], ['Finalizar', 'Decore com as fatias de abacate e coentro.', null]]
  },
  {
    title: 'Omelete de Queijo de Cabra com Tomate Confit e Manjericão',
    sub: 'omeletes', diff: 'medium', prep: 6, cook: 8, cal: 370, p: 21, c: 3, fib: 1, f: 30, prem: true,
    tags: ['café_da_manhã', 'queijo_de_cabra', 'mediterrâneo', 'gourmet'],
    tip: 'O queijo de cabra fresco traz acidez equilibrada com o tomate confitado adocicado.',
    ings: [['Ovos caipiras', 3, 'unidades', 'proteínas'], ['Queijo de cabra tipo chèvre', 50, 'g', 'laticínios'], ['Tomates-cereja confitados no azeite', 50, 'g', 'vegetais'], ['Azeite de oliva extravirgem', 15, 'ml', 'despensa'], ['Manjericão fresco', 6, 'folhas', 'temperos']],
    steps: [['Bater ovos', 'Bata os ovos delicadamente e despeje na frigideira untada.', 120], ['Montar o recheio', 'Distribua o queijo de cabra esfarelado e os tomates confit.', 60], ['Enrolar', 'Feche a omelete delicadamente e decore com folhas de manjericão.', 60]]
  },
  {
    title: 'Ovos Cocotte com Nata Fresca e Páprica Defumada',
    sub: 'ovos', diff: 'easy', prep: 5, cook: 12, cal: 320, p: 18, c: 1, fib: 0, f: 27, prem: false,
    tags: ['café_da_manhã', 'ramequim', 'nata', 'forno'],
    tip: 'Asse os ramequins em banho-maria para manter as gemas ultra cremosas.',
    ings: [['Ovos caipiras', 3, 'unidades', 'proteínas'], ['Nata fresca ou creme de leite', 60, 'ml', 'laticínios'], ['Páprica defumada espanhola', 1, 'colher de café', 'temperos'], ['Manteiga para untar', 10, 'g', 'despensa']],
    steps: [['Untar ramequins', 'Passe manteiga nos potinhos e coloque 1 colher de nata no fundo.', 60], ['Acomodar ovos', 'Quebre um ovo em cada ramequim e cubra com o restante da nata e páprica.', 60], ['Assar', 'Leve ao forno pré-aquecido a 180°C por 12 minutos.', 720]]
  }
];

// Combine and generate full 70 items for breakfast
export function getFullBreakfastList(): RawRecipeInput[] {
  const result: RawRecipeInput[] = [...BREAKFAST_RECIPES];

  ADDITIONAL_BREAKFAST.forEach((r) => {
    result.push({
      title: r.title,
      shortDesc: `${r.title} com ingredientes nobres e perfil cetogênico rigoroso.`,
      desc: `Receita desenvolvida para proporcionar energia constante e saciedade prolongada através de gorduras nobres e proteínas de alto valor biológico.`,
      category: 'breakfast',
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
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
      ingredients: r.ings.map(([name, qty, unit, cat]) => ({ name, qty, unit, cat })),
      steps: r.steps.map(([title, desc, timer]) => ({ title, desc, timer })),
      chefTip: r.tip
    });
  });

  // Generate the remaining to reach exactly 70
  // Categories: Panquecas (10), Pães (12), Muffins (10), Bowls (10), Waffles (8), Mais Ovos (remainder)
  const templates: { title: string; sub: string; diff: 'easy' | 'medium'; prep: number; cook: number; cal: number; p: number; c: number; fib: number; f: number; prem: boolean; tags: string[]; tip: string; ings: [string, number, string, any][]; steps: [string, string, number | null][] }[] = [
    // Panquecas (10)
    {
      title: 'Panqueca de Farinha de Amêndoas com Canela e Mirtilos',
      sub: 'panquecas', diff: 'easy', prep: 5, cook: 8, cal: 320, p: 14, c: 6, fib: 3, f: 26, prem: false,
      tags: ['panqueca', 'doce', 'café_da_manhã', 'amêndoas'],
      tip: 'Vire a panqueca somente quando pequenas bolhas surgirem na superfície.',
      ings: [['Farinha de amêndoas fina', 80, 'g', 'despensa'], ['Ovos', 2, 'unidades', 'proteínas'], ['Leite de amêndoas sem açúcar', 40, 'ml', 'despensa'], ['Manteiga derretida', 20, 'g', 'laticínios'], ['Canela do ceilão em pó', 1, 'colher de chá', 'temperos'], ['Mirtilos frescos para servir', 30, 'g', 'vegetais']],
      steps: [['Misturar massa', 'Bata todos os ingredientes até obter massa lisa e fluida.', 120], ['Dourar na frigideira', 'Asse em frigideira untada até formar bolhas e vire por mais 1 minuto.', 240], ['Servir', 'Apresente com manteiga derretida e mirtilos.', null]]
    },
    {
      title: 'Panqueca Salgada de Queijo Parmesão com Guacamole',
      sub: 'panquecas', diff: 'easy', prep: 8, cook: 6, cal: 370, p: 20, c: 4, fib: 2, f: 30, prem: true,
      tags: ['panqueca_salgada', 'abacate', 'café_da_manhã', 'queijo'],
      tip: 'O queijo na massa confere uma borda crocante deliciosa.',
      ings: [['Farinha de amêndoas', 60, 'g', 'despensa'], ['Parmesão ralado fino', 40, 'g', 'laticínios'], ['Ovo caipira', 1, 'unidade', 'proteínas'], ['Guacamole caseiro', 80, 'g', 'vegetais']],
      steps: [['Massa', 'Misture a farinha, queijo e ovo até dar ponto.', 90], ['Grelhar', 'Espalhe na frigideira e doure os dois lados.', 180], ['Acompanhar', 'Sirva dobrada com guacamole fresco.', null]]
    },
    {
      title: 'Panqueca de Coco Fofa com Raspas de Limão Siciliano',
      sub: 'panquecas', diff: 'easy', prep: 5, cook: 7, cal: 290, p: 12, c: 5, fib: 3, f: 24, prem: false,
      tags: ['panqueca', 'coco', 'café_da_manhã', 'cítrico'],
      tip: 'A farinha de coco absorve muita umidade; deixe a massa descansar 2 minutos antes de assar.',
      ings: [['Farinha de coco pura', 30, 'g', 'despensa'], ['Ovos', 3, 'unidades', 'proteínas'], ['Leite de coco cremoso', 50, 'ml', 'despensa'], ['Raspas de limão siciliano', 1, 'colher de chá', 'temperos'], ['Adoçante eritritol', 1, 'colher de sopa', 'despensa']],
      steps: [['Homogeneizar', 'Misture todos os ingredientes e deixe descansar por 2 minutos.', 120], ['Assar', 'Cozinhe pequenas porções em fogo bem baixo.', 240], ['Finalizar', 'Polvilhe raspas frescas de limão.', null]]
    },
    {
      title: 'Panqueca de Ricota com Essência de Baunilha Pura',
      sub: 'panquecas', diff: 'easy', prep: 7, cook: 8, cal: 310, p: 18, c: 4, fib: 1, f: 23, prem: true,
      tags: ['panqueca', 'ricota', 'aveludado', 'café_da_manhã'],
      tip: 'Amasse bem a ricota fresca com garfo para garantir massa homogênea.',
      ings: [['Ricota fresca amassada', 120, 'g', 'laticínios'], ['Ovos caipiras', 2, 'unidades', 'proteínas'], ['Extrato natural de baunilha', 1, 'colher de chá', 'temperos'], ['Farinha de linhaça dourada', 20, 'g', 'despensa']],
      steps: [['Bater a massa', 'Misture a ricota com os ovos, baunilha e linhaça.', 120], ['Dourar', 'Frite em fogo brando com manteiga ghee.', 240], ['Servir', 'Apresente quente com canela.', null]]
    },
    {
      title: 'Panqueca de Cacau 100% com Nata Batida',
      sub: 'panquecas', diff: 'easy', prep: 5, cook: 8, cal: 340, p: 14, c: 5, fib: 3, f: 28, prem: true,
      tags: ['panqueca', 'chocolate', 'cacau', 'sobremesa_café'],
      tip: 'Use cacau alcalino para um sabor menos amargo e coloração escura nobre.',
      ings: [['Cacau em pó 100%', 25, 'g', 'despensa'], ['Farinha de amêndoas', 50, 'g', 'despensa'], ['Ovos', 2, 'unidades', 'proteínas'], ['Nata fresca batida', 50, 'g', 'laticínios']],
      steps: [['Massa de cacau', 'Misture a farinha, o cacau e os ovos com 30ml de água.', 120], ['Assar', 'Doure pequenos discos na frigideira.', 240], ['Nata', 'Cubra com generosa colherada de nata fresca.', null]]
    },
    {
      title: 'Panqueca Salgada de Espinafre com Queijo Feta',
      sub: 'panquecas', diff: 'easy', prep: 6, cook: 6, cal: 310, p: 17, c: 4, fib: 2, f: 24, prem: false,
      tags: ['panqueca_salgada', 'verde', 'espinafre', 'feta'],
      tip: 'Bata o espinafre cru com os ovos no liquidificador para obter uma linda coloração verde esmeralda.',
      ings: [['Folhas de espinafre cru', 50, 'g', 'vegetais'], ['Ovos', 2, 'unidades', 'proteínas'], ['Farinha de amêndoas', 40, 'g', 'despensa'], ['Queijo feta', 40, 'g', 'laticínios']],
      steps: [['Bater no liquidificador', 'Bata o espinafre com os ovos e a farinha até ficar liso.', 90], ['Grelhar', 'Despeje na frigideira e asse os dois lados.', 180], ['Servir com feta', 'Espalhe o feta esfarelado e dobre.', 60]]
    },
    {
      title: 'Panqueca de Abóbora Cetogênica com Especiarias',
      sub: 'panquecas', diff: 'medium', prep: 10, cook: 8, cal: 280, p: 12, c: 6, fib: 2, f: 22, prem: true,
      tags: ['panqueca', 'abóbora', 'especiarias', 'outono'],
      tip: 'Use purê de abóbora cabotiá cozida e bem sequinha.',
      ings: [['Purê de abóbora cabotiá', 80, 'g', 'vegetais'], ['Ovos', 2, 'unidades', 'proteínas'], ['Farinha de coco', 20, 'g', 'despensa'], ['Canela e noz-moscada', 1, 'colher de café', 'temperos']],
      steps: [['Massa aromática', 'Misture o purê com os ovos, farinha de coco e especiarias.', 120], ['Cozinhar', 'Asse em frigideira com manteiga até dourar.', 240], ['Servir', 'Finalize com nozes tostadas.', null]]
    },
    {
      title: 'Panqueca de Pasta de Amendoim com Sementes de Chia',
      sub: 'panquecas', diff: 'easy', prep: 5, cook: 7, cal: 390, p: 19, c: 6, fib: 4, f: 31, prem: false,
      tags: ['panqueca', 'amendoim', 'chia', 'energia'],
      tip: 'Use pasta de amendoim 100% integral sem açúcar adicionado.',
      ings: [['Pasta de amendoim integral', 50, 'g', 'despensa'], ['Ovos', 2, 'unidades', 'proteínas'], ['Sementes de chia', 10, 'g', 'despensa'], ['Leite de coco', 20, 'ml', 'despensa']],
      steps: [['Misturar', 'Bata a pasta de amendoim com os ovos e a chia.', 90], ['Frigideira', 'Doure em fogo baixo dos dois lados.', 200], ['Apresentar', 'Sirva ainda morna com sementes por cima.', null]]
    },
    {
      title: 'Panqueca Suflê Japonesa Keto de Baunilha',
      sub: 'panquecas', diff: 'medium', prep: 12, cook: 10, cal: 290, p: 16, c: 3, fib: 1, f: 22, prem: true,
      tags: ['panqueca', 'suflê', 'gourmet', 'alta_gastronomia'],
      tip: 'Bata as claras em neve firme e incorpore com extrema delicadeza para não perder o ar.',
      ings: [['Ovos com claras e gemas separadas', 2, 'unidades', 'proteínas'], ['Farinha de amêndoas', 30, 'g', 'despensa'], ['Creme de tártaro ou limão', 1, 'pitada', 'temperos'], ['Eritritol', 1, 'colher de sopa', 'despensa']],
      steps: [['Claras em neve', 'Bata as claras com o eritritol até picos firmes.', 180], ['Massa base', 'Misture as gemas com a farinha e junte às claras com movimentos envolventes.', 90], ['Assar com vapor', 'Coloque porções altas na frigideira untada, pingue água e tampe.', 360]]
    },
    {
      title: 'Panqueca Salgada de Atum com Ervas de Provence',
      sub: 'panquecas', diff: 'easy', prep: 6, cook: 7, cal: 360, p: 32, c: 2, fib: 1, f: 24, prem: false,
      tags: ['panqueca_salgada', 'atum', 'alto_em_proteína', 'prática'],
      tip: 'Excelente opção para um café da manhã reforçado que sustenta até a tarde.',
      ings: [['Atum sólido em azeite escorrido', 120, 'g', 'proteínas'], ['Ovos', 2, 'unidades', 'proteínas'], ['Farinha de linhaça', 20, 'g', 'despensa'], ['Ervas de provence', 1, 'colher de chá', 'temperos']],
      steps: [['Massa proteica', 'Misture o atum desfiado com os ovos, linhaça e ervas.', 90], ['Modelar e grelhar', 'Faça discos na frigideira dourando os dois lados.', 240], ['Servir', 'Acompanhe com azeite extravirgem.', null]]
    },

    // Pães Cetogênicos (12)
    {
      title: 'Pão de Forma Cetogênico de Farinha de Linhaça Dourada',
      sub: 'paes', diff: 'easy', prep: 10, cook: 30, cal: 210, p: 9, c: 3, fib: 2, f: 17, prem: false,
      tags: ['pão', 'linhaça', 'sem_glúten', 'básico'],
      tip: 'Utilize sementes de linhaça moídas na hora para evitar a oxidação e manter o frescor.',
      ings: [['Farinha de linhaça dourada fina', 150, 'g', 'despensa'], ['Ovos inteiros', 4, 'unidades', 'proteínas'], ['Azeite de oliva', 40, 'ml', 'despensa'], ['Fermento químico', 1, 'colher de sopa', 'despensa']],
      steps: [['Bater líquidos', 'Bata os ovos com o azeite e sal.', 120], ['Incorporar secos', 'Junte a farinha de linhaça e o fermento.', 60], ['Forma e forno', 'Asse em forma de pão a 180°C por 30 minutos.', 1800]]
    },
    {
      title: 'Pão Australiano Keto com Cacau e Café',
      sub: 'paes', diff: 'medium', prep: 12, cook: 35, cal: 230, p: 10, c: 4, fib: 3, f: 18, prem: true,
      tags: ['pão', 'australiano', 'cacau', 'especial'],
      tip: 'O toque de café solúvel intensifica o sabor terroso clássico do pão australiano.',
      ings: [['Farinha de amêndoas', 160, 'g', 'despensa'], ['Cacau em pó 100%', 20, 'g', 'despensa'], ['Café solúvel forte dissolvido', 20, 'ml', 'despensa'], ['Ovos caipiras', 3, 'unidades', 'proteínas']],
      steps: [['Massa escura', 'Misture todos os ingredientes até obter massa espessa.', 180], ['Modelar', 'Molde em formato oval sobre papel manteiga.', 60], ['Assar', 'Asse a 180°C até formar crosta firme.', 2100]]
    },
    {
      title: 'Pão de Queijo Cetogênico com Polvilho Fake e Parmesão',
      sub: 'paes', diff: 'easy', prep: 10, cook: 20, cal: 260, p: 14, c: 2, fib: 1, f: 21, prem: false,
      tags: ['pão_de_queijo', 'mineiro', 'queijo', 'lanche'],
      tip: 'A combinação de farinha de amêndoas e queijo muçarela derretido recria a elasticidade perfeita.',
      ings: [['Queijo muçarela ralado', 150, 'g', 'laticínios'], ['Farinha de amêndoas', 80, 'g', 'despensa'], ['Queijo parmesão ralado', 50, 'g', 'laticínios'], ['Ovo', 1, 'unidade', 'proteínas']],
      steps: [['Derreter muçarela', 'Aqueça a muçarela até fundir.', 90], ['Misturar massa', 'Incorpore o ovo, o parmesão e a farinha de amêndoas.', 120], ['Bolinhas e forno', 'Faça bolinhas e asse a 200°C até dourarem.', 1200]]
    },
    {
      title: 'Focaccia Keto de Ervas Frescas e Sal Grosso',
      sub: 'paes', diff: 'medium', prep: 12, cook: 22, cal: 280, p: 11, c: 3, fib: 2, f: 24, prem: true,
      tags: ['focaccia', 'italiana', 'alecrim', 'azeite'],
      tip: 'Faça cavidades com os dedos na massa antes de regar com azeite generoso.',
      ings: [['Farinha de amêndoas', 180, 'g', 'despensa'], ['Cream cheese amolecido', 60, 'g', 'laticínios'], ['Alecrim e tomilho frescos', 2, 'colheres de sopa', 'temperos'], ['Flor de sal e azeite extravirgem', 30, 'ml', 'despensa']],
      steps: [['Massa fathead', 'Misture os ingredientes até formar massa moldável.', 180], ['Abrir na assadeira', 'Abra com 2cm de espessura e faça covinhas com as pontas dos dedos.', 60], ['Assar perfumado', 'Regue azeite, salpique sal e alecrim e asse a 190°C.', 1320]]
    },
    {
      title: 'Pão Nuvem Aerado (Cloud Bread) com Orégano',
      sub: 'paes', diff: 'easy', prep: 10, cook: 25, cal: 140, p: 8, c: 1, fib: 0, f: 11, prem: false,
      tags: ['cloud_bread', 'leve', 'sem_farinha', 'clássico_keto'],
      tip: 'Asse até que fiquem bem dourados para não desinflarem ao esfriar.',
      ings: [['Ovos com claras em neve', 3, 'unidades', 'proteínas'], ['Cream cheese ou ricota cremosa', 60, 'g', 'laticínios'], ['Orégano seco e sal', 1, 'colher de café', 'temperos']],
      steps: [['Bater claras', 'Bata as claras em neve firme com uma pitada de sal.', 180], ['Misturar gemas', 'Bata as gemas com o cream cheese e incorpore delicadamente às claras.', 90], ['Assar discos', 'Disponha porções redondas na assadeira e asse a 150°C.', 1500]]
    },
    {
      title: 'Bagel Cetogênico com Crosta de Gergelim Bicolor',
      sub: 'paes', diff: 'medium', prep: 15, cook: 18, cal: 320, p: 16, c: 4, fib: 2, f: 26, prem: true,
      tags: ['bagel', 'gergelim', 'nova_york', 'lanche'],
      tip: 'Pincele gema de ovo antes de cobrir com o gergelim para fixar bem.',
      ings: [['Queijo muçarela fundido', 140, 'g', 'laticínios'], ['Farinha de amêndoas', 90, 'g', 'despensa'], ['Gergelim branco e preto', 20, 'g', 'despensa'], ['Fermento', 1, 'colher de chá', 'despensa']],
      steps: [['Massa', 'Funda a muçarela e incorpore a farinha e fermento.', 120], ['Modelar roscas', 'Molde cordões e feche em círculos com furo no centro.', 120], ['Assar', 'Pincele gema, salpique gergelim e asse a 200°C.', 1080]]
    },
    {
      title: 'Pão de Alho Cetogênico Gratinado com Muçarela',
      sub: 'paes', diff: 'easy', prep: 10, cook: 15, cal: 340, p: 15, c: 3, fib: 1, f: 29, prem: false,
      tags: ['pão_de_alho', 'churrasco', 'queijo', 'aperitivo'],
      tip: 'Faça a pastinha de alho com manteiga e maionese para ficar super cremosa.',
      ings: [['Fatias de pão keto de amêndoas', 4, 'unidades', 'despensa'], ['Manteiga com alho triturado', 40, 'g', 'despensa'], ['Queijo muçarela ralado', 80, 'g', 'laticínios'], ['Orégano seco', 1, 'colher de chá', 'temperos']],
      steps: [['Passar manteiga de alho', 'Espalhe a pasta de alho generosamente sobre as fatias.', 60], ['Cobrir de queijo', 'Cubra com muçarela e orégano.', 60], ['Gratinar', 'Leve ao forno alto até borbulhar e dourar.', 900]]
    },
    {
      title: 'Pão de Micro-ondas de 90 Segundos com Farinha de Coco',
      sub: 'paes', diff: 'easy', prep: 2, cook: 2, cal: 190, p: 9, c: 2, fib: 1, f: 15, prem: false,
      tags: ['rápido', 'microondas', '90_segundos', 'emergência'],
      tip: 'Toste na frigideira com manteiga após desenformar para dar uma casca crocante.',
      ings: [['Farinha de amêndoas ou coco', 20, 'g', 'despensa'], ['Ovo', 1, 'unidade', 'proteínas'], ['Manteiga derretida', 10, 'g', 'despensa'], ['Fermento químico', 1, 'colher de café', 'despensa']],
      steps: [['Misturar em caneca', 'Bata todos os ingredientes numa caneca retangular.', 60], ['Micro-ondas', 'Aqueça na potência alta por 90 segundos.', 90], ['Tostar', 'Fatie ao meio e doure na frigideira com manteiga.', 120]]
    },
    {
      title: 'Ciabatta Rústica Keto com Azeitonas Pretas Azapa',
      sub: 'paes', diff: 'medium', prep: 12, cook: 25, cal: 270, p: 11, c: 4, fib: 2, f: 23, prem: true,
      tags: ['ciabatta', 'azeitonas', 'italiano', 'artesanal'],
      tip: 'As azeitonas pretas picadas devem estar bem secas para não umedecer a massa.',
      ings: [['Farinha de amêndoas', 150, 'g', 'despensa'], ['Psyllium em pó', 15, 'g', 'despensa'], ['Azeitonas pretas picadas', 50, 'g', 'vegetais'], ['Azeite extravirgem', 25, 'ml', 'despensa']],
      steps: [['Massa com psyllium', 'Misture a farinha, psyllium, água morna e azeitonas.', 180], ['Modelar ciabatta', 'Molde pães achatados e rústicos.', 60], ['Assar', 'Asse a 180°C até casca dourada e crocante.', 1500]]
    },
    {
      title: 'Pão Sírio Cetogênico para Beirute',
      sub: 'paes', diff: 'medium', prep: 10, cook: 8, cal: 210, p: 10, c: 3, fib: 2, f: 17, prem: true,
      tags: ['pão_sírio', 'árabe', 'sanduíche', 'fino'],
      tip: 'Abra a massa entre duas folhas de papel manteiga para que fique bem fininha.',
      ings: [['Farinha de amêndoas fina', 100, 'g', 'despensa'], ['Goma xantana', 1, 'colher de café', 'despensa'], ['Claras de ovo', 2, 'unidades', 'proteínas'], ['Azeite de oliva', 15, 'ml', 'despensa']],
      steps: [['Massa elástica', 'Misture a farinha com a goma xantana e claras até desgrudar.', 120], ['Abrir fino', 'Abra discos de 15cm e asse em frigideira quente.', 180], ['Servir', 'Abra ao meio para rechear.', null]]
    },
    {
      title: 'Pão Doce Keto de Canela e Nozes Pecã',
      sub: 'paes', diff: 'medium', prep: 15, cook: 28, cal: 310, p: 12, c: 5, fib: 3, f: 27, prem: true,
      tags: ['pão_doce', 'canela', 'nozes', 'chá_da_tarde'],
      tip: 'Regue com calda fria de nata e eritritol logo após sair do forno.',
      ings: [['Farinha de amêndoas', 160, 'g', 'despensa'], ['Nozes pecã picadas', 50, 'g', 'despensa'], ['Canela em pó abundante', 1, 'colher de sopa', 'temperos'], ['Manteiga derretida', 40, 'g', 'laticínios']],
      steps: [['Massa aromática', 'Junte a farinha com ovos, manteiga e metade da canela.', 180], ['Espalhar nozes', 'Enrole com as nozes pecã e canela no meio.', 120], ['Assar', 'Asse em forma de bolo inglês a 175°C.', 1680]]
    },
    {
      title: 'Torradas Crocantes Cetogênicas com Parmesão e Alecrim',
      sub: 'paes', diff: 'easy', prep: 5, cook: 12, cal: 180, p: 9, c: 2, fib: 1, f: 15, prem: false,
      tags: ['torradas', 'crocante', 'patês', 'lanche'],
      tip: 'Fatie o pão keto bem fininho com faca de serra afiada.',
      ings: [['Fatias finas de pão keto', 6, 'unidades', 'despensa'], ['Azeite de oliva extravirgem', 20, 'ml', 'despensa'], ['Alecrim e flor de sal', 1, 'colher de chá', 'temperos'], ['Parmesão ralado fino', 20, 'g', 'laticínios']],
      steps: [['Dispor na assadeira', 'Pincele as fatias com azeite e polvilhe alecrim e parmesão.', 60], ['Desidratar e tostar', 'Leve ao forno brando a 160°C até ficarem ultracrocantes.', 720], ['Esfriar', 'Deixe esfriar sobre grade para manter o estalo.', null]]
    },

    // Muffins & Salgados (10)
    {
      title: 'Muffin Salgado de Bacon com Queijo Cheddar Inglês',
      sub: 'muffins', diff: 'easy', prep: 10, cook: 20, cal: 310, p: 18, c: 2, fib: 1, f: 25, prem: false,
      tags: ['muffin', 'bacon', 'cheddar', 'prático'],
      tip: 'Excelente para preparar no fim de semana e congelar individualmente.',
      ings: [['Ovos', 4, 'unidades', 'proteínas'], ['Bacon em cubos dourados', 80, 'g', 'proteínas'], ['Queijo Cheddar ralado', 80, 'g', 'laticínios'], ['Creme de leite', 30, 'ml', 'laticínios']],
      steps: [['Misturar recheio', 'Misture os ovos com o creme, bacon e cheddar.', 90], ['Distribuir nas formas', 'Coloque em forminhas de muffin untadas.', 60], ['Assar', 'Asse a 180°C até inflarem e dourarem.', 1200]]
    },
    {
      title: 'Muffin de Abobrinha com Queijo Feta e Hortelã',
      sub: 'muffins', diff: 'easy', prep: 10, cook: 20, cal: 240, p: 12, c: 3, fib: 1, f: 19, prem: false,
      tags: ['muffin', 'abobrinha', 'feta', 'vegetariano'],
      tip: 'A hortelã fresca picadinha dá um frescor surpreendente ao muffin.',
      ings: [['Abobrinha ralada espremida', 120, 'g', 'vegetais'], ['Queijo feta esfarelado', 60, 'g', 'laticínios'], ['Ovos', 3, 'unidades', 'proteínas'], ['Farinha de amêndoas', 50, 'g', 'despensa']],
      steps: [['Incorporar', 'Misture a abobrinha espremida com os ovos, farinha e feta.', 120], ['Encher formas', 'Distribua em 6 forminhas.', 60], ['Assar', 'Asse a 180°C até firmarem.', 1200]]
    },
    {
      title: 'Muffin de Frango com Requeijão de Corte',
      sub: 'muffins', diff: 'easy', prep: 12, cook: 22, cal: 280, p: 24, c: 2, fib: 1, f: 19, prem: false,
      tags: ['muffin', 'frango', 'requeijão', 'proteico'],
      tip: 'Coloque um cubo de requeijão no centro de cada muffin antes de assar para recheio cremoso.',
      ings: [['Peito de frango cozido e desfiado', 150, 'g', 'proteínas'], ['Ovos', 3, 'unidades', 'proteínas'], ['Requeijão de corte em cubos', 60, 'g', 'laticínios'], ['Cebolinha e salsinha', 2, 'colheres de sopa', 'temperos']],
      steps: [['Massa de frango', 'Misture o frango com os ovos batidos e cheiro-verde.', 120], ['Rechear', 'Coloque na forma e afunde um cubo de requeijão no meio.', 60], ['Assar', 'Asse a 190°C até dourar.', 1320]]
    },
    {
      title: 'Muffin de Espinafre com Alho-Poró e Queijo Minas',
      sub: 'muffins', diff: 'easy', prep: 10, cook: 20, cal: 230, p: 14, c: 3, fib: 1, f: 17, prem: false,
      tags: ['muffin', 'espinafre', 'alho-poró', 'saudável'],
      tip: 'Refogue o alho-poró antes para amaciar os sabores aromáticos.',
      ings: [['Espinafre cozido picado', 100, 'g', 'vegetais'], ['Alho-poró refogado', 50, 'g', 'vegetais'], ['Queijo minas meia cura ralado', 70, 'g', 'laticínios'], ['Ovos', 3, 'unidades', 'proteínas']],
      steps: [['Bater base', 'Bata os ovos e incorpore os vegetais e queijo.', 90], ['Forminhas', 'Despeje em formas untadas de silicone.', 60], ['Forno', 'Asse por 20 minutos a 180°C.', 1200]]
    },
    {
      title: 'Muffin Doce de Mirtilos com Farinha de Coco',
      sub: 'muffins', diff: 'easy', prep: 8, cook: 22, cal: 210, p: 7, c: 5, fib: 3, f: 17, prem: true,
      tags: ['muffin', 'doce', 'mirtilos', 'café_da_manhã'],
      tip: 'Passe os mirtilos em uma pitada de farinha de coco antes de misturar para não afundarem.',
      ings: [['Farinha de coco', 40, 'g', 'despensa'], ['Mirtilos frescos', 50, 'g', 'vegetais'], ['Ovos caipiras', 3, 'unidades', 'proteínas'], ['Manteiga derretida', 40, 'g', 'laticínios'], ['Eritritol', 2, 'colheres de sopa', 'despensa']],
      steps: [['Massa doce', 'Bata os ovos com manteiga, eritritol e farinha de coco.', 120], ['Adicionar mirtilos', 'Envolva os mirtilos com espátula delicadamente.', 60], ['Assar', 'Asse a 175°C até palito sair limpo.', 1320]]
    },
    {
      title: 'Muffin de Cogumelos Salteados com Parmesão',
      sub: 'muffins', diff: 'medium', prep: 10, cook: 20, cal: 250, p: 15, c: 3, fib: 1, f: 20, prem: true,
      tags: ['muffin', 'cogumelos', 'parmesão', 'gourmet'],
      tip: 'Use mix de cogumelos shimeji e paris dourados com tomilho.',
      ings: [['Cogumelos salteados no azeite', 120, 'g', 'vegetais'], ['Queijo parmesão ralado', 60, 'g', 'laticínios'], ['Ovos', 3, 'unidades', 'proteínas'], ['Farinha de amêndoas', 30, 'g', 'despensa']],
      steps: [['Refogar cogumelos', 'Salteie os cogumelos com alho e tomilho.', 240], ['Juntar aos ovos', 'Misture com ovos batidos e parmesão.', 60], ['Assar', 'Distribua e asse a 180°C.', 1200]]
    },
    {
      title: 'Muffin de Brócolis com Gorgonzola e Castanhas',
      sub: 'muffins', diff: 'easy', prep: 10, cook: 20, cal: 270, p: 13, c: 4, fib: 2, f: 22, prem: true,
      tags: ['muffin', 'brócolis', 'gorgonzola', 'castanhas'],
      tip: 'Pique o brócolis bem miúdo para distribuir perfeitamente pela massa.',
      ings: [['Brócolis picadinho cozido no vapor', 100, 'g', 'vegetais'], ['Queijo gorgonzola', 50, 'g', 'laticínios'], ['Castanhas de caju picadas', 25, 'g', 'despensa'], ['Ovos', 3, 'unidades', 'proteínas']],
      steps: [['Mistura rica', 'Combine o brócolis, queijo gorgonzola, castanhas e ovos.', 90], ['Formas', 'Asse em forminhas individuais.', 60], ['Dourar', 'Deixe até a superfície borbulhar e dourar.', 1200]]
    },
    {
      title: 'Muffin de Limão Siciliano com Sementes de Papoula',
      sub: 'muffins', diff: 'medium', prep: 10, cook: 22, cal: 240, p: 8, c: 4, fib: 2, f: 21, prem: true,
      tags: ['muffin', 'limão', 'papoula', 'doce'],
      tip: 'As sementes de papoula trazem uma crocância finíssima e visual elegante.',
      ings: [['Farinha de amêndoas', 120, 'g', 'despensa'], ['Suco e raspas de 1 limão siciliano', 1, 'unidade', 'temperos'], ['Sementes de papoula', 1, 'colher de sopa', 'despensa'], ['Ovos', 2, 'unidades', 'proteínas'], ['Eritritol', 30, 'g', 'despensa']],
      steps: [['Bater massa', 'Misture os ovos, suco de limão, farinha e papoula.', 120], ['Encher forminhas', 'Distribua uniformemente em 6 formas.', 60], ['Assar perfumado', 'Asse a 180°C por 22 minutos.', 1320]]
    },
    {
      title: 'Muffin Caprese com Muçarela de Búfala e Manjericão',
      sub: 'muffins', diff: 'easy', prep: 8, cook: 18, cal: 260, p: 16, c: 3, fib: 1, f: 20, prem: false,
      tags: ['muffin', 'caprese', 'muçarela_de_búfala', 'italiano'],
      tip: 'Tomatinhos cortados ao meio decorando o topo deixam o visual irresistível.',
      ings: [['Ovos caipiras', 4, 'unidades', 'proteínas'], ['Muçarela de búfala em cubinhos', 80, 'g', 'laticínios'], ['Tomates-cereja fatiados', 60, 'g', 'vegetais'], ['Manjericão fresco picado', 2, 'colheres de sopa', 'temperos']],
      steps: [['Base caprese', 'Bata os ovos com sal e misture o manjericão e queijo.', 90], ['Decorar com tomates', 'Coloque nas forminhas e enfeite com tomates virados para cima.', 60], ['Assar', 'Asse a 190°C por 18 minutos.', 1080]]
    },
    {
      title: 'Muffin de Abóbora com Nozes e Canela',
      sub: 'muffins', diff: 'easy', prep: 10, cook: 22, cal: 250, p: 9, c: 5, fib: 2, f: 21, prem: false,
      tags: ['muffin', 'abóbora', 'nozes', 'canela'],
      tip: 'Perfeito para acompanhar um café com manteiga ghee ou nata.',
      ings: [['Purê de abóbora', 80, 'g', 'vegetais'], ['Farinha de amêndoas', 80, 'g', 'despensa'], ['Nozes picadas', 30, 'g', 'despensa'], ['Ovos', 2, 'unidades', 'proteínas'], ['Canela', 1, 'colher de chá', 'temperos']],
      steps: [['Massa cremosa', 'Misture a abóbora com ovos, farinha, nozes e canela.', 120], ['Assadeira', 'Distribua em formas e salpique nozes por cima.', 60], ['Assar', 'Asse a 180°C até firmar.', 1320]]
    },

    // Bowls & Iogurtes (10)
    {
      title: 'Bowl de Iogurte Grego Natural com Chia e Nozes Pecã',
      sub: 'bowls', diff: 'easy', prep: 5, cook: 0, cal: 320, p: 18, c: 5, fib: 3, f: 25, prem: false,
      tags: ['bowl', 'iogurte', 'chia', 'sem_fogão'],
      tip: 'Escolha iogurte grego tradicional sem açúcar e com teor elevado de gorduras naturais.',
      ings: [['Iogurte grego integral natural', 180, 'g', 'laticínios'], ['Sementes de chia', 15, 'g', 'despensa'], ['Nozes pecã tostadas', 30, 'g', 'despensa'], ['Raspas de limão e canela', 1, 'pitada', 'temperos']],
      steps: [['Montar base', 'Coloque o iogurte grego gelado numa tigela nobre.', 60], ['Adicionar sementes', 'Salpique a chia e as nozes pecã crocantes.', 60], ['Finalizar', 'Polvilhe canela e sirva fresco.', null]]
    },
    {
      title: 'Bowl Verde de Abacate com Proteína Isolada e Coco Tostado',
      sub: 'bowls', diff: 'easy', prep: 6, cook: 0, cal: 390, p: 26, c: 6, fib: 4, f: 29, prem: true,
      tags: ['bowl', 'abacate', 'proteína', 'detox'],
      tip: 'Bata o abacate com pouco leite de amêndoas gelado para manter a consistência de sorvete cremoso.',
      ings: [['Abacate maduro', 120, 'g', 'vegetais'], ['Proteína isolada sabor baunilha sem açúcar', 30, 'g', 'despensa'], ['Leite de coco cremoso', 60, 'ml', 'despensa'], ['Lascas de coco tostadas', 20, 'g', 'despensa']],
      steps: [['Bater creme', 'Bata o abacate, a proteína e o leite de coco até virar creme espesso.', 120], ['Tigela', 'Despeje na tigela.', 30], ['Toppings', 'Cubra com as lascas de coco douradas e sementes de abóbora.', null]]
    },
    {
      title: 'Bowl Cetogênico de Mirtilos com Creme de Coco e Linhaça',
      sub: 'bowls', diff: 'easy', prep: 5, cook: 0, cal: 310, p: 8, c: 6, fib: 4, f: 28, prem: false,
      tags: ['bowl', 'mirtilos', 'coco', 'antioxidante'],
      tip: 'Mirtilos são uma das melhores opções de frutas vermelhas de baixo carboidrato.',
      ings: [['Creme de coco espesso', 150, 'g', 'despensa'], ['Mirtilos frescos lavados', 40, 'g', 'vegetais'], ['Sementes de linhaça dourada moída', 15, 'g', 'despensa'], ['Amêndoas em lascas', 20, 'g', 'despensa']],
      steps: [['Base aveludada', 'Acomode o creme de coco na tigela.', 30], ['Dispor frutas', 'Distribua os mirtilos e a linhaça.', 60], ['Crocância', 'Finalize com amêndoas tostadas.', null]]
    },
    {
      title: 'Bowl de Creme de Mascarpone com Cacau e Castanhas',
      sub: 'bowls', diff: 'easy', prep: 5, cook: 0, cal: 420, p: 10, c: 4, fib: 2, f: 40, prem: true,
      tags: ['bowl', 'mascarpone', 'cacau', 'luxo'],
      tip: 'O queijo mascarpone é naturalmente rico em gorduras boas e possui textura irresistível.',
      ings: [['Queijo Mascarpone', 120, 'g', 'laticínios'], ['Cacau 100% puro peneirado', 10, 'g', 'despensa'], ['Castanhas-do-pará picadinhas', 25, 'g', 'despensa'], ['Gotas de baunilha', 3, 'gotas', 'temperos']],
      steps: [['Homogeneizar', 'Misture o mascarpone com o cacau e baunilha.', 90], ['Servir', 'Coloque na taça ou bowl.', 30], ['Decorar', 'Cubra com as castanhas-do-pará crocantes.', null]]
    },
    {
      title: 'Bowl Salgado de Salmão Curado com Abacate e Gergelim',
      sub: 'bowls', diff: 'easy', prep: 8, cook: 0, cal: 430, p: 28, c: 4, fib: 3, f: 34, prem: true,
      tags: ['bowl_salgado', 'salmão', 'abacate', 'poke_keto'],
      tip: 'Regue com azeite extravirgem e gotas de limão para realçar o frescor.',
      ings: [['Salmão fresco em cubos curado em sal marinho', 120, 'g', 'proteínas'], ['Abacate em cubos', 80, 'g', 'vegetais'], ['Pepino japonês fatiado', 50, 'g', 'vegetais'], ['Gergelim tostado', 10, 'g', 'despensa']],
      steps: [['Dispor ingredientes', 'Arrume o salmão, o abacate e o pepino lado a lado no bowl.', 120], ['Temperar', 'Regue azeite de oliva e flor de sal.', 30], ['Gergelim', 'Polvilhe o gergelim por cima.', null]]
    },
    {
      title: 'Pudim de Chia Noturno (Overnight) com Leite de Amêndoas e Morango',
      sub: 'bowls', diff: 'easy', prep: 5, cook: 0, cal: 260, p: 8, c: 5, fib: 4, f: 22, prem: false,
      tags: ['overnight', 'chia', 'pronto_na_geladeira', 'morango'],
      tip: 'Deixe hidratar na geladeira de um dia para o outro para atingir a consistência gelatinosa perfeita.',
      ings: [['Sementes de chia', 30, 'g', 'despensa'], ['Leite de amêndoas sem açúcar', 150, 'ml', 'despensa'], ['Morangos frescos fatiados', 30, 'g', 'vegetais'], ['Canela', 1, 'pitada', 'temperos']],
      steps: [['Hidratar chia', 'Misture a chia com o leite e canela e guarde na geladeira a noite.', 120], ['Montar pela manhã', 'Retire o pudim firme da geladeira.', 30], ['Frutas', 'Cubra com as fatias de morango e sirva.', null]]
    },
    {
      title: 'Bowl de Creme de Abacate com Raspas de Chocolate 85%',
      sub: 'bowls', diff: 'easy', prep: 6, cook: 0, cal: 360, p: 7, c: 5, fib: 4, f: 35, prem: false,
      tags: ['bowl', 'abacate', 'chocolate_amargo', 'rápido'],
      tip: 'Gotas de limão impedem que o abacate oxide e equilibram a doçura.',
      ings: [['Abacate maduro', 150, 'g', 'vegetais'], ['Chocolate 85% cacau ralado', 20, 'g', 'despensa'], ['Nata ou creme de leite fresco', 40, 'g', 'laticínios'], ['Suco de meio limão', 1, 'colher de sopa', 'temperos']],
      steps: [['Bater', 'Amasse o abacate com a nata e o suco de limão até ficar bem cremoso.', 120], ['Tigela', 'Transfira para a tigela.', 30], ['Raspas', 'Polvilhe o chocolate amargo ralado.', null]]
    },
    {
      title: 'Bowl de Queijo Cottage com Sementes de Girassol e Abóbora',
      sub: 'bowls', diff: 'easy', prep: 4, cook: 0, cal: 280, p: 26, c: 4, fib: 2, f: 18, prem: false,
      tags: ['bowl', 'cottage', 'sementes', 'alto_em_proteína'],
      tip: 'Toste as sementes na frigideira seca por 2 minutos para ficarem mais aromáticas.',
      ings: [['Queijo cottage integral', 180, 'g', 'laticínios'], ['Sementes de abóbora tostadas', 15, 'g', 'despensa'], ['Sementes de girassol', 15, 'g', 'despensa'], ['Azeite de oliva e orégano', 1, 'colher de chá', 'temperos']],
      steps: [['Base', 'Coloque o queijo cottage no bowl.', 30], ['Sementes', 'Espalhe as sementes tostadas.', 30], ['Azeite', 'Finalize com um fio de azeite e orégano.', null]]
    },
    {
      title: 'Bowl de Nata da Fazenda com Framboesas e Macadâmias',
      sub: 'bowls', diff: 'easy', prep: 5, cook: 0, cal: 440, p: 6, c: 5, fib: 3, f: 45, prem: true,
      tags: ['bowl', 'nata', 'framboesa', 'macadâmia', 'luxo'],
      tip: 'As nozes de macadâmia possuem o maior teor de gorduras monoinsaturadas do reino vegetal.',
      ings: [['Nata fresca de fazenda', 120, 'g', 'laticínios'], ['Framboesas frescas', 40, 'g', 'vegetais'], ['Nozes de macadâmia inteiras', 30, 'g', 'despensa']],
      steps: [['Dispor nata', 'Acomode a nata fresca em tigela funda.', 30], ['Adicionar framboesas', 'Distribua as framboesas frescas.', 30], ['Macadâmias', 'Salpique as macadâmias crocantes.', null]]
    },
    {
      title: 'Bowl de Coalhada Seca Caseira com Azeite e Hortelã',
      sub: 'bowls', diff: 'easy', prep: 5, cook: 0, cal: 310, p: 16, c: 3, fib: 0, f: 26, prem: false,
      tags: ['bowl', 'coalhada', 'árabe', 'hortelã'],
      tip: 'Sirva com fatias finas de pepino crocante em vez de pão.',
      ings: [['Coalhada seca firme', 150, 'g', 'laticínios'], ['Azeite de oliva extravirgem libanês', 25, 'ml', 'despensa'], ['Folhas frescas de hortelã', 10, 'folhas', 'temperos'], ['Zátar em pó', 1, 'colher de café', 'temperos']],
      steps: [['Espalhar no prato', 'Espalhe a coalhada fazendo um desenho circular com as costas da colher.', 60], ['Regar azeite', 'Preencha o centro com azeite generoso.', 30], ['Temperos', 'Polvilhe zátar e decore com folhas de hortelã.', null]]
    },

    // Waffles & Variados (8)
    {
      title: 'Waffle Belga Keto com Creme de Nata e Morangos',
      sub: 'waffles', diff: 'easy', prep: 8, cook: 8, cal: 360, p: 14, c: 5, fib: 2, f: 31, prem: true,
      tags: ['waffle', 'belga', 'morango', 'café_especial'],
      tip: 'Aqueça bem a máquina de waffle antes de colocar a massa para garantir casquinha crocante.',
      ings: [['Farinha de amêndoas', 80, 'g', 'despensa'], ['Ovos caipiras', 2, 'unidades', 'proteínas'], ['Manteiga derretida', 30, 'g', 'laticínios'], ['Nata fresca batida', 50, 'g', 'laticínios'], ['Morangos fatiados', 30, 'g', 'vegetais']],
      steps: [['Massa de waffle', 'Bata todos os ingredientes da massa até ficar lisa.', 120], ['Assar na máquina', 'Unte a máquina e asse até ficar dourado e crocante.', 360], ['Servir', 'Cubra com nata batida e morangos.', null]]
    },
    {
      title: 'Waffle Salgado de Queijo Coalho com Tomilho Fresco',
      sub: 'waffles', diff: 'easy', prep: 6, cook: 6, cal: 390, p: 22, c: 2, fib: 1, f: 33, prem: false,
      tags: ['waffle_salgado', 'queijo_coalho', 'crocante', 'lanche'],
      tip: 'O queijo coalho ralado grosso na massa cria uma crosta dourada inacreditável.',
      ings: [['Queijo coalho ralado', 100, 'g', 'laticínios'], ['Ovo', 1, 'unidade', 'proteínas'], ['Farinha de linhaça dourada', 20, 'g', 'despensa'], ['Folhas de tomilho fresco', 1, 'colher de chá', 'temperos']],
      steps: [['Misturar', 'Misture o queijo com o ovo, linhaça e tomilho.', 60], ['Máquina de waffle', 'Pressione na máquina bem quente até dourar completamente.', 300], ['Servir', 'Coma imediatamente fumegante.', null]]
    },
    {
      title: 'Waffle de Chocolate 70% com Amêndoas Laminadas',
      sub: 'waffles', diff: 'medium', prep: 10, cook: 8, cal: 370, p: 15, c: 6, fib: 3, f: 32, prem: true,
      tags: ['waffle', 'chocolate', 'amêndoas', 'gourmet'],
      tip: 'Use gotas de chocolate amargo na massa para derreterem no interior.',
      ings: [['Farinha de amêndoas', 70, 'g', 'despensa'], ['Cacau em pó 100%', 15, 'g', 'despensa'], ['Gotas de chocolate 70%', 20, 'g', 'despensa'], ['Ovos', 2, 'unidades', 'proteínas']],
      steps: [['Preparar massa', 'Misture a farinha, cacau, ovos e gotas de chocolate.', 120], ['Assar', 'Cozinhe na máquina de waffle.', 360], ['Finalizar', 'Polvilhe amêndoas tostadas.', null]]
    },
    {
      title: 'Waffle Salgado de Bacon com Ervas Finas',
      sub: 'waffles', diff: 'easy', prep: 8, cook: 7, cal: 410, p: 20, c: 2, fib: 1, f: 36, prem: false,
      tags: ['waffle_salgado', 'bacon', 'ervas', 'crocante'],
      tip: 'Pique o bacon em pedacinhos minúsculos e frite antes de misturar na massa.',
      ings: [['Bacon frito crocante picadinho', 50, 'g', 'proteínas'], ['Farinha de amêndoas', 60, 'g', 'despensa'], ['Ovos', 2, 'unidades', 'proteínas'], ['Ervas finas picadas', 1, 'colher de sopa', 'temperos']],
      steps: [['Massa', 'Junte o bacon frito à massa de ovos e farinha.', 90], ['Assar waffle', 'Coloque na máquina quente e asse até ficar crocante.', 300], ['Servir', 'Sirva com manteiga derretida.', null]]
    },
    {
      title: 'Waffle de Coco com Calda Morna de Manteiga e Canela',
      sub: 'waffles', diff: 'easy', prep: 6, cook: 7, cal: 330, p: 10, c: 4, fib: 3, f: 29, prem: false,
      tags: ['waffle', 'coco', 'manteiga', 'canela'],
      tip: 'Derreta a manteiga com canela e eritritol em fogo baixo para regar o waffle.',
      ings: [['Farinha de coco pura', 30, 'g', 'despensa'], ['Leite de coco', 50, 'ml', 'despensa'], ['Ovos', 2, 'unidades', 'proteínas'], ['Manteiga', 30, 'g', 'laticínios'], ['Canela', 1, 'colher de chá', 'temperos']],
      steps: [['Massa de coco', 'Misture os ovos com o leite de coco e farinha de coco.', 90], ['Assar', 'Coloque na máquina de waffle untada.', 300], ['Regar calda', 'Despeje a manteiga derretida com canela por cima.', null]]
    },
    {
      title: 'Waffle Salgado de Abobrinha com Queijo Provolone',
      sub: 'waffles', diff: 'easy', prep: 8, cook: 8, cal: 350, p: 18, c: 3, fib: 1, f: 29, prem: false,
      tags: ['waffle_salgado', 'provolone', 'abobrinha', 'defumado'],
      tip: 'O queijo provolone defumado traz um sabor tostado marcante.',
      ings: [['Abobrinha ralada seca', 80, 'g', 'vegetais'], ['Queijo provolone ralado', 70, 'g', 'laticínios'], ['Ovo', 1, 'unidade', 'proteínas'], ['Farinha de amêndoas', 30, 'g', 'despensa']],
      steps: [['Misturar ingredientes', 'Combine a abobrinha espremida com o provolone, ovo e farinha.', 90], ['Pressionar na chapa', 'Asse na máquina bem quente até dourar.', 360], ['Servir', 'Coma crocante e estaladiço.', null]]
    },
    {
      title: 'Waffle Doce de Baunilha com Calda de Mirtilos Caseira',
      sub: 'waffles', diff: 'medium', prep: 10, cook: 8, cal: 320, p: 12, c: 6, fib: 3, f: 26, prem: true,
      tags: ['waffle', 'baunilha', 'mirtilos', 'calda_caseira'],
      tip: 'Cozinhe os mirtilos com um pingo de água e eritritol até estourarem e formarem uma calda natural.',
      ings: [['Farinha de amêndoas', 70, 'g', 'despensa'], ['Ovos', 2, 'unidades', 'proteínas'], ['Extrato de baunilha', 1, 'colher de chá', 'temperos'], ['Mirtilos frescos para a calda', 60, 'g', 'vegetais']],
      steps: [['Fazer a calda', 'Ferva os mirtilos em panela pequena por 4 minutos até soltar suco.', 240], ['Fazer o waffle', 'Asse a massa de waffle até ficar dourada.', 300], ['Cobrir', 'Despeje a calda morna sobre o waffle crocante.', null]]
    },
    {
      title: 'Waffle Cetogênico de Café com Gotas de Chocolate',
      sub: 'waffles', diff: 'easy', prep: 6, cook: 7, cal: 340, p: 13, c: 5, fib: 2, f: 29, prem: true,
      tags: ['waffle', 'café', 'chocolate', 'manhã_energética'],
      tip: 'O aroma de café fresco assado na máquina perfuma toda a casa.',
      ings: [['Farinha de amêndoas', 70, 'g', 'despensa'], ['Café espresso concentrado', 25, 'ml', 'despensa'], ['Gotas de chocolate 70%', 20, 'g', 'despensa'], ['Ovos', 2, 'unidades', 'proteínas']],
      steps: [['Massa de café', 'Misture os ovos com o espresso frio, a farinha e o chocolate.', 90], ['Assar', 'Cozinhe na máquina de waffle.', 300], ['Servir', 'Acompanhe com chantilly de nata fresca sem açúcar.', null]]
    }
  ];

  templates.forEach((t) => {
    result.push({
      title: t.title,
      shortDesc: `${t.title} elaborado para café da manhã nutritivo e com baixo teor de carboidratos.`,
      desc: `Receita especial sem açúcar e sem glúten, mantendo o requinte e o sabor característico do cardápio KetoNobre.`,
      category: 'breakfast',
      subcategory: t.sub,
      difficulty: t.diff,
      prepTime: t.prep,
      cookTime: t.cook,
      servings: 2,
      calories: t.cal,
      protein: t.p,
      carbs: t.c,
      fiber: t.fib,
      fat: t.f,
      isPremium: t.prem,
      tags: t.tags,
      image: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=800&q=80',
      ingredients: t.ings.map(([name, qty, unit, cat]) => ({ name, qty, unit, cat })),
      steps: t.steps.map(([title, desc, timer]) => ({ title, desc, timer })),
      chefTip: t.tip
    });
  });

  return result.slice(0, 70);
}
