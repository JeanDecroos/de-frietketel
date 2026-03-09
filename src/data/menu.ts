export interface MenuItem {
  naam: string;
  prijs: number;
  beschrijving?: string;
  populair?: boolean;
  vegan?: boolean;
}

export interface MenuCategorie {
  naam: string;
  slug: string;
  items: MenuItem[];
}

export const menuData: MenuCategorie[] = [
  {
    naam: "Frieten",
    slug: "frieten",
    items: [
      { naam: "Klein", prijs: 3.5, beschrijving: "Verse frieten gebakken in verse palmolie" },
      { naam: "Medium", prijs: 4.5, beschrijving: "Verse frieten gebakken in verse palmolie", populair: true },
      { naam: "Groot", prijs: 5.5, beschrijving: "De grootste porties van Gent" },
      { naam: "Mega", prijs: 7.0, beschrijving: "Extra grote portie, ideaal om te delen" },
      { naam: "Familie (4 pers.)", prijs: 14.0, beschrijving: "Genoeg voor het hele gezin" },
    ],
  },
  {
    naam: "Snacks",
    slug: "snacks",
    items: [
      { naam: "Frikandel", prijs: 2.5 },
      { naam: "Curryworst", prijs: 2.8 },
      { naam: "Viandel", prijs: 2.5 },
      { naam: "Kroket", prijs: 2.8 },
      { naam: "Garnaalkroket (huisgemaakt)", prijs: 3.5, populair: true, beschrijving: "Huisgemaakt met verse garnalen" },
      { naam: "Mexicano", prijs: 2.8 },
      { naam: "Boulet", prijs: 3.0 },
      { naam: "Loempia", prijs: 3.5 },
      { naam: "Kaassouffle", prijs: 2.8 },
      { naam: "Kipnuggets (6 st.)", prijs: 4.5 },
      { naam: "Kipnuggets (9 st.)", prijs: 6.0 },
      { naam: "Bitterballen (6 st.)", prijs: 4.5 },
      { naam: "Satekroket", prijs: 3.0 },
    ],
  },
  {
    naam: "Burgers",
    slug: "burgers",
    items: [
      { naam: "Hamburger", prijs: 4.0, beschrijving: "Klassieke hamburger" },
      { naam: "Cheeseburger", prijs: 4.5, beschrijving: "Met cheddar kaas" },
      { naam: "Bicky Burger", prijs: 4.5, beschrijving: "De echte Bicky met bickysaus", populair: true },
      { naam: "Bicky Ribs", prijs: 5.0, beschrijving: "Bicky met ribbetjesvlees" },
      { naam: "Chicken Burger", prijs: 5.0, beschrijving: "Krokant gepaneerde kip" },
      { naam: "Veggie Burger", prijs: 5.0, beschrijving: "Plantaardige burger", vegan: true, populair: true },
      { naam: "Vegan Burger", prijs: 5.5, beschrijving: "100% plantaardig, geen dierlijke producten", vegan: true },
    ],
  },
  {
    naam: "Mitraillettes",
    slug: "mitraillettes",
    items: [
      { naam: "Mitraillette Klassiek", prijs: 8.5, beschrijving: "Halve baguette met frieten, vlees naar keuze en saus", populair: true },
      { naam: "Mitraillette XXL", prijs: 11.0, beschrijving: "Volledige baguette met frieten, vlees en saus" },
      { naam: "Mitraillette Veggie", prijs: 9.0, beschrijving: "Met plantaardige burger en saus", vegan: true },
    ],
  },
  {
    naam: "Stoofvlees & Schotels",
    slug: "schotels",
    items: [
      { naam: "Stoofvlees met frieten", prijs: 12.5, beschrijving: "Huisgemaakt Vlaams stoofvlees", populair: true },
      { naam: "Vol-au-vent met frieten", prijs: 13.0, beschrijving: "Romige kip vol-au-vent" },
      { naam: "Schotel naar keuze", prijs: 10.5, beschrijving: "Frieten + 2 snacks naar keuze + saus" },
    ],
  },
  {
    naam: "Sauzen",
    slug: "sauzen",
    items: [
      { naam: "Huisgemaakte tartaar", prijs: 0.7, populair: true, beschrijving: "Ons geheim recept" },
      { naam: "Vegan tartaar", prijs: 0.7, vegan: true, beschrijving: "Plantaardige versie van ons recept" },
      { naam: "Mayonaise", prijs: 0.5 },
      { naam: "Ketchup", prijs: 0.5 },
      { naam: "Andalouse", prijs: 0.5 },
      { naam: "Samourai", prijs: 0.5 },
      { naam: "Joppiesaus", prijs: 0.7 },
      { naam: "Stoofvleessaus", prijs: 1.5 },
      { naam: "Lookse", prijs: 0.5 },
      { naam: "Curryketchup", prijs: 0.5 },
      { naam: "Pickles", prijs: 0.5 },
    ],
  },
  {
    naam: "Dranken",
    slug: "dranken",
    items: [
      { naam: "Coca-Cola 33cl", prijs: 2.0 },
      { naam: "Coca-Cola Zero 33cl", prijs: 2.0 },
      { naam: "Fanta 33cl", prijs: 2.0 },
      { naam: "Sprite 33cl", prijs: 2.0 },
      { naam: "Water 50cl", prijs: 1.5 },
      { naam: "Ice Tea 33cl", prijs: 2.0 },
      { naam: "Bier (pintje)", prijs: 2.5 },
    ],
  },
];

export const openingsuren = [
  { dag: "Maandag", uren: "11:15 - 14:15 / 17:15 - 23:00" },
  { dag: "Dinsdag", uren: "11:15 - 14:15 / 17:15 - 23:00" },
  { dag: "Woensdag", uren: "11:15 - 14:15 / 17:15 - 23:00" },
  { dag: "Donderdag", uren: "11:15 - 14:15 / 17:15 - 23:00" },
  { dag: "Vrijdag", uren: "11:15 - 14:15 / 17:15 - 23:00" },
  { dag: "Zaterdag", uren: "Gesloten" },
  { dag: "Zondag", uren: "Gesloten" },
];

export const contactInfo = {
  naam: "De Frietketel",
  adres: "Papegaaistraat 89",
  postcode: "9000",
  stad: "Gent",
  telefoon: "09 329 40 22",
  email: "Vandevelde.f@telenet.be",
  facebook: "https://www.facebook.com/people/De-Frietketel/100039555533621/",
  instagram: "",
  twitter: "https://twitter.com/frietketel",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.5!2d3.7207!3d51.0530!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c371440a2db7e7%3A0x9e0b0e1e8e8e8e8e!2sPapegaaistraat+89%2C+9000+Gent!5e0!3m2!1snl!2sbe",
  googleMapsLink: "https://www.google.com/maps/search/De+Frietketel+Papegaaistraat+89+Gent",
};
