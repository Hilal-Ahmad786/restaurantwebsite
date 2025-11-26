# Implementation Plan - Multi-page Refactor & Blog

## Goal Description
Refactor the current single-page application into a multi-page website (Home, Menu, About, Contact, Blog). Add a fully functional blog section with 5 real posts about Turkish cuisine and Sultanahmet. Ensure the menu is centered and the site is fully responsive.

## User Review Required
-   **Blog Content**: I will generate 5 initial blog posts.
-   **Navigation**: Links will change from anchors (`#menu`) to routes (`/menu`).

## Proposed Changes

### Data Layer
#### [NEW] [src/data/blog.json](file:///Users/hilalahamd/MyRestProjects/RestaurantWebsite/src/data/blog.json)
-   Store 5 blog posts with fields: `id`, `slug`, `title`, `excerpt`, `content`, `date`, `image`.
-   Support multi-language content for blogs.

### Components
#### [MODIFY] [src/components/Header.tsx](file:///Users/hilalahamd/MyRestProjects/RestaurantWebsite/src/components/Header.tsx)
-   Update navigation links to point to new routes (`/menu`, `/about`, `/contact`, `/blog`).
-   Ensure active state styling for current route.

#### [MODIFY] [src/components/MenuSection.tsx](file:///Users/hilalahamd/MyRestProjects/RestaurantWebsite/src/components/MenuSection.tsx)
-   Center the menu items layout as requested.

#### [NEW] [src/components/BlogCard.tsx](file:///Users/hilalahamd/MyRestProjects/RestaurantWebsite/src/components/BlogCard.tsx)
-   Component to display a blog post summary in the list.

### Pages
#### [MODIFY] [src/app/[locale]/page.tsx](file:///Users/hilalahamd/MyRestProjects/RestaurantWebsite/src/app/[locale]/page.tsx)
-   Keep Hero and a teaser of Menu/About/Blog. Remove full sections if they have their own pages, or keep them as "Home" versions. *Decision: Keep a "Home" version that is a summary, and full pages for details.*

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

## Verification Plan
### Automated Tests
-   `npm run build` to ensure all new routes and types are correct.

### Manual Verification
-   Navigate to all new pages.
-   Check Blog listing and detail pages.
-   Verify language switching on new pages.
-   Check mobile responsiveness.
