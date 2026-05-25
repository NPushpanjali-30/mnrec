# Task Management Dashboard
A full-stack MERN task management app built 
for ScholarX Technologies internship.

## Features
-  User Login System JWT Authentication
- Add, Edit, Delete Tasks
- Priority levels & Due dates
- Dashboard with Charts
- Pie Chart & Bar Chart Visualization
- Project Management
- Search & Filter Tasks
- Dark Mode Support
- Responsive UI Design

## Tech Stack
- Frontend: React, Vite, CSS, Recharts,JavaScript(ES6+)
- Backend: Supabase,PostgreSQL,Supabase REST API

## Setup
-backend
cd task-management-dashboard
cd server
npm install
npm run dev
-frontend
cd task-management-dashboard
cd client
npx vite

## Running Locally
- Frontend: http://localhost:5175
- Backend: http://localhost:5000
- Database: Supabase (cloud hosted)

## Environment Variables
Create a .env file in backend:
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key
JWT_SECRET=your_jwt_secret
