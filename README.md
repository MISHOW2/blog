📖 Blog App (React + React Router)
🚀 Overview
This is a simple blog application built using React and React Router. Users can view a list of blog posts and navigate to individual posts to read their full content.
🛠 Features
✅ View a list of blog posts
✅ Navigate to a single blog post using dynamic routing
✅ Error handling for invalid routes (404 page)
✅ Shared layout for consistent navigation

📦 BlogApp  
├── 📂 src  
│   ├── 📂 React Router  
│   │   ├── 📜 BlogPosts.js      # Displays all blog posts  
│   │   ├── 📜 SinglePost.js     # Displays a single blog post  
│   │   ├── 📜 Home.js           # Homepage  
│   │   ├── 📜 SharedRoute.js    # Shared layout with navigation  
│   │   ├── 📜 404.js            # Error page  
│   ├── 📜 data.js               # Blog posts data  
│   ├── 📜 App.js                # Main application  
│   ├── 📜 App.css               # Global styles  
├── 📜 package.json  
└── 📜 README.md  

📜 Usage
Visit "/blogposts" to see the list of blogs.
Click "Read More" on a post to navigate to "/blogposts/:id".
Try an invalid URL to see the 404 Error Page.
📌 Technologies Used
React.js ⚛️
React Router 🚀
CSS (for styling) 🎨
🤝 Contributing
Feel free to contribute! Fork the repo, make your changes, and submit a pull request.