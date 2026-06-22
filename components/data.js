export const SERVICES = [
  {
    slug: "pergolas",
    nav: "Pergolas",
    ix: "01",
    image: "pergola",
    title: "Custom pergolas",
    card: "Timber and steel pergolas detailed for your span and sightlines — the rhythm of the battens set to the light you actually have.",
    tagline: "Timber and steel pergolas, detailed for your span, your sightlines and the way your light falls.",
    intro:
      "The pergola is the most requested outdoor structure — and the one most often let down by off-the-shelf proportions. Commissioned, it's drawn to your house: the rafter spacing tuned to the sun you actually get, the posts sized to the span, the joinery resolved so it reads as architecture rather than a frame bolted to the wall.",
    body:
      "We match your brief to a maker who works in timber, steel or both, and who'll detail the shadows, the fixings and the finish to sit with your home for the long run.",
    features: [
      "Rafter and batten spacing set to your aspect and the shade you want",
      "Hardwood, powder-coated steel or a combination, chosen for your climate",
      "Posts and footings engineered for span, wind and council sign-off",
      "Concealed fixings and considered joinery, not exposed brackets",
      "Optional integrated lighting, fans, screens and climbing planting",
    ],
  },
  {
    slug: "patios",
    nav: "Patios & verandahs",
    ix: "02",
    image: "patio",
    title: "Patios & verandahs",
    card: "Roofed outdoor living that reads as part of the house, not bolted on — flashed, lined and finished to match.",
    tagline: "Roofed outdoor living that reads as part of the house — not bolted onto the back of it.",
    intro:
      "A patio or verandah should extend the house, not interrupt it. Commissioned work gets the roofline, the fall and the ceiling lining right, so the new space feels original to the home and keeps you outside comfortably across the seasons.",
    body:
      "Your matched maker handles the flashing, drainage and finishes that off-the-shelf kits skip — the details that decide whether it lasts, and whether it looks built-in.",
    features: [
      "Rooflines and pitch matched to the existing house",
      "Lined, insulated ceilings with recessed lighting options",
      "Proper flashing, guttering and drainage detailing",
      "Decking or paving flowing cleanly from inside to out",
      "Built to withstand sun, rain and wind year-round",
    ],
  },
  {
    slug: "pavilions",
    nav: "Pavilions & outdoor rooms",
    ix: "03",
    image: "pavilion",
    title: "Pavilions & outdoor rooms",
    card: "Freestanding garden rooms, cabanas and poolside pavilions for cooking, lounging and shade through summer.",
    tagline: "Freestanding garden rooms, cabanas and poolside pavilions for cooking, lounging and shade.",
    intro:
      "When the project sits away from the house — by the pool, at the end of the garden — it becomes a structure in its own right. Pavilions and outdoor rooms are designed as small buildings: considered in plan, in materials and in the way they frame the space around them.",
    body:
      "We match you with makers who build freestanding structures end to end, from slab and frame to kitchen, roof and finishes.",
    features: [
      "Designed as a standalone structure, sited to the garden and sun",
      "Outdoor kitchens, bars, fireplaces and lounging built in",
      "Roof forms from flat steel to gabled and skillion",
      "Poolside detailing for wet areas and bare feet",
      "Services — power, water, gas — planned from the start",
    ],
  },
  {
    slug: "louvred-roofs",
    nav: "Louvred roofs",
    ix: "04",
    image: "louvred",
    title: "Louvred & opening roofs",
    card: "Adjustable louvred roofs that tune light and weather — engineered, motorised, and integrated cleanly into the frame.",
    tagline: "Adjustable roofs that tune light and weather at the touch of a button.",
    intro:
      "An opening roof gives you both: full sun when you want it, full cover when the weather turns. The blades pivot to control light, heat and rain, and close tight when a storm rolls through — the most flexible way to use an outdoor space all year.",
    body:
      "Your matched maker specifies and installs an engineered louvre system, integrated cleanly into a frame designed to suit your home rather than a generic kit surround.",
    features: [
      "Motorised, adjustable aluminium blades with rain sensors",
      "Full weather seal when closed, full sun when open",
      "Integrated LED lighting, fans and privacy screens",
      "Frames detailed to match your house, not a stock surround",
      "Engineered and certified for wind and water load",
    ],
  },
  {
    slug: "screening",
    nav: "Screening & privacy",
    ix: "05",
    image: "screening",
    title: "Screening & privacy",
    card: "Battened screens, breezeways and privacy walls that resolve a boundary or a view with the same material language.",
    tagline: "Battened screens, breezeways and privacy walls that resolve a boundary or a view.",
    intro:
      "Privacy is a design problem, not just a fence. Battened screens and feature walls can close a sightline, soften a boundary or filter a breeze while carrying the same material language as the rest of your outdoor structures — so they read as intentional, not added on.",
    body:
      "We match you with makers who detail screening as a finished element: spacing, framing and fixings considered, materials matched to your pergola, patio or home.",
    features: [
      "Batten spacing tuned for privacy, light and airflow",
      "Timber, aluminium or composite, matched to your palette",
      "Freestanding walls, attached screens and breezeways",
      "Integrated planting, lighting or storage where it helps",
      "Detailed to last outdoors with concealed fixings",
    ],
  },
  {
    slug: "carports",
    nav: "Carports & entries",
    ix: "06",
    image: "carport",
    title: "Carports & entries",
    card: "Architectural carports and entry structures designed to lift the front of the house, not just cover a car.",
    tagline: "Architectural carports and entry structures that lift the front of the house.",
    intro:
      "A carport doesn't have to be an afterthought at the side of the house. Designed properly, it lifts the whole street presentation — a cantilevered roof, clean posts and considered proportions that cover the car and improve the entry at the same time.",
    body:
      "Your matched maker designs the structure to the front facade and handles engineering, council and finishes so it looks deliberate from the kerb.",
    features: [
      "Designed to complement the home's front elevation",
      "Cantilevered, post-supported or wall-mounted forms",
      "Timber and steel detailing to match the house",
      "Engineered for span, wind and council approval",
      "Optional integration with gates, entries and lighting",
    ],
  },
];

export function getService(slug) {
  return SERVICES.find((s) => s.slug === slug);
}
