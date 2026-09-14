const supportLinks = {
  paypal: "https://www.paypal.com/paypalme/YOUR-PAYPAL-LINK",
  venmo: "https://venmo.com/u/YOUR-VENMO-HANDLE",
};

const metricCategories = [
  "Climate and Energy",
  "Air Quality",
  "Water",
  "Land and Soil",
  "Biodiversity and Habitat",
  "Materials and Resource Use",
  "Waste and Circularity",
  "Human Health and Safety",
  "Labor and Human Rights",
  "Community and Equity",
  "Economic and Livelihood Effects",
  "Governance and Accountability",
];

const categoryLabels = { cars: "Cars", coffee: "Coffee" };
const categoryDefaults = {
  cars: ["ev-sedan", "hybrid-sedan", "gas-sedan", "diesel-truck"],
  coffee: ["coffee-pods", "coffee-instant", "coffee-drip", "coffee-fairtrade"],
};

const products = [
  {
    id: "ev-sedan",
    category: "cars",
    icon: "EV",
    name: "Battery electric sedan",
    shortName: "Electric sedan",
    subtitle:
      "Mid-size battery electric sedan compared directly against similarly sized hybrid, gasoline, and diesel vehicles.",
    color: "#0f766e",
    terraScore: 74,
    retailCost: "$42,000 MSRP",
    trueCost: "$44,500-$52,000",
    totalFootprint: "3.8 t CO2e / yr (10k mi, grid mix)",
    confidence: 68,
    highlights: [
      "Battery production is the single largest upfront footprint driver.",
      "Grid electricity mix strongly shapes use-phase emissions.",
      "Battery recycling and second-life use materially change lifetime impact.",
    ],
    metrics: [70, 78, 64, 68, 60, 52, 58, 80, 74, 72, 64, 70],
  },
  {
    id: "hybrid-sedan",
    category: "cars",
    icon: "HY",
    name: "Hybrid sedan",
    shortName: "Hybrid sedan",
    subtitle:
      "Mid-size hybrid sedan combining a smaller battery with a gasoline engine to reduce fuel use.",
    color: "#3b5b2a",
    terraScore: 70,
    retailCost: "$31,500 MSRP",
    trueCost: "$33,000-$38,000",
    totalFootprint: "5.1 t CO2e / yr (10k mi)",
    confidence: 74,
    highlights: [
      "Smaller battery reduces upfront material burden versus a full EV.",
      "Fuel use is lower than a conventional engine but still direct tailpipe emissions.",
      "Well-understood technology keeps evidence confidence relatively high.",
    ],
    metrics: [64, 70, 66, 70, 64, 58, 60, 76, 72, 70, 66, 68],
  },
  {
    id: "gas-sedan",
    category: "cars",
    icon: "GS",
    name: "Conventional gasoline sedan",
    shortName: "Gas sedan",
    subtitle:
      "Mid-size conventional gasoline sedan representing the common baseline vehicle in this size class.",
    color: "#8a5a12",
    terraScore: 58,
    retailCost: "$27,800 MSRP",
    trueCost: "$30,500-$36,000",
    totalFootprint: "6.9 t CO2e / yr (10k mi)",
    confidence: 80,
    highlights: [
      "Lowest production-phase footprint among these four vehicles.",
      "Use-phase tailpipe emissions dominate the lifetime footprint.",
      "Long, well-documented industry history supports higher evidence confidence.",
    ],
    metrics: [46, 48, 58, 60, 58, 54, 50, 62, 60, 58, 56, 54],
  },
  {
    id: "diesel-truck",
    category: "cars",
    icon: "DT",
    name: "Full-size diesel pickup truck",
    shortName: "Diesel truck",
    subtitle:
      "Full-size diesel pickup truck included to contrast a common heavy-duty use case against sedans.",
    color: "#7c2d12",
    terraScore: 41,
    retailCost: "$58,000 MSRP",
    trueCost: "$62,000-$71,000",
    totalFootprint: "11.4 t CO2e / yr (10k mi)",
    confidence: 62,
    highlights: [
      "Vehicle size and engine output drive the highest production footprint in this set.",
      "Heavy fuel use and lower efficiency dominate the use-phase footprint.",
      "Payload and towing capability may offset burden for specific work use cases.",
    ],
    metrics: [24, 20, 48, 46, 44, 38, 34, 44, 46, 44, 42, 40],
  },
  {
    id: "coffee-pods",
    category: "coffee",
    icon: "CP",
    name: "Single-serve coffee pods",
    shortName: "Coffee pods",
    subtitle:
      "Single-serve capsule coffee format optimized for convenience and consistency.",
    color: "#8a5a12",
    terraScore: 46,
    retailCost: "$0.65 / cup",
    trueCost: "$0.85-$1.10 / cup",
    totalFootprint: "0.29 kg CO2e / cup",
    confidence: 66,
    highlights: [
      "Plastic and aluminum pod packaging dominates the per-cup footprint.",
      "Portion control can reduce coffee waste compared to over-brewing.",
      "Pod recycling programs exist but are inconsistently used.",
    ],
    metrics: [50, 60, 52, 48, 44, 28, 18, 64, 44, 42, 52, 50],
  },
  {
    id: "coffee-instant",
    category: "coffee",
    icon: "CI",
    name: "Instant coffee",
    shortName: "Instant coffee",
    subtitle:
      "Freeze-dried or spray-dried coffee designed for quick preparation with minimal equipment.",
    color: "#3b5b2a",
    terraScore: 61,
    retailCost: "$0.22 / cup",
    trueCost: "$0.28-$0.38 / cup",
    totalFootprint: "0.18 kg CO2e / cup",
    confidence: 60,
    highlights: [
      "Processing (freeze-drying) is energy intensive relative to brewed formats.",
      "Low packaging mass per cup compared to single-serve pods.",
      "Long shelf life can reduce spoilage-related waste.",
    ],
    metrics: [58, 66, 60, 56, 54, 46, 52, 66, 52, 50, 58, 56],
  },
  {
    id: "coffee-drip",
    category: "coffee",
    icon: "CD",
    name: "Conventional drip coffee",
    shortName: "Drip coffee",
    subtitle:
      "Standard ground coffee brewed with a drip machine using conventional, non-certified sourcing.",
    color: "#2563eb",
    terraScore: 66,
    retailCost: "$0.18 / cup",
    trueCost: "$0.22-$0.30 / cup",
    totalFootprint: "0.21 kg CO2e / cup",
    confidence: 72,
    highlights: [
      "Low packaging burden compared to single-serve formats.",
      "Farming and sourcing practices are not independently verified.",
      "Paper filter waste is a small but recurring per-cup contributor.",
    ],
    metrics: [62, 68, 58, 60, 56, 54, 48, 68, 56, 54, 60, 58],
  },
  {
    id: "coffee-fairtrade",
    category: "coffee",
    icon: "FT",
    name: "Fairtrade drip coffee",
    shortName: "Fairtrade drip",
    subtitle:
      "Ground coffee brewed with a drip machine using Fairtrade-certified sourcing and labor practices.",
    color: "#0f766e",
    terraScore: 79,
    retailCost: "$0.24 / cup",
    trueCost: "$0.27-$0.34 / cup",
    totalFootprint: "0.20 kg CO2e / cup",
    confidence: 68,
    highlights: [
      "Certified sourcing improves labor and community impact categories.",
      "Environmental footprint is comparable to conventional drip coffee.",
      "Verification and audit trails are less complete than large commercial supply chains.",
    ],
    metrics: [66, 70, 62, 64, 60, 58, 54, 72, 86, 84, 72, 78],
  },
];

const impactRowsByCategory = {
  cars: [
    [
      "Vehicle production and materials",
      { "ev-sedan": 62, "hybrid-sedan": 52, "gas-sedan": 40, "diesel-truck": 74 },
      "Body, chassis, and component manufacturing scale with vehicle size and material complexity.",
    ],
    [
      "Battery and electric drivetrain materials",
      { "ev-sedan": 88, "hybrid-sedan": 46, "gas-sedan": 3, "diesel-truck": 2 },
      "Battery cell size is the largest driver of the electrified-vehicle materials gap.",
    ],
    [
      "Manufacturing and assembly",
      { "ev-sedan": 58, "hybrid-sedan": 52, "gas-sedan": 44, "diesel-truck": 68 },
      "Larger, heavier vehicles generally require more energy-intensive assembly.",
    ],
    [
      "Use phase energy and emissions",
      { "ev-sedan": 22, "hybrid-sedan": 46, "gas-sedan": 68, "diesel-truck": 92 },
      "Tailpipe emissions and fuel or electricity demand dominate the lifetime footprint for most vehicles.",
    ],
    [
      "Maintenance and replacement parts",
      { "ev-sedan": 30, "hybrid-sedan": 42, "gas-sedan": 48, "diesel-truck": 56 },
      "Fluid changes, engine components, and tires all factor into in-use maintenance burden.",
    ],
    [
      "End of life and circularity",
      { "ev-sedan": 54, "hybrid-sedan": 44, "gas-sedan": 36, "diesel-truck": 58 },
      "Battery recovery and heavy-metal recycling shape end-of-life outcomes across vehicle types.",
    ],
  ],
  coffee: [
    [
      "Packaging and single-use materials",
      { "coffee-pods": 78, "coffee-instant": 40, "coffee-drip": 30, "coffee-fairtrade": 32 },
      "Single-serve formats generally add more packaging mass per cup than bulk-ground coffee.",
    ],
    [
      "Farming and raw material sourcing",
      { "coffee-pods": 56, "coffee-instant": 52, "coffee-drip": 54, "coffee-fairtrade": 34 },
      "Certified sourcing practices can reduce land-use and labor-related sourcing impacts.",
    ],
    [
      "Processing and manufacturing",
      { "coffee-pods": 62, "coffee-instant": 74, "coffee-drip": 40, "coffee-fairtrade": 42 },
      "Freeze-drying and capsule assembly are more energy- and process-intensive than simple grinding.",
    ],
    [
      "Brewing energy use",
      { "coffee-pods": 48, "coffee-instant": 30, "coffee-drip": 46, "coffee-fairtrade": 46 },
      "Water heating method and equipment efficiency drive most of the per-cup brewing energy.",
    ],
    [
      "Waste generation per serving",
      { "coffee-pods": 82, "coffee-instant": 26, "coffee-drip": 44, "coffee-fairtrade": 44 },
      "Single-use pods create the most solid waste per cup among common brewing formats.",
    ],
    [
      "Labor and sourcing risk",
      { "coffee-pods": 58, "coffee-instant": 56, "coffee-drip": 60, "coffee-fairtrade": 18 },
      "Certification programs are the main lever for reducing labor and sourcing risk in this category.",
    ],
  ],
};

const lifecycleStagesByCategory = {
  cars: [
    [
      "Raw materials",
      {
        "ev-sedan": "Steel, aluminum, copper, and lithium-ion battery cell inputs",
        "hybrid-sedan": "Steel, aluminum, smaller battery cell inputs, engine components",
        "gas-sedan": "Steel, aluminum, engine and drivetrain components",
        "diesel-truck": "Heavy-duty steel frame, larger engine block, towing hardware",
      },
    ],
    [
      "Parts and assemblies",
      {
        "ev-sedan": "Battery pack, electric motor, inverter, chassis, body panels",
        "hybrid-sedan": "Battery pack, electric motor, gasoline engine, chassis, body panels",
        "gas-sedan": "Gasoline engine, transmission, chassis, body panels",
        "diesel-truck": "Diesel engine, heavy-duty chassis, bed, towing components",
      },
    ],
    [
      "Manufacturing",
      {
        "ev-sedan": "Battery cell production, electric drivetrain assembly, body assembly",
        "hybrid-sedan": "Dual drivetrain assembly (engine and electric motor), body assembly",
        "gas-sedan": "Engine and drivetrain assembly, body assembly",
        "diesel-truck": "Heavy engine and frame assembly, higher material throughput",
      },
    ],
    [
      "Use",
      {
        "ev-sedan": "Grid electricity for charging; efficiency depends heavily on regional grid mix",
        "hybrid-sedan": "Gasoline plus limited electric-only driving depending on battery size and use pattern",
        "gas-sedan": "Gasoline combustion for all propulsion energy",
        "diesel-truck": "Diesel combustion; higher per-mile fuel use due to weight and drag",
      },
    ],
    [
      "Maintenance",
      {
        "ev-sedan": "Simpler drivetrain maintenance; tire wear and battery health are primary factors",
        "hybrid-sedan": "Combines engine service needs with electric drivetrain components",
        "gas-sedan": "Regular engine service, fluids, and standard wear parts",
        "diesel-truck": "Heavier-duty service intervals and diesel-specific maintenance needs",
      },
    ],
    [
      "End of life",
      {
        "ev-sedan": "Battery recycling and material recovery are central to end-of-life impact",
        "hybrid-sedan": "Smaller battery recycling plus standard vehicle recycling",
        "gas-sedan": "Standard vehicle recycling and parts recovery",
        "diesel-truck": "Heavier material recovery volume due to vehicle size",
      },
    ],
  ],
  coffee: [
    [
      "Raw materials",
      {
        "coffee-pods": "Coffee grounds, plastic or aluminum capsule shell, foil seal",
        "coffee-instant": "Coffee extract, drying agents, packaging jar or sachet",
        "coffee-drip": "Ground coffee beans, paper filter, packaging bag",
        "coffee-fairtrade": "Certified ground coffee beans, paper filter, packaging bag",
      },
    ],
    [
      "Parts and assemblies",
      {
        "coffee-pods": "Capsule shell, filter membrane, foil lid, outer packaging",
        "coffee-instant": "Dried coffee granules, jar or sachet packaging",
        "coffee-drip": "Bagged ground coffee, disposable paper filter",
        "coffee-fairtrade": "Bagged certified ground coffee, disposable paper filter",
      },
    ],
    [
      "Manufacturing",
      {
        "coffee-pods": "Roasting, grinding, capsule filling, and sealing",
        "coffee-instant": "Roasting, brewing, freeze- or spray-drying, packaging",
        "coffee-drip": "Roasting, grinding, bagging",
        "coffee-fairtrade": "Roasting, grinding, bagging under certified supply chain audits",
      },
    ],
    [
      "Use",
      {
        "coffee-pods": "Single-serve brewing machine with per-cup water heating",
        "coffee-instant": "Hot water added directly; no dedicated brewing equipment required",
        "coffee-drip": "Drip machine brews a full pot, heating water for the batch",
        "coffee-fairtrade": "Drip machine brews a full pot, heating water for the batch",
      },
    ],
    [
      "Maintenance",
      {
        "coffee-pods": "Machine descaling and pod storage; no filter replacement",
        "coffee-instant": "No brewing equipment maintenance required",
        "coffee-drip": "Reusable filter basket cleaning and machine descaling",
        "coffee-fairtrade": "Reusable filter basket cleaning and machine descaling",
      },
    ],
    [
      "End of life",
      {
        "coffee-pods": "Capsule recycling requires separating plastic/aluminum from grounds and foil",
        "coffee-instant": "Jar or sachet recycling depends on local packaging programs",
        "coffee-drip": "Paper filter and grounds are commonly compostable",
        "coffee-fairtrade": "Paper filter and grounds are commonly compostable",
      },
    ],
  ],
};

const evidenceItems = [
  [
    "Seeded TerraScore product graph",
    "Available",
    "Car and coffee product families, assemblies, lifecycle stages, and score explainability records already exist in the app.",
  ],
  [
    "OpenLCA / Federal LCA Commons candidate import",
    "Future",
    "Useful for battery, fuel, materials, and agricultural process baselines.",
  ],
  [
    "Cross-category comparison model",
    "Mocked",
    "Needs seeded product data or imported LCA references before comparisons across the full car and coffee sets become fully real.",
  ],
  [
    "Functional-unit review",
    "Required",
    "Compared products must share the same functional unit (such as distance driven or cups brewed), geography, and lifetime assumptions.",
  ],
];

const infoText = {
  terraScore:
    "The main TerraScore is a 0-100 matrix score derived from the twelve weighted impact categories. It is useful for product comparison inside the same product family and functional unit.",
  confidence:
    "Confidence summarizes evidence strength and completeness. It should stay separate from the score so users can distinguish a strong claim from an uncertain one.",
  trueCost:
    "True cost is a combination of direct product costs and the extended cost of impacts associated with the product lifecycle.",
  footprint:
    "Total footprint is the absolute impact ledger view: unit-bearing quantities such as kg CO2e, liters of water, or other impact totals.",
};

const insightRowsByCategory = {
  cars: [
    [
      "Best simple read",
      {
        "ev-sedan":
          "Lowest use-phase footprint if charged on a clean grid, but battery production adds significant upfront burden.",
        "hybrid-sedan":
          "Middle-ground option that lowers fuel use without the full battery production burden of an EV.",
        "gas-sedan":
          "Lowest production footprint, but tailpipe emissions dominate over the vehicle's lifetime.",
        "diesel-truck":
          "Highest footprint in this set, driven by vehicle size, weight, and fuel use.",
      },
    ],
    [
      "Why the gap exists",
      {
        "ev-sedan":
          "Large battery pack materials and cell manufacturing add upfront impact that gasoline vehicles do not have.",
        "hybrid-sedan":
          "A smaller battery plus a gasoline engine splits the burden between production and use phases.",
        "gas-sedan":
          "No battery burden, but all propulsion energy comes from tailpipe combustion.",
        "diesel-truck":
          "Larger size, higher weight, and lower fuel efficiency compound both production and use-phase impacts.",
      },
    ],
    [
      "What could change it",
      {
        "ev-sedan":
          "A cleaner regional grid, longer battery life, and strong battery recycling meaningfully improve the lifetime result.",
        "hybrid-sedan":
          "Higher electric-only driving share and battery durability can shift the balance further in its favor.",
        "gas-sedan":
          "Improved fuel efficiency and reduced annual mileage narrow the gap versus electrified options.",
        "diesel-truck":
          "Payload/towing use cases, route efficiency, and newer emissions controls can offset some of the burden.",
      },
    ],
  ],
  coffee: [
    [
      "Best simple read",
      {
        "coffee-pods":
          "Most convenient format, but the highest packaging and waste footprint per cup.",
        "coffee-instant":
          "Lower packaging mass, but processing energy is high relative to other formats.",
        "coffee-drip":
          "Solid environmental baseline, but sourcing practices are not independently verified.",
        "coffee-fairtrade":
          "Comparable environmental footprint to conventional drip with meaningfully better labor and sourcing outcomes.",
      },
    ],
    [
      "Why the gap exists",
      {
        "coffee-pods":
          "Single-serve plastic and aluminum packaging adds material and waste burden that bulk formats avoid.",
        "coffee-instant":
          "Freeze-drying or spray-drying requires more processing energy per cup than simple grinding and brewing.",
        "coffee-drip":
          "Simple preparation keeps the environmental footprint low, but the supply chain lacks certification.",
        "coffee-fairtrade":
          "Certification standards address labor and sourcing risk without changing the core brewing method.",
      },
    ],
    [
      "What could change it",
      {
        "coffee-pods":
          "Wider pod recycling participation and lower-impact packaging materials would reduce this gap.",
        "coffee-instant":
          "More efficient drying processes and renewable process energy could lower this format's footprint.",
        "coffee-drip":
          "Adding third-party certification would close most of the gap with the fairtrade option.",
        "coffee-fairtrade":
          "Broader certification coverage and audited supply chains would further strengthen confidence in this result.",
      },
    ],
  ],
};

const studyTree = [
  ["Product system", "Battery electric sedan lifecycle", true],
  ["Process", "Battery pack assembly", false],
  ["Process", "Motor and controller", false],
  ["Process", "Aluminum body panel fabrication", false],
  ["Process", "Final assembly", false],
  ["Process", "Use phase electricity", false],
  ["Process", "Battery recovery scenario", false],
];
const flowRows = [
  [
    "Lithium-ion battery cells",
    "Input",
    "82",
    "kWh capacity",
    "Battery baseline v1.2",
    "Needs review",
  ],
  [
    "Aluminum body material",
    "Input",
    "320",
    "kg",
    "USLCI aluminum process",
    "Mapped",
  ],
  [
    "Copper wiring and controller",
    "Input",
    "48",
    "kg",
    "OpenLCA import candidate",
    "Needs review",
  ],
  [
    "Vehicle assembly",
    "Reference output",
    "1",
    "item",
    "Study foreground data",
    "Verified",
  ],
  [
    "Battery recovery credit",
    "Avoided burden",
    "38",
    "kg material recovered",
    "Recycling scenario v0.4",
    "Assumption",
  ],
];
const qualityRows = [
  [
    "Source reliability",
    82,
    "Federal/public dataset references are present for major material flows.",
  ],
  [
    "Method quality",
    74,
    "Functional unit and system boundary are documented; battery assumptions need review.",
  ],
  [
    "Recency",
    68,
    "Several baseline datasets require current-version verification.",
  ],
  [
    "Review status",
    61,
    "One reviewer has checked the primary assembly records.",
  ],
];
const researchImpacts = [
  ["Climate and Energy", 68],
  ["Water", 62],
  ["Biodiversity and Habitat", 66],
  ["Materials and Resource Use", 54],
  ["Waste and Circularity", 59],
];
const readiness = [
  ["Required flows mapped", 84],
  ["Source provenance complete", 78],
  ["Data quality reviewed", 61],
  ["Public score ready", 54],
];
const reviewItems = [
  "Verify battery-cell source version",
  "Map controller flow to taxonomy",
  "Confirm regional electricity mix",
  "Review battery recovery assumption",
];

let selectedProductId =
  new URLSearchParams(window.location.search).get("product") || "ev-sedan";
let scoreExpanded = true;
let comparisonTab = "summary";
let researchTab = "flows";
let selectedNode = "Battery pack assembly";
let comparedIds = categoryDefaults.cars.slice();

function getProduct(id) {
  return products.find((product) => product.id === id) || products[0];
}

function scoreColor(value) {
  const normalizedValue = Math.max(0, Math.min(100, Number(value) || 0));
  return `hsl(${Math.round(normalizedValue * 1.2)}, 62%, 38%)`;
}

function wireShell() {
  const page = document.body.dataset.page;
  const demoPages = new Set(["product", "comparison", "research"]);
  document
    .querySelectorAll("[data-nav]")
    .forEach((link) => {
      const isDemoLink = link.dataset.nav === "demo";
      const isSupportLink = link.dataset.nav === "support";
      const isActivePage = link.dataset.nav === page;
      link.classList.toggle(
        "active",
        isActivePage ||
          (isDemoLink && demoPages.has(page)) ||
          (isSupportLink && page === "about"),
      );
    });
  const navGroup = document.querySelector(".nav-group");
  const dropdownTrigger = document.querySelector(".nav-dropdown-trigger");
  if (navGroup && dropdownTrigger) {
    const setDropdownOpen = (open) => {
      navGroup.classList.toggle("open", open);
      dropdownTrigger.setAttribute("aria-expanded", String(open));
    };
    if (demoPages.has(page)) {
      setDropdownOpen(true);
    }
    dropdownTrigger.addEventListener("click", (event) => {
      event.preventDefault();
      const isOpen = navGroup.classList.contains("open");
      setDropdownOpen(!isOpen);
    });
    document.addEventListener("click", (event) => {
      if (!navGroup.contains(event.target)) {
        setDropdownOpen(false);
      }
    });
  }
  const menu = document.querySelector(".mobile-menu");
  const nav = document.querySelector("#site-nav");
  if (menu && nav) {
    menu.addEventListener("click", () => {
      const expanded = menu.getAttribute("aria-expanded") === "true";
      menu.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("open", !expanded);
    });
  }
  const paypal = document.querySelector("#paypal-link");
  const venmo = document.querySelector("#venmo-link");
  if (paypal) {
    paypal.href = supportLinks.paypal;
    paypal.target = "_blank";
  }
  if (venmo) {
    venmo.href = supportLinks.venmo;
    venmo.target = "_blank";
  }
}

function metricBar(value) {
  return `<div class="linear"><span style="width:${value}%;background:${scoreColor(value)}"></span></div>`;
}

function lowerIsBetterBar(value) {
  return `<div class="linear"><span style="width:${value}%;background:${scoreColor(100 - value)}"></span></div>`;
}

function productSelectHtml(id = "product-select") {
  const options = Object.keys(categoryDefaults)
    .map(
      (category) =>
        `<optgroup label="${categoryLabels[category]}">${products
          .filter((product) => product.category === category)
          .map(
            (product) =>
              `<option value="${product.id}" ${product.id === selectedProductId ? "selected" : ""}>${product.name}</option>`,
          )
          .join("")}</optgroup>`,
    )
    .join("");
  return `<select id="${id}" aria-label="Choose product">${options}</select>`;
}

function compareAddSelectHtml(category, comparedIdsList) {
  const options = products
    .filter(
      (product) =>
        product.category === category && !comparedIdsList.includes(product.id),
    )
    .map((product) => `<option value="${product.id}">${product.name}</option>`)
    .join("");
  return `<select id="compare-add-select" aria-label="Choose product">${options}</select>`;
}

function scoreTile(title, value, caption, topic = "") {
  const infoButton = topic
    ? '<button class="icon-button info" type="button" data-info="' +
      topic +
      '">i</button>'
    : "";
  return `<article class="score-tile" ${topic ? `data-info="${topic}"` : ""}><div><p class="caption uppercase">${title}</p><h3>${value}</h3></div>${caption ? `<p>${caption}</p>` : ""}${infoButton}</article>`;
}

function renderProductView() {
  const product = getProduct(selectedProductId);
  const root = document.querySelector("#product-view");
  if (!root) return;
  root.innerHTML = `
    <section class="product-header paper-card" style="--product-color:${product.color}">
      <div class="product-title-wrap"><div class="product-icon">${product.icon}</div><div><p class="overline">Product profile</p><h1>${product.name}</h1><p>${product.subtitle}</p></div></div>
      <button class="terra-score-card" type="button" id="score-toggle"><p class="caption uppercase">TerraScore</p><strong>${product.terraScore}</strong><span>Metric-based 0-100 score</span><button class="icon-button info" type="button" data-info="terraScore">i</button></button>
    </section>
    <section class="metrics-panel paper-card" id="metrics-panel"><h2>Twelve impact metrics</h2><p>${scoreExpanded ? "Expanded so the category drivers are visible." : "Click the main score or this panel to expand the metric-based breakdown."}</p>${scoreExpanded ? `<div class="metric-grid">${metricCategories.map((category, index) => `<div class="metric-mini"><div><strong>${category}</strong><span>${product.metrics[index]}</span></div>${metricBar(product.metrics[index])}</div>`).join("")}</div>` : '<button class="button outlined">Open metric breakdown</button>'}</section>
    <section class="mui-grid three">${scoreTile("Retail / MSRP", product.retailCost, "Market purchase price")}${scoreTile("True cost", product.trueCost, "Externality range estimate", "trueCost")}${scoreTile("Total footprint", product.totalFootprint, "Absolute impact ledger", "footprint")}</section>
    <section class="product-lower-grid"><article class="score-tile" data-info="confidence"><div><p class="caption uppercase">Confidence</p><h3>${product.confidence}%</h3></div><p>Evidence strength and completeness</p>${metricBar(product.confidence)}</article><article class="paper-card highlights"><p class="caption uppercase">Product / impact highlights</p><div>${product.highlights.map((highlight) => `<p>${highlight}</p>`).join("")}</div></article></section>
  `;
  document.querySelector("#score-toggle").addEventListener("click", () => {
    scoreExpanded = !scoreExpanded;
    renderProductView();
  });
  document.querySelector("#metrics-panel").addEventListener("click", () => {
    scoreExpanded = !scoreExpanded;
    renderProductView();
  });
  wireInfoDialog();
}

function wireProductPage() {
  const select = document.querySelector("#product-select");
  if (!select) return;
  select.innerHTML = Object.keys(categoryDefaults)
    .map(
      (category) =>
        `<optgroup label="${categoryLabels[category]}">${products
          .filter((product) => product.category === category)
          .map((product) => `<option value="${product.id}">${product.name}</option>`)
          .join("")}</optgroup>`,
    )
    .join("");
  select.value = selectedProductId;
  select.addEventListener("change", (event) => {
    selectedProductId = event.target.value;
    renderProductView();
  });
  renderProductView();
}

function wireInfoDialog() {
  const dialog = document.querySelector("#info-dialog");
  if (!dialog) return;
  document.querySelectorAll("[data-info]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const topic = button.dataset.info;
      document.querySelector("#dialog-title").textContent = topic
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (char) => char.toUpperCase());
      document.querySelector("#dialog-text").textContent =
        infoText[topic] || "";
      dialog.showModal();
    });
  });
  dialog.querySelector(".dialog-close").onclick = () => dialog.close();
}

function wireSearch() {
  const input = document.querySelector("#product-search-input");
  const results = document.querySelector("#search-results");
  if (!input || !results) return;
  function renderResults() {
    const query = input.value.trim().toLowerCase();
    const matches = query
      ? products.filter(
          (product) =>
            product.name.toLowerCase().includes(query) ||
            product.shortName.toLowerCase().includes(query),
        )
      : [];
    results.innerHTML = matches
      .map(
        (product) =>
          `<a class="search-result" href="product.html?product=${product.id}" style="--product-color:${product.color}"><span class="product-icon small">${product.icon}</span><span><strong>${product.name}</strong><small>${product.subtitle}</small></span><b>${product.terraScore}</b></a>`,
      )
      .join("");
  }
  input.addEventListener("input", renderResults);
  document.querySelectorAll("[data-open-product]").forEach((button) =>
    button.addEventListener("click", () => {
      window.location.href = `product.html?product=${button.dataset.openProduct}`;
    }),
  );
}

function renderComparison() {
  const comparedProducts = comparedIds.map(getProduct);
  const category = comparedProducts[0]?.category || "cars";
  const insightRows = insightRowsByCategory[category];
  const winner = comparedProducts.reduce(
    (best, product) => (product.terraScore > best.terraScore ? product : best),
    comparedProducts[0],
  );
  const root = document.querySelector("#comparison-view");
  if (!root) return;
  const canAdd = comparedProducts.length < 4;
  const row = (label, caption, renderValue) =>
    `<div class="comparison-row"><div><strong>${label}</strong>${caption ? `<p>${caption}</p>` : ""}</div>${comparedProducts.map(renderValue).join("")}${canAdd ? "<div></div>" : ""}</div>`;
  root.innerHTML = `<div class="category-switch">${Object.keys(categoryDefaults)
    .map(
      (categoryId) =>
        `<button class="tab ${categoryId === category ? "active" : ""}" data-compare-category="${categoryId}">${categoryLabels[categoryId]}</button>`,
    )
    .join("")}</div>
  <div class="comparison-scroll" style="--compare-columns:${comparedProducts.length + (canAdd ? 1 : 0)}">
    <div class="comparison-columns"><div></div>${comparedProducts.map((product) => `<article class="compare-product-card ${product.id === winner.id ? "winner" : ""}" style="--product-color:${product.color}"><span class="product-icon">${product.icon}</span><div><h2>${product.shortName}</h2>${product.id === winner.id ? '<span class="chip small">lower burden choice</span>' : ""}<p>${product.name}</p>${comparedProducts.length > 2 ? `<button class="text-button" data-remove="${product.id}">Remove</button>` : ""}</div></article>`).join("")}${canAdd ? `<article class="add-card"><span class="add-circle">+</span><strong>Add product</strong>${compareAddSelectHtml(category, comparedIds)}<button class="button contained" id="add-compare">Add to compare</button></article>` : ""}</div>
    <h2 class="comparison-section-title">Score lenses</h2>
    ${row("TerraScore", "Metric-based 0-100 score", (product) => `<div><strong class="big-score" style="color:${scoreColor(product.terraScore)}">${product.terraScore}</strong></div>`)}
    ${row("Retail / MSRP", "Market purchase price", (product) => `<div><strong>${product.retailCost}</strong></div>`)}
    ${row("True cost", "Externality range estimate", (product) => `<div><strong>${product.trueCost}</strong></div>`)}
    ${row("Total footprint", "Absolute impact ledger", (product) => `<div><strong>${product.totalFootprint}</strong></div>`)}
    ${row("Confidence", "Evidence strength and completeness", (product) => `<div><strong>${product.confidence}%</strong>${metricBar(product.confidence)}</div>`)}
    <h2 class="comparison-section-title">Practical insights</h2>
    ${insightRows.map(([label, values]) => row(label, "", (product) => `<div><p>${values[product.id]}</p></div>`)).join("")}
    <h2 class="comparison-section-title">Metric snapshot</h2>
    ${metricCategories.map((cat, index) => row(cat, "", (product) => `<div class="bar-cell">${metricBar(product.metrics[index])}<span>${product.metrics[index]}</span></div>`)).join("")}
    <div class="tabs">${[
      ["summary", "Impact Drivers"],
      ["lifecycle", "Lifecycle Layers"],
      ["evidence", "Evidence Trail"],
      ["lca", "LCA Handoff"],
    ]
      .map(
        ([id, label]) =>
          `<button class="tab ${comparisonTab === id ? "active" : ""}" data-comp-tab="${id}">${label}</button>`,
      )
      .join("")}</div>
    <div class="comparison-detail">${renderComparisonDetail(comparedProducts, row, category)}</div>
  </div>
  `;
  root.querySelectorAll("[data-remove]").forEach((button) =>
    button.addEventListener("click", () => {
      comparedIds = comparedIds.filter((id) => id !== button.dataset.remove);
      renderComparison();
    }),
  );
  const addButton = document.querySelector("#add-compare");
  if (addButton)
    addButton.addEventListener("click", () => {
      const select = document.querySelector("#compare-add-select");
      if (select.value && !comparedIds.includes(select.value))
        comparedIds.push(select.value);
      renderComparison();
    });
  root.querySelectorAll("[data-comp-tab]").forEach((button) =>
    button.addEventListener("click", () => {
      comparisonTab = button.dataset.compTab;
      renderComparison();
    }),
  );
  root.querySelectorAll("[data-compare-category]").forEach((button) =>
    button.addEventListener("click", () => {
      comparedIds = categoryDefaults[button.dataset.compareCategory].slice();
      renderComparison();
    }),
  );
  syncStickyComparisonScroll();
}

function syncStickyComparisonScroll() {
  const comparisonScroll = document.querySelector(".comparison-scroll");
  const stickyScroll = document.querySelector("#comparison-sticky-scroll");
  const stickySpacer = document.querySelector(".sticky-x-scroll-spacer");
  if (!comparisonScroll || !stickyScroll || !stickySpacer) return;

  const updateVisibility = () => {
    stickySpacer.style.width = `${comparisonScroll.scrollWidth}px`;
    stickyScroll.classList.toggle(
      "is-visible",
      comparisonScroll.scrollWidth > comparisonScroll.clientWidth,
    );
  };

  updateVisibility();
  stickyScroll.scrollLeft = comparisonScroll.scrollLeft;
  comparisonScroll.addEventListener("scroll", () => {
    stickyScroll.scrollLeft = comparisonScroll.scrollLeft;
  });
  stickyScroll.addEventListener("scroll", () => {
    comparisonScroll.scrollLeft = stickyScroll.scrollLeft;
  });
  window.addEventListener("resize", updateVisibility, { once: true });
}

function renderComparisonDetail(comparedProducts, row, category) {
  if (comparisonTab === "summary")
    return impactRowsByCategory[category]
      .map(([label, values, note]) =>
        row(
          label,
          "",
          (product) =>
            `<div>${lowerIsBetterBar(values[product.id])}<p>${note}</p></div>`,
        ),
      )
      .join("");
  if (comparisonTab === "lifecycle")
    return lifecycleStagesByCategory[category]
      .map(([stage, values]) =>
        row(stage, "", (product) => `<div><p>${values[product.id]}</p></div>`),
      )
      .join("");
  if (comparisonTab === "evidence")
    return evidenceItems
      .map(([label, status, detail]) =>
        row(
          label,
          "",
          () =>
            `<div><span class="chip small">${status}</span><p>${detail}</p></div>`,
        ),
      )
      .join("");
  const lcaRows = [
    [
      "Import model",
      "OpenLCA JSON-LD, Federal LCA Commons process datasets, or a TerraScore CSV/XML template.",
    ],
    [
      "Map flows",
      "Match battery, aluminum, electricity, and mechanical part flows to TerraScore taxonomy nodes.",
    ],
    [
      "Review assumptions",
      "Compare geography, lifetime, allocation method, electricity mix, and uncertainty before publishing.",
    ],
    [
      "Generate report",
      "Export a readable comparison summary plus a technical appendix for researchers or partners.",
    ],
  ];
  return (
    lcaRows
      .map(([title, description]) =>
        row(title, "", () => `<div><p>${description}</p></div>`),
      )
      .join("") +
    '<a class="button contained research-link" href="research.html">Open research dashboard shell</a>'
  );
}

function renderResearch() {
  const tree = document.querySelector("#study-tree");
  if (!tree) return;
  tree.innerHTML = studyTree
    .map(
      ([type, label, root]) =>
        `<button class="study-node ${label === selectedNode ? "active" : ""}" data-node="${label}"><span>${type}</span><strong>${root ? "[root] " : ""}${label}</strong></button>`,
    )
    .join("");
  tree.querySelectorAll("[data-node]").forEach((button) =>
    button.addEventListener("click", () => {
      selectedNode = button.dataset.node;
      document.querySelector("#selected-process").textContent = selectedNode;
      renderResearch();
    }),
  );
  document.querySelector("#research-tabs").innerHTML = [
    ["flows", "Inputs / outputs"],
    ["model", "Modeling and validation"],
    ["quality", "Data quality"],
    ["analysis", "Impact analysis"],
  ]
    .map(
      ([id, label]) =>
        `<button class="tab ${researchTab === id ? "active" : ""}" data-research-tab="${id}">${label}</button>`,
    )
    .join("");
  document.querySelectorAll("[data-research-tab]").forEach((button) =>
    button.addEventListener("click", () => {
      researchTab = button.dataset.researchTab;
      renderResearchPanel();
      document
        .querySelectorAll("[data-research-tab]")
        .forEach((tab) =>
          tab.classList.toggle(
            "active",
            tab.dataset.researchTab === researchTab,
          ),
        );
    }),
  );
  document.querySelector("#readiness-list").innerHTML = readiness
    .map(
      ([label, value]) =>
        `<div class="readiness-row"><div><strong>${label}</strong><span>${value}%</span></div>${metricBar(value)}</div>`,
    )
    .join("");
  document.querySelector("#review-list").innerHTML = reviewItems
    .map(
      (item) =>
        `<article class="review-item"><strong>${item}</strong><p>Pending research review</p></article>`,
    )
    .join("");
  renderResearchPanel();
}

function renderResearchPanel() {
  const panel = document.querySelector("#research-panel");
  if (!panel) return;
  if (researchTab === "flows") {
    panel.innerHTML = `<div class="panel-toolbar"><h2>Process flows</h2><button class="button text">+ Add flow</button></div><div class="table-wrap"><table><thead><tr><th>Flow</th><th>Direction</th><th>Amount</th><th>Unit</th><th>Source / provider</th><th>Status</th></tr></thead><tbody>${flowRows.map((row) => `<tr>${row.map((cell, index) => `<td>${index === 5 ? `<span class="chip small">${cell}</span>` : cell}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
    return;
  }
  if (researchTab === "model") {
    panel.innerHTML = `<div class="mui-grid two padded">${[
      ["System boundary", "Cradle to grave with battery recovery scenario."],
      [
        "Allocation method",
        "Cut-off allocation; document avoided-burden assumptions separately.",
      ],
      [
        "Geography",
        "U.S. urban grid baseline; needs region-specific sensitivity test.",
      ],
      [
        "Time period",
        "2026 product baseline with source-specific data vintage.",
      ],
    ]
      .map(
        ([label, value]) =>
          `<article class="paper-card compact"><p class="caption uppercase">${label}</p><strong>${value}</strong></article>`,
      )
      .join("")}</div>`;
    return;
  }
  const rows = researchTab === "quality" ? qualityRows : researchImpacts;
  panel.innerHTML = `${researchTab === "analysis" ? '<div class="panel-toolbar"><div><h2>Contribution analysis</h2><p>Current study result, suitable for review before a public product score is updated.</p></div><span class="chip small">Provisional</span></div>' : '<div class="panel-toolbar"><div><h2>Evidence quality and review</h2><p>Each flow keeps source provenance, data quality attributes, uncertainty notes, and reviewer decisions separate from the underlying quantity.</p></div></div>'}${rows.map(([label, value, detail = ""]) => `<div class="research-metric"><div><strong>${label}</strong><span>${value}%</span></div>${metricBar(value)}${detail ? `<p>${detail}</p>` : ""}</div>`).join("")}`;
}

function init() {
  wireShell();
  const page = document.body.dataset.page;
  if (page === "search") wireSearch();
  if (page === "product") wireProductPage();
  if (page === "comparison") renderComparison();
  if (page === "research") renderResearch();
}

document.addEventListener("DOMContentLoaded", init);
