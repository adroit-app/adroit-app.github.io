---
title: Sessions that open sessions
description: How a session opens another beside it, talks with other sessions as a peer, and how to start one from a terminal.
---

Every session Adroit starts can open sessions beside it and talk with any
other session Adroit started. A session still does its own work, giving what
can run alongside to its agent's own subagents. It opens a session only for a
separate line of work: one that needs little of what it knows, and that you
will want to talk through yourself.

The session it opens is an ordinary one. It answers to you, reports to no
session, and is read and steered in its console like any other. None of them
reports to another or waits on another's result; work that has to come
together is brought together by you, or by a session you ask to.

## The tools a session has

Every session has these as tools of its agent, through an MCP server named
`adroit`:

- **`start_session`** opens a session with a first prompt. It takes the
  directory to work in, whether to work in a new worktree and the revision it
  starts from, the profile or agent, the model, the permissions and a name. A
  new worktree is a jj workspace in a jj repository, a git worktree otherwise.
- **`send`** sends a message to another session.
- **`sessions`** lists the sessions Adroit runs, with where they run, how
  they stand and which session opened which.
- **`models`** lists, for each profile, its agent and the models it offers.

At most `max_started` sessions opened by sessions run at once; sessions you
start never count against it.

## Messages

Sessions talk as peers. A message tells the recipient what it should know, or
asks it what it knows; it does not hand it work. It reaches the agent between
turns, through the agent's own way of hearing from outside, headed by who
sent it.

Adroit gives every session the same instructions about these tools. Before
touching something it shares with other sessions in the same repository,
such as the checkout, a branch or a port, a session tells them what it is
about to do, and afterwards what it did. It asks the session that knows
something rather than working it out again, and sends no progress notes or
replies that only acknowledge.

Every message, and which session opened which, is kept and shown on the
**Agents** sheet of the [details](/docs/window/#the-details-panel) of the
sessions on both ends, after they have ended too.

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

Run from a shell inside a session, the command acts as that session: the new
session is opened by it.
