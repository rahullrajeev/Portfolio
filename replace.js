const fs = require('fs');
let content = fs.readFileSync('app/resume/page.tsx', 'utf8');

// Replace Skills
content = content.replace(
  `<div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                     <section>
                       <h3 className="font-display text-[14px] font-bold tracking-[0.2em] mb-4 text-zinc-400">Technical Skills</h3>
                       <ul className="list-disc pl-5 space-y-2 font-light text-zinc-800 dark:text-zinc-300 text-sm md:text-base leading-relaxed">
                         <li>SEO & SEM</li>
                         <li>Google Analytics & Google Search Console</li>
                         <li>Keyword Research</li>
                         <li>Web Designing & Wordpress Development</li>
                         <li>SMM (Social Media Marketing)</li>
                         <li>Canva</li>
                       </ul>
                     </section>
                     <section>
                       <h3 className="font-display text-[14px] font-bold tracking-[0.2em] mb-4 text-zinc-400">Soft Skills</h3>
                       <ul className="list-disc pl-5 space-y-2 font-light text-zinc-800 dark:text-zinc-300 text-sm md:text-base leading-relaxed">
                         <li><strong className="font-semibold text-black dark:text-white">Analytical Thinking</strong> – Strong data interpretation and problem-solving skills.</li>
                         <li><strong className="font-semibold text-black dark:text-white">Time Management</strong> – Organized and efficient in meeting deadlines.</li>
                         <li><strong className="font-semibold text-black dark:text-white">Creativity</strong> – Innovative approach to campaigns and content ideas.</li>
                         <li><strong className="font-semibold text-black dark:text-white">Adaptability</strong> – Quick learner, stays updated with digital trends and tools.</li>
                       </ul>
                     </section>
                   </div>`,
  `<section className="mb-10">
                     <h3 className="font-display text-sm font-bold tracking-[0.2em] mb-4 text-zinc-400 font-display">Skills</h3>
                     <div className="space-y-4 font-light text-zinc-800 dark:text-zinc-300 text-sm md:text-base leading-relaxed">
                       <p><strong className="font-semibold text-black dark:text-white">SEO:</strong> Technical SEO, On-Page SEO, Off-Page SEO, Local SEO, Keyword Research & Clustering, Competitor & SERP Analysis, Content Optimisation, Link Building, Schema Markup, XML Sitemap, Robots.txt, Core Web Vitals, AEO, GEO</p>
                       <p><strong className="font-semibold text-black dark:text-white">Analytics & Tools:</strong> Google Analytics 4 (GA4), Google Search Console, SEMrush, Google Keyword Planner, Google Trends, PageSpeed Insights, Microsoft Clarity, Ahrefs, Screaming Frog, Google Tag Manager, Yoast</p>
                       <p><strong className="font-semibold text-black dark:text-white">Digital Marketing:</strong> WordPress, Landing Page Optimisation, Google Ads, Meta Ads, Social Media Marketing, Canva</p>
                       <p><strong className="font-semibold text-black dark:text-white">AI Tools:</strong> ChatGPT, Claude, Gemini, Manus AI</p>
                     </div>
                   </section>`
);

// Replace Experience
content = content.replace(
  `<section className="mb-10">
                     <h3 className="font-display text-sm font-bold tracking-[0.2em] mb-6 text-zinc-400 font-display">Professional Experience</h3>
                     
                     <div className="mb-8">
                       <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2">
                         <h4 className="font-display text-lg font-bold text-black dark:text-white tracking-tight font-display">SEO Specialist <span className="font-normal text-sm text-zinc-500 dark:text-zinc-400 normal-case tracking-normal font-sans">— Vidhyarthi Mithram</span></h4>
                         <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 tracking-wider">Kochi, India | 2025 – Present</span>
                       </div>
                       <ul className="list-disc pl-5 space-y-2 font-light text-zinc-800 dark:text-zinc-300 text-sm md:text-base">
                         <li>Performing complete SEO management including keyword research, on-page SEO, off-page SEO, and technical SEO optimization.</li>
                         <li>Tracking and analyzing website performance using Google Analytics, Google Search Console, and Semrush to improve organic traffic, keyword rankings, and user engagement.</li>
                         <li>Creating SEO-optimized content strategies to enhance search visibility, improve organic conversions, and support business growth.</li>
                         <li>Collaborating with developers, designers, and content teams to implement SEO best practices across websites and landing pages.</li>
                         <li>Monitoring backlinks, resolving indexing and crawl issues, and improving website architecture for better crawlability and search engine performance.</li>
                         <li>Creating and optimizing AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) focused landing pages for AI-driven search experiences and modern search platforms.</li>
                         <li>Conducting competitor analysis and keyword opportunity research to identify growth strategies and improve SERP performance.</li>
                       </ul>
                     </div>

                     <div className="mb-8">
                       <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2">
                         <h4 className="font-display text-lg font-bold text-black dark:text-white tracking-tight font-display">Digital Marketing Intern <span className="font-normal text-sm text-zinc-500 dark:text-zinc-400 normal-case tracking-normal font-sans">— Bluepin Digitals</span></h4>
                         <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 tracking-wider">2025</span>
                       </div>
                       <ul className="list-disc pl-5 space-y-2 font-light text-zinc-800 dark:text-zinc-300 text-sm md:text-base">
                         <li>Conducted SEO keyword research, on-page optimization, and content improvements to boost website visibility.</li>
                         <li>Assisted in Social Media Marketing (SMM), including content creation, scheduling, and engagement tracking on Meta (Facebook & Instagram).</li>
                         <li>Supported Meta Ads and Google Ads campaign setup, targeting, and performance monitoring to increase reach and conversions.</li>
                         <li>Utilized tools like Google Analytics, Google Search Console, and SEMrush to track performance and identify growth opportunities.</li>
                       </ul>
                     </div>

                     <div className="mb-8">
                       <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2">
                         <h4 className="font-display text-lg font-bold text-black dark:text-white tracking-tight font-display">Freelance Digital Marketer</h4>
                         <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 tracking-wider">Remote | 2024 – Present</span>
                       </div>
                       <ul className="list-disc pl-5 space-y-2 font-light text-zinc-800 dark:text-zinc-300 text-sm md:text-base">
                         <li>Providing SEO services for small businesses, including keyword research, competitor analysis, and content planning.</li>
                         <li>Managing social media marketing campaigns (Instagram, Facebook) including content creation, scheduling, and analytics.</li>
                         <li>Running and optimizing Google Ads and Meta Ads campaigns to improve reach, leads, and ROI for clients.</li>
                         <li>Designing landing pages & websites using WordPress and implementing conversion-focused strategies.</li>
                         <li>Offering brand strategy support including Canva creatives, ad copies, and social media content.</li>
                       </ul>
                     </div>
                   </section>`,
  `<section className="mb-10">
                     <h3 className="font-display text-sm font-bold tracking-[0.2em] mb-6 text-zinc-400 font-display">Professional Experience</h3>
                     
                     <div className="mb-8">
                       <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2">
                         <h4 className="font-display text-lg font-bold text-black dark:text-white tracking-tight font-display">SEO Specialist <span className="font-normal text-sm text-zinc-500 dark:text-zinc-400 normal-case tracking-normal font-sans">— Vidhyarthi Mithram</span></h4>
                         <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 tracking-wider">Kochi, India | Oct 2025 – Present</span>
                       </div>
                       <ul className="list-disc pl-5 space-y-2 font-light text-zinc-800 dark:text-zinc-300 text-sm md:text-base">
                         <li>Improved the Google ranking of "Best Study Abroad Consultants in Kochi" from Page 2/3 to Top 6 in six months through Technical, On-Page, and Off-Page SEO.</li>
                         <li>Managed end-to-end SEO, including keyword research, technical SEO, content optimisation, and link building.</li>
                         <li>Increased qualified organic enquiries by 30% and organic traffic by 45% through SEO and landing page optimisation.</li>
                         <li>Optimised 60+ webpages using metadata, internal linking, and schema markup.</li>
                         <li>Conducted technical SEO audits, resolving crawl and indexing issues while optimising XML sitemaps, robots.txt, and canonical tags.</li>
                         <li>Built AEO/GEO landing pages and monitored performance using GA4, Google Search Console, and SEMrush, improving Core Web Vitals.</li>
                       </ul>
                     </div>

                     <div className="mb-8">
                       <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2">
                         <h4 className="font-display text-lg font-bold text-black dark:text-white tracking-tight font-display">Freelance Digital Marketing Specialist</h4>
                         <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 tracking-wider">Remote | Aug 2025 – Present</span>
                       </div>
                       <ul className="list-disc pl-5 space-y-2 font-light text-zinc-800 dark:text-zinc-300 text-sm md:text-base">
                         <li>Delivered SEO and digital marketing services for a local roofing company, improving online visibility and local search presence.</li>
                         <li>Restructured the website using SEO best practices, optimising website architecture, URL structure, metadata, internal linking, and crawlability.</li>
                         <li>Implemented Local SEO, including Google Business Profile optimisation, keyword research, and competitor analysis.</li>
                         <li>Managed Facebook and Instagram content, including content planning, creatives, scheduling, and engagement monitoring.</li>
                         <li>Built and optimised WordPress landing pages focused on SEO, user experience (UX), and conversion optimisation (CRO).</li>
                       </ul>
                     </div>

                     <div className="mb-8">
                       <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2">
                         <h4 className="font-display text-lg font-bold text-black dark:text-white tracking-tight font-display">Digital Marketing Intern <span className="font-normal text-sm text-zinc-500 dark:text-zinc-400 normal-case tracking-normal font-sans">— Bluepin Digitals</span></h4>
                         <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 tracking-wider">Kochi, India | July 2025 – Oct 2025</span>
                       </div>
                       <ul className="list-disc pl-5 space-y-2 font-light text-zinc-800 dark:text-zinc-300 text-sm md:text-base">
                         <li>Conducted keyword research and implemented on-page and technical SEO improvements.</li>
                         <li>Assisted in Google Ads and Meta Ads campaign setup, optimisation, and reporting.</li>
                         <li>Supported social media marketing by creating content, scheduling posts, and monitoring engagement.</li>
                         <li>Analysed website performance using Google Analytics, Google Search Console, and SEMrush to identify SEO improvement opportunities.</li>
                       </ul>
                     </div>
                   </section>`
);

// Replace Education and Certifications
content = content.replace(
  `<section className="mb-10">
                     <h3 className="font-display text-sm font-bold tracking-[0.2em] mb-4 text-zinc-400 font-display">Education</h3>
                     <div className="font-light text-zinc-800 dark:text-zinc-300 text-sm md:text-base space-y-3">
                       <p><strong className="font-semibold text-black dark:text-white">Certified Digital Marketing Specialist (CDMS):</strong> DigitalX Marketers Academy, Kochi</p>
                       <p><strong className="font-semibold text-black dark:text-white">B.Tech in Computer Science Engineering:</strong> SNGIST Group of Institutions, Ernakulam</p>
                     </div>
                   </section>

                   <section className="mb-10">
                     <h3 className="font-display text-sm font-bold tracking-[0.2em] mb-4 text-zinc-400 font-display">Certifications</h3>
                     <div className="grid grid-cols-1 sm:grid-cols-2 text-sm md:text-base font-light text-zinc-800 dark:text-zinc-300 gap-y-3 gap-x-6">
                       <p>• CDMS (Digitalx Marketers Academy)</p>
                       <p>• Internship Certificate (Bluepin Digitals)</p>
                       <p>• Google Ads Certificate (Skillshop)</p>
                       <p>• SEO Certification (Semrush Academy)</p>
                       <p>• SEO Certification (Hubspot Academy)</p>
                       <p>• Google Analytics (Google)</p>
                       <p>• Google My Business (Google)</p>
                     </div>
                   </section>`,
  `<section className="mb-10">
                     <h3 className="font-display text-sm font-bold tracking-[0.2em] mb-4 text-zinc-400 font-display">Education</h3>
                     <div className="font-light text-zinc-800 dark:text-zinc-300 text-sm md:text-base space-y-3">
                       <p><strong className="font-semibold text-black dark:text-white">Bachelor of Technology (B.Tech), Computer Science Engineering</strong><br />SNGIST Group of Institutions, Ernakulam</p>
                     </div>
                   </section>

                   <section className="mb-10">
                     <h3 className="font-display text-sm font-bold tracking-[0.2em] mb-4 text-zinc-400 font-display">Certifications</h3>
                     <ul className="list-disc pl-5 space-y-2 font-light text-zinc-800 dark:text-zinc-300 text-sm md:text-base">
                       <li><strong className="font-semibold text-black dark:text-white">Certified Digital Marketing Specialist</strong> – DigitalX Marketers Academy</li>
                       <li><strong className="font-semibold text-black dark:text-white">Google Ads Certification</strong> – Google Skillshop</li>
                       <li><strong className="font-semibold text-black dark:text-white">Google Analytics Certification</strong> – Google</li>
                       <li><strong className="font-semibold text-black dark:text-white">SEO Certification</strong> – SEMrush Academy, HubSpot Academy</li>
                       <li><strong className="font-semibold text-black dark:text-white">SEO Certification</strong> – Google Business Profile Certification</li>
                     </ul>
                   </section>`
);

fs.writeFileSync('app/resume/page.tsx', content);
