# Collaborating On This App

## Shared repository workflow

Use this workflow when your friend has write access to the same GitHub repository.

1. Add the GitHub remote once:

   ```bash
   git remote add origin https://github.com/YOUR-ACCOUNT/YOUR-REPOSITORY.git
   git remote -v
   ```

2. Update the default branch before starting work:

   ```bash
   git switch main
   git pull --ff-only origin main
   ```

   This clone currently has a local `master` branch. Rename it to `main` only if the GitHub repository uses `main`:

   ```bash
   git branch -M main
   git push -u origin main
   ```

3. Create a branch for each change:

   ```bash
   git switch -c feature/short-description
   ```

4. Test, commit, and publish the branch:

   ```bash
   yarn typecheck
   yarn lint
   git add .
   git commit -m "feat: describe the change"
   git push -u origin feature/short-description
   ```

5. Open a pull request into `main`. Ask your friend to review it, test it locally, and merge it only after the checks pass.

## Fork workflow

Use this workflow when you do not have write access to the original repository.

```bash
git clone https://github.com/YOUR-ACCOUNT/YOUR-FORK.git
cd twenty-app
git remote add upstream https://github.com/ORIGINAL-OWNER/ORIGINAL-REPOSITORY.git
git fetch upstream
git switch main
git pull --ff-only upstream main
git switch -c feature/short-description
```

Push the feature branch to your fork and open a pull request from your fork to the original repository:

```bash
git push -u origin feature/short-description
```

Keep the fork current before new work:

```bash
git fetch upstream
git switch main
git merge --ff-only upstream/main
git push origin main
```

## Repository settings

- Add your friend as a collaborator under **Settings > Collaborators** when using a shared repository.
- Protect `main` and require pull requests plus passing CI checks before merging.
- Do not share personal access tokens. Each person should authenticate with their own GitHub account or SSH key.
- Pull or fetch frequently and use descriptive branch names and commit messages.