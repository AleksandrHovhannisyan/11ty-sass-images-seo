# 11ty-starter-sass-optimized-images

This is an opinionated starter for [11ty](https://github.com/11ty/eleventy) that includes:

- Pre-configured 11ty directories (input, output, data, includes, layouts).
- A separate directory for 11ty-specific configs: filters, shortcodes, etc.
- Basic image optimization using the official [`@11ty/eleventy-img`](https://github.com/11ty/eleventy-img) plugin.
- Sass, including dedicated partials for breakpoints, mixins, functions, and CSS resets.
- Basic SEO enhancements: essential meta tags and a programmatically generated `sitemap.xml` and `robots.txt`.
- Auto-generated favicon link tags from a single source image.
- Global configuration files (pre-commit/checkout hooks, line ending normalization, linters).
- VS Code workspace settings and recommended extensions.

This starter template does not:

- Include any output CSS by default. Only basic Sass boilerplate, like mixins/breakpoints.
- Make any assumptions about your build pipeline or tooling (e.g., gulp).
- Make any assumptions about your JavaScript bundler or pipeline.
- Configure a Markdown processor (you can install `markdown-it` if you need it).
- Include any extraneous plugins.
- Get in your way.

Most of this template serves as the foundation for [my personal website](https://github.com/AleksandrHovhannisyan/aleksandrhovhannisyan.com).

## Table of Contents

<!-- no toc -->
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

## Checklist

The following tasks are **required**:

- [ ] Fill out [`src/_data/site.js`](./src/_data/site.js) with your site's metadata and URL.
- [ ] Replace the favicon in [`src/assets/images/favicon`](./src/assets/images/favicon/) with your site's favicon.

**Optionally**, you may also want to customize:

- [ ] The [11ty directory config](./11ty/constants/dir.js).
- [ ] The template format and engine in [`.eleventy.js`](./.eleventy.js).
- [ ] The [image shortcode](./11ty/shortcodes/image.js).
- [ ] Any [ESLint](./.eslintrc.json), [Prettier](./.prettierrc), or [Stylelint](./.stylelintrc.json) configs.
- [ ] Any filters, like the custom slugify function.
- [ ] Your project's [media query breakpoints](./src/assets/styles/partials/_breakpoints.scss).
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

- `title`: page-specific title. Defaults to site title. Used for meta title and social previews.
- `description`: page-specific description. Defaults to site keywords. Used for meta description and social previews.
- `keywords`: page-specific keywords. Defaults to site keywords. Used for meta keywords.
- `stylesheets`: array of `href`s to stylesheets required by the current page.
- `thumbnail`: an optional path to a social preview image for the current page. If specified, the image will be used for the `og:image` and `twitter:image` meta tags.
- `excludeFromSitemap`: if `true`, excludes the current page from the sitemap.
- `noindex`: if `true`, adds a hint to the head to discourage search engine crawling for the current page.

## CSS (Sass)

This starter uses Sass (SCSS) to process CSS. It is preconfigured to listen for changes to Sass partials and recompile them into a main stylesheet that is then included in [the default layout](./src/_layouts/default.html).

By default, this project contains partials for:

- Breakpoints
- Mixins
- Functions

You are free to add or delete any partials you need.

## Editor Settings

See the [`.vscode`](./.vscode/) directory for configurations related to Visual Studio Code:

- [`settings.json`](./.vscode/settings.json): workspace settings.
- [`extensions.json`](./vscode/extensions.json): recommended workspace extensions.

Feel free to delete this folder if you do not use VS Code.

## Linting

This template supports linting out of the box for JavaScript and Sass to enable you to quickly prototype your site without worrying about syntax issues and formatting. It uses the following linters:

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
