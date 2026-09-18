import { Recipe } from '../../src/types';

export const NEW_POULTRY_RECIPES: Recipe[] = [
  {
    id: "kn-chicken-511",
    title: "Sobrecoxas de Frango Desossadas na Air Fryer com Lemon Pepper e Alecrim",
    description: "Sobrecoxas marinadas no limão siciliano, alho e azeite, com pele pururucada e carne suculenta feita rapidamente na air fryer.",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    category: "poultry",
    subcategory: "air fryer",
    categoryName: "Frango e Aves",
    difficulty: "Fácil",
    prepTime: 10,
    cookTime: 22,
    servings: 3,
    rating: 4.9,
    reviewCount: 41,
    isPremium: false,
    isPopular: true,
    isNew: true,
    tags: ["sobrecoxa", "air fryer", "lemon pepper", "rápido", "frango"],
    nutrition: { calories: 430, protein: 38, netCarbs: 1, fat: 30, fiber: 0, carbs: 1 },
    ingredients: [
      { id: "kn-c511-1", name: "Sobrecoxas de frango com pele desossadas", amount: "600 g", quantity: 600, unit: "g", optional: false, category: "Proteínas" },
      { id: "kn-c511-2", name: "Lemon pepper artesanal", amount: "1 colher de sopa", quantity: 15, unit: "g", optional: false, category: "Temperos" },
      { id: "kn-c511-3", name: "Dentes de alho amassados", amount: "3 unidades", quantity: 15, unit: "g", optional: false, category: "Temperos" },
      { id: "kn-c511-4", name: "Ramos de alecrim fresco", amount: "2 unidades", quantity: 5, unit: "g", optional: false, category: "Temperos" },
      { id: "kn-c511-5", name: "Azeite de oliva extravirgem", amount: "2 colheres de sopa", quantity: 30, unit: "ml", optional: false, category: "Despensa" },
      { id: "kn-c511-6", name: "Suco de 1/2 limão siciliano", amount: "20 ml", quantity: 20, unit: "ml", optional: false, category: "Vegetais" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Marinar o frango: Seque bem as sobrecoxas com papel toalha. Tempere com o lemon pepper, alho, alecrim picado, azeite e o suco de limão. Deixe marinar por 10 minutos.", timerSeconds: 600 },
      { stepNumber: 2, instruction: "Posicionar na cesta: Pré-aqueça a air fryer a 190°C. Coloque o frango com a pele voltada para baixo.", timerSeconds: 60 },
      { stepNumber: 3, instruction: "Primeiro cozimento: Asse por 12 minutos para cozinhar o interior e reter o suco.", timerSeconds: 720 },
      { stepNumber: 4, instruction: "Pururucar a pele: Vire as sobrecoxas deixando a pele para cima, aumente para 200°C e asse por mais 8 a 10 minutos até a pele borbulhar dourada e super crocante.", timerSeconds: 600 }
    ],
    chefTip: "Secar a pele com papel toalha antes de marinar é o segredo para uma crocância estaladiça sem precisar de nenhuma farinha."
  },
  {
    id: "kn-chicken-512",
    title: "Frango à Parmegiana Cetogênico com Crosta de Parmesão e Molho Rústico",
    description: "Filés macios de peito de frango empanados em queijo parmesão e farinha de amêndoas, cobertos com molho caseiro e muçarela gratinada.",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    category: "poultry",
    subcategory: "assados",
    categoryName: "Frango e Aves",
    difficulty: "Médio",
    prepTime: 15,
    cookTime: 20,
    servings: 3,
    rating: 4.8,
    reviewCount: 52,
    isPremium: true,
    tags: ["parmegiana", "parmesão", "forno", "clássico", "gratinado"],
    nutrition: { calories: 490, protein: 52, netCarbs: 3, fat: 28, fiber: 1, carbs: 4 },
    ingredients: [
      { id: "kn-c512-1", name: "Filés de peito de frango", amount: "500 g", quantity: 500, unit: "g", optional: false, category: "Proteínas" },
      { id: "kn-c512-2", name: "Queijo parmesão ralado fino", amount: "80 g", quantity: 80, unit: "g", optional: false, category: "Laticínios" },
      { id: "kn-c512-3", name: "Farinha de amêndoas", amount: "30 g", quantity: 30, unit: "g", optional: false, category: "Despensa" },
      { id: "kn-c512-4", name: "Ovo batido", amount: "1 unidade", quantity: 1, unit: "unidade", optional: false, category: "Proteínas" },
      { id: "kn-c512-5", name: "Molho de tomate pelado rústico sem açúcar", amount: "150 g", quantity: 150, unit: "g", optional: false, category: "Despensa" },
      { id: "kn-c512-6", name: "Queijo muçarela fatiado", amount: "120 g", quantity: 120, unit: "g", optional: false, category: "Laticínios" },
      { id: "kn-c512-7", name: "Folhas de manjericão fresco e orégano", amount: "1 punhado", quantity: 5, unit: "g", optional: false, category: "Temperos" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Empanar os filés: Tempere os filés com sal e alho. Passe no ovo batido e depois na mistura de queijo parmesão e farinha de amêndoas pressionando bem.", timerSeconds: 180 },
      { stepNumber: 2, instruction: "Selar na frigideira: Doure os filés em azeite de oliva quente por 3 minutos de cada lado até criar uma crosta dourada e crocante.", timerSeconds: 360 },
      { stepNumber: 3, instruction: "Montar na travessa: Disponha os filés selados num refratário, coloque 2 colheres de molho rústico sobre cada um e cubra com as fatias de muçarela.", timerSeconds: 120 },
      { stepNumber: 4, instruction: "Gratinar ao forno: Leve ao forno pré-aquecido a 210°C por 10 minutos até o queijo borbulhar com pontinhos tostados. Finalize com manjericão fresco.", timerSeconds: 600 }
    ],
    chefTip: "Não encharque o filé com molho; coloque apenas uma colherada no centro para que as bordas de parmesão continuem crocantes."
  },
  {
    id: "kn-chicken-513",
    title: "Peito de Frango Recheado com Brie e Aspargos Envolto em Bacon Artesanal",
    description: "Filé nobre recheado com queijo brie cremoso e aspargos tenros, envolto em tiras de bacon crocante que mantêm o interior suculento.",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    category: "poultry",
    subcategory: "recheados",
    categoryName: "Frango e Aves",
    difficulty: "Médio",
    prepTime: 15,
    cookTime: 25,
    servings: 2,
    rating: 5.0,
    reviewCount: 37,
    isPremium: true,
    tags: ["peito de frango", "queijo brie", "bacon", "aspargos", "jantar nobre"],
    nutrition: { calories: 540, protein: 48, netCarbs: 2, fat: 36, fiber: 1, carbs: 3 },
    ingredients: [
      { id: "kn-c513-1", name: "Peito de frango espesso", amount: "400 g (2 filés)", quantity: 400, unit: "g", optional: false, category: "Proteínas" },
      { id: "kn-c513-2", name: "Queijo brie fatiado", amount: "80 g", quantity: 80, unit: "g", optional: false, category: "Laticínios" },
      { id: "kn-c513-3", name: "Aspargos verdes frescos", amount: "6 unidades", quantity: 80, unit: "g", optional: false, category: "Vegetais" },
      { id: "kn-c513-4", name: "Tiras finas de bacon artesanal", amount: "6 fatias", quantity: 100, unit: "g", optional: false, category: "Carnes" },
      { id: "kn-c513-5", name: "Manteiga e tomilho fresco", amount: "1 colher de sopa", quantity: 15, unit: "g", optional: false, category: "Despensa" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Fazer o bolsinho: Com uma faca afiada, faça uma incisão lateral em cada peito de frango criando uma cavidade profunda sem furar as bordas.", timerSeconds: 120 },
      { stepNumber: 2, instruction: "Rechear: Introduza as fatias de queijo brie e 3 pontas de aspargos dentro da cavidade.", timerSeconds: 120 },
      { stepNumber: 3, instruction: "Envolver com bacon: Enrole 3 fatias de bacon ao redor de cada filé, cobrindo a abertura para selar o queijo por dentro.", timerSeconds: 180 },
      { stepNumber: 4, instruction: "Assar no forno: Asse a 200°C por 20 minutos e termine no modo dourador (broil) por 3 minutos até o bacon ficar ultra crocante.", timerSeconds: 1380 }
    ],
    chefTip: "O bacon protege as fibras do peito de frango do ressecamento durante o cozimento, garantindo mordida tenra e suculenta."
  },
  {
    id: "kn-chicken-514",
    title: "Iscas de Frango Crocantes Empanadas na Farinha de Linhaça Dourada e Queijo",
    description: "Nuggets caseiros e nobres de frango, empanados numa mistura super crocante de linhaça dourada, parmesão e ervas aromáticas.",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80",
    category: "poultry",
    subcategory: "grelhados",
    categoryName: "Frango e Aves",
    difficulty: "Fácil",
    prepTime: 12,
    cookTime: 15,
    servings: 3,
    rating: 4.8,
    reviewCount: 46,
    isPremium: false,
    tags: ["iscas de frango", "crocante", "linhaça", "air fryer", "lanche"],
    nutrition: { calories: 380, protein: 42, netCarbs: 1, fat: 22, fiber: 4, carbs: 5 },
    ingredients: [
      { id: "kn-c514-1", name: "Peito de frango cortado em tiras/iscas", amount: "500 g", quantity: 500, unit: "g", optional: false, category: "Proteínas" },
      { id: "kn-c514-2", name: "Farinha de linhaça dourada moída fina", amount: "50 g", quantity: 50, unit: "g", optional: false, category: "Despensa" },
      { id: "kn-c514-3", name: "Queijo parmesão ralado", amount: "50 g", quantity: 50, unit: "g", optional: false, category: "Laticínios" },
      { id: "kn-c514-4", name: "Páprica doce e alho em pó", amount: "1 colher de chá", quantity: 5, unit: "g", optional: false, category: "Temperos" },
      { id: "kn-c514-5", name: "Ovo batido com 1 colher de azeite", amount: "1 unidade", quantity: 1, unit: "unidade", optional: false, category: "Proteínas" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Temperar as iscas: Tempere o frango com sal, pimenta, páprica e alho em pó.", timerSeconds: 60 },
      { stepNumber: 2, instruction: "Empanamento duplo: Misture a farinha de linhaça e o parmesão. Passe o frango no ovo e pressione bem na farinha.", timerSeconds: 180 },
      { stepNumber: 3, instruction: "Cozinhar na air fryer: Asse a 190°C por 12 a 14 minutos, virando na metade do tempo até dourarem intensamente.", timerSeconds: 840 }
    ],
    chefTip: "Pressione a farinha com firmeza no frango para que a crosta não se solte durante a fritura na air fryer."
  },
  {
    id: "kn-chicken-515",
    title: "Frango Cremoso com Espinafre, Alho Dourado e Queijo Gorgonzola Suave",
    description: "Cubos de frango selados na manteiga envolvidos num molho rico de gorgonzola, nata fresca e folhas de espinafre baby tenras.",
    image: "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    category: "poultry",
    subcategory: "cremosos",
    categoryName: "Frango e Aves",
    difficulty: "Fácil",
    prepTime: 8,
    cookTime: 14,
    servings: 2,
    rating: 4.9,
    reviewCount: 35,
    isPremium: true,
    tags: ["gorgonzola", "espinafre", "cremoso", "jantar rápido", "aves"],
    nutrition: { calories: 470, protein: 44, netCarbs: 2, fat: 31, fiber: 1, carbs: 3 },
    ingredients: [
      { id: "kn-c515-1", name: "Filé de frango em cubos médios", amount: "400 g", quantity: 400, unit: "g", optional: false, category: "Proteínas" },
      { id: "kn-c515-2", name: "Queijo gorgonzola esfarelado", amount: "70 g", quantity: 70, unit: "g", optional: false, category: "Laticínios" },
      { id: "kn-c515-3", name: "Nata fresca ou creme de leite de lata", amount: "120 ml", quantity: 120, unit: "ml", optional: false, category: "Laticínios" },
      { id: "kn-c515-4", name: "Espinafre fresco", amount: "100 g", quantity: 100, unit: "g", optional: false, category: "Vegetais" },
      { id: "kn-c515-5", name: "Alho laminado dourado", amount: "2 dentes", quantity: 10, unit: "g", optional: false, category: "Temperos" },
      { id: "kn-c515-6", name: "Manteiga ghee", amount: "1 colher de sopa", quantity: 15, unit: "g", optional: false, category: "Despensa" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Selar o frango: Derreta o ghee na frigideira bem quente e doure os cubos de frango por 6 minutos até ficarem bem corados.", timerSeconds: 360 },
      { stepNumber: 2, instruction: "Alho e espinafre: Junte as lâminas de alho e o espinafre, mexendo por 1 minuto até murchar.", timerSeconds: 60 },
      { stepNumber: 3, instruction: "Molho aveludado: Adicione a nata e o queijo gorgonzola em fogo baixo. Mexa até o queijo fundir completamente criando um molho aveludado.", timerSeconds: 180 },
      { stepNumber: 4, instruction: "Finalizar: Desligue e tempere com pimenta-do-reino moída na hora." }
    ],
    chefTip: "Não coloque sal adicional antes de provar o molho pronto, pois o gorgonzola já possui teor de sal marcante."
  },
  {
    id: "kn-chicken-516",
    title: "Coxas de Frango Assadas ao Forno com Crosta de Páprica Defumada e Alho",
    description: "Coxas de frango com osso douradas no forno em alta temperatura, aromatizadas com páprica espanhola defumada e ervas silvestres.",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    category: "poultry",
    subcategory: "assados",
    categoryName: "Frango e Aves",
    difficulty: "Fácil",
    prepTime: 10,
    cookTime: 35,
    servings: 4,
    rating: 4.8,
    reviewCount: 39,
    isPremium: false,
    tags: ["coxas de frango", "páprica defumada", "forno", "econômico"],
    nutrition: { calories: 390, protein: 35, netCarbs: 1, fat: 27, fiber: 0, carbs: 1 },
    ingredients: [
      { id: "kn-c516-1", name: "Coxas de frango com pele", amount: "800 g (6 unidades)", quantity: 800, unit: "g", optional: false, category: "Proteínas" },
      { id: "kn-c516-2", name: "Páprica defumada nobre", amount: "1 colher de sopa", quantity: 15, unit: "g", optional: false, category: "Temperos" },
      { id: "kn-c516-3", name: "Alho em pó e cebola em pó", amount: "1 colher de chá", quantity: 5, unit: "g", optional: false, category: "Temperos" },
      { id: "kn-c516-4", name: "Azeite de oliva extravirgem", amount: "2 colheres de sopa", quantity: 30, unit: "ml", optional: false, category: "Despensa" },
      { id: "kn-c516-5", name: "Sal marinho e tomilho seco", amount: "1 colher de chá", quantity: 5, unit: "g", optional: false, category: "Temperos" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Temperar: Misture a páprica, alho em pó, azeite e sal, esfregando vigorosamente sobre as coxas de frango.", timerSeconds: 180 },
      { stepNumber: 2, instruction: "Dispor na assadeira: Acomode as coxas com espaço entre elas numa assadeira antiaderente.", timerSeconds: 60 },
      { stepNumber: 3, instruction: "Assar no forno: Leve ao forno a 200°C por 35 minutos até a pele pururucar e o termômetro culinário marcar 75°C no osso.", timerSeconds: 2100 }
    ],
    chefTip: "Deixe espaço entre as coxas na assadeira; se ficarem coladas, elas cozinham no vapor ao invés de assar crocantes."
  },
  {
    id: "kn-chicken-517",
    title: "Frango Xadrez Cetogênico com Pimentões Nobres e Castanha de Caju Tostada",
    description: "Versão low carb do clássico oriental preparada com molho rico à base de shoyu de coco, óleo de gergelim torrado e castanhas crocantes.",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80",
    category: "poultry",
    subcategory: "grelhados",
    categoryName: "Frango e Aves",
    difficulty: "Fácil",
    prepTime: 12,
    cookTime: 12,
    servings: 3,
    rating: 4.9,
    reviewCount: 44,
    isPremium: true,
    tags: ["frango xadrez", "oriental", "castanha de caju", "shoyu de coco"],
    nutrition: { calories: 410, protein: 39, netCarbs: 4, fat: 26, fiber: 2, carbs: 6 },
    ingredients: [
      { id: "kn-c517-1", name: "Peito de frango em cubos grandes", amount: "500 g", quantity: 500, unit: "g", optional: false, category: "Proteínas" },
      { id: "kn-c517-2", name: "Pimentões vermelho e amarelo em cubos", amount: "120 g", quantity: 120, unit: "g", optional: false, category: "Vegetais" },
      { id: "kn-c517-3", name: "Castanha de caju tostada sem sal", amount: "40 g", quantity: 40, unit: "g", optional: false, category: "Despensa" },
      { id: "kn-c517-4", name: "Shoyu de coco ou aminos de coco", amount: "3 colheres de sopa", quantity: 45, unit: "ml", optional: false, category: "Despensa" },
      { id: "kn-c517-5", name: "Óleo de gergelim torrado", amount: "1 colher de sopa", quantity: 15, unit: "ml", optional: false, category: "Despensa" },
      { id: "kn-c517-6", name: "Gengibre ralado e cebolinha", amount: "2 colheres de sopa", quantity: 15, unit: "g", optional: false, category: "Temperos" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Dourar o frango na wok: Aqueça a wok com metade do óleo e sele o frango em fogo bem alto por 6 minutos.", timerSeconds: 360 },
      { stepNumber: 2, instruction: "Vegetais crocantes: Adicione os pimentões, alho e gengibre. Salteie rapidamente por 3 minutos mantendo a crocância viva.", timerSeconds: 180 },
      { stepNumber: 3, instruction: "Molho oriental: Despeje o shoyu de coco e o óleo de gergelim torrado, deixando ferver e envolver os ingredientes por 2 minutos.", timerSeconds: 120 },
      { stepNumber: 4, instruction: "Finalizar: Desligue e incorpore as castanhas de caju tostadas e a cebolinha picada." }
    ],
    chefTip: "O shoyu de coco confere notas adocicadas naturais típicas da culinária asiática sem adição de açúcar ou xaropes."
  },
  {
    id: "kn-chicken-518",
    title: "Strogonoff Nobre de Frango com Champignon Fresco e Nata Gaúcha",
    description: "O mais amado clássico brasileiro em versão cetogênica impecável: filé de frango em tiras, cogumelos frescos, nata e mostarda dijon.",
    image: "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    category: "poultry",
    subcategory: "cremosos",
    categoryName: "Frango e Aves",
    difficulty: "Fácil",
    prepTime: 10,
    cookTime: 15,
    servings: 3,
    rating: 4.9,
    reviewCount: 68,
    isPremium: false,
    tags: ["strogonoff", "nata", "champignon", "conforto", "almoço"],
    nutrition: { calories: 440, protein: 41, netCarbs: 3, fat: 29, fiber: 1, carbs: 4 },
    ingredients: [
      { id: "kn-c518-1", name: "Peito de frango cortado em tiras finas", amount: "500 g", quantity: 500, unit: "g", optional: false, category: "Proteínas" },
      { id: "kn-c518-2", name: "Cogumelos champignon frescos fatiados", amount: "150 g", quantity: 150, unit: "g", optional: false, category: "Vegetais" },
      { id: "kn-c518-3", name: "Nata pura fresca ou creme de leite fresco", amount: "150 g", quantity: 150, unit: "g", optional: false, category: "Laticínios" },
      { id: "kn-c518-4", name: "Mostarda Dijon clássica", amount: "1 colher de sopa", quantity: 15, unit: "g", optional: false, category: "Despensa" },
      { id: "kn-c518-5", name: "Extrato de tomate concentrado 100% puro", amount: "1 colher de sopa", quantity: 20, unit: "g", optional: false, category: "Despensa" },
      { id: "kn-c518-6", name: "Manteiga nobre", amount: "20 g", quantity: 20, unit: "g", optional: false, category: "Despensa" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Dourar o frango: Em frigideira funda bem quente, doure as tiras de frango na manteiga aos poucos para não juntar água.", timerSeconds: 360 },
      { stepNumber: 2, instruction: "Cogumelos: Adicione os champignons fatiados e refogue por 3 minutos.", timerSeconds: 180 },
      { stepNumber: 3, instruction: "Base de sabor: Misture a mostarda Dijon e o extrato de tomate concentrado, mexendo bem.", timerSeconds: 60 },
      { stepNumber: 4, instruction: "Cremosidade da nata: Abaixe o fogo, adicione a nata e deixe apurar suavemente por 4 minutos até encorpar.", timerSeconds: 240 }
    ],
    chefTip: "Usar cogumelos frescos em vez de em conserva eleva absurdamente o sabor e elimina os conservantes e sódio em excesso."
  },
  {
    id: "kn-chicken-519",
    title: "Fricassê Cetogênico de Frango Desfiado com Creme de Couve-Flor e Palha de Queijo",
    description: "Frango desfiado refogado num creme aveludado de couve-flor e queijo, gratinado com palha crocante de queijo parmesão.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    category: "poultry",
    subcategory: "ensopados",
    categoryName: "Frango e Aves",
    difficulty: "Médio",
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    rating: 4.8,
    reviewCount: 38,
    isPremium: true,
    tags: ["fricassê", "frango desfiado", "gratinado", "conforto"],
    nutrition: { calories: 420, protein: 45, netCarbs: 3, fat: 25, fiber: 2, carbs: 5 },
    ingredients: [
      { id: "kn-c519-1", name: "Peito de frango cozido e desfiado", amount: "500 g", quantity: 500, unit: "g", optional: false, category: "Proteínas" },
      { id: "kn-c519-2", name: "Couve-flor cozida no vapor", amount: "250 g", quantity: 250, unit: "g", optional: false, category: "Vegetais" },
      { id: "kn-c519-3", name: "Requeijão cremoso", amount: "150 g", quantity: 150, unit: "g", optional: false, category: "Laticínios" },
      { id: "kn-c519-4", name: "Nata ou creme de leite", amount: "100 ml", quantity: 100, unit: "ml", optional: false, category: "Laticínios" },
      { id: "kn-c519-5", name: "Queijo muçarela e parmesão ralado", amount: "150 g", quantity: 150, unit: "g", optional: false, category: "Laticínios" },
      { id: "kn-c519-6", name: "Azeitonas verdes fatiadas", amount: "30 g", quantity: 30, unit: "g", optional: false, category: "Despensa" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Creme aveludado: Bata no liquidificador a couve-flor cozida, o requeijão e a nata com sal e noz-moscada até virar um creme espesso.", timerSeconds: 120 },
      { stepNumber: 2, instruction: "Misturar: Em uma panela, refogue o frango desfiado com azeite, junte as azeitonas e misture o creme batido por 3 minutos.", timerSeconds: 180 },
      { stepNumber: 3, instruction: "Montar e gratinar: Transfira para um refratário, cubra com a muçarela e o parmesão. Asse a 200°C por 15 minutos até dourar borbulhante.", timerSeconds: 900 }
    ],
    chefTip: "O creme de couve-flor substitui o milho tradicional com textura idêntica e reduz mais de 80% dos carboidratos da receita clássica."
  },
  {
    id: "kn-chicken-520",
    title: "Espetinhos de Frango Marinados no Iogurte Grego, Cominho e Limão",
    description: "Cubos macios marinados no iogurte grego com especiarias do Oriente Médio, grelhados até criar marcas tostadas irresistíveis.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    category: "poultry",
    subcategory: "grelhados",
    categoryName: "Frango e Aves",
    difficulty: "Fácil",
    prepTime: 15,
    cookTime: 12,
    servings: 3,
    rating: 4.8,
    reviewCount: 30,
    isPremium: false,
    tags: ["espetinho", "churrasco keto", "marinado", "iogurte"],
    nutrition: { calories: 350, protein: 44, netCarbs: 2, fat: 18, fiber: 0, carbs: 2 },
    ingredients: [
      { id: "kn-c520-1", name: "Peito de frango cortado em cubos de 3cm", amount: "500 g", quantity: 500, unit: "g", optional: false, category: "Proteínas" },
      { id: "kn-c520-2", name: "Iogurte grego natural integral sem açúcar", amount: "100 g", quantity: 100, unit: "g", optional: false, category: "Laticínios" },
      { id: "kn-c520-3", name: "Suco e raspas de 1 limão", amount: "20 ml", quantity: 20, unit: "ml", optional: false, category: "Vegetais" },
      { id: "kn-c520-4", name: "Cominho em pó, coentro e alho triturado", amount: "1 colher de sopa", quantity: 10, unit: "g", optional: false, category: "Temperos" },
      { id: "kn-c520-5", name: "Azeite de oliva", amount: "1 colher de sopa", quantity: 15, unit: "ml", optional: false, category: "Despensa" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Marinar: Misture o iogurte grego, suco de limão, especiarias, alho e azeite. Envolva os cubos de frango e deixe marinar por 20 minutos.", timerSeconds: 1200 },
      { stepNumber: 2, instruction: "Montar espetos: Espete os cubos em palitos de bambu previamente umedecidos.", timerSeconds: 180 },
      { stepNumber: 3, instruction: "Grelhar: Grelhe em frigideira de ferro bem quente ou grelha por 3 minutos de cada lado até tostar por fora e cozinhar por dentro.", timerSeconds: 720 }
    ],
    chefTip: "O ácido láctico do iogurte grego quebra as fibras do frango deixando os espetinhos incrivelmente macios e suculentos."
  }
];
