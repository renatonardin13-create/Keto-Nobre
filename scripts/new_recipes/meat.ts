import { Recipe } from '../../src/types';

export const NEW_MEAT_RECIPES: Recipe[] = [
  {
    id: "kn-meat-521",
    title: "Hambúrguer Artesanal Recheado com Queijo Cheddar e Cebola Roxa Salteada",
    description: "Blend nobre de fraldinha e costela grelhado ao ponto, recheado com queijo cheddar inglês derretido e finalizado com manteiga trufada.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    category: "meat",
    subcategory: "hambúrgueres",
    categoryName: "Carnes Nobres",
    difficulty: "Fácil",
    prepTime: 12,
    cookTime: 10,
    servings: 2,
    rating: 4.9,
    reviewCount: 54,
    isPremium: false,
    isPopular: true,
    isNew: true,
    tags: ["hambúrguer", "cheddar", "carne nobre", "suculento", "blend"],
    nutrition: { calories: 560, protein: 46, netCarbs: 2, fat: 41, fiber: 0, carbs: 2 },
    ingredients: [
      { id: "kn-m521-1", name: "Carne bovina moída (blend 70% fraldinha e 30% costela)", amount: "400 g", quantity: 400, unit: "g", optional: false, category: "Carnes" },
      { id: "kn-m521-2", name: "Queijo cheddar inglês fatiado ou em bloco", amount: "80 g", quantity: 80, unit: "g", optional: false, category: "Laticínios" },
      { id: "kn-m521-3", name: "Cebola roxa fatiada fina", amount: "60 g", quantity: 60, unit: "g", optional: false, category: "Vegetais" },
      { id: "kn-m521-4", name: "Manteiga ghee nobre", amount: "20 g", quantity: 20, unit: "g", optional: false, category: "Despensa" },
      { id: "kn-m521-5", name: "Sal de parrilla e pimenta-do-reino preta", amount: "1 colher de chá", quantity: 5, unit: "g", optional: false, category: "Temperos" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Moldar o hambúrguer recheado: Divida a carne em 4 discos finos. Coloque o queijo cheddar no centro de 2 discos e cubra com os outros dois, selando muito bem as bordas para o queijo não escapar.", timerSeconds: 180 },
      { stepNumber: 2, instruction: "Temperar a superfície: Tempere com sal de parrilla e pimenta moída somente no momento de levar à frigideira.", timerSeconds: 60 },
      { stepNumber: 3, instruction: "Grelhar na frigideira de ferro: Em fogo alto com a manteiga, grelhe por 4 minutos sem mexer para formar crosta perfeita, vire e grelhe por mais 4 minutos.", timerSeconds: 480, tip: "Não aperte o hambúrguer com a espátula para não perder os sucos da carne." },
      { stepNumber: 4, instruction: "Descanso e montagem: Deixe descansar por 2 minutos numa tábua para redistribuir os sucos antes de cortar ao meio." }
    ],
    chefTip: "Colocar o sal somente na hora de grelhar preserva a retenção de água e maciez interna da carne moída."
  },
  {
    id: "kn-meat-522",
    title: "Costelinha Suína na Manteiga de Alho e Ervas com Crosta Dourada",
    description: "Costelinha suína carnuda assada lentamente até soltar do osso, finalizada com manteiga aromatizada com alho confit e sálvia fresca.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    category: "meat",
    subcategory: "suínos",
    categoryName: "Carnes Nobres",
    difficulty: "Médio",
    prepTime: 15,
    cookTime: 50,
    servings: 3,
    rating: 4.9,
    reviewCount: 47,
    isPremium: true,
    tags: ["costelinha", "suíno", "manteiga de ervas", "slow cooking"],
    nutrition: { calories: 580, protein: 44, netCarbs: 1, fat: 44, fiber: 0, carbs: 1 },
    ingredients: [
      { id: "kn-m522-1", name: "Costela suína fresca em ripas", amount: "800 g", quantity: 800, unit: "g", optional: false, category: "Carnes" },
      { id: "kn-m522-2", name: "Manteiga sem sal", amount: "40 g", quantity: 40, unit: "g", optional: false, category: "Despensa" },
      { id: "kn-m522-3", name: "Dentes de alho picados", amount: "5 dentes", quantity: 20, unit: "g", optional: false, category: "Temperos" },
      { id: "kn-m522-4", name: "Folhas de sálvia e alecrim", amount: "1 colher de sopa", quantity: 5, unit: "g", optional: false, category: "Temperos" },
      { id: "kn-m522-5", name: "Páprica defumada e raspas de limão", amount: "1 colher de chá", quantity: 5, unit: "g", optional: false, category: "Temperos" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Temperar: Esfregue sal, pimenta, raspas de limão e páprica em toda a extensão da costela.", timerSeconds: 180 },
      { stepNumber: 2, instruction: "Assar coberto: Embale a costela em papel alumínio e asse a 180°C por 40 minutos para amaciar as fibras.", timerSeconds: 2400 },
      { stepNumber: 3, instruction: "Manteiga de alho e sálvia: Em uma panelinha, derreta a manteiga com o alho e as ervas até perfumar.", timerSeconds: 120 },
      { stepNumber: 4, instruction: "Dourar sem alumínio: Abra o alumínio, pincele a manteiga de ervas generosamente e asse a 220°C por mais 10 minutos até pururucar a superfície.", timerSeconds: 600 }
    ],
    chefTip: "O cozimento inicial envolvido em papel alumínio cozinha a costelinha no próprio vapor, tornando a carne desmanchando."
  },
  {
    id: "kn-meat-523",
    title: "Medalhão de Filé Mignon ao Molho de Vinho Tinto Seco e Cogumelos Portobello",
    description: "Corte nobre alto envolvido em bacon grelhado na manteiga clarificada, servido com redução aveludada de vinho tinto seco e cogumelos.",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
    category: "meat",
    subcategory: "bifes",
    categoryName: "Carnes Nobres",
    difficulty: "Médio",
    prepTime: 10,
    cookTime: 12,
    servings: 2,
    rating: 5.0,
    reviewCount: 63,
    isPremium: true,
    tags: ["filé mignon", "medalhão", "vinho tinto", "cogumelos", "gourmet"],
    nutrition: { calories: 510, protein: 48, netCarbs: 2, fat: 34, fiber: 1, carbs: 3 },
    ingredients: [
      { id: "kn-m523-1", name: "Medalhões altos de filé mignon", amount: "400 g (2 medalhões)", quantity: 400, unit: "g", optional: false, category: "Carnes" },
      { id: "kn-m523-2", name: "Fatias finas de bacon artesanal", amount: "2 fatias", quantity: 50, unit: "g", optional: false, category: "Carnes" },
      { id: "kn-m523-3", name: "Cogumelos portobello ou paris em lâminas", amount: "120 g", quantity: 120, unit: "g", optional: false, category: "Vegetais" },
      { id: "kn-m523-4", name: "Vinho tinto seco nobre (cabernet sauvignon)", amount: "60 ml", quantity: 60, unit: "ml", optional: false, category: "Despensa" },
      { id: "kn-m523-5", name: "Manteiga gelada em cubos", amount: "30 g", quantity: 30, unit: "g", optional: false, category: "Despensa" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Enrolar o bacon: Prenda a tira de bacon na lateral de cada medalhão com um palito de dente.", timerSeconds: 120 },
      { stepNumber: 2, instruction: "Selar a carne: Em frigideira de ferro bem quente com manteiga, sele por 3 minutos de cada lado para ponto menos a médio.", timerSeconds: 360 },
      { stepNumber: 3, instruction: "Saltear cogumelos: Retire os medalhões para descansar. Na mesma frigideira, junte os cogumelos e salteie por 2 minutos.", timerSeconds: 120 },
      { stepNumber: 4, instruction: "Deglacear e emulsionar: Adicione o vinho tinto raspando o fundo da frigideira. Deixe o álcool evaporar por 2 minutos, desligue o fogo e incorpore a manteiga gelada mexendo em círculos para dar brilho.", timerSeconds: 180 }
    ],
    chefTip: "Desligar o fogo antes de adicionar os cubos de manteiga gelada é a técnica clássica francesa para o molho montar com brilho acetinado."
  },
  {
    id: "kn-meat-524",
    title: "Carne Seca Desfiada na Manteiga de Garrafa com Purê Aveludado de Abóbora Cetogênica",
    description: "Carne de sol artesanal dessalgada e desfiada finamente, salteada com cebola roxa na manteiga de garrafa e purê de abóbora cabotiá low carb.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    category: "meat",
    subcategory: "carne moída",
    categoryName: "Carnes Nobres",
    difficulty: "Médio",
    prepTime: 15,
    cookTime: 20,
    servings: 3,
    rating: 4.9,
    reviewCount: 42,
    isPremium: false,
    tags: ["carne seca", "manteiga de garrafa", "regional", "purê", "nordestino"],
    nutrition: { calories: 460, protein: 42, netCarbs: 4, fat: 30, fiber: 2, carbs: 6 },
    ingredients: [
      { id: "kn-m524-1", name: "Carne seca dessalgada cozida e desfiada", amount: "450 g", quantity: 450, unit: "g", optional: false, category: "Carnes" },
      { id: "kn-m524-2", name: "Manteiga de garrafa legítima", amount: "3 colheres de sopa", quantity: 45, unit: "ml", optional: false, category: "Despensa" },
      { id: "kn-m524-3", name: "Cebola roxa cortada em meias-luas", amount: "100 g", quantity: 100, unit: "g", optional: false, category: "Vegetais" },
      { id: "kn-m524-4", name: "Purê de abóbora cabotiá cozida", amount: "200 g", quantity: 200, unit: "g", optional: false, category: "Vegetais" },
      { id: "kn-m524-5", name: "Nata fresca", amount: "50 g", quantity: 50, unit: "g", optional: false, category: "Laticínios" },
      { id: "kn-m524-6", name: "Coentro fresco picadinho", amount: "2 colheres de sopa", quantity: 10, unit: "g", optional: false, category: "Temperos" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Dourar a carne seca: Na frigideira quente com manteiga de garrafa, doure a carne seca desfiada até ficar crocante nas pontas.", timerSeconds: 300 },
      { stepNumber: 2, instruction: "Caramelizar a cebola: Junte a cebola roxa e mexa por 4 minutos até amaciar e ficar translúcida.", timerSeconds: 240 },
      { stepNumber: 3, instruction: "Purê aveludado: Em panela separada, misture a abóbora cozida com a nata, sal e noz-moscada com fouet até textura de veludo.", timerSeconds: 180 },
      { stepNumber: 4, instruction: "Montar o prato: Faça uma cama com o purê aveludado e sobreponha a carne seca dourada com coentro fresco." }
    ],
    chefTip: "A abóbora cabotiá possui menor índice glicêmico e cabe perfeitamente na cota diária cetogênica com sabor espetacular."
  },
  {
    id: "kn-meat-525",
    title: "Polpetone Nobre Recheado com Mussarela de Búfala e Molho de Tomates Confit",
    description: "Polpetone generoso de carne bovina temperada recheado com queijo de búfala cremoso, assado com molho de tomates assados no azeite.",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=80",
    category: "meat",
    subcategory: "carne moída",
    categoryName: "Carnes Nobres",
    difficulty: "Médio",
    prepTime: 15,
    cookTime: 20,
    servings: 2,
    rating: 4.8,
    reviewCount: 39,
    isPremium: true,
    tags: ["polpetone", "mussarela de búfala", "forno", "italiano"],
    nutrition: { calories: 520, protein: 48, netCarbs: 3, fat: 34, fiber: 1, carbs: 4 },
    ingredients: [
      { id: "kn-m525-1", name: "Patinho ou fraldinha moída duas vezes", amount: "400 g", quantity: 400, unit: "g", optional: false, category: "Carnes" },
      { id: "kn-m525-2", name: "Bolas de mussarela de búfala fresca", amount: "100 g", quantity: 100, unit: "g", optional: false, category: "Laticínios" },
      { id: "kn-m525-3", name: "Queijo parmesão ralado", amount: "30 g", quantity: 30, unit: "g", optional: false, category: "Laticínios" },
      { id: "kn-m525-4", name: "Molho de tomate caseiro com manjericão", amount: "120 g", quantity: 120, unit: "g", optional: false, category: "Despensa" },
      { id: "kn-m525-5", name: "Alho, orégano fresco e sal marinho", amount: "1 colher de chá", quantity: 5, unit: "g", optional: false, category: "Temperos" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Temperar a carne: Misture a carne moída com alho, sal, pimenta e metade do queijo parmesão ralado.", timerSeconds: 120 },
      { stepNumber: 2, instruction: "Moldar o recheio: Divida em duas bolas grandes. Abra cavidade e acomode a mussarela de búfala no centro, fechando muito bem.", timerSeconds: 180 },
      { stepNumber: 3, instruction: "Selar na frigideira: Doure na frigideira com azeite por 2 minutos de cada lado apenas para firmar a crosta externa.", timerSeconds: 240 },
      { stepNumber: 4, instruction: "Assar com molho: Coloque em refratário, cubra com molho de tomate e parmesão. Asse a 200°C por 15 minutos até o recheio fundir.", timerSeconds: 900 }
    ],
    chefTip: "Certifique-se de que não haja nenhuma rachadura na carne ao moldar para que o queijo de búfala não vaze na assadeira."
  },
  {
    id: "kn-meat-526",
    title: "Lombo Suíno Assado com Crosta de Mostarda Dijon e Alecrim Fresco",
    description: "Peça nobre de lombo suíno suculenta marinada no vinho branco seco e mostarda de Dijon com crosta crocante de ervas finas.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    category: "meat",
    subcategory: "suínos",
    categoryName: "Carnes Nobres",
    difficulty: "Fácil",
    prepTime: 12,
    cookTime: 35,
    servings: 4,
    rating: 4.8,
    reviewCount: 36,
    isPremium: false,
    tags: ["lombo", "suíno", "mostarda dijon", "assado", "econômico"],
    nutrition: { calories: 390, protein: 46, netCarbs: 1, fat: 22, fiber: 0, carbs: 1 },
    ingredients: [
      { id: "kn-m526-1", name: "Peça de lombo suíno limpa", amount: "700 g", quantity: 700, unit: "g", optional: false, category: "Carnes" },
      { id: "kn-m526-2", name: "Mostarda Dijon em grãos e lisa", amount: "3 colheres de sopa", quantity: 45, unit: "g", optional: false, category: "Despensa" },
      { id: "kn-m526-3", name: "Azeite de oliva extravirgem", amount: "2 colheres de sopa", quantity: 30, unit: "ml", optional: false, category: "Despensa" },
      { id: "kn-m526-4", name: "Alecrim fresco e tomilho picados", amount: "2 colheres de sopa", quantity: 10, unit: "g", optional: false, category: "Temperos" },
      { id: "kn-m526-5", name: "Alho picadinho e flor de sal", amount: "1 colher de chá", quantity: 5, unit: "g", optional: false, category: "Temperos" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Pasta aromática: Misture a mostarda Dijon, o azeite, o alho picado e as ervas frescas formando uma pasta.", timerSeconds: 120 },
      { stepNumber: 2, instruction: "Besuntar o lombo: Espalhe a pasta de mostarda por toda a peça de carne suína.", timerSeconds: 120 },
      { stepNumber: 3, instruction: "Assar no ponto correto: Asse a 190°C por 35 minutos até que atinja 68°C no centro.", timerSeconds: 2100, tip: "Não passe do ponto para não ressecar a carne de porco." },
      { stepNumber: 4, instruction: "Descanso: Deixe repousar por 5 minutos antes de cortar em fatias tenras e rosadas no centro." }
    ],
    chefTip: "O lombo suíno atinge a suculência máxima quando retirado do forno a 68°C; a carne fica úmida e macia."
  },
  {
    id: "kn-meat-527",
    title: "Almôndegas ao Forno com Queijo Parmesão Gratinado e Manjericão Roxo",
    description: "Almôndegas artesanais fofas feitas com farinha de amêndoas e ervas, assadas em cama de molho rústico e parmesão borbulhante.",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=80",
    category: "meat",
    subcategory: "carne moída",
    categoryName: "Carnes Nobres",
    difficulty: "Fácil",
    prepTime: 12,
    cookTime: 18,
    servings: 3,
    rating: 4.9,
    reviewCount: 45,
    isPremium: true,
    tags: ["almôndegas", "parmesão", "forno", "meal prep"],
    nutrition: { calories: 430, protein: 39, netCarbs: 3, fat: 28, fiber: 1, carbs: 4 },
    ingredients: [
      { id: "kn-m527-1", name: "Carne bovina moída fresca", amount: "500 g", quantity: 500, unit: "g", optional: false, category: "Carnes" },
      { id: "kn-m527-2", name: "Farinha de amêndoas fina", amount: "30 g", quantity: 30, unit: "g", optional: false, category: "Despensa" },
      { id: "kn-m527-3", name: "Ovo caipira batido", amount: "1 unidade", quantity: 1, unit: "unidade", optional: false, category: "Proteínas" },
      { id: "kn-m527-4", name: "Queijo parmesão ralado na hora", amount: "60 g", quantity: 60, unit: "g", optional: false, category: "Laticínios" },
      { id: "kn-m527-5", name: "Molho de tomates pelados", amount: "150 g", quantity: 150, unit: "g", optional: false, category: "Despensa" },
      { id: "kn-m527-6", name: "Manjericão fresco e alho", amount: "1 punhado", quantity: 5, unit: "g", optional: false, category: "Temperos" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Massa das almôndegas: Misture a carne moída com o ovo, a farinha de amêndoas, metade do parmesão, alho e sal até ligar.", timerSeconds: 180 },
      { stepNumber: 2, instruction: "Bolear: Modele almôndegas de tamanho médio e disponha na travessa refratária.", timerSeconds: 180 },
      { stepNumber: 3, instruction: "Regar com molho: Despeje o molho de tomates ao redor das almôndegas e polvilhe o parmesão restante por cima.", timerSeconds: 60 },
      { stepNumber: 4, instruction: "Assar e gratinar: Leve ao forno a 200°C por 18 minutos até o topo dourar intensamente.", timerSeconds: 1080 }
    ],
    chefTip: "A farinha de amêndoas com o ovo garante a liga sem precisar de farinha de rosca, mantendo as almôndegas incrivelmente suculentas."
  },
  {
    id: "kn-meat-528",
    title: "Picanha Fatiada no Réchaud com Sal Maldon e Manteiga de Chimichurri Artesanal",
    description: "Tiras grossas da melhor picanha maturada seladas na chapa de ferro fervente, guarnecidas com manteiga de chimichurri fresco.",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
    category: "meat",
    subcategory: "bifes",
    categoryName: "Carnes Nobres",
    difficulty: "Fácil",
    prepTime: 5,
    cookTime: 8,
    servings: 2,
    rating: 5.0,
    reviewCount: 71,
    isPremium: true,
    tags: ["picanha", "chimichurri", "grelhados", "churrasco keto"],
    nutrition: { calories: 590, protein: 42, netCarbs: 1, fat: 47, fiber: 0, carbs: 1 },
    ingredients: [
      { id: "kn-m528-1", name: "Bifes altos de picanha nobre com capa de gordura", amount: "450 g", quantity: 450, unit: "g", optional: false, category: "Carnes" },
      { id: "kn-m528-2", name: "Manteiga amolecida", amount: "30 g", quantity: 30, unit: "g", optional: false, category: "Despensa" },
      { id: "kn-m528-3", name: "Salsinha picada, orégano fresco e alho", amount: "2 colheres de sopa", quantity: 15, unit: "g", optional: false, category: "Temperos" },
      { id: "kn-m528-4", name: "Vinagre de vinho tinto e azeite", amount: "1 colher de chá", quantity: 5, unit: "ml", optional: false, category: "Despensa" },
      { id: "kn-m528-5", name: "Sal de parrilla ou flor de sal Maldon", amount: "1 colher de chá", quantity: 5, unit: "g", optional: false, category: "Temperos" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Manteiga de chimichurri: Misture a manteiga com as ervas frescas, alho, vinagre e azeite formando uma pasta aveludada.", timerSeconds: 120 },
      { stepNumber: 2, instruction: "Tostar a gordura da picanha: Em frigideira de ferro bem quente, apoie os bifes em pé sobre a capa de gordura por 2 minutos para derreter e dourar.", timerSeconds: 120 },
      { stepNumber: 3, instruction: "Selar a carne: Deite os bifes e doure por 2 minutos e meio de cada lado em fogo altíssimo.", timerSeconds: 300, tip: "O ponto ideal da picanha é sangrante a ao ponto." },
      { stepNumber: 4, instruction: "Servir: Fatie em tiras contra as fibras, salpique sal Maldon e finalize com a manteiga derretendo sobre a carne quente." }
    ],
    chefTip: "Tostar a gordura em pé primeiro extrai o óleo natural da própria picanha, dispensando o uso de óleo vegetal na frigideira."
  },
  {
    id: "kn-meat-529",
    title: "Costela Bovina Assada Lentamente no Forno com Caldo de Ossos e Louro",
    description: "Janela de costela assada em baixa temperatura por horas, desmanchando na ponta do garfo com molho denso e aromático.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    category: "meat",
    subcategory: "assados",
    categoryName: "Carnes Nobres",
    difficulty: "Fácil",
    prepTime: 15,
    cookTime: 120,
    servings: 4,
    rating: 5.0,
    reviewCount: 49,
    isPremium: true,
    tags: ["costela bovina", "slow cooking", "assado", "caldo de ossos"],
    nutrition: { calories: 620, protein: 48, netCarbs: 1, fat: 48, fiber: 0, carbs: 1 },
    ingredients: [
      { id: "kn-m529-1", name: "Costela bovina em ripas carnudas", amount: "1 kg", quantity: 1000, unit: "g", optional: false, category: "Carnes" },
      { id: "kn-m529-2", name: "Caldo de ossos bovinos concentrado", amount: "200 ml", quantity: 200, unit: "ml", optional: false, category: "Despensa" },
      { id: "kn-m529-3", name: "Alho inteiro com casca cortado ao meio", amount: "1 cabeça", quantity: 40, unit: "g", optional: false, category: "Temperos" },
      { id: "kn-m529-4", name: "Folhas de louro fresco e ramos de alecrim", amount: "4 unidades", quantity: 5, unit: "g", optional: false, category: "Temperos" },
      { id: "kn-m529-5", name: "Sal grosso moído e pimenta-do-reino", amount: "1 colher de sopa", quantity: 15, unit: "g", optional: false, category: "Temperos" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Temperar: Tempere generosamente a costela com o sal e pimenta em todos os lados.", timerSeconds: 180 },
      { stepNumber: 2, instruction: "Montar a assadeira: Coloque o caldo de ossos, as ervas e o alho no fundo da assadeira com a costela por cima.", timerSeconds: 120 },
      { stepNumber: 3, instruction: "Embalar: Cubra com 3 voltas de papel alumínio vedando hermeticamente as bordas.", timerSeconds: 180 },
      { stepNumber: 4, instruction: "Cozimento lento: Asse a 160°C por 2 horas até soltar completamente do osso.", timerSeconds: 7200 }
    ],
    chefTip: "O segredo do cozimento lento da costela é a vedação hermética com o papel alumínio para que nenhum vapor de colágeno escape."
  },
  {
    id: "kn-meat-530",
    title: "Carré de Cordeiro Grelhado com Crosta de Pistache e Redução Balsâmica Zero",
    description: "Costelinhas francesas de cordeiro rosadas no centro, empanadas em farofa crocante de pistache e redução de vinagre balsâmico.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    category: "meat",
    subcategory: "cordeiro",
    categoryName: "Carnes Nobres",
    difficulty: "Médio",
    prepTime: 15,
    cookTime: 12,
    servings: 2,
    rating: 5.0,
    reviewCount: 38,
    isPremium: true,
    tags: ["cordeiro", "carré", "pistache", "alta gastronomia"],
    nutrition: { calories: 530, protein: 38, netCarbs: 3, fat: 40, fiber: 2, carbs: 5 },
    ingredients: [
      { id: "kn-m530-1", name: "Carré de cordeiro francês limpo", amount: "500 g (6 a 8 costeletas)", quantity: 500, unit: "g", optional: false, category: "Carnes" },
      { id: "kn-m530-2", name: "Pistaches tostados e picados finos", amount: "50 g", quantity: 50, unit: "g", optional: false, category: "Despensa" },
      { id: "kn-m530-3", name: "Mostarda Dijon clássica", amount: "1 colher de sopa", quantity: 15, unit: "g", optional: false, category: "Despensa" },
      { id: "kn-m530-4", name: "Manteiga de alho e alecrim", amount: "20 g", quantity: 20, unit: "g", optional: false, category: "Despensa" },
      { id: "kn-m530-5", name: "Vinagre balsâmico reduzido sem açúcar", amount: "1 colher de sopa", quantity: 15, unit: "ml", optional: false, category: "Despensa" }
    ],
    steps: [
      { stepNumber: 1, instruction: "Selar o carré: Sele a carne do carré em frigideira quente com manteiga e alecrim por 2 minutos de cada lado.", timerSeconds: 240 },
      { stepNumber: 2, instruction: "Pincelar dijon: Retire do fogo, pincele uma camada fina de mostarda Dijon na parte carnuda do carré.", timerSeconds: 60 },
      { stepNumber: 3, instruction: "Crosta de pistache: Pressione o pistache picado sobre a mostarda para grudar perfeitamente.", timerSeconds: 60 },
      { stepNumber: 4, instruction: "Forno rápido: Leve ao forno a 200°C por 6 minutos para ponto rosado perfeito. Sirva com fios da redução balsâmica.", timerSeconds: 360 }
    ],
    chefTip: "O cordeiro deve sempre ser servido rosado no interior; passar do ponto endurece a fibra nobre e altera seu sabor delicado."
  }
];
