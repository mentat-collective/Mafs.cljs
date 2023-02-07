# Mafs.cljs

A [Reagent][reagent-url] interface to the [Mafs][mafs-url] interactive 2d
math visualization library.

[![Build Status][build-status]][build-status-url]
[![License][license]][license-url]
[![cljdoc badge][cljdoc]][cljdoc-url]
[![Clojars Project][clojars]][clojars-url]
[![Discord Shield][discord]][discord-url]

[Mafs][mafs-url] is a JavaScript library for building declarative, interactive
2d mathematical scenes.

[Mafs.cljs][github-url] extends Mafs with a set of [Reagent][reagent-url]
components that make it easy to define Mafs constructions inside of a user
interface built with ClojureScript.

## Quickstart

Install `Mafs.cljs` into your Clojurescript project using the instructions at
its Clojars page:

[![Clojars Project][clojars]][clojars-url]

Or grab the most recent code using a Git dependency:

```clj
;; deps
{io.github.mentat-collective/mafs.cljs
  {:git/sha "$GIT_SHA"}}
```

Require `mafs` and any of the component namespaces that you'd like to use in
your ClojureScript namespace:

```clj
(ns my-app
  (:require [mafs.core :as mafs]
            [mafs.coordinates]
            [mafs.plot]
            [mafs.line]
            [mafs.debug]
            [mafs.vec]
            [reagent.core :as reagent]))
```

Construct a Mafs scene with a Cartesian coordinate plane, a plot of `Math/sin`
and a movable point constrained to the `x` axis that allows you to interactively
phase-shift the plot:

```clj
(reagent/with-let [!phase (reagent/atom [0 0])]
  [:<>
   [mafs/Mafs
    {:view-box {:x [-10 10] :y [-2 2]}
     :preserve-aspect-ratio false}
    [mafs.coordinates/Cartesian
     {:subdivisions 4
      :x-axis
      {:lines Math/PI
       :labels mafs/labelPi}}]
    [mafs.plot/OfX
     {:y (fn [x]
           (let [shift (first @!phase)]
             (Math/sin (- x shift))))}]
    [mafs/MovablePoint
     {:atom !phase
      :constrain "horizontal"}]]
   [:pre
    (str "Phase shift: " (first @!phase))]])
```

![2023-01-26 10 56 58](https://user-images.githubusercontent.com/69635/214912521-11db5419-8271-46dc-8444-91438ab32948.gif)

See the project's [interactive documentation notebook](https://mafs.mentat.org)
for many more guides and examples.

## Interactive Documentation via Clerk

The project's [interactive documentation](https://mafs.mentat.org) was
generated using Nextjournal's [Clerk](https://github.com/nextjournal/clerk). If
you'd like to edit or play with the documentation, you'll need to install

- [node.js](https://nodejs.org/en/)
- The [clojure command line tool](https://clojure.org/guides/install_clojure)
- [Babashka](https://github.com/babashka/babashka#installation)

Once this is done, run this command:

```sh
bb clerk-watch
```

This should open a browser window to `http://localhost:7777` with the contents
of the documentation notebook. Any edits you make to `dev/mafs/notebook.clj`
will be picked up and displayed in the browser on save.

## Thanks and Support

To support this work and my other open source projects, consider sponsoring me
via my [GitHub Sponsors page](https://github.com/sponsors/sritchie). Thank you
to my current sponsors!

I'm grateful to [Clojurists Together](https://www.clojuriststogether.org/) for
financial support during this library's creation. Please consider [becoming a
member](https://www.clojuriststogether.org/developers/) to support this work and
projects like it.

## License

Copyright © 2022-2023 Sam Ritchie.

Distributed under the [MIT License](LICENSE). See [LICENSE](LICENSE).

[build-status-url]: https://github.com/mentat-collective/mafs.cljs/actions/workflows/kondo.yml
[build-status]: https://github.com/mentat-collective/mafs.cljs/actions/workflows/kondo.yml/badge.svg?branch=main
[cljdoc-url]: https://cljdoc.org/d/org.mentat/mafs.cljs/CURRENT
[cljdoc]: https://cljdoc.org/badge/org.mentat/mafs.cljs
[clojars-url]: https://clojars.org/org.mentat/mafs.cljs
[clojars]: https://img.shields.io/clojars/v/org.mentat/mafs.cljs.svg
[discord-url]: https://discord.gg/hsRBqGEeQ4
[discord]: https://img.shields.io/discord/731131562002743336?style=flat&colorA=000000&colorB=000000&label=&logo=discord
[license-url]: LICENSE
[license]: https://img.shields.io/badge/license-MIT-brightgreen.svg
[github-url]: https://github.com/mentat-collective/mafs.cljs
[reagent-url]: https://reagent-project.github.io/
[mafs-url]: https://mafs.dev
[clerk-url]: https://clerk.vision
