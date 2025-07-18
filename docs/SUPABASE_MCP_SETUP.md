# Supabase MCP Server Setup

This guide explains how to set up the Supabase Model Context Protocol (MCP) server for Claude Code integration.

## Prerequisites

1. A Supabase account and project
2. Claude Code installed
3. Node.js and npm installed

## Setup Instructions

### 1. Generate Personal Access Token

1. Go to [Supabase Dashboard](https://supabase.com/dashboard/account/tokens)
2. Click "Generate New Token"
3. Give it a descriptive name (e.g., "claude-code-mcp")
4. Copy the token immediately (it won't be shown again)

### 2. Configure MCP Server

The `.mcp.json` file has been created with the following structure:

```json
{
  "mcpServers": {
    "supabase": {
      "command": "npx",
      "args": [
        "-y",
        "@supabase/mcp-server-supabase@latest",
        "--read-only",
        "--project-ref=ttglcxuznhhcdnuyxhqd"
      ],
      "env": {
        "SUPABASE_ACCESS_TOKEN": "REPLACE_WITH_YOUR_PERSONAL_ACCESS_TOKEN"
      }
    }
  }
}
```

### 3. Update the Configuration

1. Open `.mcp.json` in your editor
2. Replace `REPLACE_WITH_YOUR_PERSONAL_ACCESS_TOKEN` with your actual token
3. Save the file

**Important**: The `.mcp.json` file is already in `.gitignore` to prevent accidental commits of sensitive data.

### 4. Restart Claude Code

After updating the configuration, restart Claude Code for the changes to take effect.

## Security Notes

- **Never commit** your personal access token to version control
- The MCP server is configured in **read-only mode** by default for safety
- Always review database operations before executing them
- Keep your access token secure and rotate it regularly

## Available Features

With the Supabase MCP server, Claude Code can:

- Execute safe SQL queries
- Access project configuration
- Manage database tables
- View logs and analytics
- Handle authentication tasks
- Generate migrations

## Troubleshooting

If the MCP server doesn't appear in Claude Code:

1. Verify your token is valid
2. Check the project reference ID is correct
3. Ensure `.mcp.json` is in the project root
4. Restart Claude Code completely
5. Check Claude Code logs for any error messages

## Alternative Setup (Local Scope)

You can also add the MCP server using the CLI:

```bash
claude mcp add supabase -s local -e SUPABASE_ACCESS_TOKEN=your_token_here -- npx -y @supabase/mcp-server-supabase@latest --read-only --project-ref=ttglcxuznhhcdnuyxhqd
```

This creates a local configuration that only applies to your current project.