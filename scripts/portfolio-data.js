/* ==========================================================================
   PORTFOLIO DATA ENGINE — 7 PRODUCTION PROJECTS, 9 PRODUCT FAMILIES & 15+ SCRIPTS
   100% Brand-Anonymized & Free of Proprietary Internal SKU Identifiers
   Aesthetic: Architectural Titanium & Smoked Quartz
   ========================================================================== */

window.PORTFOLIO_DATA = {
  pipelineNodes: [
    {
      id: "node-clickup",
      step: "ETAPA 01 • DEMANDA",
      title: "ClickUp & Fila de Coleções",
      desc: "Abertura de lotes de vestuário (50+ modelos × 7 tamanhos) e itens de revenda.",
      projectsInvolved: ["Projeto #1: Hook Prime", "Projeto #6: ClickUp → Hub Bridge v3.2"],
      payloadPreview: "SSE Stream Ativo • Sincronização Contínua • Lote: 50 Modelos UV50+ (PP ao G4) → 1.050 SKUs gerados na fila"
    },
    {
      id: "node-smb",
      step: "ETAPA 02 • REDE & MÍDIA",
      title: "Servidor SMB + Cloudflare R2",
      desc: "Smart Scan em 8 cascatas (+50.000 arquivos), proteção de 57 pastas e upload CDN.",
      projectsInvolved: ["Projeto #1: Hook Prime", "Projeto #4: Central de Descrições (Bunker R2)"],
      payloadPreview: "Network Safety Guard: 57 pastas blindadas (Read-Only) • Compressão Sharp → Upload Cloudflare R2 CDN"
    },
    {
      id: "node-erp",
      step: "ETAPA 03 • ENGENHARIA ERP",
      title: "Sankhya ERP & Bling ERP",
      desc: "Padronização Ouro (45/59 colunas), fatiamento SQL, fotos por variante e seleção automática.",
      projectsInvolved: [
        "Projeto #1: Hook Prime",
        "Projeto #2: Sankhya Data Suite v17.0",
        "Projeto #3: Injetor Automático de Fotos Sankhya v18",
        "Projeto #6: Bling Fetch Intercept v16 & Sankhya Editor v4.5"
      ],
      payloadPreview: "Sankhya 45 Colunas + Bling 59 Colunas • 16.987 SKUs mapeados com foto • Lotes SQL de 3.000+ produtos"
    },
    {
      id: "node-magis5",
      step: "ETAPA 04 • HUB & ESTOQUE",
      title: "Hub Magis5 & Marketplaces",
      desc: "Scanner Fabricação Própria vs Revenda, Estoque Infinito (1000) e sincronia multi-canal.",
      projectsInvolved: [
        "Projeto #6: Autopilot Magis5 + Sankhya API Turbo v7.5",
        "Projeto #6: Estoque Infinito Autopilot Magis5",
        "Projeto #6: Sincronizador Amazon v7.1"
      ],
      payloadPreview: "Scanner Híbrido: Fabricação Própria (Sublimação = Saldo 1000 automático) vs Revenda Multimarcas (Saldo físico real)"
    },
    {
      id: "node-shopify",
      step: "ETAPA 05 • VITRINE 3 LOJAS",
      title: "3 Lojas Shopify (+25.295 SKUs)",
      desc: "Pesca Esportiva, Agro/Campo e Off-Road/Velocidade vigiadas em tempo real.",
      projectsInvolved: [
        "Projeto #4: Central Mestre de Descrições & Vigilante v5.0",
        "Projeto #5: Catana Ops (Shopify Catalog-Ops)",
        "Projeto #6: Shopify Verificador de Estoque v4.6"
      ],
      payloadPreview: "25.295 SKUs Monitorados (12.582 Pesca | 5.955 Agro | 6.758 Off-Road) • 9 Arquétipos HTML em 3 Atos"
    },
    {
      id: "node-ads",
      step: "ETAPA 06 • CRO & TRÁFEGO",
      title: "Blindagem de Mídia & CRO",
      desc: "Auditoria de +39.696 SKUs, detecção de Estoque Fantasma e proteção de ROAS.",
      projectsInvolved: ["Projeto #7: AdShield / LeakFinder (18 Agentes IA)"],
      payloadPreview: "Protocolo Anti-Estoque Fantasma (4 Camadas) • Reconciliação ERP ↔ Hub ↔ Loja • Proteção de Grade Central (M/G e 38-41)"
    }
  ],

  productFamilies: [
    {
      id: "fam-uv50",
      index: "01",
      badge: "Fabricação Própria • Grade PP ao G4",
      title: "Vestuário Técnico UV50+ & Sublimação Total (_FULL)",
      examples: "Camisas técnicas de pesca esportiva com proteção solar extrema UV50+ certificada, linha de alta performance, tecidos dry-fit antibacterianos de secagem ultrarrápida, punho elástico e gola padre/zíper.",
      engineering: "Multiplicação automatizada de matrizes: 50+ estampas × 7 tamanhos (PP ao G4/XG) × 3 modelagens (Masculino, Feminino, Infantil) = 1.050+ SKUs por lote, com regra de produção sob demanda (_FULL) isenta de falsos-positivos de ruptura."
    },
    {
      id: "fam-offroad",
      index: "02",
      badge: "Fabricação Própria • Alta Abrasão",
      title: "Vestuário Off-Road, Motocross & Velocidade",
      examples: "Jerseys técnicas de trilha, enduro, motocross e ciclismo/velocidade com painéis de ventilação estratégica, modelagem alongada nas costas e tecido resistente a galhos e abrasão.",
      engineering: "Padronização de fichas técnicas esportivas, cruzamento automático com planilhas de Altura/Peso/Medidas por modelagem e injeção de fotos de estúdio variante por variante no ERP e na Shopify."
    },
    {
      id: "fam-agro",
      index: "03",
      badge: "Fabricação & Linha Casual • Campo",
      title: "Vestuário Agro, Campo & Linha Casual (Algodão)",
      examples: "Camisas polo bordadas, camisetas casuais em algodão premium fio penteado, camisas xadrez e vestuário resistente para trabalho rural, pecuária e rotina outdoor.",
      engineering: "Classificação determinística de grupos de produto (CODGRUPOPROD) no ERP Sankhya e distinção imediata entre grade regular em estoque físico (P ao GG) e itens de fabricação contínua."
    },
    {
      id: "fam-calcados",
      index: "04",
      badge: "Grade Numérica • 34 ao 44",
      title: "Calçados, Botinas de Couro & Sandálias Técnicas",
      examples: "Botinas de couro legítimo para campo/agro, sandálias técnicas antiderrapantes para pesca embarcada e caiaque, construídas em polímero impermeável de alta densidade com palmilha anatômica.",
      engineering: "Gestão de grade numérica completa (34 ao 44), monitoramento prioritário da curva central de giro (tamanhos 38 ao 41) e aplicação automática de tabelas de medidas de palmilha em centímetros."
    },
    {
      id: "fam-chapelaria",
      index: "05",
      badge: "Controle Anti-Estoque Fantasma",
      title: "Chapelaria, Bonés Trucker & Proteção de Cabeça",
      examples: "Bonés Trucker estruturados (sarja, denim estonado, tela respirável e patches bordados em alto relevo), chapéus australianos com protetor de nuca destacável e viseiras UV.",
      engineering: "Auditoria rigorosa de fidelidade visual entre criativo de anúncio e variante enviada, além de bloqueio contra Estoque Fantasma (backorder ativo sem saldo físico real no galpão)."
    },
    {
      id: "fam-acessorios",
      index: "06",
      badge: "Regra Automática • Tamanho Único",
      title: "Acessórios de Proteção Solar (Tamanho Único)",
      examples: "Bandanas tubulares multifuncionais (Tubeneck UV50+), manguitos de compressão solar, luvas técnicas de pesca sem dedos com reforço palmar, meias térmicas e cintos.",
      engineering: "Reconhecimento semântico automático de itens de Tamanho Único para isenção de alertas de grade quebrada e geração de cargas massivas de 59 colunas para o Bling em segundos."
    },
    {
      id: "fam-pesca",
      index: "07",
      badge: "Revenda Multimarcas • Alta Especificação",
      title: "Equipamentos de Pesca Esportiva (Revenda)",
      examples: "Carretilhas de perfil baixo (manivela direita/esquerda), molinetes, varas de carbono tubular/maciço, linhas multifilamento e fluorocarbon, iscas artificiais (hélice, meia-água, superfície), anzóis e alicates.",
      engineering: "Estruturação técnica de milhares de SKUs multimarcas com parâmetros precisos de capacidade de linha, rolamentos, drag máximo (freio em kg/lb), relação de recolhimento e peso de arremesso."
    },
    {
      id: "fam-organizacao",
      index: "08",
      badge: "Dimensões Exatas • Polímero UV",
      title: "Caixas, Estojos Modulares & Organização",
      examples: "Maletas de pesca de múltiplos andares, estojos organizadores duplos com divisórias modulares removíveis, travas de segurança de alta pressão e polímero com aditivo UV.",
      engineering: "Aplicação automatizada de molde técnico em 3 Atos destacando dimensões milimétricas (Largura × Profundidade × Altura), resistência mecânica a impactos e modularidade interna."
    },
    {
      id: "fam-cutelaria",
      index: "09",
      badge: "Inox/Carbono & Retenção Térmica",
      title: "Cutelaria Artesanal & Equipamentos Térmicos",
      examples: "Facas artesanais em aço inox e aço carbono para churrasco/caça/pesca, canivetes táticos, chairas, caixas térmicas robustas, coolers e garrafas térmicas de parede dupla a vácuo.",
      engineering: "Narrativas de conversão técnicas focadas em têmpera da lâmina, espessura do dorso, bainha em couro legítimo, isolamento em poliuretano injetado e horas de retenção de gelo."
    }
  ],

  projects: [
    {
      id: "proj-hook-prime",
      rank: "PROJETO #1 • CARRO-CHEFE DE ENGENHARIA",
      accentColor: "#d6b87c",
      secondaryColor: "#64748b",
      name: "HOOK PRIME",
      subtitle: "Sistema Enterprise End-to-End de Automação de Cadastro Têxtil, Rede SMB & Exportação ERP",
      summary: "Plataforma full-stack (Node.js/Express + TypeScript + React) que transformou o processo mais demorado da operação — o cadastro de coleções inteiras de vestuário técnico e acessórios — em uma linha de montagem automatizada, segura e conectada ao ClickUp, ao servidor de rede local SMB e ao Cloudflare R2.",
      kpis: [
        { val: "~23.000", lbl: "Linhas de Código em Produção (60 arquivos)" },
        { val: "1.050+", lbl: "SKUs Gerados por Lote (50 modelos × 7 tam × 3 mod)" },
        { val: "57 Pastas", lbl: "Blindadas pelo Network Safety Guard na Rede SMB" },
        { val: "59 / 45", lbl: "Colunas Exportadas (Padrão Bling 59 & Sankhya 45)" }
      ],
      stack: ["Node.js + Express", "TypeScript", "React 18 + Vite", "ClickUp SSE", "Sharp Image Engine", "Cloudflare R2 (AWS S3 SDK)", "SMB Network Scanner", "XLSX / CSV Engine"],
      painPoints: [
        "Cadastrar manualmente uma coleção nova de camisas UV50+ ou jerseys (50 modelos × 7 tamanhos PP ao G4 × 3 modelagens Masculino/Feminino/Infantil = 1.050+ SKUs) consumia dias inteiros da equipe.",
        "Era preciso procurar fotos manualmente dentro de um servidor de rede local (SMB/CIFS) com mais de 50.000 arquivos distribuídos em dezenas de subpastas.",
        "Comprimir fotos pesadas, subir para nuvem, copiar links de cada imagem, criar títulos de SEO sem repetir palavras e preencher 59 colunas do Bling ou 45 colunas do Sankhya gerava alto risco de erro humano."
      ],
      solutions: [
        "Integração ClickUp via SSE (Server-Sent Events): lê as tarefas de cadastro em tempo real e injeta os modelos na fila do Hub local com 1 clique.",
        "Smart Scan em 8 Cascatas + Network Safety Guard: localiza automaticamente as fotos de cada modelo no servidor local enquanto blinda 57 pastas críticas da empresa contra qualquer escrita ou exclusão acidental.",
        "Pipeline Cloud de Imagens: comprime mídias em lote via biblioteca Sharp e realiza upload paralelo com auto-retry para o Cloudflare R2 CDN.",
        "Motor SEO (+140 termos) + Cruzamento de Medidas: gera títulos técnicos únicos para Pesca, Agro e Off-Road, lê a planilha de Altura/Peso/Medidas e exporta o CSV final pronto para Bling (59 col) e Sankhya (45 col)."
      ],
      archSteps: [
        { num: "01 • CLICKUP STREAM", title: "Ingestão SSE & Fila", desc: "Monitora tasks do ClickUp em tempo real via Server-Sent Events e extrai modelos, categorias e prioridades." },
        { num: "02 • 8-CASCADE SCAN", title: "Busca SMB + Guard", desc: "Varre o servidor local em 8 níveis de fallback, validado pelo Network Safety Guard (57 diretórios protegidos)." },
        { num: "03 • SHARP + R2 CDN", title: "Otimização & Upload", desc: "Converte e comprime fotos de estúdio em alta velocidade via Sharp e publica no bucket Cloudflare R2." },
        { num: "04 • MATRIX ENGINE", title: "SEO + Medidas + CSV", desc: "Multiplica grades (PP–G4), cruza medidas físicas e gera os pacotes Bling (59 col) e Sankhya (45 col)." }
      ],
      codeFilename: "hook-prime / server.js & modules/network-safety-guard.js",
      codePreview: `// [HOOK PRIME] Pipeline End-to-End: ClickUp -> Smart Scan 8 Cascatas -> Sharp/R2 -> CSV 59/45 Colunas
async function executeAutopilotBatch(taskPayload) {
  // 1. Validação estrita do Network Safety Guard (57 pastas críticas blindadas em modo Read-Only)
  NetworkSafetyGuard.assertSafeReadOnlyPath(taskPayload.networkSourceDir);

  // 2. Smart Scan em 8 Cascatas no Servidor SMB (+50.000 arquivos indexados)
  const matchedAssets = await SmartScanner.findProductPhotosWithCascade(taskPayload.baseModels, {
    cascades: 8,
    strictAlphanumericBoundary: true
  });

  // 3. Compressão Sharp + Upload Paralelo para Cloudflare R2 CDN com Retry Exponencial
  const cdnUrlsByModel = await R2MediaPipeline.compressAndUploadBatch(matchedAssets, { quality: 88 });

  // 4. Multiplicação de Grade (PP ao G4 x Masc/Fem/Inf) + Motor SEO (+140 Termos) + Medidas
  return CatalogExporter.buildEnterpriseMatrices({
    models: taskPayload.baseModels,
    cdnMap: cdnUrlsByModel,
    formats: ['BLING_59_COLS', 'SANKHYA_45_COLS']
  });
}`,
      productExamples: [
        "Lotes de 50+ modelos de Camisas de Pesca UV50+ desdobrados automaticamente em Masculino, Feminino e Infantil (PP ao G4).",
        "Geração massiva de Bandanas Tubulares (Tubeneck UV50+), Manguitos e Luvas de Pesca com detecção automática de Tamanho Único.",
        "Jerseys Off-Road/Motocross e Camisas Polo/Algodão Agro com cruzamento exato da planilha de Altura, Peso e Medidas."
      ],
      hasMatrixSimulator: true
    },

    {
      id: "proj-sankhya-suite",
      rank: "PROJETO #2 • ENGENHARIA DE DADOS & ERP",
      accentColor: "#d6b87c",
      secondaryColor: "#64748b",
      name: "SANKHYA DATA SUITE (Enterprise v17.0)",
      subtitle: "Plataforma Web em Python/Streamlit para Padronização Ouro, Conversão Sankhya ↔ Bling, Cruzamento ERP & Gerador SQL",
      summary: "Suíte de engenharia de dados na nuvem utilizada simultaneamente pela equipe de cadastro para eliminar rejeições de carga no ERP Sankhya, converter cadastros entre Bling e Sankhya, auditar divergências de banco e fatiar comandos SQL para o DbExplorer.",
      kpis: [
        { val: "v17.0", lbl: "Enterprise Edition em Produção (Streamlit Cloud)" },
        { val: "3.000+", lbl: "Produtos Fatiados por Lote no Gerador SQL DbExplorer" },
        { val: "7 Módulos", lbl: "Formatador, Conversor, Cruzador, SQL, SKUs, Medidas & Debug" },
        { val: "100%", lbl: "Fidelidade Semântica de CODGRUPOPROD (Dicionário Completo)" }
      ],
      stack: ["Python 3.11+", "Streamlit Cloud", "Pandas Dataframes", "OpenPyXL", "Regex Engine", "SQL Batch Generator", "UTF-8 / BOM Inspector"],
      painPoints: [
        "O ERP Sankhya exige estrutura estrita de colunas, hierarquia Pai/Filho impecável e códigos de grupo (CODGRUPOPROD) exatos; qualquer caractere invisível ou coluna deslocada derrubava a importação inteira.",
        "A operação precisava transitar cadastros entre o padrão histórico do Bling e o padrão do Sankhya sem perder NCM, CEST, origem fiscal, pesos ou vínculos de grade.",
        "Consultas e atualizações no DbExplorer do Sankhya travavam quando executadas manualmente para milhares de SKUs de uma só vez."
      ],
      solutions: [
        "Formatador Padrão Ouro (formatador_sniper.py): converte planilhas brutas Pai/Filho para as 26/45 colunas oficiais do Sankhya com validação automática de campos obrigatórios.",
        "Conversor Bidirecional Sankhya ↔ Bling (conversor_sankhya_bling.py): utiliza o motor DICIONARIO COMPLETO para classificar automaticamente o CODGRUPOPROD correto a partir da semântica do produto.",
        "Cruzador Padrão Ouro (cruzador_padrao_ouro.py): confronta a planilha de entrada com a exportação real do Sankhya e aponta em segundos o que já existe, o que falta cadastrar e onde há divergência.",
        "Gerador SQL (gerador_sql.py) & Debug Bancada: fatia mais de 3.000 produtos em blocos SQL otimizados para o DbExplorer e inspeciona bytes/encoding linha a linha."
      ],
      archSteps: [
        { num: "01 • INGESTÃO PANDAS", title: "Sanitização & BOM", desc: "Remove caracteres ocultos, normaliza UTF-8/Latin-1 e preserva zeros à esquerda em referências e EANs." },
        { num: "02 • DICIONÁRIO ERP", title: "Auto-CODGRUPOPROD", desc: "Mapeia automaticamente grupos de Vestuário, Calçados, Chapelaria, Pesca, Cutelaria e Térmicos." },
        { num: "03 • CRUZADOR OURO", title: "Diff Planilha × ERP", desc: "Compara milhares de linhas em memória contra a base ativa do Sankhya antes da importação." },
        { num: "04 • SQL SLICER", title: "Lotes DbExplorer", desc: "Gera scripts SQL parametrizados e fatiados para execução imediata e segura no banco do ERP." }
      ],
      codeFilename: "DATA-SUITE-SANKHYA / modulos/formatador_sniper.py & gerador_sql.py",
      codePreview: `# [SANKHYA DATA SUITE v17.0] Classificação Semântica de Grupo ERP & Fatiamento SQL DbExplorer
def processar_lote_padrao_ouro(df_bruto: pd.DataFrame, dicionario_grupos: dict) -> pd.DataFrame:
    df = sanitizar_encoding_e_preservar_identificadores(df_bruto)
    
    # Atribuição determinística de CODGRUPOPROD via Dicionário Completo da Operação
    df['CODGRUPOPROD'] = df['DESCRPROD'].apply(
        lambda nome: classificar_grupo_sankhya(nome, dicionario_grupos)
    )
    
    # Validação de integridade Pai/Filho (Grades PP-G4 e Numeração 34-44)
    validar_hierarquia_pai_variante(df)
    return formatar_colunas_oficiais_sankhya(df)

def gerar_blocos_sql_dbexplorer(referencias: list[str], chunk_size: int = 950) -> list[str]:
    return [montar_query_otimizada_sankhya(referencias[i:i + chunk_size]) for i in range(0, len(referencias), chunk_size)]`,
      productExamples: [
        "Conversão de lotes mistos contendo Camisas UV50+, Botinas de Couro (34 ao 44), Carretilhas e Caixas Organizadoras do Bling para o Sankhya.",
        "Auditoria de pré-carga de 3.000+ SKUs de vestuário e acessórios de pesca contra o relatório ativo do DbExplorer.",
        "Padronização de tabelas de medidas e substituição em massa de referências legadas via módulo Trocador de SKUs."
      ]
    },

    {
      id: "proj-injetor-fotos",
      rank: "PROJETO #3 • AUTOMAÇÃO VISUAL & BYPASS DE LIMITAÇÕES ERP",
      accentColor: "#d6b87c",
      secondaryColor: "#64748b",
      name: "MÓDULO DE IMAGENS & INJETOR AUTOMÁTICO SANKHYA ERP (v18)",
      subtitle: "Mega Downloader de 16.987 SKUs (2.596 Modelos), Servidor Local CORS e Injeção Automática de Fotos por Variante sem API do TI",
      summary: "Solução de engenharia reversa limpa criada quando o ERP Sankhya possuía milhares de produtos sem foto e não havia API REST liberada pelo TI para upload em massa nas variações (PP, P, M, G, GG, XG). Combina extração massiva das 3 lojas Shopify, servidor Python local e um motor de automação de browser de 136 KB.",
      kpis: [
        { val: "16.987", lbl: "SKUs Mapeados na Matriz De/Para Oficial" },
        { val: "2.596", lbl: "Fotos de Modelos em Alta Resolução no Servidor Local" },
        { val: "136.5 KB", lbl: "Motor de Automação v18 com Paginação Completa" },
        { val: "100%", lbl: "Precisão de Vinculação entre Produto Pai e Variantes" }
      ],
      stack: ["Python Mega Downloader", "HTTP Local Server + CORS", "Watchdog Auto-Heal Daemon", "Userscript Automation (136.5 KB)", "Strict Token Isolation", "DOM Pagination Bypass"],
      painPoints: [
        "Milhares de SKUs e variações cadastrados no Sankhya estavam sem imagem, prejudicando a conferência visual na expedição, compras e integrações.",
        "Subir foto manualmente no Sankhya exigia entrar produto por produto, abrir a aba de variações, percorrer página por página da grade (P, M, G, GG, XG) e anexar o arquivo local.",
        "A paginação nativa da grade no Sankhya Web ocultava variações iniciais ou finais (como o tamanho P ou G4), e buscas parciais nativas do ERP podiam misturar referências numéricas parecidas ou tamanhos compostos."
      ],
      solutions: [
        "Mega Downloader Shopify (baixar_todas_fotos_shopify.py): varre as 3 lojas Shopify via API, baixa 2.596 fotos oficiais e gera o mapa de_para_skus_modelos.csv cobrindo 16.987 SKUs.",
        "Servidor Local de Alta Velocidade (servidor_fotos_local.py + watchdog_servidor.py): entrega os binários de imagem via localhost com headers CORS liberados e reinício automático em caso de queda.",
        "Isolamento Estrito de Delimitadores: valida exatamente a raiz do modelo e o sufixo de tamanho antes de injetar a imagem, impedindo que tamanhos compostos (como G e GG) ou referências próximas colidam.",
        "Bypass de Paginação + Retomada Inteligente: percorre automaticamente todas as páginas da grade de variações (garantindo 100% de cobertura do PP ao G4), grava a foto e salva o estado da fila em tempo real."
      ],
      archSteps: [
        { num: "01 • SHOPIFY SCRAPER", title: "16.987 SKUs Mapeados", desc: "Extrai imagens oficiais das 3 lojas e vincula cada variante ao seu modelo base (2.596 fotos em alta resolução)." },
        { num: "02 • LOCAL CORS SERVER", title: "Entrega em <5ms", desc: "Servidor Python local com Watchdog serve os binários de imagem diretamente para a sessão do navegador." },
        { num: "03 • PAGINATION BYPASS", title: "Varredura Total da Grade", desc: "Desbloqueia todas as páginas da aba de derivados no Sankhya para nunca omitir tamanhos das pontas (PP/P ou G4)." },
        { num: "04 • VARIANT INJECTOR", title: "Injeção & Persistência", desc: "Anexa o binário em cada variação, confirma a gravação no banco e avança automaticamente na fila." }
      ],
      codeFilename: "INJETOR DE FOTOS SANKHYA / servidor_fotos_local.py & motor_injecao_variantes.js",
      codePreview: `// [INJETOR AUTOMÁTICO SANKHYA v18] Varredura Completa de Paginação & Injeção Local via CORS
async function syncModelPhotosAcrossAllVariantPages(modelEntry, localServerUrl) {
  // 1. Busca o binário em alta resolução direto do Servidor Python Local (<5ms via localhost CORS)
  const imageBlob = await LocalMediaClient.fetchModelBinary(localServerUrl, modelEntry.modelKey);

  // 2. Percorre todas as páginas da grade de variações (garantindo cobertura total do PP ao G4 / 34 ao 44)
  const allVariantRows = await SankhyaGridPagination.collectAllPagesWithoutOmission();

  for (const row of allVariantRows) {
    if (VariantValidator.isExactFamilyAndSizeMatch(row, modelEntry)) {
      await SankhyaDomUploader.injectImageBlobIntoVariantRow(row, imageBlob);
      QueueStateStore.markVariantSynchronized(row.variantId);
    }
  }
}`,
      productExamples: [
        "Injeção automatizada de fotos nas grades completas (PP ao G4) de Camisas de Pesca UV50+ e Jerseys Off-Road no Sankhya.",
        "Vinculação precisa de imagens em Bonés Trucker, Botinas de Couro (34 ao 44), Sandálias e Acessórios UV.",
        "Recuperação automática de fila (checkpoint persistente) permitindo rodar lotes de milhares de SKUs sem intervenção humana."
      ],
      hasImageBatchSimulator: true
    },

    {
      id: "proj-central-descricoes",
      rank: "PROJETO #4 • GOVERNANÇA DE CONTEÚDO & MONITORAMENTO 24/7",
      accentColor: "#d6b87c",
      secondaryColor: "#64748b",
      name: "CENTRAL MESTRE DE DESCRIÇÕES & VIGILANTE MULTI-LOJAS SHOPIFY (v5.0)",
      subtitle: "Monitoramento em Tempo Real de 25.295 SKUs nas 3 Lojas Shopify, Motor de 9 Arquétipos em 3 Atos & Cloudflare Bunker CDN",
      summary: "Ecossistema Python CLI + Interface Web Modular v5.0 que vigia continuamente 5.105 produtos (25.295 SKUs) nas 3 lojas virtuais da operação (Pesca Esportiva, Agro/Campo e Off-Road/Motors), eliminando imagens quebradas de servidores antigos e aplicando descrições técnicas de alta conversão.",
      kpis: [
        { val: "25.295", lbl: "SKUs Vigiados em Tempo Real nas 3 Lojas Shopify" },
        { val: "5.105", lbl: "Produtos Auditados (Pesca 12.582 | Agro 5.955 | Motors 6.758 SKUs)" },
        { val: "9 Moldes", lbl: "Arquétipos Técnicos em 3 Atos de Alta Conversão" },
        { val: "Segundos", lbl: "Latência de Detecção de Produtos Novos sem Descrição" }
      ],
      stack: ["Python 3.11 CLI & Daemon", "Shopify Admin API (REST/GraphQL)", "Cloudflare Worker + R2 Bunker", "HTML5 Scoped Template Engine", "Dry-Run Safety Lock", "Regression Test Suite"],
      painPoints: [
        "Manter a qualidade visual e técnica de 25.295 SKUs distribuídos em 3 lojas Shopify distintas era inviável manualmente.",
        "Centenas de produtos antigos sofriam com imagens quebradas no meio da descrição (hospedadas em buckets legados da AWS S3 desativados ou links externos proibidos como Google Drive, Mercado Livre e Shopee).",
        "Produtos recém-cadastrados frequentemente entravam no ar apenas com título e preço, derrubando a taxa de conversão e gerando dúvidas no suporte."
      ],
      solutions: [
        "Vigilante em Tempo Real (realtime_sync.py & daily_sentinel.py): detecta em segundos qualquer produto novo publicado nas 3 lojas sem descrição ou com link de imagem morto.",
        "Motor de 9 Arquétipos em 3 Atos (template_engine.py): identifica automaticamente se o produto é Camisa UV50+, Jersey Off-Road, Camisa Agro, Calçado/Sandália, Boné Trucker, Caixa Organizadora, Equipamento de Pesca, Térmico ou Cutelaria e gera o HTML completo com paleta adaptada à loja.",
        "Modo Cirúrgico A vs Modo Completo B: permite trocar apenas as URLs quebradas da AWS S3 pelas URLs novas do Cloudflare R2 preservando o texto histórico (Modo A), ou reconstruir a página inteira em 3 Atos (Modo B).",
        "Integração Direta com Cloudflare Bunker & Shopify Admin API: injeta mídias nas 3 posições oficiais e atualiza exclusivamente o campo body_html com trava Dry-Run."
      ],
      archSteps: [
        { num: "01 • SENTINELA 3 LOJAS", title: "Varredura 25.295 SKUs", desc: "Monitora continuamente as lojas de Pesca (12.582), Agro (5.955) e Off-Road (6.758) via API nativa." },
        { num: "02 • LINK SANITIZER", title: "Expurgo AWS S3 Legado", desc: "Detecta imagens quebradas (HTTP 403/404) e domínios externos banidos dentro do body_html." },
        { num: "03 • 9 ARQUÉTIPOS 3 ATOS", title: "Copywriting Técnico", desc: "Monta narrativa visual em 3 Atos com ícones SVG e paleta semântica adaptada a cada vertical." },
        { num: "04 • BUNKER + PUBLISH", title: "Cloudflare R2 & Sync", desc: "Hospeda mídias definitivas no Bunker R2 e publica na Shopify com backup prévio do HTML original." }
      ],
      codeFilename: "DESCRIÇOES / src/template_engine.py & src/shopify_direct_sync.py",
      codePreview: `# [CENTRAL MESTRE DE DESCRIÇÕES v5.0] Detecção dos 9 Arquétipos & Atualização Cirúrgica Shopify
ARQUETIPOS_OPERACAO = {
    "VESTUARIO_UV50":     {"atos": 3, "destaque": "Proteção Solar UV50+ & Secagem Rápida"},
    "JERSEY_OFFROAD":     {"atos": 3, "destaque": "Ventilação Estratégica & Alta Abrasão"},
    "VESTUARIO_AGRO":     {"atos": 3, "destaque": "Conforto Algodão Premium & Durabilidade"},
    "CALCADOS_BOTINAS":   {"atos": 3, "destaque": "Solado Antiderrapante & Palmilha Anatômica"},
    "EQUIPAMENTOS_PESCA": {"atos": 3, "destaque": "Precisão Mecânica, Drag & Recolhimento"}
}

def sincronizar_descricao_shopify(store_client, product_id: int, novo_body_html: str, dry_run: bool = False):
    validar_ausencia_de_links_proibidos_ou_aws_legado(novo_body_html)
    if dry_run:
        return {"status": "DRY_RUN_OK", "product_id": product_id}
    # Atualiza estritamente o campo body_html sem tocar em preço, estoque ou SKU
    return store_client.update_product_body_html_only(product_id=product_id, body_html=novo_body_html)`,
      productExamples: [
        "Padronização em 3 Atos de Camisas de Pesca UV50+, Jerseys de Motocross e Camisas Polo/Algodão nas 3 lojas.",
        "Fichas técnicas estruturadas para Carretilhas, Molinetes, Varas de Carbono, Iscas Artificiais e Linhas Multifilamento.",
        "Descrições ricas para Facas Artesanais, Caixas Térmicas/Coolers, Maletas Organizadoras Modulares e Sandálias Impermeáveis."
      ]
    },

    {
      id: "proj-catana-ops",
      rank: "PROJETO #5 • MOTOR DETERMINÍSTICO DE CATÁLOGO & QA",
      accentColor: "#d6b87c",
      secondaryColor: "#64748b",
      name: "CATANA OPS (SHOPIFY / Catalog-Ops)",
      subtitle: "Motor Determinístico TypeScript + SQLite Local para Preparação, Normalização e QA de Catálogos de Vestuário na Shopify",
      summary: "Arquitetura enxuta em TypeScript puro (5 módulos nucleares + SQLite nativo + 27 testes automatizados) projetada para transformar planilhas industriais complexas (Bling 59 colunas, Sankhya 45 colunas e tabelas Excel de medidas com células mescladas) em pacotes Shopify Drafts CSV 100% auditáveis.",
      kpis: [
        { val: "3 Schemas", lbl: "Homologados: Bling 59, Sankhya 45 & Shopify Drafts CSV" },
        { val: "8 Papéis", lbl: "Orquestração Serial com Gate de QA Independente" },
        { val: "27 Testes", lbl: "Suíte Automatizada (Unitários, Contrato & E2E HTTP/CLI)" },
        { val: "SQLite WAL", lbl: "Persistência Local Auditável com Backup Atômico" }
      ],
      stack: ["TypeScript (Node Native Strip-Types)", "SQLite Local (node:sqlite WAL)", "JSON Schema Contracts", "XLSX Merged-Cell Parser", "8-Role Serial Agent Pipeline", "Zero External Runtime Bloat"],
      painPoints: [
        "Planilhas vindas de ERPs e fornecedores chegam com ponto-e-vírgula, BOM UTF-8, células mescladas de medidas e risco constante de o Excel remover zeros à esquerda de códigos e GTINs/EANs.",
        "Ferramentas genéricas baseadas apenas em prompts de IA podem inventar atributos fiscais, alterar preços decimais ou quebrar a relação entre produto Pai e suas variantes.",
        "Faltava um ambiente local com histórico imutável de revisões onde cada pacote de catálogo só pudesse ser liberado após passar por um gate determinístico de QA."
      ],
      solutions: [
        "Núcleo Determinístico Puro (src/catalog.ts & src/formats.ts): valida rigorosamente a assinatura dos 59 cabeçalhos do Bling e 45 do Sankhya, preserva identificadores como texto puro e bloqueia preços ambíguos.",
        "Parser de Tabelas de Medidas com Células Mescladas: lê arquivos .xlsx reais de confecção, reconstrói os blocos por modelo/tamanho e anexa as medidas exatas ao cadastro.",
        "Persistência SQLite com Auditoria Completa (src/store.ts): salva os arquivos brutos originais em disco, registra cada revisão de pacote e permite backup atômico com 1 comando.",
        "Orquestração Serial de 8 Papéis Lógicos (src/agents.ts): Pesquisa, Qualificação, Atendimento, Planejador de Perfil, Produtor Determinístico, QA Independente, Financeiro e Coordenador."
      ],
      archSteps: [
        { num: "01 • SCHEMA GATE", title: "Contratos 59 & 45 Col", desc: "Verifica ordem, presença e assinatura exata de todas as colunas antes de iniciar qualquer transformação." },
        { num: "02 • NORMALIZER", title: "Pai/Variante & Medidas", desc: "Preserva zeros à esquerda, interpreta células mescladas de XLSX e separa Pai de Variantes com precisão." },
        { num: "03 • 8-ROLE QA GATE", title: "Auditoria de Fatos", desc: "O papel de QA confere se a saída respeita estritamente os dados aprovados, bloqueando desvios." },
        { num: "04 • SQLITE + EXPORT", title: "Pacote Shopify CSV", desc: "Grava trilha de auditoria imutável no SQLite e exporta o CSV de rascunhos pronto para a Shopify." }
      ],
      codeFilename: "SHOPIFY / src/catalog.ts & src/agents.ts (Catana Ops Core)",
      codePreview: `// [CATANA OPS] Validação Determinística de Cabeçalhos ERP & Gate de QA Independente
export function validateOfficialErpSchema(headers: string[], expectedSchema: string[]): SchemaValidationResult {
  const missing = expectedSchema.filter((col) => !headers.includes(col));
  const outOfOrder = headers.some((col, idx) => expectedSchema[idx] !== col);
  return {
    valid: missing.length === 0 && !outOfOrder,
    missingColumns: missing,
    strictOrderPreserved: !outOfOrder
  };
}

// Regra de Ouro do Catana Ops: A IA analisa, resume e audita, mas NUNCA sobrescreve SKU, GTIN, NCM ou Preço
export function enforceDeterministicFactsLock(sourceRow: RawCatalogRow, draftRow: ShopifyDraftRow): void {
  if (sourceRow.sku !== draftRow.variantSku || sourceRow.priceCents !== draftRow.variantPriceCents) {
    throw new Error(\`[QA_GATE_BLOCKED] Divergência detectada no item \${sourceRow.sku}. Bloqueando exportação.\`);
  }
}`,
      productExamples: [
        "Conversão auditada de grades completas de vestuário (Bling 59 colunas e Sankhya 45 colunas) para rascunhos Shopify.",
        "Importação de planilhas Excel de medidas de confecção (Tórax, Comprimento, Manga) com células mescladas.",
        "Análise automática de cobertura de fotos de estúdio por variante antes da publicação na vitrine."
      ]
    },

    {
      id: "proj-tampermonkey-suite",
      rank: "PROJETO #6 • AUTOMAÇÃO DIRETA NO NAVEGADOR (ERP, HUB & ADMIN)",
      accentColor: "#d6b87c",
      secondaryColor: "#64748b",
      name: "SUÍTE ENTERPRISE DE USERSCRIPTS (TAMPERMONKEY HUB)",
      subtitle: "15+ Automações em Produção para Magis5, Sankhya Web, Bling ERP (Fetch Intercept), Shopify Admin & ClickUp Bridge",
      summary: "Arsenal de mais de 15 Userscripts de nível industrial que operam diretamente dentro da interface web dos sistemas da empresa (Sankhya, Magis5, Bling, Shopify e ClickUp), eliminando milhares de cliques repetitivos, interceptando requisições nativas e executando lotes inteiros sozinhos.",
      kpis: [
        { val: "15+ Scripts", lbl: "Em Produção Diária nos Navegadores da Operação" },
        { val: "110.4 KB", lbl: "Autopilot Unificado Magis5 + Sankhya API Turbo (v7.5)" },
        { val: "Zero Cliques", lbl: "Bling Auto Seleção v16 via Interceptação Nativa de Fetch" },
        { val: "5 Sistemas", lbl: "Integrados no Browser: Sankhya, Magis5, Bling, Shopify & ClickUp" }
      ],
      stack: ["JavaScript ES2022+", "Tampermonkey API (GM_xmlhttpRequest / GM_setValue)", "Window.fetch Native Interceptor", "DOM MutationObserver", "Sankhya Direct API Calls", "CSV/JSON In-Browser Parser"],
      painPoints: [
        "Operadores perdiam horas clicando checkbox por checkbox no Bling, abrindo variante por variante no Magis5 para colocar estoque 1000 em itens de fabricação própria ou conferindo saldos manualmente no Admin da Shopify.",
        "O Sankhya Web desconectava sessões por inatividade no meio de operações longas e exigia múltiplos cliques para localizar produtos ou sincronizar cargas com a Amazon.",
        "Faltava uma ponte instantânea que enviasse os dados de uma task aberta no ClickUp direto para o motor do Hook Prime."
      ],
      solutions: [
        "Autopilot Unificado Magis5 + Sankhya API Turbo (v7.5 • 110.4 KB): realiza importação multi-canal no Magis5, possui Scanner inteligente que separa Fabricação Própria vs Revenda e consulta a API do Sankhya em velocidade turbo.",
        "Bling Auto Seleção SKU v16 (33.3 KB • Fetch Intercept): intercepta o window.fetch nativo do Bling no exato momento em que a grade carrega, selecionando todos os itens da lista com zero cliques manuais.",
        "Estoque Infinito Autopilot Magis5 (37.0 KB) + Atualizador em Lote v2.0: preenche automaticamente saldo 1000 em todas as variações de produtos de fabricação própria.",
        "Shopify Verificador de Estoque e Cadastro v4.6 (67.5 KB) + Assistente Shopify v6.0: expande variantes agrupadas no Admin da Shopify, audita estoques zerados e aplica descrições em lote."
      ],
      archSteps: [
        { num: "01 • FETCH INTERCEPT", title: "Captura em Rede", desc: "Intercepta window.fetch e XMLHttpRequest nativos do ERP/Hub antes mesmo de o DOM terminar de renderizar." },
        { num: "02 • HYBRID SCANNER", title: "Própria vs Revenda", desc: "Identifica instantaneamente se o item no Magis5 é de sublimação própria (saldo 1000) ou revenda (saldo físico)." },
        { num: "03 • BATCH EXECUTOR", title: "Fila Persistente", desc: "Mantém estado via GM_setValue entre recarregamentos de página para processar centenas de produtos seguidos." },
        { num: "04 • KEEP-ALIVE & BRIDGE", title: "Sessão Blindada", desc: "Impede logout por inatividade no Sankhya e conecta ClickUp direto ao servidor local do Hook Prime." }
      ],
      codeFilename: "SCRIPTS-TAMPERMONKEY / bling-auto-selecao-v16.user.js & autopilot-magis5-sankhya-v7.5.user.js",
      codePreview: `// [BLING AUTO SELEÇÃO v16] Interceptação Nativa do window.fetch para Seleção 100% Automática
const originalFetch = unsafeWindow.fetch;
unsafeWindow.fetch = async function (...args) {
  const response = await originalFetch.apply(this, args);
  if ( typeof args[0] === 'string' && args[0].includes('/Api/v3/produtos') ) {
    const clone = response.clone();
    clone.json().then((payload) => AutoSelectorEngine.matchAndSelectItemsInDom(payload.data));
  }
  return response;
};

// [MAGIS5 + SANKHYA TURBO v7.5] Classificador Automático: Fabricação Própria vs Revenda Multimarcas
function classifyOperationalInventoryPolicy(itemCode, productTitle) {
  const isOwnManufacturing = /(_FULL|^UV|^JERSEY)/i.test(itemCode) || /UV50\+|Sublima/i.test(productTitle);
  return isOwnManufacturing ? { policy: 'INFINITE_PRODUCTION', targetStock: 1000 } : { policy: 'PHYSICAL_WAREHOUSE_SYNC' };
}`,
      productExamples: [
        "Aplicação automática de Estoque Infinito (1000) em centenas de variantes de Camisas UV50+ e Jerseys no Magis5.",
        "Seleção instantânea de lotes de Bonés, Botinas, Anzóis, Linhas e Carretilhas no Bling sem clicar manualmente.",
        "Conferência automatizada de estoque variante por variante (PP ao G4 e 34 ao 44) dentro do painel Admin das 3 lojas Shopify."
      ],
      hasUserscriptVault: true
    },

    {
      id: "proj-adshield-worker",
      rank: "PROJETO #7 • INTELIGÊNCIA DE CRO, CATÁLOGO & BLINDAGEM DE TRÁFEGO PAGO",
      accentColor: "#d6b87c",
      secondaryColor: "#64748b",
      name: "ADSHIELD / LEAKFINDER (WORKER)",
      subtitle: "Plataforma de Auditoria 360º de E-Commerce, Catálogo e Blindagem de Mídia Paga com 18 Agentes de IA & Protocolo Anti-Estoque Fantasma",
      summary: "Aplicação React 19 + TypeScript + Vite que fecha a ponta comercial da operação: audita 100% do catálogo público paginado (+39.696 SKUs), cruza com os produtos Mais Vendidos (Curva A), detecta Estoque Fantasma e divergências ERP ↔ Hub ↔ Loja antes que o tráfego pago queime verba em grades rompidas.",
      kpis: [
        { val: "+39.696", lbl: "SKUs Auditados ao Vivo com Paginação 100% Completa" },
        { val: "18 Agentes", lbl: "Enxame Especialista com Fonte Única da Verdade Financeira" },
        { val: "4 Camadas", lbl: "Protocolo Anti-Estoque Fantasma (ERP, Criativo, Promessa & Pause)" },
        { val: "38.2%", lbl: "Redução de Bundle JS (Arquitetura Local-First Ultrarrápida)" }
      ],
      stack: ["React 19 + TypeScript", "Vite + TailwindCSS", "Zustand Persist Store", "18 Specialized AI Agents", "Tree-of-Thought + Dual Gatekeeper", "Playwright Live Scanner", "Executive PDF Dossier Engine"],
      painPoints: [
        "Mesmo com o catálogo cadastrado, campanhas de Meta Ads e Google Shopping continuavam enviando tráfego pago para produtos de Curva A cujos tamanhos centrais (M e G no vestuário; 38 a 41 nos calçados) haviam acabado de esgotar.",
        "Auditorias comuns falhavam diante do Estoque Fantasma: quando a loja deixava o botão 'Adicionar à Sacola' ativo em backorder (inventory_policy: continue), mas o galpão físico no Sankhya estava zerado.",
        "Era fundamental separar automaticamente produtos de fabricação sob demanda (_FULL) e itens de Tamanho Único (bonés, bandanas, manguitos, equipamentos) para gerar diagnósticos com zero falso-positivo."
      ],
      solutions: [
        "Paginação 100% Completa + Filtro Inteligente de Arquivo: varre todas as páginas de /products.json (+39.696 SKUs), cruza com o ranking de Mais Vendidos (?sort_by=best-selling) e isola produtos descontinuados.",
        "Regras Nativas do Domínio Têxtil & Equipamentos: isenta automaticamente camisas de sublimação sob demanda (_FULL) e produtos de Tamanho Único, focando a auditoria de ruptura exatamente onde há perda real de conversão.",
        "Protocolo Anti-Estoque Fantasma em 4 Camadas: audita saldo físico no ERP (Camada A), fidelidade entre foto do criativo e variante enviada (Camada B), promessa de 'Envio Imediato' (Camada C) e gatilho de pausa de anúncio (Camada D).",
        "Fonte Única da Verdade Financeira + Dossiê Executivo PDF: todos os 18 agentes, simuladores de ROAS e relatórios PDF são alimentados por um motor financeiro canônico determinístico."
      ],
      archSteps: [
        { num: "01 • DEEP PAGINATION", title: "Scan +39.696 SKUs", desc: "Varre todas as páginas da loja e cruza com a Curva A de Mais Vendidos, separando arquivo morto de vitrine ativa." },
        { num: "02 • DOMAIN RULES", title: "Regra _FULL & Tam Único", desc: "Reconhece sublimação sob demanda, grades PP–G4, calçados 34–44 e itens de tamanho único sem falsos alertas." },
        { num: "03 • GHOST INVENTORY", title: "Reconciliação ERP ↔ Loja", desc: "Detecta descompasso de fila entre Sankhya ERP, Hub Magis5 e Shopify e alerta sobre backorder indevido." },
        { num: "04 • 18-AGENT DOSSIER", title: "ROI & Blindagem Liquid", desc: "Quantifica a sangria mensal em R$, gera código Liquid de proteção de tema e exporta Dossiê Executivo em PDF." }
      ],
      codeFilename: "WORKER / src/services/storeFinancialGroundingEngine.ts & ecommerce-cro-catalog-doctor",
      codePreview: `// [ADSHIELD / LEAKFINDER] Regras Determinísticas de Catálogo (_FULL, Tamanho Único & Estoque Fantasma)
export function evaluateProductInventoryRisk(product: AuditedShopifyProduct, erpPhysicalStock?: number) {
  // 1. Regra _FULL: Vestuário de sublimação sob demanda nunca sofre ruptura física de grade
  if (product.sku.includes('_FULL') || product.tags.includes('producao_sob_demanda')) {
    return { status: 'EXEMPT_ON_DEMAND_FULL', financialLeakMonthly: 0 };
  }

  // 2. Protocolo Anti-Estoque Fantasma: available=true na vitrine, mas saldo físico <= 0 no ERP Sankhya
  if (product.availableInStorefront && typeof erpPhysicalStock === 'number' && erpPhysicalStock <= 0) {
    return {
      status: 'CRITICAL_GHOST_INVENTORY',
      alert: 'Botão de compra ativo em backorder sem saldo físico no galpão. Risco em campanhas ativas.'
    };
  }

  // 3. Auditoria de Grade Central (M/G em Vestuário | 38-41 em Calçados)
  return calculateCoreSizeClusterRupture(product.variants);
}`,
      productExamples: [
        "Proteção de verba de tráfego pago em Bonés Trucker, Botinas de Couro (34–44) e Equipamentos de Pesca de Curva A.",
        "Isenção inteligente de Camisas de Pesca UV50+ com sufixo _FULL e acessórios de Tamanho Único (Bandanas, Manguitos, Luvas).",
        "Diagnóstico completo de velocidade mobile, contraste visual WCAG, calculadora de ROAS e geração de relatórios executivos."
      ]
    }
  ],

  userscriptsVault: [
    {
      name: "Autopilot Unificado — Magis5 + Sankhya API Turbo",
      version: "v7.5",
      size: "110.4 KB",
      system: "magis5",
      badge: "Magis5 + Sankhya ERP",
      desc: "Importação multi-canal automatizada no Magis5 com Scanner híbrido (separa Fabricação Própria vs Revenda) e consulta turbo direta na API do Sankhya."
    },
    {
      name: "Injetor Automático de Fotos por Variante no Sankhya",
      version: "v18.0",
      size: "136.5 KB",
      system: "sankhya",
      badge: "Sankhya ERP Web",
      desc: "Injeta fotos em todas as variantes (PP ao G4), contorna cortes de paginação da grade, isola delimitadores de tamanho e registra progresso em tempo real."
    },
    {
      name: "Sankhya — Editor Inteligente de Produtos",
      version: "v4.5",
      size: "80.4 KB",
      system: "sankhya",
      badge: "Sankhya ERP Web",
      desc: "Edição assistida e em lote de cadastros no Sankhya com parser CSV blindado e vinculação exata de variações (incluindo linha infantil e grades especiais)."
    },
    {
      name: "Shopify — Verificador de Estoque e Cadastro",
      version: "v4.6",
      size: "67.5 KB",
      system: "shopify",
      badge: "Shopify Admin",
      desc: "Percorre a lista de produtos no Admin da Shopify, expande variantes agrupadas automaticamente e audita o saldo real tamanho por tamanho."
    },
    {
      name: "Estoque Infinito Autopilot — Magis5",
      version: "v1.0",
      size: "37.0 KB",
      system: "magis5",
      badge: "Magis5 Hub",
      desc: "Identifica produtos de fabricação própria e aplica automaticamente saldo 1000 em todas as variações da grade dentro do Hub Magis5."
    },
    {
      name: "Bling — Auto Seleção de Lotes (Fetch Intercept)",
      version: "v16.0",
      size: "33.3 KB",
      system: "bling",
      badge: "Bling ERP",
      desc: "Intercepta o window.fetch nativo do Bling no carregamento da grade e seleciona dezenas de itens instantaneamente com zero cliques manuais."
    },
    {
      name: "Sankhya — Busca Turbo + Sincronizador Amazon",
      version: "v7.1",
      size: "34.1 KB",
      system: "sankhya",
      badge: "Sankhya + Amazon",
      desc: "Acelera a localização de referências no Sankhya Web e automatiza o fluxo de sincronização de produtos para o canal Amazon."
    },
    {
      name: "Assistente de Descrições e Cadastro Shopify",
      version: "v6.0",
      size: "24.8 KB",
      system: "shopify",
      badge: "Shopify Admin",
      desc: "Injeta descrições padronizadas no editor rico da Shopify, aguarda confirmação real de salvamento no DOM e avança para o próximo item da fila."
    },
    {
      name: "Magis5 — Atualizador em Lote de Produtos",
      version: "v2.0",
      size: "21.5 KB",
      system: "magis5",
      badge: "Magis5 Hub",
      desc: "Executa atualizações massivas de atributos, status e saldos em filas de produtos dentro do painel do Magis5."
    },
    {
      name: "ClickUp → Hook Prime Hub Bridge",
      version: "v3.2",
      size: "18.2 KB",
      system: "clickup",
      badge: "ClickUp + Hook Prime",
      desc: "Cria um gatilho nativo dentro das tarefas do ClickUp que envia os modelos, anexos e especificações da coleção direto para o servidor do Hook Prime."
    },
    {
      name: "Shopify ID & Variant Handle Extractor",
      version: "v3.1",
      size: "14.6 KB",
      system: "shopify",
      badge: "Shopify Admin",
      desc: "Extrai em segundos os IDs internos de produtos, variantes, handles e links de imagem das 3 lojas Shopify para alimentar os motores Python."
    },
    {
      name: "Sankhya Session Keep-Alive & Anti-Timeout",
      version: "v2.4",
      size: "9.8 KB",
      system: "sankhya",
      badge: "Sankhya ERP Web",
      desc: "Mantém a sessão ativa de forma silenciosa no Sankhya Web, evitando perda de progresso durante injeções longas de fotos e edições em lote."
    }
  ]
};
