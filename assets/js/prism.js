/* PrismJS 1.27.0
https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript+bash+c+cpp+cmake+css-extras+diff+docker+git+json+json5+jsonp+python+jsx+tsx+regex+shell-session+typescript&plugins=line-numbers+show-language+jsonp-highlight+normalize-whitespace+toolbar+copy-to-clipboard+match-braces */
var _self =
        "undefined" != typeof window
            ? window
            : "undefined" != typeof WorkerGlobalScope &&
              self instanceof WorkerGlobalScope
            ? self
            : {},
    Prism = (function (e) {
        var n = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
            t = 0,
            r = {},
            a = {
                manual: e.Prism && e.Prism.manual,
                disableWorkerMessageHandler:
                    e.Prism && e.Prism.disableWorkerMessageHandler,
                util: {
                    encode: function e(n) {
                        return n instanceof i
                            ? new i(n.type, e(n.content), n.alias)
                            : Array.isArray(n)
                            ? n.map(e)
                            : n
                                  .replace(/&/g, "&amp;")
                                  .replace(/</g, "&lt;")
                                  .replace(/\u00a0/g, " ");
                    },
                    type: function (e) {
                        return Object.prototype.toString.call(e).slice(8, -1);
                    },
                    objId: function (e) {
                        return (
                            e.__id ||
                                Object.defineProperty(e, "__id", {
                                    value: ++t
                                }),
                            e.__id
                        );
                    },
                    clone: function e(n, t) {
                        var r, i;
                        switch (((t = t || {}), a.util.type(n))) {
                            case "Object":
                                if (((i = a.util.objId(n)), t[i])) return t[i];
                                for (var l in ((r = {}), (t[i] = r), n))
                                    n.hasOwnProperty(l) && (r[l] = e(n[l], t));
                                return r;
                            case "Array":
                                return (
                                    (i = a.util.objId(n)),
                                    t[i]
                                        ? t[i]
                                        : ((r = []),
                                          (t[i] = r),
                                          n.forEach(function (n, a) {
                                              r[a] = e(n, t);
                                          }),
                                          r)
                                );
                            default:
                                return n;
                        }
                    },
                    getLanguage: function (e) {
                        for (; e; ) {
                            var t = n.exec(e.className);
                            if (t) return t[1].toLowerCase();
                            e = e.parentElement;
                        }
                        return "none";
                    },
                    setLanguage: function (e, t) {
                        (e.className = e.className.replace(
                            RegExp(n, "gi"),
                            ""
                        )),
                            e.classList.add("language-" + t);
                    },
                    currentScript: function () {
                        if ("undefined" == typeof document) return null;
                        if ("currentScript" in document)
                            return document.currentScript;
                        try {
                            throw new Error();
                        } catch (r) {
                            var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(
                                r.stack
                            ) || [])[1];
                            if (e) {
                                var n = document.getElementsByTagName("script");
                                for (var t in n) if (n[t].src == e) return n[t];
                            }
                            return null;
                        }
                    },
                    isActive: function (e, n, t) {
                        for (var r = "no-" + n; e; ) {
                            var a = e.classList;
                            if (a.contains(n)) return !0;
                            if (a.contains(r)) return !1;
                            e = e.parentElement;
                        }
                        return !!t;
                    }
                },
                languages: {
                    plain: r,
                    plaintext: r,
                    text: r,
                    txt: r,
                    extend: function (e, n) {
                        var t = a.util.clone(a.languages[e]);
                        for (var r in n) t[r] = n[r];
                        return t;
                    },
                    insertBefore: function (e, n, t, r) {
                        var i = (r = r || a.languages)[e],
                            l = {};
                        for (var o in i)
                            if (i.hasOwnProperty(o)) {
                                if (o == n)
                                    for (var s in t)
                                        t.hasOwnProperty(s) && (l[s] = t[s]);
                                t.hasOwnProperty(o) || (l[o] = i[o]);
                            }
                        var u = r[e];
                        return (
                            (r[e] = l),
                            a.languages.DFS(a.languages, function (n, t) {
                                t === u && n != e && (this[n] = l);
                            }),
                            l
                        );
                    },
                    DFS: function e(n, t, r, i) {
                        i = i || {};
                        var l = a.util.objId;
                        for (var o in n)
                            if (n.hasOwnProperty(o)) {
                                t.call(n, o, n[o], r || o);
                                var s = n[o],
                                    u = a.util.type(s);
                                "Object" !== u || i[l(s)]
                                    ? "Array" !== u ||
                                      i[l(s)] ||
                                      ((i[l(s)] = !0), e(s, t, o, i))
                                    : ((i[l(s)] = !0), e(s, t, null, i));
                            }
                    }
                },
                plugins: {},
                highlightAll: function (e, n) {
                    a.highlightAllUnder(document, e, n);
                },
                highlightAllUnder: function (e, n, t) {
                    var r = {
                        callback: t,
                        container: e,
                        selector:
                            'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                    };
                    a.hooks.run("before-highlightall", r),
                        (r.elements = Array.prototype.slice.apply(
                            r.container.querySelectorAll(r.selector)
                        )),
                        a.hooks.run("before-all-elements-highlight", r);
                    for (var i, l = 0; (i = r.elements[l++]); )
                        a.highlightElement(i, !0 === n, r.callback);
                },
                highlightElement: function (n, t, r) {
                    var i = a.util.getLanguage(n),
                        l = a.languages[i];
                    a.util.setLanguage(n, i);
                    var o = n.parentElement;
                    o &&
                        "pre" === o.nodeName.toLowerCase() &&
                        a.util.setLanguage(o, i);
                    var s = {
                        element: n,
                        language: i,
                        grammar: l,
                        code: n.textContent
                    };
                    function u(e) {
                        (s.highlightedCode = e),
                            a.hooks.run("before-insert", s),
                            (s.element.innerHTML = s.highlightedCode),
                            a.hooks.run("after-highlight", s),
                            a.hooks.run("complete", s),
                            r && r.call(s.element);
                    }
                    if (
                        (a.hooks.run("before-sanity-check", s),
                        (o = s.element.parentElement) &&
                            "pre" === o.nodeName.toLowerCase() &&
                            !o.hasAttribute("tabindex") &&
                            o.setAttribute("tabindex", "0"),
                        !s.code)
                    )
                        return (
                            a.hooks.run("complete", s),
                            void (r && r.call(s.element))
                        );
                    if ((a.hooks.run("before-highlight", s), s.grammar))
                        if (t && e.Worker) {
                            var c = new Worker(a.filename);
                            (c.onmessage = function (e) {
                                u(e.data);
                            }),
                                c.postMessage(
                                    JSON.stringify({
                                        language: s.language,
                                        code: s.code,
                                        immediateClose: !0
                                    })
                                );
                        } else u(a.highlight(s.code, s.grammar, s.language));
                    else u(a.util.encode(s.code));
                },
                highlight: function (e, n, t) {
                    var r = { code: e, grammar: n, language: t };
                    if ((a.hooks.run("before-tokenize", r), !r.grammar))
                        throw new Error(
                            'The language "' + r.language + '" has no grammar.'
                        );
                    return (
                        (r.tokens = a.tokenize(r.code, r.grammar)),
                        a.hooks.run("after-tokenize", r),
                        i.stringify(a.util.encode(r.tokens), r.language)
                    );
                },
                tokenize: function (e, n) {
                    var t = n.rest;
                    if (t) {
                        for (var r in t) n[r] = t[r];
                        delete n.rest;
                    }
                    var a = new s();
                    return (
                        u(a, a.head, e),
                        o(e, a, n, a.head, 0),
                        (function (e) {
                            for (var n = [], t = e.head.next; t !== e.tail; )
                                n.push(t.value), (t = t.next);
                            return n;
                        })(a)
                    );
                },
                hooks: {
                    all: {},
                    add: function (e, n) {
                        var t = a.hooks.all;
                        (t[e] = t[e] || []), t[e].push(n);
                    },
                    run: function (e, n) {
                        var t = a.hooks.all[e];
                        if (t && t.length)
                            for (var r, i = 0; (r = t[i++]); ) r(n);
                    }
                },
                Token: i
            };
        function i(e, n, t, r) {
            (this.type = e),
                (this.content = n),
                (this.alias = t),
                (this.length = 0 | (r || "").length);
        }
        function l(e, n, t, r) {
            e.lastIndex = n;
            var a = e.exec(t);
            if (a && r && a[1]) {
                var i = a[1].length;
                (a.index += i), (a[0] = a[0].slice(i));
            }
            return a;
        }
        function o(e, n, t, r, s, g) {
            for (var f in t)
                if (t.hasOwnProperty(f) && t[f]) {
                    var h = t[f];
                    h = Array.isArray(h) ? h : [h];
                    for (var d = 0; d < h.length; ++d) {
                        if (g && g.cause == f + "," + d) return;
                        var v = h[d],
                            p = v.inside,
                            m = !!v.lookbehind,
                            y = !!v.greedy,
                            k = v.alias;
                        if (y && !v.pattern.global) {
                            var x = v.pattern.toString().match(/[imsuy]*$/)[0];
                            v.pattern = RegExp(v.pattern.source, x + "g");
                        }
                        for (
                            var b = v.pattern || v, w = r.next, A = s;
                            w !== n.tail && !(g && A >= g.reach);
                            A += w.value.length, w = w.next
                        ) {
                            var E = w.value;
                            if (n.length > e.length) return;
                            if (!(E instanceof i)) {
                                var P,
                                    L = 1;
                                if (y) {
                                    if (
                                        !(P = l(b, A, e, m)) ||
                                        P.index >= e.length
                                    )
                                        break;
                                    var S = P.index,
                                        O = P.index + P[0].length,
                                        j = A;
                                    for (j += w.value.length; S >= j; )
                                        j += (w = w.next).value.length;
                                    if (
                                        ((A = j -= w.value.length),
                                        w.value instanceof i)
                                    )
                                        continue;
                                    for (
                                        var C = w;
                                        C !== n.tail &&
                                        (j < O || "string" == typeof C.value);
                                        C = C.next
                                    )
                                        L++, (j += C.value.length);
                                    L--, (E = e.slice(A, j)), (P.index -= A);
                                } else if (!(P = l(b, 0, E, m))) continue;
                                S = P.index;
                                var N = P[0],
                                    _ = E.slice(0, S),
                                    M = E.slice(S + N.length),
                                    W = A + E.length;
                                g && W > g.reach && (g.reach = W);
                                var z = w.prev;
                                if (
                                    (_ && ((z = u(n, z, _)), (A += _.length)),
                                    c(n, z, L),
                                    (w = u(
                                        n,
                                        z,
                                        new i(f, p ? a.tokenize(N, p) : N, k, N)
                                    )),
                                    M && u(n, w, M),
                                    L > 1)
                                ) {
                                    var I = { cause: f + "," + d, reach: W };
                                    o(e, n, t, w.prev, A, I),
                                        g &&
                                            I.reach > g.reach &&
                                            (g.reach = I.reach);
                                }
                            }
                        }
                    }
                }
        }
        function s() {
            var e = { value: null, prev: null, next: null },
                n = { value: null, prev: e, next: null };
            (e.next = n), (this.head = e), (this.tail = n), (this.length = 0);
        }
        function u(e, n, t) {
            var r = n.next,
                a = { value: t, prev: n, next: r };
            return (n.next = a), (r.prev = a), e.length++, a;
        }
        function c(e, n, t) {
            for (var r = n.next, a = 0; a < t && r !== e.tail; a++) r = r.next;
            (n.next = r), (r.prev = n), (e.length -= a);
        }
        if (
            ((e.Prism = a),
            (i.stringify = function e(n, t) {
                if ("string" == typeof n) return n;
                if (Array.isArray(n)) {
                    var r = "";
                    return (
                        n.forEach(function (n) {
                            r += e(n, t);
                        }),
                        r
                    );
                }
                var i = {
                        type: n.type,
                        content: e(n.content, t),
                        tag: "span",
                        classes: ["token", n.type],
                        attributes: {},
                        language: t
                    },
                    l = n.alias;
                l &&
                    (Array.isArray(l)
                        ? Array.prototype.push.apply(i.classes, l)
                        : i.classes.push(l)),
                    a.hooks.run("wrap", i);
                var o = "";
                for (var s in i.attributes)
                    o +=
                        " " +
                        s +
                        '="' +
                        (i.attributes[s] || "").replace(/"/g, "&quot;") +
                        '"';
                return (
                    "<" +
                    i.tag +
                    ' class="' +
                    i.classes.join(" ") +
                    '"' +
                    o +
                    ">" +
                    i.content +
                    "</" +
                    i.tag +
                    ">"
                );
            }),
            !e.document)
        )
            return e.addEventListener
                ? (a.disableWorkerMessageHandler ||
                      e.addEventListener(
                          "message",
                          function (n) {
                              var t = JSON.parse(n.data),
                                  r = t.language,
                                  i = t.code,
                                  l = t.immediateClose;
                              e.postMessage(a.highlight(i, a.languages[r], r)),
                                  l && e.close();
                          },
                          !1
                      ),
                  a)
                : a;
        var g = a.util.currentScript();
        function f() {
            a.manual || a.highlightAll();
        }
        if (
            (g &&
                ((a.filename = g.src),
                g.hasAttribute("data-manual") && (a.manual = !0)),
            !a.manual)
        ) {
            var h = document.readyState;
            "loading" === h || ("interactive" === h && g && g.defer)
                ? document.addEventListener("DOMContentLoaded", f)
                : window.requestAnimationFrame
                ? window.requestAnimationFrame(f)
                : window.setTimeout(f, 16);
        }
        return a;
    })(_self);
"undefined" != typeof module && module.exports && (module.exports = Prism),
    "undefined" != typeof global && (global.Prism = Prism);
(Prism.languages.markup = {
    comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
    prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
    doctype: {
        pattern:
            /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: !0,
        inside: {
            "internal-subset": {
                pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                lookbehind: !0,
                greedy: !0,
                inside: null
            },
            string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
            punctuation: /^<!|>$|[[\]]/,
            "doctype-tag": /^DOCTYPE/i,
            name: /[^\s<>'"]+/
        }
    },
    cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
    tag: {
        pattern:
            /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: !0,
        inside: {
            tag: {
                pattern: /^<\/?[^\s>\/]+/,
                inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ }
            },
            "special-attr": [],
            "attr-value": {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: {
                    punctuation: [
                        { pattern: /^=/, alias: "attr-equals" },
                        /"|'/
                    ]
                }
            },
            punctuation: /\/?>/,
            "attr-name": {
                pattern: /[^\s>\/]+/,
                inside: { namespace: /^[^\s>\/:]+:/ }
            }
        }
    },
    entity: [
        { pattern: /&[\da-z]{1,8};/i, alias: "named-entity" },
        /&#x?[\da-f]{1,8};/i
    ]
}),
    (Prism.languages.markup.tag.inside["attr-value"].inside.entity =
        Prism.languages.markup.entity),
    (Prism.languages.markup.doctype.inside["internal-subset"].inside =
        Prism.languages.markup),
    Prism.hooks.add("wrap", function (a) {
        "entity" === a.type &&
            (a.attributes.title = a.content.replace(/&amp;/, "&"));
    }),
    Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
        value: function (a, e) {
            var s = {};
            (s["language-" + e] = {
                pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                lookbehind: !0,
                inside: Prism.languages[e]
            }),
                (s.cdata = /^<!\[CDATA\[|\]\]>$/i);
            var t = {
                "included-cdata": {
                    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                    inside: s
                }
            };
            t["language-" + e] = {
                pattern: /[\s\S]+/,
                inside: Prism.languages[e]
            };
            var n = {};
            (n[a] = {
                pattern: RegExp(
                    "(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(
                        /__/g,
                        function () {
                            return a;
                        }
                    ),
                    "i"
                ),
                lookbehind: !0,
                greedy: !0,
                inside: t
            }),
                Prism.languages.insertBefore("markup", "cdata", n);
        }
    }),
    Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
        value: function (a, e) {
            Prism.languages.markup.tag.inside["special-attr"].push({
                pattern: RegExp(
                    "(^|[\"'\\s])(?:" +
                        a +
                        ")\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))",
                    "i"
                ),
                lookbehind: !0,
                inside: {
                    "attr-name": /^[^\s=]+/,
                    "attr-value": {
                        pattern: /=[\s\S]+/,
                        inside: {
                            value: {
                                pattern:
                                    /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                                lookbehind: !0,
                                alias: [e, "language-" + e],
                                inside: Prism.languages[e]
                            },
                            punctuation: [
                                { pattern: /^=/, alias: "attr-equals" },
                                /"|'/
                            ]
                        }
                    }
                }
            });
        }
    }),
    (Prism.languages.html = Prism.languages.markup),
    (Prism.languages.mathml = Prism.languages.markup),
    (Prism.languages.svg = Prism.languages.markup),
    (Prism.languages.xml = Prism.languages.extend("markup", {})),
    (Prism.languages.ssml = Prism.languages.xml),
    (Prism.languages.atom = Prism.languages.xml),
    (Prism.languages.rss = Prism.languages.xml);
!(function (s) {
    var e =
        /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    (s.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
            pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
            inside: {
                rule: /^@[\w-]+/,
                "selector-function-argument": {
                    pattern:
                        /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                    lookbehind: !0,
                    alias: "selector"
                },
                keyword: {
                    pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                    lookbehind: !0
                }
            }
        },
        url: {
            pattern: RegExp(
                "\\burl\\((?:" +
                    e.source +
                    "|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)",
                "i"
            ),
            greedy: !0,
            inside: {
                function: /^url/i,
                punctuation: /^\(|\)$/,
                string: { pattern: RegExp("^" + e.source + "$"), alias: "url" }
            }
        },
        selector: {
            pattern: RegExp(
                "(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" +
                    e.source +
                    ")*(?=\\s*\\{)"
            ),
            lookbehind: !0
        },
        string: { pattern: e, greedy: !0 },
        property: {
            pattern:
                /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
            lookbehind: !0
        },
        important: /!important\b/i,
        function: {
            pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
            lookbehind: !0
        },
        punctuation: /[(){};:,]/
    }),
        (s.languages.css.atrule.inside.rest = s.languages.css);
    var t = s.languages.markup;
    t && (t.tag.addInlined("style", "css"), t.tag.addAttribute("style", "css"));
})(Prism);
Prism.languages.clike = {
    comment: [
        {
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: !0,
            greedy: !0
        },
        { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }
    ],
    string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
    },
    "class-name": {
        pattern:
            /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: !0,
        inside: { punctuation: /[.\\]/ }
    },
    keyword:
        /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
};
(Prism.languages.javascript = Prism.languages.extend("clike", {
    "class-name": [
        Prism.languages.clike["class-name"],
        {
            pattern:
                /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
            lookbehind: !0
        }
    ],
    keyword: [
        { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
        {
            pattern:
                /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
            lookbehind: !0
        }
    ],
    function:
        /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
        pattern: RegExp(
            "(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"
        ),
        lookbehind: !0
    },
    operator:
        /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
})),
    (Prism.languages.javascript["class-name"][0].pattern =
        /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
    Prism.languages.insertBefore("javascript", "keyword", {
        regex: {
            pattern: RegExp(
                "((?:^|[^$\\w\\xA0-\\uFFFF.\"'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r\n]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r\n,.;:})\\]]|//))"
            ),
            lookbehind: !0,
            greedy: !0,
            inside: {
                "regex-source": {
                    pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                    lookbehind: !0,
                    alias: "language-regex",
                    inside: Prism.languages.regex
                },
                "regex-delimiter": /^\/|\/$/,
                "regex-flags": /^[a-z]+$/
            }
        },
        "function-variable": {
            pattern:
                /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
            alias: "function"
        },
        parameter: [
            {
                pattern:
                    /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
                lookbehind: !0,
                inside: Prism.languages.javascript
            },
            {
                pattern:
                    /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                lookbehind: !0,
                inside: Prism.languages.javascript
            },
            {
                pattern:
                    /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                lookbehind: !0,
                inside: Prism.languages.javascript
            },
            {
                pattern:
                    /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                lookbehind: !0,
                inside: Prism.languages.javascript
            }
        ],
        constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    }),
    Prism.languages.insertBefore("javascript", "string", {
        hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" },
        "template-string": {
            pattern:
                /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
            greedy: !0,
            inside: {
                "template-punctuation": { pattern: /^`|`$/, alias: "string" },
                interpolation: {
                    pattern:
                        /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                    lookbehind: !0,
                    inside: {
                        "interpolation-punctuation": {
                            pattern: /^\$\{|\}$/,
                            alias: "punctuation"
                        },
                        rest: Prism.languages.javascript
                    }
                },
                string: /[\s\S]+/
            }
        },
        "string-property": {
            pattern:
                /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
            lookbehind: !0,
            greedy: !0,
            alias: "property"
        }
    }),
    Prism.languages.insertBefore("javascript", "operator", {
        "literal-property": {
            pattern:
                /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
            lookbehind: !0,
            alias: "property"
        }
    }),
    Prism.languages.markup &&
        (Prism.languages.markup.tag.addInlined("script", "javascript"),
        Prism.languages.markup.tag.addAttribute(
            "on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)",
            "javascript"
        )),
    (Prism.languages.js = Prism.languages.javascript);
!(function (e) {
    var t =
            "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",
        n = {
            pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
            lookbehind: !0,
            alias: "punctuation",
            inside: null
        },
        a = {
            bash: n,
            environment: { pattern: RegExp("\\$" + t), alias: "constant" },
            variable: [
                {
                    pattern: /\$?\(\([\s\S]+?\)\)/,
                    greedy: !0,
                    inside: {
                        variable: [
                            { pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 },
                            /^\$\(\(/
                        ],
                        number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
                        operator:
                            /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
                        punctuation: /\(\(?|\)\)?|,|;/
                    }
                },
                {
                    pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
                    greedy: !0,
                    inside: { variable: /^\$\(|^`|\)$|`$/ }
                },
                {
                    pattern: /\$\{[^}]+\}/,
                    greedy: !0,
                    inside: {
                        operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                        punctuation: /[\[\]]/,
                        environment: {
                            pattern: RegExp("(\\{)" + t),
                            lookbehind: !0,
                            alias: "constant"
                        }
                    }
                },
                /\$(?:\w+|[#?*!@$])/
            ],
            entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
        };
    (e.languages.bash = {
        shebang: { pattern: /^#!\s*\/.*/, alias: "important" },
        comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
        "function-name": [
            {
                pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
                lookbehind: !0,
                alias: "function"
            },
            { pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: "function" }
        ],
        "for-or-select": {
            pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
            alias: "variable",
            lookbehind: !0
        },
        "assign-left": {
            pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
            inside: {
                environment: {
                    pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t),
                    lookbehind: !0,
                    alias: "constant"
                }
            },
            alias: "variable",
            lookbehind: !0
        },
        string: [
            {
                pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
                lookbehind: !0,
                greedy: !0,
                inside: a
            },
            {
                pattern:
                    /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
                lookbehind: !0,
                greedy: !0,
                inside: { bash: n }
            },
            {
                pattern:
                    /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
                lookbehind: !0,
                greedy: !0,
                inside: a
            },
            { pattern: /(^|[^$\\])'[^']*'/, lookbehind: !0, greedy: !0 },
            {
                pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
                greedy: !0,
                inside: { entity: a.entity }
            }
        ],
        environment: { pattern: RegExp("\\$?" + t), alias: "constant" },
        variable: a.variable,
        function: {
            pattern:
                /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
            lookbehind: !0
        },
        keyword: {
            pattern:
                /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
            lookbehind: !0
        },
        builtin: {
            pattern:
                /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
            lookbehind: !0,
            alias: "class-name"
        },
        boolean: {
            pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
            lookbehind: !0
        },
        "file-descriptor": { pattern: /\B&\d\b/, alias: "important" },
        operator: {
            pattern:
                /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
            inside: {
                "file-descriptor": { pattern: /^\d/, alias: "important" }
            }
        },
        punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
        number: {
            pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
            lookbehind: !0
        }
    }),
        (n.inside = e.languages.bash);
    for (
        var o = [
                "comment",
                "function-name",
                "for-or-select",
                "assign-left",
                "string",
                "environment",
                "function",
                "keyword",
                "builtin",
                "boolean",
                "file-descriptor",
                "operator",
                "punctuation",
                "number"
            ],
            s = a.variable[1].inside,
            i = 0;
        i < o.length;
        i++
    )
        s[o[i]] = e.languages.bash[o[i]];
    e.languages.shell = e.languages.bash;
})(Prism);
(Prism.languages.c = Prism.languages.extend("clike", {
    comment: {
        pattern:
            /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
        greedy: !0
    },
    string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: !0 },
    "class-name": {
        pattern:
            /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
        lookbehind: !0
    },
    keyword:
        /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
    function: /\b[a-z_]\w*(?=\s*\()/i,
    number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
    operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
})),
    Prism.languages.insertBefore("c", "string", {
        char: {
            pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
            greedy: !0
        }
    }),
    Prism.languages.insertBefore("c", "string", {
        macro: {
            pattern:
                /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
            lookbehind: !0,
            greedy: !0,
            alias: "property",
            inside: {
                string: [
                    { pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: !0 },
                    Prism.languages.c.string
                ],
                char: Prism.languages.c.char,
                comment: Prism.languages.c.comment,
                "macro-name": [
                    { pattern: /(^#\s*define\s+)\w+\b(?!\()/i, lookbehind: !0 },
                    {
                        pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
                        lookbehind: !0,
                        alias: "function"
                    }
                ],
                directive: {
                    pattern: /^(#\s*)[a-z]+/,
                    lookbehind: !0,
                    alias: "keyword"
                },
                "directive-hash": /^#/,
                punctuation: /##|\\(?=[\r\n])/,
                expression: { pattern: /\S[\s\S]*/, inside: Prism.languages.c }
            }
        }
    }),
    Prism.languages.insertBefore("c", "function", {
        constant:
            /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
    }),
    delete Prism.languages.c.boolean;
!(function (e) {
    var t =
            /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
        n = "\\b(?!<keyword>)\\w+(?:\\s*\\.\\s*\\w+)*\\b".replace(
            /<keyword>/g,
            function () {
                return t.source;
            }
        );
    (e.languages.cpp = e.languages.extend("c", {
        "class-name": [
            {
                pattern: RegExp(
                    "(\\b(?:class|concept|enum|struct|typename)\\s+)(?!<keyword>)\\w+".replace(
                        /<keyword>/g,
                        function () {
                            return t.source;
                        }
                    )
                ),
                lookbehind: !0
            },
            /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
            /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
            /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/
        ],
        keyword: t,
        number: {
            pattern:
                /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
            greedy: !0
        },
        operator:
            />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
        boolean: /\b(?:false|true)\b/
    })),
        e.languages.insertBefore("cpp", "string", {
            module: {
                pattern: RegExp(
                    '(\\b(?:import|module)\\s+)(?:"(?:\\\\(?:\r\n|[^])|[^"\\\\\r\n])*"|<[^<>\r\n]*>|' +
                        "<mod-name>(?:\\s*:\\s*<mod-name>)?|:\\s*<mod-name>".replace(
                            /<mod-name>/g,
                            function () {
                                return n;
                            }
                        ) +
                        ")"
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                    string: /^[<"][\s\S]+/,
                    operator: /:/,
                    punctuation: /\./
                }
            },
            "raw-string": {
                pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
                alias: "string",
                greedy: !0
            }
        }),
        e.languages.insertBefore("cpp", "keyword", {
            "generic-function": {
                pattern:
                    /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
                inside: {
                    function: /^\w+/,
                    generic: {
                        pattern: /<[\s\S]+/,
                        alias: "class-name",
                        inside: e.languages.cpp
                    }
                }
            }
        }),
        e.languages.insertBefore("cpp", "operator", {
            "double-colon": { pattern: /::/, alias: "punctuation" }
        }),
        e.languages.insertBefore("cpp", "class-name", {
            "base-clause": {
                pattern:
                    /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
                lookbehind: !0,
                greedy: !0,
                inside: e.languages.extend("cpp", {})
            }
        }),
        e.languages.insertBefore(
            "inside",
            "double-colon",
            { "class-name": /\b[a-z_]\w*\b(?!\s*::)/i },
            e.languages.cpp["base-clause"]
        );
})(Prism);
Prism.languages.cmake = {
    comment: /#.*/,
    string: {
        pattern: /"(?:[^\\"]|\\.)*"/,
        greedy: !0,
        inside: {
            interpolation: {
                pattern: /\$\{(?:[^{}$]|\$\{[^{}$]*\})*\}/,
                inside: { punctuation: /\$\{|\}/, variable: /\w+/ }
            }
        }
    },
    variable:
        /\b(?:CMAKE_\w+|\w+_(?:(?:BINARY|SOURCE)_DIR|DESCRIPTION|HOMEPAGE_URL|ROOT|VERSION(?:_MAJOR|_MINOR|_PATCH|_TWEAK)?)|(?:ANDROID|APPLE|BORLAND|BUILD_SHARED_LIBS|CACHE|CPACK_(?:ABSOLUTE_DESTINATION_FILES|COMPONENT_INCLUDE_TOPLEVEL_DIRECTORY|ERROR_ON_ABSOLUTE_INSTALL_DESTINATION|INCLUDE_TOPLEVEL_DIRECTORY|INSTALL_DEFAULT_DIRECTORY_PERMISSIONS|INSTALL_SCRIPT|PACKAGING_INSTALL_PREFIX|SET_DESTDIR|WARN_ON_ABSOLUTE_INSTALL_DESTINATION)|CTEST_(?:BINARY_DIRECTORY|BUILD_COMMAND|BUILD_NAME|BZR_COMMAND|BZR_UPDATE_OPTIONS|CHANGE_ID|CHECKOUT_COMMAND|CONFIGURATION_TYPE|CONFIGURE_COMMAND|COVERAGE_COMMAND|COVERAGE_EXTRA_FLAGS|CURL_OPTIONS|CUSTOM_(?:COVERAGE_EXCLUDE|ERROR_EXCEPTION|ERROR_MATCH|ERROR_POST_CONTEXT|ERROR_PRE_CONTEXT|MAXIMUM_FAILED_TEST_OUTPUT_SIZE|MAXIMUM_NUMBER_OF_(?:ERRORS|WARNINGS)|MAXIMUM_PASSED_TEST_OUTPUT_SIZE|MEMCHECK_IGNORE|POST_MEMCHECK|POST_TEST|PRE_MEMCHECK|PRE_TEST|TESTS_IGNORE|WARNING_EXCEPTION|WARNING_MATCH)|CVS_CHECKOUT|CVS_COMMAND|CVS_UPDATE_OPTIONS|DROP_LOCATION|DROP_METHOD|DROP_SITE|DROP_SITE_CDASH|DROP_SITE_PASSWORD|DROP_SITE_USER|EXTRA_COVERAGE_GLOB|GIT_COMMAND|GIT_INIT_SUBMODULES|GIT_UPDATE_CUSTOM|GIT_UPDATE_OPTIONS|HG_COMMAND|HG_UPDATE_OPTIONS|LABELS_FOR_SUBPROJECTS|MEMORYCHECK_(?:COMMAND|COMMAND_OPTIONS|SANITIZER_OPTIONS|SUPPRESSIONS_FILE|TYPE)|NIGHTLY_START_TIME|P4_CLIENT|P4_COMMAND|P4_OPTIONS|P4_UPDATE_OPTIONS|RUN_CURRENT_SCRIPT|SCP_COMMAND|SITE|SOURCE_DIRECTORY|SUBMIT_URL|SVN_COMMAND|SVN_OPTIONS|SVN_UPDATE_OPTIONS|TEST_LOAD|TEST_TIMEOUT|TRIGGER_SITE|UPDATE_COMMAND|UPDATE_OPTIONS|UPDATE_VERSION_ONLY|USE_LAUNCHERS)|CYGWIN|ENV|EXECUTABLE_OUTPUT_PATH|GHS-MULTI|IOS|LIBRARY_OUTPUT_PATH|MINGW|MSVC(?:10|11|12|14|60|70|71|80|90|_IDE|_TOOLSET_VERSION|_VERSION)?|MSYS|PROJECT_NAME|UNIX|WIN32|WINCE|WINDOWS_PHONE|WINDOWS_STORE|XCODE))\b/,
    property:
        /\b(?:cxx_\w+|(?:ARCHIVE_OUTPUT_(?:DIRECTORY|NAME)|COMPILE_DEFINITIONS|COMPILE_PDB_NAME|COMPILE_PDB_OUTPUT_DIRECTORY|EXCLUDE_FROM_DEFAULT_BUILD|IMPORTED_(?:IMPLIB|LIBNAME|LINK_DEPENDENT_LIBRARIES|LINK_INTERFACE_LANGUAGES|LINK_INTERFACE_LIBRARIES|LINK_INTERFACE_MULTIPLICITY|LOCATION|NO_SONAME|OBJECTS|SONAME)|INTERPROCEDURAL_OPTIMIZATION|LIBRARY_OUTPUT_DIRECTORY|LIBRARY_OUTPUT_NAME|LINK_FLAGS|LINK_INTERFACE_LIBRARIES|LINK_INTERFACE_MULTIPLICITY|LOCATION|MAP_IMPORTED_CONFIG|OSX_ARCHITECTURES|OUTPUT_NAME|PDB_NAME|PDB_OUTPUT_DIRECTORY|RUNTIME_OUTPUT_DIRECTORY|RUNTIME_OUTPUT_NAME|STATIC_LIBRARY_FLAGS|VS_CSHARP|VS_DOTNET_REFERENCEPROP|VS_DOTNET_REFERENCE|VS_GLOBAL_SECTION_POST|VS_GLOBAL_SECTION_PRE|VS_GLOBAL|XCODE_ATTRIBUTE)_\w+|\w+_(?:CLANG_TIDY|COMPILER_LAUNCHER|CPPCHECK|CPPLINT|INCLUDE_WHAT_YOU_USE|OUTPUT_NAME|POSTFIX|VISIBILITY_PRESET)|ABSTRACT|ADDITIONAL_MAKE_CLEAN_FILES|ADVANCED|ALIASED_TARGET|ALLOW_DUPLICATE_CUSTOM_TARGETS|ANDROID_(?:ANT_ADDITIONAL_OPTIONS|API|API_MIN|ARCH|ASSETS_DIRECTORIES|GUI|JAR_DEPENDENCIES|NATIVE_LIB_DEPENDENCIES|NATIVE_LIB_DIRECTORIES|PROCESS_MAX|PROGUARD|PROGUARD_CONFIG_PATH|SECURE_PROPS_PATH|SKIP_ANT_STEP|STL_TYPE)|ARCHIVE_OUTPUT_DIRECTORY|ATTACHED_FILES|ATTACHED_FILES_ON_FAIL|AUTOGEN_(?:BUILD_DIR|ORIGIN_DEPENDS|PARALLEL|SOURCE_GROUP|TARGETS_FOLDER|TARGET_DEPENDS)|AUTOMOC|AUTOMOC_(?:COMPILER_PREDEFINES|DEPEND_FILTERS|EXECUTABLE|MACRO_NAMES|MOC_OPTIONS|SOURCE_GROUP|TARGETS_FOLDER)|AUTORCC|AUTORCC_EXECUTABLE|AUTORCC_OPTIONS|AUTORCC_SOURCE_GROUP|AUTOUIC|AUTOUIC_EXECUTABLE|AUTOUIC_OPTIONS|AUTOUIC_SEARCH_PATHS|BINARY_DIR|BUILDSYSTEM_TARGETS|BUILD_RPATH|BUILD_RPATH_USE_ORIGIN|BUILD_WITH_INSTALL_NAME_DIR|BUILD_WITH_INSTALL_RPATH|BUNDLE|BUNDLE_EXTENSION|CACHE_VARIABLES|CLEAN_NO_CUSTOM|COMMON_LANGUAGE_RUNTIME|COMPATIBLE_INTERFACE_(?:BOOL|NUMBER_MAX|NUMBER_MIN|STRING)|COMPILE_(?:DEFINITIONS|FEATURES|FLAGS|OPTIONS|PDB_NAME|PDB_OUTPUT_DIRECTORY)|COST|CPACK_DESKTOP_SHORTCUTS|CPACK_NEVER_OVERWRITE|CPACK_PERMANENT|CPACK_STARTUP_SHORTCUTS|CPACK_START_MENU_SHORTCUTS|CPACK_WIX_ACL|CROSSCOMPILING_EMULATOR|CUDA_EXTENSIONS|CUDA_PTX_COMPILATION|CUDA_RESOLVE_DEVICE_SYMBOLS|CUDA_SEPARABLE_COMPILATION|CUDA_STANDARD|CUDA_STANDARD_REQUIRED|CXX_EXTENSIONS|CXX_STANDARD|CXX_STANDARD_REQUIRED|C_EXTENSIONS|C_STANDARD|C_STANDARD_REQUIRED|DEBUG_CONFIGURATIONS|DEFINE_SYMBOL|DEFINITIONS|DEPENDS|DEPLOYMENT_ADDITIONAL_FILES|DEPLOYMENT_REMOTE_DIRECTORY|DISABLED|DISABLED_FEATURES|ECLIPSE_EXTRA_CPROJECT_CONTENTS|ECLIPSE_EXTRA_NATURES|ENABLED_FEATURES|ENABLED_LANGUAGES|ENABLE_EXPORTS|ENVIRONMENT|EXCLUDE_FROM_ALL|EXCLUDE_FROM_DEFAULT_BUILD|EXPORT_NAME|EXPORT_PROPERTIES|EXTERNAL_OBJECT|EchoString|FAIL_REGULAR_EXPRESSION|FIND_LIBRARY_USE_LIB32_PATHS|FIND_LIBRARY_USE_LIB64_PATHS|FIND_LIBRARY_USE_LIBX32_PATHS|FIND_LIBRARY_USE_OPENBSD_VERSIONING|FIXTURES_CLEANUP|FIXTURES_REQUIRED|FIXTURES_SETUP|FOLDER|FRAMEWORK|Fortran_FORMAT|Fortran_MODULE_DIRECTORY|GENERATED|GENERATOR_FILE_NAME|GENERATOR_IS_MULTI_CONFIG|GHS_INTEGRITY_APP|GHS_NO_SOURCE_GROUP_FILE|GLOBAL_DEPENDS_DEBUG_MODE|GLOBAL_DEPENDS_NO_CYCLES|GNUtoMS|HAS_CXX|HEADER_FILE_ONLY|HELPSTRING|IMPLICIT_DEPENDS_INCLUDE_TRANSFORM|IMPORTED|IMPORTED_(?:COMMON_LANGUAGE_RUNTIME|CONFIGURATIONS|GLOBAL|IMPLIB|LIBNAME|LINK_DEPENDENT_LIBRARIES|LINK_INTERFACE_(?:LANGUAGES|LIBRARIES|MULTIPLICITY)|LOCATION|NO_SONAME|OBJECTS|SONAME)|IMPORT_PREFIX|IMPORT_SUFFIX|INCLUDE_DIRECTORIES|INCLUDE_REGULAR_EXPRESSION|INSTALL_NAME_DIR|INSTALL_RPATH|INSTALL_RPATH_USE_LINK_PATH|INTERFACE_(?:AUTOUIC_OPTIONS|COMPILE_DEFINITIONS|COMPILE_FEATURES|COMPILE_OPTIONS|INCLUDE_DIRECTORIES|LINK_DEPENDS|LINK_DIRECTORIES|LINK_LIBRARIES|LINK_OPTIONS|POSITION_INDEPENDENT_CODE|SOURCES|SYSTEM_INCLUDE_DIRECTORIES)|INTERPROCEDURAL_OPTIMIZATION|IN_TRY_COMPILE|IOS_INSTALL_COMBINED|JOB_POOLS|JOB_POOL_COMPILE|JOB_POOL_LINK|KEEP_EXTENSION|LABELS|LANGUAGE|LIBRARY_OUTPUT_DIRECTORY|LINKER_LANGUAGE|LINK_(?:DEPENDS|DEPENDS_NO_SHARED|DIRECTORIES|FLAGS|INTERFACE_LIBRARIES|INTERFACE_MULTIPLICITY|LIBRARIES|OPTIONS|SEARCH_END_STATIC|SEARCH_START_STATIC|WHAT_YOU_USE)|LISTFILE_STACK|LOCATION|MACOSX_BUNDLE|MACOSX_BUNDLE_INFO_PLIST|MACOSX_FRAMEWORK_INFO_PLIST|MACOSX_PACKAGE_LOCATION|MACOSX_RPATH|MACROS|MANUALLY_ADDED_DEPENDENCIES|MEASUREMENT|MODIFIED|NAME|NO_SONAME|NO_SYSTEM_FROM_IMPORTED|OBJECT_DEPENDS|OBJECT_OUTPUTS|OSX_ARCHITECTURES|OUTPUT_NAME|PACKAGES_FOUND|PACKAGES_NOT_FOUND|PARENT_DIRECTORY|PASS_REGULAR_EXPRESSION|PDB_NAME|PDB_OUTPUT_DIRECTORY|POSITION_INDEPENDENT_CODE|POST_INSTALL_SCRIPT|PREDEFINED_TARGETS_FOLDER|PREFIX|PRE_INSTALL_SCRIPT|PRIVATE_HEADER|PROCESSORS|PROCESSOR_AFFINITY|PROJECT_LABEL|PUBLIC_HEADER|REPORT_UNDEFINED_PROPERTIES|REQUIRED_FILES|RESOURCE|RESOURCE_LOCK|RULE_LAUNCH_COMPILE|RULE_LAUNCH_CUSTOM|RULE_LAUNCH_LINK|RULE_MESSAGES|RUNTIME_OUTPUT_DIRECTORY|RUN_SERIAL|SKIP_AUTOGEN|SKIP_AUTOMOC|SKIP_AUTORCC|SKIP_AUTOUIC|SKIP_BUILD_RPATH|SKIP_RETURN_CODE|SOURCES|SOURCE_DIR|SOVERSION|STATIC_LIBRARY_FLAGS|STATIC_LIBRARY_OPTIONS|STRINGS|SUBDIRECTORIES|SUFFIX|SYMBOLIC|TARGET_ARCHIVES_MAY_BE_SHARED_LIBS|TARGET_MESSAGES|TARGET_SUPPORTS_SHARED_LIBS|TESTS|TEST_INCLUDE_FILE|TEST_INCLUDE_FILES|TIMEOUT|TIMEOUT_AFTER_MATCH|TYPE|USE_FOLDERS|VALUE|VARIABLES|VERSION|VISIBILITY_INLINES_HIDDEN|VS_(?:CONFIGURATION_TYPE|COPY_TO_OUT_DIR|DEBUGGER_(?:COMMAND|COMMAND_ARGUMENTS|ENVIRONMENT|WORKING_DIRECTORY)|DEPLOYMENT_CONTENT|DEPLOYMENT_LOCATION|DOTNET_REFERENCES|DOTNET_REFERENCES_COPY_LOCAL|INCLUDE_IN_VSIX|IOT_STARTUP_TASK|KEYWORD|RESOURCE_GENERATOR|SCC_AUXPATH|SCC_LOCALPATH|SCC_PROJECTNAME|SCC_PROVIDER|SDK_REFERENCES|SHADER_(?:DISABLE_OPTIMIZATIONS|ENABLE_DEBUG|ENTRYPOINT|FLAGS|MODEL|OBJECT_FILE_NAME|OUTPUT_HEADER_FILE|TYPE|VARIABLE_NAME)|STARTUP_PROJECT|TOOL_OVERRIDE|USER_PROPS|WINRT_COMPONENT|WINRT_EXTENSIONS|WINRT_REFERENCES|XAML_TYPE)|WILL_FAIL|WIN32_EXECUTABLE|WINDOWS_EXPORT_ALL_SYMBOLS|WORKING_DIRECTORY|WRAP_EXCLUDE|XCODE_(?:EMIT_EFFECTIVE_PLATFORM_NAME|EXPLICIT_FILE_TYPE|FILE_ATTRIBUTES|LAST_KNOWN_FILE_TYPE|PRODUCT_TYPE|SCHEME_(?:ADDRESS_SANITIZER|ADDRESS_SANITIZER_USE_AFTER_RETURN|ARGUMENTS|DISABLE_MAIN_THREAD_CHECKER|DYNAMIC_LIBRARY_LOADS|DYNAMIC_LINKER_API_USAGE|ENVIRONMENT|EXECUTABLE|GUARD_MALLOC|MAIN_THREAD_CHECKER_STOP|MALLOC_GUARD_EDGES|MALLOC_SCRIBBLE|MALLOC_STACK|THREAD_SANITIZER(?:_STOP)?|UNDEFINED_BEHAVIOUR_SANITIZER(?:_STOP)?|ZOMBIE_OBJECTS))|XCTEST)\b/,
    keyword:
        /\b(?:add_compile_definitions|add_compile_options|add_custom_command|add_custom_target|add_definitions|add_dependencies|add_executable|add_library|add_link_options|add_subdirectory|add_test|aux_source_directory|break|build_command|build_name|cmake_host_system_information|cmake_minimum_required|cmake_parse_arguments|cmake_policy|configure_file|continue|create_test_sourcelist|ctest_build|ctest_configure|ctest_coverage|ctest_empty_binary_directory|ctest_memcheck|ctest_read_custom_files|ctest_run_script|ctest_sleep|ctest_start|ctest_submit|ctest_test|ctest_update|ctest_upload|define_property|else|elseif|enable_language|enable_testing|endforeach|endfunction|endif|endmacro|endwhile|exec_program|execute_process|export|export_library_dependencies|file|find_file|find_library|find_package|find_path|find_program|fltk_wrap_ui|foreach|function|get_cmake_property|get_directory_property|get_filename_component|get_property|get_source_file_property|get_target_property|get_test_property|if|include|include_directories|include_external_msproject|include_guard|include_regular_expression|install|install_files|install_programs|install_targets|link_directories|link_libraries|list|load_cache|load_command|macro|make_directory|mark_as_advanced|math|message|option|output_required_files|project|qt_wrap_cpp|qt_wrap_ui|remove|remove_definitions|return|separate_arguments|set|set_directory_properties|set_property|set_source_files_properties|set_target_properties|set_tests_properties|site_name|source_group|string|subdir_depends|subdirs|target_compile_definitions|target_compile_features|target_compile_options|target_include_directories|target_link_directories|target_link_libraries|target_link_options|target_sources|try_compile|try_run|unset|use_mangled_mesa|utility_source|variable_requires|variable_watch|while|write_file)(?=\s*\()\b/,
    boolean: /\b(?:FALSE|OFF|ON|TRUE)\b/,
    namespace:
        /\b(?:INTERFACE|PRIVATE|PROPERTIES|PUBLIC|SHARED|STATIC|TARGET_OBJECTS)\b/,
    operator:
        /\b(?:AND|DEFINED|EQUAL|GREATER|LESS|MATCHES|NOT|OR|STREQUAL|STRGREATER|STRLESS|VERSION_EQUAL|VERSION_GREATER|VERSION_LESS)\b/,
    inserted: { pattern: /\b\w+::\w+\b/, alias: "class-name" },
    number: /\b\d+(?:\.\d+)*\b/,
    function: /\b[a-z_]\w*(?=\s*\()\b/i,
    punctuation: /[()>}]|\$[<{]/
};
!(function (e) {
    var a,
        n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
    (e.languages.css.selector = {
        pattern: e.languages.css.selector.pattern,
        lookbehind: !0,
        inside: (a = {
            "pseudo-element":
                /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
            "pseudo-class": /:[-\w]+/,
            class: /\.[-\w]+/,
            id: /#[-\w]+/,
            attribute: {
                pattern: RegExp("\\[(?:[^[\\]\"']|" + n.source + ")*\\]"),
                greedy: !0,
                inside: {
                    punctuation: /^\[|\]$/,
                    "case-sensitivity": {
                        pattern: /(\s)[si]$/i,
                        lookbehind: !0,
                        alias: "keyword"
                    },
                    namespace: {
                        pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
                        lookbehind: !0,
                        inside: { punctuation: /\|$/ }
                    },
                    "attr-name": {
                        pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
                        lookbehind: !0
                    },
                    "attr-value": [
                        n,
                        {
                            pattern:
                                /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
                            lookbehind: !0
                        }
                    ],
                    operator: /[|~*^$]?=/
                }
            },
            "n-th": [
                {
                    pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
                    lookbehind: !0,
                    inside: { number: /[\dn]+/, operator: /[+-]/ }
                },
                { pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i, lookbehind: !0 }
            ],
            combinator: />|\+|~|\|\|/,
            punctuation: /[(),]/
        })
    }),
        (e.languages.css.atrule.inside["selector-function-argument"].inside =
            a),
        e.languages.insertBefore("css", "property", {
            variable: {
                pattern:
                    /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
                lookbehind: !0
            }
        });
    var r = { pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/, lookbehind: !0 },
        i = { pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/, lookbehind: !0 };
    e.languages.insertBefore("css", "function", {
        operator: { pattern: /(\s)[+\-*\/](?=\s)/, lookbehind: !0 },
        hexcode: { pattern: /\B#[\da-f]{3,8}\b/i, alias: "color" },
        color: [
            {
                pattern:
                    /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
                lookbehind: !0
            },
            {
                pattern:
                    /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
                inside: {
                    unit: r,
                    number: i,
                    function: /[\w-]+(?=\()/,
                    punctuation: /[(),]/
                }
            }
        ],
        entity: /\\[\da-f]{1,8}/i,
        unit: r,
        number: i
    });
})(Prism);
!(function (e) {
    e.languages.diff = {
        coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d.*$/m]
    };
    var n = {
        "deleted-sign": "-",
        "deleted-arrow": "<",
        "inserted-sign": "+",
        "inserted-arrow": ">",
        unchanged: " ",
        diff: "!"
    };
    Object.keys(n).forEach(function (a) {
        var i = n[a],
            r = [];
        /^\w+$/.test(a) || r.push(/\w+/.exec(a)[0]),
            "diff" === a && r.push("bold"),
            (e.languages.diff[a] = {
                pattern: RegExp(
                    "^(?:[" + i + "].*(?:\r\n?|\n|(?![\\s\\S])))+",
                    "m"
                ),
                alias: r,
                inside: {
                    line: {
                        pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/,
                        lookbehind: !0
                    },
                    prefix: { pattern: /[\s\S]/, alias: /\w+/.exec(a)[0] }
                }
            });
    }),
        Object.defineProperty(e.languages.diff, "PREFIXES", { value: n });
})(Prism);
!(function (e) {
    var n = "(?:[ \t]+(?![ \t])(?:<SP_BS>)?|<SP_BS>)".replace(
            /<SP_BS>/g,
            function () {
                return "\\\\[\r\n](?:\\s|\\\\[\r\n]|#.*(?!.))*(?![\\s#]|\\\\[\r\n])";
            }
        ),
        r =
            "\"(?:[^\"\\\\\r\n]|\\\\(?:\r\n|[^]))*\"|'(?:[^'\\\\\r\n]|\\\\(?:\r\n|[^]))*'",
        t = "--[\\w-]+=(?:<STR>|(?![\"'])(?:[^\\s\\\\]|\\\\.)+)".replace(
            /<STR>/g,
            function () {
                return r;
            }
        ),
        o = { pattern: RegExp(r), greedy: !0 },
        i = { pattern: /(^[ \t]*)#.*/m, lookbehind: !0, greedy: !0 };
    function a(e, r) {
        return (
            (e = e
                .replace(/<OPT>/g, function () {
                    return t;
                })
                .replace(/<SP>/g, function () {
                    return n;
                })),
            RegExp(e, r)
        );
    }
    (e.languages.docker = {
        instruction: {
            pattern:
                /(^[ \t]*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)(?:\\.|[^\r\n\\])*(?:\\$(?:\s|#.*$)*(?![\s#])(?:\\.|[^\r\n\\])*)*/im,
            lookbehind: !0,
            greedy: !0,
            inside: {
                options: {
                    pattern: a(
                        "(^(?:ONBUILD<SP>)?\\w+<SP>)<OPT>(?:<SP><OPT>)*",
                        "i"
                    ),
                    lookbehind: !0,
                    greedy: !0,
                    inside: {
                        property: { pattern: /(^|\s)--[\w-]+/, lookbehind: !0 },
                        string: [
                            o,
                            {
                                pattern: /(=)(?!["'])(?:[^\s\\]|\\.)+/,
                                lookbehind: !0
                            }
                        ],
                        operator: /\\$/m,
                        punctuation: /=/
                    }
                },
                keyword: [
                    {
                        pattern: a(
                            "(^(?:ONBUILD<SP>)?HEALTHCHECK<SP>(?:<OPT><SP>)*)(?:CMD|NONE)\\b",
                            "i"
                        ),
                        lookbehind: !0,
                        greedy: !0
                    },
                    {
                        pattern: a(
                            "(^(?:ONBUILD<SP>)?FROM<SP>(?:<OPT><SP>)*(?!--)[^ \t\\\\]+<SP>)AS",
                            "i"
                        ),
                        lookbehind: !0,
                        greedy: !0
                    },
                    {
                        pattern: a("(^ONBUILD<SP>)\\w+", "i"),
                        lookbehind: !0,
                        greedy: !0
                    },
                    { pattern: /^\w+/, greedy: !0 }
                ],
                comment: i,
                string: o,
                variable: /\$(?:\w+|\{[^{}"'\\]*\})/,
                operator: /\\$/m
            }
        },
        comment: i
    }),
        (e.languages.dockerfile = e.languages.docker);
})(Prism);
Prism.languages.git = {
    comment: /^#.*/m,
    deleted: /^[-–].*/m,
    inserted: /^\+.*/m,
    string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
    command: { pattern: /^.*\$ git .*$/m, inside: { parameter: /\s--?\w+/ } },
    coord: /^@@.*@@$/m,
    "commit-sha1": /^commit \w{40}$/m
};
(Prism.languages.json = {
    property: {
        pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
        lookbehind: !0,
        greedy: !0
    },
    string: {
        pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
        lookbehind: !0,
        greedy: !0
    },
    comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
    number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    punctuation: /[{}[\],]/,
    operator: /:/,
    boolean: /\b(?:false|true)\b/,
    null: { pattern: /\bnull\b/, alias: "keyword" }
}),
    (Prism.languages.webmanifest = Prism.languages.json);
!(function (n) {
    var e = /("|')(?:\\(?:\r\n?|\n|.)|(?!\1)[^\\\r\n])*\1/;
    n.languages.json5 = n.languages.extend("json", {
        property: [
            { pattern: RegExp(e.source + "(?=\\s*:)"), greedy: !0 },
            {
                pattern:
                    /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/,
                alias: "unquoted"
            }
        ],
        string: { pattern: e, greedy: !0 },
        number: /[+-]?\b(?:NaN|Infinity|0x[a-fA-F\d]+)\b|[+-]?(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+\b)?/
    });
})(Prism);
(Prism.languages.jsonp = Prism.languages.extend("json", {
    punctuation: /[{}[\]();,.]/
})),
    Prism.languages.insertBefore("jsonp", "punctuation", {
        function:
            /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*\()/
    });
(Prism.languages.python = {
    comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0, greedy: !0 },
    "string-interpolation": {
        pattern:
            /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
        greedy: !0,
        inside: {
            interpolation: {
                pattern:
                    /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
                lookbehind: !0,
                inside: {
                    "format-spec": {
                        pattern: /(:)[^:(){}]+(?=\}$)/,
                        lookbehind: !0
                    },
                    "conversion-option": {
                        pattern: /![sra](?=[:}]$)/,
                        alias: "punctuation"
                    },
                    rest: null
                }
            },
            string: /[\s\S]+/
        }
    },
    "triple-quoted-string": {
        pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
        greedy: !0,
        alias: "string"
    },
    string: {
        pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
        greedy: !0
    },
    function: {
        pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
        lookbehind: !0
    },
    "class-name": { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 },
    decorator: {
        pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
        lookbehind: !0,
        alias: ["annotation", "punctuation"],
        inside: { punctuation: /\./ }
    },
    keyword:
        /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
    builtin:
        /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
    boolean: /\b(?:False|None|True)\b/,
    number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
    operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
    punctuation: /[{}[\];(),.:]/
}),
    (Prism.languages.python[
        "string-interpolation"
    ].inside.interpolation.inside.rest = Prism.languages.python),
    (Prism.languages.py = Prism.languages.python);
!(function (t) {
    var n = t.util.clone(t.languages.javascript),
        e = "(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})";
    function a(t, n) {
        return (
            (t = t
                .replace(/<S>/g, function () {
                    return "(?:\\s|//.*(?!.)|/\\*(?:[^*]|\\*(?!/))\\*/)";
                })
                .replace(/<BRACES>/g, function () {
                    return "(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})";
                })
                .replace(/<SPREAD>/g, function () {
                    return e;
                })),
            RegExp(t, n)
        );
    }
    (e = a(e).source),
        (t.languages.jsx = t.languages.extend("markup", n)),
        (t.languages.jsx.tag.pattern = a(
            "</?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:\"(?:\\\\[^]|[^\\\\\"])*\"|'(?:\\\\[^]|[^\\\\'])*'|[^\\s{'\"/>=]+|<BRACES>))?|<SPREAD>))*<S>*/?)?>"
        )),
        (t.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/),
        (t.languages.jsx.tag.inside["attr-value"].pattern =
            /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/),
        (t.languages.jsx.tag.inside.tag.inside["class-name"] =
            /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
        (t.languages.jsx.tag.inside.comment = n.comment),
        t.languages.insertBefore(
            "inside",
            "attr-name",
            { spread: { pattern: a("<SPREAD>"), inside: t.languages.jsx } },
            t.languages.jsx.tag
        ),
        t.languages.insertBefore(
            "inside",
            "special-attr",
            {
                script: {
                    pattern: a("=<BRACES>"),
                    alias: "language-javascript",
                    inside: {
                        "script-punctuation": {
                            pattern: /^=(?=\{)/,
                            alias: "punctuation"
                        },
                        rest: t.languages.jsx
                    }
                }
            },
            t.languages.jsx.tag
        );
    var s = function (t) {
            return t
                ? "string" == typeof t
                    ? t
                    : "string" == typeof t.content
                    ? t.content
                    : t.content.map(s).join("")
                : "";
        },
        g = function (n) {
            for (var e = [], a = 0; a < n.length; a++) {
                var o = n[a],
                    i = !1;
                if (
                    ("string" != typeof o &&
                        ("tag" === o.type &&
                        o.content[0] &&
                        "tag" === o.content[0].type
                            ? "</" === o.content[0].content[0].content
                                ? e.length > 0 &&
                                  e[e.length - 1].tagName ===
                                      s(o.content[0].content[1]) &&
                                  e.pop()
                                : "/>" ===
                                      o.content[o.content.length - 1].content ||
                                  e.push({
                                      tagName: s(o.content[0].content[1]),
                                      openedBraces: 0
                                  })
                            : e.length > 0 &&
                              "punctuation" === o.type &&
                              "{" === o.content
                            ? e[e.length - 1].openedBraces++
                            : e.length > 0 &&
                              e[e.length - 1].openedBraces > 0 &&
                              "punctuation" === o.type &&
                              "}" === o.content
                            ? e[e.length - 1].openedBraces--
                            : (i = !0)),
                    (i || "string" == typeof o) &&
                        e.length > 0 &&
                        0 === e[e.length - 1].openedBraces)
                ) {
                    var r = s(o);
                    a < n.length - 1 &&
                        ("string" == typeof n[a + 1] ||
                            "plain-text" === n[a + 1].type) &&
                        ((r += s(n[a + 1])), n.splice(a + 1, 1)),
                        a > 0 &&
                            ("string" == typeof n[a - 1] ||
                                "plain-text" === n[a - 1].type) &&
                            ((r = s(n[a - 1]) + r), n.splice(a - 1, 1), a--),
                        (n[a] = new t.Token("plain-text", r, null, r));
                }
                o.content && "string" != typeof o.content && g(o.content);
            }
        };
    t.hooks.add("after-tokenize", function (t) {
        ("jsx" !== t.language && "tsx" !== t.language) || g(t.tokens);
    });
})(Prism);
!(function (e) {
    (e.languages.typescript = e.languages.extend("javascript", {
        "class-name": {
            pattern:
                /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
            lookbehind: !0,
            greedy: !0,
            inside: null
        },
        builtin:
            /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
    })),
        e.languages.typescript.keyword.push(
            /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
            /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
            /\btype\b(?=\s*(?:[\{*]|$))/
        ),
        delete e.languages.typescript.parameter,
        delete e.languages.typescript["literal-property"];
    var s = e.languages.extend("typescript", {});
    delete s["class-name"],
        (e.languages.typescript["class-name"].inside = s),
        e.languages.insertBefore("typescript", "function", {
            decorator: {
                pattern: /@[$\w\xA0-\uFFFF]+/,
                inside: {
                    at: { pattern: /^@/, alias: "operator" },
                    function: /^[\s\S]+/
                }
            },
            "generic-function": {
                pattern:
                    /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
                greedy: !0,
                inside: {
                    function:
                        /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
                    generic: {
                        pattern: /<[\s\S]+/,
                        alias: "class-name",
                        inside: s
                    }
                }
            }
        }),
        (e.languages.ts = e.languages.typescript);
})(Prism);
!(function (e) {
    var a = e.util.clone(e.languages.typescript);
    (e.languages.tsx = e.languages.extend("jsx", a)),
        delete e.languages.tsx.parameter,
        delete e.languages.tsx["literal-property"];
    var t = e.languages.tsx.tag;
    (t.pattern = RegExp(
        "(^|[^\\w$]|(?=</))(?:" + t.pattern.source + ")",
        t.pattern.flags
    )),
        (t.lookbehind = !0);
})(Prism);
!(function (a) {
    var e = { pattern: /\\[\\(){}[\]^$+*?|.]/, alias: "escape" },
        n =
            /\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/,
        t = "(?:[^\\\\-]|" + n.source + ")",
        s = RegExp(t + "-" + t),
        i = {
            pattern: /(<|')[^<>']+(?=[>']$)/,
            lookbehind: !0,
            alias: "variable"
        };
    a.languages.regex = {
        "char-class": {
            pattern: /((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,
            lookbehind: !0,
            inside: {
                "char-class-negation": {
                    pattern: /(^\[)\^/,
                    lookbehind: !0,
                    alias: "operator"
                },
                "char-class-punctuation": {
                    pattern: /^\[|\]$/,
                    alias: "punctuation"
                },
                range: {
                    pattern: s,
                    inside: {
                        escape: n,
                        "range-punctuation": { pattern: /-/, alias: "operator" }
                    }
                },
                "special-escape": e,
                "char-set": {
                    pattern: /\\[wsd]|\\p\{[^{}]+\}/i,
                    alias: "class-name"
                },
                escape: n
            }
        },
        "special-escape": e,
        "char-set": {
            pattern: /\.|\\[wsd]|\\p\{[^{}]+\}/i,
            alias: "class-name"
        },
        backreference: [
            { pattern: /\\(?![123][0-7]{2})[1-9]/, alias: "keyword" },
            {
                pattern: /\\k<[^<>']+>/,
                alias: "keyword",
                inside: { "group-name": i }
            }
        ],
        anchor: { pattern: /[$^]|\\[ABbGZz]/, alias: "function" },
        escape: n,
        group: [
            {
                pattern:
                    /\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,
                alias: "punctuation",
                inside: { "group-name": i }
            },
            { pattern: /\)/, alias: "punctuation" }
        ],
        quantifier: {
            pattern: /(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,
            alias: "number"
        },
        alternation: { pattern: /\|/, alias: "keyword" }
    };
})(Prism);
!(function (s) {
    var n = [
        '"(?:\\\\[^]|\\$\\([^)]+\\)|\\$(?!\\()|`[^`]+`|[^"\\\\`$])*"',
        "'[^']*'",
        "\\$'(?:[^'\\\\]|\\\\[^])*'",
        "<<-?\\s*([\"']?)(\\w+)\\1\\s[^]*?[\r\n]\\2"
    ].join("|");
    (s.languages["shell-session"] = {
        command: {
            pattern: RegExp(
                '^(?:[^\\s@:$#%*!/\\\\]+@[^\r\n@:$#%*!/\\\\]+(?::[^\0-\\x1F$#%*?"<>:;|]+)?|[/~.][^\0-\\x1F$#%*?"<>@:;|]*)?[$#%](?=\\s)' +
                    "(?:[^\\\\\r\n \t'\"<$]|[ \t](?:(?!#)|#.*$)|\\\\(?:[^\r]|\r\n?)|\\$(?!')|<(?!<)|<<str>>)+".replace(
                        /<<str>>/g,
                        function () {
                            return n;
                        }
                    ),
                "m"
            ),
            greedy: !0,
            inside: {
                info: {
                    pattern: /^[^#$%]+/,
                    alias: "punctuation",
                    inside: {
                        user: /^[^\s@:$#%*!/\\]+@[^\r\n@:$#%*!/\\]+/,
                        punctuation: /:/,
                        path: /[\s\S]+/
                    }
                },
                bash: {
                    pattern: /(^[$#%]\s*)\S[\s\S]*/,
                    lookbehind: !0,
                    alias: "language-bash",
                    inside: s.languages.bash
                },
                "shell-symbol": { pattern: /^[$#%]/, alias: "important" }
            }
        },
        output: /.(?:.*(?:[\r\n]|.$))*/
    }),
        (s.languages["sh-session"] = s.languages.shellsession =
            s.languages["shell-session"]);
})(Prism);
!(function () {
    if ("undefined" != typeof Prism && "undefined" != typeof document) {
        var e = "line-numbers",
            n = /\n(?!$)/g,
            t = (Prism.plugins.lineNumbers = {
                getLine: function (n, t) {
                    if ("PRE" === n.tagName && n.classList.contains(e)) {
                        var i = n.querySelector(".line-numbers-rows");
                        if (i) {
                            var r =
                                    parseInt(
                                        n.getAttribute("data-start"),
                                        10
                                    ) || 1,
                                s = r + (i.children.length - 1);
                            t < r && (t = r), t > s && (t = s);
                            var l = t - r;
                            return i.children[l];
                        }
                    }
                },
                resize: function (e) {
                    r([e]);
                },
                assumeViewportIndependence: !0
            }),
            i = void 0;
        window.addEventListener("resize", function () {
            (t.assumeViewportIndependence && i === window.innerWidth) ||
                ((i = window.innerWidth),
                r(
                    Array.prototype.slice.call(
                        document.querySelectorAll("pre.line-numbers")
                    )
                ));
        }),
            Prism.hooks.add("complete", function (t) {
                if (t.code) {
                    var i = t.element,
                        s = i.parentNode;
                    if (
                        s &&
                        /pre/i.test(s.nodeName) &&
                        !i.querySelector(".line-numbers-rows") &&
                        Prism.util.isActive(i, e)
                    ) {
                        i.classList.remove(e), s.classList.add(e);
                        var l,
                            o = t.code.match(n),
                            a = o ? o.length + 1 : 1,
                            u = new Array(a + 1).join("<span></span>");
                        (l = document.createElement("span")).setAttribute(
                            "aria-hidden",
                            "true"
                        ),
                            (l.className = "line-numbers-rows"),
                            (l.innerHTML = u),
                            s.hasAttribute("data-start") &&
                                (s.style.counterReset =
                                    "linenumber " +
                                    (parseInt(
                                        s.getAttribute("data-start"),
                                        10
                                    ) -
                                        1)),
                            t.element.appendChild(l),
                            r([s]),
                            Prism.hooks.run("line-numbers", t);
                    }
                }
            }),
            Prism.hooks.add("line-numbers", function (e) {
                (e.plugins = e.plugins || {}), (e.plugins.lineNumbers = !0);
            });
    }
    function r(e) {
        if (
            0 !=
            (e = e.filter(function (e) {
                var n,
                    t = ((n = e),
                    n
                        ? window.getComputedStyle
                            ? getComputedStyle(n)
                            : n.currentStyle || null
                        : null)["white-space"];
                return "pre-wrap" === t || "pre-line" === t;
            })).length
        ) {
            var t = e
                .map(function (e) {
                    var t = e.querySelector("code"),
                        i = e.querySelector(".line-numbers-rows");
                    if (t && i) {
                        var r = e.querySelector(".line-numbers-sizer"),
                            s = t.textContent.split(n);
                        r ||
                            (((r = document.createElement("span")).className =
                                "line-numbers-sizer"),
                            t.appendChild(r)),
                            (r.innerHTML = "0"),
                            (r.style.display = "block");
                        var l = r.getBoundingClientRect().height;
                        return (
                            (r.innerHTML = ""),
                            {
                                element: e,
                                lines: s,
                                lineHeights: [],
                                oneLinerHeight: l,
                                sizer: r
                            }
                        );
                    }
                })
                .filter(Boolean);
            t.forEach(function (e) {
                var n = e.sizer,
                    t = e.lines,
                    i = e.lineHeights,
                    r = e.oneLinerHeight;
                (i[t.length - 1] = void 0),
                    t.forEach(function (e, t) {
                        if (e && e.length > 1) {
                            var s = n.appendChild(
                                document.createElement("span")
                            );
                            (s.style.display = "block"), (s.textContent = e);
                        } else i[t] = r;
                    });
            }),
                t.forEach(function (e) {
                    for (
                        var n = e.sizer, t = e.lineHeights, i = 0, r = 0;
                        r < t.length;
                        r++
                    )
                        void 0 === t[r] &&
                            (t[r] =
                                n.children[i++].getBoundingClientRect().height);
                }),
                t.forEach(function (e) {
                    var n = e.sizer,
                        t = e.element.querySelector(".line-numbers-rows");
                    (n.style.display = "none"),
                        (n.innerHTML = ""),
                        e.lineHeights.forEach(function (e, n) {
                            t.children[n].style.height = e + "px";
                        });
                });
        }
    }
})();
!(function () {
    if ("undefined" != typeof Prism && "undefined" != typeof document) {
        var e = [],
            t = {},
            n = function () {};
        Prism.plugins.toolbar = {};
        var a = (Prism.plugins.toolbar.registerButton = function (n, a) {
                var r;
                (r =
                    "function" == typeof a
                        ? a
                        : function (e) {
                              var t;
                              return (
                                  "function" == typeof a.onClick
                                      ? (((t =
                                            document.createElement(
                                                "button"
                                            )).type = "button"),
                                        t.addEventListener(
                                            "click",
                                            function () {
                                                a.onClick.call(this, e);
                                            }
                                        ))
                                      : "string" == typeof a.url
                                      ? ((t =
                                            document.createElement("a")).href =
                                            a.url)
                                      : (t = document.createElement("span")),
                                  a.className && t.classList.add(a.className),
                                  (t.textContent = a.text),
                                  t
                              );
                          }),
                    n in t
                        ? console.warn(
                              'There is a button with the key "' +
                                  n +
                                  '" registered already.'
                          )
                        : e.push((t[n] = r));
            }),
            r = (Prism.plugins.toolbar.hook = function (a) {
                var r = a.element.parentNode;
                if (
                    r &&
                    /pre/i.test(r.nodeName) &&
                    !r.parentNode.classList.contains("code-toolbar")
                ) {
                    var o = document.createElement("div");
                    o.classList.add("code-toolbar"),
                        r.parentNode.insertBefore(o, r),
                        o.appendChild(r);
                    var i = document.createElement("div");
                    i.classList.add("toolbar");
                    var l = e,
                        d = (function (e) {
                            for (; e; ) {
                                var t = e.getAttribute("data-toolbar-order");
                                if (null != t)
                                    return (t = t.trim()).length
                                        ? t.split(/\s*,\s*/g)
                                        : [];
                                e = e.parentElement;
                            }
                        })(a.element);
                    d &&
                        (l = d.map(function (e) {
                            return t[e] || n;
                        })),
                        l.forEach(function (e) {
                            var t = e(a);
                            if (t) {
                                var n = document.createElement("div");
                                n.classList.add("toolbar-item"),
                                    n.appendChild(t),
                                    i.appendChild(n);
                            }
                        }),
                        o.appendChild(i);
                }
            });
        a("label", function (e) {
            var t = e.element.parentNode;
            if (t && /pre/i.test(t.nodeName) && t.hasAttribute("data-label")) {
                var n,
                    a,
                    r = t.getAttribute("data-label");
                try {
                    a = document.querySelector("template#" + r);
                } catch (e) {}
                return (
                    a
                        ? (n = a.content)
                        : (t.hasAttribute("data-url")
                              ? ((n = document.createElement("a")).href =
                                    t.getAttribute("data-url"))
                              : (n = document.createElement("span")),
                          (n.textContent = r)),
                    n
                );
            }
        }),
            Prism.hooks.add("complete", r);
    }
})();
!(function () {
    if ("undefined" != typeof Prism && "undefined" != typeof document)
        if (Prism.plugins.toolbar) {
            var e = {
                none: "Plain text",
                plain: "Plain text",
                plaintext: "Plain text",
                text: "Plain text",
                txt: "Plain text",
                html: "HTML",
                xml: "XML",
                svg: "SVG",
                mathml: "MathML",
                ssml: "SSML",
                rss: "RSS",
                css: "CSS",
                clike: "C-like",
                js: "JavaScript",
                abap: "ABAP",
                abnf: "ABNF",
                al: "AL",
                antlr4: "ANTLR4",
                g4: "ANTLR4",
                apacheconf: "Apache Configuration",
                apl: "APL",
                aql: "AQL",
                ino: "Arduino",
                arff: "ARFF",
                armasm: "ARM Assembly",
                "arm-asm": "ARM Assembly",
                art: "Arturo",
                asciidoc: "AsciiDoc",
                adoc: "AsciiDoc",
                aspnet: "ASP.NET (C#)",
                asm6502: "6502 Assembly",
                asmatmel: "Atmel AVR Assembly",
                autohotkey: "AutoHotkey",
                autoit: "AutoIt",
                avisynth: "AviSynth",
                avs: "AviSynth",
                "avro-idl": "Avro IDL",
                avdl: "Avro IDL",
                awk: "AWK",
                gawk: "GAWK",
                basic: "BASIC",
                bbcode: "BBcode",
                bnf: "BNF",
                rbnf: "RBNF",
                bsl: "BSL (1C:Enterprise)",
                oscript: "OneScript",
                csharp: "C#",
                cs: "C#",
                dotnet: "C#",
                cpp: "C++",
                cfscript: "CFScript",
                cfc: "CFScript",
                cil: "CIL",
                cmake: "CMake",
                cobol: "COBOL",
                coffee: "CoffeeScript",
                conc: "Concurnas",
                csp: "Content-Security-Policy",
                "css-extras": "CSS Extras",
                csv: "CSV",
                cue: "CUE",
                dataweave: "DataWeave",
                dax: "DAX",
                django: "Django/Jinja2",
                jinja2: "Django/Jinja2",
                "dns-zone-file": "DNS zone file",
                "dns-zone": "DNS zone file",
                dockerfile: "Docker",
                dot: "DOT (Graphviz)",
                gv: "DOT (Graphviz)",
                ebnf: "EBNF",
                editorconfig: "EditorConfig",
                ejs: "EJS",
                etlua: "Embedded Lua templating",
                erb: "ERB",
                "excel-formula": "Excel Formula",
                xlsx: "Excel Formula",
                xls: "Excel Formula",
                fsharp: "F#",
                "firestore-security-rules": "Firestore security rules",
                ftl: "FreeMarker Template Language",
                gml: "GameMaker Language",
                gamemakerlanguage: "GameMaker Language",
                gap: "GAP (CAS)",
                gcode: "G-code",
                gdscript: "GDScript",
                gedcom: "GEDCOM",
                gettext: "gettext",
                po: "gettext",
                glsl: "GLSL",
                gn: "GN",
                gni: "GN",
                "linker-script": "GNU Linker Script",
                ld: "GNU Linker Script",
                "go-module": "Go module",
                "go-mod": "Go module",
                graphql: "GraphQL",
                hbs: "Handlebars",
                hs: "Haskell",
                hcl: "HCL",
                hlsl: "HLSL",
                http: "HTTP",
                hpkp: "HTTP Public-Key-Pins",
                hsts: "HTTP Strict-Transport-Security",
                ichigojam: "IchigoJam",
                "icu-message-format": "ICU Message Format",
                idr: "Idris",
                ignore: ".ignore",
                gitignore: ".gitignore",
                hgignore: ".hgignore",
                npmignore: ".npmignore",
                inform7: "Inform 7",
                javadoc: "JavaDoc",
                javadoclike: "JavaDoc-like",
                javastacktrace: "Java stack trace",
                jq: "JQ",
                jsdoc: "JSDoc",
                "js-extras": "JS Extras",
                json: "JSON",
                webmanifest: "Web App Manifest",
                json5: "JSON5",
                jsonp: "JSONP",
                jsstacktrace: "JS stack trace",
                "js-templates": "JS Templates",
                keepalived: "Keepalived Configure",
                kts: "Kotlin Script",
                kt: "Kotlin",
                kumir: "KuMir (КуМир)",
                kum: "KuMir (КуМир)",
                latex: "LaTeX",
                tex: "TeX",
                context: "ConTeXt",
                lilypond: "LilyPond",
                ly: "LilyPond",
                emacs: "Lisp",
                elisp: "Lisp",
                "emacs-lisp": "Lisp",
                llvm: "LLVM IR",
                log: "Log file",
                lolcode: "LOLCODE",
                magma: "Magma (CAS)",
                md: "Markdown",
                "markup-templating": "Markup templating",
                matlab: "MATLAB",
                maxscript: "MAXScript",
                mel: "MEL",
                mongodb: "MongoDB",
                moon: "MoonScript",
                n1ql: "N1QL",
                n4js: "N4JS",
                n4jsd: "N4JS",
                "nand2tetris-hdl": "Nand To Tetris HDL",
                naniscript: "Naninovel Script",
                nani: "Naninovel Script",
                nasm: "NASM",
                neon: "NEON",
                nginx: "nginx",
                nsis: "NSIS",
                objectivec: "Objective-C",
                objc: "Objective-C",
                ocaml: "OCaml",
                opencl: "OpenCL",
                openqasm: "OpenQasm",
                qasm: "OpenQasm",
                parigp: "PARI/GP",
                objectpascal: "Object Pascal",
                psl: "PATROL Scripting Language",
                pcaxis: "PC-Axis",
                px: "PC-Axis",
                peoplecode: "PeopleCode",
                pcode: "PeopleCode",
                php: "PHP",
                phpdoc: "PHPDoc",
                "php-extras": "PHP Extras",
                "plant-uml": "PlantUML",
                plantuml: "PlantUML",
                plsql: "PL/SQL",
                powerquery: "PowerQuery",
                pq: "PowerQuery",
                mscript: "PowerQuery",
                powershell: "PowerShell",
                promql: "PromQL",
                properties: ".properties",
                protobuf: "Protocol Buffers",
                purebasic: "PureBasic",
                pbfasm: "PureBasic",
                purs: "PureScript",
                py: "Python",
                qsharp: "Q#",
                qs: "Q#",
                q: "Q (kdb+ database)",
                qml: "QML",
                rkt: "Racket",
                cshtml: "Razor C#",
                razor: "Razor C#",
                jsx: "React JSX",
                tsx: "React TSX",
                renpy: "Ren'py",
                rpy: "Ren'py",
                res: "ReScript",
                rest: "reST (reStructuredText)",
                robotframework: "Robot Framework",
                robot: "Robot Framework",
                rb: "Ruby",
                sas: "SAS",
                sass: "Sass (Sass)",
                scss: "Sass (Scss)",
                "shell-session": "Shell session",
                "sh-session": "Shell session",
                shellsession: "Shell session",
                sml: "SML",
                smlnj: "SML/NJ",
                solidity: "Solidity (Ethereum)",
                sol: "Solidity (Ethereum)",
                "solution-file": "Solution file",
                sln: "Solution file",
                soy: "Soy (Closure Template)",
                sparql: "SPARQL",
                rq: "SPARQL",
                "splunk-spl": "Splunk SPL",
                sqf: "SQF: Status Quo Function (Arma 3)",
                sql: "SQL",
                stata: "Stata Ado",
                iecst: "Structured Text (IEC 61131-3)",
                supercollider: "SuperCollider",
                sclang: "SuperCollider",
                systemd: "Systemd configuration file",
                "t4-templating": "T4 templating",
                "t4-cs": "T4 Text Templates (C#)",
                t4: "T4 Text Templates (C#)",
                "t4-vb": "T4 Text Templates (VB)",
                tap: "TAP",
                tt2: "Template Toolkit 2",
                toml: "TOML",
                trickle: "trickle",
                troy: "troy",
                trig: "TriG",
                ts: "TypeScript",
                tsconfig: "TSConfig",
                uscript: "UnrealScript",
                uc: "UnrealScript",
                uorazor: "UO Razor Script",
                uri: "URI",
                url: "URL",
                vbnet: "VB.Net",
                vhdl: "VHDL",
                vim: "vim",
                "visual-basic": "Visual Basic",
                vba: "VBA",
                vb: "Visual Basic",
                wasm: "WebAssembly",
                "web-idl": "Web IDL",
                webidl: "Web IDL",
                wiki: "Wiki markup",
                wolfram: "Wolfram language",
                nb: "Mathematica Notebook",
                wl: "Wolfram language",
                xeoracube: "XeoraCube",
                "xml-doc": "XML doc (.net)",
                xojo: "Xojo (REALbasic)",
                xquery: "XQuery",
                yaml: "YAML",
                yml: "YAML",
                yang: "YANG"
            };
            Prism.plugins.toolbar.registerButton("show-language", function (a) {
                var t = a.element.parentNode;
                if (t && /pre/i.test(t.nodeName)) {
                    var o,
                        s =
                            t.getAttribute("data-language") ||
                            e[a.language] ||
                            ((o = a.language)
                                ? (
                                      o.substring(0, 1).toUpperCase() +
                                      o.substring(1)
                                  ).replace(/s(?=cript)/, "S")
                                : o);
                    if (s) {
                        var r = document.createElement("span");
                        return (r.textContent = s), r;
                    }
                }
            });
        } else
            console.warn("Show Languages plugin loaded before Toolbar plugin.");
})();
!(function () {
    if ("undefined" != typeof Prism && "undefined" != typeof document) {
        var t = [];
        o(function (t) {
            if (t && t.meta && t.data) {
                if (t.meta.status && t.meta.status >= 400)
                    return "Error: " + (t.data.message || t.meta.status);
                if ("string" == typeof t.data.content)
                    return "function" == typeof atob
                        ? atob(t.data.content.replace(/\s/g, ""))
                        : "Your browser cannot decode base64";
            }
            return null;
        }, "github"),
            o(function (t, e) {
                if (t && t.meta && t.data && t.data.files) {
                    if (t.meta.status && t.meta.status >= 400)
                        return "Error: " + (t.data.message || t.meta.status);
                    var n = t.data.files,
                        a = e.getAttribute("data-filename");
                    if (null == a)
                        for (var r in n)
                            if (n.hasOwnProperty(r)) {
                                a = r;
                                break;
                            }
                    return void 0 !== n[a]
                        ? n[a].content
                        : "Error: unknown or missing gist file " + a;
                }
                return null;
            }, "gist"),
            o(function (t) {
                return t && t.node && "string" == typeof t.data ? t.data : null;
            }, "bitbucket");
        var e = 0,
            n = "data-jsonp-status",
            a = "failed",
            r =
                'pre[data-jsonp]:not([data-jsonp-status="loaded"]):not([data-jsonp-status="loading"])';
        Prism.hooks.add("before-highlightall", function (t) {
            t.selector += ", " + r;
        }),
            Prism.hooks.add("before-sanity-check", function (o) {
                var i,
                    u = o.element;
                if (u.matches(r)) {
                    (o.code = ""), u.setAttribute(n, "loading");
                    var s = u.appendChild(document.createElement("CODE"));
                    s.textContent = "Loading…";
                    var d = o.language;
                    s.className = "language-" + d;
                    var f = Prism.plugins.autoloader;
                    f && f.loadLanguages(d);
                    var l = u.getAttribute("data-adapter"),
                        c = null;
                    if (l) {
                        if ("function" != typeof window[l])
                            return (
                                u.setAttribute(n, a),
                                void (s.textContent =
                                    ((i = l),
                                    '✖ Error: JSONP adapter function "' +
                                        i +
                                        "\" doesn't exist"))
                            );
                        c = window[l];
                    }
                    var p = u.getAttribute("data-jsonp");
                    !(function (r, o, i, d) {
                        var f = "prismjsonp" + e++,
                            l = document.createElement("a");
                        (l.href = r),
                            (l.href +=
                                (l.search ? "&" : "?") +
                                (o || "callback") +
                                "=" +
                                f);
                        var p = document.createElement("script");
                        (p.src = l.href),
                            (p.onerror = function () {
                                g(), d();
                            });
                        var m = setTimeout(function () {
                            g(), d();
                        }, Prism.plugins.jsonphighlight.timeout);
                        function g() {
                            clearTimeout(m),
                                document.head.removeChild(p),
                                delete window[f];
                        }
                        (window[f] = function (e) {
                            g(),
                                (function (e) {
                                    var r = null;
                                    if (c) r = c(e, u);
                                    else
                                        for (
                                            var o = 0, i = t.length;
                                            o < i &&
                                            null === (r = t[o].adapter(e, u));
                                            o++
                                        );
                                    null === r
                                        ? (u.setAttribute(n, a),
                                          (s.textContent =
                                              "✖ Error: Cannot parse response (perhaps you need an adapter function?)"))
                                        : (u.setAttribute(n, "loaded"),
                                          (s.textContent = r),
                                          Prism.highlightElement(s));
                                })(e);
                        }),
                            document.head.appendChild(p);
                    })(p, u.getAttribute("data-callback"), 0, function () {
                        u.setAttribute(n, a),
                            (s.textContent = "✖ Error: Timeout loading " + p);
                    });
                }
            }),
            (Prism.plugins.jsonphighlight = {
                timeout: 5e3,
                registerAdapter: o,
                removeAdapter: function (e) {
                    if (
                        ("string" == typeof e && (e = i(e)),
                        "function" == typeof e)
                    ) {
                        var n = t.findIndex(function (t) {
                            return t.adapter === e;
                        });
                        n >= 0 && t.splice(n, 1);
                    }
                },
                highlight: function (t) {
                    for (
                        var e, n = (t || document).querySelectorAll(r), a = 0;
                        (e = n[a++]);

                    )
                        Prism.highlightElement(e);
                }
            });
    }
    function o(e, n) {
        (n = n || e.name),
            "function" != typeof e ||
                i(e) ||
                i(n) ||
                t.push({ adapter: e, name: n });
    }
    function i(e) {
        if ("function" == typeof e) {
            for (var n = 0; (a = t[n++]); )
                if (a.adapter.valueOf() === e.valueOf()) return a.adapter;
        } else if ("string" == typeof e) {
            var a;
            for (n = 0; (a = t[n++]); ) if (a.name === e) return a.adapter;
        }
        return null;
    }
})();
!(function () {
    if ("undefined" != typeof Prism) {
        var e =
            Object.assign ||
            function (e, n) {
                for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
                return e;
            };
        (n.prototype = {
            setDefaults: function (n) {
                this.defaults = e(this.defaults, n);
            },
            normalize: function (n, t) {
                for (var r in (t = e(this.defaults, t))) {
                    var i = r.replace(/-(\w)/g, function (e, n) {
                        return n.toUpperCase();
                    });
                    "normalize" !== r &&
                        "setDefaults" !== i &&
                        t[r] &&
                        this[i] &&
                        (n = this[i].call(this, n, t[r]));
                }
                return n;
            },
            leftTrim: function (e) {
                return e.replace(/^\s+/, "");
            },
            rightTrim: function (e) {
                return e.replace(/\s+$/, "");
            },
            tabsToSpaces: function (e, n) {
                return (
                    (n = 0 | n || 4), e.replace(/\t/g, new Array(++n).join(" "))
                );
            },
            spacesToTabs: function (e, n) {
                return (
                    (n = 0 | n || 4),
                    e.replace(RegExp(" {" + n + "}", "g"), "\t")
                );
            },
            removeTrailing: function (e) {
                return e.replace(/\s*?$/gm, "");
            },
            removeInitialLineFeed: function (e) {
                return e.replace(/^(?:\r?\n|\r)/, "");
            },
            removeIndent: function (e) {
                var n = e.match(/^[^\S\n\r]*(?=\S)/gm);
                return n && n[0].length
                    ? (n.sort(function (e, n) {
                          return e.length - n.length;
                      }),
                      n[0].length ? e.replace(RegExp("^" + n[0], "gm"), "") : e)
                    : e;
            },
            indent: function (e, n) {
                return e.replace(
                    /^[^\S\n\r]*(?=\S)/gm,
                    new Array(++n).join("\t") + "$&"
                );
            },
            breakLines: function (e, n) {
                n = !0 === n ? 80 : 0 | n || 80;
                for (var r = e.split("\n"), i = 0; i < r.length; ++i)
                    if (!(t(r[i]) <= n)) {
                        for (
                            var o = r[i].split(/(\s+)/g), a = 0, l = 0;
                            l < o.length;
                            ++l
                        ) {
                            var s = t(o[l]);
                            (a += s) > n && ((o[l] = "\n" + o[l]), (a = s));
                        }
                        r[i] = o.join("");
                    }
                return r.join("\n");
            }
        }),
            "undefined" != typeof module &&
                module.exports &&
                (module.exports = n),
            (Prism.plugins.NormalizeWhitespace = new n({
                "remove-trailing": !0,
                "remove-indent": !0,
                "left-trim": !0,
                "right-trim": !0
            })),
            Prism.hooks.add("before-sanity-check", function (e) {
                var n = Prism.plugins.NormalizeWhitespace;
                if (
                    (!e.settings ||
                        !1 !== e.settings["whitespace-normalization"]) &&
                    Prism.util.isActive(
                        e.element,
                        "whitespace-normalization",
                        !0
                    )
                )
                    if ((e.element && e.element.parentNode) || !e.code) {
                        var t = e.element.parentNode;
                        if (e.code && t && "pre" === t.nodeName.toLowerCase()) {
                            for (
                                var r = t.childNodes,
                                    i = "",
                                    o = "",
                                    a = !1,
                                    l = 0;
                                l < r.length;
                                ++l
                            ) {
                                var s = r[l];
                                s == e.element
                                    ? (a = !0)
                                    : "#text" === s.nodeName &&
                                      (a
                                          ? (o += s.nodeValue)
                                          : (i += s.nodeValue),
                                      t.removeChild(s),
                                      --l);
                            }
                            if (
                                e.element.children.length &&
                                Prism.plugins.KeepMarkup
                            ) {
                                var c = i + e.element.innerHTML + o;
                                (e.element.innerHTML = n.normalize(
                                    c,
                                    e.settings
                                )),
                                    (e.code = e.element.textContent);
                            } else
                                (e.code = i + e.code + o),
                                    (e.code = n.normalize(e.code, e.settings));
                        }
                    } else e.code = n.normalize(e.code, e.settings);
            });
    }
    function n(n) {
        this.defaults = e({}, n);
    }
    function t(e) {
        for (var n = 0, t = 0; t < e.length; ++t)
            e.charCodeAt(t) == "\t".charCodeAt(0) && (n += 3);
        return e.length + n;
    }
})();
!(function () {
    function t(t) {
        var e = document.createElement("textarea");
        (e.value = t.getText()),
            (e.style.top = "0"),
            (e.style.left = "0"),
            (e.style.position = "fixed"),
            document.body.appendChild(e),
            e.focus(),
            e.select();
        try {
            var o = document.execCommand("copy");
            setTimeout(function () {
                o ? t.success() : t.error();
            }, 1);
        } catch (e) {
            setTimeout(function () {
                t.error(e);
            }, 1);
        }
        document.body.removeChild(e);
    }
    "undefined" != typeof Prism &&
        "undefined" != typeof document &&
        (Prism.plugins.toolbar
            ? Prism.plugins.toolbar.registerButton(
                  "copy-to-clipboard",
                  function (e) {
                      var o = e.element,
                          n = (function (t) {
                              var e = {
                                  copy: "Copy",
                                  "copy-error": "Press Ctrl+C to copy",
                                  "copy-success": "Copied!",
                                  "copy-timeout": 5e3
                              };
                              for (var o in e) {
                                  for (
                                      var n = "data-prismjs-" + o, c = t;
                                      c && !c.hasAttribute(n);

                                  )
                                      c = c.parentElement;
                                  c && (e[o] = c.getAttribute(n));
                              }
                              return e;
                          })(o),
                          c = document.createElement("button");
                      (c.className = "copy-to-clipboard-button"),
                          c.setAttribute("type", "button");
                      var r = document.createElement("span");
                      return (
                          c.appendChild(r),
                          u("copy"),
                          (function (e, o) {
                              e.addEventListener("click", function () {
                                  !(function (e) {
                                      navigator.clipboard
                                          ? navigator.clipboard
                                                .writeText(e.getText())
                                                .then(e.success, function () {
                                                    t(e);
                                                })
                                          : t(e);
                                  })(o);
                              });
                          })(c, {
                              getText: function () {
                                  return o.textContent;
                              },
                              success: function () {
                                  u("copy-success"), i();
                              },
                              error: function () {
                                  u("copy-error"),
                                      setTimeout(function () {
                                          !(function (t) {
                                              window
                                                  .getSelection()
                                                  .selectAllChildren(t);
                                          })(o);
                                      }, 1),
                                      i();
                              }
                          }),
                          c
                      );
                      function i() {
                          setTimeout(function () {
                              u("copy");
                          }, n["copy-timeout"]);
                      }
                      function u(t) {
                          (r.textContent = n[t]),
                              c.setAttribute("data-copy-state", t);
                      }
                  }
              )
            : console.warn(
                  "Copy to Clipboard plugin loaded before Toolbar plugin."
              ));
})();
!(function () {
    if ("undefined" != typeof Prism && "undefined" != typeof document) {
        var e = { "(": ")", "[": "]", "{": "}" },
            t = { "(": "brace-round", "[": "brace-square", "{": "brace-curly" },
            n = { "${": "{" },
            r = 0,
            c = /^(pair-\d+-)(close|open)$/;
        Prism.hooks.add("complete", function (c) {
            var i = c.element,
                d = i.parentElement;
            if (d && "PRE" == d.tagName) {
                var u = [];
                if (
                    (Prism.util.isActive(i, "match-braces") &&
                        u.push("(", "[", "{"),
                    0 != u.length)
                ) {
                    d.__listenerAdded ||
                        (d.addEventListener("mousedown", function () {
                            var e = d.querySelector("code"),
                                t = s("brace-selected");
                            Array.prototype.slice
                                .call(e.querySelectorAll("." + t))
                                .forEach(function (e) {
                                    e.classList.remove(t);
                                });
                        }),
                        Object.defineProperty(d, "__listenerAdded", {
                            value: !0
                        }));
                    var f = Array.prototype.slice.call(
                            i.querySelectorAll(
                                "span." + s("token") + "." + s("punctuation")
                            )
                        ),
                        h = [];
                    u.forEach(function (c) {
                        for (
                            var i = e[c], d = s(t[c]), u = [], p = [], v = 0;
                            v < f.length;
                            v++
                        ) {
                            var m = f[v];
                            if (0 == m.childElementCount) {
                                var b = m.textContent;
                                (b = n[b] || b) === c
                                    ? (h.push({
                                          index: v,
                                          open: !0,
                                          element: m
                                      }),
                                      m.classList.add(d),
                                      m.classList.add(s("brace-open")),
                                      p.push(v))
                                    : b === i &&
                                      (h.push({
                                          index: v,
                                          open: !1,
                                          element: m
                                      }),
                                      m.classList.add(d),
                                      m.classList.add(s("brace-close")),
                                      p.length && u.push([v, p.pop()]));
                            }
                        }
                        u.forEach(function (e) {
                            var t = "pair-" + r++ + "-",
                                n = f[e[0]],
                                c = f[e[1]];
                            (n.id = t + "open"),
                                (c.id = t + "close"),
                                [n, c].forEach(function (e) {
                                    e.addEventListener("mouseenter", a),
                                        e.addEventListener("mouseleave", o),
                                        e.addEventListener("click", l);
                                });
                        });
                    });
                    var p = 0;
                    h.sort(function (e, t) {
                        return e.index - t.index;
                    }),
                        h.forEach(function (e) {
                            e.open
                                ? (e.element.classList.add(
                                      s("brace-level-" + ((p % 12) + 1))
                                  ),
                                  p++)
                                : ((p = Math.max(0, p - 1)),
                                  e.element.classList.add(
                                      s("brace-level-" + ((p % 12) + 1))
                                  ));
                        });
                }
            }
        });
    }
    function s(e) {
        var t = Prism.plugins.customClass;
        return t ? t.apply(e, "none") : e;
    }
    function i(e) {
        var t = c.exec(e.id);
        return document.querySelector(
            "#" + t[1] + ("open" == t[2] ? "close" : "open")
        );
    }
    function a() {
        Prism.util.isActive(this, "brace-hover", !0) &&
            [this, i(this)].forEach(function (e) {
                e.classList.add(s("brace-hover"));
            });
    }
    function o() {
        [this, i(this)].forEach(function (e) {
            e.classList.remove(s("brace-hover"));
        });
    }
    function l() {
        Prism.util.isActive(this, "brace-select", !0) &&
            [this, i(this)].forEach(function (e) {
                e.classList.add(s("brace-selected"));
            });
    }
})();
