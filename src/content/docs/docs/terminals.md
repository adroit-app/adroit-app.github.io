---
title: Shells and terminals
description: Shells, Neovims and other programs Adroit runs beside your sessions, and the adroit terminal commands.
---

Beside the sessions, Adroit runs **terminals**: a shell, a Neovim, or any
other program. Each is listed under **Terminals** in the worktree it runs in,
and like a session it keeps running when its windows close or Adroit quits.

- <kbd>Mod+s</kbd>, or <kbd>$</kbd> in the tree, opens a shell in the current
  directory: your login shell unless the settings name another.
- <kbd>Mod+e</kbd>, or <kbd>e</kbd> in the tree, opens Neovim there, with your
  own configuration.
- Opening a file from the tree opens it in a Neovim started on it, unless a
  [viewer](/docs/window/#viewers) shows its kind.

A terminal's window takes every key but <kbd>Ctrl+q</kbd> sequences and
<kbd>Mod</kbd> keys, and shows no prompt. Closing its windows hides it;
<kbd>X</kbd> on its row, or **Stop Terminal**, ends it. Going from session to
session passes shells over.

A shell or Neovim terminal ends with its program. A **command** terminal
outlives its program: its screen stays, saying the status the program ended
with, until you stop it. A terminal whose program reports how it stands, as
an agent does, is marked in the tree with that state.

A terminal is not an agent session: it neither starts sessions nor sends or
receives messages.

## From the command line

These commands are run by the instance's work host, so they work with no
window open:

```sh
adroit terminal start --program shell --dir ~/src/api --json
adroit terminal start --program neovim --dir ~/src/api --json
adroit terminal start --program command --dir ~/src/api --json -- npm run dev
adroit terminal list --json
adroit terminal input --terminal <resource-id> --text "hello" --keys Tab Enter --json
adroit terminal screen --terminal <resource-id> --json
adroit terminal wait --terminal <resource-id> --text "ready" --timeout 60 --new --json
adroit terminal stop --terminal <resource-id> --json
```

Sessions use them too: an agent can start a dev server or a probe in a
terminal you can see in the tree, read its screen, and stop it when done,
rather than running it hidden in the background.
A terminal a session starts opens in the window as a session it opens does:
with the keys while you look at that session, and otherwise behind the tab
shown. `start --background` keeps it to the tree. A command that needs you to
type, a password or a login, is run this way so you can answer it there.

`wait` waits for a line of the terminal's output that holds `--text`, or
matches `--regex`, and prints it. It counts lines already written, so a
server's ready line is never missed; `--new` counts only lines written after
the call. `screen --json` gives a command terminal's exit status in `exit`
once its program has ended.

A session's programs can also show images in its console through the kitty
graphics protocol; a click on one opens it in the
[lightbox](/docs/window/#images-and-the-lightbox).

## Instances

`adroit --instance <name>` opens a window of a separate instance, with its
own hosts, sessions and terminals; settings and keys are shared. Without it,
Adroit runs the instance `default`. `adroit --new-window` opens another window
of the current instance.

## When the terminal host goes

Shells and Neovims the windows opened are brought back with the sessions
after the terminal host restarts or crashes, in their directories, a Neovim on
its file; what they scrolled back is gone. A terminal that ran a command is
not brought back. See
[Getting started](/docs/getting-started/#when-the-host-goes).

## Keeping the Mac awake

While a session or a shell runs, the window open or not, the Mac does not go
to idle sleep, so the work goes on with no one at it. The display still
sleeps as the Energy settings say, and closing the lid on battery still
sleeps the Mac. Turn this off with `keep_awake` in the settings.
