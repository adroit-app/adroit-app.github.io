---
title: The window
description: The tree of sessions, the tabs and windows of the content, and the details panel.
---

Adroit's window has three panels: the **tree** of everything running on the
left, the **content** in the middle, and the **details** of what is shown on
the right. <kbd>Mod+b</kbd> and <kbd>Mod+d</kbd> show or hide the tree and the
details.

## The tree

The tree lists every session and shell Adroit runs, by the directory it runs
in. What holds them is what git says about that directory:

```text
api                        ← a git repository with sessions in two worktrees
├── main                   ← a worktree
│   ├── Files
│   ├── Sessions
│   │   ├── auth-revamp
│   │   └── review-api
│   └── Terminals
│       └── $ dev-server
└── feat/oauth
    ├── Files
    └── Sessions
        └── implement
notes                      ← a directory outside git: no worktree row
├── Files
└── Sessions
    └── outline-the-talk
Scratch                    ← every scratch session, straight under it
└── explain-regex-flags
```

- A **workspace** is a git repository, the scratch folder, or else the
  directory a session runs in.
- Inside a repository, each **worktree** where something runs has a row of its
  own. A workspace where everything runs in its main checkout shows its
  contents straight under it.
- **Files** lists the worktree's files. A file git or jj sees changed is
  marked with its letter, and a directory holding one with a dot.
- **Sessions** and **Terminals** hold what runs there: agent sessions, and
  shells and Neovims.
- <kbd>!</kbd> also shows the worktrees where nothing runs, drawn dim. Opening
  one starts a session there.

Each row shows the state of what it holds: working, **waiting on you**, done
or failed, as the agent reports it. A session whose turn finished out of view
is marked done, with a check, until you look at it.

The sessions waiting on you are listed again at the bottom of the tree, apart
from it, gathered from every repository and every environment.
<kbd>Mod+j</kbd> and <kbd>Mod+k</kbd> go to the next and previous of them.

The filter at the top (<kbd>/</kbd> in the tree, or <kbd>Mod+f</kbd>) narrows
the tree as you type.

When the window shows more than one [environment](/docs/environments/), each
one's work sits under a heading of its own, which says how its connection
stands.

### Moving in the tree

<kbd>j</kbd> and <kbd>k</kbd> move, <kbd>gg</kbd> and <kbd>G</kbd> go to the
first and last row. <kbd>Enter</kbd> or <kbd>o</kbd> opens a row, returning to
a window already showing it or opening a new tab. <kbd>l</kbd> previews it
while the keys stay in the tree. <kbd>s</kbd>, <kbd>v</kbd> and <kbd>t</kbd>
open it in a split below, a split beside, or a new tab. <kbd>h</kbd> goes back
out and folds.

<kbd>n</kbd>, <kbd>$</kbd> and <kbd>e</kbd> start a session, a shell or a
Neovim in the selected directory. <kbd>x</kbd> closes the windows showing a
row without ending it; <kbd>X</kbd> ends it. <kbd>R</kbd> renames a session,
as double-clicking its name does.

## The content

The content holds **tabs**, numbered from 1. Each tab is split into
**windows**, and each window shows one thing: a session, a draft of one not
started yet, a shell or Neovim, or a file in the viewer of its kind.

- <kbd>Ctrl+q s</kbd> and <kbd>Ctrl+q v</kbd> split the focused window below
  or beside. Splits nest, and the same session can stand in any number of
  windows.
- <kbd>Ctrl+q h</kbd>, <kbd>j</kbd>, <kbd>k</kbd>, <kbd>l</kbd> move between
  the tree, the windows, the prompt and the details.
- <kbd>Ctrl+Tab</kbd> and <kbd>Ctrl+Shift+Tab</kbd> go to the next and
  previous tab, <kbd>Mod+1</kbd> to <kbd>Mod+9</kbd> to one by number.
- <kbd>Mod+w</kbd> closes a tab. Closing only hides: sessions and shells run
  on, and the tree reaches them.

Something looked at without being opened shows in the **preview**, after the
tabs and drawn apart from them. The next thing looked at takes its place,
unless you open it, split it or write to it, which makes it a tab.

A strip on top of each window tells what it shows: its state, its name, its
agent and its worktree. A session's window shows its agent's own interface,
and the focused one shows [the prompt](/docs/prompt/) below it.

### Reading a console

In a session's console, a key the console does not bind starts **reading** it
in Neovim: what it holds, scrolled off and on screen, with your own Vim keys
for moving, searching and selecting. A yank copies to the clipboard.
<kbd>q</kbd>, <kbd>Esc</kbd> or <kbd>G</kbd> goes back to the live console;
<kbd>i</kbd>, <kbd>a</kbd> and <kbd>o</kbd> go to the prompt.

While an agent waits on a choice or a permission, its console takes your
answer directly. <kbd>Ctrl+g i</kbd> passes every key to the agent until
<kbd>Esc</kbd>, for its own menus and commands.

### Viewers

Files open by their extension: images, movies, HTML pages and PDFs in a
viewer the window draws itself, and every other file in Neovim, the one on
your `PATH` with your own configuration. A Neovim opened on a file quits when
no window shows it any more, unless it holds unsaved changes.

### Across runs

Each window keeps its tabs, splits, sizes and focus when it closes, and the
next window opened with the same number shows them again.
<kbd>Mod+n</kbd> opens another window onto the same work; each has its own
tabs, folds and prompt.

## The details panel

The details panel tells about what the focused window shows, on five sheets.
<kbd>1</kbd> to <kbd>5</kbd> switch between them while the keys are in the
panel.

- **Overview**: the session's name, state and latest model, when it started
  and last took input, and the change its worktree is on. Under **Running**,
  the subagents still at work, the processes it started and the sessions tied
  to it. Under **About**, its token use, prompt and tool call counts, profile,
  login and conversation ID.
- **Changes**: the current jj change's full description, or the HEAD commit's
  message in git, beside the files the worktree changes. Opening a file shows
  its diff.
- **Log**: the changes that lead to the worktree, drawn as a graph. In a jj
  repository, from trunk up to `@`.
- **Agents**: the session that opened this one and those it opened, the
  sessions it messaged or heard from, the messages themselves, and the
  subagents it set to work.
- **Resources**: what the conversation brought up, newest first: claude.ai
  artifacts, images, web addresses, and the files it wrote, edited or read.
  An image opens in the viewer; a link opens in your browser.

Below the sheets, **Usage** shows what is left of the agent account's limits,
with when they reset, and the session's context use. Below that are live CPU,
GPU, memory and disk use of the machine the work runs on. Each meter can be
hidden in Settings.

With an environment's heading selected in the tree, the panel tells about
that environment instead: its connection, its work machine, and each agent
profile with its login and the usage left on it.
