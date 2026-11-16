---
title: Install
description: Install Adroit with Homebrew or Nix, or build it from source on macOS and Windows.
---

## What it needs

Adroit needs git and at least one supported agent on your `PATH`:

| Agent       | Program                                               |
| ----------- | ----------------------------------------------------- |
| Claude Code | `claude`                                              |
| Codex CLI   | `codex`                                               |
| Pi          | `pi`                                                  |
| OpenCode    | `opencode` from `@opencode/cli`, version 2.1 or later |

These are optional:

- **jj**, to read jj repositories and create jj workspaces.
- **ghq**, whose repositories the picker offers, and which clones a
  repository you type into it.
- **gh**, the GitHub CLI, logged in, to list a repository's
  [pull requests and issues](/docs/github/) and to look through GitHub for a
  repository to clone.

## Homebrew

On an Apple silicon Mac, install the latest release with Homebrew:

```sh
brew install --cask adroit-app/tap/adroit
```

`brew upgrade --cask adroit` updates it.

Each [release](https://github.com/adroit-app/Adroit/releases) carries the disk
image the cask installs. Adroit.app is signed by a self-signed certificate,
not by an Apple Developer ID, so a copy downloaded by hand needs its
quarantine removed, or opening it allowed in **System Settings › Privacy &
Security**. The cask does this itself.

```sh
xattr -dr com.apple.quarantine /Applications/Adroit.app
```

The app carries the Neovim its prompt and console reader run. Opening a file
in Neovim runs the `nvim` on your `PATH`.

The `adroit` command is `/Applications/Adroit.app/Contents/MacOS/adroit`. Add
that directory to your `PATH` to use the `adroit` commands from your terminal.

## Nix

The flake builds Adroit, prebuilt in the `adroit` Cachix cache:

```sh
nix profile install github:adroit-app/Adroit
```

## Build from source

Clone the [repository](https://github.com/adroit-app/Adroit). Its Nix
development shell brings the Rust toolchain and everything else the build
needs.

### The macOS app

Build the app and install it into **Applications**:

```sh
git clone https://github.com/adroit-app/Adroit.git
cd Adroit
nix develop -c just install-macos
```

The app is signed by the self-signed identity "Adroit Release" when your
login keychain has it, so a local build keeps the permissions macOS gave the
release or the build before it. Otherwise it is signed ad hoc.

### Straight from the checkout

```sh
nix develop -c cargo run --release -p adroit
```

Built and run this way, the prompt and the console reader run the `nvim` on
your `PATH`, or the program `ADROIT_NVIM` names.

### Windows

Build with Rust, the MSVC build tools and LLVM installed, and Neovim on
`PATH`:

```sh
cargo run --release -p adroit
```

Shells there run PowerShell. One `adroit` opens one window, and Claude Code's
external editor is not handed to it.

### A work machine without a window

A machine that only runs the hosts and the session commands, such as a Linux
server you pair with, needs no desktop window:

```sh
nix develop -c cargo build --release -p adroit --no-default-features
```

That executable serves the hosts and runs the session, terminal and MCP
commands, and refuses requests to open a window. See
[Environments and work machines](/docs/environments/) to set it up.

## Updating

Your sessions keep running across an update: the window starts a new work
host when the old one cannot talk with it, and nothing ends with it. When the
terminal host has to be replaced, the window offers to restart it with a
banner rather than doing it on its own, and the sessions and shells it held
can be [brought back](/docs/getting-started/#when-the-host-goes) afterwards.
