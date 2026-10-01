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

const publicImpactLenses = [
  { name: "Climate and Energy", indices: [0], description: "Climate, energy demand, and energy sources." },
  { name: "Resources and Circularity", indices: [5, 6], description: "Materials, resource demand, waste, reuse, and recovery." },
  { name: "Water, Land and Nature", indices: [2, 3, 4], description: "Water, land, soil, biodiversity, and habitat." },
  { name: "Health and Safety", indices: [1, 7], description: "Air quality, exposure, human health, and safety." },
  { name: "People, Equity and Governance", indices: [8, 9, 10, 11], description: "Labor, equity, livelihoods, transparency, and accountability." },
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
    impactScore: 74,
    retailCost: "$42,000 MSRP",
    extendedImpactCost: "$2,500-$10,000",
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
    impactScore: 70,
    retailCost: "$31,500 MSRP",
    extendedImpactCost: "$1,500-$6,500",
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
    impactScore: 58,
    retailCost: "$27,800 MSRP",
    extendedImpactCost: "$2,700-$8,200",
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
    impactScore: 41,
    retailCost: "$58,000 MSRP",
    extendedImpactCost: "$4,000-$13,000",
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
    impactScore: 46,
    retailCost: "$0.65 / cup",
    extendedImpactCost: "$0.20-$0.45 / cup",
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
    impactScore: 61,
    retailCost: "$0.22 / cup",
    extendedImpactCost: "$0.06-$0.16 / cup",
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
    impactScore: 66,
    retailCost: "$0.18 / cup",
    extendedImpactCost: "$0.04-$0.12 / cup",
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
    impactScore: 79,
    retailCost: "$0.24 / cup",
    extendedImpactCost: "$0.03-$0.10 / cup",
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
    "Seeded platform product graph",
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

// Each entry may be a plain string or { title, text } when the auto-derived title reads poorly.
const infoText = {
  impactScore: {
    title: "Impact Score",
    text: "A 0-100 summary of how this product performs across twelve impact categories, where higher is better. It is designed for comparing similar products doing the same job — not for comparing a car to a cup of coffee. Think of it as a starting point that tells you where to look closer, not a final verdict.",
  },
  confidence: {
    title: "Confidence",
    text: "How much evidence sits behind the score, and how complete and current that evidence is. A high score with low confidence means the product may look good, but we do not yet have enough verified data to be sure. We keep this separate from the score on purpose, so a strong claim is never confused with a certain one.",
  },
  retailCost: {
    title: "Retail / MSRP",
    text: "The everyday market price you would actually pay for this product. It is shown next to the impact figures so you can see price and environmental cost side by side, rather than only one or the other.",
  },
  extendedImpactCost: {
    title: "Extended impact cost",
    text: "An estimate of costs created by a product that are not included in its price. Current prototype ranges are partial and should not be read as the full cost. A fuller view would need evidence-backed estimates for lost income, stronger storms and damage, crop failures, wildfires, gaps between actual and living wages, and the costs of preventing and repairing harm: shifting to regenerative practices, restoring forests and water systems, rebuilding ecosystems, climate mitigation, and sequestering carbon. Those categories are not yet consistently quantified here. Any future estimates need sources, assumptions, boundaries, and uncertainty shown; this figure is not a comprehensive social or ecological cost.",
  },
  footprint: {
    title: "Total footprint",
    text: "The absolute, physical quantities behind the product — for example kilograms of CO2 equivalent per year, or per cup. Unlike the 0-100 score, these are real units you can add up, which makes them useful for understanding total scale rather than relative ranking.",
  },
  publicLenses: {
    title: "Public impact lenses",
    text: "Five plain-language groupings that bundle the twelve detailed impact categories into themes most people care about. Each lens is an average of the categories it covers. Click any lens to see exactly which categories are inside it and how the product scored on each.",
  },
  highlights: {
    title: "Product / impact highlights",
    text: "The handful of findings that matter most for this product — usually the biggest driver of its footprint and the factors that would most change the result. These are meant to give context that a single number cannot.",
  },
  impactDrivers: {
    title: "Impact drivers",
    text: "The specific stages and activities that contribute most to a product's total impact. Shorter bars mean lower impact. This view answers the question a single score cannot: where is the damage actually coming from?",
  },
  lifecycleStages: {
    title: "Lifecycle stages",
    text: "A product's impact is spread across its whole life: raw materials, production, transportation, use, and end of life. Two products can have similar totals but very different profiles — one heavy upfront, another heavy in daily use. That difference often matters more than the total.",
  },
  evidenceTrail: {
    title: "Evidence trail",
    text: "The underlying sources behind these numbers, including what kind of source it is, how recent it is, and whether it has been reviewed. Being able to check where a number came from is the whole point of this project.",
  },
  comparisonScore: {
    title: "Comparing products",
    text: "Products are only compared within the same family and the same functional unit — for example, sedans driven 10,000 miles a year, or a single cup of coffee. Comparing across different categories would be misleading, so the tool does not offer it.",
  },
  householdFootprint: {
    title: "Your estimated footprint",
    text: "This is an illustrative per-person figure derived by dividing a sample two-person household estimate in half; it is not a measurement of your own life. The US and global reference bars use Our World in Data's 2023 national greenhouse-gas emissions per-capita dataset, including land-use change. Those are territorial national averages, not personal consumption footprints, so the chart gives broad context rather than a like-for-like ranking.",
  },
  categoryShare: {
    title: "Share of total",
    text: "The pie slices show each category's share of the illustrative profile's total. The US and Global percentile sliders are fictional placeholders, not measured or sourced percentiles. In a real version, a lower percentile would mean a smaller estimated footprint than more people in that comparison group; green indicates lower and red higher. Do not interpret the displayed mock percentiles as facts.",
  },
  sampleExtendedImpactScenario: {
    title: "Fictional extended-impact scenario",
    text: "$27,400 per person per year is an invented demo value, not a verified fact or estimate. It is intentionally dramatic to demonstrate how a future total-impact view might make costs beyond a product's price visible, including climate damages, unequal wages, ecosystem loss, and repair or restoration. No cited evidence, attribution model, or calculation supports this specific number. It should not be used to make decisions, describe actual communities or workers, or claim that a particular lifestyle causes this exact amount of harm. Real public estimates must be built from reviewed sources, defined boundaries, transparent methods, and uncertainty ranges.",
  },
  studyReadiness: {
    title: "Study readiness",
    text: "How close this study is to being complete enough to publish a public score. Each line tracks a different requirement — whether the required flows are mapped, whether sources are documented, and whether a reviewer has checked the data. A score is only published once these are strong enough.",
  },
  contributionAnalysis: {
    title: "Contribution analysis",
    text: "Which parts of the modeled system contribute most to the result. This is what turns a single number back into something explainable: it shows which processes are driving the outcome and where better data would matter most.",
  },
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

// Illustrative annual profile for one person, derived from the two-person sample.
const myStuffProfile = {
  totalFootprint: 7.1,
  fictionalExtendedImpact: 27400,
  benchmarks: [
    { label: "Example person", value: 7.1, color: "#0f766e" },
    { label: "Global average (2023)", value: 6.7, color: "#d97706" },
    { label: "Average American (2023)", value: 17.7, color: "#b45309" },
  ],
  categories: [
    {
      id: "home",
      name: "Home and energy",
      icon: "HM",
      color: "#0f766e",
      footprint: 2.3,
      mockPercentiles: { us: 71, global: 94 },
      share: 32,
      summary:
        "Heating, cooling, and electricity usually make up the largest single share of a household footprint.",
      items: [
        ["Electricity use", "Grid mix matters more than total usage in many regions."],
        ["Natural gas heating", "Often the largest single driver in colder climates."],
        ["Water heating", "A steady year-round load that is easy to overlook."],
        ["Appliances and electronics", "Long-lived items where production impact matters."],
        ["Home materials and renovations", "Concrete, steel, and insulation carry heavy upfront impact."],
      ],
    },
    {
      id: "travel",
      name: "Travel and transportation",
      icon: "TR",
      color: "#8a5a12",
      footprint: 1.95,
      mockPercentiles: { us: 69, global: 96 },
      share: 27,
      summary:
        "Daily driving and occasional flights can rival each other, which surprises most people.",
      items: [
        ["Personal vehicle", "Fuel type and annual mileage dominate the result."],
        ["Air travel", "A few long flights can outweigh a year of commuting."],
        ["Public transit", "Shared trips spread impact across many riders."],
        ["Rideshare and delivery trips", "Short trips add up in dense areas."],
        ["Vehicle manufacturing", "Spread across the vehicle's service life."],
      ],
    },
    {
      id: "food",
      name: "Food and drink",
      icon: "FD",
      color: "#3b5b2a",
      footprint: 1.4,
      mockPercentiles: { us: 77, global: 87 },
      share: 20,
      summary:
        "What you eat generally matters more than how far it traveled to reach you.",
      items: [
        ["Meat and dairy", "Typically the largest driver within food."],
        ["Produce", "Seasonality and growing method shape the result."],
        ["Packaged and processed foods", "Processing and packaging both contribute."],
        ["Coffee and beverages", "Small per serving, meaningful over a year."],
        ["Food waste", "Wasted food carries the full impact of producing it."],
      ],
    },
    {
      id: "goods",
      name: "Goods and shopping",
      icon: "GS",
      color: "#2563eb",
      footprint: 0.8,
      mockPercentiles: { us: 63, global: 91 },
      share: 11,
      summary:
        "Impact is concentrated in manufacturing, so how long you keep something matters.",
      items: [
        ["Clothing and textiles", "Fast fashion cycles raise impact per wear."],
        ["Electronics and devices", "High upfront impact, extended by longer use."],
        ["Furniture and household goods", "Durability is the main lever."],
        ["Online orders and packaging", "Shipping speed changes the result."],
      ],
    },
    {
      id: "work",
      name: "Work",
      icon: "WK",
      color: "#7c2d12",
      footprint: 0.4,
      mockPercentiles: { us: 60, global: 88 },
      share: 6,
      summary:
        "Commuting and workplace energy use, counted as the share attributable to one person.",
      items: [
        ["Commuting", "Distance and mode drive most of this category."],
        ["Workplace energy", "Shared across everyone in the building."],
        ["Work equipment", "Laptops and peripherals, spread over their lifespan."],
        ["Business travel", "Concentrated in a small number of trips."],
      ],
    },
    {
      id: "entertainment",
      name: "Entertainment and leisure",
      icon: "EN",
      color: "#6d28d9",
      footprint: 0.25,
      mockPercentiles: { us: 57, global: 82 },
      share: 4,
      summary:
        "Usually a small share, though travel-heavy hobbies can change that quickly.",
      items: [
        ["Streaming and devices", "Data center energy per hour is small but constant."],
        ["Events and venues", "Travel to the venue often outweighs the event itself."],
        ["Hobbies and equipment", "Depends heavily on the specific activity."],
        ["Pets", "Mostly driven by pet food production."],
      ],
    },
  ],
};

let selectedProductId =
  new URLSearchParams(window.location.search).get("product") || "ev-sedan";
let scoreExpanded = false;
let comparisonTab = "summary";
let researchTab = "flows";
let selectedNode = "Battery pack assembly";
let comparedIds = categoryDefaults.cars.slice();
const expandedComparisonLenses = new Set();

function getProduct(id) {
  return products.find((product) => product.id === id) || products[0];
}

function scoreColor(value) {
  const normalizedValue = Math.max(0, Math.min(100, Number(value) || 0));
  return `hsl(${Math.round(normalizedValue * 1.2)}, 62%, 38%)`;
}

function getPublicLensScore(product, lens) {
  const values = lens.indices.map((index) => product.metrics[index]);
  return Math.round(values.reduce((total, value) => total + value, 0) / values.length);
}

function wireShell() {
  const page = document.body.dataset.page;
  const demoPages = new Set(["my-stuff", "product", "comparison", "research", "how-it-works"]);
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

function infoButton(topic) {
  return `<button class="icon-button info" type="button" data-info="${topic}" aria-label="What does this mean?" aria-haspopup="dialog">i</button>`;
}

function scoreTile(title, value, caption, topic = "") {
  return `<article class="score-tile" ${topic ? `data-info="${topic}"` : ""}><div><p class="caption uppercase">${title}</p><h3>${value}</h3></div>${caption ? `<p>${caption}</p>` : ""}${topic ? infoButton(topic) : ""}</article>`;
}

function renderProductView() {
  const product = getProduct(selectedProductId);
  const root = document.querySelector("#product-view");
  if (!root) return;
  root.innerHTML = `
    <section class="product-header paper-card" style="--product-color:${product.color}">
      <div class="product-title-wrap"><div class="product-icon">${product.icon}</div><div><p class="overline">Product profile</p><h1>${product.name}</h1><p>${product.subtitle}</p></div></div>
      <button class="impact-score-card" type="button" id="score-toggle"><p class="caption uppercase">Impact Score</p><strong>${product.impactScore}</strong><span>Metric-based 0-100 score</span><button class="icon-button info" type="button" data-info="impactScore">i</button></button>
    </section>
    <section class="metrics-panel paper-card"><h2>Public impact lenses ${infoButton("publicLenses")}</h2><p>Five plain-language lenses summarize the twelve governed impact categories.</p><div class="public-lens-grid">${publicImpactLenses.map((lens, lensIndex) => { const value = getPublicLensScore(product, lens); return `<button class="public-lens" type="button" data-lens-index="${lensIndex}" aria-haspopup="dialog"><div><strong>${lens.name}</strong><span>${value}</span></div>${metricBar(value)}<p>${lens.description}</p></button>`; }).join("")}</div><button class="button outlined metric-detail-toggle" type="button" id="metrics-detail-toggle">${scoreExpanded ? "Hide detailed metrics" : "Show detailed metrics"}</button>${scoreExpanded ? `<div class="metric-grid detailed-metrics">${metricCategories.map((category, index) => `<div class="metric-mini"><div><strong>${category}</strong><span>${product.metrics[index]}</span></div>${metricBar(product.metrics[index])}</div>`).join("")}</div>` : ""}</section>
    <section class="mui-grid three">${scoreTile("Retail / MSRP", product.retailCost, "Market purchase price", "retailCost")}${scoreTile("Extended impact cost", product.extendedImpactCost, "Partial estimate; wider costs not yet included", "extendedImpactCost")}${scoreTile("Total footprint", product.totalFootprint, "Absolute impact ledger", "footprint")}</section>
    <section class="product-lower-grid"><article class="score-tile" data-info="confidence"><div><p class="caption uppercase">Confidence</p><h3>${product.confidence}%</h3></div><p>Evidence strength and completeness</p>${metricBar(product.confidence)}${infoButton("confidence")}</article><article class="paper-card highlights"><p class="caption uppercase">Product / impact highlights ${infoButton("highlights")}</p><div>${product.highlights.map((highlight) => `<p>${highlight}</p>`).join("")}</div></article></section>
  `;
  document.querySelector("#score-toggle").addEventListener("click", () => {
    scoreExpanded = !scoreExpanded;
    renderProductView();
  });
  document.querySelector("#metrics-detail-toggle").addEventListener("click", () => {
    scoreExpanded = !scoreExpanded;
    renderProductView();
  });
  wireLensDialog(product);
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
      const entry = infoText[button.dataset.info];
      if (!entry) return;
      const fallbackTitle = button.dataset.info
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (char) => char.toUpperCase());
      document.querySelector("#dialog-title").textContent =
        entry.title || fallbackTitle;
      document.querySelector("#dialog-text").textContent = entry.text || entry;
      dialog.showModal();
    });
  });
  dialog.querySelector(".dialog-close").onclick = () => dialog.close();
}

function wireLensDialog(product) {
  const dialog = document.querySelector("#lens-dialog");
  if (!dialog) return;
  document.querySelectorAll("[data-lens-index]").forEach((card) => {
    card.addEventListener("click", () => {
      const lens = publicImpactLenses[Number(card.dataset.lensIndex)];
      const value = getPublicLensScore(product, lens);
      document.querySelector("#lens-dialog-title").textContent = lens.name;
      document.querySelector("#lens-dialog-score").textContent = value;
      document.querySelector("#lens-dialog-description").textContent = lens.description;
      document.querySelector("#lens-dialog-categories").innerHTML = lens.indices
        .map((index) => `<div class="lens-category"><div><strong>${metricCategories[index]}</strong><span>${product.metrics[index]}</span></div>${metricBar(product.metrics[index])}</div>`)
        .join("");
      dialog.showModal();
    });
  });
  dialog.querySelector(".dialog-close").onclick = () => dialog.close();
}

function wireLifecycleDialog() {
  const dialog = document.querySelector("#lifecycle-dialog");
  const trigger = document.querySelector("#lifecycle-explainer-trigger");
  if (!dialog || !trigger) return;
  trigger.addEventListener("click", () => dialog.showModal());
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
          `<a class="search-result" href="product.html?product=${product.id}" style="--product-color:${product.color}"><span class="product-icon small">${product.icon}</span><span><strong>${product.name}</strong><small>${product.subtitle}</small></span><b>${product.impactScore}</b></a>`,
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

const comparisonDetailTopics = {
  summary: "impactDrivers",
  lifecycle: "lifecycleStages",
  evidence: "evidenceTrail",
};

function renderComparison() {
  const comparedProducts = comparedIds.map(getProduct);
  const category = comparedProducts[0]?.category || "cars";
  const insightRows = insightRowsByCategory[category];
  const winner = comparedProducts.reduce(
    (best, product) => (product.impactScore > best.impactScore ? product : best),
    comparedProducts[0],
  );
  const root = document.querySelector("#comparison-view");
  if (!root) return;
  const canAdd = comparedProducts.length < 4;
  const allLensesExpanded = expandedComparisonLenses.size === publicImpactLenses.length;
  const row = (label, caption, renderValue, className = "", lensIndex = null) =>
    `<div class="comparison-row ${className}"${lensIndex === null ? "" : ` data-expand-lens="${lensIndex}" role="button" tabindex="0" aria-expanded="${expandedComparisonLenses.has(lensIndex)}"`}><div><strong>${label}</strong>${caption ? `<p>${caption}</p>` : ""}</div>${comparedProducts.map(renderValue).join("")}${canAdd ? "<div></div>" : ""}</div>`;
  root.innerHTML = `<div class="category-switch">${Object.keys(categoryDefaults)
    .map(
      (categoryId) =>
        `<button class="tab ${categoryId === category ? "active" : ""}" data-compare-category="${categoryId}">${categoryLabels[categoryId]}</button>`,
    )
    .join("")}</div>
  <div class="comparison-scroll" style="--compare-columns:${comparedProducts.length + (canAdd ? 1 : 0)}">
    <div class="comparison-columns"><div></div>${comparedProducts.map((product) => `<article class="compare-product-card ${product.id === winner.id ? "winner" : ""}" style="--product-color:${product.color}"><span class="product-icon">${product.icon}</span><div><h2>${product.shortName}</h2>${product.id === winner.id ? '<span class="chip small">lower burden choice</span>' : ""}<p>${product.name}</p>${comparedProducts.length > 2 ? `<button class="text-button" data-remove="${product.id}">Remove</button>` : ""}</div></article>`).join("")}${canAdd ? `<article class="add-card"><span class="add-circle">+</span><strong>Add product</strong>${compareAddSelectHtml(category, comparedIds)}<button class="button contained" id="add-compare">Add to compare</button></article>` : ""}</div>
    <h2 class="comparison-section-title">Score lenses ${infoButton("comparisonScore")}</h2>
    ${row(`Impact Score ${infoButton("impactScore")}`, "Metric-based 0-100 score", (product) => `<div><strong class="big-score" style="color:${scoreColor(product.impactScore)}">${product.impactScore}</strong></div>`)}
    ${row(`Retail / MSRP ${infoButton("retailCost")}`, "Market purchase price", (product) => `<div><strong>${product.retailCost}</strong></div>`)}
    ${row(`Extended impact cost ${infoButton("extendedImpactCost")}`, "Partial estimate; wider costs not yet included", (product) => `<div><strong>${product.extendedImpactCost}</strong></div>`)}
    ${row(`Total footprint ${infoButton("footprint")}`, "Absolute impact ledger", (product) => `<div><strong>${product.totalFootprint}</strong></div>`)}
    ${row(`Confidence ${infoButton("confidence")}`, "Evidence strength and completeness", (product) => `<div><strong>${product.confidence}%</strong>${metricBar(product.confidence)}</div>`)}
    <div class="comparison-section-title lens-section-title"><h2>Public impact lenses ${infoButton("publicLenses")}</h2><button class="button text" type="button" id="expand-all-lenses">${allLensesExpanded ? "Collapse all" : "Expand all"}</button></div>
    ${publicImpactLenses.map((lens, lensIndex) => { const expanded = expandedComparisonLenses.has(lensIndex); return row(lens.name, lens.description, (product) => { const value = getPublicLensScore(product, lens); return `<div class="bar-cell">${metricBar(value)}<span>${value}</span></div>`; }, "lens-summary-row", lensIndex) + (expanded ? lens.indices.map((metricIndex) => row(metricCategories[metricIndex], "Included governed category", (product) => `<div class="bar-cell">${metricBar(product.metrics[metricIndex])}<span>${product.metrics[metricIndex]}</span></div>`, "lens-category-row")).join("") : ""); }).join("")}
    <h2 class="comparison-section-title">Practical insights</h2>
    ${insightRows.map(([label, values]) => row(label, "", (product) => `<div><p>${values[product.id]}</p></div>`)).join("")}
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
      .join("")}${comparisonDetailTopics[comparisonTab] ? infoButton(comparisonDetailTopics[comparisonTab]) : ""}</div>
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
  const toggleLens = (lensIndex) => {
      if (expandedComparisonLenses.has(lensIndex)) expandedComparisonLenses.delete(lensIndex);
      else expandedComparisonLenses.add(lensIndex);
      renderComparison();
  };
  root.querySelectorAll("[data-expand-lens]").forEach((lens) => {
    lens.addEventListener("click", () => toggleLens(Number(lens.dataset.expandLens)));
    lens.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleLens(Number(lens.dataset.expandLens));
      }
    });
  });
  root.querySelector("#expand-all-lenses").addEventListener("click", () => {
    if (allLensesExpanded) expandedComparisonLenses.clear();
    else publicImpactLenses.forEach((lens, lensIndex) => expandedComparisonLenses.add(lensIndex));
    renderComparison();
  });
  root.querySelectorAll("[data-compare-category]").forEach((button) =>
    button.addEventListener("click", () => {
      comparedIds = categoryDefaults[button.dataset.compareCategory].slice();
      renderComparison();
    }),
  );
  syncStickyComparisonScroll();
  wireInfoDialog();
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
      "OpenLCA JSON-LD, Federal LCA Commons process datasets, or a platform CSV/XML template.",
    ],
    [
      "Map flows",
      "Match battery, aluminum, electricity, and mechanical part flows to platform taxonomy nodes.",
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
  wireInfoDialog();
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
  panel.innerHTML = `${researchTab === "analysis" ? `<div class="panel-toolbar"><div><h2>Contribution analysis ${infoButton("contributionAnalysis")}</h2><p>Current study result, suitable for review before a public product score is updated.</p></div><span class="chip small">Provisional</span></div>` : '<div class="panel-toolbar"><div><h2>Evidence quality and review</h2><p>Each flow keeps source provenance, data quality attributes, uncertainty notes, and reviewer decisions separate from the underlying quantity.</p></div></div>'}${rows.map(([label, value, detail = ""]) => `<div class="research-metric"><div><strong>${label}</strong><span>${value}%</span></div>${metricBar(value)}${detail ? `<p>${detail}</p>` : ""}</div>`).join("")}`;
  wireInfoDialog();
}

function renderMyStuff() {
  const root = document.querySelector("#my-stuff-view");
  if (!root) return;
  const { totalFootprint, fictionalExtendedImpact, benchmarks, categories } =
    myStuffProfile;
  let accumulatedShare = 0;
  const pieGradient = categories
    .map((category, index) => {
      const start = accumulatedShare;
      accumulatedShare += category.share;
      return `${category.color} ${start}% ${accumulatedShare}%`;
    })
    .join(", ");
  const benchmarkMax = Math.max(...benchmarks.map((benchmark) => benchmark.value));
  root.innerHTML = `
    <section class="my-stuff-summary">
      <article class="score-tile footprint-summary">
        <div><p class="caption uppercase">Estimated annual footprint ${infoButton("householdFootprint")}</p><h2>${totalFootprint.toFixed(1)} t CO2e / person / year</h2></div>
        <div class="footprint-benchmark-list">
          ${benchmarks.map((benchmark) => `<div class="footprint-benchmark-row"><div><strong>${benchmark.label}</strong><span>${benchmark.value.toFixed(1)} t</span></div><div class="footprint-benchmark-track" role="img" aria-label="${benchmark.label}: ${benchmark.value.toFixed(1)} tonnes CO2e per person per year"><span style="width:${(benchmark.value / benchmarkMax) * 100}%;background:${benchmark.color}"></span></div></div>`).join("")}
        </div>
        <p class="benchmark-source">2023 territorial greenhouse-gas emissions per person, including land use. <a href="https://ourworldindata.org/grapher/per-capita-ghg-emissions?tab=table&time=2023" target="_blank" rel="noreferrer">Source: Our World in Data</a>. The sample is illustrative and uses a different accounting basis.</p>
      </article>
      ${scoreTile("Illustrative extended impact", `$${fictionalExtendedImpact.toLocaleString()} / person / year`, "Fictional demo value · not verified", "sampleExtendedImpactScenario")}
      <article class="paper-card my-stuff-pie-card">
        <h2>Footprint mix ${infoButton("categoryShare")}</h2>
        <div class="my-stuff-pie-layout">
          <div class="my-stuff-pie" role="img" aria-label="Sample footprint breakdown: ${categories.map((category) => `${category.name} ${category.share}%`).join(", ")}." style="background: conic-gradient(${pieGradient})">
            <span>${totalFootprint.toFixed(1)}<small>t CO2e</small></span>
          </div>
          <ul class="my-stuff-pie-legend">
            ${categories.map((category) => `<li><span class="pie-swatch" style="--pie-color:${category.color}"></span><span>${category.name}</span><strong>${category.share}%</strong></li>`).join("")}
          </ul>
        </div>
      </article>
    </section>
    <p class="category-benchmark-note"><strong>FICTIONAL DEMO DATA:</strong> All category percentiles below are invented to demonstrate the comparison controls. They are not measured, verified, or sourced population percentiles.</p>
    <section class="my-stuff-categories">
      ${categories
        .map(
          (category) => `
        <article class="paper-card my-stuff-category" style="--product-color:${category.color}">
          <div class="my-stuff-category-header">
            <div class="product-icon small">${category.icon}</div>
            <div>
              <h2>${category.name}</h2>
              <p>${category.summary}</p>
            </div>
            <div class="my-stuff-category-figures">
              <strong>${category.footprint.toFixed(2).replace(/0$/, "").replace(/\.0$/, "")} t CO2e / person / yr</strong>
              <span>${category.share}% of sample ${infoButton("categoryShare")}</span>
            </div>
          </div>
          <div class="my-stuff-percentile-comparisons">
            ${[
              ["us", "US sample percentile"],
              ["global", "Global sample percentile"],
            ]
              .map(([group, label]) => {
                const percentile = category.mockPercentiles[group];
                const hue = Math.round(120 - percentile * 1.2);
                return `<div class="my-stuff-percentile-row"><div class="my-stuff-percentile-label"><span>${label} <small>MOCK</small></span><strong>P${percentile}</strong></div><div class="my-stuff-percentile-track" role="img" aria-label="Fictional ${label.toLowerCase()}: percentile ${percentile}, not a verified statistic"><span style="width:${percentile}%;background:hsl(${hue}, 58%, 38%)"></span></div></div>`;
              })
              .join("")}
          </div>
          <ul class="my-stuff-item-list">
            ${category.items
              .map(
                ([label, note]) =>
                  `<li><strong>${label}</strong><p>${note}</p></li>`,
              )
              .join("")}
          </ul>
        </article>`,
        )
        .join("")}
    </section>
  `;
  wireInfoDialog();
}

function wireShareLinks() {
  const shareSection = document.querySelector(".share-section");
  if (!shareSection) return;
  const canonicalUrl = document.querySelector('meta[property="og:url"]')?.content;
  const pageUrl = canonicalUrl || window.location.href.split("#")[0];
  const title = "A better way to understand our impact on the planet";
  const text = "I'm supporting a project to make it easier to understand our real impact on the planet. Take a look:";
  const encodedUrl = encodeURIComponent(pageUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedText = encodeURIComponent(text);
  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    x: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
    reddit: `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
    bluesky: `https://bsky.app/intent/compose?text=${encodedText}%20${encodedUrl}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedText}%0A%0A${encodedUrl}`,
  };
  shareSection.querySelectorAll("[data-share]").forEach((link) => {
    link.href = shareUrls[link.dataset.share];
  });
  const nativeButton = shareSection.querySelector(".share-native");
  if (navigator.share) {
    nativeButton.hidden = false;
    nativeButton.addEventListener("click", async () => {
      try {
        await navigator.share({ title, text, url: pageUrl });
      } catch (error) {
        if (error.name !== "AbortError") {
          shareSection.querySelector(".share-status").textContent = "Sharing was unavailable. Choose a platform below.";
        }
      }
    });
  }
  shareSection.querySelector(".share-copy").addEventListener("click", async () => {
    const status = shareSection.querySelector(".share-status");
    try {
      await navigator.clipboard.writeText(pageUrl);
      status.textContent = "Link copied.";
    } catch (error) {
      const input = document.createElement("textarea");
      input.value = pageUrl;
      input.setAttribute("readonly", "");
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.append(input);
      input.select();
      const copied = document.execCommand("copy");
      input.remove();
      status.textContent = copied
        ? "Link copied."
        : "Copy was unavailable. You can copy the page address from your browser.";
    }
  });
}

function init() {
  wireShell();
  wireShareLinks();
  const page = document.body.dataset.page;
  if (page === "search") wireSearch();
  if (page === "product") wireProductPage();
  if (page === "comparison") renderComparison();
  if (page === "comparison") wireLifecycleDialog();
  if (page === "research") renderResearch();
  if (page === "my-stuff") renderMyStuff();
}

document.addEventListener("DOMContentLoaded", init);
