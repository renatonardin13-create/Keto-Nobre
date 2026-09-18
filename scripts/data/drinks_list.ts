import { RawRecipeInput } from '../recipe_helper';

export function getFullDrinksList(): RawRecipeInput[] {
  const items: { title: string; sub: string; diff: 'easy' | 'medium' | 'hard'; prep: number; cook: number; cal: number; p: number; c: number; fib: number; f: number; prem: boolean; tags: string[]; tip: string; ings: [string, number, string, any][]; steps: [string, string, number | null][] }[] = [
    // 1-12: Cafés (12)
    {
      title: 'Bulletproof Coffee Nobre Original com Manteiga Ghee e Óleo TCM C8',
      sub: 'cafes', diff: 'easy', prep: 4, cook: 2, cal: 240, p: 1, c: 0, fib: 0, f: 27, prem: false,
      tags: ['bulletproof', 'café', 'ghee', 'tcm', 'energia_mental', 'jejum'],
      tip: 'Bata no liquidificador ou mixer de imersão por 20 segundos para formar espuma aveludada tipo latte cremoso.',
      ings: [['Café especial moído fresco extraído quente', 250, 'ml', 'despensa'], ['Manteiga clarificada Ghee artesanal', 15, 'g', 'laticínios'], ['Óleo TCM purificado (ácido caprílico C8)', 15, 'ml', 'despensa'], ['Canela do Ceilão para polvilhar', 1, 'pitada', 'temperos']],
      steps: [['Extrair café', 'Prepare o café bem quente e encorpado.', 120], ['Juntar gorduras nobres', 'Coloque no copo do liquidificador com o ghee e óleo TCM.', 30], ['Emulsionar espumante', 'Bata na velocidade máxima até criar creme denso e cor de caramelo.', 30]]
    },
    {
      title: 'Mocha Cetogênico com Nata Fresca, Cacau Belga e Café Espresso',
      sub: 'cafes', diff: 'easy', prep: 4, cook: 2, cal: 210, p: 2, c: 2, fib: 1, f: 22, prem: false,
      tags: ['café', 'mocha', 'cacau_belga', 'nata', 'conforto'],
      tip: 'Dissolva o cacau alcalino no espresso fervente antes de acrescentar a nata aquecida.',
      ings: [['Dose dupla de café espresso curto', 60, 'ml', 'despensa'], ['Cacau em pó 100% alcalino', 15, 'g', 'despensa'], ['Nata fresca aquecida com fava de baunilha', 60, 'ml', 'laticínios'], ['Eritritol ou estévia em gotas', 1, 'colher de café', 'despensa']],
      steps: [['Diluir cacau', 'Misture o cacau no espresso quente com o adoçante.', 60], ['Vaporizar nata', 'Aqueça a nata fresca até espumar.', 60], ['Montar xícara', 'Verta a nata espumosa sobre a base aromática de chocolate e café.', null]]
    },
    {
      title: 'Cold Brew Cremoso com Leite de Amêndoas Artesanal e Baunilha',
      sub: 'cafes', diff: 'easy', prep: 5, cook: 0, cal: 110, p: 2, c: 1, fib: 1, f: 11, prem: false,
      tags: ['cold_brew', 'café_gelado', 'amêndoas', 'baunilha', 'verão'],
      tip: 'O café infusionado a frio por 16 horas tem 70% menos acidez e doçura natural impressionante.',
      ings: [['Café cold brew concentrado gelado', 180, 'ml', 'despensa'], ['Leite de amêndoas caseiro sem açúcar', 100, 'ml', 'despensa'], ['Pedras de gelo de café', 4, 'cubos', 'despensa'], ['Gotas de extrato puro de baunilha', 3, 'gotas', 'temperos']],
      steps: [['Colocar gelo', 'Encha o copo longo com pedras de gelo de café.', 30], ['Adicionar cold brew', 'Despeje o café concentrado até a metade.', 30], ['Finalizar com leite vegetal', 'Verta o leite de amêndoas criando camadas contrastantes.', null]]
    },
    {
      title: 'Cappuccino Italiano Cetogênico com Canela e Espuma Densa de Nata',
      sub: 'cafes', diff: 'easy', prep: 5, cook: 2, cal: 180, p: 2, c: 2, fib: 0, f: 19, prem: false,
      tags: ['cappuccino', 'nata', 'canela', 'café_da_manhã'],
      tip: 'Vaporize a nata diluída em 30% de água quente para conseguir uma microespuma elástica de cafeteria.',
      ings: [['Café espresso forte', 60, 'ml', 'despensa'], ['Nata batida levemente aquecida', 80, 'ml', 'laticínios'], ['Canela em pó para o topo', 1, 'pitada', 'temperos']],
      steps: [['Base de café', 'Tire o espresso na xícara larga.', 60], ['Verter espuma', 'Cubra com a espuma densa de nata.', 60], ['Polvilhar', 'Finalize com canela do Ceilão aromática.', null]]
    },
    {
      title: 'Café Turco Tradicional com Cardamomo Moído na Hora',
      sub: 'cafes', diff: 'medium', prep: 4, cook: 4, cal: 15, p: 0, c: 1, fib: 0, f: 0, prem: false,
      tags: ['café_turco', 'cardamomo', 'ibrik', 'exótico'],
      tip: 'Aqueça o café moído em pó ultrafino com o cardamomo na cezve (panela turca) sem ferver bruscamente.',
      ings: [['Café moído finíssimo para café turco', 20, 'g', 'despensa'], ['Sementes de cardamomo moídas frescas', 2, 'unidades', 'temperos'], ['Água mineral fria', 150, 'ml', 'despensa']],
      steps: [['Aquecer na cezve', 'Misture a água, o café e cardamomo em fogo brando.', 120], ['Subir espuma', 'Aguarde a espuma subir e retire antes de borbulhar.', 60], ['Servir sem filtrar', 'Despeje na xícara e espere 2 minutos para a borra assentar.', 120]]
    },
    {
      title: 'Latte de Café com Óleo de Coco e Leite de Castanha-de-Caju',
      sub: 'cafes', diff: 'easy', prep: 4, cook: 2, cal: 160, p: 3, c: 2, fib: 1, f: 16, prem: false,
      tags: ['latte', 'óleo_de_coco', 'castanha_de_caju', 'vegano_keto'],
      tip: 'A castanha confere textura amanteigada ao café sem necessidade de laticínios.',
      ings: [['Café passado fresco forte', 150, 'ml', 'despensa'], ['Leite vegetal puro de castanha-de-caju', 100, 'ml', 'despensa'], ['Óleo de coco extravirgem prensado a frio', 10, 'ml', 'despensa']],
      steps: [['Bater no mixer', 'Bata todos os ingredientes aquecidos por 20 segundos.', 60], ['Servir espumante', 'Aprecie quente na caneca.', null]]
    },
    {
      title: 'Affogato Nobre Cetogênico: Espresso Pelando sobre Gelato de Baunilha',
      sub: 'cafes', diff: 'easy', prep: 3, cook: 1, cal: 220, p: 4, c: 3, fib: 1, f: 22, prem: true,
      tags: ['affogato', 'espresso', 'gelato', 'sobremesa_e_café', 'italiano'],
      tip: 'Tire o espresso diretamente sobre a bola de sorvete gelada na taça na frente do convidado.',
      ings: [['Bola generosa de sorvete keto artesanal de baunilha', 80, 'g', 'laticínios'], ['Dose de café espresso duplo fervente', 60, 'ml', 'despensa'], ['Lâminas de amêndoas tostadas para finalizar', 10, 'g', 'despensa']],
      steps: [['Bola de gelato', 'Acomode a bola firme de sorvete no copo de vidro grosso.', 30], ['Verter espresso', 'Verta o café espresso escaldante sobre o gelato.', 30], ['Decorar', 'Salpique as amêndoas e consuma na hora.', null]]
    },
    {
      title: 'Café Vienense com Nata Batida em Picos Firmes e Raspas de Cacau 85%',
      sub: 'cafes', diff: 'easy', prep: 5, cook: 2, cal: 190, p: 2, c: 2, fib: 1, f: 20, prem: false,
      tags: ['café_vienense', 'nata_batida', 'cacau', 'elegante'],
      tip: 'Não misture a nata no café: beba o café quente passando pela camada de creme frio.',
      ings: [['Café preto filtrado longo e aromático', 180, 'ml', 'despensa'], ['Nata fresca batida em chantilly sem açúcar', 50, 'g', 'laticínios'], ['Raspas finas de chocolate amargo 85%', 10, 'g', 'despensa']],
      steps: [['Servir café', 'Coloque o café preto quente na taça de vidro.', 60], ['Coroar com chantilly', 'Disponha uma quenelle generosa de nata fresca.', 30], ['Raspas', 'Finalize com as raspas de chocolate amargo.', null]]
    },
    {
      title: 'Dirty Chai Cetogênico com Shot de Espresso, Especiarias e Nata',
      sub: 'cafes', diff: 'medium', prep: 6, cook: 5, cal: 210, p: 2, c: 3, fib: 1, f: 21, prem: true,
      tags: ['dirty_chai', 'espresso', 'chai', 'especiarias', 'aromático'],
      tip: 'Infundir canela, cravo, cardamomo e pimenta preta na água antes de bater com café e nata.',
      ings: [['Chá preto com especiarias chai concentrado', 120, 'ml', 'despensa'], ['Dose de espresso curto', 30, 'ml', 'despensa'], ['Nata fresca', 50, 'ml', 'laticínios'], ['Gengibre ralado e canela em pó', 1, 'pitada', 'temperos']],
      steps: [['Infundir chai', 'Cozinhe o chá preto com as especiarias por 4 minutos.', 240], ['Misturar café e nata', 'Junte o espresso e a nata batendo com o mixer espumador.', 60], ['Servir perfumado', 'Aprecie fumegante.', null]]
    },
    {
      title: 'Café com Manteiga de Cacau Pura e Leite de Coco Cremoso',
      sub: 'cafes', diff: 'easy', prep: 4, cook: 2, cal: 230, p: 1, c: 1, fib: 0, f: 25, prem: false,
      tags: ['manteiga_de_cacau', 'café', 'leite_de_coco', 'aroma_de_chocolate'],
      tip: 'A manteiga de cacau traz aroma natural de chocolate branco sem qualquer carboidrato.',
      ings: [['Café especial quente', 200, 'ml', 'despensa'], ['Manteiga de cacau culinária pura derretida', 15, 'g', 'despensa'], ['Leite de coco integral aquecido', 50, 'ml', 'despensa']],
      steps: [['Juntar ingredientes', 'Coloque todos os componentes no liquidificador.', 30], ['Bater aveludado', 'Emulsione até obter cor clara e aroma envolvente de chocolate branco.', 30], ['Servir', 'Aprecie em jejum ou no meio da tarde.', null]]
    },
    {
      title: 'Shakerato Italiano de Café Espresso Gelado com Raspas de Limão',
      sub: 'cafes', diff: 'easy', prep: 3, cook: 0, cal: 15, p: 1, c: 1, fib: 0, f: 0, prem: false,
      tags: ['shakerato', 'espresso_gelado', 'coqueteleira', 'italiano'],
      tip: 'Bata vigorosamente na coqueteleira com muito gelo por 15 segundos para gerar uma espuma dourada brilhante.',
      ings: [['Doses de espresso duplo fresco', 60, 'ml', 'despensa'], ['Cubos de gelo maciço', 6, 'unidades', 'despensa'], ['Casca fina de limão siciliano torcida', 1, 'unidade', 'temperos']],
      steps: [['Coqueteleira', 'Coloque o espresso, gelo e adoçante na coqueteleira.', 20], ['Agitar vigoroso', 'Bata forte até a coqueteleira suar e congelar por fora.', 20], ['Coar em taça martini', 'Passe pela peneira fina servindo a espuma dourada com o twist de limão.', null]]
    },
    {
      title: 'Iced Caramel Macchiato Cetogênico com Nata e Caramelo de Eritritol',
      sub: 'cafes', diff: 'easy', prep: 5, cook: 2, cal: 190, p: 2, c: 2, fib: 0, f: 20, prem: false,
      tags: ['caramel_macchiato', 'café_gelado', 'caramelo_keto', 'cafeteria'],
      tip: 'Regue o caramelo nas paredes internas do copo com gelo antes de adicionar os líquidos.',
      ings: [['Café espresso forte', 60, 'ml', 'despensa'], ['Calda de caramelo cetogênica de nata', 20, 'ml', 'laticínios'], ['Leite de amêndoas batido com nata', 120, 'ml', 'laticínios'], ['Pedras de gelo', 5, 'unidades', 'despensa']],
      steps: [['Gelo e caramelo', 'Encha o copo de gelo e decore com fios de calda.', 30], ['Adicionar leite com nata', 'Despeje o leite vegetal cremoso.', 30], ['Flutuar espresso', 'Verta o café por cima criando degradê visual.', null]]
    },

    // 13-22: Chás (10)
    {
      title: 'Matcha Latte Cerimonial com Leite de Coco e Óleo TCM C8',
      sub: 'chas', diff: 'easy', prep: 4, cook: 2, cal: 160, p: 2, c: 2, fib: 1, f: 16, prem: false,
      tags: ['matcha', 'latte', 'l-teanina', 'antioxidante', 'japonês'],
      tip: 'Dissolva o pó de matcha cerimonial com o batedor de bambu (chasen) em água a 80°C para não amargar.',
      ings: [['Matcha cerimonial japonês em pó puro', 3, 'g', 'despensa'], ['Água mineral a 80°C', 60, 'ml', 'despensa'], ['Leite de coco cremoso vaporizado', 150, 'ml', 'despensa'], ['Óleo TCM C8 e gotas de estévia', 10, 'ml', 'despensa']],
      steps: [['Bater matcha', 'Bata o pó na água quente com chasen em movimentos em W até espumar verde vibrante.', 60], ['Vaporizar leite de coco', 'Aqueça o leite de coco com óleo TCM.', 60], ['Unir e servir', 'Despeje o leite sobre a base verde brilhante.', null]]
    },
    {
      title: 'Chá Chai Indiano com Nata Fresca e Mix de Especiarias Aromáticas',
      sub: 'chas', diff: 'easy', prep: 6, cook: 8, cal: 170, p: 2, c: 2, fib: 0, f: 17, prem: false,
      tags: ['chai', 'indiano', 'canela', 'cravo', 'cardamomo', 'aquecedor'],
      tip: 'Aqueça as especiarias secas na panela antes de colocar a água para soltarem os óleos essenciais.',
      ings: [['Folhas de chá preto Assam ou Ceilão', 10, 'g', 'despensa'], ['Canela em pau, cravos, cardamomo e gengibre fresco', 15, 'g', 'temperos'], ['Água mineral pura', 200, 'ml', 'despensa'], ['Nata fresca ou creme de leite', 60, 'ml', 'laticínios']],
      steps: [['Ferver infusão', 'Ferva a água com as especiarias amassadas por 6 minutos.', 360], ['Juntar chá preto', 'Adicione o chá preto e ferva mais 2 minutos.', 120], ['Coar com nata', 'Passe pela peneira fina e incorpore a nata cremosa quente.', 60]]
    },
    {
      title: 'Infusão Gelada de Hibisco com Gengibre Fresco, Hortelã e Limão',
      sub: 'chas', diff: 'easy', prep: 5, cook: 0, cal: 15, p: 0, c: 2, fib: 0, f: 0, prem: false,
      tags: ['hibisco', 'chá_gelado', 'diurético', 'antioxidante', 'vermelho'],
      tip: 'O hibisco atua como potente diurético natural e acelera a eliminação de retenção hídrica.',
      ings: [['Flores secas de hibisco orgânico', 15, 'g', 'despensa'], ['Fatias de gengibre fresco e folhas de hortelã', 15, 'g', 'vegetais'], ['Suco de limão taiti espremido', 1, 'unidade', 'temperos'], ['Água mineral e muito gelo', 500, 'ml', 'despensa']],
      steps: [['Fazer infusão concentrada', 'Infundir o hibisco e gengibre em 200ml de água quente por 8 minutos e coar.', 480], ['Gelar na jarra', 'Acrescente água fria, suco de limão, folhas de hortelã e pedras de gelo.', 120], ['Servir taças', 'Sirva cor rubi deslumbrante.', null]]
    },
    {
      title: 'Chá Verde Sencha com Gengibre e Gotas de Limão Siciliano',
      sub: 'chas', diff: 'easy', prep: 3, cook: 3, cal: 10, p: 0, c: 1, fib: 0, f: 0, prem: false,
      tags: ['chá_verde', 'sencha', 'epigalocatequina', 'termogênico'],
      tip: 'Não ferva a água acima de 80°C para manter todos os polifenóis intactos.',
      ings: [['Folhas de chá verde sencha japonês', 5, 'g', 'despensa'], ['Gengibre fresco em lâminas', 10, 'g', 'vegetais'], ['Gotas de limão siciliano', 1, 'colher de café', 'temperos'], ['Água filtrada a 80°C', 300, 'ml', 'despensa']],
      steps: [['Infundir folhas', 'Deixe as folhas e gengibre na água quente por 3 minutos.', 180], ['Coar imediatamente', 'Retire as folhas para não amargar.', 30], ['Servir', 'Adicione as gotas de limão.', null]]
    },
    {
      title: 'Golden Milk Cetogênico com Cúrcuma, Pimenta Preta e Leite de Coco',
      sub: 'chas', diff: 'easy', prep: 5, cook: 5, cal: 180, p: 2, c: 3, fib: 1, f: 18, prem: false,
      tags: ['golden_milk', 'cúrcuma', 'anti-inflamatório', 'leite_dourado', 'sono'],
      tip: 'A piperina da pimenta preta combinada com a gordura do coco multiplica a absorção da curcumina.',
      ings: [['Cúrcuma pura em pó de alta concentração', 1, 'colher de sobremesa', 'temperos'], ['Pimenta-do-reino moída na hora (uma pitada)', 1, 'pitada', 'temperos'], ['Leite de coco cremoso', 200, 'ml', 'despensa'], ['Óleo de coco virgem e canela em pó', 10, 'g', 'despensa']],
      steps: [['Aquecer leite de coco', 'Aqueça o leite de coco com óleo em fogo brando.', 120], ['Adicionar especiarias', 'Misture a cúrcuma, pimenta preta e canela mexendo com batedor.', 120], ['Servir dourado', 'Tome quente antes de dormir.', null]]
    },
    {
      title: 'Chá de Hortelã Fresca com Limão e Gengibre Revigorante',
      sub: 'chas', diff: 'easy', prep: 4, cook: 3, cal: 10, p: 0, c: 1, fib: 0, f: 0, prem: false,
      tags: ['hortelã', 'digestivo', 'fresco', 'gengibre'],
      tip: 'Aperte as folhas frescas de hortelã com as mãos antes de colocar na água para romper as glândulas aromáticas.',
      ings: [['Ramos frescos de hortelã lavados', 1, 'maço pequeno', 'vegetais'], ['Gengibre ralado fresco', 1, 'colher de café', 'temperos'], ['Suco de meio limão', 1, 'unidade', 'temperos'], ['Água mineral fervente', 350, 'ml', 'despensa']],
      steps: [['Infundir erva fresca', 'Cubra as folhas e o gengibre com água fervente e abafe por 5 minutos.', 300], ['Servir com limão', 'Coe na caneca com o suco fresco de limão.', null]]
    },
    {
      title: 'Chá Rooibos Vermelho com Fava de Baunilha e Leite de Amêndoas',
      sub: 'chas', diff: 'easy', prep: 4, cook: 4, cal: 60, p: 1, c: 1, fib: 0, f: 5, prem: false,
      tags: ['rooibos', 'sem_cafeína', 'baunilha', 'noturno', 'sul-africano'],
      tip: 'O Rooibos é naturalmente livre de cafeína e rico em minerais raros.',
      ings: [['Chá Rooibos orgânico sul-africano', 5, 'g', 'despensa'], ['Sementes de baunilha Bourbon', 1, 'pitada', 'temperos'], ['Leite de amêndoas quente espumado', 100, 'ml', 'despensa'], ['Água fervente', 150, 'ml', 'despensa']],
      steps: [['Infundir rooibos', 'Mantenha o rooibos em infusão por 5 minutos com a baunilha.', 300], ['Adicionar leite espumado', 'Verta o leite de amêndoas por cima.', 60], ['Aprecie à noite', 'Bebida relaxante antes de dormir.', null]]
    },
    {
      title: 'Chá Earl Grey com Bergamota e Nata Fresca (London Fog Keto)',
      sub: 'chas', diff: 'easy', prep: 4, cook: 3, cal: 150, p: 1, c: 1, fib: 0, f: 16, prem: true,
      tags: ['london_fog', 'earl_grey', 'bergamota', 'nata', 'britânico'],
      tip: 'A nata vaporizada com essência de baunilha equilibra o perfume nobre da bergamota.',
      ings: [['Chá Earl Grey de alta qualidade', 5, 'g', 'despensa'], ['Nata fresca vaporizada', 50, 'ml', 'laticínios'], ['Extrato de baunilha pura', 2, 'gotas', 'temperos'], ['Água mineral a 95°C', 200, 'ml', 'despensa']],
      steps: [['Infundir Earl Grey', 'Deixe o chá descansar na água quente por 4 minutos.', 240], ['Adicionar baunilha e nata', 'Acrescente a baunilha e cubra com a nata espumante.', 60], ['Servir clássico', 'Apresente em xícara de porcelana.', null]]
    },
    {
      title: 'Infusão Calmante de Camomila Florada com Erva-Doce e Lavanda',
      sub: 'chas', diff: 'easy', prep: 3, cook: 4, cal: 5, p: 0, c: 0, fib: 0, f: 0, prem: false,
      tags: ['camomila', 'lavanda', 'erva-doce', 'relaxante', 'sono_profundo'],
      tip: 'Utilize flores inteiras desidratadas de camomila e sementes de erva-doce levemente esmagadas.',
      ings: [['Flores secas de camomila alemã', 1, 'colher de sopa', 'despensa'], ['Sementes de erva-doce e flores de lavanda culinária', 1, 'colher de café', 'despensa'], ['Água mineral fervente', 300, 'ml', 'despensa']],
      steps: [['Abafar infusão', 'Coloque as ervas na água fervente tampando a chaleira por 6 minutos.', 360], ['Coar quente', 'Despeje na caneca respirando o vapor aromático sedativo.', null]]
    },
    {
      title: 'Chá Branco com Pêssego Liofilizado e Flocos de Coco',
      sub: 'chas', diff: 'easy', prep: 4, cook: 3, cal: 30, p: 0, c: 2, fib: 1, f: 2, prem: false,
      tags: ['chá_branco', 'antioxidante', 'delicado', 'aromático'],
      tip: 'O broto jovem do chá branco tem sabor adocicado sutil sem qualquer adstringência.',
      ings: [['Broto de chá branco Pai Mu Tan', 5, 'g', 'despensa'], ['Flocos finos de coco desidratado', 10, 'g', 'despensa'], ['Água mineral aquecida a 75°C', 300, 'ml', 'despensa']],
      steps: [['Infundir delicado', 'Deixe em repouso por 4 minutos na água morna.', 240], ['Servir translúcido', 'Beba límpido e aveludado.', null]]
    },

    // 23-32: Smoothies (10)
    {
      title: 'Smoothie Verde Cremoso com Abacate, Espinafre e Leite de Coco',
      sub: 'smoothies', diff: 'easy', prep: 5, cook: 0, cal: 280, p: 6, c: 4, fib: 3, f: 26, prem: false,
      tags: ['smoothie_verde', 'abacate', 'espinafre', 'detox_keto', 'energia'],
      tip: 'O abacate confere densidade cremosa de milk-shake sem sabor pronunciado de salada.',
      ings: [['Abacate manteiga maduro', 120, 'g', 'vegetais'], ['Folhas de espinafre baby frescas', 40, 'g', 'vegetais'], ['Leite de coco integral gelado', 200, 'ml', 'despensa'], ['Suco de meio limão e pedras de gelo', 1, 'unidade', 'temperos']],
      steps: [['Bater no liquidificador', 'Bata todos os ingredientes na potência máxima até consistência lisa.', 90], ['Servir em copo alto', 'Aprecie imediatamente bem gelado.', null]]
    },
    {
      title: 'Smoothie Proteico de Morango com Whey Isolado e Nata Fresca',
      sub: 'smoothies', diff: 'easy', prep: 4, cook: 0, cal: 310, p: 28, c: 5, fib: 2, f: 20, prem: false,
      tags: ['smoothie', 'whey_protein', 'morango', 'pós-treino', 'nata'],
      tip: 'Utilize morangos congelados para uma consistência espessa de sorvete cremoso.',
      ings: [['Morangos frescos congelados', 100, 'g', 'vegetais'], ['Whey protein isolado de baunilha sem açúcar', 30, 'g', 'despensa'], ['Nata fresca', 50, 'ml', 'laticínios'], ['Água gelada e cubos de gelo', 150, 'ml', 'despensa']],
      steps: [['Liquidificador', 'Bata os morangos de pedra com o whey, nata e água.', 90], ['Textura aveludada', 'Despeje no copo térmico para o pós-treino.', null]]
    },
    {
      title: 'Smoothie de Frutas Silvestres com Mirtilos, Amoras e Creme de Coco',
      sub: 'smoothies', diff: 'easy', prep: 4, cook: 0, cal: 240, p: 4, c: 6, fib: 3, f: 22, prem: false,
      tags: ['smoothie', 'frutas_vermelhas', 'mirtilos', 'antioxidante', 'cremoso'],
      tip: 'Frutas vermelhas são naturalmente pobres em açúcares e ricas em antocianinas protetoras.',
      ings: [['Mix de amoras e mirtilos congelados', 100, 'g', 'vegetais'], ['Creme de coco denso', 120, 'ml', 'despensa'], ['Água de coco ou água mineral gelada', 100, 'ml', 'despensa'], ['Sementes de chia hidratadas', 15, 'g', 'despensa']],
      steps: [['Bater smoothie', 'Triture as frutas com o creme de coco e chia no liquidificador.', 120], ['Servir púrpura', 'Apresente em taça alta com sementes por cima.', null]]
    },
    {
      title: 'Smoothie Dourado Anti-inflamatório de Cúrcuma com Gengibre e Abacate',
      sub: 'smoothies', diff: 'easy', prep: 5, cook: 0, cal: 260, p: 4, c: 4, fib: 3, f: 25, prem: false,
      tags: ['smoothie_dourado', 'cúrcuma', 'gengibre', 'imunidade'],
      tip: 'Uma dose potente de fitoquímicos para regeneração celular matinal.',
      ings: [['Abacate', 80, 'g', 'vegetais'], ['Cúrcuma fresca ralada e gengibre', 15, 'g', 'vegetais'], ['Leite de amêndoas gelado', 220, 'ml', 'despensa'], ['Canela e pimenta preta em pó', 1, 'pitada', 'temperos']],
      steps: [['Processar', 'Bata tudo até textura amarela homogênea.', 90], ['Beber fresco', 'Consuma no café da manhã.', null]]
    },
    {
      title: 'Shake Cetogênico de Pasta de Amendoim com Cacau 100% e Colágeno',
      sub: 'smoothies', diff: 'easy', prep: 4, cook: 0, cal: 340, p: 22, c: 4, fib: 3, f: 26, prem: false,
      tags: ['shake', 'pasta_de_amendoim', 'cacau', 'colágeno', 'refeição_líquida'],
      tip: 'Adicione colágeno hidrolisado para suporte articular e aumento da saciedade.',
      ings: [['Pasta de amendoim integral', 35, 'g', 'despensa'], ['Cacau em pó 100%', 15, 'g', 'despensa'], ['Colágeno hidrolisado neutro', 20, 'g', 'despensa'], ['Leite de coco ralo gelado com gelo', 250, 'ml', 'despensa']],
      steps: [['Bater shake', 'Bata por 60 segundos até formar espuma densa.', 60], ['Servir', 'Aprecie como lanche proteico completo.', null]]
    },
    {
      title: 'Smoothie Cremoso de Maracujá com Nata e Gelo Picado',
      sub: 'smoothies', diff: 'easy', prep: 4, cook: 0, cal: 260, p: 4, c: 5, fib: 2, f: 25, prem: false,
      tags: ['smoothie', 'maracujá', 'nata', 'cítrico_e_doce', 'tropical'],
      tip: 'Bata a polpa com água rapidamente e coe antes de misturar à nata para não triturar as sementes.',
      ings: [['Polpa fresca de maracujá coada', 80, 'ml', 'vegetais'], ['Nata fresca de fazenda', 80, 'ml', 'laticínios'], ['Água mineral e gelo abundante', 150, 'ml', 'despensa'], ['Eritritol a gosto', 25, 'g', 'despensa']],
      steps: [['Bater suco e nata', 'Emulsione o suco com a nata, adoçante e gelo até virar frapê.', 60], ['Servir', 'Apresente em copo alto com canudo.', null]]
    },
    {
      title: 'Smoothie Verde Alcalinizante com Pepino, Limão, Couve e Hortelã',
      sub: 'smoothies', diff: 'easy', prep: 5, cook: 0, cal: 70, p: 3, c: 4, fib: 2, f: 5, prem: false,
      tags: ['smoothie_verde', 'pepino', 'couve', 'alcalino', 'leve'],
      tip: 'Super leve e hidratante, ideal para dias quentes de jejum intermitente.',
      ings: [['Pepino com casca em rodelas', 120, 'g', 'vegetais'], ['Folha de couve manteiga sem talo', 1, 'folha', 'vegetais'], ['Hortelã fresca e suco de limão', 15, 'g', 'vegetais'], ['Azeite extravirgem (fio emulsificante)', 10, 'ml', 'despensa'], ['Água gelada com gelo', 200, 'ml', 'despensa']],
      steps: [['Bater', 'Triture intensamente no liquidificador.', 90], ['Beber sem coar', 'Aproveite todas as fibras e clorofila intactas.', null]]
    },
    {
      title: 'Shake Frapê de Café com Baunilha, Gelo e Nata (Frappuccino Keto)',
      sub: 'smoothies', diff: 'easy', prep: 4, cook: 0, cal: 230, p: 3, c: 2, fib: 0, f: 24, prem: false,
      tags: ['frappuccino', 'café_gelado', 'frapê', 'baunilha', 'nata'],
      tip: 'Triture pedras de gelo de café no liquidificador para uma textura de neve macia.',
      ings: [['Cubos de gelo de café forte congelado', 6, 'unidades', 'despensa'], ['Nata fresca gelada', 80, 'ml', 'laticínios'], ['Extrato puro de fava de baunilha', 1, 'colher de café', 'temperos'], ['Eritritol em pó', 25, 'g', 'despensa']],
      steps: [['Triturar gelo', 'Pulsar os cubos de café até esfarelar.', 40], ['Adicionar nata', 'Junte a nata e baunilha batendo até virar frapê volumoso.', 40], ['Servir com canudo', 'Apresente em copo bojudo.', null]]
    },
    {
      title: 'Smoothie Tropical de Coco com Framboesa Silvestre e Linhaça',
      sub: 'smoothies', diff: 'easy', prep: 4, cook: 0, cal: 270, p: 5, c: 5, fib: 4, f: 26, prem: false,
      tags: ['smoothie', 'framboesa', 'coco', 'linhaça', 'ômega_3'],
      tip: 'A farinha de linhaça dourada moída na hora espessa o smoothie e entrega ômega 3 vegetal.',
      ings: [['Framboesas congeladas', 80, 'g', 'vegetais'], ['Leite de coco integral cremoso', 180, 'ml', 'despensa'], ['Farinha de linhaça dourada fresca', 15, 'g', 'despensa']],
      steps: [['Processar', 'Bata todos os ingredientes até emulsão aveludada cor de rosa.', 90], ['Servir', 'Consuma imediatamente.', null]]
    },
    {
      title: 'Smoothie Proteico de Cacau com Abacate e Proteína Vegetal Isolada',
      sub: 'smoothies', diff: 'easy', prep: 5, cook: 0, cal: 320, p: 26, c: 4, fib: 4, f: 22, prem: false,
      tags: ['smoothie', 'cacau', 'abacate', 'vegano_proteico'],
      tip: 'Combinação perfeita para quem busca nutrição líquida pós-treino 100% livre de leite.',
      ings: [['Abacate', 90, 'g', 'vegetais'], ['Cacau em pó 100%', 20, 'g', 'despensa'], ['Proteína isolada de ervilha/arroz sabor neutro', 30, 'g', 'despensa'], ['Leite de amêndoas gelado e gelo', 250, 'ml', 'despensa']],
      steps: [['Bater no copo', 'Bata até atingir textura homogênea e densa.', 90], ['Beber gelado', 'Excelente para recuperação muscular.', null]]
    },

    // 33-42: Drinks Alcoólicos Keto (10)
    {
      title: 'Gin Tônica Botânica Cetogênica com Alecrim, Zimbro e Pepino',
      sub: 'drinks_alcoolicos_keto', diff: 'easy', prep: 4, cook: 0, cal: 110, p: 0, c: 1, fib: 0, f: 0, prem: false,
      tags: ['gin_tonica', 'alecrim', 'zimbro', 'zero_carboidrato', 'coquetel'],
      tip: 'Utilize água tônica zero açúcar certificada e aromatize o copo com o ramo de alecrim fresco.',
      ings: [['Gin artesanal premium london dry', 50, 'ml', 'despensa'], ['Água tônica zero açúcar', 150, 'ml', 'despensa'], ['Lâmina fina longitudinal de pepino japonês', 1, 'fatia', 'vegetais'], ['Bagos de zimbro esmagados e ramo de alecrim', 4, 'unidades', 'temperos'], ['Gelo em cubos grandes transparentes', 4, 'unidades', 'despensa']],
      steps: [['Gelar a taça balloon', 'Gire pedras de gelo na taça até embaçar o vidro.', 30], ['Botânicos e Gin', 'Coloque a lâmina de pepino, zimbro e dose de gin.', 30], ['Completar com tônica', 'Verta a tônica devagar pela haste da colher bailarina para preservar o gás.', 30]]
    },
    {
      title: 'Margarita Cetogênica de Tequila Prata com Limão Siciliano e Borda de Sal',
      sub: 'drinks_alcoolicos_keto', diff: 'easy', prep: 4, cook: 0, cal: 120, p: 0, c: 2, fib: 0, f: 0, prem: false,
      tags: ['margarita', 'tequila', 'limão', 'sal_marinho', 'mexicano'],
      tip: 'Substitua o licor de laranja por suco fresco de limão e 3 gotas de extrato de flor de laranjeira com estévia.',
      ings: [['Tequila prata 100% agave', 50, 'ml', 'despensa'], ['Suco de limão fresco coado', 30, 'ml', 'temperos'], ['Flor de sal para a crosta da borda da taça', 1, 'colher de café', 'temperos'], ['Eritritol líquido e gelo', 10, 'ml', 'despensa']],
      steps: [['Crustar borda', 'Passe limão na borda da taça e mergulhe no pratinho com sal.', 30], ['Bater na coqueteleira', 'Bata a tequila, suco de limão, adoçante e gelo por 15 segundos.', 20], ['Coar na taça', 'Sirva na taça coupé gelada sem deixar cair gelo.', null]]
    },
    {
      title: 'Mojito Cubano Nobre com Rum Branco, Hortelã Fresca e Club Soda',
      sub: 'drinks_alcoolicos_keto', diff: 'easy', prep: 4, cook: 0, cal: 105, p: 0, c: 1, fib: 0, f: 0, prem: false,
      tags: ['mojito', 'rum', 'hortelã', 'refrescante', 'cubano'],
      tip: 'Pressione levemente as folhas de hortelã sem macerar demais para não liberar o amargor da clorofila.',
      ings: [['Rum branco de boa qualidade', 50, 'ml', 'despensa'], ['Folhas frescas de hortelã', 10, 'folhas', 'vegetais'], ['Suco de limão taiti fresco', 25, 'ml', 'temperos'], ['Club soda com gás', 100, 'ml', 'despensa'], ['Eritritol líquido ou estévia pura', 10, 'ml', 'despensa'], ['Gelo picado abundante', 1, 'copo', 'despensa']],
      steps: [['Aromas no copo', 'Pressione a hortelã com o suco de limão e adoçante no fundo do copo longo.', 30], ['Gelo e rum', 'Encha de gelo picado e adicione a dose de rum.', 30], ['Completar com soda', 'Finalize com club soda mexendo de baixo para cima delicadamente.', 30]]
    },
    {
      title: 'Dry Martini Tradicional com Gin London Dry, Vermute Seco e Azeitona',
      sub: 'drinks_alcoolicos_keto', diff: 'medium', prep: 4, cook: 0, cal: 125, p: 0, c: 1, fib: 0, f: 0, prem: true,
      tags: ['dry_martini', 'gin', 'vermute_seco', 'azeitona', 'clássico_atemporal'],
      tip: 'Mexa no mixing glass com bastante gelo sem agitar na coqueteleira para manter o líquido cristalino.',
      ings: [['Gin London Dry premium', 60, 'ml', 'despensa'], ['Vermute seco (dry vermouth)', 10, 'ml', 'despensa'], ['Azeitona verde recheada ou casca de limão', 1, 'unidade', 'vegetais'], ['Gelo em cubos grandes', 6, 'unidades', 'despensa']],
      steps: [['Mixing glass', 'Misture o gin e o vermute com muito gelo girando a colher bailarina por 30 segundos.', 30], ['Coar em taça martini', 'Despeje o coquetel extremamente gelado na taça previamente congelada.', 30], ['Guarnição nobre', 'Acomode a azeitona verde espetada no palito.', null]]
    },
    {
      title: 'Caipirinha Brasileira de Cachaça Envelhecida com Limão e Eritritol',
      sub: 'drinks_alcoolicos_keto', diff: 'easy', prep: 3, cook: 0, cal: 115, p: 0, c: 2, fib: 0, f: 0, prem: false,
      tags: ['caipirinha', 'cachaça', 'limão', 'brasileiro', 'raiz'],
      tip: 'Retire o miolo branco central do limão antes de cortar em pedaços para não amargar.',
      ings: [['Cachaça artesanal de alambique', 50, 'ml', 'despensa'], ['Limão taiti cortado em gomos sem miolo', 1, 'unidade', 'vegetais'], ['Eritritol culinário em pó', 15, 'g', 'despensa'], ['Gelo em cubos', 4, 'unidades', 'despensa']],
      steps: [['Macerar limão', 'Esmague os gomos de limão com o adoçante no copo baixo.', 30], ['Gelo e cachaça', 'Complete com pedras de gelo e despeje a cachaça.', 30], ['Misturar', 'Mexa bem com mexedor e aprecie na praia ou churrasco.', null]]
    },
    {
      title: 'Moscow Mule Cetogênico com Vodka, Espuma de Gengibre e Limão na Caneca',
      sub: 'drinks_alcoolicos_keto', diff: 'medium', prep: 5, cook: 0, cal: 130, p: 1, c: 2, fib: 0, f: 3, prem: true,
      tags: ['moscow_mule', 'vodka', 'gengibre', 'caneca_de_cobre'],
      tip: 'Sirva na caneca de cobre tradicional para reter a temperatura congelante.',
      ings: [['Vodka destilada de grãos nobre', 50, 'ml', 'despensa'], ['Suco de limão fresco', 20, 'ml', 'temperos'], ['Água com gás aromatizada com gengibre concentrado', 100, 'ml', 'despensa'], ['Espuma cetogênica de gengibre com clara e estévia', 40, 'g', 'laticínios']],
      steps: [['Base alcoólica', 'Misture a vodka, o limão e a água de gengibre com gelo picado na caneca de cobre.', 30], ['Cobrir com espuma', 'Aplique a espuma cremosa de gengibre por cima.', 30], ['Decorar', 'Finalize com uma rodela de limão desidratado.', null]]
    },
    {
      title: 'Negroni Clássico Italiano com Gin, Campari e Vermute Rosso sem Açúcar',
      sub: 'drinks_alcoolicos_keto', diff: 'medium', prep: 3, cook: 0, cal: 140, p: 0, c: 4, fib: 0, f: 0, prem: true,
      tags: ['negroni', 'gin', 'campari', 'italiano', 'amargo'],
      tip: 'Use gelo grande translúcido em copo rocks baixo para degelo lento.',
      ings: [['Gin London Dry', 30, 'ml', 'despensa'], ['Bitter Campari', 30, 'ml', 'despensa'], ['Vermute tinto seco', 30, 'ml', 'despensa'], ['Casca de laranja bahia flambada', 1, 'unidade', 'vegetais']],
      steps: [['Mexer com gelo', 'Combine as três doses iguais no copo rocks com gelo.', 30], ['Twist de laranja', 'Torça a casca de laranja sobre o copo para borrifar os óleos cítricos.', 15], ['Servir', 'Aprecie antes do jantar.', null]]
    },
    {
      title: 'Whisky Sour Cetogênico com Bourbon, Limão Siciliano e Espuma de Clara',
      sub: 'drinks_alcoolicos_keto', diff: 'medium', prep: 5, cook: 0, cal: 135, p: 3, c: 1, fib: 0, f: 0, prem: false,
      tags: ['whisky_sour', 'bourbon', 'clara_de_ovo', 'coqueteleira', 'barraria'],
      tip: 'Faça o "dry shake" (bater sem gelo primeiro) para criar emulsão espumosa aveludada com a clara.',
      ings: [['Bourbon whisky americano', 50, 'ml', 'despensa'], ['Suco fresco de limão siciliano', 25, 'ml', 'temperos'], ['Clara de ovo caipira pasteurizada', 15, 'ml', 'proteínas'], ['Eritritol líquido e gotas de angostura', 10, 'ml', 'despensa']],
      steps: [['Dry shake', 'Bata na coqueteleira sem gelo para emulsionar a clara.', 20], ['Bater com gelo', 'Adicione gelo e bata vigorosamente por 15 segundos.', 20], ['Coar duplo', 'Passe pela peneira fina e goteje angostura na espuma.', null]]
    },
    {
      title: 'Cleriquot Cetogênico de Vinho Branco com Morangos e Hortelã',
      sub: 'drinks_alcoolicos_keto', diff: 'easy', prep: 6, cook: 0, cal: 110, p: 0, c: 3, fib: 1, f: 0, prem: false,
      tags: ['cleriquot', 'vinho_branco', 'morangos', 'jarra', 'festa'],
      tip: 'Escolha vinho branco sauvignon blanc bem seco e frutas com baixo teor de frutose.',
      ings: [['Vinho branco seco gelado (Sauvignon Blanc)', 150, 'ml', 'despensa'], ['Morangos fatiados e amoras', 40, 'g', 'vegetais'], ['Água com gás gasosa mineral', 80, 'ml', 'despensa'], ['Folhas de hortelã fresca e gelo', 1, 'ramo', 'temperos']],
      steps: [['Montar taça com frutas', 'Coloque as frutas e o gelo na taça bojuda.', 60], ['Adicionar vinho', 'Verta o vinho branco bem gelado.', 30], ['Completar com água gasosa', 'Finalize com água com gás e misture levemente.', null]]
    },
    {
      title: 'Bloody Mary Cetogênico com Suco de Tomate Rústico, Vodka e Tabasco',
      sub: 'drinks_alcoolicos_keto', diff: 'easy', prep: 5, cook: 0, cal: 120, p: 2, c: 4, fib: 1, f: 0, prem: false,
      tags: ['bloody_mary', 'vodka', 'tomate', 'tabasco', 'brunch'],
      tip: 'Decore o copo com um talo crocante de salsão fresco que serve de mexedor.',
      ings: [['Vodka pura', 50, 'ml', 'despensa'], ['Suco concentrado de tomate sem açúcar', 120, 'ml', 'vegetais'], ['Molho inglês, Tabasco e suco de limão', 1, 'colher de chá', 'temperos'], ['Sal de aipo e talo fresco de salsão', 1, 'unidade', 'vegetais']],
      steps: [['Misturar temperos', 'Misture o suco de tomate com o limão, tabasco e sal no copo longo.', 60], ['Gelo e vodka', 'Adicione a vodka e cubos de gelo mexendo com o talo de salsão.', 60], ['Servir', 'Aprecie como clássico de brunch.', null]]
    },

    // 43-50: Refrescos (8)
    {
      title: 'Limonada Suíça Cetogênica com Leite de Coco e Gelo Batido',
      sub: 'refrescos', diff: 'easy', prep: 4, cook: 0, cal: 110, p: 1, c: 2, fib: 0, f: 11, prem: false,
      tags: ['limonada_suíça', 'leite_de_coco', 'refrescante', 'verão'],
      tip: 'Bata os limões com casca por no máximo 10 segundos para não extrair o amargor da parte branca.',
      ings: [['Limões taiti inteiros higienizados cortados em quatro', 2, 'unidades', 'vegetais'], ['Leite de coco cremoso', 100, 'ml', 'despensa'], ['Água gelada e cubos de gelo', 400, 'ml', 'despensa'], ['Eritritol ou xilitol', 30, 'g', 'despensa']],
      steps: [['Pulsar rápido', 'Coloque no liquidificador e pulse 3 vezes por 3 segundos.', 20], ['Coar imediatamente', 'Passe pela peneira fina espremendo bem.', 30], ['Voltar e espumar', 'Bata o líquido coado com o leite de coco até espumar.', 30]]
    },
    {
      title: 'Pink Lemonade Cetogênica com Suco de Framboesa e Limão Siciliano',
      sub: 'refrescos', diff: 'easy', prep: 4, cook: 0, cal: 40, p: 0, c: 3, fib: 1, f: 0, prem: false,
      tags: ['pink_lemonade', 'framboesa', 'limão_siciliano', 'colorido', 'festa'],
      tip: 'A framboesa confere uma tonalidade rosa vibrante natural sem corantes artificiais.',
      ings: [['Framboesas frescas amassadas', 30, 'g', 'vegetais'], ['Suco fresco de limões sicilianos', 60, 'ml', 'temperos'], ['Água mineral gelada com gás', 300, 'ml', 'despensa'], ['Eritritol e ramos de alecrim', 25, 'g', 'despensa']],
      steps: [['Amassar framboesas', 'Pressione as framboesas com o adoçante e suco de limão.', 60], ['Coar em jarra', 'Passe pela peneirinha para tirar sementes.', 30], ['Gelo e gás', 'Complete com muito gelo e água com gás.', null]]
    },
    {
      title: 'Água Aromatizada Detox com Pepino, Limão, Gengibre e Hortelã',
      sub: 'refrescos', diff: 'easy', prep: 5, cook: 0, cal: 10, p: 0, c: 1, fib: 0, f: 0, prem: false,
      tags: ['água_aromatizada', 'detox', 'pepino', 'hortelã', 'dia_a_dia'],
      tip: 'Deixe descansar por 30 minutos na geladeira para a água absorver os óleos essenciais da hortelã.',
      ings: [['Rodelas finas de pepino com casca', 60, 'g', 'vegetais'], ['Rodelas de limão siciliano e taiti', 1, 'unidade', 'vegetais'], ['Folhas de hortelã fresca e lascas de gengibre', 15, 'g', 'vegetais'], ['Água mineral filtrada gelada', 1000, 'ml', 'despensa']],
      steps: [['Compor jarra de vidro', 'Coloque todos os ingredientes na jarra transparente.', 60], ['Cobrir de água e gelo', 'Despeje a água mineral e mantenha na geladeira.', 60], ['Servir contínuo', 'Beba ao longo de todo o dia.', null]]
    },
    {
      title: 'Soda Italiana Cetogênica de Frutas Vermelhas com Água com Gás',
      sub: 'refrescos', diff: 'easy', prep: 4, cook: 2, cal: 35, p: 0, c: 3, fib: 1, f: 0, prem: false,
      tags: ['soda_italiana', 'frutas_vermelhas', 'refrigerante_saudável', 'crianças'],
      tip: 'Faça um xarope reduzindo as amoras com água e eritritol em fogo brando por 3 minutos.',
      ings: [['Xarope caseiro cetogênico de amoras e morango', 40, 'ml', 'vegetais'], ['Água mineral com gás bem gelada', 200, 'ml', 'despensa'], ['Gelo picado e folha de manjericão', 1, 'copo', 'temperos']],
      steps: [['Xarope no fundo', 'Coloque a calda de frutas no fundo do copo longo.', 30], ['Gelo picado', 'Preencha com o gelo até a borda.', 30], ['Água com gás', 'Complete com água gasosa e mexa suavemente.', null]]
    },
    {
      title: 'Chá Mate Gelado Caseiro com Limão Escondidinho e Hortelã',
      sub: 'refrescos', diff: 'easy', prep: 5, cook: 5, cal: 15, p: 0, c: 1, fib: 0, f: 0, prem: false,
      tags: ['chá_mate', 'mate_com_limão', 'carioca', 'refrescante', 'verão'],
      tip: 'Toste a erva-mate seca na panela por 1 minuto antes da água para o autêntico sabor tostado de praia.',
      ings: [['Erva-mate tostada em folhas', 20, 'g', 'despensa'], ['Suco de limão taiti', 2, 'unidades', 'temperos'], ['Água mineral e pedras de gelo', 800, 'ml', 'despensa'], ['Eritritol a gosto', 30, 'g', 'despensa']],
      steps: [['Infundir mate', 'Ferva a água, adicione a erva-mate, desligue e abafe por 10 minutos.', 600], ['Coar e gelar', 'Passe pelo coador de pano e adicione o suco de limão e adoçante.', 120], ['Servir trincando', 'Sirva em copos cheios de gelo.', null]]
    },
    {
      title: 'Suchá Termogênico de Hibisco com Chá Verde e Casca de Laranja',
      sub: 'refrescos', diff: 'easy', prep: 5, cook: 0, cal: 20, p: 0, c: 2, fib: 0, f: 0, prem: false,
      tags: ['suchá', 'hibisco', 'chá_verde', 'termogênico', 'metabolismo'],
      tip: 'Excelente para tomar durante o treino ou em períodos de jejum intermitente.',
      ings: [['Infusão gelada concentrada de hibisco e chá verde', 300, 'ml', 'despensa'], ['Cascas finas de laranja bahia', 1, 'unidade', 'vegetais'], ['Gelo picado e canela em pau', 1, 'ramo', 'temperos']],
      steps: [['Misturar chás', 'Combine as infusões frias na jarra.', 60], ['Aromatizar', 'Adicione a casca de laranja e canela em pau.', 60], ['Servir', 'Aprecie trincando de gelado.', null]]
    },
    {
      title: 'Refrigerante Caseiro Cetogênico de Gengibre (Ginger Ale Zero)',
      sub: 'refrescos', diff: 'easy', prep: 5, cook: 5, cal: 15, p: 0, c: 2, fib: 0, f: 0, prem: false,
      tags: ['ginger_ale', 'refrigerante_caseiro', 'gengibre', 'digestivo'],
      tip: 'O xarope concentrado de gengibre fresco batido com água com gás vira um refrigerante natural picante.',
      ings: [['Xarope de gengibre fresco concentrado com eritritol', 40, 'ml', 'vegetais'], ['Suco de meio limão taiti', 15, 'ml', 'temperos'], ['Água com gás mineral de alta efervescência', 220, 'ml', 'despensa'], ['Gelo', 4, 'cubos', 'despensa']],
      steps: [['Concentrado no copo', 'Verta o xarope de gengibre e suco de limão no copo com gelo.', 30], ['Gaseificar', 'Complete lentamente com a água mineral com gás.', 30], ['Misturar', 'Mexa suavemente com a colher.', null]]
    },
    {
      title: 'Refresco de Capim-Santo (Erva-Cidreira) com Abacaxi Cetogênico (Aroma e Hortelã)',
      sub: 'refrescos', diff: 'easy', prep: 5, cook: 4, cal: 15, p: 0, c: 1, fib: 0, f: 0, prem: false,
      tags: ['capim-santo', 'erva-cidreira', 'hortelã', 'brasileiro', 'calmante'],
      tip: 'Bata o chá concentrado frio de capim-santo com bastante gelo e hortelã no liquidificador.',
      ings: [['Folhas frescas de capim-santo cortadas', 50, 'g', 'vegetais'], ['Água fervente', 300, 'ml', 'despensa'], ['Gotas de essência pura de abacaxi e hortelã', 3, 'gotas', 'temperos'], ['Gelo abundante e eritritol', 1, 'copo', 'despensa']],
      steps: [['Infundir folhas', 'Ferva o capim-santo por 3 minutos e coe.', 180], ['Bater com gelo', 'Bata o chá frio com o gelo, hortelã e aroma até espumar.', 60], ['Servir', 'Aprecie verde translúcido e perfumado.', null]]
    }
  ];

  return items.map((r) => ({
    title: r.title,
    shortDesc: `${r.title} ideal para hidratação nobre, energia mental e convívio social na dieta cetogênica.`,
    desc: `Bebida especialmente formulada sem adição de açúcares ocultos, mantendo baixíssimos carboidratos e micronutrientes revigorantes.`,
    category: 'drinks',
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
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80',
    ingredients: r.ings.map(([name, qty, unit, cat]) => ({ name, qty, unit, cat })),
    steps: r.steps.map(([title, desc, timer]) => ({ title, desc, timer })),
    chefTip: r.tip
  })).slice(0, 50);
}
