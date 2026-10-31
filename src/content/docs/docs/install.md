---
title: Install
description: Build Adroit from source, as a macOS app or straight from a checkout.
---

Adroit has no release yet, so it is built from source. The build uses the
Nix development shell of the
[Adroit repository](https://github.com/adroit-app/Adroit), which brings the
Rust toolchain and everything else the build needs.

## What it needs

Adroit needs git and at least one supported agent on your `PATH`:

| Agent       | Program                                               |
| ----------- | ----------------------------------------------------- |
| Claude Code | `claude`                                              |
| Codex CLI   | `codex`                                               |
| Pi          | `pi`                                                  |
| OpenCode    | `opencode` from `@opencode/cli`, version 2.1 or later |

Install jj to read jj repositories and create jj workspaces. ghq is
optional; when it is installed, its repositories are offered in the directory
picker.

## The macOS app

Clone the repository and build and install the app into **Applications**:

```sh
git clone https://github.com/adroit-app/Adroit.git
cd Adroit
nix develop -c just install-macos
```

The app carries the Neovim its prompt and console reader run. Opening a file
in Neovim runs the `nvim` on your `PATH`.

The `adroit` command is `/Applications/Adroit.app/Contents/MacOS/adroit`. Add
that directory to your `PATH` to use the `adroit` commands from your terminal.

### Keep macOS's permissions across rebuilds

The app is signed by a self-signed identity named "Adroit Release" when your
login keychain has it, so a reinstall keeps the permissions macOS gave the
previous build. Without it, the app is signed ad hoc. To create and import the
identity once, keep the resulting folder and run these from the development
shell:

```sh
just macos-make-identity ~/adroit-identity
just macos-import-identity ~/adroit-identity
```

## Run from the source

Build and open a window straight from the checkout:

```sh
nix develop -c cargo run --release -p adroit
```

Built and run this way, the prompt and the console reader run the `nvim` on
your `PATH`, or the program `ADROIT_NVIM` names.

## A work machine without a window

A machine that only runs the hosts and the session commands, such as a Linux
server you pair with, needs no desktop window:

```sh
nix develop -c cargo build --release -p adroit --no-default-features
```

That executable serves the hosts and runs the session, terminal and MCP
commands, and refuses requests to open a window. See
[Environments and work machines](/docs/environments/) to set it up.

## Updating

Pull the repository and build again. Your sessions keep running: the window
starts a new work host when the old one cannot talk with it, and nothing ends
with it. When the terminal host has to be replaced, the window shows a banner
offering to restart it instead of doing it on its own, because restarting it
ends every session and shell it holds.
