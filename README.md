# mafs.cljs

[![Build Status](https://github.com/mentat-collective/mafs.cljs/actions/workflows/kondo.yml/badge.svg?branch=main)](https://github.com/mentat-collective/mafs.cljs/actions/workflows/kondo.yml)
[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/mentat-collective/mafs.cljs/blob/main/LICENSE)
[![cljdoc badge](https://cljdoc.org/badge/org.mentat/mafs.cljs)](https://cljdoc.org/d/org.mentat/mafs.cljs/CURRENT)
[![Clojars Project](https://img.shields.io/clojars/v/org.mentat/mafs.cljs.svg)](https://clojars.org/org.mentat/mafs.cljs)

[Mafs][MAFS] is a JavaScript library for building declarative GUIs with many
different input types, like the one hovering on the right side of this page.
Supported inputs range from numeric sliders and color pickers to complex plugins
like this [Bezier curve
example](https://mafs.pmnd.rs/?path=/story/plugins-bezier--default-bezier).

[Mafs.cljs](https://github.com/mentat-collective/mafs.cljs) extends Mafs with a
set of [React][REACT] / [Reagent][REAGENT] components that make it easy to
synchronize the state of the GUI with a [ClojureScript
atom](https://clojure.org/reference/atoms).

<p align="center">
  <img width="283" alt="image" src="https://user-images.githubusercontent.com/69635/211684081-b28bb03e-c6fe-43a3-ad9b-f802901667bb.png">
</p>

Think of your GUI like an interactive, beautiful view onto your page's state.

## Quickstart

Install `Mafs.cljs` into your Clojurescript project using the instructions at
its Clojars page:

[![Clojars Project](https://img.shields.io/clojars/v/org.mentat/mafs.cljs.svg)](https://clojars.org/org.mentat/mafs.cljs)

Or grab the most recent code using a Git dependency:

```clj
;; deps
{io.github.mentat-collective/mafs.cljs
  {:git/sha "$GIT_SHA"}}
```

Require `mafs.core` in your namespace:

```clj
(ns my-app
  (:require [mafs.core :as mafs]
            [reagent.core :as reagent]))
```

Declare some state that you'd like to control with a GUI. Each entry's key
becomes its label, and Mafs infers the correct input from the value's type.

```clj
(defonce !synced
  (reagent/atom
   {:number 10
    :color {:r 10 :g 12 :b 4}
    :string "Hi!"
    :point {:x 1 :y 1}}))
```

Pass the atom to the `mafs/Controls` component via the `:atom` key to add its
entries to the Mafs panel hovering on the right, and bidirectionally bind its
state to the interactive state in the panel:

```clj
[mafs/Controls
 {:folder {:name "Quickstart"}
  :atom !synced}]
```

<p align="center">
  <img width="500" alt="image" src="https://user-images.githubusercontent.com/69635/211684473-cb933085-4a33-41c6-aeab-d95051257501.gif">
</p>

See the project's [interactive documentation notebook](https://mafs.mentat.org)
for more guides and examples.

## Interactive Documentation via Clerk

The project's [interactive documentation](https://mafs.mentat.org) was
generated using Nextjournal's [Clerk](https://github.com/nextjournal/clerk). If
you'd like to edit or play with the documentation, you'll need to install

- [node.js](https://nodejs.org/en/)
- The [clojure command line tool](https://clojure.org/guides/install_clojure)
- [Babashka](https://github.com/babashka/babashka#installation)

Once this is done, run this command in one terminal window to build and serve
the custom JS required by the notebook:

```
bb dev-notebook
```

In another terminal window, run

```
bb start-clerk
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

Copyright © 2022 Sam Ritchie.

Distributed under the [MIT License](LICENSE). See [LICENSE](LICENSE).

[CLJS]: https://clojurescript.org/
[MAFS]: https://github.com/pmndrs/mafs
[REACT]: https://reactjs.org/
[REAGENT]: https://reagent-project.github.io/
