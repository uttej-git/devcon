# DevConnect

DevConnect is a simple React-based practice project that demonstrates basic routing and component-based layout. It includes a navbar and multiple pages like Home, Feed, Profile, and Login.

## 🛠️ Features

- 📝 **Post your thoughts** (with name & content)
- 🕒 **Timestamps**: Shows when the post was created
- ✏️ **Edit support**: Modify posts with real-time updates and updated timestamp
- ❌ **Delete support**: Remove unwanted posts instantly
- 🤍❤️ **Like/Unlike Toggle**: Users can like or unlike posts; like count is stored
- 💾 **LocalStorage**: All post data (content, likes, timestamps) is saved across reloads
- 🌗 **Dark Mode Support**: Themed UI for better night reading
- ⚡ **Instant UI updates** via `useState` and `useEffect`
  

'''
## 📁 Project Structure\
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

'''


## ⚙️ Prerequisites

- Node.js and npm installed

## 🚀 Installation & Run

```bash
npm install
npm start

Runs the app in development mode. Open http://localhost:3000 to view it in the browser.

🧠 Upcoming Features
    🔍 Filter or search posts

    🔒 Auth-based post visibility

    🧑 Profile page completion

    📱 Responsive mobile layout

👤 Author
@uttej-git