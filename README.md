# Gruham - Real Estate Marketplace

Gruham is a full-stack real estate marketplace built with the **MERN stack** (MongoDB, Express.js, React, Node.js) and **Firebase**. It enables users to browse, create, manage, and search for property listings, with features like user authentication, advanced search filters, and image uploads. This repository contains both the **backend** and **frontend** code, providing a complete solution for a modern real estate platform.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
  - [Backend Tech Stack](#backend-tech-stack)
  - [Frontend Tech Stack](#frontend-tech-stack)
- [Project Structure](#project-structure)
  - [Backend Structure](#backend-structure)
  - [Frontend Structure](#frontend-structure)
- [API Endpoints](#api-endpoints)
  - [Authentication APIs](#authentication-apis)
  - [User APIs](#user-apis)
  - [Listing APIs](#listing-apis)
- [Frontend Pages and Components](#frontend-pages-and-components)
  - [Pages](#pages)
  - [Components](#components)
- [Custom Styling](#custom-styling)
- [Setup Instructions](#setup-instructions)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

Gruham is a comprehensive real estate platform designed to connect property buyers, renters, and sellers. The **backend**, built with Node.js, Express.js, and MongoDB, provides a robust RESTful API for user authentication, listing management, and data storage. The **frontend**, developed with React (Vite), Tailwind CSS, Redux, and Firebase, delivers a responsive and intuitive user interface for browsing listings, managing profiles, and creating properties. Custom fonts (Italiana and Marcellus) enhance the aesthetic, while Firebase handles image storage and Google OAuth.

## Features

- **User Authentication**: Supports signup, login, and Google OAuth with JWT-based session management.
- **Profile Management**: Users can update their username, email, password, avatar, delete accounts, or log out.
- **Listing Creation and Management**: Authenticated users can create, update, and delete listings with support for multiple image uploads (up to 6 images, 6MB each).
- **Advanced Search**: Filter listings by search term, property type (rent/sale), amenities (parking, furnished), offers, and sort by price or creation date.
- **Responsive Design**: Tailwind CSS ensures consistent layouts across mobile and desktop devices.
- **Image Uploads**: Firebase Storage handles listing and profile image uploads with progress tracking.
- **Listing Carousel**: Swiper-powered carousel on the homepage showcases listings with offers.
- **Contact Landlord**: Users can contact property owners via email with pre-filled listing details.
- **Protected Routes**: Private routes (e.g., profile, create/update listing) are secured using Redux and JWT.
- **Persistent State**: Redux Persist retains user session data across page refreshes.
- **Error Handling**: Centralized error handling in the backend and frontend for consistent user feedback.
- **Custom Typography**: Italiana and Marcellus fonts create a premium aesthetic.

## Tech Stack

### Backend Tech Stack

| Technology     | Purpose                                                 |
|----------------|---------------------------------------------------------|
| Node.js        | JavaScript runtime for building the backend             |
| Express.js     | Web framework for RESTful APIs and middleware           |
| MongoDB        | NoSQL database for storing user and listing data        |
| Mongoose       | ODM for MongoDB schema validation and queries           |
| JWT            | Secure authentication with JSON Web Tokens              |
| bcryptjs       | Password hashing for secure user authentication         |
| dotenv         | Environment variable management                         |

**Why MongoDB?**
- Flexible document-based schema accommodates diverse listing attributes.
- Seamless JavaScript integration with Mongoose ODM.
- Scalable for read/write-heavy applications.
- Supports rapid development and schema evolution.

### Frontend Tech Stack

| Technology       | Purpose                                                  |
|------------------|----------------------------------------------------------|
| React            | Dynamic user interfaces with component-based architecture |
| Vite             | Fast development server and optimized build process      |
| Tailwind CSS     | Utility-first CSS for responsive and custom styling      |
| Redux            | State management for user authentication and sessions    |
| Redux Persist    | Persists Redux state across page refreshes               |
| Firebase         | Image storage and Google OAuth authentication            |
| React Router     | Client-side routing for navigation                       |
| Swiper           | Carousel for showcasing listings                         |
| Axios/Fetch      | API requests to the backend                              |

**Why React and Vite?**
- React’s virtual DOM ensures fast rendering for dynamic listings.
- Vite provides a faster development experience and optimized builds.

**Why Tailwind CSS?**
- Utility classes enable rapid, responsive styling.
- Customizable for integrating Italiana and Marcellus fonts.

**Why Redux?**
- Centralizes user state for consistent authentication across components.
- Redux Persist maintains sessions, improving user experience.

**Why Firebase?**
- Scalable image storage for listings and avatars.
- Simplifies Google OAuth integration.

## Project Structure

### Backend Structure

```
backend/
├── api/
│   ├── controllers/       # Route handlers
│   │   ├── auth-controller.js
│   │   ├── user-controller.js
│   │   └── listing-controller.js
│   ├── models/            # Mongoose schemas
│   │   ├── user-model.js
│   │   └── listing-model.js
│   ├── routes/            # Express route definitions
│   │   ├── auth-routes.js
│   │   ├── user-routes.js
│   │   └── listing-routes.js
│   ├── utils/             # Utility functions
│   │   ├── error.js
│   │   └── verifyUser.js
├── .env                   # Environment variables (not committed)
├── package.json           # Dependencies and scripts
└── README.md              # Backend documentation
```

### Frontend Structure

```
frontend/
├── src/
│   ├── assets/            # Custom fonts (Italiana, Marcellus)
│   ├── components/        # Reusable React components
│   │   ├── Contact.jsx
│   │   ├── Header.jsx
│   │   ├── ListingItem.jsx
│   │   ├── OAuth.jsx
│   │   └── PrivateRoute.jsx
│   ├── pages/             # Page components
│   │   ├── About.jsx
│   │   ├── CreateListing.jsx
│   │   ├── Home.jsx
│   │   ├── Listing.jsx
│   │   ├── Profile.jsx
│   │   ├── Search.jsx
│   │   ├── Signup.jsx
│   │   ├── Login.jsx
│   │   └── UpdateListing.jsx
│   ├── redux/             # Redux store and slices
│   │   ├── user/
│   │   │   └── userSlice.js
│   │   └── store.js
│   ├── App.jsx            # Main app with routing
│   ├── firebase.js        # Firebase configuration
│   ├── index.css          # Global styles with Tailwind
│   ├── main.tsx           # Entry point with Redux provider
├── .env                   # Environment variables (not committed)
├── package.json           # Dependencies and scripts
└── vite.config.js         # Vite configuration
```

## API Endpoints

The backend provides RESTful APIs for authentication, user management, and listing operations.

### Authentication APIs

| Method | Endpoint            | Description                              | Protected |
|--------|---------------------|------------------------------------------|-----------|
| POST   | `/api/auth/signup`  | Register a new user                      | No        |
| POST   | `/api/auth/login`   | Login with email/password                | No        |
| POST   | `/api/auth/google`  | Login via Google OAuth                   | No        |
| GET    | `/api/auth/logout`  | Clear token and logout                   | No        |

### User APIs

| Method | Endpoint                     | Description                              | Protected |
|--------|------------------------------|------------------------------------------|-----------|
| GET    | `/api/user/test`             | Test endpoint                            | No        |
| POST   | `/api/user/update/:id`       | Update user info                         | Yes       |
| DELETE | `/api/user/delete/:id`       | Delete user account                      | Yes       |
| GET    | `/api/user/listings/:id`     | Get all listings by user                 | Yes       |
| GET    | `/api/user/:id`              | Get user info (excluding password)       | Yes       |

### Listing APIs

| Method | Endpoint                     | Description                              | Protected |
|--------|------------------------------|------------------------------------------|-----------|
| POST   | `/api/listing/create`        | Create a new listing                     | Yes       |
| DELETE | `/api/listing/delete/:id`    | Delete a listing                         | Yes       |
| POST   | `/api/listing/update/:id`    | Update a listing                         | Yes       |
| GET    | `/api/listing/get/:id`       | Fetch a specific listing                 | No        |
| GET    | `/api/listing/get`           | Get listings with filters and pagination | No        |

**Listing Query Parameters**:
- `searchTerm`, `offer`, `furnished`, `parking`, `type` (sale/rent), `limit`, `startIndex`, `sort`, `order`

## Frontend Pages and Components

### Pages

| Page             | Path                           | Description                                                                 |
|------------------|--------------------------------|-----------------------------------------------------------------------------|
| Home             | `/`                            | Carousel of offer listings and sections for rent/sale listings              |
| About            | `/about`                       | Information about the Gruham platform                                       |
| Signup           | `/signup`                      | User registration with email/password or Google OAuth                       |
| Login            | `/login`                       | User login with email/password or Google OAuth                              |
| Profile          | `/profile` (protected)         | Update profile, view/delete listings, and log out                           |
| Create Listing   | `/create-listing` (protected)  | Form for creating new listings with image uploads                           |
| Update Listing   | `/update-listing/:listingId` (protected) | Form for updating existing listings                               |
| Listing          | `/listing/:listingId`          | Detailed view of a listing with contact option                              |
| Search           | `/search`                      | Advanced search with filters for type, amenities, and sorting               |

### Components

| Component        | Description                                                                 |
|------------------|-----------------------------------------------------------------------------|
| Contact          | Form to contact landlords via email for a specific listing                  |
| Header           | Navigation bar with dynamic links based on authentication status            |
| ListingItem      | Displays a single listing with image, name, and price                       |
| OAuth            | Google OAuth button for signup/login                                        |
| PrivateRoute     | Protects routes by redirecting unauthenticated users to login               |

## Custom Styling

- **Fonts**: Italiana (elegant serif) and Marcellus (sophisticated serif) are stored in `frontend/src/assets/` and integrated via Tailwind CSS (`font-head` class).
- **Tailwind CSS**: Applied globally in `frontend/src/index.css` with custom configurations for fonts and responsive breakpoints. Utility classes handle layout, spacing, and transitions (e.g., `hover:bg-white hover:text-black transition-all`).
- **Transitions**: Smooth hover effects on buttons and links enhance interactivity.

## Setup Instructions

### Backend Setup

1. **Navigate to the backend directory**:

```bash
cd backend
```

2. **Install dependencies**:

```bash
npm install
```

3. **Set up environment variables**:

Create a `.env` file in `backend/`:

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

4. **Run the server**:

```bash
npm run dev
```

The backend will run on `http://localhost:5000`.

### Frontend Setup

1. **Navigate to the frontend directory**:

```bash
cd frontend
```

2. **Install dependencies**:

```bash
npm install
```

3. **Set up environment variables**:

Create a `.env` file in `frontend/`:

```
VITE_FIREBASE_API=your_firebase_api_key
VITE_BACKEND_URL=http://localhost:5000
```

4. **Run the development server**:

```bash
npm run dev
```

The frontend will run on `http://localhost:5173`.

5. **Build for production**:

```bash
npm run build
```

## Environment Variables

| Location | Key                 | Description                              |
|----------|---------------------|------------------------------------------|
| Backend  | PORT                | Port number for the server               |
| Backend  | MONGODB_URI         | MongoDB connection string                |
| Backend  | JWT_SECRET          | Secret key for JWT tokens                |
| Frontend | VITE_FIREBASE_API   | Firebase API key for authentication/storage |
| Frontend | VITE_BACKEND_URL    | Backend API URL                          |

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

Ensure code adheres to ESLint and Prettier configurations.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Maintainer

Gruham is built and maintained by Hemant Batra. For issues or suggestions, please open an issue on GitHub.
