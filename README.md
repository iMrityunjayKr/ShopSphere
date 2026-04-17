# 🛒 ShopSphere — Shopping & Dashboard Application

A fully functional e-commerce web application built with **React 18 + Vite** as part of a 30-Day Frontend Challenge. ShopSphere demonstrates real-world implementation of core React concepts including Context API, React Router DOM, and REST API integration.

---

## 🚀 Live Demo
```bash
https://shopsphere-by-me.vercel.app/
```

---

## ✨ Features

- 🏠 **Home Page** — Clickable hero banner with today's special deal, navigates to Shop
- 🛍️ **Shop Page** — Fetches and displays all products from FakeStoreAPI with search and category filter
- 🛒 **Cart Page** — Add, remove, and manage cart items with global state
- 📦 **Order Summary** — Final order review before checkout
- 🔒 **Environment Variables** — API keys abstracted via `.env` file
- 🎨 **CSS Variables** — Consistent Royal Blue theme across all components
- ⚡ **SPA Navigation** — Zero page reloads using React Router DOM
- 🔐 **Route Guard** — Direct URL access to `/ordersummary` blocked via `useLocation` state check

---

## 🧠 React Concepts Implemented

| Concept | Where Used |
|---|---|
| `useState` | Cart items, products, loading, error states |
| `useEffect` | Fetching products on Shop page mount |
| `useContext` | Accessing cart state across all components |
| `useNavigate` | Banner click navigation to /shop |
| `useLocation` | Route guard on OrderSummary — blocks direct URL access |
| `Context API` | Global cart state (add, remove, clear) |
| `React Router DOM` | SPA routing across 4 pages |
| Props & Components | ProductCard, Navbar, reusable UI |
| Conditional Rendering | Loading states, empty cart, error handling |

---

## 🗂️ Folder Structure

```
src/
├── context/
│   └── CartContext.jsx      ← Global cart state
├── pages/
│   ├── Home.jsx             ← Landing page with banner
│   ├── Shop.jsx             ← Product listing + search/filter
│   ├── Cart.jsx             ← Cart management
│   └── OrderSummary.jsx     ← Final order review
├── components/
│   ├── Navbar.jsx           ← Sticky nav with cart count
│   ├── CategoryStrip.jsx    ← Category filter strip
│   └── ProductCard.jsx      ← Single product card
├── styles/
│   ├── variables.css        ← CSS color tokens
│   ├── navbar.css
│   ├── home.css
│   ├── shop.css
│   ├── cart.css
│   ├── ordersummary.css
│   ├── productcard.css
│   └── categorystrip.css
├── App.jsx                  ← Router + Provider setup
└── main.jsx                 ← App entry point
```

---

## 🔌 API

- **FakeStoreAPI** — `https://fakestoreapi.com/products`
- No API key required
- Returns: `id`, `title`, `price`, `image`, `category`, `rating`

---

## 🎨 Theme

```css
--primary:      #2563eb   /* Royal Blue */
--primary-dark: #1d4ed8   /* Hover state */
--white:        #ffffff
--bg:           #f0f4ff   /* Page background */
--text:         #1e293b   /* Primary text */
--muted:        #64748b   /* Secondary text */
```

---

## 🛠️ Tech Stack

- **React 18** + Vite
- **React Router DOM** v6
- **Context API** for state management
- **FakeStoreAPI** for product data
- **CSS** with custom variables
- **react-icons** for UI icons

---

## ⚙️ Setup & Installation

```bash
# Clone the repository
git clone https://github.com/iMrityunjayKr/shopsphere.git

# Navigate to project
cd shopsphere

# Install dependencies
npm install

# Create .env file
VITE_API_KEY=your_key_here

# Start development server
npm run dev
```

---

## 🗺️ Roadmap

- [ ] Mobile responsiveness
- [ ] Admin dashboard (after custom API)
- [ ] Backend with Django REST Framework
- [ ] User authentication
- [ ] Payment integration

---

## 👨‍💻 Author

Built as **Day 14-onwards** of the 30-Day Frontend Challenge.

> "I don't just complete tasks — I build real-world apps to become job-ready."

---

## 📝 Notes

- Logo: AI Generated
- Admin page: Planned for Phase 2 with custom backend API
