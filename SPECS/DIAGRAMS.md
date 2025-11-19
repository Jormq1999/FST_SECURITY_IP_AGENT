# Team Information Portal - Visual Diagrams

This document contains ASCII art diagrams and Mermaid diagram code that can be rendered into actual images.

## How to Use These Diagrams

### Method 1: Mermaid Live Editor
1. Copy the code blocks below
2. Go to https://mermaid.live/
3. Paste and edit
4. Export as PNG/SVG

### Method 2: VS Code Extension
1. Install "Markdown Preview Mermaid Support" extension
2. Preview this file in VS Code
3. Right-click diagram → Export

### Method 3: GitHub Markdown
- GitHub automatically renders Mermaid diagrams in markdown files

---

## Diagram 1: System Architecture Overview

```mermaid
graph TB
    subgraph "User Layer"
        U1[Desktop Browser]
        U2[Tablet Browser]
        U3[Mobile Browser]
    end
    
    subgraph "Frontend Layer"
        FE[Static HTML/CSS/JS Portal]
        SEARCH[Client-Side Search<br/>Lunr.js]
        CHAT[Chat Interface]
    end
    
    subgraph "Backend Layer"
        API[FastAPI Server]
        RAG[RAG Engine]
        CACHE[Response Cache]
    end
    
    subgraph "Data Layer"
        VDB[(Vector Database<br/>ChromaDB)]
        LLM[LLM API<br/>OpenAI/Claude]
    end
    
    U1 --> FE
    U2 --> FE
    U3 --> FE
    
    FE --> SEARCH
    FE --> CHAT
    
    CHAT --> API
    API --> RAG
    RAG --> CACHE
    CACHE --> VDB
    RAG --> LLM
    
    style FE fill:#4D94FF,color:#fff
    style API fill:#FF6B35,color:#fff
    style RAG fill:#00A3E0,color:#fff
    style VDB fill:#28A745,color:#fff
    style LLM fill:#FFC107,color:#000
```

---

## Diagram 2: Content Flow (RAG Pipeline)

```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant API
    participant RAG
    participant VectorDB
    participant LLM
    
    User->>Frontend: Types question
    Frontend->>API: Send via WebSocket
    API->>RAG: Process query
    
    RAG->>RAG: Embed query
    RAG->>VectorDB: Similarity search
    VectorDB-->>RAG: Top 5 relevant chunks
    
    RAG->>RAG: Assemble context
    RAG->>LLM: Generate response with context
    
    loop Streaming
        LLM-->>RAG: Stream tokens
        RAG-->>API: Stream tokens
        API-->>Frontend: Stream tokens
        Frontend-->>User: Display incrementally
    end
    
    User->>Frontend: 👍/👎 Feedback
    Frontend->>API: Log feedback
```

---

## Diagram 3: Page Layout Structure

```mermaid
graph TB
    subgraph "Portal Layout"
        HEADER[Header Component]
        MAIN[Main Container]
        FOOTER[Footer Component]
    end
    
    subgraph "Header Elements"
        LOGO[Logo]
        SEARCHBAR[Search Bar]
        THEME[Theme Toggle]
        USER[User Menu]
    end
    
    subgraph "Main Container"
        SIDEBAR[Sidebar Navigation]
        CONTENT[Content Area]
        AICHAT[AI Chat Panel]
    end
    
    subgraph "Sidebar Items"
        NAV1[Architecture]
        NAV2[Designers]
        NAV3[Validators]
        NAV4[Training]
        NAV5[Repositories]
    end
    
    subgraph "Content Types"
        CARDS[Content Cards]
        DIAGRAMS[Diagrams]
        LISTS[Resource Lists]
        VIDEOS[Video Embeds]
    end
    
    HEADER --> LOGO
    HEADER --> SEARCHBAR
    HEADER --> THEME
    HEADER --> USER
    
    MAIN --> SIDEBAR
    MAIN --> CONTENT
    MAIN --> AICHAT
    
    SIDEBAR --> NAV1
    SIDEBAR --> NAV2
    SIDEBAR --> NAV3
    SIDEBAR --> NAV4
    SIDEBAR --> NAV5
    
    CONTENT --> CARDS
    CONTENT --> DIAGRAMS
    CONTENT --> LISTS
    CONTENT --> VIDEOS
```

---

## Diagram 4: Deployment Architecture

```mermaid
graph LR
    subgraph "Users"
        U1[Team Members]
        U2[New Hires]
    end
    
    subgraph "CDN / Load Balancer"
        LB[Nginx Load Balancer]
    end
    
    subgraph "Frontend Tier"
        FE1[Static Files<br/>HTML/CSS/JS]
        FE2[Assets<br/>Images/Fonts]
    end
    
    subgraph "Backend Tier"
        BE1[FastAPI Server 1]
        BE2[FastAPI Server 2]
    end
    
    subgraph "Data Tier"
        VDB[(Vector Database)]
        CACHE[(Redis Cache)]
    end
    
    subgraph "External Services"
        AI[OpenAI API]
        MONITOR[Monitoring]
    end
    
    U1 --> LB
    U2 --> LB
    
    LB --> FE1
    LB --> FE2
    LB --> BE1
    LB --> BE2
    
    BE1 --> VDB
    BE2 --> VDB
    BE1 --> CACHE
    BE2 --> CACHE
    BE1 --> AI
    BE2 --> AI
    
    BE1 --> MONITOR
    BE2 --> MONITOR
    
    style LB fill:#4D94FF,color:#fff
    style BE1 fill:#FF6B35,color:#fff
    style BE2 fill:#FF6B35,color:#fff
    style VDB fill:#28A745,color:#fff
    style AI fill:#FFC107,color:#000
```

---

## Diagram 5: Content Organization

```mermaid
graph TB
    ROOT[Team Portal]
    
    subgraph "Architecture Section"
        ARCH[Architecture]
        CSME[CSME]
        CSE[CSE]
        OCS[OCS]
    end
    
    subgraph "Designers Section"
        DES[Designers]
        GUIDE[Design Guidelines]
        COMP[Component Library]
        ASSETS[Design Assets]
    end
    
    subgraph "Validators Section"
        VAL[Validators]
        TEST[Test Plans]
        QUAL[Quality Gates]
        CICD[CI/CD Docs]
    end
    
    subgraph "Training Section"
        TRAIN[Training]
        ONBOARD[Onboarding Path]
        TUTS[Tutorials]
        VIDEOS[Video Library]
    end
    
    subgraph "Repositories Section"
        REPOS[Repositories]
        LINKS[Repo Links]
        SETUP[Setup Guides]
        CONTRIB[Contribution Guide]
    end
    
    ROOT --> ARCH
    ROOT --> DES
    ROOT --> VAL
    ROOT --> TRAIN
    ROOT --> REPOS
    
    ARCH --> CSME
    ARCH --> CSE
    ARCH --> OCS
    
    DES --> GUIDE
    DES --> COMP
    DES --> ASSETS
    
    VAL --> TEST
    VAL --> QUAL
    VAL --> CICD
    
    TRAIN --> ONBOARD
    TRAIN --> TUTS
    TRAIN --> VIDEOS
    
    REPOS --> LINKS
    REPOS --> SETUP
    REPOS --> CONTRIB
    
    style ROOT fill:#4D94FF,color:#fff
    style ARCH fill:#FF6B35,color:#fff
    style DES fill:#00A3E0,color:#fff
    style VAL fill:#28A745,color:#fff
    style TRAIN fill:#FFC107,color:#000
    style REPOS fill:#17A2B8,color:#fff
```

---

## Diagram 6: Data Flow - User Query

```mermaid
flowchart TD
    START([User asks question]) --> INPUT[Type in chat or search]
    
    INPUT --> DECISION{Search or Chat?}
    
    DECISION -->|Search| SEARCH_PATH[Client-side Search]
    DECISION -->|Chat| CHAT_PATH[AI Assistant]
    
    SEARCH_PATH --> SEARCH_INDEX[Query Lunr.js Index]
    SEARCH_INDEX --> SEARCH_RESULTS[Display Results]
    SEARCH_RESULTS --> END1([User finds answer])
    
    CHAT_PATH --> WEBSOCKET[Send via WebSocket]
    WEBSOCKET --> BACKEND[FastAPI Backend]
    BACKEND --> EMBED[Embed Query]
    EMBED --> VECTOR_SEARCH[Vector Similarity Search]
    VECTOR_SEARCH --> CONTEXT[Retrieve Context]
    CONTEXT --> PROMPT[Build Prompt]
    PROMPT --> LLM_CALL[Call LLM API]
    LLM_CALL --> STREAM[Stream Response]
    STREAM --> DISPLAY[Display in Chat]
    DISPLAY --> FEEDBACK{User Feedback?}
    
    FEEDBACK -->|👍| LOG_GOOD[Log Positive]
    FEEDBACK -->|👎| LOG_BAD[Log Negative]
    FEEDBACK -->|None| END2([Done])
    
    LOG_GOOD --> IMPROVE[Improve System]
    LOG_BAD --> IMPROVE
    IMPROVE --> END2
    
    style START fill:#4D94FF,color:#fff
    style DECISION fill:#FF6B35,color:#fff
    style LLM_CALL fill:#FFC107,color:#000
    style END1 fill:#28A745,color:#fff
    style END2 fill:#28A745,color:#fff
```

---

## Diagram 7: Responsive Layout Breakpoints

```mermaid
graph LR
    subgraph "Mobile < 640px"
        M[Single Column<br/>Hamburger Menu<br/>Floating Chat]
    end
    
    subgraph "Tablet 640-1024px"
        T[Two Column<br/>Collapsible Sidebar<br/>Modal Chat]
    end
    
    subgraph "Desktop 1024-1440px"
        D[Three Column<br/>Fixed Sidebar<br/>Side Panel Chat]
    end
    
    subgraph "Wide > 1440px"
        W[Expanded Layout<br/>Wider Content<br/>Enhanced Spacing]
    end
    
    M -->|Viewport grows| T
    T -->|Viewport grows| D
    D -->|Viewport grows| W
    
    style M fill:#FF6B35,color:#fff
    style T fill:#00A3E0,color:#fff
    style D fill:#4D94FF,color:#fff
    style W fill:#28A745,color:#fff
```

---

## Diagram 8: AI Agent Training Pipeline

```mermaid
graph TB
    START[Start Content Indexing] --> SCAN[Scan Content Directory]
    
    SCAN --> PARSE{File Type?}
    
    PARSE -->|Markdown| MD[Parse Markdown]
    PARSE -->|HTML| HTML[Parse HTML]
    PARSE -->|JSON| JSON[Parse JSON]
    
    MD --> EXTRACT[Extract Text]
    HTML --> EXTRACT
    JSON --> EXTRACT
    
    EXTRACT --> CHUNK[Chunk Content<br/>500 tokens]
    CHUNK --> META[Add Metadata<br/>section, url, date]
    META --> EMBED[Generate Embeddings<br/>OpenAI ada-002]
    EMBED --> STORE[Store in Vector DB]
    
    STORE --> CHECK{More files?}
    CHECK -->|Yes| SCAN
    CHECK -->|No| INDEX[Build Search Index]
    
    INDEX --> COMPLETE[Indexing Complete]
    COMPLETE --> READY[Portal Ready]
    
    style START fill:#4D94FF,color:#fff
    style EMBED fill:#FF6B35,color:#fff
    style STORE fill:#28A745,color:#fff
    style READY fill:#00A3E0,color:#fff
```

---

## Diagram 9: Security Architecture

```mermaid
graph TB
    subgraph "Security Layers"
        L1[Layer 1: Network Security]
        L2[Layer 2: Authentication]
        L3[Layer 3: Application Security]
        L4[Layer 4: API Security]
        L5[Layer 5: Data Security]
    end
    
    subgraph "Layer 1 Controls"
        HTTPS[HTTPS/TLS]
        CORS[CORS Policy]
        RATE[Rate Limiting]
        DDOS[DDoS Protection]
    end
    
    subgraph "Layer 2 Controls"
        SSO[SSO Integration]
        JWT[JWT Tokens]
        SESSION[Session Management]
    end
    
    subgraph "Layer 3 Controls"
        XSS[XSS Protection]
        CSRF[CSRF Tokens]
        INPUT[Input Sanitization]
        CSP[Content Security Policy]
    end
    
    subgraph "Layer 4 Controls"
        APIKEY[API Key Management]
        SIGN[Request Signing]
        ENCRYPT[Response Encryption]
        AUDIT[Audit Logging]
    end
    
    subgraph "Layer 5 Controls"
        MASK[Data Masking]
        REST[Encryption at Rest]
        SECRETS[Secret Management]
        BACKUP[Regular Backups]
    end
    
    L1 --> HTTPS & CORS & RATE & DDOS
    L2 --> SSO & JWT & SESSION
    L3 --> XSS & CSRF & INPUT & CSP
    L4 --> APIKEY & SIGN & ENCRYPT & AUDIT
    L5 --> MASK & REST & SECRETS & BACKUP
    
    style L1 fill:#DC3545,color:#fff
    style L2 fill:#FF6B35,color:#fff
    style L3 fill:#FFC107,color:#000
    style L4 fill:#28A745,color:#fff
    style L5 fill:#17A2B8,color:#fff
```

---

## Diagram 10: 10-Week Implementation Timeline

```mermaid
gantt
    title Team Portal Implementation Timeline
    dateFormat  YYYY-MM-DD
    
    section Foundation
    Project Setup           :done, w1, 2025-11-19, 5d
    Core Layout            :done, w2, after w1, 5d
    
    section Content
    Section Templates      :active, w3, after w2, 5d
    Content Migration      :w4, after w3, 5d
    
    section AI Agent
    Backend Setup          :w5, after w4, 5d
    RAG Implementation     :w6, after w5, 5d
    API & Frontend         :w7, after w6, 5d
    
    section Polish
    Advanced Features      :w8, after w7, 5d
    Accessibility & QA     :w9, after w8, 5d
    
    section Launch
    Deployment            :crit, w10, after w9, 5d
```

---

## Additional Visual Resources

### Wireframe Templates
For actual wireframes, use tools like:
- **Figma**: https://www.figma.com
- **Excalidraw**: https://excalidraw.com (for quick sketches)
- **draw.io**: https://app.diagrams.net (for technical diagrams)

### Icon Resources
- **Lucide Icons**: https://lucide.dev
- **Font Awesome**: https://fontawesome.com
- **Heroicons**: https://heroicons.com

### Color Palette Visualization
Generate color swatches at:
- **Coolors**: https://coolors.co
- **Adobe Color**: https://color.adobe.com

### Mockup Tools
- **Figma** (recommended): Full design system
- **Sketch**: Mac-only design tool
- **Adobe XD**: Design and prototyping

---

## How to Create High-Fidelity Mockups

### Step 1: Set up Figma
1. Create new file: "Team Portal Design"
2. Set up frames for each breakpoint:
   - Desktop: 1920×1080
   - Tablet: 768×1024
   - Mobile: 375×667

### Step 2: Create Design System
1. Define color styles from UI_UX_DESIGN.md
2. Create text styles (headings, body, etc.)
3. Set up spacing components
4. Create reusable components:
   - Buttons
   - Cards
   - Input fields
   - Navigation items

### Step 3: Build Layouts
1. Header component
2. Sidebar navigation
3. Content area templates
4. AI chat interface
5. Footer component

### Step 4: Create Interactions
1. Hover states
2. Click states
3. Animation prototypes
4. Page transitions

### Step 5: Export Assets
1. Export icons as SVG
2. Export images as WebP/PNG
3. Generate CSS variables
4. Create style guide document

---

## Mermaid Diagram Cheat Sheet

```mermaid
graph LR
    A[Square] -->|Label| B(Rounded)
    B --> C{Decision}
    C -->|Yes| D[Result 1]
    C -->|No| E[Result 2]
    
    style A fill:#4D94FF,color:#fff
    style C fill:#FF6B35,color:#fff
```

**Node Types:**
- `[Text]` - Rectangle
- `(Text)` - Rounded rectangle
- `{Text}` - Diamond (decision)
- `((Text))` - Circle
- `[(Text)]` - Database
- `([Text])` - Stadium

**Arrow Types:**
- `-->` - Solid arrow
- `-.->` - Dotted arrow
- `==>` - Thick arrow
- `--Label-->` - Labeled arrow

---

**Document Version**: 1.0  
**Last Updated**: November 19, 2025  
**Tools Used**: Mermaid.js, ASCII Art  
**Next Step**: Create high-fidelity mockups in Figma
