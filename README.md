# 11ty-sass-images-seo

> **Note**: While this starter is MIT licensed, **please feel free to license your website differently**. The only situation where I'd ask you preserve the MIT license is if you want to create a variation/spinoff of the starter _itself_.

This is an opinionated starter for [11ty](https://github.com/11ty/eleventy) that includes:

- Pre-configured 11ty directories (input, output, data, includes, layouts) and custom filters.
- A separate directory for 11ty-specific configs: filters, shortcodes, etc.
- Basic image optimization using the official [`@11ty/eleventy-img`](https://github.com/11ty/eleventy-img) plugin.
- Sass compilation, including partials for breakpoints, mixins, functions, and CSS resets.
- Basic SEO enhancements: essential meta tags and a programmatically generated `sitemap.xml` and `robots.txt`.
- Auto-generated favicon link tags from a single source image.
- Convenient `package.json` scripts for develop, production, and linting.
- Global configuration files (pre-commit/checkout hooks, line ending normalization, linters, VS Code settings).

This starter template does not:

- Generate any output CSS. It only sets up basic Sass boilerplate for you to customize.
- Make any assumptions about your build pipeline or tooling (e.g., gulp).
- Make any assumptions about your client-side JavaScript bundler or pipeline.
- Configure a Markdown processor (you can install `markdown-it` if you need it).
- Get in your way.

Most of this template serves as the foundation for [my personal website](https://github.com/AleksandrHovhannisyan/aleksandrhovhannisyan.com).

## Table of Contents

<!-- no toc -->
- [Installation](#installation)
- [Checklist](#checklist)
- [Project Structure](#project-structure)
  - [`src`](#src)
  - [`11ty`](#11ty)
- [Image Optimization](#image-optimization)
- [`package.json` Scripts](#packagejson-scripts)
- [Custom Front Matter](#custom-front-matter)
- [CSS (Sass)](#css-sass)
- [Editor Settings](#editor-settings)
- [Linting](#linting)

## Installation

1. Click the `Use this template` button.

![The header for this repo, showing various tabs and action buttons. The green Use this template button has a red focus ring around it.](https://user-images.githubusercontent.com/19352442/143769374-87b9ec66-f95f-439e-a7b4-a9f6e02a0e9d.png)

2. Install dependencies with `yarn` (if you prefer another package manager, delete `yarn.lock`).

3. Follow [the checklist](#checklist).

## Checklist

The following tasks are **required**:

- [ ] Fill out [`src/_data/site.js`](./src/_data/site.js) with your site's metadata and URL.
- [ ] Update [`package.json`](./package.json) with your site's info.
- [ ] Replace the favicon in [`src/assets/images/favicon`](./src/assets/images/favicon/) with your site's favicon.

**Optionally**, you may also want to customize:

- [ ] The [11ty directory config](./11ty/constants/dir.js).
- [ ] The template format and engine in [`.eleventy.js`](./.eleventy.js).
- [ ] The [image shortcode](./11ty/shortcodes/image.js).
- [ ] Any [ESLint](./.eslintrc.json), [Prettier](./.prettierrc), or [Stylelint](./.stylelintrc.json) linter rules.
- [ ] Any filters, like the custom slugify function.
- [ ] Your project's [style tokens, such as media query breakpoints](./src/assets/styles/_tokens.scss).
- [ ] The browserslist config in [`package.json`](./package.json), for client-side bundlers.

## Project Structure

### `src`

11ty input directory containing all of the site's files, templates, assets, etc.

- `_data`: global site data.
- `_includes`: partials/includes.
- `_layouts`: site layouts. A default layout already exists.
- `_pages`: site pages. Each page uses the default layout.
- `assets`: images, fonts, CSS, etc.
- `robots.liquid`: writes a `robots.txt` to your site.
- `sitemap.liquid`: creates a basic sitemap for your site.

### `11ty`

Eleventy-specific configurations for filters, collections, general utilities, etc. Import these into your `.eleventy.js` to configure Eleventy. You are encouraged to write tests for any core utilities (e.g., filters).

## Image Optimization

This starter includes basic image optimization using the official [`@11ty/eleventy-img`](https://github.com/11ty/eleventy-img) plugin. The image shortcode can be invoked with a source-relative path to your target image and any other arguments you want to supply. See [`./11ty/shortcodes/image.js`](./11ty/shortcodes/image.js).

For a more advanced setup, see my tutorial on [lazily loading images in Eleventy](https://www.aleksandrhovhannisyan.com/blog/eleventy-image-lazy-loading/).

## `package.json` Scripts

- `clean`: purges the build output directory.
- `debug:html`: starts 11ty in debug mode.
- `serve`: serves the site's HTML and CSS in development mode.
- `build`: builds the site's HTML and CSS for production.
- `lint`: runs all linters to detect any issues.
- `lint:fix`: runs all linters and auto-fixes any issues (if possible).

## Custom Front Matter

Out of the box, this starter will recognize the following custom front matter variables if they are defined:

| Key                      | Type                                                                  | Description                                                                                                                                                                                                                                                                                                                      | Default                       |
| ------------------------ | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| `title`                  | `string`                                                              | Page-specific title. Used by meta title and social previews.                                                                                                                                                                                                                                                                     | `site.title`                  |
| `description`            | `string`                                                              | Page-specific description. Used for meta description and social previews.                                                                                                                                                                                                                                                        | `site.description`            |
| `keywords`               | `string[]`                                                            | Array of page-specific keywords. Used for meta keywords.                                                                                                                                                                                                                                                                         | `site.keywords`               |
| `stylesheets`            | `string[]`                                                            | Array of `href`s to stylesheets needed by the current page. Must be root-relative paths to the final output files (e.g., `/assets/styles/**`—see example in `default.html`). If these files are not part of your Sass build pipeline, you are responsible for passthrough-copying them.                                          | `['/assets/styles/main.css']` |
| `scripts`                | `string[]`                                                            | Array of module script `src`es to load. Must be root-relative paths to the final output files (e.g., `/assets/scripts/**`). You will need to output these yourself, either with passthrough copy or a bundler (esbuild, webpack, etc.). Note that module scripts are deferred by default and are safe to locate in the `<head>`. | `[]`                          |
| `preloads`               | `{ as: string; type: string; href: string; crossorigin?: boolean }[]` | [Preload optimizations](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/preload) for the current page.                                                                                                                                                                                                              | `[]`                          |
| `openGraph.image`        | `string`                                                              | Path to a social preview image for the current page. If specified, the image will be used for the `og:image` and `twitter:image` meta tags.                                                                                                                                                                                      |                               |
| `openGraph.type`         | `string`                                                              | The type of web page. For articles, consider using `"article"`.                                                                                                                                                                                                                                                                  | `"website"`                   |
| `openGraph.title`        | `string`                                                              | An optional override for the OpenGraph preview title.                                                                                                                                                                                                                                                                            | Page title                    |
| `openGraph.description`  | `string`                                                              | An optional override for the OpenGraph preview description.                                                                                                                                                                                                                                                                      | Page description              |
| `openGraph.twitter.card` | `"summary"\|"summary_large_image"`                                  | The type of [Twitter card](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards) to use.                                                                                                                                                                                                       | `"summary"`                   |
| `excludeFromSitemap`     | `boolean`                                                             | If `true`, excludes the current page from the sitemap. See `sitemap.liquid`.                                                                                                                                                                                                                                                     |                               |
| `noindex`                | `boolean`                                                             | If `true`, adds a hint to the `<head>` to discourage search engine crawling for the page. Consider using this for tag pages and other auto-generated pages that have lots of duplicate content or content that you do not want to have indexed.                                                                                  |                               |

## CSS (Sass)

This starter uses Sass (SCSS) to process CSS. It is preconfigured to listen for changes to Sass partials and recompile them into a main stylesheet that is then included in [the default layout](./src/_layouts/default.html).

By default, this project contains partials for:

- Tokens
- Mixins
- Functions

You are free to add or delete any partials you need.

## Editor Settings

See the [`.vscode`](./.vscode/) directory for configurations related to Visual Studio Code:

- [`settings.json`](./.vscode/settings.json): workspace settings.
- [`extensions.json`](./vscode/extensions.json): recommended workspace extensions.

Feel free to delete this folder if you do not use VS Code.

## Linting

This template supports linting out of the box for JavaScript and Sass to enable you to quickly build your site without worrying about syntax issues and formatting. It uses the following linters:

- ESLint ([`.eslintrc.json`](./.eslintrc.json)) and Prettier ([`.prettierrc`](./.prettierrc))
- Stylelint ([`.stylelintrc.json`](./.stylelintrc.json))

Relevant NPM packages:

- `eslint`
- `prettier`
- `eslint-config-prettier`
- `eslint-plugin-prettier`
- `stylelint`
- `stylelint-scss`
- `husky`
- `lint-staged`

See [`.vscode/settings.json`](./.vscode/settings.json) for the auto-formatting rules (if you use VS Code).
