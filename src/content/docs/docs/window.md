---
title: The window
description: The tree of sessions, the tabs and windows of the content, the viewers, and the lightbox.
---

Adroit's window has three panels: the **tree** of everything running on the
left, the **content** in the middle, and the [details](/docs/details/) of
what is shown on the right. <kbd>Mod+b</kbd> and <kbd>Mod+d</kbd> show or
hide the tree and the details.

<figure class="doc-shot">
<img class="dark:sl-hidden" src="/screenshots/console-light.png" alt="Adroit's window with the api repository in the tree, its terminals above the folded worktrees main and feat/oauth, a cargo run terminal split above a shell, and the details panel on its Overview tab with the machine's meters at the foot." width="1600" height="1053" loading="lazy" />
<img class="light:sl-hidden" src="/screenshots/console-dark.png" alt="Adroit's window with the api repository in the tree, its terminals above the folded worktrees main and feat/oauth, a cargo run terminal split above a shell, and the details panel on its Overview tab with the machine's meters at the foot." width="1600" height="1053" loading="lazy" />
</figure>

## The tree

The tree lists every session and shell Adroit runs, by the directory it runs
in. What holds them is what git says about that directory:

```text
api                        ← a git repository
├── Sessions               ← every session of every worktree of api
│   ├── auth-revamp
│   ├── review-api
│   └── implement
├── Terminals
│   └── $ dev-server
├── Pull Requests 3        ← what is open on GitHub, folded until opened
├── Issues 12
├── main                   ← a worktree, folded until opened
│   ├── Files
│   ├── Sessions
│   │   ├── auth-revamp
│   │   └── review-api
│   └── Terminals
│       └── $ dev-server
└── feat/oauth
    ├── Files
    ├── Sessions
    │   └── implement
    └── Terminals
notes                      ← a directory outside git: no worktree row
├── Files
└── Sessions
    └── outline-the-talk
Scratch                    ← every scratch session, straight under it
└── explain-regex-flags
```

- A **workspace** is a git repository, the scratch folder, or else the
  directory a session runs in. It stays listed once anything has run there,
  across runs, until you remove it from its row's menu or the close button
  its row shows under the pointer. **Add to Tree** (<kbd>A</kbd>) lists one
  before anything runs there. A workspace where nothing runs starts folded.
- Above its worktrees, a repository lists its own **Sessions** and
  **Terminals**: everything that runs in any of its worktrees, so what runs
  in the repository is seen without opening each worktree.
- Each **worktree** where something runs has a row of its own, folded until
  you open it, holding its own **Files**, **Sessions** and **Terminals**.
  Closing a worktree's row ends, after asking, everything running there.
- **Files** lists the worktree's files. A file git or jj sees changed is
  marked with its letter, and a directory holding one with a dot.
  <kbd>N</kbd> and <kbd>K</kbd> make a new file or directory there, named in
  place; a name with `/` makes the directories it passes through.
- A repository on GitHub lists its open [Pull Requests and
  Issues](/docs/github/), while `gh` is installed.
- <kbd>!</kbd> also shows the worktrees where nothing runs, drawn dim. Opening
  one starts a session there.

Each session's row shows its state, as its agent reports it or as its screen
shows it: starting, working, **waiting on you**, working in the background,
done or failed. A session whose turn finished out of view is marked done,
with a check, until you look at it. A terminal whose program reports its
state is marked the same way.

The sessions waiting on you are listed again at the bottom of the tree, apart
from it, gathered from every repository and every environment.
<kbd>Mod+j</kbd> and <kbd>Mod+k</kbd> go to the next and previous of them.

The filter at the top (<kbd>/</kbd> in the tree, or <kbd>Mod+f</kbd>) narrows
the tree as you type, by the same fuzzy match as the pickers, fzf's syntax
included. A workspace or worktree that matches keeps all it holds.

When the window shows more than one [environment](/docs/environments/), each
one's work sits under a heading of its own, which says how its connection
stands. The <kbd>+</kbd> on a heading starts a session, a shell or a Neovim
there, or adds a directory to the tree.

### Moving in the tree

<kbd>j</kbd> and <kbd>k</kbd> move, <kbd>gg</kbd> and <kbd>G</kbd> go to the
first and last row. <kbd>Enter</kbd>, <kbd>o</kbd> or <kbd>l</kbd> opens a
row, returning to a window already showing it or opening a new tab; on a
folded row it unfolds it first. <kbd>s</kbd>, <kbd>v</kbd> and <kbd>t</kbd>
open it in a split below, a split beside, or a new tab. <kbd>h</kbd> goes back
out and folds. A click on a row with rows under it folds or unfolds it.

<kbd>n</kbd>, <kbd>$</kbd> and <kbd>e</kbd> start a session, a shell or a
Neovim in the selected directory. <kbd>x</kbd> closes the windows showing a
row without ending it; <kbd>X</kbd> ends it, a session or a terminal.
<kbd>R</kbd> renames a session, as double-clicking its name does; leaving the
field cancels.

## The content

The content holds **tabs**, numbered from 1. Each tab is split into
**windows**, and each window shows one thing: a session, a draft of one not
started yet, a shell or Neovim, a file in the viewer of its kind, or a
[pull request or issue](/docs/github/).

- <kbd>Ctrl+q s</kbd> and <kbd>Ctrl+q v</kbd> split the focused window below
  or beside. Splits nest, and the same session can stand in any number of
  windows.
- <kbd>Ctrl+q h</kbd>, <kbd>j</kbd>, <kbd>k</kbd>, <kbd>l</kbd> move between
  the tree, the windows, the prompt and the details.
- <kbd>Ctrl+Tab</kbd> and <kbd>Ctrl+Shift+Tab</kbd> go to the next and
  previous tab, <kbd>Mod+1</kbd> to <kbd>Mod+9</kbd> to one by number.
- <kbd>Mod+w</kbd> closes a tab. Closing only hides: sessions and shells run
  on, and the tree reaches them.

Opening something goes to a window already showing it, in any tab, or else
opens it in a new tab after the one shown. Nothing opened takes the place of
what a window shows.

A strip on top of each window tells what it shows: its state, its name and
code, its agent and its worktree. A session's window shows its agent's own
interface, and the focused one shows [the prompt](/docs/prompt/) below it.

### Arranging tabs

- <kbd>Ctrl+q g &lt;</kbd> and <kbd>Ctrl+q g &gt;</kbd> move the tab shown a
  place to either side; drag a tab to put it elsewhere.
- <kbd>Ctrl+q m</kbd> and a number merge the tab shown into that tab, and
  <kbd>Ctrl+q M</kbd> into the tab shown before it: its windows, split as
  they were, come right of the windows there.
- <kbd>Ctrl+q T</kbd> moves the focused window to a tab of its own, and
  <kbd>Ctrl+q H</kbd>, <kbd>J</kbd>, <kbd>K</kbd>, <kbd>L</kbd> to a side of
  its tab.
- With the mouse, drag a window's strip onto a side of another window, in
  its tab or another, or onto a tab. Holding it over a tab shows that tab.

<figure class="doc-shot">
<img class="dark:sl-hidden" src="/screenshots/layout-light.png" alt="One tab split into three windows: a cargo run terminal and the README in the Markdown viewer side by side, above a shell across the bottom." width="1600" height="1053" loading="lazy" />
<img class="light:sl-hidden" src="/screenshots/layout-dark.png" alt="One tab split into three windows: a cargo run terminal and the README in the Markdown viewer side by side, above a shell across the bottom." width="1600" height="1053" loading="lazy" />
</figure>

### Reading a console

In a session's console, a key the console does not bind starts **reading** it
in Neovim: what it holds, scrolled off and on screen, with your own Vim keys
for moving, searching and selecting. A yank copies to the clipboard.
<kbd>q</kbd>, <kbd>Esc</kbd> or <kbd>G</kbd> goes back to the live console;
<kbd>i</kbd>, <kbd>a</kbd> and <kbd>o</kbd> go to the prompt.
<kbd>Ctrl+q [</kbd> reads any console, a shell's included.

While an agent waits on a choice or a permission, its console takes your
answer directly. <kbd>Ctrl+g i</kbd> passes every key to the agent until
<kbd>Esc</kbd>, for its own menus and commands.

## Viewers

Files that are read rather than edited open in a viewer the window draws
itself: images, movies, HTML pages, **Markdown documents** and PDFs. Every
other file opens in Neovim, the one on your `PATH` with your own
configuration. A Neovim opened on a file quits when no window shows it any
more, unless it holds unsaved changes.

The Markdown viewer draws a document as [Arto](https://github.com/arto-app/Arto)
does, diagrams, formulas, highlighted code and GitHub's alerts included, in
the colours of Adroit's theme. It draws the document again whenever its file
changes, at the place you were reading. A link to another file opens that
file; a link within the document scrolls to its place.

<figure class="doc-shot">
<img class="dark:sl-hidden" src="/screenshots/markdown-light.png" alt="The api repository's README.md open from the tree's Files in the Markdown viewer, showing code blocks, a table of endpoints and a flowchart drawn from Mermaid." width="1600" height="1053" loading="lazy" />
<img class="light:sl-hidden" src="/screenshots/markdown-dark.png" alt="The api repository's README.md open from the tree's Files in the Markdown viewer, showing code blocks, a table of endpoints and a flowchart drawn from Mermaid." width="1600" height="1053" loading="lazy" />
</figure>

<kbd>e</kbd> in a Markdown document, or <kbd>Ctrl+q e</kbd>, switches its
window to a Neovim on the document, and back. The Neovim runs on hidden while
the viewer is shown, so switching back finds it as it was.

In every viewer, <kbd>+</kbd>, <kbd>-</kbd> and <kbd>0</kbd> zoom, and
<kbd>j</kbd>, <kbd>k</kbd>, <kbd>Ctrl+d</kbd> and <kbd>Ctrl+u</kbd> scroll.
The viewers read the files of this computer only; a work machine's files open
in Neovim there.

## Images and the lightbox

Programs in a session or a terminal can draw images in the console. A click
on one, or on an image the details' Resources list, opens the **lightbox**
over the window, with the session's other images a step away:
<kbd>h</kbd> and <kbd>l</kbd> go to the previous and next,
<kbd>+</kbd>, <kbd>-</kbd> and <kbd>0</kbd> zoom, <kbd>H</kbd>,
<kbd>J</kbd>, <kbd>K</kbd>, <kbd>L</kbd> or dragging move it, and
<kbd>q</kbd>, <kbd>Esc</kbd> or a click outside close it.

## Across runs

Each window keeps its tabs, splits, sizes and focus when it closes, and the
next window opened with the same number shows them again.
<kbd>Mod+n</kbd> opens another window onto the same work; each has its own
tabs, folds and prompt.
