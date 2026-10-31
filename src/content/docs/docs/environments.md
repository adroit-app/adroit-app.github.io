---
title: Environments and work machines
description: Run sessions on another machine and see them in the same window, beside this Mac's.
---

An **environment** is a named place to work: a connection, its agent
profiles and its work settings. Every window lists every environment under a
heading of its own in the tree, and connects to all of them. One that cannot
be reached stays listed with the work last received from it, and the others
stay usable.

An environment uses this computer, or a **work machine** this computer paired
with: another Mac or a Linux machine that runs Adroit's hosts. Its sessions
run there, with the agents, logins and repositories installed there, and keep
running when this computer sleeps or closes.

## Set up a work machine

On the work machine, run the terminal host, the work host and the gateway as
services of your user:

```sh
adroit remote enable
```

They start with the `PATH` your login shell has, so it has to find the
agents, git, jj and any program your sessions use. On macOS, run it with the
`adroit` inside Adroit.app, and allow Adroit to find devices on the local
network when macOS asks. On Linux, the services run without a login only when
you have enabled lingering for your user. `adroit remote disable` stops and
removes them.

A machine without a desktop needs only the build without the window; see
[Install](/docs/install/#a-work-machine-without-a-window).

## Pair with it

From the window, add an environment below the tree. It lists the work machines
announcing themselves on the local network, or takes an address. A machine
not paired yet shows a code: run this on the work machine and type it there:

```sh
adroit remote pair
```

From the command line, `adroit connect pair <address>` on this computer does
the same. `adroit connect` checks the connection without changing anything.

The environment is named after its work machine unless you name it, and
every window lists it at once. Its heading's menu renames it, tries it again,
pairs with it again, or removes it. Removing an environment ends nothing:
its sessions keep running on its machine, and Settings can restore it.

## What stays where

- Agent profiles, their logins, working directories and console themes
  belong to the environment, on its work machine. Log in to an agent there.
- Fonts, zoom, the prompt's and the reader's Neovim configuration and other
  display and input preferences stay on this computer, for every environment.
- Paths on a work machine are its own: this computer's file tools cannot
  open them.

Several environments can share one work machine, each with its own settings
and sessions. That is an organizing boundary, not a security one: they run as
the same user there.

## Replacing the hosts

Replacing the work host leaves the terminal host and its sessions running.
Replacing the terminal host ends its programs, so a window never does it on
its own; it offers to, with a banner naming the environment.
