# Product Catalog Repository Instructions

## GitHub Repository
Remote: https://github.com/washaaaaaaa/product-catalog
Branch: `master`

---

## 1. Pull latest changes
Use this before you start working to sync your local copy with GitHub.

```bash
cd "d:\Product catalog website design"
git checkout master
git pull origin master
```

If you are working on a feature branch, replace `master` with your branch name.

---

## 2. Add or update content
### Add a new item
1. Open `src/app/App.tsx`.
2. Find the `categories` object.
3. Add a new object inside the correct category array.

Example:
```ts
categories.drinkware.push({
  title: 'New Product Name',
  subtitle: 'Short description',
  image: imageFor('drinkware/New Product Image', cardImages.tumblers),
});
```

### Update item details
1. In `src/app/App.tsx`, locate the category item.
2. Update `title`, `subtitle`, or `image` values.

---

## 3. Change or add pictures
### Add image files
1. Put images under `src/assets/images/<category>/`.
2. For example, drinkware images go into `src/assets/images/drinkware/`.
3. If you want slideshow sample images, put them in `src/assets/images/<category>/sample/`.

### Use the image in `App.tsx`
Use the same path key in `imageFor()` as the file path without the extension.

Example:
```ts
image: imageFor('drinkware/05 - 350mL Egg Mug', cardImages.tumblers)
```

If the image file is `src/assets/images/drinkware/05 - 350mL Egg Mug.png`, the key is:
`drinkware/05 - 350mL Egg Mug`

---

## 4. Stage and commit changes
After editing code or adding images:

```bash
git add src/app/App.tsx src/assets/images/<category>/*
# or git add . to include all changed files

git commit -m "Add/update product items and images"
```

---

## 5. Push updates to GitHub

```bash
git push origin master
```

If you are on a branch:

```bash
git push origin your-branch-name
```

---

## 6. Deploy to Netlify
### If Netlify is already connected to the GitHub repo
1. Push your changes to GitHub.
2. Netlify will automatically trigger a deploy if continuous deployment is enabled.

### Manual deploy from Netlify dashboard
1. Go to https://app.netlify.com.
2. Open your site from the dashboard.
3. Click **Deploys**.
4. Click **Trigger deploy** > **Deploy site**.

### Recommended build settings
- Build command: `npm run build`
- Publish directory: `dist`

---

## 7. Tips
- Always `git pull` before starting work.
- Keep item titles clean and consistent.
- Use `src/assets/images/<category>/sample/` for slideshow or gallery assets.
- If images do not appear, confirm the path with `imageFor()` and ensure the file name matches exactly.
