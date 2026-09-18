import { Recipe } from '../../src/types';

export const NEW_FISH_RECIPES: Recipe[] = [
  {
    id: "kn-seafood-531",
    title: "Camarões Pistola Salteados no Alho, Manteiga Ghee e Raspas de Limão Siciliano",
    description: "Camarões grandes salteados rapidamente na frigideira com alho laminado dourado, manteiga clarificada e frescor cítrico.",
    image: "https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=800&q=80",
    category: "fish",
    subcategory: "camarão",
    categoryName: "Peixes e Frutos do Mar",
    difficulty: "Fácil",
    prepTime: 10,
    cookTime: 6,
    servings: 2,
    rating: 5.0,
    reviewCount: 48,
    isPremium: true,
    isPopular: true,
    isNew: true,
    tags: ["camarão", "ghee", "limão siciliano", "alho e óleo", "rápido"],
    nutrition: { calories: 340, protein: 36, netCarbs: 2, fat: 21, fiber: 0, carbs: 2 },
    ingredients: [
      { id: "kn-s531-1", name: "Camarões pistola limpos com cauda", amount: "400 g", quantity: 400, unit: "g", optional: false, category: "Proteínas" },
      { id: "kn-s531-2", name: "Manteiga ghee nobre", amount: "30 g", quantity: 30, unit: "g", optional: false, category: "Despensa" },
      { id: "kn-s531-3", name: "Lâminas finas de alho fresco", amount: "4 dentes", quantity: 15, unit: "g", optional: false, category: "Temperos" },
      { id: "kn-s531-4", name: "Raspas e suco de 1/2 limão siciliano", amount: "15 ml", quantity: 15, unit: "ml", optional: false, category: "Vegetais" },
      { id: "kn-s531-5", name: "Salsinha crespa picada fina", amount: "2 colheres de sopa", quantity: 10, unit: "g", optional: false, category: "Temperos" },
      { id: "kn-s531-6", name: "Flocos de pimenta calabresa e flor de sal", amount: "1 pitada", quantity: 2, unit: "g", optional: false, category: "Temperos" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Secar os camarões: Seque bem os camarões com papel toalha para garantir que dourem sem soltar líquido.", timerSeconds: 120 },
      { stepNumber: 2, instruction: "Alho perfumado: Aqueça a manteiga ghee em frigideira grande e doure as lâminas de alho por 1 minuto sem queimar.", timerSeconds: 60 },
      { stepNumber: 3, instruction: "Saltear os camarões: Coloque os camarões na frigideira bem quente sem sobrepor. Doure por 2 minutos de um lado, vire e doure por mais 1 minuto e meio até ficarem rosados.", timerSeconds: 210, tip: "O ponto do camarão é rápido; cozinhar demais deixa a textura borrachuda." },
      { stepNumber: 4, instruction: "Finalização aromática: Desligue o fogo, regue com o suco de limão siciliano, adicione as raspas, a salsinha e mexa delicadamente." }
    ],
    chefTip: "O uso da manteiga ghee permite trabalhar em temperatura mais alta sem queimar os sólidos do leite, dourando o camarão perfeitamente."
  },
  {
    id: "kn-seafood-532",
    title: "Filé de Tilápia com Crosta Crocante de Parmesão e Ervas Finas na Air Fryer",
    description: "Filés leves de tilápia fresca empanados com queijo parmesão ralado e ervas, assados até ficarem crocantes por fora e macios por dentro.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    category: "fish",
    subcategory: "tilápia",
    categoryName: "Peixes e Frutos do Mar",
    difficulty: "Fácil",
    prepTime: 8,
    cookTime: 12,
    servings: 2,
    rating: 4.8,
    reviewCount: 37,
    isPremium: false,
    tags: ["tilápia", "parmesão", "air fryer", "rápido", "peixe branco"],
    nutrition: { calories: 310, protein: 38, netCarbs: 1, fat: 17, fiber: 0, carbs: 1 },
    ingredients: [
      { id: "kn-s532-1", name: "Filés de tilápia fresca limpos", amount: "400 g (2 filés)", quantity: 400, unit: "g", optional: false, category: "Proteínas" },
      { id: "kn-s532-2", name: "Queijo parmesão ralado fino", amount: "60 g", quantity: 60, unit: "g", optional: false, category: "Laticínios" },
      { id: "kn-s532-3", name: "Ervas de Provence secas", amount: "1 colher de chá", quantity: 3, unit: "g", optional: false, category: "Temperos" },
      { id: "kn-s532-4", name: "Azeite de oliva extravirgem", amount: "1 colher de sopa", quantity: 15, unit: "ml", optional: false, category: "Despensa" },
      { id: "kn-s532-5", name: "Suco de limão taiti e pimenta branca", amount: "1 colher de sopa", quantity: 15, unit: "ml", optional: false, category: "Vegetais" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Temperar a tilápia: Pincele os filés com suco de limão, azeite, sal e pimenta branca.", timerSeconds: 60 },
      { stepNumber: 2, instruction: "Crosta de queijo: Pressione a mistura de parmesão e ervas de Provence no topo dos filés.", timerSeconds: 120 },
      { stepNumber: 3, instruction: "Air fryer: Pré-aqueça a 190°C. Coloque os filés na cesta e asse por 10 a 12 minutos até a crosta dourar e o peixe lascar facilmente.", timerSeconds: 720 }
    ],
    chefTip: "Não vire os filés na air fryer para manter a crosta de queijo perfeitamente intacta e crocante no topo."
  },
  {
    id: "kn-seafood-533",
    title: "Posta de Bacalhau ao Forno com Azeite Extravirgem Nobre, Alho Assado e Brócolis",
    description: "Posta alta de bacalhau Gadus Morhua cozida lentamente no azeite com dentes de alho confitados e floretes de brócolis frescos.",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
    category: "fish",
    subcategory: "bacalhau",
    categoryName: "Peixes e Frutos do Mar",
    difficulty: "Médio",
    prepTime: 12,
    cookTime: 25,
    servings: 2,
    rating: 5.0,
    reviewCount: 42,
    isPremium: true,
    tags: ["bacalhau", "azeite", "alho confit", "brócolis", "português"],
    nutrition: { calories: 480, protein: 44, netCarbs: 3, fat: 32, fiber: 2, carbs: 5 },
    ingredients: [
      { id: "kn-s533-1", name: "Postas altas de bacalhau dessalgado", amount: "450 g (2 postas)", quantity: 450, unit: "g", optional: false, category: "Proteínas" },
      { id: "kn-s533-2", name: "Azeite de oliva extravirgem português", amount: "80 ml", quantity: 80, unit: "ml", optional: false, category: "Despensa" },
      { id: "kn-s533-3", name: "Dentes de alho inteiros descascados", amount: "8 unidades", quantity: 30, unit: "g", optional: false, category: "Temperos" },
      { id: "kn-s533-4", name: "Floretes de brócolis frescos", amount: "150 g", quantity: 150, unit: "g", optional: false, category: "Vegetais" },
      { id: "kn-s533-5", name: "Azeitonas pretas portuguesas e folhas de louro", amount: "6 unidades", quantity: 30, unit: "g", optional: false, category: "Despensa" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Acomodar na travessa: Em um refratário fundo, acomode as postas de bacalhau com a pele voltada para baixo.", timerSeconds: 60 },
      { stepNumber: 2, instruction: "Guarnição nobre: Espalhe ao redor os dentes de alho inteiros, os brócolis, as azeitonas e as folhas de louro.", timerSeconds: 120 },
      { stepNumber: 3, instruction: "Banho de azeite: Regue tudo generosamente com o azeite de oliva extravirgem.", timerSeconds: 60 },
      { stepNumber: 4, instruction: "Confitar no forno: Asse a 180°C por 25 minutos regando as postas com o azeite quente na metade do tempo até o bacalhau se separar em pétalas.", timerSeconds: 1500 }
    ],
    chefTip: "O azeite abundante no fundo atua como banho confit, cozinhando o bacalhau sem ressecar e criando um molho aveludado espetacular."
  },
  {
    id: "kn-seafood-534",
    title: "Salmão Selado com Crosta de Gergelim Bicolor e Molho Cítrico de Gengibre",
    description: "Lombo suculento de salmão fresco selado com crosta crocante de gergelim preto e branco, guarnecido com molho de limão e gengibre.",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80",
    category: "fish",
    subcategory: "salmão",
    categoryName: "Peixes e Frutos do Mar",
    difficulty: "Fácil",
    prepTime: 10,
    cookTime: 8,
    servings: 2,
    rating: 4.9,
    reviewCount: 51,
    isPremium: true,
    tags: ["salmão", "gergelim", "gengibre", "ômega 3", "oriental"],
    nutrition: { calories: 460, protein: 39, netCarbs: 2, fat: 33, fiber: 1, carbs: 3 },
    ingredients: [
      { id: "kn-s534-1", name: "Lombo de salmão fresco em postas", amount: "400 g (2 filés)", quantity: 400, unit: "g", optional: false, category: "Proteínas" },
      { id: "kn-s534-2", name: "Sementes de gergelim branco e preto", amount: "30 g", quantity: 30, unit: "g", optional: false, category: "Despensa" },
      { id: "kn-s534-3", name: "Óleo de gergelim torrado", amount: "1 colher de sopa", quantity: 15, unit: "ml", optional: false, category: "Despensa" },
      { id: "kn-s534-4", name: "Gengibre fresco ralado e suco de limão", amount: "1 colher de sopa", quantity: 15, unit: "g", optional: false, category: "Temperos" },
      { id: "kn-s534-5", name: "Manteiga nobre", amount: "15 g", quantity: 15, unit: "g", optional: false, category: "Despensa" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Empanar no gergelim: Pincele o salmão com um fio de óleo de gergelim e pressione a parte superior sobre as sementes de gergelim formando crosta densa.", timerSeconds: 120 },
      { stepNumber: 2, instruction: "Selar com cuidado: Em frigideira antiaderente com a manteiga em fogo médio, coloque o lado do gergelim por 3 minutos até tostar levemente.", timerSeconds: 180 },
      { stepNumber: 3, instruction: "Finalizar o lado da pele: Vire o salmão e deixe cozinhar por 4 a 5 minutos até o centro ficar rosado e macio.", timerSeconds: 300 },
      { stepNumber: 4, instruction: "Molho cítrico: Misture o suco de limão com o gengibre ralado e regue na hora de servir." }
    ],
    chefTip: "Não deixe o fogo muito alto ao selar o gergelim para que as sementes tostem sem queimar nem amargar."
  },
  {
    id: "kn-seafood-535",
    title: "Moqueca Baiana Cetogênica de Peixe Branco e Camarão com Leite de Coco e Dendê",
    description: "Autêntica moqueca baiana preparada com peixe tenro, camarões rosa, leite de coco espesso e azeite de dendê na panela de barro.",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
    category: "fish",
    subcategory: "frutos do mar",
    categoryName: "Peixes e Frutos do Mar",
    difficulty: "Médio",
    prepTime: 15,
    cookTime: 20,
    servings: 3,
    rating: 5.0,
    reviewCount: 45,
    isPremium: true,
    tags: ["moqueca", "dendê", "leite de coco", "camarão", "regional"],
    nutrition: { calories: 470, protein: 40, netCarbs: 4, fat: 32, fiber: 2, carbs: 6 },
    ingredients: [
      { id: "kn-s535-1", name: "Postas de peixe branco (badejo ou robalo)", amount: "400 g", quantity: 400, unit: "g", optional: false, category: "Proteínas" },
      { id: "kn-s535-2", name: "Camarões rosa médios limpos", amount: "200 g", quantity: 200, unit: "g", optional: false, category: "Proteínas" },
      { id: "kn-s535-3", name: "Leite de coco integral culinário", amount: "200 ml", quantity: 200, unit: "ml", optional: false, category: "Despensa" },
      { id: "kn-s535-4", name: "Azeite de dendê legítimo", amount: "2 colheres de sopa", quantity: 30, unit: "ml", optional: false, category: "Despensa" },
      { id: "kn-s535-5", name: "Pimentões e tomate em rodelas", amount: "120 g", quantity: 120, unit: "g", optional: false, category: "Vegetais" },
      { id: "kn-s535-6", name: "Coentro fresco picado e cebolinha", amount: "1 punhado", quantity: 15, unit: "g", optional: false, category: "Temperos" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Camadas aromáticas: Na panela de barro com azeite de dendê, faça camadas com rodelas de pimentão, tomate e cebola.", timerSeconds: 180 },
      { stepNumber: 2, instruction: "Acomodar os peixes: Disponha as postas de peixe temperadas com limão e sal, e os camarões por cima.", timerSeconds: 120 },
      { stepNumber: 3, instruction: "Cozimento lento: Despeje o leite de coco, tampe e deixe cozinhar em fogo brando por 15 minutos sem mexer para não despedaçar o peixe.", timerSeconds: 900 },
      { stepNumber: 4, instruction: "Finalizar: Desligue e finalize com coentro fresco em abundância." }
    ],
    chefTip: "Não mexa com colher durante o cozimento; apenas balance suavemente a panela pelas alças para envolver o molho."
  },
  {
    id: "kn-seafood-536",
    title: "Tartare de Atum Fresco com Cubos de Abacate, Azeite de Gergelim e Flor de Sal",
    description: "Atum vermelho fresco em cubinhos perfeitamente cortados, combinado com abacate maduro, raspas de limão e molho ponzu zero açúcar.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    category: "fish",
    subcategory: "atum",
    categoryName: "Peixes e Frutos do Mar",
    difficulty: "Fácil",
    prepTime: 15,
    cookTime: 0,
    servings: 2,
    rating: 4.9,
    reviewCount: 39,
    isPremium: true,
    tags: ["tartare", "atum fresco", "abacate", "raw food", "alta gastronomia"],
    nutrition: { calories: 350, protein: 34, netCarbs: 2, fat: 23, fiber: 4, carbs: 6 },
    ingredients: [
      { id: "kn-s536-1", name: "Lombo de atum fresco para consumo cru", amount: "300 g", quantity: 300, unit: "g", optional: false, category: "Proteínas" },
      { id: "kn-s536-2", name: "Abacate hass cortado em cubinhos", amount: "100 g", quantity: 100, unit: "g", optional: false, category: "Vegetais" },
      { id: "kn-s536-3", name: "Óleo de gergelim torrado e azeite", amount: "1 colher de sopa", quantity: 15, unit: "ml", optional: false, category: "Despensa" },
      { id: "kn-s536-4", name: "Suco de limão siciliano e raspas", amount: "15 ml", quantity: 15, unit: "ml", optional: false, category: "Vegetais" },
      { id: "kn-s536-5", name: "Ciboulette picada e sementes de gergelim", amount: "1 colher de sopa", quantity: 10, unit: "g", optional: false, category: "Temperos" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Cortar o atum: Com faca bem afiada, corte o atum em cubinhos regulares de 0,5 cm.", timerSeconds: 240 },
      { stepNumber: 2, instruction: "Temperar delicadamente: Em uma tigela sobre gelo, misture o atum com o óleo de gergelim, o suco de limão e flor de sal.", timerSeconds: 60 },
      { stepNumber: 3, instruction: "Montar com aro: Posicione um aro metálico no prato. Faça a primeira camada com os cubos de abacate e cubra com o tartare de atum.", timerSeconds: 120 },
      { stepNumber: 4, instruction: "Finalizar: Retire o aro delicadamente e decore com ciboulette e sementes de gergelim preto." }
    ],
    chefTip: "Mantenha a tigela sobre pedras de gelo ao temperar o peixe para que a temperatura fria preserve o frescor máximo da proteína."
  },
  {
    id: "kn-seafood-537",
    title: "Polvo Grelhado na Brasa com Azeite de Páprica Doce e Floretes de Couve-Flor Salteados",
    description: "Tentáculos tenros de polvo grelhados em alta temperatura até ficarem crocantes por fora, sobre cama de couve-flor salteada no alho.",
    image: "https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=800&q=80",
    category: "fish",
    subcategory: "frutos do mar",
    categoryName: "Peixes e Frutos do Mar",
    difficulty: "Médio",
    prepTime: 15,
    cookTime: 12,
    servings: 2,
    rating: 5.0,
    reviewCount: 36,
    isPremium: true,
    tags: ["polvo", "grelhado", "couve-flor", "gourmet", "mediterrâneo"],
    nutrition: { calories: 380, protein: 36, netCarbs: 3, fat: 24, fiber: 2, carbs: 5 },
    ingredients: [
      { id: "kn-s537-1", name: "Tentáculos de polvo cozidos previamente", amount: "400 g", quantity: 400, unit: "g", optional: false, category: "Proteínas" },
      { id: "kn-s537-2", name: "Couve-flor fresca em pequenos floretes", amount: "200 g", quantity: 200, unit: "g", optional: false, category: "Vegetais" },
      { id: "kn-s537-3", name: "Azeite de oliva extravirgem", amount: "40 ml", quantity: 40, unit: "ml", optional: false, category: "Despensa" },
      { id: "kn-s537-4", name: "Páprica doce espanhola de la Vera", amount: "1 colher de chá cheia", quantity: 5, unit: "g", optional: false, category: "Temperos" },
      { id: "kn-s537-5", name: "Alho laminado e flor de sal Maldon", amount: "1 colher de chá", quantity: 5, unit: "g", optional: false, category: "Temperos" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Saltear a couve-flor: Na frigideira com metade do azeite e o alho, doure a couve-flor por 5 minutos até ficar tostada e al dente.", timerSeconds: 300 },
      { stepNumber: 2, instruction: "Grelhar os tentáculos: Em frigideira de ferro muito quente untada com azeite, grelhe o polvo por 3 minutos de cada lado até criar marcas douradas intensas.", timerSeconds: 360 },
      { stepNumber: 3, instruction: "Emulsão de páprica: Aqueça o restante do azeite com a páprica por 30 segundos fora do fogo.", timerSeconds: 60 },
      { stepNumber: 4, instruction: "Montar e servir: Coloque a couve-flor no prato, acomode o polvo por cima, regue com o azeite de páprica e salpique flor de sal." }
    ],
    chefTip: "Grelhar o polvo em fogo bem alto e rápido evita que a carne desidrate e fique dura; ele já deve estar macio do pré-cozimento."
  },
  {
    id: "kn-seafood-538",
    title: "Robalo em Papilote com Abobrinha Italiana, Tomate Cereja e Manteiga de Limão",
    description: "Filé de robalo nobre assado individualmente em envelope de papel manteiga que preserva todo o aroma dos vegetais e ervas frescas.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    category: "fish",
    subcategory: "peixe branco",
    categoryName: "Peixes e Frutos do Mar",
    difficulty: "Fácil",
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    rating: 4.8,
    reviewCount: 31,
    isPremium: true,
    tags: ["robalo", "papilote", "abobrinha", "peixe nobre", "leve"],
    nutrition: { calories: 340, protein: 37, netCarbs: 2, fat: 20, fiber: 1, carbs: 3 },
    ingredients: [
      { id: "kn-s538-1", name: "Filés de robalo fresco com pele", amount: "350 g (2 filés)", quantity: 350, unit: "g", optional: false, category: "Proteínas" },
      { id: "kn-s538-2", name: "Abobrinha italiana fatiada fina", amount: "100 g", quantity: 100, unit: "g", optional: false, category: "Vegetais" },
      { id: "kn-s538-3", name: "Tomates cereja cortados ao meio", amount: "60 g", quantity: 60, unit: "g", optional: false, category: "Vegetais" },
      { id: "kn-s538-4", name: "Manteiga com ervas e raspas de limão", amount: "20 g", quantity: 20, unit: "g", optional: false, category: "Despensa" },
      { id: "kn-s538-5", name: "Ramos de tomilho fresco e sal", amount: "2 unidades", quantity: 3, unit: "g", optional: false, category: "Temperos" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Montar o envelope: Corte duas folhas de papel manteiga. Faça uma cama com as lâminas de abobrinha e tomatinhos.", timerSeconds: 120 },
      { stepNumber: 2, instruction: "Acomodar o robalo: Coloque o filé temperado com sal e pimenta sobre os vegetais e adicione uma noz de manteiga de ervas por cima.", timerSeconds: 60 },
      { stepNumber: 3, instruction: "Fechar o papilote: Dobre as bordas do papel manteiga várias vezes vedando perfeitamente o pacote.", timerSeconds: 120 },
      { stepNumber: 4, instruction: "Assar no forno: Leve ao forno pré-aquecido a 200°C por 15 minutos até os envelopes inflarem completamente.", timerSeconds: 900 }
    ],
    chefTip: "Abra o envelope diretamente à mesa diante dos convidados para liberar uma nuvem perfumada espetacular de vapor e ervas."
  },
  {
    id: "kn-seafood-539",
    title: "Lulas Salteadas na Frigideira de Ferro com Tomilho Fresco, Vinho Branco Seco e Alho",
    description: "Anéis e tentáculos de lula fresca salteados em fogo potente com azeite aromático, deglaceados no vinho branco e finalizados na manteiga.",
    image: "https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=800&q=80",
    category: "fish",
    subcategory: "frutos do mar",
    categoryName: "Peixes e Frutos do Mar",
    difficulty: "Fácil",
    prepTime: 8,
    cookTime: 4,
    servings: 2,
    rating: 4.8,
    reviewCount: 33,
    isPremium: false,
    tags: ["lula", "frutos do mar", "rápido", "petisco", "tapas"],
    nutrition: { calories: 290, protein: 32, netCarbs: 2, fat: 17, fiber: 0, carbs: 2 },
    ingredients: [
      { id: "kn-s539-1", name: "Lulas frescas limpas cortadas em anéis", amount: "400 g", quantity: 400, unit: "g", optional: false, category: "Proteínas" },
      { id: "kn-s539-2", name: "Azeite de oliva e manteiga", amount: "2 colheres de sopa", quantity: 30, unit: "ml", optional: false, category: "Despensa" },
      { id: "kn-s539-3", name: "Dentes de alho picados", amount: "3 unidades", quantity: 15, unit: "g", optional: false, category: "Temperos" },
      { id: "kn-s539-4", name: "Vinho branco seco", amount: "40 ml", quantity: 40, unit: "ml", optional: false, category: "Despensa" },
      { id: "kn-s539-5", name: "Folhas frescas de tomilho e flor de sal", amount: "1 colher de chá", quantity: 3, unit: "g", optional: false, category: "Temperos" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Secagem rigorosa: Seque os anéis de lula com papel toalha para que não soltem água.", timerSeconds: 120 },
      { stepNumber: 2, instruction: "Frigideira fumegante: Aqueça a frigideira de ferro no fogo mais alto até começar a soltar fumaça com o azeite.", timerSeconds: 60 },
      { stepNumber: 3, instruction: "Saltear em segundos: Despeje as lulas e o alho. Salteie energicamente por exatamente 2 minutos.", timerSeconds: 120, tip: "Lula cozinha em 2 minutos; se passar, endurece." },
      { stepNumber: 4, instruction: "Deglacear: Adicione o vinho branco e a manteiga, mexa por 1 minuto para reduzir o caldo e desligue imediatamente." }
    ],
    chefTip: "O segredo supremo da lula macia é o calor extremo por tempo curtíssimo (máximo 2 a 3 minutos)."
  },
  {
    id: "kn-seafood-540",
    title: "Bobó Cetogênico de Camarão com Creme Aveludado de Couve-Flor e Leite de Coco",
    description: "Típico bobó cremoso preparado com purê fino de couve-flor substituindo a mandioca com perfeição, finalizado com dendê e coentro.",
    image: "https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=800&q=80",
    category: "fish",
    subcategory: "camarão",
    categoryName: "Peixes e Frutos do Mar",
    difficulty: "Médio",
    prepTime: 15,
    cookTime: 18,
    servings: 3,
    rating: 5.0,
    reviewCount: 47,
    isPremium: true,
    tags: ["bobó de camarão", "couve-flor", "leite de coco", "dendê", "baiano"],
    nutrition: { calories: 430, protein: 35, netCarbs: 4, fat: 29, fiber: 2, carbs: 6 },
    ingredients: [
      { id: "kn-s540-1", name: "Camarões médios limpos", amount: "500 g", quantity: 500, unit: "g", optional: false, category: "Proteínas" },
      { id: "kn-s540-2", name: "Couve-flor cozida no vapor", amount: "350 g", quantity: 350, unit: "g", optional: false, category: "Vegetais" },
      { id: "kn-s540-3", name: "Leite de coco integral cremoso", amount: "150 ml", quantity: 150, unit: "ml", optional: false, category: "Despensa" },
      { id: "kn-s540-4", name: "Azeite de dendê", amount: "2 colheres de sopa", quantity: 30, unit: "ml", optional: false, category: "Despensa" },
      { id: "kn-s540-5", name: "Pimentão vermelho picado e cebola", amount: "80 g", quantity: 80, unit: "g", optional: false, category: "Vegetais" },
      { id: "kn-s540-6", name: "Coentro fresco picado", amount: "2 colheres de sopa", quantity: 10, unit: "g", optional: false, category: "Temperos" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Bater a base aveludada: No liquidificador, bata a couve-flor cozida com o leite de coco até formar um creme espesso e acetinado.", timerSeconds: 120 },
      { stepNumber: 2, instruction: "Refogado aromático: Na panela, aqueça o azeite de dendê e refogue a cebola, o pimentão e o alho por 4 minutos.", timerSeconds: 240 },
      { stepNumber: 3, instruction: "Dourar os camarões: Junte os camarões temperados com sal e limão, cozinhando por 3 minutos até ficarem rosados.", timerSeconds: 180 },
      { stepNumber: 4, instruction: "Incorporar o creme: Despeje o creme de couve-flor, misture bem e deixe ferver em fogo baixo por 4 minutos para apurar os sabores. Salpique coentro fresco." }
    ],
    chefTip: "O purê de couve-flor com leite de coco reproduz fielmente a consistência da mandioca clássica, tornando o prato 100% cetogênico."
  }
];
