---
title: Agents and profiles
description: The agents Adroit runs, the profiles that start them, their logins, and how each agent behaves in Adroit.
---

Adroit runs Claude Code, Codex CLI, Pi and OpenCode, each in the terminal
interface it ships and with the program and login you already have for it. No
agent comes first: every one is run the same way, side by side, and any of
them can work in the same repository.

## Profiles

A session starts from a **profile**, which names its agent, where the agent
keeps its login, how it is launched and the agent's own options. Profiles are
kept in **Settings › Agents**. You can keep several for one agent, such as a
work and a personal Claude Code, and choose which one new sessions start from.

On a draft, choose the profile, and with it the agent; <kbd>Ctrl+g p</kbd> and
<kbd>Ctrl+g P</kbd> move through them. The draft also offers a model and
permissions for that launch. A running session keeps the profile and login it
started with, whatever the settings say since.

Without any profile set up, Adroit offers one for each agent, which runs it
as it runs in your terminal, with Claude Code as the default.

### Logins

A profile runs either in its agent's own environment, sharing the login and
history your terminal uses, or with a **login of its own**: a folder where the
agent keeps a separate login, history and settings. Log in from the profile's
page in Settings, which runs the agent's own login in a terminal. Adroit keeps
no credentials itself.

### In settings.toml

Settings are kept in `~/.config/adroit/settings.toml`, which the Settings
window writes. Profiles look like this:

```toml
profile = "claude-work"

[[profiles]]
id = "claude"
name = "Claude Personal"
agent = "claude"

[[profiles]]
id = "claude-work"
name = "Claude Work"
agent = "claude"
home = "/Users/me/.local/share/adroit/profiles/claude-work"

[profiles.claude]
model = "opus"

[[profiles]]
id = "codex-review"
name = "Codex Review"
agent = "codex"

[profiles.codex]
sandbox_mode = "read-only"
```

`profile` names the default. `home` gives a profile a login of its own. The
[settings reference](https://github.com/adroit-app/Adroit/blob/main/docs/spec/reference/settings.md)
lists every setting.

## Read-only and custom permissions

A draft can start its session read-only, or with permissions of your own.
What that keeps a session to depends on its agent:

- **Claude Code** loses its file-editing tools and runs its shell commands in
  Claude Code's sandbox, which keeps them from writing.
- **Codex** uses its read-only sandbox.
- **Pi** asks before no tool call and has no sandbox, so a read-only session
  is given only the tools that read files.
- **OpenCode** runs as its plan agent, with only the tools that read.

## How each agent behaves

**Claude Code** gets the most: Adroit can take its suggested prompt into the
prompt with <kbd>Tab</kbd>, a `!` line runs in its bash mode, and the details
list the subagents it sets to work.

**Codex** reports its working and waiting states, including permission and
question prompts, through the terminal. Its menus and approvals take keys
directly while they are open; <kbd>Ctrl+g i</kbd> passes every key to it for
its own commands.

**Pi** recalls the prompts sent in the session's directory, as Pi keeps
them, and renaming a session in Adroit renames it in Pi with `/name`. A Pi
profile can name a model of a server of your own, such as `ollama/qwen3:8b`.

**OpenCode** needs version 2.1 or later of `@opencode/cli`. Each session runs
with a server of its own. It can use a local model too.

Every agent's sessions list the links and files their conversation brought up
in the details' **Resources** sheet, and every one can
[open sessions](/docs/opening-sessions/) and talk with the others.
