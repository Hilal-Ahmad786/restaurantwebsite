# Walkthrough - My Terrace Cafe Restaurant Website

I have successfully created the new website for **My Terrace Cafe Restaurant**.

## Features Implemented
-   **Multi-language Support**: Fully functional in Turkish, English, Arabic, and German.
-   **Modern Design**: Premium dark theme with gold accents (`amber-500`), responsive layout, and smooth animations.
-   **Component-Based**: Modular structure (`Header`, `Hero`, `MenuSection`, `AboutSection`, `ContactSection`, `Footer`).
-   **Data-Driven**: Content is managed via JSON files in `src/data/` and `src/messages/`.
-   **SEO & Analytics**: Prepared for Google Ads and Analytics integration.

## Project Structure
-   `src/app/[locale]/`: Main application routes handling internationalization.
-   `src/components/`: Reusable UI components.
-   `src/data/`:
    -   `menu.json`: Menu categories and items.
    -   `site-info.json`: Global site information (address, phone, socials).
-   `src/messages/`: Translation files (`tr.json`, `en.json`, `ar.json`, `de.json`).

## How to Customize
1.  **Menu**: Edit `src/data/menu.json` to add/remove items or change prices.
2.  **Content**: Edit `src/messages/*.json` to change text in each language.
3.  **Images**: Replace the placeholder image URLs in `src/components/Hero.tsx` and `src/components/MenuSection.tsx` with your actual photos.
4.  **Analytics**: Update `src/components/GoogleAnalytics.tsx` with your actual Google Tag ID.

## Verification
-   Build passed successfully (`npm run build`).
-   Verified i18n routing and data loading.

## Next Steps
-   Upload to GitHub.
-   Deploy to Vercel (Connect GitHub repo to Vercel).
-   Add real images.
