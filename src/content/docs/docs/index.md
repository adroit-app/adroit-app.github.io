---
title: Introduction
description: What Adroit is, who it is for, and what it does not do.
---

Adroit is an Agent Workspace for people who live in Vim: one window to drive
any coding agent, in its own terminal interface, by hand and the way you edit.

:::note
Adroit is early. It runs, but expect rough edges and changes.
:::

## Who it is for

People who live in Vim and work with several coding agent sessions at the same
time, often across repositories and often with more than one agent, and who
want that work to feel like editing rather than like operating a dashboard.

## How it works

- **A session is a conversation with an agent.** Claude Code, Codex, Pi and
  OpenCode sessions stand side by side, each in the terminal interface its
  agent ships, unchanged. See [Agents and profiles](/docs/agents/).
- **You start one by choosing where.** Pick a directory and write the first
  prompt; the session is named from it. Nothing has to be set up or declared
  first. See [Getting started](/docs/getting-started/).
- **The tree follows git.** Sessions are listed under the repository and
  worktree they run in, with that worktree's files and shells beside them.
  The sessions waiting on you are listed again at the bottom, across every
  repository. See [The window](/docs/window/).
- **You write in Neovim.** The prompt under each session is a real Neovim,
  configured for Adroit with the mappings and plugins you choose. See
  [The prompt](/docs/prompt/).
- **You move with Vim's grammar.** Window motions move between the tree, the
  windows, the prompt and the details; the tree is browsed like a file
  explorer. See [Keys](/docs/keys/).
- **Sessions outlive the window.** Every session and shell runs in a host of
  its own. Closing Adroit leaves them running; opening it again finds them as
  they were, and any number of windows can show the same work.
- **Sessions can open sessions.** A session can open another for a separate
  line of work and talk with the others as a peer. Each one still answers to
  you. See [Sessions that open sessions](/docs/opening-sessions/).
- **The work can run elsewhere.** Pair with a work machine and its sessions
  appear in the same tree. See
  [Environments and work machines](/docs/environments/).

## What it does not do

- Rebuild an agent's interface or replace it with a chat view.
- Orchestrate. No session runs others as its workers, and Adroit keeps no
  plan, task or verdict of its own.
- Edit. Files, logs and diffs are there to be read; real editing happens in
  your usual editor, which Adroit can open beside your sessions.

## Requirements

- macOS for the window. The hosts and the session commands also build
  without the window, for a Linux or macOS work machine.
- git, and at least one of Claude Code, Codex CLI, Pi or OpenCode on your
  `PATH`.
- Optionally jj, to read jj repositories and make jj workspaces, and ghq,
  whose repositories the directory picker then offers.

## Next

1. [Install](/docs/install/) Adroit.
2. [Start your first session](/docs/getting-started/).
3. Learn [the window](/docs/window/) and [the keys](/docs/keys/).
