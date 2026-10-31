---
title: Keys
description: Adroit's main keys, where keys go, and how to change them in keys.toml or Settings.
---

Every key Adroit handles runs a named action, and every action can be bound
to other keys. <kbd>F1</kbd> shows the bindings in force wherever the keys
are. The menu bar offers every action too, with its key.

<kbd>Mod</kbd> is <kbd>Cmd</kbd> on macOS and <kbd>Ctrl+Shift</kbd>
elsewhere, so one binding serves every platform.

## The main keys

| Keys | Action |
| --- | --- |
| <kbd>Ctrl+q h</kbd> <kbd>j</kbd> <kbd>k</kbd> <kbd>l</kbd> | Move between the tree, the windows, the prompt and the details |
| <kbd>Ctrl+q s</kbd>, <kbd>Ctrl+q v</kbd> | Split below or beside the focused window |
| <kbd>Ctrl+q c</kbd>, <kbd>Ctrl+q o</kbd> | Close the window, or close every other |
| <kbd>Ctrl+Tab</kbd>, <kbd>Ctrl+Shift+Tab</kbd> | Next or previous tab |
| <kbd>Mod+1</kbd> … <kbd>Mod+9</kbd> | Go to a tab |
| <kbd>Mod+p</kbd> | Go to a session or choose where to start one |
| <kbd>Mod+t</kbd> | Start a session in the selected or focused directory |
| <kbd>Mod+o</kbd> | Resume a past conversation |
| <kbd>Mod+j</kbd>, <kbd>Mod+k</kbd> | Next or previous session waiting on you |
| <kbd>Ctrl+q }</kbd>, <kbd>Ctrl+q {</kbd> | Next or previous workspace |
| <kbd>Mod+s</kbd>, <kbd>Mod+e</kbd> | Open a shell or Neovim in the current directory |
| <kbd>Mod+n</kbd> | Open another window |
| <kbd>Mod+f</kbd>, <kbd>Mod+r</kbd> | Filter the tree, or read everything again |
| <kbd>Mod+b</kbd>, <kbd>Mod+d</kbd> | Show or hide the tree or the details |
| <kbd>Mod+,</kbd> | Open Settings |
| <kbd>F1</kbd> | Show the keys for where you are |

<kbd>Ctrl+q</kbd> is a prefix: it reaches Adroit from anywhere, the prompt's
insert mode and a console included, as <kbd>Ctrl+w</kbd> does in Vim. Within
it, a key held with <kbd>Ctrl</kbd> means the same as without, so
<kbd>Ctrl+q Ctrl+h</kbd> is <kbd>Ctrl+q h</kbd>. <kbd>Ctrl+w</kbd> stays with
the program in the console or the prompt. To send <kbd>Ctrl+q</kbd> itself to
the console, press <kbd>Ctrl+q .</kbd>.

An action that steps through something repeats with its last key:
<kbd>Ctrl+q g t t t</kbd> goes three tabs on. The mode chip says `REPEAT`
meanwhile.

The keys of [the tree](/docs/window/#moving-in-the-tree),
[the prompt](/docs/prompt/#keys) and
[the console](/docs/window/#reading-a-console) are on their pages. The
[complete reference](https://github.com/adroit-app/Adroit/blob/main/docs/spec/reference/keys.md)
lists every action and every default binding.

## Where the keys go

The mode chip at the bottom left says where the keys go: `TREE`, `CONSOLE`,
`INSERT` for the prompt, or `PASS` while a console takes every key. Keys go
there whatever a click left focused, but for a text field being typed in.

## Changing them

Change bindings in **Settings › Keys**, by action or by area. Keys are
recorded as you press them, and a binding that would collide with another is
pointed out. Each change is written into your keys file at once, its
comments kept.

The file is `~/.config/adroit/keys.toml` (or under `$XDG_CONFIG_HOME`, or
wherever `$ADROIT_KEYS` points). Adroit reads it again whenever it changes.

```toml
[tree]
"Ctrl+n" = "cursor.down"
"Ctrl+p" = "cursor.up"
"X" = "none"
"Ctrl+x" = "session.stop"

[console]
"Ctrl+c" = "console.send Ctrl+c"
```

Each table is an area of the window, and each entry binds keys to an action.
A binding replaces the one the area had for those keys; `"none"` takes the
keys away.

| Area | Holds the keys for |
| --- | --- |
| `global` | every area, after the area's own |
| `tree` | the tree, and the details panel after its own |
| `filer` | a file tree: the tree's files and the picker's |
| `details` | the details panel |
| `console` | the console while it shows a session |
| `prompt` | the prompt, before Neovim |
| `draft` | a new session not started yet |
| `viewer` | a file viewer |

A key is its modifiers and its name joined by `+`: `Ctrl+q`, `Shift+Tab`,
`Mod+p`. A sequence is keys separated by spaces: `g g`, `Ctrl+q h`. A
character carries its case, so `G` is <kbd>Shift+g</kbd>.
