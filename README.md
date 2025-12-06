# Cookie Monster Card

An interactive card component with eyes that follow your mouse cursor. Built with React, TypeScript, and Tailwind CSS.

## 🎨 Design Credit

Original design by [Rafael Serra](https://www.instagram.com/faelpt)

## 🚀 Deploy to GitHub Pages

### Automatic Deployment (Recommended)

1. **Create a new repository on GitHub**
   - Go to [GitHub](https://github.com/new)
   - Name your repository (e.g., `cookie-monster-card`)
   - Make it public
   - Don't initialize with README (you already have one)

2. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Cookie Monster Card"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on **Settings** tab
   - Click on **Pages** in the left sidebar
   - Under "Build and deployment":
     - Source: Select **GitHub Actions**
   - The workflow will automatically run and deploy your site

4. **Access your site**
   - After the deployment completes (check the Actions tab)
   - Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### Manual Deployment

If you prefer to deploy manually:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# The 'dist' folder now contains your static site
# You can upload this to any static hosting service
```

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
├── components/
│   ├── Eye.tsx           # Eye component with cursor tracking
│   └── EyeCard.tsx       # Main card component
├── styles/
│   └── globals.css       # Global styles and CSS variables
├── App.tsx               # Main application component
├── main.tsx              # Application entry point
└── index.html            # HTML template
```

## 🎯 Features

- 👀 Interactive eyes that follow cursor movement
- 🎨 Faithful recreation of the original Pantone-style design
- 📱 Fully responsive (edge-to-edge on mobile)
- 🎭 Smooth eye movement with constrained pupils
- ♿ Accessible and keyboard-friendly

## 🔧 Technologies

- React 18
- TypeScript
- Tailwind CSS v4
- Vite

## 📝 License

Design by Rafael Serra. Code implementation open for use.

## 🔗 Links

- Live Demo: (will be available after deployment)
- Original Design: [Rafael Serra on Instagram](https://www.instagram.com/faelpt)
