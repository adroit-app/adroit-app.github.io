---
title: Pull requests and issues
description: See a GitHub repository's open pull requests and issues in the tree, read them in a tab, and start a session on one.
---

A git workspace with a remote on GitHub lists **Pull Requests** and
**Issues** in the tree, after what runs in it, while the GitHub CLI `gh` is
installed on its work machine. Adroit reads them through `gh`, as the login
`gh` uses there sees them; it keeps no GitHub credentials of its own.

```text
api
├── Sessions
├── Terminals
├── Pull Requests 3
│   ├── ✓ Add OAuth login              alice
│   ├── ✗ Retry flaky upload test      bob
│   └── ◌ Draft: new rate limiter      carol
├── Issues 12
│   └── …
└── main
```

Both headings start folded and show how many are open on GitHub, read again
every few minutes. Unfolded, each lists what is open, by title and who opened
it, a pull request marked with how its checks stand and drawn dim while it is
a draft. The list is read again every minute while it is open. When `gh` is
not logged in or GitHub cannot be reached, the heading says so.

## Reading one

Opening a row shows it in a tab of its own, as GitHub shows its conversation:
its title, how it stands, who opened it and, of a pull request, the branches
it merges; then its body and every comment and review, oldest first, each
drawn as a Markdown document is, images included. A pull request's tab then
shows the files it changes with their diffs, and the checks run on its head,
those that failed first.

The tab is read again every minute while it is shown. <kbd>g x</kbd> on its
row or in its tab opens it on GitHub in your browser instead.

With a row selected, the [details panel](/docs/details/) tells about it: its
labels, assignees and milestone, and of a pull request its branches, review,
and checks. A session's own Overview shows the pull request open for its
worktree's branch.

## Starting a session on one

<kbd>n</kbd> on a row opens a new session on it, with its first prompt
already naming it, left for you to finish and send:

- an issue's in the repository's checkout;
- a pull request's in a new worktree fetched from GitHub: on the pull
  request's own branch, tracking the remote's, when it comes from the
  repository, or at its head on a branch named after its number when it comes
  from a fork.

## Cloning from GitHub

The picker looks through GitHub for a repository to clone: type `github:`,
choose an owner, and choose a repository. See
[Getting started](/docs/getting-started/#clone-a-repository).
