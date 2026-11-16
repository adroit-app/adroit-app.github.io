---
title: Neovim configuration
description: Configure the Neovims of the prompt and the console reader with your own mappings and plugins.
---

The prompt and the console's reader each run in a Neovim of their own, apart
from the one you use every day and from each other. Neither reads another's
configuration or plugins, and each keeps its history and swap files to
itself.

| Neovim | Its configuration |
| --- | --- |
| The prompt | `~/.config/adroit/prompt/nvim/init.lua` |
| The console reader | `~/.config/adroit/console/nvim/init.lua` |

The **Console panel** page of Settings names each folder, and copies its
path, shows it in the Finder, or edits its `init.lua` in a Neovim of the
window. Saving a configuration while its Neovim runs starts it again: the
prompt keeps what is written and the cursor, and the reader where it was
scrolled to.

The macOS app runs the Neovim it carries; built from source, Adroit runs the
`nvim` on your `PATH`, or the program `ADROIT_NVIM` names.

## What you can change

Everything but what the window relies on. Line numbers, completion options,
mappings, plugins and colour schemes are yours. The window keeps:

- no status line, tab line, window bar or command line of Neovim's own; the
  window draws the command line, messages and the completion menu itself;
- the theme's `'background'`, set as the theme changes, so your colour scheme
  fits it;
- the text in a scratch buffer of the filetype `adroit-prompt` or
  `adroit-console`;
- in the reader, text that cannot be changed, and no way to quit or split.

`g:adroit` is set before your configuration is read, so one configuration
shared with your everyday Neovim can tell where it runs, and leave out plugins
that take the command line or messages for themselves.

## Adroit's actions from Neovim

The prompt's keys for Adroit's actions are mappings set before your
configuration, which may map those keys or others as it likes.
`:Adroit <action>` runs any action a key binding can name:

```vim
:Adroit prompt.send
:Adroit console.send Escape
```

## Completion

What the prompt offers as you type, sessions and paths after `@` and the
agent's commands after `/`, comes from a language server named `adroit`,
attached to the prompt's buffer and shown by Neovim's own completion. To use
a completion plugin of your own instead, set `g:adroit_autocomplete` to
false; the plugin finds the offers as that language server's completion.

## Neovim in the console's theme

A Neovim run in Adroit, opened from the tree or started in a shell, keeps the
colour scheme its own configuration chooses. To have it draw in the theme of
the console instead, and follow the theme as it changes, add this to the
Neovim configuration on the machine where the work runs:

```vim
if exists('$ADROIT_THEME_FILE') | colorscheme adroit | endif
```

The `adroit` colour scheme comes with Adroit; nothing needs to be installed.
It sets `'background'` by the theme's kind and draws Neovim's default
highlights in the theme's colours. Choosing another colour scheme stops it
following the theme.
