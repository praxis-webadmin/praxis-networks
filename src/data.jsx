import { Network, ShieldCheck, Cable, Monitor, Camera, Fingerprint, PhoneCall, Server, Router, HardDrive, Headphones } from "lucide-react";

// Local illustrations live in /public/images. Replace any file with your own
// photo (keep the name, or change the path here) to customise the look.
const BASE = import.meta.env.BASE_URL || "/";
const pic = name => `${BASE}images/${name}.svg`;

export const IMAGES = {
  network: pic("network"),
  firewall: pic("firewall"),
  cabling: pic("cabling"),
  support: pic("support"),
  cctv: pic("cctv"),
  biometric: pic("biometric"),
  telecom: pic("telecom"),
  about: pic("about"),
  hero: pic("hero")
};

export const services = [
  {
    slug: "enterprise-networking",
    title: "Enterprise Networking",
    short: "Reliable, scalable network infrastructure for your business.",
    description: "A business network is the backbone of every system your team depends on. We design, deploy and support wired and wireless networks that keep people, applications and locations connected — with the capacity to grow as you do.",
    detail: "Our engineers begin with a site survey and a clear picture of how your teams work, then plan switching, routing, VLAN segmentation and Wi-Fi coverage around real usage rather than guesswork. After go-live we stay close, tuning performance and resolving faults quickly.",
    bullets: ["Aruba and Cisco managed switching", "LAN design and deployment", "Wi-Fi planning and wireless access points", "Network optimization and troubleshooting", "Infrastructure planning for future growth"],
    benefits: ["Fewer outages and faster response times", "Segmented, easier-to-manage traffic", "A network ready for new users and sites"],
    image: IMAGES.network,
    Icon: Network
  },
  {
    slug: "firewall-security",
    title: "Firewall & Network Security",
    short: "Security-focused solutions to help protect your digital environment.",
    description: "Strengthen your network perimeter with practical security configuration and next-generation firewall solutions. We help organizations define sensible security policies and reduce their exposure to unauthorized access.",
    detail: "Security works best when it is designed into the network from day one. We configure firewalls, access policies, VPNs and logging so that your business stays productive while threats are kept at the door — and we review the setup regularly as your environment changes.",
    bullets: ["Fortinet next-generation firewall deployment", "Firewall configuration and policy setup", "Site-to-site and remote-access VPN", "Web filtering and application control", "Network security review and troubleshooting"],
    benefits: ["Clear control over who and what reaches your network", "Safe remote access for staff", "Better visibility through logs and reports"],
    image: IMAGES.firewall,
    Icon: ShieldCheck
  },
  {
    slug: "structured-cabling",
    title: "Structured Cabling",
    short: "Organized cabling designed for dependable connectivity.",
    description: "A reliable network begins with a well-planned physical layer. We build tidy, labelled and maintainable cabling systems for offices, campuses and commercial spaces.",
    detail: "From copper and fibre runs to racks and patch panels, our installations follow a clean, documented layout so that moves, additions and fault-finding stay simple for years to come. Every run is tested before handover.",
    bullets: ["Cat6 / Cat6A copper and fibre cabling", "Rack and patch-panel organization", "Network point installation and labelling", "Cable testing and certification", "Fault tracing and remediation"],
    benefits: ["A neat, professional server and comms room", "Faster troubleshooting with proper labelling", "A physical layer that supports higher speeds"],
    image: IMAGES.cabling,
    Icon: Cable
  },
  {
    slug: "it-support",
    title: "Desktop & IT Support",
    short: "Practical technical support that helps keep work moving.",
    description: "Get help with everyday workplace technology, from desktop issues to connectivity problems. We focus on diagnosing problems clearly and restoring productivity quickly.",
    detail: "Whether you need on-demand help or a regular maintenance routine, our support team handles hardware, software and network issues in plain language, with no jargon. Annual maintenance plans keep your systems healthy and predictable.",
    bullets: ["Desktop and laptop troubleshooting", "Hardware and software support", "Printer, email and connectivity assistance", "Routine maintenance and health checks", "Annual maintenance contracts"],
    benefits: ["Less downtime for your team", "One point of contact for IT problems", "Predictable support costs"],
    image: IMAGES.support,
    Icon: Monitor
  },
  {
    slug: "ip-cctv",
    title: "IP CCTV Surveillance",
    short: "High-definition monitoring solutions for business premises.",
    description: "Improve visibility around your premises with IP-based surveillance planned around your site's coverage, lighting and monitoring requirements.",
    detail: "We survey the site, recommend camera positions and storage sizing, then install and configure cameras, recorders and remote viewing so you can check your premises from anywhere. Systems are tested at night and day before handover.",
    bullets: ["IP camera selection and installation", "NVR and storage configuration", "Remote and mobile viewing setup", "Integration with your existing network", "System maintenance and troubleshooting"],
    benefits: ["Clear coverage of entrances and key areas", "Footage you can retrieve when it matters", "Remote visibility from your phone or PC"],
    image: IMAGES.cctv,
    Icon: Camera
  },
  {
    slug: "biometric-access",
    title: "Biometric Attendance & Access Control",
    short: "Manage attendance and control access to your workplace.",
    description: "Simplify workplace administration and entry management with biometric attendance and door access systems configured for your environment.",
    detail: "We deploy fingerprint, face and card-based devices, connect them to attendance software, and configure user groups, shifts and door permissions so HR and security teams get accurate records with less manual effort.",
    bullets: ["Matrix and eSSL solutions", "Fingerprint, face and card attendance", "Door access control setup", "Attendance software configuration", "User training and ongoing support"],
    benefits: ["Accurate attendance records", "Controlled entry to sensitive areas", "Less manual payroll preparation"],
    image: IMAGES.biometric,
    Icon: Fingerprint
  },
  {
    slug: "telecom-communications",
    title: "Telecom & Communications",
    short: "Business communication solutions that keep people connected.",
    description: "Build a more connected workplace with practical telecom and communication solutions, installed and configured with care.",
    detail: "From IP phones and PBX systems to voice and data connectivity, we plan communication systems that are clear, reliable and easy for your team to use — with extensions, call routing and voicemail configured around the way you work.",
    bullets: ["Business IP phone systems", "PBX and extension configuration", "Voice and data connectivity", "Communication equipment installation", "Configuration and technical support"],
    benefits: ["Clear, dependable calls", "Easy extension and call-flow management", "A single system across multiple rooms or sites"],
    image: IMAGES.telecom,
    Icon: PhoneCall
  }
];

export const products = [
  {
    slug: "managed-switches",
    title: "Managed Network Switches",
    category: "Networking",
    short: "Access, PoE and core switching for offices, campuses and plants.",
    description: "Managed switches form the heart of a reliable LAN. We supply and configure switching from leading brands such as Aruba and Cisco, matched to your port counts, PoE budgets and performance needs.",
    features: ["Gigabit and multi-gigabit access switching", "PoE / PoE+ for phones, cameras and access points", "VLANs, QoS and link aggregation", "Stackable and rack-mount options"],
    useCases: ["Office floors", "Campus backbones", "Surveillance networks"],
    image: IMAGES.network,
    Icon: Server
  },
  {
    slug: "wireless-access-points",
    title: "Wi-Fi Access Points & Controllers",
    category: "Networking",
    short: "Dependable wireless coverage planned around your floor plan.",
    description: "Good Wi-Fi is designed, not guessed. We recommend and install access points and controllers that give consistent coverage and capacity for staff, guests and devices.",
    features: ["Wi-Fi 6 / 6E capable access points", "Centralized management", "Guest and staff network separation", "Roaming optimized for voice and video"],
    useCases: ["Offices", "Showrooms", "Schools and colleges"],
    image: IMAGES.cabling,
    Icon: Router
  },
  {
    slug: "next-gen-firewalls",
    title: "Next-Generation Firewalls",
    category: "Security",
    short: "Fortinet firewall appliances with threat protection and VPN.",
    description: "Protect your perimeter with next-generation firewall appliances such as Fortinet FortiGate, sized for your users and bandwidth and configured with sensible security policies.",
    features: ["Intrusion prevention and web filtering", "Site-to-site and SSL VPN", "Application control and logging", "Licensing and renewal support"],
    useCases: ["Head offices", "Branch connectivity", "Remote workforces"],
    image: IMAGES.firewall,
    Icon: ShieldCheck
  },
  {
    slug: "cabling-and-racks",
    title: "Cabling, Racks & Passive Components",
    category: "Infrastructure",
    short: "Copper, fibre, patch panels and racks for a clean infrastructure.",
    description: "Quality passive components make a network last. We supply copper and fibre cabling, patch panels, patch cords, racks and accessories for clean, standards-based installations.",
    features: ["Cat6 / Cat6A UTP and fibre cable", "Patch panels, jacks and patch cords", "Wall and floor-standing racks", "Cable management accessories"],
    useCases: ["New office fit-outs", "Server rooms", "Network upgrades"],
    image: IMAGES.cabling,
    Icon: Cable
  },
  {
    slug: "ip-cameras-nvr",
    title: "IP Cameras & NVR Systems",
    category: "Surveillance",
    short: "HD dome, bullet and PTZ cameras with network video recorders.",
    description: "A full range of IP cameras and recorders for indoor and outdoor monitoring, selected for resolution, night performance and storage needs.",
    features: ["Dome, bullet and PTZ cameras", "Night vision and wide dynamic range", "NVRs with scalable storage", "Remote viewing on mobile and PC"],
    useCases: ["Entrances and lobbies", "Warehouses and yards", "Retail floors"],
    image: IMAGES.cctv,
    Icon: HardDrive
  },
  {
    slug: "biometric-devices",
    title: "Biometric & Access Control Devices",
    category: "Access Control",
    short: "Matrix and eSSL fingerprint, face and card readers with controllers.",
    description: "Attendance terminals, door controllers, electromagnetic locks and readers from trusted brands such as Matrix and eSSL, delivered configured and ready to use.",
    features: ["Fingerprint, face and RFID terminals", "Door controllers and electric locks", "Attendance management software", "Multi-location support"],
    useCases: ["Staff attendance", "Restricted rooms", "Factories and campuses"],
    image: IMAGES.biometric,
    Icon: Fingerprint
  },
  {
    slug: "ip-phones-pbx",
    title: "IP Phones & PBX Systems",
    category: "Communications",
    short: "Business telephony equipment for clear, dependable calls.",
    description: "IP desk phones, PBX systems and gateways that give your team clear communication, easy extension management and room to grow.",
    features: ["IP desk phones and conference units", "On-site or hosted PBX options", "Voicemail, IVR and call routing", "Analog and SIP gateways"],
    useCases: ["Front desks", "Contact teams", "Multi-branch businesses"],
    image: IMAGES.telecom,
    Icon: Headphones
  },
  {
    slug: "desktops-and-accessories",
    title: "Desktops, Laptops & IT Accessories",
    category: "End-User Devices",
    short: "Business-grade computers, UPS units and accessories.",
    description: "Dependable computers and accessories for day-to-day work, supplied with setup and support so your team is productive from day one.",
    features: ["Business desktops and laptops", "UPS and power protection", "Printers, peripherals and storage", "Warranty and AMC support"],
    useCases: ["New offices", "Staff refreshes", "Small businesses"],
    image: IMAGES.support,
    Icon: Monitor
  }
];

export const industries = [
  { title: "Corporate Offices", text: "Reliable connectivity, secure access, and IT support for everyday business operations.", icon: "01" },
  { title: "Education", text: "Connected learning environments, campus networks, and practical access solutions.", icon: "02" },
  { title: "Retail & Showrooms", text: "Network connectivity, surveillance, and communication for customer-facing spaces.", icon: "03" },
  { title: "Warehouses & Industry", text: "Infrastructure and monitoring solutions planned around operational requirements.", icon: "04" },
  { title: "Healthcare & Professional Services", text: "Dependable technology infrastructure for service-focused organizations.", icon: "05" },
  { title: "Small & Medium Businesses", text: "Right-sized technology solutions designed to support growth.", icon: "06" }
];

export const process = [
  { title: "Understand", text: "We listen first — your goals, your sites, your people and your budget." },
  { title: "Design", text: "We survey, plan and propose a clear solution with transparent scope." },
  { title: "Deploy", text: "Professional installation, configuration and testing with minimal disruption." },
  { title: "Support", text: "Training, documentation and responsive help long after go-live." }
];

export const faqs = [
  { q: "Do you work with businesses of all sizes?", a: "Yes. We support small offices through to multi-site organizations, and we right-size every solution to your needs and budget." },
  { q: "Can you supply the products as well as install them?", a: "Absolutely. We supply, install, configure and support — so there is a single team accountable from purchase to day-to-day use." },
  { q: "Do you offer ongoing maintenance?", a: "We offer on-demand support and annual maintenance plans covering networking, security, surveillance and desktops." },
  { q: "How do I get a quotation?", a: "Send us a short enquiry from the Contact page. We will usually arrange a site visit or call to understand your requirement and then share a clear proposal." }
];
