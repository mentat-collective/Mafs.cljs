# mafs/clerk template

This directory contains a [`deps-new`][deps-new-url] template that creates a new
[Mafs.cljs][mafs-cljs-url] project with everything described in the ["Mafs.cljs
via Clerk"](https://mafs.mentat.org/#mafs.cljs-via-clerk) section of the
[`Mafs.cljs` documentation notebook][mafs-cljs-url] already configured.

To use the template, install the [`deps-new`][deps-new-url] tool:

```sh
clojure -Ttools install io.github.seancorfield/deps-new '{:git/tag "v0.5.0"}' :as new
```

Then create a project using the `mafs/clerk` template:

```
clojure -Sdeps '{:deps {io.github.mentat-collective/mafs.cljs {:git/sha "5b613fe5b2d4a9ad3294de51543d146a43a19ebc"}}}' \
-Tnew create \
:template mafs/clerk \
:name myusername/my-mafs-project
```

> **Note**
> The `:name` argument should match the GitHub slug (ie,
> `org_name/project_name`) where you expect to host the project. The above
> command will create a new project in the folder `my-mafs-project` in the
> directory where you run the command.
>
> To use a different version of the template, replace the `:git/sha` above with
> the sha of version you need from the [Mafs.cljs commit
> history](https://github.com/mentat-collective/Mafs.cljs/commits/main).

The generated project will contains more guides and information in its
`README.md` and in the generated Clerk notebook.

## Template Keyword Options

You can customize the `mafs/clerk` template by supplying any of the following
key-value pairs to the above command (See [`template.edn`][template-edn-url] for
default values):

- `:description`: This string is inserted at the top of your generated project's
  README.md.
- `:mafs-version`: version of [`Mafs.cljs` from Clojars][clojars-url]. See the
  [Clojars page][clojars-url] for version choices.
- `:clerk-port`: the port used by `clerk/serve!` during interactive development.
- `:clerk-sha`: the hash of the Clerk version you'd like to use in the template.
  (`clerk-utils/custom` uses a [git
  dependency](https://clojure.org/news/2018/01/05/git-deps) for Clerk.)
- `:shadow-port`: the port that [`shadow-cljs`][shadow-url] uses to serve
  compiled JavaScript during interactive development.
- `:shadow-version`: the version of [`shadow-cljs`][shadow-url] required by the
  generated project.
- `:clj-version`: the version of Clojure required by the generated project.
- `:cljs-version`: the version of ClojureScript required by the generated
  project. (_note that this needs to meet or exceed the version declared in the
  [`shadow-cljs` `deps.edn`
  file](https://github.com/thheller/shadow-cljs/blob/master/deps.edn) for the
  `shadow-cljs` version you've chosen._)
- `:http-server-port`: The port used by `bb serve` and `bb publish-local` to
  serve the local statically built site.
- `:cname`: If you're serving your GitHub Pages build from a custom URL, pass
  the value (like `"clerk-utils.mentat.org"`) of the custom site via this
  argument.

## Thanks and Support

To support this work and my other open source projects, consider sponsoring me
via my [GitHub Sponsors page](https://github.com/sponsors/sritchie). Thank you
to my current sponsors!

## License

Copyright © 2023 Sam Ritchie.

Distributed under the [MIT License](LICENSE). See [LICENSE](LICENSE).

[clojars-url]: https://clojars.org/org.mentat/mafs.cljs
[clerk-url]: https://clerk.vision
[mafs-cljs-url]: https://mafs.mentat.org
[deps-new-url]: https://github.com/seancorfield/deps-new
[shadow-url]: https://shadow-cljs.github.io/docs/UsersGuide.html
[template-edn-url]: https://github.com/mentat-collective/Mafs.cljs/blob/main/resources/mafs/clerk/template.edn
