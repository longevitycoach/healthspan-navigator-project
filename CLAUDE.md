# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Healthspan Navigator is a React-based web application for health and longevity coaching, built with TypeScript and deployed via Lovable.dev. It uses Supabase for backend services and features an AI-powered chat interface.

## Claude Code with SuperClaude

This project is optimized for Claude Code with SuperClaude integration, providing advanced AI-powered development capabilities.

### Default IDE: VS Code

**Recommended Setup:**
- Install VS Code as the primary development environment
- Add the Claude Code extension for seamless AI integration
- Configure SuperClaude for enhanced coding assistance

### AI-Powered Features

- **Code Completion**: Intelligent autocompletion based on project context
- **Debugging Assistance**: AI-powered error detection and resolution suggestions
- **Code Review**: Automated code quality checks and improvement recommendations
- **Refactoring**: Smart code restructuring and optimization
- **Documentation**: Automatic generation of code documentation and comments

### SuperClaude Capabilities

- **Context-Aware Development**: Understanding of the full project structure and dependencies
- **TypeScript Integration**: Enhanced support for TypeScript development patterns
- **React Best Practices**: Guidance on React hooks, components, and state management
- **Supabase Integration**: Intelligent handling of database queries and edge functions

## Essential Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev          # Starts on http://localhost:8080

# Type checking
npm run typecheck    # Run TypeScript compiler checks

# Build for production
npm run build        # Creates dist/ directory

# Preview production build
npm run preview      # Serves the built app
```

## Architecture Overview

### Frontend Stack
- **React 18.3** with TypeScript - All components use functional components with hooks
- **Vite** - Build tool with SWC for fast compilation
- **shadcn-ui** - Component library in `src/components/ui/` (50+ pre-built components)
- **Tailwind CSS** - Utility-first styling with custom theme in `tailwind.config.ts`
- **React Router v6** - Client-side routing with lazy-loaded pages
- **React Query** - Server state management for Supabase data fetching

### Backend Services
- **Supabase** - PostgreSQL database, authentication, and edge functions
- **Edge Functions** - Located in `supabase/functions/`, written in TypeScript for Deno
  - `send-contact-email` - Handles contact form submissions
  - `strunz-chat` - AI chat with MCP (Model Context Protocol) integration

### Key Architectural Patterns

1. **Page Components**: All pages in `src/pages/` are lazy-loaded via `LazyWrapper`
2. **Component Organization**: 
   - UI components from shadcn-ui in `src/components/ui/`
   - Feature components directly in `src/components/`
3. **Type Safety**: Supabase types are auto-generated in `src/integrations/supabase/types.ts`
4. **Form Handling**: Use React Hook Form with Zod validation (see ContactSection.tsx for example)
5. **Data Fetching**: Use React Query hooks from `src/integrations/supabase/hooks/`

### Development Guidelines

1. **Adding New Pages**: 
   - Create component in `src/pages/`
   - Add route in `App.tsx` with lazy loading
   - Update navigation in `Navigation.tsx`

2. **Working with Supabase**:
   - Client is initialized in `src/integrations/supabase/client.ts`
   - Use generated hooks for queries/mutations
   - Edge functions require Deno runtime knowledge

3. **UI Components**:
   - Check `src/components/ui/` first - most common components exist
   - Follow existing patterns for consistency
   - Components use CSS variables for theming

4. **Performance Considerations**:
   - All pages must be lazy-loaded
   - Use React Query for data fetching to leverage caching
   - Images should be optimized and use appropriate formats

### Important Files

- `src/App.tsx` - Main routing configuration
- `src/components/Navigation.tsx` - Primary navigation structure
- `src/integrations/supabase/client.ts` - Supabase client configuration
- `supabase/functions/strunz-chat/index.ts` - AI chat implementation with MCP
- `tailwind.config.ts` - Theme configuration and custom styles

### Deployment Notes

This project is deployed through Lovable.dev, which handles:
- Environment variables
- Build and deployment pipeline
- SSL certificates and domains
- Automatic deployments on git push

When developing locally, you'll need to set up your own Supabase project and configure the environment variables accordingly.