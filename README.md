# 🚀 DevConnect

**DevConnect** is a React-based full-stack-ready project that mimics a minimal social feed experience. It demonstrates component-based design, client-side routing, post interaction features, and theme toggling.

---

## ✨ Features

- **📝 Post Creation**: Add new thoughts with username and content
- **🕒 Timestamps**: Auto-generated on post creation and edit
- **✏️ Edit Support**: Edit post content with updated timestamp
- **🗑️ Delete Support**: Remove unwanted posts easily
- **❤️ Like/Unlike Toggle**: Like/unlike a post with instant UI feedback
- **🔍 Search Posts**: Filter posts by **username** or **content**
- **💾 LocalStorage**: Persist post data, likes, and timestamps across reloads
- **🌓 Dark Mode Toggle**: Switch between light and dark themes
- **📱 Responsive Layout**: Clean 3-column layout (Post input, Feed, Summary)
- **⚡ Instant Updates**: Powered by `useState` and `useEffect` hooks
- **🌐 Routing with React Router**: Pages for Home, Feed, Login, Profile, NotFound
- **🧹 Clear Input Button**: Quickly reset username and content fields
- **➕ Toggle Add Post Button**: Show/hide post form for clean UI
- **📍 Navbar Active State**: Current page in navbar is visually highlighted
- **👤 Profile Summary (Navbar)**: Summary details visible via Navbar
- **📊 Profile Summary (Sidebar)**: Sidebar on Feed page showing user stats
- **✨ Feed Title Glow**: CSS animation (`FeedGlow.css`) adds neon glow effect to title



---

## 📁 Project Structure

    devconnect/
    ├── public/
    │ └── index.html
    ├── src/
    │ ├── components/
    │ │ ├── Navbar.jsx
    │ │ └── PostCard.jsx
    │ ├── pages/
    │ │ ├── Home.jsx
    │ │ ├── Feed.jsx
    │ │ ├── Login.jsx
    │ │ ├── Profile.jsx
    │ │ └── NotFound.jsx
    │ └── App.js
    ├── package.json
    └── README.md




---

## ⚙️ Prerequisites

- [Node.js](https://nodejs.org/) (v14 or above)
- npm (comes with Node.js)

---

## 🚀 Installation & Run

1. **Install dependencies**

        npm install

2   Run the development server

        npm start

    App will open at: http://localhost:3000


👤 Author

GitHub: @uttej-git



📌 Future Enhancements

    🔐 Login authentication (with backend)

    🖼️ Profile photo support

    📲 Mobile responsiveness

    🧪 Unit testing with React Testing Library