---
permalink: /
---

# 11ty-starter-sass-optimized-images

This is an opinionated starter for [11ty](https://github.com/11ty/eleventy) that includes:

- Pre-configured 11ty directories (input, output, data, includes, layouts).
- A separate directory for 11ty-specific configs: filters, shortcodes, etc.
- Basic image optimization using the official `@11ty/eleventy-img` plugin.
- Sass, including dedicated partials for breakpoints, mixins, functions, and CSS resets.
- Basic SEO enhancements: essential meta tags and a programmatically generated `sitemap.xml` and `robots.txt`.
- Global configuration files (pre-commit/checkout hooks, line ending normalization, linters).
- VS Code workspace settings and recommended extensions.

This starter template does not:

- Include any output CSS by default. Only basic Sass boilerplate, like mixins/breakpoints.
- Make any assumptions about your build pipeline or tooling (e.g., gulp).
- Make any assumptions about your JavaScript bundler or pipeline.
- Configure a Markdown processor (you can install `markdown-it` if you need it).
- Include any extraneous plugins.
- Get in your way.

Most of this template serves as the foundation for [my personal website](https://github.com/AleksandrHovhannisyan/aleksandrhovhannisyan.com). No rights are reserved for this template; you are free to reuse everything that you see here.
