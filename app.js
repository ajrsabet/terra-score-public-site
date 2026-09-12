const supportLinks = {
  paypal: 'https://www.paypal.com/paypalme/YOUR-PAYPAL-LINK',
  venmo: 'https://venmo.com/u/YOUR-VENMO-HANDLE',
};

const metricCategories = ['Climate and Energy', 'Air Quality', 'Water', 'Land and Soil', 'Biodiversity and Habitat', 'Materials and Resource Use', 'Waste and Circularity', 'Human Health and Safety', 'Labor and Human Rights', 'Community and Equity', 'Economic and Livelihood Effects', 'Governance and Accountability'];

const products = [
  { id: 'ebike', icon: 'EB', name: 'Seeded commuter e-bike', shortName: 'E-bike', subtitle: 'Medium-complex urban mobility product with battery, motor, frame, electronics, and service lifecycle.', color: '#0f766e', terraScore: 71, retailCost: '$1,799 MSRP', trueCost: '$2,140-$2,760', totalFootprint: '42 kg CO2e / 1,000 km', confidence: 78, highlights: ['Battery and electronics dominate upfront footprint.', 'Low use-phase impact depends on regional electricity mix.', 'Repairability and battery recovery strongly affect lifetime score.'], metrics: [68, 74, 62, 71, 66, 54, 59, 76, 82, 80, 70, 73] },
  { id: 'bike', icon: 'BK', name: 'Conventional commuter bicycle', shortName: 'Conventional bike', subtitle: 'Comparable urban mobility product with simpler assemblies and no direct operating energy demand.', color: '#3b5b2a', terraScore: 88, retailCost: '$699 MSRP', trueCost: '$760-$980', totalFootprint: '14 kg CO2e / 1,000 km', confidence: 70, highlights: ['Frame materials and manufacturing carry most of the burden.', 'Use phase has no direct energy input.', 'Durability, maintenance, and reuse can make the lifecycle very favorable.'], metrics: [90, 88, 84, 86, 83, 76, 79, 91, 86, 84, 82, 88] },
  { id: 'cargo-ebike', icon: 'CE', name: 'Cargo e-bike', shortName: 'Cargo e-bike', subtitle: 'Heavier electric bicycle designed for errands, family trips, deliveries, and car-trip replacement.', color: '#8a5a12', terraScore: 76, retailCost: '$3,499 MSRP', trueCost: '$3,980-$4,850', totalFootprint: '56 kg CO2e / 1,000 km', confidence: 64, highlights: ['Larger battery and reinforced frame increase upfront impact.', 'High value when replacing short car trips.', 'Cargo use assumptions need careful functional-unit handling.'], metrics: [72, 73, 60, 70, 64, 48, 55, 75, 81, 82, 74, 73] },
  { id: 'lightweight-bike', icon: 'LB', name: 'Lightweight commuter bicycle', shortName: 'Lightweight bike', subtitle: 'Lower-mass bicycle variant with fewer materials and a high repair/reuse potential.', color: '#2563eb', terraScore: 91, retailCost: '$1,199 MSRP', trueCost: '$1,280-$1,620', totalFootprint: '11 kg CO2e / 1,000 km', confidence: 58, highlights: ['Lower material mass improves most lifecycle categories.', 'Higher retail price can reflect lighter components.', 'Evidence confidence is lower until product-specific parts are modeled.'], metrics: [93, 91, 86, 88, 84, 82, 81, 90, 84, 83, 80, 87] },
];

const impactRows = [
  ['Frame and structural materials', { ebike: 58, bike: 42, 'cargo-ebike': 72, 'lightweight-bike': 34 }, 'Bike frames vary by material, weight, reinforcement, and reuse potential.'],
  ['Battery and electronics', { ebike: 86, bike: 4, 'cargo-ebike': 92, 'lightweight-bike': 3 }, 'Battery cells, motors, controllers, and wiring create the largest electric-bike contrast.'],
  ['Manufacturing and assembly', { ebike: 66, bike: 38, 'cargo-ebike': 74, 'lightweight-bike': 34 }, 'More parts and testing usually increase assembly complexity.'],
  ['Use phase energy', { ebike: 18, bike: 0, 'cargo-ebike': 24, 'lightweight-bike': 0 }, 'Electric bikes use charging energy; mechanical bicycles have no direct operating energy input.'],
  ['Maintenance and replacement parts', { ebike: 34, bike: 26, 'cargo-ebike': 42, 'lightweight-bike': 24 }, 'All bicycles need service, while e-bikes add battery and electronics repair risk.'],
  ['End of life and circularity', { ebike: 52, bike: 28, 'cargo-ebike': 60, 'lightweight-bike': 24 }, 'Battery recovery, electronics recycling, metal recycling, and repair pathways shape end-of-life outcomes.'],
];

const lifecycleStages = [
  ['Raw materials', { ebike: 'Aluminum, steel, copper, lithium-ion cell inputs', bike: 'Aluminum or steel frame, rubber, small components', 'cargo-ebike': 'Larger frame, cargo hardware, copper, lithium-ion cell inputs', 'lightweight-bike': 'Lower-mass frame materials, rubber, compact components' }],
  ['Parts and assemblies', { ebike: 'Frame, battery pack, motor, controller, drivetrain, brakes', bike: 'Frame, drivetrain, brakes, wheels, tires', 'cargo-ebike': 'Reinforced frame, cargo rack, battery pack, motor, controller, wheels', 'lightweight-bike': 'Light frame, drivetrain, brakes, wheels, tires' }],
  ['Manufacturing', { ebike: 'More assembly steps, electrical testing, battery certification', bike: 'Mechanical assembly and quality control', 'cargo-ebike': 'Heavy assembly, electrical testing, cargo load validation', 'lightweight-bike': 'Mechanical assembly with lighter parts and finishing' }],
  ['Use', { ebike: 'Grid electricity for charging; mode shift can dominate real-world value', bike: 'Human-powered use with no direct operating emissions', 'cargo-ebike': 'Charging demand is higher, but car-trip replacement potential is stronger', 'lightweight-bike': 'Human-powered use with no direct operating emissions' }],
  ['Maintenance', { ebike: 'Mechanical service plus battery health and electronics repair', bike: 'Mechanical service and consumable parts', 'cargo-ebike': 'Higher tire/brake wear plus battery and electronics service', 'lightweight-bike': 'Mechanical service and replaceable consumables' }],
  ['End of life', { ebike: 'Battery recycling, electronics recovery, frame recycling', bike: 'Frame and parts recycling, reuse, donation, repair', 'cargo-ebike': 'Battery recycling, electronics recovery, heavy frame reuse or recycling', 'lightweight-bike': 'Parts reuse, frame recycling, repair, donation' }],
];

const evidenceItems = [
  ['Seeded TerraScore product graph', 'Available', 'E-bike product, assemblies, lifecycle stages, and score explainability records already exist in the app.'],
  ['OpenLCA / Federal LCA Commons candidate import', 'Future', 'Useful for battery, aluminum, electricity, and transportation process baselines.'],
  ['Conventional bicycle comparison model', 'Mocked', 'Needs seeded product data or imported LCA references before the comparison becomes real.'],
  ['Functional-unit review', 'Required', 'Both products must be compared over the same commuting distance, geography, and lifetime assumptions.'],
];

const infoText = {
  terraScore: 'The main TerraScore is a 0-100 matrix score derived from the twelve weighted impact categories. It is useful for product comparison inside the same product family and functional unit.',
  confidence: 'Confidence summarizes evidence strength and completeness. It should stay separate from the score so users can distinguish a strong claim from an uncertain one.',
  trueCost: 'True cost is a low-to-high externality estimate in dollars per functional unit. It should show a range, not a false-precision single number.',
  footprint: 'Total footprint is the absolute impact ledger view: unit-bearing quantities such as kg CO2e, liters of water, or other impact totals.',
};

const insightRows = [
  ['Best simple read', { ebike: 'More complex, but may replace car trips in a way this product-only view does not yet capture.', bike: 'Lower burden choice for the same commuting distance in the base comparison.', 'cargo-ebike': 'Higher product burden, but potentially strong if used for car-trip replacement.', 'lightweight-bike': 'Best simple product score, with lower modeled footprint but weaker evidence confidence.' }],
  ['Why the gap exists', { ebike: 'Battery cells, motor components, electronics, and end-of-life handling add most of the burden.', bike: 'Simpler mechanical assemblies avoid battery and electronics impacts.', 'cargo-ebike': 'The larger battery, reinforced frame, and cargo hardware increase material and end-of-life impacts.', 'lightweight-bike': 'Lower mass reduces material and manufacturing burden, but product-specific sourcing is less certain.' }],
  ['What could change it', { ebike: 'Cleaner electricity, longer lifetime, repairable batteries, and strong recycling improve the result.', bike: 'Durability, repair, secondhand use, and local service access preserve the advantage.', 'cargo-ebike': 'Trip replacement assumptions, battery durability, and repair access can materially change the result.', 'lightweight-bike': 'Better product-specific data could raise confidence and clarify material tradeoffs.' }],
];

const studyTree = [['Product system', 'Commuter e-bike lifecycle', true], ['Process', 'Battery pack assembly', false], ['Process', 'Motor and controller', false], ['Process', 'Aluminum frame fabrication', false], ['Process', 'Final assembly', false], ['Process', 'Use phase electricity', false], ['Process', 'Battery recovery scenario', false]];
const flowRows = [['Lithium-ion battery cells', 'Input', '0.42', 'kWh capacity', 'Battery baseline v1.2', 'Needs review'], ['Aluminum frame material', 'Input', '3.8', 'kg', 'USLCI aluminum process', 'Mapped'], ['Copper wiring and controller', 'Input', '0.31', 'kg', 'OpenLCA import candidate', 'Needs review'], ['E-bike assembly', 'Reference output', '1', 'item', 'Study foreground data', 'Verified'], ['Battery recovery credit', 'Avoided burden', '0.22', 'kg material recovered', 'Recycling scenario v0.4', 'Assumption']];
const qualityRows = [['Source reliability', 82, 'Federal/public dataset references are present for major material flows.'], ['Method quality', 74, 'Functional unit and system boundary are documented; battery assumptions need review.'], ['Recency', 68, 'Several baseline datasets require current-version verification.'], ['Review status', 61, 'One reviewer has checked the primary assembly records.']];
const researchImpacts = [['Climate and Energy', 68], ['Water', 62], ['Biodiversity and Habitat', 66], ['Materials and Resource Use', 54], ['Waste and Circularity', 59]];
const readiness = [['Required flows mapped', 84], ['Source provenance complete', 78], ['Data quality reviewed', 61], ['Public score ready', 54]];
const reviewItems = ['Verify battery-cell source version', 'Map controller flow to taxonomy', 'Confirm regional electricity mix', 'Review battery recovery assumption'];

let selectedProductId = new URLSearchParams(window.location.search).get('product') || 'ebike';
let scoreExpanded = false;
let comparisonTab = 'summary';
let researchTab = 'flows';
let selectedNode = 'Battery pack assembly';
let comparedIds = ['ebike', 'bike'];

function getProduct(id) {
  return products.find((product) => product.id === id) || products[0];
}

function scoreColor(value) {
  const normalizedValue = Math.max(0, Math.min(100, Number(value) || 0));
  return `hsl(${Math.round(normalizedValue * 1.2)}, 62%, 38%)`;
}

function wireShell() {
  const page = document.body.dataset.page;
  document.querySelectorAll('[data-nav]').forEach((link) => link.classList.toggle('active', link.dataset.nav === page));
  const menu = document.querySelector('.mobile-menu');
  const nav = document.querySelector('#site-nav');
  if (menu && nav) {
    menu.addEventListener('click', () => {
      const expanded = menu.getAttribute('aria-expanded') === 'true';
      menu.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open', !expanded);
    });
  }
  const paypal = document.querySelector('#paypal-link');
  const venmo = document.querySelector('#venmo-link');
  if (paypal) { paypal.href = supportLinks.paypal; paypal.target = '_blank'; }
  if (venmo) { venmo.href = supportLinks.venmo; venmo.target = '_blank'; }
}

function metricBar(value) {
  return `<div class="linear"><span style="width:${value}%;background:${scoreColor(value)}"></span></div>`;
}

function productSelectHtml(id = 'product-select') {
  return `<select id="${id}" aria-label="Choose product">${products.map((product) => `<option value="${product.id}" ${product.id === selectedProductId ? 'selected' : ''}>${product.name}</option>`).join('')}</select>`;
}

function scoreTile(title, value, caption, topic = '') {
  const infoButton = topic ? '<button class="icon-button info" type="button" data-info="' + topic + '">i</button>' : '';
  return `<article class="score-tile" ${topic ? `data-info="${topic}"` : ''}><div><p class="caption uppercase">${title}</p><h3>${value}</h3></div>${caption ? `<p>${caption}</p>` : ''}${infoButton}</article>`;
}

function renderProductView() {
  const product = getProduct(selectedProductId);
  const root = document.querySelector('#product-view');
  if (!root) return;
  root.innerHTML = `
    <section class="product-header paper-card" style="--product-color:${product.color}">
      <div class="product-title-wrap"><div class="product-icon">${product.icon}</div><div><p class="overline">Product profile</p><h1>${product.name}</h1><p>${product.subtitle}</p></div></div>
      <button class="terra-score-card" type="button" id="score-toggle"><p class="caption uppercase">TerraScore</p><strong>${product.terraScore}</strong><span>Metric-based 0-100 score</span><button class="icon-button info" type="button" data-info="terraScore">i</button></button>
    </section>
    <section class="metrics-panel paper-card" id="metrics-panel"><h2>Twelve impact metrics</h2><p>${scoreExpanded ? 'Expanded so the category drivers are visible.' : 'Click the main score or this panel to expand the metric-based breakdown.'}</p>${scoreExpanded ? `<div class="metric-grid">${metricCategories.map((category, index) => `<div class="metric-mini"><div><strong>${category}</strong><span>${product.metrics[index]}</span></div>${metricBar(product.metrics[index])}</div>`).join('')}</div>` : '<button class="button outlined">Open metric breakdown</button>'}</section>
    <section class="mui-grid three">${scoreTile('Retail / MSRP', product.retailCost, 'Market purchase price')}${scoreTile('True cost', product.trueCost, 'Externality range estimate', 'trueCost')}${scoreTile('Total footprint', product.totalFootprint, 'Absolute impact ledger', 'footprint')}</section>
    <section class="product-lower-grid"><article class="score-tile" data-info="confidence"><div><p class="caption uppercase">Confidence</p><h3>${product.confidence}%</h3></div><p>Evidence strength and completeness</p>${metricBar(product.confidence)}</article><article class="paper-card highlights"><p class="caption uppercase">Product / impact highlights</p><div>${product.highlights.map((highlight) => `<p>${highlight}</p>`).join('')}</div></article></section>
  `;
  document.querySelector('#score-toggle').addEventListener('click', () => { scoreExpanded = !scoreExpanded; renderProductView(); });
  document.querySelector('#metrics-panel').addEventListener('click', () => { scoreExpanded = !scoreExpanded; renderProductView(); });
  wireInfoDialog();
}

function wireProductPage() {
  const select = document.querySelector('#product-select');
  if (!select) return;
  select.innerHTML = products.map((product) => `<option value="${product.id}">${product.name}</option>`).join('');
  select.value = selectedProductId;
  select.addEventListener('change', (event) => { selectedProductId = event.target.value; renderProductView(); });
  renderProductView();
}

function wireInfoDialog() {
  const dialog = document.querySelector('#info-dialog');
  if (!dialog) return;
  document.querySelectorAll('[data-info]').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      const topic = button.dataset.info;
      document.querySelector('#dialog-title').textContent = topic.replace(/([A-Z])/g, ' $1').replace(/^./, (char) => char.toUpperCase());
      document.querySelector('#dialog-text').textContent = infoText[topic] || '';
      dialog.showModal();
    });
  });
  dialog.querySelector('.dialog-close').onclick = () => dialog.close();
}

function wireSearch() {
  const input = document.querySelector('#product-search-input');
  const results = document.querySelector('#search-results');
  if (!input || !results) return;
  function renderResults() {
    const query = input.value.trim().toLowerCase();
    const matches = query ? products.filter((product) => product.name.toLowerCase().includes(query) || product.shortName.toLowerCase().includes(query)) : [];
    results.innerHTML = matches.map((product) => `<a class="search-result" href="product.html?product=${product.id}" style="--product-color:${product.color}"><span class="product-icon small">${product.icon}</span><span><strong>${product.name}</strong><small>${product.subtitle}</small></span><b>${product.terraScore}</b></a>`).join('');
  }
  input.addEventListener('input', renderResults);
  document.querySelectorAll('[data-open-product]').forEach((button) => button.addEventListener('click', () => { window.location.href = `product.html?product=${button.dataset.openProduct}`; }));
}

function renderComparison() {
  const comparedProducts = comparedIds.map(getProduct);
  const winner = comparedProducts.reduce((best, product) => product.terraScore > best.terraScore ? product : best, comparedProducts[0]);
  const root = document.querySelector('#comparison-view');
  if (!root) return;
  const canAdd = comparedProducts.length < 4;
  const row = (label, caption, renderValue) => `<div class="comparison-row"><div><strong>${label}</strong>${caption ? `<p>${caption}</p>` : ''}</div>${comparedProducts.map(renderValue).join('')}${canAdd ? '<div></div>' : ''}</div>`;
  root.innerHTML = `
    <div class="comparison-columns"><div></div>${comparedProducts.map((product) => `<article class="compare-product-card ${product.id === winner.id ? 'winner' : ''}" style="--product-color:${product.color}"><span class="product-icon">${product.icon}</span><div><h2>${product.shortName}</h2>${product.id === winner.id ? '<span class="chip small">lower burden choice</span>' : ''}<p>${product.name}</p>${comparedProducts.length > 2 ? `<button class="text-button" data-remove="${product.id}">Remove</button>` : ''}</div></article>`).join('')}${canAdd ? `<article class="add-card"><span class="add-circle">+</span><strong>Add product</strong>${productSelectHtml('compare-add-select')}<button class="button contained" id="add-compare">Add to compare</button></article>` : ''}</div>
    <h2 class="comparison-section-title">Score lenses</h2>
    ${row('TerraScore', 'Metric-based 0-100 score', (product) => `<div><strong class="big-score" style="color:${scoreColor(product.terraScore)}">${product.terraScore}</strong></div>`)}
    ${row('Retail / MSRP', 'Market purchase price', (product) => `<div><strong>${product.retailCost}</strong></div>`)}
    ${row('True cost', 'Externality range estimate', (product) => `<div><strong>${product.trueCost}</strong></div>`)}
    ${row('Total footprint', 'Absolute impact ledger', (product) => `<div><strong>${product.totalFootprint}</strong></div>`)}
    ${row('Confidence', 'Evidence strength and completeness', (product) => `<div><strong>${product.confidence}%</strong>${metricBar(product.confidence)}</div>`)}
    <h2 class="comparison-section-title">Practical insights</h2>
    ${insightRows.map(([label, values]) => row(label, '', (product) => `<div><p>${values[product.id]}</p></div>`)).join('')}
    <h2 class="comparison-section-title">Metric snapshot</h2>
    ${metricCategories.map((category, index) => row(category, '', (product) => `<div class="bar-cell">${metricBar(product.metrics[index])}<span>${product.metrics[index]}</span></div>`)).join('')}
    <div class="tabs">${[['summary', 'Impact Drivers'], ['lifecycle', 'Lifecycle Layers'], ['evidence', 'Evidence Trail'], ['lca', 'LCA Handoff']].map(([id, label]) => `<button class="tab ${comparisonTab === id ? 'active' : ''}" data-comp-tab="${id}">${label}</button>`).join('')}</div>
    <div class="comparison-detail">${renderComparisonDetail(comparedProducts, row)}</div>
  `;
  root.querySelectorAll('[data-remove]').forEach((button) => button.addEventListener('click', () => { comparedIds = comparedIds.filter((id) => id !== button.dataset.remove); renderComparison(); }));
  const addButton = document.querySelector('#add-compare');
  if (addButton) addButton.addEventListener('click', () => { const select = document.querySelector('#compare-add-select'); if (select.value && !comparedIds.includes(select.value)) comparedIds.push(select.value); renderComparison(); });
  root.querySelectorAll('[data-comp-tab]').forEach((button) => button.addEventListener('click', () => { comparisonTab = button.dataset.compTab; renderComparison(); }));
}

function renderComparisonDetail(comparedProducts, row) {
  if (comparisonTab === 'summary') return impactRows.map(([label, values, note]) => row(label, '', (product) => `<div>${metricBar(values[product.id])}<p>${note}</p></div>`)).join('');
  if (comparisonTab === 'lifecycle') return lifecycleStages.map(([stage, values]) => row(stage, '', (product) => `<div><p>${values[product.id]}</p></div>`)).join('');
  if (comparisonTab === 'evidence') return evidenceItems.map(([label, status, detail]) => row(label, '', () => `<div><span class="chip small">${status}</span><p>${detail}</p></div>`)).join('');
  const lcaRows = [['Import model', 'OpenLCA JSON-LD, Federal LCA Commons process datasets, or a TerraScore CSV/XML template.'], ['Map flows', 'Match battery, aluminum, electricity, and mechanical part flows to TerraScore taxonomy nodes.'], ['Review assumptions', 'Compare geography, lifetime, allocation method, electricity mix, and uncertainty before publishing.'], ['Generate report', 'Export a readable comparison summary plus a technical appendix for researchers or partners.']];
  return lcaRows.map(([title, description]) => row(title, '', () => `<div><p>${description}</p></div>`)).join('') + '<a class="button contained research-link" href="research.html">Open research dashboard shell</a>';
}

function renderResearch() {
  const tree = document.querySelector('#study-tree');
  if (!tree) return;
  tree.innerHTML = studyTree.map(([type, label, root]) => `<button class="study-node ${label === selectedNode ? 'active' : ''}" data-node="${label}"><span>${type}</span><strong>${root ? '[root] ' : ''}${label}</strong></button>`).join('');
  tree.querySelectorAll('[data-node]').forEach((button) => button.addEventListener('click', () => { selectedNode = button.dataset.node; document.querySelector('#selected-process').textContent = selectedNode; renderResearch(); }));
  document.querySelector('#research-tabs').innerHTML = [['flows', 'Inputs / outputs'], ['model', 'Modeling and validation'], ['quality', 'Data quality'], ['analysis', 'Impact analysis']].map(([id, label]) => `<button class="tab ${researchTab === id ? 'active' : ''}" data-research-tab="${id}">${label}</button>`).join('');
  document.querySelectorAll('[data-research-tab]').forEach((button) => button.addEventListener('click', () => { researchTab = button.dataset.researchTab; renderResearchPanel(); document.querySelectorAll('[data-research-tab]').forEach((tab) => tab.classList.toggle('active', tab.dataset.researchTab === researchTab)); }));
  document.querySelector('#readiness-list').innerHTML = readiness.map(([label, value]) => `<div class="readiness-row"><div><strong>${label}</strong><span>${value}%</span></div>${metricBar(value)}</div>`).join('');
  document.querySelector('#review-list').innerHTML = reviewItems.map((item) => `<article class="review-item"><strong>${item}</strong><p>Pending research review</p></article>`).join('');
  renderResearchPanel();
}

function renderResearchPanel() {
  const panel = document.querySelector('#research-panel');
  if (!panel) return;
  if (researchTab === 'flows') {
    panel.innerHTML = `<div class="panel-toolbar"><h2>Process flows</h2><button class="button text">+ Add flow</button></div><div class="table-wrap"><table><thead><tr><th>Flow</th><th>Direction</th><th>Amount</th><th>Unit</th><th>Source / provider</th><th>Status</th></tr></thead><tbody>${flowRows.map((row) => `<tr>${row.map((cell, index) => `<td>${index === 5 ? `<span class="chip small">${cell}</span>` : cell}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    return;
  }
  if (researchTab === 'model') {
    panel.innerHTML = `<div class="mui-grid two padded">${[['System boundary', 'Cradle to grave with battery recovery scenario.'], ['Allocation method', 'Cut-off allocation; document avoided-burden assumptions separately.'], ['Geography', 'U.S. urban grid baseline; needs region-specific sensitivity test.'], ['Time period', '2026 product baseline with source-specific data vintage.']].map(([label, value]) => `<article class="paper-card compact"><p class="caption uppercase">${label}</p><strong>${value}</strong></article>`).join('')}</div>`;
    return;
  }
  const rows = researchTab === 'quality' ? qualityRows : researchImpacts;
  panel.innerHTML = `${researchTab === 'analysis' ? '<div class="panel-toolbar"><div><h2>Contribution analysis</h2><p>Current study result, suitable for review before a public product score is updated.</p></div><span class="chip small">Provisional</span></div>' : '<div class="panel-toolbar"><div><h2>Evidence quality and review</h2><p>Each flow keeps source provenance, data quality attributes, uncertainty notes, and reviewer decisions separate from the underlying quantity.</p></div></div>'}${rows.map(([label, value, detail = '']) => `<div class="research-metric"><div><strong>${label}</strong><span>${value}%</span></div>${metricBar(value)}${detail ? `<p>${detail}</p>` : ''}</div>`).join('')}`;
}

function init() {
  wireShell();
  const page = document.body.dataset.page;
  if (page === 'search') wireSearch();
  if (page === 'product') wireProductPage();
  if (page === 'comparison') renderComparison();
  if (page === 'research') renderResearch();
}

document.addEventListener('DOMContentLoaded', init);
