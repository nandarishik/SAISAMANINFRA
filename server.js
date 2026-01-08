const express = require('express');
const app = express();
const path = require('path');

// ✅ DEPLOYMENT-SAFE PORT
const PORT = process.env.PORT || 4000;

// =========================
// APP CONFIG
// =========================
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// =========================
// MASTER PROJECT DATABASE
// =========================
const projectsData = {

    // =========================
    // ONGOING PROJECTS
    // =========================

    'sai-saman-diamond': {
        title: "Sai Saman Diamond",
        type: "Spacious 3BHK Apartments",
        year: "2025",
        location: "Tarnaka, Hyderabad",
        heroImage: "/images/diamond-main.jpg",
        heroVideo: "/images/Diamond-video.mp4", // Added video support
        mapLink: "https://maps.app.goo.gl/YRp7Z3s9GXNR7rqf6",
        description: `
            <p>After in-depth research into how people in Tarnaka live, grow, and use their homes, we studied existing residential layouts, evolving lifestyles, and the aspirations of families in the area. We realized that true luxury lies in space, air, and connection.</p>
            <p>Sai Saman Diamond is a thoughtfully crafted spacious 3BHK apartment, designed to flow naturally with the way residents live today. With expansive living areas and abundant natural light, it redefines apartment living.</p>
            <p>Every layout balances openness, privacy, and functionality—creating a home that feels intuitive, comfortable, and enduring. It is more than just an address; it is a legacy for generations to come.</p>
        `,
        specs: [
            "Spacious 3BHK apartments",
            "2300 sq. ft. thoughtfully planned homes",
            "77 sq. yd. UDS"
        ],
        amenities: [
            "Lift facility",
            "Generator backup",
            "Dedicated car parking"
        ],
        perks: [
            "Surrounded by greenery and clean surroundings",
            "Excellent connectivity, minutes from Tarnaka Metro Station",
            "Close to prestigious colleges and institutions"
        ],
        fullAddress: "Lane opposite Narayana Concept School,<br>Tarnaka, Hyderabad – 500017.",
        gallery: [
            "/images/diamond-exterior.png",
            "/images/crown-parking.png",
            "/images/crown-interior.png"
        ]
    },

    'sai-saman-crown': {
        title: "Sai Saman Crown",
        type: "Premium Residences",
        year: "2025",
        location: "Tarnaka, Hyderabad",
        heroImage: "/images/crown-main.jpg",
        heroVideo: "/images/crown-video.mp4", // Added video support
        mapLink: "https://maps.app.goo.gl/6QVgyWxQSTVqrJr79",
        description: `
            <p>Inspired by timeless elegance, Sai Saman Crown is designed to evoke a sense of quiet royalty—graceful, refined, and enduring. It stands as a testament to architectural excellence in the heart of the city.</p>
            <p>The project offers privacy, space, and true ownership, where each residence feels personal and distinctly yours. Large balconies and premium finishes ensure a lifestyle of unmatched comfort.</p>
            <p>Every detail is crafted with care to deliver lasting value and pride of ownership. From the grand entrance to the smallest corner, Sai Saman Crown is built for those who appreciate the finer things in life.</p>
        `,
        specs: [
            "Spacious premium residences",
            "2400 sq. ft. thoughtfully designed homes",
            "79 sq. yd. UDS"
        ],
        amenities: [
            "Lift facility",
            "Generator backup",
            "Dedicated car parking"
        ],
        perks: [
            "Surrounded by greenery and clean surroundings",
            "Excellent connectivity, minutes from Tarnaka Metro Station",
            "Close to prestigious colleges and institutions"
        ],
        fullAddress: "Backside of Bank of Baroda,<br>Tarnaka, Hyderabad, Telangana.",
        gallery: [
            "/images/crown-2.jpg",
            "/images/diamond-parking.png",
            "/images/diamond-interior.png"
        ]
    },

    // =========================
    // COMPLETED PROJECTS
    // =========================

    'sai-saman-pearl': {
        title: "Sai Saman Pearl",
        type: "Residential Apartments",
        year: "Completed",
        location: "KNR Hills Colony, Manikonda",
        heroImage: "/images/sai-saman-pearl.jpeg",
        mapLink: "https://maps.app.goo.gl/gaLpVobqRMAo5bZB6",
        description: `
            <p>Sai Saman Pearl is a completed residential apartment project located in KNR Hills Colony, Manikonda.</p>
            <p>The project reflects a practical, community-focused approach to residential construction, emphasizing livability, durability, and efficient use of space.</p>
        `,
        specs: [
            "Residential apartment project",
            "Completed and occupied"
        ],
        fullAddress: "KNR Hills Colony,<br>Manikonda, Hyderabad – 500089.",
        gallery: [
            "/images/sai-saman-pearl.jpeg"
        ]
    },

    'founder-home': {
        title: "Independent Houses",
        type: "Custom Residential Projects",
        year: "Ongoing & Completed",
        location: "Various Locations",
        heroImage: "/images/our-home.jpeg",
        description: `
            <p>Our expertise extends beyond apartment complexes to bespoke independent residences. Each home is designed with the same principles of quality, planning, and long-term comfort that define our larger projects.</p>
            <p>With over 300+ independent houses delivered in Mahabubnagar, we bring a wealth of experience in creating personal sanctuaries that reflect the unique needs and aspirations of each family.</p>
        `,
        specs: [
            "Custom independent residences",
            "Tailored architectural design",
            "Quality construction standards"
        ],
        fullAddress: "KNR Hills Colony,<br>Manikonda, Hyderabad – 500089.",
        gallery: [
            "/images/our-home.jpeg"
        ]
    }
};

// =========================
// ROUTES
// =========================
app.get('/', (req, res) => res.render('index'));
app.get('/about', (req, res) => res.render('pages/about'));
app.get('/projects', (req, res) => res.render('pages/projects'));
app.get('/careers', (req, res) => res.render('pages/careers'));

// DYNAMIC PROJECT ROUTE
app.get('/projects/:slug', (req, res) => {
    const project = projectsData[req.params.slug];

    if (project) {
        res.render('pages/project-detail', { project, isDetail: true });
    } else {
        console.log(`❌ Invalid project slug: ${req.params.slug}`);
        res.redirect('/projects');
    }
});

// =========================
// START SERVER
// =========================
app.listen(PORT, () => {
    console.log('-------------------------------------------');
    console.log(`🚀 Server running on port ${PORT}`);
    console.log('-------------------------------------------');
});
