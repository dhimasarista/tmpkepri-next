# CATOPUMA design direction

Two themes live side by side:

- **App (`app/app/*`)**: the original shadcn neutral tokens, sidebar and header exactly as first delivered. Only chart colors use the reef palette.
- **Landing pages, login, 404, error**: the `.reef` theme, a soft, rounded layout in the owner's five-color reef palette plus white. Not brutalist.

The palette was supplied by the owner as an image. The hex values were read off it by eye, so replace them in `app/globals.css` if you have the exact ones.

## Palette

| Token  | Hex       | Used for                                                                                                          |
| ------ | --------- | ----------------------------------------------------------------------------------------------------------------- |
| Ink    | `#051A28` | Text, code blocks, dark theme background                                                                          |
| Deep   | `#033D52` | Primary buttons, footer, dark panels, dark theme cards                                                            |
| Signal | `#D93B00` | Highlight blocks, one key tile per screen. Supplied `#DC3C00`, darkened one step so white text passes AA (4.59:1) |
| Teal   | `#0086A0` | Large type, chart series, decorative blocks. White on teal is 4.27:1, so never small text                         |
| Cyan   | `#0DB1CA` | Hero bands, active states, accent text on dark. Ink text on cyan is 6.9:1                                         |
| White  | `#FFFFFF` | Page background                                                                                                   |

Muted surfaces and muted text are `color-mix` blends of ink or cyan with white, not extra colors.

## Pages

There is one home page. Its hero follows a reference supplied by the owner: a heavy three-line headline, a round secondary button and a large pill button on the left, and a cluster of soft glass cards around one big card on the right. The cluster is laid out on a 300 x 250 grid scaled with container query units, and its numbers are labeled sample data.

| Route      | Concept                                                                                          |
| ---------- | ------------------------------------------------------------------------------------------------ |
| `/`        | Hero from the reference, fact blocks, contents cards                                             |
| `/about`   | Centered headline, photo mosaic with two stat cards, story band with four figures, values, tools |
| `/contact` | Large headline, three ways to reach us, bordered form card                                       |

The contact page follows a second owner-supplied reference. Phone number, office address and social icons from that reference are left out because there is no real data for them. The form composes a `mailto:` link.

## Header and footer

- Header: follows an owner-supplied reference. Transparent with no bottom line, so it blends into the page. Logo left, Home / About / Contact in the center, Instagram and LinkedIn icons plus a four-square icon on the right, separated by thin vertical rules. The four-square icon opens a dropdown with Log in and Dashboard (plus the three page links on small screens). Once the page scrolls it gets a blurred translucent background. It is sticky, not floating, and overlaps the top of the page, so the first section of each landing page adds its own top padding. The manual theme toggle is not in this header, so the theme follows the system.
- Instagram and LinkedIn point at the platform home pages. They are placeholders in `components/landing/nav-links.ts` until the real profile URLs are set.
- Footer: the owner-supplied harbor photograph (`public/assets/footer-city.webp`, converted from the original PNG). The footer sky starts at the page background and the top of the photo is faded out with a CSS mask, so the footer joins the page above without an edge. In the dark theme the photo is dimmed. Keep the last section of every landing page on the plain background so the seam stays invisible.

## Type

Bricolage Grotesque for headings (`font-display`), Geist for text and Geist Mono for code, the latter two as in the original project.

## Content rules

- Counts and claims come from the repo.
- Dashboard and analytics numbers are labeled sample data (`lib/sample-data.ts`).
- Screens with no backend say so on the page.
- The three photographs on `/about` are placeholders (laptops and code, no faces). The footer photo was supplied by the owner.
- Every figure on `/about` is a count from the repository. The reference's percentages were not copied.
- The restored sidebar and header still contain mock data and links to routes that do not exist (`/app/tasks`, `/app/calendar`, `/app/team`, `/app/help`). They were restored as requested and not changed.
