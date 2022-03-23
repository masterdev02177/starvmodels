import { r as o, j as h, R as p, a as g, b as u } from "./vender";
const v = function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) l(s);
  new MutationObserver((s) => {
    for (const t of s)
      if (t.type === "childList")
        for (const d of t.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && l(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(s) {
    const t = {};
    return (
      s.integrity && (t.integrity = s.integrity),
      s.referrerpolicy && (t.referrerPolicy = s.referrerpolicy),
      s.crossorigin === "use-credentials"
        ? (t.credentials = "include")
        : s.crossorigin === "anonymous"
        ? (t.credentials = "omit")
        : (t.credentials = "same-origin"),
      t
    );
  }
  function l(s) {
    if (s.ep) return;
    s.ep = !0;
    const t = a(s);
    fetch(s.href, t);
  }
};
v();
function m() {
  const { innerWidth: r, innerHeight: n } = window;
  return { width: r, height: n };
}
function f() {
  const [r, n] = o.exports.useState(m());
  return (
    o.exports.useEffect(() => {
      function a() {
        n(m());
      }
      return (
        window.addEventListener("resize", a),
        () => window.removeEventListener("resize", a)
      );
    }, []),
    r
  );
}
const e = h.exports.jsx,
  i = h.exports.jsxs,
  N = h.exports.Fragment;
function w() {
  const r = o.exports.useRef(null),
    [n, a] = o.exports.useState(null);
  let { width: l } = f();
  return (
    console.log(l),
    i("nav", {
      className: `${l <= 837 && n ? "mobile-navbar" : ""} navbar`,
      children: [
        i("h1", { children: ["Starving ", e("br", {}), " Models"] }),
        i("div", {
          className: `${l <= 837 && n ? "mobile-nav-items" : ""} nav-items`,
          children: [
            i("ul", {
              className: `${l <= 837 ? "mobile-nav-links" : ""} nav-links`,
              children: [
                e("li", { children: "Project" }),
                e("li", { children: "Art" }),
                e("li", { children: "Charities" }),
                e("li", {
                  onClick: () => (window.location = "#utilities"),
                  children: "Utilities",
                }),
                e("li", {
                  onClick: () => (window.location = "#roadmap"),
                  children: "Roadmap",
                }),
                e("li", {
                  onClick: () => (window.location = "#team"),
                  children: "Team",
                }),
              ],
            }),
            i("ul", {
              className: "nav-social-links",
              children: [
                e("li", {
                  children: e("img", {
                    src: "/images/social/twitter.svg",
                    alt: "",
                  }),
                }),
                e("li", {
                  children: e("img", {
                    src: "/images/social/discord.svg",
                    alt: "",
                  }),
                }),
                e("li", {
                  children: e("img", {
                    src: "/images/social/instagram.svg",
                    alt: "",
                  }),
                }),
                e("li", {
                  children: e("img", {
                    src: "/images/social/angrybearz.svg",
                    alt: "",
                  }),
                }),
              ],
            }),
          ],
        }),
        e("div", {
          className: "menu-icon",
          ref: r,
          onClick: () => a(!n),
          children: e("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-6 w-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: 2,
            children: e("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M4 6h16M4 12h16M4 18h7",
            }),
          }),
        }),
      ],
    })
  );
}
function x() {
  return i("div", {
    className: "about-wrapper",
    children: [
      i("div", {
        className: "image_wrapper",
        children: [
          e("img", { src: "/images/about.png", alt: "" }),
          i("div", {
            className: "details",
            children: [
              i("div", {
                className: "title",
                children: [
                  e("p", { className: "nft", children: "NFT Starving Model" }),
                  e("p", { className: "colored-header", children: "Price" }),
                ],
              }),
              i("div", {
                className: "values",
                children: [
                  e("p", { className: "colored-header", children: "0.01" }),
                  e("p", { className: "colored-header", children: "0.875" }),
                ],
              }),
              i("div", {
                className: "icons",
                children: [
                  e("img", {
                    src: "/images/diamond.png",
                    alt: "",
                    style: { width: "20px" },
                  }),
                  i("div", {
                    className: "likes",
                    children: [
                      e("img", { src: "/images/heart.png", alt: "" }),
                      e("span", {
                        style: { marginLeft: ".5em" },
                        children: "100",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      i("div", {
        className: "content",
        children: [
          e("h2", { children: "NFT Starving Model" }),
          e("p", {
            children:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero eos quaerat unde aperiam commodi explicabo tempore sint architecto, odio repellendus, esse provident aspernatur harum maiores rem magnam repudiandae, tenetur atque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero eos quaerat unde aperiam commodi explicabo tempore sint",
          }),
        ],
      }),
    ],
  });
}
function c({ name: r, image: n, position: a }) {
  return i("div", {
    className: "person-container",
    children: [
      i("div", {
        className: "person-info",
        children: [
          e("h3", { children: r }),
          e("div", { className: "position", children: a }),
        ],
      }),
      e("img", { src: n, alt: "" }),
    ],
  });
}
function b() {
  return i("div", {
    className: "team",
    id: "team",
    children: [
      e("h2", { children: "Team" }),
      i("div", {
        className: "members",
        children: [
          e(c, {
            name: "Dan Smith",
            image: "/images/team/Dan.png",
            position: "Lead Artist",
          }),
          e(c, {
            name: "Joe Brown",
            image: "/images/team/Joe.png",
            position: "Artist",
          }),
          e(c, {
            name: "James David",
            image: "/images/team/James.png",
            position: "Project Coordinator",
          }),
          e(c, {
            name: "Joshua Jack",
            image: "/images/team/Jack.png",
            position: "Lead Developer",
          }),
        ],
      }),
    ],
  });
}
function y() {
  return i("div", {
    className: "utilities-container",
    id: "utilities",
    children: [
      e("h2", { className: "utilities-header", children: "Utilities" }),
      i("div", {
        class: "box",
        children: [
          e("img", {
            src: "/images/utilities_bg.png",
            className: "utilities-img",
            alt: "Utilities",
          }),
          i("div", {
            className: "points text one",
            children: [
              e("h3", { children: "Title goes here" }),
              i("p", {
                children: ["Details goes here in ", e("br", {}), "two lines"],
              }),
            ],
          }),
          i("div", {
            className: "points text two",
            children: [
              e("h3", { children: "Title goes here" }),
              i("p", {
                children: ["Details goes here in ", e("br", {}), "two lines"],
              }),
            ],
          }),
          i("div", {
            className: "points text three",
            children: [
              e("h3", { children: "Title goes here" }),
              i("p", {
                children: ["Details goes here in ", e("br", {}), "two lines"],
              }),
            ],
          }),
          i("div", {
            className: "points text four",
            children: [
              e("h3", { children: "Title goes here" }),
              i("p", {
                children: ["Details goes here in ", e("br", {}), "two lines"],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function T() {
  const [r, n] = o.exports.useState("second");
  return i("div", {
    className: "roadmap",
    id: "roadmap",
    children: [
      e("h3", { className: "title", children: "Roadmap" }),
      i("div", {
        className: "container",
        children: [
          i("div", {
            className: `map_holder ${r === "first" ? "active" : ""}`,
            onMouseEnter: () => n("first"),
            children: [
              e("div", {
                className: "triangle",
                children: e("img", {
                  src: `/images/${
                    r === "first" ? "torch_on.png" : "torch_off.png"
                  }`,
                  style: { width: "220px", height: "260px" },
                  alt: "",
                }),
              }),
              i("div", {
                className: "content",
                children: [
                  e("h3", { children: "Title goes here" }),
                  i("p", {
                    children: [
                      "details goes here in",
                      e("br", {}),
                      "two lines",
                    ],
                  }),
                ],
              }),
            ],
          }),
          i("div", {
            className: `map_holder ${r === "second" ? "active" : ""}`,
            onMouseEnter: () => n("second"),
            children: [
              e("div", {
                className: "triangle",
                children: e("img", {
                  src: `/images/${
                    r === "second" ? "torch_on.png" : "torch_off.png"
                  }`,
                  style: { width: "220px", height: "260px" },
                  alt: "",
                }),
              }),
              i("div", {
                className: "content",
                children: [
                  e("h3", { children: "Title goes here" }),
                  i("p", {
                    children: [
                      "details goes here in",
                      e("br", {}),
                      "two lines",
                    ],
                  }),
                ],
              }),
            ],
          }),
          i("div", {
            className: `map_holder ${r === "third" ? "active" : ""}`,
            onMouseEnter: () => n("third"),
            children: [
              e("div", {
                className: "triangle",
                children: e("img", {
                  src: `/images/${
                    r === "third" ? "torch_on.png" : "torch_off.png"
                  }`,
                  style: { width: "220px", height: "260px" },
                  alt: "",
                }),
              }),
              i("div", {
                className: "content",
                children: [
                  e("h3", { children: "Title goes here" }),
                  i("p", {
                    children: [
                      "details goes here in",
                      e("br", {}),
                      "two lines",
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function $() {
  return (
    o.exports.useState(0),
    i("div", {
      children: [
        i("header", {
          children: [
            e(w, {}),
            i("div", {
              className: "banner-text",
              children: [
                e("h2", { children: "Starving Models" }),
                e("h2", {
                  className: "sub-title",
                  children: e(p, {
                    typingDelay: 200,
                    cursorRenderer: (r) => e(N, {}),
                    text: [" NFTs", "NFTs"],
                  }),
                }),
                e("p", { children: "100+ NFTs Artistic Starving Models" }),
              ],
            }),
          ],
        }),
        e(x, {}),
        e(T, {}),
        e(y, {}),
        e(b, {}),
      ],
    })
  );
}
g.render(
  e(u.StrictMode, { children: e($, {}) }),
  document.getElementById("root")
);
