# The Fine Print — Setup, step by step

Written to be followed with the folder open in front of you. Nothing here
assumes you know what any of it means.

There are three sessions of work. You can stop between any of them.

- **Session one** — get the site running on your own computer. About 30 minutes.
- **Session two** — put it on the internet. About 30 minutes.
- **Session three** — publish the first article. About 20 minutes.

Two things to know before you start.

Anything in a `grey box` is something you type or paste. Type it exactly,
including full stops and dashes.

Nothing you do on your own computer can break the live website. The site only
changes when you deliberately push it. So experiment freely.

---

# SESSION ONE — Get it running on your computer

## Step 1. Install Node.js

Node is the engine that turns your writing into web pages. You install it once
and never think about it again.

1. Go to **https://nodejs.org**
2. Click the big green button on the **left** — the one marked **LTS**.
   LTS means "long term support", which is the stable one.
3. Open the file that downloads. Click Next through the installer, accept the
   licence, and leave every setting as it is.
4. When it finishes, restart your computer. This matters — Windows needs the
   restart to notice Node exists.

## Step 2. Put the site folder somewhere sensible

1. Find the file `the-fine-print-site.zip` in your Downloads.
2. Right-click it → **Extract All** → choose a location.
   I suggest `C:\Users\<your name>\Documents\fine-print`
3. Inside, you will find a folder called `site`. That folder **is** your
   website. Everything lives in there.

## Step 3. Open a terminal in that folder

A terminal is a window where you type instructions instead of clicking. You
will use about four commands in total, ever.

1. Open the `site` folder in File Explorer.
2. Click once in the address bar at the top, so the path highlights.
3. Type `cmd` and press Enter.

A black window opens, already pointed at the right folder. That is the whole
trick.

## Step 4. Install the site's parts

In that black window, type this and press Enter:

```
npm install
```

It will print a great deal of text for a minute or two. Some of it will be
warnings in yellow. Ignore all of it. When you get your cursor back and it has
stopped moving, it worked.

*If it says `npm is not recognised`* — Node did not install properly, or you
skipped the restart. Restart and try again.

## Step 5. Look at your website

Type this and press Enter:

```
npm run dev
```

It will print something like `Local: http://localhost:4321`.

Open your browser and go to **http://localhost:4321**

There it is. The Fine Print, with your name under the masthead and the millet
article sitting on the front page. Click into it. Click About. Click Contact.

This is running on your own machine only. Nobody else can see it.

**To stop it:** click on the black window and press `Ctrl` and `C` together.
**To start it again:** repeat Steps 3 and 5.

Leave it running while you work. Every time you save a file, the browser
updates itself within a second.

---

# SESSION TWO — Put it on the internet

## Step 6. Get your contact form working

Right now the contact form looks fine but goes nowhere.

1. Go to **https://web3forms.com**
2. Type your email address into the box on the front page and submit.
3. They will email you an **Access Key** — a long string of letters, numbers
   and dashes. Copy it.
4. In your `site` folder, open `src` → `pages` → `contact.astro`
   Open it with **Notepad** (right-click → Open with → Notepad).
5. Near the top you will see a line like:

   ```
   const ACCESS_KEY = 'PASTE_YOUR_WEB3FORMS_ACCESS_KEY_HERE';
   ```

   Replace the words between the quote marks with your key. Keep the quote
   marks. It should end up looking like:

   ```
   const ACCESS_KEY = 'a1b2c3d4-e5f6-7890-abcd-ef1234567890';
   ```

6. Save and close.

Test it: go to http://localhost:4321/contact and send yourself a message.

## Step 7. Install the display font (optional but worth it)

The headings currently fall back to a substitute. The real face is Redaction,
and it is free.

1. Go to **https://www.redaction.us**
2. Download the font family.
3. From what downloads, find these two files:
   `Redaction-Regular.woff2` and `Redaction_35-Regular.woff2`
4. Copy them into your `site` folder → `public` → `fonts`

Refresh your browser. The headings change.

*If you cannot find `.woff2` files* — skip this. The site looks perfectly good
without it.

## Step 8. Install GitHub Desktop

This is the app that moves your work from your computer to the internet. It
does with buttons what would otherwise need typed commands.

1. Go to **https://desktop.github.com** and install it.
2. Open it and sign in with your GitHub account (`achintyarup-lgtm`).

## Step 9. Turn your folder into a repository

"Repository" just means a folder GitHub is keeping track of.

1. In GitHub Desktop: **File** → **Add local repository**
2. Click **Choose**, and select your `site` folder.
3. It will say the folder is not a repository, and offer to **create one**.
   Click that.
4. Name: `fine-print`. Leave everything else alone. Click **Create repository**.

## Step 10. Publish it

1. At the bottom left you will see a box saying "Summary". Type:
   `First version of the site`
2. Click the blue **Commit to main** button.
3. At the top, click **Publish repository**.
4. **Important:** untick the box that says *Keep this code private*. It must
   be public — GitHub only hosts free websites from public folders. Nobody
   reads the code; they read the website.
5. Click **Publish repository**.

Your work is now on GitHub. It is not yet a website.

## Step 11. Switch the website on

1. Go to **https://github.com/achintyarup-lgtm/fine-print**
2. Click **Settings** (top right of the repository, with a cog).
3. In the left menu, click **Pages**.
4. Under **Build and deployment**, find **Source**, and change the dropdown
   from *Deploy from a branch* to **GitHub Actions**.

That is the entire configuration.

## Step 12. Wait, then look

1. Click the **Actions** tab at the top of the repository.
2. You will see a job running with a yellow dot. It takes two or three minutes.
   Yellow means working, green tick means done, red cross means a problem.
3. When it goes green, go back to **Settings** → **Pages**. Your address is at
   the top:

   `https://achintyarup-lgtm.github.io/fine-print`

Open it. That is your website, live, readable by anyone in the world.

**If the page loads but looks like plain unstyled text**, one line needs
changing. Open `astro.config.mjs` in Notepad and remove the `//` from the start
of the `base` line so it reads:

```
  base: '/fine-print',
```

Save, then commit and push again (Step 16 explains how).

## Step 13. Your own domain

Skip this if you are happy with the github.io address for now.

1. Log into **GoDaddy**, find `achintyarupray.com`, open **DNS Management**.
2. **Add a record:**
   - Type: **CNAME**
   - Name: `fineprint`
   - Value: `achintyarup-lgtm.github.io`
   - TTL: leave as is
3. Save.
4. Back on GitHub → **Settings** → **Pages** → **Custom domain**, type
   `fineprint.achintyarupray.com` and click Save.
5. Wait. This can take anywhere from ten minutes to a few hours — that is DNS,
   not anything you did.
6. When the warning disappears, tick **Enforce HTTPS**.

Then open `astro.config.mjs` in Notepad and make sure the site line reads:

```
  site: 'https://fineprint.achintyarupray.com',
```

## Step 14. Comments

1. Repository → **Settings** → scroll to **Features** → tick **Discussions**.
2. Go to **https://github.com/apps/giscus** and click Install. Choose your
   `fine-print` repository.
3. Go to **https://giscus.app** and scroll to the form.
   - Repository: `achintyarup-lgtm/fine-print`
   - Page ↔ Discussions mapping: choose **pathname**
   - Discussion category: choose **Announcements**
4. Scroll down to the box of code it generates. Find these four values:
   `data-repo`, `data-repo-id`, `data-category`, `data-category-id`
5. Open `src` → `components` → `Comments.astro` in Notepad and paste those
   four values into the matching lines at the top.
6. Save.

---

# SESSION THREE — Publish an article

## Step 15. How writing works here

Articles live in `src` → `content` → `blog`. Each article is one file.

The millet piece is already there, as
`why-the-government-loves-millets.mdx`.

Open it in Notepad. The top of the file looks like this:

```
---
title: "Why the Government Loves Millets But Won't Buy Them"
standfirst: "Millets carry a higher support price than paddy..."
date: "2026-08-09"
draft: false
---
```

That block controls the headline, the line beneath it, and the date. Change
`draft: false` to `draft: true` and the piece vanishes from the site until you
change it back. That is how you work on something unfinished.

Below that block, it is ordinary writing. `##` at the start of a line makes a
subheading. `*word*` makes italics. `**word**` makes bold. That is nearly all
of it.

**To write a new article:** copy the millet file, rename it — the filename
becomes the web address, so `marichjhapi-inquiry.mdx` becomes
`/marichjhapi-inquiry` — change the block at the top, and replace the text.

## Step 16. Put a change live

Three clicks, every time.

1. Open **GitHub Desktop**. It has already noticed what you changed and lists
   it on the left.
2. Bottom left, type a short note to yourself: `Added the Marichjhapi piece`
3. Click **Commit to main**, then **Push origin** at the top.

Wait two minutes. The site updates itself.

That is the whole publishing process, forever.

## Step 17. Adding your infographics

1. Put your finished artwork into `src` → `assets`, named like
   `millet-01-two-plates.png`
2. Open the article file in Notepad. Near the top there is a block that begins
   `{/*` and ends `*/}` containing lines like:

   ```
   import patTrain from '../../assets/millet-02-train.png';
   ```

   Those symbols mean "ignore this". Delete the `{/*` and `*/}` around the
   images you have actually added, and the imports switch on.

3. Further down the article, each picture has a similar commented-out block
   starting `<Infographic`. Remove the `{/*` and `*/}` around it and the
   picture appears.

4. Adjust the `x` and `y` numbers to move each label. They are percentages —
   `x: 50, y: 50` puts a label dead centre. Save, look at the browser, nudge,
   repeat.

Remember the rule: **no lettering inside the artwork.** The numbers go in as
text so they stay sharp on a phone, and so a Bengali version later needs no
new painting.

---

# When something goes wrong

**The black window shows red text.** Read the last line only. It usually names
the file and the line number. Nine times out of ten it is a missing quote mark
or bracket from an edit.

**The site works locally but not live.** Check the **Actions** tab on GitHub. A
red cross there will tell you which step failed.

**Everything is broken and you do not know why.** In GitHub Desktop, click
**History**, right-click the last version that worked, and choose **Revert**.
That undoes it. Nothing is ever permanently lost.

**You would rather someone else did it.** Open the `site` folder in Claude Code
and describe what you want in plain English. It can make the edits, commit and
push for you.

---

# What to do later, not now

**An email list.** GitHub cannot send email. When you want one, sign up at
buttondown.email — free to 100 subscribers — and switch on its RSS-to-email
setting pointed at `https://fineprint.achintyarupray.com/rss.xml`. New articles
then go out automatically. Given how the Hooghly story travelled, do this
before the third article rather than after.

**Bengali.** Nothing in the setup blocks it. The fonts, the folder structure
and the infographic labels are all ready for a second language when you want it.
