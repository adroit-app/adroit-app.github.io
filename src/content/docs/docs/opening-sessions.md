---
title: Sessions that open sessions
description: How a session opens another beside it, talks with other sessions as a peer, records its plan, names and closes itself, and how to start one from a terminal.
---

Every session Adroit starts can open sessions beside it and talk with any
other session Adroit started. A session still does its own work, giving what
comes back to it to fold into its answer to its agent's own subagents and
tools. It opens a session for a line of work you will want to steer yourself:
one that needs your decisions or review along the way, lands as a change of
its own, or lives in another repository, even when it grew out of the
session's own work, or when you ask it to.

The session it opens is an ordinary one. It answers to you, reports to no
session, and is read and steered in its console like any other. None of them
reports to another or waits on another's result; work that has to come
together is brought together by you, or by a session you ask to.

A session opened this way opens in a tab of each window as it appears: with
the keys, when you are looking at the session that opened it, and otherwise
behind the tab shown, so what you were typing into stays.

## The tools a session has

Every session has these as tools of its agent, through an MCP server named
`adroit`:

- **`start_session`** opens a session with a first prompt. It takes the
  directory to work in, whether to work in a new worktree and the revision it
  starts from, the profile or agent, the model, the permissions, a name, and
  whether to start it in the background. A new worktree is a jj workspace in
  a jj repository, a git worktree otherwise.
- **`send`** sends a message to another session by its code.
- **`sessions`** lists the sessions Adroit runs, with their codes, where they
  run, how they stand and which session opened which.
- **`models`** lists, for each profile, its agent and the models it offers.
- **`timeline_tasks`** and **`timeline`** record and read the plan of the
  session's own work, shown in the
  [details' Timeline](/docs/details/#the-timeline).
- **`rename_session`** names the session anew as its work becomes clear.
- **`close_session`** ends the session itself, once you agree its task is
  done.

Sessions opening sessions can be switched off with `delegation.enabled` in
`settings.toml`: a start is then refused, telling the agent to carry on
itself or ask you, and the sessions already running go on.

## What Adroit asks of every session

Adroit gives every session the same instructions about these tools:

- Do the work itself, and open a session only for a line of work you will
  steer; asked to work in parallel, give each such line a session and the
  rest to subagents. Never open one for a step of its own work.
- Before work of several steps, record its plan on the timeline and keep it
  current.
- Before touching something shared with other sessions in the same
  repository, such as the checkout, a branch or a port, tell them what it is
  about to do, and afterwards what it did.
- Ask the session that knows something rather than working it out again, and
  send no progress notes or replies that only acknowledge.
- Once the task is done, sum up where things stand and ask whether to close
  the session.

A [scratch session](/docs/getting-started/#scratch-sessions) is told besides to
hand work on a project to a session in that project's directory.

## Messages

Sessions talk as peers. A message tells the recipient what it should know, or
asks it what it knows; it does not hand it work. It reaches the agent between
turns, through the agent's own way of hearing from outside, headed by who
sent it.

Every message, and which session opened which, is kept and shown in the
**Conversation** tab of the [details](/docs/details/) of the sessions on both
ends, after they have ended too.

Sessions Adroit did not start, such as a Claude Code in another terminal, can
neither send nor receive.

## From a terminal

The same start is a command. It works with the window closed:

```console
$ adroit session start --dir ~/src/api --worktree -- "Find why the login test is flaky"
find-login-test
```

It prints the new session's name. The prompt is read from standard input when
none follows `--`.

| Option | What it does |
| --- | --- |
| `--dir <path>` | Where it works; the current directory by default |
| `--worktree`, `--base <rev>` | Work in a new worktree, starting from that revision |
| `--name <name>` | Name it; otherwise it is named from its prompt |
| `--profile <id>` | Start it from that profile |
| `--agent claude\|codex\|pi\|opencode` | Start it from that agent's default profile |
| `--model <model>` | The model for this launch only |
| `--permissions default\|read_only` | The launch's permissions |
| `--permissions-file <path>` | Custom permissions for the agent, as JSON |
| `--background` | Only list it in the tree, rather than open it in the window |

Run from a shell inside a session, the command acts as that session: the new
session is opened by it.

`adroit session explain <session>` tells where the state a session shows came
from: what its program reported, or which [screen rule](/docs/agents/#screen-rules)
read it from its screen, with the last rows of that screen.
