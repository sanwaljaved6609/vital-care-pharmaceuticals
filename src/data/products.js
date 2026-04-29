import gynecologyMedicine from "../assets/gynecology-medicine.png";

const products = [
    {
        category: "Gynecology",
        items: [
            {
                id: 1,
                name: "Minotol-D Sachet",
                image: gynecologyMedicine,
                description: "A specialized formula with Myo-inositol and D-chiro-inositol to support PCOS management and hormonal balance.",
                tag: "Bestseller",
                price: 200
            },
            {
                id: 2,
                name: "Nutri Vit Milk Suplement",
                image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop",
                description: "A premium nutritional milk supplement enriched with essential vitamins and minerals for overall health and vitality.",
                tag: "New",
                price: 250
            },
            {
                id: 3,
                name: "Ipical Tablet",
                image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
                description: "A calcium and vitamin D3 supplement designed to support bone density and prevent calcium deficiency.",
                tag: "Essential",
                price: 200
            },
            {
                id: 4,
                name: "Sleft-D Oral Solution",
                image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
                description: "An effective Vitamin D3 oral solution to support immune function and maintain healthy bones.",
                tag: "Essential",
                price: 200
            },
            {
                id: 5,
                name: "U-Cry Sachet",
                image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
                description: "A urinary tract health supplement formulated to support bladder health and prevent recurrent infections.",
                tag: "Essential",
                price: 200
            }

        ],
    },

    {
        category: "Antibiotics",
        items: [
            {
                id: 6,
                name: "Azixun 250mg Capsule",
                image: "https://images.unsplash.com/photo-1471864190281-ad5f9f81ce4c?q=80&w=800&auto=format&fit=crop",
                description: "A broad-spectrum Azithromycin antibiotic used to treat various bacterial infections effectively.",
                tag: "Critical Care",
                price: 200
            },
            {
                id: 7,
                name: "Q-Sun Tablet 400mg",
                image: "https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?q=80&w=800&auto=format&fit=crop",
                description: "A potent antibiotic effective against respiratory, skin, and soft tissue infections.",
                tag: "Trusted",
                price: 200
            },
        ],
    },

    {
        category: "General Medicines",
        items: [
            {
                id: 8,
                name: "Rheuma-T Tablet 20mg",
                image: "https://images.unsplash.com/photo-1550572017-ed200159d8d4?q=80&w=800&auto=format&fit=crop",
                description: "Anti-inflammatory and analgesic medication for the management of rheumatoid arthritis and joint pain.",
                tag: "OTC",
                price: 200
            },
            {
                id: 9,
                name: "T-Leaf Syrup",
                image: "https://images.unsplash.com/photo-1512428559083-a40ea901463e?q=80&w=800&auto=format&fit=crop",
                description: "A natural herbal cough syrup that provides soothing relief from both dry and productive coughs.",
                tag: "Allergy",
                price: 200
            },
            {
                id: 10,
                name: "Ipical Syrup",
                image: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?q=80&w=800&auto=format&fit=crop",
                description: "A liquid calcium supplement formulated to support healthy bone and teeth development in all ages.",
                tag: "Immunity",
                price: 200
            },
            {
                id: 11,
                name: "Sip-Up Syrup",
                image: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?q=80&w=800&auto=format&fit=crop",
                description: "An effective antacid syrup that provides fast relief from heartbeat, acid indigestion, and sour stomach.",
                tag: "Digestive Care",
                price: 200
            },
        ],
    },
];

export default products;
