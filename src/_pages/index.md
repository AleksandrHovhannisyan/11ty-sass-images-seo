---
permalink: /
---

# 11ty-sass-images-seo

> The four ingredients to an awesome static site.

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

## Images

Below is an example of a fully optimized and responsive image. Remote and local images are supported out of the box.

{% image 'https://images.unsplash.com/photo-1591160690555-5debfba289f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80' 'A golden retriever puppy lies obediently on its front paws and looks at the camera.' %}
