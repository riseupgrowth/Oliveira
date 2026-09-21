// Towns served (/service-areas/<slug>). Generated from OpenStreetMap coordinates.
// `miles` = straight-line distance from our Bridgewater base; `neighbors` = 4 closest served towns.

export const TOWNS = [
  {slug: "quincy", name: "Quincy", county: "Norfolk County", group: "Core South Shore", lat: 42.251, lng: -71.0037, miles: 18, neighbors: ["braintree", "weymouth", "hingham", "hull"]},
  {slug: "braintree", name: "Braintree", county: "Norfolk County", group: "Core South Shore", lat: 42.2206, lng: -71.0041, miles: 16, neighbors: ["quincy", "weymouth", "randolph", "holbrook"]},
  {slug: "weymouth", name: "Weymouth", county: "Norfolk County", group: "Core South Shore", lat: 42.2212, lng: -70.9392, miles: 16, neighbors: ["hingham", "braintree", "quincy", "holbrook"]},
  {slug: "hingham", name: "Hingham", county: "Plymouth County", group: "Core South Shore", lat: 42.2418, lng: -70.8898, miles: 18, neighbors: ["weymouth", "hull", "cohasset", "quincy"]},
  {slug: "cohasset", name: "Cohasset", county: "Norfolk County", group: "Core South Shore", lat: 42.241, lng: -70.8036, miles: 19, neighbors: ["hingham", "scituate", "norwell", "hull"]},
  {slug: "scituate", name: "Scituate", county: "Plymouth County", group: "Core South Shore", lat: 42.1924, lng: -70.7262, miles: 19, neighbors: ["norwell", "cohasset", "hanover", "marshfield"]},
  {slug: "norwell", name: "Norwell", county: "Plymouth County", group: "Core South Shore", lat: 42.1618, lng: -70.7939, miles: 15, neighbors: ["hanover", "scituate", "cohasset", "pembroke"]},
  {slug: "marshfield", name: "Marshfield", county: "Plymouth County", group: "Core South Shore", lat: 42.0918, lng: -70.7056, miles: 16, neighbors: ["duxbury", "pembroke", "hanover", "norwell"]},
  {slug: "duxbury", name: "Duxbury", county: "Plymouth County", group: "Core South Shore", lat: 42.0418, lng: -70.6723, miles: 16, neighbors: ["marshfield", "kingston", "pembroke", "plymouth"]},
  {slug: "hull", name: "Hull", county: "Plymouth County", group: "Core South Shore", lat: 42.302, lng: -70.9078, miles: 22, neighbors: ["hingham", "weymouth", "quincy", "cohasset"]},
  {slug: "holbrook", name: "Holbrook", county: "Norfolk County", group: "Core South Shore", lat: 42.1552, lng: -71.009, miles: 12, neighbors: ["randolph", "braintree", "abington", "brockton"]},
  {slug: "bridgewater", name: "Bridgewater", county: "Plymouth County", group: "Inland & Bridgewater Area", lat: 41.9902, lng: -70.9754, miles: 0, neighbors: ["west-bridgewater", "east-bridgewater", "halifax", "whitman"]},
  {slug: "west-bridgewater", name: "West Bridgewater", county: "Plymouth County", group: "Inland & Bridgewater Area", lat: 42.0191, lng: -71.008, miles: 3, neighbors: ["bridgewater", "east-bridgewater", "brockton", "whitman"]},
  {slug: "east-bridgewater", name: "East Bridgewater", county: "Plymouth County", group: "Inland & Bridgewater Area", lat: 42.0333, lng: -70.9588, miles: 3, neighbors: ["west-bridgewater", "bridgewater", "whitman", "brockton"]},
  {slug: "brockton", name: "Brockton", county: "Plymouth County", group: "Inland & Bridgewater Area", lat: 42.0834, lng: -71.0184, miles: 7, neighbors: ["abington", "whitman", "west-bridgewater", "east-bridgewater"]},
  {slug: "whitman", name: "Whitman", county: "Plymouth County", group: "Inland & Bridgewater Area", lat: 42.0807, lng: -70.9356, miles: 7, neighbors: ["abington", "hanson", "east-bridgewater", "rockland"]},
  {slug: "hanson", name: "Hanson", county: "Plymouth County", group: "Inland & Bridgewater Area", lat: 42.0753, lng: -70.8801, miles: 8, neighbors: ["whitman", "pembroke", "abington", "rockland"]},
  {slug: "abington", name: "Abington", county: "Plymouth County", group: "Inland & Bridgewater Area", lat: 42.1048, lng: -70.9453, miles: 8, neighbors: ["whitman", "rockland", "hanson", "brockton"]},
  {slug: "rockland", name: "Rockland", county: "Plymouth County", group: "Inland & Bridgewater Area", lat: 42.1307, lng: -70.9162, miles: 10, neighbors: ["abington", "whitman", "hanson", "holbrook"]},
  {slug: "pembroke", name: "Pembroke", county: "Plymouth County", group: "Inland & Bridgewater Area", lat: 42.0715, lng: -70.8092, miles: 10, neighbors: ["hanover", "hanson", "marshfield", "halifax"]},
  {slug: "hanover", name: "Hanover", county: "Plymouth County", group: "Inland & Bridgewater Area", lat: 42.1132, lng: -70.812, miles: 12, neighbors: ["pembroke", "norwell", "hanson", "rockland"]},
  {slug: "randolph", name: "Randolph", county: "Norfolk County", group: "Inland & Bridgewater Area", lat: 42.1626, lng: -71.0413, miles: 12, neighbors: ["holbrook", "braintree", "brockton", "abington"]},
  {slug: "plymouth", name: "Plymouth", county: "Plymouth County", group: "Plymouth Area", lat: 41.9427, lng: -70.7619, miles: 11, neighbors: ["plympton", "carver", "kingston", "halifax"]},
  {slug: "kingston", name: "Kingston", county: "Plymouth County", group: "Plymouth Area", lat: 41.9945, lng: -70.7245, miles: 13, neighbors: ["plymouth", "duxbury", "plympton", "marshfield"]},
  {slug: "plympton", name: "Plympton", county: "Plymouth County", group: "Plymouth Area", lat: 41.9529, lng: -70.8145, miles: 9, neighbors: ["plymouth", "halifax", "carver", "kingston"]},
  {slug: "carver", name: "Carver", county: "Plymouth County", group: "Plymouth Area", lat: 41.8894, lng: -70.7693, miles: 13, neighbors: ["plymouth", "plympton", "kingston", "halifax"]},
  {slug: "halifax", name: "Halifax", county: "Plymouth County", group: "Plymouth Area", lat: 41.991, lng: -70.862, miles: 6, neighbors: ["plympton", "east-bridgewater", "bridgewater", "hanson"]},
];

export const TOWN_BY_SLUG = Object.fromEntries(TOWNS.map((t) => [t.slug, t]));
