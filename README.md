# 🚀 DevConnect

**DevConnect** is a React-based full-stack-ready project that mimics a minimal social feed experience. It demonstrates component-based design, client-side routing, post interaction features, and theme toggling.

---

## 🛠️ Features

- 📝 **Post Creation**: Add new thoughts with name and content
- 🕒 **Timestamps**: Automatically shows when a post was created or edited
- ✏️ **Edit Support**: Modify posts with updated timestamp
- ❌ **Delete Support**: Remove unwanted posts
- 🤍 **Like/Unlike Toggle**: Like or unlike a post with instant UI feedback
- 🔍 **Search Posts**: Filter visible posts by **username or content**
- 💾 **LocalStorage**: Post data, like counts, and timestamps persist across reloads
- 🌗 **Dark Mode Toggle**: Switch between dark and light UI themes
- 📱 **Responsive Layout**: Clean 3-column layout on Feed page (Post input, Feed, Summary)
- ⚡ **Instant Updates** using `useState` and `useEffect` hooks
- 🧭 **Routing with React Router**: Pages for Home, Feed, Login, Profile, NotFound

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