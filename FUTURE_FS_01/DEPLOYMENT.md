# Deployment & Maintenance Guide

This guide explains how to push your portfolio to GitHub, deploy it seamlessly on Vercel, and maintain its content (like updating your resume and project links) in the future.

---

## 1. How to push the project to GitHub

1. **Initialize Git (if not already done):**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   ```

2. **Create a new repository on GitHub:**
   - Go to [GitHub](https://github.com/new).
   - Name your repository (e.g., `portfolio` or `FUTURE_FS_01`).
   - Leave it public and do not initialize with a README (since you already have one).
   - Click **Create repository**.

3. **Link your local project to GitHub and push:**
   ```bash
   git branch -M main
   git remote add origin https://github.com/Rishitha0851/<your-repo-name>.git
   git push -u origin main
   ```

---

## 2. How to deploy on Vercel

Vercel provides seamless hosting for React/Vite projects directly from your GitHub repository.

1. **Sign up / Log in to Vercel:**
   - Go to [Vercel](https://vercel.com/) and sign up using your GitHub account.

2. **Import your project:**
   - On the Vercel dashboard, click **Add New** > **Project**.
   - Find the repository you just pushed to GitHub and click **Import**.

3. **Configure the build:**
   - **Framework Preset**: Vercel will automatically detect **Vite**.
   - **Root Directory**: `./` (leave default)
   - **Build Command**: `npm run build` (leave default)
   - **Output Directory**: `dist` (leave default)

4. **Deploy:**
   - Click **Deploy**. Vercel will build and publish your site in a few minutes. 
   - Once finished, you will receive a live URL (e.g., `https://your-portfolio.vercel.app`).

---

## 3. How to update resume.pdf

Whenever you update your professional resume, follow these steps to reflect it on your live portfolio:

1. Locate your new resume PDF file.
2. Rename it exactly to `resume.pdf`.
3. Place it in the `public/` directory of this project:
   - File path: `FUTURE_FS_01/public/resume.pdf`
   - *Note: This replaces the old file.*
4. Commit and push the changes:
   ```bash
   git add public/resume.pdf
   git commit -m "Update resume PDF"
   git push origin main
   ```
5. If deployed on Vercel, Vercel will automatically trigger a new deployment and update your live site!

---

## 4. How to update project links in the future

To update your projects (titles, descriptions, tech stacks, or links):

1. Open the `Projects.jsx` file located at `src/components/Projects.jsx`.
2. Locate the `projectsData` array at the top of the file:
   ```javascript
   const projectsData = [
     {
       title: 'MediNova Smart Clinic',
       description: '...',
       tags: ['React', 'Node.js', 'MongoDB', 'WebRTC'],
       github: 'https://github.com/Rishitha0851',
       demo: 'https://medinova-smart-clinic.vercel.app/'
     },
     // ...
   ];
   ```
3. **To update a Live Demo:** Replace `'Coming Soon'` with your live deployment URL (e.g., `'https://your-new-app.vercel.app'`).
4. **To update a GitHub link:** Replace the `github` string with the correct repository URL.
5. Save the file, test locally (`npm run dev`), then commit and push to GitHub:
   ```bash
   git add src/components/Projects.jsx
   git commit -m "Update project links"
   git push origin main
   ```
