import { Recipe } from '../../src/types';

export const NEW_SNACKS_RECIPES: Recipe[] = [
  {
    id: "kn-snacks-561",
    title: "Chips Crocantes de Queijo Provolone com Orégano e Pimenta Calabresa",
    description: "Petisco estaladiço feito exclusivamente com fatias de provolone desidratadas na air fryer até formarem discos dourados e crocantes.",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80",
    category: "snacks",
    subcategory: "petiscos",
    categoryName: "Lanches e Petiscos",
    difficulty: "Fácil",
    prepTime: 5,
    cookTime: 8,
    servings: 2,
    rating: 4.9,
    reviewCount: 52,
    isPremium: false,
    isPopular: true,
    isNew: true,
    tags: ["chips", "provolone", "air fryer", "crocante", "zero carbo"],
    nutrition: { calories: 280, protein: 20, netCarbs: 0, fat: 22, fiber: 0, carbs: 0 },
    ingredients: [
      { id: "kn-sn561-1", name: "Fatias finas de queijo provolone defumado", amount: "150 g (12 fatias)", quantity: 150, unit: "g", optional: false, category: "Laticínios" },
      { id: "kn-sn561-2", name: "Orégano chileno desidratado", amount: "1 colher de chá", quantity: 3, unit: "g", optional: false, category: "Temperos" },
      { id: "kn-sn561-3", name: "Flocos de pimenta calabresa", amount: "1 pitada", quantity: 1, unit: "g", optional: false, category: "Temperos" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Dispor na cesta: Forre a cesta da air fryer com papel manteiga perfurado e acomode as fatias de provolone sem sobrepor.", timerSeconds: 60 },
      { stepNumber: 2, instruction: "Temperar: Salpique o orégano e a pimenta calabresa sobre as fatias.", timerSeconds: 30 },
      { stepNumber: 3, instruction: "Assar na air fryer: Asse a 180°C por 6 a 8 minutos até o queijo borbulhar intensamente e dourar nas bordas.", timerSeconds: 480 },
      { stepNumber: 4, instruction: "Esfriar para endurecer: Retire e deixe esfriar sobre papel toalha por 3 minutos para ficarem ultra crocantes." }
    ],
    chefTip: "O queijo sai macio da air fryer e ganha crocância de vidro à medida que esfria completamente."
  },
  {
    id: "kn-snacks-562",
    title: "Coxinha Cetogênica de Frango com Massa de Couve-Flor e Crosta de Parmesão",
    description: "O mais icônico salgado brasileiro recriado sem farinhas refinadas: massa aveludada de couve-flor e queijo recheada com frango desfiado cremoso.",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80",
    category: "snacks",
    subcategory: "salgados",
    categoryName: "Lanches e Petiscos",
    difficulty: "Médio",
    prepTime: 20,
    cookTime: 18,
    servings: 4,
    rating: 5.0,
    reviewCount: 68,
    isPremium: true,
    tags: ["coxinha", "couve-flor", "frango desfiado", "air fryer", "brasileiro"],
    nutrition: { calories: 310, protein: 26, netCarbs: 2, fat: 22, fiber: 2, carbs: 4 },
    ingredients: [
      { id: "kn-sn562-1", name: "Couve-flor cozida no vapor e espremida seca", amount: "400 g", quantity: 400, unit: "g", optional: false, category: "Vegetais" },
      { id: "kn-sn562-2", name: "Queijo muçarela ralado fino", amount: "120 g", quantity: 120, unit: "g", optional: false, category: "Laticínios" },
      { id: "kn-sn562-3", name: "Recheio de frango desfiado refogado", amount: "200 g", quantity: 200, unit: "g", optional: false, category: "Proteínas" },
      { id: "kn-sn562-4", name: "Requeijão cremoso de corte", amount: "50 g", quantity: 50, unit: "g", optional: false, category: "Laticínios" },
      { id: "kn-sn562-5", name: "Farinha de linhaça dourada e parmesão ralado", amount: "40 g", quantity: 40, unit: "g", optional: false, category: "Despensa" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Massa elástica: No processador, bata a couve-flor espremida com a muçarela derretida até formar uma massa moldável.", timerSeconds: 180 },
      { stepNumber: 2, instruction: "Moldar as coxinhas: Abra porções da massa na palma da mão, coloque o frango com requeijão no centro e feche no clássico formato de gota.", timerSeconds: 240 },
      { stepNumber: 3, instruction: "Empanamento crocante: Passe as coxinhas na mistura de parmesão com linhaça dourada.", timerSeconds: 120 },
      { stepNumber: 4, instruction: "Air fryer ou forno: Asse a 200°C por 18 minutos até a casca dourar e estalar ao toque.", timerSeconds: 1080 }
    ],
    chefTip: "Espremer a couve-flor em um pano de prato limpo até sair toda a água é o passo inegociável para a massa dar ponto de modelar sem grudar."
  },
  {
    id: "kn-snacks-563",
    title: "Crackers de Sementes Nobres com Alecrim Fresco e Flor de Sal",
    description: "Biscoitinhos estaladiços feitos com sementes de abóbora, chia, girassol e gergelim, assados lentamente até ficarem ultra crocantes.",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80",
    category: "snacks",
    subcategory: "crackers",
    categoryName: "Lanches e Petiscos",
    difficulty: "Fácil",
    prepTime: 10,
    cookTime: 25,
    servings: 4,
    rating: 4.8,
    reviewCount: 39,
    isPremium: false,
    tags: ["crackers", "sementes", "chia", "sem glúten", "lanche rápido"],
    nutrition: { calories: 220, protein: 8, netCarbs: 2, fat: 18, fiber: 5, carbs: 7 },
    ingredients: [
      { id: "kn-sn563-1", name: "Mix de sementes (abóbora, girassol e gergelim)", amount: "120 g", quantity: 120, unit: "g", optional: false, category: "Despensa" },
      { id: "kn-sn563-2", name: "Sementes de chia e linhaça dourada", amount: "60 g", quantity: 60, unit: "g", optional: false, category: "Despensa" },
      { id: "kn-sn563-3", name: "Água morna", amount: "100 ml", quantity: 100, unit: "ml", optional: false, category: "Despensa" },
      { id: "kn-sn563-4", name: "Azeite de oliva extravirgem", amount: "1 colher de sopa", quantity: 15, unit: "ml", optional: false, category: "Despensa" },
      { id: "kn-sn563-5", name: "Alecrim picadinho e flor de sal", amount: "1 colher de chá", quantity: 5, unit: "g", optional: false, category: "Temperos" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Hidratar as sementes: Misture todas as sementes com a água morna, azeite, sal e alecrim. Deixe repousar por 10 minutos até a chia e linhaça formarem um gel ligante natural.", timerSeconds: 600 },
      { stepNumber: 2, instruction: "Espalhar fininho: Transfira para uma assadeira forrada com papel manteiga e espalhe a massa com uma espátula até ficar bem fina e homogênea.", timerSeconds: 180 },
      { stepNumber: 3, instruction: "Marcar os quadrados: Com uma faca, marque as linhas dos biscoitos antes de assar.", timerSeconds: 60 },
      { stepNumber: 4, instruction: "Assar até estalar: Asse a 160°C por 25 a 30 minutos até secar completamente e quebrar com facilidade.", timerSeconds: 1500 }
    ],
    chefTip: "O mucilagem natural da chia e linhaça cria a liga dos biscoitos sem precisar de ovos ou qualquer tipo de farinha."
  },
  {
    id: "kn-snacks-564",
    title: "Pão de Minuto de Caneca no Micro-ondas com Farinha de Amêndoas e Manteiga",
    description: "Pãozinho cetogênico fofo e quentinho que fica pronto em 90 segundos, ideal para tostar na frigideira com queijo derretido.",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80",
    category: "snacks",
    subcategory: "pães keto",
    categoryName: "Lanches e Petiscos",
    difficulty: "Fácil",
    prepTime: 2,
    cookTime: 2,
    servings: 1,
    rating: 4.9,
    reviewCount: 75,
    isPremium: false,
    tags: ["pão de caneca", "micro-ondas", "farinha de amêndoas", "rápido", "café da manhã"],
    nutrition: { calories: 260, protein: 11, netCarbs: 2, fat: 23, fiber: 2, carbs: 4 },
    ingredients: [
      { id: "kn-sn564-1", name: "Ovo inteiro", amount: "1 unidade", quantity: 1, unit: "unidade", optional: false, category: "Proteínas" },
      { id: "kn-sn564-2", name: "Farinha de amêndoas pura", amount: "3 colheres de sopa", quantity: 30, unit: "g", optional: false, category: "Despensa" },
      { id: "kn-sn564-3", name: "Manteiga derretida", amount: "1 colher de sopa", quantity: 15, unit: "g", optional: false, category: "Despensa" },
      { id: "kn-sn564-4", name: "Fermento químico em pó", amount: "1/2 colher de chá", quantity: 3, unit: "g", optional: false, category: "Despensa" },
      { id: "kn-sn564-5", name: "Sal marinho e orégano", amount: "1 pitada", quantity: 1, unit: "g", optional: false, category: "Temperos" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Bater o ovo: Em uma caneca ou potinho quadrado untado, bata bem o ovo com um garfo por 30 segundos para tirar o cheiro de ovo.", timerSeconds: 30 },
      { stepNumber: 2, instruction: "Incorporar os ingredientes: Adicione a farinha de amêndoas, a manteiga derretida, sal e o fermento, mexendo até ficar homogêneo.", timerSeconds: 30 },
      { stepNumber: 3, instruction: "Micro-ondas: Leve ao micro-ondas em potência alta por 90 segundos até inflar e firmar.", timerSeconds: 90 },
      { stepNumber: 4, instruction: "Tostar na chapa: Desenforme, corte ao meio e doure na frigideira com manteiga para criar uma crosta de padaria." }
    ],
    chefTip: "Tostar as metades na frigideira de ferro com manteiga após o micro-ondas dá aroma e textura irresistível de pão francês na chapa."
  },
  {
    id: "kn-snacks-565",
    title: "Patê Nobre de Gorgonzola com Nozes Tostadas e Nata Fresca Gaúcha",
    description: "Pasta ultra aveludada para passar em vegetais crocantes ou crackers de sementes, com equilíbrio perfeito de intensidade e suavidade.",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80",
    category: "snacks",
    subcategory: "patês",
    categoryName: "Lanches e Petiscos",
    difficulty: "Fácil",
    prepTime: 8,
    cookTime: 0,
    servings: 4,
    rating: 4.8,
    reviewCount: 31,
    isPremium: true,
    tags: ["patê", "gorgonzola", "nozes", "antepasto", "aperitivo"],
    nutrition: { calories: 270, protein: 8, netCarbs: 1, fat: 26, fiber: 1, carbs: 2 },
    ingredients: [
      { id: "kn-sn565-1", name: "Queijo gorgonzola em pedaços", amount: "120 g", quantity: 120, unit: "g", optional: false, category: "Laticínios" },
      { id: "kn-sn565-2", name: "Cream cheese ou nata fresca", amount: "120 g", quantity: 120, unit: "g", optional: false, category: "Laticínios" },
      { id: "kn-sn565-3", name: "Nozes picadas tostadas", amount: "40 g", quantity: 40, unit: "g", optional: false, category: "Despensa" },
      { id: "kn-sn565-4", name: "Azeite de oliva extravirgem", amount: "1 colher de sopa", quantity: 15, unit: "ml", optional: false, category: "Despensa" },
      { id: "kn-sn565-5", name: "Pimenta branca moída e ciboulette", amount: "1 colher de chá", quantity: 3, unit: "g", optional: false, category: "Temperos" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Amassar o queijo: Em um bowl, amasse o queijo gorgonzola com o cream cheese usando um garfo até formar uma pasta consistente.", timerSeconds: 120 },
      { stepNumber: 2, instruction: "Aromatizar: Adicione o azeite de oliva e uma pitada de pimenta branca moída na hora.", timerSeconds: 30 },
      { stepNumber: 3, instruction: "Adicionar crocância: Misture as nozes tostadas picadinhas reservando algumas para a decoração.", timerSeconds: 60 },
      { stepNumber: 4, instruction: "Servir: Transfira para um ramequim e decore com pedaços de nozes e ciboulette picada." }
    ],
    chefTip: "Deixe os ingredientes em temperatura ambiente por 15 minutos antes do preparo para misturarem sem pelotas indesejadas."
  },
  {
    id: "kn-snacks-566",
    title: "Torresmo Pururuca Perfeito na Air Fryer com Limão e Flor de Sal",
    description: "Tiras de barriga suína fatiadas e desidratadas na air fryer até estourarem em pururuca sequinha, leve e ultracrocante.",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80",
    category: "snacks",
    subcategory: "petiscos",
    categoryName: "Lanches e Petiscos",
    difficulty: "Fácil",
    prepTime: 10,
    cookTime: 30,
    servings: 4,
    rating: 5.0,
    reviewCount: 84,
    isPremium: false,
    tags: ["torresmo", "pururuca", "air fryer", "barriga de porco", "petisco"],
    nutrition: { calories: 380, protein: 24, netCarbs: 0, fat: 32, fiber: 0, carbs: 0 },
    ingredients: [
      { id: "kn-sn566-1", name: "Panceta ou barriga de porco fresca em tiras", amount: "600 g", quantity: 600, unit: "g", optional: false, category: "Carnes" },
      { id: "kn-sn566-2", name: "Bicarbonato de sódio ou fermento em pó", amount: "1/2 colher de chá", quantity: 2, unit: "g", optional: false, category: "Despensa" },
      { id: "kn-sn566-3", name: "Vinagre de álcool ou suco de limão", amount: "1 colher de sopa", quantity: 15, unit: "ml", optional: false, category: "Despensa" },
      { id: "kn-sn566-4", name: "Sal refinado e pimenta-do-reino", amount: "1 colher de chá", quantity: 5, unit: "g", optional: false, category: "Temperos" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Secar e temperar a pele: Seque muito bem o couro da panceta. Pincele o couro com o vinagre e esfregue o bicarbonato com sal fino.", timerSeconds: 180, tip: "O bicarbonato com vinagre ajuda o couro a pururucar formando microbolhas estaladiças." },
      { stepNumber: 2, instruction: "Primeiro cozimento: Coloque na air fryer a 160°C por 20 minutos para desidratar a gordura.", timerSeconds: 1200 },
      { stepNumber: 3, instruction: "Estourar a pururuca: Aumente a temperatura para 200°C e asse por mais 10 a 12 minutos até o couro pipocar inteiramente pururuca.", timerSeconds: 600 },
      { stepNumber: 4, instruction: "Servir: Escorra no papel toalha e sirva com gomos de limão caipira." }
    ],
    chefTip: "O segredo do torresmo sequinho sem espirrar óleo é a técnica das duas temperaturas na air fryer: desidratar a 160°C e estourar a 200°C."
  },
  {
    id: "kn-snacks-567",
    title: "Muffins Salgados de Espinafre com Queijo Minas Padrão e Bacon",
    description: "Bolinhos salgados práticos e fofos recheados com bacon crocante e queijo derretido, perfeitos para lanches de transporte.",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80",
    category: "snacks",
    subcategory: "salgados",
    categoryName: "Lanches e Petiscos",
    difficulty: "Fácil",
    prepTime: 10,
    cookTime: 18,
    servings: 3,
    rating: 4.8,
    reviewCount: 36,
    isPremium: false,
    tags: ["muffin", "espinafre", "bacon", "marmita", "lanche saudável"],
    nutrition: { calories: 260, protein: 14, netCarbs: 2, fat: 22, fiber: 1, carbs: 3 },
    ingredients: [
      { id: "kn-sn567-1", name: "Ovos caipiras inteiros", amount: "3 unidades", quantity: 3, unit: "unidade", optional: false, category: "Proteínas" },
      { id: "kn-sn567-2", name: "Farinha de amêndoas", amount: "40 g", quantity: 40, unit: "g", optional: false, category: "Despensa" },
      { id: "kn-sn567-3", name: "Queijo minas padrão ou muçarela em cubinhos", amount: "80 g", quantity: 80, unit: "g", optional: false, category: "Laticínios" },
      { id: "kn-sn567-4", name: "Bacon artesanal frito em cubinhos", amount: "60 g", quantity: 60, unit: "g", optional: false, category: "Carnes" },
      { id: "kn-sn567-5", name: "Espinafre fresco picadinho", amount: "60 g", quantity: 60, unit: "g", optional: false, category: "Vegetais" },
      { id: "kn-sn567-6", name: "Fermento em pó", amount: "1 colher de chá", quantity: 5, unit: "g", optional: false, category: "Despensa" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Bater a massa: Em um bowl, bata os ovos com fouet, junte a farinha de amêndoas e o fermento.", timerSeconds: 60 },
      { stepNumber: 2, instruction: "Incorporar o recheio: Adicione o queijo, o bacon frito e o espinafre picado com sal e pimenta.", timerSeconds: 60 },
      { stepNumber: 3, instruction: "Distribuir nas forminhas: Despeje a massa em 6 forminhas de silicone para muffin.", timerSeconds: 60 },
      { stepNumber: 4, instruction: "Assar no forno: Asse a 180°C por 18 minutos até crescerem dourados e o palito sair limpo.", timerSeconds: 1080 }
    ],
    chefTip: "Esses muffins congelam perfeitamente por até 60 dias; basta reaquecer 1 minuto no micro-ondas para um lanche fresco a qualquer hora."
  },
  {
    id: "kn-snacks-568",
    title: "Dadinhos Cetogênicos de Queijo Coalho com Crosta Dourada na Air Fryer",
    description: "Cubos de queijo coalho artesanal dourados até formarem casquinha crocante e centro que repuxa, servidos com raspas de limão siciliano.",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80",
    category: "snacks",
    subcategory: "petiscos",
    categoryName: "Lanches e Petiscos",
    difficulty: "Fácil",
    prepTime: 5,
    cookTime: 10,
    servings: 2,
    rating: 4.9,
    reviewCount: 45,
    isPremium: false,
    tags: ["queijo coalho", "dadinhos", "air fryer", "petisco brasileiro"],
    nutrition: { calories: 310, protein: 22, netCarbs: 1, fat: 24, fiber: 0, carbs: 1 },
    ingredients: [
      { id: "kn-sn568-1", name: "Queijo coalho em bloco cortado em cubos de 2cm", amount: "250 g", quantity: 250, unit: "g", optional: false, category: "Laticínios" },
      { id: "kn-sn568-2", name: "Orégano fresco e azeite", amount: "1 colher de chá", quantity: 5, unit: "g", optional: false, category: "Temperos" },
      { id: "kn-sn568-3", name: "Raspas de limão siciliano e pimenta moída", amount: "1 pitada", quantity: 1, unit: "g", optional: false, category: "Temperos" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Cortar o queijo: Corte o queijo coalho em cubos regulares de 2cm.", timerSeconds: 60 },
      { stepNumber: 2, instruction: "Aromatizar: Pincele os cubos levemente com azeite e orégano.", timerSeconds: 30 },
      { stepNumber: 3, instruction: "Air fryer: Pré-aqueça a 200°C. Coloque os cubos sem encostar uns nos outros e asse por 8 a 10 minutos mexendo na metade do tempo até dourarem.", timerSeconds: 600 },
      { stepNumber: 4, instruction: "Servir: Finalize com as raspas de limão siciliano para quebrar a gordura." }
    ],
    chefTip: "Não deixe os cubos grudados na cesta para que o ar quente circule por todos os 6 lados e crie casca estaladiça uniforme."
  },
  {
    id: "kn-snacks-569",
    title: "Guacamole Cremoso Tradicional com Abacate Hass, Coentro e Pimenta Jalapeño",
    description: "Receita autêntica mexicana de guacamole rústico com suco de limão taiti, azeite extravirgem e cebola roxa bem crocante.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    category: "snacks",
    subcategory: "patês",
    categoryName: "Lanches e Petiscos",
    difficulty: "Fácil",
    prepTime: 8,
    cookTime: 0,
    servings: 3,
    rating: 4.9,
    reviewCount: 47,
    isPremium: false,
    tags: ["guacamole", "abacate", "mexicano", "antepasto", "gordura boa"],
    nutrition: { calories: 210, protein: 3, netCarbs: 2, fat: 20, fiber: 6, carbs: 8 },
    ingredients: [
      { id: "kn-sn569-1", name: "Abacates hass maduros", amount: "2 unidades (300 g)", quantity: 300, unit: "g", optional: false, category: "Vegetais" },
      { id: "kn-sn569-2", name: "Tomate sem sementes picado", amount: "60 g", quantity: 60, unit: "g", optional: false, category: "Vegetais" },
      { id: "kn-sn569-3", name: "Cebola roxa picada em cubinhos", amount: "40 g", quantity: 40, unit: "g", optional: false, category: "Vegetais" },
      { id: "kn-sn569-4", name: "Suco de 1 limão taiti fresco", amount: "20 ml", quantity: 20, unit: "ml", optional: false, category: "Vegetais" },
      { id: "kn-sn569-5", name: "Coentro fresco picado e azeite", amount: "2 colheres de sopa", quantity: 15, unit: "g", optional: false, category: "Temperos" },
      { id: "kn-sn569-6", name: "Pimenta jalapeño picada fina e sal", amount: "1 colher de chá", quantity: 5, unit: "g", optional: false, category: "Temperos" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Amassar o abacate: Retire a polpa dos abacates e amasse com um garfo em uma tigela rústica, mantendo pequenos pedaços para dar textura.", timerSeconds: 120 },
      { stepNumber: 2, instruction: "Adicionar acidez: Verta imediatamente o suco de limão sobre o abacate para temperar e evitar qualquer oxidação escura.", timerSeconds: 30 },
      { stepNumber: 3, instruction: "Misturar os vegetais: Incorpore a cebola roxa, o tomate, a pimenta jalapeño e o sal marinho.", timerSeconds: 60 },
      { stepNumber: 4, instruction: "Finalizar: Cubra com o coentro fresco picado e um fio de azeite extravirgem." }
    ],
    chefTip: "O limão adicionado imediatamente após abrir o abacate preserva a cor verde vibrante por horas sem escurecer."
  },
  {
    id: "kn-snacks-570",
    title: "Enroladinhos de Abobrinha com Ricota Fresca, Castanhas e Pesto",
    description: "Lâminas tenras de abobrinha recheadas com creme de ricota artesanal temperada e castanhas crocantes, servidas frias ou mornas.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    category: "snacks",
    subcategory: "petiscos",
    categoryName: "Lanches e Petiscos",
    difficulty: "Fácil",
    prepTime: 12,
    cookTime: 5,
    servings: 3,
    rating: 4.8,
    reviewCount: 28,
    isPremium: true,
    tags: ["enroladinho", "abobrinha", "ricota", "pesto", "finger food"],
    nutrition: { calories: 190, protein: 8, netCarbs: 2, fat: 16, fiber: 2, carbs: 4 },
    ingredients: [
      { id: "kn-sn570-1", name: "Abobrinhas italianas cortadas em lâminas compridas", amount: "2 unidades (300 g)", quantity: 300, unit: "g", optional: false, category: "Vegetais" },
      { id: "kn-sn570-2", name: "Ricota fresca prensada esfarelada", amount: "150 g", quantity: 150, unit: "g", optional: false, category: "Laticínios" },
      { id: "kn-sn570-3", name: "Pesto de manjericão", amount: "2 colheres de sopa", quantity: 30, unit: "g", optional: false, category: "Despensa" },
      { id: "kn-sn570-4", name: "Castanha-do-pará picada", amount: "30 g", quantity: 30, unit: "g", optional: false, category: "Despensa" },
      { id: "kn-sn570-5", name: "Azeite de oliva e sal", amount: "1 colher de sopa", quantity: 15, unit: "ml", optional: false, category: "Despensa" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Grelhar as lâminas: Grelhe as tiras de abobrinha por 1 minuto de cada lado apenas para torná-las flexíveis para enrolar.", timerSeconds: 120 },
      { stepNumber: 2, instruction: "Recheio aromático: Em uma tigela, misture a ricota com o pesto, a castanha picada, sal e pimenta.", timerSeconds: 60 },
      { stepNumber: 3, instruction: "Rechear e enrolar: Coloque uma colher de chá do recheio em uma das pontas da lâmina de abobrinha e enrole firmemente.", timerSeconds: 180 },
      { stepNumber: 4, instruction: "Apresentar: Posicione os rolinhos em pé no prato e regue com um fio de azeite e folhas de manjericão." }
    ],
    chefTip: "Grelhar por apenas 1 minuto deixa a abobrinha flexível para enrolar sem quebrar e mantém sua mordida fresca."
  }
];
