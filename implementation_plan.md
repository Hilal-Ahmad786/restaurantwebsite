# Implementation Plan - Multi-page Refactor & Blog & Gallery

## Goal Description
Refactor the current single-page application into a multi-page website (Home, Menu, About, Contact, Blog, Gallery). Add a fully functional blog section and a Gallery page with images of Sultanahmet. Ensure the menu is centered and the site is fully responsive.

## User Review Required
-   **Blog Content**: I will generate 5 initial blog posts.
-   **Navigation**: Links will change from anchors (`#menu`) to routes (`/menu`).
-   **Gallery Images**: I will use Unsplash placeholders for Sultanahmet.

## Proposed Changes

### Data Layer
#### [NEW] [src/data/blog.json](file:///Users/hilalahamd/MyRestProjects/RestaurantWebsite/src/data/blog.json)
-   Store 5 blog posts with fields: `id`, `slug`, `title`, `excerpt`, `content`, `date`, `image`.
-   Support multi-language content for blogs.

### Components
#### [MODIFY] [src/components/Header.tsx](file:///Users/hilalahamd/MyRestProjects/RestaurantWebsite/src/components/Header.tsx)
-   Update navigation links to point to new routes (`/menu`, `/about`, `/contact`, `/blog`, `/gallery`).
-   Ensure active state styling for current route.

#### [MODIFY] [src/components/Footer.tsx](file:///Users/hilalahamd/MyRestProjects/RestaurantWebsite/src/components/Footer.tsx)
-   Add Gallery link to footer navigation.

#### [MODIFY] [src/components/MenuSection.tsx](file:///Users/hilalahamd/MyRestProjects/RestaurantWebsite/src/components/MenuSection.tsx)
-   Center the menu items layout as requested.

#### [NEW] [src/components/BlogCard.tsx](file:///Users/hilalahamd/MyRestProjects/RestaurantWebsite/src/components/BlogCard.tsx)
-   Component to display a blog post summary in the list.

#### [NEW] [src/components/GalleryGrid.tsx](file:///Users/hilalahamd/MyRestProjects/RestaurantWebsite/src/components/GalleryGrid.tsx)
-   Component to display a grid of images.

### Pages
#### [MODIFY] [src/app/[locale]/page.tsx](file:///Users/hilalahamd/MyRestProjects/RestaurantWebsite/src/app/[locale]/page.tsx)
-   Keep Hero and a teaser of Menu/About/Blog.

#### [NEW] [src/app/[locale]/menu/page.tsx](file:///Users/hilalahamd/MyRestProjects/RestaurantWebsite/src/app/[locale]/menu/page.tsx)
-   Full menu page.

#### [NEW] [src/app/[locale]/about/page.tsx](file:///Users/hilalahamd/MyRestProjects/RestaurantWebsite/src/app/[locale]/about/page.tsx)
-   Full about page.

#### [NEW] [src/app/[locale]/contact/page.tsx](file:///Users/hilalahamd/MyRestProjects/RestaurantWebsite/src/app/[locale]/contact/page.tsx)
-   Full contact page.

#### [NEW] [src/app/[locale]/blog/page.tsx](file:///Users/hilalahamd/MyRestProjects/RestaurantWebsite/src/app/[locale]/blog/page.tsx)
-   Blog listing page.

#### [NEW] [src/app/[locale]/blog/[slug]/page.tsx](file:///Users/hilalahamd/MyRestProjects/RestaurantWebsite/src/app/[locale]/blog/[slug]/page.tsx)
-   Individual blog post page.

#### [NEW] [src/app/[locale]/gallery/page.tsx](file:///Users/hilalahamd/MyRestProjects/RestaurantWebsite/src/app/[locale]/gallery/page.tsx)
-   Gallery page with images.

## Verification Plan
### Automated Tests
-   `npm run build` to ensure all new routes and types are correct.

### Manual Verification
-   Navigate to all new pages.
-   Check Blog listing and detail pages.
-   Check Gallery page.
-   Verify language switching on new pages.
-   Check mobile responsiveness.
