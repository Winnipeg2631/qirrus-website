# Firebase Studio

This is a Next.js starter project for Firebase Studio. To get started, take a look at `src/app/page.tsx`.

---

## How to Deploy Your Website

This guide will walk you through deploying your website using Firebase App Hosting. This process uses GitHub to store your code and automates deployments.

### Step 1: Create a GitHub Repository

1.  Go to [GitHub.com](https://github.com) and log in.
2.  Click the **+** icon in the top-right and select **"New repository"**.
3.  Name your repository (e.g., `my-qirrus-site`).
4.  Choose "Public" or "Private".
5.  **Important:** Leave all the "Initialize this repository with" options unchecked.
6.  Click **"Create repository"**.

### Step 2: Connect Your Local Project to GitHub

After creating the repository, GitHub will show you a page with commands. You'll run these from your computer's terminal inside your project folder.

*(If you're unsure how to open a terminal, search for "Terminal" on Mac or "Command Prompt" or "PowerShell" on Windows).*

Copy and paste these commands one at a time, and press Enter after each one. Replace the example URL with your own repository's URL.

```bash
# This sets up Git in your project folder
git init -b main

# This adds all your project files to Git
git add .

# This saves a snapshot of your files
git commit -m "Initial commit"

# This links your local project to your new GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git

# This sends your files to GitHub
git push -u origin main
```

After this, your code will be on GitHub!

### Step 3: Connect to Firebase App Hosting

1.  Go back to the [Firebase Console](https://console.firebase.google.com/).
2.  Navigate to **App Hosting**.
3.  Click **"Get started"**.
4.  When asked to connect to GitHub, you should now see your new repository in the list. Select it.
5.  Follow the remaining on-screen instructions to authorize Firebase and create your backend.

Firebase will now automatically build and deploy your site. Any time you `git push` new changes to your `main` branch, Firebase will automatically deploy the new version for you.
