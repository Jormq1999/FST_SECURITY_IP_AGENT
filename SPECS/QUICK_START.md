# Quick Start Guide - Team Information Portal

This guide helps you get started quickly with the Team Information Portal project.

## 🚀 For the Impatient

**Want to start building right now?** Follow these steps:

```bash
# 1. Create project directory
mkdir team-portal
cd team-portal

# 2. Initialize Git
git init
git remote add origin <your-repo-url>

# 3. Create basic structure
mkdir -p assets/{css,js,images,fonts}
mkdir -p content/{architecture,designers,validators,training,repositories}
mkdir -p ai-backend
mkdir -p docs

# 4. Create first file
cat > index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Information Portal</title>
    <link rel="stylesheet" href="assets/css/main.css">
</head>
<body>
    <header>
        <h1>🚀 Team Portal - Coming Soon</h1>
    </header>
    <main>
        <p>Your team information hub is being built...</p>
    </main>
    <script src="assets/js/app.js"></script>
</body>
</html>
EOF

# 5. Open in browser
open index.html  # macOS
# OR
xdg-open index.html  # Linux
# OR
start index.html  # Windows
```

**Congratulations!** You've taken the first step. Now continue with the detailed guide below.

---

## 📚 What You Need to Know

### Prerequisites

#### Required Knowledge
- ✅ HTML5, CSS3 basics
- ✅ JavaScript (ES6+)
- ✅ Basic Git operations
- ✅ Command line comfort

#### Nice to Have
- 🔷 Python basics (for AI backend)
- 🔷 REST API concepts
- 🔷 Responsive design patterns
- 🔷 Basic UX principles

### Tools & Software

#### Essential
```
✅ Text Editor: VS Code (recommended)
✅ Browser: Chrome/Firefox (with DevTools)
✅ Git: Version control
✅ Node.js: For build tools (optional)
✅ Python 3.10+: For AI backend
```

#### Recommended VS Code Extensions
```
- Live Server (ritwickdey.liveserver)
- Prettier (esbenp.prettier-vscode)
- ESLint (dbaeumer.vscode-eslint)
- Python (ms-python.python)
- Markdown Preview Mermaid (bierner.markdown-mermaid)
```

---

## 📖 Reading Order

### First Day (2 hours)
1. **Read**: [SPECS/README.md](./README.md) - 15 min
   - Get project overview
   - Understand goals and scope

2. **Skim**: [SPECS/PROJECT_SPECIFICATION.md](./PROJECT_SPECIFICATION.md) - 30 min
   - Focus on sections 1-4
   - Understand requirements

3. **Review**: [SPECS/UI_UX_DESIGN.md](./UI_UX_DESIGN.md) - 30 min
   - Study design system
   - Look at layout mockups

4. **Browse**: [SPECS/DIAGRAMS.md](./DIAGRAMS.md) - 15 min
   - Visualize architecture
   - Understand data flow

5. **Plan**: [SPECS/IMPLEMENTATION_ROADMAP.md](./IMPLEMENTATION_ROADMAP.md) - 30 min
   - Review Week 1 tasks
   - Prepare your environment

### First Week
- **Deep dive** into your role's specific sections
- **Set up** development environment
- **Start** Week 1 tasks from roadmap

---

## 🎯 Role-Specific Quick Starts

### Frontend Developer

#### Your Mission
Build the HTML/CSS/JS portal interface

#### Start Here
1. Read [UI_UX_DESIGN.md](./UI_UX_DESIGN.md) sections 1-3
2. Study layout mockups (section 2)
3. Review component designs (section 5)

#### Week 1 Checklist
```
Day 1:
[ ] Set up VS Code with extensions
[ ] Create project folder structure
[ ] Initialize Git repository
[ ] Create base HTML structure

Day 2:
[ ] Build CSS design system (variables)
[ ] Create header component
[ ] Build footer component
[ ] Test responsive grid

Day 3:
[ ] Implement sidebar navigation
[ ] Add mobile hamburger menu
[ ] Test keyboard navigation
[ ] Cross-browser testing

Day 4:
[ ] Build search bar UI
[ ] Add theme switcher
[ ] Implement smooth transitions
[ ] Mobile optimization

Day 5:
[ ] Code review and cleanup
[ ] Documentation
[ ] Accessibility check
[ ] Week 1 demo prep
```

#### Key Files to Create
```
assets/css/main.css         - Core styles
assets/css/components.css   - Reusable components
assets/css/themes.css       - Light/dark themes
assets/js/app.js            - Main application
assets/js/navigation.js     - Navigation logic
assets/js/theme.js          - Theme switcher
```

---

### Backend Developer

#### Your Mission
Build the Python AI backend with RAG

#### Start Here
1. Read [SYSTEM_ARCHITECTURE.md](./SYSTEM_ARCHITECTURE.md) section 4
2. Study RAG pipeline diagram in [DIAGRAMS.md](./DIAGRAMS.md)
3. Review API structure (section 3.2)

#### Week 5 Checklist (Your first week)
```
Day 1:
[ ] Set up Python virtual environment
[ ] Install dependencies (FastAPI, LangChain)
[ ] Create project structure
[ ] Configure environment variables

Day 2:
[ ] Build content parser
[ ] Implement text chunking
[ ] Test with sample content
[ ] Write unit tests

Day 3:
[ ] Set up ChromaDB
[ ] Create embedding pipeline
[ ] Test vector storage
[ ] Verify retrieval works

Day 4:
[ ] Implement similarity search
[ ] Add metadata filtering
[ ] Optimize query performance
[ ] Load test with sample queries

Day 5:
[ ] End-to-end indexing test
[ ] Performance benchmarking
[ ] Documentation
[ ] Week 5 demo prep
```

#### Key Files to Create
```
ai-backend/main.py          - FastAPI server
ai-backend/rag_engine.py    - RAG implementation
ai-backend/embeddings.py    - Vector operations
ai-backend/content_indexer.py - Content processing
ai-backend/llm_client.py    - LLM API wrapper
ai-backend/config.py        - Configuration
ai-backend/requirements.txt - Dependencies
```

#### Quick Setup Script
```bash
#!/bin/bash
# setup_backend.sh

# Create virtual environment
python3 -m venv venv
source venv/bin/activate

# Install dependencies
pip install fastapi uvicorn
pip install langchain openai chromadb
pip install python-dotenv websockets
pip install pytest black flake8

# Create .env file
cat > .env << 'EOF'
OPENAI_API_KEY=your_key_here
ENVIRONMENT=development
LOG_LEVEL=INFO
EOF

# Create requirements.txt
pip freeze > requirements.txt

echo "✅ Backend environment ready!"
```

---

### UI/UX Designer

#### Your Mission
Create the visual design system and mockups

#### Start Here
1. Review [UI_UX_DESIGN.md](./UI_UX_DESIGN.md) completely
2. Study color palette and typography (section 1)
3. Look at component designs (section 5)

#### Week 1 Checklist
```
Day 1-2:
[ ] Set up Figma project
[ ] Create design system (colors, typography)
[ ] Define spacing and components
[ ] Build style guide

Day 3-4:
[ ] Create desktop layout mockup
[ ] Design tablet version
[ ] Design mobile version
[ ] Add interactions/animations

Day 5:
[ ] Present to team
[ ] Gather feedback
[ ] Export assets
[ ] Document design decisions
```

#### Figma Project Structure
```
Team Portal Design/
├── 📄 Cover Page
├── 🎨 Design System
│   ├── Colors
│   ├── Typography
│   ├── Spacing
│   └── Components
├── 🖥️ Desktop Screens
│   ├── Home
│   ├── Architecture
│   ├── Designers
│   ├── Validators
│   ├── Training
│   └── Repositories
├── 📱 Mobile Screens
└── 🎬 Prototypes
```

---

### Content Strategist

#### Your Mission
Migrate and organize all team content

#### Start Here
1. Read [PROJECT_SPECIFICATION.md](./PROJECT_SPECIFICATION.md) section 4
2. Study content structure requirements
3. Review section specifications

#### Week 3 Checklist
```
Day 1:
[ ] Audit existing content (inventory)
[ ] Map content to portal sections
[ ] Identify gaps and redundancies
[ ] Create migration spreadsheet

Day 2:
[ ] Convert Architecture content to Markdown
[ ] Add metadata (tags, dates, authors)
[ ] Optimize images
[ ] Create sample cards

Day 3:
[ ] Convert Designers & Validators content
[ ] Ensure consistent formatting
[ ] Add alt text to images
[ ] Link related resources

Day 4:
[ ] Convert Training & Repositories content
[ ] Create learning path structure
[ ] Add video embeds
[ ] Write descriptions

Day 5:
[ ] Content review with team
[ ] Fix issues found
[ ] Document update process
[ ] Create content style guide
```

#### Content Inventory Template
```markdown
| Section      | Title | Type | Status | Owner | Last Updated |
|--------------|-------|------|--------|-------|--------------|
| Architecture | CSME  | Doc  | ✅     | John  | 2025-11-15  |
| Architecture | CSE   | Doc  | 🔄     | Jane  | 2025-10-20  |
| Designers    | Guide | Doc  | ⏳     | -     | -           |
```

---

## 🛠️ Development Environment Setup

### Complete Setup Script

```bash
#!/bin/bash
# Complete setup for Team Information Portal

echo "🚀 Setting up Team Information Portal..."

# 1. Create directory structure
mkdir -p team-portal
cd team-portal

mkdir -p assets/{css,js,images,fonts}
mkdir -p content/{architecture,designers,validators,training,repositories}
mkdir -p ai-backend
mkdir -p docs
mkdir -p SPECS

echo "✅ Directory structure created"

# 2. Initialize Git
git init
echo "node_modules/" > .gitignore
echo "venv/" >> .gitignore
echo ".env" >> .gitignore
echo "*.pyc" >> .gitignore
echo "__pycache__/" >> .gitignore

echo "✅ Git initialized"

# 3. Create base HTML
cat > index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Team Information Portal - Your centralized resource hub">
    <title>Team Information Portal</title>
    <link rel="stylesheet" href="assets/css/main.css">
</head>
<body>
    <header id="header">
        <div class="container">
            <div class="logo">Team Portal</div>
            <nav id="nav"></nav>
        </div>
    </header>
    
    <main id="main">
        <aside id="sidebar"></aside>
        <section id="content"></section>
        <aside id="chat"></aside>
    </main>
    
    <footer id="footer">
        <p>&copy; 2025 Team Name. All rights reserved.</p>
    </footer>
    
    <script src="assets/js/app.js"></script>
</body>
</html>
EOF

echo "✅ Base HTML created"

# 4. Create base CSS
cat > assets/css/main.css << 'EOF'
:root {
    --color-primary: #0066CC;
    --color-secondary: #00A3E0;
    --color-accent: #FF6B35;
    --color-bg: #FFFFFF;
    --color-text: #1A1A1A;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    color: var(--color-text);
    background: var(--color-bg);
    line-height: 1.6;
}

.container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 1rem;
}
EOF

echo "✅ Base CSS created"

# 5. Create base JavaScript
cat > assets/js/app.js << 'EOF'
// Team Portal - Main Application
console.log('🚀 Team Portal loading...');

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ Team Portal ready!');
});
EOF

echo "✅ Base JavaScript created"

# 6. Create README
cat > README.md << 'EOF'
# Team Information Portal

A centralized information hub with AI-powered assistance.

## Quick Start

1. Open `index.html` in a browser
2. Start developing!

## Documentation

See `/SPECS` folder for complete documentation.

## Development

- Frontend: HTML, CSS, JavaScript
- Backend: Python, FastAPI
- AI: OpenAI, LangChain, ChromaDB

## License

MIT
EOF

echo "✅ README created"

# 7. Python backend setup (optional)
read -p "Set up Python backend? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
    cd ai-backend
    python3 -m venv venv
    source venv/bin/activate
    pip install fastapi uvicorn python-dotenv
    
    cat > main.py << 'EOF'
from fastapi import FastAPI

app = FastAPI(title="Team Portal AI Backend")

@app.get("/")
async def root():
    return {"message": "Team Portal AI Backend"}

@app.get("/health")
async def health():
    return {"status": "healthy"}
EOF
    
    echo "✅ Python backend created"
    cd ..
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. cd team-portal"
echo "2. open index.html"
echo "3. Start coding!"
echo ""
echo "Read SPECS/IMPLEMENTATION_ROADMAP.md for detailed tasks."
```

Save this as `setup.sh`, make it executable, and run:

```bash
chmod +x setup.sh
./setup.sh
```

---

## ✅ Daily Workflow

### Morning Routine
```
1. Pull latest changes: git pull
2. Review today's tasks in roadmap
3. Check team chat for updates
4. Quick standup (15 min)
```

### Development Cycle
```
1. Create feature branch: git checkout -b feature/name
2. Write code
3. Test locally
4. Commit with clear message: git commit -m "feat: add navigation"
5. Push: git push origin feature/name
6. Create pull request
7. Review and merge
```

### Testing Checklist
```
[ ] Works in Chrome
[ ] Works in Firefox
[ ] Works in Safari
[ ] Responsive (mobile, tablet, desktop)
[ ] Keyboard accessible
[ ] No console errors
[ ] Fast (< 2s load)
```

---

## 🆘 Common Issues & Solutions

### Issue: Port already in use
```bash
# Find and kill process
lsof -ti:8000 | xargs kill -9
```

### Issue: Python dependencies conflict
```bash
# Fresh virtual environment
rm -rf venv
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### Issue: CSS not updating
```bash
# Hard refresh browser
Ctrl + Shift + R (Windows/Linux)
Cmd + Shift + R (Mac)
```

### Issue: CORS errors
```python
# Add to FastAPI
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)
```

---

## 📞 Getting Help

### Resources
- 📖 **Documentation**: Read SPECS folder
- 💬 **Team Chat**: #team-portal-project
- 🐛 **Issues**: GitHub Issues
- 📧 **Email**: team-lead@company.com

### Ask Questions Format
```
What I'm trying to do:
[Describe the task]

What I've tried:
[List attempts]

Error message:
[Paste error]

Expected result:
[What should happen]
```

---

## 🎓 Learning Resources

### HTML/CSS
- MDN Web Docs: https://developer.mozilla.org
- CSS Tricks: https://css-tricks.com
- Flexbox Froggy: https://flexboxfroggy.com

### JavaScript
- JavaScript.info: https://javascript.info
- Eloquent JavaScript: https://eloquentjavascript.net

### Python/FastAPI
- FastAPI Docs: https://fastapi.tiangolo.com
- Python Docs: https://docs.python.org

### AI/LangChain
- LangChain Docs: https://python.langchain.com
- OpenAI Cookbook: https://github.com/openai/openai-cookbook

---

## 🎉 Success! What's Next?

Once you've completed setup:

1. ✅ **Week 1**: Build foundation (layout, navigation)
2. ✅ **Week 2-4**: Add content and sections
3. ✅ **Week 5-7**: Implement AI backend
4. ✅ **Week 8-9**: Polish and optimize
5. ✅ **Week 10**: Deploy and launch!

**Follow the [Implementation Roadmap](./IMPLEMENTATION_ROADMAP.md) for detailed week-by-week tasks.**

Good luck, and happy coding! 🚀

---

**Document Version**: 1.0  
**Last Updated**: November 19, 2025  
**Status**: ✅ Ready to Use
