// seed.js
const db = require('./models');
const vehicles = [
    {
      name: "Tesla Model X",
      description: "Luxury electric SUV with advanced tech and safety.",
      imageUrl: "https://dummyimage.com/1280x720/fff/aaa",
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
            imageUrl: "https://dummyimage.com/1280x720/fff/aaa",
          },
          {
            id: 2,
            name: "Roof Rack",
            price: 500,
            imageUrl: "https://dummyimage.com/1280x720/fff/aaa",
          },
          {
            id: 3,
            name: "Car Cover",
            price: 300,
            imageUrl: "https://dummyimage.com/1280x720/fff/aaa",
          },
          {
            id: 4,
            name: "Sunshade",
            price: 100,
            imageUrl: "https://dummyimage.com/1280x720/fff/aaa",
          },
        ],
        features: [
          {
            id: 1,
            name: "Autopilot",
            description: "Advanced self-driving feature.",
            category: "Technology",
            mediaType: "video",
            mediaUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
          },
          {
            id: 2,
            name: "Panoramic Sunroof",
            description: "Glass roof for a scenic experience.",
            category: "Interior",
            mediaType: "image",
            mediaUrl: "https://dummyimage.com/1280x720/fff/aaa",
          },
          {
            id: 3,
            name: "Bioweapon Defense Mode",
            description: "HEPA filter for cleaner air.",
            category: "Safety",
            mediaType: "video",
            mediaUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
          },
          {
            id: 4,
            name: "Touchscreen Console",
            description: "17” cinematic display.",
            category: "Technology",
            mediaType: "image",
            mediaUrl: "https://dummyimage.com/1280x720/fff/aaa",
          },
        ],
      })),
    },
    {
      name: "BMW iX",
      description: "Futuristic electric SUV by BMW.",
      imageUrl: "https://dummyimage.com/1280x720/fff/aaa",
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
            imageUrl: "https://dummyimage.com/1280x720/fff/aaa",
          },
          {
            id: 6,
            name: "Rear Seat Entertainment",
            price: 900,
            imageUrl: "https://dummyimage.com/1280x720/fff/aaa",
          },
          {
            id: 7,
            name: "Cargo Organizer",
            price: 250,
            imageUrl: "https://dummyimage.com/1280x720/fff/aaa",
          },
          {
            id: 8,
            name: "Trunk Mat",
            price: 180,
            imageUrl: "https://dummyimage.com/1280x720/fff/aaa",
          },
        ],
        features: [
          {
            id: 5,
            name: "Drive Assist Pro",
            description: "Includes adaptive cruise control.",
            category: "Safety",
            mediaType: "video",
            mediaUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
          },
          {
            id: 6,
            name: "Bowers & Wilkins Audio",
            description: "Crystal-clear sound experience.",
            category: "Interior",
            mediaType: "image",
            mediaUrl: "https://dummyimage.com/1280x720/fff/aaa",
          },
          {
            id: 7,
            name: "BMW Curved Display",
            description: "Panoramic digital dashboard.",
            category: "Technology",
            mediaType: "image",
            mediaUrl: "https://dummyimage.com/1280x720/fff/aaa",
          },
          {
            id: 8,
            name: "Smart Glass Roof",
            description: "Electrochromic sunroof for style.",
            category: "Interior",
            mediaType: "video",
            mediaUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
          },
        ],
      })),
    },
    {
      name: "Ford Mustang Mach-E",
      description: "Electric crossover with Mustang DNA.",
      imageUrl: "https://dummyimage.com/1280x720/fff/aaa",
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
            imageUrl: "https://dummyimage.com/1280x720/fff/aaa",
          },
          {
            id: 10,
            name: "Sport Pedals",
            price: 100,
            imageUrl: "https://dummyimage.com/1280x720/fff/aaa",
          },
          {
            id: 11,
            name: "Wheel Locks",
            price: 80,
            imageUrl: "https://dummyimage.com/1280x720/fff/aaa",
          },
          {
            id: 12,
            name: "Cargo Net",
            price: 40,
            imageUrl: "https://dummyimage.com/1280x720/fff/aaa",
          },
        ],
        features: [
          {
            id: 9,
            name: "Ford Co-Pilot360",
            description: "Driver-assist technologies.",
            category: "Safety",
            mediaType: "video",
            mediaUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
          },
          {
            id: 10,
            name: "Sync 4A",
            description: "Cloud-connected infotainment.",
            category: "Technology",
            mediaType: "image",
            mediaUrl: "https://dummyimage.com/1280x720/fff/aaa",
          },
          {
            id: 11,
            name: "Phone As A Key",
            description: "Unlock and start with smartphone.",
            category: "Technology",
            mediaType: "video",
            mediaUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
          },
          {
            id: 12,
            name: "Ambient Lighting",
            description: "Custom interior lighting effects.",
            category: "Interior",
            mediaType: "image",
            mediaUrl: "https://dummyimage.com/1280x720/fff/aaa",
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