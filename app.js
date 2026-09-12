const supportLinks = {
  paypal: 'https://www.paypal.com/paypalme/YOUR-PAYPAL-LINK',
  venmo: 'https://venmo.com/u/YOUR-VENMO-HANDLE',
};

const capabilities = [
  ['Evidence Collection', 'Capture measurements, lifecycle stages, methods, and supporting sources in structured product-linked records.'],
  ['Review Workflow', 'Moderation, provenance, and revision history keep published sustainability claims inspectable and auditable.'],
  ['Explainable Scores', 'Model-versioned outputs include confidence, completeness, category views, lifecycle contributions, and improvement opportunities.'],
  ['Open Data Foundation', 'The platform is being shaped as durable public-interest infrastructure instead of a closed ratings product.'],
];

const roadmap = [
  ['Now', 'Pilot with institutions', 'Research groups, nonprofits, and mission-aligned partners test the evidence model and improve data quality.'],
  ['Next', 'Support reporting workflows', 'Structured ESG and sustainability reporting tools become viable once review and trust signals are stable.'],
  ['Later', 'Open broader discovery', 'Consumer comparison expands after the dataset is deep enough to support public-facing confidence.'],
];

const metricCategories = [
  'Climate and Energy',
  'Air Quality',
  'Water',
  'Land and Soil',
  'Biodiversity and Habitat',
  'Materials and Resource Use',
  'Waste and Circularity',
  'Human Health and Safety',
  'Labor and Human Rights',
  'Community and Equity',
  'Economic and Livelihood Effects',
  'Governance and Accountability',
];

const products = [
  {
    id: 'ebike',
    name: 'Seeded commuter e-bike',
    shortName: 'E-bike',
    subtitle: 'Medium-complex urban mobility product with battery, motor, frame, electronics, and service lifecycle.',
    color: '#0f766e',
    score: 71,
    retailCost: '$1,799 MSRP',
    trueCost: '$2,140-$2,760',
    footprint: '42 kg CO2e / 1,000 km',
    confidence: 78,
    highlights: ['Battery and electronics dominate upfront footprint.', 'Low use-phase impact depends on regional electricity mix.', 'Repairability and battery recovery strongly affect lifetime score.'],
    metrics: [68, 74, 62, 71, 66, 54, 59, 76, 82, 80, 70, 73],
  },
  {
    id: 'bike',
    name: 'Conventional commuter bicycle',
    shortName: 'Conventional bike',
    subtitle: 'Comparable urban mobility product with simpler assemblies and no direct operating energy demand.',
    color: '#3b5b2a',
    score: 88,
    retailCost: '$699 MSRP',
    trueCost: '$760-$980',
    footprint: '14 kg CO2e / 1,000 km',
    confidence: 70,
    highlights: ['Frame materials and manufacturing carry most of the burden.', 'Use phase has no direct energy input.', 'Durability, maintenance, and reuse can make the lifecycle very favorable.'],
    metrics: [90, 88, 84, 86, 83, 76, 79, 91, 86, 84, 82, 88],
  },
  {
    id: 'cargo-ebike',
    name: 'Cargo e-bike',
    shortName: 'Cargo e-bike',
    subtitle: 'Heavier electric bicycle designed for errands, family trips, deliveries, and car-trip replacement.',
    color: '#8a5a12',
    score: 76,
    retailCost: '$3,499 MSRP',
    trueCost: '$3,980-$4,850',
    footprint: '56 kg CO2e / 1,000 km',
    confidence: 64,
    highlights: ['Larger battery and reinforced frame increase upfront impact.', 'High value when replacing short car trips.', 'Cargo use assumptions need careful functional-unit handling.'],
    metrics: [72, 73, 60, 70, 64, 48, 55, 75, 81, 82, 74, 73],
  },
];

const lifecycleStages = [
  ['Raw materials', ['Aluminum or steel frame', 'Battery cell inputs', 'Rubber and small components']],
  ['Parts and assemblies', ['Frame', 'Drivetrain', 'Controller', 'Battery pack']],
  ['Manufacturing', ['Assembly steps', 'Electrical testing', 'Quality control']],
  ['Use', ['Charging energy', 'Maintenance', 'Mode-shift assumptions']],
  ['End of life', ['Battery recovery', 'Frame recycling', 'Parts reuse']],
];

const evidenceItems = [
  ['Seeded TerraScore product graph', 'Available', 'E-bike product, assemblies, lifecycle stages, and score explainability records already exist in the app.'],
  ['OpenLCA / Federal LCA Commons candidate import', 'Future', 'Useful for battery, aluminum, electricity, and transportation process baselines.'],
  ['Conventional bicycle comparison model', 'Mocked', 'Needs seeded product data or imported LCA references before the comparison becomes real.'],
  ['Functional-unit review', 'Required', 'Products must be compared over the same distance, geography, and lifetime assumptions.'],
];

const studyTree = [
  ['Product system', 'Commuter e-bike lifecycle'],
  ['Process', 'Battery pack assembly'],
  ['Process', 'Motor and controller'],
  ['Process', 'Aluminum frame fabrication'],
  ['Process', 'Final assembly'],
  ['Process', 'Use phase electricity'],
  ['Process', 'Battery recovery scenario'],
];

const flowRows = [
  ['Lithium-ion battery cells', 'Input', '0.42', 'kWh capacity', 'Battery baseline v1.2', 'Needs review'],
  ['Aluminum frame material', 'Input', '3.8', 'kg', 'USLCI aluminum process', 'Mapped'],
  ['Copper wiring and controller', 'Input', '0.31', 'kg', 'OpenLCA import candidate', 'Needs review'],
  ['E-bike assembly', 'Reference output', '1', 'item', 'Study foreground data', 'Verified'],
  ['Battery recovery credit', 'Avoided burden', '0.22', 'kg material recovered', 'Assumption'],
];

const qualityRows = [
  ['Source reliability', 82, 'Federal/public dataset references are present for major material flows.'],
  ['Method quality', 74, 'Functional unit and system boundary are documented; battery assumptions need review.'],
  ['Recency', 68, 'Several baseline datasets require current-version verification.'],
  ['Review status', 61, 'One reviewer has checked the primary assembly records.'],
];

const impactCategories = [
  ['Climate and Energy', 68],
  ['Water', 62],
  ['Biodiversity and Habitat', 66],
  ['Materials and Resource Use', 54],
  ['Waste and Circularity', 59],
];

const readiness = [
  ['Required flows mapped', 84],
  ['Source provenance complete', 78],
  ['Data quality reviewed', 61],
  ['Public score ready', 54],
];

let selectedProductId = products[0].id;
let productTab = 'metrics';
let researchTab = 'flows';
let selectedProcess = studyTree[1][1];

function scoreColor(value) {
  const bounded = Math.max(0, Math.min(100, Number(value) || 0));
  return `hsl(${Math.round(bounded * 1.2)}, 62%, 35%)`;
}

function el(template) {
  const node = document.createElement('template');
  node.innerHTML = template.trim();
  return node.content.firstElementChild;
}

function renderCards() {
  document.querySelector('#capability-grid').innerHTML = capabilities.map(([title, description]) => `
    <article class="info-card">
      <h3>${title}</h3>
      <p>${description}</p>
    </article>
  `).join('');

  document.querySelector('#roadmap-grid').innerHTML = roadmap.map(([step, title, description]) => `
    <article class="roadmap-card ${step === 'Now' ? 'featured' : ''}">
      <span>${step}</span>
      <h3>${title}</h3>
      <p>${description}</p>
    </article>
  `).join('');
}

function renderSupportLinks() {
  const paypalLink = document.querySelector('#paypal-link');
  const venmoLink = document.querySelector('#venmo-link');
  paypalLink.href = supportLinks.paypal;
  venmoLink.href = supportLinks.venmo;
  paypalLink.target = '_blank';
  venmoLink.target = '_blank';
}

function renderProductSelect() {
  const select = document.querySelector('#product-select');
  select.innerHTML = products.map((product) => `<option value="${product.id}">${product.shortName}</option>`).join('');
  select.value = selectedProductId;
  select.addEventListener('change', (event) => {
    selectedProductId = event.target.value;
    renderProductDemo();
  });
}

function getSelectedProduct() {
  return products.find((product) => product.id === selectedProductId) || products[0];
}

function renderProductDemo() {
  const product = getSelectedProduct();
  document.querySelector('#product-profile').innerHTML = `
    <div class="product-summary" style="--accent:${product.color}">
      <div class="product-icon">${product.shortName.slice(0, 2)}</div>
      <div>
        <span>Product profile</span>
        <h4>${product.name}</h4>
        <p>${product.subtitle}</p>
      </div>
      <button class="score-button" type="button" data-product-tab-target="metrics">
        <span>TerraScore</span>
        <strong>${product.score}</strong>
        <small>Metric-based 0-100 score</small>
      </button>
    </div>
    <div class="score-tiles">
      <div><span>Retail price</span><strong>${product.retailCost}</strong></div>
      <div><span>True cost range</span><strong>${product.trueCost}</strong></div>
      <div><span>Total footprint</span><strong>${product.footprint}</strong></div>
      <div><span>Confidence</span><strong>${product.confidence}%</strong></div>
    </div>
  `;
  document.querySelector('[data-product-tab-target="metrics"]').addEventListener('click', () => {
    productTab = 'metrics';
    setActiveTabs('product');
    renderProductPanel();
  });
  renderProductPanel();
}

function renderProductPanel() {
  const product = getSelectedProduct();
  const panel = document.querySelector('#product-demo-panel');
  if (productTab === 'metrics') {
    panel.innerHTML = `
      <div class="metric-grid">
        ${metricCategories.map((category, index) => `
          <div class="metric-row">
            <div><span>${category}</span><strong>${product.metrics[index]}</strong></div>
            <div class="bar"><i style="width:${product.metrics[index]}%; background:${scoreColor(product.metrics[index])}"></i></div>
          </div>
        `).join('')}
      </div>
      <div class="highlight-list">
        ${product.highlights.map((item) => `<p>${item}</p>`).join('')}
      </div>
    `;
    return;
  }

  if (productTab === 'lifecycle') {
    panel.innerHTML = lifecycleStages.map(([stage, items]) => `
      <div class="stage-row">
        <h4>${stage}</h4>
        <p>${items.join(' | ')}</p>
      </div>
    `).join('');
    return;
  }

  panel.innerHTML = evidenceItems.map(([source, status, detail]) => `
    <div class="evidence-row">
      <div>
        <h4>${source}</h4>
        <p>${detail}</p>
      </div>
      <span class="status-pill">${status}</span>
    </div>
  `).join('');
}

function renderStudyTree() {
  const target = document.querySelector('#study-tree');
  target.innerHTML = '';
  studyTree.forEach(([type, label]) => {
    const button = el(`<button class="study-node ${label === selectedProcess ? 'active' : ''}" type="button"><span>${type}</span><strong>${label}</strong></button>`);
    button.addEventListener('click', () => {
      selectedProcess = label;
      document.querySelector('#selected-process').textContent = selectedProcess;
      renderStudyTree();
    });
    target.append(button);
  });
}

function renderResearchPanel() {
  const panel = document.querySelector('#research-demo-panel');
  if (researchTab === 'flows') {
    panel.innerHTML = `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Flow</th><th>Direction</th><th>Amount</th><th>Unit</th><th>Source</th><th>Status</th></tr></thead>
          <tbody>${flowRows.map((row) => `<tr>${row.map((cell, index) => index === 5 ? `<td><span class="status-pill">${cell}</span></td>` : `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody>
        </table>
      </div>
    `;
    return;
  }

  const rows = researchTab === 'quality' ? qualityRows : impactCategories;
  panel.innerHTML = rows.map(([label, value, detail = 'Current study result, suitable for review before a public score is updated.']) => `
    <div class="metric-row wide">
      <div><span>${label}</span><strong>${value}%</strong></div>
      <div class="bar"><i style="width:${value}%; background:${scoreColor(value)}"></i></div>
      <p>${detail}</p>
    </div>
  `).join('');
}

function renderReadiness() {
  document.querySelector('#readiness-list').innerHTML = readiness.map(([label, value]) => `
    <div class="readiness-row">
      <div><span>${label}</span><strong>${value}%</strong></div>
      <div class="bar"><i style="width:${value}%; background:${scoreColor(value)}"></i></div>
    </div>
  `).join('');
}

function setActiveTabs(scope) {
  const selector = scope === 'product' ? '[data-product-tab]' : '[data-research-tab]';
  document.querySelectorAll(selector).forEach((tab) => {
    const value = tab.dataset.productTab || tab.dataset.researchTab;
    const active = scope === 'product' ? value === productTab : value === researchTab;
    tab.classList.toggle('active', active);
  });
}

function wireTabs() {
  document.querySelectorAll('[data-product-tab]').forEach((tab) => {
    tab.addEventListener('click', () => {
      productTab = tab.dataset.productTab;
      setActiveTabs('product');
      renderProductPanel();
    });
  });

  document.querySelectorAll('[data-research-tab]').forEach((tab) => {
    tab.addEventListener('click', () => {
      researchTab = tab.dataset.researchTab;
      setActiveTabs('research');
      renderResearchPanel();
    });
  });
}

function wireMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open', !expanded);
  });
}

function init() {
  renderCards();
  renderSupportLinks();
  renderProductSelect();
  renderProductDemo();
  renderStudyTree();
  renderResearchPanel();
  renderReadiness();
  wireTabs();
  wireMenu();
}

document.addEventListener('DOMContentLoaded', init);
