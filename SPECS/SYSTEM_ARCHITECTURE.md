# Team Information Portal - System Architecture

## 1. High-Level Architecture Diagram

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                         PRESENTATION LAYER                         ┃
┃                        (User Interface)                            ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
                                   │
        ┌──────────────────────────┼──────────────────────────┐
        │                          │                          │
        ▼                          ▼                          ▼
┏━━━━━━━━━━━━━━┓          ┏━━━━━━━━━━━━━━┓          ┏━━━━━━━━━━━━━━┓
┃   Desktop    ┃          ┃    Tablet    ┃          ┃    Mobile    ┃
┃   Browser    ┃          ┃   Browser    ┃          ┃   Browser    ┃
┃  1920x1080   ┃          ┃  768x1024    ┃          ┃  375x667     ┃
┗━━━━━━━━━━━━━━┛          ┗━━━━━━━━━━━━━━┛          ┗━━━━━━━━━━━━━━┛
        │                          │                          │
        └──────────────────────────┴──────────────────────────┘
                                   │
                                   ▼
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                         APPLICATION LAYER                          ┃
┃                        (Frontend Components)                        ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┃
┃  │Navigation  │  │   Search   │  │  AI Chat   │  │   Theme    │  ┃
┃  │  Component │  │  Component │  │ Component  │  │  Switcher  │  ┃
┃  └────────────┘  └────────────┘  └────────────┘  └────────────┘  ┃
┃  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┃
┃  │Architecture│  │ Designers  │  │ Validators │  │  Training  │  ┃
┃  │   Section  │  │  Section   │  │  Section   │  │  Section   │  ┃
┃  └────────────┘  └────────────┘  └────────────┘  └────────────┘  ┃
┃  ┌────────────────────────────────────────────────────────────┐   ┃
┃  │              Repositories Section                          │   ┃
┃  └────────────────────────────────────────────────────────────┘   ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
                                   │
                    ┌──────────────┴──────────────┐
                    │                             │
                    ▼                             ▼
        ┏━━━━━━━━━━━━━━━━━━┓          ┏━━━━━━━━━━━━━━━━━━┓
        ┃   Static Content ┃          ┃   API Gateway    ┃
        ┃   Delivery       ┃          ┃   (Backend)      ┃
        ┗━━━━━━━━━━━━━━━━━━┛          ┗━━━━━━━━━━━━━━━━━━┛
                    │                             │
                    │                             ▼
                    │                   ┏━━━━━━━━━━━━━━━━━━┓
                    │                   ┃  AI Backend      ┃
                    │                   ┃  (Python/FastAPI)┃
                    │                   ┗━━━━━━━━━━━━━━━━━━┛
                    │                             │
                    │              ┌──────────────┴──────────────┐
                    │              ▼                             ▼
                    │    ┏━━━━━━━━━━━━━━━━┓          ┏━━━━━━━━━━━━━━━━┓
                    │    ┃  Vector Store  ┃          ┃   LLM API      ┃
                    │    ┃  (ChromaDB)    ┃          ┃  (OpenAI)      ┃
                    │    ┗━━━━━━━━━━━━━━━━┛          ┗━━━━━━━━━━━━━━━━┛
                    │              │
                    └──────────────┘
                         Content Indexing
```

---

## 2. Component Architecture

### 2.1 Frontend Component Hierarchy

```
┌─────────────────────────────────────────────────────────────────┐
│                         App Container                            │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │                      Header Component                       │ │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌───────────┐  │ │
│  │  │   Logo   │  │  Search  │  │  Theme   │  │   User    │  │ │
│  │  │          │  │   Bar    │  │  Toggle  │  │  Profile  │  │ │
│  │  └──────────┘  └──────────┘  └──────────┘  └───────────┘  │ │
│  └────────────────────────────────────────────────────────────┘ │
│  ┌──────────┬─────────────────────────────────────┬───────────┐ │
│  │          │                                     │           │ │
│  │ Sidebar  │         Main Content Area          │  AI Chat  │ │
│  │  Nav     │                                     │  Panel    │ │
│  │          │  ┌────────────────────────────────┐ │           │ │
│  │ ┌──────┐ │  │     Breadcrumb Navigation     │ │ ┌───────┐ │ │
│  │ │Archi-│ │  └────────────────────────────────┘ │ │Message│ │ │
│  │ │tecture│ │  ┌────────────────────────────────┐ │ │ List  │ │ │
│  │ └──────┘ │  │                                │ │ │       │ │ │
│  │ ┌──────┐ │  │      Section Content           │ │ └───────┘ │ │
│  │ │Design-│ │  │      (Dynamic Load)            │ │ ┌───────┐ │ │
│  │ │ers   │ │  │                                │ │ │ Input │ │ │
│  │ └──────┘ │  │  • Cards                       │ │ │ Area  │ │ │
│  │ ┌──────┐ │  │  • Lists                       │ │ └───────┘ │ │
│  │ │Valid-│ │  │  • Tables                      │ │           │ │
│  │ │ators │ │  │  • Diagrams                    │ │ [Toggle]  │ │
│  │ └──────┘ │  │                                │ │           │ │
│  │ ┌──────┐ │  └────────────────────────────────┘ │           │ │
│  │ │Train-│ │                                     │           │ │
│  │ │ing   │ │                                     │           │ │
│  │ └──────┘ │                                     │           │ │
│  │ ┌──────┐ │                                     │           │ │
│  │ │Repos │ │                                     │           │ │
│  │ └──────┘ │                                     │           │ │
│  └──────────┴─────────────────────────────────────┴───────────┘ │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │                      Footer Component                       │ │
│  │    Copyright  |  Links  |  Version  |  Last Updated         │ │
│  └────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

---

## 3. Data Flow Architecture

### 3.1 Static Content Flow

```
┌─────────────┐         ┌─────────────┐         ┌─────────────┐
│   User      │  GET    │   Web       │  Read   │   Content   │
│   Browser   ├────────>│   Server    ├────────>│   Files     │
│             │<────────┤             │<────────┤   (MD/JSON) │
└─────────────┘  HTML   └─────────────┘  Data   └─────────────┘
      │                                                 │
      │                  Cache Layer                    │
      │              (Browser + CDN)                    │
      └─────────────────────────────────────────────────┘
```

### 3.2 AI Chat Flow

```
┌─────────────┐                           ┌─────────────┐
│   User      │  1. User Query            │  Frontend   │
│             ├──────────────────────────>│  Chat UI    │
└─────────────┘                           └──────┬──────┘
                                                 │ 2. Send via WebSocket
                                                 ▼
                                          ┌──────────────┐
                                          │  API Gateway │
                                          │  (FastAPI)   │
                                          └──────┬───────┘
                                                 │ 3. Process Request
                                                 ▼
                                          ┌──────────────┐
                                          │  RAG Engine  │
                                          └──────┬───────┘
                                                 │
                    ┌────────────────────────────┼────────────────────┐
                    │                            │                    │
                    ▼                            ▼                    ▼
            ┌───────────────┐          ┌─────────────────┐   ┌──────────────┐
            │ 4a. Embed     │          │ 4b. Search      │   │ 4c. Generate │
            │    Query      │          │     Vector DB   │   │     Prompt   │
            └───────┬───────┘          └────────┬────────┘   └──────┬───────┘
                    │                           │                    │
                    └────────────>┌─────────────▼──────────┐<───────┘
                                  │  5. Retrieved Context  │
                                  └───────────┬────────────┘
                                              │
                                              ▼
                                  ┌─────────────────────┐
                                  │  6. LLM API Call    │
                                  │  (OpenAI/Claude)    │
                                  └──────────┬──────────┘
                                             │
                                             ▼
                                  ┌─────────────────────┐
                                  │  7. Stream Response │
                                  └──────────┬──────────┘
                                             │
                                             ▼
┌─────────────┐                   ┌─────────────────────┐
│   User      │  8. Display       │   Frontend Chat UI  │
│   Sees      │<──────────────────┤   (Markdown render) │
│   Response  │   Response        └─────────────────────┘
└─────────────┘
```

### 3.3 Search Flow

```
┌──────────────┐
│ User Types   │
│ in Search    │
└──────┬───────┘
       │
       ▼
┌──────────────────┐
│ Debounce Input   │  (300ms delay)
└──────┬───────────┘
       │
       ▼
┌──────────────────┐         ┌──────────────────┐
│ Search Engine    │<────────┤ Prebuilt Index   │
│ (Lunr.js)        │  Load   │ (JSON file)      │
└──────┬───────────┘         └──────────────────┘
       │
       ▼
┌──────────────────┐
│ Rank & Filter    │
│ Results          │
└──────┬───────────┘
       │
       ▼
┌──────────────────┐
│ Display Results  │
│ • Highlighted    │
│ • Categorized    │
│ • Ranked         │
└──────────────────┘
```

---

## 4. AI Agent Architecture

### 4.1 RAG (Retrieval Augmented Generation) System

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                    CONTENT PREPARATION PHASE                    ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

┌────────────────┐      ┌────────────────┐      ┌────────────────┐
│  Markdown      │      │   HTML         │      │   JSON         │
│  Content       │      │   Pages        │      │   Metadata     │
└───────┬────────┘      └───────┬────────┘      └───────┬────────┘
        │                       │                       │
        └───────────────────────┴───────────────────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │   Content Chunker     │
                    │   • Split by section  │
                    │   • 500 token chunks  │
                    │   • Overlap: 50 tokens│
                    └───────────┬───────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │   Embedding Model     │
                    │   (OpenAI ada-002 or  │
                    │    sentence-transformers)│
                    └───────────┬───────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │   Vector Database     │
                    │   (ChromaDB / FAISS)  │
                    │   • Store embeddings  │
                    │   • Index metadata    │
                    └───────────────────────┘

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                      QUERY PROCESSING PHASE                     ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

┌────────────────┐
│  User Query    │
│  "How do I set │
│   up CSME?"    │
└───────┬────────┘
        │
        ▼
┌────────────────────┐
│  Query Embedding   │
└────────┬───────────┘
         │
         ▼
┌────────────────────┐       ┌────────────────────┐
│  Similarity Search │──────>│  Top K Chunks      │
│  (Cosine Distance) │       │  (K=5 default)     │
└────────────────────┘       └────────┬───────────┘
                                      │
                                      ▼
                          ┌───────────────────────┐
                          │  Context Assembly     │
                          │  • Rerank by relevance│
                          │  • Add metadata       │
                          │  • Format for prompt  │
                          └───────────┬───────────┘
                                      │
                                      ▼
┌──────────────────────────────────────────────────────────────┐
│                    Prompt Template                            │
├──────────────────────────────────────────────────────────────┤
│ System: You are a helpful assistant for team onboarding.     │
│                                                               │
│ Context: {retrieved_chunks}                                  │
│                                                               │
│ User Question: {user_query}                                  │
│                                                               │
│ Instructions: Answer based on context. If unsure, say so.    │
└───────────────────────────┬──────────────────────────────────┘
                            │
                            ▼
                   ┌────────────────────┐
                   │   LLM API Call     │
                   │   (GPT-4 / Claude) │
                   └────────┬───────────┘
                            │
                            ▼
                   ┌────────────────────┐
                   │  Stream Response   │
                   │  to Frontend       │
                   └────────────────────┘
```

### 4.2 Backend API Structure

```
┌─────────────────────────────────────────────────────────────┐
│                    FastAPI Application                       │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │           API Endpoints                            │    │
│  ├────────────────────────────────────────────────────┤    │
│  │  POST   /api/chat           - Send chat message    │    │
│  │  GET    /api/chat/history   - Get chat history     │    │
│  │  POST   /api/search         - Semantic search      │    │
│  │  GET    /api/health         - Health check         │    │
│  │  WebSocket /ws/chat         - Real-time chat       │    │
│  └────────────────────────────────────────────────────┘    │
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │           Core Modules                             │    │
│  ├────────────────────────────────────────────────────┤    │
│  │  • rag_engine.py      - RAG implementation         │    │
│  │  • embeddings.py      - Vector operations          │    │
│  │  • content_indexer.py - Content processing         │    │
│  │  • llm_client.py      - LLM API wrapper            │    │
│  │  • cache.py           - Response caching           │    │
│  └────────────────────────────────────────────────────┘    │
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │           Data Layer                               │    │
│  ├────────────────────────────────────────────────────┤    │
│  │  • VectorDB (ChromaDB)                             │    │
│  │  • Session Storage (Redis - optional)              │    │
│  │  • Config Management                               │    │
│  └────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

---

## 5. Deployment Architecture

### 5.1 Development Environment

```
┌──────────────────────────────────────────────────────────┐
│              Developer Workstation                        │
├──────────────────────────────────────────────────────────┤
│                                                           │
│  ┌──────────────┐         ┌──────────────┐              │
│  │   Frontend   │  :3000  │   Backend    │  :8000       │
│  │   (npm run   │<───────>│   (uvicorn)  │              │
│  │    dev)      │         │              │              │
│  └──────────────┘         └──────┬───────┘              │
│                                  │                       │
│                           ┌──────▼────────┐             │
│                           │   ChromaDB    │  :8001      │
│                           │   (local)     │             │
│                           └───────────────┘             │
└──────────────────────────────────────────────────────────┘
```

### 5.2 Production Environment

```
┌─────────────────────────────────────────────────────────────┐
│                      Load Balancer                          │
│                    (Nginx / Apache)                         │
└────────────┬────────────────────────────┬───────────────────┘
             │                            │
    ┌────────▼────────┐          ┌────────▼────────┐
    │   Frontend      │          │   AI Backend    │
    │   Static Files  │          │   API Server    │
    │   (CDN)         │          │   (Docker)      │
    └─────────────────┘          └────────┬────────┘
                                          │
                              ┌───────────┴────────────┐
                              │                        │
                       ┌──────▼──────┐        ┌───────▼────────┐
                       │  Vector DB  │        │   LLM API      │
                       │  (Managed)  │        │   (External)   │
                       └─────────────┘        └────────────────┘
```

### 5.3 Hosting Options

#### Option A: Internal Server
```
Pros:
  ✓ Full control over data
  ✓ No external dependencies
  ✓ Lower ongoing costs

Cons:
  ✗ Requires infrastructure management
  ✗ Need to handle scaling
  ✗ Security responsibility

Tech Stack:
  • Web Server: Nginx
  • Frontend: Static files
  • Backend: Docker container
  • Database: Self-hosted ChromaDB
```

#### Option B: Cloud Hybrid
```
Pros:
  ✓ Easy scaling
  ✓ Managed services
  ✓ High availability

Cons:
  ✗ Monthly costs
  ✗ Vendor lock-in potential
  ✗ Data sovereignty concerns

Tech Stack:
  • Frontend: GitHub Pages / Netlify
  • Backend: AWS Lambda / Azure Functions
  • Database: Pinecone / Weaviate (managed)
  • LLM: OpenAI API / Azure OpenAI
```

---

## 6. Security Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Security Layers                          │
└─────────────────────────────────────────────────────────────┘

Layer 1: Network Security
├─ HTTPS/TLS encryption
├─ CORS policy enforcement
├─ Rate limiting (per IP)
└─ DDoS protection

Layer 2: Authentication & Authorization
├─ SSO integration (optional)
├─ JWT tokens for API
├─ Session management
└─ Role-based access (if needed)

Layer 3: Application Security
├─ Input sanitization
├─ XSS protection
├─ CSRF tokens
├─ SQL injection prevention (if using DB)
└─ Content Security Policy (CSP)

Layer 4: API Security
├─ API key management
├─ Request signing
├─ Response encryption
└─ Audit logging

Layer 5: Data Security
├─ Sensitive data masking
├─ Encryption at rest
├─ Secure secrets management
└─ Regular backups
```

---

## 7. Monitoring & Observability

```
┌──────────────────────────────────────────────────────────┐
│                  Monitoring Stack                         │
├──────────────────────────────────────────────────────────┤
│                                                           │
│  Application Metrics                                      │
│  ├─ Page load times                                      │
│  ├─ API response times                                   │
│  ├─ Error rates                                          │
│  └─ User engagement                                      │
│                                                           │
│  AI Agent Metrics                                        │
│  ├─ Query latency                                        │
│  ├─ Token usage                                          │
│  ├─ Response quality (feedback)                          │
│  └─ Cache hit rates                                      │
│                                                           │
│  Infrastructure Metrics                                   │
│  ├─ Server CPU/Memory                                    │
│  ├─ Network bandwidth                                    │
│  ├─ Storage usage                                        │
│  └─ Database performance                                 │
│                                                           │
│  User Analytics                                          │
│  ├─ Page views                                           │
│  ├─ Search queries                                       │
│  ├─ Most visited sections                               │
│  └─ User paths                                           │
└──────────────────────────────────────────────────────────┘
```

---

## 8. Content Update Pipeline

```
┌──────────────┐
│  Content     │
│  Author      │
└──────┬───────┘
       │ 1. Create/Edit Markdown
       ▼
┌──────────────────┐
│  Git Repository  │
│  (Content Repo)  │
└──────┬───────────┘
       │ 2. Commit & Push
       ▼
┌──────────────────┐
│  CI/CD Pipeline  │
│  (GitHub Actions)│
└──────┬───────────┘
       │
       ├─ 3a. Validate Markdown
       ├─ 3b. Build Search Index
       └─ 3c. Update Vector DB
       │
       ▼
┌──────────────────┐
│  Deploy to Prod  │
└──────┬───────────┘
       │ 4. Publish
       ▼
┌──────────────────┐
│  Live Portal     │
│  (Updated)       │
└──────────────────┘
       │
       ▼
┌──────────────────┐
│  Notify Team     │
│  (Slack/Email)   │
└──────────────────┘
```

---

## 9. Scalability Considerations

### Horizontal Scaling Strategy

```
Traffic: 1-100 users          Traffic: 100-1000 users       Traffic: 1000+ users
┌──────────────┐              ┌──────────────┐              ┌──────────────┐
│   Single     │              │ Load Balancer│              │ Load Balancer│
│   Server     │              └──────┬───────┘              └──────┬───────┘
│              │                     │                             │
│ • Frontend   │              ┌──────▼───────┐              ┌──────▼──────┐
│ • Backend    │              │   Server 1   │              │   CDN       │
│ • VectorDB   │              │ • Frontend   │              │  (Static)   │
└──────────────┘              │ • Backend    │              └─────────────┘
                              └──────────────┘                     │
                              ┌──────────────┐              ┌──────▼──────┐
                              │   Server 2   │              │  App Cluster│
                              │ • Backend    │              │  (3+ nodes) │
                              │ • VectorDB   │              └──────┬──────┘
                              └──────────────┘                     │
                                                            ┌──────▼──────┐
                                                            │  Vector DB  │
                                                            │  (Cluster)  │
                                                            └─────────────┘
```

---

## 10. Technology Stack Summary

```
┌─────────────────────────────────────────────────────────────┐
│                    Technology Stack                         │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Frontend                                                    │
│  ├─ HTML5, CSS3 (Grid, Flexbox, Variables)                 │
│  ├─ JavaScript (ES6+ Modules)                               │
│  ├─ Alpine.js (optional, for reactivity)                    │
│  └─ Lunr.js / Fuse.js (client-side search)                 │
│                                                              │
│  Backend                                                     │
│  ├─ Python 3.10+                                            │
│  ├─ FastAPI (REST API + WebSocket)                          │
│  ├─ Uvicorn (ASGI server)                                   │
│  └─ Pydantic (data validation)                              │
│                                                              │
│  AI/ML                                                       │
│  ├─ LangChain (RAG framework)                               │
│  ├─ OpenAI API / Claude API                                 │
│  ├─ sentence-transformers (embeddings)                      │
│  └─ ChromaDB / FAISS (vector store)                         │
│                                                              │
│  Infrastructure                                              │
│  ├─ Nginx (web server)                                      │
│  ├─ Docker (containerization)                               │
│  ├─ GitHub Actions (CI/CD)                                  │
│  └─ Redis (caching - optional)                              │
│                                                              │
│  Development Tools                                           │
│  ├─ Git (version control)                                   │
│  ├─ VS Code (IDE)                                           │
│  ├─ ESLint / Prettier (code formatting)                     │
│  └─ pytest (Python testing)                                 │
└─────────────────────────────────────────────────────────────┘
```

---

**Document Version**: 1.0  
**Last Updated**: November 19, 2025  
**Owner**: Architecture Team  
**Status**: ✅ Ready for Implementation
