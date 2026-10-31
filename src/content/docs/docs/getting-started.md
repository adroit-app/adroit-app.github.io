---
title: Getting started
description: Start a session, write to it, return to it, and resume a past conversation.
---

<kbd>Mod</kbd> is <kbd>Cmd</kbd> on macOS and <kbd>Ctrl+Shift</kbd>
elsewhere.

## Start a session

1. Press <kbd>Mod+p</kbd>, or <kbd>w</kbd> in the tree, to open the picker.
   It lists the sessions already running, then the directories to start one
   in: those sessions run in now, those Claude Code has been used in, your
   ghq repositories, and the folders in each folder your settings list.
   Type to narrow the list.
2. Choose a directory. A new session opens as a draft, with the prompt ready.
3. On the draft, choose a profile, a model and permissions. The profile
   decides the agent; <kbd>Ctrl+g p</kbd> and <kbd>Ctrl+g P</kbd> move through
   the profiles. See [Agents and profiles](/docs/agents/).
4. Write the first prompt and press <kbd>Ctrl+Enter</kbd>. That starts the
   session; later prompts go to the same session.

The session is named from the first words of its prompt. To name it yourself,
make the first line `name: <label>`, such as `name: review-api`; that line is
removed from what the agent gets.

To choose a directory the picker does not list, press <kbd>Ctrl+f</kbd> to
browse a file tree instead, and again to go back to the list.

In the tree, <kbd>n</kbd> on a row starts a session in that row's worktree or
directory without the picker.

## Scratch sessions

A scratch session is for something no project holds. Choose the picker's
first row, or **Session › New Scratch Session**, or send a prompt with
nothing open. The first prompt starts the session in a new folder of its own,
named by the date and time, under the scratch folder
(`~/.local/share/adroit/scratch` unless your settings name another). The tree
lists them all under **Scratch**.

Claude Code asks whether to trust each new folder. Trusting the scratch folder
itself once, by running `claude` in a shell opened from **Scratch**, keeps the
question from coming back.

## Go back to a session

- Choose it in the tree, or in the picker, which lists every running session
  above the directories.
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
in, newest first; <kbd>Ctrl+a</kbd> switches to every directory's.

Choosing one resumes it in a new session of its agent, in the directory it ran
in and with the login that keeps it. A conversation a running session already
holds is not resumed twice: choosing it shows that session.

## End a session

<kbd>X</kbd> on its row in the tree, or <kbd>Mod+Backspace</kbd>, ends a
session. A session also ends when its agent exits. Ending one ends no other.

## Start a session from a terminal

The same start is a command, which works with the window closed:

```sh
adroit session start --agent codex --dir ~/src/api -- "Review the API"
```

It prints the new session's name. See
[Sessions that open sessions](/docs/opening-sessions/#from-a-terminal) for
its options.
