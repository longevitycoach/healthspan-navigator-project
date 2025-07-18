# Healthspan Navigator Project

A React-based web application for health and longevity coaching, featuring AI-powered chat assistance and comprehensive health resources.

## Project info

**Production URL**: https://longevitycoa.ch/

**Claude Code with SuperClaude**: This project supports advanced AI coding features powered by Claude Code and SuperClaude for seamless code interaction and enhancement.
**GitHub Repository**: https://github.com/longevitycoach/healthspan-navigator-project/  
**Lovable Project**: https://lovable.dev/projects/9392db23-626c-4971-be5d-f425b766b211

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/9392db23-626c-4971-be5d-f425b766b211) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use Claude Code with SuperClaude (Recommended)**

This project is optimized for Claude Code with SuperClaude integration, providing advanced AI-powered coding assistance.

### Quick Setup

1. **Install VS Code** (if not already installed)
   - Download from https://code.visualstudio.com/

2. **Install Claude Code Extension**
   - Open VS Code
   - Go to Extensions (Cmd+Shift+X on Mac, Ctrl+Shift+X on Windows/Linux)
   - Search for "Claude Code" and install

3. **Configure SuperClaude** (automatically available with Claude Code)
   - SuperClaude features are automatically activated when using Claude Code
   - No additional configuration needed - it works out of the box!

### SuperClaude Features

**Powerful Commands:**
- `/build` - Intelligent project building with framework detection
- `/implement` - Feature implementation with AI assistance
- `/analyze` - Deep code analysis and optimization suggestions
- `/improve` - Automated code quality improvements
- `/troubleshoot` - AI-powered debugging and issue resolution
- `/document` - Generate comprehensive documentation
- `/test` - Create and run tests with AI guidance

**Intelligent Personas:**
SuperClaude automatically activates specialized AI personas based on your task:
- Frontend development → UI/UX specialist persona
- Backend work → API and server specialist persona
- Bug fixing → Analyzer persona for root cause analysis
- Performance issues → Performance optimization persona

**MCP Server Integration:**
The project includes several MCP servers for enhanced capabilities:
- **Supabase MCP**: Direct database operations and edge function management
- **Browser-mcp**: Browser automation for testing
- **Context7**: Access to official library documentation
- **Sequential**: Complex problem-solving and analysis

### Working with SuperClaude

1. **Natural Language Development**
   ```
   "Create a new component for user profile management"
   "Fix the authentication issue in the login flow"
   "Optimize the performance of the dashboard"
   ```

2. **Use Commands for Specific Tasks**
   ```
   /analyze src/components/Dashboard.tsx
   /improve --performance
   /implement user notification system
   ```

3. **Leverage Automatic Features**
   - Task tracking: SuperClaude automatically creates and manages tasks
   - Quality validation: Code is validated through an 8-step quality gate
   - Context awareness: Full understanding of your project structure

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone https://github.com/longevitycoach/healthspan-navigator-project.git

# Step 2: Navigate to the project directory.
cd healthspan-navigator-project

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## SuperClaude Integration

This project is fully integrated with SuperClaude, an advanced AI framework that enhances Claude Code with powerful development capabilities.

### Key Benefits

- **Intelligent Code Generation**: Context-aware code creation that follows your project's patterns
- **Automated Testing**: Generate and run tests with AI guidance
- **Performance Optimization**: Automatic detection and resolution of performance bottlenecks
- **Security Analysis**: Built-in security scanning and vulnerability detection
- **Documentation Generation**: Create comprehensive docs with a single command

### Example Workflows

**Feature Development:**
```bash
# Implement a complete feature with AI assistance
/implement user dashboard with charts and real-time data

# The AI will:
# 1. Analyze your project structure
# 2. Create necessary components
# 3. Set up data fetching with React Query
# 4. Implement responsive design with Tailwind
# 5. Add proper TypeScript types
# 6. Create tests for the new feature
```

**Code Improvement:**
```bash
# Improve code quality across the project
/improve --focus performance --scope project

# The AI will:
# 1. Analyze all components for performance issues
# 2. Implement lazy loading where beneficial
# 3. Optimize React re-renders
# 4. Improve bundle size
# 5. Provide a detailed report of changes
```

**Debugging:**
```bash
# Troubleshoot complex issues
/troubleshoot authentication not working after deployment

# The AI will:
# 1. Analyze error logs and code
# 2. Check environment variables
# 3. Review Supabase configuration
# 4. Identify root cause
# 5. Provide fix with explanation
```

### Project-Specific Workflows

These workflows are tailored specifically for the Healthspan Navigator project, demonstrating how SuperClaude can help with business analysis, UI/UX improvements, and advanced AI integrations.

**Supabase MCP Integration Note:**
The project includes a Supabase MCP server that enables direct database operations, real-time subscriptions, and edge function management. This allows SuperClaude to:
- Create and modify database schemas
- Implement Row Level Security (RLS) policies
- Manage edge functions and API endpoints
- Set up real-time data synchronization
- Handle authentication and authorization

**1. Business Model Analytics:**
```bash
# Analyze the health coaching business model implementation
/analyze --focus business-model --think-hard

# The AI will:
# 1. Analyze user flow from landing to conversion
# 2. Review pricing components and value proposition
# 3. Examine user engagement features (AI chat, resources)
# 4. Identify conversion optimization opportunities
# 5. Analyze data collection and user insights
# 6. Provide actionable recommendations for growth
# 7. Generate a comprehensive business metrics dashboard concept
```

**2. Responsive Design Optimization:**
```bash
# Improve all components for different screen resolutions
/improve --focus responsive --scope project --persona-frontend

# The AI will systematically:
# 1. Audit all components for mobile (320-768px) compatibility
# 2. Optimize for tablet/iPad (768-1024px) layouts
# 3. Enhance desktop (1024px+) full-screen experience
# 4. Implement fluid typography and spacing
# 5. Add touch-friendly interactions for mobile
# 6. Optimize images and assets for each breakpoint
# 7. Test with Browser-mcp across all devices
# 8. Create a responsive design system documentation

# For specific component improvement:
/implement responsive improvements for Dashboard component --device all
```

**3. MCP Server Integration for AI Chat with Supabase Backend:**
```bash
# Integrate a new MCP server into the existing AI chat with full Supabase backend support
/implement MCP server integration for prototype AI chat --server [server-name] --with-supabase-backend

# Example: Adding a medical knowledge MCP server with data persistence
/implement integrate medical-knowledge-mcp into strunz-chat with supabase storage

# The AI will:
# 1. Analyze current strunz-chat edge function implementation
# 2. Review MCP protocol requirements and server capabilities
# 3. Create Supabase database schema:
#    - Chat sessions table (id, user_id, created_at, metadata)
#    - Messages table (id, session_id, role, content, mcp_server_used)
#    - MCP server logs table (id, server_name, request, response, timestamp)
# 4. Update supabase/functions/strunz-chat/index.ts with:
#    - MCP server connection logic with connection pooling
#    - Supabase client initialization and authentication
#    - Request/response handling with database persistence
#    - Error handling, retry logic, and fallbacks
#    - Rate limiting and usage tracking
# 5. Implement Supabase Row Level Security (RLS) policies:
#    - Users can only access their own chat sessions
#    - Proper authentication checks for all operations
# 6. Create real-time subscriptions for live chat updates
# 7. Modify the chat UI component to:
#    - Handle new MCP capabilities
#    - Show real-time updates via Supabase subscriptions
#    - Display server status and available features
# 8. Add TypeScript types for:
#    - MCP server interfaces
#    - Supabase database types
#    - API request/response schemas
# 9. Implement comprehensive security:
#    - API key management via Supabase secrets
#    - Request validation and sanitization
#    - CORS configuration for the edge function
# 10. Create integration tests and monitoring
# 11. Update documentation with architecture diagrams

# For custom MCP server with Supabase integration:
/build custom health-metrics-mcp with supabase backend --features "store metrics, query history, generate insights"

# Advanced: Multi-MCP server orchestration with Supabase
/implement multi-mcp-orchestration for strunz-chat --servers "medical-knowledge, health-metrics, nutrition-advisor" --with-supabase-routing
```

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Supabase (Backend & Database)
- Claude Code with SuperClaude (AI Development)
- Lovable

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/9392db23-626c-4971-be5d-f425b766b211) and click on Share -> Publish.

