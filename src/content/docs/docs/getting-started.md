---
title: Getting started
description: Start a session, write to it, return to it, resume a past conversation, and bring sessions back after the host goes.
---

<kbd>Mod</kbd> is <kbd>Cmd</kbd> on macOS and <kbd>Ctrl+Shift</kbd>
elsewhere.

## Start a session

1. Press <kbd>Mod+p</kbd>, or <kbd>w</kbd> in the tree, to open the picker.
   It lists the sessions already running, those waiting on you first, then
   the directories to start one in: those the tree lists, those Claude Code
   has been used in, your ghq repositories, and the folders in each folder
   your settings list. Type to narrow the list.
2. Choose a directory. A new session opens as a draft, with the prompt ready.
3. On the draft, choose a profile, a model and permissions. The profile
   decides the agent; <kbd>Ctrl+g p</kbd> and <kbd>Ctrl+g P</kbd> move through
   the profiles. See [Agents and profiles](/docs/agents/).
4. Write the first prompt and press <kbd>Ctrl+Enter</kbd>. That starts the
   session; later prompts go to the same session.

In the tree, <kbd>n</kbd> on a row starts a session in that row's worktree or
directory without the picker.

### Naming

The session is first named from the first words of its prompt. Once its agent
has answered, the agent names the session itself, in a few words saying what
it works on and in the language you write in, and names it again when the
work turns to something else.

To name it yourself, make the first line of the first prompt
`name: <label>`, such as `name: review-api`, which is removed from what the
agent gets, or rename it with <kbd>R</kbd> in the tree. A name you gave is
kept; emptying it lets the agent name the session again. `rename_sessions`
in the settings switches the agent's naming off.

Every session also carries a short **code**, shown beside its name, that never
changes, even when the session is renamed or brought back.

### More from the picker

- Type `@` and a state to list only the sessions in it: `@w` keeps those
  waiting on you.
- <kbd>Ctrl+s</kbd> and <kbd>Ctrl+e</kbd> open a shell or Neovim in the
  directory of the row instead of starting a session, and <kbd>Ctrl+t</kbd>
  adds its workspace to the tree with nothing started there.
- <kbd>Ctrl+f</kbd> browses a file tree, for a directory the list does not
  offer, and goes back to the list.
- **Add to Tree** (<kbd>A</kbd> in the tree, or the Session menu) opens the
  picker on the directories alone, to list a workspace before starting
  anything there.

### Clone a repository

With ghq installed, type a repository ghq can clone, `host/owner/repo` or a
URL git clones from, and the picker offers a row to clone it. Choosing it runs
`ghq get` in a terminal shown with the keys, so whatever the clone asks, a
passphrase or a host to trust, is answered there. Once the clone succeeds, its
workspace is added to the tree and the directory is taken as if chosen from
the list.

<figure class="doc-shot">
<img class="dark:sl-hidden" src="/screenshots/picker-light.png" alt="The picker with github.com/acme/web typed, offering two ghq repositories to start in and a row to clone github.com/acme/web with ghq." width="1600" height="1053" loading="lazy" />
<img class="light:sl-hidden" src="/screenshots/picker-dark.png" alt="The picker with github.com/acme/web typed, offering two ghq repositories to start in and a row to clone github.com/acme/web with ghq." width="1600" height="1053" loading="lazy" />
</figure>

Type `github:` to look through GitHub instead. The picker offers the owners
`gh` is logged in as, you and your organizations; after `github:owner/` it
offers that owner's repositories ghq does not keep yet, private ones
included.

## Scratch sessions

A scratch session is for talk no project holds. Choose the picker's first
row, or **Session › New Scratch Session**, or send a prompt with nothing open.
Every scratch session runs in the scratch folder
(`~/.local/share/adroit/scratch` unless your settings name another), and the
tree lists them all under **Scratch**.

When the talk turns to work on a project, the scratch session opens a session
in that project's directory, hands it what it needs, and the new session opens
in its place with the keys. Claude Code asks whether to trust the scratch
folder the first time only.

## Go back to a session

- Choose it in the tree, or in the picker, which lists every running session
  above the directories, those that need you first.
- <kbd>Mod+j</kbd> and <kbd>Mod+k</kbd> go to the next and previous session
  waiting on you, in any repository.
- <kbd>Mod+1</kbd> to <kbd>Mod+9</kbd> go to a tab.

Closing a window or a tab only hides what it shows; the session runs on and
the tree still reaches it. Closing Adroit itself leaves every session
running, and opening it again shows them where they stand.

## Resume a past conversation

Agents keep each conversation after its session ends, and Adroit lists only
the sessions it runs. To return to one, press <kbd>Mod+o</kbd> (<kbd>O</kbd>
in the tree). The list shows the conversations kept for the directory you are
in, newest first, by every agent and login; <kbd>Ctrl+a</kbd> switches to
every directory's. Type to narrow it by title and directory.

Choosing one resumes it in a new session of its agent, in the directory it ran
in and with the login that keeps it. A conversation a running session already
holds is not resumed twice: choosing it shows that session.

## End a session

<kbd>X</kbd> on its row in the tree, or <kbd>Mod+Backspace</kbd>, ends a
session. A session also ends when its agent exits. Ending one ends no other.

A session does not sit waiting once its task is done: its agent sums up where
things stand and asks whether to close it. When you agree, it ends itself as
ending it from Adroit would; its worktree stays and its conversation can be
resumed. Otherwise it carries on.

## When the host goes

Sessions and shells run in a terminal host apart from the window. When that
host goes, restarted, crashed or with the machine, what it held is
interrupted rather than ended, and keeps its tabs. A banner then offers to
bring it all back, to choose what comes back, or to let it go;
**Session › Bring Back Sessions…** opens the same list later.

A session comes back as a new session resuming its conversation, in its
directory and login, from the same profile, with the model and permissions it
started with. A shell or Neovim opens again in its directory; what it
scrolled back is gone. `restore_sessions` in the settings brings everything
back at once (`always`) or never (`never`) instead of asking.

## Start a session from a terminal

The same start is a command, which works with the window closed:

```sh
adroit session start --agent codex --dir ~/src/api -- "Review the API"
```

It prints the new session's name. See
[Sessions that open sessions](/docs/opening-sessions/#from-a-terminal) for
its options.
