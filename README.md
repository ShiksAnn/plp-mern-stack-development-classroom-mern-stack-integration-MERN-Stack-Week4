📂 Project Overview

The project showcases a fully functional blog management system with:

Dynamic content served via RESTful APIs

MongoDB integration using Mongoose

CRUD operations for posts and categories

React frontend for UI rendering and navigation

Authentication and media upload support

🛠️ Technologies Used
Layer	Technology
Frontend	React (Vite), React Router, Axios
Backend	Node.js, Express.js
Database	MongoDB (Local)
Styling	CSS / Tailwind (optional)
Utilities	dotenv, cors, nodemon, mongoose

⚙️ Directory Structure
MERN-Blog/
├── client/                 # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/      # Axios API calls
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── server/                 # Backend (Express + MongoDB)
│   ├── models/
│   │   ├── Post.js
│   │   └── Category.js
│   ├── routes/
│   │   ├── posts.js
│   │   ├── categories.js
│   │   └── auth.js
│   ├── uploads/
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── README.md

🧩 Features Implemented

✅ CRUD Operations

Create, Read, Update, and Delete blog posts

Manage blog categories

✅ Backend API Integration

RESTful API built using Express and Mongoose

Routes structured for scalability

✅ Frontend Functionality

React components for Post List, Single Post, and Post Form

React Router for page navigation

Axios for API communication

Custom hooks for API and state handling

✅ Database & Models

Post and Category schemas using Mongoose

Relationship between posts and categories

✅ Advanced Features

User Authentication (Register & Login)

File upload for featured images

Pagination, search, and filtering

Optimistic UI updates for better UX

🧰 Setup Instructions
1️⃣ Prerequisites

Ensure you have installed:

Node.js (v18+)

MongoDB (local or remote)

npm or yarn

2️⃣ Clone Repository
git clone https://github.com/yourusername/mern-blog.git
cd mern-blog

3️⃣ Setup Backend
cd server
npm install


Create a .env file in /server with:

PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/mern_blog
NODE_ENV=development
JWT_SECRET=your_jwt_secret


Run the backend:

npm run dev


Server should start at http://localhost:5000

4️⃣ Setup Frontend
cd ../client
npm install


Start the frontend:

npm run dev


Vite will start the app at http://localhost:5173

Make sure your vite.config.js has a proxy:

server: {
  proxy: {
    '/api': 'http://localhost:5000',
  },
},

📡 API Documentation
Method	Endpoint	Description
GET	/api/posts	Fetch all blog posts
GET	/api/posts/:id	Fetch a single post
POST	/api/posts	Create a new post
PUT	/api/posts/:id	Update an existing post
DELETE	/api/posts/:id	Delete a post
GET	/api/categories	Get all categories
POST	/api/categories	Create a new category
POST	/api/auth/register	Register user
POST	/api/auth/login	Login user
