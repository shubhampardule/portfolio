# Portfolio Improvement Plan

## Physics Ideas

1. ~~**Interactive Particle Hero Background** — A canvas behind the hero section with floating particles connected by lines, that react to your mouse (repel/attract with gravity). Constellation effect using vanilla Canvas + simple physics simulation.~~ **DONE**

2. ~~**Gravity Tech Stack Chips** — Tech stack chips in the About section drop in with realistic physics using Matter.js — they tumble, bounce off walls, and settle into a pile. Users can drag/throw them around.~~ **DONE**

3. **Physics Ball Pit** — A contained box filled with bouncing balls labeled with your tech stack. Mouse pushes them around. Very playful.

4. ~~**Spring Cursor Trail** — Glowing particles follow your cursor with spring physics — they lag, overshoot, bounce, and settle. Subtle but satisfying.~~ **DONE**

---

## Content & Feature Improvements

5. **Resume/CV Download Button** — Add a button in the hero or header to download your resume PDF.

6. **More Projects** — Even small ones (a CLI tool, a component library, a fun experiment) fill out the section.

7. ~~**Contact Form Section** — A proper contact section at the bottom (can use Formspree/EmailJS for free).~~ **DONE**

8. ~~**Custom 404 Page** — Small touch that shows polish.~~ **DONE**

9. **Blog/Writing Section** — Even a "Coming Soon" signals growth.

---

## Visual & UX Improvements

10. ~~**Scroll-triggered Animations** — Sections fade/slide in as you scroll down (Intersection Observer, no library needed).~~ **DONE**

11. **Typing Effect** — "Full Stack Developer" types out character by character in the hero.

12. ~~**Smooth Section Indicators** — Active nav link highlights based on scroll position.~~ **DONE**

13. **Better OG/Social Image** — Auto-generated or custom designed card instead of a screenshot.

14. ~~**Animated Page Transitions** — Astro View Transitions between portfolio pages for smooth navigation instead of hard reloads.~~ **DONE**

15. ~~**Magnetic Cursor Effect** — Buttons/links subtly gravitate toward cursor when nearby. Tiny detail, big polish.~~ **DONE**

16. **Text Reveal Animations** — Hero headline letters animate in with stagger (slide up + fade). Runs once on load.

17. ~~**Custom 404 Page** — Space-themed 404 with floating asteroids and a "Navigate Home" button. Ties into the game aesthetic.~~ **DONE** (combined with #8)

---

## New Suggestions

18. ~~**Scroll Progress Bar** — A thin gradient bar fixed at the top of the page showing scroll progress. Pure CSS/JS, visually satisfying.~~ **DONE**

19. ~~**Preloader / Loading Screen** — A quick branded loading animation on first visit that fades out after content loads. Hides flash of unstyled content.~~ **DONE**

20. ~~**Back to Top Button** — A floating button that appears after scrolling past the fold, smooth-scrolls back to the top.~~ **DONE**

21. ~~**Responsive Audit** — A pass to verify layout, spacing, and font sizes look right on mobile. Cursor effects are already hidden on touch devices.~~ **DONE**

22. ~~**Performance Audit** — Lazy-load images, check Lighthouse score, optimize particle canvas frame rate, reduce bundle size.~~ **DONE**

23. ~~**Typewriter Hero Text** — Cycle through roles like "Full Stack Developer", "Problem Solver", "UI Engineer" with a typing/deleting animation instead of static specialty text.~~ **DONE**

24. ~~**3D Tilt on Project Cards** — Cards subtly rotate in 3D toward the cursor on hover (perspective transform), pairing with the existing magnetic cursor effect.~~ **DONE**

---

# Asteroid Dodge — Game Improvement Plan

## Mechanics

1. ~~**Power-ups** — Shield bubble (absorb 1 hit), Magnet (auto-graze nearby asteroids), Slow-mo orb (brief time dilation), Score multiplier. Spawn as falling pickups every ~25s.~~ **DONE**

2. ~~**Dash/Teleport Mechanic** — Spacebar or double-tap for a short invincible dash with a cooldown bar. Adds a skill ceiling and an escape tool.~~ **DONE**

3. ~~**Weapon/Shoot Mode** — Optional toggle: ship fires bullets that destroy small asteroids. Shifts gameplay from pure dodge to shoot-em-up hybrid. Ammo-limited to keep tension.~~ **DONE**

4. ~~**Difficulty Selector** — Easy (5 lives, slow ramp) / Normal / Hard (1 life, fast start) on the start screen.~~ **SKIPPED**

5. ~~**Pause Menu** — Escape key pauses with resume/quit options.~~ **DONE**

## Waves & Enemies

6. ~~**Boss Waves** — Every 5 waves, a giant tech logo (e.g., massive Docker whale) enters as a boss — fires mini-asteroids, takes multiple graze passes to "defeat" for big points.~~ **DONE**

7. ~~**Screen-wide Attack Patterns** — Spiral asteroid formations, sine-wave paths, grid walls with a gap to fly through. Makes later waves feel designed, not just random.~~ **DONE**

## Scoring & Progression

8. ~~**Combo Kill Streaks** — Chain grazes within 2s for escalating multipliers (x2→x4→x8). Show streak text ("UNSTOPPABLE") and screen-edge color shifts at high combos.~~ **DONE**

9. ~~**Leaderboard Display** — Show top 5 local scores on the start screen with wave reached and date. All localStorage, no backend needed.~~ **SKIPPED**

10. ~~**Ship Skins/Unlockables** — Unlock ship color variants at score thresholds (1k, 5k, 10k). Persisted in localStorage. Selectable from start screen.~~ **SKIPPED**

## Polish & Feel

11. ~~**Sound Effects + Music** — Hit crunch, graze ting, wave horn, low-fi background beat. Sound is 50% of game feel.~~ **DONE**

12. ~~**Asteroid Trails** — Faint motion blur behind fast-moving asteroids for more visual speed.~~ **DONE**

13. ~~**Mobile Haptics & Tilt Controls** — Vibration on hit/graze via navigator.vibrate(). Optional gyroscope tilt steering on mobile for a different feel.~~ **DONE**

## Tech Stacks Used in Game (112)

**Frontend (25):** React, Next.js, JavaScript, TypeScript, Tailwind CSS, Angular, Vue, Svelte, HTML5, CSS3, Sass, Bootstrap, jQuery, Redux, Webpack, Vite, Astro, Ember, Gatsby, Nuxt, Storybook, Material UI, Three.js, Babel, Less
**Backend & Languages (30):** Node.js, Express, Python, Go, Rust, Java, C#, C++, C, PHP, Ruby, Swift, Kotlin, Dart, Django, Flask, Spring, Rails, .NET, GraphQL, Elixir, Clojure, Perl, FastAPI, NestJS, Laravel, Deno, Solidity, Zig
**Databases (10):** MongoDB, PostgreSQL, MySQL, Redis, Firebase, SQLite, Cassandra, DynamoDB, Neo4j, Supabase
**Cloud & DevOps (18):** Docker, Kubernetes, AWS, Google Cloud, Azure, Nginx, Linux, Terraform, Jenkins, Ansible, Grafana, Prometheus, Heroku, Vercel, Netlify, DigitalOcean, Vagrant, Apache, CircleCI
**Tools (14):** Git, GitHub, GitLab, Postman, VS Code, npm, Figma, Bash, Vim, Jira, Slack, Notion, Yarn, pnpm
**Mobile, AI & Other (15):** Flutter, React Native, Electron, Lua, R, Scala, Haskell, Unity, Godot, Blender, TensorFlow, PyTorch, OpenCV, Raspberry Pi, Arduino, Pandas, NumPy
