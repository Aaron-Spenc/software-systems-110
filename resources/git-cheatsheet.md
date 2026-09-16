# Git Cheat Sheet

This guide contains the Git commands used most often in Software Systems.

---

# What is Git?

Git is a version control system that helps developers track changes to files and collaborate on projects.

---

# Clone a Repository

Downloads a copy of a repository from GitHub to your computer.

```bash
git clone <repository-url>
```

Example:

```bash
git clone https://github.com/username/software-systems-110.git
```

---

# Check Status

Shows the current state of your repository.

```bash
git status
```

Use this command often to see:

- Modified files
- New files
- Files ready to commit

---

# Add Changes

Adds files to the staging area.

Add all changed files:

```bash
git add .
```

Add a specific file:

```bash
git add README.md
```

---

# Create a Commit

Creates a snapshot of your changes.

```bash