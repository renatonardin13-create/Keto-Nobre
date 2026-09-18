import { Recipe } from '../../src/types';

export const NEW_SALADS_RECIPES: Recipe[] = [
  {
    id: "kn-salads-541",
    title: "Salada Nobre de Folhas Verdes com Nozes Caramelizadas no Eritritol e Gorgonzola",
    description: "Mix crocante de rúcula selvagem, agrião e radicchio com pedaços cremosos de queijo gorgonzola e nozes crocantes.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    category: "salads",
    subcategory: "folhas",
    categoryName: "Saladas e Acompanhamentos",
    difficulty: "Fácil",
    prepTime: 10,
    cookTime: 5,
    servings: 2,
    rating: 4.9,
    reviewCount: 38,
    isPremium: false,
    isPopular: true,
    isNew: true,
    tags: ["salada verde", "gorgonzola", "nozes", "antioxidante", "refrescante"],
    nutrition: { calories: 330, protein: 11, netCarbs: 3, fat: 30, fiber: 3, carbs: 6 },
    ingredients: [
      { id: "kn-sa541-1", name: "Mix de folhas nobres (rúcula, agrião, alface romana)", amount: "150 g", quantity: 150, unit: "g", optional: false, category: "Vegetais" },
      { id: "kn-sa541-2", name: "Queijo gorgonzola em pedaços rústicos", amount: "60 g", quantity: 60, unit: "g", optional: false, category: "Laticínios" },
      { id: "kn-sa541-3", name: "Nozes chilenas partidas", amount: "40 g", quantity: 40, unit: "g", optional: false, category: "Despensa" },
      { id: "kn-sa541-4", name: "Adoçante eritritol e manteiga", amount: "1 colher de sopa", quantity: 15, unit: "g", optional: false, category: "Despensa" },
      { id: "kn-sa541-5", name: "Azeite de oliva extravirgem e vinagre de maçã", amount: "2 colheres de sopa", quantity: 30, unit: "ml", optional: false, category: "Despensa" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Caramelizar nozes: Em frigideira antiaderente com 1 colher de chá de manteiga e o eritritol, mexa as nozes por 3 minutos até dourarem e caramelizarem levemente.", timerSeconds: 180 },
      { stepNumber: 2, instruction: "Esfriar: Espalhe as nozes num prato para esfriarem e ficarem bem estaladiças.", timerSeconds: 120 },
      { stepNumber: 3, instruction: "Emulsão de azeite: Bata com um garfo o azeite de oliva, o vinagre de maçã, sal e pimenta preta.", timerSeconds: 60 },
      { stepNumber: 4, instruction: "Montar a salada: Em uma saladeira funda, disponha as folhas verdes, regue com o molho, espalhe o gorgonzola esfarelado e as nozes caramelizadas." }
    ],
    chefTip: "Deixe as nozes esfriarem completamente antes de juntar às folhas para manter a crocância sem murchar o mix verde."
  },
  {
    id: "kn-salads-542",
    title: "Abobrinha Italiana Grelhada com Queijo de Cabra Cremoso e Hortelã Fresca",
    description: "Fatias finas no sentido longitudinal grelhadas na chapa com azeite de hortelã fresca e queijo de cabra artesanal.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    category: "salads",
    subcategory: "legumes",
    categoryName: "Saladas e Acompanhamentos",
    difficulty: "Fácil",
    prepTime: 8,
    cookTime: 8,
    servings: 2,
    rating: 4.8,
    reviewCount: 29,
    isPremium: true,
    tags: ["abobrinha", "queijo de cabra", "hortelã", "grelhado", "leve"],
    nutrition: { calories: 240, protein: 9, netCarbs: 3, fat: 20, fiber: 2, carbs: 5 },
    ingredients: [
      { id: "kn-sa542-1", name: "Abobrinhas italianas médias fatiadas em lâminas", amount: "300 g (2 unidades)", quantity: 300, unit: "g", optional: false, category: "Vegetais" },
      { id: "kn-sa542-2", name: "Queijo de cabra chèvre cremoso", amount: "70 g", quantity: 70, unit: "g", optional: false, category: "Laticínios" },
      { id: "kn-sa542-3", name: "Azeite de oliva extravirgem", amount: "2 colheres de sopa", quantity: 30, unit: "ml", optional: false, category: "Despensa" },
      { id: "kn-sa542-4", name: "Folhas de hortelã fresca rasgadas", amount: "1 colher de sopa", quantity: 5, unit: "g", optional: false, category: "Temperos" },
      { id: "kn-sa542-5", name: "Raspas de limão siciliano e flor de sal", amount: "1 pitada", quantity: 2, unit: "g", optional: false, category: "Temperos" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Fatiar a abobrinha: Use uma mandolina para fatiar as abobrinhas em tiras compridas de 3mm de espessura.", timerSeconds: 120 },
      { stepNumber: 2, instruction: "Grelhar na chapa: Pincele com azeite e grelhe em frigideira frisada quente por 2 minutos de cada lado até marcar listras douradas.", timerSeconds: 240 },
      { stepNumber: 3, instruction: "Montar em prato plano: Disponha as tiras de abobrinha onduladas no prato.", timerSeconds: 60 },
      { stepNumber: 4, instruction: "Finalizar: Espalhe pequenas porções do queijo de cabra, as folhinhas de hortelã, as raspas de limão e regue com azeite." }
    ],
    chefTip: "Não salgue a abobrinha antes de grelhar para que ela não solte água na chapa e mantenha a textura al dente."
  },
  {
    id: "kn-salads-543",
    title: "Purê Aveludado de Couve-Flor com Manteiga Trufada e Parmesão Curado",
    description: "O mais requintado acompanhamento cetogênico: purê com textura idêntica ao purê de batatas com notas sofisticadas de trufas brancas.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    category: "salads",
    subcategory: "acompanhamentos",
    categoryName: "Saladas e Acompanhamentos",
    difficulty: "Fácil",
    prepTime: 10,
    cookTime: 12,
    servings: 3,
    rating: 5.0,
    reviewCount: 65,
    isPremium: true,
    tags: ["purê keto", "couve-flor", "azeite trufado", "parmesão", "gourmet"],
    nutrition: { calories: 260, protein: 8, netCarbs: 3, fat: 22, fiber: 3, carbs: 6 },
    ingredients: [
      { id: "kn-sa543-1", name: "Couve-flor fresca cortada em floretes", amount: "500 g", quantity: 500, unit: "g", optional: false, category: "Vegetais" },
      { id: "kn-sa543-2", name: "Manteiga sem sal", amount: "30 g", quantity: 30, unit: "g", optional: false, category: "Despensa" },
      { id: "kn-sa543-3", name: "Azeite trufado nobre", amount: "1 colher de chá", quantity: 5, unit: "ml", optional: false, category: "Despensa" },
      { id: "kn-sa543-4", name: "Queijo parmesão ralado fino", amount: "40 g", quantity: 40, unit: "g", optional: false, category: "Laticínios" },
      { id: "kn-sa543-5", name: "Nata fresca", amount: "2 colheres de sopa", quantity: 30, unit: "g", optional: false, category: "Laticínios" },
      { id: "kn-sa543-6", name: "Noz-moscada ralada na hora e sal", amount: "1 pitada", quantity: 2, unit: "g", optional: false, category: "Temperos" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Cozinhar no vapor: Cozinhe os floretes de couve-flor no vapor por 10 a 12 minutos até ficarem extremamente macios.", timerSeconds: 720, tip: "Cozinhar no vapor em vez de em água evita excesso de umidade no purê." },
      { stepNumber: 2, instruction: "Secar a couve-flor: Transfira para um escorredor e pressione com papel toalha para retirar qualquer gotícula de vapor.", timerSeconds: 120 },
      { stepNumber: 3, instruction: "Processar até virar veludo: Coloque no processador com a manteiga, a nata, o parmesão, o azeite trufado, sal e noz-moscada. Bata por 2 minutos contínuos.", timerSeconds: 120 },
      { stepNumber: 4, instruction: "Servir quente: Transfira para uma tigela térmica e decore com gotas de azeite trufado e ciboulette." }
    ],
    chefTip: "Secar o vegetal após o vapor e bater no processador (e não amassar com garfo) é o segredo para a textura 100% lisa e aveludada."
  },
  {
    id: "kn-salads-544",
    title: "Couve de Bruxelas Salteada com Cubos Crocantes de Bacon Artesanal e Alho",
    description: "Couve de bruxelas cortada ao meio com face caramelizada e tostada, combinada com bacon em cubinhos e alho fatiado.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    category: "salads",
    subcategory: "vegetais assados",
    categoryName: "Saladas e Acompanhamentos",
    difficulty: "Fácil",
    prepTime: 8,
    cookTime: 12,
    servings: 2,
    rating: 4.8,
    reviewCount: 34,
    isPremium: false,
    tags: ["couve de bruxelas", "bacon", "salteado", "crocante", "vegetal"],
    nutrition: { calories: 290, protein: 12, netCarbs: 4, fat: 23, fiber: 4, carbs: 8 },
    ingredients: [
      { id: "kn-sa544-1", name: "Couves de bruxelas frescas cortadas ao meio", amount: "350 g", quantity: 350, unit: "g", optional: false, category: "Vegetais" },
      { id: "kn-sa544-2", name: "Bacon artesanal em cubos", amount: "100 g", quantity: 100, unit: "g", optional: false, category: "Carnes" },
      { id: "kn-sa544-3", name: "Alho laminado", amount: "3 dentes", quantity: 15, unit: "g", optional: false, category: "Temperos" },
      { id: "kn-sa544-4", name: "Azeite de oliva", amount: "1 colher de sopa", quantity: 15, unit: "ml", optional: false, category: "Despensa" },
      { id: "kn-sa544-5", name: "Vinagre de maçã e pimenta-do-reino", amount: "1 colher de chá", quantity: 5, unit: "ml", optional: false, category: "Despensa" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Dourar o bacon: Na frigideira de ferro, frite o bacon até soltar a gordura e ficar crocante. Retire o bacon mantendo a gordura na panela.", timerSeconds: 240 },
      { stepNumber: 2, instruction: "Caramelizar a couve: Acomode as metades da couve de bruxelas com o lado cortado para baixo na gordura do bacon. Cozinhe em fogo médio por 6 minutos sem mexer para criar uma crosta escura irresistível.", timerSeconds: 360 },
      { stepNumber: 3, instruction: "Alho e finalizar: Vire as couves, adicione o alho picado e o bacon reservado, mexendo por 3 minutos até amaciar.", timerSeconds: 180 },
      { stepNumber: 4, instruction: "Toque cítrico: Pingue o vinagre de maçã para deglacear e sirva imediatamente." }
    ],
    chefTip: "Não mexa na couve nos primeiros minutos; a crosta bem tostada elimina qualquer amargor natural do vegetal."
  },
  {
    id: "kn-salads-545",
    title: "Salada Caprese Cetogênica com Burrata Fresca, Pesto Genovês e Tomatinhos Confit",
    description: "Burrata cremosa ao centro de folhas verdes com tomatinhos confitados lentamente no azeite extravirgem e pesto fresco de manjericão.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    category: "salads",
    subcategory: "folhas",
    categoryName: "Saladas e Acompanhamentos",
    difficulty: "Fácil",
    prepTime: 10,
    cookTime: 0,
    servings: 2,
    rating: 5.0,
    reviewCount: 46,
    isPremium: true,
    tags: ["caprese", "burrata", "pesto", "italiano", "fresco"],
    nutrition: { calories: 410, protein: 19, netCarbs: 3, fat: 35, fiber: 2, carbs: 5 },
    ingredients: [
      { id: "kn-sa545-1", name: "Burrata de búfala fresca inteira", amount: "200 g (1 unidade)", quantity: 200, unit: "g", optional: false, category: "Laticínios" },
      { id: "kn-sa545-2", name: "Tomates cereja cortados ao meio", amount: "100 g", quantity: 100, unit: "g", optional: false, category: "Vegetais" },
      { id: "kn-sa545-3", name: "Folhas de manjericão fresco e rúcula", amount: "50 g", quantity: 50, unit: "g", optional: false, category: "Vegetais" },
      { id: "kn-sa545-4", name: "Molho pesto genovês caseiro (manjericão, pinoli, azeite, queijo)", amount: "2 colheres de sopa", quantity: 30, unit: "g", optional: false, category: "Despensa" },
      { id: "kn-sa545-5", name: "Flor de sal e azeite extravirgem", amount: "1 colher de sopa", quantity: 15, unit: "ml", optional: false, category: "Despensa" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Dispor a base verde: Espalhe a rúcula e os tomates cereja no fundo do prato de servir.", timerSeconds: 60 },
      { stepNumber: 2, instruction: "Acomodar a burrata: Posicione a burrata inteira no centro do prato.", timerSeconds: 30 },
      { stepNumber: 3, instruction: "Abrir o recheio: Faça uma incisão em cruz no topo da burrata para revelar o coração cremoso de stracciatella.", timerSeconds: 30 },
      { stepNumber: 4, instruction: "Regar com pesto: Distribua colheradas de pesto genovês sobre a burrata e ao redor dos tomates. Salpique flor de sal." }
    ],
    chefTip: "Tire a burrata da geladeira 20 minutos antes de servir; na temperatura ambiente o recheio fica incrivelmente fluido e aromático."
  },
  {
    id: "kn-salads-546",
    title: "Aspargos Verdes Nobres Envoltos em Presunto Parma Assados no Forno",
    description: "Trouxinhas de aspargos verdes crocantes enroladas em fatias finas de presunto de Parma, regadas com azeite e assadas até estalarem.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    category: "salads",
    subcategory: "acompanhamentos",
    categoryName: "Saladas e Acompanhamentos",
    difficulty: "Fácil",
    prepTime: 8,
    cookTime: 12,
    servings: 2,
    rating: 4.9,
    reviewCount: 37,
    isPremium: true,
    tags: ["aspargos", "presunto parma", "forno", "tapas", "sofisticado"],
    nutrition: { calories: 260, protein: 16, netCarbs: 2, fat: 21, fiber: 2, carbs: 4 },
    ingredients: [
      { id: "kn-sa546-1", name: "Aspargos verdes frescos com base podada", amount: "250 g (10 a 12 talos)", quantity: 250, unit: "g", optional: false, category: "Vegetais" },
      { id: "kn-sa546-2", name: "Presunto cru tipo Parma ou Serrano", amount: "80 g (6 fatias)", quantity: 80, unit: "g", optional: false, category: "Carnes" },
      { id: "kn-sa546-3", name: "Azeite de oliva extravirgem", amount: "1 colher de sopa", quantity: 15, unit: "ml", optional: false, category: "Despensa" },
      { id: "kn-sa546-4", name: "Lâminas de queijo parmesão para finalizar", amount: "20 g", quantity: 20, unit: "g", optional: false, category: "Laticínios" },
      { id: "kn-sa546-5", name: "Pimenta-do-reino moída na hora", amount: "1 pitada", quantity: 1, unit: "g", optional: false, category: "Temperos" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Podar os aspargos: Quebre a ponta lenhosa inferior de cada aspargo onde ele quebrar naturalmente.", timerSeconds: 60 },
      { stepNumber: 2, instruction: "Enrolar o parma: Una 2 ou 3 talos de aspargo e enrole firmemente com uma fatia de presunto de Parma.", timerSeconds: 180 },
      { stepNumber: 3, instruction: "Assar no forno: Acomode em assadeira, regue com azeite e pimenta. Asse a 200°C por 10 a 12 minutos até o presunto ficar crocante e os aspargos tenros.", timerSeconds: 720 },
      { stepNumber: 4, instruction: "Finalizar: Cubra com as lâminas finas de parmesão antes de levar à mesa." }
    ],
    chefTip: "Não salgue os aspargos; o presunto de Parma assado já concentra teor de sal suficiente para temperar o conjunto perfeitamente."
  },
  {
    id: "kn-salads-547",
    title: "Gratinado de Brócolis e Couve-Flor ao Molho Quatro Queijos com Crosta Dourada",
    description: "Floretes de brócolis e couve-flor tenros envoltos em molho cremoso de provolone, parmesão, gorgonzola e muçarela gratinado ao forno.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    category: "salads",
    subcategory: "gratinados",
    categoryName: "Saladas e Acompanhamentos",
    difficulty: "Fácil",
    prepTime: 12,
    cookTime: 18,
    servings: 4,
    rating: 4.9,
    reviewCount: 52,
    isPremium: false,
    tags: ["gratinado", "brócolis", "couve-flor", "quatro queijos", "conforto"],
    nutrition: { calories: 340, protein: 16, netCarbs: 4, fat: 28, fiber: 3, carbs: 7 },
    ingredients: [
      { id: "kn-sa547-1", name: "Floretes de brócolis e couve-flor cozidos no vapor", amount: "500 g", quantity: 500, unit: "g", optional: false, category: "Vegetais" },
      { id: "kn-sa547-2", name: "Nata fresca ou creme de leite", amount: "150 ml", quantity: 150, unit: "ml", optional: false, category: "Laticínios" },
      { id: "kn-sa547-3", name: "Queijo muçarela ralado", amount: "80 g", quantity: 80, unit: "g", optional: false, category: "Laticínios" },
      { id: "kn-sa547-4", name: "Queijo provolone ralado", amount: "50 g", quantity: 50, unit: "g", optional: false, category: "Laticínios" },
      { id: "kn-sa547-5", name: "Queijo gorgonzola em pedaços e parmesão", amount: "50 g", quantity: 50, unit: "g", optional: false, category: "Laticínios" },
      { id: "kn-sa547-6", name: "Noz-moscada e pimenta branca", amount: "1 pitada", quantity: 2, unit: "g", optional: false, category: "Temperos" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Molho de queijos: Em uma panela em fogo baixo, aqueça a nata e adicione o gorgonzola e provolone até derreterem com a noz-moscada.", timerSeconds: 180 },
      { stepNumber: 2, instruction: "Acomodar na travessa: Disponha os brócolis e a couve-flor escorridos num refratário.", timerSeconds: 60 },
      { stepNumber: 3, instruction: "Cobrir com o molho: Despeje o molho de queijos por cima de todos os vegetais e finalize cobrindo com a muçarela e parmesão.", timerSeconds: 60 },
      { stepNumber: 4, instruction: "Gratinar: Leve ao forno a 210°C por 15 a 18 minutos até a superfície borbulhar com linda crosta dourada.", timerSeconds: 1080 }
    ],
    chefTip: "Deixe os vegetais bem al dente no vapor; eles terminarão de amaciar dentro do molho fervente no forno sem desmanchar."
  },
  {
    id: "kn-salads-548",
    title: "Espaguete de Pupunha Salteado na Manteiga Ghee com Tomate Seco e Manjericão",
    description: "Fios delicados de palmito pupunha fresco salteados em manteiga clarificada, tomatinhos secos sem açúcar e folhas de manjericão fresco.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    category: "salads",
    subcategory: "acompanhamentos",
    categoryName: "Saladas e Acompanhamentos",
    difficulty: "Fácil",
    prepTime: 8,
    cookTime: 6,
    servings: 2,
    rating: 4.8,
    reviewCount: 33,
    isPremium: true,
    tags: ["pupunha", "massa keto", "ghee", "manjericão", "vegetariano"],
    nutrition: { calories: 230, protein: 5, netCarbs: 3, fat: 21, fiber: 3, carbs: 6 },
    ingredients: [
      { id: "kn-sa548-1", name: "Palmito pupunha fresco desfiado em fios de espaguete", amount: "350 g", quantity: 350, unit: "g", optional: false, category: "Vegetais" },
      { id: "kn-sa548-2", name: "Manteiga ghee nobre", amount: "30 g", quantity: 30, unit: "g", optional: false, category: "Despensa" },
      { id: "kn-sa548-3", name: "Tomate seco artesanal em tiras", amount: "40 g", quantity: 40, unit: "g", optional: false, category: "Vegetais" },
      { id: "kn-sa548-4", name: "Folhas de manjericão fresco", amount: "1 punhado", quantity: 10, unit: "g", optional: false, category: "Temperos" },
      { id: "kn-sa548-5", name: "Alho picado e queijo parmesão ralado", amount: "30 g", quantity: 30, unit: "g", optional: false, category: "Laticínios" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Alho na manteiga: Derreta o ghee na frigideira e doure o alho picado por 1 minuto sem queimar.", timerSeconds: 60 },
      { stepNumber: 2, instruction: "Saltear o pupunha: Junte o espaguete de pupunha e as tiras de tomate seco. Salteie em fogo médio por 4 minutos até amaciar.", timerSeconds: 240 },
      { stepNumber: 3, instruction: "Finalizar com ervas: Desligue o fogo, misture o manjericão fresco e o queijo parmesão com flor de sal." }
    ],
    chefTip: "O pupunha fresco não precisa de cozimento em água; saltear direto na manteiga preserva toda a crocância nobre e sabor doce natural."
  },
  {
    id: "kn-salads-549",
    title: "Cogumelos Paris e Shimeji Salteados no Shoyu de Coco com Manteiga e Salsinha",
    description: "Mix aromático de cogumelos frescos salteados em alta temperatura com manteiga nobre, shoyu de coco e toque de alho.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    category: "salads",
    subcategory: "legumes",
    categoryName: "Saladas e Acompanhamentos",
    difficulty: "Fácil",
    prepTime: 8,
    cookTime: 7,
    servings: 2,
    rating: 4.9,
    reviewCount: 40,
    isPremium: false,
    tags: ["cogumelos", "shimeji", "manteiga", "umami", "vegetariano"],
    nutrition: { calories: 210, protein: 7, netCarbs: 2, fat: 18, fiber: 2, carbs: 4 },
    ingredients: [
      { id: "kn-sa549-1", name: "Cogumelos paris cortados ao meio e shimeji desfiado", amount: "350 g", quantity: 350, unit: "g", optional: false, category: "Vegetais" },
      { id: "kn-sa549-2", name: "Manteiga nobre", amount: "30 g", quantity: 30, unit: "g", optional: false, category: "Despensa" },
      { id: "kn-sa549-3", name: "Shoyu de coco sem açúcar", amount: "2 colheres de sopa", quantity: 30, unit: "ml", optional: false, category: "Despensa" },
      { id: "kn-sa549-4", name: "Dentes de alho picadinhos", amount: "2 unidades", quantity: 10, unit: "g", optional: false, category: "Temperos" },
      { id: "kn-sa549-5", name: "Salsinha picada e cebolinha", amount: "2 colheres de sopa", quantity: 10, unit: "g", optional: false, category: "Temperos" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Frigideira pelando: Aqueça a frigideira com metade da manteiga até espumar.", timerSeconds: 60 },
      { stepNumber: 2, instruction: "Saltear sem amontoar: Coloque os cogumelos e deixe dourar sem mexer por 3 minutos para criar cor dourada.", timerSeconds: 180 },
      { stepNumber: 3, instruction: "Temperar com shoyu: Junte o alho, o shoyu de coco e o restante da manteiga, mexendo rapidamente por 2 minutos.", timerSeconds: 120 },
      { stepNumber: 4, instruction: "Finalização: Finalize com a salsinha e cebolinha picadas fora do fogo." }
    ],
    chefTip: "Limpe os cogumelos com um pano úmido em vez de lavar em água corrente para que não encharquem e fiquem emborrachados."
  },
  {
    id: "kn-salads-550",
    title: "Salada de Rúcula Selvagem com Carpaccio Nobre, Alcaparras e Queijo Pecorino",
    description: "Lâminas ultrafinas de carne bovina curada servidas sobre colchão de rúcula picante, alcaparras crocantes e lascas de pecorino romano.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    category: "salads",
    subcategory: "folhas",
    categoryName: "Saladas e Acompanhamentos",
    difficulty: "Fácil",
    prepTime: 10,
    cookTime: 0,
    servings: 2,
    rating: 4.9,
    reviewCount: 35,
    isPremium: true,
    tags: ["carpaccio", "rúcula", "pecorino", "alcaparras", "antepasto"],
    nutrition: { calories: 280, protein: 24, netCarbs: 1, fat: 20, fiber: 1, carbs: 2 },
    ingredients: [
      { id: "kn-sa550-1", name: "Lâminas de carpaccio bovino de filé mignon", amount: "160 g", quantity: 160, unit: "g", optional: false, category: "Carnes" },
      { id: "kn-sa550-2", name: "Rúcula selvagem fresca", amount: "80 g", quantity: 80, unit: "g", optional: false, category: "Vegetais" },
      { id: "kn-sa550-3", name: "Queijo pecorino ou parmesão em lascas", amount: "40 g", quantity: 40, unit: "g", optional: false, category: "Laticínios" },
      { id: "kn-sa550-4", name: "Alcaparras escorridas", amount: "1 colher de sopa", quantity: 15, unit: "g", optional: false, category: "Despensa" },
      { id: "kn-sa550-5", name: "Molho de mostarda dijon com azeite e limão", amount: "2 colheres de sopa", quantity: 30, unit: "ml", optional: false, category: "Despensa" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Dispor as lâminas de carne: Acomode as fatias de carpaccio num prato grande sem sobrepor demais.", timerSeconds: 120 },
      { stepNumber: 2, instruction: "Centro de folhas: Coloque a rúcula selvagem temperada com um fio de azeite no centro do prato.", timerSeconds: 60 },
      { stepNumber: 3, instruction: "Molho e guarnições: Distribua o molho de mostarda sobre a carne, espalhe as alcaparras e as lascas de pecorino.", timerSeconds: 60 }
    ],
    chefTip: "Mantenha o prato e o carpaccio na geladeira até os minutos finais antes de servir para preservar a textura refrescante."
  }
];
