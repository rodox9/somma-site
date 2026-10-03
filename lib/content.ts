/* ============================================================
   SOMMA — conteúdo canônico (Manual de Marca v3 — 2026-06)
   "Inteligência de Resultado para o Mercado Imobiliário"
   Fonte: brands/somma/manual.md
   ============================================================ */

/* As 7 frentes (manual §6) — short = frase curta de card · kw = 3 palavras-chave */
export const services = [
  {
    id: "produto",
    n: "01",
    title: "Produto",
    short: "Leitura de mercado, praça, público e concorrência.",
    kw: ["Praça", "Público", "Concorrência"],
    desc: "Lemos mercado, praça, público e concorrência para o produto encontrar a leitura certa de mercado. Um bom produto precisa conversar com a realidade de compra.",
  },
  {
    id: "preco",
    n: "02",
    title: "Preço",
    short: "Preço como estratégia de margem, não custo de tijolo.",
    kw: ["Posicionamento", "Absorção", "Margem"],
    desc: "Tratamos preço como estratégia de margem — não custo de tijolo. Preço é posicionamento, velocidade, absorção e rentabilidade.",
  },
  {
    id: "comunicacao",
    n: "03",
    title: "Comunicação",
    short: "Ferramenta de convencimento, não estética.",
    kw: ["Mensagem", "Valor", "Decisão"],
    desc: "Comunicação como ferramenta de convencimento, não estética. Mensagens que ajudam o cliente a entender valor, reduzir dúvida e avançar na decisão.",
  },
  {
    id: "leads",
    n: "04",
    title: "Leads",
    short: "Jornada do primeiro interesse à oportunidade.",
    kw: ["Origem", "Qualidade", "Conversão"],
    desc: "Organizamos a jornada do lead do primeiro interesse à oportunidade. Lead sem governança vira volume; lead com método vira inteligência de venda.",
  },
  {
    id: "canais",
    n: "05",
    title: "Canais",
    short: "Imobiliárias, parceiros e digital com critério.",
    kw: ["Papel", "Ativação", "Rotina"],
    desc: "Estruturamos imobiliárias, parceiros e canais digitais com papel, critério, rotina e acompanhamento. Canal bom entende o produto e participa da estratégia.",
  },
  {
    id: "vendas",
    n: "06",
    title: "Vendas",
    short: "Método comercial para a operação ganhar ritmo.",
    kw: ["Rotina", "Argumento", "Meta"],
    desc: "Método comercial para a operação ganhar ritmo: rotina, argumento, acompanhamento, metas e correção de rota. Venda boa precisa de gente boa — e de sistema.",
  },
  {
    id: "governanca",
    n: "07",
    title: "Governança",
    short: "A camada que organiza o sistema inteiro.",
    kw: ["Indicador", "Rotina", "Responsabilidade"],
    desc: "Processos, indicadores e responsabilidades para a operação não depender da memória de uma pessoa. Não é burocracia: é clareza sobre quem decide e o que muda.",
  },
] as const;

/* Jornada de trabalho (dobra 6) */
export const journey = [
  { n: "01", title: "Diagnóstico", desc: "Lemos a operação inteira — mercado, produto, preço, canal, lead e gestão — para achar onde o resultado escapa." },
  { n: "02", title: "Estruturação", desc: "Organizamos as frentes em sistema: papéis, critérios, rotina e indicadores que sustentam decisão." },
  { n: "03", title: "Aplicação", desc: "Levamos a estratégia para a rotina. Método, argumento e gestão à vista entram na operação real." },
  { n: "04", title: "Correção de rota", desc: "Acompanhamos os indicadores e ajustamos o que o dado mostrar. Presença é estar onde a decisão acontece." },
] as const;

/* Clientes e operações atendidas (faixa de autoridade) */
export const clients = [
  { name: "HYPE INC", type: "Incorporadora", desc: "Uma das 100 maiores incorporadoras do Brasil" },
  { name: "ARTHAUS", type: "Incorporadora", desc: "Empreendimentos boutique em Penha, Santa Catarina" },
  { name: "A.GONÇALVES IMÓVEIS", type: "Imobiliária", desc: "Alto padrão e luxo em Curitiba · imóveis prontos" },
  { name: "TREE HAUS", type: "Imobiliária", desc: "Lançamentos focados em investidores" },
  { name: "VKR EMPREENDIMENTOS", type: "Incorporadora", desc: "RMC · do Minha Casa Minha Vida a condomínios de luxo" },
  { name: "BONAH INCORPORADORA", type: "Incorporadora", desc: "Família do agronegócio entrando na incorporação" },
  { name: "ARTESA CONSTRUTORA", type: "Construtora", desc: "17 anos de operação consistente em Curitiba" },
  { name: "H2B IMÓVEIS", type: "Imobiliária", desc: "Imobiliária com mix amplo de produtos" },
  { name: "FRESTA", type: "Empreendimento", desc: "Hype Living · empreendimento premiado no centro de Curitiba" },
  { name: "ALPHAVILLE", type: "Condomínios", desc: "A maior empresa de condomínios do Brasil" },
] as const;

/* Provas / autoridade (dobra 8) — números ilustrativos, substituir por reais */
export const proofs = [
  { value: "7", suffix: "", label: "frentes integradas como um sistema" },
  { value: "100", suffix: "%", label: "diagnóstico antes de qualquer proposta" },
  { value: "3", suffix: "", label: "forças por trás de cada entrega" },
] as const;

/* A fórmula SOMMA — método + dado + presença (manual §12–13) */
export const forces = [
  {
    title: "Método",
    desc: "Organiza o que muitas operações tratam como intuição. Dá clareza, ritmo e consistência. Sem método, a operação depende de talento individual.",
  },
  {
    title: "Dado",
    desc: "Qualifica decisão: concorrência, absorção, praça, perfil de comprador, velocidade de venda, precificação, origem e qualidade dos leads. Dado não é enfeite de relatório.",
  },
  {
    title: "Presença",
    desc: "Não atua de longe. Está próxima da operação, das decisões e das correções de rota. Presença é envolvimento técnico — estar onde a decisão acontece.",
  },
] as const;

/* A fórmula em frases (manual §13) */
export const formula = [
  "Método sem dado vira receita pronta.",
  "Dado sem presença vira relatório.",
  "Presença sem método vira boa vontade.",
] as const;

/* Estrutura de conteúdo / diagnóstico (manual §25) */
export const method = [
  {
    n: "01",
    title: "Verdade de mercado",
    desc: "Uma verdade da operação que o decisor reconhece de imediato.",
  },
  {
    n: "02",
    title: "Consequência",
    desc: "Por que isso importa — onde o negócio perde resultado.",
  },
  {
    n: "03",
    title: "Olhar da SOMMA",
    desc: "Método, dado ou governança aplicados sobre o problema.",
  },
  {
    n: "04",
    title: "Decisão",
    desc: "Uma ideia simples e prática que o cliente consegue levar para a operação.",
  },
] as const;

/* Valores (manual §14) */
export const values = [
  { n: "01", title: "Operação antes de discurso", desc: "Só promete o que consegue estruturar. Discurso bonito não substitui execução." },
  { n: "02", title: "Método é respeito", desc: "Processo protege tempo, dinheiro e energia. Improviso cobra caro depois." },
  { n: "03", title: "Dado antes de opinião", desc: "Intuição tem valor, mas decisão importante precisa de evidência." },
  { n: "04", title: "Comunicação como convencimento", desc: "Marketing organiza percepção, constrói valor e aproxima a decisão." },
  { n: "05", title: "Preço como estratégia de margem", desc: "Preço é posicionamento, velocidade, absorção e rentabilidade." },
  { n: "06", title: "Presença como produto", desc: "A SOMMA não entrega de longe. A proximidade faz parte do valor." },
  { n: "07", title: "Clareza acima de vaidade", desc: "Toda frase, entrega ou reunião precisa ajudar o cliente a entender melhor o negócio." },
] as const;

/* Personas (manual §20) */
export const personas = [
  {
    role: "Incorporadoras",
    context: "produto, capital e ambição",
    pain: "Bom produto, mas a operação não captura o valor no mercado.",
    fronts: ["Produto", "Preço", "Margem", "Praça", "Velocidade"],
    outcome: "Decisão comercial com leitura — produto que conversa com a realidade de compra.",
    desc: "Tem produto, terreno e visão. Precisa de clareza para decisões comerciais melhores.",
    quote: "Seu produto tem potencial. A operação precisa estar estruturada para capturar esse valor no mercado.",
  },
  {
    role: "Imobiliárias",
    context: "equipe, carteira e canal",
    pain: "Venda depende de talento individual; previsibilidade baixa.",
    fronts: ["Leads", "Rotina", "Conversão", "Canal", "Previsibilidade"],
    outcome: "Operação com método e ritmo — menos dependência de pessoas-chave.",
    desc: "Tem relacionamento e time. Precisa de método para ganhar previsibilidade.",
    quote: "Venda boa precisa de gente boa. Mas também precisa de sistema.",
  },
  {
    role: "Gestores comerciais",
    context: "no meio da pressão",
    pain: "Cobrança por resultado sem clareza de onde a venda trava.",
    fronts: ["Funil", "Equipe", "Indicador", "Meta", "Correção de rota"],
    outcome: "Gestão que conduz o resultado em vez de apagar incêndio.",
    desc: "Precisa entregar resultado, organizar time, responder números e ajustar rota.",
    quote: "Quando a operação tem clareza, a gestão deixa de apagar incêndio e passa a conduzir o resultado.",
  },
] as const;

export const stats = [
  { value: "7", suffix: "", label: "frentes em um sistema só", caption: "Produto · Preço · Comunicação · Leads · Canais · Vendas · Governança" },
  { value: "3", suffix: "", label: "forças que sustentam a entrega", caption: "Método · Dado · Presença" },
  { value: "1", suffix: "", label: "operação, não áreas soltas", caption: "As partes conversando entre si" },
] as const;

/* Casos / diagnósticos — espinha fixa: Contexto → Tensão → Leitura → Direção → Resultado.
   Anonimizados (tone Monocle: específico, mas sem expor cliente). */
export const caseSpine = [
  "Contexto",
  "Tensão",
  "Leitura",
  "Direção",
  "Resultado",
  "Próxima leitura",
] as const;

export const cases = [
  {
    slug: "canal-certo-leitura-errada",
    tag: "CANAIS · LEADS",
    meta: "INCORPORADORA · MÉDIO PORTE · 2025",
    title: "O canal estava certo. A leitura, não.",
    lede: "O gargalo não era mídia.",
    sections: {
      Contexto:
        "Incorporadora de médio porte, lançamento de um vertical na praça. Mídia rodando, leads entrando em volume, equipe comercial reclamando de lead frio.",
      Tensão:
        "A leitura corrente era 'o canal digital traz lead ruim'. A pressão recaía sobre marketing — mais verba, mais volume — sem que ninguém olhasse o que acontecia depois que o lead entrava.",
      Leitura:
        "Cruzando origem, perfil, atendimento e conversão, o padrão apareceu: o canal trazia o perfil certo, mas o tempo de primeiro atendimento passava de 6 horas e a distribuição não respeitava praça. O lead não era ruim — esfriava na operação.",
      Direção:
        "Reorganizamos a jornada do lead: SLA de atendimento, distribuição por aderência de praça e leitura de qualidade por canal. Comunicação e argumento comercial alinhados ao perfil real que convertia.",
      Resultado:
        "Sem aumentar verba de mídia, a conversão de lead em visita subiu e o custo por oportunidade caiu. A discussão deixou de ser 'quantos leads' e passou a ser 'quais leads avançam'.",
      "Próxima leitura":
        "Com a jornada estruturada, o próximo passo foi governança: indicadores e rotina para a operação não depender da memória do gestor.",
    },
  },
  {
    slug: "estoque-parado-causa-de-preco",
    tag: "PREÇO · PRODUTO",
    meta: "INCORPORADORA · ALTO PADRÃO · 2025",
    title: "Estoque parado tinha causa de preço.",
    lede: "Não era falta de demanda.",
    sections: {
      Contexto:
        "Empreendimento de alto padrão com absorção abaixo do esperado. A leitura interna era de mercado fraco e a saída cogitada era mais desconto.",
      Tensão:
        "Desconto linear protegia velocidade, mas comia margem e ainda sinalizava fraqueza de produto para o canal. Faltava entender se o problema era praça, produto ou tabela.",
      Leitura:
        "A leitura de praça mostrou demanda existente para o ticket — mas a tabela não conversava com a percepção de valor das unidades de maior estoque. O preço relativo entre tipologias estava invertido.",
      Direção:
        "Rebalanceamento de tabela por tipologia (não desconto geral), com argumento de valor ajustado e canal reorientado sobre as unidades certas. Preço tratado como estratégia de margem, não como conta de custo.",
      Resultado:
        "A absorção das unidades antes paradas voltou a se mover preservando margem — sem o desconto linear que estava na mesa.",
      "Próxima leitura":
        "O método de rebalanceamento virou rotina de revisão de tabela com gatilhos de velocidade e estoque.",
    },
  },
  {
    slug: "lead-cheio-venda-vazia",
    tag: "GOVERNANÇA · VENDAS",
    meta: "IMOBILIÁRIA · 2024",
    title: "Lead cheio, venda vazia.",
    lede: "Volume não é resultado.",
    sections: {
      Contexto:
        "Imobiliária com carteira ativa e bom relacionamento, mas previsibilidade baixa: meses bons e ruins sem explicação clara.",
      Tensão:
        "A operação comemorava volume de leads e atividade do time, mas a venda dependia de talento individual. Quando um corretor-chave saía, o resultado caía junto.",
      Leitura:
        "Sem gestão à vista, ninguém via onde a venda travava. O funil existia na planilha, não na rotina. O problema não era esforço — era falta de sistema.",
      Direção:
        "Implantamos governança comercial: indicadores, rituais de acompanhamento, critérios de canal e correção de rota semanal. Argumento e método de venda documentados, não na cabeça de uma pessoa.",
      Resultado:
        "A operação ganhou ritmo e previsibilidade. A gestão passou de apagar incêndio para conduzir o resultado.",
      "Próxima leitura":
        "Com a rotina rodando, o foco passou para qualidade de canal e ativação de parceiros.",
    },
  },
] as const;

/* Insights — exemplos do manual §22 */
export const insights = [
  {
    tag: "GOVERNANÇA",
    title: "Cinco sinais de que sua operação comercial precisa de mais governança",
    excerpt:
      "Quando a venda depende da memória de uma pessoa, o resultado vira sorte. Governança é clareza sobre quem decide, quem executa e o que precisa mudar.",
    date: "2026",
  },
  {
    tag: "PREÇO",
    title: "Preço não é custo de tijolo. É estratégia de margem",
    excerpt:
      "Posicionamento, velocidade, absorção e rentabilidade entram na conta antes do concorrente. Uma boa estratégia de preço ajuda o mercado a entender valor.",
    date: "2026",
  },
  {
    tag: "LEADS",
    title: "Lead bom não é o que entra. É o que a operação transforma em decisão",
    excerpt:
      "Muitas operações têm bons leads, mas pouca leitura sobre a qualidade deles. Sem isso, o time trata volume como resultado.",
    date: "2026",
  },
  {
    tag: "MERCADO",
    title: "O que a velocidade de venda de uma praça revela sobre preço e posicionamento",
    excerpt:
      "Absorção é leitura, não só número. A forma como uma praça vende diz onde o produto e o preço se desencontram.",
    date: "2026",
  },
] as const;
