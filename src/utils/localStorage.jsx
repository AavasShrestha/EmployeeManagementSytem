const employees = [
    {
      id: 1,
      email: "employee1@example.com",
      password: "123",
      tasks: [
        {
          title: "Prepare Report",
          description: "Prepare the monthly sales report.",
          date: "2025-04-29",
          category: "Reporting",
          isActive: true,
          isNew: true,
          isCompleted: false,
          isFailed: false
        },
        {
          title: "Team Meeting",
          description: "Weekly sync-up with the team.",
          date: "2025-04-28",
          category: "Meeting",
          isActive: false,
          isNew: false,
          isCompleted: true,
          isFailed: false
        },
        {
          title: "Client Feedback",
          description: "Collect feedback from client on last delivery.",
          date: "2025-04-27",
          category: "Communication",
          isActive: false,
          isNew: false,
          isCompleted: false,
          isFailed: true
        }
      ]
    },
    {
      id: 2,
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          title: "UI Fixes",
          description: "Fix layout bugs on login screen.",
          date: "2025-04-30",
          category: "Development",
          isActive: true,
          isNew: true,
          isCompleted: false,
          isFailed: false
        },
        {
          title: "Documentation",
          description: "Update API documentation for v2.",
          date: "2025-04-26",
          category: "Documentation",
          isActive: false,
          isNew: false,
          isCompleted: true,
          isFailed: false
        },
        {
          title: "Security Audit",
          description: "Review latest security updates.",
          date: "2025-04-25",
          category: "Security",
          isActive: false,
          isNew: false,
          isCompleted: false,
          isFailed: true
        },
        {
          title: "Code Review",
          description: "Review PR #108",
          date: "2025-04-29",
          category: "Development",
          isActive: true,
          isNew: false,
          isCompleted: false,
          isFailed: false
        }
      ]
    },
    {
      id: 3,
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          title: "Database Backup",
          description: "Ensure daily backups are scheduled.",
          date: "2025-04-29",
          category: "Maintenance",
          isActive: true,
          isNew: true,
          isCompleted: false,
          isFailed: false
        },
        {
          title: "Client Call",
          description: "Discuss deployment timeline.",
          date: "2025-04-28",
          category: "Communication",
          isActive: false,
          isNew: false,
          isCompleted: true,
          isFailed: false
        },
        {
          title: "Server Migration",
          description: "Move legacy server to AWS.",
          date: "2025-04-27",
          category: "Infrastructure",
          isActive: false,
          isNew: false,
          isCompleted: false,
          isFailed: true
        },
        {
          title: "Sprint Planning",
          description: "Plan tasks for next sprint.",
          date: "2025-04-30",
          category: "Planning",
          isActive: true,
          isNew: false,
          isCompleted: false,
          isFailed: false
        },
        {
          title: "Monitor Logs",
          description: "Set up real-time log monitoring.",
          date: "2025-04-29",
          category: "Monitoring",
          isActive: true,
          isNew: true,
          isCompleted: false,
          isFailed: false
        }
      ]
    },
    {
      id: 4,
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          title: "Update ReadMe",
          description: "Add instructions for environment setup.",
          date: "2025-04-25",
          category: "Documentation",
          isActive: false,
          isNew: false,
          isCompleted: true,
          isFailed: false
        },
        {
          title: "Optimize Queries",
          description: "Improve DB performance for heavy queries.",
          date: "2025-04-28",
          category: "Database",
          isActive: true,
          isNew: true,
          isCompleted: false,
          isFailed: false
        },
        {
          title: "Fix Bug #342",
          description: "Resolve issue in user registration flow.",
          date: "2025-04-26",
          category: "Bug Fix",
          isActive: false,
          isNew: false,
          isCompleted: false,
          isFailed: true
        }
      ]
    },
    {
      id: 5,
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          title: "Onboard Intern",
          description: "Guide new intern through initial setup.",
          date: "2025-04-29",
          category: "Training",
          isActive: true,
          isNew: true,
          isCompleted: false,
          isFailed: false
        },
        {
          title: "UX Review",
          description: "Analyze UI/UX of mobile app.",
          date: "2025-04-27",
          category: "Design",
          isActive: false,
          isNew: false,
          isCompleted: true,
          isFailed: false
        },
        {
          title: "Deploy Hotfix",
          description: "Release urgent patch for login bug.",
          date: "2025-04-28",
          category: "Deployment",
          isActive: false,
          isNew: false,
          isCompleted: false,
          isFailed: true
        },
        {
          title: "Write Test Cases",
          description: "Add unit tests for auth module.",
          date: "2025-04-30",
          category: "Testing",
          isActive: true,
          isNew: false,
          isCompleted: false,
          isFailed: false
        }
      ]
    }
  ];
  
  const admin = [
    {
      id: 1,
      email: "admin@example.com",
      password: "admin123"
    }
  ];

  export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))


  }

  export const getLocalStorage = () => {
   
   const employees = JSON.parse(localStorage.getItem('employees'))
   const admin = JSON.parse(localStorage.getItem('admin'))
    return {admin, employees}

  }