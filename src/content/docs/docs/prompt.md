---
title: The prompt
description: Writing to a session in Neovim, what the prompt offers as you type, shell lines and images.
---

The prompt under the focused session's console is where you write to it, in
a real Neovim. <kbd>Ctrl+Enter</kbd> sends what it holds: a running session
gets it as its next message, and a draft starts its session with it. The
prompt is then left empty, in normal mode.

In a session's console, <kbd>i</kbd>, <kbd>a</kbd> or <kbd>o</kbd> starts
writing. A shell's window has no prompt; its console takes every key.

## Keys

The prompt's keys are Neovim's, with a few Adroit sets before your
configuration:

| Keys | What they do |
| --- | --- |
| <kbd>Ctrl+Enter</kbd> | Send |
| <kbd>Ctrl+c</kbd> | Send <kbd>Escape</kbd> to the agent, as to interrupt it |
| <kbd>Shift+Tab</kbd> | Send it to the agent as it is, as to change its mode |
| <kbd>Tab</kbd> on an empty prompt | Take the prompt the agent suggests, to edit it |
| <kbd>Ctrl+p</kbd>, <kbd>Ctrl+n</kbd> | Recall the prompts sent before |
| <kbd>Mod+i</kbd> | Select the attached images |
| <kbd>F1</kbd> | Show the keys in force |

Sending an empty prompt passes <kbd>Ctrl+Enter</kbd> itself to the session.
While a completion menu is open, <kbd>Tab</kbd>, <kbd>Shift+Tab</kbd>,
<kbd>Ctrl+p</kbd> and <kbd>Ctrl+n</kbd> move through it. Window motions such
as <kbd>Ctrl+q l</kbd> work in insert mode too.

To change any of this, or add your own mappings and plugins, see
[Neovim configuration](/docs/neovim/).

## What you write stays with its session

What you write belongs to the session it was written for. Moving to a window
that shows another session sets it aside and brings back what you wrote for
that one, with the cursor where you left it; nothing you wrote for one session
is sent to another by moving around. A tab or a row with something set aside
for it is marked.

Unsent text and attachments outlive the window: open Adroit again and each
session gets back what you wrote for it. A message that cannot be sent goes
back to its session.

While the session waits on an answer, such as a permission, the prompt's keys
are that answer. What it holds stays for afterwards.

## What it offers as you type

- <kbd>@</kbd> at the start of a word offers the sessions, the entries of the
  worktree a directory at a time (or of the disk, after `/`), and the files
  git tracks, found by any part of their path.
- <kbd>/</kbd> at the start of a word offers the agent's own commands:
  Claude Code's commands, skills and plugins; Codex's built-in commands and
  skills (also after <kbd>$</kbd>); Pi's commands, prompt templates and
  skills.

## A shell line

For Claude Code, a prompt whose first character is `!` is a shell line: it
runs in Claude Code's bash mode, and its output joins the conversation. For
Pi and OpenCode it runs as a shell line too; Codex gets the text as written.

## Images

Paste an image, or drop image files onto the console or the prompt, to attach
it. Attachments show as previews beside the text and are sent with it, in the
form each agent takes them. PNG, JPEG, GIF and WebP are accepted. An image
can be sent without text.
