export const projectsData = [
  {
    id: "chicken-shop-pos-suite",
    codeName: "chicken-pos.io",
    title: "Chicken Shop Management & Retail POS Suite: Role-Based Flutter ERP",
    category: ["flutter", "enterprise"],
    categoryLabel: "Flutter Web, Mobile & Retail POS",
    shortDescription: "An offline-first retail management and POS suite engineered with Flutter Web & Mobile, Provider, and SharedPreferences. Features role-based Admin & Staff Counter modes, weight-based sales billing with instant digital receipts, poultry purchase/expense tracking, gross profit & margin calculation, and comprehensive business ledger analytics.",
    overview: "Chicken Shop POS & Retail Management Suite is an end-to-end business management system designed specifically for poultry retailers and meat shops. Engineered with a custom neo-brutalist 'Sticker Minimal' aesthetic, the application streamlines rapid over-the-counter sales with automated weight calculations, itemized multi-category receipts, supplier purchase logging, daily profit and margin reporting, and full administrative configuration of daily bird rates and shop profiles.",
    fullDescription: "Chicken Shop POS & Retail Management Suite is an end-to-end business management system designed specifically for poultry retailers and meat shops. Engineered with a custom neo-brutalist 'Sticker Minimal' aesthetic, the application streamlines rapid over-the-counter sales with automated weight calculations, itemized multi-category receipts, supplier purchase logging, daily profit and margin reporting, and full administrative configuration of daily bird rates and shop profiles.",
    problemSolution: "Problem: Poultry retail counters face high-pressure rush hours, fluctuating daily wholesale chicken rates, tedious weight-to-price manual arithmetic, error-prone paper tally books, and zero real-time visibility into net profit margins or supplier payables.\nSolution: Delivered an offline-first, dual-role Flutter POS suite providing sub-second weight-based billing, multi-payment receipt generation (Cash, UPI, Credit), PIN-secured administrative controls, dynamic item pricing (Live Chicken, Curry Cut, Boneless, Wings), automated P&L margin dashboards, and exportable ledger analytics.",
    image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=1000&q=80",
    tags: [
      "Flutter Web",
      "Flutter Mobile",
      "Dart",
      "Provider",
      "Shared Preferences",
      "Material 3",
      "Neo-Brutalist UI",
      "Google Fonts",
      "Role-Based Access (RBAC)",
      "POS & Retail Billing",
      "Digital Receipts",
      "P&L Analytics & Ledger",
      "Offline-First"
    ],
    featured: true,
    githubUrl: "https://github.com/muhsin-ahamed/chicken-shop-codebase",
    demoRepoUrl: "https://github.com/muhsin-ahamed/chicken-shop-demo",
    liveUrl: "https://chicken-shop-demo.vercel.app",
    metrics: [
      { label: "Billing Engine", value: "< 100ms Weight POS" },
      { label: "Role Portals", value: "Admin & Staff Modes" },
      { label: "Architecture", value: "Provider + Local Store" },
      { label: "Platforms", value: "Web & Android Mobile" }
    ],
    keyFeatures: [
      "Dual-Role Operational Workflows: Admin Portal with full financial visibility, P&L analytics, and settings; Staff Counter Mode restricted to fast sales billing and supplier purchases.",
      "Instant Weight-Based Billing Engine: Sub-second line item addition with automatic quantity × dynamic rate computation, custom notes, customer contact logging, and round-off calculations.",
      "Branded Digital Receipt Generator: Modal receipt view featuring shop name, license number, items table, tax/payment method tags (Cash, UPI QR, Credit), and instant print/share readiness.",
      "Poultry Stock & Expense Management: Dedicated purchase tracking for live broiler birds, country chicken, poultry feed, ice, transportation, shop rent, and utility expenses.",
      "Real-Time Executive Financial Dashboard: Instant visibility into Net Profit, Profit Margin (%), Total Sales Volume (Kg & Amount), Order Counts, and Supplier Outflows.",
      "P&L Summary & Daily Business Ledger: In-depth financial analytics with period filtering (This Month, Last Month, This Year, All Time, Custom Range) and date-indexed transaction ledgers.",
      "Dynamic Pricing & Shop Profile Configuration: Live updates for fluctuating poultry market rates (Live Chicken, Curry Cut, Boneless, Wings) alongside customizable bilingual Malayalam/English metadata.",
      "Neo-Brutalist Sticker Minimal Design System: High-contrast tactile UI with 1.5px outlines, Bricolage Grotesque & Anek Malayalam typography, and responsive web top-bar / mobile bottom-bar layouts."
    ],
    resumeBullets: [
      "Architected and deployed a cross-platform retail management and POS suite with Flutter Web & Mobile using Provider state management and offline-first persistence.",
      "Engineered an automated weight-based billing pipeline with dynamic price tiers, customer logging, multi-payment support (Cash, UPI, Credit), and digital receipt generation.",
      "Implemented a secure role-based access control (RBAC) architecture separating Admin financial analytics from restricted Staff Counter operations with 4-digit PIN verification.",
      "Designed a custom neo-brutalist 'Sticker Minimal' UI system featuring responsive web/mobile scaffolds, real-time P&L analytics, and daily business transaction ledgers."
    ]
  },
  {
    id: "amia-fest-management-platform",
    codeName: "Askesis",
    title: "AMIA FEST (Askesis): Arts Fest & Competition Management Suite",
    category: ["flutter", "enterprise"],
    categoryLabel: "Flutter Web & Full-Stack EventTech",
    shortDescription: "A full-stack fest and competition management platform engineered with Flutter Web, Node.js REST API, and Supabase, featuring 5 dedicated portals: Public Showcase, House Leaders, Jury Scoring, Big-Screen TV Stage Broadcast, and Admin Master Controller.",
    overview: "AMIA FEST (Askesis) is an end-to-end digital event and competition management ecosystem built to streamline arts fests, cultural tournaments, and academic competitions. It replaces manual paperwork with a multi-role web platform powering student registrations, category-based program allocations, real-time jury scoring, QR code participant verification, dynamic PDF report generation, and an animated live TV stage broadcast engine with celebratory sound effects.",
    fullDescription: "AMIA FEST (Askesis) is a comprehensive digital fest management suite designed to organize, register, score, and broadcast arts competitions in real time. It features a modern Flutter Web interface connected to a Node.js/TypeScript backend deployed on Render and Supabase PostgreSQL. The platform orchestrates five specialized roles and views: Admins, House Leaders, Jury Members, the Public Spectator Portal, and a dedicated Stage TV Display for live result announcements.",
    problemSolution: "Problem: Large-scale arts and cultural festivals frequently suffer from chaotic paper registrations, error-prone manual jury score calculations, delayed result announcements, and disjointed coordination across competing houses and stages.\nSolution: Delivered AMIA FEST—an integrated digital ecosystem unifying participant rosters, QR-verified check-ins, multi-criteria jury mark entry, automated ranking algorithms, and live big-screen TV stage broadcasts with custom sound effects and real-time house standings.",
    image: "/images/amia-fest-poster.jpg",
    tags: [
      "Flutter Web",
      "Dart",
      "Riverpod",
      "Node.js & TypeScript",
      "Supabase",
      "Render",
      "go_router",
      "QR Code Verification",
      "PDF & Printing Service",
      "Excel Data Processing",
      "Role-Based Access (RBAC)",
      "Audio & TV Broadcast Engine"
    ],
    featured: true,
    githubUrl: "https://github.com/muhsin-ahamed/festapp-all-data",
    liveUrl: "https://amiafestapp.vercel.app/#/public",
    metrics: [
      { label: "Dedicated Portals", value: "5 Role Portals" },
      { label: "Stage Display", value: "Real-time TV Engine" },
      { label: "Check-In Speed", value: "< 200ms QR Scanner" },
      { label: "Architecture", value: "Node.js + Supabase" }
    ],
    keyFeatures: [
      "Five Specialized Role Portals: Admin Master Controller, House Leader Registration, Jury Marks Portal, Public Portal, and Stage TV Display.",
      "Real-Time Jury & Scoring Engine: Digital mark entry interface that eliminates manual calculation errors and instantly computes weighted house and participant rankings.",
      "Big-Screen TV Stage Broadcast: Dedicated stage presentation mode featuring animated winner cards, leader/runner-up badges, house standings banners, and celebratory audio cues.",
      "QR-Based Participant Verification: Integrated camera QR code scanner (mobile_scanner & qr_flutter) for rapid stage attendance tracking and check-in authentication.",
      "House & Team Management: Group and category-based participant assignment tracking house-wise points and cumulative championship tallies.",
      "Document & Bulk Data Pipeline: Native PDF score sheet and certificate generation coupled with high-volume Excel roster import/export capabilities.",
      "Robust Full-Stack Architecture: Declarative Flutter frontend powered by Riverpod & go_router, communicating with a Node.js REST API and Supabase PostgreSQL database."
    ],
    resumeBullets: [
      "Architected and deployed AMIA FEST, an enterprise arts festival management suite serving 5 specialized workflows (Admin, House Leaders, Jury, Public, and Stage TV Broadcast) from a unified Flutter Web codebase.",
      "Engineered an automated real-time judging and scoring pipeline connected to Supabase and a Node.js REST API, eliminating manual scoring errors and calculating house points instantaneously.",
      "Designed an interactive Stage TV Broadcast engine featuring animated leaderboards, custom typography, sound effects, and live winner announcement banners.",
      "Implemented hardware-accelerated QR code participant scanning and automated PDF/Excel reporting pipelines for rapid stage check-in and bulk data handling."
    ]
  },
  {
    id: "hidayathul-anam-madrasa-portal",
    codeName: "madrasa.web",
    title: "Madrasa Student & Admin Portal: Role-Based Flutter Web Suite",
    category: ["flutter", "enterprise"],
    categoryLabel: "Flutter Web & EdTech",
    shortDescription: "A responsive school management portal built with Flutter Web offering role-based student and admin dashboards, results tracking, study notes, hall ticket generation, and bulk Excel data processing.",
    overview: "A responsive school management portal built with Flutter Web. It gives students and administrators their own dashboards in one codebase, covering results, notes, hall tickets, announcements and student records. It uses Material 3 with layouts that adapt across desktop, tablet and mobile, and it connects to a JWT-secured backend with versioned database migrations.",
    fullDescription: "A responsive school management portal built with Flutter Web. It gives students and administrators their own dashboards in one codebase, covering results, notes, hall tickets, announcements and student records. It uses Material 3 with layouts that adapt across desktop, tablet and mobile, and it connects to a JWT-secured backend with versioned database migrations.",
    problemSolution: "Problem: Educational institutions and madrasas frequently grapple with fragmented paper records, manual hall ticket generation, delayed exam result publication, and disjointed communication between administration and students.\nSolution: Delivered a unified, role-based Flutter Web portal featuring dedicated student and administrator dashboards, instant hall ticket generation with student photos, streamlined notes distribution, and high-volume Excel import/export pipelines for student admissions and grades.",
    image: "/images/madrasa-portal-dashboard.jpg",
    tags: [
      "Flutter Web",
      "Dart",
      "Material 3",
      "go_router",
      "Provider",
      "Dio",
      "JWT & Secure Storage",
      "Supabase",
      "Image Cropper",
      "Excel Processing"
    ],
    featured: true,
    githubUrl: "https://github.com/muhsin-ahamed/hidayathul-anam-madrasa-magnet-systems",
    liveUrl: "https://hidayathul-anam-madrasa-wb.vercel.app",
    metrics: [
      { label: "User Roles", value: "2 Role Portals" },
      { label: "Admin Modules", value: "7+ Panels" },
      { label: "Adaptive Layouts", value: "Desktop, Tab, Mob" },
      { label: "Primary Platform", value: "Flutter Web" }
    ],
    keyFeatures: [
      "Role-based Student and Admin login, with JWT token handling and secure credential storage.",
      "Student portal with interactive dashboard, results, notes, hall ticket generation, and profile pages.",
      "Comprehensive Admin panel for students, results, notes, hall tickets, announcements, and system settings.",
      "Responsive Material 3 UI engineered to adapt fluidly across desktop, tablet, and mobile viewports.",
      "Profile photo upload workflow integrated with native image picker and image cropping capabilities.",
      "Excel import/export engine supporting high-volume bulk student enrollment and exam result data processing.",
      "Declarative routing architecture implemented with go_router and Provider state management.",
      "REST API integration through Dio, with a dedicated backend and versioned Supabase migrations."
    ],
    resumeBullets: [
      "Architected and deployed a responsive, role-based Flutter Web school management suite serving separate student and administrative dashboards from a unified codebase.",
      "Engineered declarative routing with go_router, clean Provider state management, and Dio REST API clients handling JWT authentication and secure storage.",
      "Developed batch data management pipelines using Excel import/export to automate high-volume student enrollments and bulk grade publishing.",
      "Crafted an adaptive Material 3 user interface adhering to responsive design principles across desktop, tablet, and mobile screens."
    ]
  },
  {
    id: "adab-union-payment-portal",
    codeName: "adab-pay.io",
    title: "ADAB Financial App - Union Payment Portal",
    category: "enterprise",
    categoryLabel: "FinTech & Enterprise",
    shortDescription: "Union Payment Portal is a full-featured financial management system designed to streamline monthly dues collection, automated payment status calculation, member ledger tracking, and interactive analytics dashboards across Web and Mobile platforms.",
    overview: "Built with Flutter & Dart, the portal automates payment status calculations (Paid, Partially Paid, Not Paid) with inline amount editing, robust filtering, and visual analytics cards. The platform features dynamic PDF and Image receipt generation supporting instant downloads and direct sharing via WhatsApp or web links. Engineered with a responsive Material 3 UI, custom dark gold theme, and a clean Provider architecture, it ensures seamless operation across desktop, tablet, and mobile devices.",
    fullDescription: "Union Payment Portal is a full-featured financial management system designed to streamline monthly dues collection, automated payment status calculation, member ledger tracking, and interactive analytics dashboards across Web and Mobile platforms.",
    problemSolution: "Problem: Organizations and unions frequently struggle with manual tracking of monthly member dues, fragmented payment records, and slow receipt issuance.\nSolution: Union Payment Portal delivers an all-in-one administrative dashboard that streamlines member management, automates status workflows, and provides instant PDF/Image receipt creation for transparent, audit-ready record-keeping.",
    image: "/images/abda-financial-dashboard.png",
    tags: ["Flutter", "Dart", "Provider", "PDF & Printing Service", "Material 3 UI", "Android SDK", "Flutter Web"],
    featured: true,
    githubUrl: "https://github.com/muhsin-ahamed/adab-money-management-system",
    liveUrl: "https://adab-money-management-system.vercel.app/",
    metrics: [
      { label: "Calculation Accuracy", value: "100% Automated" },
      { label: "Receipt Render Speed", value: "< 150ms Instant PDF" },
      { label: "Cross-Platform", value: "Android & Web" }
    ],
    keyFeatures: [
      "Analytics & Executive Dashboard: High-level statistical cards displaying overall collection metrics, active members, pending dues, and batch summaries.",
      "Automated Dues & Status Engine: Instant calculation of payment statuses (Paid, Partially Paid, Unpaid) based on configurable monthly fee thresholds.",
      "Member Directory (CRUD): Full lifecycle management of member profiles, contact info, batch assignments, and payment histories.",
      "Dynamic PDF & Image Receipt Engine: Custom-branded receipt generator built with pdf and printing packages, offering live print previews, PDF downloads, and shareable receipt images.",
      "Instant WhatsApp & Link Sharing: One-click sharing capabilities integrating platform-native clipboard and sharing channels.",
      "Multi-Filter & Search Bar: Quick search by member name, batch ID, payment status, month, and financial year.",
      "Responsive Layout & Custom Theming: Responsive scaffold supporting Desktop Web, Tablet, and Mobile Android/iOS layouts with custom Dark Gold & Light Material 3 design systems."
    ],
    resumeBullets: [
      "Cross-Platform Delivery: Developed a responsive, cross-platform Flutter application targeting Web and Mobile (Android APK) to manage monthly membership dues for organizations.",
      "Scalable Architecture: Implemented a Provider-based architecture decoupling UI screens from core state logic (AppController) for smooth data flow and easy backend integration.",
      "Document Pipeline Engineering: Engineered an automated PDF & Image receipt generation pipeline utilizing pdf and printing services for live previews and instant document downloads.",
      "Modern UI/UX Design: Designed a customized Material 3 UI system with dark/light themes and adaptive layouts responsive across desktop, tablet, and mobile breakpoints."
    ]
  },
  {
    id: "maranoo-app",
    codeName: "maranoo.app",
    title: "Maranoo Cross-Platform Mobile & Web Suite",
    category: "flutter",
    categoryLabel: "Mobile & Flutter",
    shortDescription: "Maranoo is a modern multi-platform smart shopping and expense tracking suite demonstrating Flutter's capability to deliver 60 FPS native performance.",
    overview: "Built with a Clean Architecture paradigm, it features instant offline persistence via Hive CE, custom dynamic Material 3 light/dark UI themes, receipt photo attachment via native hardware access, and real-time expense previews.",
    fullDescription: "Maranoo is a modern multi-platform smart shopping and expense tracking suite demonstrating Flutter's capability to deliver 60 FPS native performance.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=80",
    tags: [
      "Flutter",
      "Dart",
      "Hive CE",
      "Material 3",
      "Google Fonts",
      "Clean Architecture",
      "Cross-Platform"
    ],
    featured: false,
    githubUrl: "https://github.com/muhsin-ahamed/maranoo",
    liveUrl: "https://maranoo.vercel.app/",
    metrics: [
      { label: "Platforms Supported", value: "iOS, Android, Web" },
      { label: "Frame Smoothness", value: "60 FPS Native" },
      { label: "Codebase Reuse", value: "95% Shared Code" }
    ],
    keyFeatures: [
      "Unified single codebase delivering native iOS, Android, and Web performance",
      "High-performance offline-first NoSQL data persistence powered by Hive CE",
      "Clean Architecture (Core, Data, Presentation) adhering to SOLID principles",
      "Dynamic Material Design 3 theme system with real-time Light/Dark mode switching",
      "Native device camera & gallery integration for receipt and item image attachments",
      "Custom interactive modal widgets for bill previews and total expense breakdowns"
    ]
  }
];
