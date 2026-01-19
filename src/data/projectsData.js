// Import project images
import ajMartImg from '../assets/ajmart.png';
// Add more imports as you add project images
// import project2Img from '../assets/projects/project2.png';
// import project3Img from '../assets/projects/project3.png';

/**
 * Projects Data
 * 
 * Structure for each project:
 * - title: Project name
 * - description: Brief description of the project
 * - image: Imported image or URL
 * - tech: Array of technologies used
 * - link: Live project URL
 * - github: GitHub repository URL (optional)
 * - featured: Boolean to mark as featured project
 */

export const projectsData = [
    {
        title: 'AJ Mart E-Commerce',
        description: 'Complete e-commerce platform with product management, shopping cart, payment integration, and admin dashboard.',
        image: ajMartImg,
        tech: ['React.js', 'Laravel', 'MySQL', 'Tailwind CSS', 'REST API'],
        link: 'https://ajmart.example.com',
        github: 'https://github.com/yourusername/ajmart',
        featured: true
    },
    {
        title: '360 Market Multi-Vendor',
        description: 'Advanced multi-vendor marketplace with vendor management, product listings, order tracking, and analytics.',
        image: 'https://via.placeholder.com/600x400/667eea/ffffff?text=360+Market',
        tech: ['React.js', 'PHP', 'Laravel', 'Redux', 'Bootstrap'],
        link: 'https://360market.example.com',
        github: 'https://github.com/yourusername/360market',
        featured: true
    },
    {
        title: 'Medical Clinic Management',
        description: 'Comprehensive clinic management system with appointment scheduling, patient records, and employee management.',
        image: 'https://via.placeholder.com/600x400/764ba2/ffffff?text=Clinic+System',
        tech: ['React.js', 'Laravel', 'MySQL', 'Chart.js'],
        link: 'https://clinic.example.com',
        github: 'https://github.com/yourusername/clinic',
        featured: true
    },
    {
        title: 'NFC Business Cards',
        description: 'Digital business card solution with NFC technology, QR codes, and contact sharing capabilities.',
        image: 'https://via.placeholder.com/600x400/f093fb/ffffff?text=NFC+Cards',
        tech: ['React.js', 'NFC', 'QR Code API', 'Tailwind CSS'],
        link: 'https://nfccards.example.com',
        github: 'https://github.com/yourusername/nfc-cards',
        featured: false
    },
    {
        title: 'Doctor Portfolio Website',
        description: 'Professional portfolio website for medical practitioners with appointment booking and service showcase.',
        image: 'https://via.placeholder.com/600x400/4facfe/ffffff?text=Doctor+Portfolio',
        tech: ['React.js', 'Tailwind CSS', 'Animation'],
        link: 'https://doctor-portfolio.example.com',
        github: 'https://github.com/yourusername/doctor-portfolio',
        featured: false
    },
    {
        title: 'Corporate Dashboard',
        description: 'Analytics dashboard with real-time data visualization, reporting, and team collaboration features.',
        image: 'https://via.placeholder.com/600x400/f5576c/ffffff?text=Dashboard',
        tech: ['React.js', 'ApexCharts', 'Laravel', 'WebSocket'],
        link: 'https://dashboard.example.com',
        github: 'https://github.com/yourusername/dashboard',
        featured: false
    }
];

