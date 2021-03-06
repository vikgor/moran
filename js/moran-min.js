function smoothScroll(n, t, e) {
        "use strict";

        function r(n) {
            return .5 > n ? 2 * n * n : -1 + (4 - 2 * n) * n
        }

        function u() {
            l += f, p = l / t, p = p > 1 ? 1 : p, s = o + c * r(p), window.scrollTo(0, Math.floor(s)), i(s, n, h)
        }

        function i(n, t, r) {
            (1 === p || window.innerHeight + s >= document.height) && (clearInterval(r), e && e())
        }

        function a() {
            h = setInterval(u, f)
        }
        var o = window.pageYOffset,
            l = 0,
            c = n - o,
            f = 16,
            s, p, h;
        t = t || 500, a()
    }(function() {
        var n = this,
            t = n._,
            e = Array.prototype,
            r = Object.prototype,
            u = Function.prototype,
            i = e.push,
            a = e.slice,
            o = e.concat,
            l = r.toString,
            c = r.hasOwnProperty,
            f = Array.isArray,
            s = Object.keys,
            p = u.bind,
            h = function(n) {
                return n instanceof h ? n : this instanceof h ? void(this._wrapped = n) : new h(n)
            };
        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = h), exports._ = h) : n._ = h, h.VERSION = "1.7.0";
        var g = function(n, t, e) {
            if (void 0 === t) return n;
            switch (null == e ? 3 : e) {
                case 1:
                    return function(e) {
                        return n.call(t, e)
                    };
                case 2:
                    return function(e, r) {
                        return n.call(t, e, r)
                    };
                case 3:
                    return function(e, r, u) {
                        return n.call(t, e, r, u)
                    };
                case 4:
                    return function(e, r, u, i) {
                        return n.call(t, e, r, u, i)
                    }
            }
            return function() {
                return n.apply(t, arguments)
            }
        };
        h.iteratee = function(n, t, e) {
            return null == n ? h.identity : h.isFunction(n) ? g(n, t, e) : h.isObject(n) ? h.matches(n) : h.property(n)
        }, h.each = h.forEach = function(n, t, e) {
            if (null == n) return n;
            t = g(t, e);
            var r, u = n.length;
            if (u === +u)
                for (r = 0; u > r; r++) t(n[r], r, n);
            else {
                var i = h.keys(n);
                for (r = 0, u = i.length; u > r; r++) t(n[i[r]], i[r], n)
            }
            return n
        }, h.map = h.collect = function(n, t, e) {
            if (null == n) return [];
            t = h.iteratee(t, e);
            for (var r, u = n.length !== +n.length && h.keys(n), i = (u || n).length, a = Array(i), o = 0; i > o; o++) r = u ? u[o] : o, a[o] = t(n[r], r, n);
            return a
        };
        var v = "Reduce of empty array with no initial value";
        h.reduce = h.foldl = h.inject = function(n, t, e, r) {
            null == n && (n = []), t = g(t, r, 4);
            var u, i = n.length !== +n.length && h.keys(n),
                a = (i || n).length,
                o = 0;
            if (arguments.length < 3) {
                if (!a) throw new TypeError(v);
                e = n[i ? i[o++] : o++]
            }
            for (; a > o; o++) u = i ? i[o] : o, e = t(e, n[u], u, n);
            return e
        }, h.reduceRight = h.foldr = function(n, t, e, r) {
            null == n && (n = []), t = g(t, r, 4);
            var u, i = n.length !== +n.length && h.keys(n),
                a = (i || n).length;
            if (arguments.length < 3) {
                if (!a) throw new TypeError(v);
                e = n[i ? i[--a] : --a]
            }
            for (; a--;) u = i ? i[a] : a, e = t(e, n[u], u, n);
            return e
        }, h.find = h.detect = function(n, t, e) {
            var r;
            return t = h.iteratee(t, e), h.some(n, function(n, e, u) {
                return t(n, e, u) ? (r = n, !0) : void 0
            }), r
        }, h.filter = h.select = function(n, t, e) {
            var r = [];
            return null == n ? r : (t = h.iteratee(t, e), h.each(n, function(n, e, u) {
                t(n, e, u) && r.push(n)
            }), r)
        }, h.reject = function(n, t, e) {
            return h.filter(n, h.negate(h.iteratee(t)), e)
        }, h.every = h.all = function(n, t, e) {
            if (null == n) return !0;
            t = h.iteratee(t, e);
            var r, u, i = n.length !== +n.length && h.keys(n),
                a = (i || n).length;
            for (r = 0; a > r; r++)
                if (u = i ? i[r] : r, !t(n[u], u, n)) return !1;
            return !0
        }, h.some = h.any = function(n, t, e) {
            if (null == n) return !1;
            t = h.iteratee(t, e);
            var r, u, i = n.length !== +n.length && h.keys(n),
                a = (i || n).length;
            for (r = 0; a > r; r++)
                if (u = i ? i[r] : r, t(n[u], u, n)) return !0;
            return !1
        }, h.contains = h.include = function(n, t) {
            return null == n ? !1 : (n.length !== +n.length && (n = h.values(n)), h.indexOf(n, t) >= 0)
        }, h.invoke = function(n, t) {
            var e = a.call(arguments, 2),
                r = h.isFunction(t);
            return h.map(n, function(n) {
                return (r ? t : n[t]).apply(n, e)
            })
        }, h.pluck = function(n, t) {
            return h.map(n, h.property(t))
        }, h.where = function(n, t) {
            return h.filter(n, h.matches(t))
        }, h.findWhere = function(n, t) {
            return h.find(n, h.matches(t))
        }, h.max = function(n, t, e) {
            var r, u, i = -1 / 0,
                a = -1 / 0;
            if (null == t && null != n) {
                n = n.length === +n.length ? n : h.values(n);
                for (var o = 0, l = n.length; l > o; o++) r = n[o], r > i && (i = r)
            } else t = h.iteratee(t, e), h.each(n, function(n, e, r) {
                u = t(n, e, r), (u > a || u === -1 / 0 && i === -1 / 0) && (i = n, a = u)
            });
            return i
        }, h.min = function(n, t, e) {
            var r, u, i = 1 / 0,
                a = 1 / 0;
            if (null == t && null != n) {
                n = n.length === +n.length ? n : h.values(n);
                for (var o = 0, l = n.length; l > o; o++) r = n[o], i > r && (i = r)
            } else t = h.iteratee(t, e), h.each(n, function(n, e, r) {
                u = t(n, e, r), (a > u || 1 / 0 === u && 1 / 0 === i) && (i = n, a = u)
            });
            return i
        }, h.shuffle = function(n) {
            for (var t, e = n && n.length === +n.length ? n : h.values(n), r = e.length, u = Array(r), i = 0; r > i; i++) t = h.random(0, i), t !== i && (u[i] = u[t]), u[t] = e[i];
            return u
        }, h.sample = function(n, t, e) {
            return null == t || e ? (n.length !== +n.length && (n = h.values(n)), n[h.random(n.length - 1)]) : h.shuffle(n).slice(0, Math.max(0, t))
        }, h.sortBy = function(n, t, e) {
            return t = h.iteratee(t, e), h.pluck(h.map(n, function(n, e, r) {
                return {
                    value: n,
                    index: e,
                    criteria: t(n, e, r)
                }
            }).sort(function(n, t) {
                var e = n.criteria,
                    r = t.criteria;
                if (e !== r) {
                    if (e > r || void 0 === e) return 1;
                    if (r > e || void 0 === r) return -1
                }
                return n.index - t.index
            }), "value")
        };
        var m = function(n) {
            return function(t, e, r) {
                var u = {};
                return e = h.iteratee(e, r), h.each(t, function(r, i) {
                    var a = e(r, i, t);
                    n(u, r, a)
                }), u
            }
        };
        h.groupBy = m(function(n, t, e) {
            h.has(n, e) ? n[e].push(t) : n[e] = [t]
        }), h.indexBy = m(function(n, t, e) {
            n[e] = t
        }), h.countBy = m(function(n, t, e) {
            h.has(n, e) ? n[e] ++ : n[e] = 1
        }), h.sortedIndex = function(n, t, e, r) {
            e = h.iteratee(e, r, 1);
            for (var u = e(t), i = 0, a = n.length; a > i;) {
                var o = i + a >>> 1;
                e(n[o]) < u ? i = o + 1 : a = o
            }
            return i
        }, h.toArray = function(n) {
            return n ? h.isArray(n) ? a.call(n) : n.length === +n.length ? h.map(n, h.identity) : h.values(n) : []
        }, h.size = function(n) {
            return null == n ? 0 : n.length === +n.length ? n.length : h.keys(n).length
        }, h.partition = function(n, t, e) {
            t = h.iteratee(t, e);
            var r = [],
                u = [];
            return h.each(n, function(n, e, i) {
                (t(n, e, i) ? r : u).push(n)
            }), [r, u]
        }, h.first = h.head = h.take = function(n, t, e) {
            return null == n ? void 0 : null == t || e ? n[0] : 0 > t ? [] : a.call(n, 0, t)
        }, h.initial = function(n, t, e) {
            return a.call(n, 0, Math.max(0, n.length - (null == t || e ? 1 : t)))
        }, h.last = function(n, t, e) {
            return null == n ? void 0 : null == t || e ? n[n.length - 1] : a.call(n, Math.max(n.length - t, 0))
        }, h.rest = h.tail = h.drop = function(n, t, e) {
            return a.call(n, null == t || e ? 1 : t)
        }, h.compact = function(n) {
            return h.filter(n, h.identity)
        };
        var d = function(n, t, e, r) {
            if (t && h.every(n, h.isArray)) return o.apply(r, n);
            for (var u = 0, a = n.length; a > u; u++) {
                var l = n[u];
                h.isArray(l) || h.isArguments(l) ? t ? i.apply(r, l) : d(l, t, e, r) : e || r.push(l)
            }
            return r
        };
        h.flatten = function(n, t) {
            return d(n, t, !1, [])
        }, h.without = function(n) {
            return h.difference(n, a.call(arguments, 1))
        }, h.uniq = h.unique = function(n, t, e, r) {
            if (null == n) return [];
            h.isBoolean(t) || (r = e, e = t, t = !1), null != e && (e = h.iteratee(e, r));
            for (var u = [], i = [], a = 0, o = n.length; o > a; a++) {
                var l = n[a];
                if (t) a && i === l || u.push(l), i = l;
                else if (e) {
                    var c = e(l, a, n);
                    h.indexOf(i, c) < 0 && (i.push(c), u.push(l))
                } else h.indexOf(u, l) < 0 && u.push(l)
            }
            return u
        }, h.union = function() {
            return h.uniq(d(arguments, !0, !0, []))
        }, h.intersection = function(n) {
            if (null == n) return [];
            for (var t = [], e = arguments.length, r = 0, u = n.length; u > r; r++) {
                var i = n[r];
                if (!h.contains(t, i)) {
                    for (var a = 1; e > a && h.contains(arguments[a], i); a++);
                    a === e && t.push(i)
                }
            }
            return t
        }, h.difference = function(n) {
            var t = d(a.call(arguments, 1), !0, !0, []);
            return h.filter(n, function(n) {
                return !h.contains(t, n)
            })
        }, h.zip = function(n) {
            if (null == n) return [];
            for (var t = h.max(arguments, "length").length, e = Array(t), r = 0; t > r; r++) e[r] = h.pluck(arguments, r);
            return e
        }, h.object = function(n, t) {
            if (null == n) return {};
            for (var e = {}, r = 0, u = n.length; u > r; r++) t ? e[n[r]] = t[r] : e[n[r][0]] = n[r][1];
            return e
        }, h.indexOf = function(n, t, e) {
            if (null == n) return -1;
            var r = 0,
                u = n.length;
            if (e) {
                if ("number" != typeof e) return r = h.sortedIndex(n, t), n[r] === t ? r : -1;
                r = 0 > e ? Math.max(0, u + e) : e
            }
            for (; u > r; r++)
                if (n[r] === t) return r;
            return -1
        }, h.lastIndexOf = function(n, t, e) {
            if (null == n) return -1;
            var r = n.length;
            for ("number" == typeof e && (r = 0 > e ? r + e + 1 : Math.min(r, e + 1)); --r >= 0;)
                if (n[r] === t) return r;
            return -1
        }, h.range = function(n, t, e) {
            arguments.length <= 1 && (t = n || 0, n = 0), e = e || 1;
            for (var r = Math.max(Math.ceil((t - n) / e), 0), u = Array(r), i = 0; r > i; i++, n += e) u[i] = n;
            return u
        };
        var y = function() {};
        h.bind = function(n, t) {
            var e, r;
            if (p && n.bind === p) return p.apply(n, a.call(arguments, 1));
            if (!h.isFunction(n)) throw new TypeError("Bind must be called on a function");
            return e = a.call(arguments, 2), r = function() {
                if (!(this instanceof r)) return n.apply(t, e.concat(a.call(arguments)));
                y.prototype = n.prototype;
                var u = new y;
                y.prototype = null;
                var i = n.apply(u, e.concat(a.call(arguments)));
                return h.isObject(i) ? i : u
            }
        }, h.partial = function(n) {
            var t = a.call(arguments, 1);
            return function() {
                for (var e = 0, r = t.slice(), u = 0, i = r.length; i > u; u++) r[u] === h && (r[u] = arguments[e++]);
                for (; e < arguments.length;) r.push(arguments[e++]);
                return n.apply(this, r)
            }
        }, h.bindAll = function(n) {
            var t, e, r = arguments.length;
            if (1 >= r) throw new Error("bindAll must be passed function names");
            for (t = 1; r > t; t++) e = arguments[t], n[e] = h.bind(n[e], n);
            return n
        }, h.memoize = function(n, t) {
            var e = function(r) {
                var u = e.cache,
                    i = t ? t.apply(this, arguments) : r;
                return h.has(u, i) || (u[i] = n.apply(this, arguments)), u[i]
            };
            return e.cache = {}, e
        }, h.delay = function(n, t) {
            var e = a.call(arguments, 2);
            return setTimeout(function() {
                return n.apply(null, e)
            }, t)
        }, h.defer = function(n) {
            return h.delay.apply(h, [n, 1].concat(a.call(arguments, 1)))
        }, h.throttle = function(n, t, e) {
            var r, u, i, a = null,
                o = 0;
            e || (e = {});
            var l = function() {
                o = e.leading === !1 ? 0 : h.now(), a = null, i = n.apply(r, u), a || (r = u = null)
            };
            return function() {
                var c = h.now();
                o || e.leading !== !1 || (o = c);
                var f = t - (c - o);
                return r = this, u = arguments, 0 >= f || f > t ? (clearTimeout(a), a = null, o = c, i = n.apply(r, u), a || (r = u = null)) : a || e.trailing === !1 || (a = setTimeout(l, f)), i
            }
        }, h.debounce = function(n, t, e) {
            var r, u, i, a, o, l = function() {
                var c = h.now() - a;
                t > c && c > 0 ? r = setTimeout(l, t - c) : (r = null, e || (o = n.apply(i, u), r || (i = u = null)))
            };
            return function() {
                i = this, u = arguments, a = h.now();
                var c = e && !r;
                return r || (r = setTimeout(l, t)), c && (o = n.apply(i, u), i = u = null), o
            }
        }, h.wrap = function(n, t) {
            return h.partial(t, n)
        }, h.negate = function(n) {
            return function() {
                return !n.apply(this, arguments)
            }
        }, h.compose = function() {
            var n = arguments,
                t = n.length - 1;
            return function() {
                for (var e = t, r = n[t].apply(this, arguments); e--;) r = n[e].call(this, r);
                return r
            }
        }, h.after = function(n, t) {
            return function() {
                return --n < 1 ? t.apply(this, arguments) : void 0
            }
        }, h.before = function(n, t) {
            var e;
            return function() {
                return --n > 0 ? e = t.apply(this, arguments) : t = null, e
            }
        }, h.once = h.partial(h.before, 2), h.keys = function(n) {
            if (!h.isObject(n)) return [];
            if (s) return s(n);
            var t = [];
            for (var e in n) h.has(n, e) && t.push(e);
            return t
        }, h.values = function(n) {
            for (var t = h.keys(n), e = t.length, r = Array(e), u = 0; e > u; u++) r[u] = n[t[u]];
            return r
        }, h.pairs = function(n) {
            for (var t = h.keys(n), e = t.length, r = Array(e), u = 0; e > u; u++) r[u] = [t[u], n[t[u]]];
            return r
        }, h.invert = function(n) {
            for (var t = {}, e = h.keys(n), r = 0, u = e.length; u > r; r++) t[n[e[r]]] = e[r];
            return t
        }, h.functions = h.methods = function(n) {
            var t = [];
            for (var e in n) h.isFunction(n[e]) && t.push(e);
            return t.sort()
        }, h.extend = function(n) {
            if (!h.isObject(n)) return n;
            for (var t, e, r = 1, u = arguments.length; u > r; r++) {
                t = arguments[r];
                for (e in t) c.call(t, e) && (n[e] = t[e])
            }
            return n
        }, h.pick = function(n, t, e) {
            var r, u = {};
            if (null == n) return u;
            if (h.isFunction(t)) {
                t = g(t, e);
                for (r in n) {
                    var i = n[r];
                    t(i, r, n) && (u[r] = i)
                }
            } else {
                var l = o.apply([], a.call(arguments, 1));
                n = new Object(n);
                for (var c = 0, f = l.length; f > c; c++) r = l[c], r in n && (u[r] = n[r])
            }
            return u
        }, h.omit = function(n, t, e) {
            if (h.isFunction(t)) t = h.negate(t);
            else {
                var r = h.map(o.apply([], a.call(arguments, 1)), String);
                t = function(n, t) {
                    return !h.contains(r, t)
                }
            }
            return h.pick(n, t, e)
        }, h.defaults = function(n) {
            if (!h.isObject(n)) return n;
            for (var t = 1, e = arguments.length; e > t; t++) {
                var r = arguments[t];
                for (var u in r) void 0 === n[u] && (n[u] = r[u])
            }
            return n
        }, h.clone = function(n) {
            return h.isObject(n) ? h.isArray(n) ? n.slice() : h.extend({}, n) : n
        }, h.tap = function(n, t) {
            return t(n), n
        };
        var w = function(n, t, e, r) {
            if (n === t) return 0 !== n || 1 / n === 1 / t;
            if (null == n || null == t) return n === t;
            n instanceof h && (n = n._wrapped), t instanceof h && (t = t._wrapped);
            var u = l.call(n);
            if (u !== l.call(t)) return !1;
            switch (u) {
                case "[object RegExp]":
                case "[object String]":
                    return "" + n == "" + t;
                case "[object Number]":
                    return +n !== +n ? +t !== +t : 0 === +n ? 1 / +n === 1 / t : +n === +t;
                case "[object Date]":
                case "[object Boolean]":
                    return +n === +t
            }
            if ("object" != typeof n || "object" != typeof t) return !1;
            for (var i = e.length; i--;)
                if (e[i] === n) return r[i] === t;
            var a = n.constructor,
                o = t.constructor;
            if (a !== o && "constructor" in n && "constructor" in t && !(h.isFunction(a) && a instanceof a && h.isFunction(o) && o instanceof o)) return !1;
            e.push(n), r.push(t);
            var c, f;
            if ("[object Array]" === u) {
                if (c = n.length, f = c === t.length)
                    for (; c-- && (f = w(n[c], t[c], e, r)););
            } else {
                var s, p = h.keys(n);
                if (c = p.length, f = h.keys(t).length === c)
                    for (; c-- && (s = p[c], f = h.has(t, s) && w(n[s], t[s], e, r)););
            }
            return e.pop(), r.pop(), f
        };
        h.isEqual = function(n, t) {
            return w(n, t, [], [])
        }, h.isEmpty = function(n) {
            if (null == n) return !0;
            if (h.isArray(n) || h.isString(n) || h.isArguments(n)) return 0 === n.length;
            for (var t in n)
                if (h.has(n, t)) return !1;
            return !0
        }, h.isElement = function(n) {
            return !(!n || 1 !== n.nodeType)
        }, h.isArray = f || function(n) {
            return "[object Array]" === l.call(n)
        }, h.isObject = function(n) {
            var t = typeof n;
            return "function" === t || "object" === t && !!n
        }, h.each(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(n) {
            h["is" + n] = function(t) {
                return l.call(t) === "[object " + n + "]"
            }
        }), h.isArguments(arguments) || (h.isArguments = function(n) {
            return h.has(n, "callee")
        }), "function" != typeof /./ && (h.isFunction = function(n) {
            return "function" == typeof n || !1
        }), h.isFinite = function(n) {
            return isFinite(n) && !isNaN(parseFloat(n))
        }, h.isNaN = function(n) {
            return h.isNumber(n) && n !== +n
        }, h.isBoolean = function(n) {
            return n === !0 || n === !1 || "[object Boolean]" === l.call(n)
        }, h.isNull = function(n) {
            return null === n
        }, h.isUndefined = function(n) {
            return void 0 === n
        }, h.has = function(n, t) {
            return null != n && c.call(n, t)
        }, h.noConflict = function() {
            return n._ = t, this
        }, h.identity = function(n) {
            return n
        }, h.constant = function(n) {
            return function() {
                return n
            }
        }, h.noop = function() {}, h.property = function(n) {
            return function(t) {
                return t[n]
            }
        }, h.matches = function(n) {
            var t = h.pairs(n),
                e = t.length;
            return function(n) {
                if (null == n) return !e;
                n = new Object(n);
                for (var r = 0; e > r; r++) {
                    var u = t[r],
                        i = u[0];
                    if (u[1] !== n[i] || !(i in n)) return !1
                }
                return !0
            }
        }, h.times = function(n, t, e) {
            var r = Array(Math.max(0, n));
            t = g(t, e, 1);
            for (var u = 0; n > u; u++) r[u] = t(u);
            return r
        }, h.random = function(n, t) {
            return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1))
        }, h.now = Date.now || function() {
            return (new Date).getTime()
        };
        var b = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            x = h.invert(b),
            A = function(n) {
                var t = function(t) {
                        return n[t]
                    },
                    e = "(?:" + h.keys(n).join("|") + ")",
                    r = RegExp(e),
                    u = RegExp(e, "g");
                return function(n) {
                    return n = null == n ? "" : "" + n, r.test(n) ? n.replace(u, t) : n
                }
            };
        h.escape = A(b), h.unescape = A(x), h.result = function(n, t) {
            if (null == n) return void 0;
            var e = n[t];
            return h.isFunction(e) ? n[t]() : e
        };
        var _ = 0;
        h.uniqueId = function(n) {
            var t = ++_ + "";
            return n ? n + t : t
        }, h.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var j = /(.)^/,
            E = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            F = /\\|'|\r|\n|\u2028|\u2029/g,
            k = function(n) {
                return "\\" + E[n]
            };
        h.template = function(n, t, e) {
            !t && e && (t = e), t = h.defaults({}, t, h.templateSettings);
            var r = RegExp([(t.escape || j).source, (t.interpolate || j).source, (t.evaluate || j).source].join("|") + "|$", "g"),
                u = 0,
                i = "__p+='";
            n.replace(r, function(t, e, r, a, o) {
                return i += n.slice(u, o).replace(F, k), u = o + t.length, e ? i += "'+\n((__t=(" + e + "))==null?'':_.escape(__t))+\n'" : r ? i += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : a && (i += "';\n" + a + "\n__p+='"), t
            }), i += "';\n", t.variable || (i = "with(obj||{}){\n" + i + "}\n"), i = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n";
            try {
                var a = new Function(t.variable || "obj", "_", i)
            } catch (o) {
                throw o.source = i, o
            }
            var l = function(n) {
                    return a.call(this, n, h)
                },
                c = t.variable || "obj";
            return l.source = "function(" + c + "){\n" + i + "}", l
        }, h.chain = function(n) {
            var t = h(n);
            return t._chain = !0, t
        };
        var N = function(n) {
            return this._chain ? h(n).chain() : n
        };
        h.mixin = function(n) {
            h.each(h.functions(n), function(t) {
                var e = h[t] = n[t];
                h.prototype[t] = function() {
                    var n = [this._wrapped];
                    return i.apply(n, arguments), N.call(this, e.apply(h, n))
                }
            })
        }, h.mixin(h), h.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(n) {
            var t = e[n];
            h.prototype[n] = function() {
                var e = this._wrapped;
                return t.apply(e, arguments), "shift" !== n && "splice" !== n || 0 !== e.length || delete e[0], N.call(this, e)
            }
        }), h.each(["concat", "join", "slice"], function(n) {
            var t = e[n];
            h.prototype[n] = function() {
                return N.call(this, t.apply(this._wrapped, arguments))
            }
        }), h.prototype.value = function() {
            return this._wrapped
        }, "function" == typeof define && define.amd && define("underscore", [], function() {
            return h
        })
    }).call(this),
    function(n) {
        var t = document.addEventListener || document.attachEvent,
            e = document.removeEventListener ? "removeEventListener" : "detachEvent",
            r = document.addEventListener ? "DOMContentLoaded" : "onreadystatechange";
        t.call(document, r, function() {
            document[e](r, arguments.callee, !1), n()
        }, !1)
    }(function() {
        for (var n = document.body, t = n.childNodes[0]; null != t;)
            if (3 == t.nodeType && (t.nodeValue = t.nodeValue.replace(/(\W|^)"(\S)/g, "$1“$2").replace(/(\u201c[^"]*)"([^"]*$|[^\u201c"]*\u201c)/g, "$1”$2").replace(/([^0-9])"/g, "$1”").replace(/(\W|^)'(\S)/g, "$1‘$2").replace(/([a-z])'([a-z])/gi, "$1’$2").replace(/((\u2018[^']*)|[a-z])'([^0-9]|$)/gi, "$1’$3").replace(/(\u2018)([0-9]{2}[^\u2019]*)(\u2018([^0-9]|$)|$|\u2019[a-z])/gi, "’$2$3").replace(/(\B|^)\u2018(?=([^\u2019]*\u2019\b)*([^\u2019\u2018]*\W[\u2019\u2018]\b|[^\u2019\u2018]*$))/gi, "$1’").replace(/'''/g, "‴").replace(/("|'')/g, "″").replace(/'/g, "′")), t.hasChildNodes() && "CODE" != t.firstChild.nodeName) t = t.firstChild;
            else
                do {
                    for (; null == t.nextSibling && t != n;) t = t.parentNode;
                    t = t.nextSibling
                } while (t && ("CODE" == t.nodeName || "SCRIPT" == t.nodeName || "STYLE" == t.nodeName))
    }),
    function() {
        for (var n = 0, t = ["ms", "moz", "webkit", "o"], e = 0; e < t.length && !window.requestAnimationFrame; ++e) window.requestAnimationFrame = window[t[e] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[e] + "CancelAnimationFrame"] || window[t[e] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(t) {
            var e = (new Date).getTime(),
                r = Math.max(0, 16 - (e - n)),
                u = window.setTimeout(function() {
                    t(e + r)
                }, r);
            return n = e + r, u
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(n) {
            clearTimeout(n)
        })
    }(),
    function() {
        "use strict";

        function n() {
            var n = document.querySelectorAll('iframe[src*="//www.youtube.com"], iframe[src*="//player.vimeo.com"]'),
                t = _.debounce(function() {
                    for (var t = n[0].parentNode.offsetWidth, e = 0; e < n.length; e++) {
                        var r = n[e],
                            u = r.dataset ? r.dataset.aspectRatio : r.getAttribute("data-aspect-ratio");
                        r.style.width = t + "px", r.style.height = t * u + "px"
                    }
                }, 300);
            if (n.length) {
                for (var e = 0; e < n.length; e++) {
                    var r = n[e],
                        u = r.height / r.width;
                    r.dataset ? r.dataset.aspectRatio = u : r.setAttribute("data-aspect-ratio", u), r.removeAttribute("height"), r.removeAttribute("width"), r.style.height = r.offsetWidth * u + "px"
                }
                window.addEventListener("resize", t)
            }
        }

        function t(n) {
            var t = 0;
            do isNaN(n.offsetTop) || (t += n.offsetTop), n = n.offsetParent; while (n);
            return t
        }

        function e(n) {
            n.preventDefault();
            var e = n.target.href.split("#")[1],
                r = document.getElementById(e);
            r && smoothScroll(t(r), 800)
        }

        function r() {
            function n(n) {
                var e = t[n];
                e.getElementsByTagName("img")[0].onload = function() {
                    e.style.width = e.getElementsByTagName("img")[0].offsetWidth + "px"
                }
            }
            var t = document.getElementsByClassName("caption");
            if (t.length)
                for (var e = 0; e < t.length; e++) n(e)
        }

        function u() {
            r(), n();
            var t = $(".scroll-down");
            t && t.addEventListener("click", e)
        }
        var $ = function() {
            var n = {};
            return function(t) {
                var e = n[t];
                return e || (e = document.querySelector(t), n[t] = e), e
            }
        }();
        u()
    }();
//# sourceMappingURL=./moran-min.js.map