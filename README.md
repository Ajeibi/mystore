# MyStore

MyStore is a minimalist product listing platform built with Next.js, Shad CN components, Tailwind CSS, and TypeScript. It features a clean and user-friendly interface, with responsive design for different devices, making it easy to manage and view products.

## Overview

MyStore provides a simple yet powerful platform for managing and viewing a list of products. Key features include:
- **Product Listing:** Display a list of products with details such as name, price, and creation date.
- **Responsive Design:** A sidebar for filters on large screens and filters on top of the product list on smaller devices.
- **CRUD Operations:** Add, edit, archive, and delete products.
- **Search Functionality:** A search bar in the navbar to easily find products.

## Technologies Used

- **Next.js:** A React framework for server-side rendering and static site generation.
- **Shad CN Components:** A collection of reusable UI components.
- **Tailwind CSS:** A utility-first CSS framework for styling.
- **TypeScript:** A statically typed superset of JavaScript for type safety.

## Setup and Running the Project Locally

Follow these steps to set up and run the project on your local machine:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Ajeibi/mystore

- **Navigate to the Project Directory:**
    cd mystore
- **Install Dependencies:**
    Ensure you have Node.js installed. Then, run:
    npm install
- **Run the Development Server:**
    npm run dev

## This will start the development server and you can view the application in your browser at http://localhost:3000.

Build for Production:

- **To create an optimized production build, run:** npm run build
- **You can then start the production server with:**
npm start

## Design Decisions, Optimizations, and Trade-Offs
### Design Decisions
- **Minimalist Design:** The design is focused on simplicity and ease of use, avoiding unnecessary complexity.
- **Responsive Layout:** The layout adjusts based on screen size. A sidebar is used for filters on large screens, while smaller screens use a top filter bar for better usability.
- **Shad CN Components:** Used for consistent styling and quick UI development.
### Optimizations
- **Responsive Design:** Utilized Tailwind CSS for responsive design to ensure the application works well on both mobile and desktop devices.
- **Efficient State Management:** State management is handled using React hooks and context API for simplicity and efficiency.
- **Static Data Handling:** Product data is stored in local storage for quick access and manipulation without the need for server-side interactions.
### Trade-Offs
- **Local Storage Usage:** Products are stored in local storage for simplicity, which means the data is not persistent across different devices or sessions. A more robust solution would involve a backend database.
- **No Server-Side Fetching:** Data is fetched from local storage on the client side, which might not be suitable for applications requiring real-time data updates or high security.
## SEO Handling
### Meta Tags and Open Graph Tags
- **Global SEO Tags:** Implemented in the RootLayout to include global metadata like title, description, and Open Graph tags for better indexing by search engines.
- **Dynamic SEO Tags:** In ProductDetailsPage, meta tags are dynamically generated based on product data to ensure each product page has unique and relevant SEO content.
Sitemap and robots.txt
- **Sitemap Generation:** Added using next-sitemap to help search engines index the pages effectively.
- **robots.txt:** Generated to guide search engine crawlers on how to index the site.
## Mobile Optimization
- **Responsive Design:** Ensured that the site is fully responsive and provides a good user experience on all devices.
License
This project is licensed under the MIT License.
