/* ==========================================================================
   PORTFOLIO INTERACTIVE ENGINE — ARCHITECTURAL TITANIUM EDITION v3.0
   Zero Emojis • Clean Typographic Hierarchy • Precision Simulators
   ========================================================================== */

(function () {
  "use strict";

  const data = window.PORTFOLIO_DATA;

  /* ------------------------------------------------------------------------
     1. RENDER INTERACTIVE OPERATIONAL PIPELINE (CLICKUP -> ADS)
     ------------------------------------------------------------------------ */
  function initOperationalPipeline() {
    const nodesContainer = document.getElementById("pipeline-nodes-container");
    const inspectorBox = document.getElementById("pipeline-inspector-box");
    if (!nodesContainer || !inspectorBox || !data) return;

    nodesContainer.innerHTML = data.pipelineNodes
      .map(
        (node, idx) => `
        <button type="button" class="pipeline-node ${idx === 0 ? "active" : ""}" data-node-idx="${idx}">
          <div class="pipeline-node__step">${node.step}</div>
          <div class="pipeline-node__title">${node.title}</div>
          <div class="pipeline-node__desc">${node.desc}</div>
        </button>
      `
      )
      .join("");

    function renderInspector(idx) {
      const node = data.pipelineNodes[idx];
      if (!node) return;
      const pills = node.projectsInvolved
        .map(
          (p) =>
            `<span class="stack-chip" style="border-color: rgba(214, 184, 124, 0.35); color: var(--text-primary);">${p}</span>`
        )
        .join("");

      inspectorBox.innerHTML = `
        <div>
          <div style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--accent-champagne); letter-spacing: 0.05em; margin-bottom: 0.3rem;">
            TELEMETRIA DA ETAPA SELECIONADA // ${node.step}
          </div>
          <div style="font-size: 0.92rem; color: var(--text-primary); font-weight: 600; margin-bottom: 0.55rem;">
            ${node.payloadPreview}
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: 0.45rem; align-items: center;">
            <span style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted); margin-right: 0.25rem;">MÓDULOS ATIVOS:</span>
            ${pills}
          </div>
        </div>
      `;
    }

    renderInspector(0);

    nodesContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".pipeline-node");
      if (!btn) return;
      nodesContainer.querySelectorAll(".pipeline-node").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderInspector(Number(btn.dataset.nodeIdx));
    });
  }

  /* ------------------------------------------------------------------------
     2. RENDER THE 9 PRODUCT FAMILIES SHOWCASE
     ------------------------------------------------------------------------ */
  function initProductFamilies() {
    const grid = document.getElementById("product-families-grid");
    if (!grid || !data) return;

    grid.innerHTML = data.productFamilies
      .map(
        (fam) => `
        <article class="glass-card family-card">
          <div>
            <div class="family-card__header">
              <span class="family-card__index">FAMÍLIA ${fam.index}</span>
              <span class="family-card__badge">${fam.badge}</span>
            </div>
            <h3 class="family-card__title" style="margin: 0.95rem 0 0.5rem;">${fam.title}</h3>
            <p class="family-card__examples">${fam.examples}</p>
          </div>
          <div class="family-card__engineering">
            <strong style="color: var(--accent-champagne); font-family: var(--font-mono); font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.04em; display: block; margin-bottom: 0.2rem;">
              Engenharia Aplicada
            </strong>
            ${fam.engineering}
          </div>
        </article>
      `
      )
      .join("");
  }

  /* ------------------------------------------------------------------------
     3. RENDER ALL 7 DEDICATED PROJECT SECTIONS (STARTING WITH #1 HOOK PRIME)
     ------------------------------------------------------------------------ */
  function initProjectsSections() {
    const mount = document.getElementById("projects-sections-mount");
    if (!mount || !data) return;

    mount.innerHTML = data.projects
      .map((proj, index) => {
        const num = index + 1;
        const kpisHtml = proj.kpis
          .map(
            (k) => `
            <div class="project-kpi">
              <div class="project-kpi__val">${k.val}</div>
              <div class="project-kpi__lbl">${k.lbl}</div>
            </div>
          `
          )
          .join("");

        const stackHtml = proj.stack.map((s) => `<span class="stack-chip">${s}</span>`).join("");

        const painsHtml = proj.painPoints.map((p) => `<li>${p}</li>`).join("");
        const solutionsHtml = proj.solutions.map((s) => `<li>${s}</li>`).join("");

        const archStepsHtml = proj.archSteps
          .map(
            (step) => `
            <div class="arch-step-card">
              <div class="arch-step-num">${step.num}</div>
              <div class="arch-step-title">${step.title}</div>
              <div class="arch-step-desc">${step.desc}</div>
            </div>
          `
          )
          .join("");

        const examplesHtml = proj.productExamples.map((ex) => `<li>${ex}</li>`).join("");

        let extraWidgetHtml = "";

        if (proj.hasMatrixSimulator) {
          extraWidgetHtml = `
            <div class="interactive-widget" id="hook-prime-simulator">
              <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
                <div>
                  <span class="eyebrow-badge" style="margin-bottom:0.35rem;">
                    <span class="eyebrow-dot"></span> SIMULADOR DE ESCALA • HOOK PRIME
                  </span>
                  <h4 style="font-family:var(--font-display); font-size:1.02rem; color:var(--text-primary);">
                    Multiplicação de Matrizes Têxteis & Preenchimento Automático ERP
                  </h4>
                </div>
                <span style="font-family:var(--font-mono); font-size:0.71rem; color:var(--text-muted);">
                  [Ajuste os parâmetros do lote]
                </span>
              </div>
              <div class="widget-controls">
                <div class="control-group">
                  <label><span>Modelos / Estampas no Lote</span> <strong id="sim-hp-codes-val">50</strong></label>
                  <input type="range" id="sim-hp-codes" min="5" max="120" step="5" value="50" />
                </div>
                <div class="control-group">
                  <label><span>Tamanhos na Grade (PP ao G4)</span> <strong id="sim-hp-sizes-val">7</strong></label>
                  <input type="range" id="sim-hp-sizes" min="1" max="9" step="1" value="7" />
                </div>
                <div class="control-group">
                  <label><span>Modelagens (Masc / Fem / Inf)</span> <strong id="sim-hp-models-val">3</strong></label>
                  <input type="range" id="sim-hp-models" min="1" max="3" step="1" value="3" />
                </div>
              </div>
              <div class="widget-output-grid">
                <div class="widget-stat">
                  <div class="widget-stat__num" id="sim-hp-out-skus">1.050</div>
                  <div class="widget-stat__label">SKUs Finais Gerados</div>
                </div>
                <div class="widget-stat">
                  <div class="widget-stat__num" id="sim-hp-out-cells">61.950</div>
                  <div class="widget-stat__label">Células Preenchidas (Bling 59 Col)</div>
                </div>
                <div class="widget-stat">
                  <div class="widget-stat__num" id="sim-hp-out-sankhya">47.250</div>
                  <div class="widget-stat__label">Células Preenchidas (Sankhya 45 Col)</div>
                </div>
                <div class="widget-stat">
                  <div class="widget-stat__num" id="sim-hp-out-time" style="color:var(--accent-champagne);">~4 min</div>
                  <div class="widget-stat__label">Tempo Autopilot (vs ~36h Manuais)</div>
                </div>
              </div>
            </div>
          `;
        }

        if (proj.hasImageBatchSimulator) {
          extraWidgetHtml = `
            <div class="interactive-widget" id="image-injector-simulator">
              <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
                <div>
                  <span class="eyebrow-badge" style="margin-bottom:0.35rem;">
                    <span class="eyebrow-dot"></span> SIMULADOR DE INJEÇÃO VISUAL • SANKHYA v18
                  </span>
                  <h4 style="font-family:var(--font-display); font-size:1.02rem; color:var(--text-primary);">
                    Cobertura de Paginação Completa (PP ao G4 / 34 ao 44) via Servidor Local CORS
                  </h4>
                </div>
                <span style="font-family:var(--font-mono); font-size:0.71rem; color:var(--text-muted);">
                  [Simule o volume de sincronização de imagens]
                </span>
              </div>
              <div class="widget-controls">
                <div class="control-group">
                  <label><span>Modelos Base Selecionados</span> <strong id="sim-img-models-val">150 modelos</strong></label>
                  <input type="range" id="sim-img-models" min="20" max="600" step="20" value="150" />
                </div>
                <div class="control-group">
                  <label><span>Variações por Modelo na Grade</span> <strong id="sim-img-vars-val">7 tamanhos</strong></label>
                  <input type="range" id="sim-img-vars" min="1" max="11" step="1" value="7" />
                </div>
                <div class="control-group">
                  <label><span>Páginas Internas por Grade no ERP</span> <strong id="sim-img-pages-val">2 páginas</strong></label>
                  <input type="range" id="sim-img-pages" min="1" max="4" step="1" value="2" />
                </div>
              </div>
              <div class="widget-output-grid">
                <div class="widget-stat">
                  <div class="widget-stat__num" id="sim-img-out-total">1.050</div>
                  <div class="widget-stat__label">Variantes Sincronizadas com Foto</div>
                </div>
                <div class="widget-stat">
                  <div class="widget-stat__num" id="sim-img-out-pages">300</div>
                  <div class="widget-stat__label">Páginas de Grade Percorridas sem Corte</div>
                </div>
                <div class="widget-stat">
                  <div class="widget-stat__num" id="sim-img-out-latency">&lt; 5 ms</div>
                  <div class="widget-stat__label">Latência Localhost CORS por Binário</div>
                </div>
                <div class="widget-stat">
                  <div class="widget-stat__num" id="sim-img-out-saved" style="color:var(--accent-champagne);">~24h poupadas</div>
                  <div class="widget-stat__label">Economia vs Upload Manual no ERP</div>
                </div>
              </div>
            </div>
          `;
        }

        if (proj.hasUserscriptVault) {
          extraWidgetHtml = `
            <div style="margin-top: 1.5rem;">
              <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:0.75rem;">
                <h4 style="font-family:var(--font-display); font-size:1.02rem; color:var(--text-primary);">
                  Catálogo de Userscripts em Produção (Filtre por Plataforma)
                </h4>
                <div class="scripts-filter-bar" id="userscripts-filter-bar" style="margin:0;">
                  <button type="button" class="filter-chip active" data-sys="all">Todos (12)</button>
                  <button type="button" class="filter-chip" data-sys="sankhya">Sankhya ERP</button>
                  <button type="button" class="filter-chip" data-sys="magis5">Magis5 Hub</button>
                  <button type="button" class="filter-chip" data-sys="bling">Bling ERP</button>
                  <button type="button" class="filter-chip" data-sys="shopify">Shopify Admin</button>
                  <button type="button" class="filter-chip" data-sys="clickup">ClickUp Bridge</button>
                </div>
              </div>
              <div class="userscripts-grid" id="userscripts-vault-grid" style="margin-top:1rem;"></div>
            </div>
          `;
        }

        return `
          <section class="project-section" id="${proj.id}" data-accent="${proj.accentColor}" data-secondary="${proj.secondaryColor}">
            <div class="container">
              <div class="glass-panel project-shell">
                <div class="project-header">
                  <div>
                    <div class="project-rank-badge">
                      <span class="eyebrow-dot"></span>
                      SEÇÃO 0${num} // ${proj.rank}
                    </div>
                    <h2 class="project-title">${proj.name}</h2>
                    <p class="project-tagline">${proj.subtitle}</p>
                  </div>
                  <div style="display:flex; flex-direction:column; align-items:flex-end; gap:0.35rem;">
                    <span style="font-family:var(--font-mono); font-size:0.68rem; color:var(--text-muted); letter-spacing:0.05em;">
                      STATUS DO SISTEMA
                    </span>
                    <span class="status-pill-live">
                      <span class="status-pill-live__dot"></span>
                      EM PRODUÇÃO ATIVA
                    </span>
                  </div>
                </div>

                <p style="margin-top: 1.25rem; color: var(--text-secondary); font-size: 0.95rem; line-height: 1.7;">
                  ${proj.summary}
                </p>

                <!-- KPI Strip -->
                <div class="project-kpi-strip">
                  ${kpisHtml}
                </div>

                <!-- Segmented 3-Tab Bar -->
                <div class="project-tabs-bar" role="tablist" aria-label="Abas técnicas do projeto ${proj.name}">
                  <button type="button" class="project-tab-btn active" data-tab-target="${proj.id}-tab-1">
                    <span class="project-tab-num">01</span> Problema & Impacto Operacional
                  </button>
                  <button type="button" class="project-tab-btn" data-tab-target="${proj.id}-tab-2">
                    <span class="project-tab-num">02</span> Fluxo & Arquitetura Técnica
                  </button>
                  <button type="button" class="project-tab-btn" data-tab-target="${proj.id}-tab-3">
                    <span class="project-tab-num">03</span> Produtos Processados & Engenharia
                  </button>
                </div>

                <!-- TAB 1: Pain vs Solution -->
                <div class="project-tab-pane active" id="${proj.id}-tab-1">
                  <div class="pain-solution-grid">
                    <div class="info-box info-box--pain">
                      <div class="info-box__title">
                        <span style="color:var(--status-warning); font-family:var(--font-mono);">[CENÁRIO ANTERIOR]</span> Gargalo Operacional
                      </div>
                      <ul class="feature-list">
                        ${painsHtml}
                      </ul>
                    </div>
                    <div class="info-box info-box--solution">
                      <div class="info-box__title">
                        <span style="color:var(--status-operational); font-family:var(--font-mono);">[SOLUÇÃO EM PRODUÇÃO]</span> Engenharia Aplicada
                      </div>
                      <ul class="feature-list">
                        ${solutionsHtml}
                      </ul>
                    </div>
                  </div>
                  ${extraWidgetHtml}
                </div>

                <!-- TAB 2: Architecture Flow -->
                <div class="project-tab-pane" id="${proj.id}-tab-2">
                  <div class="arch-flow-grid">
                    ${archStepsHtml}
                  </div>
                  <div class="code-terminal">
                    <div class="code-terminal__header">
                      <div class="terminal-dots"><span></span><span></span><span></span></div>
                      <span>${proj.codeFilename}</span>
                      <span style="color:var(--accent-champagne);">Módulo Auditado</span>
                    </div>
                    <div class="code-terminal__body">${proj.codePreview}</div>
                  </div>
                </div>

                <!-- TAB 3: Product Examples & Stack -->
                <div class="project-tab-pane" id="${proj.id}-tab-3">
                  <div class="pain-solution-grid">
                    <div class="info-box">
                      <div class="info-box__title">
                        <span style="color:var(--accent-champagne); font-family:var(--font-mono);">[ESCOPO REAL]</span> Produtos Processados pelo Sistema
                      </div>
                      <ul class="feature-list">
                        ${examplesHtml}
                      </ul>
                    </div>
                    <div class="info-box">
                      <div class="info-box__title">
                        <span style="color:var(--accent-champagne); font-family:var(--font-mono);">[STACK]</span> Tecnologias & Motores
                      </div>
                      <div style="display:flex; flex-wrap:wrap; gap:0.45rem; margin-bottom:1rem;">
                        ${stackHtml}
                      </div>
                      <div class="code-terminal">
                        <div class="code-terminal__header">
                          <span>Implementação Principal</span>
                          <span>${proj.name}</span>
                        </div>
                        <div class="code-terminal__body" style="max-height:210px;">${proj.codePreview}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Footer Stack Pills -->
                <div class="stack-ribbon">
                  <span style="font-family:var(--font-mono); font-size:0.68rem; color:var(--text-muted); margin-right:0.35rem; letter-spacing:0.05em;">
                    STACK TÉCNICA:
                  </span>
                  ${stackHtml}
                </div>
              </div>
            </div>
          </section>
        `;
      })
      .join("");

    // Bind Tab Switching inside Projects
    mount.addEventListener("click", (e) => {
      const btn = e.target.closest(".project-tab-btn");
      if (!btn) return;
      const shell = btn.closest(".project-shell");
      if (!shell) return;

      shell.querySelectorAll(".project-tab-btn").forEach((b) => b.classList.remove("active"));
      shell.querySelectorAll(".project-tab-pane").forEach((p) => p.classList.remove("active"));

      btn.classList.add("active");
      const targetPane = document.getElementById(btn.dataset.tabTarget);
      if (targetPane) targetPane.classList.add("active");
    });
  }

  /* ------------------------------------------------------------------------
     4. INTERACTIVE SIMULATORS (HOOK PRIME, IMAGE INJECTOR, USERSCRIPTS, ROI)
     ------------------------------------------------------------------------ */
  function initHookPrimeSimulator() {
    const codesInput = document.getElementById("sim-hp-codes");
    const sizesInput = document.getElementById("sim-hp-sizes");
    const modelsInput = document.getElementById("sim-hp-models");
    if (!codesInput || !sizesInput || !modelsInput) return;

    function update() {
      const codes = Number(codesInput.value);
      const sizes = Number(sizesInput.value);
      const models = Number(modelsInput.value);

      document.getElementById("sim-hp-codes-val").textContent = codes;
      document.getElementById("sim-hp-sizes-val").textContent = sizes;
      document.getElementById("sim-hp-models-val").textContent = models;

      const totalSkus = codes * sizes * models;
      const blingCells = totalSkus * 59;
      const sankhyaCells = totalSkus * 45;
      const autoMinutes = Math.max(1, Math.round(totalSkus / 260));
      const manualHours = Math.max(2, Math.round((totalSkus * 2.1) / 60));

      document.getElementById("sim-hp-out-skus").textContent = totalSkus.toLocaleString("pt-BR");
      document.getElementById("sim-hp-out-cells").textContent = blingCells.toLocaleString("pt-BR");
      document.getElementById("sim-hp-out-sankhya").textContent = sankhyaCells.toLocaleString("pt-BR");
      document.getElementById("sim-hp-out-time").textContent = `~${autoMinutes} min (vs ${manualHours}h)`;
    }

    [codesInput, sizesInput, modelsInput].forEach((el) => el.addEventListener("input", update));
    update();
  }

  function initImageBatchSimulator() {
    const modelsInput = document.getElementById("sim-img-models");
    const varsInput = document.getElementById("sim-img-vars");
    const pagesInput = document.getElementById("sim-img-pages");
    if (!modelsInput || !varsInput || !pagesInput) return;

    function update() {
      const models = Number(modelsInput.value);
      const vars = Number(varsInput.value);
      const pages = Number(pagesInput.value);

      document.getElementById("sim-img-models-val").textContent = `${models} modelos`;
      document.getElementById("sim-img-vars-val").textContent = `${vars} tamanhos`;
      document.getElementById("sim-img-pages-val").textContent = `${pages} ${pages === 1 ? "página" : "páginas"}`;

      const totalVariants = models * vars;
      const totalPages = models * pages;
      const hoursSaved = Math.max(1, Math.round((totalVariants * 1.35) / 60));

      document.getElementById("sim-img-out-total").textContent = totalVariants.toLocaleString("pt-BR");
      document.getElementById("sim-img-out-pages").textContent = totalPages.toLocaleString("pt-BR");
      document.getElementById("sim-img-out-saved").textContent = `~${hoursSaved}h poupadas`;
    }

    [modelsInput, varsInput, pagesInput].forEach((el) => el.addEventListener("input", update));
    update();
  }

  function initUserscriptsVault() {
    const grid = document.getElementById("userscripts-vault-grid");
    const filterBar = document.getElementById("userscripts-filter-bar");
    if (!grid || !filterBar || !data) return;

    function renderVault(filterSys) {
      const items =
        filterSys === "all"
          ? data.userscriptsVault
          : data.userscriptsVault.filter((u) => u.system === filterSys);

      grid.innerHTML = items
        .map(
          (u) => `
          <div class="userscript-card">
            <div>
              <div class="userscript-meta">
                <span class="userscript-target">${u.badge}</span>
                <span style="color:var(--text-muted);">${u.version} • ${u.size}</span>
              </div>
              <h5 style="font-family:var(--font-display); font-size:0.94rem; color:var(--text-primary); margin:0.65rem 0 0.4rem;">
                ${u.name}
              </h5>
              <p style="font-size:0.79rem; color:var(--text-secondary); line-height:1.52;">
                ${u.desc}
              </p>
            </div>
            <div style="font-family:var(--font-mono); font-size:0.68rem; color:var(--text-muted); padding-top:0.55rem; border-top:1px solid var(--border-subtle);">
              RUNTIME // In-Browser Automation
            </div>
          </div>
        `
        )
        .join("");
    }

    renderVault("all");

    filterBar.addEventListener("click", (e) => {
      const chip = e.target.closest(".filter-chip");
      if (!chip) return;
      filterBar.querySelectorAll(".filter-chip").forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      renderVault(chip.dataset.sys);
    });
  }

  function initOperationalRoiCalculator() {
    const collectionsInput = document.getElementById("roi-collections");
    const photosInput = document.getElementById("roi-photos");
    const descriptionsInput = document.getElementById("roi-descriptions");
    if (!collectionsInput || !photosInput || !descriptionsInput) return;

    function recalc() {
      const collections = Number(collectionsInput.value);
      const photos = Number(photosInput.value);
      const descriptions = Number(descriptionsInput.value);

      document.getElementById("roi-collections-val").textContent = `${collections} lotes/mês`;
      document.getElementById("roi-photos-val").textContent = `${photos.toLocaleString("pt-BR")} SKUs`;
      document.getElementById("roi-descriptions-val").textContent = `${descriptions.toLocaleString("pt-BR")} prods`;

      const hoursSavedCadastro = collections * 28;
      const hoursSavedPhotos = Math.round((photos * 1.4) / 60);
      const hoursSavedDesc = Math.round((descriptions * 6) / 60);
      const totalHoursMonth = hoursSavedCadastro + hoursSavedPhotos + hoursSavedDesc;
      const equivalentDays = Math.round(totalHoursMonth / 8);

      document.getElementById("roi-out-hours").textContent = `${totalHoursMonth.toLocaleString("pt-BR")}h / mês`;
      document.getElementById("roi-out-days").textContent = `${equivalentDays} dias úteis`;
      document.getElementById("roi-out-errors").textContent = "Zero Colisões";
      document.getElementById("roi-out-speed").textContent = "92% Mais Rápido";
    }

    [collectionsInput, photosInput, descriptionsInput].forEach((el) =>
      el.addEventListener("input", recalc)
    );
    recalc();
  }

  /* ------------------------------------------------------------------------
     5. SPECULAR LIGHT TRACKING & SCROLL OBSERVER
     ------------------------------------------------------------------------ */
  function initGlassEffectsAndObserver() {
    document.addEventListener("mousemove", (e) => {
      const panels = document.querySelectorAll(".glass-panel");
      panels.forEach((panel) => {
        const rect = panel.getBoundingClientRect();
        if (
          e.clientY >= rect.top - 120 &&
          e.clientY <= rect.bottom + 120 &&
          e.clientX >= rect.left - 120 &&
          e.clientX <= rect.right + 120
        ) {
          panel.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
          panel.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
        }
      });
    });

    const sections = document.querySelectorAll(".project-section");
    const navPills = document.querySelectorAll(".nav-pill[data-section]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navPills.forEach((pill) => {
              pill.classList.toggle("active", pill.dataset.section === id);
            });
          }
        });
      },
      { threshold: 0.25 }
    );

    sections.forEach((sec) => observer.observe(sec));
  }

  /* ------------------------------------------------------------------------
     BOOT
     ------------------------------------------------------------------------ */
  document.addEventListener("DOMContentLoaded", () => {
    initOperationalPipeline();
    initProductFamilies();
    initProjectsSections();
    initHookPrimeSimulator();
    initImageBatchSimulator();
    initUserscriptsVault();
    initOperationalRoiCalculator();
    initGlassEffectsAndObserver();
  });
})();
