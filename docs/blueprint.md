# **App Name**: StoreFront

## Core Features:

- User Authentication: Secure user authentication system with role-based access control (admin, store_owner, user) using email and hashed password. Email must be unique for user documents.
- Store Management: Store owners can manage their store details including store name, category, rating, address, store email, and image URL.
- Product Catalog: Store owners can add, update, and manage products, including product name, description, price, and image URL.
- Order Placement: Users can browse stores and products, and place orders. Orders include items, quantities, prices, total amount, and status tracking (pending, confirmed, shipped, delivered).
- Data Dashboard: Admins can create, update, and delete users and stores. Store owners can only modify their own stores and products. Normal users can only create orders for themselves, enabling dashboard and order data analysis.
- Image generation for product or stores: If the product or store owner doesn't provide an image, the tool will generate an appropriate one.
- Firebase Security Rules: Firebase Security Rules will prevent unauthorized actions on user, store and order data.

## Style Guidelines:

- Primary color: Deep indigo (#3F51B5) for trust and stability in e-commerce.
- Background color: Light gray-blue (#E8EAF6) for a clean, professional backdrop.
- Accent color: Vibrant cyan (#00BCD4) to draw attention to key interactive elements.
- Font pairing: 'Space Grotesk' (sans-serif) for headings and 'Inter' (sans-serif) for body text to ensure readability.
- Simple, outlined icons for categories and actions throughout the app.
- Clean, card-based layout for product listings and store displays, ensuring easy browsing.
- Subtle transitions for product loading and order status updates.