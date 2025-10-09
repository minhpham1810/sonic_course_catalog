# 🚀 Sonic Course Catalog

A modern, interactive course catalog built with Next.js 15, featuring beautiful UI components, fluid animations, and a responsive design. Explore courses with an immersive experience powered by LiquidEther background animations and Sonic-themed design elements.

Link to the project's Figma design: [https://www.figma.com/design/NoBiC0kywkn75e1GdH0yMY/Untitled?node-id=1-487&t=LZJwonDPrJQEODwt-0](https://www.figma.com/site/KMxqdVU7fhCBCHC5QC4tiT/Untitled?node-id=0-1&t=paISk0WtnlucwL3r-1)

Link to the project's Vercel deployment: https://sonic-course-catalog-six.vercel.app/

## ✨ Features

- **Modern Next.js 15** with Turbopack for blazing-fast development
- **Interactive UI Components** using shadcn/ui component library
- **Fluid Animations** with LiquidEther background effects
- **Course Search** with real-time filtering capabilities
- **Responsive Design** that works on all devices
- **Sonic-Themed Design** with custom branding and animations
- **TypeScript** for type-safe development
- **Tailwind CSS v4** for modern styling

## 🛠️ Tech Stack

- **Framework:** Next.js 15.5.3
- **UI Components:** shadcn/ui (Card, Badge, Button)
- **Styling:** Tailwind CSS v4
- **Animations:** Three.js, LiquidEther
- **Language:** TypeScript
- **Font:** Urbanist (Google Fonts)

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18.0.0 or higher)
- **npm** (version 8.0.0 or higher) or **yarn** or **pnpm**
- **Git** (for cloning the repository)

You can check your versions by running:

```bash
node --version
npm --version
git --version
```

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/minhpham1810/sonic_course_catalog.git
cd sonic_course_catalog
```

### 2. Install Dependencies

Install all required packages using npm:

```bash
npm install
```

**Alternative package managers:**

```bash
# Using Yarn
yarn install

# Using pnpm
pnpm install

# Using Bun
bun install
```

### 3. Start the Development Server

Run the development server with Turbopack for optimal performance:

```bash
npm run dev
```

**Alternative commands:**

```bash
# Using other package managers
yarn dev
pnpm dev
bun dev
```

The application will start on [http://localhost:3000](http://localhost:3000)

## 🎮 Available Scripts

| Script          | Command         | Description                                  |
| --------------- | --------------- | -------------------------------------------- |
| **Development** | `npm run dev`   | Starts the development server with Turbopack |
| **Build**       | `npm run build` | Creates an optimized production build        |
| **Start**       | `npm run start` | Starts the production server                 |
| **Lint**        | `npm run lint`  | Runs ESLint to check for code issues         |

## 📁 Project Structure

```
sonic_course_catalog/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx          # Home page
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui components
│   ├── CourseCard.tsx    # Course display component
│   ├── Header.tsx        # Navigation header
│   ├── SearchBar.tsx     # Search functionality
│   └── LiquidEther.tsx   # Fluid animation background
├── data/                 # Static data files
│   └── courses.ts        # Course catalog data
├── lib/                  # Utility functions
│   └── utils.ts          # Styling utilities
├── public/               # Static assets
├── components.json       # shadcn/ui configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── package.json         # Project dependencies and scripts
```

## 🎨 Key Components

### CourseCard

Interactive course display cards featuring:

- Level badges (Beginner, Intermediate, Advanced)
- Animated Sonic logo with hover effects
- Course descriptions with text clamping
- External link buttons with smooth animations

### SearchBar

Real-time search functionality with:

- Instant filtering across title, description, and level
- Sonic-themed styling with focus states
- Clear button for easy reset
- Responsive design

### LiquidEther Background

Immersive fluid animation system:

- Interactive mouse-responsive effects
- Auto-demo mode with gentle animations
- Customizable color palettes
- Performance-optimized rendering

## 🌐 Browser Support

This project supports all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚨 Troubleshooting

### Common Issues

**Port already in use:**

```bash
# Kill process on port 3000
npx kill-port 3000
# Or run on different port
npm run dev -- -p 3001
```

**Node.js version issues:**

- Ensure you're using Node.js 18+
- Consider using nvm (Node Version Manager) to switch versions

**Package installation fails:**

```bash
# Clear npm cache
npm cache clean --force
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build errors:**

```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

## 📱 Development Tips

1. **Hot Reload:** The development server supports hot reloading - changes appear instantly
2. **Component Development:** All UI components are in `/components` for easy modification
3. **Styling:** Use Tailwind classes or modify `/app/globals.css` for global styles
4. **Data:** Course data is stored in `/data/courses.ts` for easy updates

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific configurations:

```env
# Add your environment variables here
NEXT_PUBLIC_API_URL=your_api_url
```

### Tailwind CSS

Customize styling in `tailwind.config.ts`:

- Colors, fonts, spacing
- Custom utilities and components
- Responsive breakpoints

## 📦 Dependencies Overview

**Core Dependencies:**

- `next`: React framework with App Router
- `react`: UI library
- `three`: 3D graphics for LiquidEther animations
- `clsx`: Conditional CSS class names
- `tailwind-merge`: Tailwind class optimization

**UI Components:**

- `@radix-ui/react-slot`: Primitive components
- `class-variance-authority`: Component variant management
