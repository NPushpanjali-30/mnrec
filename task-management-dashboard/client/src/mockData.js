export const mockUser = {
  id: 1,
  name: "Demo User",
  email: "demo@example.com"
}

export const mockTasks = [
  { id: 1, title: "Design Landing Page", priority: "high", status: "completed", due_date: "2024-03-15", project: "Website Redesign" },
  { id: 2, title: "Fix Login Bug", priority: "high", status: "in_progress", due_date: "2024-03-20", project: "Mobile App" },
  { id: 3, title: "Write API Docs", priority: "medium", status: "pending", due_date: "2024-03-25", project: "Backend" },
  { id: 4, title: "Setup CI/CD Pipeline", priority: "medium", status: "completed", due_date: "2024-03-10", project: "DevOps" },
  { id: 5, title: "Database Optimization", priority: "low", status: "pending", due_date: "2024-03-30", project: "Backend" },
  { id: 6, title: "UI Testing", priority: "low", status: "in_progress", due_date: "2024-03-22", project: "Website Redesign" },
]

export const mockProjects = [
  { id: 1, name: "Website Redesign", tasks: 2, completed: 1 },
  { id: 2, name: "Mobile App", tasks: 1, completed: 0 },
  { id: 3, name: "Backend", tasks: 2, completed: 0 },
  { id: 4, name: "DevOps", tasks: 1, completed: 1 },
]

export const mockChartData = {
  pieChart: [
    { name: "Completed", value: 2, fill: "#22c55e" },
    { name: "In Progress", value: 2, fill: "#3b82f6" },
    { name: "Pending", value: 2, fill: "#f59e0b" },
  ],
  barChart: [
    { month: "Jan", tasks: 5 },
    { month: "Feb", tasks: 8 },
    { month: "Mar", tasks: 6 },
    { month: "Apr", tasks: 10 },
    { month: "May", tasks: 7 },
    { month: "Jun", tasks: 12 },
  ]
}