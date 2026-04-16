✨ **Professional Portfolio Template** built with Next.js 15 • 🚀 Tailwind V4 • 📱 Fully Responsive • 🎨 Modern Design • 🔍 SEO Friendly

## 🚀 How to Run the Project

Follow these steps to set up and run the project locally:

### 1️⃣ Install Dependencies

After downloading/cloning the project, navigate to the project directory and run:

```bash
npm install
# or
yarn install
```

This will install all required dependencies.

### 2️⃣ Start the Development Server

Once the installation is complete, start the server with:

```bash
npm run dev
# or
yarn dev
```

Your portfolio will now be running at `http://localhost:3000`.

### ⚠️ Important: Set Up Environment Variables

Before running the project, make sure to create a `.env.local` file in the root directory and add the following:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

This ensures proper configuration of environment variables.

## Folder Structure Overview

- **content:** Contains data for projects. Add any additional section data here.
- **Components:** All the UI components of app e.g. navbar, hero, projects, footer etc
- **src/services:** Retrieves data (e.g., projects, testimonials) using the fs module. Update this file if you change or modify the data source.
- **src/assets:** Stores all assets, including images and icons, additionally you can add audio, video, and local fonts here.
- **src/hooks:** Holds custom hooks.
- **src/lib/types.d.ts:** Contains TypeScript types.
- **util/icons:** Centralizes icons and images for easy updates.
- **appData:** Includes app data, such as services and skills (including icons).
- **app/page.tsx:** Root file of the app.
- **app/layout.tsx:** Manages global and SEO configurations (e.g., fonts, head tags, analytics).

## Customizing the Template

1. Navbar
   - File: navbar.tsx
     - Update the navbar name from iam_caaarll to your name.
2. Hero Section
   - File: hero.tsx
     - Edit the title, description, and optionally, replace the SVG with your image.
3. Projects Section
   - File: content/projects
     - Replace the dummy projects with your own.
     - If you are modifying the properties or going to add new ones, then update types in types.d.ts.
4. Services Section
   - File: appData
     - Add your services with relevant icons. If icons are missing, contact me on LinkedIn or via email.
5. Skills Section
   - File: appData
     - Add your skills with relevant icons. Contact if you can’t find specific icons online.

In the same manner, you can also update the Contact and Testimonial sections. The code is self-explanatory.

## Configuring Online Images

To display online images (e.g., from a CDN) in your deployed project, configure allowed image hostnames in next.config.js.

For demo purposes, we’re using Unsplash images. You can use any image host, but be sure to add the hostname in your configuration.

Replace 'unsplash' with your own image `hostnames` if using a different service or add a new object.

## Theming and Styling

We use Tailwind CSS for styling. In `global.css`, you can customize theme variables for all 3 themes.

## SEO & Branding

1. Favicon: Replace the default favicon with your own.
2. Metadata: Update meta title and description in layout.tsx.
3. SEO Files: robots.ts and sitemap.ts are included for search engines.
4. Open Graph Images:
   - Replace `opengraph-image.png` and `twitter-image.png `with custom images.
   - Alternatively, edit `opengraph-image.tsx` to generate images dynamically.

## Analytics

You can integrate analytics easily:

1. Simple Analytics or Vercel Analytics: Quick and easy to set up.
2. Google Analytics 4: Also straightforward.

## Deployment Notes

Before deploying, add environment variables from .env.local wherever you are deploying:

1. NEXT_PUBLIC_SITE_URL: Set to your actual site URL (e.g., https://johndoe.com).
1. CONTACT_FORM_ACTION_URL: Your [formspree](https://formspree.io/) url.
1. For local development, use the localhost URL.
