---
title: Concept
description: What Adroit is for, who it is for, and the principles every design decision rests on.
---

Adroit is an Agent Workspace for people who live in Vim: one place to drive
any coding agent, in its own terminal interface, by hand and the way you
edit.

Its unit is a **session**: a conversation with an agent such as Claude Code
or Codex. Sessions of different agents stand side by side, each in the
interface its agent ships and run as its agent runs it. You read each one
there, you write to it in Neovim, and you move around the whole window the
way you move around Vim.

You start a session by choosing the directory it works in and talking. What
the work turns out to be shows as you go; nothing has to be named or declared
before the first word.

## Where its value lies

What Adroit is chosen for is the hand on the work:

- **Any agent, as it is.** Each agent's own terminal interface, unchanged,
  beside any other agent's, so you pick the agent for the work rather than
  the tool for the agent.
- **Writing in Neovim.** A prompt is written in a real Neovim, with Vim's
  motions, operators and registers and with the mappings and plugins you
  configure it with, not in an input line that imitates a few of them.
- **Moving in Vim's grammar.** Panes, the tree of sessions and what is
  selected are reached with motions and acted on with commands, as text is
  in Vim.

What Adroit must do as well as any place for agent sessions, without being
what it is chosen for, is the ground under that hand: the sessions waiting
on you shown first, sessions that keep running when the window closes, and
the changes and history of each session at hand to read.

The work goes at the pace of your attention and your review. Adroit puts
every session in front of you and makes moving between them cheap; it does
not multiply what runs past you unread.

## Principles

- **The agent interface stays as it is.** Adroit never rebuilds an agent's
  screen from structured output, and an agent behaves in Adroit as it does in
  a terminal.
- **No agent comes first.** Every agent Adroit supports is run the same way,
  side by side, with the program and the login you already have for it.
- **Writing is Neovim.** Prompts are written in an embedded Neovim you
  configure, specialised for input rather than replaced.
- **Moving is Vim.** Window motions between panes, a tree browsed like a file
  explorer, actions on what is selected. Nothing requires the mouse.
- **Every session talks to you.** None reports to another or waits on
  another's result, and nothing stands between you and any of them.
- **The session comes first.** Starting asks only where. Structure is never
  asked for up front.
- **Sessions outlive the window.** Sessions run in a terminal host and the
  work is held by a work host, both apart from the window, so closing Adroit
  leaves them running and any number of windows can show them.
- **Adroit keeps few records of its own.** Which sessions exist and how they
  stand come from the hosts that run them and what their programs report;
  repositories and worktrees come from git. Adroit keeps only which session
  opened which and what they told each other.
- **Borrow before building.** Terminals and their persistence come from
  felis; conversations and the agents inside them come from Claude Code,
  Codex, Pi and OpenCode. Adroit adds the place, the hands-on feel, and the
  means for sessions to reach one another.

## What it does not do

- It does not rebuild an agent's interface or replace it with a chat view.
- It does not orchestrate, and it is no frame for one session to run others
  as its workers. Each session plans and does its own work; Adroit keeps no
  plan, task or verdict, shows where the work stands and gives you the
  controls.
- It is not an editor or an IDE. Files, logs and diffs are there to be read;
  real editing happens in your usual editor.
