# Task Management Dashboard
A full-stack MERN task management app built 
for ScholarX Technologies internship.

## Features
- 📧 Email Login System
- ✅ Add, Edit, Delete Tasks
- 🎯 Priority Levels (High, Medium, Low)
- 📅 Due Dates & Overdue Tracking
- 📊 Dashboard with Pie & Bar Charts
- 📁 Project Progress Tracking
- 🔍 Search & Filter Tasks by Status
- 🌙 Dark Mode Support
- 📱 Responsive UI Design

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

## Note
 Database is hosted on Supabase free tier and may take
 30-60 seconds to wake up on first visit.
 The live demo uses sample data so it works instantly.