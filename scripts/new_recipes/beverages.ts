import { Recipe } from '../../src/types';

export const NEW_BEVERAGES_RECIPES: Recipe[] = [
  {
    id: "kn-drinks-591",
    title: "Café Bulletproof Nobre com Óleo TCM, Manteiga Ghee e Canela do Ceilão",
    description: "Bebida termogênica cremosa e energizante que proporciona foco mental sustentado e energia cetogênica sem picos de glicemia.",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    category: "beverages",
    subcategory: "cafés funcionais",
    categoryName: "Bebidas Cetogênicas",
    difficulty: "Fácil",
    prepTime: 3,
    cookTime: 0,
    servings: 1,
    rating: 5.0,
    reviewCount: 93,
    isPremium: false,
    isPopular: true,
    isNew: true,
    tags: ["bulletproof", "café funcional", "óleo tcm", "ghee", "jejum intermitente"],
    nutrition: { calories: 230, protein: 0, netCarbs: 0, fat: 26, fiber: 0, carbs: 0 },
    ingredients: [
      { id: "kn-dr591-1", name: "Café especial recém-coado bem quente", amount: "200 ml", quantity: 200, unit: "ml", optional: false, category: "Despensa" },
      { id: "kn-dr591-2", name: "Manteiga ghee nobre de vacas a pasto", amount: "1 colher de sopa", quantity: 15, unit: "g", optional: false, category: "Despensa" },
      { id: "kn-dr591-3", name: "Óleo TCM puro (triglicerídeos de cadeia média)", amount: "1 colher de sopa", quantity: 15, unit: "ml", optional: false, category: "Despensa" },
      { id: "kn-dr591-4", name: "Canela do Ceilão em pó e noz-moscada", amount: "1 pitada", quantity: 1, unit: "g", optional: false, category: "Temperos" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Adicionar gorduras ao liquidificador: Coloque a manteiga ghee e o óleo TCM no copo do liquidificador ou mixer.", timerSeconds: 30 },
      { stepNumber: 2, instruction: "Despejar o café quente: Verta o café recém-coado bem quente sobre as gorduras.", timerSeconds: 30 },
      { stepNumber: 3, instruction: "Emulsionar em alta rotação: Bata em velocidade máxima por 30 a 45 segundos. A rotação transforma as gorduras e o café numa emulsão aveludada com espuma densa parecida com cappuccino.", timerSeconds: 45, tip: "Bater no liquidificador é essencial para criar as micelas que facilitam a digestão rápida do TCM." },
      { stepNumber: 4, instruction: "Servir: Verta em caneca alta de cerâmica e polvilhe canela do Ceilão por cima." }
    ],
    chefTip: "Não misture apenas com colher; a emulsificação mecânica no liquidificador quebra a gordura em microgotículas fáceis de absorver pelo fígado."
  },
  {
    id: "kn-drinks-592",
    title: "Smoothie Verde Detox com Abacate Hass, Espinafre Baby e Limão Siciliano",
    description: "Bebida aveludada, altamente alcalinizante e rica em potássio e magnésio, perfeita para iniciar a manhã com saciedade profunda.",
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80",
    category: "beverages",
    subcategory: "smoothies",
    categoryName: "Bebidas Cetogênicas",
    difficulty: "Fácil",
    prepTime: 5,
    cookTime: 0,
    servings: 1,
    rating: 4.8,
    reviewCount: 39,
    isPremium: false,
    tags: ["smoothie", "suco verde", "abacate", "detox", "eletrólitos"],
    nutrition: { calories: 190, protein: 3, netCarbs: 3, fat: 18, fiber: 5, carbs: 8 },
    ingredients: [
      { id: "kn-dr592-1", name: "Polpa de abacate hass maduro", amount: "80 g", quantity: 80, unit: "g", optional: false, category: "Vegetais" },
      { id: "kn-dr592-2", name: "Folhas de espinafre baby higienizadas", amount: "50 g", quantity: 50, unit: "g", optional: false, category: "Vegetais" },
      { id: "kn-dr592-3", name: "Água de coco com zero adição de açúcar ou água gelada", amount: "200 ml", quantity: 200, unit: "ml", optional: false, category: "Despensa" },
      { id: "kn-dr592-4", name: "Suco de 1/2 limão siciliano", amount: "15 ml", quantity: 15, unit: "ml", optional: false, category: "Vegetais" },
      { id: "kn-dr592-5", name: "Folhas de hortelã fresca e pedras de gelo", amount: "4 pedras", quantity: 50, unit: "g", optional: false, category: "Despensa" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Juntar os ingredientes: Coloque a água, o abacate, o espinafre baby, o suco de limão e a hortelã no liquidificador.", timerSeconds: 60 },
      { stepNumber: 2, instruction: "Triturar: Bata em alta potência por 60 segundos até o espinafre desintegrar completamente e formar um shake verde aveludado.", timerSeconds: 60 },
      { stepNumber: 3, instruction: "Servir com gelo: Verta em copo longo com pedras de gelo e aproveite de imediato." }
    ],
    chefTip: "O abacate substitui a banana tradicional das receitas comuns, conferindo densidade aveludada sem os carboidratos simples."
  },
  {
    id: "kn-drinks-593",
    title: "Chá Matcha Cerimonial Batido com Leite de Amêndoas e Óleo de Coco",
    description: "Matcha japonês antioxidante emulsionado com leite vegetal de amêndoas cremoso, adoçado suavemente com stevia pura.",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    category: "beverages",
    subcategory: "chás termogênicos",
    categoryName: "Bebidas Cetogênicas",
    difficulty: "Fácil",
    prepTime: 4,
    cookTime: 0,
    servings: 1,
    rating: 4.9,
    reviewCount: 42,
    isPremium: true,
    tags: ["matcha", "latte", "antioxidante", "leite de amêndoas", "energia limpa"],
    nutrition: { calories: 140, protein: 2, netCarbs: 1, fat: 14, fiber: 1, carbs: 2 },
    ingredients: [
      { id: "kn-dr593-1", name: "Matcha cerimonial 100% puro em pó", amount: "1 colher de chá", quantity: 3, unit: "g", optional: false, category: "Despensa" },
      { id: "kn-dr593-2", name: "Leite de amêndoas sem açúcar morno", amount: "180 ml", quantity: 180, unit: "ml", optional: false, category: "Despensa" },
      { id: "kn-dr593-3", name: "Óleo de coco extravirgem", amount: "1 colher de chá", quantity: 5, unit: "ml", optional: false, category: "Despensa" },
      { id: "kn-dr593-4", name: "Gotas de stevia natural pura", amount: "3 gotas", quantity: 1, unit: "g", optional: false, category: "Despensa" },
      { id: "kn-dr593-5", name: "Água quente (a 80°C)", amount: "50 ml", quantity: 50, unit: "ml", optional: false, category: "Despensa" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Dissolver o matcha: Peneire o matcha em uma tigela pequena e dissolva na água a 80°C usando batedor de bambu (chasen) ou mixer de mão em formato de 'W'.", timerSeconds: 60 },
      { stepNumber: 2, instruction: "Vaporizar o leite: Aqueça o leite de amêndoas com o óleo de coco e as gotas de stevia.", timerSeconds: 60 },
      { stepNumber: 3, instruction: "Montar a bebida: Verta o leite de amêndoas vaporizado e aerado sobre o chá verde concentrado formando camadas visuais elegantes." }
    ],
    chefTip: "Não use água fervendo acima de 80°C para não queimar as folhas nobres de matcha e amargar a infusão."
  },
  {
    id: "kn-drinks-594",
    title: "Golden Milk Cetogênico com Cúrcuma Pura, Leite de Coco e Pimenta Preta",
    description: "O milenar leite dourado ayurvédico com potente ação anti-inflamatória, especiarias quentes e aveludado leite de coco natural.",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    category: "beverages",
    subcategory: "chás termogênicos",
    categoryName: "Bebidas Cetogênicas",
    difficulty: "Fácil",
    prepTime: 4,
    cookTime: 4,
    servings: 1,
    rating: 5.0,
    reviewCount: 48,
    isPremium: false,
    tags: ["golden milk", "cúrcuma", "anti-inflamatório", "leite de coco", "sono reparador"],
    nutrition: { calories: 170, protein: 2, netCarbs: 2, fat: 17, fiber: 1, carbs: 3 },
    ingredients: [
      { id: "kn-dr594-1", name: "Leite de coco caseiro ou integral", amount: "200 ml", quantity: 200, unit: "ml", optional: false, category: "Despensa" },
      { id: "kn-dr594-2", name: "Cúrcuma (açafrão-da-terra) pura em pó", amount: "1 colher de chá", quantity: 5, unit: "g", optional: false, category: "Temperos" },
      { id: "kn-dr594-3", name: "Gengibre ralado e canela em pó", amount: "1/2 colher de chá", quantity: 2, unit: "g", optional: false, category: "Temperos" },
      { id: "kn-dr594-4", name: "Pimenta-do-reino preta moída (piperina)", amount: "1 pitada", quantity: 1, unit: "g", optional: false, category: "Temperos" },
      { id: "kn-dr594-5", name: "Óleo de coco ou manteiga ghee", amount: "1 colher de chá", quantity: 5, unit: "ml", optional: false, category: "Despensa" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Aquecer os ingredientes: Em uma leiteira, junte o leite de coco, a cúrcuma, a canela, o gengibre, o óleo de coco e a pimenta-do-reino.", timerSeconds: 60 },
      { stepNumber: 2, instruction: "Cozinhar em fogo brando: Mexa com um batedor de arame em fogo médio até levantar fervura suave por 3 minutos para ativar os curcuminoides.", timerSeconds: 180 },
      { stepNumber: 3, instruction: "Servir quente: Despeje na xícara e polvilhe canela em pó na superfície." }
    ],
    chefTip: "A pitada de pimenta preta é indispensável: a piperina aumenta em até 2000% a biodisponibilidade e absorção da curcumina no corpo."
  },
  {
    id: "kn-drinks-595",
    title: "Limonada Suíça Cetogênica com Nata Fresca e Gelo Picado",
    description: "Bebida cítrica e cremosa batida com limões inteiros, nata fresca e eritritol, espumante e ultra refrescante para dias quentes.",
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80",
    category: "beverages",
    subcategory: "drinks refrescantes",
    categoryName: "Bebidas Cetogênicas",
    difficulty: "Fácil",
    prepTime: 4,
    cookTime: 0,
    servings: 2,
    rating: 4.9,
    reviewCount: 55,
    isPremium: false,
    tags: ["limonada suíça", "nata", "refrescante", "cítrico", "verão"],
    nutrition: { calories: 150, protein: 2, netCarbs: 2, fat: 15, fiber: 1, carbs: 3 },
    ingredients: [
      { id: "kn-dr595-1", name: "Limões taiti inteiros higienizados cortados em 4 sem a parte branca central", amount: "2 unidades", quantity: 120, unit: "g", optional: false, category: "Vegetais" },
      { id: "kn-dr595-2", name: "Água mineral gelada", amount: "400 ml", quantity: 400, unit: "ml", optional: false, category: "Despensa" },
      { id: "kn-dr595-3", name: "Nata fresca gelada", amount: "3 colheres de sopa", quantity: 45, unit: "g", optional: false, category: "Laticínios" },
      { id: "kn-dr595-4", name: "Adoçante eritritol em pó ou xilitol", amount: "3 colheres de sopa", quantity: 35, unit: "g", optional: false, category: "Despensa" },
      { id: "kn-dr595-5", name: "Gelo picado", amount: "1 xícara", quantity: 100, unit: "g", optional: false, category: "Despensa" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Pulsar o limão com água: Coloque os limões sem o miolo branco no liquidificador com a água gelada. Use a função 'Pulsar' por 3 a 5 vezes apenas para extrair o suco sem triturar a casca em demasia.", timerSeconds: 30, tip: "Não bata continuamente para o sumo da casca não amargar a limonada." },
      { stepNumber: 2, instruction: "Coar imediatamente: Passe por uma peneira fina de volta ao copo do liquidificador.", timerSeconds: 30 },
      { stepNumber: 3, instruction: "Cremosidade da nata: Adicione a nata fresca, o eritritol e o gelo picado. Bata por 20 segundos até formar uma espuma espessa.", timerSeconds: 20 },
      { stepNumber: 4, instruction: "Servir: Sirva imediatamente em copos altos com rodelas de limão." }
    ],
    chefTip: "Retirar o filamento branco central de cada limão antes de bater é a garantia de que a limonada não ficará amarga."
  },
  {
    id: "kn-drinks-596",
    title: "Shake Proteico de Frutas Vermelhas com Leite de Amêndoas e Colágeno",
    description: "Vitamina roxa aveludada carregada de antioxidantes, peptídeos de colágeno puro e gorduras boas do leite vegetal de castanhas.",
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80",
    category: "beverages",
    subcategory: "smoothies",
    categoryName: "Bebidas Cetogênicas",
    difficulty: "Fácil",
    prepTime: 4,
    cookTime: 0,
    servings: 1,
    rating: 4.9,
    reviewCount: 46,
    isPremium: true,
    tags: ["shake", "colágeno", "frutas vermelhas", "pós-treino", "beleza"],
    nutrition: { calories: 210, protein: 18, netCarbs: 4, fat: 12, fiber: 3, carbs: 7 },
    ingredients: [
      { id: "kn-dr596-1", name: "Frutas vermelhas congeladas (morangos e mirtilos)", amount: "80 g", quantity: 80, unit: "g", optional: false, category: "Vegetais" },
      { id: "kn-dr596-2", name: "Peptídeos bioativos de colágeno hidrolisado sem sabor", amount: "2 colheres de sopa", quantity: 20, unit: "g", optional: false, category: "Despensa" },
      { id: "kn-dr596-3", name: "Leite de amêndoas sem açúcar gelado", amount: "220 ml", quantity: 220, unit: "ml", optional: false, category: "Despensa" },
      { id: "kn-dr596-4", name: "Pasta de castanha de caju integral", amount: "1 colher de sopa", quantity: 15, unit: "g", optional: false, category: "Despensa" },
      { id: "kn-dr596-5", name: "Gotas de baunilha pura e gelo", amount: "1 colher de chá", quantity: 5, unit: "g", optional: false, category: "Temperos" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Bater todos os ingredientes: Coloque as frutas vermelhas congeladas, o colágeno em pó, o leite de amêndoas e a pasta de castanha no liquidificador.", timerSeconds: 60 },
      { stepNumber: 2, instruction: "Textura aveludada: Bata por 60 segundos até formar um smoothie consistente e homogêneo.", timerSeconds: 60 },
      { stepNumber: 3, instruction: "Servir: Verta em copo térmico e beba após o treino ou no desjejum." }
    ],
    chefTip: "O colágeno não altera o sabor natural das frutas vermelhas e nutre pele, unhas e articulações mantendo a cetose."
  },
  {
    id: "kn-drinks-597",
    title: "Chá Termogênico de Hibisco com Canela em Pau, Cravo e Laranja",
    description: "Infusão rubi aromática com ação diurética potente que reduz a retenção hídrica e acelera a oxidação de gorduras.",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    category: "beverages",
    subcategory: "chás termogênicos",
    categoryName: "Bebidas Cetogênicas",
    difficulty: "Fácil",
    prepTime: 3,
    cookTime: 6,
    servings: 2,
    rating: 4.8,
    reviewCount: 38,
    isPremium: false,
    tags: ["chá de hibisco", "termogênico", "diurético", "antioxidante", "desincha"],
    nutrition: { calories: 15, protein: 0, netCarbs: 1, fat: 0, fiber: 0, carbs: 1 },
    ingredients: [
      { id: "kn-dr597-1", name: "Flores secas de hibisco higienizadas", amount: "2 colheres de sopa", quantity: 15, unit: "g", optional: false, category: "Despensa" },
      { id: "kn-dr597-2", name: "Canela em pau", amount: "2 unidades", quantity: 8, unit: "g", optional: false, category: "Temperos" },
      { id: "kn-dr597-3", name: "Cravos-da-índia e fatias finas de gengibre", amount: "4 unidades", quantity: 5, unit: "g", optional: false, category: "Temperos" },
      { id: "kn-dr597-4", name: "Casca de 1/2 laranja bahia (sem a parte branca)", amount: "10 g", quantity: 10, unit: "g", optional: false, category: "Vegetais" },
      { id: "kn-dr597-5", name: "Água filtrada", amount: "600 ml", quantity: 600, unit: "ml", optional: false, category: "Despensa" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Ferver as especiarias: Ferva a água com a canela em pau, o cravo, a casca de laranja e o gengibre por 5 minutos para extrair os óleos essenciais.", timerSeconds: 300 },
      { stepNumber: 2, instruction: "Infusão do hibisco: Desligue o fogo, adicione as flores de hibisco, tampe a panela e deixe em infusão por 6 minutos.", timerSeconds: 360, tip: "Não ferva as flores de hibisco para não perder as antocianinas e vitaminas sensíveis ao calor." },
      { stepNumber: 3, instruction: "Coar e servir: Coe e sirva quente ou deixe gelar na geladeira com fatias de limão e pedras de gelo." }
    ],
    chefTip: "Adicionar a casca de laranja bahia perfuma intensamente o hibisco e ameniza naturalmente sua acidez."
  },
  {
    id: "kn-drinks-598",
    title: "Leite Vegetal Puro de Castanha-do-Pará Fresco Feito em Casa",
    description: "Leite vegetal rico em selênio, aveludado e sem nenhum espessante industrial, feito em 5 minutos com castanhas brasileiras e água.",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    category: "beverages",
    subcategory: "leites vegetais",
    categoryName: "Bebidas Cetogênicas",
    difficulty: "Fácil",
    prepTime: 10,
    cookTime: 0,
    servings: 4,
    rating: 4.9,
    reviewCount: 35,
    isPremium: true,
    tags: ["leite vegetal", "castanha-do-pará", "selênio", "caseiro", "sem lactose"],
    nutrition: { calories: 160, protein: 4, netCarbs: 1, fat: 16, fiber: 2, carbs: 3 },
    ingredients: [
      { id: "kn-dr598-1", name: "Castanhas-do-pará cruas inteiras", amount: "120 g (1 xícara)", quantity: 120, unit: "g", optional: false, category: "Despensa" },
      { id: "kn-dr598-2", name: "Água mineral filtrada morna", amount: "600 ml", quantity: 600, unit: "ml", optional: false, category: "Despensa" },
      { id: "kn-dr598-3", name: "Extrato puro de baunilha", amount: "1/2 colher de chá", quantity: 2, unit: "ml", optional: false, category: "Temperos" },
      { id: "kn-dr598-4", name: "Pitada sutil de flor de sal", amount: "1 pitada", quantity: 1, unit: "g", optional: false, category: "Temperos" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Deixar de molho: Deixe as castanhas de molho em água fria por 4 a 6 horas para hidratar e eliminar fitatos.", timerSeconds: 3600 },
      { stepNumber: 2, instruction: "Escorrer e bater: Escorra a água do molho. Coloque as castanhas no liquidificador com os 600ml de água mineral morna, a baunilha e o sal.", timerSeconds: 60 },
      { stepNumber: 3, instruction: "Bater em potência máxima: Bata por 2 minutos até o líquido ficar branco e espumoso.", timerSeconds: 120 },
      { stepNumber: 4, instruction: "Coar no tecido: Despeje em um saco de voal ou pano fino limpo, espremendo bem com as mãos para extrair o leite vegetal e separar o farelo." }
    ],
    chefTip: "O farelo seco que sobra no voal pode ser aproveitado como farinha nobre para biscoitos ou bolos cetogênicos."
  },
  {
    id: "kn-drinks-599",
    title: "Cappuccino Italiano Cremoso com Cacau Nobre, Nata e Canela",
    description: "Versão cetogênica do café clássico italiano com espuminha espessa e polvilhado com cacau alcalino e canela perfumada.",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    category: "beverages",
    subcategory: "cafés funcionais",
    categoryName: "Bebidas Cetogênicas",
    difficulty: "Fácil",
    prepTime: 4,
    cookTime: 2,
    servings: 1,
    rating: 4.9,
    reviewCount: 52,
    isPremium: false,
    tags: ["cappuccino", "café", "cacau", "nata", "café da tarde"],
    nutrition: { calories: 170, protein: 2, netCarbs: 1, fat: 17, fiber: 1, carbs: 2 },
    ingredients: [
      { id: "kn-dr599-1", name: "Café espresso ou concentrado bem quente", amount: "80 ml", quantity: 80, unit: "ml", optional: false, category: "Despensa" },
      { id: "kn-dr599-2", name: "Nata pura fresca ou creme de leite fresco", amount: "50 ml", quantity: 50, unit: "ml", optional: false, category: "Laticínios" },
      { id: "kn-dr599-3", name: "Água quente filtrada", amount: "60 ml", quantity: 60, unit: "ml", optional: false, category: "Despensa" },
      { id: "kn-dr599-4", name: "Cacau em pó 100% holandês", amount: "1 colher de chá", quantity: 5, unit: "g", optional: false, category: "Despensa" },
      { id: "kn-dr599-5", name: "Adoçante eritritol e canela em pó", amount: "1 colher de chá", quantity: 5, unit: "g", optional: false, category: "Despensa" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Diluir a base: Na xícara, misture o cacau em pó e o eritritol no café espresso quente mexendo com colher até dissolver.", timerSeconds: 30 },
      { stepNumber: 2, instruction: "Aerador de leite: Em copo alto, junte a nata com a água quente e use um mini mixer espumador de leite elétrico por 20 segundos até criar uma espuma aveludada triplicando de volume.", timerSeconds: 30 },
      { stepNumber: 3, instruction: "Verter sobre o café: Despeje a espuma cremosa sobre o espresso na xícara.", timerSeconds: 20 },
      { stepNumber: 4, instruction: "Finalizar: Polvilhe cacau em pó e canela no topo formando uma crostinha perfumada." }
    ],
    chefTip: "O mini mixer espumador a pilha cria uma microespuma sedosa de cafeteria sem precisar de vaporizador profissional."
  },
  {
    id: "kn-drinks-600",
    title: "Mocktail Cetogênico de Frutas Vermelhas com Água Tônica Zero, Alecrim e Zimbro",
    description: "Drink aromático sem álcool servido em taça balloon com amoras maceradas, botões de zimbro perfumados e ramo de alecrim fresco maçaricado.",
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80",
    category: "beverages",
    subcategory: "drinks refrescantes",
    categoryName: "Bebidas Cetogênicas",
    difficulty: "Fácil",
    prepTime: 5,
    cookTime: 0,
    servings: 1,
    rating: 5.0,
    reviewCount: 47,
    isPremium: true,
    tags: ["mocktail", "sem álcool", "água tônica zero", "alecrim", "festa"],
    nutrition: { calories: 35, protein: 0, netCarbs: 2, fat: 0, fiber: 2, carbs: 4 },
    ingredients: [
      { id: "kn-dr600-1", name: "Amoras frescas ou congeladas", amount: "30 g (5 unidades)", quantity: 30, unit: "g", optional: false, category: "Vegetais" },
      { id: "kn-dr600-2", name: "Água tônica zero açúcar gelada", amount: "200 ml", quantity: 200, unit: "ml", optional: false, category: "Despensa" },
      { id: "kn-dr600-3", name: "Bagas de zimbro levemente pressionadas", amount: "4 unidades", quantity: 2, unit: "g", optional: false, category: "Temperos" },
      { id: "kn-dr600-4", name: "Ramo de alecrim fresco", amount: "1 unidade", quantity: 3, unit: "g", optional: false, category: "Temperos" },
      { id: "kn-dr600-5", name: "Suco de 1/2 limão siciliano e muito gelo", amount: "15 ml", quantity: 15, unit: "ml", optional: false, category: "Vegetais" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Macerar frutas: No fundo de uma taça de gin balloon, macere levemente as amoras com o suco de limão siciliano.", timerSeconds: 30 },
      { stepNumber: 2, instruction: "Gelo abundante: Encha a taça até a borda com pedras grandes de gelo.", timerSeconds: 20 },
      { stepNumber: 3, instruction: "Completar com tônica: Despeje a água tônica zero lentamente pela haste de uma colher bailarina para preservar o gás borbulhante.", timerSeconds: 30 },
      { stepNumber: 4, instruction: "Aromatizar: Adicione as bagas de zimbro e espete o ramo de alecrim maçaricado brevemente na chama para soltar o aroma rústico." }
    ],
    chefTip: "Passar a chama do isqueiro no ramo de alecrim por 2 segundos antes de espetar no drink ativa os óleos essenciais da erva instantaneamente."
  }
];
