# Changelog

## [unreleased]

## [0.3.0]

- #14:

  - Adds a `provided` dependency on SCI to `pom.xml`, so that cljdoc builds
    succeed.

  - Upgrades to Clerk version `fad499407d979916d21b33cc7e46e73f7a485e37` for the
    template and project docs notebook, along with a matching clerk-utils
    upgrade.

  - Remove `aliases` argument from `mafs.sci/install!`, as these won't work
    anymore with the new Clerk upgrade.

  - Fixes to docs in template

## 0.2.0

- #12 adds a `deps-new` template that sets up a basic Clerk project with
  `Mafs.cljs` installed as a dependency. [The template lives
  here](https://github.com/mentat-collective/Mafs.cljs/tree/main/resources/mafs/clerk).

- #7:

  - Renames the `mafs` namespace to `mafs.core` to prevent collisions with the
    `"mafs"` package import. I was hesitant to do this, but of course you can
    always alias `mafs.core` to `mafs` when you require it.

  - Upgrades mafs to 0.15.2, adding support for `:on-click` to the
    `mafs.core/Mafs` component.

  - Adds `mafs.sci` with SCI namespace objects for all namespaces, plus a
    `namespaces` map and a `config` for easy installation into SCI. The
    namespaces follows the patterns set by the
    https://github.com/babashka/sci.configs repo.

    - `mafs.sci/install!` allows the user to install `Mafs.cljs` into SCI's
      shared context with one mutating call.

  - Migrates the project over to `clerk-utils` and all of its new custom build
    stuff. This let me simplify development, update the README and DEVELOPING
    pages and kill my shadow-cljs.edn file. `user.clj` gets quite a bit simpler
    too.

  - Adds notes to the interactive docs guide about:

    - using the library with SCI and with Clerk

    - the required stylesheets, since basically nothing works without these!

  - Upgrades the docs notebook to the latest Clerk version.

## 0.1.0

First real release! Mafs.cljs has compatibility with almost everything in Mafs,
as explored in the interactive documentation notebook at
https://mafs.mentat.org.
