# 📰 Premium News App

A modern, responsive news application built with React and Vite, featuring real-time news updates with dark mode support and smooth animations.

## ✨ Features

- **Real-time News**: Fetch latest news from NewsAPI
- **Dark Mode**: Toggle between light and dark themes with persistent preferences
- **Search & Filter**: Search news articles and filter by categories
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Framer Motion animations for enhanced UX
- **Premium UI**: Glassmorphism design with gradient accents
- **Infinite Scroll**: Auto-load more news as you scroll
- **Skeleton Loading**: Beautiful loading states while fetching data
- **Error Handling**: Fallback content when API is unavailable

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4 + DaisyUI 5
- **Animations**: Framer Motion 12
- **HTTP Client**: Axios
- **Code Quality**: ESLint 9

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd my-project
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
```
Then edit `.env` and add your NewsAPI key from [newsapi.org](https://newsapi.org)

4. Start development server
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build

## 🗂️ Project Structure

```
src/
├── Components/          # Reusable React components
│   ├── ModernNavbar.jsx      # Top navigation with search
│   ├── HeroSection.jsx       # Featured news section
│   ├── PremiumNewsCard.jsx   # News article card
│   ├── TrendingSidebar.jsx   # Trending news sidebar
│   ├── ModernFooter.jsx      # Footer section
│   └── ...other components
├── Page/               # Page components
│   └── News.jsx
├── context/            # React Context API
│   ├── NewsContext.jsx      # News state management
│   └── ThemeContext.jsx     # Theme state management
├── config/             # Configuration files
│   └── axios.js            # Axios API configuration
├── App.jsx            # Root component
└── main.jsx           # Application entry point
```

## 🔑 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_KEY=your_newsapi_key_here
```

Get your free API key from [newsapi.org](https://newsapi.org)

## 🎨 Features in Detail

### Dark Mode
The app includes a fully functional dark mode with:
- Theme toggle button in navbar
- Persistent theme preference using localStorage
- Smooth transitions between themes
- Optimized colors for readability

### News Categories
Browse news by category:
- Technology
- Business
- Sports
- Health
- Entertainment
- Science
- General

### Search Functionality
- Real-time search across all news articles
- Debounced search input for better performance
- Language filter set to English

## 🚢 Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder ready for deployment.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔍 Code Quality

This project uses ESLint to maintain code quality. Run the linter with:

```bash
npm run lint
```

All code follows strict linting rules for consistency and best practices.

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For support, please open an issue in the repository.

---

Built with ❤️ using React + Vite
