// seed.js
const db = require('./models');
const vehicles = [
    {
      name: "Tesla Model X",
      description: "Luxury electric SUV with advanced tech and safety.",
      imageUrl: "https://images.unsplash.com/photo-1623699415278-df0e7d3b3871?auto=format&fit=crop&w=800&q=60",
      variants: Array.from({ length: 3 }, (_, i) => ({
        id: i + 1,
        name: `Variant ${i + 1}`,
        price: 85000 + i * 5000,
        colors: [
          { id: 1, name: "Red Multi-Coat", hex: "#B02A30", price: 1000 },
          { id: 2, name: "Deep Blue Metallic", hex: "#123456", price: 1000 },
          { id: 3, name: "Solid Black", hex: "#000000", price: 0 },
        ],
        accessories: [
          {
            id: 1,
            name: "All-Weather Floor Mats",
            price: 200,
            imageUrl: "https://images.unsplash.com/photo-1605993439219-9c3b527350cc?auto=format&fit=crop&w=800&q=60",
          },
          {
            id: 2,
            name: "Roof Rack",
            price: 500,
            imageUrl: "https://images.unsplash.com/photo-1622694619303-1468c8e58bfa?auto=format&fit=crop&w=800&q=60",
          },
          {
            id: 3,
            name: "Car Cover",
            price: 300,
            imageUrl: "https://images.unsplash.com/photo-1633266988086-929348b03da7?auto=format&fit=crop&w=800&q=60",
          },
          {
            id: 4,
            name: "Sunshade",
            price: 100,
            imageUrl: "https://images.unsplash.com/photo-1643061494060-778cbd6221f3?auto=format&fit=crop&w=800&q=60",
          },
        ],
        features: [
          {
            id: 1,
            name: "Autopilot",
            description: "Advanced self-driving feature.",
            category: "Technology",
            mediaType: "video",
            mediaUrl: "https://www.youtube.com/embed/tiwVMrTLUWg",
          },
          {
            id: 2,
            name: "Panoramic Sunroof",
            description: "Glass roof for a scenic experience.",
            category: "Interior",
            mediaType: "image",
            mediaUrl: "https://images.unsplash.com/photo-1596514483696-9257c00bde3b?auto=format&fit=crop&w=800&q=60",
          },
          {
            id: 3,
            name: "Bioweapon Defense Mode",
            description: "HEPA filter for cleaner air.",
            category: "Safety",
            mediaType: "video",
            mediaUrl: "https://www.youtube.com/embed/D9bDU5Lq6jM",
          },
          {
            id: 4,
            name: "Touchscreen Console",
            description: "17” cinematic display.",
            category: "Technology",
            mediaType: "image",
            mediaUrl: "https://images.unsplash.com/photo-1593941707874-ef25b8b6e1e6?auto=format&fit=crop&w=800&q=60",
          },
        ],
      })),
    },
    {
      name: "BMW iX",
      description: "Futuristic electric SUV by BMW.",
      imageUrl: "https://images.unsplash.com/photo-1638286114144-04db369bdc14?auto=format&fit=crop&w=800&q=60",
      variants: Array.from({ length: 3 }, (_, i) => ({
        id: i + 4,
        name: `xDrive ${40 + i * 10}`,
        price: 90000 + i * 6000,
        colors: [
          { id: 1, name: "Mineral White", hex: "#F8F8F8", price: 0 },
          { id: 2, name: "Phytonic Blue", hex: "#0033A0", price: 1200 },
          { id: 3, name: "Sophisto Grey", hex: "#4B4B4B", price: 800 },
        ],
        accessories: [
          {
            id: 5,
            name: "Wireless Charger",
            price: 150,
            imageUrl: "https://images.unsplash.com/photo-1588000094960-1c9f21d2b4c0?auto=format&fit=crop&w=800&q=60",
          },
          {
            id: 6,
            name: "Rear Seat Entertainment",
            price: 900,
            imageUrl: "https://images.unsplash.com/photo-1633148112415-f51f44c14ab6?auto=format&fit=crop&w=800&q=60",
          },
          {
            id: 7,
            name: "Cargo Organizer",
            price: 250,
            imageUrl: "https://images.unsplash.com/photo-1635525998476-77852d50a7e1?auto=format&fit=crop&w=800&q=60",
          },
          {
            id: 8,
            name: "Trunk Mat",
            price: 180,
            imageUrl: "https://images.unsplash.com/photo-1597764694405-cdfb1252f894?auto=format&fit=crop&w=800&q=60",
          },
        ],
        features: [
          {
            id: 5,
            name: "Drive Assist Pro",
            description: "Includes adaptive cruise control.",
            category: "Safety",
            mediaType: "video",
            mediaUrl: "https://www.youtube.com/embed/BwTQUuIVzOI",
          },
          {
            id: 6,
            name: "Bowers & Wilkins Audio",
            description: "Crystal-clear sound experience.",
            category: "Interior",
            mediaType: "image",
            mediaUrl: "https://images.unsplash.com/photo-1607799279862-7f4b1c0f3eaf?auto=format&fit=crop&w=800&q=60",
          },
          {
            id: 7,
            name: "BMW Curved Display",
            description: "Panoramic digital dashboard.",
            category: "Technology",
            mediaType: "image",
            mediaUrl: "https://images.unsplash.com/photo-1657636662730-75ea3dfb1e25?auto=format&fit=crop&w=800&q=60",
          },
          {
            id: 8,
            name: "Smart Glass Roof",
            description: "Electrochromic sunroof for style.",
            category: "Interior",
            mediaType: "video",
            mediaUrl: "https://www.youtube.com/embed/ItN8hKHw_OE",
          },
        ],
      })),
    },
    {
      name: "Ford Mustang Mach-E",
      description: "Electric crossover with Mustang DNA.",
      imageUrl: "https://images.unsplash.com/photo-1627454829855-98bb64f8e301?auto=format&fit=crop&w=800&q=60",
      variants: Array.from({ length: 3 }, (_, i) => ({
        id: i + 7,
        name: `Select ${i + 1}`,
        price: 70000 + i * 4500,
        colors: [
          { id: 1, name: "Rapid Red", hex: "#C8102E", price: 1000 },
          { id: 2, name: "Shadow Black", hex: "#101820", price: 0 },
          { id: 3, name: "Star White", hex: "#F5F5F5", price: 800 },
        ],
        accessories: [
          {
            id: 9,
            name: "Front Grille Insert",
            price: 170,
            imageUrl: "https://images.unsplash.com/photo-1619364158396-d0fa9137c464?auto=format&fit=crop&w=800&q=60",
          },
          {
            id: 10,
            name: "Sport Pedals",
            price: 100,
            imageUrl: "https://images.unsplash.com/photo-1632153552279-7588a878a0b9?auto=format&fit=crop&w=800&q=60",
          },
          {
            id: 11,
            name: "Wheel Locks",
            price: 80,
            imageUrl: "https://images.unsplash.com/photo-1603440514640-6b2f12a8c31e?auto=format&fit=crop&w=800&q=60",
          },
          {
            id: 12,
            name: "Cargo Net",
            price: 40,
            imageUrl: "https://images.unsplash.com/photo-1631369541030-b1cb5189e1f9?auto=format&fit=crop&w=800&q=60",
          },
        ],
        features: [
          {
            id: 9,
            name: "Ford Co-Pilot360",
            description: "Driver-assist technologies.",
            category: "Safety",
            mediaType: "video",
            mediaUrl: "https://www.youtube.com/embed/hKMi_zv9QEc",
          },
          {
            id: 10,
            name: "Sync 4A",
            description: "Cloud-connected infotainment.",
            category: "Technology",
            mediaType: "image",
            mediaUrl: "https://images.unsplash.com/photo-1606826934568-7f122d5f884b?auto=format&fit=crop&w=800&q=60",
          },
          {
            id: 11,
            name: "Phone As A Key",
            description: "Unlock and start with smartphone.",
            category: "Technology",
            mediaType: "video",
            mediaUrl: "https://www.youtube.com/embed/63N74OB0z9U",
          },
          {
            id: 12,
            name: "Ambient Lighting",
            description: "Custom interior lighting effects.",
            category: "Interior",
            mediaType: "image",
            mediaUrl: "https://images.unsplash.com/photo-1600172454524-074f18d8f824?auto=format&fit=crop&w=800&q=60",
          },
        ],
      })),
    },
  ];

const seedDatabase = async () => {
  try {
    await db.sequelize.sync({ force: true }); 

    
    await db.Vehicle.bulkCreate(vehicles);
            
    
    console.log('Seeding completed!');
    process.exit();
  } catch (err) {
    console.error('Seeding failed:', err);
    process.exit(1);
  }
};

seedDatabase();