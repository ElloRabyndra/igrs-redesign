# AGENTS.md

## Developer Profile

You are working with a developer who is a university student (final year) and active freelancer. The primary domain is **web development**, but projects may span other domains depending on the task at hand.

### Common Project Domains

| Domain | Frequency | Typical Stack |
|--------|-----------|---------------|
| Frontend Web | High | React, Next.js |
| Full-Stack Web | High | React/Next.js + Node.js/Express or Go, Supabase, PostgreSQL, MySQL |
| Machine Learning / Deep Learning | Moderate | Python, Jupyter Notebook, TensorFlow, PyTorch |
| Mobile App Development | Occasional | Varies per project |
| Data Engineering | Occasional | Varies per project |

The developer does not have a single fixed stack. Framework and tool choices are made per project based on requirements. Always ask or infer from the existing codebase before assuming a specific stack.

### Operating Environment

- OS: Windows
- Shell: PowerShell
- Primary editor context: Visual Studio Code, Antigravity, Gemini, Github Copilot 

### Available MCP Tools

The following MCP (Model Context Protocol) tools are installed and available across all editor environments. Use them proactively when they can improve output quality.

#### Context7

An MCP server that provides **up-to-date library documentation** on demand. Use it to look up current API surfaces, verify function signatures, and confirm usage patterns before writing code that depends on a specific library.

**Tools:**
- `resolve-library-id` - Resolves a library name (e.g., "next", "zustand", "supabase-js") into a Context7-compatible library ID. Always call this first.
- `query-docs` - Fetches documentation for a resolved library ID. Supports a `topic` parameter to narrow the query (e.g., "app router caching", "middleware").

**When to use:**
- Before implementing code that uses a library you are not fully confident about, especially for libraries that update frequently (Next.js, React, Tailwind, Supabase, etc.).
- When the user asks about a specific API or pattern and you want to verify against the latest docs rather than relying on training data.
- When debugging issues that might stem from API changes between library versions.

**When NOT to use:**
- For general programming concepts or language features that do not depend on a specific library.
- When the answer is already clear from the project's existing code or established patterns.

**Usage pattern:**
1. Call `resolve-library-id` with the library name to get the ID.
2. Call `query-docs` with the resolved ID and an optional topic to get relevant documentation.
3. Use the returned documentation to inform your implementation.

## General Directives

### How to Behave

1. **Read before writing.** Before generating or modifying code, scan the existing codebase to understand current patterns, naming conventions, folder structure, and dependencies. Match them.
2. **Respect existing decisions.** If the project already uses a specific library, pattern, or convention, continue using it unless explicitly asked to change.
3. **Be direct.** Give concise, actionable answers. Avoid unnecessary preamble, filler sentences, or restating the question back.
4. **Ask when ambiguous, assume when reasonable.** For blocking ambiguities (e.g., which database to use in a new project), ask. For non-blocking unknowns, make a reasonable assumption and state it briefly.
5. **Preserve what exists.** Do not remove, rewrite, or restructure code, comments, or documentation that is unrelated to the current task.
6. **Explain non-obvious decisions.** When you make a choice that is not immediately obvious (e.g., choosing one library over another), briefly explain why.

### How NOT to Behave

1. **Do not generate placeholder or stub code** and call it done. If you write a function, it should be functional.
2. **Do not over-engineer.** Match the complexity of the solution to the complexity of the problem. A simple script does not need enterprise architecture.
3. **Do not repeat yourself.** If something is already explained in an existing skill file, reference the skill instead of restating its content.
4. **Do not assume a single stack.** This developer works across multiple tech stacks and domains. Always check what the current project uses.

## Output Formatting Rules

These rules apply to ALL generated text output: code comments, documentation, commit messages, README files, reports, notebook markdown cells, and conversational responses.

| Rule | Rationale |
|------|-----------|
| No emoji characters | Looks unprofessional and obviously AI-generated |
| No em dashes (the long dash character) | Use regular hyphens, commas, or restructure the sentence instead |
| No decorative text separators like `====`, `----`, or `****` in prose | These are visual noise; use markdown headings or whitespace for structure instead |
| No filler phrases | Avoid "Certainly!", "Great question!", "Sure, I'd be happy to help!" and similar |
| No excessive bolding or formatting | Bold only key terms, not entire sentences |

> Note: Standard markdown horizontal rules (`---`) used as section dividers in structured documents like README or SKILL files are acceptable. The restriction targets decorative or excessive use of separator characters in prose and general output.

## Boundaries and Restrictions

### Security (Non-Negotiable)

- **Environment variables:** All secrets, API keys, tokens, and credentials must be stored in environment variables. Never hardcode them.
- **`.gitignore`:** Every project must have a `.gitignore` that includes at minimum: `.env`, `.env.local`, `.env.*`, `node_modules/`, `.agents/skills/`, build output directories, and OS-generated files (e.g., `Thumbs.db`, `.DS_Store`).
- **No secrets in logs:** Never log, print, or expose secrets, tokens, or credentials in console output, error messages, or documentation.
- **Dependency awareness:** Do not install packages without clear justification. Prefer well-maintained packages with active communities. Run `npm audit` or equivalent after installation.

### Code Quality

- **Do not leave dead code.** Remove unused imports, variables, functions, and commented-out blocks unless they serve as intentional documentation.
- **Do not ignore errors silently.** Every `catch` block must either handle the error meaningfully or re-throw it. Empty catch blocks are not acceptable.
- **Type safety matters.** In TypeScript projects, avoid `any` unless there is a justified and documented reason. In Python, use type hints where practical.
- **Consistent naming.** Follow the naming convention already present in the project. If starting fresh, use `camelCase` for JS/TS variables and functions, `PascalCase` for components and classes, `snake_case` for Python.

### File and Project Hygiene

- **Do not modify configuration files** (tsconfig, eslint, package.json scripts, etc.) without stating what changed and why.
- **Do not add new dependencies** without first checking if the functionality can be achieved with what is already installed.
- **Respect the existing folder structure.** Do not reorganize or rename directories unless that is the explicit task.

## Architecture Principles

These are general principles that apply across project types. For domain-specific architecture guidance, refer to the relevant skills (e.g., `nodejs-best-practices` for backend layering, `nextjs-best-practices` for Next.js patterns).

### Separation of Concerns

Every module, file, or function should have a single, clear responsibility. Avoid files that mix data access, business logic, and presentation.

```
General layered thinking (adapt per project type):

  Presentation / Interface Layer
    Handles user interaction or API surface
    Validates input at the boundary
    Delegates to the logic layer

  Logic / Service Layer
    Contains business rules and processing
    Framework-agnostic when possible
    Testable in isolation

  Data / Access Layer
    Manages persistence and external data sources
    Abstracts database or API specifics
    Returns clean data to the logic layer
```

### When to Apply Structure

| Project Scale | Approach |
|---------------|----------|
| Script or quick prototype | Single file or flat structure is fine |
| Small project (1-3 features) | Basic folder separation by concern |
| Medium project (multiple features) | Full layered architecture with clear boundaries |
| Large project or team project | Layered architecture with modules, interfaces, and dependency injection |

### Universal Principles

- **Fail fast.** Validate inputs early. Return or throw errors as soon as invalid state is detected.
- **Explicit over implicit.** Prefer clear, readable code over clever shortcuts. Configuration should be visible, not hidden in defaults.
- **Stateless when possible.** Especially in web backends: avoid storing state in memory between requests unless intentionally designing for it (e.g., WebSocket connections).
- **Composability.** Prefer small, composable functions and components over large monolithic ones.

## Skills Catalog

This project includes a curated set of skill files located in `.agents/skills/`. These provide domain-specific guidance that supplements the general directives in this document. Refer to the appropriate skill based on the task at hand.

For a detailed explanation of each skill and when to activate them, see [`Guide.md`](Guide.md) in the project root.

### Quick Reference

| Category | Skill | Purpose |
|----------|-------|---------|
| **Workflow** | `concise-planning` | Structured planning before large/complex tasks |
| **Workflow** | `lint-and-validate` | Mandatory validation after every code change (always active) |
| **Language** | `typescript-pro` | Advanced TypeScript patterns and strict type safety |
| **Language** | `golang-pro` | Go 1.21+ patterns, concurrency, and production deployment |
| **Frontend** | `frontend-design` | Visual design direction and premium aesthetics |
| **Frontend** | `frontend-developer` | React 19, Next.js 15, and modern frontend architecture |
| **Frontend** | `react-best-practices` | 45 performance optimization rules from Vercel |
| **Frontend** | `react-state-management` | State management selection and implementation |
| **Frontend** | `tanstack-query-expert` | TanStack Query (React Query) deep-dive |
| **Frontend** | `tailwind-patterns` | Tailwind CSS v4 patterns and configuration |
| **Backend** | `nodejs-best-practices` | Node.js architecture, framework selection, and decision-making |
| **Backend** | `api-patterns` | API design: REST vs GraphQL vs tRPC, response formats, versioning |
| **Framework** | `nextjs-best-practices` | Next.js App Router patterns and conventions |
| **Framework** | `nextjs-supabase-auth` | Supabase Auth integration with Next.js |
| **Security** | `frontend-security-coder` | XSS prevention, CSP, and client-side security |
| **Security** | `auth-implementation-patterns` | Authentication/authorization system design |

### Skill Activation Guidelines

- **`lint-and-validate`** is always active regardless of project type.
- For **web development** tasks, start with `frontend-developer` and/or `nodejs-best-practices` as the base, then layer on specific skills as needed.
- For **ML/DL** tasks, none of the current skills directly apply. Rely on the general directives and output formatting rules in this document.
- **Do not load skills that are irrelevant** to the current task. Loading too many skills adds noise and can cause conflicting guidance.
- When in doubt about which skill to activate, consult `Guide.md` for the phase-based activation guide.

## Project-Specific Context

For project-specific information (tech stack decisions, feature scope, architecture details, conventions unique to the project), use/create a **`PROJECT_COTEXT.md`** file in the project root.

This file is NOT part of the general agent setup. It should be created per project and contain information that prevents the need to re-explain project context in every prompt. Examples of what belongs there:

- What the project does and who it is for
- Chosen tech stack and why
- Folder structure explanation
- Key architectural decisions already made
- Active development focus or current phase
- Any project-specific conventions or constraints

`AGENTS.md` (this file) provides general, cross-project guidance. `PROJECT_CONTEXT.md` provides project-specific guidance. They complement each other.
