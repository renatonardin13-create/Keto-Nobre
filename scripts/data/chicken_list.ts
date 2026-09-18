import { RawRecipeInput } from '../recipe_helper';

export function getFullChickenList(): RawRecipeInput[] {
  const list: { title: string; sub: string; diff: 'easy' | 'medium' | 'hard'; prep: number; cook: number; cal: number; p: number; c: number; fib: number; f: number; prem: boolean; tags: string[]; tip: string; ings: [string, number, string, any][]; steps: [string, string, number | null][] }[] = [
    // 1-15: Frango Cremoso (15)
    {
      title: 'Frango Cremoso com Ervas de Provence e Alho Dourado',
      sub: 'frango_cremoso', diff: 'easy', prep: 10, cook: 15, cal: 420, p: 38, c: 3, fib: 1, f: 28, prem: false,
      tags: ['frango', 'cremoso', 'ervas', 'almoço', 'jantar'],
      tip: 'Seque os cubos de frango antes de dourar para obter uma crosta dourada saborosa.',
      ings: [['Peito de frango em cubos', 500, 'g', 'proteínas'], ['Creme de leite fresco', 200, 'ml', 'laticínios'], ['Dentes de alho picados', 3, 'unidades', 'vegetais'], ['Ervas de provence', 1, 'colher de sopa', 'temperos'], ['Manteiga ghee', 25, 'g', 'despensa'], ['Queijo parmesão ralado', 40, 'g', 'laticínios']],
      steps: [['Selar o frango', 'Aqueça a manteiga e doure os cubos de frango até caramelizarem.', 360], ['Refogar o alho', 'Adicione o alho picado e mexa por 1 minuto.', 60], ['Adicionar creme', 'Reduza o fogo, junte o creme de leite e as ervas.', 240], ['Finalizar com queijo', 'Salpique o parmesão e mexa até encorpar o molho.', 120]]
    },
    {
      title: 'Frango ao Curry Amarelo Tailandês com Leite de Coco Puro',
      sub: 'frango_cremoso', diff: 'medium', prep: 12, cook: 18, cal: 460, p: 36, c: 5, fib: 2, f: 32, prem: true,
      tags: ['frango', 'tailandês', 'curry', 'leite_de_coco', 'gourmet'],
      tip: 'Frite a pasta de curry no óleo aquecido antes de colocar o leite de coco para liberar os óleos essenciais.',
      ings: [['Sobrecoxas de frango desossadas em pedaços', 500, 'g', 'proteínas'], ['Leite de coco integral espesso', 250, 'ml', 'despensa'], ['Pasta de curry amarelo tailandesa', 2, 'colheres de sopa', 'temperos'], ['Gengibre fresco ralado', 1, 'colher de sopa', 'temperos'], ['Espinafre baby fresco', 60, 'g', 'vegetais']],
      steps: [['Dourar o curry', 'Aqueça um fio de óleo de coco e doure a pasta de curry e gengibre.', 120], ['Adicionar o frango', 'Junte o frango e envolva bem nas especiarias.', 300], ['Cozinhar no leite de coco', 'Despeje o leite de coco e cozinhe em fogo brando.', 480], ['Folhas de espinafre', 'Adicione o espinafre no último minuto até murchar.', 60]]
    },
    {
      title: 'Frango ao Molho Alfredo com Floretes de Brócolis',
      sub: 'frango_cremoso', diff: 'easy', prep: 10, cook: 16, cal: 480, p: 40, c: 4, fib: 2, f: 34, prem: false,
      tags: ['frango', 'alfredo', 'brócolis', 'parmesão', 'clássico'],
      tip: 'Cozinhe o brócolis apenas até ficar al dente para manter a cor verde brilhante.',
      ings: [['Peito de frango em tiras', 500, 'g', 'proteínas'], ['Brócolis em floretes pequenos', 200, 'g', 'vegetais'], ['Creme de leite fresco', 200, 'ml', 'laticínios'], ['Manteiga', 30, 'g', 'laticínios'], ['Queijo Parmesão ralado na hora', 60, 'g', 'laticínios'], ['Noz-moscada', 1, 'pitada', 'temperos']],
      steps: [['Grelhar o frango', 'Grelhe o frango na manteiga até dourar bem.', 360], ['Adicionar o brócolis', 'Junte o brócolis pré-cozido e misture ao frango.', 120], ['Molho alfredo', 'Despeje o creme, parmesão e noz-moscada e ferva até aveludar.', 240]]
    },
    {
      title: 'Frango com Queijo Gorgonzola e Nozes Tostadas',
      sub: 'frango_cremoso', diff: 'medium', prep: 8, cook: 15, cal: 490, p: 39, c: 3, fib: 1, f: 36, prem: true,
      tags: ['frango', 'gorgonzola', 'nozes', 'sofisticado'],
      tip: 'O gorgonzola derrete rapidamente; adicione com o fogo já desligado se preferir textura suave.',
      ings: [['Filé de peito de frango', 500, 'g', 'proteínas'], ['Queijo gorgonzola em pedaços', 80, 'g', 'laticínios'], ['Creme de leite', 150, 'ml', 'laticínios'], ['Nozes picadas tostadas', 30, 'g', 'despensa'], ['Manteiga', 20, 'g', 'despensa']],
      steps: [['Selar filés', 'Doure os filés na manteiga em fogo médio-alto.', 360], ['Fundir queijo', 'Em fogo baixo, adicione o creme e o queijo gorgonzola.', 240], ['Finalizar com nozes', 'Distribua as nozes crocantes por cima antes de servir.', null]]
    },
    {
      title: 'Frango ao Molho Mostarda Dijon com Bacon Crocante',
      sub: 'frango_cremoso', diff: 'easy', prep: 10, cook: 14, cal: 450, p: 42, c: 3, fib: 1, f: 30, prem: false,
      tags: ['frango', 'mostarda_dijon', 'bacon', 'francês'],
      tip: 'Use mostarda Dijon legítima com grãos para acrescentar textura visual e gustativa.',
      ings: [['Sobrecoxas de frango desossadas', 500, 'g', 'proteínas'], ['Mostarda Dijon tradicional', 2, 'colheres de sopa', 'temperos'], ['Bacon em fatias crocantes', 60, 'g', 'proteínas'], ['Creme de leite', 180, 'ml', 'laticínios'], ['Azeite de oliva', 15, 'ml', 'despensa']],
      steps: [['Fritar bacon', 'Doure o bacon na frigideira até estalar e reserve a gordura.', 240], ['Grelhar sobrecoxas', 'Doure o frango na gordura do bacon.', 360], ['Molho Dijon', 'Misture a mostarda e o creme de leite, deixando apurar.', 180], ['Servir crocante', 'Salpique o bacon picadinho por cima do prato.', null]]
    },
    {
      title: 'Frango ao Molho de Queijo Brie e Aspargos Frescos',
      sub: 'frango_cremoso', diff: 'medium', prep: 12, cook: 16, cal: 470, p: 41, c: 3, fib: 1, f: 33, prem: true,
      tags: ['frango', 'brie', 'aspargos', 'luxo', 'jantar'],
      tip: 'Corte a parte fibrosa da base dos aspargos antes de cozinhar.',
      ings: [['Peito de frango cortado em escalopes', 500, 'g', 'proteínas'], ['Aspargos verdes frescos', 150, 'g', 'vegetais'], ['Queijo Brie fatiado', 100, 'g', 'laticínios'], ['Creme de leite fresco', 150, 'ml', 'laticínios'], ['Manteiga', 25, 'g', 'despensa']],
      steps: [['Selar escalopes', 'Doure os escalopes rapidamente na manteiga.', 300], ['Saltear aspargos', 'Junte os aspargos cortados em terços.', 180], ['Creme de brie', 'Acrescente o creme de leite e o brie, mexendo até fundir.', 180]]
    },
    {
      title: 'Fricassê Cetogênico de Frango com Creme de Couve-Flor e Palha de Queijo',
      sub: 'frango_cremoso', diff: 'medium', prep: 15, cook: 20, cal: 430, p: 38, c: 5, fib: 2, f: 29, prem: false,
      tags: ['fricassê', 'conforto', 'gratinado', 'família'],
      tip: 'Substitua o milho tradicional por purê aveludado de couve-flor com açafrão da terra.',
      ings: [['Peito de frango cozido e desfiado', 500, 'g', 'proteínas'], ['Purê de couve-flor cozida', 250, 'g', 'vegetais'], ['Creme de leite fresco', 150, 'ml', 'laticínios'], ['Queijo muçarela ralado', 100, 'g', 'laticínios'], ['Açafrão da terra para cor dourada', 1, 'colher de café', 'temperos']],
      steps: [['Bater o creme', 'Bata a couve-flor no liquidificador com creme de leite, açafrão e sal.', 120], ['Misturar ao frango', 'Envolva o frango desfiado no creme dourado em refratário.', 120], ['Gratinar', 'Cubra com muçarela e asse a 200°C até gratinar.', 900]]
    },
    {
      title: 'Strogonoff Cetogênico de Frango com Cogumelos Frescos',
      sub: 'frango_cremoso', diff: 'easy', prep: 10, cook: 15, cal: 410, p: 40, c: 4, fib: 1, f: 26, prem: false,
      tags: ['strogonoff', 'clássico', 'cogumelos', 'dia_a_dia'],
      tip: 'Use extrato de tomate 100% puro sem adição de açúcar e mostarda Dijon.',
      ings: [['Peito de frango em cubos', 500, 'g', 'proteínas'], ['Cogumelos Paris fatiados', 150, 'g', 'vegetais'], ['Creme de leite fresco', 200, 'ml', 'laticínios'], ['Extrato de tomate puro', 2, 'colheres de sopa', 'vegetais'], ['Mostarda Dijon', 1, 'colher de sopa', 'temperos'], ['Manteiga', 20, 'g', 'despensa']],
      steps: [['Dourar o frango', 'Doure os cubos de frango na manteiga.', 300], ['Cogumelos', 'Acrescente os cogumelos e refogue.', 180], ['Molho cremoso', 'Incorpore o extrato de tomate, mostarda e creme de leite em fogo brando.', 240]]
    },
    {
      title: 'Frango com Creme de Espinafre à Florentina',
      sub: 'frango_cremoso', diff: 'easy', prep: 10, cook: 15, cal: 440, p: 42, c: 3, fib: 1, f: 29, prem: false,
      tags: ['frango', 'florentina', 'espinafre', 'italiano'],
      tip: 'O espinafre combina harmoniosamente com queijo parmesão e toque sutil de noz-moscada.',
      ings: [['Filés de peito de frango', 500, 'g', 'proteínas'], ['Espinafre fresco picado', 150, 'g', 'vegetais'], ['Creme de leite', 150, 'ml', 'laticínios'], ['Queijo parmesão ralado', 50, 'g', 'laticínios'], ['Dentes de alho picados', 2, 'unidades', 'vegetais']],
      steps: [['Selar filés', 'Grelhe os filés temperados até dourarem dos dois lados.', 360], ['Fazer creme', 'Na mesma frigideira, refogue o espinafre com alho e creme de leite.', 180], ['Banhar o frango', 'Volte os filés para a panela e envolva no creme com parmesão.', 120]]
    },
    {
      title: 'Frango Cremoso com Alho-Poró e Queijo Canastra',
      sub: 'frango_cremoso', diff: 'easy', prep: 10, cook: 14, cal: 450, p: 39, c: 4, fib: 1, f: 31, prem: true,
      tags: ['frango', 'alho-poró', 'queijo_canastra', 'brasileiro'],
      tip: 'Refogue o alho-poró até ficar macio e translúcido para adoçar o molho naturalmente.',
      ings: [['Cubos de peito de frango', 500, 'g', 'proteínas'], ['Alho-poró em rodelas finas', 1, 'xícara', 'vegetais'], ['Queijo Canastra curado ralado', 80, 'g', 'laticínios'], ['Creme de leite fresco', 180, 'ml', 'laticínios'], ['Manteiga', 25, 'g', 'despensa']],
      steps: [['Caramelizar frango', 'Doure o frango na manteiga.', 300], ['Alho-poró', 'Adicione o alho-poró e refogue até murchar.', 180], ['Queijo canastra', 'Despeje o creme e o queijo canastra até incorporar.', 180]]
    },
    {
      title: 'Frango com Molho Cremoso de Limão Siciliano e Alcaparras',
      sub: 'frango_cremoso', diff: 'easy', prep: 8, cook: 14, cal: 420, p: 38, c: 3, fib: 1, f: 28, prem: true,
      tags: ['frango', 'limão_siciliano', 'alcaparras', 'mediterrâneo'],
      tip: 'Lave as alcaparras em água corrente para retirar o excesso de salmoura.',
      ings: [['Escalopes de frango finos', 500, 'g', 'proteínas'], ['Suco e raspas de 1 limão siciliano', 1, 'unidade', 'temperos'], ['Alcaparras drenadas', 2, 'colheres de sopa', 'temperos'], ['Creme de leite fresco', 180, 'ml', 'laticínios'], ['Manteiga de ervas', 30, 'g', 'despensa']],
      steps: [['Dourar escalopes', 'Grelhe rapidamente os escalopes na manteiga.', 300], ['Molho cítrico', 'Adicione o suco de limão, as raspas e o creme de leite.', 180], ['Alcaparras', 'Junte as alcaparras e sirva bem quente.', 60]]
    },
    {
      title: 'Frango Cremoso com Pesto Genovês e Tomates Confit',
      sub: 'frango_cremoso', diff: 'medium', prep: 10, cook: 15, cal: 470, p: 40, c: 4, fib: 1, f: 33, prem: true,
      tags: ['frango', 'pesto', 'manjericão', 'italiano'],
      tip: 'Não ferva o pesto por muito tempo para preservar a cor verde vibrante.',
      ings: [['Peito de frango grelhado em tiras', 500, 'g', 'proteínas'], ['Pesto caseiro de manjericão com azeite e nozes', 60, 'g', 'despensa'], ['Creme de leite fresco', 120, 'ml', 'laticínios'], ['Tomates-cereja confitados', 60, 'g', 'vegetais']],
      steps: [['Aquecer frango', 'Aqueça o frango grelhado na frigideira.', 120], ['Envolver no pesto', 'Adicione o creme de leite e desligue o fogo ao misturar o pesto.', 120], ['Decorar', 'Disponha os tomatinhos confitados por cima.', null]]
    },
    {
      title: 'Frango com Molho de Pimenta Verde Fresca e Nata',
      sub: 'frango_cremoso', diff: 'easy', prep: 6, cook: 15, cal: 460, p: 39, c: 2, fib: 0, f: 33, prem: true,
      tags: ['frango', 'pimenta_verde', 'nata', 'francês'],
      tip: 'A pimenta verde em grãos confere aroma floral sem picância excessiva.',
      ings: [['Peito de frango em bifes grossos', 500, 'g', 'proteínas'], ['Grãos de pimenta verde em conserva esmagados', 1, 'colher de sopa', 'temperos'], ['Nata fresca ou creme de leite', 180, 'g', 'laticínios'], ['Manteiga', 25, 'g', 'despensa']],
      steps: [['Selar bifes', 'Doure o frango na manteiga até dourar bem.', 360], ['Deglaçar frigideira', 'Acrescente a pimenta verde esmagada e a nata raspando o fundo.', 240], ['Servir', 'Cubra o frango com o molho denso e perfumado.', null]]
    },
    {
      title: 'Frango Tikka Masala Cetogênico sem Açúcar',
      sub: 'frango_cremoso', diff: 'medium', prep: 15, cook: 20, cal: 450, p: 41, c: 5, fib: 2, f: 30, prem: true,
      tags: ['frango', 'indiano', 'especiarias', 'tikka_masala'],
      tip: 'Marine o frango em iogurte com especiarias antes de grelhar para amaciar as fibras.',
      ings: [['Frango em cubos marinados em iogurte e garam masala', 500, 'g', 'proteínas'], ['Purê de tomates rústico', 150, 'g', 'vegetais'], ['Creme de leite ou leite de coco', 150, 'ml', 'laticínios'], ['Gengibre e alho ralados', 2, 'colheres de sopa', 'temperos'], ['Manteiga ghee', 30, 'g', 'despensa']],
      steps: [['Dourar o frango marinado', 'Grelhe o frango em alta temperatura.', 360], ['Fazer molho masala', 'Refogue o gengibre e alho, adicione o purê de tomate e especiarias.', 300], ['Finalizar com creme', 'Incorpore o creme de leite e junte o frango até borbulhar.', 240]]
    },
    {
      title: 'Frango Cremoso com Queijo Provolone Defumado e Orégano Fresco',
      sub: 'frango_cremoso', diff: 'easy', prep: 8, cook: 14, cal: 460, p: 43, c: 2, fib: 0, f: 32, prem: false,
      tags: ['frango', 'provolone', 'defumado', 'rápido'],
      tip: 'O queijo provolone traz uma nota defumada deliciosa que combina perfeitamente com aves.',
      ings: [['Cubos de peito de frango', 500, 'g', 'proteínas'], ['Queijo provolone ralado', 80, 'g', 'laticínios'], ['Creme de leite', 160, 'ml', 'laticínios'], ['Orégano fresco', 1, 'colher de sopa', 'temperos'], ['Azeite', 15, 'ml', 'despensa']],
      steps: [['Dourar carne', 'Frite o frango no azeite até ficar crocante por fora.', 300], ['Acrescentar creme', 'Junte o creme e reduza levemente.', 180], ['Fundir provolone', 'Adicione o provolone e o orégano até criar puxa.', 120]]
    },

    // 16-30: Frango Assado (15)
    {
      title: 'Frango Inteiro Assado com Manteiga de Ervas e Alho Inteiro',
      sub: 'frango_assado', diff: 'medium', prep: 15, cook: 60, cal: 510, p: 48, c: 2, fib: 0, f: 35, prem: false,
      tags: ['frango_assado', 'domingo', 'família', 'inteiro'],
      tip: 'Espalhe a manteiga temperada por baixo da pele do peito para garantir carne ultra úmida.',
      ings: [['Frango inteiro limpo', 1500, 'g', 'proteínas'], ['Manteiga em ponto de pomada', 80, 'g', 'laticínios'], ['Ramos de alecrim e tomilho', 4, 'ramos', 'temperos'], ['Cabeça inteira de alho cortada ao meio', 1, 'unidade', 'vegetais'], ['Flor de sal e pimenta moída', 1, 'colher de sopa', 'temperos']],
      steps: [['Temperar sob a pele', 'Solte a pele do peito e introduza metade da manteiga com ervas.', 300], ['Besuntar exterior', 'Passe o restante da manteiga por fora e tempere com sal.', 180], ['Assar lentamente', 'Asse em forno a 200°C até a pele pururucar e os sucos saírem claros.', 3600]]
    },
    {
      title: 'Coxas e Sobrecoxas Assadas com Crosta de Ervas e Páprica Defumada',
      sub: 'frango_assado', diff: 'easy', prep: 10, cook: 40, cal: 480, p: 42, c: 2, fib: 1, f: 34, prem: false,
      tags: ['sobrecoxa', 'crocante', 'páprica', 'forno'],
      tip: 'Asse sobre uma grade para que a gordura escorra e a pele fique 100% crocante.',
      ings: [['Coxas e sobrecoxas com pele', 800, 'g', 'proteínas'], ['Páprica defumada espanhola', 1, 'colher de sopa', 'temperos'], ['Azeite de oliva', 30, 'ml', 'despensa'], ['Alho em pó e sal marinho', 1, 'colher de sopa', 'temperos'], ['Orégano seco', 1, 'colher de sopa', 'temperos']],
      steps: [['Secar a pele', 'Seque a pele com papel toalha.', 120], ['Marinar em especiarias', 'Besunte com azeite, páprica, alho e sal.', 180], ['Forno quente', 'Asse a 210°C até a pele ficar extremamente estaladiça.', 2400]]
    },
    {
      title: 'Galeto ao Primo Canto com Sálvia e Limão',
      sub: 'frango_assado', diff: 'medium', prep: 15, cook: 45, cal: 460, p: 46, c: 1, fib: 0, f: 30, prem: true,
      tags: ['galeto', 'sulista', 'sálvia', 'churrasco'],
      tip: 'Marine o galeto na salmoura com vinho branco seco e sálvia fresca por pelo menos 2 horas.',
      ings: [['Galeto limpo aberto pelas costas', 800, 'g', 'proteínas'], ['Folhas frescas de sálvia', 15, 'folhas', 'temperos'], ['Suco de limão e raspas', 2, 'unidades', 'temperos'], ['Azeite de oliva', 40, 'ml', 'despensa'], ['Dentes de alho esmagados', 4, 'unidades', 'vegetais']],
      steps: [['Abrir galeto', 'Abra o galeto espalmado sobre a assadeira.', 180], ['Besuntar com marinada', 'Pincele o azeite batido com sálvia, alho e limão.', 120], ['Assar com calor alto', 'Asse a 220°C pincelando os sucos durante o cozimento.', 2700]]
    },
    {
      title: 'Sobrecoxa Assada com Bacon e Queijo Meia Cura Gratinado',
      sub: 'frango_assado', diff: 'easy', prep: 10, cook: 35, cal: 520, p: 45, c: 2, fib: 0, f: 38, prem: false,
      tags: ['sobrecoxa', 'bacon', 'gratinado', 'queijo'],
      tip: 'O bacon enrolado na sobrecoxa mantém a carne incrivelmente suculenta.',
      ings: [['Sobrecoxas desossadas', 600, 'g', 'proteínas'], ['Fatias de bacon artesanal', 6, 'unidades', 'proteínas'], ['Queijo meia cura fatiado', 100, 'g', 'laticínios'], ['Pimenta preta', 1, 'colher de café', 'temperos']],
      steps: [['Enrolar bacon', 'Tempere as sobrecoxas e envolva cada uma com uma fatia de bacon.', 180], ['Assar', 'Leve ao forno a 200°C até o bacon dourar.', 1800], ['Gratinar com queijo', 'Disponha o queijo meia cura por cima e gratine por 5 minutos.', 300]]
    },
    {
      title: 'Frango Assado com Manteiga de Alho e Ervas Finas na Cerveja Zero Carb',
      sub: 'frango_assado', diff: 'medium', prep: 12, cook: 50, cal: 470, p: 44, c: 2, fib: 0, f: 32, prem: true,
      tags: ['frango_assado', 'cerveja_lowcarb', 'alho', 'suculento'],
      tip: 'O vapor da cerveja low carb na assadeira hidrata o frango enquanto o forno doura a casca.',
      ings: [['Pedaços de frango (coxa e peito)', 800, 'g', 'proteínas'], ['Cerveja ultra low carb (zero açúcar)', 150, 'ml', 'despensa'], ['Manteiga com alho amassado', 50, 'g', 'despensa'], ['Alecrim fresco', 3, 'ramos', 'temperos']],
      steps: [['Acomodar na assadeira', 'Disponha o frango e regue a cerveja no fundo da assadeira.', 180], ['Manteiga por cima', 'Espalhe a manteiga de alho sobre cada pedaço.', 120], ['Assar', 'Asse a 190°C até dourar e reduzir o caldo nobre.', 3000]]
    },
    {
      title: 'Coxas de Frango Assadas com Mostarda em Grãos e Alecrim',
      sub: 'frango_assado', diff: 'easy', prep: 8, cook: 35, cal: 430, p: 40, c: 3, fib: 1, f: 29, prem: false,
      tags: ['coxas', 'mostarda', 'alecrim', 'fácil'],
      tip: 'Misture azeite com mostarda em grãos para criar uma pasta aderente na carne.',
      ings: [['Coxas de frango com pele', 600, 'g', 'proteínas'], ['Mostarda em grãos (l\'ancienne)', 2, 'colheres de sopa', 'temperos'], ['Azeite de oliva', 20, 'ml', 'despensa'], ['Ramos de alecrim', 2, 'unidades', 'temperos']],
      steps: [['Passar pasta de mostarda', 'Besunte as coxas com a mistura de mostarda, azeite e alecrim.', 120], ['Assar', 'Leve ao forno quente a 200°C por 35 minutos.', 2100], ['Servir', 'Apresente douradas e aromáticas.', null]]
    },
    {
      title: 'Sobrecoxa Assada com Cebola Roxa e Vinagre Balsâmico Zero Açúcar',
      sub: 'frango_assado', diff: 'easy', prep: 10, cook: 35, cal: 440, p: 41, c: 4, fib: 1, f: 30, prem: true,
      tags: ['sobrecoxa', 'balsâmico', 'agridoce_keto', 'gourmet'],
      tip: 'A cebola roxa carameliza na própria gordura do frango conferindo doçura natural.',
      ings: [['Sobrecoxas com pele', 600, 'g', 'proteínas'], ['Cebolas roxas cortadas em quatro', 2, 'unidades', 'vegetais'], ['Vinagre balsâmico keto', 2, 'colheres de sopa', 'temperos'], ['Azeite', 20, 'ml', 'despensa']],
      steps: [['Dispor na assadeira', 'Coloque as sobrecoxas intercaladas com os gomos de cebola.', 180], ['Regar balsâmico', 'Regue o vinagre e azeite temperando com sal.', 60], ['Assar dourado', 'Asse a 200°C até a carne soltar do osso.', 2100]]
    },
    {
      title: 'Frango Assado com Crosta Crocante de Castanhas de Caju e Parmesão',
      sub: 'frango_assado', diff: 'medium', prep: 15, cook: 30, cal: 490, p: 46, c: 4, fib: 1, f: 32, prem: true,
      tags: ['frango_assado', 'castanha_de_caju', 'crocante', 'festa'],
      tip: 'Triture as castanhas com parmesão e manteiga para formar a farofa da crosta.',
      ings: [['Filés de peito de frango altos', 600, 'g', 'proteínas'], ['Castanhas de caju picadas', 60, 'g', 'despensa'], ['Queijo parmesão ralado', 50, 'g', 'laticínios'], ['Manteiga amolecida', 30, 'g', 'laticínios'], ['Mostarda Dijon para pincelar', 1, 'colher de sopa', 'temperos']],
      steps: [['Pincelar mostarda', 'Pincele mostarda sobre o frango para colar a crosta.', 60], ['Aplicar a crosta', 'Pressione a mistura de castanha e parmesão sobre o topo.', 120], ['Assar sem cobrir', 'Asse a 190°C até a crosta ficar dourada e crocante.', 1800]]
    },
    {
      title: 'Coxas de Frango Assadas à Tandoori com Iogurte e Pimenta',
      sub: 'frango_assado', diff: 'medium', prep: 15, cook: 35, cal: 420, p: 43, c: 3, fib: 1, f: 27, prem: false,
      tags: ['tandoori', 'indiano', 'iogurte', 'picante'],
      tip: 'Faça cortes profundos na carne para a marinada tandoori penetrar até o osso.',
      ings: [['Coxas de frango sem pele', 600, 'g', 'proteínas'], ['Iogurte grego natural sem açúcar', 100, 'g', 'laticínios'], ['Páprica picante, gengibre e cominho', 2, 'colheres de sopa', 'temperos'], ['Suco de limão', 1, 'unidade', 'temperos']],
      steps: [['Marinar', 'Envolva as coxas na pasta de iogurte com especiarias.', 300], ['Assadeira', 'Acomode as coxas na assadeira untada.', 60], ['Forno alto', 'Asse a 220°C até criar pontos tostados típicos do tandoori.', 2100]]
    },
    {
      title: 'Frango Assado Desossado Recheado com Farofa de Nozes e Bacon',
      sub: 'frango_assado', diff: 'hard', prep: 25, cook: 50, cal: 530, p: 48, c: 3, fib: 2, f: 37, prem: true,
      tags: ['frango_recheado', 'nozes', 'festa', 'gourmet'],
      tip: 'Amarre com barbante culinário para manter o formato cilíndrico perfeito.',
      ings: [['Frango inteiro desossado', 1200, 'g', 'proteínas'], ['Farinha de amêndoas e nozes trituradas', 100, 'g', 'despensa'], ['Bacon em cubinhos fritos', 80, 'g', 'proteínas'], ['Manteiga com cheiro verde', 40, 'g', 'despensa']],
      steps: [['Fazer a farofa keto', 'Misture o bacon frito na manteiga com farinha de amêndoas e nozes.', 180], ['Rechear e amarrar', 'Distribua a farofa no centro e amarre o frango.', 300], ['Assar com louvor', 'Asse a 190°C regando com o caldo até dourar.', 3000]]
    },
    {
      title: 'Frango Assado com Molho de Laranja e Gengibre Low-Carb',
      sub: 'frango_assado', diff: 'medium', prep: 12, cook: 40, cal: 440, p: 42, c: 4, fib: 1, f: 29, prem: true,
      tags: ['frango_assado', 'laranja_lowcarb', 'gengibre', 'agridoce'],
      tip: 'Use raspas da casca de laranja bahia para obter perfume intenso com quase zero carboidrato.',
      ings: [['Pedaços de frango caipira', 700, 'g', 'proteínas'], ['Raspas de laranja bahia e gotas do suco', 1, 'unidade', 'temperos'], ['Gengibre ralado fresco', 1, 'colher de sopa', 'temperos'], ['Azeite e alecrim', 2, 'colheres de sopa', 'despensa']],
      steps: [['Tempero cítrico', 'Esfregue o gengibre, raspas e azeite no frango.', 180], ['Assar coberto', 'Asse coberto com papel alumínio por 25 min.', 1500], ['Dourar aberto', 'Retire o papel e deixe dourar a pele por mais 15 min.', 900]]
    },
    {
      title: 'Sobrecoxa Assada com Crosta de Parmesão e Manjericão',
      sub: 'frango_assado', diff: 'easy', prep: 10, cook: 35, cal: 470, p: 44, c: 2, fib: 0, f: 33, prem: false,
      tags: ['sobrecoxa', 'parmesão', 'manjericão', 'italiano'],
      tip: 'Coloque o queijo somente nos últimos 10 minutos para não queimar antes da carne cozinhar.',
      ings: [['Sobrecoxas desossadas', 600, 'g', 'proteínas'], ['Parmesão ralado grosso', 80, 'g', 'laticínios'], ['Folhas de manjericão fresco', 15, 'folhas', 'temperos'], ['Azeite de oliva', 20, 'ml', 'despensa']],
      steps: [['Assar as sobrecoxas', 'Asse as sobrecoxas temperadas a 200°C.', 1500], ['Cobrir de queijo', 'Polvilhe o parmesão e manjericão sobre o topo.', 60], ['Gratinar', 'Deixe mais 10 minutos até borbulhar.', 600]]
    },
    {
      title: 'Galeto Assado com Ervas Frescas e Manteiga de Garrafa',
      sub: 'frango_assado', diff: 'easy', prep: 10, cook: 45, cal: 480, p: 45, c: 1, fib: 0, f: 34, prem: false,
      tags: ['galeto', 'manteiga_de_garrafa', 'ervas', 'brasileiro'],
      tip: 'A manteiga de garrafa confere um aroma rústico inconfundível.',
      ings: [['Galeto espalmado', 800, 'g', 'proteínas'], ['Manteiga de garrafa pura', 50, 'ml', 'despensa'], ['Salsinha, cebolinha e tomilho picados', 3, 'colheres de sopa', 'temperos'], ['Alho picado', 1, 'colher de sopa', 'vegetais']],
      steps: [['Pincelar fartamente', 'Pincele a manteiga misturada às ervas e alho em todo o galeto.', 180], ['Forno', 'Asse em assadeira aberta a 200°C.', 2400], ['Regar sucos', 'Regue a cada 15 minutos com a manteiga do fundo.', 300]]
    },
    {
      title: 'Frango Assado com Chimichurri Fresco Uruguaio',
      sub: 'frango_assado', diff: 'easy', prep: 10, cook: 40, cal: 460, p: 43, c: 2, fib: 1, f: 32, prem: false,
      tags: ['frango_assado', 'chimichurri', 'platino', 'churrasco'],
      tip: 'Prepare o chimichurri com horas de antecedência para as ervas secas hidratarem no azeite e vinagre.',
      ings: [['Pedaços de frango com osso', 800, 'g', 'proteínas'], ['Molho chimichurri caseiro', 80, 'g', 'despensa'], ['Sal grosso moído', 1, 'colher de chá', 'temperos']],
      steps: [['Marinar', 'Envolva o frango no chimichurri.', 120], ['Assar', 'Asse na grelha do forno a 200°C.', 2400], ['Servir aromático', 'Sirva com colherada fresca de chimichurri frio.', null]]
    },
    {
      title: 'Sobrecoxa Assada com Crosta de Gergelim e Molho Shoyu Zero Açúcar',
      sub: 'frango_assado', diff: 'easy', prep: 10, cook: 35, cal: 450, p: 42, c: 3, fib: 1, f: 31, prem: true,
      tags: ['sobrecoxa', 'oriental', 'gergelim', 'crocante'],
      tip: 'Use shoyu tradicional fermentado naturalmente ou aminoácidos de coco sem açúcar.',
      ings: [['Sobrecoxas de frango', 600, 'g', 'proteínas'], ['Molho de soja sem açúcar (shoyu)', 40, 'ml', 'temperos'], ['Gergelim tostado misto', 30, 'g', 'despensa'], ['Óleo de gergelim torrado', 15, 'ml', 'despensa']],
      steps: [['Marinar no shoyu', 'Deixe o frango no shoyu com óleo de gergelim.', 300], ['Passar no gergelim', 'Empane a pele com gergelim abundante.', 120], ['Assar', 'Asse a 190°C até tostar.', 2100]]
    }
  ];

  // Continue with the remaining 50 chicken recipes (Grelhados 15, Recheados 12, Asas e Coxas 13, Aves Especiais 10)
  const remaining: { title: string; sub: string; diff: 'easy' | 'medium' | 'hard'; prep: number; cook: number; cal: number; p: number; c: number; fib: number; f: number; prem: boolean; tags: string[]; tip: string; ings: [string, number, string, any][]; steps: [string, string, number | null][] }[] = [
    // Frango Grelhado (15)
    {
      title: 'Peito de Frango Grelhado com Manteiga de Ervas e Alho Negro',
      sub: 'frango_grelhado', diff: 'easy', prep: 8, cook: 10, cal: 380, p: 44, c: 1, fib: 0, f: 23, prem: true,
      tags: ['frango_grelhado', 'alho_negro', 'rápido', 'gourmet'],
      tip: 'Não aperte o filé com a espátula na frigideira para preservar os sucos internos.',
      ings: [['Filés grossos de peito de frango', 500, 'g', 'proteínas'], ['Manteiga com alho negro amassado', 40, 'g', 'despensa'], ['Tomilho fresco', 1, 'colher de sopa', 'temperos']],
      steps: [['Aquecer frigideira de ferro', 'Deixe a frigideira fumegando com pouco azeite.', 180], ['Grelhar filés', 'Doure por 4 minutos de cada lado.', 480], ['Manteiga por cima', 'Desligue e coloque a manteiga de alho negro para derreter sobre o filé.', 60]]
    },
    {
      title: 'Frango Grelhado com Crosta de Parmesão e Limão Siciliano',
      sub: 'frango_grelhado', diff: 'easy', prep: 8, cook: 10, cal: 410, p: 46, c: 2, fib: 0, f: 25, prem: false,
      tags: ['frango_grelhado', 'parmesão', 'limão', 'dia_a_dia'],
      tip: 'Passe o filé úmido de azeite diretamente no parmesão ralado fino antes de grelhar.',
      ings: [['Filés de frango batidos finos', 500, 'g', 'proteínas'], ['Queijo parmesão ralado fino', 60, 'g', 'laticínios'], ['Raspas de limão siciliano', 1, 'colher de chá', 'temperos'], ['Azeite', 20, 'ml', 'despensa']],
      steps: [['Empanar no parmesão', 'Pressione os filés no parmesão e raspas.', 120], ['Frigideira antiaderente', 'Doure em fogo médio com azeite até a crosta de queijo dourar.', 360], ['Servir', 'Pingue gotas de limão fresco.', null]]
    },
    {
      title: 'Suprema de Frango Grelhada com Molho Chimichurri de Ervas Frescas',
      sub: 'frango_grelhado', diff: 'easy', prep: 10, cook: 12, cal: 390, p: 42, c: 2, fib: 1, f: 24, prem: false,
      tags: ['suprema', 'chimichurri', 'grelhado', 'saudável'],
      tip: 'Mantenha a pontinha da asa na suprema para um visual de bistrô francês.',
      ings: [['Supremas de frango com pele', 500, 'g', 'proteínas'], ['Salsinha, orégano fresco e azeite', 50, 'g', 'temperos'], ['Vinagre de maçã e alho picado', 20, 'ml', 'despensa']],
      steps: [['Grelhar com a pele', 'Inicie grelhando o lado da pele até ficar ultra crocante.', 360], ['Virar', 'Vire e termine o cozimento do outro lado.', 240], ['Cobrir de chimichurri', 'Sirva com colherada abundante de chimichurri.', null]]
    },
    {
      title: 'Frango Grelhado com Molho de Mostarda Ancienne e Vinho Branco Seco',
      sub: 'frango_grelhado', diff: 'medium', prep: 10, cook: 12, cal: 420, p: 43, c: 3, fib: 0, f: 26, prem: true,
      tags: ['frango_grelhado', 'vinho_branco', 'mostarda', 'bistrô'],
      tip: 'Deglace a frigideira com vinho branco seco após retirar o frango para capturar todo o sabor.',
      ings: [['Filés de peito de frango', 500, 'g', 'proteínas'], ['Vinho branco seco', 50, 'ml', 'despensa'], ['Mostarda em grãos', 2, 'colheres de sopa', 'temperos'], ['Manteiga gelada', 30, 'g', 'laticínios']],
      steps: [['Grelhar filés', 'Grelhe o frango e reserve aquecido.', 360], ['Molho', 'Coloque o vinho na frigideira, reduza e emulsione com a manteiga gelada e mostarda.', 180], ['Envolver', 'Regue o molho brilhante sobre o frango.', null]]
    },
    {
      title: 'Espetinho Nobre de Frango com Bacon e Pimentões Coloridos',
      sub: 'frango_grelhado', diff: 'easy', prep: 15, cook: 12, cal: 440, p: 40, c: 3, fib: 1, f: 30, prem: false,
      tags: ['espetinho', 'churrasco', 'bacon', 'festa'],
      tip: 'Deixe os palitos de madeira de molho na água por 20 minutos para não queimarem na grelha.',
      ings: [['Peito de frango em cubos grandes', 500, 'g', 'proteínas'], ['Bacon em fatias grossas', 100, 'g', 'proteínas'], ['Pimentão vermelho e amarelo em quadrados', 100, 'g', 'vegetais'], ['Azeite e tempero baiano', 1, 'colher de sopa', 'temperos']],
      steps: [['Montar espetos', 'Intercale cubos de frango, bacon dobrado e pimentões.', 300], ['Grelhar', 'Grelhe na frigideira estriada ou brasa virando todos os lados.', 480], ['Servir', 'Acompanhe com farofa cetogênica de amêndoas.', null]]
    },
    {
      title: 'Frango Grelhado com Manteiga de Sálvia e Limão Confitado',
      sub: 'frango_grelhado', diff: 'medium', prep: 8, cook: 10, cal: 400, p: 43, c: 1, fib: 0, f: 25, prem: true,
      tags: ['frango_grelhado', 'sálvia', 'limão', 'italiano'],
      tip: 'Frite as folhas de sálvia na manteiga até ficarem estaladiças para guarnecer o prato.',
      ings: [['Peito de frango em filés', 500, 'g', 'proteínas'], ['Manteiga', 40, 'g', 'laticínios'], ['Folhas de sálvia fresca', 10, 'folhas', 'temperos'], ['Rodelas de limão grelhadas', 2, 'unidades', 'vegetais']],
      steps: [['Grelhar filés', 'Doure os filés no azeite por 8 minutos.', 480], ['Tostar sálvia', 'Na mesma frigideira, derreta a manteiga e toste a sálvia e o limão.', 120], ['Finalizar', 'Despeje a manteiga de sálvia fumegante por cima do frango.', null]]
    },
    {
      title: 'Frango Grelhado Marinado no Iogurte e Hortelã com Zaatar',
      sub: 'frango_grelhado', diff: 'easy', prep: 12, cook: 10, cal: 390, p: 45, c: 3, fib: 1, f: 22, prem: false,
      tags: ['árabe', 'zaatar', 'hortelã', 'marinado'],
      tip: 'A acidez do iogurte com limão quebra as fibras proteicas deixando o peito macio como manteiga.',
      ings: [['Sobrecoxas desossadas', 500, 'g', 'proteínas'], ['Iogurte grego sem açúcar', 80, 'g', 'laticínios'], ['Zátar em pó', 1, 'colher de sopa', 'temperos'], ['Hortelã picadinha', 2, 'colheres de sopa', 'temperos']],
      steps: [['Marinada rápida', 'Misture o frango no iogurte com zátar e hortelã.', 300], ['Chapa quente', 'Grelhe até dourar bem os dois lados.', 480], ['Servir', 'Finalize com azeite extravirgem.', null]]
    },
    {
      title: 'Frango ao Pesto de Rúcula Grelhado com Queijo Muçarela de Búfala',
      sub: 'frango_grelhado', diff: 'easy', prep: 10, cook: 10, cal: 460, p: 44, c: 3, fib: 1, f: 31, prem: true,
      tags: ['frango_grelhado', 'rúcula', 'búfala', 'pesto'],
      tip: 'A rúcula no pesto traz um toque levemente picante e amargo delicioso.',
      ings: [['Filés de frango', 500, 'g', 'proteínas'], ['Muçarela de búfala em fatias', 100, 'g', 'laticínios'], ['Pesto de rúcula com nozes e azeite', 50, 'g', 'despensa']],
      steps: [['Grelhar', 'Doure os filés.', 360], ['Derreter queijo', 'Coloque a muçarela de búfala sobre os filés e tampe para fundir.', 120], ['Pesto fresco', 'Finalize cobrindo com o pesto fresco de rúcula.', null]]
    },
    {
      title: 'Frango Grelhado na Manteiga Ghee com Páprica Picante e Alho',
      sub: 'frango_grelhado', diff: 'easy', prep: 5, cook: 10, cal: 390, p: 43, c: 1, fib: 0, f: 24, prem: false,
      tags: ['frango_grelhado', 'ghee', 'páprica', 'rápido'],
      tip: 'A manteiga ghee suporta altas temperaturas sem queimar na frigideira.',
      ings: [['Tiras de peito de frango', 500, 'g', 'proteínas'], ['Manteiga ghee', 30, 'g', 'despensa'], ['Páprica picante', 1, 'colher de chá', 'temperos'], ['Alho fatiado', 2, 'dentes', 'vegetais']],
      steps: [['Fritar o alho', 'Doure as lâminas de alho no ghee e retire.', 120], ['Saltear o frango', 'Adicione o frango e a páprica e salteie vigorosamente.', 360], ['Finalizar', 'Junte o alho dourado e sirva.', null]]
    },
    {
      title: 'Frango Grelhado com Molho de Queijo Gorgonzola e Espinafre',
      sub: 'frango_grelhado', diff: 'easy', prep: 8, cook: 12, cal: 470, p: 42, c: 3, fib: 1, f: 33, prem: true,
      tags: ['frango_grelhado', 'gorgonzola', 'espinafre', 'jantar'],
      tip: 'Sirva sobre uma cama de espinafre salteado regado com o molho de queijo.',
      ings: [['Filés de peito de frango', 500, 'g', 'proteínas'], ['Queijo gorgonzola', 70, 'g', 'laticínios'], ['Espinafre salteado no azeite', 120, 'g', 'vegetais'], ['Creme de leite', 80, 'ml', 'laticínios']],
      steps: [['Grelhar frango', 'Doure os filés e reserve.', 360], ['Creme de gorgonzola', 'Derreta o gorgonzola no creme de leite.', 180], ['Montagem', 'Acomode o espinafre, o frango e cubra com o molho.', null]]
    },
    {
      title: 'Suprema de Frango com Molho de Cogumelos Shimeji e Nata',
      sub: 'frango_grelhado', diff: 'medium', prep: 10, cook: 14, cal: 450, p: 44, c: 4, fib: 1, f: 30, prem: true,
      tags: ['suprema', 'shimeji', 'cogumelos', 'oriental_fusion'],
      tip: 'Desfie o shimeji com as mãos em pequenos buquês antes de saltear.',
      ings: [['Supremas de frango', 500, 'g', 'proteínas'], ['Cogumelos shimeji pretos', 150, 'g', 'vegetais'], ['Nata fresca', 100, 'g', 'laticínios'], ['Manteiga e cebolinha picada', 25, 'g', 'despensa']],
      steps: [['Grelhar supremas', 'Doure o frango na frigideira e reserve.', 420], ['Saltear shimeji', 'Pule os cogumelos na manteiga até murcharem.', 180], ['Molho aveludado', 'Junte a nata e cebolinha e cubra as supremas.', 120]]
    },
    {
      title: 'Frango Grelhado com Alho Confitado e Alecrim da Horta',
      sub: 'frango_grelhado', diff: 'easy', prep: 8, cook: 10, cal: 410, p: 42, c: 2, fib: 0, f: 27, prem: false,
      tags: ['frango_grelhado', 'alho_confit', 'alecrim', 'aromático'],
      tip: 'O alho confitado no azeite fica doce e amanteigado, desmanchando ao toque.',
      ings: [['Filés de frango altos', 500, 'g', 'proteínas'], ['Dentes de alho confitados', 10, 'unidades', 'vegetais'], ['Azeite do confit', 30, 'ml', 'despensa'], ['Alecrim fresco', 2, 'ramos', 'temperos']],
      steps: [['Grelhar frango', 'Grelhe os filés no azeite aromatizado com alecrim.', 360], ['Amassar o alho', 'Amasse os dentes de alho confitados sobre os filés quentes.', 60], ['Servir', 'Regue com os sucos da frigideira.', null]]
    },
    {
      title: 'Frango Grelhado com Crosta de Ervas e Manteiga de Trufas',
      sub: 'frango_grelhado', diff: 'hard', prep: 10, cook: 12, cal: 430, p: 43, c: 1, fib: 0, f: 29, prem: true,
      tags: ['frango_grelhado', 'trufas', 'alta_gastronomia', 'luxo'],
      tip: 'O calor residual do filé grelhado derrete a manteiga de trufas liberando perfume inesquecível.',
      ings: [['Peito de frango de criação orgânica', 500, 'g', 'proteínas'], ['Manteiga trufada', 30, 'g', 'despensa'], ['Tomilho, salsa e cebolinha picadinhos', 2, 'colheres de sopa', 'temperos']],
      steps: [['Grelhar no ponto', 'Grelhe os filés garantindo suculência máxima.', 420], ['Passar nas ervas', 'Role as bordas do filé nas ervas picadas.', 60], ['Trufa', 'Coroe com uma generosa noz de manteiga de trufas.', null]]
    },
    {
      title: 'Frango Grelhado Marinado na Cúrcuma e Leite de Coco com Coentro',
      sub: 'frango_grelhado', diff: 'easy', prep: 12, cook: 10, cal: 420, p: 41, c: 3, fib: 1, f: 28, prem: false,
      tags: ['cúrcuma', 'leite_de_coco', 'coentro', 'anti-inflamatório'],
      tip: 'A cúrcuma com pimenta preta tem absorção multiplicada no organismo.',
      ings: [['Tiras de sobrecoxa de frango', 500, 'g', 'proteínas'], ['Leite de coco puro', 80, 'ml', 'despensa'], ['Cúrcuma da terra pura', 1, 'colher de sopa', 'temperos'], ['Coentro fresco', 2, 'colheres de sopa', 'temperos']],
      steps: [['Marinar com cúrcuma', 'Deixe o frango no leite de coco com cúrcuma e sal.', 300], ['Grelhar dourado', 'Grelhe na chapa bem quente até dourar.', 360], ['Finalizar', 'Decore com folhas de coentro fresco.', null]]
    },
    {
      title: 'Frango Grelhado ao Pesto de Castanha de Caju e Manjericão',
      sub: 'frango_grelhado', diff: 'easy', prep: 8, cook: 10, cal: 450, p: 43, c: 3, fib: 1, f: 31, prem: false,
      tags: ['frango_grelhado', 'pesto_brasileiro', 'castanha', 'manjericão'],
      tip: 'A castanha de caju brasileira substitui os pinoli com perfeição cremosa.',
      ings: [['Filés de peito de frango', 500, 'g', 'proteínas'], ['Pesto de manjericão e castanha de caju', 60, 'g', 'despensa'], ['Azeite extravirgem', 20, 'ml', 'despensa']],
      steps: [['Grelhar', 'Grelhe os filés temperados na frigideira.', 360], ['Pesto generoso', 'Cubra cada filé com o pesto fresco fora do fogo.', 60], ['Servir', 'Sirva acompanhado de abobrinha grelhada.', null]]
    },

    // Frango Recheado (12)
    {
      title: 'Peito de Frango Recheado com Espinafre e Ricota Fresca',
      sub: 'frango_recheado', diff: 'medium', prep: 15, cook: 25, cal: 420, p: 46, c: 3, fib: 1, f: 25, prem: false,
      tags: ['frango_recheado', 'espinafre', 'ricota', 'forno'],
      tip: 'Feche a abertura do peito com palitos de dente para o recheio não escapar.',
      ings: [['Peitos de frango inteiros grossos', 500, 'g', 'proteínas'], ['Espinafre refogado e bem espremido', 100, 'g', 'vegetais'], ['Ricota fresca amassada', 80, 'g', 'laticínios'], ['Manteiga para dourar', 25, 'g', 'despensa']],
      steps: [['Abrir bolso', 'Faça um corte lateral no peito formando uma bolsa.', 180], ['Rechear', 'Coloque a mistura de ricota, espinafre e noz-moscada.', 120], ['Selar e assar', 'Sele na frigideira por 3 minutos e termine no forno a 190°C.', 1200]]
    },
    {
      title: 'Peito de Frango Recheado com Queijo Brie e Aspargos Verdes',
      sub: 'frango_recheado', diff: 'medium', prep: 15, cook: 25, cal: 470, p: 48, c: 2, fib: 1, f: 30, prem: true,
      tags: ['frango_recheado', 'brie', 'aspargos', 'luxo'],
      tip: 'O queijo brie derrete no interior tornando cada corte suculento e aveludado.',
      ings: [['Peitos de frango grandes', 500, 'g', 'proteínas'], ['Queijo Brie cortado em tiras', 80, 'g', 'laticínios'], ['Pontas de aspargos verdes', 6, 'unidades', 'vegetais'], ['Azeite e tomilho', 20, 'ml', 'despensa']],
      steps: [['Rechear', 'Insira as tiras de queijo brie e as pontas de aspargos no bolso da carne.', 180], ['Dourar na frigideira', 'Sele a carne na frigideira até dourar.', 300], ['Forno', 'Finalize no forno a 180°C por 18 minutos.', 1080]]
    },
    {
      title: 'Ballotine de Frango com Cogumelos Paris e Alho-Poró',
      sub: 'frango_recheado', diff: 'hard', prep: 20, cook: 30, cal: 450, p: 45, c: 3, fib: 1, f: 29, prem: true,
      tags: ['ballotine', 'francês', 'cogumelos', 'alta_gastronomia'],
      tip: 'Enrole firmemente em filme plástico próprio para cozimento ou papel manteiga para manter o formato cilíndrico.',
      ings: [['Sobrecoxas desossadas abertas finas', 500, 'g', 'proteínas'], ['Cogumelos Paris salteados', 120, 'g', 'vegetais'], ['Alho-poró refogado na manteiga', 60, 'g', 'vegetais'], ['Manteiga clarificada', 30, 'g', 'despensa']],
      steps: [['Rechear e enrolar', 'Espalhe os cogumelos sobre a carne aberta e enrole como rocambole.', 300], ['Amarrar', 'Prenda com barbante e doure na frigideira.', 300], ['Assar', 'Asse a 180°C até atingir 75°C no centro.', 1200]]
    },
    {
      title: 'Peito de Frango Recheado com Queijo de Cabra e Tomate Seco Caseiro',
      sub: 'frango_recheado', diff: 'medium', prep: 15, cook: 22, cal: 440, p: 47, c: 4, fib: 1, f: 27, prem: true,
      tags: ['frango_recheado', 'queijo_de_cabra', 'tomate_seco', 'mediterrâneo'],
      tip: 'Faça os tomates secos em casa no forno brando sem adição de açúcar.',
      ings: [['Peitos de frango', 500, 'g', 'proteínas'], ['Queijo de cabra tipo chèvre', 80, 'g', 'laticínios'], ['Tomates secos caseiros picados', 40, 'g', 'vegetais'], ['Folhas de manjericão', 10, 'folhas', 'temperos']],
      steps: [['Recheio mediterrâneo', 'Misture o queijo de cabra com os tomates secos e manjericão.', 120], ['Rechear carne', 'Acomode no interior do peito de frango.', 120], ['Assar dourado', 'Asse a 190°C até a carne ficar macia.', 1080]]
    },
    {
      title: 'Peito de Frango Enrolado com Prosciutto e Recheado com Gruyère',
      sub: 'frango_recheado', diff: 'medium', prep: 15, cook: 25, cal: 490, p: 52, c: 1, fib: 0, f: 32, prem: true,
      tags: ['frango_recheado', 'prosciutto', 'gruyère', 'suíço'],
      tip: 'O presunto cru por fora dispensa o uso de barbante e vira uma crosta crocante salgadinha.',
      ings: [['Peitos de frango', 500, 'g', 'proteínas'], ['Queijo Gruyère fatiado', 80, 'g', 'laticínios'], ['Fatias de presunto de parma ou prosciutto', 6, 'fatias', 'proteínas'], ['Sálvia fresca', 6, 'folhas', 'temperos']],
      steps: [['Rechear com queijo', 'Coloque o queijo dentro do peito.', 120], ['Enrolar presunto', 'Envolva com o presunto cru e sálvia.', 180], ['Forno', 'Asse a 200°C até o presunto ficar estaladiço.', 1200]]
    },
    {
      title: 'Frango Recheado com Queijo Gorgonzola e Espinafre Envolto em Bacon',
      sub: 'frango_recheado', diff: 'medium', prep: 15, cook: 25, cal: 510, p: 49, c: 2, fib: 1, f: 35, prem: false,
      tags: ['frango_recheado', 'bacon', 'gorgonzola', 'intenso'],
      tip: 'A combinação de gorgonzola com bacon cria uma explosão de sabor inigualável.',
      ings: [['Peito de frango', 500, 'g', 'proteínas'], ['Queijo gorgonzola', 70, 'g', 'laticínios'], ['Bacon fatiado', 6, 'fatias', 'proteínas'], ['Folhas de espinafre', 50, 'g', 'vegetais']],
      steps: [['Rechear', 'Recheie o frango com espinafre e queijo gorgonzola.', 120], ['Envolver no bacon', 'Cubra com tiras de bacon trançadas.', 180], ['Assar', 'Asse a 200°C até o bacon dourar completamente.', 1200]]
    },
    {
      title: 'Frango Recheado com Catupiry Artesanal e Alho Dourado',
      sub: 'frango_recheado', diff: 'easy', prep: 12, cook: 22, cal: 460, p: 45, c: 2, fib: 0, f: 31, prem: false,
      tags: ['frango_recheado', 'catupiry', 'alho', 'brasileiro'],
      tip: 'Utilize requeijão cremoso legítimo sem amido na formulação.',
      ings: [['Peitos de frango', 500, 'g', 'proteínas'], ['Requeijão cremoso legítimo (catupiry)', 100, 'g', 'laticínios'], ['Alho frito crocante', 2, 'colheres de sopa', 'vegetais'], ['Manteiga', 20, 'g', 'despensa']],
      steps: [['Recheio', 'Misture o catupiry com o alho crocante e recheie os peitos.', 120], ['Dourar na manteiga', 'Sele os peitos na frigideira quente.', 240], ['Finalizar no forno', 'Termine o cozimento no forno por 15 minutos.', 900]]
    },
    {
      title: 'Peito de Frango Recheado à Caprese com Pesto e Muçarela',
      sub: 'frango_recheado', diff: 'easy', prep: 10, cook: 20, cal: 440, p: 46, c: 3, fib: 1, f: 28, prem: false,
      tags: ['caprese', 'pesto', 'muçarela', 'fácil'],
      tip: 'Faça cortes diagonais no peito (estilo hasselback) e encaixe rodelas de tomate e queijo.',
      ings: [['Peitos de frango inteiros', 500, 'g', 'proteínas'], ['Muçarela fresca em fatias', 80, 'g', 'laticínios'], ['Tomate em rodelas', 1, 'unidade', 'vegetais'], ['Pesto de manjericão', 2, 'colheres de sopa', 'despensa']],
      steps: [['Cortes hasselback', 'Faça 5 cortes transversais sem chegar até a base.', 120], ['Encaixar recheio', 'Encaixe uma fatia de queijo e tomate em cada fenda.', 180], ['Pesto e forno', 'Pincele pesto por cima e asse a 190°C.', 1080]]
    },
    {
      title: 'Frango Recheado com Queijo Cheddar Inglês e Jalapeños',
      sub: 'frango_recheado', diff: 'medium', prep: 12, cook: 22, cal: 470, p: 47, c: 2, fib: 1, f: 31, prem: false,
      tags: ['cheddar', 'jalapeño', 'picante', 'tex-mex'],
      tip: 'Retire as sementes do jalapeño se desejar sabor aromático sem ardor intenso.',
      ings: [['Peito de frango', 500, 'g', 'proteínas'], ['Queijo Cheddar inglês ralado', 90, 'g', 'laticínios'], ['Pimenta jalapeño picada', 1, 'unidade', 'vegetais'], ['Manteiga com páprica', 20, 'g', 'despensa']],
      steps: [['Rechear', 'Introduza o cheddar e os pedacinhos de jalapeño no peito.', 120], ['Prender', 'Feche com palito e pincele manteiga com páprica.', 60], ['Assar', 'Asse a 200°C até o queijo começar a vazar derretido.', 1080]]
    },
    {
      title: 'Rolo de Frango Recheado com Presunto Cozido e Queijo Emental',
      sub: 'frango_recheado', diff: 'medium', prep: 15, cook: 25, cal: 480, p: 50, c: 2, fib: 0, f: 31, prem: false,
      tags: ['cordon_bleu_keto', 'emental', 'presunto', 'clássico'],
      tip: 'A versão cetogênica do clássico Cordon Bleu dispensa empanamento com farinha de trigo.',
      ings: [['Filés de peito de frango abertos bem finos', 500, 'g', 'proteínas'], ['Presunto cozido sem açúcar', 80, 'g', 'proteínas'], ['Queijo Emental fatiado', 80, 'g', 'laticínios'], ['Manteiga ghee para grelhar', 25, 'g', 'despensa']],
      steps: [['Montar camadas', 'Coloque o presunto e o queijo sobre os filés abertos.', 120], ['Enrolar', 'Enrole firme e feche com palitos.', 120], ['Dourar na manteiga', 'Doure todos os lados na frigideira e asse no forno a 180°C.', 1080]]
    },
    {
      title: 'Frango Recheado com Queijo Roquefort e Nozes Picadas',
      sub: 'frango_recheado', diff: 'medium', prep: 12, cook: 22, cal: 490, p: 46, c: 3, fib: 1, f: 34, prem: true,
      tags: ['roquefort', 'nozes', 'gourmet', 'francês'],
      tip: 'O Roquefort confere sofisticação instantânea com seu sabor salgado e terroso.',
      ings: [['Peitos de frango', 500, 'g', 'proteínas'], ['Queijo Roquefort esfarelado', 70, 'g', 'laticínios'], ['Nozes picadinhas', 30, 'g', 'despensa'], ['Manteiga sem sal', 20, 'g', 'laticínios']],
      steps: [['Rechear', 'Misture o roquefort com as nozes e insira no frango.', 120], ['Grelhar e assar', 'Sele na frigideira e asse a 190°C.', 1080], ['Servir fumegante', 'Sirva com ramos de alecrim fresco.', null]]
    },
    {
      title: 'Peito de Frango Recheado com Alho-Poró e Queijo Gouda',
      sub: 'frango_recheado', diff: 'easy', prep: 12, cook: 22, cal: 460, p: 46, c: 3, fib: 1, f: 30, prem: false,
      tags: ['frango_recheado', 'gouda', 'alho-poró', 'cremoso'],
      tip: 'O queijo gouda tem excelente derretimento e sabor amanteigado suave.',
      ings: [['Peito de frango', 500, 'g', 'proteínas'], ['Queijo Gouda ralado', 80, 'g', 'laticínios'], ['Alho-poró refogado na manteiga', 60, 'g', 'vegetais'], ['Azeite de oliva', 20, 'ml', 'despensa']],
      steps: [['Misturar recheio', 'Combine o alho-poró refogado com o gouda.', 90], ['Rechear peito', 'Acomode no frango e prenda a borda.', 90], ['Forno quente', 'Asse a 190°C até cozinhar por inteiro.', 1140]]
    },

    // Asas e Coxas (13)
    {
      title: 'Asinhas de Frango Crocantes na Airfryer com Alho e Parmesão',
      sub: 'asas_e_coxas', diff: 'easy', prep: 8, cook: 22, cal: 430, p: 36, c: 1, fib: 0, f: 32, prem: false,
      tags: ['asinhas', 'airfryer', 'crocante', 'petisco'],
      tip: 'Misture fermento químico em pó (1 pitada) na marinada seca para pururucar a pele na airfryer.',
      ings: [['Asinhas e meias asas (tulipas e coxinhas)', 600, 'g', 'proteínas'], ['Queijo parmesão ralado fininho', 40, 'g', 'laticínios'], ['Manteiga com alho triturado derretida', 30, 'g', 'despensa'], ['Salsinha picada', 1, 'colher de sopa', 'temperos']],
      steps: [['Temperar as asas', 'Seque as asas e envolva em azeite, sal e alho em pó.', 120], ['Airfryer potente', 'Asse na airfryer a 200°C agitando a cesta a cada 7 minutos.', 1320], ['Banhar na manteiga', 'Misture as asas crocantes na manteiga de alho com parmesão.', 60]]
    },
    {
      title: 'Buffalo Wings Cetogênicas com Molho Picante e Blue Cheese',
      sub: 'asas_e_coxas', diff: 'medium', prep: 10, cook: 25, cal: 460, p: 35, c: 2, fib: 0, f: 36, prem: true,
      tags: ['buffalo_wings', 'blue_cheese', 'picante', 'americano'],
      tip: 'O dip de queijo azul (gorgonzola com creme de leite) equilibra perfeitamente a pimenta do molho buffalo.',
      ings: [['Tulipas e coxinhas da asa', 600, 'g', 'proteínas'], ['Molho de pimenta fermentado tipo Tabasco', 50, 'ml', 'temperos'], ['Manteiga derretida', 40, 'g', 'laticínios'], ['Dip de gorgonzola com creme de leite', 80, 'g', 'laticínios']],
      steps: [['Assar asinhas', 'Asse as asas no forno a 210°C até ficarem muito crocantes.', 1500], ['Emulsionar molho', 'Bata a manteiga quente com o molho de pimenta.', 60], ['Glacear e servir', 'Chacoalhe as asas no molho picante e sirva com o molho azul.', null]]
    },
    {
      title: 'Coxinhas da Asa ao Molho Barbecue Caseiro Zero Açúcar',
      sub: 'asas_e_coxas', diff: 'easy', prep: 10, cook: 25, cal: 410, p: 37, c: 3, fib: 1, f: 29, prem: false,
      tags: ['coxinhas', 'barbecue_keto', 'defumado', 'petisco'],
      tip: 'Faça o barbecue com pasta de tomate, fumaça líquida, vinagre de maçã e eritritol.',
      ings: [['Coxinhas da asa de frango', 600, 'g', 'proteínas'], ['Molho barbecue keto caseiro', 80, 'g', 'temperos'], ['Azeite e sal', 15, 'ml', 'despensa']],
      steps: [['Assar asas', 'Asse as coxinhas a 200°C por 20 minutos.', 1200], ['Pincelar barbecue', 'Pincele o barbecue generosamente sobre cada coxinha.', 60], ['Caramelizar', 'Volte ao forno por mais 5 minutos para gratinar.', 300]]
    },
    {
      title: 'Asinhas de Frango Crocantes com Gergelim e Molho Asiático Zero Açúcar',
      sub: 'asas_e_coxas', diff: 'easy', prep: 10, cook: 22, cal: 440, p: 36, c: 3, fib: 1, f: 33, prem: false,
      tags: ['asinhas', 'asiático', 'gergelim', 'crocante'],
      tip: 'O óleo de gergelim torrado no final traz aroma inconfundível dos izakayas japoneses.',
      ings: [['Asinhas de frango', 600, 'g', 'proteínas'], ['Shoyu sem açúcar com gengibre ralado', 30, 'ml', 'temperos'], ['Gergelim torrado', 20, 'g', 'despensa'], ['Óleo de gergelim', 10, 'ml', 'despensa']],
      steps: [['Cozinhar na airfryer', 'Asse as asas até dourarem.', 1200], ['Glacear', 'Passe no molho de shoyu com gengibre aquecido.', 60], ['Gergelim', 'Polvilhe bastante gergelim por cima.', null]]
    },
    {
      title: 'Coxas de Frango com Molho Cremoso de Mostarda e Bacon',
      sub: 'asas_e_coxas', diff: 'easy', prep: 8, cook: 25, cal: 470, p: 39, c: 2, fib: 0, f: 35, prem: false,
      tags: ['coxas', 'mostarda', 'bacon', 'conforto'],
      tip: 'Doure bem a pele da coxa na panela antes de juntar o creme.',
      ings: [['Coxas de frango', 600, 'g', 'proteínas'], ['Bacon em cubinhos', 60, 'g', 'proteínas'], ['Mostarda amarela e dijon', 2, 'colheres de sopa', 'temperos'], ['Creme de leite', 150, 'ml', 'laticínios']],
      steps: [['Fritar bacon e coxas', 'Doure o bacon e sele as coxas na mesma frigideira.', 480], ['Adicionar mostarda e creme', 'Despeje o creme com as mostardas.', 180], ['Cozinhar com tampa', 'Deixe apurar em fogo brando até a carne amaciar.', 900]]
    },
    {
      title: 'Tulipas de Frango Empanadas na Farinha de Amêndoas e Queijo',
      sub: 'asas_e_coxas', diff: 'medium', prep: 12, cook: 22, cal: 480, p: 38, c: 3, fib: 1, f: 36, prem: true,
      tags: ['tulipas', 'empanado_keto', 'amêndoas', 'festa'],
      tip: 'Passe as tulipas no ovo batido e depois na farinha de amêndoas com queijo e páprica.',
      ings: [['Tulipas da asa (meio da asa)', 600, 'g', 'proteínas'], ['Farinha de amêndoas fina', 60, 'g', 'despensa'], ['Queijo parmesão ralado fino', 40, 'g', 'laticínios'], ['Ovo batido', 1, 'unidade', 'proteínas']],
      steps: [['Empanar', 'Passe no ovo e na mistura de amêndoas e parmesão.', 180], ['Dispor na assadeira', 'Acomode sem sobrepor em assadeira untada.', 60], ['Assar crocante', 'Asse a 200°C até casca dourada estaladiça.', 1200]]
    },
    {
      title: 'Asinhas de Frango Glaceadas com Pimenta Jalapeño e Limão',
      sub: 'asas_e_coxas', diff: 'easy', prep: 8, cook: 22, cal: 430, p: 36, c: 2, fib: 0, f: 32, prem: false,
      tags: ['asinhas', 'jalapeño', 'limão', 'refrescante'],
      tip: 'O suco de limão adicionado no final preserva a acidez e o frescor cítrico.',
      ings: [['Asinhas de frango', 600, 'g', 'proteínas'], ['Manteiga derretida', 30, 'g', 'laticínios'], ['Pimenta jalapeño picadinha', 1, 'unidade', 'vegetais'], ['Suco de limão taiti', 1, 'unidade', 'temperos']],
      steps: [['Assar asas', 'Asse na airfryer até estalarem.', 1200], ['Glace', 'Misture a manteiga com jalapeño e limão.', 60], ['Cobrir', 'Envolva as asas e sirva imediatamente.', null]]
    },
    {
      title: 'Coxinhas da Asa ao Curry Vermelho e Leite de Coco',
      sub: 'asas_e_coxas', diff: 'medium', prep: 10, cook: 25, cal: 450, p: 38, c: 4, fib: 1, f: 33, prem: true,
      tags: ['coxinhas', 'curry_vermelho', 'coco', 'aromático'],
      tip: 'Cozinhe até o molho de coco engrossar e cobrir a carne como um xarope cremoso.',
      ings: [['Coxinhas da asa', 600, 'g', 'proteínas'], ['Leite de coco integral', 200, 'ml', 'despensa'], ['Pasta de curry vermelho', 1, 'colher de sopa', 'temperos'], ['Folhas de coentro fresco', 2, 'ramos', 'temperos']],
      steps: [['Dourar coxinhas', 'Sele as coxinhas no azeite até dourarem.', 360], ['Cozinhar no molho', 'Junte o leite de coco e o curry e cozinhe em fogo brando.', 1080], ['Servir', 'Finalize com coentro picado.', null]]
    },
    {
      title: 'Asinhas de Frango com Molho de Manteiga Queimada e Sálvia',
      sub: 'asas_e_coxas', diff: 'medium', prep: 8, cook: 22, cal: 450, p: 36, c: 1, fib: 0, f: 35, prem: true,
      tags: ['asinhas', 'manteiga_queimada', 'sálvia', 'gourmet'],
      tip: 'A manteiga noisette (queimada suavemente até aroma de avelã) transforma o sabor do prato.',
      ings: [['Asinhas de frango', 600, 'g', 'proteínas'], ['Manteiga de primeira qualidade', 50, 'g', 'laticínios'], ['Folhas frescas de sálvia', 15, 'folhas', 'temperos'], ['Flor de sal', 1, 'pitada', 'temperos']],
      steps: [['Assar as asas', 'Asse até ficarem crocantes.', 1200], ['Fazer a manteiga noisette', 'Derreta a manteiga até espumar e ficar dourada com aroma de amêndoas.', 180], ['Envolver', 'Frite a sálvia na manteiga e jogue sobre as asas.', null]]
    },
    {
      title: 'Coxas de Frango com Chimichurri Defumado na Churrasqueira',
      sub: 'asas_e_coxas', diff: 'easy', prep: 10, cook: 28, cal: 430, p: 40, c: 2, fib: 1, f: 30, prem: false,
      tags: ['coxas', 'churrasco', 'chimichurri', 'defumado'],
      tip: 'Coloque as coxas na parte mais alta da grelha para cozinhar o interior sem queimar a casca.',
      ings: [['Coxas com pele', 600, 'g', 'proteínas'], ['Molho chimichurri com páprica defumada', 60, 'g', 'temperos'], ['Sal de parrilla', 1, 'colher de sopa', 'temperos']],
      steps: [['Salgar e grelhar', 'Salpique o sal e grelhe em braseiro médio.', 1200], ['Virar com cuidado', 'Vire para dourar uniformemente.', 480], ['Regar chimichurri', 'Pincele o chimichurri nos minutos finais.', null]]
    },
    {
      title: 'Asinhas Crocantes com Pimenta Calabresa e Alho Frito',
      sub: 'asas_e_coxas', diff: 'easy', prep: 6, cook: 20, cal: 420, p: 36, c: 2, fib: 0, f: 31, prem: false,
      tags: ['asinhas', 'alho_e_óleo', 'calabresa', 'bar'],
      tip: 'O alho frito bem sequinho por cima dá o estalo crocante clássico dos botecos de elite.',
      ings: [['Asas de frango', 600, 'g', 'proteínas'], ['Alho frito laminado crocante', 3, 'colheres de sopa', 'vegetais'], ['Pimenta calabresa em flocos', 1, 'colher de café', 'temperos'], ['Azeite', 20, 'ml', 'despensa']],
      steps: [['Airfryer', 'Cozinhe as asas na airfryer até ficarem bem douradas.', 1200], ['Finalizar', 'Passe no azeite aquecido com pimenta calabresa.', 60], ['Alho crocante', 'Salpique o alho frito por cima.', null]]
    },
    {
      title: 'Tulipas de Frango Marinadas no Missô e Gengibre Zero Açúcar',
      sub: 'asas_e_coxas', diff: 'medium', prep: 12, cook: 20, cal: 410, p: 37, c: 3, fib: 1, f: 29, prem: true,
      tags: ['tulipas', 'missô', 'japonês', 'umami'],
      tip: 'O missô traz umami profundo à carne de frango.',
      ings: [['Tulipas de frango', 600, 'g', 'proteínas'], ['Pasta de missô suave', 1, 'colher de sopa', 'temperos'], ['Gengibre fresco ralado', 1, 'colher de sopa', 'temperos'], ['Óleo de gergelim', 10, 'ml', 'despensa']],
      steps: [['Marinar', 'Esfregue o missô dissolvido com gengibre nas tulipas.', 300], ['Assar', 'Asse em forno pré-aquecido a 200°C.', 1080], ['Servir', 'Apresente brilhantes e caramelizadas.', null]]
    },
    {
      title: 'Coxinhas da Asa com Molho de Queijo Parmesão e Bacon Frito',
      sub: 'asas_e_coxas', diff: 'easy', prep: 8, cook: 22, cal: 460, p: 38, c: 2, fib: 0, f: 35, prem: false,
      tags: ['coxinhas', 'parmesão', 'bacon', 'lanche'],
      tip: 'Sirva como aperitivo acompanhado de palitos de aipo e pepino fresco.',
      ings: [['Coxinhas da asa', 600, 'g', 'proteínas'], ['Queijo parmesão ralado fino', 50, 'g', 'laticínios'], ['Bacon em cubinhos estaladiços', 50, 'g', 'proteínas'], ['Manteiga', 20, 'g', 'laticínios']],
      steps: [['Cozinhar as coxinhas', 'Asse até ficarem crocantes.', 1200], ['Cobrir de queijo', 'Misture com manteiga derretida e parmesão.', 60], ['Salpicar bacon', 'Enfeite com o bacon estaladiço.', null]]
    },

    // Patos e Outras Aves (10)
    {
      title: 'Magret de Pato Grelhado com Redução de Frutas Vermelhas e Vinho',
      sub: 'patos_e_outras_aves', diff: 'hard', prep: 15, cook: 15, cal: 520, p: 38, c: 4, fib: 1, f: 40, prem: true,
      tags: ['pato', 'magret', 'alta_gastronomia', 'vinho_tinto', 'luxo'],
      tip: 'Faça cortes em formato de losango na gordura do magret sem atingir a carne vermelha.',
      ings: [['Peito de pato (magret) com capa de gordura', 500, 'g', 'proteínas'], ['Vinho tinto seco cabernet', 80, 'ml', 'despensa'], ['Mirtilos e amoras frescas', 50, 'g', 'vegetais'], ['Manteiga gelada para emulsionar', 20, 'g', 'laticínios']],
      steps: [['Render a gordura', 'Coloque na frigideira fria com o lado da pele para baixo em fogo brando para derreter a gordura.', 600], ['Virar', 'Vire e cozinhe por 4 minutos para manter o ponto rosado suculento.', 240], ['Redução do molho', 'Reduza o vinho tinto com as frutas na mesma panela e emulsione a manteiga.', 180]]
    },
    {
      title: 'Coxa de Pato Confitada no Próprio Azeite com Ervas Rústicas',
      sub: 'patos_e_outras_aves', diff: 'hard', prep: 15, cook: 120, cal: 560, p: 40, c: 1, fib: 0, f: 45, prem: true,
      tags: ['confit', 'pato', 'clássico_francês', 'luxo'],
      tip: 'O confitamento lento a 100°C deixa a carne tão tenra que desfia ao toque do garfo.',
      ings: [['Coxas com sobrecoxas de pato', 600, 'g', 'proteínas'], ['Gordura de pato ou azeite extravirgem', 300, 'ml', 'despensa'], ['Ramos de tomilho e dentes de alho', 4, 'unidades', 'temperos'], ['Flor de sal', 1, 'colher de sopa', 'temperos']],
      steps: [['Curar a carne', 'Tempere o pato com sal e ervas por 1 hora.', 3600], ['Confitar', 'Submerja na gordura morna e cozinhe em fogo baixíssimo.', 7200], ['Tostar a pele', 'Doure a pele em frigideira quente antes de servir.', 240]]
    },
    {
      title: 'Galinha Caipira Ensopada com Quiabo e Açafrão da Terra',
      sub: 'patos_e_outras_aves', diff: 'medium', prep: 20, cook: 45, cal: 460, p: 44, c: 5, fib: 2, f: 30, prem: false,
      tags: ['galinha_caipira', 'quiabo', 'mineiro', 'açafrão'],
      tip: 'Refogue o quiabo separadamente em fogo alto com um fio de vinagre para eliminar a baba por completo.',
      ings: [['Pedaços de galinha caipira', 800, 'g', 'proteínas'], ['Quiabos frescos cortados', 200, 'g', 'vegetais'], ['Açafrão da terra puro', 1, 'colher de sopa', 'temperos'], ['Cebola e alho picados', 1, 'xícara', 'vegetais'], ['Cheiro-verde fresco', 3, 'colheres de sopa', 'temperos']],
      steps: [['Dourar a ave', 'Doure os pedaços de galinha na panela de ferro com azeite e açafrão.', 480], ['Cozinhar com caldo', 'Adicione água quente aos poucos até a carne ficar macia.', 2100], ['Juntar quiabo', 'Acrescente o quiabo selado e o cheiro-verde nos últimos 8 minutos.', 480]]
    },
    {
      title: 'Peito de Peru Defumado com Manteiga de Sálvia e Nozes',
      sub: 'patos_e_outras_aves', diff: 'easy', prep: 10, cook: 15, cal: 410, p: 46, c: 2, fib: 1, f: 25, prem: false,
      tags: ['peru', 'sálvia', 'nozes', 'leve'],
      tip: 'Fatie o peito de peru em bifes grossos para não ressecar ao aquecer.',
      ings: [['Filés de peito de peru', 500, 'g', 'proteínas'], ['Manteiga', 35, 'g', 'laticínios'], ['Folhas de sálvia', 8, 'folhas', 'temperos'], ['Nozes picadas tostadas', 30, 'g', 'despensa']],
      steps: [['Grelhar peru', 'Grelhe os filés na manteiga com sálvia.', 360], ['Tostar nozes', 'Adicione as nozes na frigideira.', 120], ['Servir aveludado', 'Banhe com a manteiga de sálvia.', null]]
    },
    {
      title: 'Codorna Assada com Crosta de Bacon e Tomilho',
      sub: 'patos_e_outras_aves', diff: 'medium', prep: 15, cook: 25, cal: 440, p: 38, c: 1, fib: 0, f: 32, prem: true,
      tags: ['codorna', 'bacon', 'caça', 'alta_gastronomia'],
      tip: 'Enrole a codorna em fatias finas de bacon para proteger a carne delicada do calor do forno.',
      ings: [['Codornas inteiras limpas', 4, 'unidades', 'proteínas'], ['Fatias de bacon', 8, 'unidades', 'proteínas'], ['Ramos de tomilho fresco', 4, 'ramos', 'temperos'], ['Manteiga derretida', 30, 'g', 'laticínios']],
      steps: [['Envolver no bacon', 'Tempere as codornas e cubra o peito com bacon amarrando.', 240], ['Assar', 'Asse em forno pré-aquecido a 200°C.', 1200], ['Servir', 'Apresente douradas e suculentas.', null]]
    },
    {
      title: 'Sobrecoxa de Pato Assada com Crosta de Pimenta Rosa e Laranja',
      sub: 'patos_e_outras_aves', diff: 'hard', prep: 15, cook: 50, cal: 520, p: 42, c: 3, fib: 1, f: 39, prem: true,
      tags: ['pato', 'pimenta_rosa', 'laranja', 'sofisticado'],
      tip: 'A pimenta rosa confere perfume adocicado sem ardor picante.',
      ings: [['Sobrecoxas de pato', 600, 'g', 'proteínas'], ['Pimenta rosa em grãos', 1, 'colher de sopa', 'temperos'], ['Raspas de laranja fresca', 1, 'unidade', 'temperos'], ['Manteiga clarificada', 25, 'g', 'despensa']],
      steps: [['Temperar com pimenta rosa', 'Macere a pimenta rosa com as raspas e esfregue na pele do pato.', 180], ['Assar em temperatura moderada', 'Asse a 170°C por 40 minutos.', 2400], ['Pururucar', 'Aumente o forno para 220°C nos últimos 10 minutos.', 600]]
    },
    {
      title: 'Peito de Frango Caipira com Molho de Pequi e Queijo Canastra',
      sub: 'patos_e_outras_aves', diff: 'medium', prep: 15, cook: 25, cal: 450, p: 43, c: 3, fib: 1, f: 30, prem: false,
      tags: ['pequi', 'goiano', 'queijo_canastra', 'regional'],
      tip: 'Cuidado ao roer o pequi: consuma apenas a polpa externa amarela.',
      ings: [['Filés de frango caipira', 500, 'g', 'proteínas'], ['Polpa pura de pequi em conserva', 30, 'g', 'vegetais'], ['Queijo Canastra curado', 60, 'g', 'laticínios'], ['Creme de leite', 100, 'ml', 'laticínios']],
      steps: [['Dourar frango', 'Grelhe os filés na banha de porco ou manteiga.', 360], ['Molho de pequi', 'Cozinhe a polpa com creme de leite até virar molho aveludado.', 240], ['Gratinar com queijo', 'Cubra com o queijo Canastra e doure.', 180]]
    },
    {
      title: 'Galeto Recheado com Farofa de Farinha de Amêndoas e Castanha-do-Pará',
      sub: 'patos_e_outras_aves', diff: 'medium', prep: 20, cook: 45, cal: 510, p: 47, c: 4, fib: 2, f: 36, prem: true,
      tags: ['galeto', 'castanha-do-pará', 'farofa_keto', 'domingo'],
      tip: 'A farofa de castanha absorve os sucos internos do galeto durante o forno.',
      ings: [['Galeto inteiro limpo', 900, 'g', 'proteínas'], ['Farinha de amêndoas e castanhas trituradas', 80, 'g', 'despensa'], ['Manteiga com cebola refogada', 40, 'g', 'despensa'], ['Bacon em cubos', 40, 'g', 'proteínas']],
      steps: [['Fazer farofa', 'Frite o bacon na manteiga e misture as amêndoas e castanhas.', 180], ['Rechear galeto', 'Preencha a cavidade do galeto e amarre as pernas.', 240], ['Assar', 'Asse a 200°C até a casca ficar dourada.', 2700]]
    },
    {
      title: 'Ensopado de Frango com Leite de Coco e Quiabo Sem Baba',
      sub: 'patos_e_outras_aves', diff: 'easy', prep: 12, cook: 25, cal: 440, p: 41, c: 5, fib: 2, f: 29, prem: false,
      tags: ['ensopado', 'quiabo', 'coco', 'conforto'],
      tip: 'O leite de coco confere sedosidade equilibrando a textura do quiabo.',
      ings: [['Frango em pedaços', 600, 'g', 'proteínas'], ['Quiabos frescos inteiros selados', 150, 'g', 'vegetais'], ['Leite de coco cremoso', 200, 'ml', 'despensa'], ['Coentro e cebolinha fresca', 3, 'colheres de sopa', 'temperos']],
      steps: [['Selar carne', 'Doure os pedaços de frango.', 360], ['Cozinhar com leite de coco', 'Acrescente o leite de coco e deixe borbulhar.', 720], ['Juntar quiabo', 'Finalize com os quiabos e coentro por 5 minutos.', 300]]
    },
    {
      title: 'Magret de Pato com Crosta de Ervas de Provence e Flor de Sal',
      sub: 'patos_e_outras_aves', diff: 'hard', prep: 12, cook: 14, cal: 510, p: 39, c: 1, fib: 0, f: 39, prem: true,
      tags: ['pato', 'magret', 'ervas_de_provence', 'francês'],
      tip: 'Deixe a carne descansar sobre uma tábua por 5 minutos antes de fatiar para redistribuir os sucos.',
      ings: [['Peito de pato com capa grossa', 500, 'g', 'proteínas'], ['Ervas de provence picadas', 2, 'colheres de sopa', 'temperos'], ['Flor de sal da Guérande', 1, 'colher de café', 'temperos']],
      steps: [['Tostar a gordura', 'Doure a gordura do pato em fogo brando até ficar crocante.', 480], ['Selar o verso', 'Vire para selar a carne rapidamente.', 180], ['Descansar e fatiar', 'Deixe descansar e fatie em leque polvilhado com flor de sal.', 300]]
    }
  ];

  const fullList = [...list, ...remaining];

  return fullList.map((r) => ({
    title: r.title,
    shortDesc: `${r.title} com ingredientes frescos e estrita conformidade cetogênica.`,
    desc: `Elaborada pelos chefs do KetoNobre para entregar sabor gourmet, saciedade e balanço nutricional rico em proteínas e gorduras nobres.`,
    category: 'chicken',
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
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80',
    ingredients: r.ings.map(([name, qty, unit, cat]) => ({ name, qty, unit, cat })),
    steps: r.steps.map(([title, desc, timer]) => ({ title, desc, timer })),
    chefTip: r.tip
  })).slice(0, 80);
}
