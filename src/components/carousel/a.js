(self.webpackChunkawwwards_new = self.webpackChunkawwwards_new || []).push([
  [9394],
  {
      9394: (e, t, o) => {
          "use strict";
          o.d(t, { Z: () => F });
          var n = o(2316),
              s = o.n(n),
              i = o(3697),
              a = o(1443),
              r = o(7792),
              l = o(1102),
              c = o(6301),
              d = o(9755);
          const u = s().Model.extend({
              defaults: { username: "" },
              request: null,
              isLoaded: function () {
                  return this.has("homepage");
              },
              fetchData: function () {
                  var e = this;
                  this.request = d.ajax({
                      type: "GET",
                      url: c.Z.generate("tv_user_tooltip", { username: e.get("username") }),
                      success: function (t) {
                          e.set({
                              displayName: t.displayName,
                              homepage: t.homepage,
                              image: t.image,
                              countryName: t.countryName,
                              collectables: t.collectables,
                              numberOfCollections: t.numberOfCollections,
                              totalAwards: t.totalAwards,
                              status: t.status,
                          }),
                              p.add(e),
                              e.trigger("loaded");
                      },
                  });
              },
              abort: function () {
                  this.request && (this.request.abort(), (this.request = null));
              },
          });
          const p = new (s().Collection.extend({
              model: u,
              findOrCreateByUsername: function (e) {
                  var t = this.findWhere({ username: e });
                  return t || new u({ username: e });
              },
          }))();
          var h = o(8617),
              _ = o(9755);
          const m = s().Model.extend({
              searching: !1,
              request: null,
              search: function (e, t) {
                  var o = this;
                  (this.searching = !0),
                      o.abortRequest(),
                      (this.request = _.ajax({
                          type: "GET",
                          url: c.Z.generate("tv_inspiration_search"),
                          data: { text: e, type: t },
                          cache: !1,
                          success: function (e) {
                              o.trigger("search_load", e), (o.searching = !1);
                          },
                      }));
              },
              abortRequest: function () {
                  this.request && this.request.abort();
              },
          });
          var g = o(9050),
              f = o(9755),
              v = {},
              w = f(window);
          g.ZP.extend(v, s().Events),
              (v.trackScrolling = function () {
                  w.on(
                      "scroll",
                      g.ZP.throttle(function () {
                          var e = document.body.scrollHeight - window.innerHeight - 100;
                          (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0) > e && s().trigger("page:scrollbottom");
                      }, 1e3)
                  );
              }),
              (v.trackScrollTo = function () {
                  this.listenTo(s(), "page:scrollto", function (e) {
                      document.body.scrollTop = e;
                  });
              }),
              (v.initialize = function () {
                  this.trackScrolling(), this.trackScrollTo();
              });
          const y = v;
          var b = o(2193),
              k = o(1440),
              x = o.n(k),
              j = o(2170),
              S = (o(7097), o(4040));
          o(7229);
          var C = o(7051),
              T = o(9482),
              E = o(8365),
              L = o(5371),
              O = o(9666),
              P = o(138),
              A = o(5151),
              Z = o(3414),
              I = o(4157),
              q = o(8943),
              M = (o(5449), o(8215));
          window.dataLayer = window.dataLayer || [];
          const D = s().View.extend({
              el: "body",
              total: 1,
              order_id: 0,
              transaction_id: "",
              currency: "USD",
              product_id: "0",
              section: "academy",
              products: null,
              retry: 0,
              items: [],
              slug: "my-slug",
              initialize: function () {
                  var e = new URLSearchParams(window.location.search);
                  if (e.has("purchase")) {
                      var t = document.querySelector(".list-cart"),
                          o = document.querySelector(".js-transaction-details");
                      if (o.dataset.info) {
                          var n = JSON.parse(o.dataset.info);
                          (this.transaction_id = n.transaction_id), (this.total = n.total), (this.currency = n.currency), (this.product_id = e.get("pr_id")), (this.items = n.products);
                      } else
                          (this.transaction_id = o ? o.dataset.transaction : ""),
                              (this.total = e.get("total")),
                              (this.order_id = e.get("oi")),
                              (this.currency = e.get("curr")),
                              (this.product_id = e.get("pr_id")),
                              (this.section = e.get("secc")),
                              (this.slug = e.get("sl")),
                              (this.products = t ? JSON.parse(t.dataset.products) : null);
                      try {
                          this.triggerPurchaseCompleted();
                      } catch (e) {
                          console.error("there has been an error", e);
                      }
                  }
              },
              triggerPurchaseCompleted: function () {
                  let e = [];
                  this.items.length > 0
                      ? (e = this.items)
                      : this.products
                      ? this.products.forEach((t) => {
                            e.push({ item_id: t.id ? t.id : "0", item_name: t.name, price: t.price, item_category: "course" == t.type ? "Courses" : "Webinar", quantity: 1 });
                        })
                      : (e = [{ item_id: this.product_id ? this.product_id : "0", item_name: this.slug, price: this.total ? this.total : 1, item_category: this.section ? this.section : "Submission", quantity: 1 }]),
                      window.dataLayer.push({ event: "purchase", ecommerce: { transaction_id: this.transaction_id, currency: this.currency ? this.currency : "USD", value: this.total ? this.total : 1, items: e } }),
                      M.Z.log("purchase", { transaction_id: this.transaction_id, currency: this.currency ? this.currency : "USD", value: this.total ? this.total : 1, items: e });
              },
          });
          var z = o(4673),
              U = o(3609),
              N = o(8030),
              R = o(3157),
              H = o(7904);
          var B = o(9755),
              V = document.body.dataset.debug || !1;
          V ||
              (C.Z.isLoggedIn() && O.av({ username: C.Z.username }),
              P.S1({
                  dsn: "https://b7ea34a435c44e7a8719ce12947af465@sentry.awwwards.com/2",
                  allowUrls: [/awwwards\.com/, /.*\.awwwards\.com/],
                  release: "575d2926b157f2bd17abe3b551de23f957a3a0c4",
                  integrations: [new A.jK.gE()],
                  ignoreErrors: ["ResizeObserver loop limit exceeded", "SecurityError: The operation is insecure.", "The operation was aborted."],
              }));
          const F = s().View.extend({
              el: "body",
              heightToOpenScroll: 140,
              tooltipUser: null,
              options: { searchText: "", diffscroll: 70 },
              textView: null,
              searchText: null,
              events: {
                  keydown: "_triggerKeyPress",
                  "click .open_login": "openLoginLink",
                  "click .js-link-check-login": "checkLoginOrOpen",
                  "click .js-dark": "_changeColor",
                  "click .js-toggle": "_toggle",
                  "click .bt-gotop": "_goTop",
                  "mouseover .hover-animation": "_changeAnimated",
                  "mouseout .hover-animation": "_removeAnimation",
                  "mouseenter .js-user": "_openTooltip",
                  "mouseleave .js-user": "_closeTooltip",
                  "click .js-visit-item": "visitItem",
                  "click #nav-main": "_stopPropagation",
                  "click #nav-main .dropdown span.item": "_slideMenuToggle",
                  "click #nav-main a": "closeMenu",
                  "click .js-nav-menu": "_openLanguageMenuClick",
                  "click .js-nav-main": "openMenu",
                  "click .js-close-menu": "closeMenu",
                  "click .wrapper": "closeMenu",
                  "click .js-change-locale": "_changeLocale",
                  "click .js-box-select-locales": "_openBoxLocales",
                  click: "_hideBoxLocales",
                  "click .form-group": "_formClick",
                  "click .bt-search": "_openSearch",
                  "click .js-bt-loading": "_showLoadingButton",
                  "click .js-social": "_showNetworks",
                  "click .navscroll": "_navigationScroll",
                  "click .popup": "_popup",
                  "click #close_box_bts": "_closeAdminBar",
                  "click #open_box_bts": "_openAdminBar",
                  "click .js-open-score": "openScore",
                  "click #js-search-input": "_initializeSearch",
              },
              initialize: function (e) {
                  this.options = Object.assign({}, this.options, e);
                  let t = document.querySelector(".eu-location");
                  const o = null !== t && "1" === t.dataset.eu;
                  V || (o && !U.Z.hasAccepted(N.r$)) || new D(),
                      this._checkDarkVersion(),
                      this._headerBehavior(),
                      this._registerListeners(),
                      y.initialize(),
                      this._addCookieConsent(o),
                      x()(),
                      this._checkFlashMessage(),
                      j.Z.observe(),
                      this._createFooterElements(),
                      this._createSingleElements(),
                      this._checkUserLikesAndFollows(),
                      this._showPoll(),
                      this._showMarquee();
                  var n = document.querySelector(".js-live-session");
                  n &&
                      setTimeout(function () {
                          n.classList.add("show");
                      }, 1e3);
              },
              _showPoll: function () {
                  void 0 === b.Z.get(z.R) && this._openBubblePoll();
              },
              _showMarquee: function () {
                  var e = document.querySelector(".js-marquee-offer");
                  null !== e &&
                      Promise.all([o.e(5716), o.e(9826)])
                          .then(o.bind(o, 9826))
                          .then(function (t) {
                              t.show(e);
                          });
              },
              _showOnlyOnceADay: function () {
                  b.Z.set(z.R, "shown", { expires: 1 });
              },
              _openBubblePoll: function () {
                  let e = document.getElementById("js-bubble-poll");
                  if (e) {
                      e.classList.add("semi-open"), e.classList.add("close"), e.classList.add("active"), document.getElementById("msg-poll-start").classList.add("active"), document.getElementById("msg-poll-end").classList.add("active");
                      var t = this;
                      document.querySelector(".js-bubble-poll-close").addEventListener("click", function () {
                          e.classList.contains("close") ? (e.classList.toggle("close"), e.classList.toggle("semi-open")) : (e.classList.remove("close"), e.classList.remove("active"), t._showOnlyOnceADay());
                      });
                  }
              },
              _checkDarkVersion: function () {
                  var e = document.getElementById("style-dark"),
                      t = document.getElementById("version-color");
                  e && t && (t.checked = "checked");
              },
              _addCSS: function (e, t) {
                  var o = document.getElementsByTagName("head")[0],
                      n = document.createElement("link");
                  (n.href = e), (n.type = "text/css"), (n.rel = "stylesheet"), n.setAttribute("id", t), o.append(n);
              },
              _createFooterElements: function () {
                  [].forEach.call(document.querySelectorAll(".js-grid"), function (e) {
                      new H.Z({ el: e });
                  });
              },
              _createSingleElements: function () {
                  L.Z.createSingleElements();
              },
              _checkUserLikesAndFollows: function () {
                  new E.Z({ el: this.el });
              },
              _saveAnalyticSearchs: function () {
                  var e = document.getElementById("jsFiltersSearch");
                  if (e) {
                      var t = JSON.parse(e.dataset.filters),
                          o = e.dataset.section;
                      B.ajax({ type: "POST", url: c.Z.generate("tv_search_store"), data: { filters: t, section: o } });
                  }
              },
              _popup: function (e) {
                  e.preventDefault();
                  var t = e.currentTarget,
                      o = t.dataset.link ? t.dataset.link : t.href,
                      n = void 0 !== window.screenLeft ? window.screenLeft : screen.left,
                      s = void 0 !== window.screenTop ? window.screenTop : screen.top,
                      i = document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width,
                      a = document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height,
                      r = (window.innerWidth ? window.innerWidth : i) / 2 - 250 + n,
                      l = (window.innerHeight ? window.innerHeight : a) / 2 - 250 + s,
                      c = window.open(o, "", "scrollbars=yes, width=500, height=500, top=" + l + ", left=" + r);
                  c && window.focus && c.focus();
              },
              _checkFlashMessage: function () {
                  var e = document.querySelector(".js-notification-msg");
                  e && e.dataset.message && e.dataset.type && (0, Z.O)(e.dataset.type, e.dataset.message);
              },
              _addCookieConsent: function (e) {
                  const t = new R.Z();
                  e ? t.start() : (t.showCookieBar(), t.acceptAll());
              },
              _navigationScroll: function (e) {
                  var t,
                      o = e.currentTarget,
                      n = o.dataset.idpage,
                      s = this.options.diffscroll;
                  void 0 !== o.dataset.diffscroll && (s = o.dataset.diffscroll);
                  var i = document.getElementById(n);
                  i && ((t = S.Z.getOffset(i).top - s), B("html, body").stop().animate({ scrollTop: t }, 1e3));
              },
              _openSearch: function () {
                  var e = document.querySelector("header").dataset.section,
                      t = this;
                  o.e(7808)
                      .then(o.bind(o, 7808))
                      .then(function (o) {
                          var n = o.default;
                          t.textView || (t.textView = new n({ section: e, searchText: t.options.searchText, model: new m() })), t.textView._show();
                      });
              },
              _showLoadingButton: function (e) {
                  l.Z.addLoading(e.currentTarget);
              },
              _registerListeners: function () {
                  i.Z.on(a.Z.MENU_FILTER, this.closeMenu, this), i.Z.on(a.Z.ERROR, this._showError, this);
              },
              _showNetworks: function (e) {
                  e.currentTarget.parentElement.querySelector("ul").classList.toggle("active");
              },
              _showError: function (e) {
                  (0, Z.O)("error", e);
              },
              _formClick: function (e) {
                  var t = e.currentTarget;
                  [].forEach.call(this.el.querySelectorAll(".form-group"), function (e) {
                      e.classList.remove("has-info"), e.classList.contains("has-error") || e === t || B(e.querySelector(".msg")).slideUp();
                  });
                  var o = t.querySelector(".msg");
                  t.classList.contains("has-error") ? (t.classList.remove("has-error"), o && (o.style.display = "block")) : o && (t.classList.add("has-info"), B(o).slideDown());
              },
              _goTop: function (e) {
                  e.preventDefault(), e.stopPropagation(), B("html, body").animate({ scrollTop: 0 }, 800);
              },
              _slideMenuToggle: function (e) {
                  var t = e.currentTarget.nextElementSibling;
                  "block" == t.style.display ? (t.style.display = "none") : (t.style.display = "block");
              },
              _stopPropagation: function (e) {
                  e.stopPropagation();
              },
              _toggle: function (e) {
                  var t;
                  (t = e.currentTarget), document.querySelector("#" + t.dataset.id).classList.toggle("show");
              },
              _openLanguageMenuClick: function (e) {
                  this._openMenu(e.currentTarget);
              },
              _openMenu: function (e) {
                  var t = e,
                      o = document.getElementById(t.dataset.menuId),
                      n = o.dataset.menuName,
                      s = o.dataset.menuId,
                      i = this.el.querySelectorAll("#nav-main .menu");
                  [].forEach.call(i, function (e) {
                      e.classList.remove("active");
                  }),
                      o.classList.add("active"),
                      t.classList.contains("js-nav-main") ? (this.el.querySelector(".js-nav-menu").textContent = n) : ((t.textContent = n), (t.dataset.menuId = s));
              },
              _headerBehavior: function () {
                  var e = document.getElementById("bt-submit"),
                      t = document.getElementById("js-search-container");
                  if (e && t) {
                      var o = this;
                      setTimeout(function () {
                          var e = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                          window.addEventListener(
                              "scroll",
                              g.ZP.throttle(function () {
                                  var t = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
                                      n = document.getElementById("js-search-container");
                                  if ((n && (t > o.heightToOpenScroll ? n.classList.add("show-text") : n.classList.remove("show-text")), t > 70)) {
                                      var s = document.querySelector(".logo-header");
                                      s && (t < e ? s.classList.remove("w") : s.classList.add("w"));
                                  }
                                  e = t;
                              }, 100)
                          );
                      }, 300);
                  }
              },
              _triggerKeyPress: function (e) {
                  this.trigger("key_press", e.keyCode);
              },
              _changeAnimated: function (e) {
                  var t = e.currentTarget;
                  t.src = t.dataset.animated;
              },
              _removeAnimation: function (e) {
                  var t = e.currentTarget;
                  t.src = t.dataset.src;
              },
              _changeColor: function () {
                  var e = "style-dark",
                      t = T.Z.trans("app.activate_white_option"),
                      o = document.getElementById("style-dark");
                  o ? (o.parentNode.removeChild(o), (t = T.Z.trans("app.activate_black_option")), (e = "")) : this._addCSS("https://assets.awwwards.com/assets/css/style-dark.css", "style-dark"),
                      b.Z.set(z.N1, e),
                      (document.querySelector(".box-version .box-version-text").textContent = t);
              },
              openLogin: function () {
                  new r.Z().open();
              },
              openLoginLink: function (e) {
                  e.preventDefault(), this.openLogin();
              },
              checkLoginOrOpen: function (e) {
                  C.Z.isLoggedIn() || (e.preventDefault(), this.openLogin());
              },
              openMenu: function (e) {
                  return this.el.classList.toggle("nav-sidebar-open"), B("html, body").animate({ scrollTop: 0 }, 0), this._openMenu(e.currentTarget), !1;
              },
              closeMenu: function () {
                  this.el.classList.remove("nav-sidebar-open");
              },
              _openTooltip: function (e) {
                  var t = this,
                      o = S.Z.getHeight() / 2 > e.clientY ? "tooltip-bottom" : "",
                      n = e.currentTarget,
                      s = n.dataset.username,
                      i = p.findOrCreateByUsername(s);
                  this._closeAllTooltips(),
                      i.isLoaded()
                          ? t._renderTooltip(i, n, o)
                          : (this.timeout = setTimeout(function () {
                                t._renderTooltip(i, n, o);
                            }, 250));
              },
              _renderTooltip: function (e, t, o) {
                  this.tooltipUser = new h.Z({ model: e, target: t, classBottom: o }).render();
              },
              _closeAllTooltips: function () {
                  [].forEach.call(this.el.querySelectorAll(".tooltip-user"), function (e) {
                      e.classList.contains("open") ? e.classList.remove("open") : e.parentNode.removeChild(e);
                  });
              },
              _closeTooltip: function () {
                  clearTimeout(this.timeout), this.tooltipUser && this.tooltipUser.abort();
              },
              _closeAdminBar: function () {
                  document.getElementById("box_bts").classList.add("hidden"), document.getElementById("open_box_bts").classList.remove("hidden"), b.Z.set("tv_admin_bar", 0);
              },
              _openAdminBar: function () {
                  document.getElementById("box_bts").classList.remove("hidden"), document.getElementById("open_box_bts").classList.add("hidden"), b.Z.set("tv_admin_bar", 1);
              },
              _changeLocale: function (e) {
                  e.preventDefault();
                  var t = e.currentTarget.dataset.locale;
                  b.Z.set(z.Vy, t), window.location.reload();
              },
              _openBoxLocales: function (e) {
                  e.stopPropagation(), e.currentTarget.classList.add("open");
              },
              _hideBoxLocales: function () {
                  document.querySelector(".js-box-select-locales.open") && document.querySelector(".js-box-select-locales").classList.remove("open");
              },
              visitItem: function (e) {
                  var t = e.currentTarget;
                  t.dataset.identifier && t.dataset.type && I.Z.add(t.dataset.identifier, t.dataset.type);
              },
              openScore: function (e) {
                  var t = e.currentTarget.dataset.score;
                  (t = JSON.parse(t)),
                      (t = "<pre style='overflow: scroll'>" + JSON.stringify(t, null, 2) + "</pre>"),
                      new q.Z({ remove_after_close: !0 }).show("<div class=\"box-content-usertype\" style='width: 70%; overflow: scroll; height: 100%;'>" + t + "</div>");
              },
              openSearchInfo: function () {
                  var e = document.querySelectorAll(".js-content-search-info");
                  [].forEach.call(e, function (e) {
                      e.classList.toggle("hidden");
                  });
              },
          });
      },
      3697: (e, t, o) => {
          "use strict";
          o.d(t, { Z: () => i });
          var n = o(2316),
              s = o.n(n);
          const i = o(9050).ZP.clone(s().Events);
      },
      1317: (e, t, o) => {
          "use strict";
          o.d(t, { Z: () => i });
          var n = o(9482),
              s = o(2406);
          const i = new (class {
              constructor() {}
              show(e) {
                  var t = '<div class="box-loading fixed js-loading open"><div><div class="spinner"></div><div class="msg">' + n.Z.trans(e) + "</div></div></div>",
                      o = (0, s.Hk)(t);
                  document.body.querySelector(".wrapper").appendChild(o);
              }
              remove() {
                  var e = document.querySelector(".js-loading");
                  e && e.remove();
              }
          })();
      },
      6301: (e, t, o) => {
          "use strict";
          o.d(t, { Z: () => a });
          var n = o(7677),
              s = o.n(n);
          const i = JSON.parse(
              '{"base_url":"","routes":{"tv_terms":{"tokens":[["text","/terms/"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_privacy_policy":{"tokens":[["text","/privacy-policy/"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_cookies_policy":{"tokens":[["text","/cookies-policy/"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_login":{"tokens":[["text","/login"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_login_csrf":{"tokens":[["text","/login_csrf"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_register":{"tokens":[["text","/register"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_register_ajax":{"tokens":[["text","/register_ajax"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_forgot_password":{"tokens":[["text","/forgot-password"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_payment_billing_check":{"tokens":[["text","/billing/check/"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":["POST"],"schemes":[]},"tv_payment_paypal_create":{"tokens":[["text","/payment/paypal/create"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_payment_paypal_order_create":{"tokens":[["text","/payment/order/create"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_payment_paypal_order_create_for_cart":{"tokens":[["text","/payment/order/create_for_cart"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_search_websites":{"tokens":[["text","/websites/"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_site_show":{"tokens":[["variable","/","[^/]++","slug",true],["text","/sites"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_site_get_user_votes":{"tokens":[["text","/get_user_votes"],["variable","/","[^/]++","slug",true],["text","/sites"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_site_get_user_votes_score":{"tokens":[["text","/get_user_votes_score"],["variable","/","[^/]++","slug",true],["text","/sites"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_sotms_nominees_user_vote":{"tokens":[["text","/awards-of-the-month/nominees/vote_user"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_sotms_nominees_get_user_vote":{"tokens":[["text","/awards-of-the-month/nominees/get_vote_user"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_sotms_nominees_get_judge_vote":{"tokens":[["text","/awards-of-the-month/nominees/get_vote_judge"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_academy_homepage_all_courses":{"tokens":[["text","/academy/courses/rest"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_academy_log":{"tokens":[["text","/academy/info/log"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"cart":{"tokens":[["text","/academy/cart"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"add_product_cart":{"tokens":[["variable","/","[^/]++","uuid",true],["text","/academy/add-product"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":["POST"],"schemes":[]},"tv_remove_product":{"tokens":[["variable","/","[^/]++","uuid",true],["text","/academy/remove-product"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":["POST"],"schemes":[]},"tv_course_show_lecture":{"tokens":[["variable","/","[^/]++","lectureId",true],["text","/lectures"],["variable","/","[^/]++","slug",true],["text","/academy/course"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_lecture_store_time":{"tokens":[["text","/store_time"],["variable","/","[^/]++","id",true],["text","/academy/course/lecture"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":["POST"],"schemes":[]},"tv_lecture_complete":{"tokens":[["text","/complete"],["variable","/","[^/]++","id",true],["text","/academy/course/lecture"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":["POST"],"schemes":[]},"tv_lecture_uncomplete":{"tokens":[["text","/uncomplete"],["variable","/","[^/]++","id",true],["text","/academy/course/lecture"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":["POST"],"schemes":[]},"tv_course_lecture_source":{"tokens":[["text","/source"],["variable","/","[^/]++","id",true],["text","/academy/course/lecture"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_course_lecture_open_source":{"tokens":[["text","/source"],["variable","/","[^/]++","id",true],["text","/academy/course/openlecture"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_course_m3files_source":{"tokens":[["variable","/","[^/]++","id",true],["text","/academy/course/m3files"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_review_course_rate":{"tokens":[["text","/rate-it"],["variable","/","[^/]++","id",true],["text","/academy/review"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":["POST"],"schemes":[]},"tv_webinar_user_purchases_list":{"tokens":[["text","/attendees"],["variable","/","[^/]++","slug",true],["text","/academy"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_contact_us":{"tokens":[["text","/contact-us/"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_ajax_load_more_inspiration":{"tokens":[["variable","/","[^/]++","page",true],["text","/inspiration/load-more"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_ajax_subscriber_list":{"tokens":[["text","/subcriber_list/"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_vote_annual_category":{"tokens":[["variable","/","[^/]++","id",true],["text","/annual-awards"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_vote_annual_vote":{"tokens":[["text","/annual-awards/vote/"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_job_contact":{"tokens":[["text","/contact"],["variable","/","[^/]++","slug",true],["text","/jobs"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":["POST"],"schemes":[]},"tv_directory_suggest":{"tokens":[["text","/directory/suggest/"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_favourites_like_item":{"tokens":[["variable","/","[^/]++","parameter",true],["variable","/","[^/]++","type",true],["text","/favourites/like"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":["POST"],"schemes":[]},"tv_favourites_dislike_item":{"tokens":[["variable","/","[^/]++","parameter",true],["variable","/","[^/]++","type",true],["text","/favourites/dislike"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":["POST"],"schemes":[]},"tv_favourites_collections":{"tokens":[["text","/favourites/collections"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_favourites_collect_item":{"tokens":[["variable","/","[^/]++","idCollection",true],["variable","/","[^/]++","parameter",true],["variable","/","[^/]++","type",true],["text","/favourites/collect"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":["POST"],"schemes":[]},"tv_favourites_collections_by_id":{"tokens":[["text","/favourites/activity/collections_by_id"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_favourites_add_collectable_to_collection":{"tokens":[["variable","/","[^/]++","idCollection",true],["text","/add-collectable"],["variable","/","[^/]++","collectableId",true],["text","/favourites/activity"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":["POST"],"schemes":[]},"tv_favourites_edit_element":{"tokens":[["text","/favourites/edit-collection-external-element"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":["POST"],"schemes":[]},"tv_element_edit":{"tokens":[["variable","/","[^/]++","id",true],["text","/favourites/edit-element"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":["POST"],"schemes":[]},"tv_coupon_check":{"tokens":[["text","/coupon/check-coupon"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_coupon_cart_check":{"tokens":[["text","/coupon/check-coupon-cart/"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_coupon_cart_remove":{"tokens":[["text","/coupon/remove-coupon-cart/"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_ajax_add_visit":{"tokens":[["variable","/","[^/]++","slug",true],["text","/log/counter"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_ajax_add_count":{"tokens":[["variable","/","[^/]++","identifier",true],["variable","/","[^/]++","type",true],["text","/log/counter"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_ajax_add_book_download":{"tokens":[["variable","/","[^/]++","slug",true],["text","/log/downloader"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_inspiration_search":{"tokens":[["text","/inspiration/search"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":["GET"],"schemes":[]},"tv_collection_followers_list":{"tokens":[["text","/followers"],["variable","/","[^/]++","id",true],["text","/collections"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":["GET"],"schemes":[]},"tv_collection_follow":{"tokens":[["text","/follow"],["variable","/","[^/]++","id",true],["text","/collections"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_collection_unfollow":{"tokens":[["text","/unfollow"],["variable","/","[^/]++","id",true],["text","/collections"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_user_plans_page":{"tokens":[["text","/plans/user-plans"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_user_billing_delete":{"tokens":[["text","/settings/billing/delete"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":["POST"],"schemes":[]},"tv_user_settings":{"tokens":[["text","/settings/"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_user_settings_directory":{"tokens":[["text","/settings/directory/"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_academy_course_certificate":{"tokens":[["text","/certificate/course/"],["variable","/","[^/]++","slug",true],["text","/academy/settings"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_academy_web_course_certificate":{"tokens":[["variable","/","[^/]++","slug",true],["variable","/","[^/]++","username",true],["text","/academy/certification/course"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_user_check_likes":{"tokens":[["text","/check_likes"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":["POST","GET"],"schemes":[]},"tv_user_contact":{"tokens":[["text","/contact"],["variable","/","[^/]++","username",true]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":["POST"],"schemes":[]},"tv_user_follow":{"tokens":[["text","/follow"],["variable","/","[^/]++","username",true]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_user_unfollow":{"tokens":[["text","/unfollow"],["variable","/","[^/]++","username",true]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_user_followers_list":{"tokens":[["text","/followers"],["variable","/","[^/]++","username",true]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_user_notification_markAsRead":{"tokens":[["variable","/","[^/]++","notificationId",true],["text","/settings/notifications"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_user_tooltip":{"tokens":[["text","/tooltip"],["variable","/","[^/]++","username",true]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":["GET"],"schemes":[]},"tv_collection_add_collaborator":{"tokens":[["text","/add_collaborator"],["variable","/","[^/]++","id",true],["text","/collections"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_collection_remove_collaborator":{"tokens":[["text","/remove_collaborator"],["variable","/","[^/]++","id",true],["text","/collections"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_collection_get_collaborators":{"tokens":[["text","/get_collaborators"],["variable","/","[^/]++","id",true],["text","/collections"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_favourites_create_folder_token":{"tokens":[["text","/favourites/create-collection/token"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":["POST"],"schemes":[]},"tv_favourites_create_folder":{"tokens":[["text","/favourites/create-collection"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":["POST"],"schemes":[]},"tv_favourites_edit_folder":{"tokens":[["variable","/","[^/]++","id",true],["text","/favourites/edit-folder"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":["POST"],"schemes":[]},"tv_collection_remove":{"tokens":[["text","/remove"],["variable","/","[^/]++","id",true],["text","/collections"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":["DELETE"],"schemes":[]},"tv_collection_remove_collectable":{"tokens":[["variable","/","[^/]++","type",true],["variable","/","[^/]++","idCollectable",true],["variable","/","[^/]++","idCollection",true],["text","/collections/remove-collection"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_collection_upload_cover":{"tokens":[["text","/upload-cover"],["variable","/","[^/]++","id",true],["text","/collections"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_collection_remove_cover":{"tokens":[["text","/remove-cover"],["variable","/","[^/]++","id",true],["text","/collections"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]},"tv_user_homepage":{"tokens":[["text","/"],["variable","/","[^/]++","username",true]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[["text","www.awwwards.com"]],"methods":[],"schemes":[]}},"prefix":"","host":"www.awwwards.com","port":"","scheme":"https","locale":""}'
          );
          s().setRoutingData(i);
          const a = s();
      },
      9482: (e, t, o) => {
          "use strict";
          o.d(t, { Z: () => s });
          const n = JSON.parse(
              '{"en":{"app.following":"Following","app.follow":"Follow","form.description":"Description","form.name":"Name","form.select_category":"Select category","footer_box.share_collection":"Share with your team!","footer_box.edit_collection":"Edit collection","app.show_filters":"SHOW FILTERS","search.we_found":"We found","search.placeholder":"SEARCH FOR INSPIRATION (HTML5, VR, RED, MINIMAL...)","app.and":"and","app.for":"for","app.elements":"Element|Elements","app.jobs":"Job|Jobs","app.create":"Create","app.load_more":"Load More","app.loading":"Loading","app.more_info":"More info","app.cancel":"Cancel","app.private":"Private","app.save":"Save","app.delete_collection":"Delete collection","app.deleting_collection":"Deleting collection...","user.collections.menu.collections":"Collection|Collections","app.yes":"Yes","app.no":"No","app.collaborator":"Collaborator","app.delete_account":"Delete account","app.delete":"Delete","app.are_you_sure":"Are you sure?","app.add_to_collections":"Add to collections!","app.activate_black_option":"Enable Dark Mode","app.activate_white_option":"Activate white option","app.send_vote":"Send vote","app.edit_your_vote":"Edit your vote","app.edit":"Edit","app.users":"User|Users","app.judges":"Judge|Judges","app.votes":"Vote|Votes","app.user_type.short.pro":"Pro","app.user_type.short.tribe":"Tribe","app.user_type.short.chief":"Chief","app.user_type.short.jury":"Jury","app.websites":"Website|Websites","app.collections":"Collection|Collections","app.articles":"Article|Articles","app.your_vote":"Your vote","login_or_create.header":"Login or create account","login_or_create.not_a_member_yet":"Not a member yet?","login_or_create.register_now":"Register now","login_or_create.login_with_your_email":"Login with your e-mail","login_or_create.forgot_your_password":"Forgot your password","login_or_create.login_now":"Login now","login_or_create.connect_with":"Connect with","login_or_create.email_or_username":"Email or Username","login_or_create.keep_me_logged_in":"Keep me logged in","login_or_create.password":"Password","login_or_create.sign_in_to_continue":"Sign in to continue","login_or_create.or_sign_in_with":"Or sign in with","users_like_this":"<strong>%users%</strong> user like this|<strong>%users%</strong> users like this","about.status.privileges.jury.title":"A group of experts selected annually by the Awwwards team, whose involvement and expertise is fundamental for Awwwards to function.","about.status.privileges.jury.description_1":"Their vote determines the final score of SOTD, SOTM, HM & SOTY.","about.status.privileges.jury.description_2":"Every year the top 5 users are invited to join the following year’s Jury.","about.status.privileges.pro.title":"A group of internationally recognised agencies and designers, who have invested in Awwwards and registered with a Professional Plan.","about.status.privileges.pro.description_1":"Their votes count towards SOTD & HM.","about.status.privileges.pro.description_2":"Profile highlighted in the Directory search results.","about.status.privileges.chief.title":"Talented users who through hard work and commitment have won 1 SOTD, 3 HMs or gained 5000 points.","about.status.privileges.chief.description_1":"Their votes count towards SOTD & HM.","about.status.privileges.chief.description_2":"Profile included in the Directory.","about.status.privileges.tribe.title":"Basic user whose participation and contribution of knowledge helps to improve the Awwwards community.","about.status.privileges.tribe.description_1":"Their votes count towards the “Merit for Commendable Sites” certificate (but not towards SOTD or HM).","about.status.privileges.tribe.description_2":"Profile not present in the Directory.","form.talent.about_us":"About us","form.talent.name":"Name, agency / company...","form.email":"E-mail","form.website":"Website","form.talent.message":"Can we collaborate?","form.talent.message_description":"We are interested in the following...","form.characters_remaining":"characters remaining.","form.characters_remaining_no_html":"characters remaining. No HTML allowed.","form.add_a_url_with_http":"Add a URL with http://","form.validate.select_less":"You must specify %max% or less","form.validate.select_at_least":"You must specify at least %min%","form.creative_fields.tip":"Select the creative fields that best describe your work.","form.categories.tip":"Select some categories","form.tags.tip":"Select some tags","form.tags":"Tags","assert.not_blank.name":"assert.not_blank.name","contact.send_message":"SEND MESSAGE","collection.create_a_new_collection":"Create a new collection","legend_circle.design":"Design","legend_circle.usability":"Usability","legend_circle.creativity":"Creativity","legend_circle.content":"Content","search.no_result.title":"Your search was not successful!","search.no_result.try_some_different_keywords":"Try some different keywords.","search.no_result.use_more_general_keywords":"Use more general keywords.","payment.processing_payment":"Processing payment","app.notification.changes_saved":"Your changes have been saved.","legend_circle.responsive_design":"Responsive design","legend_circle.animations":"Animation","legend_circle.accessibility":"Accessibility","legend_circle.semantics":"Semantics","app.final_score":"Final score","app.show_all":"Show all","app.notification.collection_created":"Your collection has been created","vote_opinion.what_do_you_like":"What do you like about it?","vote_opinion.what_do_you_think":"What do you think about this site?","vote_opinion.think.master_piece":"A masterpiece","vote_opinion.think.sotd":"A SOTD","vote_opinion.think.not_sotd":"It\'s not a SOTD","vote_opinion.like.animation":"Animation","vote_opinion.like.content_architecture":"Content architecture","vote_opinion.like.copy_design":"Copy design","vote_opinion.like.interaction":"Interaction","vote_opinion.like.layout":"Gallery","vote_opinion.like.navigation":"Navigation","vote_opinion.like.photo_video":"Photo & Video","vote_opinion.like.typography":"Typography","vote_opinion.like.ui_design":"UI design","vote_opinion.details.menu":"Menu","vote_opinion.details.about_page":"About page","vote_opinion.details.transitions":"Transitions","vote_opinion.details.header":"Header","vote_opinion.details.contact_page":"Contact page","vote_opinion.details.microinterations":"Microinteractions","vote_opinion.details.footer":"Footer","vote_opinion.details.project_page":"Project page","vote_opinion.details.filters_effects":"Filters & Effects","vote_opinion.details.forms":"Forms","vote_opinion.details.ecommerce":"E-commerce","vote_opinion.details.storytelling":"Storytelling","vote_opinion.details.scrolling":"Scrolling","vote_opinion.details.404":"404","vote_opinion.details.illustration":"Illustration","collection_category.inspiration":"Inspiration","collection_category.ux-ui":"UX/UI","collection_category.web-technology":"Web technology","collection_category.resources":"Resources","collection_category.other":"Other","i_have_read_and_accepted_the_terms_and_conditions":"I have read and accepted the <strong><a href=\\"%href_terms_and_conditions%\\" target=\\"_blank\\">Terms and Conditions</a></strong> and <strong><a href=\\"%href_privacy_policy%\\" target=\\"_blank\\">Privacy Policy</a></strong>","app.no_info_provided":"No info provided","app.congratulations":"Congratulations","welcome_to_the_exclusive_awwwards_directory":"Welcome to the exclusive Awwwards directory!","directory_description":"The directory place where the top web designers, graphic designers, art directors, illustrators, developers and marketers come to play and grow their business.","app.close":"close","we_have_received_your_job_submission":"we_have_received_your_job_submission","payment.submission_received":"Your site has now been submitted to Awwwards for review!","payment.submission_received.description":"Shortly, you’ll receive an email confirmation and in a few days, our team will send your project to our esteemed jury for their evaluation. Best of luck in the competition!","payment.job_submission_received":"We are pleased to confirm that we have received your job submission","payment.submission_job_received.description":"We are checking the details, your offer will be posted soon.","your_registration_is_complete":"Your registration is complete!","new_register.received.description":"If you are a freelancer or work for an agency, add your profile to our exclusive directory aimed at web professionals. Meet new clients, recruit top talent, make important business connections. Now is the time!","login_or_register":"Register / Log in","app.confirm_your_vote":"Confirm your vote","submission.sotm.nominees.thanks":"Thanks for your Vote!","explanation_default_credit_card":"We will set this payment method as predefined for future purchases on Awwwards. Coming yearly payments for your subscriptions will be done with this card.","form.edit_information":"Edit Info","add_billing_info":"Add billing info","form.select_technologies.no_results":"If your technology is not in this list, please add it in the field below?","complete_course_to_download_certificate":"In order to download your certificate you must have completed at least 95% of the Course.","certificate_of_completion":"Certificate of completion","courses":"Course|Courses"},"es":{"app.following":"Siguiendo","app.follow":"Seguir","form.description":"Descripción","form.name":"Nombre","form.select_category":"Seleccionar categoria","footer_box.share_collection":"¡Comparte con tu equipo!","footer_box.edit_collection":"Editar colección","app.show_filters":"VER FILTROS","search.we_found":"Hemos encontrado","search.placeholder":"BUSCA INSPIRACIÓN (HTML5, VR, RED, MINIMALISMO...)","app.and":"y","app.for":"para","app.elements":"Elemento|Elementos","app.jobs":"Empleo|Empleos","app.create":"Crear","app.load_more":"Cargar más","app.loading":"Cargando","app.more_info":"Más info","app.cancel":"Cancelar","app.private":"Privada","app.save":"Guardar","app.delete_collection":"Borrar colección","app.deleting_collection":"Borrando colección...","user.collections.menu.collections":"Colección|Colecciones","app.yes":"Si","app.no":"No","app.collaborator":"Colaborador","app.delete_account":"Borrar cuenta","app.delete":"Borrar","app.are_you_sure":"¿Estás seguro?","app.add_to_collections":"¡Añadir a colecciones!","app.activate_black_option":"Activar opción oscura","app.activate_white_option":"Activar opción blanca","app.send_vote":"Enviar voto","app.edit_your_vote":"Editar voto","app.edit":"Editar","app.users":"Usuario|Usuarios","app.judges":"Juez|Jueces","app.votes":"Voto|Votos","app.user_type.short.pro":"Pro","app.user_type.short.tribe":"Tribu","app.user_type.short.chief":"Jefe","app.user_type.short.jury":"Jurado","app.websites":"Sitio web|Sitios web","app.collections":"Colección|Colecciones","app.articles":"Artículo|Artículos","app.your_vote":"Tu voto","login_or_create.header":"Ingresa o crea una cuenta","login_or_create.not_a_member_yet":"¿Aún no eres miembro?","login_or_create.register_now":"Regístrate ahora","login_or_create.login_with_your_email":"Ingresa con tu e-mail","login_or_create.forgot_your_password":"¿Has olvidado tu contraseña?","login_or_create.login_now":"Ingresar ahora","login_or_create.connect_with":"Conecta con","login_or_create.email_or_username":"E-mail o nombre de usuario","login_or_create.keep_me_logged_in":"Mantener sesión iniciada","login_or_create.password":"Contraseña","login_or_create.sign_in_to_continue":"Iniciar sesión","login_or_create.or_sign_in_with":"O inicia sesión con","users_like_this":"a <strong>%users%</strong> usuario le gusta esto|a <strong>%users%</strong> usuarios les gusta esto","about.status.privileges.jury.title":"Un grupo de expertos seleccionados anualmente por el equipo de Awwwards cuya implicación y experiencia es fundamental para el funcionamiento de Awwwards.","about.status.privileges.jury.description_1":"Su voto determina la puntuación final del Sitio del Día, Sitio del Mes, Mención de Honor y Sitio del Año.","about.status.privileges.jury.description_2":"Cada año los 5 mejores usuarios son invitados a unirse al Jurado del siguiente año.","about.status.privileges.pro.title":"Un grupo de agencias y diseñadores reconocidos internacionalmente, los cuales han invertido en Awwwards y se han registrado con un Plan Profesional.","about.status.privileges.pro.description_1":"Sus votos cuentan para Sitio del Día y Mención de Honor.","about.status.privileges.pro.description_2":"Perfil destacado en los resultados de búsqueda del Directorio.","about.status.privileges.chief.title":"Usuarios con talento que a través de su esfuerzo y compromiso han ganado 1 Sitio del Día, 3 Menciones de Honor o ganado 5000 puntos.","about.status.privileges.chief.description_1":"Sus votos cuentan para el Sitio del Día y Mención de Honor.","about.status.privileges.chief.description_2":"Perfil incluido en el Directorio.","about.status.privileges.tribe.title":"Usuario básico cuya participación y contribución a partir de su conocimiento ayuda a mejorar la comunidad de Awwwards.","about.status.privileges.tribe.description_1":"Los votos cuentan para obtener el certificado de \\"Mérito por Website Admirable\\" (pero no para el Sitio del Día o la Mención de Honor).","about.status.privileges.tribe.description_2":"El perfil no está presente en el Directorio.","form.talent.about_us":"Sobre nosotros","form.talent.name":"Nombre, agencia / empresa","form.email":"Correo electrónico","form.website":"Sitio web","form.talent.message":"¿Podemos colaborar?","form.talent.message_description":"Estamos interesados en lo siguiente...","form.characters_remaining":"caracteres restantes.","form.characters_remaining_no_html":"caracteres restantes. HTML no permitido.","form.add_a_url_with_http":"Añade una URL con http://","form.validate.select_less":"Debes especificar %max% o menos","form.validate.select_at_least":"Debes especificar al menos %min%","form.creative_fields.tip":"Selecciona los elementos creativos que mejor describan tu trabajo","form.categories.tip":"Selecciona algunas categorías","form.tags.tip":"Selecciona algunas tags","form.tags":"Tags","assert.not_blank.name":"assert.not_blank.name","contact.send_message":"ENVIAR MENSAJE","collection.create_a_new_collection":"Crea una colección nueva","legend_circle.design":"Diseño","legend_circle.usability":"Usabilidad","legend_circle.creativity":"Creatividad","legend_circle.content":"Contenido","search.no_result.title":"¡Tu búsqueda no ha tenido éxito!","search.no_result.try_some_different_keywords":"Prueba algunas palabras clave diferentes.","search.no_result.use_more_general_keywords":"Usa más palabras clave generales.","payment.processing_payment":"Procesando pago","app.notification.changes_saved":"Tus cambios han sido guardados.","legend_circle.responsive_design":"Diseño responsive","legend_circle.animations":"Animación","legend_circle.accessibility":"Accesibilidad","legend_circle.semantics":"Semántica / SEO","app.final_score":"Nota final","app.show_all":"Mostrar todo","app.notification.collection_created":"Se ha creado la colección","vote_opinion.what_do_you_like":"¿Qué es lo que te gusta?","vote_opinion.what_do_you_think":"¿Qué opinas sobre este sitio web?","vote_opinion.think.master_piece":"Una obra maestra","vote_opinion.think.sotd":"Un SOTD","vote_opinion.think.not_sotd":"No es un SOTD","vote_opinion.like.animation":"Animación","vote_opinion.like.content_architecture":"Arquitectura de contenido","vote_opinion.like.copy_design":"Diseño de copy","vote_opinion.like.interaction":"Interacción","vote_opinion.like.layout":"Galería","vote_opinion.like.navigation":"Navegación web","vote_opinion.like.photo_video":"Foto y video","vote_opinion.like.typography":"Tipografía","vote_opinion.like.ui_design":"Diseño UI","vote_opinion.details.menu":"Menú","vote_opinion.details.about_page":"Diseño páginas \\"Acerca de\\"","vote_opinion.details.transitions":"Transiciones","vote_opinion.details.header":"Diseño de Header","vote_opinion.details.contact_page":"Página de contacto","vote_opinion.details.microinterations":"Microinteractions","vote_opinion.details.footer":"Diseño de footer","vote_opinion.details.project_page":"Página de proyecto","vote_opinion.details.filters_effects":"Filtros y efectos","vote_opinion.details.forms":"Formularios","vote_opinion.details.ecommerce":"Comercio electrónico","vote_opinion.details.storytelling":"Como lo cuentan","vote_opinion.details.scrolling":"Scrolling","vote_opinion.details.404":"Páginas 404","vote_opinion.details.illustration":"Ilustración","collection_category.inspiration":"Inspiración","collection_category.ux-ui":"UX/UI","collection_category.web-technology":"Tecnología web","collection_category.resources":"Recursos","collection_category.other":"Otros","i_have_read_and_accepted_the_terms_and_conditions":"He leído y acepto los <strong> <a href=\\"%href_terms_and_conditions%\\" target=\\"_blank\\">Términos y condiciones</a></strong> y <strong> <a href = \\"%href_privacy_policy%\\" target = \\"_blank\\"> Política de privacidad</a></strong>","app.no_info_provided":"No info provided","app.congratulations":"FELICIDADES","welcome_to_the_exclusive_awwwards_directory":"¡Bienvenido al exclusivo directorio de Awwwards!","directory_description":"El directorio es el lugar donde los mejores diseñadores web, diseñadores gráficos, directores de arte, ilustradores, desarrolladores y profesionales del marketing vienen a conectar y hacer crecer su negocio.","app.close":"cerrar","we_have_received_your_job_submission":"we_have_received_your_job_submission","payment.submission_received":"Hemos recibido tu aplicación para Awwwards","payment.submission_received.description":"Dentro de poco recibirás un email de confirmación y en unos días nuestro equipo enviará tu proyecto a nuestro estimado jurado para su evaluación. ¡Buena suerte en la competición!","payment.job_submission_received":"Nos complace confirmarte que hemos recibido tu oferta de empleo","payment.submission_job_received.description":"Estamos comprobando los detalles, tu oferta será publicada pronto.","your_registration_is_complete":"¡Tu registro se ha completado!","new_register.received.description":"Si eres autónomo o trabajas para una agencia, añade tu perfil a nuestro exclusivo directorio dirigido a profesionales del web. Atrae nuevos clientes, recluta el mejor talento y haz importantes conexiones de negocio. ¡Ahora es el momento!","login_or_register":"Registro / Entrar","app.confirm_your_vote":"Confirmar voto","submission.sotm.nominees.thanks":"¡Gracias por tu voto!","explanation_default_credit_card":"Haremos que este sea tu método de pago predeterminado para futuras compras en Awwwards. Los pagos anuales de las suscripciones se realizarán con esta tarjeta.","form.edit_information":"Editar info","add_billing_info":"Añadir datos de facturación","form.select_technologies.no_results":"Agregue otras tecnologías en \\"Otras tecnologías","complete_course_to_download_certificate":"Para descargar su certificado debe completar al menos el 95% del Curso.","certificate_of_completion":"Certificado de finalización","courses":"Curso|Cursos"},"ko":{"app.following":"팔로우 하기","app.follow":"팔로우","form.description":"설명","form.name":"성명","form.select_category":"범주 선택...","footer_box.share_collection":"자신의 팀과 공유!","footer_box.edit_collection":"컬렉션 편집","app.show_filters":"필터 표시","search.we_found":"검색된 항목:","search.placeholder":"검색하여 영감을 얻으세요 (HTML5, VR, RED, MINIMAL...)","app.and":"및","app.for":"검색 항목:","app.elements":"요소|요소","app.jobs":"일자리|일자리","app.create":"만들기","app.load_more":"더 보기","app.loading":"로딩 중","app.more_info":"자세한 정보","app.cancel":"취소","app.private":"사적","app.save":"저장","app.delete_collection":"컬렉션 삭제","app.deleting_collection":"컬렉션 삭제 중...","user.collections.menu.collections":"컬렉션|컬렉션","app.yes":"예","app.no":"No","app.collaborator":"협력자","app.delete_account":"계정 삭제","app.delete":"Delete","app.are_you_sure":"계속하시겠습니까?","app.add_to_collections":"컬렉션에 추가!","app.activate_black_option":"블랙 옵션 활성화","app.activate_white_option":"화이트 옵션 활성화","app.send_vote":"투표 보내기","app.edit_your_vote":"자신의 투표 편집","app.edit":"편집","app.users":"사용자|사용자","app.judges":"심의관|심의관","app.votes":"투표|투표","app.user_type.short.pro":"프로페셔널","app.user_type.short.tribe":"트라입","app.user_type.short.chief":"치프","app.user_type.short.jury":"배심원단","app.websites":"웹사이트|웹사이트","app.collections":"컬렉션|컬렉션","app.articles":"논문|논문","app.your_vote":"자신의 투표","login_or_create.header":"로그인 또는 계정 만들기","login_or_create.not_a_member_yet":"아직 회원이 아니십니까?","login_or_create.register_now":"바로 가입","login_or_create.login_with_your_email":"이메일로 로그인","login_or_create.forgot_your_password":"비밀번호를 잊으셨나요?","login_or_create.login_now":"로그인하기","login_or_create.connect_with":"연결 대상:","login_or_create.email_or_username":"이메일 또는 사용자명","login_or_create.keep_me_logged_in":"로그인 상태 유지","login_or_create.password":"비밀번호","login_or_create.sign_in_to_continue":"로그인하기","login_or_create.or_sign_in_with":"다른 계정으로 로그인","users_like_this":"이것에 대해 <strong>%users%</strong> 사용자의 좋아요|이것에 대해 <strong>%users%</strong> 사용자의 좋아요","about.status.privileges.jury.title":"해당 참여와 전문성이 Awwwards의 운용에 핵심적인 Awwwards 팀에 의해 매년 선정되는 전문가 그룹.","about.status.privileges.jury.description_1":"이러한 사용자의 투표는 「오늘의 사이트」, 「이달의 사이트」, 「선외 가작 사이트」, 「올해의 사이트」의 최종 점수를 결정하게 됩니다.","about.status.privileges.jury.description_2":"매년 5명의 상위 사용자가 다음 연도의 배심원에 합류하도록 초대됩니다.","about.status.privileges.pro.title":"Awwwards에 투자하고 「프로페셔널 플랜」으로 등록된 국제적을 인정을 받는 에이전시와 디자이너의 그룹.","about.status.privileges.pro.description_1":"이러한 사용자의 투표는 「오늘의 사이트」 및 「선외 가작 사이트」에 사용됩니다.","about.status.privileges.pro.description_2":"프로필이 디렉터리 검색 결과에서 강조되어 표시됨.","about.status.privileges.chief.title":"재능 사용자는 노고와 헌신으로 「오늘의 사이트」 1회, 「선외 가작 사이트」 3회 또는 5,000 포인트 이상을 받은 유형입니다.","about.status.privileges.chief.description_1":"이러한 사용자의 투표는 「오늘의 사이트」 및 「선외 가작 사이트」에 사용됩니다.","about.status.privileges.chief.description_2":"프로필에 디렉터리에 포함됨.","about.status.privileges.tribe.title":"기본 사용자는 Awwwards 커뮤니티에 참여하고 이를 향상시키는 데에 자신의 지식으로 기여하는 유형입니다.","about.status.privileges.tribe.description_1":"기본 사용자의 투표는 “칭찬을 받을 만한 장점이 있는 사이트” 인증서(「오늘의 사이트」나 「선외 가작 사이트」가 아님 )에 사용됩니다.","about.status.privileges.tribe.description_2":"프로필이 디렉터리에 존재하지 않음.","form.talent.about_us":"소개","form.talent.name":"성명, 에이전시 / 회사...","form.email":"이메일","form.website":"웹사이트","form.talent.message":"협력할 수 있을까요?","form.talent.message_description":"다음과 같은 사항에 관심이 있습니다...","form.characters_remaining":"남을 글자 수.","form.characters_remaining_no_html":"남을 글자 수. HTML 허용되지 않음.","form.add_a_url_with_http":"‘http://’를 포함한 URL 추가","form.validate.select_less":"%max% 이하로 지정해야 합니다","form.validate.select_at_least":"%min% 이상으로 지정해야 합니다","form.creative_fields.tip":"자신의 작품을 가장 잘 설명하는 창의성 분야를 선택하십시오.","form.categories.tip":"범주 일부 선택","form.tags.tip":"일부 태그 선택","form.tags":"태그","assert.not_blank.name":"assert.not_blank.name","contact.send_message":"메시지 보내기","collection.create_a_new_collection":"새 컬렉션 만들기","legend_circle.design":"디자인","legend_circle.usability":"사용성","legend_circle.creativity":"창의성","legend_circle.content":"콘텐츠","search.no_result.title":"검색 실패!","search.no_result.try_some_different_keywords":"다른 키워드로 시도하십시오.","search.no_result.use_more_general_keywords":"보다 일반적인 키워드로 시도하십시오.","payment.processing_payment":"결제 처리 중","app.notification.changes_saved":"변경내용이 저장되었습니다.","legend_circle.responsive_design":"호응하는 디자인","legend_circle.animations":"애니메이션","legend_circle.accessibility":"접근성","legend_circle.semantics":"의미론","app.final_score":"최종 점수","app.show_all":"모두 표시","app.notification.collection_created":"컬렉션이 만들어 졌습니다","vote_opinion.what_do_you_like":"What do you like about it?","vote_opinion.what_do_you_think":"What do you think about this site?","vote_opinion.think.master_piece":"A masterpiece","vote_opinion.think.sotd":"A SOTD","vote_opinion.think.not_sotd":"It\'s not a SOTD","vote_opinion.like.animation":"생기","vote_opinion.like.content_architecture":"Content architecture","vote_opinion.like.copy_design":"디자인 복사","vote_opinion.like.interaction":"Interaction","vote_opinion.like.layout":"갱도","vote_opinion.like.navigation":"Navigation","vote_opinion.like.photo_video":"Photo & Video","vote_opinion.like.typography":"Typography","vote_opinion.like.ui_design":"UI design","vote_opinion.details.menu":"Menu","vote_opinion.details.about_page":"About page","vote_opinion.details.transitions":"Transitions","vote_opinion.details.header":"Header","vote_opinion.details.contact_page":"Contact page","vote_opinion.details.microinterations":"미세상호작용","vote_opinion.details.footer":"Footer","vote_opinion.details.project_page":"Project page","vote_opinion.details.filters_effects":"Filters & Effects","vote_opinion.details.forms":"Forms","vote_opinion.details.ecommerce":"E-commerce","vote_opinion.details.storytelling":"이야기 전개","vote_opinion.details.scrolling":"스크롤링","vote_opinion.details.404":"404","vote_opinion.details.illustration":"삽화","collection_category.inspiration":"Inspiration","collection_category.ux-ui":"UX/UI","collection_category.web-technology":"Web technology","collection_category.resources":"리소스","collection_category.other":"다른","i_have_read_and_accepted_the_terms_and_conditions":"I have read and accepted the <strong><a href=\\"%href_terms_and_conditions%\\" target=\\"_blank\\">Terms and Conditions</a></strong> and <strong><a href=\\"%href_privacy_policy%\\" target=\\"_blank\\">Privacy Policy</a></strong>","app.no_info_provided":"No info provided","app.congratulations":"축하합니다","welcome_to_the_exclusive_awwwards_directory":"Welcome to the exclusive Awwwards directory!","directory_description":"The directory place where the top web designers, graphic designers, art directors, illustrators, developers and marketers come to play and grow their business.","app.close":"닫기","we_have_received_your_job_submission":"we_have_received_your_job_submission","payment.submission_received":"Awwwards를 위한 제출을 수령했습니다","payment.submission_received.description":"Shortly, you’ll receive an email confirmation and in a few days, our team will send your project to our esteemed jury for their evaluation. Best of luck in the competition!","payment.job_submission_received":"일자리 게시 요청의 제출을 수령했음 확인해 드립니다.","payment.submission_job_received.description":"We are checking the details, your offer will be posted soon.","your_registration_is_complete":"회원가입이 완료되었습니다.","new_register.received.description":"프리랜서이거나 웹에이전시인 경우 웹 전문가 디렉터리에 프로필을 추가하세요.\\n새로운 고객을 만나고 중요한 비즈니스 관계를 구축하세요.\\n지금이 절호의 기회입니다!","login_or_register":"회원가입 / 로그인","app.confirm_your_vote":"자신의 투표 확인","submission.sotm.nominees.thanks":"투표해 주셔서 감사합니다!","explanation_default_credit_card":"We will set this payment method as predefined for future purchases on Awwwards. Coming yearly payments for your subscriptions will be done with this card.","form.edit_information":"정보 편집","add_billing_info":"Add billing info","form.select_technologies.no_results":"If your technology is not in this list, please add it in the field below?","complete_course_to_download_certificate":"In order to download your certificate you must have completed at least 95% of the Course.","certificate_of_completion":"Certificate of completion","courses":"Course|Courses"},"zh":{"app.following":"关注","app.follow":"关注","form.description":"描述","form.name":"姓名","form.select_category":"选择分类","footer_box.share_collection":"和您的团队分享！","footer_box.edit_collection":"编辑收藏","app.show_filters":"显示筛选条件","search.we_found":"我们找到了","search.placeholder":"寻找灵感（HTML5, VR, RED, MINIMAL……）","app.and":"和","app.for":"含有","app.elements":"元素|元素","app.jobs":"招聘|招聘","app.create":"创建","app.load_more":"加载更多","app.loading":"加载中","app.more_info":"更多信息","app.cancel":"取消","app.private":"私人","app.save":"保存","app.delete_collection":"删除收藏","app.deleting_collection":"正在删除收藏……","user.collections.menu.collections":"收藏|收藏","app.yes":"是","app.no":"No","app.collaborator":"合作者","app.delete_account":"删除账号","app.delete":"删除","app.are_you_sure":"您确定吗？","app.add_to_collections":"加入收藏！","app.activate_black_option":"开启黑色选项","app.activate_white_option":"激活白色选项","app.send_vote":"发送评分","app.edit_your_vote":"更改您的评分","app.edit":"编辑","app.users":"用户|用户","app.judges":"评委|评委","app.votes":"评分|评分","app.user_type.short.pro":"专业","app.user_type.short.tribe":"部落级","app.user_type.short.chief":"首席","app.user_type.short.jury":"评委","app.websites":"网站|网站","app.collections":"收藏|收藏","app.articles":"文章|文章","app.your_vote":"您的评分","login_or_create.header":"登录或创建帐户","login_or_create.not_a_member_yet":"尚未成为会员？","login_or_create.register_now":"马上注册","login_or_create.login_with_your_email":"使用您的电子邮箱登录","login_or_create.forgot_your_password":"您忘记了密码","login_or_create.login_now":"马上登录","login_or_create.connect_with":"连接至","login_or_create.email_or_username":"电子邮箱或用户名","login_or_create.keep_me_logged_in":"保持登录状态","login_or_create.password":"密码","login_or_create.sign_in_to_continue":"登录以继续","login_or_create.or_sign_in_with":"或使用以下信息登录","users_like_this":"<Strong>%users%</strong> 用户赞了这个|<strong>%users%</strong> 用户赞了这个","about.status.privileges.jury.title":"由Awwwards团队每年挑选出的专家组，他们的参与和专业知识是Awwwards的运作基础。","about.status.privileges.jury.description_1":"他们的评分将决定本日网站、本月网站、荣誉提名和年度网站的获奖者。","about.status.privileges.jury.description_2":"本年度5位最佳用户都将被邀请成为下一年的评委。","about.status.privileges.pro.title":"国际公认的在Awwwards完成注册并加入专业计划的代理机构和设计师团队。","about.status.privileges.pro.description_1":"他们的评分将被计入本日网站和荣誉提名。","about.status.privileges.pro.description_2":"个人资料在目录搜结果中，突出显示。","about.status.privileges.chief.title":"通过自身努力获得了1个本日网站、3个荣誉提名或累计获得5000积分的用户。","about.status.privileges.chief.description_1":"他们的评分将被计入本日网站和荣誉提名。","about.status.privileges.chief.description_2":"个人资料已存入目录。","about.status.privileges.tribe.title":"初级用户的参与和知识贡献有助于改善Awwwards社区。","about.status.privileges.tribe.description_1":"他们的评分将被计入“值得称赞的网站”证书（但不被计入本日网站或荣誉提名）。","about.status.privileges.tribe.description_2":"个人资料无法收录在目录中。","form.talent.about_us":"关于我们","form.talent.name":"名称、代理/公司……","form.email":"电子邮件","form.website":"网站","form.talent.message":"我们可以合作吗？","form.talent.message_description":"我们感兴趣的有……","form.characters_remaining":"剩余字符。","form.characters_remaining_no_html":"剩余字符。不允许HTML。","form.add_a_url_with_http":"加入以http://开头的网站","form.validate.select_less":"您必须设定%max%或更少","form.validate.select_at_least":"您至少必须设定%min%","form.creative_fields.tip":"选择最贴切您作品的创意领域。","form.categories.tip":"选择一些分类","form.tags.tip":"选择一些标签","form.tags":"标签","assert.not_blank.name":"assert.not_blank.name","contact.send_message":"发送信息","collection.create_a_new_collection":"创建新的收藏","legend_circle.design":"设计","legend_circle.usability":"实用性","legend_circle.creativity":"创意","legend_circle.content":"内容","search.no_result.title":"您的搜索未能成功！","search.no_result.try_some_different_keywords":"请使用不同的关键字。","search.no_result.use_more_general_keywords":"请使用更通用的关键字。","payment.processing_payment":"正在处理付款","app.notification.changes_saved":"您的更改已保存。","legend_circle.responsive_design":"响应式设计","legend_circle.animations":"动画","legend_circle.accessibility":"可访问性","legend_circle.semantics":"语义","app.final_score":"最终得分","app.show_all":"显示全部","app.notification.collection_created":"您的收藏已创建","vote_opinion.what_do_you_like":"What do you like about it?","vote_opinion.what_do_you_think":"What do you think about this site?","vote_opinion.think.master_piece":"杰作","vote_opinion.think.sotd":"它是 SOTD","vote_opinion.think.not_sotd":"它不是 SOTD","vote_opinion.like.animation":"动画","vote_opinion.like.content_architecture":"内容架构","vote_opinion.like.copy_design":"正文文字设计","vote_opinion.like.interaction":"互动","vote_opinion.like.layout":"画廊","vote_opinion.like.navigation":"导航栏","vote_opinion.like.photo_video":"照片和视频","vote_opinion.like.typography":"文字设计","vote_opinion.like.ui_design":"UI设计","vote_opinion.details.menu":"按钮","vote_opinion.details.about_page":"关于页面","vote_opinion.details.transitions":"页面过渡","vote_opinion.details.header":"页头","vote_opinion.details.contact_page":"联系页面","vote_opinion.details.microinterations":"微互动","vote_opinion.details.footer":"页脚","vote_opinion.details.project_page":"项目页面","vote_opinion.details.filters_effects":"筛选器 & 效果","vote_opinion.details.forms":"表单","vote_opinion.details.ecommerce":"電子商務","vote_opinion.details.storytelling":"故事性","vote_opinion.details.scrolling":"滚动特效","vote_opinion.details.404":"404","vote_opinion.details.illustration":"插画","collection_category.inspiration":"灵感","collection_category.ux-ui":"UX/UI","collection_category.web-technology":"网页技术","collection_category.resources":"资源","collection_category.other":"其他","i_have_read_and_accepted_the_terms_and_conditions":"我已阅读并接受 <strong><a href=\\"%href_terms_and_conditions%\\" target=\\"_blank\\">Terms and Conditions</a>","app.no_info_provided":"无更多信息","app.congratulations":"恭喜","welcome_to_the_exclusive_awwwards_directory":"Welcome to the exclusive Awwwards directory!","directory_description":"The directory place where the top web designers, graphic designers, art directors, illustrators, developers and marketers come to play and grow their business.","app.close":"关闭","we_have_received_your_job_submission":"we_have_received_your_job_submission","payment.submission_received":"我们已经收到您的Awwwards奖申请","payment.submission_received.description":"Shortly, you’ll receive an email confirmation and in a few days, our team will send your project to our esteemed jury for their evaluation. Best of luck in the competition!","payment.job_submission_received":"很荣幸通知您，我们已收到您提交的招聘","payment.submission_job_received.description":"We are checking the details, your offer will be posted soon.","your_registration_is_complete":"Your registration is complete!","new_register.received.description":"If you are a freelancer or work for an agency, add your profile to our exclusive directory aimed at web professionals. Meet new clients, recruit top talent, make important business connections. Now is the time!","login_or_register":"注册/登录","app.confirm_your_vote":"确认您的评分","submission.sotm.nominees.thanks":"感谢您的评分！","explanation_default_credit_card":"We will set this payment method as predefined for future purchases on Awwwards. Coming yearly payments for your subscriptions will be done with this card.","form.edit_information":"编辑信息","add_billing_info":"添加账单信息","form.select_technologies.no_results":"If your technology is not in this list, please add it in the field below?","complete_course_to_download_certificate":"In order to download your certificate you must have completed at least 95% of the Course.","certificate_of_completion":"Certificate of completion","courses":"Course|Courses"},"ja":{"app.following":"フォロー","app.follow":"フォロー","form.description":"説明:","form.name":"氏名","form.select_category":"カテゴリーを選択してください...","footer_box.share_collection":"チームでシェアしよう！","footer_box.edit_collection":"コレクションを編集する","app.show_filters":"フィルターを表示する","search.we_found":"検索結果","search.placeholder":"インスピレーション検索 (HTML5, VR, RED, MINIMAL...)。","app.and":"and","app.for":"for","app.elements":"要素|要素","app.jobs":"求人広告|求人広告","app.create":"作成する","app.load_more":"もっと表示","app.loading":"読み込み中","app.more_info":"詳しい情報はこちら","app.cancel":"キャンセル","app.private":"プライベート","app.save":"保存する","app.delete_collection":"コレクションを削除する","app.deleting_collection":"コレクションを削除中...","user.collections.menu.collections":"コレクション|コレクション","app.yes":"はい","app.no":"No","app.collaborator":"共同制作者","app.delete_account":"アカウントを削除する","app.delete":"削除","app.are_you_sure":"確かですか？","app.add_to_collections":"コレクションに追加！","app.activate_black_option":"ブラックモード","app.activate_white_option":"ホワイトオプションを有効化する","app.send_vote":"投票を送信する","app.edit_your_vote":"投票を編集する","app.edit":"編集する","app.users":"ユーザー|ユーザー","app.judges":"審査員|審査員","app.votes":"投票|投票","app.user_type.short.pro":"PRO","app.user_type.short.tribe":"トライブ","app.user_type.short.chief":"CHIEF","app.user_type.short.jury":"JURY","app.websites":"ウェブサイト|ウェブサイト","app.collections":"コレクション|コレクション","app.articles":"記事|記事","app.your_vote":"皆様の投票","login_or_create.header":"ログインまたはアカウント登録","login_or_create.not_a_member_yet":"会員登録はお済みですか？","login_or_create.register_now":"今すぐ登録","login_or_create.login_with_your_email":"Eメールでログイン","login_or_create.forgot_your_password":"パスワードを忘れた","login_or_create.login_now":"今すぐログイン","login_or_create.connect_with":"～でコネクトする","login_or_create.email_or_username":"Eメールまたはユーザー名","login_or_create.keep_me_logged_in":"ログイン状態を保持する","login_or_create.password":"パスワード","login_or_create.sign_in_to_continue":"サインインして続行する","login_or_create.or_sign_in_with":"～でサインインする","users_like_this":"<Strong>%users%</strong> 人のユーザーがいいねしました|<strong>%users%</strong> 人のユーザーがいいねしました","about.status.privileges.jury.title":"Awwwards チームにより、毎年選抜されるエキスパート集団で、その関与と専門知識はAwwwards の運営に欠かせません。","about.status.privileges.jury.description_1":"彼らの投票はSOTD、SOTM、HM、SOTY の最終結果を決定づけます。","about.status.privileges.jury.description_2":"毎年、５名のトップユーザーが翌年の審査会に招かれます。","about.status.privileges.pro.title":"Awwwards に投資し、プロフェショナルプランに登録した世界的に有名なエージェンシーやデザイナー集団。","about.status.privileges.pro.description_1":"SOTD & HM への投票が可能です。","about.status.privileges.pro.description_2":"ディレクトリーの検索結果でプロフィールが強調表示されます。","about.status.privileges.chief.title":"困難な作業や献身で貢献した才能豊かなユーザーは、1 SOTD、3 HMs または5，000 ポイントを獲得しました。","about.status.privileges.chief.description_1":"SOTD & HM への投票が可能です。","about.status.privileges.chief.description_2":"プロフィールがディレクトリーで公開されます。","about.status.privileges.tribe.title":"参加と知識の貢献が、Awwwards コミュニティの改善をサポートするベーシックユーザー。","about.status.privileges.tribe.description_1":"メリット・フォー・コメンダブル・サイト賞状への投票が可能です (SOTD やHM への投票は不可）。","about.status.privileges.tribe.description_2":"プロフィールはディレクトリーで公開されません。","form.talent.about_us":"Awwwardsについて","form.talent.name":"氏名、エージェンシー / 会社...","form.email":"Eメール","form.website":"ウェブサイト","form.talent.message":"コラボしませんか？","form.talent.message_description":"当社が関心あるのは、次の分野です…","form.characters_remaining":"残り文字数。","form.characters_remaining_no_html":"残り文字数。HTML は不可。","form.add_a_url_with_http":"http://　以降にURL を追加してください","form.validate.select_less":"%max% 未満を指定しなければなりません","form.validate.select_at_least":"%min%以上を指定しなければなりません","form.creative_fields.tip":"皆様の作品の説明と最も一致するクリエイティブ分野を選択してください。","form.categories.tip":"カテゴリーをいくつか選択してください","form.tags.tip":"タグをいくつか選択してください","form.tags":"タグ","assert.not_blank.name":"assert.not_blank.name","contact.send_message":"メッセージを送信する","collection.create_a_new_collection":"新しいコレクションを作成","legend_circle.design":"デザイン","legend_circle.usability":"ユーザビリティ","legend_circle.creativity":"クリエイティビティ","legend_circle.content":"コンテンツ","search.no_result.title":"検索に失敗しました！","search.no_result.try_some_different_keywords":"別のキーワードでやり直してください。","search.no_result.use_more_general_keywords":"より一般的なキーワードを使用してください。","payment.processing_payment":"お支払いを処理しています","app.notification.changes_saved":"変更が保存されました。","legend_circle.responsive_design":"責任あるデザイン","legend_circle.animations":"アニメーション","legend_circle.accessibility":"アクセシビリティ","legend_circle.semantics":"セマンティック","app.final_score":"最終得点","app.show_all":"全て表示","app.notification.collection_created":"コレクションが作成されました","vote_opinion.what_do_you_like":"What do you like about it?","vote_opinion.what_do_you_think":"What do you think about this site?","vote_opinion.think.master_piece":"A masterpiece","vote_opinion.think.sotd":"A SOTD","vote_opinion.think.not_sotd":"It\'s not a SOTD","vote_opinion.like.animation":"アニメーション","vote_opinion.like.content_architecture":"コンテンツ設計","vote_opinion.like.copy_design":"コピーデザイン","vote_opinion.like.interaction":"インタラクション","vote_opinion.like.layout":"ギャラリー","vote_opinion.like.navigation":"ナビゲーション","vote_opinion.like.photo_video":"写真と動画","vote_opinion.like.typography":"タイポグラフィー","vote_opinion.like.ui_design":"UIデザイン","vote_opinion.details.menu":"メニュー","vote_opinion.details.about_page":"Aboutページ","vote_opinion.details.transitions":"トランジション","vote_opinion.details.header":"ヘッダー","vote_opinion.details.contact_page":"お問い合わせページ","vote_opinion.details.microinterations":"マイクロインタラクション","vote_opinion.details.footer":"フッター","vote_opinion.details.project_page":"プロジェクトページ","vote_opinion.details.filters_effects":"フィルターとエフェクト","vote_opinion.details.forms":"フォーム","vote_opinion.details.ecommerce":"E-commerce","vote_opinion.details.storytelling":"ストーリーテリング","vote_opinion.details.scrolling":"スクロール","vote_opinion.details.404":"404","vote_opinion.details.illustration":"イラスト","collection_category.inspiration":"ひらめき","collection_category.ux-ui":"UX/UI","collection_category.web-technology":"ウェブテクノロジー","collection_category.resources":"資源","collection_category.other":"その他","i_have_read_and_accepted_the_terms_and_conditions":"私は利用規約とプライバシーポリシーを読み、これらの条件に同意致しました。","app.no_info_provided":"情報が提供されておりません。","app.congratulations":"おめでとうございます","welcome_to_the_exclusive_awwwards_directory":"Welcome to the exclusive Awwwards directory!","directory_description":"The directory place where the top web designers, graphic designers, art directors, illustrators, developers and marketers come to play and grow their business.","app.close":"閉じる","we_have_received_your_job_submission":"we_have_received_your_job_submission","payment.submission_received":"Awwwards への投稿を受理しました","payment.submission_received.description":"Shortly, you’ll receive an email confirmation and in a few days, our team will send your project to our esteemed jury for their evaluation. Best of luck in the competition!","payment.job_submission_received":"求人広告の投稿を受理しました","payment.submission_job_received.description":"We are checking the details, your offer will be posted soon.","your_registration_is_complete":"Your registration is complete!","new_register.received.description":"If you are a freelancer or work for an agency, add your profile to our exclusive directory aimed at web professionals. Meet new clients, recruit top talent, make important business connections. Now is the time!","login_or_register":"登録 / ログイン","app.confirm_your_vote":"投票を確認する","submission.sotm.nominees.thanks":"ご投票ありがとうございました！","explanation_default_credit_card":"We will set this payment method as predefined for future purchases on Awwwards. Coming yearly payments for your subscriptions will be done with this card.","form.edit_information":"情報を編集する","add_billing_info":"お支払い情報を追加","form.select_technologies.no_results":"If your technology is not in this list, please add it in the field below?","complete_course_to_download_certificate":"In order to download your certificate you must have completed at least 95% of the Course.","certificate_of_completion":"Certificate of completion","courses":"Course|Courses"},"ru":{"app.following":"Following","app.follow":"Follow","form.description":"Description","form.name":"Name","form.select_category":"Select category","footer_box.share_collection":"Share with your team!","footer_box.edit_collection":"Edit collection","app.show_filters":"SHOW FILTERS","search.we_found":"We found","search.placeholder":"SEARCH FOR INSPIRATION (HTML5, VR, RED, MINIMAL...)","app.and":"and","app.for":"for","app.elements":"Element|Elements","app.jobs":"Job|Jobs","app.create":"Create","app.load_more":"Load More","app.loading":"Loading","app.more_info":"More info","app.cancel":"Cancel","app.private":"Private","app.save":"Save","app.delete_collection":"Delete collection","app.deleting_collection":"Deleting collection...","user.collections.menu.collections":"Collection|Collections","app.yes":"Yes","app.no":"No","app.collaborator":"Collaborator","app.delete_account":"Delete account","app.delete":"Delete","app.are_you_sure":"Are you sure?","app.add_to_collections":"Add to collections!","app.activate_black_option":"Enable Dark Mode","app.activate_white_option":"Activate white option","app.send_vote":"Send vote","app.edit_your_vote":"Edit your vote","app.edit":"Edit","app.users":"User|Users","app.judges":"Judge|Judges","app.votes":"Vote|Votes","app.user_type.short.pro":"Pro","app.user_type.short.tribe":"Tribe","app.user_type.short.chief":"Chief","app.user_type.short.jury":"Jury","app.websites":"Website|Websites","app.collections":"Collection|Collections","app.articles":"Article|Articles","app.your_vote":"Your vote","login_or_create.header":"Login or create account","login_or_create.not_a_member_yet":"Not a member yet?","login_or_create.register_now":"Register now","login_or_create.login_with_your_email":"Login with your e-mail","login_or_create.forgot_your_password":"Forgot your password","login_or_create.login_now":"Login now","login_or_create.connect_with":"Connect with","login_or_create.email_or_username":"Email or Username","login_or_create.keep_me_logged_in":"Keep me logged in","login_or_create.password":"Password","login_or_create.sign_in_to_continue":"Sign in to continue","login_or_create.or_sign_in_with":"Or sign in with","users_like_this":"<strong>%users%</strong> user like this|<strong>%users%</strong> users like this","about.status.privileges.jury.title":"A group of experts selected annually by the Awwwards team, whose involvement and expertise is fundamental for Awwwards to function.","about.status.privileges.jury.description_1":"Their vote determines the final score of SOTD, SOTM, HM & SOTY.","about.status.privileges.jury.description_2":"Every year the top 5 users are invited to join the following year’s Jury.","about.status.privileges.pro.title":"A group of internationally recognised agencies and designers, who have invested in Awwwards and registered with a Professional Plan.","about.status.privileges.pro.description_1":"Their votes count towards SOTD & HM.","about.status.privileges.pro.description_2":"Profile highlighted in the Directory search results.","about.status.privileges.chief.title":"Talented users who through hard work and commitment have won 1 SOTD, 3 HMs or gained 5000 points.","about.status.privileges.chief.description_1":"Their votes count towards SOTD & HM.","about.status.privileges.chief.description_2":"Profile included in the Directory.","about.status.privileges.tribe.title":"Basic user whose participation and contribution of knowledge helps to improve the Awwwards community.","about.status.privileges.tribe.description_1":"Their votes count towards the “Merit for Commendable Sites” certificate (but not towards SOTD or HM).","about.status.privileges.tribe.description_2":"Profile not present in the Directory.","form.talent.about_us":"About us","form.talent.name":"Name, agency / company...","form.email":"E-mail","form.website":"Website","form.talent.message":"Can we collaborate?","form.talent.message_description":"We are interested in the following...","form.characters_remaining":"characters remaining.","form.characters_remaining_no_html":"characters remaining. No HTML allowed.","form.add_a_url_with_http":"Add a URL with http://","form.validate.select_less":"You must specify %max% or less","form.validate.select_at_least":"You must specify at least %min%","form.creative_fields.tip":"Select the creative fields that best describe your work.","form.categories.tip":"Select some categories","form.tags.tip":"Select some tags","form.tags":"Tags","assert.not_blank.name":"assert.not_blank.name","contact.send_message":"SEND MESSAGE","collection.create_a_new_collection":"Create a new collection","legend_circle.design":"Design","legend_circle.usability":"Usability","legend_circle.creativity":"Creativity","legend_circle.content":"Content","search.no_result.title":"Your search was not successful!","search.no_result.try_some_different_keywords":"Try some different keywords.","search.no_result.use_more_general_keywords":"Use more general keywords.","payment.processing_payment":"Processing payment","app.notification.changes_saved":"Your changes have been saved.","legend_circle.responsive_design":"Responsive design","legend_circle.animations":"Animation","legend_circle.accessibility":"Accessibility","legend_circle.semantics":"Semantics","app.final_score":"Final score","app.show_all":"Show all","app.notification.collection_created":"Your collection has been created","vote_opinion.what_do_you_like":"What do you like about it?","vote_opinion.what_do_you_think":"What do you think about this site?","vote_opinion.think.master_piece":"A masterpiece","vote_opinion.think.sotd":"A SOTD","vote_opinion.think.not_sotd":"It\'s not a SOTD","vote_opinion.like.animation":"Animation","vote_opinion.like.content_architecture":"Content architecture","vote_opinion.like.copy_design":"Copy design","vote_opinion.like.interaction":"Interaction","vote_opinion.like.layout":"Gallery","vote_opinion.like.navigation":"Navigation","vote_opinion.like.photo_video":"Photo & Video","vote_opinion.like.typography":"Typography","vote_opinion.like.ui_design":"UI design","vote_opinion.details.menu":"Menu","vote_opinion.details.about_page":"About page","vote_opinion.details.transitions":"Transitions","vote_opinion.details.header":"Header","vote_opinion.details.contact_page":"Contact page","vote_opinion.details.microinterations":"Microinteractions","vote_opinion.details.footer":"Footer","vote_opinion.details.project_page":"Project page","vote_opinion.details.filters_effects":"Filters & Effects","vote_opinion.details.forms":"Forms","vote_opinion.details.ecommerce":"E-commerce","vote_opinion.details.storytelling":"Storytelling","vote_opinion.details.scrolling":"Scrolling","vote_opinion.details.404":"404","vote_opinion.details.illustration":"Illustration","collection_category.inspiration":"Inspiration","collection_category.ux-ui":"UX/UI","collection_category.web-technology":"Web technology","collection_category.resources":"Resources","collection_category.other":"Other","i_have_read_and_accepted_the_terms_and_conditions":"I have read and accepted the <strong><a href=\\"%href_terms_and_conditions%\\" target=\\"_blank\\">Terms and Conditions</a></strong> and <strong><a href=\\"%href_privacy_policy%\\" target=\\"_blank\\">Privacy Policy</a></strong>","app.no_info_provided":"No info provided","app.congratulations":"Congratulations","welcome_to_the_exclusive_awwwards_directory":"Welcome to the exclusive Awwwards directory!","directory_description":"The directory place where the top web designers, graphic designers, art directors, illustrators, developers and marketers come to play and grow their business.","app.close":"close","we_have_received_your_job_submission":"we_have_received_your_job_submission","payment.submission_received":"Your site has now been submitted to Awwwards for review!","payment.submission_received.description":"Shortly, you’ll receive an email confirmation and in a few days, our team will send your project to our esteemed jury for their evaluation. Best of luck in the competition!","payment.job_submission_received":"We are pleased to confirm that we have received your job submission","payment.submission_job_received.description":"We are checking the details, your offer will be posted soon.","your_registration_is_complete":"Your registration is complete!","new_register.received.description":"If you are a freelancer or work for an agency, add your profile to our exclusive directory aimed at web professionals. Meet new clients, recruit top talent, make important business connections. Now is the time!","login_or_register":"Register / Log in","app.confirm_your_vote":"Confirm your vote","submission.sotm.nominees.thanks":"Thanks for your Vote!","explanation_default_credit_card":"We will set this payment method as predefined for future purchases on Awwwards. Coming yearly payments for your subscriptions will be done with this card.","form.edit_information":"Edit Info","add_billing_info":"Add billing info","form.select_technologies.no_results":"If your technology is not in this list, please add it in the field below?","complete_course_to_download_certificate":"In order to download your certificate you must have completed at least 95% of the Course.","certificate_of_completion":"Certificate of completion","courses":"Course|Courses"},"pt":{"app.following":"Following","app.follow":"Follow","form.description":"Description","form.name":"Name","form.select_category":"Select category","footer_box.share_collection":"Share with your team!","footer_box.edit_collection":"Edit collection","app.show_filters":"SHOW FILTERS","search.we_found":"We found","search.placeholder":"SEARCH FOR INSPIRATION (HTML5, VR, RED, MINIMAL...)","app.and":"and","app.for":"for","app.elements":"Element|Elements","app.jobs":"Job|Jobs","app.create":"Create","app.load_more":"Load More","app.loading":"Loading","app.more_info":"More info","app.cancel":"Cancel","app.private":"Private","app.save":"Save","app.delete_collection":"Delete collection","app.deleting_collection":"Deleting collection...","user.collections.menu.collections":"Collection|Collections","app.yes":"Yes","app.no":"No","app.collaborator":"Collaborator","app.delete_account":"Delete account","app.delete":"Delete","app.are_you_sure":"Are you sure?","app.add_to_collections":"Add to collections!","app.activate_black_option":"Enable Dark Mode","app.activate_white_option":"Activate white option","app.send_vote":"Send vote","app.edit_your_vote":"Edit your vote","app.edit":"Edit","app.users":"User|Users","app.judges":"Judge|Judges","app.votes":"Vote|Votes","app.user_type.short.pro":"Pro","app.user_type.short.tribe":"Tribe","app.user_type.short.chief":"Chief","app.user_type.short.jury":"Jury","app.websites":"Website|Websites","app.collections":"Collection|Collections","app.articles":"Article|Articles","app.your_vote":"Your vote","login_or_create.header":"Login or create account","login_or_create.not_a_member_yet":"Not a member yet?","login_or_create.register_now":"Register now","login_or_create.login_with_your_email":"Login with your e-mail","login_or_create.forgot_your_password":"Forgot your password","login_or_create.login_now":"Login now","login_or_create.connect_with":"Connect with","login_or_create.email_or_username":"Email or Username","login_or_create.keep_me_logged_in":"Keep me logged in","login_or_create.password":"Password","login_or_create.sign_in_to_continue":"Sign in to continue","login_or_create.or_sign_in_with":"Or sign in with","users_like_this":"<strong>%users%</strong> user like this|<strong>%users%</strong> users like this","about.status.privileges.jury.title":"A group of experts selected annually by the Awwwards team, whose involvement and expertise is fundamental for Awwwards to function.","about.status.privileges.jury.description_1":"Their vote determines the final score of SOTD, SOTM, HM & SOTY.","about.status.privileges.jury.description_2":"Every year the top 5 users are invited to join the following year’s Jury.","about.status.privileges.pro.title":"A group of internationally recognised agencies and designers, who have invested in Awwwards and registered with a Professional Plan.","about.status.privileges.pro.description_1":"Their votes count towards SOTD & HM.","about.status.privileges.pro.description_2":"Profile highlighted in the Directory search results.","about.status.privileges.chief.title":"Talented users who through hard work and commitment have won 1 SOTD, 3 HMs or gained 5000 points.","about.status.privileges.chief.description_1":"Their votes count towards SOTD & HM.","about.status.privileges.chief.description_2":"Profile included in the Directory.","about.status.privileges.tribe.title":"Basic user whose participation and contribution of knowledge helps to improve the Awwwards community.","about.status.privileges.tribe.description_1":"Their votes count towards the “Merit for Commendable Sites” certificate (but not towards SOTD or HM).","about.status.privileges.tribe.description_2":"Profile not present in the Directory.","form.talent.about_us":"About us","form.talent.name":"Name, agency / company...","form.email":"E-mail","form.website":"Website","form.talent.message":"Can we collaborate?","form.talent.message_description":"We are interested in the following...","form.characters_remaining":"characters remaining.","form.characters_remaining_no_html":"characters remaining. No HTML allowed.","form.add_a_url_with_http":"Add a URL with http://","form.validate.select_less":"You must specify %max% or less","form.validate.select_at_least":"You must specify at least %min%","form.creative_fields.tip":"Select the creative fields that best describe your work.","form.categories.tip":"Select some categories","form.tags.tip":"Select some tags","form.tags":"Tags","assert.not_blank.name":"assert.not_blank.name","contact.send_message":"SEND MESSAGE","collection.create_a_new_collection":"Create a new collection","legend_circle.design":"Design","legend_circle.usability":"Usability","legend_circle.creativity":"Creativity","legend_circle.content":"Content","search.no_result.title":"Your search was not successful!","search.no_result.try_some_different_keywords":"Try some different keywords.","search.no_result.use_more_general_keywords":"Use more general keywords.","payment.processing_payment":"Processing payment","app.notification.changes_saved":"Your changes have been saved.","legend_circle.responsive_design":"Responsive design","legend_circle.animations":"Animation","legend_circle.accessibility":"Accessibility","legend_circle.semantics":"Semantics","app.final_score":"Final score","app.show_all":"Show all","app.notification.collection_created":"Your collection has been created","vote_opinion.what_do_you_like":"What do you like about it?","vote_opinion.what_do_you_think":"What do you think about this site?","vote_opinion.think.master_piece":"A masterpiece","vote_opinion.think.sotd":"A SOTD","vote_opinion.think.not_sotd":"It\'s not a SOTD","vote_opinion.like.animation":"Animation","vote_opinion.like.content_architecture":"Content architecture","vote_opinion.like.copy_design":"Copy design","vote_opinion.like.interaction":"Interaction","vote_opinion.like.layout":"Gallery","vote_opinion.like.navigation":"Navigation","vote_opinion.like.photo_video":"Photo & Video","vote_opinion.like.typography":"Typography","vote_opinion.like.ui_design":"UI design","vote_opinion.details.menu":"Menu","vote_opinion.details.about_page":"About page","vote_opinion.details.transitions":"Transitions","vote_opinion.details.header":"Header","vote_opinion.details.contact_page":"Contact page","vote_opinion.details.microinterations":"Microinteractions","vote_opinion.details.footer":"Footer","vote_opinion.details.project_page":"Project page","vote_opinion.details.filters_effects":"Filters & Effects","vote_opinion.details.forms":"Forms","vote_opinion.details.ecommerce":"E-commerce","vote_opinion.details.storytelling":"Storytelling","vote_opinion.details.scrolling":"Scrolling","vote_opinion.details.404":"404","vote_opinion.details.illustration":"Illustration","collection_category.inspiration":"Inspiration","collection_category.ux-ui":"UX/UI","collection_category.web-technology":"Web technology","collection_category.resources":"Resources","collection_category.other":"Other","i_have_read_and_accepted_the_terms_and_conditions":"I have read and accepted the <strong><a href=\\"%href_terms_and_conditions%\\" target=\\"_blank\\">Terms and Conditions</a></strong> and <strong><a href=\\"%href_privacy_policy%\\" target=\\"_blank\\">Privacy Policy</a></strong>","app.no_info_provided":"No info provided","app.congratulations":"Congratulations","welcome_to_the_exclusive_awwwards_directory":"Welcome to the exclusive Awwwards directory!","directory_description":"The directory place where the top web designers, graphic designers, art directors, illustrators, developers and marketers come to play and grow their business.","app.close":"close","we_have_received_your_job_submission":"we_have_received_your_job_submission","payment.submission_received":"Your site has now been submitted to Awwwards for review!","payment.submission_received.description":"Shortly, you’ll receive an email confirmation and in a few days, our team will send your project to our esteemed jury for their evaluation. Best of luck in the competition!","payment.job_submission_received":"We are pleased to confirm that we have received your job submission","payment.submission_job_received.description":"We are checking the details, your offer will be posted soon.","your_registration_is_complete":"Your registration is complete!","new_register.received.description":"If you are a freelancer or work for an agency, add your profile to our exclusive directory aimed at web professionals. Meet new clients, recruit top talent, make important business connections. Now is the time!","login_or_register":"Register / Log in","app.confirm_your_vote":"Confirm your vote","submission.sotm.nominees.thanks":"Thanks for your Vote!","explanation_default_credit_card":"We will set this payment method as predefined for future purchases on Awwwards. Coming yearly payments for your subscriptions will be done with this card.","form.edit_information":"Edit Info","add_billing_info":"Add billing info","form.select_technologies.no_results":"If your technology is not in this list, please add it in the field below?","complete_course_to_download_certificate":"In order to download your certificate you must have completed at least 95% of the Course.","certificate_of_completion":"Certificate of completion","courses":"Course|Courses"}}'
          );
          const s = new (class {
              constructor(e) {
                  (this._fallbackLocale = "en"), (this.translations = e), (this.locale = this._getCurrentLocale());
              }
              trans(e, t) {
                  if (!this.translations.hasOwnProperty(this.locale) || !this.translations[this.locale].hasOwnProperty(e)) return e;
                  var o = this.translations[this.locale][e],
                      n = t || {};
                  for (var s in n) {
                      var i = new RegExp("%" + s + "%", "g");
                      o = o.replace(i, n[s]);
                  }
                  return o;
              }
              transchoice(e, t, o = {}) {
                  var n = o.hash,
                      s = this.trans(e, n).split("|");
                  return 1 == t ? s[0] : s[1];
              }
              _getCurrentLocale() {
                  return "undefined" != typeof document ? document.documentElement.lang.replace("-", "_") : this._fallbackLocale;
              }
          })(n);
      },
      5371: (e, t, o) => {
          "use strict";
          o.d(t, { Z: () => we });
          var n = o(3706),
              s = o(9050),
              i = o(7051),
              a = o(1159),
              r = o(7792),
              l = o(6102),
              c = o.n(l),
              d = o(2316),
              u = o.n(d),
              p = (o(7097), o(4518));
          const h = u().View.extend({
              options: {},
              events: { "mouseover .js-video-hover": "_playVideo", "mouseout .js-video-hover": "_pauseVideo", "click .js-more": "_showUsersCollected" },
              isPlaying: !1,
              initialize: function (e) {
                  (this.options = Object.assign({}, this.options, e)), (this.el.dataset.typebox = this.model.getType() + ":" + this.model.getIdentifier()), p.Z.add(this.model.get("type"), this.model.get("id"), this), this._loadEvents();
              },
              _showUsersCollected: function () {
                  this._doShowUsersCollected();
              },
              _playVideo: function (e) {
                  var t = this,
                      o = e.currentTarget;
                  "VIDEO" !== o.nodeName && (o = o.querySelector("video"));
                  var n = o.play();
                  void 0 !== n &&
                      n
                          .then(() => {
                              t.isPlaying = !0;
                          })
                          .catch(() => {});
              },
              _pauseVideo: function (e) {
                  var t = e.currentTarget;
                  "VIDEO" !== t.nodeName && (t = t.querySelector("video")), this.isPlaying && (t.pause(), (this.isPlaying = !1));
              },
              render: function () {
                  return this;
              },
              _loadEvents: function () {},
          });
          var _ = o(6301),
              m = o(9755);
          const g = u().Model.extend({
              currentCollection: null,
              currentCollaborators: [],
              fetchCollaborators: function (e) {
                  var t = this;
                  (this.currentCollection = e),
                      m.ajax({
                          type: "GET",
                          url: _.Z.generate("tv_collection_get_collaborators", { id: e.id }),
                          success: function (e) {
                              e.length > 0 && ((t.currentCollaborators = e), t.trigger("collaborators_loaded", e));
                          },
                      });
              },
              searchUserByUsernameOrEmail: function (e) {
                  var t = this;
                  m.ajax({
                      type: "POST",
                      url: _.Z.generate("tv_directory_suggest"),
                      data: { text: e },
                      success: function (e) {
                          e.length > 0 && t.trigger("show_users_found", e);
                      },
                  });
              },
              existCollaborator: function (e) {
                  for (var t = 0; t < this.currentCollaborators.length; t++) if (this.currentCollaborators[t].id === e.id) return !0;
                  return !1;
              },
              addCollaborator: function (e) {
                  m.ajax({ type: "POST", url: _.Z.generate("tv_collection_add_collaborator", { id: this.currentCollection.id }), data: { collaborator: e.id } });
              },
              removeCollaborator: function (e) {
                  m.ajax({ type: "POST", url: _.Z.generate("tv_collection_remove_collaborator", { id: this.currentCollection.id }), data: { collaborator: e.id } });
              },
          });
          var f = o(7255),
              v = o.n(f),
              w = o(2157),
              y = o(8943),
              b = o(8559),
              k = u().View.extend({
                  events: { "keyup #username": "_preSearch", "click .add-colaborator": "addCollaborator" },
                  initialize: function () {
                      (this.lightBox = new y.Z({ el: "#lightbox-share" })),
                          this.model.on("collaborators_loaded", this.showCollaborators, this),
                          this.model.on("show_users_found", this.showUsersFound, this),
                          (this._searchDebounced = s.ZP.debounce(s.ZP.bind(this._search, this), 300));
                  },
                  show: function (e) {
                      this.$el.html(v()({ collection: e })), this.lightBox.show(this.el), this.model.fetchCollaborators(e);
                  },
                  showCollaborators: function (e) {
                      for (var t = document.createDocumentFragment(), o = 0; o < e.length; o++) {
                          var n = e[o],
                              s = this._createCollaboratorItem(n);
                          t.appendChild(s);
                      }
                      (this.el.querySelector(".list-users").innerHTML = ""), this.el.querySelector(".list-users").appendChild(t);
                  },
                  _createCollaboratorItem: function (e) {
                      var t = document.createElement("img");
                      (t.src = w.Z.thumb(e.photo, "thumb_user_70")), (t.alt = e.display_name), (t.width = 32), (t.height = 32);
                      var o = document.createElement("div");
                      o.classList.add("bt-delete");
                      var n = document.createElement("li"),
                          s = document.createElement("div");
                      s.classList.add("item", "js-user"), (s.dataset.username = e.username), s.appendChild(t), s.appendChild(o), n.appendChild(s);
                      var i = this.model;
                      return (
                          o.addEventListener("click", function () {
                              n.remove(), i.removeCollaborator(e);
                          }),
                          n
                      );
                  },
                  _preSearch: function (e) {
                      var t = e.currentTarget.value;
                      this._searchDebounced(t);
                  },
                  _search: function (e) {
                      e.length < 3 || (this.model.searchUserByUsernameOrEmail(e), (this.el.querySelector(".box-users-autocomplete").style.display = "block"));
                  },
                  addCollaborator: function (e) {
                      var t = e.currentTarget,
                          o = JSON.parse(t.dataset.user);
                      if (!this.model.existCollaborator(o)) {
                          (this.el.querySelector(".box-users-autocomplete").style.display = "none"), (this.el.querySelector("#username").value = "");
                          var n = this._createCollaboratorItem(o);
                          this.el.querySelector(".list-users").appendChild(n), this.model.addCollaborator(o);
                      }
                  },
                  showUsersFound: function (e) {
                      var t = this.el.querySelector("#suggest-list");
                      (t.innerHTML = ""), t.appendChild(b.Z.createItems(e));
                  },
              });
          const x = k;
          var j = o(1317),
              S = o(3578),
              C = o(3414),
              T = o(9482),
              E = h.extend({
                  events: function () {
                      return s.ZP.extend({}, h.prototype.events, { "click .js-follow": "_follow", "click .js-unfollow": "_unfollow", "click .js-edit-collection": "_editCollection", "click .js-share": "_manageCollaborators" });
                  },
                  _loadEvents: function () {
                      (this.el.dataset.id = this.model.get("id")),
                          this.model.on("change", this.render, this),
                          this.listenTo(this.model, "collection_removed", function () {
                              j.Z.remove(), S.Z.subtracts(), (0, C.O)("success", T.Z.trans("app.notification.changes_saved")), this.remove();
                          }),
                          this.listenTo(this.model, "collection_removed_failure", j.Z.remove);
                  },
                  _manageCollaborators: function () {
                      new x({ model: new g() }).show(this.model.toJSON());
                  },
                  _doShowUsersCollected: function () {
                      new a.Z({ routeToFetch: "tv_collection_followers_list", routeParameters: { id: this.model.get("id") }, total: this.model.get("followers_count") }).show();
                  },
                  _follow: function (e) {
                      i.Z.isLoggedIn() ? (e.preventDefault(), this.model.follow()) : new r.Z().open();
                  },
                  _unfollow: function (e) {
                      i.Z.isLoggedIn() ? (e.preventDefault(), this.model.unfollow()) : new r.Z().open();
                  },
                  _editCollection: function (e) {
                      e.preventDefault();
                      var t = this;
                      Promise.all([o.e(4529), o.e(1488)])
                          .then(o.bind(o, 1488))
                          .then(function (e) {
                              var o = new e.default({ model: t.model });
                              t.listenTo(o, "updated", function (e) {
                                  [].forEach.call(t.el.querySelectorAll(".js-title-collection"), function (t) {
                                      t.innerText = e.get("name");
                                  }),
                                      o.close();
                              }),
                                  o.open();
                          });
                  },
                  render: function () {
                      var e = this.model.isCollaborator(i.Z.id),
                          t = i.Z.isSameUserLoggedIn(this.model.get("user").id),
                          o = this.el.querySelector(".js-render-follow-button");
                      return o
                          ? ((o.innerHTML = c()({
                                isCollaborator: e,
                                isFollowing: this.model.get("following"),
                                followersCount: this.model.get("followers_count"),
                                showOwnerOptions: this.options.ownerOptions && t && 0 == this.model.isLike(),
                                showButtonFollow: !t && !e,
                            })),
                            this._updateCounterUsersButton(),
                            this)
                          : this;
                  },
                  _updateCounterUsersButton: function () {
                      var e = this.el.querySelector(".js-number");
                      e && (e.innerText = this.model.get("followers_count"));
                      var t = this.el.querySelector(".js-more");
                      t && (this.model.get("following") ? t.classList.add("active") : t.classList.remove("active"));
                  },
                  updateLiked: function () {
                      this.model.set("following", !0);
                  },
              });
          const L = E;
          var O = o(9755);
          const P = u().Model.extend({
              defaults: { id: null, type: null, slug: null, is_already_collected: !1, likes: 0 },
              getType: function () {
                  return this.get("type");
              },
              getIdentifier: function () {
                  return this.get("id");
              },
              getUrlToSaveInCollection: function (e) {
                  return _.Z.generate("tv_favourites_collect_item", { type: "submission", parameter: this.get("slug"), idCollection: e });
              },
              getUrlToLike: function () {
                  return _.Z.generate("tv_favourites_like_item", { type: "submission", parameter: this.get("slug") });
              },
              getUrlToDislike: function () {
                  return _.Z.generate("tv_favourites_dislike_item", { type: "submission", parameter: this.get("id") });
              },
              saveInCollection: function (e) {
                  var t = this;
                  O.ajax({
                      type: "POST",
                      url: t.getUrlToSaveInCollection(e),
                      success: function () {
                          t.set("is_already_collected", !0), t.trigger("successfully_collected");
                      },
                      error: function () {
                          t.trigger("unsuccessfully_collected");
                      },
                  });
              },
              like: function () {
                  var e = this;
                  this.set("likes", this.get("likes") + 1),
                      O.ajax({
                          type: "POST",
                          url: e.getUrlToLike(),
                          error: function () {
                              e.set("likes", e.get("likes") - 1);
                          },
                      });
              },
              dislike: function () {
                  var e = this;
                  this.set("likes", this.get("likes") - 1),
                      O.ajax({
                          type: "POST",
                          url: e.getUrlToDislike(),
                          error: function () {
                              e.set("likes", e.get("likes") + 1);
                          },
                      });
              },
              getLikes: function () {
                  var e = this.get("likes");
                  return e <= 0 ? 0 : e;
              },
              getImage: function () {
                  return this.get("images").thumbnail;
              },
          });
          const A = P.extend({
                  defaults: { id: "", slug: "", images: {} },
                  getUrlToSaveInCollection: function (e) {
                      return _.Z.generate("tv_favourites_collect_item", { type: "post", parameter: this.get("slug"), idCollection: e });
                  },
                  getUrlToLike: function () {
                      return _.Z.generate("tv_favourites_like_item", { type: "post", parameter: this.get("slug") });
                  },
                  getUrlToDislike: function () {
                      return _.Z.generate("tv_favourites_dislike_item", { type: "post", parameter: this.get("id") });
                  },
              }),
              Z = "element";
          const I = P.extend({
              defaults: { id: "", main_image: "", type: Z },
              getIdentifier: function () {
                  return this.get("id");
              },
              getUrlToSaveInCollection: function (e) {
                  return _.Z.generate("tv_favourites_collect_item", { type: Z, parameter: this.get("id"), idCollection: e });
              },
              getUrlToLike: function () {
                  return _.Z.generate("tv_favourites_like_item", { type: Z, parameter: this.get("id") });
              },
              getUrlToDislike: function () {
                  return _.Z.generate("tv_favourites_dislike_item", { type: Z, parameter: this.get("id") });
              },
              getImage: function () {
                  return this.get("main_image");
              },
          });
          var q = o(9882),
              M = o.n(q),
              D = o(7594);
          const z = h.extend({
              events: function () {
                  return s.ZP.extend({}, h.prototype.events, { "click .js-collect": "openFolder", "click .js-collect-like": "like", "click .js-collect-dislike": "dislike" });
              },
              _loadEvents: function () {
                  this.listenTo(this.model, "change:likes", this._updateButtonLike);
              },
              updateLiked: function () {
                  var e = this.el.querySelector(".js-collect-like");
                  e && (e.classList.remove("js-collect-like"), e.classList.add("js-collect-dislike"), e.classList.toggle("liked"));
              },
              _updateButtonLike: function () {
                  var e = this.el.querySelector(".js-bt-like"),
                      t = "";
                  0 == this.model.getLikes() ? e.classList.add("circle") : (e.classList.remove("circle"), (t = D.Z.formatNumber(this.model.getLikes(), 2))),
                      (e.querySelector(".number").textContent = t),
                      e.classList.toggle("js-collect-dislike"),
                      e.classList.toggle("js-collect-like"),
                      e.classList.toggle("liked");
              },
              openFolder: function () {
                  var e = this;
                  Promise.all([o.e(4529), o.e(5950)])
                      .then(o.bind(o, 5950))
                      .then(function (t) {
                          new t.default().openFolder(e.model);
                      });
              },
              like: function (e) {
                  (e.preventDefault(), i.Z.isLoggedIn()) ? this.model.like() : new r.Z().open();
              },
              dislike: function (e) {
                  (e.preventDefault(), i.Z.isLoggedIn()) ? this.model.dislike() : new r.Z().open();
              },
          });
          var U = o(1295),
              N = o.n(U),
              R = o(1102),
              H = u().View.extend({
                  tagName: "div",
                  className: "box-content-collections",
                  events: { "click .save": "_send", "click .cancel": "close" },
                  template: N(),
                  initialize: function () {
                      this.model.on("edited", this.triggerEdited, this);
                  },
                  triggerEdited: function (e) {
                      this.trigger("edited", e);
                  },
                  close: function () {
                      this.trigger("close");
                  },
                  _send: function (e) {
                      var t = e.currentTarget;
                      if (!R.Z.isLoading(t)) {
                          R.Z.addLoading(t), this.$(".form-group").removeClass("has-error"), this.$(".alert").hide();
                          var o = this.el.querySelector(".js-title-element").value,
                              n = this.el.querySelector(".js-tags-element").value,
                              s = this.model.getErrors(o);
                          if (0 === s.length) this.model.send(o, n);
                          else {
                              R.Z.removeLoading(t);
                              for (var i = 0, a = s.length; i < a; i++) this.showError(s[i]);
                          }
                      }
                  },
                  showError: function (e) {
                      this.$("." + e + "-group").addClass("has-error"), this.$("." + e + "-error-msg").show();
                  },
                  render: function () {
                      return this.$el.html(this.template({ title: this.model.get("title"), tags: this.model.get("tags").join(", "), image: this._generateElement(this.model.get("main_image")) })), this;
                  },
                  _generateElement: function (e) {
                      return w.Z.isVideo(e) ? '<video class="video-item" height="417" width="299" autoplay loop><source src="' + w.Z.assetTv(e) + '" type="' + w.Z.typeVideo(e) + '"></video>' : '<img src="' + w.Z.assetTv(e) + '">';
                  },
              });
          const B = H;
          var V = o(9755);
          const F = u().Model.extend({
              defaults: { title: "", tags: "", id: null },
              send: function (e, t) {
                  var o = this;
                  V.ajax({
                      type: "POST",
                      url: _.Z.generate("tv_element_edit", { id: this.get("id") }),
                      data: { title: e, tags: t },
                      success: function (e) {
                          o.trigger("edited", e);
                      },
                  });
              },
              getErrors: function (e) {
                  var t = [];
                  return e || t.push("title"), t;
              },
          });
          var W = z.extend({
              events: function () {
                  var e = z.prototype.events;
                  return s.ZP.isFunction(e) && (e = e()), s.ZP.extend({}, e, { "click .js-edit-element": "_editElement" });
              },
              _editElement: function (e) {
                  e.preventDefault();
                  var t = this,
                      o = this.model.toJSON(),
                      n = new y.Z(),
                      s = new B({ model: new F(o) });
                  s.on("close", n.destroy, n),
                      s.on(
                          "edited",
                          function (e) {
                              t.model.set("title", e.title), t.model.set("tags", e.tags), (t.el.querySelector("h3").textContent = e.title), n.destroy();
                          },
                          this
                      ),
                      n.show(s.render().el);
              },
              render: function () {
                  if (this.el.classList.contains("js-no-render")) return this;
                  if (this.el.querySelector(".footer .box-right")) {
                      var e = !!this.model.get("user") && i.Z.isSameUserLoggedIn(this.model.get("user").id);
                      this.el.querySelector(".footer .box-right").innerHTML = M()({ showEditOptions: this.options.isTheOwnerLoggedIn && e });
                  }
                  return this;
              },
          });
          const J = W;
          const Y = P.extend({
              defaults: { id: "", main_image: "", type: "external_element" },
              getIdentifier: function () {
                  return this.get("id");
              },
              getUrlToSaveInCollection: function (e) {
                  return _.Z.generate("tv_favourites_collect_item", { type: "external_element", parameter: this.get("id"), idCollection: e });
              },
              getUrlToLike: function () {
                  return _.Z.generate("tv_favourites_like_item", { type: "external_element", parameter: this.get("id") });
              },
              getUrlToDislike: function () {
                  return _.Z.generate("tv_favourites_dislike_item", { type: "external_element", parameter: this.get("id") });
              },
              getImage: function () {
                  return this.get("main_image");
              },
          });
          var $ = o(6794),
              G = o.n($),
              Q = o(8157),
              X = o.n(Q),
              K = u().View.extend({
                  tagName: "div",
                  className: "box-content-collections",
                  events: { "click .save": "_send", "click .cancel": "close" },
                  template: X(),
                  initialize: function () {
                      this.model.on("edited", this.triggerEdited, this);
                  },
                  triggerEdited: function (e) {
                      this.trigger("edited", e);
                  },
                  close: function () {
                      this.trigger("close");
                  },
                  _send: function (e) {
                      var t = e.currentTarget;
                      if (!R.Z.isLoading(t)) {
                          R.Z.addLoading(t), this.$(".form-group").removeClass("has-error"), this.$(".alert").hide();
                          var o = this.el.querySelector(".js-title-element").value,
                              n = this.el.querySelector(".js-tags-element").value,
                              s = this.model.getErrors(o);
                          if (0 === s.length) this.model.send(o, n);
                          else {
                              R.Z.removeLoading(t);
                              for (var i = 0, a = s.length; i < a; i++) this.showError(s[i]);
                          }
                      }
                  },
                  showError: function (e) {
                      this.$("." + e + "-group").addClass("has-error"), this.$("." + e + "-error-msg").show();
                  },
                  render: function () {
                      return this.$el.html(this.template({ title: this.model.get("title"), tags: this.model.get("tags").join(", "), image: this._generateElement(this.model.get("main_image")) })), this;
                  },
                  _generateElement: function (e) {
                      return w.Z.isVideo(e) ? '<video class="video-item" height="417" width="299" autoplay loop><source src="' + w.Z.assetTv(e) + '" type="' + w.Z.typeVideo(e) + '"></video>' : '<img src="' + w.Z.assetTv(e) + '">';
                  },
              });
          const ee = K;
          var te = o(9755);
          const oe = u().Model.extend({
              defaults: { title: "", tags: "", id: null },
              send: function (e, t) {
                  var o = this;
                  te.ajax({
                      type: "POST",
                      url: _.Z.generate("tv_favourites_edit_element"),
                      data: { title: e, tags: t, element_id: o.get("id") },
                      success: function (e) {
                          o.trigger("edited", e);
                      },
                  });
              },
              getErrors: function (e) {
                  var t = [];
                  return e || t.push("title"), t;
              },
          });
          var ne = z.extend({
              events: function () {
                  var e = z.prototype.events;
                  return s.ZP.isFunction(e) && (e = e()), s.ZP.extend({}, e, { "click .js-edit-element": "_editElement" });
              },
              _editElement: function (e) {
                  e.preventDefault();
                  var t = this,
                      o = this.model.toJSON(),
                      n = new y.Z(),
                      s = new ee({ model: new oe(o) });
                  s.on("close", n.destroy, n),
                      s.on(
                          "edited",
                          function (e) {
                              t.model.set("title", e.title), t.model.set("tags", e.tags), (t.el.querySelector("h3").textContent = e.title), n.destroy();
                          },
                          this
                      ),
                      n.show(s.render().el);
              },
              render: function () {
                  if (this.el.classList.contains("js-no-render")) return this;
                  if (this.el.querySelector(".footer .box-right")) {
                      var e = !!this.model.get("user") && i.Z.isSameUserLoggedIn(this.model.get("user").id);
                      this.el.querySelector(".footer .box-right").innerHTML = G()({ showEditOptions: this.options.isTheOwnerLoggedIn && e });
                  }
                  return this;
              },
          });
          const se = ne;
          const ie = P.extend({
              defaults: { actors: [], collectable: null },
              getUrlToSaveInCollection: function (e) {
                  return _.Z.generate("tv_favourites_add_collectable_to_collection", { collectableId: this.get("collectable").id, idCollection: e });
              },
              getImage: function () {
                  return this.get("image");
              },
          });
          const ae = u().View.extend({
              events: { "click .js-lightbox-user-contact": "_contactUser" },
              _contactUser: function () {
                  var e = this;
                  o.e(2697)
                      .then(o.bind(o, 2697))
                      .then(function (t) {
                          new t.default({ model: e.model }).open();
                      });
              },
          });
          var re = o(9126),
              le = o(1695),
              ce = o.n(le);
          const de = {
              show: function (e) {
                  var t = e,
                      o = t.dataset.link ? t.dataset.link : t.href,
                      n = void 0 !== window.screenLeft ? window.screenLeft : screen.left,
                      s = void 0 !== window.screenTop ? window.screenTop : screen.top,
                      i = document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width,
                      a = document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height,
                      r = (window.innerWidth ? window.innerWidth : i) / 2 - 250 + n,
                      l = (window.innerHeight ? window.innerHeight : a) / 2 - 250 + s,
                      c = window.open(o, "", "scrollbars=yes, width=500, height=500, top=" + l + ", left=" + r);
                  window.focus && c.focus();
              },
          };
          var ue = o(9755);
          const pe = z.extend({
              events: function () {
                  return s.ZP.extend({}, z.prototype.events, h.prototype.events, { "click .js-vote-now": "_showLightbox" });
              },
              _showLightbox: function (e) {
                  var t = this;
                  e.preventDefault(),
                      (this.lightbox = new y.Z({
                          callback_confirmation: function (e) {
                              de.show(e.currentTarget), t._vote(t.model.get("id"));
                          },
                      }));
                  var o = this.el.querySelector(".box-item figure"),
                      n = {
                          internal_url: _.Z.generate("tv_site_show", { slug: this.model.get("slug") }),
                          by: this.model.get("title"),
                          share_button: !0,
                          text_button: "VOTE AND TWEET",
                          share_text: this.model.get("title"),
                          share_url: _.Z.generate("tv_site_show", { slug: this.model.get("slug") }),
                      };
                  o.querySelector("img").srcset ? (n.imageSrcset = o.querySelector("img").getAttribute("srcset")) : (n.image = o.querySelector("img").getAttribute("src"));
                  var s = ce()(n);
                  this.lightbox.show(s);
              },
              _vote: function () {
                  var e = this;
                  ue.ajax({
                      type: "POST",
                      url: _.Z.generate("tv_sotms_nominees_user_vote"),
                      data: { id: e.model.get("id") },
                      success: function () {
                          e.markAsVoted();
                      },
                  });
              },
              markAsVoted: function () {
                  var e = this.el.querySelector(".box-item");
                  e.querySelector("figure").classList.add("voted");
                  var t = e.querySelector(".hover-item.center");
                  t.classList.add("has-hover"), (t.innerHTML = '<span class="heading-medium">' + T.Z.trans("app.your_vote") + "</span>"), ue(".hover-item.center").not(".has-hover").remove();
              },
          });
          var he = o(9755);
          const _e = z.extend({
              events: function () {
                  return s.ZP.extend({}, z.prototype.events, h.prototype.events, { "click .js-vote-now": "_vote" });
              },
              _vote: function (e) {
                  var t = this;
                  e.preventDefault(),
                      (this.lightbox = new y.Z({
                          callback_confirmation: function () {
                              (0, C.O)("success", T.Z.trans("submission.sotm.nominees.thanks")), (document.getElementById("slug_value").value = t.model.get("slug")), document.getElementById("vote_form").submit();
                          },
                      }));
                  var o = this.el.querySelector(".box-item figure"),
                      n = { internal_url: _.Z.generate("tv_site_show", { slug: this.model.get("slug") }), by: this.model.get("title"), text_button: T.Z.trans("app.send_vote") };
                  o.querySelector("img").srcset ? (n.imageSrcset = o.querySelector("img").getAttribute("srcset")) : (n.image = o.querySelector("img").getAttribute("src"));
                  var s = ce()(n);
                  this.lightbox.show(s);
              },
              markAsVoted: function () {
                  var e = this.el.querySelector(".box-item");
                  e.querySelector("figure").classList.add("voted");
                  var t = e.querySelector(".hover-item.center");
                  t.classList.add("has-hover"), (t.innerHTML = '<span class="heading-medium">YOUR VOTE</span>'), he(".hover-item.center").not(".has-hover").remove();
              },
          });
          const me = u().View.extend({
              render: function () {
                  return this;
              },
          });
          var ge = o(6183);
          const fe = {
              submission: { view: z, model: P },
              collection: { view: L, model: n.Z },
              post: { view: z, model: A },
              element: { view: J, model: I },
              external_element: { view: se, model: Y },
              activity: { view: z, model: ie },
              talent: { view: ae, model: re.Z },
              job: { view: me, model: ge.Z },
              sotm: { view: pe, model: P },
              sotm_judge: { view: _e, model: P },
          };
          class ve {
              static create(e, t) {
                  var o = t.type ? t.type : e.type;
                  if (fe.hasOwnProperty(o)) {
                      var n = fe[o];
                      return (t.model = new n.model(e)), new n.view(t);
                  }
              }
              static createSingleElements() {
                  var e = document.querySelector(".js-single-element");
                  if (null !== e) {
                      var t = JSON.parse(e.dataset.model);
                      if (t) ve.create(t, { el: e }).render();
                  }
              }
          }
          const we = ve;
      },
      4518: (e, t, o) => {
          "use strict";
          o.d(t, { Z: () => n });
          const n = new (class {
              constructor() {
                  this.views = {};
              }
              add(e, t, o) {
                  this.views.hasOwnProperty(e) || (this.views[e] = {}), (this.views[e][t] = o);
              }
              get(e, t) {
                  return this.views.hasOwnProperty(e) && this.views[e].hasOwnProperty(t) ? this.views[e][t] : null;
              }
          })();
      },
      4157: (e, t, o) => {
          "use strict";
          o.d(t, { Z: () => i });
          var n = o(6301),
              s = o(9755);
          const i = new (class {
              constructor() {}
              addVisit(e) {
                  s.ajax({ url: n.Z.generate("tv_ajax_add_visit", { slug: e }) });
              }
              addBookDownload(e) {
                  s.ajax({ url: n.Z.generate("tv_ajax_add_book_download", { slug: e }) });
              }
              add(e, t) {
                  s.ajax({ url: n.Z.generate("tv_ajax_add_count", { identifier: e, type: t }) });
              }
          })();
      },
      8215: (e, t, o) => {
          "use strict";
          o.d(t, { Z: () => u });
          o(5449);
          var n = o(2193),
              s = o(4673),
              i = o(6301),
              a = o(3609),
              r = o(8030),
              l = o(9755);
          const c = "utm_campaign";
          class d {
              static getIdentifier() {
                  const e = n.Z.get(s.wd);
                  return void 0 === e || d.hasUTMCampaign() ? d.createIdentifier() : e;
              }
              static createIdentifier() {
                  const e = (function (e) {
                      for (var t = "", o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = o.length, s = 0; s < e; s++) t += o.charAt(Math.floor(Math.random() * n));
                      return t;
                  })(10);
                  return n.Z.set(s.wd, e), e;
              }
              static canLog() {
                  if (!a.Z.hasAccepted(r.hp)) return !1;
                  return void 0 !== n.Z.get(s.wd) || d.hasUTMCampaign();
              }
              static hasUTMCampaign() {
                  return new URLSearchParams(window.location.search).has(c);
              }
              static track() {
                  d.canLog() && d.createIdentifier();
              }
              static log(e, t) {
                  if (!d.canLog()) return;
                  let o = { identifier: d.getIdentifier(), event: e, data: t };
                  var n = new URLSearchParams(window.location.search);
                  n.has(c) && (o.campaign = n.get(c)), l.post({ url: i.Z.generate("tv_academy_log"), data: JSON.stringify(o), dataType: "json", contentType: "application/json" });
              }
          }
          const u = d;
      },
      7792: (e, t, o) => {
          "use strict";
          o.d(t, { Z: () => d });
          var n = o(2316),
              s = o.n(n),
              i = o(3032),
              a = o.n(i),
              r = o(8943),
              l = o(6301),
              c = o(9755);
          const d = s().View.extend({
              className: "box-content-login",
              pages: {},
              loading: null,
              csrfValue: null,
              options: { url_redirect: window.location.href },
              events: { "click .js-tab-login": "_showTabLogin", "click .js-register": "_showTabRegister", "click .js-forgot-password": "_showForgotPassword" },
              initialize: function (e) {
                  this.options = Object.assign({}, this.options, e);
                  var t = this;
                  c.ajax({
                      type: "GET",
                      url: l.Z.generate("tv_login_csrf"),
                      success: function (e) {
                          (t.csrfValue = e.token), t.render();
                      },
                  });
              },
              open: function () {
                  new r.Z().show(this.render().el);
              },
              openWithFloatingObjects: function () {
                  new r.Z().show(this.renderWithFloatingObjects().el);
              },
              _showTabLogin: function (e) {
                  e.preventDefault();
                  var t = e.currentTarget.dataset.tab;
                  this._changeToTab(t);
              },
              _changeToTab: function (e) {
                  this._hideTabs(), c("#" + e).fadeIn();
              },
              _hideTabs: function () {
                  [].forEach.call(this.el.querySelectorAll(".js-tab-form"), function (e) {
                      e.style.display = "none";
                  });
              },
              _showLoading: function () {
                  this._hideTabs(), (this.loading.style.display = "block");
              },
              _showTabRegister: function (e) {
                  if ((e.preventDefault(), this.el.querySelector("#tab-register"))) this._changeToTab("tab-register");
                  else {
                      this._showLoading();
                      var t = this;
                      o.e(8555)
                          .then(o.bind(o, 8555))
                          .then(function (e) {
                              var o = new (0, e.default)();
                              t._addEventsToView(o), (t.pages.register = o), t.pages.register.render();
                          });
                  }
              },
              _showForgotPassword: function (e) {
                  if ((e.preventDefault(), this.el.querySelector("#tab-forgot"))) this._changeToTab("tab-forgot");
                  else {
                      this._showLoading();
                      var t = this;
                      o.e(8412)
                          .then(o.bind(o, 8412))
                          .then(function (e) {
                              var o = new (0, e.default)();
                              t._addEventsToView(o), (t.pages.forgot_password = o), t.pages.forgot_password.render();
                          });
                  }
              },
              _addEventsToView: function (e) {
                  e.on("loaded", this._renderView, this), e.on("show_loading", this._showLoadingView, this), e.on("hide_loading", this._hideLoadingView, this);
              },
              _showLoadingView: function (e) {
                  (e.el.style.display = "none"), (this.loading.style.display = "block");
              },
              _hideLoadingView: function (e) {
                  (e.el.style.display = "block"), c(this.loading).fadeOut();
              },
              _renderView: function (e) {
                  this.el.querySelector(".box-login").appendChild(e.el), c(this.loading).fadeOut();
              },
              renderWithFloatingObjects: function () {
                  return this.$el.html(a()({ from_url: window.location.href, floating_objects: !0 })), (this.loading = this.el.querySelector(".box-msg")), this;
              },
              render: function () {
                  return this.$el.html(a()({ from_url: this.options.url_redirect, csrf_value: this.csrfValue })), (this.loading = this.el.querySelector(".box-msg")), this;
              },
          });
      },
      8713: (e, t, o) => {
          "use strict";
          o.d(t, { Z: () => i });
          var n = o(9050),
              s = o(9482);
          const i = new (class {
              constructor() {
                  this.categories = [
                      { id: "577e3171faaf0f0b36de91e6", slug: "inspiration", name: s.Z.trans("collection_category.inspiration") },
                      { id: "57da65146bdb010208ab5f23", slug: "ux-ui", name: s.Z.trans("collection_category.ux-ui") },
                      { id: "57da65506bdb010208ab5f25", slug: "web-technology", name: s.Z.trans("collection_category.web-technology") },
                      { id: "57da66536bdb010208ab5f27", slug: "resources", name: s.Z.trans("collection_category.resources") },
                      { id: "57da66986bdb010208ab5f29", slug: "other", name: s.Z.trans("collection_category.other") },
                  ];
              }
              get() {
                  return this.categories;
              }
              find(e) {
                  return n.ZP.findWhere(this.categories, { id: e });
              }
          })();
      },
      3578: (e, t, o) => {
          "use strict";
          o.d(t, { Z: () => s });
          var n = o(9482);
          const s = new (class {
              constructor() {}
              sum() {
                  this._update(1);
              }
              subtracts() {
                  this._update(-1);
              }
              _update(e) {
                  var t = document.querySelector(".js-collections-count"),
                      o = document.querySelector(".js-collections-name");
                  t && ((t.innerHTML = parseInt(t.innerHTML) + e), (o.innerHTML = n.Z.transchoice("user.collections.menu.collections", t.innerHTML)));
              }
          })();
      },
      8030: (e, t, o) => {
          "use strict";
          o.d(t, { Di: () => n, hp: () => i, r$: () => s });
          const n = "preferences",
              s = "marketing",
              i = "analysis";
      },
      3609: (e, t, o) => {
          "use strict";
          o.d(t, { Z: () => s });
          var n = o(1746);
          const s = class {
              static hasCookie() {
                  return void 0 !== n.Z.get();
              }
              static hasAccepted(e) {
                  const t = n.Z.get();
                  return void 0 !== t && !!t.hasOwnProperty(e) && "boolean" == typeof t[e] && t[e];
              }
          };
      },
      3157: (e, t, o) => {
          "use strict";
          o.d(t, { Z: () => k });
          var n = o(2193),
              s = o(3609),
              i = o(9050),
              a = o(2316),
              r = o.n(a),
              l = o(4673),
              c = o(1415),
              d = o(8030),
              u = o(6465),
              p = o.n(u);
          const h = r().Model.extend({
              defaults: { preferences: !1, analysis: !1, marketing: !1 },
              acceptAll: function () {
                  this.set("preferences", !0), this.set("analysis", !0), this.set("marketing", !0);
              },
              updateSingleConsent: function (e, t) {
                  this.defaults.hasOwnProperty(e) && ("boolean" != typeof t && (t = !0), this.set(e, t));
              },
          });
          var _ = o(1746);
          const m = r().View.extend({
              className: "box-lightbox",
              id: "lightbox-cookies",
              events: {
                  "click .js-configure-cookies": "_configure",
                  "click .js-save-cookies": "_save",
                  "click .js-accept-all-cookies": "_acceptAll",
                  "change .js-cookie-category": "_savePreference",
                  "click .js-cookies-dd": "_toggle_cookie_detail",
                  "click .js-lightbox-close": "_close",
              },
              isOpen: !1,
              initialize: function () {
                  let e = _.Z.get();
                  void 0 === e ? (e = {}) : (this.isNew = !1), (this.model = new h(e));
              },
              _save: function () {
                  var e = this;
                  document.querySelectorAll(".js-cookie-category").forEach(function (t) {
                      e.model.updateSingleConsent(t.name, t.checked);
                  }),
                      this._saveValues(this.model.toJSON()),
                      this._close();
              },
              _acceptAll: function () {
                  this.model.acceptAll(), this._saveValues(this.model.toJSON()), this._close();
              },
              _saveValues: function (e) {
                  _.Z.set(e);
              },
              _savePreference: function (e) {
                  var t = e.currentTarget;
                  this.model.updateSingleConsent(t.name, t.checked);
              },
              _configure: function () {
                  document.getElementById("cookies-info").classList.remove("active"), document.getElementById("cookies-settings").classList.add("active");
              },
              open: function () {
                  if (!this.isOpen) {
                      this.isOpen = !0;
                      var e = p()({ preferences: this.model.get("preferences"), analysis: this.model.get("analysis"), marketing: this.model.get("marketing") });
                      document.body.appendChild(this.el), document.body.classList.add("hidden-y"), this.$el.append(e);
                      var t = this;
                      setTimeout(function () {
                          t.el.classList.add("open");
                      }, 100);
                  }
              },
              _close: function () {
                  document.body.classList.remove("hidden-y"), this.el.classList.remove("open"), (this.isOpen = !1);
                  var e = this;
                  setTimeout(function () {
                      e.remove();
                  }, 500);
              },
              _toggle_cookie_detail: function (e) {
                  e.currentTarget.closest("li").classList.toggle("show"), e.currentTarget.classList.toggle("show");
              },
              destroy: function () {
                  this.close(), this.remove();
              },
          });
          var g = o(3197),
              f = o.n(g);
          const v = r().View.extend({
              className: "banner-cookies open",
              id: "banner-cookies",
              events: { "click .js-accept-cookies": "_acceptAll" },
              initialize: function () {
                  let e = _.Z.get();
                  void 0 === e && (e = {}), (this.model = new h(e));
              },
              _acceptAll: function () {
                  this.model.acceptAll(), _.Z.set(this.model.toJSON()), this._dismiss();
              },
              render: function () {
                  var e = f()();
                  this.$el.append(e), document.body.appendChild(this.el);
              },
              _dismiss: function () {
                  this.remove();
              },
          });
          class w {
              static loadScript() {
                  w.loadJavascript(function () {
                      beTracker.t({ hash: "b1078f896e63bf824a5c7fa40065a5c3" });
                  });
              }
              static loadJavascript(e) {
                  var t = document.getElementsByTagName("head")[0],
                      o = document.createElement("script");
                  (o.type = "text/javascript"), (o.src = "https://tracker.metricool.com/resources/be.js"), (o.onreadystatechange = e), (o.onload = e), t.appendChild(o);
              }
          }
          const y = w,
              b = [l.Vy, l.N1, l.U2, l.HR];
          const k = class {
              constructor() {
                  i.ZP.extend(this, r().Events);
              }
              start() {
                  s.Z.hasCookie() ? this.onCookiesCreated() : this._createView().open();
              }
              showCookieBar() {
                  s.Z.hasCookie() || new v().render();
              }
              configure() {
                  this._createView().showPopup();
              }
              _createView() {
                  var e = new m();
                  return this.listenTo(e, "cookies_created", this.onCookiesCreated), this.listenTo(e, "cookies_updated", this.onCookiesUpdated), e;
              }
              acceptAll() {
                  c.Z.push({ event: "cookie_consent_statistics" }), c.Z.push({ event: "cookie_consent_marketing" }), y.loadScript();
              }
              onCookiesCreated() {
                  s.Z.hasAccepted(d.Di) || this.removePreferenceCookies();
                  let e = {};
                  s.Z.hasAccepted(d.hp) && (c.Z.push({ event: "cookie_consent_statistics" }), (e.analytics_storage = "granted"), y.loadScript()),
                      s.Z.hasAccepted(d.r$) && (c.Z.push({ event: "cookie_consent_marketing" }), (e.ad_storage = "granted"));
              }
              onCookiesUpdated() {
                  s.Z.hasAccepted("preferences") || this.removePreferenceCookies();
                  let e = {};
                  s.Z.hasAccepted(d.hp) && (c.Z.push({ event: "cookie_consent_statistics" }), (e.analytics_storage = "granted"), y.loadScript()),
                      s.Z.hasAccepted(d.r$) && (c.Z.push({ event: "cookie_consent_marketing" }), (e.ad_storage = "granted"));
              }
              removePreferenceCookies() {
                  b.forEach(function (e) {
                      void 0 !== n.Z.get(e) && n.Z.remove(e);
                  });
              }
          };
      },
      1746: (e, t, o) => {
          "use strict";
          o.d(t, { Z: () => i });
          var n = o(2193),
              s = o(4673);
          const i = class {
              static get() {
                  return n.Z.getJSON(s.ee);
              }
              static set(e) {
                  n.Z.set(s.ee, e);
              }
          };
      },
      4673: (e, t, o) => {
          "use strict";
          o.d(t, { HR: () => a, N1: () => s, R: () => u, U2: () => i, Vy: () => n, XT: () => c, _h: () => l, ee: () => r, wd: () => d });
          const n = "__w_lo",
              s = "__w_dc",
              i = "__w_hub",
              a = "__w_dq",
              r = "__w_cc",
              l = "__w_vq",
              c = "__w_vr",
              d = "__w_ac",
              u = "__w_gp";
      },
      1443: (e, t, o) => {
          "use strict";
          o.d(t, { Z: () => n });
          const n = { MENU_FILTER: "menu.filter", SHOW_SEARCH_RESULTS: "show_search_results", REMOVE_SEARCH_RESULTS: "remove_search_results", REMOVE_COLLECTABLE: "remove_collectable", ERROR: "error" };
      },
      3706: (e, t, o) => {
          "use strict";
          o.d(t, { Z: () => c });
          var n = o(2316),
              s = o.n(n),
              i = o(9050),
              a = o(6301),
              r = o(8713),
              l = o(9755);
          const c = s().Model.extend({
              defaults: { id: "", user: {}, name: "", description: "", category: "", followers_count: 0, following: !1, private: !1, like: !1, type: "collection" },
              getIdentifier: function () {
                  return this.get("id");
              },
              getType: function () {
                  return this.get("type");
              },
              isLike: function () {
                  return 1 == this.get("like");
              },
              follow: function () {
                  var e = this;
                  this.set({ followers_count: this.get("followers_count") + 1, following: !0 }),
                      l.ajax({
                          type: "POST",
                          url: a.Z.generate("tv_collection_follow", { id: this.get("id") }),
                          error: function () {
                              e.set("following", !1);
                          },
                      });
              },
              unfollow: function () {
                  var e = this;
                  this.set({ followers_count: this.get("followers_count") - 1, following: !1 }),
                      l.ajax({
                          type: "POST",
                          url: a.Z.generate("tv_collection_unfollow", { id: this.get("id") }),
                          error: function () {
                              e.set("following", !0);
                          },
                      });
              },
              removeCollectable: function (e, t) {
                  l.ajax({ type: "POST", url: a.Z.generate("tv_collection_remove_collectable", { idCollection: this.get("id"), idCollectable: e, type: t }) });
              },
              isCollaborator: function (e) {
                  var t = !1;
                  return (
                      i.ZP.each(this.get("collaborators"), function (o) {
                          o.id == e && (t = !0);
                      }),
                      t
                  );
              },
              edit: function (e) {
                  var t = this,
                      o = this.getErrorList(e);
                  if (o.length > 0) throw o;
                  l.ajax({
                      type: "POST",
                      url: a.Z.generate("tv_favourites_edit_folder", { id: this.get("id") }),
                      data: e,
                      success: function () {
                          t.set("name", e.name), t.set("description", e.description), t.set("private", e.isPrivate), t.set("category", r.Z.find(e.categoryId)), t.trigger("edit");
                      },
                  });
              },
              create: function (e) {
                  var t = this,
                      o = this.getErrorList(e);
                  if (o.length > 0) throw o;
                  l.ajax({
                      type: "POST",
                      url: a.Z.generate("tv_favourites_create_folder"),
                      data: e,
                      success: function (e) {
                          t.trigger("created", e.template, e.model);
                      },
                  });
              },
              delete: function (e) {
                  if (e) {
                      var t = this;
                      l.ajax({
                          type: "DELETE",
                          url: a.Z.generate("tv_collection_remove", { id: e }),
                          success: function () {
                              t.trigger("collection_removed", e);
                          },
                          error: function () {
                              t.trigger("collection_removed_failure");
                          },
                      });
                  }
              },
              getErrorList: function (e) {
                  var t = [];
                  return e.categoryId.length || t.push("category"), e.name || t.push("name"), t;
              },
          });
      },
      6183: (e, t, o) => {
          "use strict";
          o.d(t, { Z: () => s });
          var n = o(2316);
          const s = o
              .n(n)()
              .Model.extend({ defaults: { id: "", companyLogo: "" } });
      },
      7904: (e, t, o) => {
          "use strict";
          o.d(t, { Z: () => h });
          var n = o(2316),
              s = o.n(n),
              i = o(9050),
              a = o(3697),
              r = o(5371),
              l = o(1443),
              c = (o(7097), o(7051)),
              d = o(6301),
              u = o(2170),
              p = o(9755);
          const h = s().View.extend({
              options: { isTheOwnerLoggedIn: !1, models: [], ownerOptions: !1, view: null, routeLoadMore: null, routeParameters: {}, page: 2 },
              events: { "click .js-bt-loadmore": "_loadMore" },
              listEl: null,
              initialize: function (e) {
                  (this.options = Object.assign({}, this.options, e)),
                      (this.listEl = this.el.querySelector(".js-elements-container")),
                      this.listEl.dataset.view && (this.options.view = this.listEl.dataset.view),
                      this.listEl.dataset.ownerOptions && (this.options.ownerOptions = !0),
                      this.listEl.dataset.ownerId && (this.options.isTheOwnerLoggedIn = c.Z.isSameUserLoggedIn(this.listEl.dataset.ownerId)),
                      this.listEl.dataset.ownerOptions && (this.options.isTheOwnerLoggedIn = !0),
                      this.el.dataset.page && (this.options.page = this.el.dataset.page),
                      this.el.dataset.routeLoadMore && (this.options.routeLoadMore = this.el.dataset.routeLoadMore),
                      this.el.dataset.routeParameters && (this.options.routeParameters = JSON.parse(this.el.dataset.routeParameters)),
                      this._loadEvents();
                  var t = p(this.listEl).children();
                  this._generateItemView(t);
              },
              _loadMore: function (e) {
                  var t = this,
                      o = e.currentTarget;
                  o.classList.add("is-loading");
                  var n = { page: t.options.page };
                  p.ajax({
                      type: "GET",
                      url: d.Z.generate(this.options.routeLoadMore, Object.assign(n, this.options.routeParameters)),
                      success: function (e) {
                          t._showMoreInspiration(e), t.options.page++, o.classList.remove("is-loading");
                      },
                  });
              },
              _showMoreInspiration: function (e) {
                  e.last && (this.el.querySelector(".js-bt-loadmore").style.display = "none");
                  var t = document.createRange().createContextualFragment(e.html),
                      o = document.createDocumentFragment();
                  p(t.querySelector(".js-elements-container")).length
                      ? [].forEach.call(p(t.querySelector(".js-elements-container")).children(), function (e) {
                            o.appendChild(e);
                        })
                      : o.appendChild(t),
                      this._appendElements(o),
                      u.Z.observe(this.listEl);
              },
              _appendElements: function (e) {
                  this._generateItemView(e.children), this.listEl.appendChild(e);
              },
              _generateItemView: function (e) {
                  var t = this;
                  i.ZP.each(e, function (e) {
                      var o = e.dataset.model;
                      if (o) {
                          var n = JSON.parse(o),
                              s = t._getItemView(n, e);
                          s && s.render();
                      }
                  });
              },
              _getItemView: function (e, t) {
                  var o = { el: t, isTheOwnerLoggedIn: this.options.isTheOwnerLoggedIn, ownerOptions: this.options.ownerOptions };
                  return this.options.view && (o.type = this.options.view), r.Z.create(e, o);
              },
              _loadEvents: function () {
                  a.Z.on(l.Z.SHOW_SEARCH_RESULTS, this.hideItems, this), a.Z.on(l.Z.REMOVE_SEARCH_RESULTS, this.showItems, this);
              },
              hideItems: function () {
                  this.listEl.style.display = "none";
              },
              showItems: function () {
                  this.listEl.style.display = "block";
              },
          });
      },
      8943: (e, t, o) => {
          "use strict";
          o.d(t, { Z: () => _ });
          var n = o(2316),
              s = o.n(n);
          const i = new (class {
              constructor() {
                  (this.zIndex = 100), (this.lightboxes = []);
                  var e = this;
                  document.addEventListener("keyup", function (t) {
                      27 === t.which && e.lightboxes.length > 0 && e.lightboxes[e.lightboxes.length - 1].close();
                  });
              }
              add(e) {
                  this.lightboxes.push(e), (e.el.style.zIndex = this.zIndex), this.zIndex++;
              }
              remove() {
                  this.lightboxes.pop(), this.zIndex--;
              }
          })();
          var a = o(9088),
              r = o.n(a),
              l = o(6424),
              c = o.n(l),
              d = o(8837),
              u = o.n(d),
              p = (o(7097), o(9482)),
              h = s().View.extend({
                  className: "box-lightbox",
                  events: { "click .js-lightbox-close": "close", "click ": "_closeFromOutside", "click .yes": "_confirmationOk", "click .no": "close" },
                  options: { close_callback: null, add_close_button: !0, remove_after_close: !1, callback_confirmation: null, extra_info: {}, empty_after_close: !0 },
                  isOpen: !1,
                  btnClose: null,
                  initialize: function (e) {
                      this.options = Object.assign({}, this.options, e);
                  },
                  _createCloseButton: function () {
                      var e = document.createElement("div");
                      return e.classList.add("bt-close", "js-lightbox-close"), e;
                  },
                  openConfirmation: function (e, t, o) {
                      if (!this.isOpen) {
                          this.isOpen = !0;
                          var n = r()({ msg: e, button: t });
                          (this.options.callback_confirmation = o), this.show(n);
                      }
                  },
                  _confirm: function (e, t, o, n, s, i) {
                      var a = o || p.Z.trans("app.are_you_sure"),
                          r = t || null,
                          l = s || null,
                          d = i || !1;
                      if (this.isOpen) return;
                      this.isOpen = !0;
                      let u = c()({ title: a, description: r, textActionButton: n, classActionButton: l, showCancelButton: d });
                      (this.options.callback_confirmation = e), this.show(u);
                  },
                  confirmOk: function (e, t, o) {
                      let n = p.Z.trans("app.yes");
                      this._confirm(e, t, o, n);
                  },
                  showModal: function (e, t, o, n, s, i) {
                      this._confirm(e, o, t, n, s, i);
                  },
                  confirmDelete: function (e, t, o) {
                      let n = p.Z.trans("app.delete");
                      this._confirm(e, t, o, n, "red");
                  },
                  getExtraInfo: function () {
                      return this.options.extra_info;
                  },
                  _confirmationOk: function (e) {
                      if ((this.close(), this.options.callback_confirmation)) return this.options.callback_confirmation(e);
                  },
                  _empty: function () {
                      for (; this.el.hasChildNodes(); ) this.el.removeChild(this.el.firstChild);
                  },
                  show: function (e, t) {
                      if (((this.el.innerHTML = ""), this.options.add_close_button)) {
                          var o = this._createCloseButton();
                          this.el.appendChild(o);
                      }
                      document.body.appendChild(this.el), i.add(this), document.body.classList.add("hidden-y"), t && this._empty(), this.$el.append(e);
                      var n = this;
                      setTimeout(function () {
                          n.el.classList.add("open");
                      }, 100);
                  },
                  showError: function (e) {
                      if (!this.isOpen) {
                          this.isOpen = !0;
                          var t = u()({ msg: e });
                          this.show(t);
                      }
                  },
                  closeWithoutCallback: function () {
                      document.body.classList.remove("hidden-y"), this.el.classList.remove("open"), (this.isOpen = !1), this.options.empty_after_close && this._empty(), i.remove();
                      var e = this;
                      this.options.remove_after_close &&
                          setTimeout(function () {
                              e.remove();
                          }, 500);
                  },
                  setCloseCallback: function (e) {
                      this.options.close_callback = e;
                  },
                  close: function () {
                      this.options.close_callback && this.options.close_callback(), this.closeWithoutCallback();
                  },
                  destroy: function () {
                      this.close(), this.remove();
                  },
                  _closeFromOutside: function (e) {
                      e.target && e.target.classList.contains("box-lightbox") && this.close();
                  },
              });
          const _ = h;
      },
      1415: (e, t, o) => {
          "use strict";
          o.d(t, { Z: () => s });
          const n = class {
              static isEnabled() {
                  return void 0 !== document.body.dataset.debug;
              }
          };
          window.dataLayer = window.dataLayer || [];
          const s = class {
              static gtag() {
                  n.isEnabled() && console.log(arguments), window.dataLayer.push(arguments);
              }
              static push(e) {
                  n.isEnabled() && ((e = Object.assign({ debug_mode: !0 }, e)), console.log(e)), window.dataLayer.push(e);
              }
          };
      },
      8617: (e, t, o) => {
          "use strict";
          o.d(t, { Z: () => l });
          var n = o(2316),
              s = o.n(n),
              i = o(5420),
              a = o.n(i),
              r = o(9755);
          const l = s().View.extend({
              tagName: "div",
              aborted: !1,
              className: "tooltip-user",
              initialize: function (e) {
                  (this.options = e), this.model.on("loaded", this._render, this);
              },
              abort: function () {
                  this.aborted = !0;
                  var e = this;
                  this.el.classList.remove("open"),
                      this.model.abort(),
                      setTimeout(function () {
                          e.remove();
                      }, 300);
              },
              render: function () {
                  this._loading();
                  var e = this;
                  return (
                      setTimeout(function () {
                          e.el.classList.add("open");
                      }, 100),
                      this.model.isLoaded() ? this._render() : this.model.fetchData(),
                      this
                  );
              },
              _loading: function () {
                  (this.el.innerHTML = '<div class="box-loading style3"><div class="spinner"></div></div>'), this.options.classBottom && this.el.classList.add(this.options.classBottom), this.options.target.appendChild(this.el);
              },
              _render: function () {
                  if (!this.aborted) {
                      var e = this;
                      r(this.el.querySelector(".box-loading")).fadeOut(),
                          (this.el.innerHTML = a()({ user: this.model.toJSON() })),
                          (this.el.querySelector("img").onload = function () {
                              e.options.target.appendChild(e.el);
                          });
                  }
              },
          });
      },
      7051: (e, t, o) => {
          "use strict";
          o.d(t, { Z: () => s });
          var n = {
              username: "",
              displayName: "",
              id: "",
              isUserLoggedIn: !1,
              initialize: function () {
                  this.setUser();
              },
              isLoggedIn: function () {
                  return this.isUserLoggedIn;
              },
              isSameUserLoggedIn: function (e) {
                  return e > 0 && e == this.id;
              },
              setUser: function () {
                  var e = document.getElementById("js-user-details");
                  if (e) {
                      var t = JSON.parse(e.dataset.user);
                      (this.username = t.username), (this.displayName = t.displayName), (this.id = t.id), (this.isUserLoggedIn = !0);
                  }
              },
          };
          n.initialize();
          const s = n;
      },
      8365: (e, t, o) => {
          "use strict";
          o.d(t, { Z: () => u });
          var n = o(2316),
              s = o.n(n),
              i = o(9050),
              a = o(7051),
              r = o(6301),
              l = o(4518),
              c = o(1102),
              d = o(9755);
          const u = s().View.extend({
              checked: {},
              initialize: function () {
                  a.Z.isLoggedIn() && ((this.checked = {}), this.check());
              },
              check: function () {
                  if (a.Z.isLoggedIn()) {
                      var e = this,
                          t = this._getCollectablesDom(),
                          o = this._getUserIds();
                      0 !== o.length && (t.user = o),
                          this.isEmpty(t) ||
                              d.ajax({
                                  type: "GET",
                                  data: { keys: t },
                                  url: r.Z.generate("tv_user_check_likes"),
                                  success: function (t) {
                                      e._updateButtonsLiked(t);
                                  },
                              });
                  }
              },
              isEmpty: function (e) {
                  for (var t in e) if (e.hasOwnProperty(t)) return !1;
                  return !0;
              },
              _getCollectablesDom: function () {
                  var e = {},
                      t = this,
                      o = this.el.querySelectorAll("[data-typebox]");
                  return (
                      [].forEach.call(o, function (o) {
                          var n = o.dataset.typebox.split(":"),
                              s = n[0],
                              a = n[1];
                          void 0 === e[s] && ((e[s] = []), (t.checked[s] = [])), i.ZP.contains(t.checked[s], a) || (e[s].push(a), t.checked[s].push(a));
                      }),
                      e
                  );
              },
              _getUserIds: function () {
                  var e = [],
                      t = this;
                  return (
                      void 0 === this.checked.user && (this.checked.user = []),
                      [].forEach.call(this.el.querySelectorAll(".js-user-following"), function (o) {
                          i.ZP.contains(t.checked.user, o.dataset.userId) || (e.push(o.dataset.userId), t.checked.user.push(o.dataset.userId));
                      }),
                      e
                  );
              },
              _updateButtonsLiked: function (e) {
                  for (var t in (void 0 !== e.user && e.user.length > 0 && (this.followById(e.user), delete e.user), e))
                      [].forEach.call(e[t], function (e) {
                          l.Z.get(t, e).updateLiked();
                      });
              },
              followById: function (e) {
                  var t = this;
                  i.ZP.each(
                      e,
                      function (e) {
                          e && t._updateButtonForUser(t.el.querySelector('.js-user-following[data-user-id="' + e + '"]'));
                      },
                      this
                  );
              },
              _updateButtonForUser: function (e) {
                  e && ((0, c.D)(e, 1), (e.href = r.Z.generate("tv_user_unfollow", { username: e.dataset.username })));
              },
          });
      },
      2307: (e, t, o) => {
          "use strict";
          o.d(t, { Z: () => d });
          var n = o(2316),
              s = o.n(n),
              i = o(7051),
              a = o(7792),
              r = o(6301),
              l = o(1102),
              c = o(9755);
          const d = s().View.extend({
              el: "body",
              events: { "click .js-follow-user": "_followUser" },
              _followUser: function (e) {
                  var t = this;
                  if ((e.preventDefault(), i.Z.isLoggedIn())) {
                      var o = e.currentTarget,
                          n = o.href,
                          s = o.classList.contains("active");
                      (0, l.D)(o, 1),
                          s ? t._removeFollowCounter(o) : t._addFollowCounter(o),
                          c.ajax({
                              type: "POST",
                              url: n,
                              success: function (e) {
                                  if (e) {
                                      var n = s ? "tv_user_follow" : "tv_user_unfollow";
                                      o.href = r.Z.generate(n, { username: o.dataset.username });
                                  } else (0, l.D)(o, 1), s ? t._addFollowCounter(o) : t._removeFollowCounter(o);
                              },
                          });
                  } else {
                      new a.Z().open();
                  }
              },
              _addFollowCounter: function (e) {
                  this._updateFollowCounter(e, 1);
              },
              _removeFollowCounter: function (e) {
                  this._updateFollowCounter(e, -1);
              },
              _updateFollowCounter: function (e, t) {
                  var o = e.closest(".footer");
                  if (o) {
                      var n = o.querySelector(".js-more-users");
                      if (n) n.classList.toggle("active"), (n.dataset.total = parseInt(n.dataset.total) + parseInt(t)), (n.querySelector(".number").innerText = n.dataset.total);
                  }
              },
          });
      },
      8559: (e, t, o) => {
          "use strict";
          o.d(t, { Z: () => s });
          var n = o(2157);
          const s = class {
              static createItems(e) {
                  for (var t = document.createDocumentFragment(), o = 0; o < e.length; o++) {
                      var s = document.createElement("li");
                      s.classList.add("add-colaborator");
                      var i = document.createElement("img");
                      (i.src = n.Z.thumb(e[o].photo, "thumb_user_70")), (i.style.width = 32), (i.style.height = 32);
                      var a = document.createElement("span");
                      (a.textContent = e[o].display_name), s.appendChild(i), s.appendChild(a), (s.dataset.user = JSON.stringify(e[o])), t.appendChild(s);
                  }
                  return t;
              }
          };
      },
      9126: (e, t, o) => {
          "use strict";
          o.d(t, { Z: () => s });
          var n = o(2316);
          const s = o
              .n(n)()
              .Model.extend({ defaults: { id: "", displayName: "" } });
      },
      1159: (e, t, o) => {
          "use strict";
          o.d(t, { Z: () => m });
          var n = o(2316),
              s = o.n(n),
              i = o(8943),
              a = o(791),
              r = o.n(a),
              l = o(6393),
              c = o.n(l),
              d = o(2307),
              u = o(8365),
              p = o(6301),
              h = (o(7097), o(2406)),
              _ = o(9755);
          const m = s().View.extend({
              events: { "click .load-more": "_loadMore" },
              className: "box-content-likes",
              template_datas: { count: 0, users_collected: [] },
              options: { routeToFetch: null, total: 0, routeParameters: null, page: 1, title: null },
              firstLoad: !0,
              userCheck: null,
              initialize: function (e) {
                  this.options = Object.assign({}, this.options, e);
                  var t = this;
                  this.lightBox = new i.Z({
                      close_callback: function () {
                          t.remove();
                      },
                      remove_after_close: !0,
                  });
              },
              show: function () {
                  this._showLoading(), this._fetch();
              },
              _fetch: function () {
                  var e = this;
                  _.ajax({
                      type: "GET",
                      url: p.Z.generate(this.options.routeToFetch, Object.assign(this.options.routeParameters, { page: this.options.page })),
                      success: function (t) {
                          0 !== t.length
                              ? (e.options.page++,
                                e.render(t),
                                e.el.querySelector(".load-more") && (e.el.querySelector(".load-more").classList.remove("is-loading"), t.length < 32 && (e.el.querySelector(".load-more").style.display = "none")))
                              : (e.el.querySelector(".load-more").style.display = "none");
                      },
                  });
              },
              _showLoading: function () {
                  this.$el.html('<div class="box-msg"><div class="box-loading style3 open"><div class="spinner"></div></div></div>'), this.lightBox.show(this.el);
              },
              render: function (e) {
                  if (this.firstLoad) this._renderFirstTime(e), (this.firstLoad = !1);
                  else {
                      var t = c()({ users: e }),
                          o = (0, h.Hk)(t);
                      this.el.querySelector(".js-user-list").appendChild(o), new d.Z({ el: o }), this.userCheck.check();
                  }
              },
              _renderFirstTime: function (e) {
                  this.$el.html(r()({ total: this.options.total, users: e, title: this.options.title })), new d.Z({ el: this.el }), (this.userCheck = new u.Z({ el: this.el }));
              },
              _loadMore: function (e) {
                  e.currentTarget.classList.add("is-loading"), this._fetch();
              },
          });
      },
      1102: (e, t, o) => {
          "use strict";
          function n(e, t) {
              var o = "";
              (t = t || 1),
                  e.classList.remove("is-loading"),
                  (o = e.classList.contains("active") ? e.dataset.textStart : e.dataset.textEnd),
                  setTimeout(function () {
                      e.querySelector(".js-bt-content") && (e.querySelector(".js-bt-content").textContent = o), e.classList.toggle("active");
                  }, t);
          }
          o.d(t, { D: () => n, Z: () => s });
          const s = class {
              static addLoading(e) {
                  var t = document.createElement("div");
                  t.classList.add("bt-load"), e.appendChild(t), e.classList.add("is-loading");
              }
              static addOne(e) {
                  if (e.querySelector(".number")) {
                      var t = parseInt(e.querySelector(".number").textContent) + 1;
                      e.querySelector(".number").textContent = t.toString();
                  }
              }
              static subtractOne(e) {
                  if (e.querySelector(".number")) {
                      var t = parseInt(e.querySelector(".number").textContent) - 1;
                      e.querySelector(".number").textContent = t.toString();
                  }
              }
              static removeLoading(e) {
                  e.classList.remove("is-loading", "active"), e.querySelector(".bt-load").remove();
              }
              static isLoading(e) {
                  return e.classList.contains("is-loading");
              }
              static load(e) {
                  var t = document.createElement("div");
                  if ((t.classList.add("bt-load"), e.appendChild(t), e.classList.add("is-loading"), "loading" !== e.dataset.button)) {
                      e.classList.contains("active")
                          ? setTimeout(function () {
                                e.classList.remove("is-loading"), e.classList.remove("active"), (e.querySelector(".bt-content").textContent = e.dataset.textStart);
                            }, 1e3)
                          : setTimeout(function () {
                                e.classList.remove("is-loading"), e.classList.add("active"), (e.querySelector(".bt-content").textContent = e.dataset.textEnd);
                            }, 1e3);
                  }
              }
          };
      },
      2193: (e, t, o) => {
          "use strict";
          o.d(t, { Z: () => l });
          var n = o(6808),
              s = o.n(n),
              i = {},
              a = { __w_vq: "w.video_quality", __w_hub: "hide_user_bubble" };
          class r {
              static getJSON(e) {
                  return i.hasOwnProperty(e) || (i[e] = s().getJSON(e)), i[e];
              }
              static get(e, t, o = !1) {
                  if (a.hasOwnProperty(e)) {
                      var n = r.get(a[e]);
                      void 0 !== n && (r.set(e, n), s().remove(a[e]));
                  }
                  return i.hasOwnProperty(e) || (i[e] = s().get(e, o)), void 0 === i[e] ? t : i[e];
              }
              static set(e, t, o) {
                  s().set(e, t, Object.assign({ domain: ".awwwards.com", expires: 730 }, o)), (i[e] = t);
              }
              static remove(e, t) {
                  s().remove(e, t);
              }
          }
          const l = r;
      },
      2406: (e, t, o) => {
          "use strict";
          function n(e) {
              let t = document.createRange().createContextualFragment(e),
                  o = document.createDocumentFragment();
              return o.appendChild(t), o;
          }
          function s(e, t = 600) {
              (e.style.display = ""), (e.style.opacity = 0);
              var o = +new Date(),
                  n = function () {
                      (e.style.opacity = +e.style.opacity + (new Date() - o) / t), (o = +new Date()), +e.style.opacity < 1 && ((window.requestAnimationFrame && requestAnimationFrame(n)) || setTimeout(n, 16));
                  };
              n();
          }
          function i(e) {
              (e.style.opacity = 1),
                  (function t() {
                      (e.style.opacity -= 0.1) < 0 ? e.remove() : requestAnimationFrame(t);
                  })();
          }
          o.d(t, { Hk: () => n, Ji: () => s, fm: () => i });
      },
      7594: (e, t, o) => {
          "use strict";
          o.d(t, { Z: () => n });
          const n = class {
              static formatNumber(e, t) {
                  var o = "" + e,
                      n = new Array(t + 1).join("0");
                  return n.substring(0, n.length - o.length) + o;
              }
          };
      },
      2157: (e, t, o) => {
          "use strict";
          o.d(t, { Z: () => s });
          var n = "https://assets.awwwards.com";
          const s = class {
              static asset(e) {
                  return e ? n.replace(/\/$/g, "") + "/" + e.replace(/^\//g, "") : "";
              }
              static assetTv(e) {
                  return e ? ("string" != typeof e ? "" : new RegExp("^http", "i").test(e) ? e : n.replace(/\/$/g, "") + "/awards/" + e.replace(/^\//g, "")) : "";
              }
              static assetLocal(e) {
                  return e ? "/".replace(/\/$/g, "") + "/" + e.replace(/^\//g, "") : "";
              }
              static thumb(e, t) {
                  if (!e) return "";
                  var o = e.replace(/^\//g, "");
                  return this.assetTv("media/cache/" + t + "/" + o);
              }
              static isAnimated(e) {
                  if (!e) return !1;
                  var t = e.split(".").pop();
                  return -1 != ["gif", "mp4", "m4v", "webm"].indexOf(t);
              }
              static isVideo(e) {
                  return e && -1 != ["mp4", "m4v", "webm"].indexOf(e.split(".").pop());
              }
              static typeVideo(e) {
                  if (e) {
                      var t = e.split(".").pop();
                      return "mp4" === t || "m4v" === t ? "video/mp4" : "video/webm";
                  }
                  return "";
              }
              static getStaticVersion(e) {
                  return e.substr(0, e.lastIndexOf(".")) + "_static.jpeg";
              }
              static icon(e, t, o, n) {
                  return (
                      '<svg class="ico-svg' +
                      (n && "string" == typeof n ? " " + n : "") +
                      '" viewbox="0 0 ' +
                      t +
                      " " +
                      o +
                      '" xmlns="http://www.w3.org/2000/svg"><use xlink:href="' +
                      ("/assets/images/sprite-icons.svg#" + e) +
                      '" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>'
                  );
              }
              static getImageInfo(e) {
                  return e ? { static: this.isAnimated(e) ? this.getStaticVersion(e) : e, animated: e, is_video: this.isVideo(e) } : { static: null, animated: null, is_video: !1 };
              }
          };
      },
      2170: (e, t, o) => {
          "use strict";
          o.d(t, { Z: () => n });
          o(6337);
          const n = new (class {
              constructor() {
                  var e = this;
                  this.observer = new IntersectionObserver(
                      function (t) {
                          t.forEach(function (t) {
                              t.isIntersecting && ("IMG" == t.target.tagName && e._observeImages(t.target), "VIDEO" == t.target.tagName && e._observeVideos(t.target), e.observer.unobserve(t.target));
                          });
                      },
                      { threshold: 0.1 }
                  );
              }
              _observeImages(e) {
                  var t = e.src;
                  e.dataset.src && (e.src = e.dataset.src),
                      e.dataset.srcset && (e.srcset = e.dataset.srcset),
                      e.classList.add("lazy-hidden"),
                      (e.onload = function () {
                          e.classList.remove("lazy-hidden"),
                              setTimeout(function () {
                                  e.classList.add("lazy-loaded");
                              }, 100);
                      }),
                      (e.onerror = function () {
                          e.srcset && e.removeAttribute("srcset"), (e.src = t), e.classList.remove("lazy-hidden"), e.classList.add("lazy-loaded");
                      });
              }
              _observeVideos(e) {
                  e.dataset.poster && (e.poster = e.dataset.poster),
                      [].forEach.call(e.querySelectorAll("source"), function (e) {
                          e.dataset.src && (e.src = e.dataset.src);
                      }),
                      e.classList.add("lazy-hidden"),
                      (e.onloadeddata = function () {
                          e.classList.remove("lazy-hidden"),
                              setTimeout(function () {
                                  e.classList.add("lazy-loaded");
                              }, 100);
                      }),
                      e.load();
              }
              observe(e) {
                  e || (e = document);
                  var t = this;
                  [].forEach.call(e.querySelectorAll("img.lazy"), function (e) {
                      t.observer.observe(e);
                  }),
                      [].forEach.call(e.querySelectorAll("video.lazy-video"), function (e) {
                          t.observer.observe(e);
                      });
              }
          })();
      },
      3414: (e, t, o) => {
          "use strict";
          o.d(t, { O: () => a });
          const n = {
              success: '<svg height="10" width="10" viewBox="0 0 20 20"><path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zM8 15l-5-5 1.4-1.4L8 12.2l7.6-7.6L17 6l-9 9z" fill-rule="evenodd"/></svg>',
              warning: '<svg height="10" width="10" viewBox="0 0 20 20"><path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm1 15H9v-2h2v2zm0-4H9V5h2v6z" fill-rule="evenodd"/></svg>',
              error:
                  '<svg height="10" width="10" viewBox="0 0 20 20"><path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm5 13.6L13.6 15 10 11.4 6.4 15 5 13.6 8.6 10 5 6.4 6.4 5 10 8.6 13.6 5 15 6.4 11.4 10l3.6 3.6z" fill-rule="evenodd"/></svg>',
          };
          function s(e, t = 5e3) {
              return setTimeout(function () {
                  e.classList.add("hide");
              }, t);
          }
          function i(e, t = 6e3) {
              return setTimeout(function () {
                  e.parentNode.removeChild(e);
              }, t);
          }
          function a(e, t) {
              var o,
                  a,
                  r = document.createElement("div"),
                  l = n[e];
              r.classList.add("snackbar", "snackbar-" + e),
                  (r.innerHTML = l + t),
                  document.body.appendChild(r),
                  setTimeout(function () {
                      r.classList.add("show");
                  }, 100),
                  (o = s(r)),
                  (a = i(r)),
                  r.addEventListener("mouseover", function () {
                      clearTimeout(o), clearTimeout(a);
                  }),
                  r.addEventListener("mouseout", function () {
                      (o = s(r, 2e3)), (a = i(r, 3e3));
                  });
          }
      },
      4040: (e, t, o) => {
          "use strict";
          o.d(t, { Z: () => n });
          const n = class {
              static getWidth() {
                  var e = window,
                      t = document,
                      o = t.documentElement,
                      n = t.getElementsByTagName("body")[0];
                  return e.innerWidth || o.clientWidth || n.clientWidth;
              }
              static getHeight() {
                  var e = window,
                      t = document,
                      o = t.documentElement,
                      n = t.getElementsByTagName("body")[0];
                  return e.innerHeight || o.clientHeight || n.clientHeight;
              }
              static getOffset(e) {
                  var t = e.getBoundingClientRect(),
                      o = document.body;
                  return { top: t.top + o.scrollTop, left: t.left + o.scrollLeft };
              }
          };
      },
      7499: (e, t, o) => {
          "use strict";
          o.r(t), o.d(t, { default: () => s });
          var n = o(2157);
          function s(e) {
              return n.Z.asset(e);
          }
      },
      4739: (e, t, o) => {
          "use strict";
          o.r(t), o.d(t, { default: () => s });
          var n = o(2157);
          function s(e, t) {
              return n.Z.thumb(e, t);
          }
      },
      9105: (e, t, o) => {
          "use strict";
          function n(e, t, o, n) {
              if (arguments.length < 3) throw new Error("Handlerbars Helper 'compare' needs 2 parameters");
              void 0 === n && ((n = o), (o = t), (t = "==="));
              const s = {
                  "==": function (e, t) {
                      return e == t;
                  },
                  "===": function (e, t) {
                      return e === t;
                  },
                  "!=": function (e, t) {
                      return e != t;
                  },
                  "!==": function (e, t) {
                      return e !== t;
                  },
                  "<": function (e, t) {
                      return e < t;
                  },
                  ">": function (e, t) {
                      return e > t;
                  },
                  "<=": function (e, t) {
                      return e <= t;
                  },
                  ">=": function (e, t) {
                      return e >= t;
                  },
                  typeof: function (e, t) {
                      return typeof e == t;
                  },
              };
              if (!s[t]) throw new Error(`Handlerbars Helper 'compare' doesn't know the operator ${t}`);
              const i = s[t](e, o);
              return i ? n.fn(this) : n.inverse(this);
          }
          o.r(t), o.d(t, { default: () => n });
      },
      561: (e, t, o) => {
          "use strict";
          o.r(t), o.d(t, { default: () => s });
          var n = o(2157);
          function s(e, t, o, s) {
              return n.Z.icon(e, t, o, s);
          }
      },
      7781: (e, t, o) => {
          "use strict";
          o.r(t), o.d(t, { default: () => s });
          var n = o(2157);
          function s(e, t, o, s) {
              return n.Z.icon(`user-${e}`, t, o, s);
          }
      },
      6805: (e, t, o) => {
          "use strict";
          function n(e, t) {
              return "object" == typeof e ? t.fn(this) : t.inverse(this);
          }
          o.r(t), o.d(t, { default: () => n });
      },
      5040: (e, t, o) => {
          "use strict";
          o.r(t), o.d(t, { default: () => s });
          var n = o(6301);
          function s(e, t) {
              return n.Z.generate(e, t.hash);
          }
      },
      8040: (e, t, o) => {
          "use strict";
          o.r(t), o.d(t, { default: () => s });
          var n = o(9482);
          function s(e, t) {
              return n.Z.trans(e, t);
          }
      },
      579: (e, t, o) => {
          "use strict";
          o.r(t), o.d(t, { default: () => s });
          var n = o(9482);
          function s(e, t, o) {
              return n.Z.transchoice(e, t, o);
          }
      },
      7677: function (e, t) {
          var o, n, s;
          !(function (i) {
              ((a = {}).__esModule = !0),
                  (a.Routing = a.Router = void 0),
                  (r = (function () {
                      function e(e, t) {
                          (this.context_ = e || { base_url: "", prefix: "", host: "", port: "", scheme: "", locale: "" }), this.setRoutes(t || {});
                      }
                      return (
                          (e.getInstance = function () {
                              return a.Routing;
                          }),
                          (e.setData = function (t) {
                              e.getInstance().setRoutingData(t);
                          }),
                          (e.prototype.setRoutingData = function (e) {
                              this.setBaseUrl(e.base_url),
                                  this.setRoutes(e.routes),
                                  void 0 !== e.prefix && this.setPrefix(e.prefix),
                                  void 0 !== e.port && this.setPort(e.port),
                                  void 0 !== e.locale && this.setLocale(e.locale),
                                  this.setHost(e.host),
                                  void 0 !== e.scheme && this.setScheme(e.scheme);
                          }),
                          (e.prototype.setRoutes = function (e) {
                              this.routes_ = Object.freeze(e);
                          }),
                          (e.prototype.getRoutes = function () {
                              return this.routes_;
                          }),
                          (e.prototype.setBaseUrl = function (e) {
                              this.context_.base_url = e;
                          }),
                          (e.prototype.getBaseUrl = function () {
                              return this.context_.base_url;
                          }),
                          (e.prototype.setPrefix = function (e) {
                              this.context_.prefix = e;
                          }),
                          (e.prototype.setScheme = function (e) {
                              this.context_.scheme = e;
                          }),
                          (e.prototype.getScheme = function () {
                              return this.context_.scheme;
                          }),
                          (e.prototype.setHost = function (e) {
                              this.context_.host = e;
                          }),
                          (e.prototype.getHost = function () {
                              return this.context_.host;
                          }),
                          (e.prototype.setPort = function (e) {
                              this.context_.port = e;
                          }),
                          (e.prototype.getPort = function () {
                              return this.context_.port;
                          }),
                          (e.prototype.setLocale = function (e) {
                              this.context_.locale = e;
                          }),
                          (e.prototype.getLocale = function () {
                              return this.context_.locale;
                          }),
                          (e.prototype.buildQueryParams = function (e, t, o) {
                              var n,
                                  s = this,
                                  i = new RegExp(/\[\]$/);
                              if (t instanceof Array)
                                  t.forEach(function (t, n) {
                                      i.test(e) ? o(e, t) : s.buildQueryParams(e + "[" + ("object" == typeof t ? n : "") + "]", t, o);
                                  });
                              else if ("object" == typeof t) for (n in t) this.buildQueryParams(e + "[" + n + "]", t[n], o);
                              else o(e, t);
                          }),
                          (e.prototype.getRoute = function (e) {
                              var t,
                                  o = [this.context_.prefix + e, e + "." + this.context_.locale, this.context_.prefix + e + "." + this.context_.locale, e];
                              for (t in o) if (o[t] in this.routes_) return this.routes_[o[t]];
                              throw new Error('The route "' + e + '" does not exist.');
                          }),
                          (e.prototype.generate = function (t, o, n) {
                              var s,
                                  i = this.getRoute(t),
                                  a = o || {},
                                  r = Object.assign({}, a),
                                  l = "",
                                  c = !0,
                                  d = "";
                              o = void 0 === this.getPort() || null === this.getPort() ? "" : this.getPort();
                              if (
                                  (i.tokens.forEach(function (o) {
                                      if ("text" === o[0] && "string" == typeof o[1]) return (l = e.encodePathComponent(o[1]) + l), void (c = !1);
                                      if ("variable" !== o[0]) throw new Error('The token type "' + o[0] + '" is not supported.');
                                      6 === o.length && !0 === o[5] && (c = !1);
                                      var n = i.defaults && !Array.isArray(i.defaults) && "string" == typeof o[3] && o[3] in i.defaults;
                                      if (!1 === c || !n || ("string" == typeof o[3] && o[3] in a && !Array.isArray(i.defaults) && a[o[3]] != i.defaults[o[3]])) {
                                          var s,
                                              d = void 0;
                                          if ("string" == typeof o[3] && o[3] in a) (d = a[o[3]]), delete r[o[3]];
                                          else {
                                              if ("string" != typeof o[3] || !n || Array.isArray(i.defaults)) {
                                                  if (c) return;
                                                  throw new Error('The route "' + t + '" requires the parameter "' + o[3] + '".');
                                              }
                                              d = i.defaults[o[3]];
                                          }
                                          ((!0 === d || !1 === d || "" === d) && c) || ((s = e.encodePathComponent(d)), (l = o[1] + (s = "null" === s && null === d ? "" : s) + l)), (c = !1);
                                      } else n && "string" == typeof o[3] && o[3] in r && delete r[o[3]];
                                  }),
                                  "" === l && (l = "/"),
                                  i.hosttokens.forEach(function (e) {
                                      var t;
                                      "text" !== e[0]
                                          ? "variable" === e[0] && (e[3] in a ? ((t = a[e[3]]), delete r[e[3]]) : i.defaults && !Array.isArray(i.defaults) && e[3] in i.defaults && (t = i.defaults[e[3]]), (d = e[1] + t + d))
                                          : (d = e[1] + d);
                                  }),
                                  (l = this.context_.base_url + l),
                                  i.requirements && "_scheme" in i.requirements && this.getScheme() != i.requirements._scheme
                                      ? ((s = d || this.getHost()), (l = i.requirements._scheme + "://" + s + (-1 < s.indexOf(":" + o) || "" === o ? "" : ":" + o) + l))
                                      : void 0 !== i.schemes && void 0 !== i.schemes[0] && this.getScheme() !== i.schemes[0]
                                      ? ((s = d || this.getHost()), (l = i.schemes[0] + "://" + s + (-1 < s.indexOf(":" + o) || "" === o ? "" : ":" + o) + l))
                                      : d && this.getHost() !== d + (-1 < d.indexOf(":" + o) || "" === o ? "" : ":" + o)
                                      ? (l = this.getScheme() + "://" + d + (-1 < d.indexOf(":" + o) || "" === o ? "" : ":" + o) + l)
                                      : !0 === n && (l = this.getScheme() + "://" + this.getHost() + (-1 < this.getHost().indexOf(":" + o) || "" === o ? "" : ":" + o) + l),
                                  0 < Object.keys(r).length)
                              ) {
                                  function u(t, o) {
                                      (o = null === (o = "function" == typeof o ? o() : o) ? "" : o), h.push(e.encodeQueryComponent(t) + "=" + e.encodeQueryComponent(o));
                                  }
                                  var p,
                                      h = [];
                                  for (p in r) r.hasOwnProperty(p) && this.buildQueryParams(p, r[p], u);
                                  l = l + "?" + h.join("&");
                              }
                              return l;
                          }),
                          (e.customEncodeURIComponent = function (e) {
                              return encodeURIComponent(e)
                                  .replace(/%2F/g, "/")
                                  .replace(/%40/g, "@")
                                  .replace(/%3A/g, ":")
                                  .replace(/%21/g, "!")
                                  .replace(/%3B/g, ";")
                                  .replace(/%2C/g, ",")
                                  .replace(/%2A/g, "*")
                                  .replace(/\(/g, "%28")
                                  .replace(/\)/g, "%29")
                                  .replace(/'/g, "%27");
                          }),
                          (e.encodePathComponent = function (t) {
                              return e.customEncodeURIComponent(t).replace(/%3D/g, "=").replace(/%2B/g, "+").replace(/%21/g, "!").replace(/%7C/g, "|");
                          }),
                          (e.encodeQueryComponent = function (t) {
                              return e.customEncodeURIComponent(t).replace(/%3F/g, "?");
                          }),
                          e
                      );
                  })()),
                  (a.Router = r),
                  (a.Routing = new r()),
                  (a.default = a.Routing);
              var a,
                  r = { Router: a.Router, Routing: a.Routing };
              (n = []), (o = r.Routing), void 0 === (s = "function" == typeof o ? o.apply(t, n) : o) || (e.exports = s);
          })();
      },
      9602: (e, t, o) => {
          var n = o(202);
          e.exports = (n.default || n).template({
              1: function (e, t, o, n, s) {
                  return " hidden";
              },
              compiler: [8, ">= 4.3.0"],
              main: function (e, t, o, n, s) {
                  var i,
                      a =
                          e.lookupProperty ||
                          function (e, t) {
                              if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                          };
                  return (
                      '<div class="box-msg' +
                      (null !=
                      (i = a(o, "if").call(null != t ? t : e.nullContext || {}, null != t ? a(t, "not_show") : t, {
                          name: "if",
                          hash: {},
                          fn: e.program(1, s, 0),
                          inverse: e.noop,
                          data: s,
                          loc: { start: { line: 1, column: 19 }, end: { line: 1, column: 51 } },
                      }))
                          ? i
                          : "") +
                      '">\n    <div class="box-loading style3 open"><div class="spinner"></div></div>\n</div>'
                  );
              },
              useData: !0,
          });
      },
      7255: (e, t, o) => {
          var n = o(202);
          function s(e) {
              return e && (e.__esModule ? e.default : e);
          }
          e.exports = (n.default || n).template({
              compiler: [8, ">= 4.3.0"],
              main: function (e, t, n, i, a) {
                  var r,
                      l = e.escapeExpression,
                      c = null != t ? t : e.nullContext || {},
                      d =
                          e.lookupProperty ||
                          function (e, t) {
                              if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                          };
                  return (
                      '<div class="box-content-default size-small">\n    <div class="content">\n        <div class="box-share-collection">\n            <h3 class="heading-small title">Share Collection</h3>\n            <h3 class="heading-small">' +
                      l(e.lambda(null != (r = null != t ? d(t, "collection") : t) ? d(r, "name") : r, t)) +
                      '</h3>\n            <div class="row">\n                <div class="form-collaborator">\n                    <input type="text" id="username" class="text-input js-showusers" placeholder="' +
                      l(s(o(8040)).call(c, "login_or_create.email_or_username", { name: "helpers/trans", hash: {}, data: a, loc: { start: { line: 8, column: 98 }, end: { line: 8, column: 155 } } })) +
                      '" autocomplete="off">\n                    <div class="box-users-autocomplete" style="display: none;">\n                        <ul id="suggest-list"></ul>\n                    </div>\n                </div>\n                <div class="box-users-likes">\n                    <ul class="list-users"></ul>\n                </div>\n                <div class="box-bts">\n                    <div class="box-left">\n                        <input type="submit" class="button text-uppercase js-lightbox-close" value="' +
                      l(s(o(8040)).call(c, "app.save", { name: "helpers/trans", hash: {}, data: a, loc: { start: { line: 18, column: 100 }, end: { line: 18, column: 132 } } })) +
                      '">\n                        <span class="link-underlined green js-lightbox-close">' +
                      l(s(o(8040)).call(c, "app.cancel", { name: "helpers/trans", hash: {}, data: a, loc: { start: { line: 19, column: 78 }, end: { line: 19, column: 112 } } })) +
                      "</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"
                  );
              },
              useData: !0,
          });
      },
      6424: (e, t, o) => {
          var n = o(202);
          e.exports = (n.default || n).template({
              1: function (e, t, n, s, i) {
                  return (
                      '                        <div class="button small gray js-lightbox-close text-uppercase">' +
                      e.escapeExpression(
                          ((a = o(8040)), a && (a.__esModule ? a.default : a)).call(null != t ? t : e.nullContext || {}, "app.cancel", {
                              name: "helpers/trans",
                              hash: {},
                              data: i,
                              loc: { start: { line: 10, column: 88 }, end: { line: 10, column: 122 } },
                          })
                      ) +
                      "</div>\n"
                  );
                  var a;
              },
              compiler: [8, ">= 4.3.0"],
              main: function (e, t, o, n, s) {
                  var i,
                      a = e.lambda,
                      r = e.escapeExpression,
                      l =
                          e.lookupProperty ||
                          function (e, t) {
                              if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                          };
                  return (
                      '<div class="box-content-default size-small">\n    <div class="tab-form" id="tab-delete-confirm" style="display: block;">\n        <div class="content style2">\n            <div class="txt">\n                <h5 class="horizontal-center">' +
                      r(a(null != t ? l(t, "title") : t, t)) +
                      '</h5>\n                <p class="horizontal-center">' +
                      r(a(null != t ? l(t, "description") : t, t)) +
                      '</p>\n                <div class="horizontal-center">\n                    <div class="button small ' +
                      r(a(null != t ? l(t, "classActionButton") : t, t)) +
                      ' yes text-uppercase">' +
                      r(a(null != t ? l(t, "textActionButton") : t, t)) +
                      "</div>\n" +
                      (null !=
                      (i = l(o, "if").call(null != t ? t : e.nullContext || {}, null != t ? l(t, "showCancelButton") : t, {
                          name: "if",
                          hash: {},
                          fn: e.program(1, s, 0),
                          inverse: e.noop,
                          data: s,
                          loc: { start: { line: 9, column: 20 }, end: { line: 11, column: 27 } },
                      }))
                          ? i
                          : "") +
                      "                </div>\n                <p></p>\n            </div>\n        </div>\n    </div>\n</div>"
                  );
              },
              useData: !0,
          });
      },
      9088: (e, t, o) => {
          var n = o(202);
          e.exports = (n.default || n).template({
              compiler: [8, ">= 4.3.0"],
              main: function (e, t, o, n, s) {
                  var i,
                      a = null != t ? t : e.nullContext || {},
                      r = e.hooks.helperMissing,
                      l = "function",
                      c = e.escapeExpression,
                      d =
                          e.lookupProperty ||
                          function (e, t) {
                              if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                          };
                  return (
                      '<div class="box-content-collections size-small">\n    <div class="tab-form" id="tab-delete-confirm" style="display: block;">\n        <div class="content style2">\n            <div class="txt">\n                <p>' +
                      c(typeof (i = null != (i = d(o, "msg") || (null != t ? d(t, "msg") : t)) ? i : r) === l ? i.call(a, { name: "msg", hash: {}, data: s, loc: { start: { line: 5, column: 19 }, end: { line: 5, column: 28 } } }) : i) +
                      '</p>\n                <p></p>\n                <div class="button red width-full yes text-uppercase">' +
                      c(
                          typeof (i = null != (i = d(o, "button") || (null != t ? d(t, "button") : t)) ? i : r) === l
                              ? i.call(a, { name: "button", hash: {}, data: s, loc: { start: { line: 7, column: 70 }, end: { line: 7, column: 82 } } })
                              : i
                      ) +
                      "</div>\n                <p></p>\n            </div>\n        </div>\n    </div>\n</div>"
                  );
              },
              useData: !0,
          });
      },
      6465: (e, t, o) => {
          var n = o(202);
          e.exports = (n.default || n).template({
              1: function (e, t, o, n, s) {
                  return "checked ";
              },
              compiler: [8, ">= 4.3.0"],
              main: function (e, t, n, s, i) {
                  var a,
                      r,
                      l = null != t ? t : e.nullContext || {},
                      c =
                          e.lookupProperty ||
                          function (e, t) {
                              if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                          };
                  return (
                      '<div class="box-content-default">\n    <div class="box-cookies">\n        <div class="tab info active" id="cookies-info">\n            <div class="top">\n                <h2>\n                    <svg width="21" height="21" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.023 49.8C11.37 49.8.263 38.695.263 25.04.263 15.576 5.8 6.811 14.37 2.715a2.188 2.188 0 013.086 1.553c.208 1.07 1.043 3.556 4.29 3.556 2.269 0 3.348-1.226 3.853-2.258a2.185 2.185 0 014.145 1.021c-.043 1.672.42 3.171 1.241 4.017 1.088 1.115 2.97 1.189 5.476.29a2.179 2.179 0 012.508.78 2.18 2.18 0 01-.051 2.625c-.953 1.218-1.043 3.007-.234 4.668.962 1.974 2.888 3.152 5.152 3.152.976 0 1.838-.21 2.637-.64a2.19 2.19 0 012.09.006 2.188 2.188 0 011.127 1.76l.02.27c.037.507.073 1.01.073 1.525 0 13.654-11.106 24.76-24.76 24.76zM14.135 7.832C8.295 11.54 4.633 18.06 4.633 25.04c0 11.245 9.147 20.391 20.39 20.391 10.794 0 19.657-8.432 20.349-19.054-.502.074-1.013.111-1.535.111-3.916 0-7.395-2.148-9.08-5.606-.796-1.634-1.109-3.366-.955-5.01-.124.002-.245.005-.367.005-2.23 0-4.159-.77-5.578-2.224a8.254 8.254 0 01-1.667-2.575c-1.284.729-2.792 1.116-4.443 1.116-3.363 0-6.131-1.645-7.612-4.362zM47.964 5.013a1.82 1.82 0 11-3.64 0 1.82 1.82 0 013.64 0z" fill="#fff"/><path d="M14.343 22.773a3.095 3.095 0 100-6.19 3.095 3.095 0 000 6.19zM16.588 34.931a3.095 3.095 0 100-6.19 3.095 3.095 0 000 6.19zM27.937 38.817a3.095 3.095 0 100-6.19 3.095 3.095 0 000 6.19zM26.547 26.456a3.095 3.095 0 100-6.19 3.095 3.095 0 000 6.19zM39.163 3.802a2.852 2.852 0 11-5.703-.003 2.852 2.852 0 015.703.003zM46.507 16.666a2.003 2.003 0 100-4.006 2.003 2.003 0 000 4.006z" fill="#fff"/></svg>\n                    Cookies Policy\n                </h2>\n                <p>We use our own cookies, as well as those of third parties, for individual as well as repeated sessions, in order to make the navigation of our website easy and safe for our users.</p>\n                <p>In turn, we use cookies to measure and obtain statistical data about the navigation of the users. You can configure and accept the use of the cookies, and modify your consent options, at any time. You can read more information about our <a href="' +
                      e.escapeExpression(
                          ((r = o(5040)), r && (r.__esModule ? r.default : r)).call(l, "tv_cookies_policy", { name: "helpers/path", hash: {}, data: i, loc: { start: { line: 10, column: 265 }, end: { line: 10, column: 305 } } })
                      ) +
                      '" class="link-underlined white" aria-label="Cookies Policy">Cookie Policy</a>.</p>\n            </div>\n            <div class="bottom">\n                <span class="button rounded medium js-accept-all-cookies">Accept Cookies</span>\n                <span class="link-underlined white js-configure-cookies">Manage Settings</span>\n            </div>\n        </div>\n        <div class="tab settings" id="cookies-settings">\n            <div class="top">\n                <h2><strong>Cookie configuration</strong></h2>\n                <p>We use our own cookies, as well as those of third parties, for individual as well as repeated sessions, in order to make the navigation of our website easy and safe for our users.</p>\n                <p>In turn, we use cookies to measure and obtain statistical data about the navigation of the users. You can configure and accept the use of the cookies, and modify your consent options, at any time.</p>\n                <ul class="list-cookies">\n                    <li>\n                        <div class="box-title js-cookies-dd">\n                            <h3>Strictly necessary cookies</h3>\n                            <strong class="text-green">Always active</strong>\n                        </div>\n                        <div class="box-content">\n                            <p>This website uses cookies to allow it to function correctly and safely. These cookies, classified as essential, are necessary for the functionality of the website and are automatically saved in the browser.</p>\n                        </div>\n                    </li>\n                    <li>\n                        <div class="box-title js-cookies-dd">\n                            <h3>Visitor preferences</h3>\n                            <div class="input-check-toggle check-small">\n                                <input ' +
                      (null !=
                      (a = c(n, "if").call(l, null != t ? c(t, "preferences") : t, { name: "if", hash: {}, fn: e.program(1, i, 0), inverse: e.noop, data: i, loc: { start: { line: 36, column: 39 }, end: { line: 36, column: 74 } } }))
                          ? a
                          : "") +
                      ' name="preferences" type="checkbox" id="js-cookie-preferences" class="js-cookie-category">\n                                <label for="js-cookie-preferences">\n                                    <span class="ball"></span>\n                                </label>\n                            </div>\n                        </div>\n                        <div class="box-content">\n                            <p>Allow you to be shown personalized content, based on your profile.</p>\n                        </div>\n                    </li>\n                    <li>\n                        <div class="box-title js-cookies-dd">\n                            <h3>Analytics cookies</h3>\n                            <div class="input-check-toggle check-small">\n                                <input ' +
                      (null != (a = c(n, "if").call(l, null != t ? c(t, "analysis") : t, { name: "if", hash: {}, fn: e.program(1, i, 0), inverse: e.noop, data: i, loc: { start: { line: 50, column: 39 }, end: { line: 50, column: 71 } } }))
                          ? a
                          : "") +
                      ' name="analysis" type="checkbox" id="js-cookie-analysis" class="js-cookie-category">\n                                <label for="js-cookie-analysis">\n                                    <span class="ball"></span>\n                                </label>\n                            </div>\n                        </div>\n                        <div class="box-content">\n                            <p>Allow your navigation of our website to be analyzed, to carry out studies about its use.</p>\n                        </div>\n                    </li>\n                    <li>\n                        <div class="box-title js-cookies-dd">\n                            <h3>Advertising cookies</h3>\n                            <div class="input-check-toggle check-small">\n                                <input ' +
                      (null !=
                      (a = c(n, "if").call(l, null != t ? c(t, "marketing") : t, { name: "if", hash: {}, fn: e.program(1, i, 0), inverse: e.noop, data: i, loc: { start: { line: 64, column: 39 }, end: { line: 64, column: 72 } } }))
                          ? a
                          : "") +
                      ' name="marketing" type="checkbox" id="js-cookie-marketing" class="js-cookie-category">\n                                <label for="js-cookie-marketing">\n                                    <span class="ball"></span>\n                                </label>\n                            </div>\n                        </div>\n                        <div class="box-content">\n                            <p>Allow your navigation of our website to be analyzed, in order for us to show you more personalized adverts.</p>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n            <div class="bottom">\n                <span class="button x-small rounded js-accept-all-cookies">Accept Cookies</span>\n                <span class="link-underlined green js-save-cookies">Save configuration</span>\n            </div>\n        </div>\n    </div>\n</div>\n'
                  );
              },
              useData: !0,
          });
      },
      3197: (e, t, o) => {
          var n = o(202);
          e.exports = (n.default || n).template({
              compiler: [8, ">= 4.3.0"],
              main: function (e, t, n, s, i) {
                  return (
                      'This website uses cookies to ensure you get the best experience on our website. <a href="' +
                      e.escapeExpression(
                          ((a = o(5040)), a && (a.__esModule ? a.default : a)).call(null != t ? t : e.nullContext || {}, "tv_cookies_policy", {
                              name: "helpers/path",
                              hash: {},
                              data: i,
                              loc: { start: { line: 1, column: 89 }, end: { line: 1, column: 129 } },
                          })
                      ) +
                      '" class="link-underlined white">Cookies Policy</a>\n<span class="button x-small rounded js-accept-cookies">GOT IT</span>\n'
                  );
                  var a;
              },
              useData: !0,
          });
      },
      1295: (e, t, o) => {
          var n = o(202);
          function s(e) {
              return e && (e.__esModule ? e.default : e);
          }
          e.exports = (n.default || n).template({
              compiler: [8, ">= 4.3.0"],
              main: function (e, t, n, i, a) {
                  var r,
                      l = e.lambda,
                      c = null != t ? t : e.nullContext || {},
                      d = e.escapeExpression,
                      u =
                          e.lookupProperty ||
                          function (e, t) {
                              if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                          };
                  return (
                      '\n<div class="box-2cols">\n\n    <div class="box-add-image">\n        <div class="box-loading style2">\n            <div class="spinner"></div>\n        </div>\n\n        <div class="add-photo">\n            <div class="js-photo">\n                ' +
                      (null != (r = l(null != t ? u(t, "image") : t, t)) ? r : "") +
                      '\n            </div>\n\n        </div>\n    </div>\n\n\n    <div class="content">\n\n        <div class="row">\n            <div class="form-group title-group">\n                <input type="text" class="text-input js-title-element" placeholder="' +
                      d(s(o(8040)).call(c, "form.name", { name: "helpers/trans", hash: {}, data: a, loc: { start: { line: 22, column: 84 }, end: { line: 22, column: 117 } } })) +
                      '" value="' +
                      d(l(null != t ? u(t, "title") : t, t)) +
                      '">\n                <div class="msg alert title-error-msg" style="display: none;">' +
                      d(s(o(8040)).call(c, "assert.not_blank.name", { name: "helpers/trans", hash: {}, data: a, loc: { start: { line: 23, column: 78 }, end: { line: 23, column: 123 } } })) +
                      '</div>\n            </div>\n        </div>\n        <div class="row">\n            <input type="text" class="text-input js-tags-element" placeholder="' +
                      d(s(o(8040)).call(c, "form.tags", { name: "helpers/trans", hash: {}, data: a, loc: { start: { line: 27, column: 79 }, end: { line: 27, column: 112 } } })) +
                      '" value="' +
                      d(l(null != t ? u(t, "tags") : t, t)) +
                      '">\n            <div class="ex">Ex. html5, virtual reality, portfolio</div>\n        </div>\n        <div class="box-bts">\n            <div class="box-left">\n                <button type="submit" class="button save"><span class="bt-content text-uppercase">' +
                      d(s(o(8040)).call(c, "app.save", { name: "helpers/trans", hash: {}, data: a, loc: { start: { line: 32, column: 98 }, end: { line: 32, column: 130 } } })) +
                      '</span></button>\n                <span class="link-underlined green bt-cancel js-tab cancel" >' +
                      d(s(o(8040)).call(c, "app.cancel", { name: "helpers/trans", hash: {}, data: a, loc: { start: { line: 33, column: 77 }, end: { line: 33, column: 111 } } })) +
                      "</span>\n            </div>\n        </div>\n    </div>\n\n</div>\n"
                  );
              },
              useData: !0,
          });
      },
      8157: (e, t, o) => {
          var n = o(202);
          function s(e) {
              return e && (e.__esModule ? e.default : e);
          }
          e.exports = (n.default || n).template({
              compiler: [8, ">= 4.3.0"],
              main: function (e, t, n, i, a) {
                  var r,
                      l = e.lambda,
                      c = null != t ? t : e.nullContext || {},
                      d = e.escapeExpression,
                      u =
                          e.lookupProperty ||
                          function (e, t) {
                              if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                          };
                  return (
                      '\n<div class="box-2cols">\n\n    <div class="box-add-image">\n        <div class="box-loading style2">\n            <div class="spinner"></div>\n        </div>\n\n        <div class="add-photo">\n            <div class="js-photo">\n                ' +
                      (null != (r = l(null != t ? u(t, "image") : t, t)) ? r : "") +
                      '\n            </div>\n\n        </div>\n    </div>\n\n\n    <div class="content">\n\n        <div class="row">\n            <div class="form-group title-group">\n                <input type="text" class="text-input js-title-element" placeholder="' +
                      d(s(o(8040)).call(c, "form.name", { name: "helpers/trans", hash: {}, data: a, loc: { start: { line: 22, column: 84 }, end: { line: 22, column: 117 } } })) +
                      '" value="' +
                      d(l(null != t ? u(t, "title") : t, t)) +
                      '">\n                <div class="msg alert title-error-msg" style="display: none;">' +
                      d(s(o(8040)).call(c, "assert.not_blank.name", { name: "helpers/trans", hash: {}, data: a, loc: { start: { line: 23, column: 78 }, end: { line: 23, column: 123 } } })) +
                      '</div>\n            </div>\n        </div>\n        <div class="row">\n            <input type="text" class="text-input js-tags-element" placeholder="' +
                      d(s(o(8040)).call(c, "form.tags", { name: "helpers/trans", hash: {}, data: a, loc: { start: { line: 27, column: 79 }, end: { line: 27, column: 112 } } })) +
                      '" value="' +
                      d(l(null != t ? u(t, "tags") : t, t)) +
                      '">\n            <div class="ex">Ex. html5, virtual reality, portfolio</div>\n        </div>\n        <div class="box-bts">\n            <div class="box-left">\n                <button type="submit" class="button save"><span class="bt-content text-uppercase">' +
                      d(s(o(8040)).call(c, "app.save", { name: "helpers/trans", hash: {}, data: a, loc: { start: { line: 32, column: 98 }, end: { line: 32, column: 130 } } })) +
                      '</span></button>\n                <span class="link-underlined green bt-cancel js-tab cancel" >' +
                      d(s(o(8040)).call(c, "app.cancel", { name: "helpers/trans", hash: {}, data: a, loc: { start: { line: 33, column: 77 }, end: { line: 33, column: 111 } } })) +
                      "</span>\n            </div>\n        </div>\n    </div>\n\n</div>\n"
                  );
              },
              useData: !0,
          });
      },
      8837: (e, t, o) => {
          var n = o(202);
          e.exports = (n.default || n).template({
              compiler: [8, ">= 4.3.0"],
              main: function (e, t, o, n, s) {
                  var i,
                      a =
                          e.lookupProperty ||
                          function (e, t) {
                              if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                          };
                  return (
                      '<div class="box-content-collections size-small">\n    <div class="tab-form" id="tab-delete-confirm" style="display: block;">\n        <div class="content style2">\n            <div class="txt">\n                <p>' +
                      e.escapeExpression(
                          "function" == typeof (i = null != (i = a(o, "msg") || (null != t ? a(t, "msg") : t)) ? i : e.hooks.helperMissing)
                              ? i.call(null != t ? t : e.nullContext || {}, { name: "msg", hash: {}, data: s, loc: { start: { line: 5, column: 19 }, end: { line: 5, column: 28 } } })
                              : i
                      ) +
                      "</p>\n                <p></p>\n            </div>\n        </div>\n    </div>\n</div>\n"
                  );
              },
              useData: !0,
          });
      },
      6102: (e, t, o) => {
          var n = o(202);
          function s(e) {
              return e && (e.__esModule ? e.default : e);
          }
          e.exports = (n.default || n).template({
              1: function (e, t, n, i, a) {
                  var r,
                      l = null != t ? t : e.nullContext || {},
                      c = e.escapeExpression;
                  return (
                      '    <div class="bts">\n        <div class="tooltip">\n            <div class="button xx-small border-gray circle js-share">\n                ' +
                      (null != (r = s(o(561)).call(l, "user", 12, 14, "gray h-12", { name: "helpers/icon", hash: {}, data: a, loc: { start: { line: 5, column: 16 }, end: { line: 5, column: 63 } } })) ? r : "") +
                      '\n            </div>\n            <div class="box-tooltip">\n                <div class="tooltip-text">' +
                      c(s(o(8040)).call(l, "footer_box.share_collection", { name: "helpers/trans", hash: {}, data: a, loc: { start: { line: 8, column: 42 }, end: { line: 8, column: 93 } } })) +
                      '</div>\n            </div>\n        </div>\n        <div class="tooltip">\n            <div class="button xx-small border-gray circle js-edit-collection">\n                ' +
                      (null != (r = s(o(561)).call(l, "settings", 14, 14, "gray", { name: "helpers/icon", hash: {}, data: a, loc: { start: { line: 13, column: 16 }, end: { line: 13, column: 62 } } })) ? r : "") +
                      '\n            </div>\n            <div class="box-tooltip">\n                <div class="tooltip-text">' +
                      c(s(o(8040)).call(l, "footer_box.edit_collection", { name: "helpers/trans", hash: {}, data: a, loc: { start: { line: 16, column: 42 }, end: { line: 16, column: 92 } } })) +
                      "</div>\n            </div>\n        </div>\n    </div>\n"
                  );
              },
              3: function (e, t, n, i, a) {
                  var r,
                      l = null != t ? t : e.nullContext || {},
                      c = e.escapeExpression,
                      d =
                          e.lookupProperty ||
                          function (e, t) {
                              if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                          };
                  return (
                      '    <div class="button x-small rounded ' +
                      (null !=
                      (r = d(n, "if").call(l, null != t ? d(t, "isFollowing") : t, {
                          name: "if",
                          hash: {},
                          fn: e.program(4, a, 0),
                          inverse: e.program(6, a, 0),
                          data: a,
                          loc: { start: { line: 23, column: 39 }, end: { line: 23, column: 119 } },
                      }))
                          ? r
                          : "") +
                      ' js-button-follow" data-text-start="' +
                      c(s(o(8040)).call(l, "app.follow", { name: "helpers/trans", hash: {}, data: a, loc: { start: { line: 23, column: 155 }, end: { line: 23, column: 189 } } })) +
                      '" data-text-end="' +
                      c(s(o(8040)).call(l, "app.following", { name: "helpers/trans", hash: {}, data: a, loc: { start: { line: 23, column: 206 }, end: { line: 23, column: 243 } } })) +
                      '">\n        <span class="js-bt-content">\n            ' +
                      (null !=
                      (r = d(n, "if").call(l, null != t ? d(t, "isFollowing") : t, {
                          name: "if",
                          hash: {},
                          fn: e.program(8, a, 0),
                          inverse: e.program(10, a, 0),
                          data: a,
                          loc: { start: { line: 25, column: 12 }, end: { line: 25, column: 121 } },
                      }))
                          ? r
                          : "") +
                      "\n        </span>\n    </div>\n"
                  );
              },
              4: function (e, t, o, n, s) {
                  return " active js-unfollow";
              },
              6: function (e, t, o, n, s) {
                  return " border-white js-follow";
              },
              8: function (e, t, n, i, a) {
                  return e.escapeExpression(s(o(8040)).call(null != t ? t : e.nullContext || {}, "app.following", { name: "helpers/trans", hash: {}, data: a, loc: { start: { line: 25, column: 33 }, end: { line: 25, column: 70 } } }));
              },
              10: function (e, t, n, i, a) {
                  return e.escapeExpression(s(o(8040)).call(null != t ? t : e.nullContext || {}, "app.follow", { name: "helpers/trans", hash: {}, data: a, loc: { start: { line: 25, column: 80 }, end: { line: 25, column: 114 } } }));
              },
              12: function (e, t, n, i, a) {
                  return (
                      '    <div class="button x-small rounded no-hover">\n        <span class="js-bt-content">\n            ' +
                      e.escapeExpression(s(o(8040)).call(null != t ? t : e.nullContext || {}, "app.collaborator", { name: "helpers/trans", hash: {}, data: a, loc: { start: { line: 33, column: 12 }, end: { line: 33, column: 52 } } })) +
                      "\n        </span>\n    </div>\n"
                  );
              },
              compiler: [8, ">= 4.3.0"],
              main: function (e, t, o, n, s) {
                  var i,
                      a = null != t ? t : e.nullContext || {},
                      r =
                          e.lookupProperty ||
                          function (e, t) {
                              if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                          };
                  return (
                      (null !=
                      (i = r(o, "if").call(a, null != t ? r(t, "showOwnerOptions") : t, { name: "if", hash: {}, fn: e.program(1, s, 0), inverse: e.noop, data: s, loc: { start: { line: 1, column: 0 }, end: { line: 20, column: 8 } } }))
                          ? i
                          : "") +
                      "\n" +
                      (null !=
                      (i = r(o, "if").call(a, null != t ? r(t, "showButtonFollow") : t, { name: "if", hash: {}, fn: e.program(3, s, 0), inverse: e.noop, data: s, loc: { start: { line: 22, column: 0 }, end: { line: 28, column: 8 } } }))
                          ? i
                          : "") +
                      "\n" +
                      (null !=
                      (i = r(o, "if").call(a, null != t ? r(t, "isCollaborator") : t, { name: "if", hash: {}, fn: e.program(12, s, 0), inverse: e.noop, data: s, loc: { start: { line: 30, column: 0 }, end: { line: 36, column: 8 } } }))
                          ? i
                          : "") +
                      "\n\n"
                  );
              },
              useData: !0,
          });
      },
      9882: (e, t, o) => {
          var n = o(202);
          function s(e) {
              return e && (e.__esModule ? e.default : e);
          }
          e.exports = (n.default || n).template({
              1: function (e, t, n, i, a) {
                  var r,
                      l = null != t ? t : e.nullContext || {};
                  return (
                      '    <div class="tooltip">\n        <div class="button xx-small border-gray circle js-edit-element">\n            ' +
                      (null != (r = s(o(561)).call(l, "settings", 14, 14, "gray", { name: "helpers/icon", hash: {}, data: a, loc: { start: { line: 4, column: 12 }, end: { line: 4, column: 58 } } })) ? r : "") +
                      '\n        </div>\n        <div class="box-tooltip">\n            <div class="tooltip-text">' +
                      e.escapeExpression(s(o(8040)).call(l, "app.edit", { name: "helpers/trans", hash: {}, data: a, loc: { start: { line: 7, column: 38 }, end: { line: 7, column: 70 } } })) +
                      "</div>\n        </div>\n    </div>\n"
                  );
              },
              compiler: [8, ">= 4.3.0"],
              main: function (e, t, o, n, s) {
                  var i,
                      a =
                          e.lookupProperty ||
                          function (e, t) {
                              if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                          };
                  return null !=
                      (i = a(o, "if").call(null != t ? t : e.nullContext || {}, null != t ? a(t, "showEditOptions") : t, {
                          name: "if",
                          hash: {},
                          fn: e.program(1, s, 0),
                          inverse: e.noop,
                          data: s,
                          loc: { start: { line: 1, column: 0 }, end: { line: 10, column: 7 } },
                      }))
                      ? i
                      : "";
              },
              useData: !0,
          });
      },
      6794: (e, t, o) => {
          var n = o(202);
          function s(e) {
              return e && (e.__esModule ? e.default : e);
          }
          e.exports = (n.default || n).template({
              1: function (e, t, n, i, a) {
                  var r,
                      l = null != t ? t : e.nullContext || {};
                  return (
                      '    <div class="tooltip">\n        <div class="button xx-small border-gray circle js-edit-element">\n            ' +
                      (null != (r = s(o(561)).call(l, "settings", 14, 14, "gray", { name: "helpers/icon", hash: {}, data: a, loc: { start: { line: 4, column: 12 }, end: { line: 4, column: 58 } } })) ? r : "") +
                      '\n        </div>\n        <div class="box-tooltip">\n            <div class="tooltip-text">' +
                      e.escapeExpression(s(o(8040)).call(l, "app.edit", { name: "helpers/trans", hash: {}, data: a, loc: { start: { line: 7, column: 38 }, end: { line: 7, column: 70 } } })) +
                      "</div>\n        </div>\n    </div>\n"
                  );
              },
              compiler: [8, ">= 4.3.0"],
              main: function (e, t, o, n, s) {
                  var i,
                      a =
                          e.lookupProperty ||
                          function (e, t) {
                              if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                          };
                  return null !=
                      (i = a(o, "if").call(null != t ? t : e.nullContext || {}, null != t ? a(t, "showEditOptions") : t, {
                          name: "if",
                          hash: {},
                          fn: e.program(1, s, 0),
                          inverse: e.noop,
                          data: s,
                          loc: { start: { line: 1, column: 0 }, end: { line: 10, column: 7 } },
                      }))
                      ? i
                      : "";
              },
              useData: !0,
          });
      },
      1695: (e, t, o) => {
          var n = o(202);
          function s(e) {
              return e && (e.__esModule ? e.default : e);
          }
          e.exports = (n.default || n).template({
              1: function (e, t, o, n, s) {
                  var i =
                      e.lookupProperty ||
                      function (e, t) {
                          if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                      };
                  return '                    <img width="417" height="298" srcset="' + e.escapeExpression(e.lambda(null != t ? i(t, "imageSrcset") : t, t)) + '" class="img-block" />\n';
              },
              3: function (e, t, o, n, s) {
                  var i =
                      e.lookupProperty ||
                      function (e, t) {
                          if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                      };
                  return '                    <img width="417" height="298" src="' + e.escapeExpression(e.lambda(null != t ? i(t, "image") : t, t)) + '" class="img-block" />\n';
              },
              5: function (e, t, o, n, s) {
                  var i = e.lambda,
                      a = e.escapeExpression,
                      r =
                          e.lookupProperty ||
                          function (e, t) {
                              if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                          };
                  return (
                      "data-link=\"https://twitter.com/intent/tweet?text=I've just voted for " +
                      a(i(null != t ? r(t, "share_text") : t, t)) +
                      " for Site of the Month to win a year in the @Awwwards Directory&amp;url=https://www.awwwards.com" +
                      a(i(null != t ? r(t, "share_url") : t, t)) +
                      '&amp;hashtags=AwwwardsSOTM"'
                  );
              },
              compiler: [8, ">= 4.3.0"],
              main: function (e, t, n, i, a) {
                  var r,
                      l = null != t ? t : e.nullContext || {},
                      c = e.escapeExpression,
                      d = e.lambda,
                      u =
                          e.lookupProperty ||
                          function (e, t) {
                              if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                          };
                  return (
                      '<div class="box-content-default size-small">\n    <div class="box-inside">\n\n        <p class="mb-1 text-green text-uppercase"><strong>' +
                      c(s(o(8040)).call(l, "app.confirm_your_vote", { name: "helpers/trans", hash: {}, data: a, loc: { start: { line: 4, column: 58 }, end: { line: 4, column: 103 } } })) +
                      '</strong></p>\n\n        <p>\n            <a href="' +
                      c(d(null != t ? u(t, "internal_url") : t, t)) +
                      '">\n' +
                      (null !=
                      (r = u(n, "if").call(l, null != t ? u(t, "imageSrcset") : t, {
                          name: "if",
                          hash: {},
                          fn: e.program(1, a, 0),
                          inverse: e.program(3, a, 0),
                          data: a,
                          loc: { start: { line: 8, column: 16 }, end: { line: 12, column: 23 } },
                      }))
                          ? r
                          : "") +
                      "            </a>\n        </p>\n        <p>" +
                      (null != (r = d(null != t ? u(t, "by") : t, t)) ? r : "") +
                      '</p>\n        <div class="box-bts">\n            <div class="box-left">\n                <span class="button js-vote-tweet yes popup text-uppercase" ' +
                      (null !=
                      (r = u(n, "if").call(l, null != t ? u(t, "share_button") : t, { name: "if", hash: {}, fn: e.program(5, a, 0), inverse: e.noop, data: a, loc: { start: { line: 18, column: 76 }, end: { line: 18, column: 327 } } }))
                          ? r
                          : "") +
                      ">\n                    " +
                      c(d(null != t ? u(t, "text_button") : t, t)) +
                      '\n                </span>\n                <span class="link-underlined green bt-cancel js-lightbox-close">' +
                      c(s(o(8040)).call(l, "app.cancel", { name: "helpers/trans", hash: {}, data: a, loc: { start: { line: 21, column: 80 }, end: { line: 21, column: 114 } } })) +
                      "</span>\n            </div>\n        </div>\n    </div>\n</div>\n"
                  );
              },
              useData: !0,
          });
      },
      791: (e, t, o) => {
          var n = o(202);
          function s(e) {
              return e && (e.__esModule ? e.default : e);
          }
          e.exports = (n.default || n).template({
              1: function (e, t, o, n, s) {
                  var i =
                      e.lookupProperty ||
                      function (e, t) {
                          if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                      };
                  return "                " + e.escapeExpression(e.lambda(null != t ? i(t, "title") : t, t)) + "\n";
              },
              3: function (e, t, n, i, a) {
                  var r,
                      l =
                          e.lookupProperty ||
                          function (e, t) {
                              if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                          };
                  return (
                      "                " +
                      (null !=
                      (r = s(o(579)).call(null != t ? t : e.nullContext || {}, "users_like_this", null != t ? l(t, "total") : t, {
                          name: "helpers/transchoice",
                          hash: { users: null != t ? l(t, "total") : t },
                          data: a,
                          loc: { start: { line: 9, column: 16 }, end: { line: 9, column: 81 } },
                      }))
                          ? r
                          : "") +
                      "\n"
                  );
              },
              5: function (e, t, n, i, a) {
                  var r = null != t ? t : e.nullContext || {},
                      l = e.escapeExpression;
                  return (
                      '        <div class="button load-more style2 js-bt-loading js-bt-loadmore">\n            <span class="txt-default">' +
                      l(s(o(8040)).call(r, "app.load_more", { name: "helpers/trans", hash: {}, data: a, loc: { start: { line: 18, column: 38 }, end: { line: 18, column: 75 } } })) +
                      '</span>\n            <span class="txt-loading">' +
                      l(s(o(8040)).call(r, "app.loading", { name: "helpers/trans", hash: {}, data: a, loc: { start: { line: 19, column: 38 }, end: { line: 19, column: 73 } } })) +
                      "...</span>\n        </div>\n"
                  );
              },
              compiler: [8, ">= 4.3.0"],
              main: function (e, t, n, i, a) {
                  var r,
                      l = null != t ? t : e.nullContext || {},
                      c =
                          e.lookupProperty ||
                          function (e, t) {
                              if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                          };
                  return (
                      '<div class="box-inside ">\n    <div class="info">\n        <div class="pull-left">\n' +
                      (null !=
                      (r = s(o(9105)).call(l, null != t ? c(t, "title") : t, "!=", null, {
                          name: "helpers/compare",
                          hash: {},
                          fn: e.program(1, a, 0),
                          inverse: e.noop,
                          data: a,
                          loc: { start: { line: 4, column: 12 }, end: { line: 6, column: 35 } },
                      }))
                          ? r
                          : "") +
                      "\n" +
                      (null !=
                      (r = s(o(9105)).call(l, null != t ? c(t, "title") : t, "==", null, {
                          name: "helpers/compare",
                          hash: {},
                          fn: e.program(3, a, 0),
                          inverse: e.noop,
                          data: a,
                          loc: { start: { line: 8, column: 12 }, end: { line: 10, column: 35 } },
                      }))
                          ? r
                          : "") +
                      '        </div>\n    </div>\n    <ul class="list-user-likes js-user-list">\n' +
                      (null != (r = e.invokePartial(o(6393), t, { name: "user_list", hash: { users: null != t ? c(t, "users") : t }, data: a, indent: "        ", helpers: n, partials: i, decorators: e.decorators })) ? r : "") +
                      "    </ul>\n" +
                      (null !=
                      (r = s(o(9105)).call(l, null != t ? c(t, "total") : t, ">", 6, {
                          name: "helpers/compare",
                          hash: {},
                          fn: e.program(5, a, 0),
                          inverse: e.noop,
                          data: a,
                          loc: { start: { line: 16, column: 4 }, end: { line: 21, column: 27 } },
                      }))
                          ? r
                          : "") +
                      "</div>\n"
                  );
              },
              usePartial: !0,
              useData: !0,
          });
      },
      3032: (e, t, o) => {
          var n = o(202);
          function s(e) {
              return e && (e.__esModule ? e.default : e);
          }
          e.exports = (n.default || n).template({
              1: function (e, t, n, i, a) {
                  var r = null != t ? t : e.nullContext || {},
                      l = e.escapeExpression;
                  return (
                      '        <img src="' +
                      l(s(o(7499)).call(r, "assets/images/pages/awards-2017/circle.png", { name: "helpers/asset", hash: {}, data: a, loc: { start: { line: 3, column: 18 }, end: { line: 3, column: 84 } } })) +
                      '" class="img-floating n-1" alt="">\n        <img src="' +
                      l(s(o(7499)).call(r, "assets/images/pages/awards-2017/button.png", { name: "helpers/asset", hash: {}, data: a, loc: { start: { line: 4, column: 18 }, end: { line: 4, column: 84 } } })) +
                      '" class="img-floating n-2" alt="">\n        <img src="' +
                      l(s(o(7499)).call(r, "assets/images/pages/awards-2017/stick.png", { name: "helpers/asset", hash: {}, data: a, loc: { start: { line: 5, column: 18 }, end: { line: 5, column: 83 } } })) +
                      '" class="img-floating n-3" alt="">\n'
                  );
              },
              compiler: [8, ">= 4.3.0"],
              main: function (e, t, n, i, a) {
                  var r,
                      l = null != t ? t : e.nullContext || {},
                      c = e.escapeExpression,
                      d = e.lambda,
                      u =
                          e.lookupProperty ||
                          function (e, t) {
                              if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                          };
                  return (
                      '<div class="box-login">\n' +
                      (null !=
                      (r = u(n, "if").call(l, null != t ? u(t, "floating_objects") : t, { name: "if", hash: {}, fn: e.program(1, a, 0), inverse: e.noop, data: a, loc: { start: { line: 2, column: 4 }, end: { line: 6, column: 11 } } }))
                          ? r
                          : "") +
                      '\n    <div class="tab-form js-tab-form active" id="tab-login-form">\n        <div class="form">\n            <div class="box-section">\n                <div class="header">\n                    <div class="box-left">\n                        <h3><strong>' +
                      c(s(o(8040)).call(l, "login_or_create.sign_in_to_continue", { name: "helpers/trans", hash: {}, data: a, loc: { start: { line: 13, column: 36 }, end: { line: 13, column: 95 } } })) +
                      '</strong></h3>\n                    </div>\n                    <div class="box-right">\n                        <h3>' +
                      c(s(o(8040)).call(l, "login_or_create.not_a_member_yet", { name: "helpers/trans", hash: {}, data: a, loc: { start: { line: 16, column: 28 }, end: { line: 16, column: 84 } } })) +
                      ' <strong class="text-green cursor-pointer js-tab js-register" data-tab="tab-register">' +
                      c(s(o(8040)).call(l, "login_or_create.register_now", { name: "helpers/trans", hash: {}, data: a, loc: { start: { line: 16, column: 170 }, end: { line: 16, column: 222 } } })) +
                      '</strong></h3>\n                    </div>\n                </div>\n\n                <form action="' +
                      c(s(o(5040)).call(l, "tv_login", { name: "helpers/path", hash: {}, data: a, loc: { start: { line: 20, column: 30 }, end: { line: 20, column: 61 } } })) +
                      '" method="post" novalidate>\n                    <div class="box-form-fields">\n                        <ul>\n                            <li>\n                                <div class="row right">\n                                    <div class="form-group">\n                                        <label class="tip-form"><input name="_username" class="text-input" placeholder="' +
                      c(s(o(8040)).call(l, "login_or_create.email_or_username", { name: "helpers/trans", hash: {}, data: a, loc: { start: { line: 26, column: 120 }, end: { line: 26, column: 177 } } })) +
                      '" type="text"></label>\n                                    </div>\n                                </div>\n                            </li>\n                            <li>\n                                <div class="row right">\n                                    <div class="form-group">\n                                        <label class="tip-form"><input name="_password" class="text-input" placeholder="' +
                      c(s(o(8040)).call(l, "login_or_create.password", { name: "helpers/trans", hash: {}, data: a, loc: { start: { line: 33, column: 120 }, end: { line: 33, column: 168 } } })) +
                      '" type="password"></label>\n                                    </div>\n                                </div>\n                            </li>\n                            <li>\n                                <div class="check">\n                                    <div class="form-group">\n                                        <div class="input-check">\n                                            <input id="remember_me" name="_remember_me" type="checkbox"> <label for="remember_me">' +
                      c(s(o(8040)).call(l, "login_or_create.keep_me_logged_in", { name: "helpers/trans", hash: {}, data: a, loc: { start: { line: 41, column: 130 }, end: { line: 41, column: 187 } } })) +
                      '</label>\n                                        </div>\n                                    </div>\n                                </div>\n                            </li>\n                        </ul>\n                    </div>\n                    <p>\n                        <input type="hidden" name="_csrf_token" value="' +
                      c(d(null != t ? u(t, "csrf_value") : t, t)) +
                      '">\n                        <button type="submit" class="button width-full js-bt-loading text-uppercase"><span class="bt-content">' +
                      c(s(o(8040)).call(l, "login_or_create.login_now", { name: "helpers/trans", hash: {}, data: a, loc: { start: { line: 50, column: 126 }, end: { line: 50, column: 175 } } })) +
                      '</span></button>\n                    </p>\n                    <p align="center">\n                        <strong><a class="link-underlined green js-forgot-password" href="' +
                      c(s(o(5040)).call(l, "tv_forgot_password", { name: "helpers/path", hash: {}, data: a, loc: { start: { line: 53, column: 90 }, end: { line: 53, column: 131 } } })) +
                      '">' +
                      c(s(o(8040)).call(l, "login_or_create.forgot_your_password", { name: "helpers/trans", hash: {}, data: a, loc: { start: { line: 53, column: 133 }, end: { line: 53, column: 193 } } })) +
                      '</a></strong>\n                    </p>\n                    <input type="hidden" name="_target_path" value="' +
                      c(d(null != t ? u(t, "from_url") : t, t)) +
                      '" />\n                </form>\n            </div>\n\n            <div class="box-section">\n                <div class="header">\n                    <h3><strong>' +
                      c(s(o(8040)).call(l, "login_or_create.or_sign_in_with", { name: "helpers/trans", hash: {}, data: a, loc: { start: { line: 61, column: 32 }, end: { line: 61, column: 87 } } })) +
                      '</strong></h3>\n                </div>\n                <div class="bts">\n                    <a href="/login/google?_destination=' +
                      c(d(null != t ? u(t, "from_url") : t, t)) +
                      '" class="bt-connect google">\n                        <svg viewBox="0 0 400 400" class="ico-svg">\n                            <path d="M142.9 24.2C97.6 39.7 59 73.6 37.5 116.5 30 131.3 24.6 147 21.3 163.3c-8.2 40.4-2.5 83.5 16.1 120.3 12.1 24 29.5 45.4 50.5 62.1 19.9 15.8 43 27.6 67.6 34.1 31 8.3 64 8.1 95.2 1 28.2-6.5 54.9-20 76.2-39.6 22.5-20.7 38.6-47.9 47.1-77.2 9.3-31.9 10.5-66 4.7-98.8h-175v72.6h101.4c-3.9 23.2-17.7 44.4-37.2 57.5-12.3 8.3-26.4 13.6-41 16.2-14.6 2.5-29.8 2.8-44.4-.1-14.9-3-29-9.2-41.4-17.9-19.8-13.9-34.9-34.2-42.6-57.1-7.9-23.3-8-49.2 0-72.4 5.6-16.4 14.8-31.5 27-43.9 15-15.4 34.5-26.4 55.6-30.9 18-3.8 37-3.1 54.6 2.2 15 4.5 28.8 12.8 40.1 23.6L310 80.8c6-6.1 12.3-12 18.1-18.3-17.3-16-37.7-28.9-59.9-37.1-40-14.8-85-15.1-125.3-1.2z" fill="#FFF"></path><path d="M142.9 24.2c40.2-13.9 85.3-13.6 125.3 1.1 22.2 8.2 42.5 21 59.9 37.1-5.8 6.3-12.1 12.2-18.1 18.3l-34.2 34.2c-11.3-10.8-25.1-19-40.1-23.6-17.6-5.3-36.6-6.1-54.6-2.2-21 4.5-40.5 15.5-55.6 30.9-12.2 12.3-21.4 27.5-27 43.9-20.3-15.8-40.6-31.5-61-47.3 21.5-43 60.1-76.9 105.4-92.4z" fill="#EA4335"></path><path d="M21.4 163.2c3.3-16.2 8.7-32 16.2-46.8 20.3 15.8 40.6 31.5 61 47.3-8 23.3-8 49.2 0 72.4-20.3 15.8-40.6 31.6-60.9 47.3-18.8-36.7-24.5-79.8-16.3-120.2z" fill="#FBBC05"></path><path d="M203.7 165.1h175c5.8 32.7 4.5 66.8-4.7 98.8-8.5 29.3-24.6 56.5-47.1 77.2l-59.1-45.9c19.5-13.1 33.3-34.3 37.2-57.5H203.6c.1-24.2.1-48.4.1-72.6z" fill="#4285F4"></path><path d="M37.5 283.5c20.3-15.7 40.6-31.5 60.9-47.3 7.8 22.9 22.8 43.2 42.6 57.1 12.4 8.7 26.6 14.9 41.4 17.9 14.6 3 29.7 2.6 44.4.1 14.6-2.6 28.7-7.9 41-16.2l59.1 45.9c-21.3 19.7-48 33.1-76.2 39.6-31.2 7.1-64.2 7.3-95.2-1-24.6-6.5-47.7-18.2-67.6-34.1-20.9-16.6-38.3-38-50.4-62z" fill="#34A853"></path>\n                        </svg>\n                        <span>Google</span>\n                    </a>\n\n                    <a href="/login/twitter?_destination=' +
                      c(d(null != t ? u(t, "from_url") : t, t)) +
                      '" class="bt-connect twitter">\n                        ' +
                      (null != (r = s(o(561)).call(l, "twitter", 17, 14, { name: "helpers/icon", hash: {}, data: a, loc: { start: { line: 72, column: 24 }, end: { line: 72, column: 62 } } })) ? r : "") +
                      '\n                        <span>Twitter</span>\n                    </a>\n\n                    <a href="/login/facebook?_destination=' +
                      c(d(null != t ? u(t, "from_url") : t, t)) +
                      '" class="bt-connect facebook">\n                        ' +
                      (null != (r = s(o(561)).call(l, "facebook", 6.5, 14, { name: "helpers/icon", hash: {}, data: a, loc: { start: { line: 77, column: 24 }, end: { line: 77, column: 64 } } })) ? r : "") +
                      "\n                        <span>Facebook</span>\n                    </a>\n                </div>\n            </div>\n\n        </div>\n    </div>\n" +
                      (null != (r = e.invokePartial(o(9602), t, { name: "_loader", hash: { not_show: !0 }, data: a, indent: "    ", helpers: n, partials: i, decorators: e.decorators })) ? r : "") +
                      "</div>\n"
                  );
              },
              usePartial: !0,
              useData: !0,
          });
      },
      5420: (e, t, o) => {
          var n = o(202);
          function s(e) {
              return e && (e.__esModule ? e.default : e);
          }
          e.exports = (n.default || n).template({
              1: function (e, t, n, i, a) {
                  var r,
                      l =
                          e.lookupProperty ||
                          function (e, t) {
                              if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                          };
                  return (
                      '            <li class="awards">\n                ' +
                      e.escapeExpression(e.lambda(null != (r = null != t ? l(t, "user") : t) ? l(r, "totalAwards") : r, t)) +
                      "\n                " +
                      (null != (r = s(o(561)).call(null != t ? t : e.nullContext || {}, "medal", 12.39, 14, { name: "helpers/icon", hash: {}, data: a, loc: { start: { line: 30, column: 16 }, end: { line: 30, column: 55 } } })) ? r : "") +
                      "\n            </li>\n"
                  );
              },
              compiler: [8, ">= 4.3.0"],
              main: function (e, t, n, i, a) {
                  var r,
                      l = e.lambda,
                      c = e.escapeExpression,
                      d = null != t ? t : e.nullContext || {},
                      u =
                          e.lookupProperty ||
                          function (e, t) {
                              if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                          };
                  return (
                      '<div class="row-user">\n    <div class="avatar-profile">\n        <a href="' +
                      c(l(null != (r = null != t ? u(t, "user") : t) ? u(r, "homepage") : r, t)) +
                      '">\n            <img src="' +
                      c(
                          s(o(4739)).call(d, null != (r = null != t ? u(t, "user") : t) ? u(r, "image") : r, "thumb_user_70", {
                              name: "helpers/asset_thumb",
                              hash: {},
                              data: a,
                              loc: { start: { line: 4, column: 22 }, end: { line: 4, column: 76 } },
                          })
                      ) +
                      '" width="70" height="70" alt="' +
                      c(l(null != (r = null != t ? u(t, "user") : t) ? u(r, "displayName") : r, t)) +
                      '"  />\n            <div class="user-type">\n                ' +
                      (null !=
                      (r = s(o(7781)).call(d, null != (r = null != t ? u(t, "user") : t) ? u(r, "status") : r, 11, 14, {
                          name: "helpers/icon_user",
                          hash: {},
                          data: a,
                          loc: { start: { line: 6, column: 16 }, end: { line: 6, column: 61 } },
                      }))
                          ? r
                          : "") +
                      '\n            </div>\n        </a>\n    </div>\n</div>\n<div class="row-user">\n    <strong><a href="' +
                      c(l(null != (r = null != t ? u(t, "user") : t) ? u(r, "homepage") : r, t)) +
                      '" class="text-black">' +
                      c(l(null != (r = null != t ? u(t, "user") : t) ? u(r, "displayName") : r, t)) +
                      '</a></strong>\n</div>\n<div class="row-user">\n    <span class="text-gray">' +
                      c(l(null != (r = null != t ? u(t, "user") : t) ? u(r, "countryName") : r, t)) +
                      '</span>\n</div>\n<div class="row-user">\n    <ul class="list-stats-icons">\n        <li class="favorites">\n            ' +
                      c(l(null != (r = null != t ? u(t, "user") : t) ? u(r, "collectables") : r, t)) +
                      "\n            " +
                      (null != (r = s(o(561)).call(d, "heart", 15, 14, { name: "helpers/icon", hash: {}, data: a, loc: { start: { line: 21, column: 12 }, end: { line: 21, column: 48 } } })) ? r : "") +
                      '\n        </li>\n        <li class="collections">\n            ' +
                      c(l(null != (r = null != t ? u(t, "user") : t) ? u(r, "numberOfCollections") : r, t)) +
                      "\n            " +
                      (null != (r = s(o(561)).call(d, "books", 15.57, 14, { name: "helpers/icon", hash: {}, data: a, loc: { start: { line: 25, column: 12 }, end: { line: 25, column: 51 } } })) ? r : "") +
                      "\n        </li>\n" +
                      (null !=
                      (r = u(n, "if").call(d, null != (r = null != t ? u(t, "user") : t) ? u(r, "totalAwards") : r, {
                          name: "if",
                          hash: {},
                          fn: e.program(1, a, 0),
                          inverse: e.noop,
                          data: a,
                          loc: { start: { line: 27, column: 8 }, end: { line: 32, column: 15 } },
                      }))
                          ? r
                          : "") +
                      "    </ul>\n</div>\n"
                  );
              },
              useData: !0,
          });
      },
      6393: (e, t, o) => {
          var n = o(202);
          function s(e) {
              return e && (e.__esModule ? e.default : e);
          }
          e.exports = (n.default || n).template({
              1: function (e, t, n, i, a, r) {
                  var l,
                      c = null != t ? t : e.nullContext || {},
                      d = e.escapeExpression,
                      u = e.lambda,
                      p =
                          e.lookupProperty ||
                          function (e, t) {
                              if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                          };
                  return (
                      '<li>\n    <figure>\n        <a href="' +
                      d(
                          s(o(5040)).call(c, "tv_user_homepage", {
                              name: "helpers/path",
                              hash: { username: null != (l = r[0][0]) ? p(l, "username") : l },
                              data: a,
                              blockParams: r,
                              loc: { start: { line: 4, column: 17 }, end: { line: 4, column: 79 } },
                          })
                      ) +
                      '"><img src="' +
                      d(
                          s(o(4739)).call(c, null != (l = r[0][0]) ? p(l, "image") : l, "thumb_user_70", {
                              name: "helpers/asset_thumb",
                              hash: {},
                              data: a,
                              blockParams: r,
                              loc: { start: { line: 4, column: 91 }, end: { line: 4, column: 145 } },
                          })
                      ) +
                      '" width="50" height="50" alt="' +
                      d(u(null != (l = r[0][0]) ? p(l, "displayName") : l, t)) +
                      '"></a>\n    </figure>\n    <div class="data">\n        <div class="row">\n            <a class="text-black" href="' +
                      d(
                          s(o(5040)).call(c, "tv_user_homepage", {
                              name: "helpers/path",
                              hash: { username: null != (l = r[0][0]) ? p(l, "username") : l },
                              data: a,
                              blockParams: r,
                              loc: { start: { line: 8, column: 40 }, end: { line: 8, column: 102 } },
                          })
                      ) +
                      '"><strong>' +
                      d(u(null != (l = r[0][0]) ? p(l, "displayName") : l, t)) +
                      "</strong></a>\n        </div>\n" +
                      (null !=
                      (l = p(n, "if").call(c, null != (l = r[0][0]) ? p(l, "country") : l, {
                          name: "if",
                          hash: {},
                          fn: e.program(2, a, 0, r),
                          inverse: e.noop,
                          data: a,
                          blockParams: r,
                          loc: { start: { line: 10, column: 8 }, end: { line: 18, column: 15 } },
                      }))
                          ? l
                          : "") +
                      '    </div>\n    <div class="box-right">\n        <div class="tooltip">\n\n            <a href="' +
                      d(
                          s(o(5040)).call(c, "tv_user_follow", {
                              name: "helpers/path",
                              hash: { username: null != (l = r[0][0]) ? p(l, "username") : l },
                              data: a,
                              blockParams: r,
                              loc: { start: { line: 23, column: 21 }, end: { line: 23, column: 81 } },
                          })
                      ) +
                      '" class="bt-check js-follow-user js-user-following" data-username="' +
                      d(u(null != (l = r[0][0]) ? p(l, "username") : l, t)) +
                      '" data-user-id="' +
                      d(u(null != (l = r[0][0]) ? p(l, "id") : l, t)) +
                      '">\n                <span class="bt-content"></span>\n            </a>\n\n            <div class="box-tooltip">\n                <div class="tooltip-text">' +
                      d(s(o(8040)).call(c, "app.follow", { name: "helpers/trans", hash: {}, data: a, blockParams: r, loc: { start: { line: 28, column: 42 }, end: { line: 28, column: 76 } } })) +
                      "</div>\n            </div>\n        </div>\n    </div>\n</li>\n"
                  );
              },
              2: function (e, t, n, i, a, r) {
                  var l,
                      c =
                          e.lookupProperty ||
                          function (e, t) {
                              if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                          };
                  return (
                      '            <div class="row">\n' +
                      (null !=
                      (l = s(o(6805)).call(null != t ? t : e.nullContext || {}, null != (l = r[1][0]) ? c(l, "country") : l, {
                          name: "helpers/ifObject",
                          hash: {},
                          fn: e.program(3, a, 0, r),
                          inverse: e.program(5, a, 0, r),
                          data: a,
                          blockParams: r,
                          loc: { start: { line: 12, column: 16 }, end: { line: 16, column: 39 } },
                      }))
                          ? l
                          : "") +
                      "            </div>\n"
                  );
              },
              3: function (e, t, o, n, s, i) {
                  var a,
                      r =
                          e.lookupProperty ||
                          function (e, t) {
                              if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                          };
                  return "                    " + e.escapeExpression(e.lambda(null != (a = null != (a = i[2][0]) ? r(a, "country") : a) ? r(a, "name") : a, t)) + "\n";
              },
              5: function (e, t, o, n, s, i) {
                  var a,
                      r =
                          e.lookupProperty ||
                          function (e, t) {
                              if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                          };
                  return "                    " + e.escapeExpression(e.lambda(null != (a = i[2][0]) ? r(a, "country") : a, t)) + "\n";
              },
              compiler: [8, ">= 4.3.0"],
              main: function (e, t, o, n, s, i) {
                  var a,
                      r =
                          e.lookupProperty ||
                          function (e, t) {
                              if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                          };
                  return null !=
                      (a = r(o, "each").call(null != t ? t : e.nullContext || {}, null != t ? r(t, "users") : t, {
                          name: "each",
                          hash: {},
                          fn: e.program(1, s, 1, i),
                          inverse: e.noop,
                          data: s,
                          blockParams: i,
                          loc: { start: { line: 1, column: 0 }, end: { line: 33, column: 9 } },
                      }))
                      ? a
                      : "";
              },
              useData: !0,
              useBlockParams: !0,
          });
      },
  },
]);
