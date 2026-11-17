# EDS demo: hero, cards, accordion

These are the `blocks/` folder contents for an Adobe Edge Delivery Services project.
Add them to a fork of the official **aem-boilerplate**, which provides
`scripts/aem.js`, `scripts/scripts.js`, `styles/` and `head.html`.

## Setup steps

1. Open https://github.com/adobe/aem-boilerplate
2. Click **Use this template** -> **Create a new repository** (e.g. `eds-demo`).
3. Install the **AEM Code Sync** GitHub app on that repo: https://github.com/apps/aem-code-sync
4. Create a content source (Google Drive or SharePoint folder):
   - Edit `fstab.yaml` so `mountpoints` points to that folder URL.
   - Share the folder with the helix user listed in the "Getting started" tutorial on aem.live.
5. Clone and install the CLI:
   ```
   git clone https://github.com/<you>/eds-demo.git
   cd eds-demo
   npm install
   npm install -g @adobe/aem-cli
   ```
6. Copy the `hero`, `cards`, `accordion` folders from this demo into the repo's `blocks/` directory.
7. In your Drive/SharePoint folder, create a document named `index` and add content (see below).
8. Run `aem up` and open http://localhost:3000
9. `git add . && git commit -m "Add hero, cards, accordion" && git push`
10. Preview: `https://main--eds-demo--<github-user>.aem.page/`
    Live: `https://main--eds-demo--<github-user>.aem.live/` (after Publish in the Sidekick)

## Authoring tables (in the Google Doc / Word file)

The first cell of each table is the block name: `Hero`, `Cards`, `Accordion`.
Variants go in brackets, e.g. `Hero (left)`.

**Hero** (1 column)
| Hero |
|---|
| image + `# Heading` + paragraph + link |

**Cards** (2 columns, one row per card)
| Cards | |
|---|---|
| image | **Title** + description |
| image | **Title** + description |

**Accordion** (2 columns, one row per item)
| Accordion | |
|---|---|
| What is EDS? | Edge Delivery Services is ... |
| Why is it fast? | Plain HTML, CSS and JS from a CDN ... |

Separate sections with a horizontal rule (`---`).

## Checks
- `npm run lint`
- Lighthouse in Chrome DevTools on the `.aem.page` URL
- Keyboard test: Tab to each accordion item, Enter/Space to toggle
