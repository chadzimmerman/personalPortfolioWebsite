# Chad Zimmerman | Portfolio Website

A personal portfolio website built to showcase my projects, skills, and professional experience as a FullStack C# Developer based in Colorado. The site is designed with a clean, modern aesthetic, full responsiveness across all screen sizes, and a strong focus on performance.

**Live Site:** [[chadzimmerman.github.io/personalPortfolioWebsite](https://chadzimmerman.github.io/personalPortfolioWebsite/)

---

## Sections

- **Hero** — Introduction with profile photo, title, a live local clock, and links to social profiles
- **Skills** — Overview of technical skills across frontend, backend, mobile, and frameworks
- **Projects** — Categorized showcase of web and mobile/desktop projects with descriptions, dates, and links
- **Work Experience** — Professional roles and freelance history
- **Certifications** — AWS, Google IT Support, and ITIL4 credentials with verification links
- **Contact** — Direct email link and phone number

---

## Performance Optimizations

### WebP Image Conversion
All project and profile images were converted from their original PNG/JPG formats to WebP using [Squoosh](https://squoosh.app), resulting in an average **90% reduction in file size** with no visible quality loss.

| Image | Original | Optimized | Savings |
|---|---|---|---|
| ecommerce1 | 5.1 MB | 405 KB | 92% |
| profilePicture2 | 855 KB | 102 KB | 88% |
| portfolio2 | 1.5 MB | 143 KB | 90% |
| portfolio3 | 914 KB | 101 KB | 89% |
| energeia | 951 KB | 31 KB | 97% |
| edvue | 893 KB | 81 KB | 91% |
| angularProject | 360 KB | 29 KB | 92% |
| calendar-app-thumbnail | 355 KB | 17 KB | 95% |
| AssessmentsPageThumbnail | 287 KB | 22 KB | 92% |

**Total asset size reduced from ~27 MB to ~1 MB.**

### Lazy Loading
All project card images use the native `loading="lazy"` HTML attribute. Images are only downloaded when the user scrolls near them, meaning the initial page load only fetches the above-the-fold content (hero section). This dramatically improves first-load performance, especially on mobile and slower connections.

### No Build Tools Required
The site is pure HTML, CSS, and vanilla JavaScript — no bundler, no framework, no build step. It deploys directly to GitHub Pages from the repository root.

---

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Semantic structure and layout |
| CSS3 | Styling, responsive design, animations |
| JavaScript (Vanilla) | Live clock display |
| Google Fonts (Roboto) | Typography |
| Remixicon CDN | Icon library |
| GitHub Pages | Hosting and deployment |

---

## Features

- Fully responsive layout — adapts from large desktops down to mobile phones
- Smooth scroll navigation via CSS `scroll-behavior: smooth`
- Live local time display in the navbar
- Project cards with absolute-positioned action buttons
- Accessible social links with `aria-label` attributes
- SEO meta description tag
- External certification links (Credly, Coursera, LinkedIn)

---

## Projects Showcased

### Websites
- **Portfolio Website I** — Client site for Halftone LLC, a 3D design and animation studio
- **Portfolio Website II** — Single-page portfolio template for designers and engineers
- **E-Commerce Website** — Full-stack .NET + MySQL store for a U.S. indie book publisher *(Coming Summer 2026)*
- **Mobile App Website** — Promotional site for the EdVue student tracker app

### Mobile & Desktop Apps
- **Desktop App 1** — Angular + Node.js app integrating the World Bank API for global data exploration
- **Mobile App 1 (Energe.ia)** — RPG-style habit tracking app in React Native + Express.js *(Coming September 2026)*
- **Desktop App 3** — C# scheduling app with MySQL, multilingual login, and timezone-aware appointments
- **Mobile App 2 (EdVue)** — .NET MAUI student academic tracker with notifications and note sharing

---

## Installation

```bash
git clone https://github.com/chadzimmerman/ResumeWebsite.git
cd ResumeWebsite
open index.html
```

No dependencies to install. Open `index.html` directly in any browser, or deploy the repo root to any static hosting provider.

---

## Contact

- **LinkedIn:** [linkedin.com/in/chad-zimmerman-5861b5119](https://www.linkedin.com/in/chad-zimmerman-5861b5119/)
- **Email:** [chadzimmerman.codes@gmail.com](mailto:chadzimmerman.codes@gmail.com)
- **GitHub:** [github.com/chadzimmerman](https://github.com/chadzimmerman)

---

## License

This project is licensed under the MIT License.
