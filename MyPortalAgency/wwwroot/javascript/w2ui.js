﻿/* w2ui 1.5.x (nightly) (c) http://w2ui.com, vitmalina@gmail.com */
var w2ui = w2ui || {},
    w2obj = w2obj || {},
    w2utils = function (a) {
        function b(a) {
            var b = /^[0-1]+$/;
            return b.test(a)
        }

        function c(a) {
            var b = /^[-+]?[0-9]+$/;
            return b.test(a)
        }

        function d(a) {
            return "string" == typeof a && (a = a.replace(/\s+/g, "").replace(w2utils.settings.groupSymbol, "").replace(w2utils.settings.decimalSymbol, ".")), ("number" == typeof a || "string" == typeof a && "" !== a) && !isNaN(Number(a))
        }

        function e(a) {
            var b = w2utils.settings,
                c = new RegExp("^" + (b.currencyPrefix ? "\\" + b.currencyPrefix + "?" : "") + "[-+]?" + (b.currencyPrefix ? "\\" + b.currencyPrefix + "?" : "") + "[0-9]*[\\" + b.decimalSymbol + "]?[0-9]+" + (b.currencySuffix ? "\\" + b.currencySuffix + "?" : "") + "$", "i");
            return "string" == typeof a && (a = a.replace(new RegExp(b.groupSymbol, "g"), "")), "object" != typeof a && "" !== a && c.test(a)
        }

        function f(a) {
            var b = /^(0x)?[0-9a-fA-F]+$/;
            return b.test(a)
        }

        function g(a) {
            var b = /^[a-zA-Z0-9_-]+$/;
            return b.test(a)
        }

        function h(a) {
            var b = /^[a-zA-Z0-9._%\-+]+@[а-яА-Яa-zA-Z0-9.-]+\.[а-яА-Яa-zA-Z]+$/;
            return b.test(a)
        }

        function i(a) {
            var b = new RegExp("^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$");
            return b.test(a)
        }

        function j(a, b, d) {
            if (!a) return !1;
            var e, f, g, h = "Invalid Date";
            if (null == b && (b = w2utils.settings.dateFormat), "function" == typeof a.getFullYear) g = a.getFullYear(), e = a.getMonth() + 1, f = a.getDate();
            else if (parseInt(a) == a && parseInt(a) > 0) a = new Date(parseInt(a)), g = a.getFullYear(), e = a.getMonth() + 1, f = a.getDate();
            else {
                if ("Invalid Date" != String(new Date(a))) return a = new Date(a), d !== !0 || a;
                if (a = String(a), new RegExp("mon", "ig").test(b)) {
                    b = b.replace(/month/gi, "m").replace(/mon/gi, "m").replace(/dd/gi, "d").replace(/[, ]/gi, "/").replace(/\/\//g, "/").toLowerCase(), a = a.replace(/[, ]/gi, "/").replace(/\/\//g, "/").toLowerCase();
                    for (var i = 0, j = w2utils.settings.fullmonths.length; i < j; i++) {
                        var k = w2utils.settings.fullmonths[i];
                        a = a.replace(new RegExp(k, "ig"), parseInt(i) + 1).replace(new RegExp(k.substr(0, 3), "ig"), parseInt(i) + 1)
                    }
                }
                var l = a.replace(/-/g, "/").replace(/\./g, "/").toLowerCase().split("/"),
                    m = b.replace(/-/g, "/").replace(/\./g, "/").toLowerCase();
                "mm/dd/yyyy" === m && (e = l[0], f = l[1], g = l[2]), "m/d/yyyy" === m && (e = l[0], f = l[1], g = l[2]), "dd/mm/yyyy" === m && (e = l[1], f = l[0], g = l[2]), "d/m/yyyy" === m && (e = l[1], f = l[0], g = l[2]), "yyyy/dd/mm" === m && (e = l[2], f = l[1], g = l[0]), "yyyy/d/m" === m && (e = l[2], f = l[1], g = l[0]), "yyyy/mm/dd" === m && (e = l[1], f = l[2], g = l[0]), "yyyy/m/d" === m && (e = l[1], f = l[2], g = l[0]), "mm/dd/yy" === m && (e = l[0], f = l[1], g = l[2]), "m/d/yy" === m && (e = l[0], f = l[1], g = parseInt(l[2]) + 1900), "dd/mm/yy" === m && (e = l[1], f = l[0], g = parseInt(l[2]) + 1900), "d/m/yy" === m && (e = l[1], f = l[0], g = parseInt(l[2]) + 1900), "yy/dd/mm" === m && (e = l[2], f = l[1], g = parseInt(l[0]) + 1900), "yy/d/m" === m && (e = l[2], f = l[1], g = parseInt(l[0]) + 1900), "yy/mm/dd" === m && (e = l[1], f = l[2], g = parseInt(l[0]) + 1900), "yy/m/d" === m && (e = l[1], f = l[2], g = parseInt(l[0]) + 1900)
            }
            return !!c(g) && (!!c(e) && (!!c(f) && (g = +g, e = +e, f = +f, h = new Date(g, e - 1, f), null != e && ("Invalid Date" !== String(h) && (h.getMonth() + 1 === e && h.getDate() === f && h.getFullYear() === g && (d !== !0 || h))))))
        }

        function k(b, c) {
            if (null == b) return !1;
            var d, e, f;
            b = String(b), b = b.toUpperCase(), e = b.indexOf("AM") >= 0, f = b.indexOf("PM") >= 0;
            var g = f || e;
            d = g ? 12 : 24, b = b.replace("AM", "").replace("PM", ""), b = a.trim(b);
            var h = b.split(":"),
                i = parseInt(h[0] || 0),
                j = parseInt(h[1] || 0),
                k = parseInt(h[2] || 0);
            return !!(g && 1 === h.length || 2 === h.length || 3 === h.length) && (!("" === h[0] || i < 0 || i > d || !this.isInt(h[0]) || h[0].length > 2) && (!(h.length > 1 && ("" === h[1] || j < 0 || j > 59 || !this.isInt(h[1]) || 2 !== h[1].length)) && (!(h.length > 2 && ("" === h[2] || k < 0 || k > 59 || !this.isInt(h[2]) || 2 !== h[2].length)) && (!!(g || d !== i || 0 === j && 0 === k) && ((!g || 1 !== h.length || 0 !== i) && (c !== !0 || (f && 12 !== i && (i += 12), e && 12 === i && (i += 12), {
                hours: i,
                minutes: j,
                seconds: k
            })))))))
        }

        function l(a, b, c) {
            null == b && (b = w2utils.settings.datetimeFormat);
            var d = b.split("|");
            if ("function" == typeof a.getFullYear) return c !== !0 || a;
            if (parseInt(a) === a && parseInt(a) >= 0) return a = new Date(parseInt(a)), c !== !0 || a;
            if (parseInt(a) === a && parseInt(a) < 0) return !1;
            if ("Invalid Date" != String(new Date(a))) return a = new Date(a), c !== !0 || a;
            var e = String(a).indexOf(" "),
                f = [a.substr(0, e), a.substr(e).trim()];
            d[0] = d[0].trim(), d[1] && (d[1] = d[1].trim());
            var g = w2utils.isDate(f[0], d[0], !0),
                h = w2utils.isTime(f[1], !0);
            return g !== !1 && h !== !1 && (c !== !0 || (g.setHours(h.hours), g.setMinutes(h.minutes), g.setSeconds(h.seconds), g))
        }

        function m(a) {
            var b;
            if ("" === a || null == a) return "";
            if (b = "function" == typeof a.getFullYear ? a : parseInt(a) == a && parseInt(a) > 0 ? new Date(parseInt(a)) : new Date(a), "Invalid Date" === String(b)) return "";
            var c = new Date,
                d = (c.getTime() - b.getTime()) / 1e3,
                e = "",
                f = "";
            return d < 0 ? (e = 0, f = "sec") : d < 60 ? (e = Math.floor(d), f = "sec", d < 0 && (e = 0, f = "sec")) : d < 3600 ? (e = Math.floor(d / 60), f = "min") : d < 86400 ? (e = Math.floor(d / 60 / 60), f = "hour") : d < 2592e3 ? (e = Math.floor(d / 24 / 60 / 60), f = "day") : d < 31536e3 ? (e = Math.floor(d / 30 / 24 / 60 / 60 * 10) / 10, f = "month") : d < 126144e3 ? (e = Math.floor(d / 365 / 24 / 60 / 60 * 10) / 10, f = "year") : d >= 126144e3 && (e = Math.floor(d / 365.25 / 24 / 60 / 60 * 10) / 10, f = "year"), e + " " + f + (e > 1 ? "s" : "")
        }

        function n(a) {
            var b = "";
            return b = a < 1e3 ? "< 1 sec" : a < 6e4 ? Math.floor(a / 1e3) + " secs" : a < 36e5 ? Math.floor(a / 6e4) + " mins" : a < 864e5 ? Math.floor(a / 36e5 * 10) / 10 + " hours" : a < 2628e6 ? Math.floor(a / 864e5 * 10) / 10 + " days" : a < 31536e6 ? Math.floor(a / 2628e6 * 10) / 10 + " months" : Math.floor(a / 31536e5) / 10 + " years"
        }

        function o(a) {
            if ("" === a || null == a || "object" == typeof a && !a.getMonth) return "";
            var b = new Date(a);
            if (w2utils.isInt(a) && (b = new Date(Number(a))), "Invalid Date" === String(b)) return "";
            var c = w2utils.settings.shortmonths,
                d = new Date,
                e = new Date;
            e.setTime(e.getTime() - 864e5);
            var f = c[b.getMonth()] + " " + b.getDate() + ", " + b.getFullYear(),
                g = c[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear(),
                h = c[e.getMonth()] + " " + e.getDate() + ", " + e.getFullYear(),
                i = b.getHours() - (b.getHours() > 12 ? 12 : 0) + ":" + (b.getMinutes() < 10 ? "0" : "") + b.getMinutes() + " " + (b.getHours() >= 12 ? "pm" : "am"),
                j = b.getHours() - (b.getHours() > 12 ? 12 : 0) + ":" + (b.getMinutes() < 10 ? "0" : "") + b.getMinutes() + ":" + (b.getSeconds() < 10 ? "0" : "") + b.getSeconds() + " " + (b.getHours() >= 12 ? "pm" : "am"),
                k = f;
            return f === g && (k = i), f === h && (k = w2utils.lang("Yesterday")), '<span title="' + f + " " + j + '">' + k + "</span>"
        }

        function p(a) {
            if (!w2utils.isFloat(a) || "" === a) return "";
            if (a = parseFloat(a), 0 === a) return 0;
            var b = ["Bt", "KB", "MB", "GB", "TB", "PB", "EB", "ZB"],
                c = parseInt(Math.floor(Math.log(a) / Math.log(1024)));
            return (Math.floor(a / Math.pow(1024, c) * 10) / 10).toFixed(0 === c ? 0 : 1) + " " + (b[c] || "??")
        }

        function q(a, b, c) {
            if (null == a || "" === a || "object" == typeof a) return "";
            var d = {
                minimumFractionDigits: b,
                maximumFractionDigits: b,
                useGrouping: c
            };
            return (null == b || b < 0) && (d.minimumFractionDigits = 0, d.maximumFractionDigits = 20), parseFloat(a).toLocaleString(w2utils.settings.locale, d)
        }

        function r(a, b) {
            if (b || (b = this.settings.dateFormat), "" === a || null == a || "object" == typeof a && !a.getMonth) return "";
            var c = new Date(a);
            if (w2utils.isInt(a) && (c = new Date(Number(a))), "Invalid Date" === String(c)) return "";
            var d = c.getFullYear(),
                e = c.getMonth(),
                f = c.getDate();
            return b.toLowerCase().replace("month", w2utils.settings.fullmonths[e]).replace("mon", w2utils.settings.shortmonths[e]).replace(/yyyy/g, d).replace(/yyy/g, d).replace(/yy/g, d > 2e3 ? 100 + parseInt(String(d).substr(2)) : String(d).substr(2)).replace(/(^|[^a-z$])y/g, "$1" + d).replace(/mm/g, (e + 1 < 10 ? "0" : "") + (e + 1)).replace(/dd/g, (f < 10 ? "0" : "") + f).replace(/th/g, 1 == f ? "st" : "th").replace(/th/g, 2 == f ? "nd" : "th").replace(/th/g, 3 == f ? "rd" : "th").replace(/(^|[^a-z$])m/g, "$1" + (e + 1)).replace(/(^|[^a-z$])d/g, "$1" + f)
        }

        function s(a, b) {
            w2utils.settings.shortmonths, w2utils.settings.fullmonths;
            if (b || (b = this.settings.timeFormat), "" === a || null == a || "object" == typeof a && !a.getMonth) return "";
            var c = new Date(a);
            if (w2utils.isInt(a) && (c = new Date(Number(a))), w2utils.isTime(a)) {
                var d = w2utils.isTime(a, !0);
                c = new Date, c.setHours(d.hours), c.setMinutes(d.minutes)
            }
            if ("Invalid Date" === String(c)) return "";
            var e = "am",
                f = c.getHours(),
                g = c.getHours(),
                h = c.getMinutes(),
                i = c.getSeconds();
            return h < 10 && (h = "0" + h), i < 10 && (i = "0" + i), b.indexOf("am") === -1 && b.indexOf("pm") === -1 || (f >= 12 && (e = "pm"), f > 12 && (f -= 12), 0 === f && (f = 12)), b.toLowerCase().replace("am", e).replace("pm", e).replace("hhh", f < 10 ? "0" + f : f).replace("hh24", g < 10 ? "0" + g : g).replace("h24", g).replace("hh", f).replace("mm", h).replace("mi", h).replace("ss", i).replace(/(^|[^a-z$])h/g, "$1" + f).replace(/(^|[^a-z$])m/g, "$1" + h).replace(/(^|[^a-z$])s/g, "$1" + i)
        }

        function t(a, b) {
            var c;
            return "" === a || null == a || "object" == typeof a && !a.getMonth ? "" : ("string" != typeof b ? c = [this.settings.dateFormat, this.settings.timeFormat] : (c = b.split("|"), c[0] = c[0].trim(), c[1] = c.length > 1 ? c[1].trim() : this.settings.timeFormat), "h12" === c[1] && (c[1] = "h:m pm"), "h24" === c[1] && (c[1] = "h24:m"), this.formatDate(a, c[0]) + " " + this.formatTime(a, c[1]))
        }

        function u(b) {
            if (null == b) return b;
            switch (typeof b) {
                case "number":
                    break;
                case "string":
                    b = String(b).replace(/(<([^>]+)>)/gi, "");
                    break;
                case "object":
                    if (Array.isArray(b)) {
                        b = a.extend(!0, [], b);
                        for (var c = 0; c < b.length; c++) b[c] = this.stripTags(b[c])
                    } else {
                        b = a.extend(!0, {}, b);
                        for (var c in b) b[c] = this.stripTags(b[c])
                    }
            }
            return b
        }

        function v(b) {
            if (null == b) return b;
            switch (typeof b) {
                case "number":
                    break;
                case "string":
                    b = String(b).replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
                    break;
                case "object":
                    if (Array.isArray(b)) {
                        b = a.extend(!0, [], b);
                        for (var c = 0; c < b.length; c++) b[c] = this.encodeTags(b[c])
                    } else {
                        b = a.extend(!0, {}, b);
                        for (var c in b) b[c] = this.encodeTags(b[c])
                    }
            }
            return b
        }

        function w(b) {
            if (null == b) return b;
            switch (typeof b) {
                case "number":
                    break;
                case "string":
                    b = String(b).replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"').replace(/&amp;/g, "&");
                    break;
                case "object":
                    if (Array.isArray(b)) {
                        b = a.extend(!0, [], b);
                        for (var c = 0; c < b.length; c++) b[c] = this.decodeTags(b[c])
                    } else {
                        b = a.extend(!0, {}, b);
                        for (var c in b) b[c] = this.decodeTags(b[c])
                    }
            }
            return b
        }

        function x(a) {
            return "" === a || null == a ? "" : String(a).replace(/([;&,\.\+\*\~'`:"\!\^#$%@\[\]\(\)=<>\|\/? {}\\])/g, "\\$1")
        }

        function y(a) {
            function b(a) {
                a = String(a).replace(/\r\n/g, "\n");
                for (var b = "", c = 0; c < a.length; c++) {
                    var d = a.charCodeAt(c);
                    d < 128 ? b += String.fromCharCode(d) : d > 127 && d < 2048 ? (b += String.fromCharCode(d >> 6 | 192), b += String.fromCharCode(63 & d | 128)) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128), b += String.fromCharCode(63 & d | 128))
                }
                return b
            }
            var c, d, e, f, g, h, i, j = "",
                k = 0,
                l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            for (a = b(a); k < a.length;) c = a.charCodeAt(k++), d = a.charCodeAt(k++), e = a.charCodeAt(k++), f = c >> 2, g = (3 & c) << 4 | d >> 4, h = (15 & d) << 2 | e >> 6, i = 63 & e, isNaN(d) ? h = i = 64 : isNaN(e) && (i = 64), j = j + l.charAt(f) + l.charAt(g) + l.charAt(h) + l.charAt(i);
            return j
        }

        function z(a) {
            function b(a) {
                for (var b, c, d = "", e = 0, f = 0; e < a.length;) f = a.charCodeAt(e), f < 128 ? (d += String.fromCharCode(f), e++) : f > 191 && f < 224 ? (b = a.charCodeAt(e + 1), d += String.fromCharCode((31 & f) << 6 | 63 & b), e += 2) : (b = a.charCodeAt(e + 1), c = a.charCodeAt(e + 2), d += String.fromCharCode((15 & f) << 12 | (63 & b) << 6 | 63 & c), e += 3);
                return d
            }
            var c, d, e, f, g, h, i, j = "",
                k = 0,
                l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            for (a = a.replace(/[^A-Za-z0-9\+\/\=]/g, ""); k < a.length;) f = l.indexOf(a.charAt(k++)), g = l.indexOf(a.charAt(k++)), h = l.indexOf(a.charAt(k++)), i = l.indexOf(a.charAt(k++)), c = f << 2 | g >> 4, d = (15 & g) << 4 | h >> 2, e = (3 & h) << 6 | i, j += String.fromCharCode(c), 64 !== h && (j += String.fromCharCode(d)), 64 !== i && (j += String.fromCharCode(e));
            return j = b(j)
        }

        function A(a) {
            function b(a) {
                return d(c(e(a)))
            }

            function c(a) {
                return g(h(f(a), 8 * a.length))
            }

            function d(a) {
                try { } catch (a) {
                    p = 0
                }
                for (var b, c = p ? "0123456789ABCDEF" : "0123456789abcdef", d = "", e = 0; e < a.length; e++) b = a.charCodeAt(e), d += c.charAt(b >>> 4 & 15) + c.charAt(15 & b);
                return d
            }

            function e(a) {
                for (var b, c, d = "", e = -1; ++e < a.length;) b = a.charCodeAt(e), c = e + 1 < a.length ? a.charCodeAt(e + 1) : 0, 55296 <= b && b <= 56319 && 56320 <= c && c <= 57343 && (b = 65536 + ((1023 & b) << 10) + (1023 & c), e++), b <= 127 ? d += String.fromCharCode(b) : b <= 2047 ? d += String.fromCharCode(192 | b >>> 6 & 31, 128 | 63 & b) : b <= 65535 ? d += String.fromCharCode(224 | b >>> 12 & 15, 128 | b >>> 6 & 63, 128 | 63 & b) : b <= 2097151 && (d += String.fromCharCode(240 | b >>> 18 & 7, 128 | b >>> 12 & 63, 128 | b >>> 6 & 63, 128 | 63 & b));
                return d
            }

            function f(a) {
                for (var b = Array(a.length >> 2), c = 0; c < b.length; c++) b[c] = 0;
                for (var c = 0; c < 8 * a.length; c += 8) b[c >> 5] |= (255 & a.charCodeAt(c / 8)) << c % 32;
                return b
            }

            function g(a) {
                for (var b = "", c = 0; c < 32 * a.length; c += 8) b += String.fromCharCode(a[c >> 5] >>> c % 32 & 255);
                return b
            }

            function h(a, b) {
                a[b >> 5] |= 128 << b % 32, a[(b + 64 >>> 9 << 4) + 14] = b;
                for (var c = 1732584193, d = -271733879, e = -1732584194, f = 271733878, g = 0; g < a.length; g += 16) {
                    var h = c,
                        i = d,
                        o = e,
                        p = f;
                    c = j(c, d, e, f, a[g + 0], 7, -680876936), f = j(f, c, d, e, a[g + 1], 12, -389564586), e = j(e, f, c, d, a[g + 2], 17, 606105819), d = j(d, e, f, c, a[g + 3], 22, -1044525330), c = j(c, d, e, f, a[g + 4], 7, -176418897), f = j(f, c, d, e, a[g + 5], 12, 1200080426), e = j(e, f, c, d, a[g + 6], 17, -1473231341), d = j(d, e, f, c, a[g + 7], 22, -45705983), c = j(c, d, e, f, a[g + 8], 7, 1770035416), f = j(f, c, d, e, a[g + 9], 12, -1958414417), e = j(e, f, c, d, a[g + 10], 17, -42063), d = j(d, e, f, c, a[g + 11], 22, -1990404162), c = j(c, d, e, f, a[g + 12], 7, 1804603682), f = j(f, c, d, e, a[g + 13], 12, -40341101), e = j(e, f, c, d, a[g + 14], 17, -1502002290), d = j(d, e, f, c, a[g + 15], 22, 1236535329), c = k(c, d, e, f, a[g + 1], 5, -165796510), f = k(f, c, d, e, a[g + 6], 9, -1069501632), e = k(e, f, c, d, a[g + 11], 14, 643717713), d = k(d, e, f, c, a[g + 0], 20, -373897302), c = k(c, d, e, f, a[g + 5], 5, -701558691), f = k(f, c, d, e, a[g + 10], 9, 38016083), e = k(e, f, c, d, a[g + 15], 14, -660478335), d = k(d, e, f, c, a[g + 4], 20, -405537848), c = k(c, d, e, f, a[g + 9], 5, 568446438), f = k(f, c, d, e, a[g + 14], 9, -1019803690), e = k(e, f, c, d, a[g + 3], 14, -187363961), d = k(d, e, f, c, a[g + 8], 20, 1163531501), c = k(c, d, e, f, a[g + 13], 5, -1444681467), f = k(f, c, d, e, a[g + 2], 9, -51403784), e = k(e, f, c, d, a[g + 7], 14, 1735328473), d = k(d, e, f, c, a[g + 12], 20, -1926607734), c = l(c, d, e, f, a[g + 5], 4, -378558), f = l(f, c, d, e, a[g + 8], 11, -2022574463), e = l(e, f, c, d, a[g + 11], 16, 1839030562), d = l(d, e, f, c, a[g + 14], 23, -35309556), c = l(c, d, e, f, a[g + 1], 4, -1530992060), f = l(f, c, d, e, a[g + 4], 11, 1272893353), e = l(e, f, c, d, a[g + 7], 16, -155497632), d = l(d, e, f, c, a[g + 10], 23, -1094730640), c = l(c, d, e, f, a[g + 13], 4, 681279174), f = l(f, c, d, e, a[g + 0], 11, -358537222), e = l(e, f, c, d, a[g + 3], 16, -722521979), d = l(d, e, f, c, a[g + 6], 23, 76029189), c = l(c, d, e, f, a[g + 9], 4, -640364487), f = l(f, c, d, e, a[g + 12], 11, -421815835), e = l(e, f, c, d, a[g + 15], 16, 530742520), d = l(d, e, f, c, a[g + 2], 23, -995338651), c = m(c, d, e, f, a[g + 0], 6, -198630844), f = m(f, c, d, e, a[g + 7], 10, 1126891415), e = m(e, f, c, d, a[g + 14], 15, -1416354905), d = m(d, e, f, c, a[g + 5], 21, -57434055), c = m(c, d, e, f, a[g + 12], 6, 1700485571), f = m(f, c, d, e, a[g + 3], 10, -1894986606), e = m(e, f, c, d, a[g + 10], 15, -1051523), d = m(d, e, f, c, a[g + 1], 21, -2054922799), c = m(c, d, e, f, a[g + 8], 6, 1873313359), f = m(f, c, d, e, a[g + 15], 10, -30611744), e = m(e, f, c, d, a[g + 6], 15, -1560198380), d = m(d, e, f, c, a[g + 13], 21, 1309151649), c = m(c, d, e, f, a[g + 4], 6, -145523070), f = m(f, c, d, e, a[g + 11], 10, -1120210379), e = m(e, f, c, d, a[g + 2], 15, 718787259), d = m(d, e, f, c, a[g + 9], 21, -343485551), c = n(c, h), d = n(d, i), e = n(e, o), f = n(f, p)
                }
                return Array(c, d, e, f)
            }

            function i(a, b, c, d, e, f) {
                return n(o(n(n(b, a), n(d, f)), e), c)
            }

            function j(a, b, c, d, e, f, g) {
                return i(b & c | ~b & d, a, b, e, f, g)
            }

            function k(a, b, c, d, e, f, g) {
                return i(b & d | c & ~d, a, b, e, f, g)
            }

            function l(a, b, c, d, e, f, g) {
                return i(b ^ c ^ d, a, b, e, f, g)
            }

            function m(a, b, c, d, e, f, g) {
                return i(c ^ (b | ~d), a, b, e, f, g)
            }

            function n(a, b) {
                var c = (65535 & a) + (65535 & b),
                    d = (a >> 16) + (b >> 16) + (c >> 16);
                return d << 16 | 65535 & c
            }

            function o(a, b) {
                return a << b | a >>> 32 - b
            }
            var p = 0;
            return b(a)
        }

        function B(b, c, d, e) {
            var f = a(b).width(),
                g = a(b).height(),
                h = .5;
            if (!b || !c) return void console.log("ERROR: Cannot do transition when one of the divs is null");
            switch (b.parentNode.style.cssText += "perspective: 900px; overflow: hidden;", b.style.cssText += "; position: absolute; z-index: 1019; backface-visibility: hidden", c.style.cssText += "; position: absolute; z-index: 1020; backface-visibility: hidden", d) {
                case "slide-left":
                    b.style.cssText += "overflow: hidden; transform: translate3d(0, 0, 0)", c.style.cssText += "overflow: hidden; transform: translate3d(" + f + "px, 0, 0)", a(c).show(), window.setTimeout(function () {
                        c.style.cssText += "transition: " + h + "s; transform: translate3d(0, 0, 0)", b.style.cssText += "transition: " + h + "s; transform: translate3d(-" + f + "px, 0, 0)"
                    }, 1);
                    break;
                case "slide-right":
                    b.style.cssText += "overflow: hidden; transform: translate3d(0, 0, 0)", c.style.cssText += "overflow: hidden; transform: translate3d(-" + f + "px, 0, 0)", a(c).show(), window.setTimeout(function () {
                        c.style.cssText += "transition: " + h + "s; transform: translate3d(0px, 0, 0)", b.style.cssText += "transition: " + h + "s; transform: translate3d(" + f + "px, 0, 0)"
                    }, 1);
                    break;
                case "slide-down":
                    b.style.cssText += "overflow: hidden; z-index: 1; transform: translate3d(0, 0, 0)", c.style.cssText += "overflow: hidden; z-index: 0; transform: translate3d(0, 0, 0)", a(c).show(), window.setTimeout(function () {
                        c.style.cssText += "transition: " + h + "s; transform: translate3d(0, 0, 0)", b.style.cssText += "transition: " + h + "s; transform: translate3d(0, " + g + "px, 0)"
                    }, 1);
                    break;
                case "slide-up":
                    b.style.cssText += "overflow: hidden; transform: translate3d(0, 0, 0)", c.style.cssText += "overflow: hidden; transform: translate3d(0, " + g + "px, 0)", a(c).show(), window.setTimeout(function () {
                        c.style.cssText += "transition: " + h + "s; transform: translate3d(0, 0, 0)", b.style.cssText += "transition: " + h + "s; transform: translate3d(0, 0, 0)"
                    }, 1);
                    break;
                case "flip-left":
                    b.style.cssText += "overflow: hidden; transform: rotateY(0deg)", c.style.cssText += "overflow: hidden; transform: rotateY(-180deg)", a(c).show(), window.setTimeout(function () {
                        c.style.cssText += "transition: " + h + "s; transform: rotateY(0deg)", b.style.cssText += "transition: " + h + "s; transform: rotateY(180deg)"
                    }, 1);
                    break;
                case "flip-right":
                    b.style.cssText += "overflow: hidden; transform: rotateY(0deg)", c.style.cssText += "overflow: hidden; transform: rotateY(180deg)", a(c).show(), window.setTimeout(function () {
                        c.style.cssText += "transition: " + h + "s; transform: rotateY(0deg)", b.style.cssText += "transition: " + h + "s; transform: rotateY(-180deg)"
                    }, 1);
                    break;
                case "flip-down":
                    b.style.cssText += "overflow: hidden; transform: rotateX(0deg)", c.style.cssText += "overflow: hidden; transform: rotateX(180deg)", a(c).show(), window.setTimeout(function () {
                        c.style.cssText += "transition: " + h + "s; transform: rotateX(0deg)", b.style.cssText += "transition: " + h + "s; transform: rotateX(-180deg)"
                    }, 1);
                    break;
                case "flip-up":
                    b.style.cssText += "overflow: hidden; transform: rotateX(0deg)", c.style.cssText += "overflow: hidden; transform: rotateX(-180deg)", a(c).show(), window.setTimeout(function () {
                        c.style.cssText += "transition: " + h + "s; transform: rotateX(0deg)", b.style.cssText += "transition: " + h + "s; transform: rotateX(180deg)"
                    }, 1);
                    break;
                case "pop-in":
                    b.style.cssText += "overflow: hidden; transform: translate3d(0, 0, 0)", c.style.cssText += "overflow: hidden; transform: translate3d(0, 0, 0); transform: scale(.8); opacity: 0;", a(c).show(), window.setTimeout(function () {
                        c.style.cssText += "transition: " + h + "s; transform: scale(1); opacity: 1;", b.style.cssText += "transition: " + h + "s;"
                    }, 1);
                    break;
                case "pop-out":
                    b.style.cssText += "overflow: hidden; transform: translate3d(0, 0, 0); transform: scale(1); opacity: 1;", c.style.cssText += "overflow: hidden; transform: translate3d(0, 0, 0); opacity: 0;", a(c).show(), window.setTimeout(function () {
                        c.style.cssText += "transition: " + h + "s; opacity: 1;", b.style.cssText += "transition: " + h + "s; transform: scale(1.7); opacity: 0;"
                    }, 1);
                    break;
                default:
                    b.style.cssText += "overflow: hidden; transform: translate3d(0, 0, 0)", c.style.cssText += "overflow: hidden; translate3d(0, 0, 0); opacity: 0;", a(c).show(), window.setTimeout(function () {
                        c.style.cssText += "transition: " + h + "s; opacity: 1;", b.style.cssText += "transition: " + h + "s"
                    }, 1)
            }
            setTimeout(function () {
                "slide-down" === d && (a(b).css("z-index", "1019"), a(c).css("z-index", "1020")), c && a(c).css({
                    opacity: "1"
                }).css(w2utils.cssPrefix({
                    transition: "",
                    transform: ""
                })), b && a(b).css({
                    opacity: "1"
                }).css(w2utils.cssPrefix({
                    transition: "",
                    transform: ""
                })), "function" == typeof e && e()
            }, 1e3 * h)
        }

        function C(b, c, d) {
            var e = {};
            "object" == typeof c ? e = c : (e.msg = c, e.spinner = d), e.msg || 0 === e.msg || (e.msg = ""), w2utils.unlock(b), a(b).prepend('<div class="w2ui-lock"></div><div class="w2ui-lock-msg"></div>');
            var f = a(b).find("lock"),
                g = a(b).find("lock-msg");
            e.msg || g.css({
                "background-color": "transparent",
                border: "0px"
            }), e.spinner === !0 && (e.msg = '<div class="w2ui-spinner" ' + (e.msg ? "" : 'style="width: 35px; height: 35px"') + "></div>" + e.msg), null != e.opacity && f.css("opacity", e.opacity), "function" == typeof f.fadeIn ? (f.fadeIn(200), g.html(e.msg).fadeIn(200)) : (f.show(), g.html(e.msg).show(0))
        }

        function D(b, d) {
            c(d) ? (a(b).find("lock").fadeOut(d), setTimeout(function () {
                a(b).find("lock").remove(), a(b).find("lock-msg").remove()
            }, d)) : (a(b).find("lock").remove(), a(b).find("lock-msg").remove())
        }

        function E(b, c) {
            function d(c, d) {
                if (null == f && (f = d.trigger({
                    phase: "before",
                    type: "open",
                    target: "self"
                }), f.isCancelled === !0)) return l.css("z-index", l.data("old-z-index")), void a(b.box).find("#w2ui-message" + n).remove();
                var e = c.data("prev_focus");
                c.remove(), e && e.length > 0 ? e.focus() : g && g.focus && g.focus(), l.css("z-index", l.data("old-z-index")), d.trigger(a.extend(f, {
                    phase: "after"
                }))
            }
            var e, f, g = this;
            a().w2tag(), c || (c = {
                width: 200,
                height: 100
            }), null == c.on && a.extend(c, w2utils.event), null == c.width && (c.width = 200), null == c.height && (c.height = 100);
            var h = parseInt(a(b.box).width()),
                i = parseInt(a(b.box).height()),
                j = parseInt(a(b.box).find(b.title).css("height") || 0);
            c.width > h && (c.width = h - 10), c.height > i - j && (c.height = i - 10 - j), c.originalWidth = c.width, c.originalHeight = c.height, parseInt(c.width) < 0 && (c.width = h + c.width), parseInt(c.width) < 10 && (c.width = 10), parseInt(c.height) < 0 && (c.height = i + c.height - j), parseInt(c.height) < 10 && (c.height = 10), null == c.hideOnClick && (c.hideOnClick = !1);
            var k = a(b.box).data("options") || {};
            (null == c.width || c.width > k.width - 10) && (c.width = k.width - 10), (null == c.height || c.height > k.height - j - 5) && (c.height = k.height - j - 5), c.originalHeight < 0 && (c.height = i + c.originalHeight - j), c.originalWidth < 0 && (c.width = h + 2 * c.originalWidth);
            var l = a(b.box).find(b.title),
                m = a(b.box).find("messageclosing");
            a(b.box).find("messageclosing").length > 0 && (clearTimeout(e), d(m, m.data("options") || {}));
            var n = a(b.box).find("message").length;
            if ("" === a.trim(c.html) && "" === a.trim(c.body) && "" === a.trim(c.buttons)) {
                if (0 === n) return;
                var o = a(b.box).find("#w2ui-message" + (n - 1)),
                    c = o.data("options") || {};
                if (f = c.trigger({
                    phase: "before",
                    type: "close",
                    target: "self"
                }), f.isCancelled === !0) return;
                o.css(w2utils.cssPrefix({
                    transition: "0.15s",
                    transform: "translateY(-" + c.height + "px)"
                })).addClass("w2ui-closing"), 1 === n ? this.unlock && (b.param ? this.unlock(b.param, 150) : this.unlock(150)) : a(b.box).find("#w2ui-message" + (n - 2)).css("z-index", 1500), e = setTimeout(function () {
                    d(o, c)
                }, 150)
            } else {
                "" === a.trim(c.body) && "" === a.trim(c.buttons) || (c.html = '<div class="w2ui-message-body">' + (c.body || "") + '</div><div class="w2ui-message-buttons">' + (c.buttons || "") + "</div>"), a(b.box).find("message").css("z-index", 1390), l.data("old-z-index", l.css("z-index")), l.css("z-index", 1501), a(b.box).find(b.body).before('<div id="w2ui-message' + n + '" onmousedown="event.stopPropagation();"    class="w2ui-message" style="display: none; z-index: 1500; ' + (0 === l.length ? "top: 0px;" : "top: " + w2utils.getSize(l, "height") + "px;") + (null != c.width ? "width: " + c.width + "px; left: " + (h - c.width) / 2 + "px;" : "left: 10px; right: 10px;") + (null != c.height ? "height: " + c.height + "px;" : "bottom: 6px;") + w2utils.cssPrefix("transition", ".3s", !0) + '"' + (c.hideOnClick === !0 ? b.param ? 'onclick="' + b.path + ".message('" + b.param + "');\"" : 'onclick="' + b.path + '.message();"' : "") + "></div>"), a(b.box).find("#w2ui-message" + n).data("options", c).data("prev_focus", a(":focus"));
                var p = a(b.box).find("#w2ui-message" + n).css("display");
                if (a(b.box).find("#w2ui-message" + n).css(w2utils.cssPrefix({
                    transform: "none" === p ? "translateY(-" + c.height + "px)" : "translateY(0px)"
                })), "none" === p) {
                    if (a(b.box).find("#w2ui-message" + n).show().html(c.html), c.box = a(b.box).find("#w2ui-message" + n), f = c.trigger({
                        phase: "before",
                        type: "open",
                        target: "self"
                    }), f.isCancelled === !0) return l.css("z-index", l.data("old-z-index")), void a(b.box).find("#w2ui-message" + n).remove();
                    setTimeout(function () {
                        a(b.box).find("#w2ui-message" + n).css(w2utils.cssPrefix({
                            transform: "none" === p ? "translateY(0px)" : "translateY(-" + c.height + "px)"
                        }))
                    }, 1), 0 === n && this.lock && (b.param ? this.lock(b.param) : this.lock()), setTimeout(function () {
                        a(b.box).find("#w2ui-message" + n).css(w2utils.cssPrefix({
                            transition: "0s"
                        })), c.trigger(a.extend(f, {
                            phase: "after"
                        }))
                    }, 350)
                }
            }
        }

        function F(b, c) {
            var d = a(b),
                e = {
                    left: parseInt(d.css("border-left-width")) || 0,
                    right: parseInt(d.css("border-right-width")) || 0,
                    top: parseInt(d.css("border-top-width")) || 0,
                    bottom: parseInt(d.css("border-bottom-width")) || 0
                },
                f = {
                    left: parseInt(d.css("margin-left")) || 0,
                    right: parseInt(d.css("margin-right")) || 0,
                    top: parseInt(d.css("margin-top")) || 0,
                    bottom: parseInt(d.css("margin-bottom")) || 0
                },
                g = {
                    left: parseInt(d.css("padding-left")) || 0,
                    right: parseInt(d.css("padding-right")) || 0,
                    top: parseInt(d.css("padding-top")) || 0,
                    bottom: parseInt(d.css("padding-bottom")) || 0
                };
            switch (c) {
                case "top":
                    return e.top + f.top + g.top;
                case "bottom":
                    return e.bottom + f.bottom + g.bottom;
                case "left":
                    return e.left + f.left + g.left;
                case "right":
                    return e.right + f.right + g.right;
                case "width":
                    return e.left + e.right + f.left + f.right + g.left + g.right + parseInt(d.width());
                case "height":
                    return e.top + e.bottom + f.top + f.bottom + g.top + g.bottom + parseInt(d.height());
                case "+width":
                    return e.left + e.right + f.left + f.right + g.left + g.right;
                case "+height":
                    return e.top + e.bottom + f.top + f.bottom + g.top + g.bottom
            }
            return 0
        }

        function G(b, c) {
            var d, e = '<div id="_tmp_width" style="position: absolute; top: -900px;' + (c || "") + '">' + v(b) + "</div>";
            return a("body").append(e), d = a("#_tmp_width").width(), a("#_tmp_width").remove(), d
        }

        function H(a) {
            var b = this.settings.phrases[a];
            return null == b ? a : b
        }

        function I(b, c) {
            return b || (b = "en-us"), "string" != typeof b ? void (w2utils.settings = a.extend(!0, w2utils.settings, b)) : (5 === b.length && (b = "locale/" + b + ".json"), w2utils.settings.phrases = {}, void a.ajax({
                url: b,
                type: "GET",
                dataType: "JSON",
                success: function (b, d, e) {
                    w2utils.settings = a.extend(!0, w2utils.settings, b), "function" == typeof c && c()
                },
                error: function (a, c, d) {
                    console.log("ERROR: Cannot load locale " + b)
                }
            }))
        }

        function J() {
            if (V.scrollBarSize) return V.scrollBarSize;
            var b = '<div id="_scrollbar_width" style="position: absolute; top: -300px; width: 100px; height: 100px; overflow-y: scroll;">    <div style="height: 120px">1</div></div>';
            return a("body").append(b), V.scrollBarSize = 100 - a("#_scrollbar_width > div").width(), a("#_scrollbar_width").remove(), String(navigator.userAgent).indexOf("MSIE") >= 0 && (V.scrollBarSize = V.scrollBarSize / 2), V.scrollBarSize
        }

        function K(a, b) {
            return a && null != a.name ? null != w2ui[a.name] ? (console.log('ERROR: The parameter "name" is not unique. There are other objects already created with the same name (obj: ' + a.name + ")."), !1) : !!w2utils.isAlphaNumeric(a.name) || (console.log('ERROR: The parameter "name" has to be alpha-numeric (a-z, 0-9, dash and underscore). '), !1) : (console.log('ERROR: The parameter "name" is required but not supplied in $().' + b + "()."), !1)
        }

        function L(b, c, d, e) {
            a.isArray(c) || (c = [c]);
            for (var f = 0; f < c.length; f++)
                if (c[f].id === b) return console.log('ERROR: The parameter "id=' + b + '" is not unique within the current ' + d + ". (obj: " + e + ")"), !1;
            return !0
        }

        function M(a) {
            var b = [],
                c = a.replace(/\/\(/g, "(?:/").replace(/\+/g, "__plus__").replace(/(\/)?(\.)?:(\w+)(?:(\(.*?\)))?(\?)?/g, function (a, c, d, e, f, g) {
                    return b.push({
                        name: e,
                        optional: !!g
                    }), c = c || "", "" + (g ? "" : c) + "(?:" + (g ? c : "") + (d || "") + (f || d && "([^/.]+?)" || "([^/]+?)") + ")" + (g || "")
                }).replace(/([\/.])/g, "\\$1").replace(/__plus__/g, "(.+)").replace(/\*/g, "(.*)");
            return {
                path: new RegExp("^" + c + "$", "i"),
                keys: b
            }
        }

        function N(b, c, d) {
            var e = {},
                f = {},
                g = "";
            a.isPlainObject(b) ? (e = b, c === !0 && (d = !0)) : e[b] = c;
            for (var h in e) f[h] = e[h], f["-webkit-" + h] = e[h], f["-moz-" + h] = e[h].replace("-webkit-", "-moz-"), f["-ms-" + h] = e[h].replace("-webkit-", "-ms-"), f["-o-" + h] = e[h].replace("-webkit-", "-o-");
            if (d === !0)
                for (var h in f) g += h + ": " + f[h] + "; ";
            else g = f;
            return g
        }

        function O(a) {
            if (null == a) return null;
            var b, c = 0,
                d = a.ownerDocument || a.document,
                e = d.defaultView || d.parentWindow;
            if (a.tagName && "INPUT" === a.tagName.toUpperCase() && a.selectionStart) c = a.selectionStart;
            else if (e.getSelection) {
                if (b = e.getSelection(), b.rangeCount > 0) {
                    var f = b.getRangeAt(0),
                        g = f.cloneRange();
                    g.selectNodeContents(a), g.setEnd(f.endContainer, f.endOffset), c = g.toString().length
                }
            } else if ((b = d.selection) && "Control" !== b.type) {
                var h = b.createRange(),
                    i = d.body.createTextRange();
                i.moveToElementText(a), i.setEndPoint("EndToEnd", h), c = i.text.length
            }
            return c
        }

        function P(b, c, d) {
            var e, f = document.createRange(),
                g = window.getSelection();
            if (null != b) {
                for (var h = 0; h < b.childNodes.length; h++) {
                    var i = a(b.childNodes[h]).text();
                    if (b.childNodes[h].tagName && (i = a(b.childNodes[h]).html(), i = i.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&nbsp;/g, " ")), c <= i.length) {
                        e = b.childNodes[h], e.childNodes && e.childNodes.length > 0 && (e = e.childNodes[0]), e.childNodes && e.childNodes.length > 0 && (e = e.childNodes[0]);
                        break
                    }
                    c -= i.length
                }
                null != e && (c > e.length && (c = e.length), f.setStart(e, c), d ? f.setEnd(e, d) : f.collapse(!0), g.removeAllRanges(), g.addRange(f))
            }
        }

        function Q() {
            var a = "w2ui_test";
            try {
                return localStorage.setItem(a, a), localStorage.removeItem(a), !0
            } catch (a) {
                return !1
            }
        }

        function R(a) {
            if ("string" != typeof a) return null;
            a = a.trim().toUpperCase(), "#" === a[0] && (a = a.substr(1));
            var b = {};
            if (3 === a.length) b = {
                r: parseInt(a[0] + a[0], 16),
                g: parseInt(a[1] + a[1], 16),
                b: parseInt(a[2] + a[2], 16),
                a: 1
            };
            else if (6 === a.length) b = {
                r: parseInt(a.substr(0, 2), 16),
                g: parseInt(a.substr(2, 2), 16),
                b: parseInt(a.substr(4, 2), 16),
                a: 1
            };
            else if (a.length > 4 && "RGB(" === a.substr(0, 4)) {
                var c = a.replace("RGB", "").replace(/\(/g, "").replace(/\)/g, "").split(",");
                b = {
                    r: parseInt(c[0], 10),
                    g: parseInt(c[1], 10),
                    b: parseInt(c[2], 10),
                    a: 1
                }
            } else {
                if (!(a.length > 5 && "RGBA(" === a.substr(0, 5))) return null;
                var c = a.replace("RGBA", "").replace(/\(/g, "").replace(/\)/g, "").split(",");
                b = {
                    r: parseInt(c[0], 10),
                    g: parseInt(c[1], 10),
                    b: parseInt(c[2], 10),
                    a: parseFloat(c[3])
                }
            }
            return b
        }

        function S(a, b, c, d) {
            var e, f, g, h, i, j, k, l;
            switch (1 === arguments.length && (b = a.s, c = a.v, d = a.a, a = a.h), a /= 360, b /= 100, c /= 100, h = Math.floor(6 * a), i = 6 * a - h, j = c * (1 - b), k = c * (1 - i * b), l = c * (1 - (1 - i) * b), h % 6) {
                case 0:
                    e = c, f = l, g = j;
                    break;
                case 1:
                    e = k, f = c, g = j;
                    break;
                case 2:
                    e = j, f = c, g = l;
                    break;
                case 3:
                    e = j, f = k, g = c;
                    break;
                case 4:
                    e = l, f = j, g = c;
                    break;
                case 5:
                    e = c, f = j, g = k
            }
            return {
                r: Math.round(255 * e),
                g: Math.round(255 * f),
                b: Math.round(255 * g),
                a: null != d ? d : 1
            }
        }

        function T(a, b, c, d) {
            1 === arguments.length && (b = a.g, c = a.b, d = a.a, a = a.r);
            var e, f = Math.max(a, b, c),
                g = Math.min(a, b, c),
                h = f - g,
                i = 0 === f ? 0 : h / f,
                j = f / 255;
            switch (f) {
                case g:
                    e = 0;
                    break;
                case a:
                    e = b - c + h * (b < c ? 6 : 0), e /= 6 * h;
                    break;
                case b:
                    e = c - a + 2 * h, e /= 6 * h;
                    break;
                case c:
                    e = a - b + 4 * h, e /= 6 * h
            }
            return {
                h: Math.round(360 * e),
                s: Math.round(100 * i),
                v: Math.round(100 * j),
                a: null != d ? d : 1
            }
        }

        function U(a, b) {
            function c(a, b, e) {
                if (e) {
                    for (d = b; e = c(a, d), e < 76 && e > 65;)++d;
                    return +a.slice(b - 1, d)
                }
                return e = i && i.indexOf(a.charAt(b)), e > -1 ? e + 76 : (e = a.charCodeAt(b) || 0, e < 45 || e > 127 ? e : e < 46 ? 65 : e < 48 ? e - 1 : e < 58 ? e + 18 : e < 65 ? e - 11 : e < 91 ? e + 11 : e < 97 ? e - 37 : e < 123 ? e + 5 : e - 63)
            }
            var d, e, f = 1,
                g = 0,
                h = 0,
                i = String.alphabet;
            if ((a += "") != (b += ""))
                for (; f;)
                    if (e = c(a, g++), f = c(b, h++), e < 76 && f < 76 && e > 66 && f > 66 && (e = c(a, g, g), f = c(b, h, g = d), h = d), e != f) return e < f ? -1 : 1;
            return 0
        }
        var V = {},
            W = {
                version: "1.5.x",
                settings: {
                    locale: "en-us",
                    dateFormat: "m/d/yyyy",
                    timeFormat: "hh:mi pm",
                    datetimeFormat: "m/d/yyyy|hh:mi pm",
                    currencyPrefix: "$",
                    currencySuffix: "",
                    currencyPrecision: 2,
                    groupSymbol: ",",
                    decimalSymbol: ".",
                    shortmonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    fullmonths: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    shortdays: ["M", "T", "W", "T", "F", "S", "S"],
                    fulldays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    weekStarts: "M",
                    dataType: "HTTPJSON",
                    phrases: {},
                    dateStartYear: 1950,
                    dateEndYear: 2020,
                    macButtonOrder: !1
                },
                isBin: b,
                isInt: c,
                isFloat: d,
                isMoney: e,
                isHex: f,
                isAlphaNumeric: g,
                isEmail: h,
                isIpAddress: i,
                isDate: j,
                isTime: k,
                isDateTime: l,
                age: m,
                interval: n,
                date: o,
                formatSize: p,
                formatNumber: q,
                formatDate: r,
                formatTime: s,
                formatDateTime: t,
                stripTags: u,
                encodeTags: v,
                decodeTags: w,
                escapeId: x,
                base64encode: y,
                base64decode: z,
                md5: A,
                transition: B,
                lock: C,
                unlock: D,
                message: E,
                naturalCompare: U,
                lang: H,
                locale: I,
                getSize: F,
                getStrWidth: G,
                scrollBarSize: J,
                checkName: K,
                checkUniqueId: L,
                parseRoute: M,
                cssPrefix: N,
                parseColor: R,
                hsv2rgb: S,
                rgb2hsv: T,
                getCursorPosition: O,
                setCursorPosition: P,
                testLocalStorage: Q,
                hasLocalStorage: Q(),
                isIOS: navigator.userAgent.toLowerCase().indexOf("iphone") !== -1 || navigator.userAgent.toLowerCase().indexOf("ipod") !== -1 || navigator.userAgent.toLowerCase().indexOf("ipad") !== -1 || navigator.userAgent.toLowerCase().indexOf("mobile") !== -1 || navigator.userAgent.toLowerCase().indexOf("android") !== -1,
                isIE: navigator.userAgent.toLowerCase().indexOf("msie") !== -1 || navigator.userAgent.toLowerCase().indexOf("trident") !== -1
            };
        return W
    }(jQuery);
w2utils.formatters = {
    number: function (a, b) {
        return parseInt(b) > 20 && (b = 20), parseInt(b) < 0 && (b = 0), null == a || "" === a ? "" : w2utils.formatNumber(parseFloat(a), b, !0)
    },
    float: function (a, b) {
        return w2utils.formatters.number(a, b)
    },
    int: function (a, b) {
        return w2utils.formatters.number(a, 0)
    },
    money: function (a, b) {
        if (null == a || "" === a) return "";
        var c = w2utils.formatNumber(Number(a), w2utils.settings.currencyPrecision || 2);
        return (w2utils.settings.currencyPrefix || "") + c + (w2utils.settings.currencySuffix || "")
    },
    currency: function (a, b) {
        return w2utils.formatters.money(a, b)
    },
    percent: function (a, b) {
        return null == a || "" === a ? "" : w2utils.formatNumber(a, b || 1) + "%"
    },
    size: function (a, b) {
        return null == a || "" === a ? "" : w2utils.formatSize(parseInt(a))
    },
    date: function (a, b) {
        if ("" === b && (b = w2utils.settings.dateFormat), null == a || 0 === a || "" === a) return "";
        var c = w2utils.isDateTime(a, b, !0);
        return c === !1 && (c = w2utils.isDate(a, b, !0)), '<span title="' + c + '">' + w2utils.formatDate(c, b) + "</span>"
    },
    datetime: function (a, b) {
        if ("" === b && (b = w2utils.settings.datetimeFormat), null == a || 0 === a || "" === a) return "";
        var c = w2utils.isDateTime(a, b, !0);
        return c === !1 && (c = w2utils.isDate(a, b, !0)), '<span title="' + c + '">' + w2utils.formatDateTime(c, b) + "</span>"
    },
    time: function (a, b) {
        if ("" === b && (b = w2utils.settings.timeFormat), "h12" === b && (b = "hh:mi pm"), "h24" === b && (b = "h24:mi"), null == a || 0 === a || "" === a) return "";
        var c = w2utils.isDateTime(a, b, !0);
        return c === !1 && (c = w2utils.isDate(a, b, !0)), '<span title="' + c + '">' + w2utils.formatTime(a, b) + "</span>"
    },
    timestamp: function (a, b) {
        if ("" === b && (b = w2utils.settings.datetimeFormat), null == a || 0 === a || "" === a) return "";
        var c = w2utils.isDateTime(a, b, !0);
        return c === !1 && (c = w2utils.isDate(a, b, !0)), c.toString ? c.toString() : ""
    },
    gmt: function (a, b) {
        if ("" === b && (b = w2utils.settings.datetimeFormat), null == a || 0 === a || "" === a) return "";
        var c = w2utils.isDateTime(a, b, !0);
        return c === !1 && (c = w2utils.isDate(a, b, !0)), c.toUTCString ? c.toUTCString() : ""
    },
    age: function (a, b) {
        if (null == a || 0 === a || "" === a) return "";
        var c = w2utils.isDateTime(a, null, !0);
        return c === !1 && (c = w2utils.isDate(a, null, !0)), '<span title="' + c + '">' + w2utils.age(a) + (b ? " " + b : "") + "</span>"
    },
    interval: function (a, b) {
        return null == a || 0 === a || "" === a ? "" : w2utils.interval(a) + (b ? " " + b : "")
    },
    toggle: function (a, b) {
        return a ? "Yes" : ""
    },
    password: function (a, b) {
        for (var c = "", d = 0; d < a.length; d++) c += "*";
        return c
    }
}, w2utils.event = {
    on: function (a, b) {
        var c, d = jQuery;
        if ("string" == typeof a && a.indexOf(".") !== -1) {
            var e = a.split(".");
            a = e[0], c = e[1]
        }
        if ("string" == typeof a && a.indexOf(":") !== -1) {
            var e = a.split(":");
            ["complete", "done"].indexOf(a[1]) !== -1 && (a[1] = "after"), a = {
                type: e[0],
                execute: e[1]
            }
        }
        return d.isPlainObject(a) || (a = {
            type: a,
            scope: c
        }), a = d.extend({
            type: null,
            execute: "before",
            target: null,
            onComplete: null
        }, a), a.type ? b ? (d.isArray(this.handlers) || (this.handlers = []), void this.handlers.push({
            edata: a,
            handler: b
        })) : void console.log("ERROR: You must specify event handler function when calling .on() method of " + this.name) : void console.log("ERROR: You must specify event type when calling .on() method of " + this.name)
    },
    off: function (a, b) {
        var c, d = jQuery;
        if ("string" == typeof a && a.indexOf(".") !== -1) {
            var e = a.split(".");
            a = e[0], c = e[1]
        }
        if ("string" == typeof a && a.indexOf(":") !== -1) {
            var e = a.split(":");
            ["complete", "done"].indexOf(a[1]) !== -1 && (a[1] = "after"), a = {
                type: e[0],
                execute: e[1]
            }
        }
        if (d.isPlainObject(a) || (a = {
            type: a
        }), a = d.extend({}, {
            type: null,
            execute: "before",
            target: null,
            onComplete: null
        }, a), !a.type && !c) return void console.log("ERROR: You must specify event type when calling .off() method of " + this.name);
        b || (b = null);
        for (var f = [], g = 0, h = this.handlers.length; g < h; g++) {
            var i = this.handlers[g];
            (i.edata.type !== a.type && "*" !== a.type && (null == i.edata.scope || "" != a.type) || i.edata.target !== a.target && null != a.target || i.edata.execute !== a.execute && null != a.execute || !(i.handler === b && null != b || null != c && i.edata.scope == c)) && f.push(i)
        }
        this.handlers = f
    },
    trigger: function (a) {
        var b = jQuery,
            a = b.extend({
                type: null,
                phase: "before",
                target: null,
                doneHandlers: []
            }, a, {
                    isStopped: !1,
                    isCancelled: !1,
                    done: function (a) {
                        this.doneHandlers.push(a)
                    },
                    preventDefault: function () {
                        this.isCancelled = !0
                    },
                    stopPropagation: function () {
                        this.isStopped = !0
                    }
                });
        "before" === a.phase && (a.onComplete = null);
        var c, d, e;
        null == a.target && (a.target = null), b.isArray(this.handlers) || (this.handlers = []);
        for (var f = this.handlers.length - 1; f >= 0; f--) {
            var g = this.handlers[f];
            if (!(g.edata.type !== a.type && "*" !== g.edata.type || g.edata.target !== a.target && null != g.edata.target || g.edata.execute !== a.phase && "*" !== g.edata.execute && "*" !== g.edata.phase) && (a = b.extend({}, g.edata, a), c = [], e = new RegExp(/\((.*?)\)/).exec(g.handler), e && (c = e[1].split(/\s*,\s*/)), 2 === c.length ? g.handler.call(this, a.target, a) : g.handler.call(this, a), a.isStopped === !0 || a.stop === !0)) return a
        }
        var h = "on" + a.type.substr(0, 1).toUpperCase() + a.type.substr(1);
        if ("before" === a.phase && "function" == typeof this[h] && (d = this[h], c = [], e = new RegExp(/\((.*?)\)/).exec(d), e && (c = e[1].split(/\s*,\s*/)), 2 === c.length ? d.call(this, a.target, a) : d.call(this, a), a.isStopped === !0 || a.stop === !0)) return a;
        if (null != a.object && "before" === a.phase && "function" == typeof a.object[h] && (d = a.object[h], c = [], e = new RegExp(/\((.*?)\)/).exec(d), e && (c = e[1].split(/\s*,\s*/)), 2 === c.length ? d.call(this, a.target, a) : d.call(this, a), a.isStopped === !0 || a.stop === !0)) return a;
        if ("after" === a.phase) {
            "function" == typeof a.onComplete && a.onComplete.call(this, a);
            for (var i = 0; i < a.doneHandlers.length; i++) "function" == typeof a.doneHandlers[i] && a.doneHandlers[i].call(this, a)
        }
        return a
    }
},
    function (a) {
        a.fn.w2render = function (b) {
            a(this).length > 0 && ("string" == typeof b && w2ui[b] && w2ui[b].render(a(this)[0]), "object" == typeof b && b.render(a(this)[0]))
        }, a.fn.w2destroy = function (a) {
            !a && this.length > 0 && (a = this.attr("name")), "string" == typeof a && w2ui[a] && w2ui[a].destroy(), "object" == typeof a && a.destroy()
        }, a.fn.w2marker = function () {
            function b(a, b) {
                for (; b.innerHTML.indexOf('<span class="w2ui-marker">') !== -1;) b.innerHTML = b.innerHTML.replace(/\<span class=\"w2ui\-marker\"\>((.|\n|\r)*)\<\/span\>/gi, "$1")
            }
            var c = Array.prototype.slice.call(arguments, 0);
            return Array.isArray(c[0]) && (c = c[0]), 0 !== c.length && c[0] ? a(this).each(function (a, d) {
                function e(a) {
                    return '<span class="w2ui-marker">' + a + "</span>"
                }
                b(a, d);
                for (var f = 0; f < c.length; f++) {
                    var g = c[f];
                    "string" != typeof g && (g = String(g)), g = g.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&").replace(/&/g, "&amp;").replace(/</g, "&gt;").replace(/>/g, "&lt;");
                    var h = new RegExp(g + "(?!([^<]+)?>)", "gi");
                    d.innerHTML = d.innerHTML.replace(h, e)
                }
            }) : a(this).each(b)
        }, a.fn.w2tag = function (b, c) {
            return 1 === arguments.length && "object" == typeof b && (c = b, null != c.html && (b = c.html)), c = a.extend({
                id: null,
                html: b,
                position: "right|top",
                align: "none",
                left: 0,
                top: 0,
                style: "",
                css: {},
                className: "",
                inputClass: "",
                onShow: null,
                onHide: null,
                hideOnKeyPress: !0,
                hideOnBlur: !1,
                hideOnClick: !1,
                hideOnChange: !0
            }, c), null != c.name && null == c.id && (c.id = c.name), "" !== c.class && "" === c.inputClass && (c.inputClass = c.class), 0 === a(this).length ? void a("tag").each(function (b, c) {
                var d = a(c).data("w2tag");
                d && d.hide()
            }) : a(this).each(function (d, e) {
                function f() {
                    if (j.box.css("display", "block"), j && j.box && a(j.attachedTo).offset()) {
                        var b = j.getPos();
                        j.box.css({
                            opacity: "1",
                            left: b.left + "px",
                            top: b.top + "px"
                        }).data("w2tag", j).find("tag-body").addClass(b.posClass), j.tmp.pos = b.left + "x" + b.top, a(j.attachedTo).off(".w2tag").css(j.options.css).addClass(j.options.inputClass), j.options.hideOnKeyPress && a(j.attachedTo).on("keypress.w2tag", j.hide), c.hideOnChange && ("INPUT" === e.nodeName ? a(e).on("change.w2tag", j.hide) : a(e).find("input").on("change.w2tag", j.hide)), j.options.hideOnBlur && a(j.attachedTo).on("blur.w2tag", j.hide), j.options.hideOnClick && a(document).on("click.w2tag", j.hide), "function" == typeof j.options.onShow && j.options.onShow(), h()
                    }
                }

                function g() {
                    j.box.length <= 0 || (j.tmp.timer && clearTimeout(j.tmp.timer), j.box.remove(), j.options.hideOnClick && a(document).off(".w2tag"), a(j.attachedTo).off(".w2tag").removeClass(j.options.inputClass).removeData("w2tag"), a(j.attachedTo).length > 0 && (a(j.attachedTo)[0].style.cssText = j.tmp.originalCSS), "function" == typeof j.options.onHide && j.options.onHide())
                }

                function h(b) {
                    var c = a(j.attachedTo).offset();
                    if (0 === a(j.attachedTo).length || 0 === c.left && 0 === c.top || 0 === j.box.find("tag-body").length) return void j.hide();
                    var d = i();
                    j.tmp.pos !== d.left + "x" + d.top && (j.box.css(w2utils.cssPrefix({
                        transition: b ? "0s" : ".2s"
                    })).css({
                        left: d.left + "px",
                        top: d.top + "px"
                    }), j.tmp.pos = d.left + "x" + d.top), j.tmp.timer && clearTimeout(j.tmp.timer), j.tmp.timer = setTimeout(h, 100)
                }

                function i() {
                    var b = a(j.attachedTo).offset(),
                        c = "w2ui-tag-right",
                        d = parseInt(b.left + j.attachedTo.offsetWidth + (j.options.left ? j.options.left : 0)),
                        e = parseInt(b.top + (j.options.top ? j.options.top : 0)),
                        f = j.box.find("tag-body"),
                        g = f[0].offsetWidth,
                        h = f[0].offsetHeight;
                    if ("string" == typeof j.options.position && j.options.position.indexOf("|") !== -1 && (j.options.position = j.options.position.split("|")), "top" === j.options.position) c = "w2ui-tag-top", d = parseInt(b.left + (j.options.left ? j.options.left : 0)) - 14, e = parseInt(b.top + (j.options.top ? j.options.top : 0)) - h - 10;
                    else if ("bottom" === j.options.position) c = "w2ui-tag-bottom", d = parseInt(b.left + (j.options.left ? j.options.left : 0)) - 14, e = parseInt(b.top + j.attachedTo.offsetHeight + (j.options.top ? j.options.top : 0)) + 10;
                    else if ("left" === j.options.position) c = "w2ui-tag-left", d = parseInt(b.left + (j.options.left ? j.options.left : 0)) - g - 20, e = parseInt(b.top + (j.options.top ? j.options.top : 0));
                    else if (Array.isArray(j.options.position)) {
                        for (var i = window.innerWidth, k = window.innerHeight, l = 0; l < j.options.position.length; l++) {
                            var m = j.options.position[l];
                            if ("right" === m) {
                                if (c = "w2ui-tag-right", d = parseInt(b.left + j.attachedTo.offsetWidth + (j.options.left ? j.options.left : 0)), e = parseInt(b.top + (j.options.top ? j.options.top : 0)), d + g <= i) break
                            } else if ("left" === m) {
                                if (c = "w2ui-tag-left", d = parseInt(b.left + (j.options.left ? j.options.left : 0)) - g - 20, e = parseInt(b.top + (j.options.top ? j.options.top : 0)), d >= 0) break
                            } else if ("top" === m) {
                                if (c = "w2ui-tag-top", d = parseInt(b.left + (j.options.left ? j.options.left : 0)) - 14, e = parseInt(b.top + (j.options.top ? j.options.top : 0)) - h - 10, d + g <= i && e >= 0) break
                            } else if ("bottom" === m && (c = "w2ui-tag-bottom", d = parseInt(b.left + (j.options.left ? j.options.left : 0)) - 14, e = parseInt(b.top + j.attachedTo.offsetHeight + (j.options.top ? j.options.top : 0)) + 10, d + g <= i && e + h <= k)) break
                        }
                        f.data("posClass") !== c && f.removeClass("w2ui-tag-right w2ui-tag-left w2ui-tag-top w2ui-tag-bottom").addClass(c).data("posClass", c)
                    }
                    return {
                        left: d,
                        top: e,
                        posClass: c
                    }
                }
                var j, k = c.id ? c.id : e.id;
                "" == k && (k = a(e).find("input").attr("id")), k || (k = "noid");
                var l = w2utils.escapeId(k);
                null != a(this).data("w2tag") ? (j = a(this).data("w2tag"), a.extend(j.options, c)) : j = {
                    id: k,
                    attachedTo: e,
                    box: a("#w2ui-tag-" + l),
                    options: a.extend({}, c),
                    init: f,
                    hide: g,
                    getPos: i,
                    isMoved: h,
                    tmp: {}
                }, "" === b || null == b ? j.hide() : 0 !== j.box.length ? j.box.find("tag-body").css(j.options.css).attr("style", j.options.style).addClass(j.options.className).html(j.options.html) : (j.tmp.originalCSS = "", a(j.attachedTo).length > 0 && (j.tmp.originalCSS = a(j.attachedTo)[0].style.cssText), a("body").append('<div onclick="event.stopPropagation()" style="display: none;" id="w2ui-tag-' + j.id + '"        class="w2ui-tag ' + (a(j.attachedTo).parents("popup, overlay-popup, message").length > 0 ? "w2ui-tag-popup" : "") + '">   <div style="margin: -2px 0px 0px -2px; white-space: nowrap;">      <div class="w2ui-tag-body ' + j.options.className + '" style="' + (j.options.style || "") + '">' + b + "</div>   </div></div>"), j.box = a("#w2ui-tag-" + l), a(j.attachedTo).data("w2tag", j), setTimeout(f, 1))
            })
        }, a.fn.w2overlay = function (b, c) {
            function d() {
                var b = a("#w2ui-overlay" + h);
                if (b.data("element") === g[0] && 0 !== b.length) {
                    var c = a(g).offset() || {},
                        f = c.left + "x" + c.top;
                    b.data("position") !== f ? e() : setTimeout(d, 250)
                }
            }

            function e(b) {
                if (!b || 0 === b.button) {
                    var d = a("#w2ui-overlay" + h);
                    if (!b || a(a(b.target).closest("overlay").data("element")).closest("overlay")[0] !== d[0]) {
                        if (d.data("keepOpen") === !0) return void d.removeData("keepOpen");
                        var e;
                        "function" == typeof c.onHide && (e = c.onHide()), e !== !1 && (d.remove(), a(document).off(".w2overlay" + h), clearInterval(d.data("timer")))
                    }
                }
            }

            function f() {
                var b = a("#w2ui-overlay" + h),
                    d = b.find(" > div"),
                    e = a("#w2ui-overlay" + h + " div.menu");
                if (e.css("overflow-y", "hidden"), b.length > 0) {
                    d.height("auto").width("auto");
                    var i = !1,
                        j = d.height(),
                        k = d.width();
                    c.width && c.width < k && (k = c.width), k < 30 && (k = 30), c.tmp.contentHeight && (j = parseInt(c.tmp.contentHeight), d.height(j), setTimeout(function () {
                        var a = d.find("div.menu");
                        j > a.height() && d.find("div.menu").css("overflow-y", "hidden")
                    }, 1), setTimeout(function () {
                        var a = d.find("div.menu");
                        "auto" !== a.css("overflow-y") && a.css("overflow-y", "auto")
                    }, 10)), c.tmp.contentWidth && "both" !== c.align && (k = parseInt(c.tmp.contentWidth), d.width(k), setTimeout(function () {
                        k > d.find("div.menu > table").width() && d.find("div.menu > table").css("overflow-x", "hidden")
                    }, 1), setTimeout(function () {
                        d.find("div.menu > table").css("overflow-x", "auto")
                    }, 10));
                    var l = c.left,
                        m = c.width,
                        n = c.tipLeft;
                    switch (c.align) {
                        case "both":
                            l = 17, 0 === c.width && (c.width = w2utils.getSize(a(g), "width")), c.maxWidth && c.width > c.maxWidth && (c.width = c.maxWidth);
                            break;
                        case "left":
                            l = 17;
                            break;
                        case "right":
                            l = w2utils.getSize(a(g), "width") - k + 10, n = k - 40
                    }
                    m = 30 !== k || m ? c.width ? c.width : "auto" : 30;
                    var o = (k - 17) / 2;
                    "auto" !== m && (o = (m - 17) / 2), o < 25 && (l = 25 - o, n = Math.floor(o));
                    var p, q, r;
                    if (c.contextMenu) p = c.pageX + 8, q = c.pageY - 0, r = c.pageY;
                    else {
                        var s = g.offset() || {};
                        p = (s.left > 25 ? s.left : 25) + l, q = s.top + w2utils.getSize(g, "height") + c.top + 7, r = s.top
                    }
                    b.css({
                        left: p + "px",
                        top: q + "px",
                        "min-width": m,
                        "min-height": c.height ? c.height : "auto"
                    });
                    var s = d.offset() || {},
                        t = window.innerHeight + a(document).scrollTop() - s.top - 7,
                        u = window.innerWidth + a(document).scrollLeft() - s.left - 7;
                    if (c.contextMenu && (t = window.innerHeight + a(document).scrollTop() - c.pageY - 15, u = window.innerWidth + a(document).scrollLeft() - c.pageX), t > -50 && t < 210 || c.openAbove === !0) {
                        var v;
                        c.contextMenu ? (t = c.pageY - 7, v = 5) : (t = s.top - a(document).scrollTop() - 7, v = 24), c.maxHeight && t > c.maxHeight && (t = c.maxHeight), j > t && (i = !0, d.height(t).width(k).css({
                            "overflow-y": "auto"
                        }), j = t), b.addClass("bottom-arrow"), b.css("top", r - j - v + c.top + "px"), b.find(">style").html("#w2ui-overlay" + h + ":before { margin-left: " + parseInt(n) + "px; }#w2ui-overlay" + h + ":after { margin-left: " + parseInt(n) + "px; }")
                    } else c.maxHeight && t > c.maxHeight && (t = c.maxHeight), j > t && (i = !0, d.height(t).width(k).css({
                        "overflow-y": "auto"
                    })), b.addClass("top-arrow"), b.find(">style").html("#w2ui-overlay" + h + ":before { margin-left: " + parseInt(n) + "px; }#w2ui-overlay" + h + ":after { margin-left: " + parseInt(n) + "px; }");
                    k = d.width(), u = window.innerWidth + a(document).scrollLeft() - s.left - 7, c.maxWidth && u > c.maxWidth && (u = c.maxWidth), k > u && "both" !== c.align && (c.align = "right", setTimeout(function () {
                        f()
                    }, 1)), (c.contextMenu || c.noTip) && b.find(">style").html("#w2ui-overlay" + h + ":before { display: none; }#w2ui-overlay" + h + ":after { display: none; }"), i && "both" !== c.align && d.width(k + w2utils.scrollBarSize() + 2)
                }
                e.css("overflow-y", "auto")
            }
            var g = this,
                h = "",
                i = {
                    name: null,
                    html: "",
                    align: "none",
                    left: 0,
                    top: 0,
                    tipLeft: 30,
                    noTip: !1,
                    selectable: !1,
                    width: 0,
                    height: 0,
                    maxWidth: null,
                    maxHeight: null,
                    contextMenu: !1,
                    pageX: null,
                    pageY: null,
                    originalEvent: null,
                    style: "",
                    class: "",
                    overlayStyle: "",
                    onShow: null,
                    onHide: null,
                    openAbove: !1,
                    tmp: {}
                };
            1 === arguments.length && (c = "object" == typeof b ? b : {
                html: b
            }), 2 === arguments.length && (c.html = b), a.isPlainObject(c) || (c = {}), c = a.extend({}, i, c), c.name && (h = "-" + c.name);
            var j;
            if (0 === this.length || "" === c.html || null == c.html) return a("#w2ui-overlay" + h).length > 0 ? (j = a("#w2ui-overlay" + h)[0].hide, "function" == typeof j && j()) : a("#w2ui-overlay" + h).remove(), a(this);
            a("#w2ui-overlay" + h).length > 0 && (j = a("#w2ui-overlay" + h)[0].hide, a(document).off(".w2overlay" + h), "function" == typeof j && j()), g.length > 0 && (null == g[0].tagName || "BODY" === g[0].tagName.toUpperCase()) && (c.contextMenu = !0), c.contextMenu && c.originalEvent && (c.pageX = c.originalEvent.pageX, c.pageY = c.originalEvent.pageY), !c.contextMenu || null != c.pageX && null != c.pageY || console.log("ERROR: to display menu at mouse location, pass options.pageX and options.pageY."), a("body").append('<div id="w2ui-overlay' + h + '" style="display: none; left: 0px; top: 0px; ' + c.overlayStyle + '"        class="w2ui-reset w2ui-overlay ' + (a(this).parents("popup, overlay-popup, message").length > 0 ? "w2ui-overlay-popup" : "") + '">    <style></style>    <div style="min-width: 100%; ' + c.style + '" class="' + c.class + '"></div></div>');
            var k = a("#w2ui-overlay" + h),
                l = k.find(" > div");
            l.html(c.html);
            var m = l.css("background-color");
            null != m && "rgba(0, 0, 0, 0)" !== m && "transparent" !== m && k.css({
                "background-color": m,
                "border-color": m
            });
            var n = a(g).offset() || {};
            return k.data("element", g.length > 0 ? g[0] : null).data("options", c).data("position", n.left + "x" + n.top).fadeIn("fast").on("click", function (b) {
                a("#w2ui-overlay" + h).data("keepOpen", !0), "LABEL" === b.target.tagName.toUpperCase() && b.stopPropagation()
            }).on("mousedown", function (a) {
                var b = a.target.tagName.toUpperCase();
                ["INPUT", "TEXTAREA", "SELECT"].indexOf(b) !== -1 || c.selectable || a.preventDefault()
            }), k[0].hide = e, k[0].resize = f, setTimeout(function () {
                a(document).off(".w2overlay" + h).on("click.w2overlay" + h, e), "function" == typeof c.onShow && c.onShow(), f()
            }, 10), d(), a(this)
        }, a.fn.w2menu = function (b, c) {
            function d() {
                setTimeout(function () {
                    a("#w2ui-overlay" + i + " trselected").removeClass("w2ui-selected");
                    var b = a("#w2ui-overlay" + i + " tr[index=" + c.index + "]"),
                        d = a("#w2ui-overlay" + i + " div.menu").scrollTop();
                    if (b.addClass("w2ui-selected"), c.tmp && (c.tmp.contentHeight = a("#w2ui-overlay" + i + " table").height() + (c.search ? 50 : 10)), c.tmp && (c.tmp.contentWidth = a("#w2ui-overlay" + i + " table").width() + 1), a("#w2ui-overlay" + i).length > 0 && a("#w2ui-overlay" + i)[0].resize(), b.length > 0) {
                        var e = b[0].offsetTop - 5,
                            f = a("#w2ui-overlay" + i + " div.menu"),
                            g = f.height();
                        a("#w2ui-overlay" + i + " div.menu").scrollTop(d), (e < d || e + b.height() > d + g) && a("#w2ui-overlay" + i + " div.menu").animate({
                            scrollTop: e - (g - 2 * b.height()) / 2
                        }, 200, "linear")
                    }
                }, 1)
            }

            function e(b) {
                var e = this.value,
                    f = b.keyCode,
                    g = !1;
                switch (f) {
                    case 13:
                        a("#w2ui-overlay" + i).remove(), a.fn.w2menuClick(b, c.index);
                        break;
                    case 9:
                    case 27:
                        a("#w2ui-overlay" + i).remove(), a.fn.w2menuClick(b, -1);
                        break;
                    case 38:
                        for (c.index = w2utils.isInt(c.index) ? parseInt(c.index) : 0, c.index--; c.index > 0 && c.items[c.index].hidden;) c.index--;
                        if (0 === c.index && c.items[c.index].hidden)
                            for (; c.items[c.index] && c.items[c.index].hidden;) c.index++;
                        c.index < 0 && (c.index = 0), g = !0;
                        break;
                    case 40:
                        for (c.index = w2utils.isInt(c.index) ? parseInt(c.index) : 0, c.index++; c.index < c.items.length - 1 && c.items[c.index].hidden;) c.index++;
                        if (c.index === c.items.length - 1 && c.items[c.index].hidden)
                            for (; c.items[c.index] && c.items[c.index].hidden;) c.index--;
                        c.index >= c.items.length && (c.index = c.items.length - 1), g = !0
                }
                if (!g) {
                    for (var j = 0, k = 0; k < c.items.length; k++) {
                        var l = c.items[k],
                            m = "",
                            n = "";
                        ["is", "begins with"].indexOf(c.match) !== -1 && (m = "^"), ["is", "ends with"].indexOf(c.match) !== -1 && (n = "$");
                        try {
                            var o = new RegExp(m + e + n, "i");
                            o.test(l.text) || "..." === l.text ? l.hidden = !1 : l.hidden = !0
                        } catch (a) { }
                        "enum" === h.type && a.inArray(l.id, ids) !== -1 && (l.hidden = !0), l.hidden !== !0 && j++
                    }
                    for (c.index = 0; c.index < c.items.length - 1 && c.items[c.index].hidden;) c.index++;
                    j <= 0 && (c.index = -1)
                }
                a(h).w2menu("refresh", c), d()
            }

            function f() {
                if (c.spinner) return '<table class="w2ui-drop-menu"><tbody><tr><td style="padding: 5px 10px 10px 10px; text-align: center">    <div class="w2ui-spinner" style="width: 18px; height: 18px; position: relative; top: 5px;"></div>     <div style="display: inline-block; padding: 3px; color: #999;">' + w2utils.lang("Loading...") + "</div></td></tr></tbody></table>";
                for (var a = 0, b = '<table cellspacing="0" cellpadding="0" class="w2ui-drop-menu"><tbody>', d = null, e = null, f = 0; f < c.items.length; f++) {
                    var g = c.items[f];
                    if ("string" == typeof g ? g = {
                        id: g,
                        text: g
                    } : (null != g.text && null == g.id && (g.id = g.text), null == g.text && null != g.id && (g.text = g.id), null != g.caption && (g.text = g.caption), d = g.img, e = g.icon, null == d && (d = null), null == e && (e = null)), ["radio", "check"].indexOf(c.type) != -1 && (e = g.checked === !0 ? "w2ui-icon-check" : "w2ui-icon-empty"), g.hidden !== !0) {
                        var h = "",
                            i = g.text;
                        if ("function" == typeof c.render && (i = c.render(g, c)), d && (h = '<td class="menu-icon"><div class="w2ui-tb-image w2ui-icon ' + d + '"></div></td>'), e && (h = '<td class="menu-icon" align="center"><span class="w2ui-icon ' + e + '"></span></td>'), "break" === g.type || null == i || "" === i || /^-+$/.test(i)) b += '<tr><td colspan="3" style="padding: 6px; pointer-events: none"><div style="border-top: 1px solid silver;"></div></td></tr>';
                        else {
                            var j = a % 2 === 0 ? "w2ui-item-even" : "w2ui-item-odd";
                            c.altRows !== !0 && (j = "");
                            var k = 1;
                            "" === h && k++ , null == g.count && null == g.hotkey && k++ , null == g.tooltip && null != g.hint && (g.tooltip = g.hint), b += '<tr index="' + f + '" style="' + (g.style ? g.style : "") + '" ' + (g.tooltip ? 'title="' + w2utils.lang(g.tooltip) + '"' : "") + '        class="' + j + " " + (c.index === f ? "w2ui-selected" : "") + " " + (g.disabled === !0 ? "w2ui-disabled" : "") + '"        onmousedown="if (' + (g.disabled === !0 ? "true" : "false") + ") return;               jQuery.fn.w2menuDown(event, '" + f + '\');"        onclick="event.stopPropagation();                if (' + (g.disabled === !0 ? "true" : "false") + ") return;               jQuery.fn.w2menuClick(event, '" + f + "');\">" + h + '   <td class="menu-text" colspan="' + k + '">' + w2utils.lang(i) + '</td>   <td class="menu-count">' + (null != g.count ? "<span>" + g.count + "</span>" : "") + (null != g.hotkey ? '<span class="hotkey">' + g.hotkey + "</span>" : "") + "</td></tr>", a++
                        }
                    }
                    c.items[f] = g
                }
                return 0 === a && (b += '<tr><td style="padding: 13px; color: #999; text-align: center">' + c.msgNoItems + "</div></td></tr>"), b += "</tbody></table>"
            }
            c && "function" == typeof c.items && (c.items = c.items());
            var g = {
                type: "normal",
                index: null,
                items: [],
                render: null,
                msgNoItems: "No items",
                onSelect: null,
                tmp: {}
            },
                h = this,
                i = "";
            if ("refresh" === b)
                if (a("#w2ui-overlay" + i).length > 0) {
                    c = a.extend(a.fn.w2menuOptions, c);
                    var j = a("#w2ui-overlay" + i + " div.menu").scrollTop();
                    a("#w2ui-overlay" + i + " div.menu").html(f()), a("#w2ui-overlay" + i + " div.menu").scrollTop(j), d()
                } else a(this).w2menu(c);
            else {
                if ("refresh-index" !== b) {
                    1 === arguments.length ? c = b : c.items = b, "object" != typeof c && (c = {}), c = a.extend({}, g, c), a.fn.w2menuOptions = c, c.name && (i = "-" + c.name), "function" == typeof c.select && "function" != typeof c.onSelect && (c.onSelect = c.select), "function" == typeof c.onRender && "function" != typeof c.render && (c.render = c.onRender), a.fn.w2menuClick = function (b, d) {
                        var e = !1;
                        ["radio", "check"].indexOf(c.type) !== -1 && (b.shiftKey || b.metaKey || b.ctrlKey) && (e = !0), "function" == typeof c.onSelect && c.onSelect({
                            index: d,
                            item: c.items[d],
                            keepOpen: e,
                            originalEvent: b
                        });
                        var f = a("#w2ui-overlay" + i);
                        f.removeData("keepOpen"), f.length > 0 && "function" == typeof f[0].hide && !e && f[0].hide()
                    }, a.fn.w2menuDown = function (b, d) {
                        var e = a(b.target).parents("tr"),
                            f = e.find("icon");
                        if ("check" === c.type || "radio" === c.type) {
                            var g = c.items[d];
                            g.checked = !g.checked, g.checked ? ("radio" === c.type && f.parents("table").find("icon").removeClass("w2ui-icon-check").addClass("w2ui-icon-empty"), "check" === c.type && null != g.group && c.items.forEach(function (a, b) {
                                a.group === g.group && a.checked && (f.parents("table").find("tr[index=" + b + "] icon").removeClass("w2ui-icon-check").addClass("w2ui-icon-empty"), a.checked = !1)
                            }), f.removeClass("w2ui-icon-empty").addClass("w2ui-icon-check")) : "check" === c.type && null == g.group && f.removeClass("w2ui-icon-check").addClass("w2ui-icon-empty")
                        }
                        e.parent().find("tr").removeClass("w2ui-selected"), e.addClass("w2ui-selected")
                    };
                    var k = "";
                    if (c.search) {
                        k += '<div style="position: absolute; top: 0px; height: 40px; left: 0px; right: 0px; border-bottom: 1px solid silver; background-color: #ECECEC; padding: 8px 5px;">    <div class="w2ui-icon icon-search" style="position: absolute; margin-top: 4px; margin-left: 6px; width: 11px; background-position: left !important;"></div>    <input id="menu-search" type="text" style="width: 100%; outline: none; padding-left: 20px;" onclick="event.stopPropagation();"/></div>', c.style += ";background-color: #ECECEC", c.index = 0;
                        for (var l = 0; l < c.items.length; l++) c.items[l].hidden = !1
                    }
                    k += '<div class="menu" style="position: absolute; top: ' + (c.search ? 40 : 0) + 'px; bottom: 0px; width: 100%;">' + f() + "</div>";
                    var m = a(this).w2overlay(k, c);
                    return setTimeout(function () {
                        if (a("#w2ui-overlay" + i + " #menu-search").on("keyup", e).on("keydown", function (a) {
                            9 === a.keyCode && (a.stopPropagation(), a.preventDefault())
                        }), c.search) {
                            if (["text", "password"].indexOf(a(h)[0].type) !== -1 || "TEXTAREA" === a(h)[0].tagName.toUpperCase()) return;
                            a("#w2ui-overlay" + i + " #menu-search").focus()
                        }
                        d()
                    }, 200), d(), m
                }
                var n = a("#w2ui-overlay" + i + " div.menu"),
                    o = n.find("tr[index=" + c.index + "]"),
                    j = n.scrollTop();
                if (n.find("trselected").removeClass("w2ui-selected"), o.addClass("w2ui-selected"), o.length > 0) {
                    var p = o[0].offsetTop - 5,
                        q = n.height();
                    n.scrollTop(j), (p < j || p + o.height() > j + q) && n.animate({
                        scrollTop: p - (q - 2 * o.height()) / 2
                    }, 200, "linear")
                }
                d()
            }
        }, a.fn.w2color = function (b, c) {
            function d(a) {
                for (var b, c = (a.color, '<div class="w2ui-color" onmousedown="jQuery(this).parents(\'overlay\').data(\'keepOpen\', true)"><div class="w2ui-color-palette"><table cellspacing="5"><tbody>'), d = 0; d < h.length; d++) {
                    c += "<tr>";
                    for (var e = 0; e < h[d].length; e++) b = "FFFFFF" === h[d][e] ? ";border: 1px solid #efefef" : "", c += '<td>    <div class="color ' + ("" === h[d][e] ? "no-color" : "") + '" style="background-color: #' + h[d][e] + b + ';"        name="' + h[d][e] + '" index="' + d + ":" + e + '">' + (a.color == h[d][e] ? "&#149;" : "&#160;") + "    </div></td>", a.color == h[d][e] && (g = [d, e]);
                    c += "</tr>", d < 2 && (c += '<tr><td style="height: 8px" colspan="8"></td></tr>')
                }
                return c += "</tbody></table></div>", c += '<div class="w2ui-color-advanced" style="display: none">   <div class="color-info">       <div class="color-preview-bg"><div class="color-preview"></div><div class="color-original"></div></div>       <div class="color-part">           <span>H</span> <input name="h" maxlength="3" max="360" tabindex="101">           <span>R</span> <input name="r" maxlength="3" max="255" tabindex="104">       </div>       <div class="color-part">           <span>S</span> <input name="s" maxlength="3" max="100" tabindex="102">           <span>G</span> <input name="g" maxlength="3" max="255" tabindex="105">       </div>       <div class="color-part">           <span>V</span> <input name="v" maxlength="3" max="100" tabindex="103">           <span>B</span> <input name="b" maxlength="3" max="255" tabindex="106">       </div>       <div class="color-part" style="margin: 30px 0px 0px 2px">           <span style="width: 40px">Opacity</span>            <input name="a" maxlength="5" max="1" style="width: 32px !important" tabindex="107">       </div>   </div>   <div class="palette" name="palette">       <div class="palette-bg"></div>       <div class="value1 move-x move-y"></div>   </div>   <div class="rainbow" name="rainbow">       <div class="value2 move-x"></div>   </div>   <div class="alpha" name="alpha">       <div class="alpha-bg"></div>       <div class="value2 move-x"></div>   </div></div>', c += "<div class=\"w2ui-color-tabs\">   <div class=\"w2ui-color-tab selected\" onclick=\"jQuery(this).addClass('selected').next().removeClass('selected').parents('overlay').find('color-advanced').hide().parent().find('color-palette').show(); jQuery.fn._colorAdvanced = false; jQuery('#w2ui-overlay')[0].resize()\"><span class=\"w2ui-icon w2ui-icon-colors\"></span></div>   <div class=\"w2ui-color-tab\" onclick=\"jQuery(this).addClass('selected').prev().removeClass('selected').parents('overlay').find('color-advanced').show().parent().find('color-palette').hide(); jQuery.fn._colorAdvanced = true; jQuery('#w2ui-overlay')[0].resize()\"><span class=\"w2ui-icon w2ui-icon-settings\"></span></div></div></div><div style=\"clear: both; height: 0\"></div>"
            }
            var e = a(this),
                f = e[0];
            if (e.data("skipInit")) return void e.removeData("skipInit");
            var g = [-1, -1];
            null == a.fn.w2colorPalette && (a.fn.w2colorPalette = [
                ["000000", "333333", "555555", "777777", "888888", "999999", "AAAAAA", "CCCCCC", "DDDDDD", "EEEEEE", "F7F7F7", "FFFFFF"],
                ["FF011B", "FF9838", "FFC300", "FFFD59", "86FF14", "14FF7A", "2EFFFC", "2693FF", "006CE7", "9B24F4", "FF21F5", "FF0099"],
                ["FFEAEA", "FCEFE1", "FCF4DC", "FFFECF", "EBFFD9", "D9FFE9", "E0FFFF", "E8F4FF", "ECF4FC", "EAE6F4", "FFF5FE", "FCF0F7"],
                ["F4CCCC", "FCE5CD", "FFF1C2", "FFFDA1", "D5FCB1", "B5F7D0", "BFFFFF", "D6ECFF", "CFE2F3", "D9D1E9", "FFE3FD", "FFD9F0"],
                ["EA9899", "F9CB9C", "FFE48C", "F7F56F", "B9F77E", "84F0B1", "83F7F7", "B5DAFF", "9FC5E8", "B4A7D6", "FAB9F6", "FFADDE"],
                ["E06666", "F6B26B", "DEB737", "E0DE51", "8FDB48", "52D189", "4EDEDB", "76ACE3", "6FA8DC", "8E7CC3", "E07EDA", "F26DBD"],
                ["CC0814", "E69138", "AB8816", "B5B20E", "6BAB30", "27A85F", "1BA8A6", "3C81C7", "3D85C6", "674EA7", "A14F9D", "BF4990"],
                ["99050C", "B45F17", "80650E", "737103", "395E14", "10783D", "13615E", "094785", "0A5394", "351C75", "780172", "782C5A"]
            ]);
            var h = a.fn.w2colorPalette;
            "string" == typeof b && (b = {
                color: b,
                transparent: !0
            }), null == b.onSelect && null != c && (b.onSelect = c), b.transparent && "333333" == h[0][1] && (h[0].splice(1, 1), h[0].push("")), b.transparent || "333333" == h[0][1] || (h[0].splice(1, 0, "333333"), h[0].pop()), b.color && (b.color = String(b.color).toUpperCase()), "string" == typeof b.color && "#" === b.color.substr(0, 1) && (b.color = b.color.substr(1)), null == b.fireChange && (b.fireChange = !0), 0 === a("#w2ui-overlay").length ? a(f).w2overlay(d(b), b) : (a("#w2ui-overlay color").parent().html(d(b)), a("#w2ui-overlay").show()), a("#w2ui-overlay .color").off(".w2color").on("mousedown.w2color", function (c) {
                var d = a(c.originalEvent.target).attr("name");
                g = a(c.originalEvent.target).attr("index").split(":"), "INPUT" === f.tagName.toUpperCase() ? (b.fireChange && a(f).change(), a(f).next().find(">div").css("background-color", d)) : a(f).data("_color", d), "function" == typeof b.onSelect && b.onSelect(d)
            }).on("mouseup.w2color", function () {
                setTimeout(function () {
                    a("#w2ui-overlay").length > 0 && a("#w2ui-overlay").removeData("keepOpen")[0].hide()
                }, 10)
            }), a("#w2ui-overlay .color-original").off(".w2color").on("click.w2color", function (b) {
                var c = w2utils.parseColor(a(b.target).css("background-color"));
                null != c && (k = c, j = w2utils.rgb2hsv(k), l(j), m(), n())
            }), a("#w2ui-overlay input").off(".w2color").on("mousedown.w2color", function (b) {
                a("#w2ui-overlay").data("keepOpen", !0), setTimeout(function () {
                    a("#w2ui-overlay").data("keepOpen", !0)
                }, 10), b.stopPropagation()
            }).on("change.w2color", function () {
                var b = a(this),
                    c = parseFloat(b.val()),
                    d = parseFloat(b.attr("max"));
                isNaN(c) && (c = 0), d > 1 && (c = parseInt(c)), d > 0 && c > d && (b.val(d), c = d), c < 0 && (b.val(0), c = 0);
                var e = b.attr("name"),
                    f = {};
                ["r", "g", "b", "a"].indexOf(e) !== -1 ? (k[e] = c, j = w2utils.rgb2hsv(k)) : ["h", "s", "v"].indexOf(e) !== -1 && (f[e] = c), l(f), m(), n()
            });
            var i, j, k = w2utils.parseColor(b.color);
            null == k && (k = {
                r: 140,
                g: 150,
                b: 160,
                a: 1
            }, j = w2utils.rgb2hsv(k)), j = w2utils.rgb2hsv(k);
            var l = function (c, d) {
                null != c.h && (j.h = c.h), null != c.s && (j.s = c.s), null != c.v && (j.v = c.v), null != c.a && (k.a = c.a, j.a = c.a), k = w2utils.hsv2rgb(j);
                var e = "rgba(" + k.r + "," + k.g + "," + k.b + "," + k.a + ")",
                    g = [Number(k.r).toString(16).toUpperCase(), Number(k.g).toString(16).toUpperCase(), Number(k.b).toString(16).toUpperCase()];
                g.forEach(function (a, b) {
                    1 === a.length && (g[b] = "0" + a)
                }), 1 === k.a && (e = g[0] + g[1] + g[2]), a("#w2ui-overlay .color-preview").css("background-color", e), a("#w2ui-overlay input").each(function (a, b) {
                    b.name && (null != k[b.name] && (b.value = k[b.name]), null != j[b.name] && (b.value = j[b.name]), "a" === b.name && (b.value = k.a))
                }), d ? a("#w2ui-overlay .color-original").css("background-color", e) : ("INPUT" === f.tagName.toUpperCase() ? (a(f).val(e).data("skipInit", !0), b.fireChange && a(f).change(), a(f).next().find(">div").css("background-color", e)) : a(f).data("_color", e), "function" == typeof b.onSelect && b.onSelect(e))
            },
                m = function () {
                    var b = a("#w2ui-overlay .palette .value1"),
                        c = a("#w2ui-overlay .rainbow .value2"),
                        d = a("#w2ui-overlay .alpha .value2"),
                        e = parseInt(b.width()) / 2,
                        f = parseInt(c.width()) / 2;
                    b.css({
                        left: 150 * j.s / 100 - e,
                        top: 125 * (100 - j.v) / 100 - e
                    }), c.css("left", j.h / 2.4 - f), d.css("left", 150 * k.a - f)
                },
                n = function () {
                    var b = w2utils.hsv2rgb(j.h, 100, 100),
                        c = b.r + "," + b.g + "," + b.b;
                    a("#w2ui-overlay .palette").css("background-image", "linear-gradient(90deg, rgba(" + c + ",0) 0%, rgba(" + c + ",1) 100%)")
                },
                o = function (b) {
                    var c = a(this).find(".value1, .value2"),
                        d = parseInt(c.width()) / 2;
                    c.hasClass("move-x") && c.css({
                        left: b.offsetX - d + "px"
                    }), c.hasClass("move-y") && c.css({
                        top: b.offsetY - d + "px"
                    }), i = {
                        $el: c,
                        x: b.pageX,
                        y: b.pageY,
                        width: c.parent().width(),
                        height: c.parent().height(),
                        left: parseInt(c.css("left")),
                        top: parseInt(c.css("top"))
                    }, q(b), a("body").off(".w2color").on(t, q).on(s, p)
                },
                p = function (b) {
                    a("body").off(".w2color")
                },
                q = function (a) {
                    var b = i.$el,
                        c = a.pageX - i.x,
                        d = a.pageY - i.y,
                        e = i.left + c,
                        f = i.top + d,
                        g = parseInt(b.width()) / 2;
                    e < -g && (e = -g), f < -g && (f = -g), e > i.width - g && (e = i.width - g), f > i.height - g && (f = i.height - g), b.hasClass("move-x") && b.css({
                        left: e + "px"
                    }), b.hasClass("move-y") && b.css({
                        top: f + "px"
                    });
                    var h = b.parent().attr("name"),
                        j = parseInt(b.css("left")) + g,
                        k = parseInt(b.css("top")) + g;
                    if ("palette" === h && l({
                        s: Math.round(j / i.width * 100),
                        v: Math.round(100 - k / i.height * 100)
                    }), "rainbow" === h) {
                        var m = Math.round(2.4 * j);
                        l({
                            h: m
                        }), n()
                    }
                    "alpha" === h && l({
                        a: parseFloat(Number(j / 150).toFixed(2))
                    })
                };
            a.fn._colorAdvanced !== !0 && b.advanced !== !0 || (a("#w2ui-overlay color-tabs :nth-child(2)").click(), a("#w2ui-overlay").removeData("keepOpen")), l({}, !0), n(), m();
            var r = "mousedown.w2color",
                s = "mouseup.w2color",
                t = "mousemove.w2color";
            w2utils.isIOS && (r = "touchstart.w2color", s = "touchend.w2color", t = "touchmove.w2color  "), a("#w2ui-overlay .palette").off(".w2color").on("mousedown.w2color", o), a("#w2ui-overlay .rainbow").off(".w2color").on("mousedown.w2color", o), a("#w2ui-overlay .alpha").off(".w2color").on("mousedown.w2color", o), f.nav = function (b) {
                switch (b) {
                    case "up":
                        g[0]--;
                        break;
                    case "down":
                        g[0]++;
                        break;
                    case "right":
                        g[1]++;
                        break;
                    case "left":
                        g[1]--
                }
                return g[0] < 0 && (g[0] = 0), g[0] > h.length - 2 && (g[0] = h.length - 2), g[1] < 0 && (g[1] = 0), g[1] > h[0].length - 1 && (g[1] = h[0].length - 1), color = h[g[0]][g[1]], a(f).data("_color", color), color
            }
        }
    }(jQuery),
    function ($) {
        var w2grid = function (a) {
            this.name = null, this.box = null, this.header = "", this.url = "", this.routeData = {}, this.columns = [], this.columnGroups = [], this.records = [], this.summary = [], this.searches = [], this.searchData = [], this.sortData = [], this.postData = {}, this.httpHeaders = {}, this.toolbar = {}, this.stateId = null, this.show = {
                header: !1,
                toolbar: !1,
                footer: !1,
                columnHeaders: !0,
                lineNumbers: !1,
                expandColumn: !1,
                selectColumn: !1,
                emptyRecords: !0,
                toolbarReload: !0,
                toolbarColumns: !0,
                toolbarSearch: !0,
                toolbarInput: !0,
                toolbarAdd: !1,
                toolbarEdit: !1,
                toolbarDelete: !1,
                toolbarSave: !1,
                searchAll: !0,
                statusRange: !0,
                statusBuffered: !1,
                statusRecordID: !0,
                statusSelection: !0,
                statusResponse: !0,
                statusSort: !1,
                statusSearch: !1,
                recordTitles: !0,
                selectionBorder: !0,
                skipRecords: !0,
                saveRestoreState: !0
            }, this.hasFocus = !1, this.autoLoad = !0, this.fixedBody = !0, this.recordHeight = 24, this.lineNumberWidth = null, this.vs_start = 150, this.vs_extra = 15, this.keyboard = !0, this.selectType = "row", this.multiSearch = !0, this.multiSelect = !0, this.multiSort = !0, this.reorderColumns = !1, this.reorderRows = !1, this.searchContextRows = 0, this.markSearch = !0, this.columnTooltip = "normal", this.disableCVS = !1, this.textSearch = "begins", this.useFieldDot = !0, this.total = 0, this.limit = 100, this.offset = 0, this.style = "", this.ranges = [], this.menu = [], this.method = null, this.dataType = null, this.recid = null, this.parser = null, this.last = {
                field: "",
                caption: "",
                logic: "OR",
                search: "",
                searchIds: [],
                selection: {
                    indexes: [],
                    columns: {}
                },
                multi: !1,
                scrollTop: 0,
                scrollLeft: 0,
                colStart: 0,
                colEnd: 0,
                sortData: null,
                sortCount: 0,
                xhr: null,
                range_start: null,
                range_end: null,
                sel_ind: null,
                sel_col: null,
                sel_type: null,
                edit_col: null,
                isSafari: /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
            }, this.stateSaveColumnProperties = {
                caption: !1,
                field: !0,
                size: !0,
                min: !1,
                max: !1,
                gridMinWidth: !1,
                sizeCorrected: !1,
                sizeCalculated: !0,
                sizeOriginal: !0,
                sizeType: !0,
                hidden: !0,
                sortable: !1,
                searchable: !1,
                resizable: !1,
                hideable: !1,
                attr: !1,
                style: !1,
                render: !1,
                title: !1,
                editable: !1,
                frozen: !0,
                info: !1
            }, this.stateSaveColumnFallbackValues = {
                caption: "",
                field: "",
                size: null,
                min: 20,
                max: null,
                gridMinWidth: null,
                sizeCorrected: null,
                sizeCalculated: null,
                sizeOriginal: null,
                sizeType: null,
                hidden: !1,
                sortable: !1,
                searchable: !1,
                resizable: !0,
                hideable: !0,
                attr: "",
                style: "",
                render: null,
                title: null,
                editable: {},
                frozen: !1,
                info: null
            }, $.extend(!0, this, w2obj.grid, a)
        };
        $.fn.w2grid = function (a) {
            if ($.isPlainObject(a)) {
                if (!w2utils.checkName(a, "w2grid")) return;
                var b = a.columns,
                    c = a.columnGroups,
                    d = a.records,
                    e = a.searches,
                    f = a.searchData,
                    g = a.sortData,
                    h = a.postData,
                    i = a.httpHeaders,
                    j = a.toolbar,
                    k = new w2grid(a);
                $.extend(k, {
                    postData: {},
                    httpHeaders: {},
                    records: [],
                    columns: [],
                    searches: [],
                    toolbar: {},
                    sortData: [],
                    searchData: [],
                    handlers: []
                }), $.extend(!0, k.toolbar, j);
                var l;
                if (b)
                    for (l = 0; l < b.length; l++) k.columns[l] = $.extend(!0, {}, b[l]);
                if (c)
                    for (l = 0; l < c.length; l++) k.columnGroups[l] = $.extend(!0, {}, c[l]);
                if (e)
                    for (l = 0; l < e.length; l++) k.searches[l] = $.extend(!0, {}, e[l]);
                if (f)
                    for (l = 0; l < f.length; l++) k.searchData[l] = $.extend(!0, {}, f[l]);
                if (g)
                    for (l = 0; l < g.length; l++) k.sortData[l] = $.extend(!0, {}, g[l]);
                if (k.postData = $.extend(!0, {}, h), k.httpHeaders = $.extend(!0, {}, i), d)
                    for (var m = 0; m < d.length; m++) {
                        if (null == d[m].recid && null == d[m][k.recid]) return void console.log("ERROR: Cannot add records without recid. (obj: " + k.name + ")");
                        k.records[m] = $.extend(!0, {}, d[m])
                    }
                for (var n = 0; n < k.columns.length; n++) {
                    var o = k.columns[n],
                        p = o.searchable;
                    if (null != p && p !== !1 && null == k.getSearch(o.field))
                        if ($.isPlainObject(p)) k.addSearch($.extend({
                            field: o.field,
                            caption: o.caption,
                            type: "text"
                        }, p));
                        else {
                            var q = o.searchable,
                                r = "";
                            o.searchable === !0 && (q = "text", r = 'size="20"'), k.addSearch({
                                field: o.field,
                                caption: o.caption,
                                type: q,
                                attr: r
                            })
                        }
                }
                return k.initToolbar(), 0 !== $(this).length && k.render($(this)[0]), w2ui[k.name] = k, k
            }
            var s = w2ui[$(this).attr("name")];
            return s ? arguments.length > 0 ? (s[a] && s[a].apply(s, Array.prototype.slice.call(arguments, 1)), this) : s : null
        }, w2grid.prototype = {
            msgDelete: "Are you sure you want to delete selected records?",
            msgNotJSON: "Returned data is not in valid JSON format.",
            msgAJAXerror: "AJAX error. See console for more details.",
            msgRefresh: "Refreshing...",
            msgNeedReload: "Your remote data source record count has changed, reloading from the first record.",
            msgEmpty: "",
            buttons: {
                reload: {
                    type: "button",
                    id: "w2ui-reload",
                    icon: "w2ui-icon-reload",
                    tooltip: "Reload data in the list"
                },
                columns: {
                    type: "drop",
                    id: "w2ui-column-on-off",
                    icon: "w2ui-icon-columns",
                    tooltip: "Show/hide columns",
                    arrow: !1,
                    html: ""
                },
                search: {
                    type: "html",
                    id: "w2ui-search",
                    html: "<div class=\"w2ui-icon icon-search-down w2ui-search-down\" onclick=\"var obj = w2ui[jQuery(this).parents('divgrid').attr('name')]; obj.searchShowFields();\"></div>"
                },
                "search-go": {
                    type: "drop",
                    id: "w2ui-search-advanced",
                    icon: "w2ui-icon-search",
                    text: "Search",
                    tooltip: "Open Search Fields"
                },
                add: {
                    type: "button",
                    id: "w2ui-add",
                    text: "Add New",
                    tooltip: "Add new record",
                    icon: "w2ui-icon-plus"
                },
                edit: {
                    type: "button",
                    id: "w2ui-edit",
                    text: "Edit",
                    tooltip: "Edit selected record",
                    icon: "w2ui-icon-pencil",
                    disabled: !0
                },
                delete: {
                    type: "button",
                    id: "w2ui-delete",
                    text: "Delete",
                    tooltip: "Delete selected records",
                    icon: "w2ui-icon-cross",
                    disabled: !0
                },
                save: {
                    type: "button",
                    id: "w2ui-save",
                    text: "Save",
                    tooltip: "Save changed records",
                    icon: "w2ui-icon-check"
                }
            },
            operators: {
                text: ["is", "begins", "contains", "ends"],
                number: ["is", "between", {
                    oper: "less",
                    text: "less than"
                }, {
                        oper: "more",
                        text: "more than"
                    }],
                date: ["is", "between", {
                    oper: "less",
                    text: "before"
                }, {
                        oper: "more",
                        text: "after"
                    }],
                list: ["is"],
                hex: ["is", "between"],
                color: ["is", "begins", "contains", "ends"],
                enum: ["in", "not in"]
            },
            operatorsMap: {
                text: "text",
                int: "number",
                float: "number",
                money: "number",
                currency: "number",
                percent: "number",
                hex: "hex",
                alphanumeric: "text",
                color: "color",
                date: "date",
                time: "date",
                datetime: "date",
                list: "list",
                combo: "text",
                enum: "enum",
                file: "enum",
                select: "list",
                radio: "list",
                checkbox: "list",
                toggle: "list"
            },
            onAdd: null,
            onEdit: null,
            onRequest: null,
            onLoad: null,
            onDelete: null,
            onSave: null,
            onSelect: null,
            onUnselect: null,
            onClick: null,
            onDblClick: null,
            onContextMenu: null,
            onMenuClick: null,
            onColumnClick: null,
            onColumnDblClick: null,
            onColumnResize: null,
            onColumnAutoResize: null,
            onSort: null,
            onSearch: null,
            onSearchOpen: null,
            onChange: null,
            onRestore: null,
            onExpand: null,
            onCollapse: null,
            onError: null,
            onKeydown: null,
            onToolbar: null,
            onColumnOnOff: null,
            onCopy: null,
            onPaste: null,
            onSelectionExtend: null,
            onEditField: null,
            onRender: null,
            onRefresh: null,
            onReload: null,
            onResize: null,
            onDestroy: null,
            onStateSave: null,
            onStateRestore: null,
            onFocus: null,
            onBlur: null,
            onReorderRow: null,
            add: function (a, b) {
                $.isArray(a) || (a = [a]);
                for (var c = 0, d = 0; d < a.length; d++) {
                    var e = a[d];
                    null != e.recid || null != e[this.recid] ? (e.w2ui && e.w2ui.summary === !0 ? b ? this.summary.unshift(e) : this.summary.push(e) : b ? this.records.unshift(e) : this.records.push(e), c++) : console.log("ERROR: Cannot add record without recid. (obj: " + this.name + ")")
                }
                var f = "object" != typeof this.url ? this.url : this.url.get;
                return f ? (this.refresh(), c) : (this.total = this.records.length, this.localSort(!1, !0), this.localSearch(), this.refreshBody(), this.resizeRecords(), c)
            },
            find: function (a, b) {
                null == a && (a = {});
                var c = [],
                    d = !1;
                for (var e in a) String(e).indexOf(".") != -1 && (d = !0);
                for (var f = 0; f < this.records.length; f++) {
                    var g = !0;
                    for (var e in a) {
                        var h = this.records[f][e];
                        d && String(e).indexOf(".") != -1 && (h = this.parseField(this.records[f], e)), "not-null" == a[e] ? null != h && "" !== h || (g = !1) : a[e] != h && (g = !1)
                    }
                    g && b !== !0 && c.push(this.records[f].recid), g && b === !0 && c.push(f)
                }
                return c
            },
            set: function (a, b, c) {
                if ("object" == typeof a && null !== a && (c = b, b = a, a = null), null == a) {
                    for (var d = 0; d < this.records.length; d++) $.extend(!0, this.records[d], b);
                    c !== !0 && this.refresh()
                } else {
                    var e = this.get(a, !0);
                    if (null == e) return !1;
                    var f = !this.records[e] || this.records[e].recid != a;
                    f ? $.extend(!0, this.summary[e], b) : $.extend(!0, this.records[e], b), c !== !0 && this.refreshRow(a, e)
                }
                return !0
            },
            get: function (a, b) {
                if ($.isArray(a)) {
                    for (var c = [], d = 0; d < a.length; d++) {
                        var e = this.get(a[d], b);
                        null !== e && c.push(e)
                    }
                    return c
                }
                var f = this.last.idCache;
                f || (this.last.idCache = f = {});
                var d = f[a];
                if ("number" == typeof d) {
                    if (d >= 0 && d < this.records.length && this.records[d].recid == a) return b === !0 ? d : this.records[d];
                    if (d = ~d, d >= 0 && d < this.summary.length && this.summary[d].recid == a) return b === !0 ? d : this.summary[d];
                    this.last.idCache = f = {}
                }
                for (var d = 0; d < this.records.length; d++)
                    if (this.records[d].recid == a) return f[a] = d, b === !0 ? d : this.records[d];
                for (var d = 0; d < this.summary.length; d++)
                    if (this.summary[d].recid == a) return f[a] = ~d, b === !0 ? d : this.summary[d];
                return null
            },
            getFirst: function () {
                if (0 == this.records.length) return null;
                var a = this.records[0].recid,
                    b = this.last.searchIds;
                return this.searchData.length > 0 && (a = Array.isArray(b) && b.length > 0 ? this.records[b[0]].recid : null), a
            },
            remove: function () {
                for (var a = 0, b = 0; b < arguments.length; b++) {
                    for (var c = this.records.length - 1; c >= 0; c--) this.records[c].recid == arguments[b] && (this.records.splice(c, 1), a++);
                    for (var c = this.summary.length - 1; c >= 0; c--) this.summary[c].recid == arguments[b] && (this.summary.splice(c, 1), a++)
                }
                var d = "object" != typeof this.url ? this.url : this.url.get;
                return d || (this.localSort(!1, !0), this.localSearch()), this.refresh(), a
            },
            addColumn: function (a, b) {
                var c = 0;
                1 == arguments.length ? (b = a, a = this.columns.length) : ("string" == typeof a && (a = this.getColumn(a, !0)), null == a && (a = this.columns.length)), $.isArray(b) || (b = [b]);
                for (var d = 0; d < b.length; d++) {
                    if (this.columns.splice(a, 0, b[d]), b[d].searchable) {
                        var e = b[d].searchable,
                            f = "";
                        b[d].searchable === !0 && (e = "text", f = 'size="20"'), this.addSearch({
                            field: b[d].field,
                            caption: b[d].caption,
                            type: e,
                            attr: f
                        })
                    }
                    a++ , c++
                }
                return this.refresh(), c
            },
            removeColumn: function () {
                for (var a = 0, b = 0; b < arguments.length; b++)
                    for (var c = this.columns.length - 1; c >= 0; c--) this.columns[c].field == arguments[b] && (this.columns[c].searchable && this.removeSearch(arguments[b]), this.columns.splice(c, 1), a++);
                return this.refresh(), a
            },
            getColumn: function (a, b) {
                if (0 === arguments.length) {
                    for (var c = [], d = 0; d < this.columns.length; d++) c.push(this.columns[d].field);
                    return c
                }
                for (var d = 0; d < this.columns.length; d++)
                    if (this.columns[d].field == a) return b === !0 ? d : this.columns[d];
                return null
            },
            toggleColumn: function () {
                for (var a = 0, b = 0; b < arguments.length; b++)
                    for (var c = this.columns.length - 1; c >= 0; c--) {
                        var d = this.columns[c];
                        d.field == arguments[b] && (d.hidden = !d.hidden, a++)
                    }
                return this.refreshBody(), this.resizeRecords(), a
            },
            showColumn: function () {
                for (var a = 0, b = 0; b < arguments.length; b++)
                    for (var c = this.columns.length - 1; c >= 0; c--) {
                        var d = this.columns[c];
                        d.gridMinWidth && delete d.gridMinWidth, d.field == arguments[b] && d.hidden !== !1 && (d.hidden = !1, a++)
                    }
                return this.refreshBody(), this.resizeRecords(), this.scroll(), a
            },
            hideColumn: function () {
                for (var a = 0, b = 0; b < arguments.length; b++)
                    for (var c = this.columns.length - 1; c >= 0; c--) {
                        var d = this.columns[c];
                        d.field == arguments[b] && d.hidden !== !0 && (d.hidden = !0, a++)
                    }
                return this.refreshBody(), this.resizeRecords(), this.scroll(), a
            },
            addSearch: function (a, b) {
                var c = 0;
                1 == arguments.length ? (b = a, a = this.searches.length) : ("string" == typeof a && (a = this.getSearch(a, !0)), null == a && (a = this.searches.length)), $.isArray(b) || (b = [b]);
                for (var d = 0; d < b.length; d++) this.searches.splice(a, 0, b[d]), a++ , c++;
                return this.searchClose(), c
            },
            removeSearch: function () {
                for (var a = 0, b = 0; b < arguments.length; b++)
                    for (var c = this.searches.length - 1; c >= 0; c--) this.searches[c].field == arguments[b] && (this.searches.splice(c, 1), a++);
                return this.searchClose(), a
            },
            getSearch: function (a, b) {
                if (0 === arguments.length) {
                    for (var c = [], d = 0; d < this.searches.length; d++) c.push(this.searches[d].field);
                    return c
                }
                for (var d = 0; d < this.searches.length; d++)
                    if (this.searches[d].field == a) return b === !0 ? d : this.searches[d];
                return null
            },
            toggleSearch: function () {
                for (var a = 0, b = 0; b < arguments.length; b++)
                    for (var c = this.searches.length - 1; c >= 0; c--) this.searches[c].field == arguments[b] && (this.searches[c].hidden = !this.searches[c].hidden, a++);
                return this.searchClose(), a
            },
            showSearch: function () {
                for (var a = 0, b = 0; b < arguments.length; b++)
                    for (var c = this.searches.length - 1; c >= 0; c--) this.searches[c].field == arguments[b] && this.searches[c].hidden !== !1 && (this.searches[c].hidden = !1, a++);
                return this.searchClose(), a
            },
            hideSearch: function () {
                for (var a = 0, b = 0; b < arguments.length; b++)
                    for (var c = this.searches.length - 1; c >= 0; c--) this.searches[c].field == arguments[b] && this.searches[c].hidden !== !0 && (this.searches[c].hidden = !0, a++);
                return this.searchClose(), a
            },
            getSearchData: function (a) {
                for (var b = 0; b < this.searchData.length; b++)
                    if (this.searchData[b].field == a) return this.searchData[b];
                return null
            },
            localSort: function (a, b) {
                function c() {
                    for (var a = 0; a < k.records.length; a++) {
                        var b = k.records[a];
                        b.w2ui && null != b.w2ui.parent_recid && (b.w2ui._path = f(b))
                    }
                }

                function d() {
                    for (var a = 0; a < k.records.length; a++) {
                        var b = k.records[a];
                        b.w2ui && null != b.w2ui.parent_recid && (b.w2ui._path = null)
                    }
                }

                function e(a, b) {
                    if (!(a.w2ui && null != a.w2ui.parent_recid || b.w2ui && null != b.w2ui.parent_recid)) return g(a, b);
                    for (var c = f(a), d = f(b), e = 0; e < Math.min(c.length, d.length); e++) {
                        var h = g(c[e], d[e]);
                        if (0 !== h) return h
                    }
                    return c.length > d.length ? 1 : c.length < d.length ? -1 : (console.log("ERROR: two paths should not be equal."), 0)
                }

                function f(a) {
                    if (!a.w2ui || null == a.w2ui.parent_recid) return [a];
                    if (a.w2ui._path) return a.w2ui._path;
                    var b = k.get(a.w2ui.parent_recid);
                    return b ? f(b).concat(a) : (console.log("ERROR: no parent record: " + a.w2ui.parent_recid), [a])
                }

                function g(a, b) {
                    if (a === b) return 0;
                    for (var c = 0; c < k.sortData.length; c++) {
                        var d = k.sortData[c].field,
                            e = k.sortData[c].field_ ? k.sortData[c].field_ : d,
                            f = a[e],
                            g = b[e];
                        String(d).indexOf(".") != -1 && (f = k.parseField(a, e), g = k.parseField(b, e));
                        var i = k.getColumn(d);
                        i && null != i.editable && ($.isPlainObject(f) && f.text && (f = f.text), $.isPlainObject(g) && g.text && (g = g.text));
                        var j = h(f, g, c, k.sortData[c].direction, i.sortMode || "default");
                        if (0 !== j) return j
                    }
                    var j = h(a.recid, b.recid, -1, "asc");
                    return j
                }

                function h(a, b, c, d, e) {
                    if (a === b) return 0;
                    if ((null == a || "" === a) && null != b && "" !== b) return 1;
                    if (null != a && "" !== a && (null == b || "" === b)) return -1;
                    var f = "asc" === d.toLowerCase() ? 1 : -1;
                    if (typeof a != typeof b) return typeof a > typeof b ? f : -f;
                    if (a.constructor.name != b.constructor.name) return a.constructor.name > b.constructor.name ? f : -f;
                    a && "object" == typeof a && (a = a.valueOf()), b && "object" == typeof b && (b = b.valueOf());
                    var g = {}.toString;
                    switch (a && "object" == typeof a && a.toString != g && (a = String(a)), b && "object" == typeof b && b.toString != g && (b = String(b)), "string" == typeof a && (a = $.trim(a.toLowerCase())), "string" == typeof b && (b = $.trim(b.toLowerCase())), e) {
                        case "natural":
                            e = w2utils.naturalCompare
                    }
                    return "function" == typeof e ? e(a, b) * f : a > b ? f : a < b ? -f : 0
                }
                var i = "object" != typeof this.url ? this.url : this.url.get;
                if (i) return void console.log("ERROR: grid.localSort can only be used on local data source, grid.url should be empty.");
                if (!$.isEmptyObject(this.sortData)) {
                    var j = (new Date).getTime(),
                        k = this;
                    k.selectionSave(), k.prepareData(), b || k.reset();
                    for (var l = 0; l < this.sortData.length; l++) {
                        var m = this.getColumn(this.sortData[l].field);
                        if (!m) return;
                        "string" == typeof m.render && (["date", "age"].indexOf(m.render.split(":")[0]) != -1 && (this.sortData[l].field_ = m.field + "_"), ["time"].indexOf(m.render.split(":")[0]) != -1 && (this.sortData[l].field_ = m.field + "_"))
                    }
                    return c(), this.records.sort(function (a, b) {
                        return e(a, b)
                    }), d(), k.selectionRestore(b), j = (new Date).getTime() - j, a !== !0 && k.show.statusSort && setTimeout(function () {
                        k.status(w2utils.lang("Sorting took") + " " + j / 1e3 + " " + w2utils.lang("sec"))
                    }, 10), j
                }
            },
            localSearch: function (a) {
                function b(a) {
                    for (var c = 0, d = 0; d < f.searchData.length; d++) {
                        var e = f.searchData[d],
                            h = f.getSearch(e.field);
                        if (null != e) {
                            null == h && (h = {
                                field: e.field,
                                type: e.type
                            });
                            var i = f.parseField(a, h.field),
                                j = null === i || void 0 === i || "object" == typeof i && i.toString == g ? "" : String(i).toLowerCase();
                            if (null != e.value)
                                if ($.isArray(e.value)) var k = e.value[0],
                                    l = e.value[1];
                                else var k = String(e.value).toLowerCase();
                            switch (e.operator) {
                                case "is":
                                    if (f.parseField(a, h.field) == e.value) c++;
                                    else if ("date" == h.type) {
                                        var m = f.parseField(a, h.field + "_") instanceof Date ? f.parseField(a, h.field + "_") : f.parseField(a, h.field),
                                            j = w2utils.formatDate(m, "yyyy-mm-dd"),
                                            k = w2utils.formatDate(w2utils.isDate(k, w2utils.settings.dateFormat, !0), "yyyy-mm-dd");
                                        j == k && c++
                                    } else if ("time" == h.type) {
                                        var m = f.parseField(a, h.field + "_") instanceof Date ? f.parseField(a, h.field + "_") : f.parseField(a, h.field),
                                            j = w2utils.formatTime(m, "hh24:mi"),
                                            k = w2utils.formatTime(k, "hh24:mi");
                                        j == k && c++
                                    } else if ("datetime" == h.type) {
                                        var m = f.parseField(a, h.field + "_") instanceof Date ? f.parseField(a, h.field + "_") : f.parseField(a, h.field),
                                            j = w2utils.formatDateTime(m, "yyyy-mm-dd|hh24:mm:ss"),
                                            k = w2utils.formatDateTime(w2utils.isDateTime(k, w2utils.settings.datetimeFormat, !0), "yyyy-mm-dd|hh24:mm:ss");
                                        j == k && c++
                                    }
                                    break;
                                case "between":
                                    if (["int", "float", "money", "currency", "percent"].indexOf(h.type) != -1) parseFloat(f.parseField(a, h.field)) >= parseFloat(k) && parseFloat(f.parseField(a, h.field)) <= parseFloat(l) && c++;
                                    else if ("date" == h.type) {
                                        var m = f.parseField(a, h.field + "_") instanceof Date ? f.parseField(a, h.field + "_") : f.parseField(a, h.field),
                                            j = w2utils.isDate(m, w2utils.settings.dateFormat, !0),
                                            k = w2utils.isDate(k, w2utils.settings.dateFormat, !0),
                                            l = w2utils.isDate(l, w2utils.settings.dateFormat, !0);
                                        null != l && (l = new Date(l.getTime() + 864e5)), j >= k && j < l && c++
                                    } else if ("time" == h.type) {
                                        var j = f.parseField(a, h.field + "_") instanceof Date ? f.parseField(a, h.field + "_") : f.parseField(a, h.field),
                                            k = w2utils.isTime(k, !0),
                                            l = w2utils.isTime(l, !0);
                                        k = (new Date).setHours(k.hours, k.minutes, k.seconds ? k.seconds : 0, 0), l = (new Date).setHours(l.hours, l.minutes, l.seconds ? l.seconds : 0, 0), j >= k && j < l && c++
                                    } else if ("datetime" == h.type) {
                                        var j = f.parseField(a, h.field + "_") instanceof Date ? f.parseField(a, h.field + "_") : f.parseField(a, h.field),
                                            k = w2utils.isDateTime(k, w2utils.settings.datetimeFormat, !0),
                                            l = w2utils.isDateTime(l, w2utils.settings.datetimeFormat, !0);
                                        l && (l = new Date(l.getTime() + 864e5)), j >= k && j < l && c++
                                    }
                                    break;
                                case "less":
                                    if (["int", "float", "money", "currency", "percent"].indexOf(h.type) != -1) parseFloat(f.parseField(a, h.field)) <= parseFloat(e.value) && c++;
                                    else if ("date" == h.type) {
                                        var m = f.parseField(a, h.field + "_") instanceof Date ? f.parseField(a, h.field + "_") : f.parseField(a, h.field),
                                            j = w2utils.isDate(m, w2utils.settings.dateFormat, !0),
                                            k = w2utils.isDate(k, w2utils.settings.dateFormat, !0);
                                        j < k && c++
                                    } else if ("time" == h.type) {
                                        var m = f.parseField(a, h.field + "_") instanceof Date ? f.parseField(a, h.field + "_") : f.parseField(a, h.field),
                                            j = w2utils.formatTime(m, "hh24:mi"),
                                            k = w2utils.formatTime(k, "hh24:mi");
                                        j < k && c++
                                    } else if ("datetime" == h.type) {
                                        var m = f.parseField(a, h.field + "_") instanceof Date ? f.parseField(a, h.field + "_") : f.parseField(a, h.field),
                                            j = w2utils.formatDateTime(m, "yyyy-mm-dd|hh24:mm:ss"),
                                            k = w2utils.formatDateTime(w2utils.isDateTime(k, w2utils.settings.datetimeFormat, !0), "yyyy-mm-dd|hh24:mm:ss");
                                        j.length == k.length && j < k && c++
                                    }
                                    break;
                                case "more":
                                    if (["int", "float", "money", "currency", "percent"].indexOf(h.type) != -1) parseFloat(f.parseField(a, h.field)) >= parseFloat(e.value) && c++;
                                    else if ("date" == h.type) {
                                        var m = f.parseField(a, h.field + "_") instanceof Date ? f.parseField(a, h.field + "_") : f.parseField(a, h.field),
                                            j = w2utils.isDate(m, w2utils.settings.dateFormat, !0),
                                            k = w2utils.isDate(k, w2utils.settings.dateFormat, !0);
                                        j >= k && c++
                                    } else if ("time" == h.type) {
                                        var m = f.parseField(a, h.field + "_") instanceof Date ? f.parseField(a, h.field + "_") : f.parseField(a, h.field),
                                            j = w2utils.formatTime(m, "hh24:mi"),
                                            k = w2utils.formatTime(k, "hh24:mi");
                                        j >= k && c++
                                    } else if ("datetime" == h.type) {
                                        var m = f.parseField(a, h.field + "_") instanceof Date ? f.parseField(a, h.field + "_") : f.parseField(a, h.field),
                                            j = w2utils.formatDateTime(m, "yyyy-mm-dd|hh24:mm:ss"),
                                            k = w2utils.formatDateTime(w2utils.isDateTime(k, w2utils.settings.datetimeFormat, !0), "yyyy-mm-dd|hh24:mm:ss");
                                        j.length == k.length && j >= k && c++
                                    }
                                    break;
                                case "in":
                                    var m = e.value;
                                    e.svalue && (m = e.svalue), m.indexOf(w2utils.isFloat(i) ? parseFloat(i) : i) === -1 && m.indexOf(j) === -1 || c++;
                                    break;
                                case "not in":
                                    var m = e.value;
                                    e.svalue && (m = e.svalue), m.indexOf(w2utils.isFloat(i) ? parseFloat(i) : i) === -1 && m.indexOf(j) === -1 && c++;
                                    break;
                                case "begins":
                                case "begins with":
                                    0 === j.indexOf(k) && c++;
                                    break;
                                case "contains":
                                    j.indexOf(k) >= 0 && c++;
                                    break;
                                case "null":
                                    null == f.parseField(a, h.field) && c++;
                                    break;
                                case "not null":
                                    null != f.parseField(a, h.field) && c++;
                                    break;
                                case "ends":
                                case "ends with":
                                    var n = j.lastIndexOf(k);
                                    n !== -1 && n == j.length - k.length && c++
                            }
                        }
                    }
                    if ("OR" == f.last.logic && 0 !== c || "AND" == f.last.logic && c == f.searchData.length) return !0;
                    if (a.w2ui && a.w2ui.children && a.w2ui.expanded !== !0)
                        for (var o = 0; o < a.w2ui.children.length; o++) {
                            var p = a.w2ui.children[o];
                            if (b(p)) return !0
                        }
                    return !1
                }

                function c(a) {
                    if (void 0 !== a && !h[a]) {
                        h[a] = !0;
                        var b = f.get(a, !0);
                        if (null != b && $.inArray(b, f.last.searchIds) == -1) {
                            var d = f.records[b];
                            d && d.w2ui && c(d.w2ui.parent_recid), f.last.searchIds.push(b)
                        }
                    }
                }
                var d = "object" != typeof this.url ? this.url : this.url.get;
                if (d) return void console.log("ERROR: grid.localSearch can only be used on local data source, grid.url should be empty.");
                var e = (new Date).getTime(),
                    f = this,
                    g = {}.toString,
                    h = {};
                if (this.total = this.records.length, this.last.searchIds = [], this.prepareData(), this.searchData.length > 0 && !d) {
                    this.total = 0;
                    for (var i = 0; i < this.records.length; i++) {
                        var j = this.records[i],
                            k = b(j);
                        if (k)
                            if (j && j.w2ui && c(j.w2ui.parent_recid), this.searchContextRows && this.searchContextRows > 0) {
                                var l = this.searchContextRows,
                                    m = this.searchContextRows;
                                if (i < l && (l = i), i + m > this.records.length && (m = this.records.length - i), l > 0)
                                    for (var n = i - l; n < i; n++) this.last.searchIds.indexOf(n) < 0 && this.last.searchIds.push(n);
                                if (this.last.searchIds.indexOf(i) < 0 && this.last.searchIds.push(i), m > 0)
                                    for (var n = i + 1; n <= i + m; n++) this.last.searchIds.indexOf(n) < 0 && this.last.searchIds.push(n)
                            } else this.last.searchIds.push(i)
                    }
                    this.total = this.last.searchIds.length
                }
                return e = (new Date).getTime() - e, a !== !0 && f.show.statusSearch && setTimeout(function () {
                    f.status(w2utils.lang("Search took") + " " + e / 1e3 + " " + w2utils.lang("sec"))
                }, 10), e
            },
            getRangeData: function (a, b) {
                var c = this.get(a[0].recid, !0),
                    d = this.get(a[1].recid, !0),
                    e = a[0].column,
                    f = a[1].column,
                    g = [];
                if (e == f)
                    for (var h = c; h <= d; h++) {
                        var i = this.records[h],
                            j = i[this.columns[e].field] || null;
                        b !== !0 ? g.push(j) : g.push({
                            data: j,
                            column: e,
                            index: h,
                            record: i
                        })
                    } else if (c == d)
                    for (var i = this.records[c], k = e; k <= f; k++) {
                        var j = i[this.columns[k].field] || null;
                        b !== !0 ? g.push(j) : g.push({
                            data: j,
                            column: k,
                            index: c,
                            record: i
                        })
                    } else
                    for (var h = c; h <= d; h++) {
                        var i = this.records[h];
                        g.push([]);
                        for (var k = e; k <= f; k++) {
                            var j = i[this.columns[k].field];
                            b !== !0 ? g[g.length - 1].push(j) : g[g.length - 1].push({
                                data: j,
                                column: k,
                                index: h,
                                record: i
                            })
                        }
                    }
                return g
            },
            addRange: function (a) {
                var b = 0;
                if ("row" == this.selectType) return b;
                $.isArray(a) || (a = [a]);
                for (var c = 0; c < a.length; c++) {
                    if ("object" != typeof a[c] && (a[c] = {
                        name: "selection"
                    }), "selection" == a[c].name) {
                        if (this.show.selectionBorder === !1) continue;
                        var d = this.getSelection();
                        if (0 === d.length) {
                            this.removeRange("selection");
                            continue
                        }
                        var e = d[0],
                            f = d[d.length - 1]
                    } else var e = a[c].range[0],
                        f = a[c].range[1];
                    if (e) {
                        for (var g = {
                            name: a[c].name,
                            range: [{
                                recid: e.recid,
                                column: e.column
                            }, {
                                recid: f.recid,
                                column: f.column
                            }],
                            style: a[c].style || ""
                        }, h = !1, i = 0; i < this.ranges.length; i++)
                            if (this.ranges[i].name == a[c].name) {
                                h = i;
                                break
                            } h !== !1 ? this.ranges[h] = g : this.ranges.push(g), b++
                    }
                }
                return this.refreshRanges(), b
            },
            removeRange: function () {
                for (var a = 0, b = 0; b < arguments.length; b++) {
                    var c = arguments[b];
                    $("#grid_" + this.name + "_" + c).remove(), $("#grid_" + this.name + "_f" + c).remove();
                    for (var d = this.ranges.length - 1; d >= 0; d--) this.ranges[d].name == c && (this.ranges.splice(d, 1), a++)
                }
                return a
            },
            refreshRanges: function () {
                function a(a) {
                    var e = d.getSelection();
                    d.last.move = {
                        type: "expand",
                        x: a.screenX,
                        y: a.screenY,
                        divX: 0,
                        divY: 0,
                        recid: e[0].recid,
                        column: e[0].column,
                        originalRange: [{
                            recid: e[0].recid,
                            column: e[0].column
                        }, {
                            recid: e[e.length - 1].recid,
                            column: e[e.length - 1].column
                        }],
                        newRange: [{
                            recid: e[0].recid,
                            column: e[0].column
                        }, {
                            recid: e[e.length - 1].recid,
                            column: e[e.length - 1].column
                        }]
                    }, $(document).off("" + d.name).on("mousemove" + d.name, b).on("mouseup" + d.name, c), a.preventDefault()
                }

                function b(a) {
                    var b = d.last.move;
                    if (b && "expand" == b.type) {
                        b.divX = a.screenX - b.x, b.divY = a.screenY - b.y;
                        var c, e, f = a.originalEvent.target;
                        if ("TD" != f.tagName.toUpperCase() && (f = $(f).parents("td")[0]), null != $(f).attr("col") && (e = parseInt($(f).attr("col"))), f = $(f).parents("tr")[0], c = $(f).attr("recid"), b.newRange[1].recid != c || b.newRange[1].column != e) {
                            var g = $.extend({}, b.newRange);
                            return b.newRange = [{
                                recid: b.recid,
                                column: b.column
                            }, {
                                recid: c,
                                column: e
                            }], B = d.trigger($.extend(B, {
                                originalRange: b.originalRange,
                                newRange: b.newRange
                            })), B.isCancelled === !0 ? (b.newRange = g, void (B.newRange = g)) : (d.removeRange("grid-selection-expand"), void d.addRange({
                                name: "grid-selection-expand",
                                range: B.newRange,
                                style: "background-color: rgba(100,100,100,0.1); border: 2px dotted rgba(100,100,100,0.5);"
                            }))
                        }
                    }
                }

                function c(a) {
                    d.removeRange("grid-selection-expand"), delete d.last.move, $(document).off("" + d.name), d.trigger($.extend(B, {
                        phase: "after"
                    }))
                }
                if (0 !== this.ranges.length) {
                    for (var d = this, e = (new Date).getTime(), f = $("#grid_" + this.name + "_frecords"), g = $("#grid_" + this.name + "_records"), h = 0; h < this.ranges.length; h++) {
                        var i = this.ranges[h],
                            j = i.range[0],
                            k = i.range[1];
                        null == j.index && (j.index = this.get(j.recid, !0)), null == k.index && (k.index = this.get(k.recid, !0));
                        var l = $("#grid_" + this.name + "_rec_" + w2utils.escapeId(j.recid) + ' td[col="' + j.column + '"]'),
                            m = $("#grid_" + this.name + "_rec_" + w2utils.escapeId(k.recid) + ' td[col="' + k.column + '"]'),
                            n = $("#grid_" + this.name + "_frec_" + w2utils.escapeId(j.recid) + ' td[col="' + j.column + '"]'),
                            o = $("#grid_" + this.name + "_frec_" + w2utils.escapeId(k.recid) + ' td[col="' + k.column + '"]'),
                            p = k.column;
                        j.column < this.last.colStart && k.column > this.last.colStart && (l = $("#grid_" + this.name + "_rec_" + w2utils.escapeId(j.recid) + ' td[col="start"]')), j.column < this.last.colEnd && k.column > this.last.colEnd && (p = '"end"', m = $("#grid_" + this.name + "_rec_" + w2utils.escapeId(k.recid) + ' td[col="end"]'));
                        var q = parseInt($("#grid_" + this.name + "_rec_top").next().attr("index")),
                            r = parseInt($("#grid_" + this.name + "_rec_bottom").prev().attr("index")),
                            s = parseInt($("#grid_" + this.name + "_frec_top").next().attr("index")),
                            t = parseInt($("#grid_" + this.name + "_frec_bottom").prev().attr("index"));
                        0 === l.length && j.index < q && k.index > q && (l = $("#grid_" + this.name + "_rec_top").next().find("td[col=" + j.column + "]")), 0 === m.length && k.index > r && j.index < r && (m = $("#grid_" + this.name + "_rec_bottom").prev().find("td[col=" + p + "]")), 0 === n.length && j.index < s && k.index > s && (n = $("#grid_" + this.name + "_frec_top").next().find("td[col=" + j.column + "]")), 0 === o.length && k.index > t && j.index < t && (o = $("#grid_" + this.name + "_frec_bottom").prev().find("td[col=" + k.column + "]"));
                        var u = $(this.box).find("#grid_" + this.name + "_editable"),
                            v = u.find(".form-control"),
                            w = v.attr("recid"),
                            x = v.attr("column");
                        if ("selection" != i.name || i.range[0].recid != w || i.range[0].column != x) {
                            var y = $("#grid_" + this.name + "_f" + i.name);
                            if (n.length > 0 || o.length > 0)
                                if (0 === y.length ? (f.append('<div id="grid_' + this.name + "_f" + i.name + '" class="w2ui-selection" style="' + i.style + '">' + ("selection" == i.name ? '<div id="grid_' + this.name + '_resizer" class="w2ui-selection-resizer"></div>' : "") + "</div>"), y = $("#grid_" + this.name + "_f" + i.name)) : (y.attr("style", i.style), y.find("selection-resizer").show()), 0 === o.length && (o = $("#grid_" + this.name + "_frec_" + w2utils.escapeId(k.recid) + " td:last-child"), 0 === o.length && (o = $("#grid_" + this.name + "_frec_bottom td:first-child")), y.css("border-right", "0px"), y.find("selection-resizer").hide()), null != j.recid && null != k.recid && n.length > 0 && o.length > 0) {
                                    var z = n.position().left - 1 + f.scrollLeft(),
                                        A = n.position().top - 1 + f.scrollTop();
                                    y.show().css({
                                        left: (z > 0 ? z : 0) + "px",
                                        top: (A > 0 ? A : 0) + "px",
                                        width: o.position().left - n.position().left + o.width() + 3 + "px",
                                        height: o.position().top - n.position().top + o.height() + 3 + "px"
                                    })
                                } else y.hide();
                            else y.hide();
                            var y = $("#grid_" + this.name + "_" + i.name);
                            if (l.length > 0 || m.length > 0)
                                if (0 === y.length ? (g.append('<div id="grid_' + this.name + "_" + i.name + '" class="w2ui-selection" style="' + i.style + '">' + ("selection" == i.name ? '<div id="grid_' + this.name + '_resizer" class="w2ui-selection-resizer"></div>' : "") + "</div>"), y = $("#grid_" + this.name + "_" + i.name)) : y.attr("style", i.style), 0 === l.length && (l = $("#grid_" + this.name + "_rec_" + w2utils.escapeId(j.recid) + " td:first-child"), 0 === l.length && (l = $("#grid_" + this.name + "_rec_top td:first-child"))), 0 !== o.length && y.css("border-left", "0px"), null != j.recid && null != k.recid && l.length > 0 && m.length > 0) {
                                    var z = l.position().left - 1 + g.scrollLeft(),
                                        A = l.position().top - 1 + g.scrollTop();
                                    y.show().css({
                                        left: (z > 0 ? z : 0) + "px",
                                        top: (A > 0 ? A : 0) + "px",
                                        width: m.position().left - l.position().left + m.width() + 3 + "px",
                                        height: m.position().top - l.position().top + m.height() + 3 + "px"
                                    })
                                } else y.hide();
                            else y.hide()
                        }
                    }
                    $(this.box).find("selection-resizer").off("mousedown").on("mousedown", a).off("dblclick").on("dblclick", function (a) {
                        var b = d.trigger({
                            phase: "before",
                            type: "resizerDblClick",
                            target: d.name,
                            originalEvent: a
                        });
                        b.isCancelled !== !0 && d.trigger($.extend(b, {
                            phase: "after"
                        }))
                    });
                    var B = {
                        phase: "before",
                        type: "selectionExtend",
                        target: d.name,
                        originalRange: null,
                        newRange: null
                    };
                    return (new Date).getTime() - e
                }
            },
            select: function () {
                if (0 === arguments.length) return 0;
                var a = ((new Date).getTime(), 0),
                    b = this.last.selection;
                this.multiSelect || this.selectNone();
                var c = {
                    phase: "before",
                    type: "select",
                    target: this.name
                };
                1 == arguments.length ? (c.multiple = !1, $.isPlainObject(arguments[0]) ? (c.recid = arguments[0].recid, c.column = arguments[0].column) : c.recid = arguments[0]) : (c.multiple = !0, c.recids = Array.prototype.slice.call(arguments, 0));
                var d = this.trigger(c);
                if (d.isCancelled === !0) return 0;
                if ("row" == this.selectType)
                    for (var e = 0; e < arguments.length; e++) {
                        var f = "object" == typeof arguments[e] ? arguments[e].recid : arguments[e],
                            g = this.get(f, !0);
                        if (null != g) {
                            var h = null,
                                i = null;
                            if ((0 !== this.searchData.length || g + 1 >= this.last.range_start && g + 1 <= this.last.range_end) && (h = $("#grid_" + this.name + "_frec_" + w2utils.escapeId(f)), i = $("#grid_" + this.name + "_rec_" + w2utils.escapeId(f))), "row" == this.selectType) {
                                if (b.indexes.indexOf(g) != -1) continue;
                                b.indexes.push(g), h && i && (h.addClass("w2ui-selected").data("selected", "yes").find("col-number").addClass("w2ui-row-selected"), i.addClass("w2ui-selected").data("selected", "yes").find("col-number").addClass("w2ui-row-selected"), h.find("grid-select-check").prop("checked", !0)), a++
                            }
                        }
                    } else {
                    for (var j = {}, e = 0; e < arguments.length; e++) {
                        var f = "object" == typeof arguments[e] ? arguments[e].recid : arguments[e],
                            k = "object" == typeof arguments[e] ? arguments[e].column : null;
                        if (j[f] = j[f] || [], $.isArray(k)) j[f] = k;
                        else if (w2utils.isInt(k)) j[f].push(k);
                        else
                            for (var l = 0; l < this.columns.length; l++) this.columns[l].hidden || j[f].push(parseInt(l))
                    }
                    var m = [];
                    for (var f in j) {
                        var g = this.get(f, !0);
                        if (null != g) {
                            var h = null,
                                i = null;
                            g + 1 >= this.last.range_start && g + 1 <= this.last.range_end && (h = $("#grid_" + this.name + "_rec_" + w2utils.escapeId(f)), i = $("#grid_" + this.name + "_frec_" + w2utils.escapeId(f)));
                            var n = b.columns[g] || [];
                            b.indexes.indexOf(g) == -1 && b.indexes.push(g);
                            for (var o = 0; o < j[f].length; o++) n.indexOf(j[f][o]) == -1 && n.push(j[f][o]);
                            n.sort(function (a, b) {
                                return a - b
                            });
                            for (var o = 0; o < j[f].length; o++) {
                                var p = j[f][o];
                                m.indexOf(p) == -1 && m.push(p), h && (h.find("#grid_" + this.name + "_data_" + g + "_" + p).addClass("w2ui-selected"), h.find("col-number").addClass("w2ui-row-selected"), h.data("selected", "yes"), h.find("grid-select-check").prop("checked", !0)), i && (i.find("#grid_" + this.name + "_data_" + g + "_" + p).addClass("w2ui-selected"), i.find("col-number").addClass("w2ui-row-selected"), i.data("selected", "yes"), i.find("grid-select-check").prop("checked", !0)), a++
                            }
                            b.columns[g] = n
                        }
                    }
                    for (var q = 0; q < m.length; q++) $(this.box).find("#grid_" + this.name + "_column_" + m[q] + " col-header").addClass("w2ui-col-selected")
                }
                b.indexes.sort(function (a, b) {
                    return a - b
                });
                var r = this.records.length > 0 && b.indexes.length == this.records.length,
                    s = b.indexes.length > 0 && 0 !== this.searchData.length && b.indexes.length == this.last.searchIds.length;
                return r || s ? $("#grid_" + this.name + "_check_all").prop("checked", !0) : $("#grid_" + this.name + "_check_all").prop("checked", !1), this.status(), this.addRange("selection"), this.trigger($.extend(d, {
                    phase: "after"
                })), a
            },
            unselect: function () {
                for (var a = 0, b = this.last.selection, c = 0; c < arguments.length; c++) {
                    var d = "object" == typeof arguments[c] ? arguments[c].recid : arguments[c],
                        e = this.get(d);
                    if (null != e) {
                        var f = this.get(e.recid, !0),
                            g = $("#grid_" + this.name + "_frec_" + w2utils.escapeId(d)),
                            h = $("#grid_" + this.name + "_rec_" + w2utils.escapeId(d));
                        if ("row" == this.selectType) {
                            if (b.indexes.indexOf(f) == -1) continue;
                            var i = this.trigger({
                                phase: "before",
                                type: "unselect",
                                target: this.name,
                                recid: d,
                                index: f
                            });
                            if (i.isCancelled === !0) continue;
                            b.indexes.splice(b.indexes.indexOf(f), 1), g.removeClass("w2ui-selected w2ui-inactive").removeData("selected").find("col-number").removeClass("w2ui-row-selected"), h.removeClass("w2ui-selected w2ui-inactive").removeData("selected").find("col-number").removeClass("w2ui-row-selected"), 0 != g.length && (g[0].style.cssText = "height: " + this.recordHeight + "px; " + g.attr("custom_style"), h[0].style.cssText = "height: " + this.recordHeight + "px; " + h.attr("custom_style")), g.find("grid-select-check").prop("checked", !1), a++
                        } else {
                            var j = arguments[c].column;
                            if (!w2utils.isInt(j)) {
                                for (var k = [], l = 0; l < this.columns.length; l++) this.columns[l].hidden || k.push({
                                    recid: d,
                                    column: l
                                });
                                return this.unselect.apply(this, k)
                            }
                            var m = b.columns[f];
                            if (!$.isArray(m) || m.indexOf(j) == -1) continue;
                            var i = this.trigger({
                                phase: "before",
                                type: "unselect",
                                target: this.name,
                                recid: d,
                                column: j
                            });
                            if (i.isCancelled === !0) continue;
                            m.splice(m.indexOf(j), 1), $("#grid_" + this.name + "_rec_" + w2utils.escapeId(d)).find(" > td[col=" + j + "]").removeClass("w2ui-selected w2ui-inactive"), $("#grid_" + this.name + "_frec_" + w2utils.escapeId(d)).find(" > td[col=" + j + "]").removeClass("w2ui-selected w2ui-inactive");
                            for (var n = !1, o = !1, p = this.getSelection(), l = 0; l < p.length; l++) p[l].column == j && (n = !0), p[l].recid == d && (o = !0);
                            n || $(this.box).find("grid-columns td[col=" + j + "] col-header, grid-fcolumns td[col=" + j + "] col-header").removeClass("w2ui-col-selected"), o || $("#grid_" + this.name + "_frec_" + w2utils.escapeId(d)).find("col-number").removeClass("w2ui-row-selected"), a++ , 0 === m.length && (delete b.columns[f], b.indexes.splice(b.indexes.indexOf(f), 1), g.removeData("selected"), g.find("grid-select-check").prop("checked", !1), h.removeData("selected"))
                        }
                        this.trigger($.extend(i, {
                            phase: "after"
                        }))
                    }
                }
                var q = this.records.length > 0 && b.indexes.length == this.records.length,
                    r = b.indexes.length > 0 && 0 !== this.searchData.length && b.indexes.length == this.last.searchIds.length;
                return q || r ? $("#grid_" + this.name + "_check_all").prop("checked", !0) : $("#grid_" + this.name + "_check_all").prop("checked", !1), this.status(), this.addRange("selection"), a
            },
            selectAll: function () {
                var a = (new Date).getTime();
                if (this.multiSelect !== !1) {
                    var b = this.trigger({
                        phase: "before",
                        type: "select",
                        target: this.name,
                        all: !0
                    });
                    if (b.isCancelled !== !0) {
                        for (var c = "object" != typeof this.url ? this.url : this.url.get, d = this.last.selection, e = [], f = 0; f < this.columns.length; f++) e.push(f);
                        if (d.indexes = [], c || 0 === this.searchData.length) {
                            var g = this.records.length;
                            0 == this.searchData.length || c || (g = this.last.searchIds.length);
                            for (var f = 0; f < g; f++) d.indexes.push(f), "row" != this.selectType && (d.columns[f] = e.slice())
                        } else
                            for (var f = 0; f < this.last.searchIds.length; f++) d.indexes.push(this.last.searchIds[f]), "row" != this.selectType && (d.columns[this.last.searchIds[f]] = e.slice());
                        "row" == this.selectType ? ($(this.box).find("grid-records tr").not("empty-record").addClass("w2ui-selected").data("selected", "yes").find("col-number").addClass("w2ui-row-selected"), $(this.box).find("grid-frecords tr").not("empty-record").addClass("w2ui-selected").data("selected", "yes").find("col-number").addClass("w2ui-row-selected"), $(this.box).find("inputgrid-select-check").prop("checked", !0)) : ($(this.box).find("grid-columns td col-header, grid-fcolumns td col-header").addClass("w2ui-col-selected"), $(this.box).find("grid-records tr col-number").addClass("w2ui-row-selected"), $(this.box).find("grid-records tr").not("empty-record").find("grid-data").not("col-select").addClass("w2ui-selected").data("selected", "yes"), $(this.box).find("grid-frecords tr col-number").addClass("w2ui-row-selected"), $(this.box).find("grid-frecords tr").not("empty-record").find("grid-data").not("col-select").addClass("w2ui-selected").data("selected", "yes"), $(this.box).find("inputgrid-select-check").prop("checked", !0));
                        var d = this.getSelection();
                        return 1 == d.length ? this.toolbar.enable("w2ui-edit") : this.toolbar.disable("w2ui-edit"), d.length >= 1 ? this.toolbar.enable("w2ui-delete") : this.toolbar.disable("w2ui-delete"), this.addRange("selection"), $("#grid_" + this.name + "_check_all").prop("checked", !0), this.status(), this.trigger($.extend(b, {
                            phase: "after"
                        })), (new Date).getTime() - a
                    }
                }
            },
            selectNone: function () {
                var a = (new Date).getTime(),
                    b = this.trigger({
                        phase: "before",
                        type: "unselect",
                        target: this.name,
                        all: !0
                    });
                if (b.isCancelled !== !0) {
                    var c = this.last.selection;
                    return "row" == this.selectType ? ($(this.box).find("grid-records trselected").removeClass("w2ui-selected w2ui-inactive").removeData("selected").find("col-number").removeClass("w2ui-row-selected"), $(this.box).find("grid-frecords trselected").removeClass("w2ui-selected w2ui-inactive").removeData("selected").find("col-number").removeClass("w2ui-row-selected"), $(this.box).find("inputgrid-select-check").prop("checked", !1)) : ($(this.box).find("grid-columns td col-header, grid-fcolumns td col-header").removeClass("w2ui-col-selected"), $(this.box).find("grid-records tr col-number").removeClass("w2ui-row-selected"), $(this.box).find("grid-frecords tr col-number").removeClass("w2ui-row-selected"), $(this.box).find("grid-dataselected").removeClass("w2ui-selected w2ui-inactive").removeData("selected"), $(this.box).find("inputgrid-select-check").prop("checked", !1)), c.indexes = [], c.columns = {}, this.toolbar.disable("w2ui-edit", "w2ui-delete"), this.removeRange("selection"), $("#grid_" + this.name + "_check_all").prop("checked", !1), this.status(), this.trigger($.extend(b, {
                        phase: "after"
                    })), (new Date).getTime() - a
                }
            },
            getSelection: function (a) {
                var b = [],
                    c = this.last.selection;
                if ("row" == this.selectType) {
                    for (var d = 0; d < c.indexes.length; d++) this.records[c.indexes[d]] && (a === !0 ? b.push(c.indexes[d]) : b.push(this.records[c.indexes[d]].recid));
                    return b
                }
                for (var d = 0; d < c.indexes.length; d++) {
                    var e = c.columns[c.indexes[d]];
                    if (this.records[c.indexes[d]])
                        for (var f = 0; f < e.length; f++) b.push({
                            recid: this.records[c.indexes[d]].recid,
                            index: parseInt(c.indexes[d]),
                            column: e[f]
                        })
                }
                return b
            },
            search: function (a, b) {
                for (var c = "object" != typeof this.url ? this.url : this.url.get, d = [], e = this.last.multi, f = this.last.logic, g = this.last.field, h = this.last.search, i = !1, j = 0; j < this.searches.length; j++) this.searches[j].hidden && (d.push({
                    field: this.searches[j].field,
                    operator: this.searches[j].operator || "is",
                    type: this.searches[j].type,
                    value: this.searches[j].value || ""
                }), i = !0);
                if (0 === arguments.length) {
                    h = "";
                    for (var j = 0; j < this.searches.length; j++) {
                        var k = this.searches[j],
                            l = $("#grid_" + this.name + "_operator_" + j).val(),
                            m = $("#grid_" + this.name + "_field_" + j),
                            n = $("#grid_" + this.name + "_field2_" + j),
                            o = m.val(),
                            p = n.val(),
                            q = null,
                            r = null;
                        if (["int", "float", "money", "currency", "percent"].indexOf(k.type) != -1) {
                            var s = m.data("w2field"),
                                t = n.data("w2field");
                            s && (o = s.clean(o)), t && (p = t.clean(p))
                        }
                        if (["list", "enum"].indexOf(k.type) != -1)
                            if (o = m.data("selected") || {}, $.isArray(o)) {
                                q = [];
                                for (var u = 0; u < o.length; u++) q.push(w2utils.isFloat(o[u].id) ? parseFloat(o[u].id) : String(o[u].id).toLowerCase()), delete o[u].hidden;
                                $.isEmptyObject(o) && (o = "")
                            } else r = o.text || "", o = o.id || "";
                        if ("" !== o && null != o || null != p && "" !== p) {
                            var v = {
                                field: k.field,
                                type: k.type,
                                operator: l
                            };
                            "between" == l ? $.extend(v, {
                                value: [o, p]
                            }) : "in" == l && "string" == typeof o ? $.extend(v, {
                                value: o.split(",")
                            }) : "not in" == l && "string" == typeof o ? $.extend(v, {
                                value: o.split(",")
                            }) : $.extend(v, {
                                value: o
                            }), q && $.extend(v, {
                                svalue: q
                            }), r && $.extend(v, {
                                text: r
                            });
                            try {
                                "date" == k.type && "between" == l && (v.value[0] = o, v.value[1] = p), "date" == k.type && "is" == l && (v.value = o)
                            } catch (a) { }
                            d.push(v)
                        }
                    }
                    e = !0, f = "AND"
                }
                if ("string" == typeof a && (1 == arguments.length && (b = a, a = "all"), g = a, h = b, e = !1, f = i ? "AND" : "OR", null != b))
                    if ("all" == a.toLowerCase())
                        if (this.searches.length > 0)
                            for (var j = 0; j < this.searches.length; j++) {
                                var k = this.searches[j];
                                if ("text" == k.type || "alphanumeric" == k.type && w2utils.isAlphaNumeric(b) || "int" == k.type && w2utils.isInt(b) || "float" == k.type && w2utils.isFloat(b) || "percent" == k.type && w2utils.isFloat(b) || ("hex" == k.type || "color" == k.type) && w2utils.isHex(b) || "currency" == k.type && w2utils.isMoney(b) || "money" == k.type && w2utils.isMoney(b) || "date" == k.type && w2utils.isDate(b) || "time" == k.type && w2utils.isTime(b) || "datetime" == k.type && w2utils.isDateTime(b) || "datetime" == k.type && w2utils.isDate(b) || "enum" == k.type && w2utils.isAlphaNumeric(b) || "list" == k.type && w2utils.isAlphaNumeric(b)) {
                                    var v = {
                                        field: k.field,
                                        type: k.type,
                                        operator: null != k.operator ? k.operator : "text" == k.type ? this.textSearch : "is",
                                        value: b
                                    };
                                    "" != $.trim(b) && d.push(v)
                                }
                                if (["int", "float", "money", "currency", "percent"].indexOf(k.type) != -1 && 2 == $.trim(String(b)).split("-").length) {
                                    var w = $.trim(String(b)).split("-"),
                                        v = {
                                            field: k.field,
                                            type: k.type,
                                            operator: null != k.operator ? k.operator : "between",
                                            value: [w[0], w[1]]
                                        };
                                    d.push(v)
                                }
                                if (["list", "enum"].indexOf(k.type) != -1) {
                                    for (var x = [], u = 0; u < k.options.items; u++) {
                                        var v = k.options.items[u];
                                        try {
                                            var y = new RegExp(b, "i");
                                            y.test(v) && x.push(u), v.text && y.test(v.text) && x.push(v.id)
                                        } catch (a) { }
                                    }
                                    if (x.length > 0) {
                                        var v = {
                                            field: k.field,
                                            type: k.type,
                                            operator: null != k.operator ? k.operator : "in",
                                            value: x
                                        };
                                        d.push(v)
                                    }
                                }
                            } else
                            for (var j = 0; j < this.columns.length; j++) {
                                var v = {
                                    field: this.columns[j].field,
                                    type: "text",
                                    operator: this.textSearch,
                                    value: b
                                };
                                d.push(v)
                            } else {
                        var z = $("#grid_" + this.name + "_search_all"),
                            k = this.getSearch(a);
                        if (null == k && (k = {
                            field: a,
                            type: "text"
                        }), k.field == a && (this.last.caption = k.caption), "" !== b) {
                            var A = this.textSearch,
                                B = b;
                            if (["date", "time", "datetime"].indexOf(k.type) != -1 && (A = "is"), ["list", "enum"].indexOf(k.type) != -1) {
                                A = "is";
                                var v = z.data("selected");
                                B = v && !$.isEmptyObject(v) ? v.id : ""
                            }
                            if ("int" == k.type && "" !== b) {
                                if (A = "is", String(b).indexOf("-") != -1) {
                                    var v = b.split("-");
                                    2 == v.length && (A = "between", B = [parseInt(v[0]), parseInt(v[1])])
                                }
                                if (String(b).indexOf(",") != -1) {
                                    var v = b.split(",");
                                    A = "in", B = [];
                                    for (var j = 0; j < v.length; j++) B.push(v[j])
                                }
                            }
                            null != k.operator && (A = k.operator);
                            var v = {
                                field: k.field,
                                type: k.type,
                                operator: A,
                                value: B
                            };
                            d.push(v)
                        }
                    }
                if ($.isArray(a)) {
                    var C = "AND";
                    "string" == typeof b && (C = b.toUpperCase(), "OR" != C && "AND" != C && (C = "AND")), h = "", e = !0, f = C;
                    for (var j = 0; j < a.length; j++) {
                        var D = a[j],
                            k = this.getSearch(D.field);
                        if (null == k && (k = {
                            type: "text",
                            operator: this.textSearch
                        }), $.isArray(D.value))
                            for (var u = 0; u < D.value.length; u++) "string" == typeof D.value[u] && (D.value[u] = D.value[u].toLowerCase());
                        d.push($.extend(!0, {}, k, D))
                    }
                }
                var E = this.trigger({
                    phase: "before",
                    type: "search",
                    multi: 0 === arguments.length,
                    target: this.name,
                    searchData: d,
                    searchField: a ? a : "multi",
                    searchValue: a ? b : "multi"
                });
                E.isCancelled !== !0 && (this.searchData = E.searchData, this.last.field = g, this.last.search = h, this.last.multi = e, this.last.logic = f, this.last.scrollTop = 0, this.last.scrollLeft = 0, this.last.selection.indexes = [], this.last.selection.columns = {}, this.searchClose(), c ? (this.last.xhr_offset = 0, this.reload()) : (this.localSearch(), this.refresh()), this.trigger($.extend(E, {
                    phase: "after"
                })))
            },
            searchOpen: function () {
                if (this.box && 0 !== this.searches.length) {
                    var a = this,
                        b = a.toolbar.get("w2ui-search-advanced"),
                        c = "#tb_" + a.toolbar.name + "_item_" + w2utils.escapeId(b.id) + " tablebutton",
                        d = this.trigger({
                            phase: "before",
                            type: "searchOpen",
                            target: this.name
                        });
                    return d.isCancelled === !0 ? void setTimeout(function () {
                        a.toolbar.uncheck("w2ui-search-advanced")
                    }, 1) : void $("#tb_" + this.name + "_toolbar_item_w2ui-search-advanced").w2overlay({
                        html: this.getSearchesHTML(),
                        name: this.name + "-searchOverlay",
                        left: -10,
                        class: "w2ui-grid-searches",
                        onShow: function () {
                            a.initSearches(), $("#w2ui-overlay-" + a.name + "-searchOverlay grid-searches").data("grid-name", a.name);
                            var e = $("#w2ui-overlay-" + this.name + "-searchOverlay grid-searches *[rel=search]");
                            e.length > 0 && e[0].focus(), b.checked || (b.checked = !0, $(c).addClass("checked")), a.trigger($.extend(d, {
                                phase: "after"
                            }))
                        },
                        onHide: function () {
                            b.checked = !1, $(c).removeClass("checked")
                        }
                    })
                }
            },
            searchClose: function () {
                this.box && 0 !== this.searches.length && (this.toolbar && this.toolbar.uncheck("w2ui-search-advanced"), $().w2overlay({
                    name: this.name + "-searchOverlay"
                }))
            },
            searchReset: function (a) {
                for (var b = [], c = !1, d = 0; d < this.searches.length; d++) this.searches[d].hidden && (b.push({
                    field: this.searches[d].field,
                    operator: this.searches[d].operator || "is",
                    type: this.searches[d].type,
                    value: this.searches[d].value || ""
                }), c = !0);
                var e = this.trigger({
                    phase: "before",
                    type: "search",
                    reset: !0,
                    target: this.name,
                    searchData: b
                });
                if (e.isCancelled !== !0) {
                    if (this.searchData = e.searchData, this.last.search = "", this.last.logic = c ? "AND" : "OR", this.searches.length > 0)
                        if (this.multiSearch && this.show.searchAll) this.last.field = "all", this.last.caption = w2utils.lang("All Fields");
                        else {
                            for (var f = 0; f < this.searches.length && (this.searches[f].hidden || this.searches[f].simple === !1);) f++;
                            f >= this.searches.length ? (this.last.field = "", this.last.caption = "") : (this.last.field = this.searches[f].field, this.last.caption = this.searches[f].caption)
                        } this.last.multi = !1, this.last.xhr_offset = 0, this.last.scrollTop = 0, this.last.scrollLeft = 0, this.last.selection.indexes = [], this.last.selection.columns = {}, this.searchClose(), $("#grid_" + this.name + "_search_all").val("").removeData("selected"), a || this.reload(), this.trigger($.extend(e, {
                            phase: "after"
                        }))
                }
            },
            searchShowFields: function () {
                for (var a = this, b = $("#grid_" + this.name + "_search_all"), c = '<div class="w2ui-select-field"><table><tbody>', d = -1; d < this.searches.length; d++) {
                    var e = this.searches[d];
                    if (d == -1) {
                        if (!this.multiSearch || !this.show.searchAll) continue;
                        e = {
                            field: "all",
                            caption: w2utils.lang("All Fields")
                        }
                    } else if (this.searches[d].hidden === !0 || this.searches[d].simple === !1) continue;
                    c += "<tr " + (w2utils.isIOS ? "onTouchStart" : "onClick") + "=\"w2ui['" + this.name + "'].initAllField('" + e.field + "');      event.stopPropagation(); jQuery('#grid_" + this.name + "_search_all').w2overlay({ name: '" + this.name + '-searchFields\' });">   <td>       <span class="w2ui-column-check w2ui-icon-' + (e.field == this.last.field ? "check" : "empty") + '"></span>   </td>   <td>' + e.caption + "</td></tr>"
                }
                c += "</tbody></table></div>", setTimeout(function () {
                    $(b).w2overlay({
                        html: c,
                        name: a.name + "-searchFields",
                        left: -10
                    })
                }, 1)
            },
            initAllField: function (a, b) {
                var c = $("#grid_" + this.name + "_search_all");
                if ("all" == a) {
                    var d = {
                        field: "all",
                        caption: w2utils.lang("All Fields")
                    };
                    c.w2field("clear"), c.change()
                } else {
                    var d = this.getSearch(a);
                    if (null == d) return;
                    var e = d.type;
                    ["enum", "select"].indexOf(e) != -1 && (e = "list"), c.w2field(e, $.extend({}, d.options, {
                        suffix: "",
                        autoFormat: !1,
                        selected: b
                    })), ["list", "enum", "date", "time", "datetime"].indexOf(d.type) != -1 && (this.last.search = "", this.last.item = "", c.val(""))
                }
                "" != this.last.search ? (this.last.caption = d.caption, this.search(d.field, this.last.search)) : (this.last.field = d.field, this.last.caption = d.caption), c.attr("placeholder", w2utils.lang(d.caption)), $().w2overlay({
                    name: this.name + "-searchFields"
                })
            },
            clear: function (a) {
                this.total = 0, this.records = [], this.summary = [], this.last.xhr_offset = 0, this.last.idCache = {}, this.reset(!0), a || this.refresh()
            },
            reset: function (a) {
                this.last.scrollTop = 0, this.last.scrollLeft = 0, this.last.selection = {
                    indexes: [],
                    columns: {}
                }, this.last.range_start = null, this.last.range_end = null, $("#grid_" + this.name + "_records").prop("scrollTop", 0), a || this.refresh()
            },
            skip: function (a, b) {
                var c = "object" != typeof this.url ? this.url : this.url.get;
                c ? (this.offset = parseInt(a), this.offset > this.total && (this.offset = this.total - this.limit), (this.offset < 0 || !w2utils.isInt(this.offset)) && (this.offset = 0), this.clear(!0), this.reload(b)) : console.log("ERROR: grid.skip() can only be called when you have remote data source.")
            },
            load: function (a, b) {
                return null == a ? void console.log('ERROR: You need to provide url argument when calling .load() method of "' + this.name + '" object.') : (this.clear(!0), void this.request("get", {}, a, b))
            },
            reload: function (a) {
                var b = this,
                    c = "object" != typeof this.url ? this.url : this.url.get;
                b.selectionSave(), c ? this.load(c, function () {
                    b.selectionRestore(), "function" == typeof a && a()
                }) : (this.reset(!0), this.localSearch(), this.selectionRestore(), "function" == typeof a && a({
                    status: "success"
                }))
            },
            request: function (a, b, c, d) {
                if (null == b && (b = {}), "" != c && null != c || (c = this.url), "" != c && null != c) {
                    var e = {};
                    if (w2utils.isInt(this.offset) || (this.offset = 0), w2utils.isInt(this.last.xhr_offset) || (this.last.xhr_offset = 0), e.cmd = a, e.selected = this.getSelection(), e.limit = this.limit, e.offset = parseInt(this.offset) + parseInt(this.last.xhr_offset), e.search = this.searchData, e.searchLogic = this.last.logic, e.sort = this.sortData, 0 === this.searchData.length && (delete e.search, delete e.searchLogic), 0 === this.sortData.length && delete e.sort, $.extend(e, this.postData), $.extend(e, b), "get" == a) {
                        var f = this.trigger({
                            phase: "before",
                            type: "request",
                            target: this.name,
                            url: c,
                            postData: e,
                            httpHeaders: this.httpHeaders
                        });
                        if (f.isCancelled === !0) return void ("function" == typeof d && d({
                            status: "error",
                            message: "Request aborted."
                        }))
                    } else var f = {
                        url: c,
                        postData: e,
                        httpHeaders: this.httpHeaders
                    };
                    var g = this;
                    if (0 === this.last.xhr_offset) g.lock(w2utils.lang(g.msgRefresh), !0);
                    else {
                        var h = $("#grid_" + this.name + "_rec_more, #grid_" + this.name + "_frec_more");
                        this.autoLoad === !0 ? h.show().find("td").html('<div><div style="width: 20px; height: 20px;" class="w2ui-spinner"></div></div>') : h.find("td").html("<div>" + w2utils.lang("Load") + " " + g.limit + " " + w2utils.lang("More") + "...</div>")
                    }
                    if (this.last.xhr) try {
                        this.last.xhr.abort()
                    } catch (a) { }
                    if (c = "object" != typeof f.url ? f.url : f.url.get, "save" == e.cmd && "object" == typeof f.url && (c = f.url.save), "delete" == e.cmd && "object" == typeof f.url && (c = f.url.remove), !$.isEmptyObject(g.routeData)) {
                        var i = w2utils.parseRoute(c);
                        if (i.keys.length > 0)
                            for (var j = 0; j < i.keys.length; j++) null != g.routeData[i.keys[j].name] && (c = c.replace(new RegExp(":" + i.keys[j].name, "g"), g.routeData[i.keys[j].name]))
                    }
                    var k = {
                        type: "POST",
                        url: c,
                        data: f.postData,
                        headers: f.httpHeaders,
                        dataType: "text"
                    },
                        l = this.dataType || w2utils.settings.dataType;
                    switch (l) {
                        case "HTTP":
                            k.data = "object" == typeof k.data ? String($.param(k.data, !1)).replace(/%5B/g, "[").replace(/%5D/g, "]") : k.data;
                            break;
                        case "HTTPJSON":
                            k.data = {
                                request: JSON.stringify(k.data)
                            };
                            break;
                        case "RESTFULL":
                            k.type = "GET", "save" == e.cmd && (k.type = "PUT"), "delete" == e.cmd && (k.type = "DELETE"), k.data = "object" == typeof k.data ? String($.param(k.data, !1)).replace(/%5B/g, "[").replace(/%5D/g, "]") : k.data;
                            break;
                        case "RESTFULLJSON":
                            k.type = "GET", "save" == e.cmd && (k.type = "PUT"), "delete" == e.cmd && (k.type = "DELETE"), k.data = JSON.stringify(k.data), k.contentType = "application/json";
                            break;
                        case "JSON":
                            k.type = "POST", k.data = JSON.stringify(k.data), k.contentType = "application/json"
                    }
                    this.method && (k.type = this.method), this.last.xhr_cmd = e.cmd, this.last.xhr_start = (new Date).getTime(), this.last.xhr = $.ajax(k).done(function (b, c, e) {
                        g.requestComplete(c, a, d)
                    }).fail(function (b, c, e) {
                        var f = {
                            status: c,
                            error: e,
                            rawResponseText: b.responseText
                        },
                            h = g.trigger({
                                phase: "before",
                                type: "error",
                                error: f,
                                xhr: b
                            });
                        if (h.isCancelled !== !0) {
                            if ("abort" != c) {
                                var i;
                                try {
                                    i = $.parseJSON(b.responseText)
                                } catch (a) { }
                                console.log("ERROR: Server communication failed.", "\n   EXPECTED:", {
                                    status: "success",
                                    total: 5,
                                    records: [{
                                        recid: 1,
                                        field: "value"
                                    }]
                                }, "\n         OR:", {
                                        status: "error",
                                        message: "error message"
                                    }, "\n   RECEIVED:", "object" == typeof i ? i : b.responseText), g.requestComplete("error", a, d)
                            }
                            g.trigger($.extend(h, {
                                phase: "after"
                            }))
                        }
                    }), "get" == a && this.trigger($.extend(f, {
                        phase: "after"
                    }))
                }
            },
            requestComplete: function (status, cmd, callBack) {
                var obj = this;
                this.unlock(), setTimeout(function () {
                    obj.show.statusResponse && obj.status(w2utils.lang("Server Response") + " " + ((new Date).getTime() - obj.last.xhr_start) / 1e3 + " " + w2utils.lang("sec"))
                }, 10), this.last.pull_more = !1, this.last.pull_refresh = !0;
                var event_name = "load";
                "save" == this.last.xhr_cmd && (event_name = "save"), "delete" == this.last.xhr_cmd && (event_name = "delete");
                var edata = this.trigger({
                    phase: "before",
                    target: this.name,
                    type: event_name,
                    xhr: this.last.xhr,
                    status: status
                });
                if (edata.isCancelled === !0) return void ("function" == typeof callBack && callBack({
                    status: "error",
                    message: "Request aborted."
                }));
                var data, responseText = this.last.xhr.responseText;
                if ("error" != status) {
                    if (null != responseText && "" != responseText) {
                        if ("object" == typeof responseText) data = responseText;
                        else if ("function" == typeof obj.parser) data = obj.parser(responseText), "object" != typeof data && console.log("ERROR: Your parser did not return proper object");
                        else try {
                            eval("data = " + responseText)
                        } catch (a) { }
                        if (null == data ? data = {
                            status: "error",
                            message: w2utils.lang(this.msgNotJSON),
                            responseText: responseText
                        } : Array.isArray(data) && (data = {
                            status: "success",
                            records: data,
                            total: data.length
                        }), obj.recid && data.records)
                            for (var i = 0; i < data.records.length; i++) data.records[i].recid = data.records[i][obj.recid];
                        if ("error" == data.status) obj.error(data.message);
                        else {
                            if ("get" == cmd) {
                                if (null == data.total && (data.total = -1), null == data.records && (data.records = []), data.records.length == this.limit ? this.last.xhr_hasMore = !0 : (this.last.xhr_hasMore = !1, this.total = this.last.xhr_offset + data.records.length), 0 === this.last.xhr_offset) this.records = [], this.summary = [], w2utils.isInt(data.total) && (this.total = parseInt(data.total));
                                else if (data.total != -1 && parseInt(data.total) != parseInt(this.total)) return void this.message(w2utils.lang(this.msgNeedReload), function () {
                                    delete this.last.xhr_offset, this.reload()
                                }.bind(this));
                                if (data.records)
                                    for (var r = 0; r < data.records.length; r++) this.records.push(data.records[r]);
                                if (data.summary) {
                                    this.summary = [];
                                    for (var r = 0; r < data.summary.length; r++) this.summary.push(data.summary[r])
                                }
                            }
                            if ("delete" == cmd) return this.reset(), void this.reload()
                        }
                    }
                } else data = {
                    status: "error",
                    message: w2utils.lang(this.msgAJAXerror),
                    responseText: responseText
                }, obj.error(w2utils.lang(this.msgAJAXerror));
                var url = "object" != typeof this.url ? this.url : this.url.get;
                url || (this.localSort(), this.localSearch()), this.total = parseInt(this.total), 0 === this.last.xhr_offset ? this.refresh() : (this.scroll(), this.resize()), "function" == typeof callBack && callBack(data), this.trigger($.extend(edata, {
                    phase: "after"
                }))
            },
            error: function (a) {
                var b = this.trigger({
                    target: this.name,
                    type: "error",
                    message: a,
                    xhr: this.last.xhr
                });
                return b.isCancelled === !0 ? void ("function" == typeof callBack && callBack({
                    status: "error",
                    message: "Request aborted."
                })) : (this.message(a), void this.trigger($.extend(b, {
                    phase: "after"
                })))
            },
            getChanges: function (a) {
                var b = [];
                if ("undefined" == typeof a) var a = this.records;
                for (var c = 0; c < a.length; c++) {
                    var d = a[c];
                    d.w2ui && (null != d.w2ui.changes && b.push($.extend(!0, {
                        recid: d.recid
                    }, d.w2ui.changes)), d.w2ui.expanded !== !0 && d.w2ui.children && d.w2ui.children.length && $.merge(b, this.getChanges(d.w2ui.children)))
                }
                return b
            },
            mergeChanges: function () {
                for (var changes = this.getChanges(), c = 0; c < changes.length; c++) {
                    var record = this.get(changes[c].recid);
                    for (var s in changes[c])
                        if ("recid" != s) {
                            "object" == typeof changes[c][s] && (changes[c][s] = changes[c][s].text);
                            try {
                                s.indexOf(".") != -1 ? eval("record['" + s.replace(/\./g, "']['") + "'] = changes[c][s]") : record[s] = changes[c][s]
                            } catch (a) {
                                console.log("ERROR: Cannot merge. ", a.message || "", a)
                            }
                            record.w2ui && delete record.w2ui.changes
                        }
                }
                this.refresh()
            },
            save: function (a) {
                var b = this,
                    c = this.getChanges(),
                    d = "object" != typeof this.url ? this.url : this.url.save,
                    e = this.trigger({
                        phase: "before",
                        target: this.name,
                        type: "save",
                        changes: c
                    });
                return e.isCancelled === !0 ? void (d && "function" == typeof a && a({
                    status: "error",
                    message: "Request aborted."
                })) : void (d ? this.request("save", {
                    changes: e.changes
                }, null, function (c) {
                    "error" !== c.status && b.mergeChanges(), b.trigger($.extend(e, {
                        phase: "after"
                    })), "function" == typeof a && a(c)
                }) : (this.mergeChanges(), this.trigger($.extend(e, {
                    phase: "after"
                }))))
            },
            editField: function (a, b, c, d) {
                function e(a) {
                    try {
                        var b = "DIV" == this.tagName.toUpperCase() ? $(this).text() : this.value,
                            c = $("#grid_" + f.name + "_editable"),
                            d = "font-family: " + $(this).css("font-family") + "; font-size: " + $(this).css("font-size") + "; white-space: pre;",
                            e = w2utils.getStrWidth(b, d);
                        e + 20 > c.width() && c.width(e + 20)
                    } catch (a) { }
                }
                var f = this;
                if (this.last.inEditMode !== !0) {
                    var g = f.get(a, !0),
                        h = f.getCellEditable(g, b);
                    if (h) {
                        var i = f.records[g],
                            j = f.columns[b],
                            k = j.frozen === !0 ? "_f" : "_";
                        if (["enum", "file"].indexOf(h.type) != -1) return void console.log('ERROR: input types "enum" and "file" are not supported in inline editing.');
                        var l = f.trigger({
                            phase: "before",
                            type: "editField",
                            target: f.name,
                            recid: a,
                            column: b,
                            value: c,
                            index: g,
                            originalEvent: d
                        });
                        if (l.isCancelled !== !0 && (c = l.value, this.last.inEditMode = !0, this.last._edit = {
                            value: c,
                            index: g,
                            column: b,
                            recid: a
                        }, this.selectNone(), this.select({
                            recid: a,
                            column: b
                        }), ["checkbox", "check"].indexOf(h.type) == -1)) {
                            var m = $("#grid_" + f.name + k + "rec_" + w2utils.escapeId(a)),
                                n = m.find("[col=" + b + "] > div");
                            $(this.box).find("divedit-box").remove(), "row" != this.selectType && ($("#grid_" + this.name + k + "selection").attr("id", "grid_" + this.name + "_editable").removeClass("w2ui-selection").addClass("w2ui-edit-box").prepend('<div style="position: absolute; top: 0px; bottom: 0px; left: 0px; right: 0px;"></div>').find("selection-resizer").remove(), n = $("#grid_" + this.name + "_editable >div:first-child")), null == h.inTag && (h.inTag = ""), null == h.outTag && (h.outTag = ""), null == h.style && (h.style = ""), null == h.items && (h.items = []);
                            var o = i.w2ui && i.w2ui.changes && null != i.w2ui.changes[j.field] ? w2utils.stripTags(i.w2ui.changes[j.field]) : w2utils.stripTags(i[j.field]);
                            null == o && (o = "");
                            var p = "object" != typeof o ? o : "";
                            null != l.old_value && (p = l.old_value), null != c && (o = c);
                            var q = null != j.style ? j.style + ";" : "";
                            switch ("string" == typeof j.render && ["number", "int", "float", "money", "percent", "size"].indexOf(j.render.split(":")[0]) != -1 && (q += "text-align: right;"), h.items.length > 0 && !$.isPlainObject(h.items[0]) && (h.items = w2obj.field.prototype.normMenu(h.items)), h.type) {
                                case "select":
                                    for (var r = "", s = 0; s < h.items.length; s++) r += '<option value="' + h.items[s].id + '"' + (h.items[s].id == o ? ' selected="selected"' : "") + ">" + h.items[s].text + "</option>";
                                    n.addClass("w2ui-editable").html('<select id="grid_' + f.name + "_edit_" + a + "_" + b + '" column="' + b + '" class="form-control"    style="width: 100%; pointer-events: auto; padding: 0 0 0 3px; margin: 0px; border-left: 0; border-right: 0; border-radius: 0px;            outline: none; font-family: inherit;' + q + h.style + '"     field="' + j.field + '" recid="' + a + '"     ' + h.inTag + ">" + r + "</select>" + h.outTag), setTimeout(function () {
                                        n.find("select").on("change", function (a) {
                                            delete f.last.move
                                        }).on("blur", function (a) {
                                            1 != $(this).data("keep-open") && f.editChange.call(f, this, g, b, a)
                                        })
                                    }, 10);
                                    break;
                                case "div":
                                    var t = m.find("[col=" + b + "] > div"),
                                        u = "font-family: " + t.css("font-family") + "; font-size: " + t.css("font-size") + ";";
                                    n.addClass("w2ui-editable").html('<div id="grid_' + f.name + "_edit_" + a + "_" + b + '" class="form-control"    contenteditable style="' + u + q + h.style + '" autocorrect="off" autocomplete="off" spellcheck="false"     field="' + j.field + '" recid="' + a + '" column="' + b + '" ' + h.inTag + "></div>" + h.outTag), null == c && n.find("div.form-control").text("object" != typeof o ? o : "");
                                    var v = n.find("div.form-control").get(0);
                                    setTimeout(function () {
                                        var a = v;
                                        $(a).on("blur", function (c) {
                                            1 != $(this).data("keep-open") && f.editChange.call(f, a, g, b, c)
                                        })
                                    }, 10), null != c && $(v).text("object" != typeof o ? o : "");
                                    break;
                                default:
                                    var t = m.find("[col=" + b + "] > div"),
                                        u = "font-family: " + t.css("font-family") + "; font-size: " + t.css("font-size");
                                    n.addClass("w2ui-editable").html('<input id="grid_' + f.name + "_edit_" + a + "_" + b + '" autocorrect="off" autocomplete="off" spellcheck="false" type="text"     style="' + u + "; width: 100%; height: 100%; padding: 3px; border-color: transparent; outline: none; border-radius: 0;        pointer-events: auto; " + q + h.style + '"     field="' + j.field + '" recid="' + a + '" column="' + b + '" class="form-control"' + h.inTag + "/>" + h.outTag), "number" == h.type && (o = w2utils.formatNumber(o)), "date" == h.type && (o = w2utils.formatDate(w2utils.isDate(o, h.format, !0) || new Date, h.format)), null == c && n.find("input").val("object" != typeof o ? o : "");
                                    var v = n.find("input").get(0);
                                    $(v).w2field(h.type, $.extend(h, {
                                        selected: o
                                    })), setTimeout(function () {
                                        var a = v;
                                        "list" == h.type && (a = $($(v).data("w2field").helpers.focus).find("input"), "object" != typeof o && "" != o && a.val(o).css({
                                            opacity: 1
                                        }).prev().css({
                                            opacity: 1
                                        }), n.find("input").on("change", function (a) {
                                            f.editChange.call(f, v, g, b, a)
                                        })), $(a).on("blur", function (a) {
                                            1 != $(this).data("keep-open") && f.editChange.call(f, v, g, b, a)
                                        })
                                    }, 10), null != c && $(v).val("object" != typeof o ? o : "")
                            }
                            setTimeout(function () {
                                f.last.inEditMode && (n.find("input, select, div.form-control").data("old_value", p).on("mousedown", function (a) {
                                    a.stopPropagation()
                                }).on("click", function (a) {
                                    "div" == h.type ? e.call(n.find("div.form-control")[0], null) : e.call(n.find("input, select")[0], null)
                                }).on("paste", function (a) {
                                    var b = a.originalEvent;
                                    a.preventDefault();
                                    var c = b.clipboardData.getData("text/plain");
                                    document.execCommand("insertHTML", !1, c)
                                }).on("keydown", function (c) {
                                    var d = this,
                                        k = "DIV" == d.tagName.toUpperCase() ? $(d).text() : $(d).val();
                                    switch (c.keyCode) {
                                        case 8:
                                            "list" != h.type || $(v).data("w2field") || c.preventDefault();
                                            break;
                                        case 9:
                                        case 13:
                                            c.preventDefault();
                                            break;
                                        case 37:
                                            0 === w2utils.getCursorPosition(d) && c.preventDefault();
                                            break;
                                        case 39:
                                            w2utils.getCursorPosition(d) == k.length && (w2utils.setCursorPosition(d, k.length), c.preventDefault())
                                    }
                                    setTimeout(function () {
                                        switch (c.keyCode) {
                                            case 9:
                                                var h = a,
                                                    k = c.shiftKey ? f.prevCell(g, b, !0) : f.nextCell(g, b, !0);
                                                if (null == k) {
                                                    var l = c.shiftKey ? f.prevRow(g, b) : f.nextRow(g, b);
                                                    if (null != l && l != g) {
                                                        h = f.records[l].recid;
                                                        for (var m = 0; m < f.columns.length; m++) {
                                                            var n = f.getCellEditable(g, m);
                                                            if (null != n && ["checkbox", "check"].indexOf(n.type) == -1 && (k = parseInt(m), !c.shiftKey)) break
                                                        }
                                                    }
                                                }
                                                h === !1 && (h = a), null == k && (k = b), d.blur(), setTimeout(function () {
                                                    "row" != f.selectType ? (f.selectNone(), f.select({
                                                        recid: h,
                                                        column: k
                                                    })) : f.editField(h, k, null, c)
                                                }, 1), c.preventDefault && c.preventDefault();
                                                break;
                                            case 13:
                                                d.blur();
                                                var o = c.shiftKey ? f.prevRow(g, b) : f.nextRow(g, b);
                                                null != o && o != g && setTimeout(function () {
                                                    "row" != f.selectType ? (f.selectNone(), f.select({
                                                        recid: f.records[o].recid,
                                                        column: b
                                                    })) : f.editField(f.records[o].recid, b, null, c)
                                                }, 1), "DIV" == d.tagName.toUpperCase() && c.preventDefault();
                                                break;
                                            case 27:
                                                var p = f.parseField(i, j.field);
                                                i.w2ui && i.w2ui.changes && null != i.w2ui.changes[j.field] && (p = i.w2ui.changes[j.field]), null != $(d).data("old_value") && (p = $(d).data("old_value")), "DIV" == d.tagName.toUpperCase() ? $(d).text(null != p ? p : "") : d.value = null != p ? p : "", d.blur(), setTimeout(function () {
                                                    f.select({
                                                        recid: a,
                                                        column: b
                                                    })
                                                }, 1)
                                        }
                                        e.call(d, c)
                                    }, 1)
                                }).on("keyup", function (a) {
                                    e.call(this, a)
                                }), setTimeout(function () {
                                    if (f.last.inEditMode) {
                                        var a = n.find(".form-control"),
                                            b = null != $(a).val() ? $(a).val().length : 0;
                                        "div" == h.type && (b = $(a).text().length), a.length > 0 && (a.focus(), clearTimeout(f.last.kbd_timer), "SELECT" != a[0].tagName.toUpperCase() && w2utils.setCursorPosition(a[0], b), a[0].resize = e, e.call(a[0], null))
                                    }
                                }, 50), f.trigger($.extend(l, {
                                    phase: "after",
                                    input: n.find("input, select, div.form-control")
                                })))
                            }, 5)
                        }
                    }
                } else if (13 == d.keyCode) {
                    var g = this.last._edit.index,
                        b = this.last._edit.column,
                        a = this.last._edit.recid;
                    this.editChange({
                        type: "custom",
                        value: this.last._edit.value
                    }, this.get(a, !0), b, d);
                    var w = d.shiftKey ? this.prevRow(g, b) : this.nextRow(g, b);
                    null != w && w != g && setTimeout(function () {
                        "row" != f.selectType ? (f.selectNone(), f.select({
                            recid: f.records[w].recid,
                            column: b
                        })) : f.editField(f.records[w].recid, b, null, d)
                    }, 1), this.last.inEditMode = !1
                } else {
                    var x = $(this.box).find("divedit-box .form-control");
                    x.length > 0 && "DIV" == x[0].tagName && (x.text(x.text() + c), w2utils.setCursorPosition(x[0], x.text().length))
                }
            },
            editChange: function (a, b, c, d) {
                var e = this;
                setTimeout(function () {
                    var a = $(e.box).find("#grid_" + e.name + "_focus");
                    a.is(":focus") || a.focus()
                }, 10);
                var f = b < 0;
                b = b < 0 ? -b - 1 : b;
                var g = f ? this.summary : this.records,
                    h = g[b],
                    i = this.columns[c],
                    j = $("#grid_" + this.name + (i.frozen === !0 ? "_frec_" : "_rec_") + w2utils.escapeId(h.recid)),
                    k = a.tagName && "DIV" == a.tagName.toUpperCase() ? $(a).text() : a.value,
                    l = this.parseField(h, i.field),
                    m = $(a).data("w2field");
                m && ("list" == m.type && (k = $(a).data("selected")), ($.isEmptyObject(k) || null == k) && (k = ""), $.isPlainObject(k) || (k = m.clean(k))), "checkbox" == a.type && (h.w2ui && h.w2ui.editable === !1 && (a.checked = !a.checked), k = a.checked);
                var n = {
                    phase: "before",
                    type: "change",
                    target: this.name,
                    input_id: a.id,
                    recid: h.recid,
                    index: b,
                    column: c,
                    originalEvent: d.originalEvent ? d.originalEvent : d,
                    value_new: k,
                    value_previous: h.w2ui && h.w2ui.changes && h.w2ui.changes.hasOwnProperty(i.field) ? h.w2ui.changes[i.field] : l,
                    value_original: l
                };
                for (null != $(d.target).data("old_value") && (n.value_previous = $(d.target).data("old_value")); ;) {
                    if (k = n.value_new, "object" != typeof k && String(l) != String(k) || "object" == typeof k && k && k.id != l && ("object" != typeof l || null == l || k.id != l.id)) {
                        if (n = this.trigger($.extend(n, {
                            type: "change",
                            phase: "before"
                        })), n.isCancelled !== !0) {
                            if (k !== n.value_new) continue;
                            h.w2ui = h.w2ui || {}, h.w2ui.changes = h.w2ui.changes || {}, h.w2ui.changes[i.field] = n.value_new, this.trigger($.extend(n, {
                                phase: "after"
                            }))
                        }
                    } else if (n = this.trigger($.extend(n, {
                        type: "restore",
                        phase: "before"
                    })), n.isCancelled !== !0) {
                        if (k !== n.value_new) continue;
                        h.w2ui && h.w2ui.changes && delete h.w2ui.changes[i.field], h.w2ui && $.isEmptyObject(h.w2ui.changes) && delete h.w2ui.changes, this.trigger($.extend(n, {
                            phase: "after"
                        }))
                    }
                    break
                }
                var o = $(j).find("[col=" + c + "]");
                f || (h.w2ui && h.w2ui.changes && null != h.w2ui.changes[i.field] ? o.addClass("w2ui-changed") : o.removeClass("w2ui-changed"), o.replaceWith(this.getCellHTML(b, c, f))), $(this.box).find("divedit-box").remove(), this.show.toolbarSave && (this.getChanges().length > 0 ? this.toolbar.enable("w2ui-save") : this.toolbar.disable("w2ui-save")), e.last.inEditMode = !1
            },
            delete: function (a) {
                var b = ((new Date).getTime(), this),
                    c = this.trigger({
                        phase: "before",
                        target: this.name,
                        type: "delete",
                        force: a
                    });
                if (a && this.message(), c.isCancelled !== !0) {
                    a = c.force, setTimeout(function () {
                        $().w2tag()
                    }, 20);
                    var d = this.getSelection();
                    if (0 !== d.length) {
                        if ("" != this.msgDelete && !a) return void this.message({
                            width: 350,
                            height: 170,
                            body: '<div class="w2ui-centered">' + w2utils.lang(b.msgDelete) + "</div>",
                            buttons: w2utils.settings.macButtonOrder ? '<button type="button" class="w2ui-btn" onclick="w2ui[\'' + this.name + "'].message()\">" + w2utils.lang("No") + '</button><button type="button" class="w2ui-btn w2ui-btn-red" onclick="w2ui[\'' + this.name + "'].delete(true)\">" + w2utils.lang("Yes") + "</button>" : '<button type="button" class="w2ui-btn w2ui-btn-red" onclick="w2ui[\'' + this.name + "'].delete(true)\">" + w2utils.lang("Yes") + '</button><button type="button" class="w2ui-btn" onclick="w2ui[\'' + this.name + "'].message()\">" + w2utils.lang("No") + "</button>",
                            onOpen: function (a) {
                                var c = $(this.box).find("input, textarea, select, button");
                                c.off(".message").on("blur.message", function (a) {
                                    c.index(a.target) + 1 === c.length && (c.get(0).focus(), a.preventDefault())
                                }).on("keydown.message", function (a) {
                                    27 == a.keyCode && b.message()
                                }), setTimeout(function () {
                                    $(this.box).find("btn:last-child").focus(), clearTimeout(b.last.kbd_timer)
                                }, 25)
                            }
                        });
                        var e = "object" != typeof this.url ? this.url : this.url.remove;
                        if (e) this.request("delete");
                        else if ("object" != typeof d[0]) this.selectNone(), this.remove.apply(this, d);
                        else {
                            for (var f = 0; f < d.length; f++) {
                                var g = this.columns[d[f].column].field,
                                    h = this.get(d[f].recid, !0),
                                    i = this.records[h];
                                null != h && "recid" != g && (this.records[h][g] = "", i.w2ui && i.w2ui.changes && delete i.w2ui.changes[g])
                            }
                            this.update()
                        }
                        this.trigger($.extend(c, {
                            phase: "after"
                        }))
                    }
                }
            },
            click: function (a, b) {
                var c = (new Date).getTime(),
                    d = null,
                    e = this;
                if (!(1 == this.last.cancelClick || b && b.altKey)) {
                    if ("object" == typeof a && null !== a && (d = a.column, a = a.recid), null == b && (b = {}), c - parseInt(this.last.click_time) < 350 && this.last.click_recid == a && "click" == b.type) return void this.dblClick(a, b);
                    this.last.bubbleEl && ($(this.last.bubbleEl).w2tag(), this.last.bubbleEl = null), this.last.click_time = c;
                    var f = this.last.click_recid;
                    if (this.last.click_recid = a, null == d && b.target) {
                        var g = b.target;
                        "TD" != g.tagName.toUpperCase() && (g = $(g).parents("td")[0]), null != $(g).attr("col") && (d = parseInt($(g).attr("col")))
                    }
                    var h = this.trigger({
                        phase: "before",
                        target: this.name,
                        type: "click",
                        recid: a,
                        column: d,
                        originalEvent: b
                    });
                    if (h.isCancelled !== !0) {
                        var e = this,
                            i = this.getSelection();
                        $("#grid_" + this.name + "_check_all").prop("checked", !1);
                        var j = this.get(a, !0),
                            k = (this.records[j], []);
                        if (e.last.sel_ind = j, e.last.sel_col = d, e.last.sel_recid = a, e.last.sel_type = "click", b.shiftKey && i.length > 0 && e.multiSelect) {
                            if (i[0].recid) {
                                var l = this.get(i[0].recid, !0),
                                    m = this.get(a, !0);
                                if (d > i[0].column) var n = i[0].column,
                                    o = d;
                                else var n = d,
                                    o = i[0].column;
                                for (var p = n; p <= o; p++) k.push(p)
                            } else var l = this.get(f, !0),
                                m = this.get(a, !0);
                            var q = [];
                            if (l > m) {
                                var g = l;
                                l = m, m = g
                            }
                            for (var r = "object" != typeof this.url ? this.url : this.url.get, s = l; s <= m; s++)
                                if (!(this.searchData.length > 0) || r || $.inArray(s, this.last.searchIds) != -1)
                                    if ("row" == this.selectType) q.push(this.records[s].recid);
                                    else
                                        for (var t = 0; t < k.length; t++) q.push({
                                            recid: this.records[s].recid,
                                            column: k[t]
                                        });
                            this.select.apply(this, q)
                        } else {
                            var u = this.last.selection,
                                v = u.indexes.indexOf(j) != -1,
                                w = !1;
                            if ($(b.target).parents("td").hasClass("w2ui-col-select") && (w = !0), (b.ctrlKey || b.shiftKey || b.metaKey || w) && this.multiSelect || this.showSelectColumn) {
                                var x = $(b.target).parents("tr").find("grid-select-check").is(":checked");
                                "row" == this.selectType || $.inArray(d, u.columns[j]) != -1 || x || (v = !1), v === !0 ? this.unselect({
                                    recid: a,
                                    column: d
                                }) : this.select({
                                    recid: a,
                                    column: d
                                })
                            } else "row" != this.selectType && $.inArray(d, u.columns[j]) == -1 && (v = !1), i.length > 300 ? this.selectNone() : this.unselect.apply(this, i), v === !0 && 1 == i.length ? this.unselect({
                                recid: a,
                                column: d
                            }) : this.select({
                                recid: a,
                                column: d
                            })
                        }
                        this.status(), e.initResize(), this.trigger($.extend(h, {
                            phase: "after"
                        }))
                    }
                }
            },
            columnClick: function (a, b) {
                var c = this.trigger({
                    phase: "before",
                    type: "columnClick",
                    target: this.name,
                    field: a,
                    originalEvent: b
                });
                if (c.isCancelled !== !0) {
                    if ("row" == this.selectType) {
                        var d = this.getColumn(a);
                        d && d.sortable && this.sort(a, null, !(!b || !b.ctrlKey && !b.metaKey)), "line-number" == c.field && (this.getSelection().length >= this.records.length ? this.selectNone() : this.selectAll())
                    } else {
                        if (b.altKey) {
                            var d = this.getColumn(a);
                            d && d.sortable && this.sort(a, null, !(!b || !b.ctrlKey && !b.metaKey))
                        }
                        if ("line-number" == c.field) this.getSelection().length >= this.records.length ? this.selectNone() : this.selectAll();
                        else {
                            b.shiftKey || b.metaKey || b.ctrlKey || this.selectNone();
                            var e = this.getSelection(),
                                d = this.getColumn(c.field, !0),
                                f = [],
                                g = [];
                            if (0 != e.length && b.shiftKey) {
                                var h = d,
                                    i = e[0].column;
                                h > i && (h = e[0].column, i = d);
                                for (var j = h; j <= i; j++) g.push(j)
                            } else g.push(d);
                            var c = this.trigger({
                                phase: "before",
                                type: "columnSelect",
                                target: this.name,
                                columns: g
                            });
                            if (c.isCancelled !== !0) {
                                for (var j = 0; j < this.records.length; j++) f.push({
                                    recid: this.records[j].recid,
                                    column: g
                                });
                                this.select.apply(this, f)
                            }
                            this.trigger($.extend(c, {
                                phase: "after"
                            }))
                        }
                    }
                    this.trigger($.extend(c, {
                        phase: "after"
                    }))
                }
            },
            columnDblClick: function (a, b) {
                var c = this.trigger({
                    phase: "before",
                    type: "columnDblClick",
                    target: this.name,
                    field: a,
                    originalEvent: b
                });
                c.isCancelled !== !0 && this.trigger($.extend(c, {
                    phase: "after"
                }))
            },
            focus: function (a) {
                var b = this,
                    c = this.trigger({
                        phase: "before",
                        type: "focus",
                        target: this.name,
                        originalEvent: a
                    });
                return c.isCancelled !== !0 && (this.hasFocus = !0, $(this.box).find("inactive").removeClass("w2ui-inactive"), setTimeout(function () {
                    var a = $(b.box).find("#grid_" + b.name + "_focus");
                    a.is(":focus") || a.focus()
                }, 10), void this.trigger($.extend(c, {
                    phase: "after"
                })))
            },
            blur: function (a) {
                var b = this.trigger({
                    phase: "before",
                    type: "blur",
                    target: this.name,
                    originalEvent: a
                });
                return b.isCancelled !== !0 && (this.hasFocus = !1, $(this.box).find("selected").addClass("w2ui-inactive"), $(this.box).find("selection").addClass("w2ui-inactive"), void this.trigger($.extend(b, {
                    phase: "after"
                })))
            },
            keydown: function (a) {
                function b() {
                    var a = Math.floor(h[0].scrollTop / d.recordHeight) + 1;
                    (!d.records[a] || a < 2) && (a = 0), d.select({
                        recid: d.records[a].recid,
                        column: 0
                    })
                }

                function c() {
                    if ("click" != d.last.sel_type) return !1;
                    if ("row" != d.selectType) {
                        if (d.last.sel_type = "key", i.length > 1) {
                            for (var a = 0; a < i.length; a++)
                                if (i[a].recid == d.last.sel_recid && i[a].column == d.last.sel_col) {
                                    i.splice(a, 1);
                                    break
                                } return d.unselect.apply(d, i), !0
                        }
                        return !1
                    }
                    return d.last.sel_type = "key", i.length > 1 && (i.splice(i.indexOf(d.records[d.last.sel_ind].recid), 1), d.unselect.apply(d, i), !0)
                }
                var d = this,
                    e = "object" != typeof this.url ? this.url : this.url.get;
                if (d.keyboard === !0) {
                    var f = d.trigger({
                        phase: "before",
                        type: "keydown",
                        target: d.name,
                        originalEvent: a
                    });
                    if (f.isCancelled !== !0) {
                        if ($(this.box).find(">message").length > 0) return void (27 == a.keyCode && this.message());
                        var g = !1,
                            h = $("#grid_" + d.name + "_records"),
                            i = d.getSelection();
                        0 === i.length && (g = !0);
                        var j = i[0] || null,
                            k = [],
                            l = i[i.length - 1];
                        if ("object" == typeof j && null != j) {
                            j = i[0].recid, k = [];
                            for (var m = 0; ;) {
                                if (!i[m] || i[m].recid != j) break;
                                k.push(i[m].column), m++
                            }
                            l = i[i.length - 1].recid
                        }
                        var n = d.get(j, !0),
                            o = d.get(l, !0),
                            p = (d.get(j), $("#grid_" + d.name + "_rec_" + (null != n ? w2utils.escapeId(d.records[n].recid) : "none"))),
                            q = !1,
                            r = a.keyCode,
                            s = a.shiftKey;
                        switch (r) {
                            case 8:
                            case 46:
                                var t = this.toolbar.get("w2ui-delete");
                                t && t.hidden !== !0 && d.delete(), q = !0, a.stopPropagation();
                                break;
                            case 27:
                                d.selectNone(), q = !0;
                                break;
                            case 65:
                                if (!a.metaKey && !a.ctrlKey) break;
                                d.selectAll(), q = !0;
                                break;
                            case 13:
                                if ("row" == this.selectType && d.show.expandColumn === !0) {
                                    if (p.length <= 0) break;
                                    d.toggle(j, a), q = !0
                                } else {
                                    for (var u = 0; u < this.columns.length; u++) {
                                        var v = this.getCellEditable(n, u);
                                        if (v) {
                                            k.push(parseInt(u));
                                            break
                                        }
                                    }
                                    "row" == this.selectType && this.last._edit.column && (k = [this.last._edit.column]), k.length > 0 && (d.editField(j, k[0], null, a), q = !0)
                                }
                                break;
                            case 37:
                                if (g) {
                                    b();
                                    break
                                }
                                if ("row" == this.selectType) {
                                    if (p.length <= 0) break;
                                    var w = this.records[n].w2ui || {};
                                    !w || null == w.parent_recid || Array.isArray(w.children) && 0 !== w.children.length && w.expanded ? d.collapse(j, a) : (d.unselect(j), d.collapse(w.parent_recid, a), d.select(w.parent_recid))
                                } else {
                                    var x = d.prevCell(n, k[0]);
                                    if (s || null != x || (this.selectNone(), x = 0), null != x)
                                        if (s && d.multiSelect) {
                                            if (c()) return;
                                            var w = [],
                                                y = [],
                                                z = [];
                                            if (0 === k.indexOf(this.last.sel_col) && k.length > 1) {
                                                for (var A = 0; A < i.length; A++) w.indexOf(i[A].recid) == -1 && w.push(i[A].recid), z.push({
                                                    recid: i[A].recid,
                                                    column: k[k.length - 1]
                                                });
                                                d.unselect.apply(d, z), d.scrollIntoView(n, k[k.length - 1], !0)
                                            } else {
                                                for (var A = 0; A < i.length; A++) w.indexOf(i[A].recid) == -1 && w.push(i[A].recid), y.push({
                                                    recid: i[A].recid,
                                                    column: x
                                                });
                                                d.select.apply(d, y), d.scrollIntoView(n, x, !0)
                                            }
                                        } else a.metaKey = !1, d.click({
                                            recid: j,
                                            column: x
                                        }, a), d.scrollIntoView(n, x, !0);
                                    else if (!s)
                                        if (i.length > 1) d.selectNone();
                                        else
                                            for (var B = 1; B < i.length; B++) d.unselect(i[B])
                                }
                                q = !0;
                                break;
                            case 39:
                                if (g) {
                                    b();
                                    break
                                }
                                if ("row" == this.selectType) {
                                    if (p.length <= 0) break;
                                    d.expand(j, a)
                                } else {
                                    var C = d.nextCell(n, k[k.length - 1]);
                                    if (s || null != C || (this.selectNone(), C = this.columns.length - 1), null != C)
                                        if (s && 39 == r && d.multiSelect) {
                                            if (c()) return;
                                            var w = [],
                                                y = [],
                                                z = [];
                                            if (k.indexOf(this.last.sel_col) == k.length - 1 && k.length > 1) {
                                                for (var A = 0; A < i.length; A++) w.indexOf(i[A].recid) == -1 && w.push(i[A].recid), z.push({
                                                    recid: i[A].recid,
                                                    column: k[0]
                                                });
                                                d.unselect.apply(d, z), d.scrollIntoView(n, k[0], !0)
                                            } else {
                                                for (var A = 0; A < i.length; A++) w.indexOf(i[A].recid) == -1 && w.push(i[A].recid), y.push({
                                                    recid: i[A].recid,
                                                    column: C
                                                });
                                                d.select.apply(d, y), d.scrollIntoView(n, C, !0)
                                            }
                                        } else a.metaKey = !1, d.click({
                                            recid: j,
                                            column: C
                                        }, a), d.scrollIntoView(n, C, !0);
                                    else if (!s)
                                        if (i.length > 1) d.selectNone();
                                        else
                                            for (var B = 0; B < i.length - 1; B++) d.unselect(i[B])
                                }
                                q = !0;
                                break;
                            case 38:
                                if (g && b(), p.length <= 0) break;
                                var x = d.prevRow(n, k[0]);
                                if (s || null != x || (x = 0 == this.searchData.length || e ? 0 : this.last.searchIds[0]), null != x) {
                                    if (s && d.multiSelect) {
                                        if (c()) return;
                                        if ("row" == d.selectType) d.last.sel_ind > x && d.last.sel_ind != o ? d.unselect(d.records[o].recid) : d.select(d.records[x].recid);
                                        else if (d.last.sel_ind > x && d.last.sel_ind != o) {
                                            x = o;
                                            for (var w = [], u = 0; u < k.length; u++) w.push({
                                                recid: d.records[x].recid,
                                                column: k[u]
                                            });
                                            d.unselect.apply(d, w)
                                        } else {
                                            for (var w = [], u = 0; u < k.length; u++) w.push({
                                                recid: d.records[x].recid,
                                                column: k[u]
                                            });
                                            d.select.apply(d, w)
                                        }
                                    } else i.length > 300 ? this.selectNone() : this.unselect.apply(this, i), d.click({
                                        recid: d.records[x].recid,
                                        column: k[0]
                                    }, a);
                                    d.scrollIntoView(x), a.preventDefault && a.preventDefault()
                                } else if (!s)
                                    if (i.length > 1) d.selectNone();
                                    else
                                        for (var B = 1; B < i.length; B++) d.unselect(i[B]);
                                break;
                            case 40:
                                if (g && b(), p.length <= 0) break;
                                var C = d.nextRow(o, k[0]);
                                if (s || null != C || (C = 0 == this.searchData.length || e ? this.records.length - 1 : this.last.searchIds[this.last.searchIds.length - 1]), null != C) {
                                    if (s && d.multiSelect) {
                                        if (c()) return;
                                        if ("row" == d.selectType) this.last.sel_ind < C && this.last.sel_ind != n ? d.unselect(d.records[n].recid) : d.select(d.records[C].recid);
                                        else if (this.last.sel_ind < C && this.last.sel_ind != n) {
                                            C = n;
                                            for (var w = [], u = 0; u < k.length; u++) w.push({
                                                recid: d.records[C].recid,
                                                column: k[u]
                                            });
                                            d.unselect.apply(d, w)
                                        } else {
                                            for (var w = [], u = 0; u < k.length; u++) w.push({
                                                recid: d.records[C].recid,
                                                column: k[u]
                                            });
                                            d.select.apply(d, w)
                                        }
                                    } else i.length > 300 ? this.selectNone() : this.unselect.apply(this, i), d.click({
                                        recid: d.records[C].recid,
                                        column: k[0]
                                    }, a);
                                    d.scrollIntoView(C), q = !0
                                } else if (!s)
                                    if (i.length > 1) d.selectNone();
                                    else
                                        for (var B = 0; B < i.length - 1; B++) d.unselect(i[B]);
                                break;
                            case 17:
                            case 91:
                                if (g) break;
                                d.last.isSafari && (d.last.copy_event = d.copy(!1, a), $("#grid_" + d.name + "_focus").val(d.last.copy_event.text).select());
                                break;
                            case 67:
                                (a.metaKey || a.ctrlKey) && (d.last.isSafari ? d.copy(d.last.copy_event, a) : (d.last.copy_event = d.copy(!1, a), $("#grid_" + d.name + "_focus").val(d.last.copy_event.text).select(), d.copy(d.last.copy_event, a)));
                                break;
                            case 88:
                                if (g) break;
                                (a.ctrlKey || a.metaKey) && (d.last.isSafari ? d.copy(d.last.copy_event, a) : (d.last.copy_event = d.copy(!1, a), $("#grid_" + d.name + "_focus").val(d.last.copy_event.text).select(), d.copy(d.last.copy_event, a)))
                        }
                        for (var w = [32, 187, 189, 192, 219, 220, 221, 186, 222, 188, 190, 191], A = 48; A <= 111; A++) w.push(A);
                        w.indexOf(r) == -1 || a.ctrlKey || a.metaKey || q || (0 === k.length && k.push(0), q = !1, setTimeout(function () {
                            var b = $("#grid_" + d.name + "_focus"),
                                c = b.val();
                            b.val(""), d.editField(j, k[0], c, a)
                        }, 1)), q && a.preventDefault && a.preventDefault(), d.trigger($.extend(f, {
                            phase: "after"
                        }))
                    }
                }
            },
            scrollIntoView: function (a, b, c) {
                var d = this.records.length;
                if (0 == this.searchData.length || this.url || (d = this.last.searchIds.length), 0 !== d) {
                    if (null == a) {
                        var e = this.getSelection();
                        if (0 === e.length) return;
                        $.isPlainObject(e[0]) ? (a = e[0].index, b = e[0].column) : a = this.get(e[0], !0)
                    }
                    var f = $("#grid_" + this.name + "_records"),
                        g = this.last.searchIds.length;
                    if (g > 0 && (a = this.last.searchIds.indexOf(a)), f.height() < this.recordHeight * (g > 0 ? g : d) && f.length > 0) {
                        var h = Math.floor(f[0].scrollTop / this.recordHeight),
                            i = h + Math.floor(f.height() / this.recordHeight);
                        a == h && (c === !0 ? f.prop({
                            scrollTop: f.scrollTop() - f.height() / 1.3
                        }) : (f.stop(), f.animate({
                            scrollTop: f.scrollTop() - f.height() / 1.3
                        }, 250, "linear"))), a == i && (c === !0 ? f.prop({
                            scrollTop: f.scrollTop() + f.height() / 1.3
                        }) : (f.stop(), f.animate({
                            scrollTop: f.scrollTop() + f.height() / 1.3
                        }, 250, "linear"))), (a < h || a > i) && (c === !0 ? f.prop({
                            scrollTop: (a - 1) * this.recordHeight
                        }) : (f.stop(), f.animate({
                            scrollTop: (a - 1) * this.recordHeight
                        }, 250, "linear")))
                    }
                    if (null != b) {
                        for (var j = 0, k = 0, l = w2utils.scrollBarSize(), m = 0; m <= b; m++) {
                            var n = this.columns[m];
                            n.frozen || n.hidden || (j = k, k += parseInt(n.sizeCalculated))
                        }
                        f.width() < k - f.scrollLeft() ? c === !0 ? f.prop({
                            scrollLeft: j - l
                        }) : f.animate({
                            scrollLeft: j - l
                        }, 250, "linear") : j < f.scrollLeft() && (c === !0 ? f.prop({
                            scrollLeft: k - f.width() + 2 * l
                        }) : f.animate({
                            scrollLeft: k - f.width() + 2 * l
                        }, 250, "linear"))
                    }
                }
            },
            dblClick: function (a, b) {
                var c = null;
                if ("object" == typeof a && null !== a && (c = a.column, a = a.recid), null == b && (b = {}), null == c && b.target) {
                    var d = b.target;
                    "TD" != d.tagName.toUpperCase() && (d = $(d).parents("td")[0]), c = parseInt($(d).attr("col"))
                }
                var e = this.get(a, !0),
                    f = this.records[e],
                    g = this.trigger({
                        phase: "before",
                        target: this.name,
                        type: "dblClick",
                        recid: a,
                        column: c,
                        originalEvent: b
                    });
                if (g.isCancelled !== !0) {
                    this.selectNone();
                    var h = this.getCellEditable(e, c);
                    h ? this.editField(a, c, null, b) : (this.select({
                        recid: a,
                        column: c
                    }), (this.show.expandColumn || f.w2ui && Array.isArray(f.w2ui.children)) && this.toggle(a)), this.trigger($.extend(g, {
                        phase: "after"
                    }))
                }
            },
            contextMenu: function (a, b, c) {
                var d = this;
                if ("text" != d.last.userSelect) {
                    null == c && (c = {
                        offsetX: 0,
                        offsetY: 0,
                        target: $("#grid_" + d.name + "_rec_" + a)[0]
                    }), null == c.offsetX && (c.offsetX = c.layerX - c.target.offsetLeft, c.offsetY = c.layerY - c.target.offsetTop), w2utils.isFloat(a) && (a = parseFloat(a));
                    var e = this.getSelection();
                    if ("row" == this.selectType) e.indexOf(a) == -1 && d.click(a);
                    else {
                        var f = $(c.target);
                        "TD" != f[0].tagName.toUpperCase() && (f = $(c.target).parents("td"));
                        var g = !1;
                        b = f.attr("col");
                        for (var h = 0; h < e.length; h++) e[h].recid != a && e[h].column != b || (g = !0);
                        g || null == a || d.click({
                            recid: a,
                            column: b
                        }), g || null == b || d.columnClick(this.columns[b].field, c)
                    }
                    var i = d.trigger({
                        phase: "before",
                        type: "contextMenu",
                        target: d.name,
                        originalEvent: c,
                        recid: a,
                        column: b
                    });
                    i.isCancelled !== !0 && (d.menu.length > 0 && $(d.box).find(c.target).w2menu(d.menu, {
                        originalEvent: c,
                        contextMenu: !0,
                        onSelect: function (b) {
                            d.menuClick(a, parseInt(b.index), b.originalEvent)
                        }
                    }), c.preventDefault && c.preventDefault(), d.trigger($.extend(i, {
                        phase: "after"
                    })))
                }
            },
            menuClick: function (a, b, c) {
                var d = this,
                    e = d.trigger({
                        phase: "before",
                        type: "menuClick",
                        target: d.name,
                        originalEvent: c,
                        recid: a,
                        menuIndex: b,
                        menuItem: d.menu[b]
                    });
                e.isCancelled !== !0 && d.trigger($.extend(e, {
                    phase: "after"
                }))
            },
            toggle: function (a) {
                var b = this.get(a);
                return b.w2ui = b.w2ui || {}, b.w2ui.expanded === !0 ? this.collapse(a) : this.expand(a)
            },
            expand: function (a) {
                var b = this.get(a, !0),
                    c = this.records[b];
                c.w2ui = c.w2ui || {};
                var d = w2utils.escapeId(a),
                    e = c.w2ui.children;
                if (Array.isArray(e)) {
                    if (c.w2ui.expanded === !0 || 0 === e.length) return !1;
                    var f = this.trigger({
                        phase: "before",
                        type: "expand",
                        target: this.name,
                        recid: a
                    });
                    if (f.isCancelled === !0) return !1;
                    c.w2ui.expanded = !0, e.forEach(function (a) {
                        a.w2ui = a.w2ui || {}, a.w2ui.parent_recid = c.recid, null == a.w2ui.children && (a.w2ui.children = [])
                    }), this.records.splice.apply(this.records, [b + 1, 0].concat(e)), this.total += e.length;
                    var g = "object" != typeof this.url ? this.url : this.url.get;
                    g || (this.localSort(!0, !0), this.searchData.length > 0 && this.localSearch(!0)), this.refresh(), this.trigger($.extend(f, {
                        phase: "after"
                    }))
                } else {
                    if ($("#grid_" + this.name + "_rec_" + d + "_expanded_row").length > 0 || this.show.expandColumn !== !0) return !1;
                    if ("none" == c.w2ui.expanded) return !1;
                    $("#grid_" + this.name + "_rec_" + d).after('<tr id="grid_' + this.name + "_rec_" + a + '_expanded_row" class="w2ui-expanded-row">    <td colspan="100" class="w2ui-expanded2">        <div id="grid_' + this.name + "_rec_" + a + '_expanded"></div>    </td>    <td class="w2ui-grid-data-last"></td></tr>'), $("#grid_" + this.name + "_frec_" + d).after('<tr id="grid_' + this.name + "_frec_" + a + '_expanded_row" class="w2ui-expanded-row">' + (this.show.lineNumbers ? '<td class="w2ui-col-number"></td>' : "") + '    <td class="w2ui-grid-data w2ui-expanded1" colspan="100">       <div id="grid_' + this.name + "_frec_" + a + '_expanded"></div>   </td></tr>');
                    var f = this.trigger({
                        phase: "before",
                        type: "expand",
                        target: this.name,
                        recid: a,
                        box_id: "grid_" + this.name + "_rec_" + a + "_expanded",
                        fbox_id: "grid_" + this.name + "_frec_" + d + "_expanded"
                    });
                    if (f.isCancelled === !0) return $("#grid_" + this.name + "_rec_" + d + "_expanded_row").remove(), $("#grid_" + this.name + "_frec_" + d + "_expanded_row").remove(), !1;
                    var h = $(this.box).find("#grid_" + this.name + "_rec_" + a + "_expanded"),
                        i = $(this.box).find("#grid_" + this.name + "_frec_" + a + "_expanded"),
                        j = h.find("> div:first-child").height();
                    h.height() < j && h.css({
                        height: j + "px"
                    }), i.height() < j && i.css({
                        height: j + "px"
                    }), $("#grid_" + this.name + "_rec_" + d).attr("expanded", "yes").addClass("w2ui-expanded"), $("#grid_" + this.name + "_frec_" + d).attr("expanded", "yes").addClass("w2ui-expanded"), $("#grid_" + this.name + "_cell_" + this.get(a, !0) + "_expand div").html("-"), c.w2ui.expanded = !0, this.trigger($.extend(f, {
                        phase: "after"
                    })), this.resizeRecords()
                }
                return !0
            },
            collapse: function (a) {
                function b(a) {
                    a.w2ui.expanded = !1;
                    for (var c = 0; c < a.w2ui.children.length; c++) {
                        var d = a.w2ui.children[c];
                        d.w2ui.expanded && b(d)
                    }
                }
                var c = this,
                    d = this.get(a, !0),
                    e = this.records[d];
                e.w2ui = e.w2ui || {};
                var f = w2utils.escapeId(a),
                    g = e.w2ui.children;
                if (Array.isArray(g)) {
                    if (e.w2ui.expanded !== !0) return !1;
                    var h = this.trigger({
                        phase: "before",
                        type: "collapse",
                        target: this.name,
                        recid: a
                    });
                    if (h.isCancelled === !0) return !1;
                    b(e);
                    for (var i = [], j = e; null != j; j = this.get(j.w2ui.parent_recid)) i.push(j.w2ui.parent_recid);
                    for (var k = d + 1, l = k; ;) {
                        if (this.records.length <= l + 1 || null == this.records[l + 1].w2ui || i.indexOf(this.records[l + 1].w2ui.parent_recid) >= 0) break;
                        l++
                    }
                    this.records.splice(k, l - k + 1), this.total -= l - k + 1;
                    var m = "object" != typeof this.url ? this.url : this.url.get;
                    m || this.searchData.length > 0 && this.localSearch(!0), this.refresh(), c.trigger($.extend(h, {
                        phase: "after"
                    }))
                } else {
                    if (0 === $("#grid_" + this.name + "_rec_" + f + "_expanded_row").length || this.show.expandColumn !== !0) return !1;
                    var h = this.trigger({
                        phase: "before",
                        type: "collapse",
                        target: this.name,
                        recid: a,
                        box_id: "grid_" + this.name + "_rec_" + f + "_expanded",
                        fbox_id: "grid_" + this.name + "_frec_" + f + "_expanded"
                    });
                    if (h.isCancelled === !0) return !1;
                    $("#grid_" + this.name + "_rec_" + f).removeAttr("expanded").removeClass("w2ui-expanded"), $("#grid_" + this.name + "_frec_" + f).removeAttr("expanded").removeClass("w2ui-expanded"), $("#grid_" + this.name + "_cell_" + this.get(a, !0) + "_expand div").html("+"), $("#grid_" + c.name + "_rec_" + f + "_expanded").css("height", "0px"), $("#grid_" + c.name + "_frec_" + f + "_expanded").css("height", "0px"), setTimeout(function () {
                        $("#grid_" + c.name + "_rec_" + f + "_expanded_row").remove(), $("#grid_" + c.name + "_frec_" + f + "_expanded_row").remove(), e.w2ui.expanded = !1, c.trigger($.extend(h, {
                            phase: "after"
                        })), c.resizeRecords()
                    }, 300)
                }
                return !0
            },
            sort: function (a, b, c) {
                var d = this.trigger({
                    phase: "before",
                    type: "sort",
                    target: this.name,
                    field: a,
                    direction: b,
                    multiField: c
                });
                if (d.isCancelled !== !0) {
                    if (null != a) {
                        for (var e = this.sortData.length, f = 0; f < this.sortData.length; f++)
                            if (this.sortData[f].field == a) {
                                e = f;
                                break
                            } if (null == b)
                            if (null == this.sortData[e]) b = "asc";
                            else switch (null == this.sortData[e].direction && (this.sortData[e].direction = ""), this.sortData[e].direction.toLowerCase()) {
                                case "asc":
                                    b = "desc";
                                    break;
                                case "desc":
                                    b = "asc";
                                    break;
                                default:
                                    b = "asc"
                            }
                        this.multiSort === !1 && (this.sortData = [], e = 0), 1 != c && (this.sortData = [], e = 0), null == this.sortData[e] && (this.sortData[e] = {}), this.sortData[e].field = a, this.sortData[e].direction = b
                    } else this.sortData = [];
                    var g = "object" != typeof this.url ? this.url : this.url.get;
                    g ? (this.trigger($.extend(d, {
                        phase: "after",
                        direction: b
                    })), this.last.xhr_offset = 0, this.reload()) : (this.localSort(!0, !0), this.searchData.length > 0 && this.localSearch(!0), this.last.scrollTop = 0, $("#grid_" + this.name + "_records").prop("scrollTop", 0), this.trigger($.extend(d, {
                        phase: "after",
                        direction: b
                    })), this.refresh())
                }
            },
            copy: function (a, b) {
                if ($.isPlainObject(a)) return this.trigger($.extend(a, {
                    phase: "after"
                })), a.text;
                var c = this.getSelection();
                if (0 === c.length) return "";
                var d = "";
                if ("object" == typeof c[0]) {
                    for (var e = c[0].column, f = c[0].column, g = [], h = 0; h < c.length; h++) c[h].column < e && (e = c[h].column), c[h].column > f && (f = c[h].column), g.indexOf(c[h].index) == -1 && g.push(c[h].index);
                    g.sort(function (a, b) {
                        return a - b
                    });
                    for (var i = 0; i < g.length; i++) {
                        for (var j = g[i], k = e; k <= f; k++) {
                            var l = this.columns[k];
                            l.hidden !== !0 && (d += this.getCellCopy(j, k) + "\t")
                        }
                        d = d.substr(0, d.length - 1), d += "\n"
                    }
                } else {
                    for (var k = 0; k < this.columns.length; k++) {
                        var l = this.columns[k];
                        if (l.hidden !== !0) {
                            var m = l.caption ? l.caption : l.field;
                            l.caption && l.caption.length < 3 && l.tooltip && (m = l.tooltip), d += '"' + w2utils.stripTags(m) + '"\t'
                        }
                    }
                    d = d.substr(0, d.length - 1), d += "\n";
                    for (var h = 0; h < c.length; h++) {
                        for (var j = this.get(c[h], !0), k = 0; k < this.columns.length; k++) {
                            var l = this.columns[k];
                            l.hidden !== !0 && (d += '"' + this.getCellCopy(j, k) + '"\t')
                        }
                        d = d.substr(0, d.length - 1), d += "\n"
                    }
                }
                if (d = d.substr(0, d.length - 1), null == a) {
                    var n = this.trigger({
                        phase: "before",
                        type: "copy",
                        target: this.name,
                        text: d,
                        cut: 88 == b.keyCode,
                        originalEvent: b
                    });
                    return n.isCancelled === !0 ? "" : (d = n.text, this.trigger($.extend(n, {
                        phase: "after"
                    })), d)
                }
                if (a === !1) {
                    var n = this.trigger({
                        phase: "before",
                        type: "copy",
                        target: this.name,
                        text: d,
                        cut: 88 == b.keyCode,
                        originalEvent: b
                    });
                    return n.isCancelled === !0 ? "" : (d = n.text, n)
                }
            },
            getCellCopy: function (a, b) {
                return w2utils.stripTags(this.getCellHTML(a, b))
            },
            paste: function (a) {
                var b = this.getSelection(),
                    c = this.get(b[0].recid, !0),
                    d = b[0].column,
                    e = this.trigger({
                        phase: "before",
                        type: "paste",
                        target: this.name,
                        text: a,
                        index: c,
                        column: d
                    });
                if (e.isCancelled !== !0) {
                    if (a = e.text, "row" == this.selectType || 0 === b.length) return console.log("ERROR: You can paste only if grid.selectType = 'cell' and when at least one cell selected."), void this.trigger($.extend(e, {
                        phase: "after"
                    }));
                    for (var f = [], a = a.split("\n"), g = 0; g < a.length; g++) {
                        var h = a[g].split("\t"),
                            i = 0,
                            j = this.records[c],
                            k = [];
                        if (null != j) {
                            for (var l = 0; l < h.length; l++) this.columns[d + i] && (this.setCellPaste(j, d + i, h[l]), k.push(d + i), i++);
                            for (var m = 0; m < k.length; m++) f.push({
                                recid: j.recid,
                                column: k[m]
                            });
                            c++
                        }
                    }
                    this.selectNone(), this.select.apply(this, f), this.refresh(), this.trigger($.extend(e, {
                        phase: "after"
                    }))
                }
            },
            setCellPaste: function (a, b, c) {
                var d = this.columns[b].field;
                a.w2ui = a.w2ui || {}, a.w2ui.changes = a.w2ui.changes || {}, a.w2ui.changes[d] = c
            },
            resize: function () {
                var a = this,
                    b = (new Date).getTime();
                if (this.box && $(this.box).attr("name") == this.name) {
                    $(this.box).find("> divgrid-box").css("width", $(this.box).width()).css("height", $(this.box).height());
                    var c = this.trigger({
                        phase: "before",
                        type: "resize",
                        target: this.name
                    });
                    if (c.isCancelled !== !0) return a.resizeBoxes(), a.resizeRecords(), a.toolbar && a.toolbar.resize && a.toolbar.resize(), this.trigger($.extend(c, {
                        phase: "after"
                    })), (new Date).getTime() - b
                }
            },
            update: function (a) {
                var b = (new Date).getTime();
                if (null == this.box) return 0;
                if (null == a) {
                    for (var c = this.last.range_start - 1; c <= this.last.range_end - 1; c++)
                        if (!(c < 0)) {
                            var d = this.records[c] || {};
                            d.w2ui || (d.w2ui = {});
                            for (var e = 0; e < this.columns.length; e++) {
                                var f = $(this.box).find("#grid_" + this.name + "_rec_" + w2utils.escapeId(d.recid)),
                                    g = $(this.box).find("#grid_" + this.name + "_data_" + c + "_" + e);
                                g.replaceWith(this.getCellHTML(c, e, !1)), g = $(this.box).find("#grid_" + this.name + "_data_" + c + "_" + e), null == d.w2ui.style || $.isEmptyObject(d.w2ui.style) ? g.attr("style", "") : ("string" == typeof d.w2ui.style && f.attr("style", d.w2ui.style), $.isPlainObject(d.w2ui.style) && "string" == typeof d.w2ui.style[e] && g.attr("style", d.w2ui.style[e])), null == d.w2ui.class || $.isEmptyObject(d.w2ui.class) || ("string" == typeof d.w2ui.class && f.addClass(d.w2ui.class), $.isPlainObject(d.w2ui.class) && "string" == typeof d.w2ui.class[e] && g.addClass(d.w2ui.class[e]))
                            }
                        }
                } else
                    for (var h = 0; h < a.length; h++) {
                        var c = a[h].index,
                            e = a[h].column;
                        if (!(c < 0))
                            if (null != c && null != e) {
                                var d = this.records[c] || {},
                                    f = $(this.box).find("#grid_" + this.name + "_rec_" + w2utils.escapeId(d.recid)),
                                    g = $(this.box).find("#grid_" + this.name + "_data_" + c + "_" + e);
                                d.w2ui || (d.w2ui = {}), g.replaceWith(this.getCellHTML(c, e, !1)), g = $(this.box).find("#grid_" + this.name + "_data_" + c + "_" + e), null == d.w2ui.style || $.isEmptyObject(d.w2ui.style) ? g.attr("style", "") : ("string" == typeof d.w2ui.style && f.attr("style", d.w2ui.style), $.isPlainObject(d.w2ui.style) && "string" == typeof d.w2ui.style[e] && g.attr("style", d.w2ui.style[e])), null == d.w2ui.class || $.isEmptyObject(d.w2ui.class) || ("string" == typeof d.w2ui.class && f.addClass(d.w2ui.class), $.isPlainObject(d.w2ui.class) && "string" == typeof d.w2ui.class[e] && g.addClass(d.w2ui.class[e]))
                            } else console.log("ERROR: Wrong argument for grid.update(cells), cells should be [{ index: X, column: Y }, ...]")
                    }
                return (new Date).getTime() - b
            },
            refreshCell: function (a, b) {
                var c = this.get(a, !0),
                    d = !this.records[c] || this.records[c].recid != a,
                    e = this.getColumn(b, !0),
                    f = d ? this.summary[c] : this.records[c],
                    g = this.columns[e],
                    h = $(this.box).find("#grid_" + this.name + "_data_" + c + "_" + e);
                return null != f && (h.replaceWith(this.getCellHTML(c, e, d)), h = $(this.box).find("#grid_" + this.name + "_data_" + c + "_" + e), f.w2ui && f.w2ui.changes && null != f.w2ui.changes[g.field] ? h.addClass("w2ui-changed") : h.removeClass("w2ui-changed"), f.w2ui && null != f.w2ui.style && !$.isEmptyObject(f.w2ui.style) ? ("string" == typeof f.w2ui.style && $(this.box).find("#grid_" + this.name + "_rec_" + w2utils.escapeId(f.recid)).attr("style", f.w2ui.style), $.isPlainObject(f.w2ui.style) && "string" == typeof f.w2ui.style[e] && h.attr("style", f.w2ui.style[e])) : h.attr("style", ""), void (f.w2ui && null != f.w2ui.class && !$.isEmptyObject(f.w2ui.class) && ("string" == typeof f.w2ui.class && $(this.box).find("#grid_" + this.name + "_rec_" + w2utils.escapeId(f.recid)).addClass(f.w2ui.class), $.isPlainObject(f.w2ui.class) && "string" == typeof f.w2ui.class[e] && h.addClass(f.w2ui.class[e]))))
            },
            refreshRow: function (a, b) {
                var c = $(this.box).find("#grid_" + this.name + "_frec_" + w2utils.escapeId(a)),
                    d = $(this.box).find("#grid_" + this.name + "_rec_" + w2utils.escapeId(a));
                if (c.length > 0) {
                    null == b && (b = this.get(a, !0));
                    var e = c.attr("line"),
                        f = !this.records[b] || this.records[b].recid != a,
                        g = "object" != typeof this.url ? this.url : this.url.get;
                    if (this.searchData.length > 0 && !g)
                        for (var h = 0; h < this.last.searchIds.length; h++) this.last.searchIds[h] == b && (b = h);
                    var i = this.getRecordHTML(b, e, f);
                    $(c).replaceWith(i[0]), $(d).replaceWith(i[1]);
                    var j = this.records[b].w2ui ? this.records[b].w2ui.style : "";
                    if ("string" == typeof j) {
                        var c = $(this.box).find("#grid_" + this.name + "_frec_" + w2utils.escapeId(a)),
                            d = $(this.box).find("#grid_" + this.name + "_rec_" + w2utils.escapeId(a));
                        c.attr("custom_style", j), d.attr("custom_style", j), c.hasClass("w2ui-selected") && (j = j.replace("background-color", "none")), c[0].style.cssText = "height: " + this.recordHeight + "px;" + j, d[0].style.cssText = "height: " + this.recordHeight + "px;" + j
                    }
                    f && this.resize()
                }
            },
            refresh: function () {
                var a = this,
                    b = (new Date).getTime(),
                    c = "object" != typeof this.url ? this.url : this.url.get;
                if (this.total <= 0 && !c && 0 === this.searchData.length && (this.total = this.records.length), this.toolbar.disable("w2ui-edit", "w2ui-delete"), this.box) {
                    var d = this.trigger({
                        phase: "before",
                        target: this.name,
                        type: "refresh"
                    });
                    if (d.isCancelled !== !0) {
                        if (this.show.header ? $("#grid_" + this.name + "_header").html(this.header + "&#160;").show() : $("#grid_" + this.name + "_header").hide(), this.show.toolbar) {
                            if (this.toolbar && this.toolbar.get("w2ui-column-on-off") && this.toolbar.get("w2ui-column-on-off").checked);
                            else if ($("#grid_" + this.name + "_toolbar").show(), "object" == typeof this.toolbar)
                                for (var e = this.toolbar.items, f = 0; f < e.length; f++) "w2ui-search" != e[f].id && "break" != e[f].type && this.toolbar.refresh(e[f].id)
                        } else $("#grid_" + this.name + "_toolbar").hide();
                        this.searchClose();
                        var g = $("#grid_" + a.name + "_search_all");
                        !this.multiSearch && "all" == this.last.field && this.searches.length > 0 && (this.last.field = this.searches[0].field, this.last.caption = this.searches[0].caption);
                        for (var h = 0; h < this.searches.length; h++) this.searches[h].field == this.last.field && (this.last.caption = this.searches[h].caption);
                        if (this.last.multi ? (g.attr("placeholder", "[" + w2utils.lang("Multiple Fields") + "]"), g.w2field("clear")) : g.attr("placeholder", w2utils.lang(this.last.caption)), g.val() != this.last.search) {
                            var i = this.last.search,
                                e = g.data("w2field");
                            e && (i = e.format(i)), g.val(i)
                        }
                        a.refreshBody(), this.show.footer ? $("#grid_" + this.name + "_footer").html(this.getFooterHTML()).show() : $("#grid_" + this.name + "_footer").hide();
                        var j = $("#grid_" + this.name + "_searchClear");
                        j.hide(), this.searchData.some(function (b) {
                            var c = a.getSearch(b.field);
                            if (a.last.multi || c && !c.hidden && "list" != c.type) return j.show(), !0
                        });
                        var k = this.last.selection,
                            l = this.records.length > 0 && k.indexes.length == this.records.length,
                            m = k.indexes.length > 0 && 0 !== this.searchData.length && k.indexes.length == this.last.searchIds.length;
                        l || m ? $("#grid_" + this.name + "_check_all").prop("checked", !0) : $("#grid_" + this.name + "_check_all").prop("checked", !1), this.status();
                        for (var n = a.find({
                            "w2ui.expanded": !0
                        }, !0), o = 0; o < n.length; o++) {
                            var e = a.records[n[o]].w2ui;
                            e && !Array.isArray(e.children) && (e.expanded = !1)
                        }
                        return a.markSearch && setTimeout(function () {
                            for (var b = [], c = 0; c < a.searchData.length; c++) {
                                var d = a.searchData[c],
                                    e = a.getSearch(d.field);
                                if (e && !e.hidden) {
                                    var f = a.getColumn(d.field, !0);
                                    b.push({
                                        field: d.field,
                                        search: d.value,
                                        col: f
                                    })
                                }
                            }
                            b.length > 0 && b.forEach(function (b) {
                                $(a.box).find('td[col="' + b.col + '"]').not("head").w2marker(b.search)
                            })
                        }, 50), this.show.toolbarSave && (this.getChanges().length > 0 ? this.toolbar.enable("w2ui-save") : this.toolbar.disable("w2ui-save")), this.trigger($.extend(d, {
                            phase: "after"
                        })), a.resize(), a.addRange("selection"), setTimeout(function () {
                            a.resize(), a.scroll()
                        }, 1), a.reorderColumns && !a.last.columnDrag ? a.last.columnDrag = a.initColumnDrag() : !a.reorderColumns && a.last.columnDrag && a.last.columnDrag.remove(), (new Date).getTime() - b
                    }
                }
            },
            refreshBody: function () {
                var a = this,
                    b = this.find({
                        "w2ui.summary": !0
                    }, !0);
                if (b.length > 0) {
                    for (var c = 0; c < b.length; c++) this.summary.push(this.records[b[c]]);
                    for (var c = b.length - 1; c >= 0; c--) this.records.splice(b[c], 1)
                }
                this.scroll();
                var d = this.getRecordsHTML(),
                    e = this.getColumnsHTML(),
                    f = '<div id="grid_' + this.name + '_frecords" class="w2ui-grid-frecords" style="margin-bottom: ' + (w2utils.scrollBarSize() - 1) + 'px;">' + d[0] + '</div><div id="grid_' + this.name + '_records" class="w2ui-grid-records" onscroll="w2ui[\'' + this.name + "'].scroll(event);\">" + d[1] + '</div><div id="grid_' + this.name + '_scroll1" class="w2ui-grid-scroll1" style="height: ' + w2utils.scrollBarSize() + 'px"></div><div id="grid_' + this.name + '_fcolumns" class="w2ui-grid-fcolumns">    <table><tbody>' + e[0] + '</tbody></table></div><div id="grid_' + this.name + '_columns" class="w2ui-grid-columns">    <table><tbody>' + e[1] + "</tbody></table></div>",
                    g = $("#grid_" + this.name + "_body", a.box).html(f),
                    h = $("#grid_" + this.name + "_records", a.box);
                if (g.data("scrolldata", {
                    lastTime: 0,
                    lastDelta: 0,
                    time: 0
                }).find("grid-frecords").on("mousewheel DOMMouseScroll ", function (b) {
                    b.preventDefault();
                    var c = b.originalEvent,
                        d = g.data("scrolldata"),
                        e = $(this).siblings("grid-records").addBack().filter("grid-records"),
                        f = null != typeof c.wheelDelta ? c.wheelDelta * -1 / 120 : (c.detail || c.deltaY) / 3,
                        i = e.scrollTop();
                    d.time = +new Date, d.lastTime < d.time - 150 && (d.lastDelta = 0), d.lastTime = d.time, d.lastDelta += f, f = Math.abs(d.lastDelta) < 1 ? 0 : Math.round(d.lastDelta), g.data("scrolldata", d), f *= (Math.round(h.height() / a.recordHeight) - 1) * a.recordHeight / 4, e.stop().animate({
                        scrollTop: i + f
                    }, 250, "linear")
                }), 0 === this.records.length && this.msgEmpty ? $("#grid_" + this.name + "_body").append('<div id="grid_' + this.name + '_empty_msg" class="w2ui-grid-empty-msg"><div>' + this.msgEmpty + "</div></div>") : $("#grid_" + this.name + "_empty_msg").length > 0 && $("#grid_" + this.name + "_empty_msg").remove(), this.summary.length > 0) {
                    var i = this.getSummaryHTML();
                    $("#grid_" + this.name + "_fsummary").html(i[0]).show(), $("#grid_" + this.name + "_summary").html(i[1]).show()
                } else $("#grid_" + this.name + "_fsummary").hide(), $("#grid_" + this.name + "_summary").hide()
            },
            render: function (a) {
                function b(a) {
                    if (1 == a.which && ("text" == e.last.userSelect && (delete e.last.userSelect, $(e.box).find("grid-body").css(w2utils.cssPrefix("user-select", "none"))), !("row" == e.selectType && ($(a.target).parents().hasClass("w2ui-head") || $(a.target).hasClass("w2ui-head")) || e.last.move && "expand" == e.last.move.type))) {
                        if (a.altKey) $(e.box).find("grid-body").css(w2utils.cssPrefix("user-select", "text")), e.selectNone(), e.last.move = {
                            type: "text-select"
                        }, e.last.userSelect = "text";
                        else {
                            for (var b = a.target, f = {
                                x: a.offsetX - 10,
                                y: a.offsetY - 10
                            }, g = !1; b && (!b.classList || !b.classList.contains("w2ui-grid"));) b.tagName && "TD" == b.tagName.toUpperCase() && (g = !0), b.tagName && "TR" != b.tagName.toUpperCase() && 1 == g && (f.x += b.offsetLeft, f.y += b.offsetTop), b = b.parentNode;
                            e.last.move = {
                                x: a.screenX,
                                y: a.screenY,
                                divX: 0,
                                divY: 0,
                                focusX: f.x,
                                focusY: f.y,
                                recid: $(a.target).parents("tr").attr("recid"),
                                column: parseInt("TD" == a.target.tagName.toUpperCase() ? $(a.target).attr("col") : $(a.target).parents("td").attr("col")),
                                type: "select",
                                ghost: !1,
                                start: !0
                            }, null == e.last.move.recid && (e.last.move.type = "select-column");
                            var h = a.target,
                                i = $(e.box).find("#grid_" + e.name + "_focus");
                            if (e.last.move) {
                                var j = e.last.move.focusX,
                                    k = e.last.move.focusY,
                                    l = $(h).parents("table").parent();
                                (l.hasClass("w2ui-grid-records") || l.hasClass("w2ui-grid-frecords") || l.hasClass("w2ui-grid-columns") || l.hasClass("w2ui-grid-fcolumns") || l.hasClass("w2ui-grid-summary")) && (j = e.last.move.focusX - $(e.box).find("#grid_" + e.name + "_records").scrollLeft(), k = e.last.move.focusY - $(e.box).find("#grid_" + e.name + "_records").scrollTop()), ($(h).hasClass("w2ui-grid-footer") || $(h).parents("divgrid-footer").length > 0) && (k = $(e.box).find("#grid_" + e.name + "_footer").position().top), l.hasClass("w2ui-scroll-wrapper") && l.parent().hasClass("w2ui-toolbar") && (j = e.last.move.focusX - l.scrollLeft()), i.css({
                                    left: j - 10,
                                    top: k
                                })
                            }
                            setTimeout(function () {
                                ["INPUT", "TEXTAREA", "SELECT"].indexOf(h.tagName.toUpperCase()) != -1 ? $(h).focus() : i.is(":focus") || i.focus()
                            }, 50), e.multiSelect || e.reorderRows || "drag" != e.last.move.type || delete e.last.move
                        }
                        if (1 == e.reorderRows) {
                            var m = a.target;
                            if ("TD" != m.tagName.toUpperCase() && (m = $(m).parents("td")[0]), $(m).hasClass("w2ui-col-number")) {
                                e.selectNone(), e.last.move.reorder = !0;
                                var n = $(e.box).find("evenempty-record").css("background-color"),
                                    o = $(e.box).find("oddempty-record").css("background-color");
                                $(e.box).find("even td").not("col-number").css("background-color", n), $(e.box).find("odd td").not("col-number").css("background-color", o);
                                var p = e.last.move;
                                if (!p.ghost) {
                                    var q = $("#grid_" + e.name + "_rec_" + p.recid),
                                        b = q.parents("table").find("tr:first-child").clone();
                                    p.offsetY = a.offsetY, p.from = p.recid, p.pos = q.position(), p.ghost = $(q).clone(!0), p.ghost.removeAttr("id"), q.find("td").remove(), q.append('<td colspan="1000" style="height: ' + e.recordHeight + 'px; background-color: #eee; border-bottom: 1px dashed #aaa; border-top: 1px dashed #aaa;"></td>');
                                    var r = $(e.box).find("grid-records");
                                    r.append('<table id="grid_' + e.name + '_ghost" style="position: absolute; z-index: 999999; opacity: 0.7; pointer-events: none;"></table>'), $("#grid_" + e.name + "_ghost").append(b).append(p.ghost)
                                }
                                var s = $("#grid_" + e.name + "_ghost"),
                                    r = $(e.box).find("grid-records");
                                s.css({
                                    top: p.pos.top + r.scrollTop(),
                                    left: p.pos.left,
                                    "border-top": "1px solid #aaa",
                                    "border-bottom": "1px solid #aaa"
                                })
                            } else e.last.move.reorder = !1
                        }
                        $(document).on("mousemove" + e.name, c).on("mouseup" + e.name, d), a.stopPropagation()
                    }
                }

                function c(a) {
                    var b = e.last.move;
                    if (b && ["select", "select-column"].indexOf(b.type) != -1 && (b.divX = a.screenX - b.x, b.divY = a.screenY - b.y, !(Math.abs(b.divX) <= 1 && Math.abs(b.divY) <= 1))) {
                        if (e.last.cancelClick = !0, 1 == e.reorderRows && e.last.move.reorder) {
                            var c = $(a.target).parents("tr"),
                                d = c.attr("recid");
                            if (d != b.from) {
                                var f = ($("#grid_" + e.name + "_rec_" + b.recid), $("#grid_" + e.name + "_rec_" + d));
                                $(e.box).find(".tmp-ghost").css("border-top", "0px"), f.addClass("tmp-ghost").css("border-top", "2px solid #769EFC"), b.lastY = a.screenY, b.to = d
                            }
                            var g = $("#grid_" + e.name + "_ghost"),
                                h = $(e.box).find("grid-records");
                            return void g.css({
                                top: b.pos.top + b.divY + h.scrollTop(),
                                left: b.pos.left
                            })
                        }
                        b.start && b.recid && (e.selectNone(), b.start = !1);
                        var i = [],
                            d = "TR" == a.target.tagName.toUpperCase() ? $(a.target).attr("recid") : $(a.target).parents("tr").attr("recid");
                        if (null == d) {
                            if ("row" == e.selectType) return;
                            if (e.last.move && "select" == e.last.move.type) return;
                            var j = parseInt($(a.target).parents("td").attr("col"));
                            if (isNaN(j)) e.removeRange("column-selection"), $(e.box).find("grid-columns col-header, grid-fcolumns col-header").removeClass("w2ui-col-selected"), $(e.box).find("col-number").removeClass("w2ui-row-selected"), delete b.colRange;
                            else {
                                var k = j + "-" + j;
                                b.column < j && (k = b.column + "-" + j), b.column > j && (k = j + "-" + b.column);
                                for (var l = [], c = k.split("-"), n = parseInt(c[0]); n <= parseInt(c[1]); n++) l.push(n);
                                if (b.colRange != k && (m = e.trigger({
                                    phase: "before",
                                    type: "columnSelect",
                                    target: e.name,
                                    columns: l,
                                    isCancelled: !1
                                }), m.isCancelled !== !0)) {
                                    null == b.colRange && e.selectNone();
                                    var c = k.split("-");
                                    $(e.box).find("grid-columns col-header, grid-fcolumns col-header").removeClass("w2ui-col-selected");
                                    for (var o = parseInt(c[0]); o <= parseInt(c[1]); o++) $(e.box).find("#grid_" + e.name + "_column_" + o + " col-header").addClass("w2ui-col-selected");
                                    $(e.box).find("col-number").not("head").addClass("w2ui-row-selected"), b.colRange = k, e.removeRange("column-selection"), e.addRange({
                                        name: "column-selection",
                                        range: [{
                                            recid: e.records[0].recid,
                                            column: c[0]
                                        }, {
                                            recid: e.records[e.records.length - 1].recid,
                                            column: c[1]
                                        }],
                                        style: "background-color: rgba(90, 145, 234, 0.1)"
                                    })
                                }
                            }
                        } else {
                            var p = e.get(b.recid, !0);
                            if (null == p || e.records[p] && e.records[p].recid != b.recid) return;
                            var q = e.get(d, !0);
                            if (null == q) return;
                            var r = parseInt(b.column),
                                s = parseInt("TD" == a.target.tagName.toUpperCase() ? $(a.target).attr("col") : $(a.target).parents("td").attr("col"));
                            if (isNaN(r) && isNaN(s) && (r = 0, s = e.columns.length - 1), p > q) {
                                var c = p;
                                p = q, q = c
                            }
                            var c = "ind1:" + p + ",ind2;" + q + ",col1:" + r + ",col2:" + s;
                            if (b.range == c) return;
                            b.range = c;
                            for (var t = p; t <= q; t++)
                                if (!(e.last.searchIds.length > 0 && e.last.searchIds.indexOf(t) == -1))
                                    if ("row" != e.selectType) {
                                        if (r > s) {
                                            var c = r;
                                            r = s, s = c
                                        }
                                        for (var c = [], u = r; u <= s; u++) e.columns[u].hidden || i.push({
                                            recid: e.records[t].recid,
                                            column: parseInt(u)
                                        })
                                    } else i.push(e.records[t].recid);
                            if ("row" != e.selectType) {
                                for (var v = e.getSelection(), c = [], w = 0; w < i.length; w++) {
                                    for (var x = !1, y = 0; y < v.length; y++) i[w].recid == v[y].recid && i[w].column == v[y].column && (x = !0);
                                    x || c.push({
                                        recid: i[w].recid,
                                        column: i[w].column
                                    })
                                }
                                e.select.apply(e, c);
                                for (var c = [], y = 0; y < v.length; y++) {
                                    for (var x = !1, w = 0; w < i.length; w++) i[w].recid == v[y].recid && i[w].column == v[y].column && (x = !0);
                                    x || c.push({
                                        recid: v[y].recid,
                                        column: v[y].column
                                    })
                                }
                                e.unselect.apply(e, c)
                            } else if (e.multiSelect) {
                                for (var v = e.getSelection(), w = 0; w < i.length; w++) v.indexOf(i[w]) == -1 && e.select(i[w]);
                                for (var y = 0; y < v.length; y++) i.indexOf(v[y]) == -1 && e.unselect(v[y])
                            }
                        }
                    }
                }

                function d(a) {
                    var b = e.last.move;
                    if (setTimeout(function () {
                        delete e.last.cancelClick
                    }, 1), !$(a.target).parents().hasClass("head") && !$(a.target).hasClass("head")) {
                        if (b && ["select", "select-column"].indexOf(b.type) != -1) {
                            if (null != b.colRange && m.isCancelled !== !0) {
                                for (var c = b.colRange.split("-"), d = [], f = 0; f < e.records.length; f++) {
                                    for (var g = [], h = parseInt(c[0]); h <= parseInt(c[1]); h++) g.push(h);
                                    d.push({
                                        recid: e.records[f].recid,
                                        column: g
                                    })
                                }
                                e.removeRange("column-selection"), e.trigger($.extend(m, {
                                    phase: "after"
                                })), e.select.apply(e, d)
                            }
                            if (1 == e.reorderRows && e.last.move.reorder) {
                                var i = e.trigger({
                                    phase: "before",
                                    target: e.name,
                                    type: "reorderRow",
                                    recid: b.from,
                                    moveAfter: b.to
                                });
                                if (i.isCancelled === !0) return $("#grid_" + e.name + "_ghost").remove(), e.refresh(), void delete e.last.move;
                                var j = e.get(b.from, !0),
                                    k = e.get(b.to, !0),
                                    c = e.records[j];
                                null != j && null != k && (e.records.splice(j, 1), j > k ? e.records.splice(k, 0, c) : e.records.splice(k - 1, 0, c)), $("#grid_" + e.name + "_ghost").remove(), e.refresh(), e.trigger($.extend(i, {
                                    phase: "after"
                                }))
                            }
                        }
                        delete e.last.move, $(document).off("" + e.name)
                    }
                }
                var e = this,
                    f = (new Date).getTime();
                if (null != a && ($(this.box).find("#grid_" + this.name + "_body").length > 0 && $(this.box).removeAttr("name").removeClass("w2ui-reset w2ui-grid").html(""), this.box = a), this.box) {
                    var g = "object" != typeof this.url ? this.url : this.url.get,
                        h = this.trigger({
                            phase: "before",
                            target: this.name,
                            type: "render",
                            box: a
                        });
                    if (h.isCancelled !== !0) {
                        if (this.reset(!0), !this.last.field)
                            if (this.multiSearch && this.show.searchAll) this.last.field = "all", this.last.caption = w2utils.lang("All Fields");
                            else {
                                for (var i = 0; i < this.searches.length && (this.searches[i].hidden || this.searches[i].simple === !1);) i++;
                                i >= this.searches.length ? (this.last.field = "", this.last.caption = "") : (this.last.field = this.searches[i].field, this.last.caption = this.searches[i].caption)
                            } if ($(this.box).attr("name", this.name).addClass("w2ui-reset w2ui-grid").html('<div class="w2ui-grid-box">    <div id="grid_' + this.name + '_header" class="w2ui-grid-header"></div>    <div id="grid_' + this.name + '_toolbar" class="w2ui-grid-toolbar"></div>    <div id="grid_' + this.name + '_body" class="w2ui-grid-body"></div>    <div id="grid_' + this.name + '_fsummary" class="w2ui-grid-body w2ui-grid-summary"></div>    <div id="grid_' + this.name + '_summary" class="w2ui-grid-body w2ui-grid-summary"></div>    <div id="grid_' + this.name + '_footer" class="w2ui-grid-footer"></div>    <textarea id="grid_' + this.name + '_focus" class="w2ui-grid-focus-input"></textarea></div>'), "row" != this.selectType && $(this.box).addClass("w2ui-ss"), $(this.box).length > 0 && ($(this.box)[0].style.cssText += this.style), this.initToolbar(), null != this.toolbar && this.toolbar.render($("#grid_" + this.name + "_toolbar")[0]), this.last.field && "all" != this.last.field) {
                                var j = this.searchData;
                                setTimeout(function () {
                                    e.initAllField(e.last.field, 1 == j.length ? j[0].value : null)
                                }, 1)
                            }
                        $("#grid_" + this.name + "_footer").html(this.getFooterHTML()), this.last.state || (this.last.state = this.stateSave(!0)), this.stateRestore(), g && this.refresh();
                        for (var k = !1, l = 0; l < this.searches.length; l++)
                            if (this.searches[l].hidden) {
                                k = !0;
                                break
                            } k ? (this.searchReset(!1), g || setTimeout(function () {
                                e.searchReset()
                            }, 1)) : this.reload(), $(this.box).find("#grid_" + this.name + "_focus").on("focus", function (a) {
                                clearTimeout(e.last.kbd_timer), e.hasFocus || e.focus()
                            }).on("blur", function (a) {
                                clearTimeout(e.last.kbd_timer), e.last.kbd_timer = setTimeout(function () {
                                    e.hasFocus && e.blur()
                                }, 100)
                            }).on("paste", function (a) {
                                var b = this;
                                setTimeout(function () {
                                    w2ui[e.name].paste(b.value), b.value = ""
                                }, 1)
                            }).on("keydown", function (a) {
                                w2ui[e.name].keydown.call(w2ui[e.name], a)
                            });
                        var m;
                        return $(this.box).on("mousedown", b), this.trigger($.extend(h, {
                            phase: "after"
                        })), 0 === $("layout").length && $(window).off("resize" + this.name).on("resize" + this.name, function (a) {
                            w2ui[e.name].resize()
                        }), (new Date).getTime() - f
                    }
                }
            },
            destroy: function () {
                var a = this.trigger({
                    phase: "before",
                    target: this.name,
                    type: "destroy"
                });
                a.isCancelled !== !0 && ($(this.box).off(), "object" == typeof this.toolbar && this.toolbar.destroy && this.toolbar.destroy(), $(this.box).find("#grid_" + this.name + "_body").length > 0 && $(this.box).removeAttr("name").removeClass("w2ui-reset w2ui-grid").html(""), delete w2ui[this.name], this.trigger($.extend(a, {
                    phase: "after"
                })))
            },
            initColumnOnOff: function () {
                if (this.show.toolbarColumns) {
                    for (var a = this, b = '<div class="w2ui-col-on-off"><table><tbody><tr id="grid_' + this.name + '_column_ln_check" onclick="w2ui[\'' + a.name + '\'].columnOnOff(event, \'line-numbers\'); event.stopPropagation();">   <td style="width: 30px; text-align: center; padding-right: 3px; color: #888;">      <span class="w2ui-column-check w2ui-icon-' + (a.show.lineNumbers ? "check" : "empty") + '"></span>   </td>   <td>      <label>' + w2utils.lang("Line #") + "</label>   </td></tr>", c = 0; c < this.columns.length; c++) {
                        var d = this.columns[c],
                            e = this.columns[c].caption;
                        d.hideable !== !1 && (!e && this.columns[c].tooltip && (e = this.columns[c].tooltip), e || (e = "- column " + (parseInt(c) + 1) + " -"), b += '<tr id="grid_' + this.name + "_column_" + c + '_check"        onclick="w2ui[\'' + a.name + "'].columnOnOff(event, '" + d.field + '\'); event.stopPropagation();">   <td style="width: 30px; text-align: center; padding-right: 3px; color: #888;">      <span class="w2ui-column-check w2ui-icon-' + (d.hidden ? "empty" : "check") + '"></span>   </td>   <td>       <label>' + w2utils.stripTags(e) + "</label>   </td></tr>")
                    }
                    var f = "object" != typeof this.url ? this.url : this.url.get;
                    (f && a.show.skipRecords || a.show.saveRestoreState) && (b += '<tr style="pointer-events: none"><td colspan="2"><div style="border-top: 1px solid #ddd;"></div></td></tr>'), f && a.show.skipRecords && (b += '<tr><td colspan="2" style="padding: 0px">    <div style="cursor: pointer; padding: 2px 8px; cursor: default">' + w2utils.lang("Skip") + '        <input type="text" style="width: 60px" value="' + this.offset + '"             onkeydown="if ([48,49,50,51,52,53,54,55,56,57,58,13,8,46,37,39].indexOf(event.keyCode) == -1) { event.preventDefault() }"            onkeypress="if (event.keyCode == 13) {                w2ui[\'' + a.name + "'].skip(this.value);                jQuery('overlay')[0].hide();             }\"/> " + w2utils.lang("Records") + "    </div></td></tr>"), a.show.saveRestoreState && (b += '<tr><td colspan="2" onclick="var obj = w2ui[\'' + a.name + "']; obj.toolbar.uncheck('w2ui-column-on-off'); obj.stateSave();\">    <div style=\"cursor: pointer; padding: 4px 8px; cursor: default\">" + w2utils.lang("Save Grid State") + '</div></td></tr><tr><td colspan="2" onclick="var obj = w2ui[\'' + a.name + "']; obj.toolbar.uncheck('w2ui-column-on-off'); obj.stateReset();\">    <div style=\"cursor: pointer; padding: 4px 8px; cursor: default\">" + w2utils.lang("Restore Default State") + "</div></td></tr>"), b += "</tbody></table></div>", this.toolbar.get("w2ui-column-on-off").html = b
                }
            },
            initColumnDrag: function (a) {
                function b() {
                    j.pressed = !1, clearTimeout(j.timeout)
                }

                function c(a) {
                    j.timeout && clearTimeout(j.timeout);
                    var b = this;
                    j.pressed = !0, j.timeout = setTimeout(function () {
                        if (j.pressed && 0 !== j.numberPreColumnsPresent) {
                            var c, f, g, h, k, l = ["w2ui-col-number", "w2ui-col-expand", "w2ui-col-select"],
                                m = ["w2ui-head-last"],
                                n = l.concat(m),
                                o = "col-number, col-expand, col-select",
                                p = "headcol-number, headcol-expand, headcol-select";
                            if ($(a.originalEvent.target).parents().hasClass("w2ui-head")) {
                                for (var q = 0, r = n.length; q < r; q++)
                                    if ($(a.originalEvent.target).parents().hasClass(n[q])) return;
                                if (j.numberPreColumnsPresent = $(i.box).find(p).length, j.columnHead = h = $(a.originalEvent.target).parents("head"), j.originalPos = k = parseInt(h.attr("col"), 10), c = i.trigger({
                                    type: "columnDragStart",
                                    phase: "before",
                                    originalEvent: a,
                                    origColumnNumber: k,
                                    target: h[0]
                                }), c.isCancelled === !0) return !1;
                                f = j.columns = $(i.box).find("head:not(head-last)"), $(document).on("mouseup", e), $(document).on("mousemove", d), j.ghost = $(b).clone(!0), $(j.ghost).find('[col]:not([col="' + j.originalPos + '"]), toolbar, grid-header').remove(), $(j.ghost).find(o).remove(), $(j.ghost).find("grid-body").css({
                                    top: 0
                                }), g = $(j.ghost).find('[col="' + j.originalPos + '"]'), $(document.body).append(j.ghost), $(j.ghost).css({
                                    width: 0,
                                    height: 0,
                                    margin: 0,
                                    position: "fixed",
                                    zIndex: 999999,
                                    opacity: 0
                                }).addClass("grid-ghost").animate({
                                    width: g.width(),
                                    height: $(i.box).find("grid-body:first").height(),
                                    left: a.pageX,
                                    top: a.pageY,
                                    opacity: .8
                                }, 0), j.offsets = [];
                                for (var q = 0, r = f.length; q < r; q++) j.offsets.push($(f[q]).offset().left);
                                i.trigger($.extend(c, {
                                    phase: "after"
                                }))
                            }
                        }
                    }, 150)
                }

                function d(a) {
                    if (j.pressed) {
                        var b = a.originalEvent.pageX,
                            c = a.originalEvent.pageY,
                            d = j.offsets,
                            e = $("head:not(head-last)").width();
                        j.targetInt = Math.max(j.numberPreColumnsPresent, g(b, d, e)), f(j.targetInt), h(b, c)
                    }
                }

                function e(a) {
                    j.pressed = !1;
                    var b, c, f, g, h, k = $("grid-ghost");
                    return b = i.trigger({
                        type: "columnDragEnd",
                        phase: "before",
                        originalEvent: a,
                        target: j.columnHead[0]
                    }), b.isCancelled !== !0 && (f = i.columns[j.originalPos], g = i.columns, h = $(j.columns[Math.min(j.lastInt, j.columns.length - 1)]), c = j.lastInt < j.columns.length ? parseInt(h.attr("col")) : g.length, c !== j.originalPos + 1 && c !== j.originalPos && h && h.length ? ($(j.ghost).animate({
                        top: $(i.box).offset().top,
                        left: h.offset().left,
                        width: 0,
                        height: 0,
                        opacity: .2
                    }, 300, function () {
                        $(this).remove(), k.remove()
                    }), g.splice(c, 0, $.extend({}, f)), g.splice(g.indexOf(f), 1)) : ($(j.ghost).remove(), k.remove()), $(document).off("mouseup", e), $(document).off("mousemove", d), j.marker && j.marker.remove(), j = {}, i.refresh(), void i.trigger($.extend(b, {
                        phase: "after",
                        targetColumnNumber: c - 1
                    })))
                }

                function f(a) {
                    j.marker || j.markerLeft || (j.marker = $('<div class="col-intersection-marker"><div class="top-marker"></div><div class="bottom-marker"></div></div>'), j.markerLeft = $('<div class="col-intersection-marker"><div class="top-marker"></div><div class="bottom-marker"></div></div>')), j.lastInt && j.lastInt === a || (j.lastInt = a, j.marker.remove(), j.markerLeft.remove(), $("head").removeClass("w2ui-col-intersection"), a >= j.columns.length ? ($(j.columns[j.columns.length - 1]).children("div:last").append(j.marker.addClass("right").removeClass("left")), $(j.columns[j.columns.length - 1]).addClass("w2ui-col-intersection")) : a <= j.numberPreColumnsPresent ? ($(j.columns[j.numberPreColumnsPresent]).prepend(j.marker.addClass("left").removeClass("right")).css({
                        position: "relative"
                    }), $(j.columns[j.numberPreColumnsPresent]).prev().addClass("w2ui-col-intersection")) : ($(j.columns[a]).children("div:last").prepend(j.marker.addClass("left").removeClass("right")), $(j.columns[a]).prev().children("div:last").append(j.markerLeft.addClass("right").removeClass("left")).css({
                        position: "relative"
                    }), $(j.columns[a - 1]).addClass("w2ui-col-intersection")))
                }

                function g(a, b, c) {
                    if (a <= b[0]) return 0;
                    if (a >= b[b.length - 1] + c) return b.length;
                    for (var d = 0, e = b.length; d < e; d++) {
                        var f = b[d],
                            g = b[d + 1] || b[d] + c,
                            h = (g - b[d]) / 2 + b[d];
                        if (a > f && a <= h) return d;
                        if (a > h && a <= g) return d + 1
                    }
                    return intersection
                }

                function h(a, b) {
                    $(j.ghost).css({
                        left: a - 10,
                        top: b - 10
                    })
                }
                if (this.columnGroups && this.columnGroups.length) throw "Draggable columns are not currently supported with column groups.";
                var i = this,
                    j = {};
                return j.lastInt = null, j.pressed = !1, j.timeout = null, j.columnHead = null, $(i.box).on("mousedown", c), $(i.box).on("mouseup", b), {
                    remove: function () {
                        $(i.box).off("mousedown", c), $(i.box).off("mouseup", b), $(i.box).find("head").removeAttr("draggable"), i.last.columnDrag = !1
                    }
                }
            },
            columnOnOff: function (a, b) {
                var c = $(a.target).parents("tr").find("column-check"),
                    d = this.trigger({
                        phase: "before",
                        target: this.name,
                        type: "columnOnOff",
                        field: b,
                        originalEvent: a
                    });
                if (d.isCancelled !== !0) {
                    for (var e = this, f = !(a.shiftKey || a.metaKey || a.ctrlKey || $(a.target).hasClass("w2ui-column-check")), g = e.find({
                        "w2ui.expanded": !0
                    }, !0), h = 0; h < g.length; h++) {
                        var i = this.records[h].w2ui;
                        i && !Array.isArray(i.children) && (this.records[h].w2ui.expanded = !1)
                    }
                    if ("line-numbers" == b) this.show.lineNumbers = !this.show.lineNumbers, this.show.lineNumbers ? c.addClass("w2ui-icon-check").removeClass("w2ui-icon-empty") : c.addClass("w2ui-icon-empty").removeClass("w2ui-icon-check"), this.refreshBody(), this.resizeRecords();
                    else {
                        var j = this.getColumn(b);
                        j.hidden ? (c.addClass("w2ui-icon-check").removeClass("w2ui-icon-empty"), setTimeout(function () {
                            e.showColumn(j.field)
                        }, f ? 0 : 50)) : (c.addClass("w2ui-icon-empty").removeClass("w2ui-icon-check"), setTimeout(function () {
                            e.hideColumn(j.field)
                        }, f ? 0 : 50))
                    }
                    f && setTimeout(function () {
                        $().w2overlay({
                            name: e.name + "_toolbar"
                        })
                    }, 40), this.trigger($.extend(d, {
                        phase: "after"
                    }))
                }
            },
            scrollToColumn: function (a) {
                if (null != a) {
                    for (var b = 0, c = !1, d = 0; d < this.columns.length; d++) {
                        var e = this.columns[d];
                        if (e.field == a) {
                            c = !0;
                            break
                        }
                        if (!e.frozen && !e.hidden) {
                            var f = parseInt(e.sizeCalculated ? e.sizeCalculated : e.size);
                            b += f
                        }
                    }
                    c && (this.last.scrollLeft = b + 1, this.scroll())
                }
            },
            initToolbar: function () {
                var a = this;
                if (null == this.toolbar.render) {
                    var b = this.toolbar.items;
                    if (this.toolbar.items = [], this.toolbar = $().w2toolbar($.extend(!0, {}, this.toolbar, {
                        name: this.name + "_toolbar",
                        owner: this
                    })), this.show.toolbarReload && this.toolbar.items.push($.extend(!0, {}, this.buttons.reload)), this.show.toolbarColumns && this.toolbar.items.push($.extend(!0, {}, this.buttons.columns)), (this.show.toolbarReload || this.show.toolbarColumns) && this.toolbar.items.push({
                        type: "break",
                        id: "w2ui-break0"
                    }), this.show.toolbarInput) {
                        var c = '<div class="w2ui-toolbar-search"><table cellpadding="0" cellspacing="0"><tbody><tr>    <td>' + this.buttons.search.html + '</td>    <td>        <input type="text" id="grid_' + this.name + '_search_all" class="w2ui-search-all" tabindex="-1"             placeholder="' + w2utils.lang(this.last.caption) + '" value="' + this.last.search + '"            onfocus="clearTimeout(w2ui[\'' + this.name + '\'].last.kbd_timer);"            onkeydown="if (event.keyCode == 13 &amp;&amp; w2utils.isIE) this.onchange();"            onchange="                var grid = w2ui[\'' + this.name + "'];                 var val = this.value;                 var sel = jQuery(this).data('selected');                var fld = jQuery(this).data('w2field');                 if (fld) val = fld.clean(val);                if (fld &amp;&amp; fld.type == 'list' &amp;&amp; sel &amp;&amp; typeof sel.id == 'undefined') {                   grid.searchReset();                } else {                   grid.search(grid.last.field, val);                }            \"/>    </td>    <td>        <div class=\"w2ui-search-clear\" id=\"grid_" + this.name + '_searchClear"               onclick="var obj = w2ui[\'' + this.name + '\']; obj.searchReset();" style="display: none"        >&#160;&#160;</div>    </td></tr></tbody></table></div>';
                        this.toolbar.items.push({
                            type: "html",
                            id: "w2ui-search",
                            html: c
                        })
                    }
                    if (this.show.toolbarSearch && this.multiSearch && this.searches.length > 0 && this.toolbar.items.push($.extend(!0, {}, this.buttons["search-go"])), (this.show.toolbarSearch || this.show.toolbarInput) && (this.show.toolbarAdd || this.show.toolbarEdit || this.show.toolbarDelete || this.show.toolbarSave) && this.toolbar.items.push({
                        type: "break",
                        id: "w2ui-break1"
                    }), this.show.toolbarAdd && this.toolbar.items.push($.extend(!0, {}, this.buttons.add)), this.show.toolbarEdit && this.toolbar.items.push($.extend(!0, {}, this.buttons.edit)), this.show.toolbarDelete && this.toolbar.items.push($.extend(!0, {}, this.buttons.delete)), this.show.toolbarSave && ((this.show.toolbarAdd || this.show.toolbarDelete || this.show.toolbarEdit) && this.toolbar.items.push({
                        type: "break",
                        id: "w2ui-break2"
                    }), this.toolbar.items.push($.extend(!0, {}, this.buttons.save))), b)
                        for (var d = 0; d < b.length; d++) this.toolbar.items.push(b[d]);
                    var a = this;
                    this.toolbar.on("click", function (b) {
                        var c = a.trigger({
                            phase: "before",
                            type: "toolbar",
                            target: b.target,
                            originalEvent: b
                        });
                        if (c.isCancelled !== !0) {
                            var d = b.target;
                            switch (d) {
                                case "w2ui-reload":
                                    var e = a.trigger({
                                        phase: "before",
                                        type: "reload",
                                        target: a.name
                                    });
                                    if (e.isCancelled === !0) return !1;
                                    a.reload(), a.trigger($.extend(e, {
                                        phase: "after"
                                    }));
                                    break;
                                case "w2ui-column-on-off":
                                    a.initColumnOnOff(), a.initResize(), a.resize();
                                    break;
                                case "w2ui-search-advanced":
                                    var f = this.get(d);
                                    f.checked ? a.searchClose() : a.searchOpen(), a.toolbar.tooltipHide("w2ui-search-advanced"), b.preventDefault();
                                    break;
                                case "w2ui-add":
                                    var e = a.trigger({
                                        phase: "before",
                                        target: a.name,
                                        type: "add",
                                        recid: null
                                    });
                                    if (e.isCancelled === !0) return !1;
                                    a.trigger($.extend(e, {
                                        phase: "after"
                                    })), setTimeout(function () {
                                        $().w2tag()
                                    }, 20);
                                    break;
                                case "w2ui-edit":
                                    var g = a.getSelection(),
                                        h = null;
                                    1 == g.length && (h = g[0]);
                                    var e = a.trigger({
                                        phase: "before",
                                        target: a.name,
                                        type: "edit",
                                        recid: h
                                    });
                                    if (e.isCancelled === !0) return !1;
                                    a.trigger($.extend(e, {
                                        phase: "after"
                                    })), setTimeout(function () {
                                        $().w2tag()
                                    }, 20);
                                    break;
                                case "w2ui-delete":
                                    a.delete();
                                    break;
                                case "w2ui-save":
                                    a.save()
                            }
                            a.trigger($.extend(c, {
                                phase: "after"
                            }))
                        }
                    })
                }
            },
            initResize: function () {
                var a = this;
                $(this.box).find("resizer").off("click").on("click", function (a) {
                    a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0, a.preventDefault && a.preventDefault()
                }).off("mousedown").on("mousedown", function (b) {
                    b || (b = window.event), a.resizing = !0, a.last.tmp = {
                        x: b.screenX,
                        y: b.screenY,
                        gx: b.screenX,
                        gy: b.screenY,
                        col: parseInt($(this).attr("name"))
                    }, b.stopPropagation ? b.stopPropagation() : b.cancelBubble = !0, b.preventDefault && b.preventDefault();
                    for (var c = 0; c < a.columns.length; c++) a.columns[c].hidden || (null == a.columns[c].sizeOriginal && (a.columns[c].sizeOriginal = a.columns[c].size), a.columns[c].size = a.columns[c].sizeCalculated);
                    var d = {
                        phase: "before",
                        type: "columnResize",
                        target: a.name,
                        column: a.last.tmp.col,
                        field: a.columns[a.last.tmp.col].field
                    };
                    d = a.trigger($.extend(d, {
                        resizeBy: 0,
                        originalEvent: b
                    }));
                    var e = function (b) {
                        if (1 == a.resizing) {
                            if (b || (b = window.event), d = a.trigger($.extend(d, {
                                resizeBy: b.screenX - a.last.tmp.gx,
                                originalEvent: b
                            })), d.isCancelled === !0) return void (d.isCancelled = !1);
                            a.last.tmp.x = b.screenX - a.last.tmp.x, a.last.tmp.y = b.screenY - a.last.tmp.y, a.columns[a.last.tmp.col].size = parseInt(a.columns[a.last.tmp.col].size) + a.last.tmp.x + "px", a.resizeRecords(), a.scroll(), a.last.tmp.x = b.screenX, a.last.tmp.y = b.screenY
                        }
                    },
                        f = function (b) {
                            delete a.resizing, $(document).off("mousemove", "body"), $(document).off("mouseup", "body"), a.resizeRecords(), a.scroll(), a.trigger($.extend(d, {
                                phase: "after",
                                originalEvent: b
                            }))
                        };
                    $(document).on("mousemove", "body", e), $(document).on("mouseup", "body", f)
                }).off("dblclick").on("dblclick", function (b) {
                    var c = parseInt($(this).attr("name")),
                        d = a.columns[c],
                        e = 0;
                    if (d.autoResize === !1) return !0;
                    b.stopPropagation ? b.stopPropagation() : b.cancelBubble = !0, b.preventDefault && b.preventDefault(), $('grid-records td[col="' + c + '"] > div', a.box).each(function () {
                        var a = this.offsetWidth - this.scrollWidth;
                        a < e && (e = a - 3)
                    });
                    var f = {
                        phase: "before",
                        type: "columnAutoResize",
                        target: a.name,
                        column: d,
                        field: d.field
                    };
                    return f = a.trigger($.extend(f, {
                        resizeBy: Math.abs(e),
                        originalEvent: b
                    })), f.isCancelled === !0 ? void (f.isCancelled = !1) : (e < 0 && (d.size = Math.min(parseInt(d.size) + Math.abs(e), d.max || 1 / 0) + "px", a.resizeRecords(), a.resizeRecords(), a.scroll()), void a.trigger($.extend(f, {
                        phase: "after",
                        originalEvent: b
                    })))
                }).each(function (a, b) {
                    var c = $(b).parent();
                    $(b).css({
                        height: "25px",
                        "margin-left": c.width() - 3 + "px"
                    })
                })
            },
            resizeBoxes: function () {
                var a = $("#grid_" + this.name + "_header"),
                    b = $("#grid_" + this.name + "_toolbar"),
                    c = $("#grid_" + this.name + "_fsummary"),
                    d = $("#grid_" + this.name + "_summary"),
                    e = $("#grid_" + this.name + "_footer"),
                    f = $("#grid_" + this.name + "_body");
                this.show.header && a.css({
                    top: "0px",
                    left: "0px",
                    right: "0px"
                }), this.show.toolbar && b.css({
                    top: 0 + (this.show.header ? w2utils.getSize(a, "height") : 0) + "px",
                    left: "0px",
                    right: "0px"
                }), this.summary.length > 0 && (c.css({
                    bottom: 0 + (this.show.footer ? w2utils.getSize(e, "height") : 0) + "px"
                }), d.css({
                    bottom: 0 + (this.show.footer ? w2utils.getSize(e, "height") : 0) + "px",
                    right: "0px"
                })), this.show.footer && e.css({
                    bottom: "0px",
                    left: "0px",
                    right: "0px"
                }), f.css({
                    top: 0 + (this.show.header ? w2utils.getSize(a, "height") : 0) + (this.show.toolbar ? w2utils.getSize(b, "height") : 0) + "px",
                    bottom: 0 + (this.show.footer ? w2utils.getSize(e, "height") : 0) + (this.summary.length > 0 ? w2utils.getSize(d, "height") : 0) + "px",
                    left: "0px",
                    right: "0px"
                })
            },
            resizeRecords: function () {
                function a(a, b, c) {
                    var d = "",
                        e = "",
                        f = "";
                    d += '<tr class="' + (a % 2 ? "w2ui-even" : "w2ui-odd") + ' w2ui-empty-record" style="height: ' + b + 'px">', e += '<tr class="' + (a % 2 ? "w2ui-even" : "w2ui-odd") + ' w2ui-empty-record" style="height: ' + b + 'px">', c.show.lineNumbers && (d += '<td class="w2ui-col-number"></td>'), c.show.selectColumn && (d += '<td class="w2ui-grid-data w2ui-col-select"></td>'), c.show.expandColumn && (d += '<td class="w2ui-grid-data w2ui-col-expand"></td>'), e += '<td class="w2ui-grid-data-spacer" col="start" style="border-right: 0"></td>';
                    for (var g = 0; g < c.columns.length; g++) {
                        var h = c.columns[g];
                        (h.hidden || g < c.last.colStart || g > c.last.colEnd) && !h.frozen || (f = '<td class="w2ui-grid-data" ' + (null != h.attr ? h.attr : "") + ' col="' + g + '"></td>', h.frozen ? d += f : e += f)
                    }
                    d += '<td class="w2ui-grid-data-last"></td> </tr>', e += '<td class="w2ui-grid-data-last" col="end"></td> </tr>', $("#grid_" + c.name + "_frecords > table").append(d), $("#grid_" + c.name + "_records > table").append(e)
                }
                var b = this;
                $(this.box).find("empty-record").remove();
                var c = $(this.box),
                    d = $(this.box).find("> divgrid-box"),
                    e = $("#grid_" + this.name + "_header"),
                    f = $("#grid_" + this.name + "_toolbar"),
                    g = $("#grid_" + this.name + "_summary"),
                    h = $("#grid_" + this.name + "_fsummary"),
                    i = $("#grid_" + this.name + "_footer"),
                    j = $("#grid_" + this.name + "_body"),
                    k = $("#grid_" + this.name + "_columns"),
                    l = $("#grid_" + this.name + "_fcolumns"),
                    m = $("#grid_" + this.name + "_records"),
                    n = $("#grid_" + this.name + "_frecords"),
                    o = $("#grid_" + this.name + "_scroll1"),
                    p = 8 * String(this.total).length + 10;
                p < 34 && (p = 34), null != this.lineNumberWidth && (p = this.lineNumberWidth);
                for (var q = !1, r = !1, s = 0, t = 0; t < b.columns.length; t++)
                    if (!b.columns[t].frozen && !b.columns[t].hidden) {
                        var u = parseInt(b.columns[t].sizeCalculated ? b.columns[t].sizeCalculated : b.columns[t].size);
                        s += u
                    } if (m.width() < s && (q = !0), j.height() - k.height() < $(m).find(">table").height() + (q ? w2utils.scrollBarSize() : 0) && (r = !0), this.fixedBody) {
                        var v = d.height() - (this.show.header ? w2utils.getSize(e, "height") : 0) - (this.show.toolbar ? w2utils.getSize(f, "height") : 0) - ("none" != g.css("display") ? w2utils.getSize(g, "height") : 0) - (this.show.footer ? w2utils.getSize(i, "height") : 0);
                        j.css("height", v)
                    } else {
                    var v = w2utils.getSize(k, "height") + w2utils.getSize($("#grid_" + b.name + "_records table"), "height") + (q ? w2utils.scrollBarSize() : 0);
                    b.height = v + w2utils.getSize(d, "+height") + (b.show.header ? w2utils.getSize(e, "height") : 0) + (b.show.toolbar ? w2utils.getSize(f, "height") : 0) + ("none" != g.css("display") ? w2utils.getSize(g, "height") : 0) + (b.show.footer ? w2utils.getSize(i, "height") : 0), d.css("height", b.height), j.css("height", v), c.css("height", w2utils.getSize(d, "height") + w2utils.getSize(c, "+height"))
                }
                var w = this.records.length,
                    x = "object" != typeof this.url ? this.url : this.url.get;
                if (0 == this.searchData.length || x || (w = this.last.searchIds.length), this.fixedBody || (r = !1), q || r ? (k.find("> table > tbody > tr:nth-child(1) tdhead-last").css("width", w2utils.scrollBarSize()).show(), m.css({
                    top: (this.columnGroups.length > 0 && this.show.columns ? 1 : 0) + w2utils.getSize(k, "height") + "px",
                    "-webkit-overflow-scrolling": "touch",
                    "overflow-x": q ? "auto" : "hidden",
                    "overflow-y": r ? "auto" : "hidden"
                })) : (k.find("> table > tbody > tr:nth-child(1) tdhead-last").hide(), m.css({
                    top: (this.columnGroups.length > 0 && this.show.columns ? 1 : 0) + w2utils.getSize(k, "height") + "px",
                    overflow: "hidden"
                }), m.length > 0 && (this.last.scrollTop = 0, this.last.scrollLeft = 0)), q ? (n.css("margin-bottom", w2utils.scrollBarSize()), o.show()) : (n.css("margin-bottom", 0), o.hide()), n.css({
                    overflow: "hidden",
                    top: m.css("top")
                }), this.show.emptyRecords && !r) {
                    var y = Math.floor(m.height() / this.recordHeight) - 1,
                        z = 0;
                    if (m[0] && (z = m[0].scrollHeight - y * this.recordHeight), z >= this.recordHeight && (z -= this.recordHeight, y++), this.fixedBody) {
                        for (var A = w; A < y; A++) a(A, this.recordHeight, this);
                        a(y, z, this)
                    }
                }
                if (j.length > 0) {
                    for (var B = parseInt(j.width()) - (r ? w2utils.scrollBarSize() : 0) - (this.show.lineNumbers ? p : 0) - (this.show.selectColumn ? 26 : 0) - (this.show.expandColumn ? 26 : 0) - 1, C = B, D = 0, E = !1, t = 0; t < this.columns.length; t++) {
                        var F = this.columns[t];
                        F.gridMinWidth > 0 && (F.gridMinWidth > C && F.hidden !== !0 && (F.hidden = !0, E = !0), F.gridMinWidth < C && F.hidden === !0 && (F.hidden = !1, E = !0))
                    }
                    if (E === !0) return void this.refresh();
                    for (var t = 0; t < this.columns.length; t++) {
                        var F = this.columns[t];
                        F.hidden || ("px" == String(F.size).substr(String(F.size).length - 2).toLowerCase() ? (B -= parseFloat(F.size), this.columns[t].sizeCalculated = F.size, this.columns[t].sizeType = "px") : (D += parseFloat(F.size),
                            this.columns[t].sizeType = "%", delete F.sizeCorrected))
                    }
                    if (100 != D && D > 0)
                        for (var t = 0; t < this.columns.length; t++) {
                            var F = this.columns[t];
                            F.hidden || "%" == F.sizeType && (F.sizeCorrected = Math.round(100 * parseFloat(F.size) * 100 / D) / 100 + "%")
                        }
                    for (var t = 0; t < this.columns.length; t++) {
                        var F = this.columns[t];
                        F.hidden || "%" == F.sizeType && (null != this.columns[t].sizeCorrected ? this.columns[t].sizeCalculated = Math.floor(B * parseFloat(F.sizeCorrected) / 100) - 1 + "px" : this.columns[t].sizeCalculated = Math.floor(B * parseFloat(F.size) / 100) - 1 + "px")
                    }
                }
                for (var G = 0, t = 0; t < this.columns.length; t++) {
                    var F = this.columns[t];
                    F.hidden || (null == F.min && (F.min = 20), parseInt(F.sizeCalculated) < parseInt(F.min) && (F.sizeCalculated = F.min + "px"), parseInt(F.sizeCalculated) > parseInt(F.max) && (F.sizeCalculated = F.max + "px"), G += parseInt(F.sizeCalculated))
                }
                var H = parseInt(C) - parseInt(G);
                if (H > 0 && D > 0)
                    for (var t = 0; ;) {
                        var F = this.columns[t];
                        if (null != F)
                            if (F.hidden || "px" == F.sizeType) t++;
                            else {
                                if (F.sizeCalculated = parseInt(F.sizeCalculated) + 1 + "px", H-- , 0 === H) break;
                                t++
                            }
                        else t = 0
                    } else H > 0 && k.find("> table > tbody > tr:nth-child(1) tdhead-last").css("width", w2utils.scrollBarSize()).show();
                var I = 1;
                this.show.lineNumbers && (I += p), this.show.selectColumn && (I += 26), this.show.expandColumn && (I += 26);
                for (var t = 0; t < this.columns.length; t++) this.columns[t].hidden || this.columns[t].frozen && (I += parseInt(this.columns[t].sizeCalculated));
                l.css("width", I), n.css("width", I), h.css("width", I), o.css("width", I), k.css("left", I), m.css("left", I), g.css("left", I), k.find("> table > tbody > tr:nth-child(1) td").add(l.find("> table > tbody > tr:nth-child(1) td")).each(function (a, c) {
                    $(c).hasClass("w2ui-col-number") && $(c).css("width", p);
                    var d = $(c).attr("col");
                    if (null != d) {
                        if ("start" == d) {
                            for (var e = 0, f = 0; f < b.last.colStart; f++) !b.columns[f] || b.columns[f].frozen || b.columns[f].hidden || (e += parseInt(b.columns[f].sizeCalculated));
                            $(c).css("width", e + "px")
                        }
                        b.columns[d] && $(c).css("width", b.columns[d].sizeCalculated)
                    }
                    if ($(c).hasClass("w2ui-head-last"))
                        if (b.last.colEnd + 1 < b.columns.length) {
                            for (var e = 0, f = b.last.colEnd + 1; f < b.columns.length; f++) !b.columns[f] || b.columns[f].frozen || b.columns[f].hidden || (e += parseInt(b.columns[f].sizeCalculated));
                            $(c).css("width", e + "px")
                        } else $(c).css("width", w2utils.scrollBarSize() + (H > 0 && 0 === D ? H : 0) + "px")
                }), 3 == k.find("> table > tbody > tr").length && k.find("> table > tbody > tr:nth-child(1) td").add(l.find("> table > tbody > tr:nth-child(1) td")).html("").css({
                    height: "0px",
                    border: "0px",
                    padding: "0px",
                    margin: "0px"
                }), m.find("> table > tbody > tr:nth-child(1) td").add(n.find("> table > tbody > tr:nth-child(1) td")).each(function (a, c) {
                    $(c).hasClass("w2ui-col-number") && $(c).css("width", p);
                    var d = $(c).attr("col");
                    if (null != d) {
                        if ("start" == d) {
                            for (var e = 0, f = 0; f < b.last.colStart; f++) !b.columns[f] || b.columns[f].frozen || b.columns[f].hidden || (e += parseInt(b.columns[f].sizeCalculated));
                            $(c).css("width", e + "px")
                        }
                        b.columns[d] && $(c).css("width", b.columns[d].sizeCalculated)
                    }
                    if ($(c).hasClass("w2ui-grid-data-last") && 0 === $(c).parents("grid-frecords").length)
                        if (b.last.colEnd + 1 < b.columns.length) {
                            for (var e = 0, f = b.last.colEnd + 1; f < b.columns.length; f++) !b.columns[f] || b.columns[f].frozen || b.columns[f].hidden || (e += parseInt(b.columns[f].sizeCalculated));
                            $(c).css("width", e + "px")
                        } else $(c).css("width", (H > 0 && 0 === D ? H : 0) + "px")
                }), g.find("> table > tbody > tr:nth-child(1) td").add(h.find("> table > tbody > tr:nth-child(1) td")).each(function (a, c) {
                    $(c).hasClass("w2ui-col-number") && $(c).css("width", p);
                    var d = $(c).attr("col");
                    if (null != d) {
                        if ("start" == d) {
                            for (var e = 0, f = 0; f < b.last.colStart; f++) !b.columns[f] || b.columns[f].frozen || b.columns[f].hidden || (e += parseInt(b.columns[f].sizeCalculated));
                            $(c).css("width", e + "px")
                        }
                        b.columns[d] && $(c).css("width", b.columns[d].sizeCalculated)
                    }
                    $(c).hasClass("w2ui-grid-data-last") && 0 === $(c).parents("grid-frecords").length && $(c).css("width", w2utils.scrollBarSize() + (H > 0 && 0 === D ? H : 0) + "px")
                }), this.initResize(), this.refreshRanges(), (this.last.scrollTop || this.last.scrollLeft) && m.length > 0 && (k.prop("scrollLeft", this.last.scrollLeft), m.prop("scrollTop", this.last.scrollTop), m.prop("scrollLeft", this.last.scrollLeft))
            },
            getSearchesHTML: function () {
                function a(a, c) {
                    var d = "",
                        e = b.operators[b.operatorsMap[a]];
                    null != c && (e = c);
                    for (var f = 0; f < e.length; f++) {
                        var g = e[f],
                            h = g;
                        Array.isArray(g) ? (h = g[1], g = g[0], null == h && (h = g)) : $.isPlainObject(g) && (h = g.text, g = g.oper), d += '<option value="' + g + '">' + w2utils.lang(h) + "</option>\n"
                    }
                    return d
                }
                for (var b = this, c = '<table cellspacing="0"><tbody>', d = !1, e = 0; e < this.searches.length; e++) {
                    var f = this.searches[e];
                    if (f.type = String(f.type).toLowerCase(), !f.hidden) {
                        var g = "";
                        0 == d && (g = '<button type="button" class="w2ui-btn close-btn" onclick="obj = w2ui[\'' + this.name + "']; if (obj) obj.searchClose()\">X</button>", d = !0), null == f.inTag && (f.inTag = ""), null == f.outTag && (f.outTag = ""), null == f.style && (f.style = ""), null == f.type && (f.type = "text");
                        var h = '<select id="grid_' + this.name + "_operator_" + e + '" class="form-control"    onchange="w2ui[\'' + this.name + "'].initOperator(this, " + e + ')">' + a(f.type, f.operators) + "</select>";
                        switch (c += '<tr>    <td class="close-btn">' + g + '</td>    <td class="caption">' + (f.caption || "") + '</td>    <td class="operator">' + h + '</td>    <td class="value">', f.type) {
                            case "text":
                            case "alphanumeric":
                            case "hex":
                            case "color":
                            case "list":
                            case "combo":
                            case "enum":
                                var i = "width: 250px;";
                                ["hex", "color"].indexOf(f.type) != -1 && (i = "width: 90px;"), c += '<input rel="search" type="text" id="grid_' + this.name + "_field_" + e + '" name="' + f.field + '"    class="form-control" style="' + i + f.style + '" ' + f.inTag + "/>";
                                break;
                            case "int":
                            case "float":
                            case "money":
                            case "currency":
                            case "percent":
                            case "date":
                            case "time":
                            case "datetime":
                                var i = "width: 90px";
                                "datetime" == f.type && (i = "width: 140px;"), c += '<input rel="search" type="text" class="form-control" style="' + i + f.style + '" id="grid_' + this.name + "_field_" + e + '" name="' + f.field + '" ' + f.inTag + '/><span id="grid_' + this.name + "_range_" + e + '" style="display: none">&#160;-&#160;&#160;<input rel="search" type="text" class="form-control" style="' + i + f.style + '" id="grid_' + this.name + "_field2_" + e + '" name="' + f.field + '" ' + f.inTag + "/></span>";
                                break;
                            case "select":
                                c += '<select rel="search" class="form-control" style="' + f.style + '" id="grid_' + this.name + "_field_" + e + '"  name="' + f.field + '" ' + f.inTag + "></select>"
                        }
                        c += f.outTag + "    </td></tr>"
                    }
                }
                return c += '<tr>    <td colspan="4" class="actions">        <div>        <button type="button" class="w2ui-btn" onclick="obj = w2ui[\'' + this.name + "']; if (obj) { obj.searchReset(); }\">" + w2utils.lang("Reset") + '</button>        <button type="button" class="w2ui-btn w2ui-btn-blue" onclick="obj = w2ui[\'' + this.name + "']; if (obj) { obj.search(); }\">" + w2utils.lang("Search") + "</button>        </div>    </td></tr></tbody></table>"
            },
            initOperator: function (a, b) {
                var c = this,
                    d = c.searches[b],
                    e = $("#grid_" + c.name + "_range_" + b),
                    f = $("#grid_" + c.name + "_field_" + b),
                    g = f.parent().find("span input");
                switch (f.show(), e.hide(), $(a).val()) {
                    case "between":
                        e.show(), g.w2field(d.type, d.options);
                        break;
                    case "not null":
                    case "null":
                        f.hide(), f.val("1"), f.change()
                }
            },
            initSearches: function () {
                for (var a = this, b = 0; b < this.searches.length; b++) {
                    var c = this.searches[b],
                        d = this.getSearchData(c.field);
                    c.type = String(c.type).toLowerCase();
                    var e = a.operators[a.operatorsMap[c.type]];
                    c.operators && (e = c.operators);
                    var f = e[0];
                    $.isPlainObject(f) && (f = f.oper), "object" != typeof c.options && (c.options = {}), "text" == c.type && (f = this.textSearch);
                    for (var g = 0; g < e.length; g++) {
                        var h = e[g];
                        if ($.isPlainObject(h) && (h = h.oper), c.operator == h) {
                            f = c.operator;
                            break
                        }
                    }
                    switch (c.type) {
                        case "text":
                        case "alphanumeric":
                            $("#grid_" + this.name + "_field_" + b).w2field(c.type, c.options);
                            break;
                        case "int":
                        case "float":
                        case "hex":
                        case "color":
                        case "money":
                        case "currency":
                        case "percent":
                        case "date":
                        case "time":
                        case "datetime":
                            $("#grid_" + this.name + "_field_" + b).w2field(c.type, c.options), $("#grid_" + this.name + "_field2_" + b).w2field(c.type, c.options), setTimeout(function () {
                                $("#grid_" + a.name + "_field_" + b).keydown(), $("#grid_" + a.name + "_field2_" + b).keydown()
                            }, 1);
                            break;
                        case "list":
                        case "combo":
                        case "enum":
                            var i = c.options;
                            "list" == c.type && (i.selected = {}), "enum" == c.type && (i.selected = []), d && (i.selected = d.value), $("#grid_" + this.name + "_field_" + b).w2field(c.type, $.extend({
                                openOnFocus: !0
                            }, i)), d && null != d.text && $("#grid_" + this.name + "_field_" + b).data("selected", {
                                id: d.value,
                                text: d.text
                            });
                            break;
                        case "select":
                            for (var i = '<option value="">--</option>', g = 0; g < c.options.items.length; g++) {
                                var j = c.options.items[g];
                                if ($.isPlainObject(c.options.items[g])) {
                                    var k = j.id,
                                        l = j.text;
                                    null == k && null != j.value && (k = j.value), null == l && null != j.caption && (l = j.caption), null == k && (k = ""), i += '<option value="' + k + '">' + l + "</option>"
                                } else i += '<option value="' + j + '">' + j + "</option>"
                            }
                            $("#grid_" + this.name + "_field_" + b).html(i)
                    }
                    null != d ? ("int" == d.type && ["in", "not in"].indexOf(d.operator) != -1 && $("#grid_" + this.name + "_field_" + b).w2field("clear").val(d.value), $("#grid_" + this.name + "_operator_" + b).val(d.operator).trigger("change"), $.isArray(d.value) ? ["in", "not in"].indexOf(d.operator) != -1 ? $("#grid_" + this.name + "_field_" + b).val(d.value).trigger("change") : ($("#grid_" + this.name + "_field_" + b).val(d.value[0]).trigger("change"), $("#grid_" + this.name + "_field2_" + b).val(d.value[1]).trigger("change")) : null != d.value && $("#grid_" + this.name + "_field_" + b).val(d.value).trigger("change")) : $("#grid_" + this.name + "_operator_" + b).val(f).trigger("change")
                }
                $("#w2ui-overlay-" + this.name + "-searchOverlay grid-searches *[rel=search]").on("keypress", function (b) {
                    13 == b.keyCode && (a.search(), $().w2overlay({
                        name: a.name + "-searchOverlay"
                    }))
                })
            },
            getColumnsHTML: function () {
                function a() {
                    var a = "<tr>",
                        b = "<tr>",
                        d = "";
                    "" != c.columnGroups[c.columnGroups.length - 1].caption && c.columnGroups.push({
                        caption: ""
                    }), c.show.lineNumbers && (a += '<td class="w2ui-head w2ui-col-number">    <div style="height: ' + (c.recordHeight + 1) + 'px">&#160;</div></td>'), c.show.selectColumn && (a += '<td class="w2ui-head w2ui-col-select">    <div style="height: 25px">&#160;</div></td>'), c.show.expandColumn && (a += '<td class="w2ui-head w2ui-col-expand">    <div style="height: 25px">&#160;</div></td>');
                    var e = 0;
                    b += '<td id="grid_' + c.name + '_column_start" class="w2ui-head" col="start" style="border-right: 0"></td>';
                    for (var f = 0; f < c.columnGroups.length; f++) {
                        var g = c.columnGroups[f],
                            h = c.columns[e];
                        null != g.colspan && (g.span = g.colspan), null != g.span && g.span == parseInt(g.span) || (g.span = 1);
                        for (var i = 0, j = e; j < e + g.span; j++) c.columns[j] && !c.columns[j].hidden && i++;
                        if (f == c.columnGroups.length - 1 && i++ , i <= 0);
                        else if (g.master === !0) {
                            for (var k = "", l = 0; l < c.sortData.length; l++) c.sortData[l].field == h.field && ("asc" === (c.sortData[l].direction || "").toLowerCase() && (k = "w2ui-sort-up"), "desc" === (c.sortData[l].direction || "").toLowerCase() && (k = "w2ui-sort-down"));
                            var m = "";
                            h.resizable !== !1 && (m = '<div class="w2ui-resizer" name="' + e + '"></div>'), d = '<td id="grid_' + c.name + "_column_" + e + '" class="w2ui-head ' + k + '" col="' + e + '"     rowspan="2" colspan="' + i + '"     oncontextmenu = "w2ui[\'' + c.name + "'].contextMenu(null, " + e + ', event);"    onclick="w2ui[\'' + c.name + "'].columnClick('" + h.field + "', event);\"    ondblclick=\"w2ui['" + c.name + "'].columnDblClick('" + h.field + "', event);\">" + m + '    <div class="w2ui-col-group w2ui-col-header ' + (k ? "w2ui-col-sorted" : "") + '">        <div class="' + k + '"></div>' + (h.caption ? h.caption : "&#160;") + "    </div></td>", h && h.frozen ? a += d : b += d
                        } else d = '<td id="grid_' + c.name + "_column_" + e + '" class="w2ui-head" col="' + e + '"         colspan="' + i + '">    <div class="w2ui-col-group">' + (g.caption ? g.caption : "&#160;") + "    </div></td>", h && h.frozen ? a += d : b += d;
                        e += g.span
                    }
                    return a += "<td></td></tr>", b += '<td id="grid_' + c.name + '_column_end" class="w2ui-head" col="end"></td></tr>', [a, b]
                }

                function b(a) {
                    var b = "<tr>",
                        d = "<tr>";
                    c.show.lineNumbers && (b += '<td class="w2ui-head w2ui-col-number"        onclick="w2ui[\'' + c.name + "'].columnClick('line-number', event);\"       ondblclick=\"w2ui['" + c.name + "'].columnDblClick('line-number', event);\">    <div>#</div></td>"), c.show.selectColumn && (b += '<td class="w2ui-head w2ui-col-select"       onclick="if (event.stopPropagation) event.stopPropagation(); else event.cancelBubble = true;">    <div>        <input type="checkbox" id="grid_' + c.name + '_check_all" tabindex="-1"            style="' + (0 == c.multiSelect ? "display: none;" : "") + '"            onmousedown="if (event.stopPropagation) event.stopPropagation(); else event.cancelBubble = true;"            onclick="var grid = w2ui[\'' + c.name + "'];               if (this.checked) grid.selectAll(); else grid.selectNone();               if (event.stopPropagation) event.stopPropagation(); else event.cancelBubble = true;               clearTimeout(grid.last.kbd_timer); /* keep focus */            \"/>    </div></td>"), c.show.expandColumn && (b += '<td class="w2ui-head w2ui-col-expand">    <div>&#160;</div></td>');
                    var e, f = 0,
                        g = 0;
                    d += '<td id="grid_' + c.name + '_column_start" class="w2ui-head" col="start" style="border-right: 0"></td>';
                    for (var h = 0; h < c.columns.length; h++) {
                        var i = c.columns[h];
                        if (null == i.size && (i.size = "100%"), h == g && (e = c.columnGroups[f++] || {}, g += e.span), (!(h < c.last.colStart || h > c.last.colEnd) || i.frozen) && !i.hidden && (e.master !== !0 || a)) {
                            var j = c.getColumnCellHTML(h);
                            i && i.frozen ? b += j : d += j
                        }
                    }
                    return b += '<td class="w2ui-head w2ui-head-last"><div>&#160;</div></td>', d += '<td class="w2ui-head w2ui-head-last" col="end"><div>&#160;</div></td>', b += "</tr>", d += "</tr>", [b, d]
                }
                var c = this,
                    d = "",
                    e = "";
                if (this.show.columnHeaders)
                    if (this.columnGroups.length > 0) {
                        var f = b(!0),
                            g = a(),
                            h = b(!1);
                        d = f[0] + g[0] + h[0], e = f[1] + g[1] + h[1]
                    } else {
                        var i = b(!0);
                        d = i[0], e = i[1]
                    } return [d, e]
            },
            getColumnCellHTML: function (a) {
                var b = this.columns[a];
                if (null == b) return "";
                for (var c = !this.reorderColumns || this.columnGroups && this.columnGroups.length ? "" : " w2ui-reorder-cols-head ", d = "", e = 0; e < this.sortData.length; e++) this.sortData[e].field == b.field && ("asc" === (this.sortData[e].direction || "").toLowerCase() && (d = "w2ui-sort-up"), "desc" === (this.sortData[e].direction || "").toLowerCase() && (d = "w2ui-sort-down"));
                var f = this.last.selection.columns,
                    g = !1;
                for (var h in f)
                    for (var e = 0; e < f[h].length; e++) f[h][e] == a && (g = !0);
                var i = '<td id="grid_' + this.name + "_column_" + a + '" col="' + a + '" class="w2ui-head ' + d + c + '" ' + ("normal" == this.columnTooltip && b.tooltip ? 'title="' + b.tooltip + '" ' : "") + "    onmouseover = \"w2ui['" + this.name + "'].columnTooltipShow('" + a + "', event);\"    onmouseout  = \"w2ui['" + this.name + "'].columnTooltipHide('" + a + "', event);\"    oncontextmenu = \"w2ui['" + this.name + "'].contextMenu(null, " + a + ', event);"    onclick="w2ui[\'' + this.name + "'].columnClick('" + b.field + "', event);\"    ondblclick=\"w2ui['" + this.name + "'].columnDblClick('" + b.field + "', event);\">" + (b.resizable !== !1 ? '<div class="w2ui-resizer" name="' + a + '"></div>' : "") + '    <div class="w2ui-col-header ' + (d ? "w2ui-col-sorted" : "") + " " + (g ? "w2ui-col-selected" : "") + '">        <div class="' + d + '"></div>' + (b.caption ? b.caption : "&#160;") + "    </div></td>";
                return i
            },
            columnTooltipShow: function (a) {
                if ("normal" != this.columnTooltip) {
                    var b = $(this.box).find("#grid_" + this.name + "_column_" + a),
                        c = this.columns[a],
                        d = this.columnTooltip;
                    b.prop("_mouse_over", !0), setTimeout(function () {
                        b.prop("_mouse_over") === !0 && b.prop("_mouse_tooltip") !== !0 && (b.prop("_mouse_tooltip", !0), b.w2tag(c.tooltip, {
                            position: d
                        }))
                    }, 1)
                }
            },
            columnTooltipHide: function (a) {
                if ("normal" != this.columnTooltip) {
                    var b = $(this.box).find("#grid_" + this.name + "_column_" + a);
                    this.columns[a];
                    b.removeProp("_mouse_over"), setTimeout(function () {
                        b.prop("_mouse_over") !== !0 && b.prop("_mouse_tooltip") === !0 && (b.removeProp("_mouse_tooltip"), b.w2tag())
                    }, 1)
                }
            },
            getRecordsHTML: function () {
                var a = this.records.length,
                    b = "object" != typeof this.url ? this.url : this.url.get;
                0 == this.searchData.length || b || (a = this.last.searchIds.length), a > this.vs_start ? this.last.show_extra = this.vs_extra : this.last.show_extra = this.vs_start;
                var c = $("#grid_" + this.name + "_records"),
                    d = Math.floor((c.height() || 0) / this.recordHeight) + this.last.show_extra + 1;
                (!this.fixedBody || d > a) && (d = a);
                var e = this.getRecordHTML(-1, 0),
                    f = "<table><tbody>" + e[0],
                    g = "<table><tbody>" + e[1];
                f += '<tr id="grid_' + this.name + '_frec_top" line="top" style="height: 0px">    <td colspan="2000"></td></tr>', g += '<tr id="grid_' + this.name + '_rec_top" line="top" style="height: 0px">    <td colspan="2000"></td></tr>';
                for (var h = 0; h < d; h++) e = this.getRecordHTML(h, h + 1), f += e[0], g += e[1];
                return f += '<tr id="grid_' + this.name + '_frec_bottom" line="bottom" style="height: ' + (a - d) * this.recordHeight + 'px">    <td colspan="2000" style="border: 0"></td></tr><tr id="grid_' + this.name + '_frec_more" style="display: none; visibility: hidden">    <td colspan="2000" class="w2ui-load-more"></td></tr></tbody></table>', g += '<tr id="grid_' + this.name + '_rec_bottom" line="bottom" style="height: ' + (a - d) * this.recordHeight + 'px">    <td colspan="2000" style="border: 0"></td></tr><tr id="grid_' + this.name + '_rec_more" style="display: none">    <td colspan="2000" class="w2ui-load-more"></td></tr></tbody></table>', this.last.range_start = 0, this.last.range_end = d, [f, g]
            },
            getSummaryHTML: function () {
                if (0 !== this.summary.length) {
                    for (var a = this.getRecordHTML(-1, 0), b = "<table><tbody>" + a[0], c = "<table><tbody>" + a[1], d = 0; d < this.summary.length; d++) a = this.getRecordHTML(d, d + 1, !0), b += a[0], c += a[1];
                    return b += "</tbody></table>", c += "</tbody></table>", [b, c]
                }
            },
            scroll: function (a) {
                function b() {
                    c.markSearch && (clearTimeout(c.last.marker_timer), c.last.marker_timer = setTimeout(function () {
                        for (var a = [], b = 0; b < c.searchData.length; b++) {
                            var d = c.searchData[b],
                                e = c.getSearch(d.field);
                            if (e && !e.hidden) {
                                var f = c.getColumn(d.field, !0);
                                a.push({
                                    field: d.field,
                                    search: d.value,
                                    col: f
                                })
                            }
                        }
                        a.length > 0 && a.forEach(function (a) {
                            $(c.box).find('td[col="' + a.col + '"]').not("head").w2marker(a.search)
                        })
                    }, 50))
                }
                var c = ((new Date).getTime(), this),
                    d = "object" != typeof this.url ? this.url : this.url.get,
                    e = $("#grid_" + this.name + "_records"),
                    f = $("#grid_" + this.name + "_frecords");
                if (a) {
                    var g = a.target.scrollTop,
                        h = a.target.scrollLeft;
                    c.last.scrollTop = g, c.last.scrollLeft = h, $("#grid_" + c.name + "_columns")[0].scrollLeft = h, $("#grid_" + c.name + "_summary")[0].scrollLeft = h, f[0].scrollTop = g
                }
                this.last.bubbleEl && ($(this.last.bubbleEl).w2tag(), this.last.bubbleEl = null);
                var i = null,
                    j = null;
                if (c.disableCVS || c.columnGroups.length > 0) i = 0, j = c.columns.length - 1;
                else {
                    for (var k = e.width(), l = 0, m = 0; m < c.columns.length; m++)
                        if (!c.columns[m].frozen && !c.columns[m].hidden) {
                            var n = parseInt(c.columns[m].sizeCalculated ? c.columns[m].sizeCalculated : c.columns[m].size);
                            l + n + 30 > c.last.scrollLeft && null == i && (i = m), l + n - 30 > c.last.scrollLeft + k && null == j && (j = m), l += n
                        } null == j && (j = c.columns.length - 1)
                }
                if (null != i && (i < 0 && (i = 0), j < 0 && (j = 0), i == j && (i > 0 ? i-- : j++), i != c.last.colStart || j != c.last.colEnd)) {
                    var o = $(c.box),
                        p = Math.abs(i - c.last.colStart),
                        q = Math.abs(j - c.last.colEnd);
                    if (p < 5 && q < 5) {
                        var r = o.find("grid-columns #grid_" + c.name + "_column_start"),
                            s = o.find("grid-columns head-last"),
                            t = o.find("#grid_" + c.name + "_records grid-data-spacer"),
                            u = o.find("#grid_" + c.name + "_records grid-data-last"),
                            v = o.find("#grid_" + c.name + "_summary grid-data-spacer"),
                            w = o.find("#grid_" + c.name + "_summary grid-data-last");
                        if (i > c.last.colStart)
                            for (var m = c.last.colStart; m < i; m++) o.find("#grid_" + c.name + "_columns #grid_" + c.name + "_column_" + m).remove(), o.find("#grid_" + c.name + '_records td[col="' + m + '"]').remove(), o.find("#grid_" + c.name + '_summary td[col="' + m + '"]').remove();
                        if (j < c.last.colEnd)
                            for (var m = c.last.colEnd; m > j; m--) o.find("#grid_" + c.name + "_columns #grid_" + c.name + "_column_" + m).remove(), o.find("#grid_" + c.name + '_records td[col="' + m + '"]').remove(), o.find("#grid_" + c.name + '_summary td[col="' + m + '"]').remove();
                        if (i < c.last.colStart)
                            for (var m = c.last.colStart - 1; m >= i; m--) c.columns[m] && (c.columns[m].frozen || c.columns[m].hidden) || (r.after(c.getColumnCellHTML(m)), t.each(function (a, b) {
                                var d = $(b).parent().attr("index"),
                                    e = '<td class="w2ui-grid-data" col="' + m + '" style="height: 0px"></td>';
                                null != d && (e = c.getCellHTML(parseInt(d), m, !1)), $(b).after(e)
                            }), v.each(function (a, b) {
                                var d = $(b).parent().attr("index"),
                                    e = '<td class="w2ui-grid-data" col="' + m + '" style="height: 0px"></td>';
                                null != d && (e = c.getCellHTML(parseInt(d), m, !0)), $(b).after(e)
                            }));
                        if (j > c.last.colEnd)
                            for (var m = c.last.colEnd + 1; m <= j; m++) c.columns[m] && (c.columns[m].frozen || c.columns[m].hidden) || (s.before(c.getColumnCellHTML(m)), u.each(function (a, b) {
                                var d = $(b).parent().attr("index"),
                                    e = '<td class="w2ui-grid-data" col="' + m + '" style="height: 0px"></td>';
                                null != d && (e = c.getCellHTML(parseInt(d), m, !1)), $(b).before(e)
                            }), w.each(function (a, b) {
                                var d = $(b).parent().attr("index") || -1,
                                    e = c.getCellHTML(parseInt(d), m, !0);
                                $(b).before(e)
                            }));
                        c.last.colStart = i, c.last.colEnd = j, c.resizeRecords()
                    } else {
                        c.last.colStart = i, c.last.colEnd = j;
                        var x = this.getColumnsHTML(),
                            y = this.getRecordsHTML(),
                            z = this.getSummaryHTML(),
                            A = o.find("#grid_" + this.name + "_columns"),
                            B = o.find("#grid_" + this.name + "_records"),
                            C = o.find("#grid_" + this.name + "_frecords"),
                            D = o.find("#grid_" + this.name + "_summary");
                        A.find("tbody").html(x[1]), C.html(y[0]), B.prepend(y[1]), null != z && D.html(z[1]), setTimeout(function () {
                            B.find("> table").not("table:first-child").remove(), D[0] && (D[0].scrollLeft = c.last.scrollLeft)
                        }, 1), c.resizeRecords()
                    }
                }
                var E = this.records.length;
                if (0 == this.searchData.length || d || (E = this.last.searchIds.length), 0 !== E && 0 !== e.length && 0 !== e.height() && (E > this.vs_start ? this.last.show_extra = this.vs_extra : this.last.show_extra = this.vs_start, !(e.height() < E * this.recordHeight && "hidden" == e.css("overflow-y")))) {
                    var F = Math.round(e[0].scrollTop / this.recordHeight + 1),
                        G = F + (Math.round(e.height() / this.recordHeight) - 1);
                    if (F > E && (F = E), G >= E - 1 && (G = E), $("#grid_" + this.name + "_footer footer-right").html((c.show.statusRange ? w2utils.formatNumber(this.offset + F) + "-" + w2utils.formatNumber(this.offset + G) + (this.total != -1 ? " " + w2utils.lang("of") + " " + w2utils.formatNumber(this.total) : "") : "") + (d && c.show.statusBuffered ? " (" + w2utils.lang("buffered") + " " + w2utils.formatNumber(E) + (this.offset > 0 ? ", skip " + w2utils.formatNumber(this.offset) : "") + ")" : "")), d || this.fixedBody && !(this.total != -1 && this.total <= this.vs_start)) {
                        var H = Math.floor(e[0].scrollTop / this.recordHeight) - this.last.show_extra,
                            I = H + Math.floor(e.height() / this.recordHeight) + 2 * this.last.show_extra + 1;
                        H < 1 && (H = 1), I > this.total && this.total != -1 && (I = this.total);
                        var J = e.find("#grid_" + this.name + "_rec_top"),
                            K = e.find("#grid_" + this.name + "_rec_bottom"),
                            L = f.find("#grid_" + this.name + "_frec_top"),
                            M = f.find("#grid_" + this.name + "_frec_bottom");
                        String(J.next().prop("id")).indexOf("_expanded_row") != -1 && (J.next().remove(), L.next().remove()), this.total > I && String(K.prev().prop("id")).indexOf("_expanded_row") != -1 && (K.prev().remove(), M.prev().remove());
                        var N = parseInt(J.next().attr("line")),
                            O = parseInt(K.prev().attr("line"));
                        if (N < H || 1 == N || this.last.pull_refresh) {
                            if (I <= O + this.last.show_extra - 2 && I != this.total) return;
                            for (this.last.pull_refresh = !1; ;) {
                                var P = f.find("#grid_" + this.name + "_frec_top").next(),
                                    Q = e.find("#grid_" + this.name + "_rec_top").next();
                                if ("bottom" == Q.attr("line")) break;
                                if (!(parseInt(Q.attr("line")) < H)) break;
                                P.remove(), Q.remove()
                            }
                            var R = e.find("#grid_" + this.name + "_rec_bottom").prev(),
                                S = R.attr("line");
                            "top" == S && (S = H);
                            for (var m = parseInt(S) + 1; m <= I; m++)
                                if (this.records[m - 1]) {
                                    var Q = this.records[m - 1].w2ui;
                                    Q && !Array.isArray(Q.children) && (Q.expanded = !1);
                                    var T = this.getRecordHTML(m - 1, m);
                                    K.before(T[1]), M.before(T[0])
                                } b(), setTimeout(function () {
                                    c.refreshRanges()
                                }, 0)
                        } else {
                            if (H >= N - this.last.show_extra + 2 && H > 1) return;
                            for (; ;) {
                                var P = f.find("#grid_" + this.name + "_frec_bottom").prev(),
                                    Q = e.find("#grid_" + this.name + "_rec_bottom").prev();
                                if ("top" == Q.attr("line")) break;
                                if (!(parseInt(Q.attr("line")) > I)) break;
                                P.remove(), Q.remove()
                            }
                            var R = e.find("#grid_" + this.name + "_rec_top").next(),
                                S = R.attr("line");
                            "bottom" == S && (S = I);
                            for (var m = parseInt(S) - 1; m >= H; m--)
                                if (this.records[m - 1]) {
                                    var Q = this.records[m - 1].w2ui;
                                    Q && !Array.isArray(Q.children) && (Q.expanded = !1);
                                    var T = this.getRecordHTML(m - 1, m);
                                    J.after(T[1]), L.after(T[0])
                                } b(), setTimeout(function () {
                                    c.refreshRanges()
                                }, 0)
                        }
                        var U = (H - 1) * c.recordHeight,
                            V = (E - I) * c.recordHeight;
                        V < 0 && (V = 0), J.css("height", U + "px"), L.css("height", U + "px"), K.css("height", V + "px"), M.css("height", V + "px"), c.last.range_start = H, c.last.range_end = I;
                        var W = Math.floor(e[0].scrollTop / this.recordHeight),
                            X = W + Math.floor(e.height() / this.recordHeight);
                        if (X + 10 > E && this.last.pull_more !== !0 && (E < this.total - this.offset || this.total == -1 && this.last.xhr_hasMore))
                            if (this.autoLoad === !0) this.last.pull_more = !0, this.last.xhr_offset += this.limit, this.request("get");
                            else {
                                var Y = $("#grid_" + this.name + "_rec_more, #grid_" + this.name + "_frec_more");
                                "none" == Y.css("display") && Y.show().on("click", function () {
                                    c.last.pull_more = !0, c.last.xhr_offset += c.limit, c.request("get"), $(this).find("td").html('<div><div style="width: 20px; height: 20px;" class="w2ui-spinner"></div></div>')
                                }), (Y.find("td spinner").length > 0 || Y.find("td").text().indexOf("Load") == -1) && Y.find("td").html("<div>" + w2utils.lang("Load") + " " + c.limit + " " + w2utils.lang("More") + "...</div>")
                            } E >= this.total - this.offset && this.total != -1 && $("#grid_" + this.name + "_rec_more, #grid_" + this.name + "_frec_more").hide()
                    }
                }
            },
            getRecordHTML: function (a, b, c) {
                var d, e = "",
                    f = "",
                    g = "",
                    h = this.last.selection;
                if (a == -1) {
                    f += '<tr line="0">', g += '<tr line="0">', this.show.lineNumbers && (f += '<td class="w2ui-col-number" style="height: 0px;"></td>'), this.show.selectColumn && (f += '<td class="w2ui-col-select" style="height: 0px;"></td>'), this.show.expandColumn && (f += '<td class="w2ui-col-expand" style="height: 0px;"></td>'), g += '<td class="w2ui-grid-data w2ui-grid-data-spacer" col="start" style="height: 0px; width: 0px;"></td>';
                    for (var i = 0; i < this.columns.length; i++) {
                        var j = this.columns[i];
                        if (e = '<td class="w2ui-grid-data" col="' + i + '" style="height: 0px;"></td>', j.frozen && !j.hidden) f += e;
                        else {
                            if (j.hidden || i < this.last.colStart || i > this.last.colEnd) continue;
                            g += e
                        }
                    }
                    return f += '<td class="w2ui-grid-data-last" style="height: 0px"></td>', g += '<td class="w2ui-grid-data-last" col="end" style="height: 0px"></td>', f += "</tr>", g += "</tr>", [f, g]
                }
                var k = "object" != typeof this.url ? this.url : this.url.get;
                if (c !== !0)
                    if (this.searchData.length > 0 && !k) {
                        if (a >= this.last.searchIds.length) return "";
                        a = this.last.searchIds[a], d = this.records[a]
                    } else {
                        if (a >= this.records.length) return "";
                        d = this.records[a]
                    }
                else {
                    if (a >= this.summary.length) return "";
                    d = this.summary[a]
                }
                if (!d) return "";
                null == d.recid && null != this.recid && null != d[this.recid] && (d.recid = d[this.recid]);
                var l = (w2utils.escapeId(d.recid), !1);
                h.indexes.indexOf(a) != -1 && (l = !0);
                var m = d.w2ui ? d.w2ui.style : "";
                null != m && "string" == typeof m || (m = "");
                var n = d.w2ui ? d.w2ui.class : "";
                if (null != n && "string" == typeof n || (n = ""), f += '<tr id="grid_' + this.name + "_frec_" + d.recid + '" recid="' + d.recid + '" line="' + b + '" index="' + a + '"  class="' + (b % 2 === 0 ? "w2ui-even" : "w2ui-odd") + " " + n + (l && "row" == this.selectType ? " w2ui-selected" : "") + (d.w2ui && d.w2ui.editable === !1 ? " w2ui-no-edit" : "") + (d.w2ui && d.w2ui.expanded === !0 ? " w2ui-expanded" : "") + '" ' + (c !== !0 ? w2utils.isIOS ? "    onclick  = \"w2ui['" + this.name + "'].dblClick(jQuery(this).attr('recid'), event);\"" : "    onclick  = \"w2ui['" + this.name + "'].click(jQuery(this).attr('recid'), event);\"    oncontextmenu = \"w2ui['" + this.name + "'].contextMenu(jQuery(this).attr('recid'), null, event);\"" : "") + ("row" == this.selectType ? " onmouseover=\"jQuery('#grid_" + this.name + "_rec_'+ w2utils.escapeId(jQuery(this).attr('recid'))).addClass('w2ui-record-hover')\" onmouseout =\"jQuery('#grid_" + this.name + "_rec_'+ w2utils.escapeId(jQuery(this).attr('recid'))).removeClass('w2ui-record-hover')\"" : "") + ' style="height: ' + this.recordHeight + "px; " + (l || "" == m ? m.replace("background-color", "none") : m) + '" ' + ("" != m ? 'custom_style="' + m + '"' : "") + ">", g += '<tr id="grid_' + this.name + "_rec_" + d.recid + '" recid="' + d.recid + '" line="' + b + '" index="' + a + '"  class="' + (b % 2 === 0 ? "w2ui-even" : "w2ui-odd") + " " + n + (l && "row" == this.selectType ? " w2ui-selected" : "") + (d.w2ui && d.w2ui.editable === !1 ? " w2ui-no-edit" : "") + (d.w2ui && d.w2ui.expanded === !0 ? " w2ui-expanded" : "") + '" ' + (c !== !0 ? w2utils.isIOS ? "    onclick  = \"var obj = w2ui['" + this.name + "']; obj.dblClick(jQuery(this).attr('recid'), event);\"" : "    onclick  = \"var obj = w2ui['" + this.name + "']; obj.click(jQuery(this).attr('recid'), event);\"    oncontextmenu = \"var obj = w2ui['" + this.name + "']; obj.contextMenu(jQuery(this).attr('recid'), null, event);\"" : "") + ("row" == this.selectType ? " onmouseover=\"jQuery('#grid_" + this.name + "_frec_' + w2utils.escapeId(jQuery(this).attr('recid'))).addClass('w2ui-record-hover')\" onmouseout =\"jQuery('#grid_" + this.name + "_frec_' + w2utils.escapeId(jQuery(this).attr('recid'))).removeClass('w2ui-record-hover')\"" : "") + ' style="height: ' + this.recordHeight + "px; " + (l || "" == m ? m.replace("background-color", "none") : m) + '" ' + ("" != m ? 'custom_style="' + m + '"' : "") + ">", this.show.lineNumbers && (f += '<td id="grid_' + this.name + "_cell_" + a + "_number" + (c ? "_s" : "") + '"    class="w2ui-col-number ' + (l ? " w2ui-row-selected" : "") + '"' + (this.reorderRows ? ' style="cursor: move"' : "") + ">" + (c !== !0 ? this.getLineHTML(b, d) : "") + "</td>"), this.show.selectColumn) {
                    var o = !1;
                    d && d.w2ui && d.w2ui.hideCheckBox === !0 && (o = !0), f += '<td id="grid_' + this.name + "_cell_" + a + "_select" + (c ? "_s" : "") + '" class="w2ui-grid-data w2ui-col-select">' + (c === !0 || d.w2ui && d.w2ui.hideCheckBox === !0 ? "" : '    <div>        <input class="w2ui-grid-select-check" type="checkbox" tabindex="-1" ' + (l ? 'checked="checked"' : "") + ' style="pointer-events: none"/>    </div>') + "</td>"
                }
                if (this.show.expandColumn) {
                    var p = "";
                    p = d.w2ui && d.w2ui.expanded === !0 ? "-" : "+", d.w2ui && "none" == d.w2ui.expanded && (p = ""), d.w2ui && "spinner" == d.w2ui.expanded && (p = '<div class="w2ui-spinner" style="width: 16px; margin: -2px 2px;"></div>'), f += '<td id="grid_' + this.name + "_cell_" + a + "_expand" + (c ? "_s" : "") + '" class="w2ui-grid-data w2ui-col-expand">' + (c !== !0 ? '    <div ondblclick="if (event.stopPropagation) event.stopPropagation(); else event.cancelBubble = true;"             onclick="w2ui[\'' + this.name + "'].toggle(jQuery(this).parents('tr').attr('recid'));                 if (event.stopPropagation) event.stopPropagation(); else event.cancelBubble = true;\">        " + p + " </div>" : "") + "</td>"
                }
                g += '<td class="w2ui-grid-data-spacer" col="start" style="border-right: 0"></td>';
                for (var q = 0, r = 0; ;) {
                    var s = 1,
                        j = this.columns[q];
                    if (null == j) break;
                    if (j.hidden) q++ , r > 0 && r--;
                    else if (r > 0) {
                        if (q++ , null == this.columns[q]) break;
                        d.w2ui.colspan[this.columns[q - 1].field] = 0, r--
                    } else {
                        if (d.w2ui) {
                            var t = d.w2ui.colspan,
                                u = this.columns[q].field;
                            t && 0 === t[u] && delete t[u]
                        }
                        if (!(q < this.last.colStart || q > this.last.colEnd) || j.frozen) {
                            if (d.w2ui && "object" == typeof d.w2ui.colspan) {
                                var v = parseInt(d.w2ui.colspan[j.field]) || null;
                                if (v > 1) {
                                    for (var w = 0, i = q; i < q + v && !(i >= this.columns.length); i++) this.columns[i].hidden && w++;
                                    s = v - w, r = v - 1
                                }
                            }
                            var x = this.getCellHTML(a, q, c, s);
                            j.frozen ? f += x : g += x, q++
                        } else q++
                    }
                }
                return f += '<td class="w2ui-grid-data-last"></td>', g += '<td class="w2ui-grid-data-last" col="end"></td>', f += "</tr>", g += "</tr>", [f, g]
            },
            getLineHTML: function (a) {
                return "<div>" + a + "</div>"
            },
            getCellHTML: function (a, b, c, d) {
                var e = this.columns[b];
                if (null == e) return "";
                var f = c !== !0 ? this.records[a] : this.summary[a],
                    g = a !== -1 ? this.getCellValue(a, b, c) : "",
                    h = a !== -1 ? this.getCellEditable(a, b) : "",
                    i = "max-height: " + parseInt(this.recordHeight) + "px;",
                    j = !c && f && f.w2ui && f.w2ui.changes && null != f.w2ui.changes[e.field],
                    k = "",
                    l = "",
                    m = this.last.selection,
                    n = !1,
                    o = "";
                if (m.indexes.indexOf(a) != -1 && (n = !0), null == d && (d = f && f.w2ui && f.w2ui.colspan && f.w2ui.colspan[e.field] ? f.w2ui.colspan[e.field] : 1), 0 === b && f && f.w2ui && Array.isArray(f.w2ui.children)) {
                    for (var p = 0, q = this.get(f.w2ui.parent_recid, !0); ;) {
                        if (null == q) break;
                        p++;
                        var r = this.records[q].w2ui;
                        if (null == r || null == r.parent_recid) break;
                        q = this.get(r.parent_recid, !0)
                    }
                    if (f.w2ui.parent_recid)
                        for (var s = 0; s < p; s++) o += '<span class="w2ui-show-children w2ui-icon-empty"></span>';
                    o += '<span class="w2ui-show-children ' + (f.w2ui.children.length > 0 ? f.w2ui.expanded ? "w2ui-icon-collapse" : "w2ui-icon-expand" : "w2ui-icon-empty") + '"  onclick="event.stopPropagation(); w2ui[\'' + this.name + "'].toggle(jQuery(this).parents('tr').attr('recid'))\"></span>"
                }
                if (e.info === !0 && (e.info = {}), null != e.info && (e.info.icon || (e.info.icon = "w2ui-icon-info"), o += '<span class="w2ui-info ' + e.info.icon + '" style="' + (e.info.style || "") + '"  onclick="event.stopPropagation(); w2ui[\'' + this.name + "'].showBubble(" + a + ", " + b + ')"></span>'), null != e.render && a !== -1) {
                    if ("function" == typeof e.render && (g = $.trim(e.render.call(this, f, a, b, g)), (g.length < 4 || "<div" != g.substr(0, 4).toLowerCase()) && (g = '<div style="' + i + '">' + o + String(g) + "</div>")), "object" == typeof e.render) {
                        var t = e.render[g];
                        null != t && "" !== t || (t = g), g = '<div style="' + i + '">' + o + t + "</div>"
                    }
                    if ("string" == typeof e.render) {
                        var u = e.render.toLowerCase().indexOf(":"),
                            r = [];
                        u == -1 ? (r[0] = e.render.toLowerCase(), r[1] = "") : (r[0] = e.render.toLowerCase().substr(0, u), r[1] = e.render.toLowerCase().substr(u + 1));
                        var v = w2utils.formatters[r[0]];
                        g = '<div style="' + i + '">' + o + ("function" == typeof v ? v(g, r[1]) : "") + "</div>"
                    }
                } else {
                    if (h && ["checkbox", "check"].indexOf(h.type) != -1) {
                        var w = c ? -(a + 1) : a;
                        i += "text-align: center;", g = '<input tabindex="-1" type="checkbox" ' + (g ? 'checked="checked"' : "") + " onclick=\"    var obj = w2ui['" + this.name + "'];     obj.editChange.call(obj, this, " + w + ", " + b + ', event); "/>', o = ""
                    }
                    if (this.show.recordTitles) {
                        var x = w2utils.stripTags(String(g).replace(/"/g, "''"));
                        null != e.title && ("function" == typeof e.title && (x = e.title.call(this, f, a, b)), "string" == typeof e.title && (x = e.title))
                    }
                    g = '<div style="' + i + '" title="' + (x || "") + '">' + o + String(g) + "</div>"
                }
                if (null == g && (g = ""), "string" == typeof e.render) {
                    var r = e.render.toLowerCase().split(":");
                    ["number", "int", "float", "money", "currency", "percent", "size"].indexOf(r[0]) != -1 && (k += "text-align: right;")
                }
                f && f.w2ui && ("object" == typeof f.w2ui.style && ("string" == typeof f.w2ui.style[b] && (k += f.w2ui.style[b] + ";"), "string" == typeof f.w2ui.style[e.field] && (k += f.w2ui.style[e.field] + ";")), "object" == typeof f.w2ui.class && ("string" == typeof f.w2ui.class[b] && (l += f.w2ui.class[b] + " "), "string" == typeof f.w2ui.class[e.field] && (l += f.w2ui.class[e.field] + " ")));
                var y = !1;
                return n && $.inArray(b, m.columns[a]) != -1 && (y = !0), g = '<td class="w2ui-grid-data' + (y ? " w2ui-selected" : "") + " " + l + (j ? " w2ui-changed" : "") + '"    id="grid_' + this.name + "_data_" + a + "_" + b + '" col="' + b + '"    style="' + k + (null != e.style ? e.style : "") + '" ' + (null != e.attr ? e.attr : "") + (d > 1 ? 'colspan="' + d + '"' : "") + ">" + g + "</td>", a === -1 && c === !0 && (g = '<td class="w2ui-grid-data" col="' + b + '" style="height: 0px; ' + k + '" ' + (d > 1 ? 'colspan="' + d + '"' : "") + "></td>"), g
            },
            showBubble: function (a, b) {
                var c = "",
                    d = this.columns[b].info,
                    e = this.records[a],
                    f = $(this.box).find("#grid_" + this.name + "_data_" + a + "_" + b + " info");
                if (this.last.bubbleEl && $(this.last.bubbleEl).w2tag(), this.last.bubbleEl = f, null == d.fields) {
                    d.fields = [];
                    for (var g = 0; g < this.columns.length; g++) {
                        var h = this.columns[g];
                        d.fields.push(h.field + ("string" == typeof h.render ? ":" + h.render : ""))
                    }
                }
                var i = d.fields;
                if ("function" == typeof i && (i = i(e, a, b)), "function" == typeof d.render) c = d.render(e, a, b);
                else if ($.isArray(i)) {
                    c = '<table cellpadding="0" cellspacing="0">';
                    for (var g = 0; g < i.length; g++) {
                        var j = String(i[g]).split(":");
                        if ("" != j[0] && "-" != j[0] && "--" != j[0] && "---" != j[0]) {
                            var h = this.getColumn(j[0]);
                            null == h && (h = {
                                field: j[0],
                                caption: j[0]
                            });
                            var k = h ? this.parseField(e, h.field) : "";
                            j.length > 1 && (w2utils.formatters[j[1]] ? k = w2utils.formatters[j[1]](k, j[2] || null) : console.log('ERROR: w2utils.formatters["' + j[1] + '"] does not exists.')), (d.showEmpty === !0 || null != k && "" != k) && (null != d.maxLength && "string" == typeof k && k.length > d.maxLength && (k = k.substr(0, d.maxLength) + "..."), c += "<tr><td>" + h.caption + "</td><td>" + ((0 === k ? "0" : k) || "") + "</td></tr>")
                        } else c += '<tr><td colspan=2><div style="border-top: ' + ("" == j[0] ? "0" : "1") + 'px solid #C1BEBE; margin: 6px 0px;"></div></td></tr>'
                    }
                    c += "</table>"
                } else if ($.isPlainObject(i)) {
                    c = '<table cellpadding="0" cellspacing="0">';
                    for (var l in i) {
                        var m = i[l];
                        if ("" != m && "-" != m && "--" != m && "---" != m) {
                            var j = String(m).split(":"),
                                h = this.getColumn(j[0]);
                            null == h && (h = {
                                field: j[0],
                                caption: j[0]
                            });
                            var k = h ? this.parseField(e, h.field) : "";
                            j.length > 1 && (w2utils.formatters[j[1]] ? k = w2utils.formatters[j[1]](k, j[2] || null) : console.log('ERROR: w2utils.formatters["' + j[1] + '"] does not exists.')), "function" == typeof m && (k = m(e, a, b)), (d.showEmpty === !0 || null != k && "" != k) && (null != d.maxLength && "string" == typeof k && k.length > d.maxLength && (k = k.substr(0, d.maxLength) + "..."), c += "<tr><td>" + l + "</td><td>" + (k || "") + "</td></tr>")
                        } else c += '<tr><td colspan=2><div style="border-top: ' + ("" == m ? "0" : "1") + 'px solid #C1BEBE; margin: 6px 0px;"></div></td></tr>'
                    }
                    c += "</table>"
                }
                $(f).w2tag($.extend({
                    html: c,
                    left: -4,
                    position: "bottom|top",
                    className: "w2ui-info-bubble",
                    style: "",
                    hideOnClick: !0
                }, d.options || {}))
            },
            getCellEditable: function (a, b) {
                var c = this.columns[b],
                    d = this.records[a];
                if (!d || !c) return null;
                var e = d.w2ui ? d.w2ui.editable : null;
                if (e === !1) return null;
                if ((null == e || e === !0) && (e = c ? c.editable : null, "function" == typeof e)) {
                    var f = this.getCellValue(a, b, !1);
                    e = e.call(this, d, a, b, f)
                }
                return e
            },
            getCellValue: function (a, b, c) {
                var d = this.columns[b],
                    e = c !== !0 ? this.records[a] : this.summary[a],
                    f = this.parseField(e, d.field);
                return e && e.w2ui && e.w2ui.changes && null != e.w2ui.changes[d.field] && (f = e.w2ui.changes[d.field]), $.isPlainObject(f) && (d.options && d.options.items ? (val = d.options.items.find(function (a) {
                    return a.id == f.id
                }), f = val ? val.text : f.id) : (null != f.text && (f = f.text), null != f.id && (f = f.id))), null == f && (f = ""), f
            },
            getFooterHTML: function () {
                return '<div>    <div class="w2ui-footer-left"></div>    <div class="w2ui-footer-right"></div>    <div class="w2ui-footer-center"></div></div>'
            },
            status: function (a) {
                if (null != a) $("#grid_" + this.name + "_footer").find("footer-left").html(a);
                else {
                    var b = "",
                        c = this.getSelection();
                    if (c.length > 0 && (this.show.statusSelection && c.length > 1 && (b = String(c.length).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + " " + w2utils.lang("selected")), this.show.statusRecordID && 1 == c.length)) {
                        var d = c[0];
                        "object" == typeof d && (d = d.recid + ", " + w2utils.lang("Column") + ": " + d.column), b = w2utils.lang("Record ID") + ": " + d + " "
                    }
                    $("#grid_" + this.name + "_footer footer-left").html(b), 1 == c.length ? this.toolbar.enable("w2ui-edit") : this.toolbar.disable("w2ui-edit"), c.length >= 1 ? this.toolbar.enable("w2ui-delete") : this.toolbar.disable("w2ui-delete")
                }
            },
            lock: function (a, b) {
                var c = this,
                    d = Array.prototype.slice.call(arguments, 0);
                d.unshift(this.box), setTimeout(function () {
                    $(c.box).find("#grid_" + c.name + "_empty_msg").remove(), w2utils.lock.apply(window, d)
                }, 10)
            },
            unlock: function (a) {
                var b = this.box;
                setTimeout(function () {
                    $(b).find("message").not("closing").length > 0 || w2utils.unlock(b, a)
                }, 25)
            },
            stateSave: function (a) {
                var b = this;
                if (!w2utils.hasLocalStorage) return null;
                for (var c, d = {
                    columns: [],
                    show: $.extend({}, this.show),
                    last: {
                        search: this.last.search,
                        multi: this.last.multi,
                        logic: this.last.logic,
                        caption: this.last.caption,
                        field: this.last.field,
                        scrollTop: this.last.scrollTop,
                        scrollLeft: this.last.scrollLeft
                    },
                    sortData: [],
                    searchData: []
                }, e = 0; e < this.columns.length; e++) {
                    var f = b.columns[e],
                        g = {};
                    Object.keys(b.stateSaveColumnProperties).forEach(function (a, d) {
                        b.stateSaveColumnProperties[a] && (c = void 0 !== f[a] ? f[a] : b.stateSaveColumnFallbackValues[a] || null, g[a] = c)
                    }), d.columns.push(g)
                }
                for (var e = 0; e < this.sortData.length; e++) d.sortData.push($.extend({}, this.sortData[e]));
                for (var e = 0; e < this.searchData.length; e++) d.searchData.push($.extend({}, this.searchData[e]));
                if (a !== !0) {
                    var h = this.trigger({
                        phase: "before",
                        type: "stateSave",
                        target: this.name,
                        state: d
                    });
                    if (h.isCancelled === !0) return void ("function" == typeof callBack && callBack({
                        status: "error",
                        message: "Request aborted."
                    }));
                    try {
                        var i = $.parseJSON(localStorage.w2ui || "{}");
                        i || (i = {}), i.states || (i.states = {}), i.states[this.stateId || this.name] = d, localStorage.w2ui = JSON.stringify(i)
                    } catch (a) {
                        return delete localStorage.w2ui, null
                    }
                    this.trigger($.extend(h, {
                        phase: "after"
                    }))
                }
                return d
            },
            stateRestore: function (a) {
                var b = this,
                    c = "object" != typeof this.url ? this.url : this.url.get;
                if (!a) try {
                    if (!w2utils.hasLocalStorage) return !1;
                    var d = $.parseJSON(localStorage.w2ui || "{}");
                    d || (d = {}), d.states || (d.states = {}), a = d.states[this.stateId || this.name]
                } catch (a) {
                    return delete localStorage.w2ui, null
                }
                var e = this.trigger({
                    phase: "before",
                    type: "stateRestore",
                    target: this.name,
                    state: a
                });
                if (e.isCancelled === !0) return void ("function" == typeof callBack && callBack({
                    status: "error",
                    message: "Request aborted."
                }));
                if ($.isPlainObject(a)) {
                    $.extend(this.show, a.show), $.extend(this.last, a.last);
                    for (var f = this.last.scrollTop, g = this.last.scrollLeft, h = 0; h < a.columns.length; h++) {
                        var d = a.columns[h],
                            i = this.getColumn(d.field, !0);
                        null !== i && ($.extend(this.columns[i], d), h !== i && this.columns.splice(h, 0, this.columns.splice(i, 1)[0]))
                    }
                    this.sortData.splice(0, this.sortData.length);
                    for (var h = 0; h < a.sortData.length; h++) this.sortData.push(a.sortData[h]);
                    this.searchData.splice(0, this.searchData.length);
                    for (var h = 0; h < a.searchData.length; h++) this.searchData.push(a.searchData[h]);
                    setTimeout(function () {
                        c || (b.sortData.length > 0 && b.localSort(), b.searchData.length > 0 && b.localSearch()), b.last.scrollTop = f, b.last.scrollLeft = g, b.refresh()
                    }, 1)
                }
                return this.trigger($.extend(e, {
                    phase: "after"
                })), !0
            },
            stateReset: function () {
                if (this.stateRestore(this.last.state), w2utils.hasLocalStorage) try {
                    var a = $.parseJSON(localStorage.w2ui || "{}");
                    a.states && a.states[this.stateId || this.name] && delete a.states[this.stateId || this.name], localStorage.w2ui = JSON.stringify(a)
                } catch (a) {
                    return delete localStorage.w2ui, null
                }
            },
            parseField: function (a, b) {
                if (this.useFieldDot) {
                    var c = "";
                    try {
                        c = a;
                        for (var d = String(b).split("."), e = 0; e < d.length; e++) c = c[d[e]]
                    } catch (a) {
                        c = ""
                    }
                    return c
                }
                return a ? a[b] : ""
            },
            prepareData: function () {
                function a(c) {
                    for (var d = 0; d < b.columns.length; d++) {
                        var e = b.columns[d];
                        if (null != c[e.field] && "string" == typeof e.render) {
                            if (["number", "int", "float", "money", "currency", "percent"].indexOf(e.render.split(":")[0]) != -1 && "number" != typeof c[e.field] && (c[e.field] = parseFloat(c[e.field])), ["date", "age"].indexOf(e.render.split(":")[0]) != -1 && !c[e.field + "_"]) {
                                var f = c[e.field];
                                w2utils.isInt(f) && (f = parseInt(f)), c[e.field + "_"] = new Date(f)
                            }
                            if (["time"].indexOf(e.render) != -1)
                                if (w2utils.isTime(c[e.field])) {
                                    var g = w2utils.isTime(c[e.field], !0),
                                        f = new Date;
                                    f.setHours(g.hours, g.minutes, g.seconds ? g.seconds : 0, 0), c[e.field + "_"] || (c[e.field + "_"] = f)
                                } else {
                                    var g = c[e.field];
                                    w2utils.isInt(g) && (g = parseInt(g));
                                    var g = null != g ? new Date(g) : new Date,
                                        f = new Date;
                                    f.setHours(g.getHours(), g.getMinutes(), g.getSeconds(), 0), c[e.field + "_"] || (c[e.field + "_"] = f)
                                }
                        }
                    }
                    if (c.w2ui && c.w2ui.children && c.w2ui.expanded !== !0)
                        for (var h = 0; h < c.w2ui.children.length; h++) {
                            var i = c.w2ui.children[h];
                            a(i)
                        }
                }
                for (var b = this, c = 0; c < this.records.length; c++) {
                    var d = this.records[c];
                    a(d)
                }
            },
            nextCell: function (a, b, c) {
                var d = b + 1;
                if (d >= this.columns.length) return null;
                var e = this.records[a].w2ui,
                    f = (this.columns[b], this.columns[d]),
                    g = e && e.colspan && !isNaN(e.colspan[f.field]) ? parseInt(e.colspan[f.field]) : 1;
                if (null == f) return null;
                if (f && f.hidden || 0 === g) return this.nextCell(a, d, c);
                if (c) {
                    var h = this.getCellEditable(a, b);
                    if (null == h || ["checkbox", "check"].indexOf(h.type) != -1) return this.nextCell(a, d, c)
                }
                return d
            },
            prevCell: function (a, b, c) {
                var d = b - 1;
                if (d < 0) return null;
                var e = this.records[a].w2ui,
                    f = this.columns[d],
                    g = e && e.colspan && !isNaN(e.colspan[f.field]) ? parseInt(e.colspan[f.field]) : 1;
                if (null == f) return null;
                if (f && f.hidden || 0 === g) return this.prevCell(a, d, c);
                if (c) {
                    var h = this.getCellEditable(a, b);
                    if (null == h || ["checkbox", "check"].indexOf(h.type) != -1) return this.prevCell(a, d, c)
                }
                return d
            },
            nextRow: function (a, b) {
                var c = this.last.searchIds,
                    d = null;
                if (a + 1 < this.records.length && 0 === c.length || c.length > 0 && a < c[c.length - 1]) {
                    if (a++ , c.length > 0)
                        for (; ;) {
                            if ($.inArray(a, c) != -1 || a > this.records.length) break;
                            a++
                        }
                    var e = this.records[a].w2ui,
                        f = this.columns[b],
                        g = e && e.colspan && null != f && !isNaN(e.colspan[f.field]) ? parseInt(e.colspan[f.field]) : 1;
                    d = 0 === g ? this.nextRow(a, b) : a
                }
                return d
            },
            prevRow: function (a, b) {
                var c = this.last.searchIds,
                    d = null;
                if (a > 0 && 0 === c.length || c.length > 0 && a > c[0]) {
                    if (a-- , c.length > 0)
                        for (; ;) {
                            if ($.inArray(a, c) != -1 || a < 0) break;
                            a--
                        }
                    var e = this.records[a].w2ui,
                        f = this.columns[b],
                        g = e && e.colspan && null != f && !isNaN(e.colspan[f.field]) ? parseInt(e.colspan[f.field]) : 1;
                    d = 0 === g ? this.prevRow(a, b) : a
                }
                return d
            },
            selectionSave: function () {
                return this.last._selection = this.getSelection(), this.last._selection
            },
            selectionRestore: function (a) {
                var b = (new Date).getTime();
                this.last.selection = {
                    indexes: [],
                    columns: {}
                };
                for (var c = this.last.selection, d = this.last._selection, e = 0; e < d.length; e++)
                    if ($.isPlainObject(d[e])) {
                        var f = this.get(d[e].recid, !0);
                        null != f && (c.indexes.indexOf(f) == -1 && c.indexes.push(f), c.columns[f] || (c.columns[f] = []), c.columns[f].push(d[e].column))
                    } else {
                        var f = this.get(d[e], !0);
                        null != f && c.indexes.push(f)
                    } return delete this.last._selection, a !== !0 && this.refresh(), (new Date).getTime() - b
            },
            message: function (a, b) {
                "string" == typeof a && (a = {
                    width: a.length < 300 ? 350 : 550,
                    height: a.length < 300 ? 170 : 250,
                    body: '<div class="w2ui-centered">' + a + "</div>",
                    buttons: '<button type="button" class="w2ui-btn" onclick="w2ui[\'' + this.name + "'].message()\">Ok</button>",
                    onOpen: function (a) {
                        setTimeout(function () {
                            $(this.box).find("btn").focus()
                        }, 25)
                    },
                    onClose: function (a) {
                        "function" == typeof b && b()
                    }
                }), w2utils.message.call(this, {
                    box: this.box,
                    path: "w2ui." + this.name,
                    title: "grid-header:visible",
                    body: "grid-box"
                }, a)
            }
        }, $.extend(w2grid.prototype, w2utils.event), w2obj.grid = w2grid
    }(jQuery),
    function (a) {
        var b = function (b) {
            this.box = null, this.name = null, this.panels = [], this.tmp = {}, this.padding = 1, this.resizer = 4, this.style = "", a.extend(!0, this, w2obj.layout, b)
        },
            c = ["top", "left", "main", "preview", "right", "bottom"];
        a.fn.w2layout = function (d) {
            function e(b, c, d) {
                var e = b.get(c);
                return null != e && null == d && (d = e.tabs), null != e && null != d && (a.isArray(d) && (d = {
                    tabs: d
                }), a().w2destroy(b.name + "_" + c + "_tabs"), e.tabs = a().w2tabs(a.extend({}, d, {
                    owner: b,
                    name: b.name + "_" + c + "_tabs"
                })), e.show.tabs = !0, !0)
            }

            function f(b, c, d) {
                var e = b.get(c);
                return null != e && null == d && (d = e.toolbar), null != e && null != d && (a.isArray(d) && (d = {
                    items: d
                }), a().w2destroy(b.name + "_" + c + "_toolbar"), e.toolbar = a().w2toolbar(a.extend({}, d, {
                    owner: b,
                    name: b.name + "_" + c + "_toolbar"
                })), e.show.toolbar = !0, !0)
            }
            if (a.isPlainObject(d)) {
                if (!w2utils.checkName(d, "w2layout")) return;
                var g = d.panels || [],
                    h = new b(d);
                a.extend(h, {
                    handlers: [],
                    panels: []
                });
                for (var i = 0, j = g.length; i < j; i++) h.panels[i] = a.extend(!0, {}, b.prototype.panel, g[i]), (a.isPlainObject(h.panels[i].tabs) || a.isArray(h.panels[i].tabs)) && e(h, g[i].type), (a.isPlainObject(h.panels[i].toolbar) || a.isArray(h.panels[i].toolbar)) && f(h, g[i].type);
                for (var k = 0; k < c.length; k++) null == h.get(c[k]) && h.panels.push(a.extend(!0, {}, b.prototype.panel, {
                    type: c[k],
                    hidden: "main" !== c[k],
                    size: 50
                }));
                return a(this).length > 0 && h.render(a(this)[0]), w2ui[h.name] = h, h
            }
            var l = w2ui[a(this).attr("name")];
            return l ? arguments.length > 0 ? (l[d] && l[d].apply(l, Array.prototype.slice.call(arguments, 1)), this) : l : null
        }, b.prototype = {
            onShow: null,
            onHide: null,
            onResizing: null,
            onResizerClick: null,
            onRender: null,
            onRefresh: null,
            onContent: null,
            onResize: null,
            onDestroy: null,
            panel: {
                type: null,
                title: "",
                size: 100,
                minSize: 20,
                maxSize: !1,
                hidden: !1,
                resizable: !1,
                overflow: "auto",
                style: "",
                content: "",
                tabs: null,
                toolbar: null,
                width: null,
                height: null,
                show: {
                    toolbar: !1,
                    tabs: !1
                },
                onRefresh: null,
                onShow: null,
                onHide: null
            },
            html: function (a, b, c) {
                return this.content(a, b, c)
            },
            content: function (b, c, d) {
                var e = this,
                    f = this.get(b);
                if ("css" == b) return a("#layout_" + e.name + "_panel_css").html("<style>" + c + "</style>"), !0;
                if (null == f) return !1;
                if (null == c) return f.content;
                var g = this.trigger({
                    phase: "before",
                    type: "content",
                    target: b,
                    object: f,
                    content: c,
                    transition: d
                });
                if (g.isCancelled !== !0) {
                    if (c instanceof jQuery) return console.log("ERROR: You can not pass jQuery object to w2layout.content() method"), !1;
                    var h = "#layout_" + this.name + "_panel_" + f.type,
                        i = a(h + "> panel-content"),
                        j = 0;
                    if (i.length > 0 && (a(h).scrollTop(0), j = a(i).position().top), "" === f.content) f.content = c, this.refresh(b);
                    else {
                        if (f.content = c, !f.hidden && null != d && "" !== d) {
                            var k = a(h + "> panel-content");
                            k.after('<div class="w2ui-panel-content new-panel" style="' + k[0].style.cssText + '"></div>');
                            var l = a(h + "> panel-content.new-panel");
                            k.css("top", j), l.css("top", j), "object" == typeof c ? (c.box = l[0], c.render()) : l.html(c), w2utils.transition(k[0], l[0], d, function () {
                                k.remove(), l.removeClass("new-panel"), l.css("overflow", f.overflow), e.resize(), window.navigator.userAgent.indexOf("MSIE") != -1 && setTimeout(function () {
                                    e.resize()
                                }, 100)
                            })
                        }
                        this.refresh(b)
                    }
                    return e.trigger(a.extend(g, {
                        phase: "after"
                    })), e.resize(), window.navigator.userAgent.indexOf("MSIE") != -1 && setTimeout(function () {
                        e.resize()
                    }, 100), !0
                }
            },
            message: function (b, c) {
                var d = this;
                "string" == typeof c && (c = {
                    width: c.length < 300 ? 350 : 550,
                    height: c.length < 300 ? 170 : 250,
                    body: '<div class="w2ui-centered">' + c + "</div>",
                    buttons: '<button class="w2ui-btn" onclick="w2ui[\'' + this.name + "'].message('" + b + "')\">Ok</button>",
                    onOpen: function (b) {
                        setTimeout(function () {
                            a(this.box).find("btn").focus()
                        }, 25)
                    }
                });
                var e, f = this.get(b),
                    g = a("#layout_" + this.name + "_panel_" + f.type),
                    h = g.css("overflow");
                c && (c.onClose && (e = c.onClose), c.onClose = function (b) {
                    "function" == typeof e && e(b), b.done(function () {
                        a("#layout_" + d.name + "_panel_" + f.type).css("overflow", h)
                    })
                }), a("#layout_" + this.name + "_panel_" + f.type).css("overflow", "hidden"), w2utils.message.call(this, {
                    box: a("#layout_" + this.name + "_panel_" + f.type),
                    param: b,
                    path: "w2ui." + this.name,
                    title: "panel-title:visible",
                    body: "panel-content"
                }, c)
            },
            load: function (b, c, d, e) {
                var f = this;
                return "css" == b ? (a.get(c, function (a, c, d) {
                    f.content(b, d.responseText), e && e()
                }), !0) : null != this.get(b) && (a.get(c, function (a, c, g) {
                    f.content(b, g.responseText, d), e && e(), f.resize(), window.navigator.userAgent.indexOf("MSIE") != -1 && setTimeout(function () {
                        f.resize()
                    }, 100)
                }), !0)
            },
            sizeTo: function (b, c, d) {
                var e = this,
                    f = e.get(b);
                return null != f && (a(e.box).find(" > div > panel").css(w2utils.cssPrefix("transition", d !== !0 ? ".2s" : "0s")), setTimeout(function () {
                    e.set(b, {
                        size: c
                    })
                }, 1), setTimeout(function () {
                    a(e.box).find(" > div > panel").css(w2utils.cssPrefix("transition", "0s")), e.resize()
                }, 500), !0)
            },
            show: function (b, c) {
                var d = this,
                    e = this.trigger({
                        phase: "before",
                        type: "show",
                        target: b,
                        object: this.get(b),
                        immediate: c
                    });
                if (e.isCancelled !== !0) {
                    var f = d.get(b);
                    return null != f && (f.hidden = !1, c === !0 ? (a("#layout_" + d.name + "_panel_" + b).css({
                        opacity: "1"
                    }), d.trigger(a.extend(e, {
                        phase: "after"
                    })), d.resize()) : (a("#layout_" + d.name + "_panel_" + b).css({
                        opacity: "0"
                    }), a(d.box).find(" > div > panel").css(w2utils.cssPrefix("transition", ".2s")), setTimeout(function () {
                        d.resize()
                    }, 1), setTimeout(function () {
                        a("#layout_" + d.name + "_panel_" + b).css({
                            opacity: "1"
                        })
                    }, 250), setTimeout(function () {
                        a(d.box).find(" > div > panel").css(w2utils.cssPrefix("transition", "0s")), d.trigger(a.extend(e, {
                            phase: "after"
                        })), d.resize()
                    }, 500)), !0)
                }
            },
            hide: function (b, c) {
                var d = this,
                    e = this.trigger({
                        phase: "before",
                        type: "hide",
                        target: b,
                        object: this.get(b),
                        immediate: c
                    });
                if (e.isCancelled !== !0) {
                    var f = d.get(b);
                    return null != f && (f.hidden = !0, c === !0 ? (a("#layout_" + d.name + "_panel_" + b).css({
                        opacity: "0"
                    }), d.trigger(a.extend(e, {
                        phase: "after"
                    })), d.resize()) : (a(d.box).find(" > div > panel").css(w2utils.cssPrefix("transition", ".2s")), a("#layout_" + d.name + "_panel_" + b).css({
                        opacity: "0"
                    }), setTimeout(function () {
                        d.resize()
                    }, 1), setTimeout(function () {
                        a(d.box).find(" > div > panel").css(w2utils.cssPrefix("transition", "0s")), d.trigger(a.extend(e, {
                            phase: "after"
                        })), d.resize()
                    }, 500)), !0)
                }
            },
            toggle: function (a, b) {
                var c = this.get(a);
                return null != c && (c.hidden ? this.show(a, b) : this.hide(a, b))
            },
            set: function (b, c) {
                var d = this.get(b, !0);
                return null != d && (a.extend(this.panels[d], c), null == c.content && null == c.resizable || this.refresh(b), this.resize(), !0)
            },
            get: function (a, b) {
                for (var c = 0; c < this.panels.length; c++)
                    if (this.panels[c].type == a) return b === !0 ? c : this.panels[c];
                return null
            },
            el: function (b) {
                var c = a("#layout_" + this.name + "_panel_" + b + "> panel-content");
                return 1 != c.length ? null : c[0]
            },
            hideToolbar: function (b) {
                var c = this.get(b);
                c && (c.show.toolbar = !1, a("#layout_" + this.name + "_panel_" + b + "> panel-toolbar").hide(), this.resize())
            },
            showToolbar: function (b) {
                var c = this.get(b);
                c && (c.show.toolbar = !0, a("#layout_" + this.name + "_panel_" + b + "> panel-toolbar").show(), this.resize())
            },
            toggleToolbar: function (a) {
                var b = this.get(a);
                b && (b.show.toolbar ? this.hideToolbar(a) : this.showToolbar(a))
            },
            assignToolbar: function (b, c) {
                "string" == typeof c && null != w2ui[c] && (c = w2ui[c]);
                var d = this.get(b);
                d.toolbar = c;
                var e = a(this.box).find(b + "> panel-toolbar");
                null != d.toolbar ? (0 === e.find("[name=" + d.toolbar.name + "]").length ? e.w2render(d.toolbar) : null != d.toolbar && d.toolbar.refresh(), this.showToolbar(b), this.refresh(b)) : (e.html(""), this.hideToolbar(b))
            },
            hideTabs: function (b) {
                var c = this.get(b);
                c && (c.show.tabs = !1, a("#layout_" + this.name + "_panel_" + b + "> panel-tabs").hide(), this.resize())
            },
            showTabs: function (b) {
                var c = this.get(b);
                c && (c.show.tabs = !0, a("#layout_" + this.name + "_panel_" + b + "> panel-tabs").show(), this.resize())
            },
            toggleTabs: function (a) {
                var b = this.get(a);
                b && (b.show.tabs ? this.hideTabs(a) : this.showTabs(a))
            },
            render: function (b) {
                function d() {
                    h.tmp.events = {
                        resize: function (a) {
                            w2ui[h.name].resize()
                        },
                        resizeStart: e,
                        mouseMove: g,
                        mouseUp: f
                    }, a(window).on("resize", h.tmp.events.resize)
                }

                function e(b, d) {
                    if (h.box) {
                        d || (d = window.event), a(document).off("mousemove", h.tmp.events.mouseMove).on("mousemove", h.tmp.events.mouseMove), a(document).off("mouseup", h.tmp.events.mouseUp).on("mouseup", h.tmp.events.mouseUp), h.tmp.resize = {
                            type: b,
                            x: d.screenX,
                            y: d.screenY,
                            diff_x: 0,
                            diff_y: 0,
                            value: 0
                        };
                        for (var e = 0; e < c.length; e++) {
                            var f = a(h.el(c[e])).parent().find("lock");
                            f.length > 0 ? f.attr("locked", "previous") : h.lock(c[e], {
                                opacity: 0
                            })
                        }
                        "left" != b && "right" != b || (h.tmp.resize.value = parseInt(a("#layout_" + h.name + "_resizer_" + b)[0].style.left)), "top" != b && "preview" != b && "bottom" != b || (h.tmp.resize.value = parseInt(a("#layout_" + h.name + "_resizer_" + b)[0].style.top))
                    }
                }

                function f(b) {
                    if (h.box && (b || (b = window.event), a(document).off("mousemove", h.tmp.events.mouseMove), a(document).off("mouseup", h.tmp.events.mouseUp), null != h.tmp.resize)) {
                        for (var d = 0; d < c.length; d++) {
                            var e = a(h.el(c[d])).parent().find("lock");
                            "previous" == e.attr("locked") ? e.removeAttr("locked") : h.unlock(c[d])
                        }
                        if (0 !== h.tmp.diff_x || 0 !== h.tmp.resize.diff_y) {
                            var f, g, i = h.get("top"),
                                j = h.get("bottom"),
                                k = h.get(h.tmp.resize.type),
                                l = parseInt(a(h.box).height()),
                                m = parseInt(a(h.box).width()),
                                n = String(k.size);
                            switch (h.tmp.resize.type) {
                                case "top":
                                    f = parseInt(k.sizeCalculated) + h.tmp.resize.diff_y, g = 0;
                                    break;
                                case "bottom":
                                    f = parseInt(k.sizeCalculated) - h.tmp.resize.diff_y, g = 0;
                                    break;
                                case "preview":
                                    f = parseInt(k.sizeCalculated) - h.tmp.resize.diff_y, g = (i && !i.hidden ? i.sizeCalculated : 0) + (j && !j.hidden ? j.sizeCalculated : 0);
                                    break;
                                case "left":
                                    f = parseInt(k.sizeCalculated) + h.tmp.resize.diff_x, g = 0;
                                    break;
                                case "right":
                                    f = parseInt(k.sizeCalculated) - h.tmp.resize.diff_x, g = 0
                            }
                            "%" == n.substr(n.length - 1) ? k.size = Math.floor(100 * f / ("left" == k.type || "right" == k.type ? m : l - g) * 100) / 100 + "%" : "-" == String(k.size).substr(0, 1) ? k.size = parseInt(k.size) - k.sizeCalculated + f : k.size = f, h.resize()
                        }
                        a("#layout_" + h.name + "_resizer_" + h.tmp.resize.type).removeClass("active"), delete h.tmp.resize
                    }
                }

                function g(b) {
                    if (h.box && (b || (b = window.event), null != h.tmp.resize)) {
                        var c = h.get(h.tmp.resize.type),
                            d = h.tmp.resize,
                            e = h.trigger({
                                phase: "before",
                                type: "resizing",
                                target: h.name,
                                object: c,
                                originalEvent: b,
                                panel: d ? d.type : "all",
                                diff_x: d ? d.diff_x : 0,
                                diff_y: d ? d.diff_y : 0
                            });
                        if (e.isCancelled !== !0) {
                            var f = a("#layout_" + h.name + "_resizer_" + d.type),
                                g = b.screenX - d.x,
                                i = b.screenY - d.y,
                                j = h.get("main");
                            switch (f.hasClass("active") || f.addClass("active"), d.type) {
                                case "left":
                                    c.minSize - g > c.width && (g = c.minSize - c.width), c.maxSize && c.width + g > c.maxSize && (g = c.maxSize - c.width), j.minSize + g > j.width && (g = j.width - j.minSize);
                                    break;
                                case "right":
                                    c.minSize + g > c.width && (g = c.width - c.minSize), c.maxSize && c.width - g > c.maxSize && (g = c.width - c.maxSize), j.minSize - g > j.width && (g = j.minSize - j.width);
                                    break;
                                case "top":
                                    c.minSize - i > c.height && (i = c.minSize - c.height), c.maxSize && c.height + i > c.maxSize && (i = c.maxSize - c.height), j.minSize + i > j.height && (i = j.height - j.minSize);
                                    break;
                                case "preview":
                                case "bottom":
                                    c.minSize + i > c.height && (i = c.height - c.minSize), c.maxSize && c.height - i > c.maxSize && (i = c.height - c.maxSize), j.minSize - i > j.height && (i = j.minSize - j.height)
                            }
                            switch (d.diff_x = g, d.diff_y = i, d.type) {
                                case "top":
                                case "preview":
                                case "bottom":
                                    d.diff_x = 0, f.length > 0 && (f[0].style.top = d.value + d.diff_y + "px");
                                    break;
                                case "left":
                                case "right":
                                    d.diff_y = 0, f.length > 0 && (f[0].style.left = d.value + d.diff_x + "px")
                            }
                            h.trigger(a.extend(e, {
                                phase: "after"
                            }))
                        }
                    }
                }
                var h = this,
                    i = (new Date).getTime(),
                    j = h.trigger({
                        phase: "before",
                        type: "render",
                        target: h.name,
                        box: b
                    });
                if (j.isCancelled !== !0) {
                    if (null != b && (a(h.box).find("#layout_" + h.name + "_panel_main").length > 0 && a(h.box).removeAttr("name").removeClass("w2ui-layout").html(""), h.box = b), !h.box) return !1;
                    a(h.box).attr("name", h.name).addClass("w2ui-layout").html("<div></div>"), a(h.box).length > 0 && (a(h.box)[0].style.cssText += h.style);
                    for (var k = 0; k < c.length; k++) {
                        var l = (h.get(c[k]), '<div id="layout_' + h.name + "_panel_" + c[k] + '" class="w2ui-panel">    <div class="w2ui-panel-title"></div>    <div class="w2ui-panel-tabs"></div>    <div class="w2ui-panel-toolbar"></div>    <div class="w2ui-panel-content"></div></div><div id="layout_' + h.name + "_resizer_" + c[k] + '" class="w2ui-resizer"></div>');
                        a(h.box).find(" > div").append(l)
                    }
                    return a(h.box).find(" > div").append('<div id="layout_' + h.name + '_panel_css" style="position: absolute; top: 10000px;"></div>'), h.refresh(), h.trigger(a.extend(j, {
                        phase: "after"
                    })), setTimeout(function () {
                        d(), h.resize()
                    }, 0), (new Date).getTime() - i
                }
            },
            refresh: function (b) {
                var c = this;
                null == b && (b = null);
                var d = (new Date).getTime(),
                    e = c.trigger({
                        phase: "before",
                        type: "refresh",
                        target: null != b ? b : c.name,
                        object: c.get(b)
                    });
                if (e.isCancelled !== !0) {
                    if ("string" == typeof b) {
                        var f = c.get(b);
                        if (null == f) return;
                        var g = "#layout_" + c.name + "_panel_" + f.type,
                            h = "#layout_" + c.name + "_resizer_" + f.type;
                        a(g).css({
                            display: f.hidden ? "none" : "block"
                        }), f.resizable ? a(h).show() : a(h).hide(), "object" == typeof f.content && "function" == typeof f.content.render ? (f.content.box = a(g + "> panel-content")[0], setTimeout(function () {
                            a(g + "> panel-content").length > 0 && (a(g + "> panel-content").removeClass().removeAttr("name").addClass("w2ui-panel-content").css("overflow", f.overflow)[0].style.cssText += ";" + f.style), f.content && "function" == typeof f.content.render && f.content.render()
                        }, 1)) : a(g + "> panel-content").length > 0 && (a(g + "> panel-content").removeClass().removeAttr("name").addClass("w2ui-panel-content").html(f.content).css("overflow", f.overflow)[0].style.cssText += ";" + f.style);
                        var i = a(c.box).find(g + "> panel-tabs");
                        f.show.tabs ? 0 === i.find("[name=" + f.tabs.name + "]").length && null != f.tabs ? i.w2render(f.tabs) : f.tabs.refresh() : i.html("").removeClass("w2ui-tabs").hide(), i = a(c.box).find(g + "> panel-toolbar"), f.show.toolbar ? 0 === i.find("[name=" + f.toolbar.name + "]").length && null != f.toolbar ? i.w2render(f.toolbar) : f.toolbar.refresh() : i.html("").removeClass("w2ui-toolbar").hide(), i = a(c.box).find(g + "> panel-title"), f.title ? i.html(f.title).show() : i.html("").hide()
                    } else {
                        if (0 === a("#layout_" + c.name + "_panel_main").length) return void c.render();
                        c.resize();
                        for (var j = 0; j < this.panels.length; j++) c.refresh(this.panels[j].type)
                    }
                    return c.trigger(a.extend(e, {
                        phase: "after"
                    })), (new Date).getTime() - d
                }
            },
            resize: function () {
                if (!this.box) return !1;
                var b = (new Date).getTime(),
                    d = this.tmp.resize,
                    e = this.trigger({
                        phase: "before",
                        type: "resize",
                        target: this.name,
                        panel: d ? d.type : "all",
                        diff_x: d ? d.diff_x : 0,
                        diff_y: d ? d.diff_y : 0
                    });
                if (e.isCancelled !== !0) {
                    this.padding < 0 && (this.padding = 0);
                    var f = parseInt(a(this.box).width()),
                        g = parseInt(a(this.box).height());
                    a(this.box).find(" > div").css({
                        width: f + "px",
                        height: g + "px"
                    });
                    for (var h, i, j, k, l, m = this, n = this.get("main"), o = this.get("preview"), p = this.get("left"), q = this.get("right"), r = this.get("top"), s = this.get("bottom"), t = null != o && o.hidden !== !0, u = null != p && p.hidden !== !0, v = null != q && q.hidden !== !0, w = null != r && r.hidden !== !0, x = null != s && s.hidden !== !0, y = 0; y < c.length; y++)
                        if ("main" !== c[y] && (d = this.get(c[y]))) {
                            var z = String(d.size || 0);
                            if ("%" == z.substr(z.length - 1)) {
                                var A = g;
                                "preview" == d.type && (A = A - (r && !r.hidden ? r.sizeCalculated : 0) - (s && !s.hidden ? s.sizeCalculated : 0)), d.sizeCalculated = parseInt(("left" == d.type || "right" == d.type ? f : A) * parseFloat(d.size) / 100)
                            } else d.sizeCalculated = parseInt(d.size);
                            d.sizeCalculated = Math.max(d.sizeCalculated, parseInt(d.minSize))
                        }
                    "-" == String(q.size).substr(0, 1) && (u && "-" == p.size.substr(0, 1) ? console.log("ERROR: you cannot have both left panel.size and right panel.size be negative.") : q.sizeCalculated = f - (u ? p.sizeCalculated : 0) + parseInt(q.size)), "-" == String(p.size).substr(0, 1) && (v && "-" == q.size.substr(0, 1) ? console.log("ERROR: you cannot have both left panel.size and right panel.size be negative.") : p.sizeCalculated = f - (v ? q.sizeCalculated : 0) + parseInt(p.size)), null != r && r.hidden !== !0 ? (h = 0, i = 0, j = f, k = r.sizeCalculated, a("#layout_" + this.name + "_panel_top").css({
                        display: "block",
                        left: h + "px",
                        top: i + "px",
                        width: j + "px",
                        height: k + "px"
                    }).show(), r.width = j, r.height = k, r.resizable && (i = r.sizeCalculated - (0 === this.padding ? this.resizer : 0), k = this.resizer > this.padding ? this.resizer : this.padding, a("#layout_" + this.name + "_resizer_top").show().css({
                        display: "block",
                        left: h + "px",
                        top: i + "px",
                        width: j + "px",
                        height: k + "px",
                        cursor: "ns-resize"
                    }).off("mousedown").on("mousedown", function (b) {
                        var c = m.trigger({
                            phase: "before",
                            type: "resizerClick",
                            target: "top",
                            originalEvent: b
                        });
                        if (c.isCancelled !== !0) return w2ui[m.name].tmp.events.resizeStart("top", b), m.trigger(a.extend(c, {
                            phase: "after"
                        })), !1
                    }))) : (a("#layout_" + this.name + "_panel_top").hide(), a("#layout_" + this.name + "_resizer_top").hide()), null != p && p.hidden !== !0 ? (h = 0, i = 0 + (w ? r.sizeCalculated + this.padding : 0), j = p.sizeCalculated, k = g - (w ? r.sizeCalculated + this.padding : 0) - (x ? s.sizeCalculated + this.padding : 0), l = a("#layout_" + this.name + "_panel_left"), window.navigator.userAgent.indexOf("MSIE") != -1 && l.length > 0 && l[0].clientHeight < l[0].scrollHeight && (j += 17), l.css({
                        display: "block",
                        left: h + "px",
                        top: i + "px",
                        width: j + "px",
                        height: k + "px"
                    }).show(), p.width = j, p.height = k, p.resizable && (h = p.sizeCalculated - (0 === this.padding ? this.resizer : 0), j = this.resizer > this.padding ? this.resizer : this.padding, a("#layout_" + this.name + "_resizer_left").show().css({
                        display: "block",
                        left: h + "px",
                        top: i + "px",
                        width: j + "px",
                        height: k + "px",
                        cursor: "ew-resize"
                    }).off("mousedown").on("mousedown", function (b) {
                        var c = m.trigger({
                            phase: "before",
                            type: "resizerClick",
                            target: "left",
                            originalEvent: b
                        });
                        if (c.isCancelled !== !0) return w2ui[m.name].tmp.events.resizeStart("left", b), m.trigger(a.extend(c, {
                            phase: "after"
                        })), !1
                    }))) : (a("#layout_" + this.name + "_panel_left").hide(), a("#layout_" + this.name + "_resizer_left").hide()), null != q && q.hidden !== !0 ? (h = f - q.sizeCalculated, i = 0 + (w ? r.sizeCalculated + this.padding : 0), j = q.sizeCalculated, k = g - (w ? r.sizeCalculated + this.padding : 0) - (x ? s.sizeCalculated + this.padding : 0), a("#layout_" + this.name + "_panel_right").css({
                        display: "block",
                        left: h + "px",
                        top: i + "px",
                        width: j + "px",
                        height: k + "px"
                    }).show(), q.width = j, q.height = k, q.resizable && (h -= this.padding, j = this.resizer > this.padding ? this.resizer : this.padding, a("#layout_" + this.name + "_resizer_right").show().css({
                        display: "block",
                        left: h + "px",
                        top: i + "px",
                        width: j + "px",
                        height: k + "px",
                        cursor: "ew-resize"
                    }).off("mousedown").on("mousedown", function (b) {
                        var c = m.trigger({
                            phase: "before",
                            type: "resizerClick",
                            target: "right",
                            originalEvent: b
                        });
                        if (c.isCancelled !== !0) return w2ui[m.name].tmp.events.resizeStart("right", b), m.trigger(a.extend(c, {
                            phase: "after"
                        })), !1
                    }))) : (a("#layout_" + this.name + "_panel_right").hide(), a("#layout_" + this.name + "_resizer_right").hide()), null != s && s.hidden !== !0 ? (h = 0, i = g - s.sizeCalculated, j = f, k = s.sizeCalculated, a("#layout_" + this.name + "_panel_bottom").css({
                        display: "block",
                        left: h + "px",
                        top: i + "px",
                        width: j + "px",
                        height: k + "px"
                    }).show(), s.width = j, s.height = k, s.resizable && (i -= 0 === this.padding ? 0 : this.padding, k = this.resizer > this.padding ? this.resizer : this.padding, a("#layout_" + this.name + "_resizer_bottom").show().css({
                        display: "block",
                        left: h + "px",
                        top: i + "px",
                        width: j + "px",
                        height: k + "px",
                        cursor: "ns-resize"
                    }).off("mousedown").on("mousedown", function (b) {
                        var c = m.trigger({
                            phase: "before",
                            type: "resizerClick",
                            target: "bottom",
                            originalEvent: b
                        });
                        if (c.isCancelled !== !0) return w2ui[m.name].tmp.events.resizeStart("bottom", b), m.trigger(a.extend(c, {
                            phase: "after"
                        })), !1
                    }))) : (a("#layout_" + this.name + "_panel_bottom").hide(), a("#layout_" + this.name + "_resizer_bottom").hide()), h = 0 + (u ? p.sizeCalculated + this.padding : 0), i = 0 + (w ? r.sizeCalculated + this.padding : 0), j = f - (u ? p.sizeCalculated + this.padding : 0) - (v ? q.sizeCalculated + this.padding : 0), k = g - (w ? r.sizeCalculated + this.padding : 0) - (x ? s.sizeCalculated + this.padding : 0) - (t ? o.sizeCalculated + this.padding : 0), l = a("#layout_" + this.name + "_panel_main"), window.navigator.userAgent.indexOf("MSIE") != -1 && l.length > 0 && l[0].clientHeight < l[0].scrollHeight && (j += 17), l.css({
                        display: "block",
                        left: h + "px",
                        top: i + "px",
                        width: j + "px",
                        height: k + "px"
                    }), n.width = j, n.height = k, null != o && o.hidden !== !0 ? (h = 0 + (u ? p.sizeCalculated + this.padding : 0), i = g - (x ? s.sizeCalculated + this.padding : 0) - o.sizeCalculated, j = f - (u ? p.sizeCalculated + this.padding : 0) - (v ? q.sizeCalculated + this.padding : 0), k = o.sizeCalculated, l = a("#layout_" + this.name + "_panel_preview"), window.navigator.userAgent.indexOf("MSIE") != -1 && l.length > 0 && l[0].clientHeight < l[0].scrollHeight && (j += 17), l.css({
                        display: "block",
                        left: h + "px",
                        top: i + "px",
                        width: j + "px",
                        height: k + "px"
                    }).show(), o.width = j, o.height = k, o.resizable && (i -= 0 === this.padding ? 0 : this.padding, k = this.resizer > this.padding ? this.resizer : this.padding,
                        a("#layout_" + this.name + "_resizer_preview").show().css({
                            display: "block",
                            left: h + "px",
                            top: i + "px",
                            width: j + "px",
                            height: k + "px",
                            cursor: "ns-resize"
                        }).off("mousedown").on("mousedown", function (b) {
                            var c = m.trigger({
                                phase: "before",
                                type: "resizerClick",
                                target: "preview",
                                originalEvent: b
                            });
                            if (c.isCancelled !== !0) return w2ui[m.name].tmp.events.resizeStart("preview", b), m.trigger(a.extend(c, {
                                phase: "after"
                            })), !1
                        }))) : (a("#layout_" + this.name + "_panel_preview").hide(), a("#layout_" + this.name + "_resizer_preview").hide());
                    for (var B = 0; B < c.length; B++) {
                        var C = this.get(c[B]),
                            D = "#layout_" + this.name + "_panel_" + c[B] + " > panel-",
                            E = 0;
                        C && (C.title && (E += w2utils.getSize(a(D + "title").css({
                            top: E + "px",
                            display: "block"
                        }), "height")), C.show.tabs && (null != C.tabs && w2ui[this.name + "_" + c[B] + "_tabs"] && w2ui[this.name + "_" + c[B] + "_tabs"].resize(), E += w2utils.getSize(a(D + "tabs").css({
                            top: E + "px",
                            display: "block"
                        }), "height")), C.show.toolbar && (null != C.toolbar && w2ui[this.name + "_" + c[B] + "_toolbar"] && w2ui[this.name + "_" + c[B] + "_toolbar"].resize(), E += w2utils.getSize(a(D + "toolbar").css({
                            top: E + "px",
                            display: "block"
                        }), "height"))), a(D + "content").css({
                            display: "block"
                        }).css({
                            top: E + "px"
                        })
                    }
                    return clearTimeout(this._resize_timer), this._resize_timer = setTimeout(function () {
                        for (var b in w2ui)
                            if ("function" == typeof w2ui[b].resize) {
                                null == w2ui[b].panels && w2ui[b].resize();
                                var c = a(w2ui[b].box).parents("layout");
                                c.length > 0 && c.attr("name") == m.name && w2ui[b].resize()
                            }
                    }, 100), this.trigger(a.extend(e, {
                        phase: "after"
                    })), (new Date).getTime() - b
                }
            },
            destroy: function () {
                var b = this.trigger({
                    phase: "before",
                    type: "destroy",
                    target: this.name
                });
                if (b.isCancelled !== !0) return null != w2ui[this.name] && (a(this.box).find("#layout_" + this.name + "_panel_main").length > 0 && a(this.box).removeAttr("name").removeClass("w2ui-layout").html(""), delete w2ui[this.name], this.trigger(a.extend(b, {
                    phase: "after"
                })), this.tmp.events && this.tmp.events.resize && a(window).off("resize", this.tmp.events.resize), !0)
            },
            lock: function (a, b, d) {
                if (c.indexOf(a) == -1) return void console.log("ERROR: First parameter needs to be the a valid panel name.");
                var e = Array.prototype.slice.call(arguments, 0);
                e[0] = "#layout_" + this.name + "_panel_" + a, w2utils.lock.apply(window, e)
            },
            unlock: function (a, b) {
                if (c.indexOf(a) == -1) return void console.log("ERROR: First parameter needs to be the a valid panel name.");
                var d = "#layout_" + this.name + "_panel_" + a;
                w2utils.unlock(d, b)
            }
        }, a.extend(b.prototype, w2utils.event), w2obj.layout = b
    }(jQuery);
var w2popup = {};
! function (a) {
    a.fn.w2popup = function (b, c) {
        null == b && (c = {}, b = "open"), a.isPlainObject(b) && (c = b, b = "open"), b = b.toLowerCase(), "load" === b && "string" == typeof c && (c = a.extend({
            url: c
        }, arguments.length > 2 ? arguments[2] : {})), "open" === b && null != c.url && (b = "load"), c = c || {};
        var d = {};
        if (a(this).length > 0 && "open" == b) {
            if (a(this).find("div[rel=title], div[rel=body], div[rel=buttons]").length > 0) {
                if (a("#w2ui-popup").length > 0) {
                    var e = a("#w2ui-popup").data("options");
                    w2popup._prev = {
                        template: w2popup._template,
                        title: e.title,
                        body: e.body,
                        buttons: e.buttons
                    }
                }
                w2popup._template = this, a(this).find("div[rel=title]").length > 0 && (d.title = a(this).find("div[rel=title]")), a(this).find("div[rel=body]").length > 0 && (d.body = a(this).find("div[rel=body]"), d.style = a(this).find("div[rel=body]")[0].style.cssText), a(this).find("div[rel=buttons]").length > 0 && (d.buttons = a(this).find("div[rel=buttons]"))
            } else d.title = "&#160;", d.body = a(this).html();
            0 !== parseInt(a(this).css("width")) && (d.width = parseInt(a(this).css("width")));
            var f = c.title || c.showClose || void 0 === c.showClose || c.showMax || void 0 === c.showMax;
            0 !== parseInt(a(this).css("height")) && (d.height = parseInt(a(this).css("height")) + (f ? 32 : 0))
        }
        return w2popup[b](a.extend({}, d, c))
    }, w2popup = {
        defaults: {
            title: "",
            body: "",
            buttons: "",
            style: "",
            color: "#000",
            opacity: .4,
            speed: .3,
            modal: !1,
            maximized: !1,
            keyboard: !0,
            width: 500,
            height: 300,
            showClose: !0,
            showMax: !1,
            transition: null
        },
        status: "closed",
        handlers: [],
        onOpen: null,
        onClose: null,
        onMax: null,
        onMin: null,
        onToggle: null,
        onKeydown: null,
        open: function (b) {
            function c(b) {
                return b || (b = window.event), w2popup.status = "moving", p.resizing = !0, p.isLocked = 1 == a("#w2ui-popup > lock").length, p.x = b.screenX, p.y = b.screenY, p.pos_x = a("#w2ui-popup").position().left, p.pos_y = a("#w2ui-popup").position().top, p.isLocked || w2popup.lock({
                    opacity: 0
                }), a(document).on("mousemove", p.mvMove), a(document).on("mouseup", p.mvStop), b.stopPropagation ? b.stopPropagation() : b.cancelBubble = !0, !!b.preventDefault && void b.preventDefault()
            }

            function d(b) {
                1 == p.resizing && (b || (b = window.event), p.div_x = b.screenX - p.x, p.div_y = b.screenY - p.y, a("#w2ui-popup").css(w2utils.cssPrefix({
                    transition: "none",
                    transform: "translate3d(" + p.div_x + "px, " + p.div_y + "px, 0px)"
                })))
            }

            function e(b) {
                1 == p.resizing && (b || (b = window.event), w2popup.status = "open", p.div_x = b.screenX - p.x, p.div_y = b.screenY - p.y, a("#w2ui-popup").css({
                    left: p.pos_x + p.div_x + "px",
                    top: p.pos_y + p.div_y + "px"
                }).css(w2utils.cssPrefix({
                    transition: "none",
                    transform: "translate3d(0px, 0px, 0px)"
                })), p.resizing = !1, a(document).off("mousemove", p.mvMove), a(document).off("mouseup", p.mvStop), p.isLocked || w2popup.unlock())
            }
            var f = this;
            if ("closing" == w2popup.status) return void setTimeout(function () {
                f.open.call(f, b)
            }, 100);
            var g = a("#w2ui-popup").data("options"),
                b = a.extend({}, this.defaults, g, {
                    title: "",
                    body: "",
                    buttons: ""
                }, b, {
                        maximized: !1
                    });
            setTimeout(function () {
                a("#w2ui-popup").data("options", b)
            }, 100), 0 === a("#w2ui-popup").length && (w2popup.onMax = null, w2popup.onMin = null, w2popup.onToggle = null, w2popup.onOpen = null, w2popup.onClose = null, w2popup.onKeydown = null), b.onOpen && (w2popup.onOpen = b.onOpen), b.onClose && (w2popup.onClose = b.onClose), b.onMax && (w2popup.onMax = b.onMax), b.onMin && (w2popup.onMin = b.onMin), b.onToggle && (w2popup.onToggle = b.onToggle), b.onKeydown && (w2popup.onKeydown = b.onKeydown), b.width = parseInt(b.width), b.height = parseInt(b.height);
            var h, i;
            void 0 == window.innerHeight ? (h = parseInt(document.documentElement.offsetWidth), i = parseInt(document.documentElement.offsetHeight), "IE7" === w2utils.engine && (h += 21, i += 4)) : (h = parseInt(window.innerWidth), i = parseInt(window.innerHeight)), h - 10 < b.width && (b.width = h - 10), i - 10 < b.height && (b.height = i - 10);
            var j = (i - b.height) / 2 * .6,
                k = (h - b.width) / 2;
            if (0 === a("#w2ui-popup").length) {
                var l = this.trigger({
                    phase: "before",
                    type: "open",
                    target: "popup",
                    options: b,
                    present: !1
                });
                if (l.isCancelled === !0) return;
                w2popup.status = "opening", w2popup.lockScreen(b);
                var m = "";
                b.showClose && (m += '<div class="w2ui-popup-button w2ui-popup-close" onmousedown="event.stopPropagation()" onclick="w2popup.close()">Close</div>'), b.showMax && (m += '<div class="w2ui-popup-button w2ui-popup-max" onmousedown="event.stopPropagation()" onclick="w2popup.toggle()">Max</div>');
                var n = '<div id="w2ui-popup" class="w2ui-popup" style="opacity: 0; left: ' + k + "px; top: " + j + "px;     width: " + parseInt(b.width) + "px; height: " + parseInt(b.height) + "px; " + w2utils.cssPrefix("transform", "scale(0.8)", !0) + '"></div>';
                a("body").append(n);
                var o = a("#w2ui-popup");
                if (o.find("div[rel=title], div[rel=body], div[rel=buttons]").length > 0) {
                    var p = o.find("div[rel=title]");
                    p.length > 0 && (b.title = p.html(), p.remove());
                    var p = o.find("div[rel=buttons]");
                    p.length > 0 && (b.buttons = p.html(), p.remove());
                    var p = o.find("div[rel=body]");
                    p.length > 0 ? b.body = p.html() : b.body = o.html()
                }
                var n = '<div class="w2ui-popup-title" style="' + (b.title ? "" : "display: none") + '">' + m + '</div><div class="w2ui-box" style="' + (b.title ? "" : "top: 0px !important;") + (b.buttons ? "" : "bottom: 0px !important;") + '">    <div class="w2ui-popup-body' + ("" !== !b.title ? " w2ui-popup-no-title" : "") + (b.buttons ? "" : " w2ui-popup-no-buttons") + '" style="' + b.style + '">    </div></div><div class="w2ui-popup-buttons" style="' + (b.buttons ? "" : "display: none") + '"></div><input class="w2ui-popup-hidden" style="position: absolute; top: -100px"/>';
                a("#w2ui-popup").html(n), b.title && a("#w2ui-popup popup-title").append(b.title), b.buttons && a("#w2ui-popup popup-buttons").append(b.buttons), b.body && a("#w2ui-popup popup-body").append(b.body), setTimeout(function () {
                    a("#w2ui-popup").css("opacity", "1").css(w2utils.cssPrefix({
                        transition: b.speed + "s opacity, " + b.speed + "s -webkit-transform",
                        transform: "scale(1)"
                    })), f.focus()
                }, 1), setTimeout(function () {
                    a("#w2ui-popup").css(w2utils.cssPrefix("transform", ""))
                }, 1e3 * b.speed), w2popup.status = "open", f.trigger(a.extend(l, {
                    phase: "after"
                }))
            } else {
                null == w2popup._prev && null != w2popup._template && f.restoreTemplate();
                var l = this.trigger({
                    phase: "before",
                    type: "open",
                    target: "popup",
                    options: b,
                    present: !0
                });
                if (l.isCancelled === !0) return;
                w2popup.status = "opening", null != g && (g.maximized || g.width == b.width && g.height == b.height || w2popup.resize(b.width, b.height), b.prevSize = b.width + "px:" + b.height + "px", b.maximized = g.maximized);
                var q = a("#w2ui-popup box").clone();
                if (q.removeClass("w2ui-box").addClass("w2ui-box-temp").find("popup-body").empty().append(b.body), "string" == typeof b.body && q.find("div[rel=title], div[rel=body], div[rel=buttons]").length > 0) {
                    var p = q.find("div[rel=title]");
                    p.length > 0 && (b.title = p.html(), p.remove());
                    var p = q.find("div[rel=buttons]");
                    p.length > 0 && (b.buttons = p.html(), p.remove());
                    var p = q.find("div[rel=body]");
                    p.length > 0 ? b.body = p.html() : b.body = q.html(), q.html(b.body)
                }
                a("#w2ui-popup box").after(q), b.buttons ? (a("#w2ui-popup popup-buttons").show().html("").append(b.buttons), a("#w2ui-popup popup-body").removeClass("w2ui-popup-no-buttons"), a("#w2ui-popup box, #w2ui-popup box-temp").css("bottom", "")) : (a("#w2ui-popup popup-buttons").hide().html(""), a("#w2ui-popup popup-body").addClass("w2ui-popup-no-buttons"), a("#w2ui-popup box, #w2ui-popup box-temp").css("bottom", "0px")), b.title ? (a("#w2ui-popup popup-title").show().html((b.showClose ? '<div class="w2ui-popup-button w2ui-popup-close" onmousedown="event.stopPropagation()" onclick="w2popup.close()">Close</div>' : "") + (b.showMax ? '<div class="w2ui-popup-button w2ui-popup-max" onmousedown="event.stopPropagation()" onclick="w2popup.toggle()">Max</div>' : "")).append(b.title), a("#w2ui-popup popup-body").removeClass("w2ui-popup-no-title"), a("#w2ui-popup box, #w2ui-popup box-temp").css("top", "")) : (a("#w2ui-popup popup-title").hide().html(""), a("#w2ui-popup popup-body").addClass("w2ui-popup-no-title"), a("#w2ui-popup box, #w2ui-popup box-temp").css("top", "0px"));
                var r = a("#w2ui-popup box")[0],
                    s = a("#w2ui-popup box-temp")[0];
                w2utils.transition(r, s, b.transition, function () {
                    f.restoreTemplate(), a(r).remove(), a(s).removeClass("w2ui-box-temp").addClass("w2ui-box");
                    var c = a(s).find("popup-body");
                    1 == c.length && (c[0].style.cssText = b.style), a("#w2ui-popup").data("prev-size", null), f.focus()
                }), w2popup.status = "open", f.trigger(a.extend(l, {
                    phase: "after"
                }))
            }
            b._last_focus = a(":focus"), b.keyboard && a(document).on("keydown", this.keydown);
            var p = {
                resizing: !1,
                mvMove: d,
                mvStop: e
            };
            return a("#w2ui-popup popup-title").on("mousedown", function (a) {
                w2popup.get().maximized || c(a)
            }), this
        },
        keydown: function (b) {
            var c = a("#w2ui-popup").data("options");
            if (!c || c.keyboard) {
                var d = w2popup.trigger({
                    phase: "before",
                    type: "keydown",
                    target: "popup",
                    options: c,
                    originalEvent: b
                });
                if (d.isCancelled !== !0) {
                    switch (b.keyCode) {
                        case 27:
                            b.preventDefault(), a("#w2ui-popup message").length > 0 ? w2popup.message() : w2popup.close()
                    }
                    w2popup.trigger(a.extend(d, {
                        phase: "after"
                    }))
                }
            }
        },
        close: function (b) {
            var c = this,
                b = a.extend({}, a("#w2ui-popup").data("options"), b);
            if (0 !== a("#w2ui-popup").length && "closed" != this.status) {
                if ("opening" == this.status) return void setTimeout(function () {
                    w2popup.close()
                }, 100);
                var d = this.trigger({
                    phase: "before",
                    type: "close",
                    target: "popup",
                    options: b
                });
                d.isCancelled !== !0 && (w2popup.status = "closing", a("#w2ui-popup").css("opacity", "0").css(w2utils.cssPrefix({
                    transition: b.speed + "s opacity, " + b.speed + "s -webkit-transform",
                    transform: "scale(0.9)"
                })), w2popup.unlockScreen(b), setTimeout(function () {
                    c.restoreTemplate(), a("#w2ui-popup").remove(), w2popup.status = "closed", b._last_focus.length > 0 && b._last_focus.focus(), c.trigger(a.extend(d, {
                        phase: "after"
                    }))
                }, 1e3 * b.speed), b.keyboard && a(document).off("keydown", this.keydown))
            }
        },
        toggle: function () {
            var b = this,
                c = a("#w2ui-popup").data("options"),
                d = this.trigger({
                    phase: "before",
                    type: "toggle",
                    target: "popup",
                    options: c
                });
            d.isCancelled !== !0 && (c.maximized === !0 ? w2popup.min() : w2popup.max(), setTimeout(function () {
                b.trigger(a.extend(d, {
                    phase: "after"
                }))
            }, 1e3 * c.speed + 50))
        },
        max: function () {
            var b = this,
                c = a("#w2ui-popup").data("options");
            if (c.maximized !== !0) {
                var d = this.trigger({
                    phase: "before",
                    type: "max",
                    target: "popup",
                    options: c
                });
                d.isCancelled !== !0 && (w2popup.status = "resizing", c.prevSize = a("#w2ui-popup").css("width") + ":" + a("#w2ui-popup").css("height"), w2popup.resize(1e4, 1e4, function () {
                    w2popup.status = "open", c.maximized = !0, b.trigger(a.extend(d, {
                        phase: "after"
                    })), a("#w2ui-popup grid, #w2ui-popup form, #w2ui-popup layout").each(function () {
                        var b = a(this).attr("name");
                        w2ui[b] && w2ui[b].resize && w2ui[b].resize()
                    })
                }))
            }
        },
        min: function () {
            var b = this,
                c = a("#w2ui-popup").data("options");
            if (c.maximized === !0) {
                var d = c.prevSize.split(":"),
                    e = this.trigger({
                        phase: "before",
                        type: "min",
                        target: "popup",
                        options: c
                    });
                e.isCancelled !== !0 && (w2popup.status = "resizing", w2popup.resize(parseInt(d[0]), parseInt(d[1]), function () {
                    w2popup.status = "open", c.maximized = !1, c.prevSize = null, b.trigger(a.extend(e, {
                        phase: "after"
                    })), a("#w2ui-popup grid, #w2ui-popup form, #w2ui-popup layout").each(function () {
                        var b = a(this).attr("name");
                        w2ui[b] && w2ui[b].resize && w2ui[b].resize()
                    })
                }))
            }
        },
        get: function () {
            return a("#w2ui-popup").data("options")
        },
        set: function (a) {
            w2popup.open(a)
        },
        clear: function () {
            a("#w2ui-popup popup-title").html(""), a("#w2ui-popup popup-body").html(""), a("#w2ui-popup popup-buttons").html("")
        },
        reset: function () {
            w2popup.open(w2popup.defaults)
        },
        load: function (b) {
            function c(c, d) {
                if (delete b.url, a("body").append('<div id="w2ui-tmp" style="display: none">' + c + "</div>"), null != d && a("#w2ui-tmp #" + d).length > 0 ? a("#w2ui-tmp #" + d).w2popup(b) : a("#w2ui-tmp > div").w2popup(b), a("#w2ui-tmp > style").length > 0) {
                    var e = a("<div>").append(a("#w2ui-tmp > style").clone()).html();
                    0 === a("#w2ui-popup #div-style").length && a("#w2ui-popup").append('<div id="div-style" style="position: absolute; left: -100; width: 1px"></div>'), a("#w2ui-popup #div-style").html(e)
                }
                a("#w2ui-tmp").remove()
            }
            if (w2popup.status = "loading", null == b.url) return void console.log("ERROR: The url parameter is empty.");
            var d = String(b.url).split("#"),
                e = d[0],
                f = d[1];
            null == b && (b = {});
            var g = a("#w2ui-popup").data(e);
            null != g ? c(g, f) : a.get(e, function (b, d, g) {
                c(g.responseText, f), a("#w2ui-popup").data(e, g.responseText)
            })
        },
        message: function (b) {
            var c = this;
            a().w2tag(), b || (b = {
                width: 200,
                height: 100
            });
            var d = parseInt(a("#w2ui-popup").width()),
                e = parseInt(a("#w2ui-popup").height());
            b.originalWidth = b.width, b.originalHeight = b.height, parseInt(b.width) < 10 && (b.width = 10), parseInt(b.height) < 10 && (b.height = 10), null == b.hideOnClick && (b.hideOnClick = !1);
            var f = a("#w2ui-popup").data("options") || {},
                g = parseInt(a("#w2ui-popup > popup-title").css("height"));
            (null == b.width || b.width > f.width - 10) && (b.width = f.width - 10), (null == b.height || b.height > f.height - g - 5) && (b.height = f.height - g - 5), b.originalHeight < 0 && (b.height = e + b.originalHeight - g), b.originalWidth < 0 && (b.width = d + 2 * b.originalWidth);
            var h = a("#w2ui-popup popup-title"),
                i = a("#w2ui-popup message").length;
            if ("" === a.trim(b.html) && "" === a.trim(b.body) && "" === a.trim(b.buttons)) {
                var j = a("#w2ui-popup #w2ui-message" + (i - 1)),
                    b = j.data("options") || {};
                j.css(w2utils.cssPrefix({
                    transition: "0.15s",
                    transform: "translateY(-" + b.height + "px)"
                })), 1 == i ? w2popup.unlock(150) : a("#w2ui-popup #w2ui-message" + (i - 2)).css("z-index", 1500), setTimeout(function () {
                    var a = j.data("prev_focus");
                    j.remove(), a && a.length > 0 ? a.focus() : c.focus(), "function" == typeof b.onClose && b.onClose()
                }, 150)
            } else {
                "" === a.trim(b.body) && "" === a.trim(b.buttons) || (b.html = '<div class="w2ui-message-body">' + b.body + '</div><div class="w2ui-message-buttons">' + b.buttons + "</div>"), a("#w2ui-popup message").css("z-index", 1390), h.css("z-index", 1501), a("#w2ui-popup box").before('<div id="w2ui-message' + i + '" class="w2ui-message" style="display: none; z-index: 1500; ' + (0 === h.length ? "top: 0px;" : "top: " + w2utils.getSize(h, "height") + "px;") + (null != b.width ? "width: " + b.width + "px; left: " + (d - b.width) / 2 + "px;" : "left: 10px; right: 10px;") + (null != b.height ? "height: " + b.height + "px;" : "bottom: 6px;") + w2utils.cssPrefix("transition", ".3s", !0) + '"' + (b.hideOnClick === !0 ? 'onclick="w2popup.message();"' : "") + "></div>"), a("#w2ui-popup #w2ui-message" + i).data("options", b).data("prev_focus", a(":focus"));
                var k = a("#w2ui-popup #w2ui-message" + i).css("display");
                a("#w2ui-popup #w2ui-message" + i).css(w2utils.cssPrefix({
                    transform: "none" == k ? "translateY(-" + b.height + "px)" : "translateY(0px)"
                })), "none" == k && (a("#w2ui-popup #w2ui-message" + i).show().html(b.html), setTimeout(function () {
                    a("#w2ui-popup #w2ui-message" + i).css(w2utils.cssPrefix({
                        transform: "none" == k ? "translateY(0px)" : "translateY(-" + b.height + "px)"
                    }))
                }, 1), 0 === i && w2popup.lock(), setTimeout(function () {
                    c.focus(), a("#w2ui-popup #w2ui-message" + i).css(w2utils.cssPrefix({
                        transition: "0s"
                    })), "function" == typeof b.onOpen && b.onOpen()
                }, 350))
            }
        },
        focus: function () {
            var b = null,
                c = a("#w2ui-popup"),
                d = "input:visible, button:visible, select:visible, textarea:visible";
            a(c).find(d).off(".keep-focus");
            var e = a("#w2ui-popup message").length - 1,
                f = a("#w2ui-popup #w2ui-message" + e);
            if (f.length > 0) {
                var g = a(f[f.length - 1]).find("button");
                g.length > 0 && g[0].focus(), b = f
            } else if (c.length > 0) {
                var g = c.find("popup-buttons button");
                g.length > 0 && g[0].focus(), b = c
            }
            a(b).find(d).on("blur.keep-focus", function (c) {
                setTimeout(function () {
                    var c = a(":focus");
                    if (c.length > 0 && !a(b).find(d).is(c) || c.hasClass("w2ui-popup-hidden")) {
                        var e = a(b).find(d);
                        e.length > 0 && e[0].focus()
                    }
                }, 1)
            })
        },
        lock: function (b, c) {
            var d = Array.prototype.slice.call(arguments, 0);
            d.unshift(a("#w2ui-popup")), w2utils.lock.apply(window, d)
        },
        unlock: function (b) {
            w2utils.unlock(a("#w2ui-popup"), b)
        },
        lockScreen: function (b) {
            return !(a("#w2ui-lock").length > 0) && (null == b && (b = a("#w2ui-popup").data("options")), null == b && (b = {}), b = a.extend({}, w2popup.defaults, b), a("body").append('<div id="w2ui-lock"     onmousewheel="if (event.stopPropagation) event.stopPropagation(); else event.cancelBubble = true; if (event.preventDefault) event.preventDefault(); else return false;"    style="position: ' + ("IE5" == w2utils.engine ? "absolute" : "fixed") + "; z-Index: 1199; left: 0px; top: 0px;            padding: 0px; margin: 0px; background-color: " + b.color + '; width: 100%; height: 100%; opacity: 0;"></div>'), setTimeout(function () {
                a("#w2ui-lock").css("opacity", b.opacity).css(w2utils.cssPrefix("transition", b.speed + "s opacity"))
            }, 1), 1 == b.modal ? (a("#w2ui-lock").on("mousedown", function () {
                a("#w2ui-lock").css("opacity", "0.6").css(w2utils.cssPrefix("transition", ".1s"))
            }), a("#w2ui-lock").on("mouseup", function () {
                setTimeout(function () {
                    a("#w2ui-lock").css("opacity", b.opacity).css(w2utils.cssPrefix("transition", ".1s"))
                }, 100)
            })) : a("#w2ui-lock").on("mousedown", function () {
                w2popup.close()
            }), !0)
        },
        unlockScreen: function (b) {
            return 0 !== a("#w2ui-lock").length && (null == b && (b = a("#w2ui-popup").data("options")), null == b && (b = {}), b = a.extend({}, w2popup.defaults, b), a("#w2ui-lock").css("opacity", "0").css(w2utils.cssPrefix("transition", b.speed + "s opacity")), setTimeout(function () {
                a("#w2ui-lock").remove()
            }, 1e3 * b.speed), !0)
        },
        resizeMessages: function () {
            a("#w2ui-popup").data("options");
            a("#w2ui-popup message").each(function () {
                var b = a(this).data("options"),
                    c = a("#w2ui-popup");
                parseInt(b.width) < 10 && (b.width = 10), parseInt(b.height) < 10 && (b.height = 10);
                var d = parseInt(c.find("> popup-title").css("height")),
                    e = parseInt(c.width()),
                    f = parseInt(c.height());
                b.width = b.originalWidth, b.width > e - 10 && (b.width = e - 10), b.height = b.originalHeight, b.height > f - d - 5 && (b.height = f - d - 5), b.originalHeight < 0 && (b.height = f + b.originalHeight - d), b.originalWidth < 0 && (b.width = e + 2 * b.originalWidth), a(this).css({
                    left: (e - b.width) / 2 + "px",
                    width: b.width + "px",
                    height: b.height + "px"
                })
            })
        },
        resize: function (b, c, d) {
            var e = this,
                f = a("#w2ui-popup").data("options");
            b = parseInt(b), c = parseInt(c);
            var g, h;
            void 0 == window.innerHeight ? (g = parseInt(document.documentElement.offsetWidth), h = parseInt(document.documentElement.offsetHeight), "IE7" === w2utils.engine && (g += 21, h += 4)) : (g = parseInt(window.innerWidth), h = parseInt(window.innerHeight)), g - 10 < b && (b = g - 10), h - 10 < c && (c = h - 10);
            var i = (h - c) / 2 * .6,
                j = (g - b) / 2;
            a("#w2ui-popup").css(w2utils.cssPrefix({
                transition: f.speed + "s width, " + f.speed + "s height, " + f.speed + "s left, " + f.speed + "s top"
            })).css({
                top: i,
                left: j,
                width: b,
                height: c
            });
            var k = setInterval(function () {
                e.resizeMessages()
            }, 10);
            setTimeout(function () {
                clearInterval(k), f.width = b, f.height = c, e.resizeMessages(), "function" == typeof d && d()
            }, 1e3 * f.speed + 50)
        },
        restoreTemplate: function () {
            var b = a("#w2ui-popup").data("options");
            if (null != b) {
                var c = w2popup._template,
                    d = b.title,
                    e = b.body,
                    f = b.buttons;
                if (w2popup._prev ? (c = w2popup._prev.template, d = w2popup._prev.title, e = w2popup._prev.body, f = w2popup._prev.buttons, delete w2popup._prev) : delete w2popup._template, null != c) {
                    var g = a(c);
                    if (0 === g.length) return;
                    "body" == a(e).attr("rel") ? (d && g.append(d), e && g.append(e), f && g.append(f)) : g.append(e)
                }
            }
        }
    }, a.extend(w2popup, w2utils.event)
}(jQuery);
var w2alert = function (a, b, c) {
    var d = jQuery;
    return null == b && (b = w2utils.lang("Notification")), d("#w2ui-popup").length > 0 && "closing" != w2popup.status ? w2popup.message({
        width: 400,
        height: 170,
        body: '<div class="w2ui-centered w2ui-alert-msg" style="font-size: 13px;">' + a + "</div>",
        buttons: '<button onclick="w2popup.message();" class="w2ui-popup-btn w2ui-btn">' + w2utils.lang("Ok") + "</button>",
        onOpen: function () {
            d("#w2ui-popup message popup-btn").focus()
        },
        onClose: function () {
            "function" == typeof c && c()
        }
    }) : w2popup.open({
        width: 450,
        height: 220,
        showMax: !1,
        showClose: !1,
        title: b,
        body: '<div class="w2ui-centered w2ui-alert-msg" style="font-size: 13px;">' + a + "</div>",
        buttons: '<button onclick="w2popup.close();" class="w2ui-popup-btn w2ui-btn">' + w2utils.lang("Ok") + "</button>",
        onOpen: function (a) {
            setTimeout(function () {
                d("#w2ui-popup popup-btn").focus()
            }, 1)
        },
        onKeydown: function (a) {
            d("#w2ui-popup popup-btn").focus().addClass("clicked")
        },
        onClose: function () {
            "function" == typeof c && c()
        }
    }), {
            ok: function (a) {
                return c = a, this
            },
            done: function (a) {
                return c = a, this
            }
        }
},
    w2confirm = function (a, b, c) {
        var d = jQuery,
            e = {},
            f = {
                msg: "",
                title: w2utils.lang("Confirmation"),
                width: d("#w2ui-popup").length > 0 ? 400 : 450,
                height: d("#w2ui-popup").length > 0 ? 170 : 220,
                yes_text: "Yes",
                yes_class: "",
                yes_style: "",
                yes_callBack: null,
                no_text: "No",
                no_class: "",
                no_style: "",
                no_callBack: null,
                focus_to_no: !1,
                callBack: null
            };
        return 1 == arguments.length && "object" == typeof a ? d.extend(e, f, a) : "function" == typeof b ? d.extend(e, f, {
            msg: a,
            callBack: b
        }) : d.extend(e, f, {
            msg: a,
            title: b,
            callBack: c
        }), "object" == typeof e.btn_yes && (e.yes_text = e.btn_yes.text || e.yes_text, e.yes_class = e.btn_yes.class || e.yes_class, e.yes_style = e.btn_yes.style || e.yes_style, e.yes_callBack = e.btn_yes.callBack || e.yes_callBack), "object" == typeof e.btn_no && (e.no_text = e.btn_no.text || e.no_text, e.no_class = e.btn_no.class || e.no_class, e.no_style = e.btn_no.style || e.no_style, e.no_callBack = e.btn_no.callBack || e.no_callBack), d("#w2ui-popup").length > 0 && "closing" != w2popup.status && w2popup.get() ? (e.width > w2popup.get().width && (e.width = w2popup.get().width), e.height > w2popup.get().height - 50 && (e.height = w2popup.get().height - 50), w2popup.message({
            width: e.width,
            height: e.height,
            body: '<div class="w2ui-centered w2ui-confirm-msg" style="font-size: 13px;">' + e.msg + "</div>",
            buttons: w2utils.settings.macButtonOrder ? '<button id="No" class="w2ui-popup-btn w2ui-btn ' + e.no_class + '" style="' + e.no_style + '">' + w2utils.lang(e.no_text) + '</button><button id="Yes" class="w2ui-popup-btn w2ui-btn ' + e.yes_class + '" style="' + e.yes_style + '">' + w2utils.lang(e.yes_text) + "</button>" : '<button id="Yes" class="w2ui-popup-btn w2ui-btn ' + e.yes_class + '" style="' + e.yes_style + '">' + w2utils.lang(e.yes_text) + '</button><button id="No" class="w2ui-popup-btn w2ui-btn ' + e.no_class + '" style="' + e.no_style + '">' + w2utils.lang(e.no_text) + "</button>",
            onOpen: function () {
                d("#w2ui-popup message btn").on("click.w2confirm", function (a) {
                    w2popup._confirm_btn = a.target.id, w2popup.message()
                })
            },
            onClose: function () {
                d("#w2ui-popup message btn").off("click.w2confirm"), setTimeout(function () {
                    "function" == typeof e.callBack && e.callBack(w2popup._confirm_btn), "Yes" == w2popup._confirm_btn && "function" == typeof e.yes_callBack && e.yes_callBack(), "No" == w2popup._confirm_btn && "function" == typeof e.no_callBack && e.no_callBack()
                }, 300)
            }
        })) : (w2utils.isInt(e.height) || (e.height = e.height + 50), w2popup.open({
            width: e.width,
            height: e.height,
            title: e.title,
            modal: !0,
            showClose: !1,
            body: '<div class="w2ui-centered w2ui-confirm-msg" style="font-size: 13px;">' + e.msg + "</div>",
            buttons: w2utils.settings.macButtonOrder ? '<button id="No" class="w2ui-popup-btn w2ui-btn ' + e.no_class + '" style="' + e.no_style + '">' + w2utils.lang(e.no_text) + '</button><button id="Yes" class="w2ui-popup-btn w2ui-btn ' + e.yes_class + '" style="' + e.yes_style + '">' + w2utils.lang(e.yes_text) + "</button>" : '<button id="Yes" class="w2ui-popup-btn w2ui-btn ' + e.yes_class + '" style="' + e.yes_style + '">' + w2utils.lang(e.yes_text) + '</button><button id="No" class="w2ui-popup-btn w2ui-btn ' + e.no_class + '" style="' + e.no_style + '">' + w2utils.lang(e.no_text) + "</button>",
            onOpen: function (a) {
                setTimeout(function () {
                    d("#w2ui-popup popup-btn").on("click", function (a) {
                        w2popup.close(), "function" == typeof e.callBack && e.callBack(a.target.id), "Yes" == a.target.id && "function" == typeof e.yes_callBack && e.yes_callBack(), "No" == a.target.id && "function" == typeof e.no_callBack && e.no_callBack()
                    }), e.focus_to_no ? d("#w2ui-popup popup-btn#No").focus() : d("#w2ui-popup popup-btn#Yes").focus()
                }, 1)
            },
            onKeydown: function (a) {
                if (0 === d("#w2ui-popup message").length) switch (a.originalEvent.keyCode) {
                    case 13:
                        d("#w2ui-popup popup-btn#Yes").focus().addClass("clicked"), w2popup.close();
                        break;
                    case 27:
                        d("#w2ui-popup popup-btn#No").focus().click(), w2popup.close()
                }
            }
        })), {
                yes: function (a) {
                    return e.yes_callBack = a, this
                },
                no: function (a) {
                    return e.no_callBack = a, this
                }
            }
    },
    w2prompt = function (a, b, c) {
        var d = jQuery,
            e = {},
            f = {
                label: "",
                value: "",
                attrs: "",
                textarea: !1,
                title: w2utils.lang("Notification"),
                ok_text: w2utils.lang("Ok"),
                cancel_text: w2utils.lang("Cancel"),
                width: d("#w2ui-popup").length > 0 ? 400 : 450,
                height: d("#w2ui-popup").length > 0 ? 170 : 220,
                callBack: null
            };
        return 1 == arguments.length && "object" == typeof a ? d.extend(e, f, a) : "function" == typeof b ? d.extend(e, f, {
            label: a,
            callBack: b
        }) : d.extend(e, f, {
            label: a,
            title: b,
            callBack: c
        }), d("#w2ui-popup").length > 0 && "closing" != w2popup.status && w2popup.get() ? (e.width > w2popup.get().width && (e.width = w2popup.get().width), e.height > w2popup.get().height - 50 && (e.height = w2popup.get().height - 50), w2popup.message({
            width: e.width,
            height: e.height,
            body: e.textarea ? '<div class="w2ui-prompt" style="font-size: 13px; padding: 15px 10px 0 10px;">  <div style="padding-bottom: 5px">' + e.label + '</div>  <textarea id="w2prompt" ' + e.attrs + "></textarea></div>" : '<div class="w2ui-prompt w2ui-centered" style="font-size: 13px;">  <label style="margin-right: 10px;">' + e.label + '</label>  <input id="w2prompt" ' + e.attrs + "></div>",
            buttons: w2utils.settings.macButtonOrder ? '<button id="Cancel" class="w2ui-popup-btn w2ui-btn">' + e.cancel_text + '</button><button id="Ok" class="w2ui-popup-btn w2ui-btn">' + e.ok_text + "</button>" : '<button id="Ok" class="w2ui-popup-btn w2ui-btn">' + e.ok_text + '</button><button id="Cancel" class="w2ui-popup-btn w2ui-btn">' + e.cancel_text + "</button>",
            onOpen: function () {
                d("#w2prompt").val(e.value), d("#w2ui-popup message btn#Ok").on("click.w2prompt", function (a) {
                    w2popup._prompt_value = d("#w2prompt").val(), w2popup.message()
                }), d("#w2ui-popup message btn#Cancel").on("click.w2prompt", function (a) {
                    w2popup._prompt_value = null, w2popup.message()
                }), setTimeout(function () {
                    d("#w2prompt").focus()
                }, 100)
            },
            onClose: function () {
                d("#w2ui-popup message btn").off("click.w2prompt"), setTimeout(function () {
                    "function" == typeof e.callBack && null != w2popup._prompt_value && e.callBack(w2popup._prompt_value)
                }, 300)
            }
        })) : (w2utils.isInt(e.height) || (e.height = e.height + 50), w2popup.open({
            width: e.width,
            height: e.height,
            title: e.title,
            modal: !0,
            showClose: !1,
            body: e.textarea ? '<div class="w2ui-prompt" style="font-size: 13px; padding: 15px 10px 0 10px;">  <div style="padding-bottom: 5px">' + e.label + '</div>  <textarea id="w2prompt" ' + e.attrs + "></textarea></div>" : '<div class="w2ui-prompt w2ui-centered" style="font-size: 13px;">  <label style="margin-right: 10px;">' + e.label + '</label>  <input id="w2prompt" ' + e.attrs + "></div>",
            buttons: w2utils.settings.macButtonOrder ? '<button id="Cancel" class="w2ui-popup-btn w2ui-btn">' + e.cancel_text + '</button><button id="Ok" class="w2ui-popup-btn w2ui-btn">' + e.ok_text + "</button>" : '<button id="Ok" class="w2ui-popup-btn w2ui-btn">' + e.ok_text + '</button><button id="Cancel" class="w2ui-popup-btn w2ui-btn">' + e.cancel_text + "</button>",
            onOpen: function (a) {
                setTimeout(function () {
                    d("#w2prompt").val(e.value), d("#w2prompt").w2field("text"), d("#w2ui-popup popup-btn#Ok").on("click", function (a) {
                        w2popup._prompt_value = d("#w2prompt").val(), w2popup.close(), "function" == typeof e.callBack && e.callBack(w2popup._prompt_value)
                    }), d("#w2ui-popup popup-btn#Cancel").on("click", function (a) {
                        w2popup._prompt_value = null, w2popup.close()
                    }), d("#w2ui-popup popup-btn#Ok"), setTimeout(function () {
                        d("#w2prompt").focus()
                    }, 100)
                }, 1)
            },
            onKeydown: function (a) {
                if (0 === d("#w2ui-popup message").length) switch (a.originalEvent.keyCode) {
                    case 13:
                        d("#w2ui-popup popup-btn#Ok").focus().addClass("clicked"), w2popup.close();
                        break;
                    case 27:
                        w2popup.close()
                }
            }
        })), {
                change: function (a) {
                    return d("#w2prompt").on("keyup", a).keyup(), this
                },
                ok: function (a) {
                    return e.callBack = a, this
                }
            }
    };
! function (a) {
    var b = function (b) {
        this.box = null, this.name = null, this.active = null, this.flow = "down", this.tooltip = "top|left", this.tabs = [], this.routeData = {}, this.right = "", this.style = "", a.extend(this, {
            handlers: []
        }), a.extend(!0, this, w2obj.tabs, b)
    };
    a.fn.w2tabs = function (c) {
        if (a.isPlainObject(c)) {
            if (!w2utils.checkName(c, "w2tabs")) return;
            for (var d = c.tabs || [], e = new b(c), f = 0; f < d.length; f++) e.tabs[f] = a.extend({}, b.prototype.tab, d[f]);
            return 0 !== a(this).length && e.render(a(this)[0]), w2ui[e.name] = e, e
        }
        var g = w2ui[a(this).attr("name")];
        return g ? arguments.length > 0 ? (g[c] && g[c].apply(g, Array.prototype.slice.call(arguments, 1)), this) : g : null
    }, b.prototype = {
        onClick: null,
        onClose: null,
        onRender: null,
        onRefresh: null,
        onResize: null,
        onDestroy: null,
        tab: {
            id: null,
            text: null,
            route: null,
            hidden: !1,
            disabled: !1,
            closable: !1,
            tooltip: null,
            style: "",
            onClick: null,
            onRefresh: null,
            onClose: null
        },
        add: function (a) {
            return this.insert(null, a)
        },
        insert: function (c, d) {
            a.isArray(d) || (d = [d]);
            for (var e = 0; e < d.length; e++) {
                if (null == d[e].id) return void console.log('ERROR: The parameter "id" is required but not supplied. (obj: ' + this.name + ")");
                if (!w2utils.checkUniqueId(d[e].id, this.tabs, "tabs", this.name)) return;
                var f = a.extend({}, b.prototype.tab, d[e]);
                if (null == c) this.tabs.push(f);
                else {
                    var g = this.get(c, !0);
                    this.tabs = this.tabs.slice(0, g).concat([f], this.tabs.slice(g))
                }
                this.refresh(d[e].id), this.resize()
            }
        },
        remove: function () {
            for (var b = 0, c = 0; c < arguments.length; c++) {
                var d = this.get(arguments[c]);
                if (!d) return !1;
                b++ , this.tabs.splice(this.get(d.id, !0), 1), a(this.box).find("#tabs_" + this.name + "_tab_" + w2utils.escapeId(d.id)).remove()
            }
            return this.resize(), b
        },
        select: function (a) {
            return this.active != a && null != this.get(a) && (this.active = a, this.refresh(), !0)
        },
        set: function (b, c) {
            var d = this.get(b, !0);
            return null != d && (a.extend(this.tabs[d], c), this.refresh(b), !0)
        },
        get: function (a, b) {
            if (0 === arguments.length) {
                for (var c = [], d = 0; d < this.tabs.length; d++) null != this.tabs[d].id && c.push(this.tabs[d].id);
                return c
            }
            for (var e = 0; e < this.tabs.length; e++)
                if (this.tabs[e].id == a) return b === !0 ? e : this.tabs[e];
            return null
        },
        show: function () {
            for (var a = this, b = 0, c = [], d = 0; d < arguments.length; d++) {
                var e = this.get(arguments[d]);
                e && e.hidden !== !1 && (b++ , e.hidden = !1, c.push(e.id))
            }
            return setTimeout(function () {
                for (var b = 0; b < c.length; b++) a.refresh(c[b]);
                a.resize()
            }, 15), b
        },
        hide: function () {
            for (var a = this, b = 0, c = [], d = 0; d < arguments.length; d++) {
                var e = this.get(arguments[d]);
                e && e.hidden !== !0 && (b++ , e.hidden = !0, c.push(e.id))
            }
            return setTimeout(function () {
                for (var b = 0; b < c.length; b++) a.refresh(c[b]);
                a.resize()
            }, 15), b
        },
        enable: function () {
            for (var a = this, b = 0, c = [], d = 0; d < arguments.length; d++) {
                var e = this.get(arguments[d]);
                e && e.disabled !== !1 && (b++ , e.disabled = !1, c.push(e.id))
            }
            return setTimeout(function () {
                for (var b = 0; b < c.length; b++) a.refresh(c[b]);
            }, 15), b
        },
        disable: function () {
            for (var a = this, b = 0, c = [], d = 0; d < arguments.length; d++) {
                var e = this.get(arguments[d]);
                e && e.disabled !== !0 && (b++ , e.disabled = !0, c.push(e.id))
            }
            return setTimeout(function () {
                for (var b = 0; b < c.length; b++) a.refresh(c[b])
            }, 15), b
        },
        tooltipShow: function (b, c, d) {
            if (null != this.tooltip) {
                var e = a(this.box).find("#tabs_" + this.name + "_tab_" + w2utils.escapeId(b)),
                    f = this.get(b),
                    g = this.tooltip,
                    h = f.tooltip;
                "function" == typeof h && (h = h.call(this, f)), e.prop("_mouse_over", !0), setTimeout(function () {
                    e.prop("_mouse_over") === !0 && e.prop("_mouse_tooltip") !== !0 && (e.prop("_mouse_tooltip", !0), e.w2tag(w2utils.lang(h), {
                        position: g
                    })), 1 == d && e.w2tag(w2utils.lang(h), {
                        position: g
                    })
                }, 1)
            }
        },
        tooltipHide: function (b) {
            if (null != this.tooltip) {
                var c = a(this.box).find("#tabs_" + this.name + "_tab_" + w2utils.escapeId(b));
                this.get(b);
                c.removeProp("_mouse_over"), setTimeout(function () {
                    c.prop("_mouse_over") !== !0 && c.prop("_mouse_tooltip") === !0 && (c.removeProp("_mouse_tooltip"), c.w2tag())
                }, 1)
            }
        },
        refresh: function (b) {
            var c = (new Date).getTime();
            "up" == this.flow ? a(this.box).addClass("w2ui-tabs-up") : a(this.box).removeClass("w2ui-tabs-up");
            var d = this.trigger({
                phase: "before",
                type: "refresh",
                target: null != b ? b : this.name,
                object: this.get(b)
            });
            if (d.isCancelled !== !0) {
                if (null == b)
                    for (var e = 0; e < this.tabs.length; e++) this.refresh(this.tabs[e].id);
                else {
                    var f = this.get(b);
                    if (null == f) return !1;
                    null == f.text && null != f.caption && (f.text = f.caption), null == f.tooltip && null != f.hint && (f.tooltip = f.hint);
                    var g = f.text;
                    "function" == typeof g && (g = g.call(this, f)), null == g && (g = "");
                    var h = a(this.box).find("#tabs_" + this.name + "_tab_" + w2utils.escapeId(f.id)),
                        i = "";
                    f.closable && !f.disabled && (i = '<div class="w2ui-tab-close"     onmouseover = "w2ui[\'' + this.name + "'].tooltipShow('" + f.id + "', event);\"    onmouseout  = \"w2ui['" + this.name + "'].tooltipHide('" + f.id + "', event);\"    onclick=\"w2ui['" + this.name + "'].animateClose('" + f.id + "', event);\"></div>");
                    var j = i + '    <div class="w2ui-tab' + (this.active === f.id ? " active" : "") + (f.closable ? " closable" : "") + (f.class ? " " + f.class : "") + '" style="' + f.style + '"         onmouseover = "' + (f.disabled ? "" : "w2ui['" + this.name + "'].tooltipShow('" + f.id + "', event);") + '"        onmouseout  = "' + (f.disabled ? "" : "w2ui['" + this.name + "'].tooltipHide('" + f.id + "', event);") + '"        onclick="w2ui[\'' + this.name + "'].click('" + f.id + "', event);\">" + w2utils.lang(g) + "</div>";
                    if (0 === h.length) {
                        var k = "";
                        f.hidden && (k += "display: none;"), f.disabled && (k += "opacity: 0.2;");
                        var l = '<td id="tabs_' + this.name + "_tab_" + f.id + '" style="' + k + '" valign="middle">' + j + "</td>";
                        this.get(b, !0) !== this.tabs.length - 1 && a(this.box).find("#tabs_" + this.name + "_tab_" + w2utils.escapeId(this.tabs[parseInt(this.get(b, !0)) + 1].id)).length > 0 ? a(this.box).find("#tabs_" + this.name + "_tab_" + w2utils.escapeId(this.tabs[parseInt(this.get(b, !0)) + 1].id)).before(l) : a(this.box).find("#tabs_" + this.name + "_right").before(l)
                    } else h.html(j), f.hidden ? h.css("display", "none") : h.css("display", ""), f.disabled ? h.css({
                        opacity: "0.2"
                    }) : h.css({
                        opacity: "1"
                    })
                }
                return a("#tabs_" + this.name + "_right").html(this.right), this.trigger(a.extend(d, {
                    phase: "after"
                })), (new Date).getTime() - c
            }
        },
        render: function (b) {
            var c = (new Date).getTime(),
                d = this.trigger({
                    phase: "before",
                    type: "render",
                    target: this.name,
                    box: b
                });
            if (d.isCancelled !== !0) {
                if (null != b && (a(this.box).find("> table #tabs_" + this.name + "_right").length > 0 && a(this.box).removeAttr("name").removeClass("w2ui-reset w2ui-tabs").html(""), this.box = b), !this.box) return !1;
                var e = '<div class="w2ui-scroll-wrapper" onmousedown="var el=w2ui[\'' + this.name + '\']; if (el) el.resize();"><table cellspacing="0" cellpadding="1" width="100%"><tbody>    <tr><td width="100%" id="tabs_' + this.name + '_right" align="right">' + this.right + '</td></tr></tbody></table></div><div class="w2ui-scroll-left" onclick="var el=w2ui[\'' + this.name + "']; if (el) el.scroll('left');\"></div><div class=\"w2ui-scroll-right\" onclick=\"var el=w2ui['" + this.name + "']; if (el) el.scroll('right');\"></div>";
                return a(this.box).attr("name", this.name).addClass("w2ui-reset w2ui-tabs").html(e), a(this.box).length > 0 && (a(this.box)[0].style.cssText += this.style), this.trigger(a.extend(d, {
                    phase: "after"
                })), this.refresh(), this.resize(), (new Date).getTime() - c
            }
        },
        scroll: function (b) {
            var c, d, e, f = a(this.box),
                g = this,
                h = f.find("scroll-wrapper"),
                i = h.scrollLeft();
            switch (b) {
                case "left":
                    c = h.outerWidth(), d = h.find(":first").outerWidth(), e = i - c + 50, e <= 0 && (e = 0), h.animate({
                        scrollLeft: e
                    }, 300);
                    break;
                case "right":
                    c = h.outerWidth(), d = h.find(":first").outerWidth(), e = i + c - 50, e >= d - c && (e = d - c), h.animate({
                        scrollLeft: e
                    }, 300)
            }
            setTimeout(function () {
                g.resize()
            }, 350)
        },
        resize: function () {
            var b = (new Date).getTime(),
                c = this.trigger({
                    phase: "before",
                    type: "resize",
                    target: this.name
                });
            if (c.isCancelled !== !0) {
                var d = a(this.box);
                d.find("scroll-left, scroll-right").hide();
                var e = d.find("scroll-wrapper");
                return e.find(":first").outerWidth() > e.outerWidth() && (e.scrollLeft() > 0 && d.find("scroll-left").show(), e.scrollLeft() < e.find(":first").outerWidth() - e.outerWidth() && d.find("scroll-right").show()), this.trigger(a.extend(c, {
                    phase: "after"
                })), (new Date).getTime() - b
            }
        },
        destroy: function () {
            var b = this.trigger({
                phase: "before",
                type: "destroy",
                target: this.name
            });
            b.isCancelled !== !0 && (a(this.box).find("> table #tabs_" + this.name + "_right").length > 0 && a(this.box).removeAttr("name").removeClass("w2ui-reset w2ui-tabs").html(""), delete w2ui[this.name], this.trigger(a.extend(b, {
                phase: "after"
            })))
        },
        click: function (b, c) {
            var d = this.get(b);
            if (null == d || d.disabled) return !1;
            var e = this.trigger({
                phase: "before",
                type: "click",
                target: b,
                tab: d,
                object: d,
                originalEvent: c
            });
            if (e.isCancelled !== !0) {
                if (a(this.box).find("#tabs_" + this.name + "_tab_" + w2utils.escapeId(this.active) + " tab").removeClass("active"), this.active = d.id, "string" == typeof d.route) {
                    var f = "" !== d.route ? String("/" + d.route).replace(/\/{2,}/g, "/") : "",
                        g = w2utils.parseRoute(f);
                    if (g.keys.length > 0)
                        for (var h = 0; h < g.keys.length; h++) null != this.routeData[g.keys[h].name] && (f = f.replace(new RegExp(":" + g.keys[h].name, "g"), this.routeData[g.keys[h].name]));
                    setTimeout(function () {
                        window.location.hash = f
                    }, 1)
                }
                this.trigger(a.extend(e, {
                    phase: "after"
                })), this.refresh(b)
            }
        },
        animateClose: function (b, c) {
            var d = this.get(b);
            if (null == d || d.disabled) return !1;
            var e = this.trigger({
                phase: "before",
                type: "close",
                target: b,
                object: this.get(b),
                originalEvent: c
            });
            if (e.isCancelled !== !0) {
                var f = this;
                a(this.box).find("#tabs_" + this.name + "_tab_" + w2utils.escapeId(d.id)).css(w2utils.cssPrefix("transition", ".2s")).css("opacity", "0"), setTimeout(function () {
                    var b = a(f.box).find("#tabs_" + f.name + "_tab_" + w2utils.escapeId(d.id)).width();
                    a(f.box).find("#tabs_" + f.name + "_tab_" + w2utils.escapeId(d.id)).html('<div style="width: ' + b + "px; " + w2utils.cssPrefix("transition", ".2s", !0) + '"></div>'), setTimeout(function () {
                        a(f.box).find("#tabs_" + f.name + "_tab_" + w2utils.escapeId(d.id)).find(":first-child").css({
                            width: "0px"
                        })
                    }, 50)
                }, 200), setTimeout(function () {
                    f.remove(b)
                }, 450), this.trigger(a.extend(e, {
                    phase: "after"
                })), this.refresh()
            }
        },
        animateInsert: function (b, c) {
            if (null != this.get(b) && a.isPlainObject(c) && w2utils.checkUniqueId(c.id, this.tabs, "tabs", this.name)) {
                var d = a(this.box).find("#tabs_" + this.name + "_tab_" + w2utils.escapeId(c.id));
                if (0 === d.length) {
                    null == c.text && null != c.caption && (c.text = c.caption);
                    var e = '<div id="_tmp_tabs" class="w2ui-reset w2ui-tabs" style="position: absolute; top: -1000px;"><table cellspacing="0" cellpadding="1" width="100%"><tbody><tr><td id="_tmp_simple_tab" style="" valign="middle">' + (c.closable ? '<div class="w2ui-tab-close"></div>' : "") + '    <div class="w2ui-tab ' + (this.active === c.id ? "active" : "") + '">' + c.text + "</div></td></tr></tbody></table></div>";
                    a("body").append(e);
                    var f = '<div style="width: 1px; ' + w2utils.cssPrefix("transition", ".2s", !0) + '">&#160;</div>',
                        g = "";
                    c.hidden && (g += "display: none;"), c.disabled && (g += "opacity: 0.2;");
                    var h = '<td id="tabs_' + this.name + "_tab_" + c.id + '" style="' + g + '" valign="middle">' + f + "</td>";
                    this.get(b, !0) !== this.tabs.length && a(this.box).find("#tabs_" + this.name + "_tab_" + w2utils.escapeId(this.tabs[parseInt(this.get(b, !0))].id)).length > 0 ? a(this.box).find("#tabs_" + this.name + "_tab_" + w2utils.escapeId(this.tabs[parseInt(this.get(b, !0))].id)).before(h) : a(this.box).find("#tabs_" + this.name + "_right").before(h);
                    var i = this;
                    setTimeout(function () {
                        var b = a("#_tmp_simple_tab").width();
                        a("#_tmp_tabs").remove(), a("#tabs_" + i.name + "_tab_" + w2utils.escapeId(c.id) + " > div").css("width", b + "px")
                    }, 1), setTimeout(function () {
                        i.insert(b, c)
                    }, 200)
                }
            }
        }
    }, a.extend(b.prototype, w2utils.event), w2obj.tabs = b
}(jQuery),
    function (a) {
        var b = function (b) {
            this.box = null, this.name = null, this.routeData = {}, this.items = [], this.right = "", this.tooltip = "top|left", a.extend(!0, this, w2obj.toolbar, b)
        };
        a.fn.w2toolbar = function (c) {
            if (a.isPlainObject(c)) {
                if (!w2utils.checkName(c, "w2toolbar")) return;
                var d = c.items || [],
                    e = new b(c);
                a.extend(e, {
                    items: [],
                    handlers: []
                });
                for (var f = 0; f < d.length; f++)
                    if (e.items[f] = a.extend({}, b.prototype.item, d[f]), "menu-check" == e.items[f].type) {
                        var g = e.items[f];
                        if (Array.isArray(g.selected) || (g.selected = []), Array.isArray(g.items))
                            for (var h = 0; h < g.items.length; h++) {
                                var i = g.items[h];
                                i.checked && g.selected.indexOf(i.id) == -1 && g.selected.push(i.id), i.checked || g.selected.indexOf(i.id) == -1 || (i.checked = !0), null == i.checked && (i.checked = !1)
                            }
                    } else if ("menu-radio" == e.items[f].type) {
                        var g = e.items[f];
                        if (Array.isArray(g.items))
                            for (var h = 0; h < g.items.length; h++) {
                                var i = g.items[h];
                                i.checked && null == g.selected ? g.selected = i.id : i.checked = !1, i.checked || g.selected != i.id || (i.checked = !0), null == i.checked && (i.checked = !1)
                            }
                    }
                return 0 !== a(this).length && e.render(a(this)[0]), w2ui[e.name] = e, e
            }
            var j = w2ui[a(this).attr("name")];
            return j ? arguments.length > 0 ? (j[c] && j[c].apply(j, Array.prototype.slice.call(arguments, 1)), this) : j : null
        }, b.prototype = {
            onClick: null,
            onRender: null,
            onRefresh: null,
            onResize: null,
            onDestroy: null,
            item: {
                id: null,
                type: "button",
                text: null,
                html: "",
                tooltip: null,
                count: null,
                hidden: !1,
                disabled: !1,
                checked: !1,
                img: null,
                icon: null,
                route: null,
                arrow: !0,
                style: null,
                color: null,
                transparent: null,
                advanced: null,
                group: null,
                items: null,
                selected: null,
                overlay: {},
                onClick: null,
                onRefresh: null
            },
            add: function (a) {
                this.insert(null, a)
            },
            insert: function (c, d) {
                a.isArray(d) || (d = [d]);
                for (var e = 0; e < d.length; e++) {
                    if (null == d[e].type) return void console.log('ERROR: The parameter "type" is required but not supplied in w2toolbar.add() method.');
                    if (a.inArray(String(d[e].type), ["button", "check", "radio", "drop", "menu", "menu-radio", "menu-check", "color", "text-color", "break", "html", "spacer"]) == -1) return void console.log('ERROR: The parameter "type" should be one of the following [button, check, radio, drop, menu, break, html, spacer] in w2toolbar.add() method.');
                    if (null == d[e].id && "break" != d[e].type && "spacer" != d[e].type) return void console.log('ERROR: The parameter "id" is required but not supplied in w2toolbar.add() method.');
                    if (!w2utils.checkUniqueId(d[e].id, this.items, "toolbar items", this.name)) return;
                    var f = a.extend({}, b.prototype.item, d[e]);
                    if (null == c) this.items.push(f);
                    else {
                        var g = this.get(c, !0);
                        this.items = this.items.slice(0, g).concat([f], this.items.slice(g))
                    }
                    this.refresh(f.id), this.resize()
                }
            },
            remove: function () {
                for (var b = 0, c = 0; c < arguments.length; c++) {
                    var d = this.get(arguments[c]);
                    if (d && String(arguments[c]).indexOf(":") == -1) {
                        b++ , a(this.box).find("#tb_" + this.name + "_item_" + w2utils.escapeId(d.id)).remove();
                        var e = this.get(d.id, !0);
                        null != e && this.items.splice(e, 1)
                    }
                }
                return this.resize(), b
            },
            set: function (b, c) {
                var d = this.get(b);
                return null != d && (a.extend(d, c), this.refresh(String(b).split(":")[0]), !0)
            },
            get: function (a, b) {
                if (0 === arguments.length) {
                    for (var c = [], d = 0; d < this.items.length; d++) null != this.items[d].id && c.push(this.items[d].id);
                    return c
                }
                for (var e = String(a).split(":"), f = 0; f < this.items.length; f++) {
                    var g = this.items[f];
                    if (["menu", "menu-radio", "menu-check"].indexOf(g.type) != -1 && 2 == e.length && g.id == e[0])
                        for (var h = 0; h < g.items.length; h++) {
                            var i = g.items[h];
                            if (i.id == e[1] || null == i.id && i.text == e[1]) return 1 == b ? h : i
                        } else if (g.id == e[0]) return 1 == b ? f : g
                }
                return null
            },
            show: function () {
                for (var a = this, b = 0, c = [], d = 0; d < arguments.length; d++) {
                    var e = this.get(arguments[d]);
                    e && (b++ , e.hidden = !1, c.push(String(arguments[d]).split(":")[0]))
                }
                return setTimeout(function () {
                    for (var b = 0; b < c.length; b++) a.refresh(c[b]);
                    a.resize()
                }, 15), b
            },
            hide: function () {
                for (var a = this, b = 0, c = [], d = 0; d < arguments.length; d++) {
                    var e = this.get(arguments[d]);
                    e && (b++ , e.hidden = !0, c.push(String(arguments[d]).split(":")[0]))
                }
                return setTimeout(function () {
                    for (var b = 0; b < c.length; b++) a.refresh(c[b]), a.tooltipHide(c[b]);
                    a.resize()
                }, 15), b
            },
            enable: function () {
                for (var a = this, b = 0, c = [], d = 0; d < arguments.length; d++) {
                    var e = this.get(arguments[d]);
                    e && (b++ , e.disabled = !1, c.push(String(arguments[d]).split(":")[0]))
                }
                return setTimeout(function () {
                    for (var b = 0; b < c.length; b++) a.refresh(c[b])
                }, 15), b
            },
            disable: function () {
                for (var a = this, b = 0, c = [], d = 0; d < arguments.length; d++) {
                    var e = this.get(arguments[d]);
                    e && (b++ , e.disabled = !0, c.push(String(arguments[d]).split(":")[0]))
                }
                return setTimeout(function () {
                    for (var b = 0; b < c.length; b++) a.refresh(c[b]), a.tooltipHide(c[b])
                }, 15), b
            },
            check: function () {
                for (var a = this, b = 0, c = [], d = 0; d < arguments.length; d++) {
                    var e = this.get(arguments[d]);
                    e && String(arguments[d]).indexOf(":") == -1 && (b++ , e.checked = !0, c.push(String(arguments[d]).split(":")[0]))
                }
                return setTimeout(function () {
                    for (var b = 0; b < c.length; b++) a.refresh(c[b])
                }, 15), b
            },
            uncheck: function () {
                for (var b = this, c = 0, d = [], e = 0; e < arguments.length; e++) {
                    var f = this.get(arguments[e]);
                    f && String(arguments[e]).indexOf(":") == -1 && (["menu", "menu-radio", "menu-check", "drop", "color", "text-color"].indexOf(f.type) != -1 && f.checked && setTimeout(function () {
                        var c = a("#tb_" + b.name + "_item_" + w2utils.escapeId(f.id));
                        c.w2overlay({
                            name: b.name
                        })
                    }, 1), c++ , f.checked = !1, d.push(String(arguments[e]).split(":")[0]))
                }
                return setTimeout(function () {
                    for (var a = 0; a < d.length; a++) b.refresh(d[a])
                }, 15), c
            },
            click: function (b, c) {
                var d = this,
                    e = String(b).split(":"),
                    f = this.get(e[0]);
                if (e.length > 1) {
                    var g = this.get(b);
                    return void (g && !g.disabled && d.menuClick({
                        name: d.name,
                        item: f,
                        subItem: g,
                        originalEvent: c
                    }))
                }
                if (f && !f.disabled) {
                    var h = this.trigger({
                        phase: "before",
                        type: "click",
                        target: null != b ? b : this.name,
                        item: f,
                        object: f,
                        originalEvent: c
                    });
                    if (h.isCancelled === !0) return;
                    var i = "#tb_" + this.name + "_item_" + w2utils.escapeId(f.id) + " tablebutton";
                    if (a(i).removeClass("down"), "radio" == f.type) {
                        for (var j = 0; j < this.items.length; j++) {
                            var k = this.items[j];
                            null != k && k.id != f.id && "radio" === k.type && k.group == f.group && k.checked && (k.checked = !1, this.refresh(k.id))
                        }
                        f.checked = !0, a(i).addClass("checked")
                    }
                    if (["menu", "menu-radio", "menu-check", "drop", "color", "text-color"].indexOf(f.type) != -1 && (d.tooltipHide(b), f.checked ? setTimeout(function () {
                        var b = a("#tb_" + d.name + "_item_" + w2utils.escapeId(f.id));
                        b.w2overlay({
                            name: d.name
                        }), f.checked = !1, d.refresh(f.id)
                    }, 1) : setTimeout(function () {
                        function b(b) {
                            f.checked = !1, a(i).removeClass("checked")
                        }
                        var c = a("#tb_" + d.name + "_item_" + w2utils.escapeId(f.id));
                        a.isPlainObject(f.overlay) || (f.overlay = {});
                        var e = (c.width() - 50) / 2;
                        if (e > 19 && (e = 19), "drop" == f.type && c.w2overlay(f.html, a.extend({
                            name: d.name,
                            left: e,
                            top: 3
                        }, f.overlay, {
                                onHide: function (a) {
                                    b()
                                }
                            })), ["menu", "menu-radio", "menu-check"].indexOf(f.type) != -1) {
                            var g = "normal";
                            "menu-radio" == f.type && (g = "radio", f.items.forEach(function (a) {
                                f.selected == a.id ? a.checked = !0 : a.checked = !1
                            })), "menu-check" == f.type && (g = "check", f.items.forEach(function (b) {
                                a.isArray(f.selected) && f.selected.indexOf(b.id) != -1 ? b.checked = !0 : b.checked = !1
                            })), c.w2menu(a.extend({
                                name: d.name,
                                items: f.items,
                                left: e,
                                top: 3
                            }, f.overlay, {
                                    type: g,
                                    select: function (a) {
                                        d.menuClick({
                                            name: d.name,
                                            item: f,
                                            subItem: a.item,
                                            originalEvent: a.originalEvent,
                                            keepOpen: a.keepOpen
                                        })
                                    },
                                    onHide: function (a) {
                                        b()
                                    }
                                }))
                        } ["color", "text-color"].indexOf(f.type) != -1 && (null == f.transparent && (f.transparent = !0), a(c).w2color({
                            color: f.color,
                            transparent: f.transparent,
                            advanced: f.advanced,
                            onHide: function (a) {
                                b(), d._tmpColor && d.colorClick({
                                    name: d.name,
                                    item: f,
                                    color: d._tmpColor,
                                    final: !0
                                }), delete d._tmpColor
                            },
                            onSelect: function (a) {
                                null != a && (d.colorClick({
                                    name: d.name,
                                    item: f,
                                    color: a
                                }), d._tmpColor = a)
                            }
                        }))
                    }, 1)), ["check", "menu", "menu-radio", "menu-check", "drop", "color", "text-color"].indexOf(f.type) != -1 && (f.checked = !f.checked, f.checked ? a(i).addClass("checked") : a(i).removeClass("checked")), f.route) {
                        var l = String("/" + f.route).replace(/\/{2,}/g, "/"),
                            m = w2utils.parseRoute(l);
                        if (m.keys.length > 0)
                            for (var n = 0; n < m.keys.length; n++) l = l.replace(new RegExp(":" + m.keys[n].name, "g"), this.routeData[m.keys[n].name]);
                        setTimeout(function () {
                            window.location.hash = l
                        }, 1)
                    }
                    c && ["button", "check", "radio"].indexOf(f.type) != -1 && this.tooltipShow(b, c, !0), this.trigger(a.extend(h, {
                        phase: "after"
                    }))
                }
            },
            scroll: function (b) {
                var c, d, e, f = a(this.box),
                    g = this,
                    h = f.find("scroll-wrapper"),
                    i = h.scrollLeft();
                switch (b) {
                    case "left":
                        c = h.outerWidth(), d = h.find(":first").outerWidth(), e = i - c + 50, e <= 0 && (e = 0), h.animate({
                            scrollLeft: e
                        }, 300);
                        break;
                    case "right":
                        c = h.outerWidth(), d = h.find(":first").outerWidth(), e = i + c - 50, e >= d - c && (e = d - c), h.animate({
                            scrollLeft: e
                        }, 300)
                }
                setTimeout(function () {
                    g.resize()
                }, 350)
            },
            render: function (b) {
                var c = (new Date).getTime(),
                    d = this.trigger({
                        phase: "before",
                        type: "render",
                        target: this.name,
                        box: b
                    });
                if (d.isCancelled !== !0 && (null != b && (a(this.box).find("> table #tb_" + this.name + "_right").length > 0 && a(this.box).removeAttr("name").removeClass("w2ui-reset w2ui-toolbar").html(""), this.box = b), this.box)) {
                    for (var e = '<div class="w2ui-scroll-wrapper" onmousedown="var el=w2ui[\'' + this.name + '\']; if (el) el.resize();"><table cellspacing="0" cellpadding="0" width="100%"><tbody><tr>', f = 0; f < this.items.length; f++) {
                        var g = this.items[f];
                        null != g && (null == g.id && (g.id = "item_" + f), e += "spacer" == g.type ? '<td width="100%" id="tb_' + this.name + "_item_" + g.id + '" align="right"></td>' : '<td id="tb_' + this.name + "_item_" + g.id + '" style="' + (g.hidden ? "display: none" : "") + '"     class="' + (g.disabled ? "disabled" : "") + '" valign="middle"></td>')
                    }
                    return e += '<td width="100%" id="tb_' + this.name + '_right" align="right">' + this.right + "</td>", e += '</tr></tbody></table></div><div class="w2ui-scroll-left" onclick="var el=w2ui[\'' + this.name + "']; if (el) el.scroll('left');\"></div><div class=\"w2ui-scroll-right\" onclick=\"var el=w2ui['" + this.name + "']; if (el) el.scroll('right');\"></div>", a(this.box).attr("name", this.name).addClass("w2ui-reset w2ui-toolbar").html(e), a(this.box).length > 0 && (a(this.box)[0].style.cssText += this.style), this.refresh(), this.resize(), this.trigger(a.extend(d, {
                        phase: "after"
                    })), (new Date).getTime() - c
                }
            },
            refresh: function (b) {
                var c = (new Date).getTime(),
                    d = this.trigger({
                        phase: "before",
                        type: "refresh",
                        target: null != b ? b : this.name,
                        item: this.get(b)
                    });
                if (d.isCancelled !== !0) {
                    if (null != b) {
                        var e = this.get(b);
                        if (null == e) return !1;
                        if ("function" == typeof e.onRefresh) {
                            var f = this.trigger({
                                phase: "before",
                                type: "refresh",
                                target: b,
                                item: e,
                                object: e
                            });
                            if (f.isCancelled === !0) return
                        }
                        var g = a(this.box).find("#tb_" + this.name + "_item_" + w2utils.escapeId(e.id)),
                            h = this.getItemHTML(e);
                        return this.tooltipHide(b, {}), 0 === g.length ? (h = "spacer" == e.type ? '<td width="100%" id="tb_' + this.name + "_item_" + e.id + '" align="right"></td>' : '<td id="tb_' + this.name + "_item_" + e.id + '" style="' + (e.hidden ? "display: none" : "") + '"     class="' + (e.disabled ? "disabled" : "") + '" valign="middle">' + h + "</td>", this.get(b, !0) == this.items.length - 1 ? a(this.box).find("#tb_" + this.name + "_right").before(h) : a(this.box).find("#tb_" + this.name + "_item_" + w2utils.escapeId(this.items[parseInt(this.get(b, !0)) + 1].id)).before(h)) : (["menu", "menu-radio", "menu-check", "drop", "color", "text-color"].indexOf(e.type) != -1 && 0 == e.checked && a("#w2ui-overlay-" + this.name).length > 0 && a("#w2ui-overlay-" + this.name)[0].hide(), g.html(h), e.hidden ? g.css("display", "none") : g.css("display", ""), e.disabled ? g.addClass("disabled") : g.removeClass("disabled")), "function" == typeof e.onRefresh && this.trigger(a.extend(f, {
                            phase: "after"
                        })), this.trigger(a.extend(d, {
                            phase: "after"
                        })), (new Date).getTime() - c
                    }
                    for (var i = 0; i < this.items.length; i++) {
                        var j = this.items[i];
                        null == j.id && (j.id = "item_" + i), this.refresh(j.id)
                    }
                }
            },
            resize: function () {
                var b = (new Date).getTime(),
                    c = this.trigger({
                        phase: "before",
                        type: "resize",
                        target: this.name
                    });
                if (c.isCancelled !== !0) {
                    var d = a(this.box);
                    d.find("scroll-left, scroll-right").hide();
                    var e = d.find("scroll-wrapper");
                    return e.find(":first").outerWidth() > e.outerWidth() && (e.scrollLeft() > 0 && d.find("scroll-left").show(), e.scrollLeft() < e.find(":first").outerWidth() - e.outerWidth() && d.find("scroll-right").show()), this.trigger(a.extend(c, {
                        phase: "after"
                    })), (new Date).getTime() - b
                }
            },
            destroy: function () {
                var b = this.trigger({
                    phase: "before",
                    type: "destroy",
                    target: this.name
                });
                b.isCancelled !== !0 && (a(this.box).find("> table #tb_" + this.name + "_right").length > 0 && a(this.box).removeAttr("name").removeClass("w2ui-reset w2ui-toolbar").html(""), a(this.box).html(""), delete w2ui[this.name], this.trigger(a.extend(b, {
                    phase: "after"
                })))
            },
            getItemHTML: function (a) {
                var b = "";
                null != a.caption && null == a.text && (a.text = a.caption), null == a.text && (a.text = ""), null == a.tooltip && null != a.hint && (a.tooltip = a.hint), null == a.tooltip && (a.tooltip = "");
                var c = "<td>&#160;</td>",
                    d = a.text;
                if ("function" == typeof d && (d = d.call(this, a)), a.img && (c = '<td><div class="w2ui-tb-image w2ui-icon ' + a.img + '"></div></td>'), a.icon && (c = '<td><div class="w2ui-tb-image"><span class="' + a.icon + '"></span></div></td>'), "" === b) switch (a.type) {
                    case "color":
                    case "text-color":
                        "string" == typeof a.color && ("#" == a.color.substr(0, 1) && (a.color = a.color.substr(1)), 3 != a.color.length && 6 != a.color.length || (a.color = "#" + a.color)), "color" == a.type && (d = '<div style="height: 12px; width: 12px; margin-top: 1px; border: 1px solid #8A8A8A; border-radius: 1px; box-shadow: 0px 0px 1px #fff;         background-color: ' + (null != a.color ? a.color : "#fff") + '; float: left;"></div>' + (a.text ? '<div style="margin-left: 17px;">' + w2utils.lang(a.text) + "</div>" : "")), "text-color" == a.type && (d = '<div style="color: ' + (null != a.color ? a.color : "#444") + ';">' + (a.text ? w2utils.lang(a.text) : "<b>Aa</b>") + "</div>");
                    case "menu":
                    case "menu-check":
                    case "menu-radio":
                    case "button":
                    case "check":
                    case "radio":
                    case "drop":
                        b += '<table cellpadding="0" cellspacing="0"        class="w2ui-button ' + (a.checked ? "checked" : "") + '"        onclick     = "var el=w2ui[\'' + this.name + "']; if (el) el.click('" + a.id + '\', event);"        onmouseenter = "' + (a.disabled ? "" : "jQuery(this).addClass('over'); w2ui['" + this.name + "'].tooltipShow('" + a.id + "', event);") + '"       onmouseleave = "' + (a.disabled ? "" : "jQuery(this).removeClass('over').removeClass('down'); w2ui['" + this.name + "'].tooltipHide('" + a.id + "', event);") + '"       onmousedown = "' + (a.disabled ? "" : "jQuery(this).addClass('down');") + '"       onmouseup   = "' + (a.disabled ? "" : "jQuery(this).removeClass('down');") + '"><tbody><tr><td>  <table cellpadding="1" cellspacing="0"><tbody>  <tr>' + c + ("" !== d ? '<td class="w2ui-tb-caption" nowrap="nowrap" style="' + (a.style ? a.style : "") + '">' + w2utils.lang(d) + "</td>" : "") + (null != a.count ? '<td class="w2ui-tb-count" nowrap="nowrap"><span>' + a.count + "</span></td>" : "") + (["menu", "menu-radio", "menu-check", "drop", "color", "text-color"].indexOf(a.type) != -1 && a.arrow !== !1 ? '<td class="w2ui-tb-down" nowrap="nowrap"><div></div></td>' : "") + "  </tr></tbody></table></td></tr></tbody></table>";
                        break;
                    case "break":
                        b += '<table cellpadding="0" cellspacing="0"><tbody><tr>    <td><div class="w2ui-break">&#160;</div></td></tr></tbody></table>';
                        break;
                    case "html":
                        b += '<table cellpadding="0" cellspacing="0"><tbody><tr>    <td nowrap="nowrap">' + ("function" == typeof a.html ? a.html.call(this, a) : a.html) + "</td></tr></tbody></table>"
                }
                return "<div>" + b + "</div>"
            },
            tooltipShow: function (b, c, d) {
                if (null != this.tooltip) {
                    var e = a(this.box).find("#tb_" + this.name + "_item_" + w2utils.escapeId(b)),
                        f = this.get(b),
                        g = this.tooltip,
                        h = f.tooltip;
                    "function" == typeof h && (h = h.call(this, f)), clearTimeout(this._tooltipTimer), this._tooltipTimer = setTimeout(function () {
                        if (e.prop("_mouse_tooltip") !== !0) {
                            if (e.prop("_mouse_tooltip", !0), ["menu", "menu-radio", "menu-check", "drop", "color", "text-color"].indexOf(f.type) != -1 && 1 == f.checked) return;
                            e.w2tag(w2utils.lang(h), {
                                position: g
                            })
                        }
                    }, 0), e.prop("_mouse_tooltip") && 1 == d && e.w2tag(w2utils.lang(h), {
                        position: g
                    })
                }
            },
            tooltipHide: function (b, c) {
                if (null != this.tooltip) {
                    var d = a(this.box).find("#tb_" + this.name + "_item_" + w2utils.escapeId(b));
                    this.get(b);
                    clearTimeout(this._tooltipTimer), setTimeout(function () {
                        d.prop("_mouse_tooltip") === !0 && (d.removeProp("_mouse_tooltip"), d.w2tag())
                    }, 1)
                }
            },
            menuClick: function (b) {
                var c = this;
                if (b.item && !b.item.disabled) {
                    var d = this.trigger({
                        phase: "before",
                        type: "click",
                        target: b.item.id + ":" + b.subItem.id,
                        item: b.item,
                        subItem: b.subItem,
                        originalEvent: b.originalEvent
                    });
                    if (d.isCancelled === !0) return;
                    var e = b.subItem,
                        f = this.get(b.item.id);
                    if ("menu-radio" == f.type && (f.selected = e.id, b.item.items.forEach(function (a) {
                        a.checked = !1
                    }), e.checked = !0), "menu-check" == f.type)
                        if (a.isArray(f.selected) || (f.selected = []), null == e.group) {
                            var g = f.selected.indexOf(e.id);
                            g == -1 ? (f.selected.push(e.id), e.checked = !0) : (f.selected.splice(g, 1), e.checked = !1)
                        } else {
                            var h = [];
                            f.items.forEach(function (a) {
                                if (a.group === e.group) {
                                    var b = f.selected.indexOf(a.id);
                                    b != -1 && (a.id != e.id && h.push(a.id), f.selected.splice(b, 1))
                                }
                            });
                            var g = f.selected.indexOf(e.id);
                            g == -1 && (f.selected.push(e.id), e.checked = !0)
                        } if ("string" == typeof e.route) {
                            var i = "" !== e.route ? String("/" + e.route).replace(/\/{2,}/g, "/") : "",
                                j = w2utils.parseRoute(i);
                            if (j.keys.length > 0)
                                for (var k = 0; k < j.keys.length; k++) null != c.routeData[j.keys[k].name] && (i = i.replace(new RegExp(":" + j.keys[k].name, "g"), this.routeData[j.keys[k].name]));
                            setTimeout(function () {
                                window.location.hash = i
                            }, 1)
                        }
                    this.refresh(b.item.id), this.trigger(a.extend(d, {
                        phase: "after"
                    }))
                }
            },
            colorClick: function (b) {
                var c = this;
                if (b.item && !b.item.disabled) {
                    var d = this.trigger({
                        phase: "before",
                        type: "click",
                        target: b.item.id,
                        item: b.item,
                        color: b.color,
                        final: b.final,
                        originalEvent: b.originalEvent
                    });
                    if (d.isCancelled === !0) return;
                    b.item.color = b.color, c.refresh(b.item.id), this.trigger(a.extend(d, {
                        phase: "after"
                    }))
                }
            }
        }, a.extend(b.prototype, w2utils.event), w2obj.toolbar = b
    }(jQuery),
    function (a) {
        var b = function (b) {
            this.name = null, this.box = null, this.sidebar = null, this.parent = null, this.nodes = [], this.menu = [], this.routeData = {}, this.selected = null, this.img = null, this.icon = null, this.style = "", this.topHTML = "", this.bottomHTML = "", this.flatButton = !1, this.keyboard = !0, this.flat = !1, this.hasFocus = !1, a.extend(!0, this, w2obj.sidebar, b)
        };
        a.fn.w2sidebar = function (c) {
            if (a.isPlainObject(c)) {
                if (!w2utils.checkName(c, "w2sidebar")) return;
                var d = c.nodes,
                    e = new b(c);
                return a.extend(e, {
                    handlers: [],
                    nodes: []
                }), null != d && e.add(e, d), 0 !== a(this).length && e.render(a(this)[0]), e.sidebar = e, w2ui[e.name] = e, e
            }
            var f = w2ui[a(this).attr("name")];
            return f ? arguments.length > 0 ? (f[c] && f[c].apply(f, Array.prototype.slice.call(arguments, 1)), this) : f : null
        }, b.prototype = {
            onClick: null,
            onDblClick: null,
            onContextMenu: null,
            onMenuClick: null,
            onExpand: null,
            onCollapse: null,
            onKeydown: null,
            onRender: null,
            onRefresh: null,
            onResize: null,
            onDestroy: null,
            onFocus: null,
            onBlur: null,
            onFlat: null,
            node: {
                id: null,
                text: "",
                count: null,
                img: null,
                icon: null,
                nodes: [],
                style: "",
                route: null,
                selected: !1,
                expanded: !1,
                hidden: !1,
                disabled: !1,
                group: !1,
                groupShowHide: !0,
                collapsible: !0,
                plus: !1,
                onClick: null,
                onDblClick: null,
                onContextMenu: null,
                onExpand: null,
                onCollapse: null,
                parent: null,
                sidebar: null
            },
            add: function (a, b) {
                return 1 == arguments.length && (b = arguments[0], a = this), "string" == typeof a && (a = this.get(a)), this.insert(a, null, b)
            },
            insert: function (c, d, e) {
                var f, g, h, i, j;
                if (2 == arguments.length)
                    if (e = arguments[1], d = arguments[0], null != d) {
                        if (g = this.get(d), null == g) return a.isArray(e) || (e = [e]), f = null != e[0].caption ? e[0].caption : e[0].text, console.log('ERROR: Cannot insert node "' + f + '" because cannot find node "' + d + '" to insert before.'), null;
                        c = this.get(d).parent
                    } else c = this;
                "string" == typeof c && (c = this.get(c)), a.isArray(e) || (e = [e]);
                for (var k = 0; k < e.length; k++)
                    if (i = e[k], null != typeof i.id)
                        if (null == this.get(this, i.id)) {
                            if (h = a.extend({}, b.prototype.node, i), h.sidebar = this, h.parent = c, j = h.nodes || [], h.nodes = [], null == d) c.nodes.push(h);
                            else {
                                if (g = this.get(c, d, !0), null == g) return f = null != i.caption ? i.caption : i.text, console.log('ERROR: Cannot insert node "' + f + '" because cannot find node "' + d + '" to insert before.'), null;
                                c.nodes.splice(g, 0, h)
                            }
                            j.length > 0 && this.insert(h, null, j)
                        } else f = null != i.caption ? i.caption : i.text, console.log("ERROR: Cannot insert node with id=" + i.id + " (text: " + f + ") because another node with the same id already exists.");
                    else f = null != i.caption ? i.caption : i.text, console.log('ERROR: Cannot insert node "' + f + '" because it has no id.');
                return this.refresh(c.id), h
            },
            remove: function () {
                for (var a, b = 0, c = 0; c < arguments.length; c++)
                    if (a = this.get(arguments[c]), null != a) {
                        null != this.selected && this.selected === a.id && (this.selected = null);
                        var d = this.get(a.parent, arguments[c], !0);
                        null != d && (a.parent.nodes[d].selected && a.sidebar.unselect(a.id), a.parent.nodes.splice(d, 1), b++)
                    } return b > 0 && 1 == arguments.length ? this.refresh(a.parent.id) : this.refresh(), b
            },
            set: function (b, c, d) {
                if (2 == arguments.length && (d = c, c = b, b = this), "string" == typeof b && (b = this.get(b)), null == b.nodes) return null;
                for (var e = 0; e < b.nodes.length; e++) {
                    if (b.nodes[e].id === c) {
                        var f = d.nodes;
                        return a.extend(b.nodes[e], d, {
                            nodes: []
                        }), null != f && this.add(b.nodes[e], f), this.refresh(c), !0
                    }
                    var g = this.set(b.nodes[e], c, d);
                    if (g) return !0
                }
                return !1
            },
            get: function (a, b, c) {
                if (0 === arguments.length) {
                    for (var d = [], e = this.find({}), f = 0; f < e.length; f++) null != e[f].id && d.push(e[f].id);
                    return d
                }
                if ((1 == arguments.length || 2 == arguments.length && b === !0) && (c = b, b = a, a = this), "string" == typeof a && (a = this.get(a)), null == a.nodes) return null;
                for (var g = 0; g < a.nodes.length; g++) {
                    if (a.nodes[g].id == b) return c === !0 ? g : a.nodes[g];
                    var h = this.get(a.nodes[g], b, c);
                    if (h || 0 === h) return h
                }
                return null
            },
            find: function (a, b, c) {
                if (1 == arguments.length && (b = a, a = this), c || (c = []), "string" == typeof a && (a = this.get(a)), null == a.nodes) return c;
                for (var d = 0; d < a.nodes.length; d++) {
                    var e = !0;
                    for (var f in b) a.nodes[d][f] != b[f] && (e = !1);
                    e && c.push(a.nodes[d]), a.nodes[d].nodes.length > 0 && (c = this.find(a.nodes[d], b, c))
                }
                return c
            },
            hide: function () {
                for (var a = 0, b = 0; b < arguments.length; b++) {
                    var c = this.get(arguments[b]);
                    null != c && (c.hidden = !0, a++)
                }
                return 1 == arguments.length ? this.refresh(arguments[0]) : this.refresh(), a
            },
            show: function () {
                for (var a = 0, b = 0; b < arguments.length; b++) {
                    var c = this.get(arguments[b]);
                    null != c && (c.hidden = !1, a++)
                }
                return 1 == arguments.length ? this.refresh(arguments[0]) : this.refresh(), a
            },
            disable: function () {
                for (var a = 0, b = 0; b < arguments.length; b++) {
                    var c = this.get(arguments[b]);
                    null != c && (c.disabled = !0, c.selected && this.unselect(c.id), a++)
                }
                return 1 == arguments.length ? this.refresh(arguments[0]) : this.refresh(), a
            },
            enable: function () {
                for (var a = 0, b = 0; b < arguments.length; b++) {
                    var c = this.get(arguments[b]);
                    null != c && (c.disabled = !1, a++)
                }
                return 1 == arguments.length ? this.refresh(arguments[0]) : this.refresh(), a
            },
            select: function (b) {
                var c = this.get(b);
                return !!c && ((this.selected != b || !c.selected) && (this.unselect(this.selected), a(this.box).find("#node_" + w2utils.escapeId(b)).addClass("w2ui-selected").find("icon").addClass("w2ui-icon-selected"), c.selected = !0, this.selected = b, !0))
            },
            unselect: function (b) {
                0 === arguments.length && (b = this.selected);
                var c = this.get(b);
                return !!c && (c.selected = !1, a(this.box).find("#node_" + w2utils.escapeId(b)).removeClass("w2ui-selected").find("icon").removeClass("w2ui-icon-selected"), this.selected == b && (this.selected = null), !0)
            },
            toggle: function (a) {
                var b = this.get(a);
                return null != b && (b.plus ? (this.set(a, {
                    plus: !1
                }), this.expand(a), void this.refresh(a)) : 0 !== b.nodes.length && (!!b.collapsible && (this.get(a).expanded ? this.collapse(a) : this.expand(a))))
            },
            collapse: function (b) {
                var c = this,
                    d = this.get(b),
                    e = this.trigger({
                        phase: "before",
                        type: "collapse",
                        target: b,
                        object: d
                    });
                if (e.isCancelled !== !0) return a(this.box).find("#node_" + w2utils.escapeId(b) + "_sub").slideUp(200), a(this.box).find("#node_" + w2utils.escapeId(b) + " node-dots:first-child").html('<div class="w2ui-expand">+</div>'), d.expanded = !1, this.trigger(a.extend(e, {
                    phase: "after"
                })), setTimeout(function () {
                    c.refresh(b)
                }, 200), !0
            },
            collapseAll: function (a) {
                if (null == a && (a = this), "string" == typeof a && (a = this.get(a)), null == a.nodes) return !1;
                for (var b = 0; b < a.nodes.length; b++) a.nodes[b].expanded === !0 && (a.nodes[b].expanded = !1), a.nodes[b].nodes && a.nodes[b].nodes.length > 0 && this.collapseAll(a.nodes[b]);
                return this.refresh(a.id), !0
            },
            expand: function (b) {
                var c = this,
                    d = this.get(b),
                    e = this.trigger({
                        phase: "before",
                        type: "expand",
                        target: b,
                        object: d
                    });
                if (e.isCancelled !== !0) return a(this.box).find("#node_" + w2utils.escapeId(b) + "_sub").slideDown(200), a(this.box).find("#node_" + w2utils.escapeId(b) + " node-dots:first-child").html('<div class="w2ui-expand">-</div>'), d.expanded = !0, this.trigger(a.extend(e, {
                    phase: "after"
                })), setTimeout(function () {
                    c.refresh(b)
                }, 200), !0
            },
            expandAll: function (a) {
                if (null == a && (a = this), "string" == typeof a && (a = this.get(a)), null == a.nodes) return !1;
                for (var b = 0; b < a.nodes.length; b++) a.nodes[b].expanded === !1 && (a.nodes[b].expanded = !0), a.nodes[b].nodes && a.nodes[b].nodes.length > 0 && this.expandAll(a.nodes[b]);
                this.refresh(a.id)
            },
            expandParents: function (a) {
                var b = this.get(a);
                return null != b && (b.parent && (b.parent.expanded || (b.parent.expanded = !0, this.refresh(b.parent.id)), this.expandParents(b.parent.id)), !0)
            },
            click: function (b, c) {
                var d = this,
                    e = this.get(b);
                if (null != e && !e.disabled && !e.group) {
                    a(d.box).find("nodeselected").each(function (b, c) {
                        var e = a(c).attr("id").replace("node_", ""),
                            f = d.get(e);
                        null != f && (f.selected = !1), a(c).removeClass("w2ui-selected").find("icon").removeClass("w2ui-icon-selected")
                    });
                    var f = a(d.box).find("#node_" + w2utils.escapeId(b)),
                        g = a(d.box).find("#node_" + w2utils.escapeId(d.selected));
                    f.addClass("w2ui-selected").find("icon").addClass("w2ui-icon-selected"), setTimeout(function () {
                        var h = d.trigger({
                            phase: "before",
                            type: "click",
                            target: b,
                            originalEvent: c,
                            node: e,
                            object: e
                        });
                        if (h.isCancelled === !0) return f.removeClass("w2ui-selected").find("icon").removeClass("w2ui-icon-selected"), void g.addClass("w2ui-selected").find("icon").addClass("w2ui-icon-selected");
                        if (null != g && (g.selected = !1), d.get(b).selected = !0, d.selected = b, "string" == typeof e.route) {
                            var i = "" !== e.route ? String("/" + e.route).replace(/\/{2,}/g, "/") : "",
                                j = w2utils.parseRoute(i);
                            if (j.keys.length > 0)
                                for (var k = 0; k < j.keys.length; k++) null != d.routeData[j.keys[k].name] && (i = i.replace(new RegExp(":" + j.keys[k].name, "g"), d.routeData[j.keys[k].name]));
                            setTimeout(function () {
                                window.location.hash = i
                            }, 1)
                        }
                        d.trigger(a.extend(h, {
                            phase: "after"
                        }))
                    }, 1)
                }
            },
            focus: function (b) {
                var c = this,
                    d = this.trigger({
                        phase: "before",
                        type: "focus",
                        target: this.name,
                        originalEvent: b
                    });
                return d.isCancelled !== !0 && (this.hasFocus = !0, a(this.box).find("selected").removeClass("w2ui-inactive"), setTimeout(function () {
                    var b = a(c.box).find("#sidebar_" + c.name + "_focus");
                    b.is(":focus") || b.focus()
                }, 10), void this.trigger(a.extend(d, {
                    phase: "after"
                })))
            },
            blur: function (b) {
                var c = this.trigger({
                    phase: "before",
                    type: "blur",
                    target: this.name,
                    originalEvent: b
                });
                return c.isCancelled !== !0 && (this.hasFocus = !1, a(this.box).find("selected").addClass("w2ui-inactive"), void this.trigger(a.extend(c, {
                    phase: "after"
                })))
            },
            keydown: function (b) {
                function c(a, b) {
                    null == a || a.hidden || a.disabled || a.group || (h.click(a.id, b), setTimeout(function () {
                        h.scrollIntoView()
                    }, 50))
                }

                function d(a, b) {
                    for (a = b(a); null != a && (a.hidden || a.disabled) && !a.group;) a = b(a);
                    return a
                }

                function e(a, b) {
                    if (null == a) return null;
                    var c = a.parent,
                        d = h.get(a.id, !0),
                        f = null;
                    if (a.expanded && a.nodes.length > 0 && b !== !0) {
                        var g = a.nodes[0];
                        f = g.hidden || g.disabled || g.group ? e(g) : g
                    } else f = c && d + 1 < c.nodes.length ? c.nodes[d + 1] : e(c, !0);
                    return null != f && (f.hidden || f.disabled || f.group) && (f = e(f)), f
                }

                function f(a) {
                    if (null == a) return null;
                    var b = a.parent,
                        c = h.get(a.id, !0),
                        d = c > 0 ? g(b.nodes[c - 1]) : b;
                    return null != d && (d.hidden || d.disabled || d.group) && (d = f(d)), d
                }

                function g(a) {
                    if (a.expanded && a.nodes.length > 0) {
                        var b = a.nodes[a.nodes.length - 1];
                        return b.hidden || b.disabled || b.group ? f(b) : g(b)
                    }
                    return a
                }
                var h = this,
                    i = h.get(h.selected);
                if (h.keyboard === !0) {
                    i || (i = h.nodes[0]);
                    var j = h.trigger({
                        phase: "before",
                        type: "keydown",
                        target: h.name,
                        originalEvent: b
                    });
                    j.isCancelled !== !0 && (13 != b.keyCode && 32 != b.keyCode || i.nodes.length > 0 && h.toggle(h.selected), 37 == b.keyCode && (i.nodes.length > 0 && i.expanded ? h.collapse(h.selected) : (c(i.parent), i.parent.group || h.collapse(i.parent.id))), 39 == b.keyCode && (i.nodes.length > 0 || i.plus) && !i.expanded && h.expand(h.selected), 38 == b.keyCode && c(d(i, f)), 40 == b.keyCode && c(d(i, e)), a.inArray(b.keyCode, [13, 32, 37, 38, 39, 40]) != -1 && (b.preventDefault && b.preventDefault(), b.stopPropagation && b.stopPropagation()), h.trigger(a.extend(j, {
                        phase: "after"
                    })))
                }
            },
            scrollIntoView: function (b) {
                null == b && (b = this.selected);
                var c = this.get(b);
                if (null != c) {
                    var d = a(this.box).find("sidebar-div"),
                        e = a(this.box).find("#node_" + w2utils.escapeId(b)),
                        f = e.offset().top - d.offset().top;
                    (f + e.height() > d.height() || f <= 0) && d.animate({
                        scrollTop: d.scrollTop() + f - d.height() / 2 + e.height()
                    }, 250, "linear")
                }
            },
            dblClick: function (b, c) {
                var d = this.get(b),
                    e = this.trigger({
                        phase: "before",
                        type: "dblClick",
                        target: b,
                        originalEvent: c,
                        object: d
                    });
                e.isCancelled !== !0 && (this.toggle(b), this.trigger(a.extend(e, {
                    phase: "after"
                })))
            },
            contextMenu: function (b, c) {
                var d = this,
                    e = d.get(b);
                b != d.selected && d.click(b);
                var f = d.trigger({
                    phase: "before",
                    type: "contextMenu",
                    target: b,
                    originalEvent: c,
                    object: e,
                    allowOnDisabled: !1
                });
                f.isCancelled !== !0 && (e.disabled && !f.allowOnDisabled || (d.menu.length > 0 && a(d.box).find("#node_" + w2utils.escapeId(b)).w2menu({
                    items: d.menu,
                    contextMenu: !0,
                    originalEvent: c,
                    onSelect: function (a) {
                        d.menuClick(b, parseInt(a.index), a.originalEvent)
                    }
                }), c.preventDefault && c.preventDefault(), d.trigger(a.extend(f, {
                    phase: "after"
                }))))
            },
            menuClick: function (b, c, d) {
                var e = this,
                    f = e.trigger({
                        phase: "before",
                        type: "menuClick",
                        target: b,
                        originalEvent: d,
                        menuIndex: c,
                        menuItem: e.menu[c]
                    });
                f.isCancelled !== !0 && e.trigger(a.extend(f, {
                    phase: "after"
                }))
            },
            goFlat: function () {
                var b = this.trigger({
                    phase: "before",
                    type: "flat",
                    goFlat: !this.flat
                });
                b.isCancelled !== !0 && (this.flat = !this.flat, this.refresh(), this.trigger(a.extend(b, {
                    phase: "after"
                })))
            },
            render: function (b) {
                var c = (new Date).getTime(),
                    d = this,
                    e = this.trigger({
                        phase: "before",
                        type: "render",
                        target: this.name,
                        box: b
                    });
                if (e.isCancelled !== !0 && (null != b && (a(this.box).find("> div > divsidebar-div").length > 0 && a(this.box).removeAttr("name").removeClass("w2ui-reset w2ui-sidebar").html(""), this.box = b), this.box)) {
                    a(this.box).attr("name", this.name).addClass("w2ui-reset w2ui-sidebar").html('<div><input id="sidebar_' + this.name + '_focus" style="position: absolute; top: 0; right: 0; width: 1px; z-index: -1; opacity: 0"/><div class="w2ui-sidebar-top"></div><div class="w2ui-sidebar-div"></div><div class="w2ui-sidebar-bottom"></div></div>'), a(this.box).find("> div").css({
                        width: a(this.box).width() + "px",
                        height: a(this.box).height() + "px"
                    }), a(this.box).length > 0 && (a(this.box)[0].style.cssText += this.style);
                    var f = "";
                    1 == this.flatButton && (f = '<div class="w2ui-flat-' + (this.flat ? "right" : "left") + '" onclick="w2ui[\'' + this.name + "'].goFlat()\"></div>"), "" === this.topHTML && "" === f || (a(this.box).find("sidebar-top").html(this.topHTML + f), a(this.box).find("sidebar-div").css("top", a(this.box).find("sidebar-top").height() + "px")), "" !== this.bottomHTML && (a(this.box).find("sidebar-bottom").html(this.bottomHTML), a(this.box).find("sidebar-div").css("bottom", a(this.box).find("sidebar-bottom").height() + "px"));
                    var g;
                    return a(this.box).find("#sidebar_" + this.name + "_focus").on("focus", function (a) {
                        clearTimeout(g), d.hasFocus || d.focus(a)
                    }).on("blur", function (a) {
                        g = setTimeout(function () {
                            d.hasFocus && d.blur(a)
                        }, 100)
                    }).on("keydown", function (a) {
                        9 != a.keyCode && w2ui[d.name].keydown.call(w2ui[d.name], a)
                    }), a(this.box).off("mousedown").on("mousedown", function (b) {
                        setTimeout(function () {
                            if (["INPUT", "TEXTAREA", "SELECT"].indexOf(b.target.tagName.toUpperCase()) == -1) {
                                var c = a(d.box).find("#sidebar_" + d.name + "_focus");
                                if (!c.is(":focus")) {
                                    if (a(b.target).hasClass("w2ui-node")) {
                                        var e = a(b.target).position().top + a(d.box).find("sidebar-top").height() + b.offsetY;
                                        c.css({
                                            top: e + "px",
                                            left: "0px"
                                        })
                                    }
                                    c.focus()
                                }
                            }
                        }, 1)
                    }), this.trigger(a.extend(e, {
                        phase: "after"
                    })), this.refresh(), (new Date).getTime() - c
                }
            },
            refresh: function (b) {
                function c(a) {
                    var b = "",
                        c = a.img,
                        d = a.icon;
                    null == d && null == c && (null == d && (d = k.icon), null == c && (c = k.img));
                    for (var e = a.parent, f = 0; e && null != e.parent;) e.group && f-- , e = e.parent, f++;
                    if (null != a.caption && (a.text = a.caption), a.group) b = '<div class="w2ui-node-group w2ui-level-' + f + '" id="node_' + a.id + '"   onclick="w2ui[\'' + k.name + "'].toggle('" + a.id + "')\"   oncontextmenu=\"w2ui['" + k.name + "'].contextMenu('" + a.id + "', event);\"   onmouseout=\"jQuery(this).find('span:nth-child(1)').css('color', 'transparent')\"    onmouseover=\"jQuery(this).find('span:nth-child(1)').css('color', 'inherit')\">" + (a.groupShowHide && a.collapsible ? "<span>" + (!a.hidden && a.expanded ? w2utils.lang("Hide") : w2utils.lang("Show")) + "</span>" : "<span></span>") + ("function" == typeof a.text ? a.text.call(k, a) : "<span>" + a.text + "</span>") + '</div><div class="w2ui-node-sub" id="node_' + a.id + '_sub" style="' + a.style + ";" + (!a.hidden && a.expanded ? "" : "display: none;") + '"></div>', k.flat && (b = '<div class="w2ui-node-group" id="node_' + a.id + '"><span>&#160;</span></div><div id="node_' + a.id + '_sub" style="' + a.style + ";" + (!a.hidden && a.expanded ? "" : "display: none;") + '"></div>');
                    else {
                        a.selected && !a.disabled && (k.selected = a.id), e = "", c && (e = '<div class="w2ui-node-image w2ui-icon ' + c + (a.selected && !a.disabled ? " w2ui-icon-selected" : "") + '"></div>'), d && (e = '<div class="w2ui-node-image"><span class="' + d + '"></span></div>');
                        var g = a.text;
                        "function" == typeof a.text && (g = a.text.call(k, a)), b = '<div class="w2ui-node w2ui-level-' + f + " " + (a.selected ? "w2ui-selected" : "") + " " + (a.disabled ? "w2ui-disabled" : "") + '" id="node_' + a.id + '" style="' + (a.hidden ? "display: none;" : "") + '"    ondblclick="w2ui[\'' + k.name + "'].dblClick('" + a.id + "', event);\"    oncontextmenu=\"w2ui['" + k.name + "'].contextMenu('" + a.id + "', event);\"    onClick=\"w2ui['" + k.name + "'].click('" + a.id + '\', event); "><table cellpadding="0" cellspacing="0" style="margin-left:' + 18 * f + "px; padding-right:" + 18 * f + 'px"><tbody><tr><td class="w2ui-node-dots" nowrap="nowrap" onclick="w2ui[\'' + k.name + "'].toggle('" + a.id + '\');         if (event.stopPropagation) event.stopPropagation(); else event.cancelBubble = true;">    <div class="w2ui-expand">' + (a.nodes.length > 0 ? a.expanded ? "-" : "+" : a.plus ? "+" : "") + '</div></td><td class="w2ui-node-data" nowrap="nowrap">' + e + (a.count || 0 === a.count ? '<div class="w2ui-node-count">' + a.count + "</div>" : "") + '<div class="w2ui-node-caption">' + g + '</div></td></tr></tbody></table></div><div class="w2ui-node-sub" id="node_' + a.id + '_sub" style="' + a.style + ";" + (!a.hidden && a.expanded ? "" : "display: none;") + '"></div>', k.flat && (b = '<div class="w2ui-node w2ui-level-' + f + " " + (a.selected ? "w2ui-selected" : "") + " " + (a.disabled ? "w2ui-disabled" : "") + '" id="node_' + a.id + '" style="' + (a.hidden ? "display: none;" : "") + "\"    onmouseover=\"jQuery(this).find('node-data').w2tag(w2utils.base64decode('" + w2utils.base64encode(g + (a.count || 0 === a.count ? ' - <span class="w2ui-node-count">' + a.count + "</span>" : "")) + "'),                { id: '" + a.id + "', left: -5 })\"    onmouseout=\"jQuery(this).find('node-data').w2tag(null, { id: '" + a.id + "' })\"    ondblclick=\"w2ui['" + k.name + "'].dblClick('" + a.id + "', event);\"    oncontextmenu=\"w2ui['" + k.name + "'].contextMenu('" + a.id + "', event);\"    onClick=\"w2ui['" + k.name + "'].click('" + a.id + '\', event); "><div class="w2ui-node-data w2ui-node-flat">' + e + '</div></div><div class="w2ui-node-sub" id="node_' + a.id + '_sub" style="' + a.style + ";" + (!a.hidden && a.expanded ? "" : "display: none;") + '"></div>')
                    }
                    return b
                }
                var d = (new Date).getTime(),
                    e = this.trigger({
                        phase: "before",
                        type: "refresh",
                        target: null != b ? b : this.name,
                        fullRefresh: null == b
                    });
                if (e.isCancelled !== !0) {
                    var f = "";
                    if (1 == this.flatButton && (f = '<div class="w2ui-flat-' + (this.flat ? "right" : "left") + '" onclick="w2ui[\'' + this.name + "'].goFlat()\"></div>"), "" === this.topHTML && "" === f || (a(this.box).find("sidebar-top").html(this.topHTML + f), a(this.box).find("sidebar-div").css("top", a(this.box).find("sidebar-top").height() + "px")), "" !== this.bottomHTML && (a(this.box).find("sidebar-bottom").html(this.bottomHTML), a(this.box).find("sidebar-div").css("bottom", a(this.box).find("sidebar-bottom").height() + "px")), a(this.box).find("> div").removeClass("w2ui-sidebar-flat").addClass(this.flat ? "w2ui-sidebar-flat" : "").css({
                        width: a(this.box).width() + "px",
                        height: a(this.box).height() + "px"
                    }), this.nodes.length > 0 && null == this.nodes[0].parent) {
                        var g = this.nodes;
                        this.nodes = [], this.add(this, g)
                    }
                    var h, i, j, k = this;
                    if (null == b) h = this, j = "sidebar-div";
                    else {
                        if (h = this.get(b), null == h) return;
                        j = "#node_" + w2utils.escapeId(h.id) + "_sub"
                    }
                    var l;
                    if (h !== this) {
                        var g = "#node_" + w2utils.escapeId(h.id);
                        l = c(h), a(this.box).find(g).before('<div id="sidebar_' + this.name + '_tmp"></div>'), a(this.box).find(g).remove(), a(this.box).find(j).remove(), a("#sidebar_" + this.name + "_tmp").before(l), a("#sidebar_" + this.name + "_tmp").remove()
                    }
                    a(this.box).find(j).html("");
                    for (var m = 0; m < h.nodes.length; m++)
                        if (i = h.nodes[m], l = c(i), a(this.box).find(j).append(l), 0 !== i.nodes.length) this.refresh(i.id);
                        else {
                            var n = this.trigger({
                                phase: "before",
                                type: "refresh",
                                target: i.id
                            });
                            if (n.isCancelled === !0) return;
                            this.trigger(a.extend(n, {
                                phase: "after"
                            }))
                        } return this.trigger(a.extend(e, {
                            phase: "after"
                        })), (new Date).getTime() - d
                }
            },
            resize: function () {
                var b = (new Date).getTime(),
                    c = this.trigger({
                        phase: "before",
                        type: "resize",
                        target: this.name
                    });
                if (c.isCancelled !== !0) return a(this.box).css("overflow", "hidden"), a(this.box).find("> div").css({
                    width: a(this.box).width() + "px",
                    height: a(this.box).height() + "px"
                }), this.trigger(a.extend(c, {
                    phase: "after"
                })), (new Date).getTime() - b
            },
            destroy: function () {
                var b = this.trigger({
                    phase: "before",
                    type: "destroy",
                    target: this.name
                });
                b.isCancelled !== !0 && (a(this.box).find("> div > divsidebar-div").length > 0 && a(this.box).removeAttr("name").removeClass("w2ui-reset w2ui-sidebar").html(""), delete w2ui[this.name], this.trigger(a.extend(b, {
                    phase: "after"
                })))
            },
            lock: function (a, b) {
                var c = Array.prototype.slice.call(arguments, 0);
                c.unshift(this.box), w2utils.lock.apply(window, c)
            },
            unlock: function (a) {
                w2utils.unlock(this.box, a)
            }
        }, a.extend(b.prototype, w2utils.event), w2obj.sidebar = b
    }(jQuery),
    function (a) {
        var b = function (b) {
            this.el = null, this.helpers = {}, this.type = b.type || "text", this.options = a.extend(!0, {}, b), this.onSearch = b.onSearch || null, this.onRequest = b.onRequest || null, this.onLoad = b.onLoad || null, this.onError = b.onError || null, this.onClick = b.onClick || null, this.onAdd = b.onAdd || null, this.onNew = b.onNew || null, this.onRemove = b.onRemove || null, this.onMouseOver = b.onMouseOver || null, this.onMouseOut = b.onMouseOut || null, this.onIconClick = b.onIconClick || null, this.onScroll = b.onScroll || null, this.tmp = {}, delete this.options.type, delete this.options.onSearch, delete this.options.onRequest, delete this.options.onLoad, delete this.options.onError, delete this.options.onClick, delete this.options.onMouseOver, delete this.options.onMouseOut, delete this.options.onIconClick, delete this.options.onScroll, a.extend(!0, this, w2obj.field)
        };
        a.fn.w2field = function (c, d) {
            if (0 !== this.length) {
                if (0 === arguments.length) {
                    var e = a(this).data("w2field");
                    return e
                }
                return "string" == typeof c && "object" == typeof d && (c = a.extend(!0, {}, d, {
                    type: c
                })), "string" == typeof c && null == d && (c = {
                    type: c
                }), c && (c.type = String(c.type).toLowerCase()), this.each(function (d, e) {
                    var f = a(e).data("w2field");
                    if (null == f) return f = new b(c), a.extend(f, {
                        handlers: []
                    }), e && (f.el = a(e)[0]), f.init(), a(e).data("w2field", f), f;
                    if (f.clear(), "clear" !== c.type) return f = new b(c), a.extend(f, {
                        handlers: []
                    }), e && (f.el = a(e)[0]), f.init(), a(e).data("w2field", f), f
                })
            }
            var f = b.prototype;
            if (f[c]) return f[c].apply(f, Array.prototype.slice.call(arguments, 1))
        }, b.prototype = {
            custom: {},
            addType: function (a, b) {
                return a = String(a).toLowerCase(), this.custom[a] = b, !0
            },
            removeType: function (a) {
                return a = String(a).toLowerCase(), !!this.custom[a] && (delete this.custom[a], !0)
            },
            init: function () {
                var b, c = this,
                    d = this.options;
                if ("function" == typeof this.custom[this.type]) return void this.custom[this.type].call(this, d);
                if (["INPUT", "TEXTAREA"].indexOf(this.el.tagName.toUpperCase()) == -1) return void console.log("ERROR: w2field could only be applied to INPUT or TEXTAREA.", this.el);
                switch (this.type) {
                    case "text":
                    case "int":
                    case "float":
                    case "money":
                    case "currency":
                    case "percent":
                    case "alphanumeric":
                    case "bin":
                    case "hex":
                        b = {
                            min: null,
                            max: null,
                            step: 1,
                            autoFormat: !0,
                            currencyPrefix: w2utils.settings.currencyPrefix,
                            currencySuffix: w2utils.settings.currencySuffix,
                            currencyPrecision: w2utils.settings.currencyPrecision,
                            decimalSymbol: w2utils.settings.decimalSymbol,
                            groupSymbol: w2utils.settings.groupSymbol,
                            arrows: !1,
                            keyboard: !0,
                            precision: null,
                            silent: !0,
                            prefix: "",
                            suffix: ""
                        }, this.options = a.extend(!0, {}, b, d), d = this.options, d.numberRE = new RegExp("[" + d.groupSymbol + "]", "g"), d.moneyRE = new RegExp("[" + d.currencyPrefix + d.currencySuffix + d.groupSymbol + "]", "g"), d.percentRE = new RegExp("[" + d.groupSymbol + "%]", "g"), ["text", "alphanumeric", "hex", "bin"].indexOf(this.type) !== -1 && (d.arrows = !1, d.keyboard = !1), this.addPrefix(), this.addSuffix();
                        break;
                    case "color":
                        b = {
                            prefix: "",
                            suffix: '<div style="width: ' + (parseInt(a(this.el).css("font-size")) || 12) + 'px">&#160;</div>',
                            arrows: !1,
                            keyboard: !1,
                            advanced: null,
                            transparent: !0
                        }, a.extend(d, b), this.addPrefix(), this.addSuffix(), "" !== a(this.el).val() && setTimeout(function () {
                            c.change()
                        }, 1);
                        break;
                    case "date":
                        b = {
                            format: w2utils.settings.dateFormat,
                            keyboard: !0,
                            silent: !0,
                            start: "",
                            end: "",
                            blocked: {},
                            colored: {},
                            blockWeekDays: null
                        }, this.options = a.extend(!0, {}, b, d), d = this.options, null == a(this.el).attr("placeholder") && a(this.el).attr("placeholder", d.format);
                        break;
                    case "time":
                        b = {
                            format: w2utils.settings.timeFormat,
                            keyboard: !0,
                            silent: !0,
                            start: "",
                            end: "",
                            noMinutes: !1
                        }, this.options = a.extend(!0, {}, b, d), d = this.options, null == a(this.el).attr("placeholder") && a(this.el).attr("placeholder", d.format);
                        break;
                    case "datetime":
                        b = {
                            format: w2utils.settings.dateFormat + " | " + w2utils.settings.timeFormat,
                            keyboard: !0,
                            silent: !0,
                            start: "",
                            end: "",
                            blocked: [],
                            colored: {},
                            placeholder: null,
                            btn_now: !0,
                            noMinutes: !1
                        }, this.options = a.extend(!0, {}, b, d), d = this.options, null == a(this.el).attr("placeholder") && a(this.el).attr("placeholder", d.placeholder || d.format);
                        break;
                    case "list":
                    case "combo":
                        if (b = {
                            items: [],
                            selected: {},
                            url: null,
                            recId: null,
                            recText: null,
                            method: null,
                            interval: 350,
                            postData: {},
                            minLength: 1,
                            cacheMax: 250,
                            maxDropHeight: 350,
                            maxDropWidth: null,
                            match: "begins",
                            silent: !0,
                            icon: null,
                            iconStyle: "",
                            align: "both",
                            altRows: !0,
                            onSearch: null,
                            onRequest: null,
                            onLoad: null,
                            onError: null,
                            onIconClick: null,
                            renderDrop: null,
                            compare: null,
                            filter: !0,
                            prefix: "",
                            suffix: "",
                            openOnFocus: !1,
                            markSearch: !1
                        }, d.items = this.normMenu(d.items), "list" === this.type) {
                            if (b.openOnFocus = !0, a(this.el).addClass("w2ui-select"), !a.isPlainObject(d.selected) && d.items)
                                for (var e = 0; e < d.items.length; e++) {
                                    var f = d.items[e];
                                    if (f && f.id === d.selected) {
                                        d.selected = a.extend(!0, {}, f);
                                        break
                                    }
                                }
                            this.watchSize()
                        }
                        d = a.extend({}, b, d), this.options = d, a.isPlainObject(d.selected) || (d.selected = {}), a(this.el).data("selected", d.selected), d.url && (d.items = [], this.request(0)), "list" === this.type && this.addFocus(), this.addPrefix(), this.addSuffix(), setTimeout(function () {
                            c.refresh()
                        }, 10), a(this.el).attr("autocomplete", "off"), null != d.selected.text && a(this.el).val(d.selected.text);
                        break;
                    case "enum":
                        b = {
                            items: [],
                            selected: [],
                            max: 0,
                            url: null,
                            recId: null,
                            recText: null,
                            interval: 350,
                            method: null,
                            postData: {},
                            minLength: 1,
                            cacheMax: 250,
                            maxWidth: 250,
                            maxHeight: 350,
                            maxDropHeight: 350,
                            maxDropWidth: null,
                            match: "contains",
                            silent: !0,
                            align: "both",
                            altRows: !0,
                            openOnFocus: !1,
                            markSearch: !0,
                            renderDrop: null,
                            renderItem: null,
                            compare: null,
                            filter: !0,
                            style: "",
                            onSearch: null,
                            onRequest: null,
                            onLoad: null,
                            onError: null,
                            onClick: null,
                            onAdd: null,
                            onNew: null,
                            onRemove: null,
                            onMouseOver: null,
                            onMouseOut: null,
                            onScroll: null
                        }, d = a.extend({}, b, d, {
                            suffix: ""
                        }), d.items = this.normMenu(d.items), d.selected = this.normMenu(d.selected), this.options = d, a.isArray(d.selected) || (d.selected = []), a(this.el).data("selected", d.selected), d.url && (d.items = [], this.request(0)), this.addSuffix(), this.addMulti(), this.watchSize();
                        break;
                    case "file":
                        b = {
                            selected: [],
                            max: 0,
                            maxSize: 0,
                            maxFileSize: 0,
                            maxWidth: 250,
                            maxHeight: 350,
                            maxDropHeight: 350,
                            maxDropWidth: null,
                            readContent: !0,
                            silent: !0,
                            align: "both",
                            altRows: !0,
                            renderItem: null,
                            style: "",
                            onClick: null,
                            onAdd: null,
                            onRemove: null,
                            onMouseOver: null,
                            onMouseOut: null
                        }, d = a.extend({}, b, d), this.options = d, a.isArray(d.selected) || (d.selected = []), a(this.el).data("selected", d.selected), null == a(this.el).attr("placeholder") && a(this.el).attr("placeholder", w2utils.lang("Attach files by dragging and dropping or Click to Select")), this.addMulti(), this.watchSize()
                }
                this.tmp = {
                    onChange: function (a) {
                        c.change.call(c, a)
                    },
                    onClick: function (a) {
                        c.click.call(c, a)
                    },
                    onFocus: function (a) {
                        c.focus.call(c, a)
                    },
                    onBlur: function (a) {
                        c.blur.call(c, a)
                    },
                    onKeydown: function (a) {
                        c.keyDown.call(c, a)
                    },
                    onKeyup: function (a) {
                        c.keyUp.call(c, a)
                    },
                    onKeypress: function (a) {
                        c.keyPress.call(c, a)
                    }
                }, a(this.el).addClass("w2field form-control").data("w2field", this).on("change.w2field", this.tmp.onChange).on("click.w2field", this.tmp.onClick).on("focus.w2field", this.tmp.onFocus).on("blur.w2field", this.tmp.onBlur).on("keydown.w2field", this.tmp.onKeydown).on("keyup.w2field", this.tmp.onKeyup).on("keypress.w2field", this.tmp.onKeypress).css(w2utils.cssPrefix("box-sizing", "border-box")), this.change(a.Event("change"))
            },
            watchSize: function () {
                var b = this,
                    c = a(b.el).data("tmp") || {};
                c.sizeTimer = setInterval(function () {
                    a(b.el).parents("body").length > 0 ? b.resize() : clearInterval(c.sizeTimer)
                }, 200), a(b.el).data("tmp", c)
            },
            get: function () {
                var b;
                return b = ["list", "enum", "file"].indexOf(this.type) !== -1 ? a(this.el).data("selected") : a(this.el).val()
            },
            set: function (b, c) {
                if (["list", "enum", "file"].indexOf(this.type) !== -1) {
                    if ("list" !== this.type && c) null == a(this.el).data("selected") && a(this.el).data("selected", []), a(this.el).data("selected").push(b), a(this.el).change();
                    else {
                        var d = "enum" === this.type ? [b] : b;
                        a(this.el).data("selected", d).change()
                    }
                    this.refresh()
                } else a(this.el).val(b)
            },
            setIndex: function (b, c) {
                if (["list", "enum"].indexOf(this.type) !== -1) {
                    var d = this.options.items;
                    if (d && d[b]) {
                        if ("list" !== this.type && c) null == a(this.el).data("selected") && a(this.el).data("selected", []), a(this.el).data("selected").push(d[b]), a(this.el).change();
                        else {
                            var e = "enum" === this.type ? [d[b]] : d[b];
                            a(this.el).data("selected", e).change()
                        }
                        return this.refresh(), !0
                    }
                }
                return !1
            },
            clear: function () {
                var b = this.options;
                ["money", "currency"].indexOf(this.type) !== -1 && a(this.el).val(a(this.el).val().replace(b.moneyRE, "")), "percent" === this.type && a(this.el).val(a(this.el).val().replace(/%/g, "")), "list" === this.type && a(this.el).removeClass("w2ui-select"), this.type = "clear";
                var c = a(this.el).data("tmp");
                if (this.tmp) {
                    null != c && (a(this.el).height("auto"), c && c["old-padding-left"] && a(this.el).css("padding-left", c["old-padding-left"]), c && c["old-padding-right"] && a(this.el).css("padding-right", c["old-padding-right"]), c && c["old-background-color"] && a(this.el).css("background-color", c["old-background-color"]), c && c["old-border-color"] && a(this.el).css("border-color", c["old-border-color"]), clearInterval(c.sizeTimer)), a(this.el).val(this.clean(a(this.el).val())).removeClass("w2field").removeData().off(".w2field");
                    for (var d in this.helpers) a(this.helpers[d]).remove();
                    this.helpers = {}
                }
            },
            refresh: function () {
                var b = this,
                    c = this.options,
                    d = a(this.el).data("selected"),
                    e = (new Date).getTime();
                if (["list"].indexOf(this.type) !== -1 && (a(b.el).parent().css("white-space", "nowrap"), b.helpers.prefix && b.helpers.prefix.hide(), setTimeout(function () {
                    if (b.helpers.focus) {
                        !a.isEmptyObject(d) && c.icon ? (c.prefix = '<span class="w2ui-icon ' + c.icon + '"style="cursor: pointer; font-size: 14px; display: inline-block; margin-top: -1px; color: #7F98AD;' + c.iconStyle + '"></span>', b.addPrefix()) : (c.prefix = "", b.addPrefix());
                        var e = b.helpers.focus.find("input");
                        "" === a(e).val() ? (a(e).css("text-indent", "-9999em").prev().css("opacity", 0), a(b.el).val(d && null != d.text ? w2utils.lang(d.text) : "")) : (a(e).css("text-indent", 0).prev().css("opacity", 1), a(b.el).val(""), setTimeout(function () {
                            b.helpers.prefix && b.helpers.prefix.hide();
                            var d = "position: absolute; opacity: 0; margin: 4px 0px 0px 2px; background-position: left !important;";
                            c.icon ? (a(e).css("margin-left", "17px"), a(b.helpers.focus).find(".icon-search").attr("style", d + "width: 11px !important; opacity: 1; display: block")) : (a(e).css("margin-left", "0px"), a(b.helpers.focus).find(".icon-search").attr("style", d + "width: 0px !important; opacity: 0; display: none"))
                        }, 1)), a(b.el).prop("readonly") || a(b.el).prop("disabled") ? setTimeout(function () {
                            a(b.helpers.prefix).css("opacity", "0.6"), a(b.helpers.suffix).css("opacity", "0.6")
                        }, 1) : setTimeout(function () {
                            a(b.helpers.prefix).css("opacity", "1"), a(b.helpers.suffix).css("opacity", "1")
                        }, 1)
                    }
                }, 1)), ["enum", "file"].indexOf(this.type) !== -1) {
                    var f = "";
                    if (d)
                        for (var g = 0; g < d.length; g++) {
                            var h = d[g],
                                i = "";
                            i = "function" == typeof c.renderItem ? c.renderItem(h, g, '<div class="w2ui-list-remove" title="' + w2utils.lang("Remove") + '" index="' + g + '">&#160;&#160;</div>') : '<div class="w2ui-list-remove" title="' + w2utils.lang("Remove") + '" index="' + g + '">&#160;&#160;</div>' + ("enum" === b.type ? h.text : h.name + '<span class="file-size"> - ' + w2utils.formatSize(h.size) + "</span>"), f += '<li index="' + g + '" style="max-width: ' + parseInt(c.maxWidth) + "px; " + (h.style ? h.style : "") + '">' + i + "</li>"
                        }
                    var j = b.helpers.multi,
                        k = j.find("ul");
                    if (j.attr("style", j.attr("style") + ";" + c.style), a(b.el).css("z-index", "-1"), a(b.el).prop("readonly") || a(b.el).prop("disabled") ? setTimeout(function () {
                        j[0].scrollTop = 0, j.addClass("w2ui-readonly").find("li").css("opacity", "0.9").parent().find("li.nomouse").hide().find("input").prop("readonly", !0).parents("ul").find("list-remove").hide()
                    }, 1) : setTimeout(function () {
                        j.removeClass("w2ui-readonly").find("li").css("opacity", "1").parent().find("li.nomouse").show().find("input").prop("readonly", !1).parents("ul").find("list-remove").show()
                    }, 1), j.find("enum-placeholder").remove(), k.find("li").not("li.nomouse").remove(), "" !== f) k.prepend(f);
                    else if (null != a(b.el).attr("placeholder") && "" === j.find("input").val()) {
                        var l = "padding-top: " + a(this.el).css("padding-top") + ";padding-left: " + a(this.el).css("padding-left") + "; box-sizing: " + a(this.el).css("box-sizing") + "; line-height: " + a(this.el).css("line-height") + "; font-size: " + a(this.el).css("font-size") + "; font-family: " + a(this.el).css("font-family") + "; ";
                        j.prepend('<div class="w2ui-enum-placeholder" style="' + l + '">' + a(b.el).attr("placeholder") + "</div>")
                    }
                    j.off("scroll.w2field").on("scroll.w2field", function (c) {
                        var d = b.trigger({
                            phase: "before",
                            type: "scroll",
                            target: b.el,
                            originalEvent: c
                        });
                        d.isCancelled !== !0 && b.trigger(a.extend(d, {
                            phase: "after"
                        }))
                    }).find("li").data("mouse", "out").on("click", function (c) {
                        var e = "LI" === c.target.tagName.toUpperCase() ? c.target : a(c.target).parents("LI"),
                            f = d[a(e).attr("index")];
                        if (!a(e).hasClass("nomouse"))
                            if (c.stopPropagation(), a(c.target).hasClass("w2ui-list-remove")) {
                                if (a(b.el).prop("readonly") || a(b.el).prop("disabled")) return;
                                var g = b.trigger({
                                    phase: "before",
                                    type: "remove",
                                    target: b.el,
                                    originalEvent: c.originalEvent,
                                    item: f
                                });
                                if (g.isCancelled === !0) return;
                                a().w2overlay(), d.splice(a(c.target).attr("index"), 1), a(b.el).trigger("input").trigger("change"), a(c.target).parent().fadeOut("fast"), setTimeout(function () {
                                    b.refresh(), b.trigger(a.extend(g, {
                                        phase: "after"
                                    }))
                                }, 300)
                            } else {
                                var g = b.trigger({
                                    phase: "before",
                                    type: "click",
                                    target: b.el,
                                    originalEvent: c.originalEvent,
                                    item: f
                                });
                                if (g.isCancelled === !0) return;
                                if ("file" === b.type) {
                                    var h = "";
                                    /image/i.test(f.type) && (h = '<div style="padding: 3px;">    <img src="' + (f.content ? "data:" + f.type + ";base64," + f.content : "") + '" style="max-width: 300px;"         onload="var w = jQuery(this).width(); var h = jQuery(this).height();             if (w < 300 & h < 300) return;             if (w >= h && w > 300) jQuery(this).width(300);            if (w < h && h > 300) jQuery(this).height(300);"        onerror="this.style.display = \'none\'"    ></div>');
                                    var i = 'style="padding: 3px; text-align: right; color: #777;"',
                                        j = 'style="padding: 3px"';
                                    h += '<div style="padding: 8px;">    <table cellpadding="2"><tbody>    <tr><td ' + i + ">" + w2utils.lang("Name") + ":</td><td " + j + ">" + f.name + "</td></tr>    <tr><td " + i + ">" + w2utils.lang("Size") + ":</td><td " + j + ">" + w2utils.formatSize(f.size) + "</td></tr>    <tr><td " + i + ">" + w2utils.lang("Type") + ":</td><td " + j + '>        <span style="width: 200px; display: block-inline; overflow: hidden; text-overflow: ellipsis; white-space: nowrap="nowrap";">' + f.type + "</span>    </td></tr>    <tr><td " + i + ">" + w2utils.lang("Modified") + ":</td><td " + j + ">" + w2utils.date(f.modified) + "</td></tr>    </tbody></table></div>", a("#w2ui-overlay").remove(), a(e).w2overlay(h)
                                }
                                b.trigger(a.extend(g, {
                                    phase: "after"
                                }))
                            }
                    }).on("mouseover", function (c) {
                        var e = "LI" === c.target.tagName.toUpperCase() ? c.target : a(c.target).parents("LI");
                        if (!a(e).hasClass("nomouse")) {
                            if ("out" === a(e).data("mouse")) {
                                var f = d[a(c.target).attr("index")],
                                    g = b.trigger({
                                        phase: "before",
                                        type: "mouseOver",
                                        target: b.el,
                                        originalEvent: c.originalEvent,
                                        item: f
                                    });
                                if (g.isCancelled === !0) return;
                                b.trigger(a.extend(g, {
                                    phase: "after"
                                }))
                            }
                            a(e).data("mouse", "over")
                        }
                    }).on("mouseout", function (c) {
                        var e = "LI" === c.target.tagName.toUpperCase() ? c.target : a(c.target).parents("LI");
                        a(e).hasClass("nomouse") || (a(e).data("mouse", "leaving"), setTimeout(function () {
                            if ("leaving" === a(e).data("mouse")) {
                                a(e).data("mouse", "out");
                                var f = d[a(c.target).attr("index")],
                                    g = b.trigger({
                                        phase: "before",
                                        type: "mouseOut",
                                        target: b.el,
                                        originalEvent: c.originalEvent,
                                        item: f
                                    });
                                if (g.isCancelled === !0) return;
                                b.trigger(a.extend(g, {
                                    phase: "after"
                                }))
                            }
                        }, 0))
                    }), a(this.el).height("auto");
                    var m = a(j).find("> divmulti-items").height() + 2 * w2utils.getSize(j, "+height");
                    m < 26 && (m = 26), m > c.maxHeight && (m = c.maxHeight), j.length > 0 && (j[0].scrollTop = 1e3);
                    var n = w2utils.getSize(a(this.el), "height") - 2;
                    if (n > m && (m = n), a(j).css({
                        height: m + "px",
                        overflow: m == c.maxHeight ? "auto" : "hidden"
                    }), m < c.maxHeight && a(j).prop("scrollTop", 0), a(this.el).css({
                        height: m + 2 + "px"
                    }), "enum" === b.type) {
                        var o = b.helpers.multi.find("input");
                        o.width(8 * (o.val().length + 2) + "px")
                    }
                }
                return (new Date).getTime() - e
            },
            reset: function () {
                var a = this.type;
                this.clear(), this.type = a, this.init()
            },
            resize: function () {
                var b = this,
                    c = a(b.el).width(),
                    d = a(b.el).height();
                if (!(b.tmp.current_width == c && d > 0)) {
                    var e = this.helpers.focus,
                        f = this.helpers.multi,
                        g = this.helpers.suffix,
                        h = this.helpers.prefix;
                    if (e && e.width(a(b.el).width()), f) {
                        var i = w2utils.getSize(b.el, "width") - parseInt(a(b.el).css("margin-left"), 10) - parseInt(a(b.el).css("margin-right"), 10);
                        a(f).width(i)
                    }
                    g && (b.options.suffix = '<div class="arrow-down" style="margin-top: ' + (parseInt(a(b.el).height()) - 6) / 2 + 'px;"></div>', b.addSuffix()), h && b.addPrefix(), b.tmp.current_width = c
                }
            },
            clean: function (b) {
                if ("number" == typeof b) return b;
                var c = this.options;
                return b = String(b).trim(), ["int", "float", "money", "currency", "percent"].indexOf(this.type) !== -1 && ("string" == typeof b && (c.autoFormat && ["money", "currency"].indexOf(this.type) !== -1 && (b = String(b).replace(c.moneyRE, "")), c.autoFormat && "percent" === this.type && (b = String(b).replace(c.percentRE, "")), c.autoFormat && ["int", "float"].indexOf(this.type) !== -1 && (b = String(b).replace(c.numberRE, "")), b = b.replace(/\s+/g, "").replace(w2utils.settings.groupSymbol, "").replace(w2utils.settings.decimalSymbol, ".")), parseFloat(b) == b && (null != c.min && b < c.min && (b = c.min, a(this.el).val(c.min)), null != c.max && b > c.max && (b = c.max, a(this.el).val(c.max))), b = "" !== b && w2utils.isFloat(b) ? Number(b) : ""), b
            },
            format: function (a) {
                var b = this.options;
                if (b.autoFormat && "" !== a) switch (this.type) {
                    case "money":
                    case "currency":
                        a = w2utils.formatNumber(a, b.currencyPrecision, b.groupSymbol), "" !== a && (a = b.currencyPrefix + a + b.currencySuffix);
                        break;
                    case "percent":
                        a = w2utils.formatNumber(a, b.precision, b.groupSymbol), "" !== a && (a += "%");
                        break;
                    case "float":
                        a = w2utils.formatNumber(a, b.precision, b.groupSymbol);
                        break;
                    case "int":
                        a = w2utils.formatNumber(a, 0, b.groupSymbol)
                }
                return a
            },
            change: function (b) {
                var c = this,
                    d = c.options;
                if (["int", "float", "money", "currency", "percent"].indexOf(this.type) !== -1) {
                    var e = a(this.el).val(),
                        f = this.format(this.clean(a(this.el).val()));
                    if ("" !== e && e != f) return a(this.el).val(f).change(), b.stopPropagation(), b.preventDefault(), !1
                }
                if ("color" === this.type) {
                    var g = a(this.el).val();
                    "rgb" !== g.substr(0, 3).toLowerCase() && (g = "#" + g, 6 !== a(this.el).val().length && 3 !== a(this.el).val().length && (g = "")), a(this.el).next().find("div").css("background-color", g), a(this.el).is(":focus") && a(this.el).data("skipInit") !== !0 && this.updateOverlay()
                }
                if (["list", "enum", "file"].indexOf(this.type) !== -1 && (c.refresh(), setTimeout(function () {
                    c.refresh()
                }, 5)), ["date", "time", "datetime"].indexOf(this.type) !== -1) {
                    var h = parseInt(c.el.value);
                    w2utils.isInt(c.el.value) && h > 3e3 && ("time" === this.type && a(c.el).val(w2utils.formatTime(new Date(h), d.format)).change(), "date" === this.type && a(c.el).val(w2utils.formatDate(new Date(h), d.format)).change(), "datetime" === this.type && a(c.el).val(w2utils.formatDateTime(new Date(h), d.format)).change())
                }
            },
            click: function (b) {
                b.stopPropagation(), ["list", "combo", "enum"].indexOf(this.type) !== -1 && (a(this.el).is(":focus") || this.focus(b)), ["date", "time", "color", "datetime"].indexOf(this.type) !== -1 && this.updateOverlay();
            },
            focus: function (b) {
                var c = this;
                if (["color", "date", "time", "datetime"].indexOf(c.type) !== -1) {
                    if (a(c.el).prop("readonly") || a(c.el).prop("disabled")) return;
                    a("#w2ui-overlay").length > 0 && a("#w2ui-overlay")[0].hide(), setTimeout(function () {
                        c.updateOverlay()
                    }, 150)
                }
                if (["list", "combo", "enum"].indexOf(c.type) !== -1) {
                    if (a(c.el).prop("readonly") || a(c.el).prop("disabled")) return;
                    a("#w2ui-overlay").length > 0 && a("#w2ui-overlay")[0].hide(), c.resize(), setTimeout(function () {
                        return "list" === c.type && a(c.el).is(":focus") ? void a(c.helpers.focus).find("input").focus() : (c.search(), void setTimeout(function () {
                            c.updateOverlay()
                        }, 1))
                    }, 1)
                }
                "file" === c.type && a(c.helpers.multi).css({
                    outline: "auto 5px #7DB4F3",
                    "outline-offset": "-2px"
                })
            },
            blur: function (b) {
                var c = this,
                    d = c.options,
                    e = a(c.el).val().trim(),
                    f = a("#w2ui-overlay");
                if (["color", "date", "time", "list", "combo", "enum", "datetime"].indexOf(c.type) !== -1) {
                    var g = window.setTimeout(function () {
                        f.data("keepOpen") !== !0 && f.hide()
                    }, 0);
                    a(".menu", f).one("focus", function () {
                        clearTimeout(g), a(this).one("focusout", function (a) {
                            f.hide()
                        })
                    })
                } ["int", "float", "money", "currency", "percent"].indexOf(c.type) !== -1 && ("" === e || c.checkType(e) || (a(c.el).val("").change(), d.silent === !1 && (a(c.el).w2tag("Not a valid number"), setTimeout(function () {
                    a(c.el).w2tag("")
                }, 3e3)))), ["date", "time", "datetime"].indexOf(c.type) !== -1 && ("" === e || c.inRange(c.el.value) ? "date" !== c.type || "" === e || w2utils.isDate(c.el.value, d.format) ? "time" !== c.type || "" === e || w2utils.isTime(c.el.value) ? "datetime" !== c.type || "" === e || w2utils.isDateTime(c.el.value, d.format) || (a(c.el).val("").removeData("selected").change(), d.silent === !1 && (a(c.el).w2tag("Not a valid date"), setTimeout(function () {
                    a(c.el).w2tag("")
                }, 3e3))) : (a(c.el).val("").removeData("selected").change(), d.silent === !1 && (a(c.el).w2tag("Not a valid time"), setTimeout(function () {
                    a(c.el).w2tag("")
                }, 3e3))) : (a(c.el).val("").removeData("selected").change(), d.silent === !1 && (a(c.el).w2tag("Not a valid date"), setTimeout(function () {
                    a(c.el).w2tag("")
                }, 3e3))) : (a(c.el).val("").removeData("selected").change(), d.silent === !1 && (a(c.el).w2tag("Not in range"), setTimeout(function () {
                    a(c.el).w2tag("")
                }, 3e3)))), "enum" === c.type && a(c.helpers.multi).find("input").val("").width(20), "file" === c.type && a(c.helpers.multi).css({
                    outline: "none"
                })
            },
            keyPress: function (a) {
                var b = this;
                b.options;
                if (["int", "float", "money", "currency", "percent", "hex", "bin", "color", "alphanumeric"].indexOf(b.type) !== -1) {
                    if (a.metaKey || a.ctrlKey || a.altKey || a.charCode != a.keyCode && a.keyCode > 0) return;
                    var c = String.fromCharCode(a.charCode);
                    if (!b.checkType(c, !0) && 13 != a.keyCode) return a.preventDefault(), a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0, !1
                } ["date", "time", "datetime"].indexOf(b.type) !== -1 && 9 !== a.keyCode && setTimeout(function () {
                    b.updateOverlay()
                }, 1)
            },
            keyDown: function (b, c) {
                var d = this,
                    e = d.options,
                    f = b.keyCode || c && c.keyCode,
                    g = !1;
                if (["int", "float", "money", "currency", "percent"].indexOf(d.type) !== -1) {
                    if (!e.keyboard || a(d.el).prop("readonly") || a(d.el).prop("disabled")) return;
                    var h = parseFloat(a(d.el).val().replace(e.moneyRE, "")) || 0,
                        i = e.step;
                    switch ((b.ctrlKey || b.metaKey) && (i = 10), f) {
                        case 38:
                            if (b.shiftKey) break;
                            a(d.el).val(h + i <= e.max || null == e.max ? Number((h + i).toFixed(12)) : e.max).change(), g = !0;
                            break;
                        case 40:
                            if (b.shiftKey) break;
                            a(d.el).val(h - i >= e.min || null == e.min ? Number((h - i).toFixed(12)) : e.min).change(), g = !0
                    }
                    g && (b.preventDefault(), setTimeout(function () {
                        d.el.setSelectionRange(d.el.value.length, d.el.value.length)
                    }, 0))
                }
                if ("date" === d.type) {
                    if (!e.keyboard || a(d.el).prop("readonly") || a(d.el).prop("disabled")) return;
                    var j = 864e5,
                        i = 1;
                    (b.ctrlKey || b.metaKey) && (i = 10);
                    var k = w2utils.isDate(a(d.el).val(), e.format, !0);
                    switch (k || (k = new Date, j = 0), f) {
                        case 38:
                            if (b.shiftKey) break;
                            var l = w2utils.formatDate(k.getTime() + j, e.format);
                            10 == i && (l = w2utils.formatDate(new Date(k.getFullYear(), k.getMonth() + 1, k.getDate()), e.format)), a(d.el).val(l).trigger("input").change(), g = !0;
                            break;
                        case 40:
                            if (b.shiftKey) break;
                            var l = w2utils.formatDate(k.getTime() - j, e.format);
                            10 == i && (l = w2utils.formatDate(new Date(k.getFullYear(), k.getMonth() - 1, k.getDate()), e.format)), a(d.el).val(l).trigger("input").change(), g = !0
                    }
                    g && (b.preventDefault(), setTimeout(function () {
                        d.el.setSelectionRange(d.el.value.length, d.el.value.length), d.updateOverlay()
                    }, 0))
                }
                if ("time" === d.type) {
                    if (!e.keyboard || a(d.el).prop("readonly") || a(d.el).prop("disabled")) return;
                    var i = b.ctrlKey || b.metaKey ? 60 : 1,
                        h = a(d.el).val(),
                        m = d.toMin(h) || d.toMin((new Date).getHours() + ":" + ((new Date).getMinutes() - 1));
                    switch (f) {
                        case 38:
                            if (b.shiftKey) break;
                            m += i, g = !0;
                            break;
                        case 40:
                            if (b.shiftKey) break;
                            m -= i, g = !0
                    }
                    g && (a(d.el).val(d.fromMin(m)).trigger("input").change(), b.preventDefault(), setTimeout(function () {
                        d.el.setSelectionRange(d.el.value.length, d.el.value.length)
                    }, 0))
                }
                if ("datetime" === d.type) {
                    if (!e.keyboard || a(d.el).prop("readonly") || a(d.el).prop("disabled")) return;
                    var j = 864e5,
                        i = 1;
                    (b.ctrlKey || b.metaKey) && (i = 10);
                    var n = a(d.el).val(),
                        k = w2utils.isDateTime(n, this.options.format, !0);
                    switch (k || (k = new Date, j = 0), f) {
                        case 38:
                            if (b.shiftKey) break;
                            var l = w2utils.formatDateTime(k.getTime() + j, e.format);
                            10 == i && (l = w2utils.formatDateTime(new Date(k.getFullYear(), k.getMonth() + 1, k.getDate()), e.format)), a(d.el).val(l).trigger("input").change(), g = !0;
                            break;
                        case 40:
                            if (b.shiftKey) break;
                            var l = w2utils.formatDateTime(k.getTime() - j, e.format);
                            10 == i && (l = w2utils.formatDateTime(new Date(k.getFullYear(), k.getMonth() - 1, k.getDate()), e.format)), a(d.el).val(l).trigger("input").change(), g = !0
                    }
                    g && (b.preventDefault(), setTimeout(function () {
                        d.el.setSelectionRange(d.el.value.length, d.el.value.length), d.updateOverlay()
                    }, 0))
                }
                if ("color" === d.type) {
                    if (a(d.el).prop("readonly") || a(d.el).prop("disabled")) return;
                    if ((b.ctrlKey || b.metaKey) && !b.shiftKey) {
                        var o = null,
                            p = null;
                        switch (f) {
                            case 38:
                                o = "up";
                                break;
                            case 40:
                                o = "down";
                                break;
                            case 39:
                                o = "right";
                                break;
                            case 37:
                                o = "left"
                        }
                        d.el.nav && null != o && (p = d.el.nav(o), a(d.el).val(p).change(), b.preventDefault())
                    }
                }
                if (["list", "combo", "enum"].indexOf(d.type) !== -1) {
                    if (a(d.el).prop("readonly") || a(d.el).prop("disabled")) return;
                    var q = a(d.el).data("selected"),
                        r = a(d.el),
                        s = !1;
                    switch (["list", "enum"].indexOf(d.type) !== -1 && ("list" === d.type && (r = a(d.helpers.focus).find("input")), "enum" === d.type && (r = a(d.helpers.multi).find("input")), [37, 38, 39, 40].indexOf(f) == -1 && setTimeout(function () {
                        d.refresh()
                    }, 1), 86 == b.keyCode && (b.ctrlKey || b.metaKey) && setTimeout(function () {
                        d.refresh(), d.search(), d.request()
                    }, 50)), f) {
                        case 27:
                            "list" === d.type && ("" !== r.val() && r.val(""), b.stopPropagation());
                            break;
                        case 37:
                        case 39:
                            break;
                        case 13:
                            if (0 === a("#w2ui-overlay").length) break;
                            var t = e.items[e.index];
                            if ("enum" === d.type)
                                if (null != t) {
                                    var u = d.trigger({
                                        phase: "before",
                                        type: "add",
                                        target: d.el,
                                        originalEvent: b.originalEvent,
                                        item: t
                                    });
                                    if (u.isCancelled === !0) return;
                                    t = u.item, q.length >= e.max && e.max > 0 && q.pop(), delete t.hidden, delete d.tmp.force_open, q.push(t), a(d.el).change(), r.val("").width(20), d.refresh(), d.trigger(a.extend(u, {
                                        phase: "after"
                                    }))
                                } else {
                                    t = {
                                        id: r.val(),
                                        text: r.val()
                                    };
                                    var u = d.trigger({
                                        phase: "before",
                                        type: "new",
                                        target: d.el,
                                        originalEvent: b.originalEvent,
                                        item: t
                                    });
                                    if (u.isCancelled === !0) return;
                                    t = u.item, "function" == typeof d.onNew && (q.length >= e.max && e.max > 0 && q.pop(), delete d.tmp.force_open, q.push(t), a(d.el).change(), r.val("").width(20), d.refresh()), d.trigger(a.extend(u, {
                                        phase: "after"
                                    }))
                                }
                            else t && a(d.el).data("selected", t).val(t.text).change(), "" === a(d.el).val() && a(d.el).data("selected") && a(d.el).removeData("selected").val("").change(), "list" === d.type && (r.val(""), d.refresh()), d.tmp.force_hide = !0;
                            break;
                        case 8:
                        case 46:
                            if ("enum" === d.type && 8 === f && "" === r.val() && q.length > 0) {
                                var t = q[q.length - 1],
                                    u = d.trigger({
                                        phase: "before",
                                        type: "remove",
                                        target: d.el,
                                        originalEvent: b.originalEvent,
                                        item: t
                                    });
                                if (u.isCancelled === !0) return;
                                q.pop(), a(d.el).trigger("input").trigger("change"), d.refresh(), d.trigger(a.extend(u, {
                                    phase: "after"
                                }))
                            }
                            "list" === d.type && "" === r.val() && (a(d.el).data("selected", {}).change(), d.refresh());
                            break;
                        case 38:
                            for (e.index = w2utils.isInt(e.index) ? parseInt(e.index) : 0, e.index--; e.index > 0 && e.items[e.index].hidden;) e.index--;
                            if (0 === e.index && e.items[e.index].hidden)
                                for (; e.items[e.index] && e.items[e.index].hidden;) e.index++;
                            s = !0;
                            break;
                        case 40:
                            for (e.index = w2utils.isInt(e.index) ? parseInt(e.index) : -1, e.index++; e.index < e.items.length - 1 && e.items[e.index].hidden;) e.index++;
                            if (e.index == e.items.length - 1 && e.items[e.index].hidden)
                                for (; e.items[e.index] && e.items[e.index].hidden;) e.index--;
                            "" === r.val() && 0 === a("#w2ui-overlay").length ? d.tmp.force_open = !0 : s = !0
                    }
                    if (s) return e.index < 0 && (e.index = 0), e.index >= e.items.length && (e.index = e.items.length - 1), d.updateOverlay(s), b.preventDefault(), void setTimeout(function () {
                        if ("enum" === d.type) {
                            var a = r.get(0);
                            a.setSelectionRange(a.value.length, a.value.length)
                        } else if ("list" === d.type) {
                            var a = r.get(0);
                            a.setSelectionRange(a.value.length, a.value.length)
                        } else d.el.setSelectionRange(d.el.value.length, d.el.value.length)
                    }, 0);
                    "enum" === d.type && r.width(8 * (r.val().length + 2) + "px")
                }
            },
            keyUp: function (b) {
                var c = this;
                if (["list", "combo", "enum"].indexOf(this.type) !== -1) {
                    if (a(c.el).prop("readonly") || a(c.el).prop("disabled")) return;
                    if ([16, 17, 18, 20, 37, 39, 91].indexOf(b.keyCode) == -1) {
                        var d = a(this.helpers.focus).find("input");
                        0 === d.length && (d = a(this.el));
                        var e = this.trigger({
                            phase: "before",
                            type: "search",
                            originalEvent: b,
                            target: d,
                            search: d.val()
                        });
                        if (e.isCancelled === !0) return;
                        this.tmp.force_hide || this.request(), 1 == d.val().length && this.refresh(), 0 !== a("#w2ui-overlay").length && [38, 40].indexOf(b.keyCode) != -1 || this.search(), this.trigger(a.extend(e, {
                            phase: "after"
                        }))
                    }
                }
            },
            clearCache: function () {
                var a = this.options;
                a.items = [], this.tmp.xhr_loading = !1, this.tmp.xhr_search = "", this.tmp.xhr_total = -1
            },
            request: function (b) {
                var c = this,
                    d = this.options,
                    e = a(c.el).val() || "";
                if (d.url) {
                    if ("enum" === c.type) {
                        var f = a(c.helpers.multi).find("input");
                        e = 0 === f.length ? "" : f.val()
                    }
                    if ("list" === c.type) {
                        var f = a(c.helpers.focus).find("input");
                        e = 0 === f.length ? "" : f.val()
                    }
                    if (0 !== d.minLength && e.length < d.minLength) return d.items = [], void this.updateOverlay();
                    null == b && (b = d.interval), null == c.tmp.xhr_search && (c.tmp.xhr_search = ""), null == c.tmp.xhr_total && (c.tmp.xhr_total = -1), d.url && a(c.el).prop("readonly") !== !0 && a(c.el).prop("disabled") !== !0 && (0 === d.items.length && 0 !== c.tmp.xhr_total || c.tmp.xhr_total == d.cacheMax && e.length > c.tmp.xhr_search.length || e.length >= c.tmp.xhr_search.length && e.substr(0, c.tmp.xhr_search.length) !== c.tmp.xhr_search || e.length < c.tmp.xhr_search.length) && (c.tmp.xhr && c.tmp.xhr.abort(), c.tmp.xhr_loading = !0, c.search(), clearTimeout(c.tmp.timeout), c.tmp.timeout = setTimeout(function () {
                        var b = d.url,
                            f = {
                                search: e,
                                max: d.cacheMax
                            };
                        a.extend(f, d.postData);
                        var g = c.trigger({
                            phase: "before",
                            type: "request",
                            search: e,
                            target: c.el,
                            url: b,
                            postData: f
                        });
                        if (g.isCancelled !== !0) {
                            b = g.url, f = g.postData;
                            var h = {
                                type: "GET",
                                url: b,
                                data: f,
                                dataType: "JSON"
                            };
                            d.method && (h.type = d.method), "JSON" === w2utils.settings.dataType && (h.type = "POST", h.data = JSON.stringify(h.data), h.contentType = "application/json"), "HTTPJSON" === w2utils.settings.dataType && (h.data = {
                                request: JSON.stringify(h.data)
                            }), null != d.method && (h.type = d.method), c.tmp.xhr = a.ajax(h).done(function (b, g, h) {
                                var i = c.trigger({
                                    phase: "before",
                                    type: "load",
                                    target: c.el,
                                    search: f.search,
                                    data: b,
                                    xhr: h
                                });
                                if (i.isCancelled !== !0) {
                                    if (b = i.data, "string" == typeof b && (b = JSON.parse(b)), null == b.records && null != b.items && (b.records = b.items, delete b.items), "success" === b.status && null == b.records && (b.records = []), "success" !== b.status || !Array.isArray(b.records)) return void console.log("ERROR: server did not return proper structure. It should return", {
                                        status: "success",
                                        records: [{
                                            id: 1,
                                            text: "item"
                                        }]
                                    });
                                    b.records.length > d.cacheMax && b.records.splice(d.cacheMax, 1e5), null == d.recId && null != d.recid && (d.recId = d.recid), (d.recId || d.recText) && b.records.forEach(function (a) {
                                        "string" == typeof d.recId && (a.id = a[d.recId]), "function" == typeof d.recId && (a.id = d.recId(a)), "string" == typeof d.recText && (a.text = a[d.recText]), "function" == typeof d.recText && (a.text = d.recText(a))
                                    }), c.tmp.xhr_loading = !1, c.tmp.xhr_search = e, c.tmp.xhr_total = b.records.length, d.items = c.normMenu(b.records), "" === e && 0 === b.records.length ? c.tmp.emptySet = !0 : c.tmp.emptySet = !1, c.search(), c.trigger(a.extend(i, {
                                        phase: "after"
                                    }))
                                }
                            }).fail(function (b, f, g) {
                                var h = {
                                    status: f,
                                    error: g,
                                    rawResponseText: b.responseText
                                },
                                    i = c.trigger({
                                        phase: "before",
                                        type: "error",
                                        target: c.el,
                                        search: e,
                                        error: h,
                                        xhr: b
                                    });
                                if (i.isCancelled !== !0) {
                                    if ("abort" !== f) {
                                        var j;
                                        try {
                                            j = a.parseJSON(b.responseText)
                                        } catch (a) { }
                                        console.log("ERROR: Server communication failed.", "\n   EXPECTED:", {
                                            status: "success",
                                            records: [{
                                                id: 1,
                                                text: "item"
                                            }]
                                        }, "\n         OR:", {
                                                status: "error",
                                                message: "error message"
                                            }, "\n   RECEIVED:", "object" == typeof j ? j : b.responseText)
                                    }
                                    c.tmp.xhr_loading = !1, c.tmp.xhr_search = e, c.tmp.xhr_total = 0, d.items = [], c.clearCache(), c.search(), c.updateOverlay(!1, '<div style="white-space: normal; line-height: 1.3">' + (i.error || "Server communication failed") + "</div>"), c.trigger(a.extend(i, {
                                        phase: "after"
                                    }))
                                }
                            }), c.trigger(a.extend(g, {
                                phase: "after"
                            }))
                        }
                    }, b))
                }
            },
            search: function () {
                var b = this,
                    c = this.options,
                    d = a(b.el).val(),
                    e = b.el,
                    f = [],
                    g = a(b.el).data("selected");
                if ("enum" === b.type) {
                    e = a(b.helpers.multi).find("input"), d = e.val();
                    for (var h in g) g[h] && f.push(g[h].id)
                } else if ("list" === b.type) {
                    e = a(b.helpers.focus).find("input"), d = e.val();
                    for (var h in g) g[h] && f.push(g[h].id)
                }
                if (b.tmp.xhr_loading !== !0) {
                    for (var i = 0, j = 0; j < c.items.length; j++) {
                        var k = c.items[j];
                        if (null != c.compare) "function" == typeof c.compare && (k.hidden = c.compare.call(this, k, d) === !1);
                        else {
                            var l = "",
                                m = "";
                            ["is", "begins"].indexOf(c.match) !== -1 && (l = "^"), ["is", "ends"].indexOf(c.match) !== -1 && (m = "$");
                            try {
                                var n = new RegExp(l + d + m, "i");
                                n.test(k.text) || "..." === k.text ? k.hidden = !1 : k.hidden = !0
                            } catch (a) { }
                        }
                        c.filter === !1 && (k.hidden = !1), "enum" === b.type && a.inArray(k.id, f) !== -1 && (k.hidden = !0), k.hidden !== !0 && (i++ , delete k.hidden)
                    }
                    for (c.index = -1; c.items[c.index] && c.items[c.index].hidden;) c.index++;
                    i <= 0 && (c.index = -1), c.spinner = !1, b.updateOverlay(), setTimeout(function () {
                        var b = a("#w2ui-overlay").html() || "";
                        c.markSearch && b.indexOf("$.fn.w2menuHandler") !== -1 && a("#w2ui-overlay").w2marker(d)
                    }, 1)
                } else c.items.splice(0, c.cacheMax), c.spinner = !0, b.updateOverlay()
            },
            updateOverlay: function (b, c) {
                var d = this,
                    e = this.options;
                if ("color" === this.type) {
                    if (a(d.el).prop("readonly") || a(d.el).prop("disabled")) return;
                    a(this.el).w2color({
                        color: a(this.el).val(),
                        transparent: e.transparent,
                        advanced: e.advanced
                    }, function (b) {
                        null != b && a(d.el).val(b).trigger("input").change()
                    })
                }
                if ("date" === this.type) {
                    if (a(d.el).prop("readonly") || a(d.el).prop("disabled")) return;
                    0 === a("#w2ui-overlay").length && a(d.el).w2overlay('<div class="w2ui-reset w2ui-calendar"></div>', {
                        css: {
                            "background-color": "#f5f5f5"
                        },
                        onShow: function (b) {
                            w2utils.isIE && (console.log("IE"), a("calendar").on("mousedown", function (b) {
                                var c = a(b.target);
                                1 === c.length && "w2ui-jump-year" === c[0].id && a("#w2ui-overlay").data("keepOpen", !0)
                            }))
                        }
                    });
                    var f, g, h = w2utils.isDate(a(d.el).val(), d.options.format, !0);
                    h && (f = h.getMonth() + 1, g = h.getFullYear()),
                        function b(c, e) {
                            a("#w2ui-overlay > div > div").html(d.getMonthHTML(c, e, a(d.el).val())), a("#w2ui-overlay calendar-title").on("mousedown", function () {
                                if (a(this).next().hasClass("w2ui-calendar-jump")) a(this).next().remove();
                                else {
                                    var c, e;
                                    a(this).after('<div class="w2ui-calendar-jump" style=""></div>'), a(this).next().hide().html(d.getYearHTML()).fadeIn(200), setTimeout(function () {
                                        a("#w2ui-overlay calendar-jump").find("jump-month, jump-year").on("click", function () {
                                            a(this).hasClass("w2ui-jump-month") && (a(this).parent().find("jump-month").removeClass("selected"), a(this).addClass("selected"), e = a(this).attr("name")), a(this).hasClass("w2ui-jump-year") && (a(this).parent().find("jump-year").removeClass("selected"), a(this).addClass("selected"), c = a(this).attr("name")), null != c && null != e && (a("#w2ui-overlay calendar-jump").fadeOut(100), setTimeout(function () {
                                                b(parseInt(e) + 1, c)
                                            }, 100))
                                        }), a("#w2ui-overlay calendar-jump >:last-child").prop("scrollTop", 2e3)
                                    }, 1)
                                }
                            }), a("#w2ui-overlay date").on("mousedown", function () {
                                var b = a(this).attr("date");
                                a(d.el).val(b).trigger("input").change(), a(this).css({
                                    "background-color": "#B6D5FB",
                                    "border-color": "#aaa"
                                })
                            }).on("mouseup", function () {
                                setTimeout(function () {
                                    a("#w2ui-overlay").length > 0 && a("#w2ui-overlay").removeData("keepOpen")[0].hide()
                                }, 10)
                            }), a("#w2ui-overlay .previous").on("mousedown", function () {
                                var a = d.options.current.split("/");
                                a[0] = parseInt(a[0]) - 1, b(a[0], a[1])
                            }), a("#w2ui-overlay .next").on("mousedown", function () {
                                var a = d.options.current.split("/");
                                a[0] = parseInt(a[0]) + 1, b(a[0], a[1])
                            })
                        }(f, g)
                }
                if ("time" === this.type) {
                    if (a(d.el).prop("readonly") || a(d.el).prop("disabled")) return;
                    0 === a("#w2ui-overlay").length && a(d.el).w2overlay('<div class="w2ui-reset w2ui-calendar-time" onclick="event.stopPropagation();"></div>', {
                        css: {
                            "background-color": "#fff"
                        }
                    });
                    var i = "h24" === this.options.format;
                    a("#w2ui-overlay > div").html(d.getHourHTML()), a("#w2ui-overlay time").on("mousedown", function (b) {
                        a(this).css({
                            "background-color": "#B6D5FB",
                            "border-color": "#aaa"
                        });
                        var c = a(this).attr("hour");
                        a(d.el).val((c > 12 && !i ? c - 12 : c) + ":00" + (i ? "" : c < 12 ? " am" : " pm")).trigger("input").change()
                    }), null == this.options.noMinutes || this.options.noMinutes === !1 ? a("#w2ui-overlay time").on("mouseup", function () {
                        var b = a(this).attr("hour");
                        a("#w2ui-overlay").length > 0 && a("#w2ui-overlay")[0].hide(), a(d.el).w2overlay('<div class="w2ui-reset w2ui-calendar-time"></div>', {
                            css: {
                                "background-color": "#fff"
                            }
                        }), a("#w2ui-overlay > div").html(d.getMinHTML(b)), a("#w2ui-overlay time").on("mousedown", function () {
                            a(this).css({
                                "background-color": "#B6D5FB",
                                "border-color": "#aaa"
                            });
                            var c = a(this).attr("min");
                            a(d.el).val((b > 12 && !i ? b - 12 : b) + ":" + (c < 10 ? 0 : "") + c + (i ? "" : b < 12 ? " am" : " pm")).trigger("input").change()
                        }).on("mouseup", function () {
                            setTimeout(function () {
                                a("#w2ui-overlay").length > 0 && a("#w2ui-overlay").removeData("keepOpen")[0].hide()
                            }, 10)
                        })
                    }) : a("#w2ui-overlay time").on("mouseup", function () {
                        setTimeout(function () {
                            a("#w2ui-overlay").length > 0 && a("#w2ui-overlay").removeData("keepOpen")[0].hide()
                        }, 10)
                    })
                }
                if ("datetime" === this.type) {
                    if (a(d.el).prop("readonly") || a(d.el).prop("disabled")) return;
                    a("#w2ui-overlay time").length > 0 && a("#w2ui-overlay")[0].hide(), 0 === a("#w2ui-overlay").length && a(d.el).w2overlay('<div class="w2ui-reset w2ui-calendar" onclick="event.stopPropagation();"></div>', {
                        css: {
                            "background-color": "#f5f5f5"
                        },
                        onShow: function (b) {
                            w2utils.isIE && (console.log("IE"), a("calendar").on("mousedown", function (b) {
                                var c = a(b.target);
                                1 === c.length && "w2ui-jump-year" === c[0].id && a("#w2ui-overlay").data("keepOpen", !0)
                            }))
                        }
                    });
                    var f, g, h = w2utils.isDateTime(a(d.el).val(), d.options.format, !0);
                    h && (f = h.getMonth() + 1, g = h.getFullYear());
                    var j = null;
                    ! function b(c, f) {
                        a("#w2ui-overlay > div > div").html(d.getMonthHTML(c, f, a(d.el).val()) + (e.btn_now ? '<div class="w2ui-calendar-now now">' + w2utils.lang("Current Date & Time") + "</div>" : "")), a("#w2ui-overlay calendar-title").on("mousedown", function () {
                            if (a(this).next().hasClass("w2ui-calendar-jump")) a(this).next().remove();
                            else {
                                var c, e;
                                a(this).after('<div class="w2ui-calendar-jump" style=""></div>'), a(this).next().hide().html(d.getYearHTML()).fadeIn(200), setTimeout(function () {
                                    a("#w2ui-overlay calendar-jump").find("jump-month, jump-year").on("click", function () {
                                        a(this).hasClass("w2ui-jump-month") && (a(this).parent().find("jump-month").removeClass("selected"), a(this).addClass("selected"), e = a(this).attr("name")), a(this).hasClass("w2ui-jump-year") && (a(this).parent().find("jump-year").removeClass("selected"), a(this).addClass("selected"), c = a(this).attr("name")), null != c && null != e && (a("#w2ui-overlay calendar-jump").fadeOut(100), setTimeout(function () {
                                            b(parseInt(e) + 1, c)
                                        }, 100))
                                    }), a("#w2ui-overlay calendar-jump >:last-child").prop("scrollTop", 2e3)
                                }, 1)
                            }
                        }), a("#w2ui-overlay date").on("mousedown", function () {
                            var b = a(this).attr("date");
                            a(d.el).val(b).trigger("input").change(), a(this).css({
                                "background-color": "#B6D5FB",
                                "border-color": "#aaa"
                            }), j = new Date(a(this).attr("data-date"))
                        }).on("mouseup", function () {
                            var b, c;
                            a("#w2ui-overlay").length > 0 && a("#w2ui-overlay")[0].hide(), a(d.el).w2overlay('<div class="w2ui-reset w2ui-calendar-time"></div>', {
                                css: {
                                    "background-color": "#fff"
                                }
                            });
                            "h24" === d.options.format;
                            a("#w2ui-overlay > div").html(d.getHourHTML()), a("#w2ui-overlay time").on("mousedown", function (c) {
                                a(this).css({
                                    "background-color": "#B6D5FB",
                                    "border-color": "#aaa"
                                }), b = a(this).attr("hour"), j.setHours(b);
                                var e = w2utils.formatDateTime(j, d.options.format);
                                a(d.el).val(e).trigger("input").change()
                            }), null == d.options.noMinutes || d.options.noMinutes === !1 ? a("#w2ui-overlay time").on("mouseup", function () {
                                var e = a(this).attr("hour");
                                a("#w2ui-overlay").length > 0 && a("#w2ui-overlay")[0].hide(), a(d.el).w2overlay('<div class="w2ui-reset w2ui-calendar-time"></div>', {
                                    css: {
                                        "background-color": "#fff"
                                    }
                                }), a("#w2ui-overlay > div").html(d.getMinHTML(e)), a("#w2ui-overlay time").on("mousedown", function () {
                                    a(this).css({
                                        "background-color": "#B6D5FB",
                                        "border-color": "#aaa"
                                    }), c = a(this).attr("min"), j.setHours(b, c);
                                    var e = w2utils.formatDateTime(j, d.options.format);
                                    a(d.el).val(e).trigger("input").change()
                                }).on("mouseup", function () {
                                    setTimeout(function () {
                                        a("#w2ui-overlay").length > 0 && a("#w2ui-overlay").removeData("keepOpen")[0].hide()
                                    }, 10)
                                })
                            }) : a("#w2ui-overlay time").on("mouseup", function () {
                                setTimeout(function () {
                                    a("#w2ui-overlay").length > 0 && a("#w2ui-overlay").removeData("keepOpen")[0].hide()
                                }, 10)
                            })
                        }), a("#w2ui-overlay .previous").on("mousedown", function () {
                            var a = d.options.current.split("/");
                            a[0] = parseInt(a[0]) - 1, b(a[0], a[1])
                        }), a("#w2ui-overlay .next").on("mousedown", function () {
                            var a = d.options.current.split("/");
                            a[0] = parseInt(a[0]) + 1, b(a[0], a[1])
                        }), a("#w2ui-overlay .now").on("mousedown", function () {
                            var b = w2utils.formatDateTime(new Date, d.options.format);
                            return a(d.el).val(b).trigger("input").change(), !1
                        }).on("mouseup", function () {
                            setTimeout(function () {
                                a("#w2ui-overlay").length > 0 && a("#w2ui-overlay").removeData("keepOpen")[0].hide()
                            }, 10)
                        })
                    }(f, g)
                }
                if (["list", "combo", "enum"].indexOf(this.type) !== -1) {
                    var k = this.el,
                        l = this.el;
                    if ("enum" === this.type && (k = a(this.helpers.multi), l = a(k).find("input")), "list" === this.type) {
                        var m = a(l).data("selected");
                        a.isPlainObject(m) && !a.isEmptyObject(m) && e.index == -1 && e.items.forEach(function (a, b) {
                            a.id === m.id && (e.index = b)
                        }), l = a(this.helpers.focus).find("input")
                    }
                    if (a(l).is(":focus")) {
                        if (e.openOnFocus === !1 && "" === a(l).val() && d.tmp.force_open !== !0) return void a().w2overlay();
                        if (d.tmp.force_hide) return a().w2overlay(), void setTimeout(function () {
                            delete d.tmp.force_hide
                        }, 1);
                        "" !== a(l).val() && delete d.tmp.force_open;
                        var n = w2utils.lang("No matches");
                        null != e.url && a(l).val().length < e.minLength && d.tmp.emptySet !== !0 && (n = e.minLength + " " + w2utils.lang("letters or more...")), null != e.url && "" === a(l).val() && d.tmp.emptySet !== !0 && (n = w2utils.lang("Type to search...")), null == e.url && 0 === e.items.length && (n = w2utils.lang("Empty list")), null != e.msgNoItems && (n = e.msgNoItems), "function" == typeof n && (n = n(e)), c && (n = c), a(k).w2menu(b ? "refresh-index" : "refresh", a.extend(!0, {}, e, {
                            search: !1,
                            render: e.renderDrop,
                            maxHeight: e.maxDropHeight,
                            maxWidth: e.maxDropWidth,
                            msgNoItems: n,
                            onSelect: function (b) {
                                if ("enum" === d.type) {
                                    var c = a(d.el).data("selected");
                                    if (b.item) {
                                        var f = d.trigger({
                                            phase: "before",
                                            type: "add",
                                            target: d.el,
                                            originalEvent: b.originalEvent,
                                            item: b.item
                                        });
                                        if (f.isCancelled === !0) return;
                                        c.length >= e.max && e.max > 0 && c.pop(), delete b.item.hidden, c.push(b.item), a(d.el).data("selected", c).trigger("input").change(), a(d.helpers.multi).find("input").val("").width(20), d.refresh(), a("#w2ui-overlay").length > 0 && a("#w2ui-overlay")[0].hide(), d.trigger(a.extend(f, {
                                            phase: "after"
                                        }))
                                    }
                                } else a(d.el).data("selected", b.item).val(b.item.text).trigger("input").change(), d.helpers.focus && d.helpers.focus.find("input").val("")
                            }
                        }))
                    }
                }
            },
            inRange: function (b, c) {
                var d = !1;
                if ("date" === this.type) {
                    var e = w2utils.isDate(b, this.options.format, !0);
                    if (e) {
                        if (this.options.start || this.options.end) {
                            var f = "string" == typeof this.options.start ? this.options.start : a(this.options.start).val(),
                                g = "string" == typeof this.options.end ? this.options.end : a(this.options.end).val(),
                                h = w2utils.isDate(f, this.options.format, !0),
                                i = w2utils.isDate(g, this.options.format, !0),
                                j = new Date(e);
                            h || (h = j), i || (i = j), j >= h && j <= i && (d = !0)
                        } else d = !0;
                        if (this.options.blocked && a.inArray(b, this.options.blocked) !== -1 && (d = !1), null !== this.options.blockWeekDays && void 0 !== this.options.blockWeekDays && void 0 != this.options.blockWeekDays.length)
                            for (var k = this.options.blockWeekDays.length, l = 0; l < k; l++) e.getDay() == this.options.blockWeekDays[l] && (d = !1)
                    }
                } else if ("time" === this.type)
                    if (this.options.start || this.options.end) {
                        var m = this.toMin(b),
                            n = this.toMin(this.options.start),
                            o = this.toMin(this.options.end);
                        n || (n = m), o || (o = m), m >= n && m <= o && (d = !0)
                    } else d = !0;
                else if ("datetime" === this.type) {
                    var e = w2utils.isDateTime(b, this.options.format, !0);
                    if (e) {
                        if (this.options.start || this.options.end) {
                            var h, i;
                            if ("object" == typeof this.options.start && this.options.start instanceof Date) h = this.options.start;
                            else {
                                var f = "string" == typeof this.options.start ? this.options.start : a(this.options.start).val();
                                h = "" !== f.trim() ? w2utils.isDateTime(f, this.options.format, !0) : ""
                            }
                            if ("object" == typeof this.options.end && this.options.end instanceof Date) i = this.options.end;
                            else {
                                var g = "string" == typeof this.options.end ? this.options.end : a(this.options.end).val();
                                i = "" !== g.trim() ? w2utils.isDateTime(g, this.options.format, !0) : ""
                            }
                            var j = e;
                            h || (h = j), i || (i = j), c && h instanceof Date && (h.setHours(0), h.setMinutes(0), h.setSeconds(0)), j >= h && j <= i && (d = !0)
                        } else d = !0;
                        if (d && this.options.blocked)
                            for (var l = 0; l < this.options.blocked.length; l++) {
                                var p = this.options.blocked[l];
                                if ("string" == typeof p && (p = w2utils.isDateTime(p, this.options.format, !0)), "object" == typeof p && p instanceof Date && p.getFullYear() == e.getFullYear() && p.getMonth() == e.getMonth() && p.getDate() == e.getDate()) {
                                    d = !1;
                                    break
                                }
                            }
                    }
                }
                return d
            },
            checkType: function (a, b) {
                var c = this;
                switch (c.type) {
                    case "int":
                        return !(!b || ["-", c.options.groupSymbol].indexOf(a) === -1) || w2utils.isInt(a.replace(c.options.numberRE, ""));
                    case "percent":
                        a = a.replace(/%/g, "");
                    case "float":
                        return !(!b || ["-", w2utils.settings.decimalSymbol, c.options.groupSymbol].indexOf(a) === -1) || w2utils.isFloat(a.replace(c.options.numberRE, ""));
                    case "money":
                    case "currency":
                        return !(!b || ["-", c.options.decimalSymbol, c.options.groupSymbol, c.options.currencyPrefix, c.options.currencySuffix].indexOf(a) === -1) || w2utils.isFloat(a.replace(c.options.moneyRE, ""));
                    case "bin":
                        return w2utils.isBin(a);
                    case "hex":
                        return w2utils.isHex(a);
                    case "alphanumeric":
                        return w2utils.isAlphaNumeric(a)
                }
                return !0
            },
            addPrefix: function () {
                var b = this;
                setTimeout(function () {
                    if ("clear" !== b.type) {
                        var c, d = a(b.el).data("tmp") || {};
                        d["old-padding-left"] && a(b.el).css("padding-left", d["old-padding-left"]), d["old-padding-left"] = a(b.el).css("padding-left"), a(b.el).data("tmp", d), b.helpers.prefix && a(b.helpers.prefix).remove(), "" !== b.options.prefix && (a(b.el).before('<div class="w2ui-field-helper">' + b.options.prefix + "</div>"), c = a(b.el).prev(), c.css({
                            color: a(b.el).css("color"),
                            "font-family": a(b.el).css("font-family"),
                            "font-size": a(b.el).css("font-size"),
                            "padding-top": a(b.el).css("padding-top"),
                            "padding-bottom": a(b.el).css("padding-bottom"),
                            "padding-left": a(b.el).css("padding-left"),
                            "padding-right": 0,
                            "margin-top": parseInt(a(b.el).css("margin-top"), 10) + 2 + "px",
                            "margin-bottom": parseInt(a(b.el).css("margin-bottom"), 10) + 1 + "px",
                            "margin-left": a(b.el).css("margin-left"),
                            "margin-right": 0
                        }).on("click", function (c) {
                            if (b.options.icon && "function" == typeof b.onIconClick) {
                                var d = b.trigger({
                                    phase: "before",
                                    type: "iconClick",
                                    target: b.el,
                                    el: a(this).find("spanicon")[0]
                                });
                                if (d.isCancelled === !0) return;
                                b.trigger(a.extend(d, {
                                    phase: "after"
                                }))
                            } else "list" === b.type ? a(b.helpers.focus).find("input").focus() : a(b.el).focus()
                        }), a(b.el).css("padding-left", c.width() + parseInt(a(b.el).css("padding-left"), 10) + "px"), b.helpers.prefix = c)
                    }
                }, 1)
            },
            addSuffix: function () {
                var b, c, d = this;
                setTimeout(function () {
                    if ("clear" !== d.type) {
                        var e = a(d.el).data("tmp") || {};
                        e["old-padding-right"] && a(d.el).css("padding-right", e["old-padding-right"]), e["old-padding-right"] = a(d.el).css("padding-right"), a(d.el).data("tmp", e), c = parseInt(a(d.el).css("padding-right"), 10), d.options.arrows && (d.helpers.arrows && a(d.helpers.arrows).remove(), a(d.el).after('<div class="w2ui-field-helper" style="border: 1px solid transparent">&#160;    <div class="w2ui-field-up" type="up">        <div class="arrow-up" type="up"></div>    </div>    <div class="w2ui-field-down" type="down">        <div class="arrow-down" type="down"></div>    </div></div>'), b = a(d.el).next(), b.css({
                            color: a(d.el).css("color"),
                            "font-family": a(d.el).css("font-family"),
                            "font-size": a(d.el).css("font-size"),
                            height: a(d.el).height() + parseInt(a(d.el).css("padding-top"), 10) + parseInt(a(d.el).css("padding-bottom"), 10) + "px",
                            padding: 0,
                            "margin-top": parseInt(a(d.el).css("margin-top"), 10) + 1 + "px",
                            "margin-bottom": 0,
                            "border-left": "1px solid silver"
                        }).css("margin-left", "-" + (b.width() + parseInt(a(d.el).css("margin-right"), 10) + 12) + "px").on("mousedown", function (b) {
                            function c() {
                                clearTimeout(f.data("_field_update_timer")), f.off("mouseup", c)
                            }

                            function e(c) {
                                a(d.el).focus(), d.keyDown(a.Event("keydown"), {
                                    keyCode: "up" === a(b.target).attr("type") ? 38 : 40
                                }), c !== !1 && a("body").data("_field_update_timer", setTimeout(e, 60))
                            }
                            var f = a("body");
                            f.on("mouseup", c), f.data("_field_update_timer", setTimeout(e, 700)), e(!1)
                        }), c += b.width() + 12, a(d.el).css("padding-right", c + "px"), d.helpers.arrows = b), "" !== d.options.suffix && (d.helpers.suffix && a(d.helpers.suffix).remove(), a(d.el).after('<div class="w2ui-field-helper">' + d.options.suffix + "</div>"), b = a(d.el).next(), b.css({
                            color: a(d.el).css("color"),
                            "font-family": a(d.el).css("font-family"),
                            "font-size": a(d.el).css("font-size"),
                            "padding-top": a(d.el).css("padding-top"),
                            "padding-bottom": a(d.el).css("padding-bottom"),
                            "padding-left": "3px",
                            "padding-right": a(d.el).css("padding-right"),
                            "margin-top": parseInt(a(d.el).css("margin-top"), 10) + 2 + "px",
                            "margin-bottom": parseInt(a(d.el).css("margin-bottom"), 10) + 1 + "px"
                        }).on("click", function (b) {
                            "list" === d.type ? a(d.helpers.focus).find("input").focus() : a(d.el).focus()
                        }), b.css("margin-left", "-" + (w2utils.getSize(b, "width") + parseInt(a(d.el).css("margin-right"), 10) + 2) + "px"), c += b.width() + 3, a(d.el).css("padding-right", c + "px"), d.helpers.suffix = b)
                    }
                }, 1)
            },
            addFocus: function () {
                var b, c = this,
                    d = (this.options, 0);
                a(c.helpers.focus).remove();
                var e = parseInt(a(c.el).attr("tabIndex"));
                isNaN(e) || e === -1 || (c.el._tabIndex = e), c.el._tabIndex && (e = c.el._tabIndex), null == e && (e = -1);
                var f = '<div class="w2ui-field-helper">    <div class="w2ui-icon icon-search" style="opacity: 0; display: none"></div>    <input type="text" autocomplete="off" tabIndex="' + e + '"/></div>';
                a(c.el).attr("tabindex", -1).before(f);
                var g = a(c.el).prev();
                c.helpers.focus = g, g.css({
                    width: a(c.el).width(),
                    "margin-top": a(c.el).css("margin-top"),
                    "margin-left": parseInt(a(c.el).css("margin-left")) + parseInt(a(c.el).css("padding-left")) + "px",
                    "margin-bottom": a(c.el).css("margin-bottom"),
                    "margin-right": a(c.el).css("margin-right")
                }).find("input").css({
                    cursor: "default",
                    width: "100%",
                    outline: "none",
                    opacity: 1,
                    margin: 0,
                    border: "1px solid transparent",
                    padding: a(c.el).css("padding-top"),
                    "padding-left": 0,
                    "margin-left": d > 0 ? d + 6 : 0,
                    "background-color": "transparent"
                }), g.find("input").on("click", function (b) {
                    0 === a("#w2ui-overlay").length && c.focus(b), b.stopPropagation()
                }).on("focus", function (d) {
                    b = a(c.el).attr("placeholder"), a(c.el).css({
                        outline: "auto 5px #7DB4F3",
                        "outline-offset": "-2px"
                    }), a(this).val(""), a(c.el).triggerHandler("focus"), d.stopPropagation ? d.stopPropagation() : d.cancelBubble = !0
                }).on("blur", function (d) {
                    a(c.el).css("outline", "none"), a(this).val(""), c.refresh(), a(c.el).triggerHandler("blur"), d.stopPropagation ? d.stopPropagation() : d.cancelBubble = !0, null != b && a(c.el).attr("placeholder", b)
                }).on("keydown", function (d) {
                    var e = this;
                    c.keyDown(d), setTimeout(function () {
                        "" === e.value ? a(c.el).attr("placeholder", b) : a(c.el).attr("placeholder", "")
                    }, 10)
                }).on("keyup", function (a) {
                    c.keyUp(a)
                }).on("keypress", function (a) {
                    c.keyPress(a)
                }), g.on("click", function (b) {
                    a(this).find("input").focus()
                }), c.refresh()
            },
            addMulti: function () {
                var b = this;
                this.options;
                a(b.helpers.multi).remove();
                var c = "",
                    d = "margin-top     : 0px; margin-bottom  : 0px; margin-left    : " + a(b.el).css("margin-left") + "; margin-right   : " + a(b.el).css("margin-right") + "; width          : " + (w2utils.getSize(b.el, "width") - parseInt(a(b.el).css("margin-left"), 10) - parseInt(a(b.el).css("margin-right"), 10)) + "px;";
                if ("enum" === b.type) {
                    var e = a(b.el).attr("tabIndex");
                    e && e !== -1 && (b.el._tabIndex = e),
                        b.el._tabIndex && (e = b.el._tabIndex), null == e && (e = -1), c = '<div class="w2ui-field-helper w2ui-list" style="' + d + '; box-sizing: border-box">    <div style="padding: 0px; margin: 0px; display: inline-block" class="w2ui-multi-items">    <ul>        <li style="padding-left: 0px; padding-right: 0px" class="nomouse">            <input type="text" style="width: 20px; margin: -3px 0 0; padding: 2px 0; border-color: white" autocomplete="off"' + (a(b.el).prop("readonly") ? ' readonly="readonly"' : "") + (a(b.el).prop("disabled") ? ' disabled="disabled"' : "") + ' tabindex="' + e + '"/>        </li>    </ul>    </div></div>'
                }
                "file" === b.type && (c = '<div class="w2ui-field-helper w2ui-list" style="' + d + '; box-sizing: border-box">   <div style="position: absolute; left: 0px; right: 0px; top: 0px; bottom: 0px;">       <input class="file-input" type="file" style="width: 100%; height: 100%; opacity: 0;" name="attachment" tabindex="-1"' + (1 !== b.options.max ? ' multiple="multiple"' : "") + (a(b.el).prop("readonly") ? ' readonly="readonly"' : "") + (a(b.el).prop("disabled") ? ' disabled="disabled"' : "") + (a(b.el).attr("accept") ? ' accept="' + a(b.el).attr("accept") + '"' : "") + '/>   </div>    <div style="position: absolute; padding: 0px; margin: 0px; display: inline-block" class="w2ui-multi-items">        <ul><li style="padding-left: 0px; padding-right: 0px" class="nomouse"></li></ul>    </div></div>');
                var f = a(b.el).data("tmp") || {};
                f["old-background-color"] = a(b.el).css("background-color"), f["old-border-color"] = a(b.el).css("border-color"), a(b.el).data("tmp", f), a(b.el).before(c).css({
                    "background-color": "transparent",
                    "border-color": "transparent"
                });
                var g = a(b.el).prev();
                b.helpers.multi = g, "enum" === b.type && (a(b.el).attr("tabindex", -1), g.find("input").on("click", function (c) {
                    0 === a("#w2ui-overlay").length && b.focus(c), a(b.el).triggerHandler("click")
                }).on("focus", function (c) {
                    a(g).css({
                        outline: "auto 5px #7DB4F3",
                        "outline-offset": "-2px"
                    }), a(b.el).triggerHandler("focus"), c.stopPropagation ? c.stopPropagation() : c.cancelBubble = !0
                }).on("blur", function (c) {
                    a(g).css("outline", "none"), a(b.el).triggerHandler("blur"), c.stopPropagation ? c.stopPropagation() : c.cancelBubble = !0
                }).on("keyup", function (a) {
                    b.keyUp(a)
                }).on("keydown", function (a) {
                    b.keyDown(a)
                }).on("keypress", function (a) {
                    b.keyPress(a)
                }), g.on("click", function (b) {
                    a(this).find("input").focus()
                })), "file" === b.type && (a(b.el).css("outline", "none"), g.on("click", function (c) {
                    a(b.el).focus(), a(b.el).prop("readonly") || a(b.el).prop("disabled") || (b.blur(c), b.resize(), setTimeout(function () {
                        g.find("input").click()
                    }, 10))
                }).on("dragenter", function (c) {
                    a(b.el).prop("readonly") || a(b.el).prop("disabled") || a(g).addClass("w2ui-file-dragover")
                }).on("dragleave", function (c) {
                    if (!a(b.el).prop("readonly") && !a(b.el).prop("disabled")) {
                        var d = a(c.target).parents("field-helper");
                        0 === d.length && a(g).removeClass("w2ui-file-dragover")
                    }
                }).on("drop", function (c) {
                    if (!a(b.el).prop("readonly") && !a(b.el).prop("disabled")) {
                        a(g).removeClass("w2ui-file-dragover");
                        for (var d = c.originalEvent.dataTransfer.files, e = 0, f = d.length; e < f; e++) b.addFile.call(b, d[e]);
                        c.preventDefault(), c.stopPropagation()
                    }
                }).on("dragover", function (a) {
                    a.preventDefault(), a.stopPropagation()
                }), g.find("input").on("click", function (a) {
                    a.stopPropagation()
                }).on("change", function () {
                    if ("undefined" != typeof this.files)
                        for (var a = 0, c = this.files.length; a < c; a++) b.addFile.call(b, this.files[a])
                })), b.refresh()
            },
            addFile: function (b) {
                var c, d = this,
                    e = this.options,
                    f = a(d.el).data("selected"),
                    g = {
                        name: b.name,
                        type: b.type,
                        modified: b.lastModifiedDate,
                        size: b.size,
                        content: null,
                        file: b
                    },
                    h = 0,
                    i = 0;
                if (f)
                    for (var j = 0; j < f.length; j++) {
                        if (f[j].name == b.name && f[j].size == b.size) return;
                        h += f[j].size, i++
                    }
                var k = d.trigger({
                    phase: "before",
                    type: "add",
                    target: d.el,
                    file: g,
                    total: i,
                    totalSize: h
                });
                if (k.isCancelled !== !0) {
                    if (0 !== e.maxFileSize && g.size > e.maxFileSize) return c = "Maximum file size is " + w2utils.formatSize(e.maxFileSize), e.silent === !1 && a(d.el).w2tag(c), void console.log("ERROR: " + c);
                    if (0 !== e.maxSize && h + g.size > e.maxSize) return c = w2utils.lang("Maximum total size is") + " " + w2utils.formatSize(e.maxSize), void (e.silent === !1 ? a(d.el).w2tag(c) : console.log("ERROR: " + c));
                    if (0 !== e.max && i >= e.max) return c = w2utils.lang("Maximum number of files is") + " " + e.max, void (e.silent === !1 ? a(d.el).w2tag(c) : console.log("ERROR: " + c));
                    if (f.push(g), "undefined" != typeof FileReader && e.readContent === !0) {
                        var l = new FileReader;
                        l.onload = function () {
                            return function (b) {
                                var c = b.target.result,
                                    e = c.indexOf(",");
                                g.content = c.substr(e + 1), d.refresh(), a(d.el).trigger("input").trigger("change"), d.trigger(a.extend(k, {
                                    phase: "after"
                                }))
                            }
                        }(), l.readAsDataURL(b)
                    } else d.refresh(), a(d.el).trigger("input").trigger("change"), d.trigger(a.extend(k, {
                        phase: "after"
                    }))
                }
            },
            normMenu: function (b) {
                if (a.isArray(b)) {
                    for (var c = 0; c < b.length; c++) "string" == typeof b[c] ? b[c] = {
                        id: b[c],
                        text: b[c]
                    } : (null != b[c].text && null == b[c].id && (b[c].id = b[c].text), null == b[c].text && null != b[c].id && (b[c].text = b[c].id), null != b[c].caption && (b[c].text = b[c].caption));
                    return b
                }
                if ("function" == typeof b) return this.normMenu(b());
                if ("object" == typeof b) {
                    var d = [];
                    for (var c in b) d.push({
                        id: c,
                        text: b[c]
                    });
                    return d
                }
            },
            getMonthHTML: function (a, b, c) {
                var d = new Date,
                    e = w2utils.settings.fullmonths,
                    f = ["31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"],
                    g = d.getFullYear() + "/" + (Number(d.getMonth()) + 1) + "/" + d.getDate(),
                    h = w2utils.settings.fulldays.slice(),
                    i = w2utils.settings.shortdays.slice();
                "M" !== w2utils.settings.weekStarts && (h.unshift(h.pop()), i.unshift(i.pop()));
                var j = this.options;
                null == j && (j = {}), b = w2utils.isInt(b) ? parseInt(b) : d.getFullYear(), a = w2utils.isInt(a) ? parseInt(a) : d.getMonth() + 1, a > 12 && (a -= 12, b++), (a < 1 || 0 === a) && (a += 12, b--), b / 4 == Math.floor(b / 4) ? f[1] = "29" : f[1] = "28", j.current = a + "/" + b, d = new Date(b, a - 1, 1);
                for (var k = d.getDay(), l = "", m = 0; m < i.length; m++) l += '<td title="' + h[m] + '">' + i[m] + "</td>";
                var n = '<div class="w2ui-calendar-title title">    <div class="w2ui-calendar-previous previous"> <div></div> </div>    <div class="w2ui-calendar-next next"> <div></div> </div> ' + e[a - 1] + ", " + b + '</div><table class="w2ui-calendar-days" cellspacing="0"><tbody>    <tr class="w2ui-day-title">' + l + "</tr>    <tr>",
                    o = 1;
                if ("M" !== w2utils.settings.weekStarts && k++ , "datetime" === this.type) {
                    var p = w2utils.isDateTime(c, j.format, !0);
                    c = w2utils.formatDate(p, w2utils.settings.dateFormat)
                }
                for (var q = 1; q < 43; q++) {
                    if (0 === k && 1 == q) {
                        for (var r = 0; r < 6; r++) n += '<td class="w2ui-day-empty">&#160;</td>';
                        q += 6
                    } else if (q < k || o > f[a - 1]) {
                        n += '<td class="w2ui-day-empty">&#160;</td>', q % 7 === 0 && (n += "</tr><tr>");
                        continue
                    }
                    var s = b + "/" + a + "/" + o,
                        t = new Date(s),
                        u = "";
                    6 === t.getDay() && (u = " w2ui-saturday"), 0 === t.getDay() && (u = " w2ui-sunday"), s == g && (u += " w2ui-today");
                    var v, w, x = o,
                        y = "",
                        z = "";
                    if ("datetime" === this.type ? (v = w2utils.formatDateTime(s, j.format), w = w2utils.formatDate(s, w2utils.settings.dateFormat)) : (v = w2utils.formatDate(s, j.format), w = v), j.colored && void 0 !== j.colored[w]) {
                        var A = j.colored[w].split(":");
                        z = "background-color: " + A[0] + ";", y = "color: " + A[1] + ";"
                    }
                    n += '<td class="' + (this.inRange(v, !0) ? "w2ui-date " + (w == c ? "w2ui-date-selected" : "") : "w2ui-blocked") + u + '"    style="' + y + z + '" date="' + v + '" data-date="' + t + '">' + x + "</td>", (q % 7 === 0 || 0 === k && 1 == q) && (n += "</tr><tr>"), o++
                }
                return n += "</tr></tbody></table>"
            },
            getYearHTML: function () {
                for (var a = w2utils.settings.shortmonths, b = w2utils.settings.dateStartYear, c = w2utils.settings.dateEndYear, d = "", e = "", f = 0; f < a.length; f++) d += '<div class="w2ui-jump-month" name="' + f + '">' + a[f] + "</div>";
                for (var g = b; g <= c; g++) e += '<div class="w2ui-jump-year" name="' + g + '">' + g + "</div>";
                return '<div id="w2ui-jump-month">' + d + '</div><div id="w2ui-jump-year">' + e + "</div>"
            },
            getHourHTML: function () {
                var a = [],
                    b = this.options;
                null == b && (b = {
                    format: w2utils.settings.timeFormat
                });
                for (var c = b.format.indexOf("h24") > -1, d = 0; d < 24; d++) {
                    var e = (d >= 12 && !c ? d - 12 : d) + ":00" + (c ? "" : d < 12 ? " am" : " pm");
                    12 != d || c || (e = "12:00 pm"), a[Math.floor(d / 8)] || (a[Math.floor(d / 8)] = "");
                    var f = this.fromMin(this.toMin(e)),
                        g = this.fromMin(this.toMin(e) + 59);
                    if ("datetime" === this.type) {
                        var h = w2utils.isDateTime(this.el.value, b.format, !0),
                            i = b.format.split("|")[0].trim();
                        f = w2utils.formatDate(h, i) + " " + f, g = w2utils.formatDate(h, i) + " " + g
                    }
                    a[Math.floor(d / 8)] += '<div class="' + (this.inRange(f) || this.inRange(g) ? "w2ui-time " : "w2ui-blocked") + '" hour="' + d + '">' + e + "</div>"
                }
                var j = '<div class="w2ui-calendar">   <div class="w2ui-calendar-title">' + w2utils.lang("Select Hour") + '</div>   <div class="w2ui-calendar-time"><table><tbody><tr>       <td>' + a[0] + "</td>       <td>" + a[1] + "</td>       <td>" + a[2] + "</td>   </tr></tbody></table></div></div>";
                return j
            },
            getMinHTML: function (a) {
                null == a && (a = 0);
                var b = this.options;
                null == b && (b = {
                    format: w2utils.settings.timeFormat
                });
                for (var c = b.format.indexOf("h24") > -1, d = [], e = 0; e < 60; e += 5) {
                    var f = (a > 12 && !c ? a - 12 : a) + ":" + (e < 10 ? 0 : "") + e + " " + (c ? "" : a < 12 ? "am" : "pm"),
                        g = f,
                        h = e < 20 ? 0 : e < 40 ? 1 : 2;
                    if (d[h] || (d[h] = ""), "datetime" === this.type) {
                        var i = w2utils.isDateTime(this.el.value, b.format, !0),
                            j = b.format.split("|")[0].trim();
                        g = w2utils.formatDate(i, j) + " " + g
                    }
                    d[h] += '<div class="' + (this.inRange(g) ? "w2ui-time " : "w2ui-blocked") + '" min="' + e + '">' + f + "</div>"
                }
                var k = '<div class="w2ui-calendar">   <div class="w2ui-calendar-title">' + w2utils.lang("Select Minute") + '</div>   <div class="w2ui-calendar-time"><table><tbody><tr>       <td>' + d[0] + "</td>       <td>" + d[1] + "</td>       <td>" + d[2] + "</td>   </tr></tbody></table></div></div>";
                return k
            },
            toMin: function (a) {
                if ("string" != typeof a) return null;
                var b = a.split(":");
                return 2 !== b.length ? null : (b[0] = parseInt(b[0]), b[1] = parseInt(b[1]), a.indexOf("pm") !== -1 && 12 !== b[0] && (b[0] += 12), 60 * b[0] + b[1])
            },
            fromMin: function (a) {
                var b = "";
                a >= 1440 && (a %= 1440), a < 0 && (a = 1440 + a);
                var c = Math.floor(a / 60),
                    d = (a % 60 < 10 ? "0" : "") + a % 60,
                    e = this.options;
                return null == e && (e = {
                    format: w2utils.settings.timeFormat
                }), b = e.format.indexOf("h24") !== -1 ? c + ":" + d : (c <= 12 ? c : c - 12) + ":" + d + " " + (c >= 12 ? "pm" : "am")
            }
        }, a.extend(b.prototype, w2utils.event), w2obj.field = b
    }(jQuery),
    function ($) {
        var w2form = function (a) {
            this.name = null, this.header = "", this.box = null, this.url = "", this.routeData = {}, this.formURL = "", this.formHTML = "", this.page = 0, this.recid = 0, this.fields = [], this.actions = {}, this.record = {}, this.original = {}, this.postData = {}, this.httpHeaders = {}, this.method = null, this.toolbar = {}, this.tabs = {}, this.style = "", this.focus = 0, this.autosize = !0, this.multipart = !1, this.tabindexBase = 0, this.isGenerated = !1, this.last = {
                xhr: null
            }, $.extend(!0, this, w2obj.form, a)
        };
        $.fn.w2form = function (a) {
            if ($.isPlainObject(a)) {
                var b = this;
                if (!w2utils.checkName(a, "w2form")) return;
                var c = a.record,
                    d = a.original,
                    e = a.fields,
                    f = a.toolbar,
                    g = a.tabs,
                    h = new w2form(a);
                if ($.extend(h, {
                    record: {},
                    original: {},
                    fields: [],
                    tabs: {},
                    toolbar: {},
                    handlers: []
                }), $.isArray(g)) {
                    $.extend(!0, h.tabs, {
                        tabs: []
                    });
                    for (var i = 0; i < g.length; i++) {
                        var j = g[i];
                        "object" == typeof j ? (h.tabs.tabs.push(j), j.active === !0 && (h.tabs.active = j.id)) : h.tabs.tabs.push({
                            id: j,
                            caption: j
                        })
                    }
                } else $.extend(!0, h.tabs, g);
                if ($.extend(!0, h.toolbar, f), e)
                    for (var k = 0; k < e.length; k++) {
                        var l = $.extend(!0, {}, e[k]);
                        null == l.name && null != l.field && (l.name = l.field), null == l.field && null != l.name && (l.field = l.name), h.fields[k] = l
                    }
                for (var k in c) $.isPlainObject(c[k]) ? h.record[k] = $.extend(!0, {}, c[k]) : h.record[k] = c[k];
                for (var k in d) $.isPlainObject(d[k]) ? h.original[k] = $.extend(!0, {}, d[k]) : h.original[k] = d[k];
                return b.length > 0 && (h.box = b[0]), "" !== h.formURL ? $.get(h.formURL, function (a) {
                    h.formHTML = a, h.isGenerated = !0, 0 === $(h.box).length && 0 === a.length || ($(h.box).html(a), h.render(h.box))
                }) : "" !== h.formHTML || (0 !== $(this).length && "" !== $.trim($(this).html()) ? h.formHTML = $(this).html() : h.formHTML = h.generateHTML()), w2ui[h.name] = h, "" === h.formURL && (String(h.formHTML).indexOf("w2ui-page") === -1 && (h.formHTML = '<div class="w2ui-page page-0">' + h.formHTML + "</div>"), $(h.box).html(h.formHTML), h.isGenerated = !0, h.render(h.box)), h
            }
            var b = w2ui[$(this).attr("name")];
            return b ? arguments.length > 0 ? (b[a] && b[a].apply(b, Array.prototype.slice.call(arguments, 1)), this) : b : null
        }, w2form.prototype = {
            onRequest: null,
            onLoad: null,
            onValidate: null,
            onSubmit: null,
            onProgress: null,
            onSave: null,
            onChange: null,
            onInput: null,
            onRender: null,
            onRefresh: null,
            onResize: null,
            onDestroy: null,
            onAction: null,
            onToolbar: null,
            onError: null,
            msgNotJSON: "Returned data is not in valid JSON format.",
            msgAJAXerror: "AJAX error. See console for more details.",
            msgRefresh: "Refreshing...",
            msgSaving: "Saving...",
            get: function (a, b) {
                if (0 === arguments.length) {
                    for (var c = [], d = 0; d < this.fields.length; d++) null != this.fields[d].name && c.push(this.fields[d].name);
                    return c
                }
                for (var e = 0; e < this.fields.length; e++)
                    if (this.fields[e].name == a) return b === !0 ? e : this.fields[e];
                return null
            },
            set: function (a, b) {
                for (var c = 0; c < this.fields.length; c++)
                    if (this.fields[c].name == a) return $.extend(this.fields[c], b), this.refresh(), !0;
                return !1
            },
            show: function () {
                for (var a = 0, b = 0; b < arguments.length; b++) {
                    var c = this.get(arguments[b]);
                    c && c.hidden && (c.hidden = !1, a++)
                }
                return a > 0 && this.refresh(), a
            },
            hide: function () {
                for (var a = 0, b = 0; b < arguments.length; b++) {
                    var c = this.get(arguments[b]);
                    c && !c.hidden && (c.hidden = !0, a++)
                }
                return a > 0 && this.refresh(), a
            },
            enable: function () {
                for (var a = 0, b = 0; b < arguments.length; b++) {
                    var c = this.get(arguments[b]);
                    c && c.disabled && (c.disabled = !1, a++)
                }
                return a > 0 && this.refresh(), a
            },
            disable: function () {
                for (var a = 0, b = 0; b < arguments.length; b++) {
                    var c = this.get(arguments[b]);
                    c && !c.disabled && (c.disabled = !0, a++)
                }
                return a > 0 && this.refresh(), a
            },
            reload: function (a) {
                var b = "object" != typeof this.url ? this.url : this.url.get;
                b && 0 !== this.recid && null != this.recid ? this.request(a) : "function" == typeof a && a()
            },
            clear: function () {
                this.recid = 0, this.record = {}, this.original = {}, $().w2tag(), this.refresh()
            },
            error: function (a) {
                var b = this,
                    c = this.trigger({
                        target: this.name,
                        type: "error",
                        message: a,
                        xhr: this.last.xhr
                    });
                return c.isCancelled === !0 ? void ("function" == typeof callBack && callBack()) : (setTimeout(function () {
                    b.message(a)
                }, 1), void this.trigger($.extend(c, {
                    phase: "after"
                })))
            },
            message: function (a) {
                "string" == typeof a && (a = {
                    width: a.length < 300 ? 350 : 550,
                    height: a.length < 300 ? 170 : 250,
                    body: '<div class="w2ui-centered">' + a + "</div>",
                    buttons: '<button class="w2ui-btn" onclick="w2ui[\'' + this.name + "'].message()\">Ok</button>",
                    onOpen: function (a) {
                        setTimeout(function () {
                            $(a.box).find("btn").focus()
                        }, 25)
                    }
                }), w2utils.message.call(this, {
                    box: this.box,
                    path: "w2ui." + this.name,
                    title: "form-header:visible",
                    body: "form-box"
                }, a)
            },
            validate: function (a) {
                null == a && (a = !0), $().w2tag();
                for (var b = [], c = 0; c < this.fields.length; c++) {
                    var d = this.fields[c];
                    switch (null == this.record[d.name] && (this.record[d.name] = ""), d.type) {
                        case "int":
                            this.record[d.name] && !w2utils.isInt(this.record[d.name]) && b.push({
                                field: d,
                                error: w2utils.lang("Not an integer")
                            });
                            break;
                        case "float":
                            this.record[d.name] && !w2utils.isFloat(this.record[d.name]) && b.push({
                                field: d,
                                error: w2utils.lang("Not a float")
                            });
                            break;
                        case "money":
                            this.record[d.name] && !w2utils.isMoney(this.record[d.name]) && b.push({
                                field: d,
                                error: w2utils.lang("Not in money format")
                            });
                            break;
                        case "color":
                        case "hex":
                            this.record[d.name] && !w2utils.isHex(this.record[d.name]) && b.push({
                                field: d,
                                error: w2utils.lang("Not a hex number")
                            });
                            break;
                        case "email":
                            this.record[d.name] && !w2utils.isEmail(this.record[d.name]) && b.push({
                                field: d,
                                error: w2utils.lang("Not a valid email")
                            });
                            break;
                        case "checkbox":
                            1 == this.record[d.name] ? this.record[d.name] = 1 : this.record[d.name] = 0;
                            break;
                        case "date":
                            d.options.format || (d.options.format = w2utils.settings.dateFormat), this.record[d.name] && !w2utils.isDate(this.record[d.name], d.options.format) && b.push({
                                field: d,
                                error: w2utils.lang("Not a valid date") + ": " + d.options.format
                            });
                            break;
                        case "list":
                        case "combo":
                            break;
                        case "enum":
                    }
                    var e = this.record[d.name];
                    d.required && ("" === e || $.isArray(e) && 0 === e.length || $.isPlainObject(e) && $.isEmptyObject(e)) && b.push({
                        field: d,
                        error: w2utils.lang("Required field")
                    }), d.equalto && this.record[d.name] != this.record[d.equalto] && b.push({
                        field: d,
                        error: w2utils.lang("Field should be equal to ") + d.equalto
                    })
                }
                var f = this.trigger({
                    phase: "before",
                    target: this.name,
                    type: "validate",
                    errors: b
                });
                if (f.isCancelled !== !0) {
                    if (a)
                        for (var g = 0; g < f.errors.length; g++) {
                            var h = f.errors[g],
                                i = $.extend({
                                    class: "w2ui-error"
                                }, h.options);
                            null != h.field && ("radio" === h.field.type ? $($(h.field.el).parents("div")[0]).w2tag(h.error, i) : ["enum", "file"].indexOf(h.field.type) !== -1 ? ! function (a) {
                                setTimeout(function () {
                                    var b = $(a.field.el).data("w2field").helpers.multi;
                                    $(a.field.el).w2tag(a.error, a.options), $(b).addClass("w2ui-error")
                                }, 1)
                            }(h) : $(h.field.el).w2tag(h.error, i), this.goto(b[0].field.page))
                        }
                    return this.trigger($.extend(f, {
                        phase: "after"
                    })), b
                }
            },
            getChanges: function () {
                function a(b, c, d) {
                    for (var e in b) "object" == typeof b[e] ? (d[e] = a(b[e], c[e] || {}, {}), d[e] && !$.isEmptyObject(d[e]) || delete d[e]) : b[e] != c[e] && (d[e] = b[e]);
                    return d
                }
                var b = {};
                return $.isEmptyObject(this.original) || (b = a(this.record, this.original, {})), b
            },
            request: function (postData, callBack) {
                var obj = this;
                if ("function" == typeof postData && (callBack = postData, postData = null), null == postData && (postData = {}), this.url && ("object" != typeof this.url || this.url.get)) {
                    null == this.recid && (this.recid = 0);
                    var params = {};
                    params.cmd = "get", params.recid = this.recid, params.name = this.name, $.extend(params, this.postData), $.extend(params, postData);
                    var edata = this.trigger({
                        phase: "before",
                        type: "request",
                        target: this.name,
                        url: this.url,
                        postData: params,
                        httpHeaders: this.httpHeaders
                    });
                    if (edata.isCancelled === !0) return void ("function" == typeof callBack && callBack({
                        status: "error",
                        message: "Request aborted."
                    }));
                    this.record = {}, this.original = {}, this.lock(w2utils.lang(this.msgRefresh));
                    var url = edata.url;
                    if ("object" == typeof edata.url && edata.url.get && (url = edata.url.get), this.last.xhr) try {
                        this.last.xhr.abort()
                    } catch (a) { }
                    if (!$.isEmptyObject(obj.routeData)) {
                        var info = w2utils.parseRoute(url);
                        if (info.keys.length > 0)
                            for (var k = 0; k < info.keys.length; k++) null != obj.routeData[info.keys[k].name] && (url = url.replace(new RegExp(":" + info.keys[k].name, "g"), obj.routeData[info.keys[k].name]))
                    }
                    var ajaxOptions = {
                        type: "POST",
                        url: url,
                        data: edata.postData,
                        headers: edata.httpHeaders,
                        dataType: "text"
                    },
                        dataType = obj.dataType || w2utils.settings.dataType;
                    switch (edata.dataType && (dataType = edata.dataType), dataType) {
                        case "HTTP":
                            ajaxOptions.data = String($.param(ajaxOptions.data, !1)).replace(/%5B/g, "[").replace(/%5D/g, "]");
                            break;
                        case "HTTPJSON":
                            ajaxOptions.data = {
                                request: JSON.stringify(ajaxOptions.data)
                            };
                            break;
                        case "RESTFULL":
                            ajaxOptions.type = "GET", ajaxOptions.data = String($.param(ajaxOptions.data, !1)).replace(/%5B/g, "[").replace(/%5D/g, "]");
                            break;
                        case "RESTFULLJSON":
                            ajaxOptions.type = "GET", ajaxOptions.data = JSON.stringify(ajaxOptions.data), ajaxOptions.contentType = "application/json";
                            break;
                        case "JSON":
                            ajaxOptions.type = "POST", ajaxOptions.data = JSON.stringify(ajaxOptions.data), ajaxOptions.contentType = "application/json"
                    }
                    this.method && (ajaxOptions.type = this.method), edata.method && (ajaxOptions.type = edata.method), this.last.xhr = $.ajax(ajaxOptions).done(function (data, status, xhr) {
                        obj.unlock();
                        var data, responseText = xhr.responseText;
                        if ("error" !== status && null != responseText && "" !== responseText) {
                            if ("object" == typeof responseText) data = responseText;
                            else try {
                                eval("data = " + responseText)
                            } catch (a) { }
                            null == data && (data = {
                                status: "error",
                                message: w2utils.lang(obj.msgNotJSON),
                                responseText: responseText
                            })
                        }
                        var edata = obj.trigger({
                            phase: "before",
                            target: obj.name,
                            type: "load",
                            data: data,
                            xhr: xhr
                        });
                        return edata.isCancelled === !0 ? void ("function" == typeof callBack && callBack({
                            status: "error",
                            message: "Request aborted."
                        })) : ("error" !== status ? "error" === edata.data.status ? obj.error(w2utils.lang(edata.data.message)) : obj.record = $.extend({}, edata.data.record) : (obj.error("AJAX Error " + xhr.status + ": " + xhr.statusText), edata.data = {
                            status: "error",
                            message: w2utils.lang(obj.msgAJAXerror),
                            responseText: responseText
                        }), obj.trigger($.extend(edata, {
                            phase: "after"
                        })), obj.refresh(), void ("function" == typeof callBack && callBack(edata.data)))
                    }).fail(function (a, b, c) {
                        var d = {
                            status: b,
                            error: c,
                            rawResponseText: a.responseText
                        },
                            e = obj.trigger({
                                phase: "before",
                                type: "error",
                                error: d,
                                xhr: a
                            });
                        if (e.isCancelled !== !0) {
                            if ("abort" !== b) {
                                var f;
                                try {
                                    f = $.parseJSON(a.responseText)
                                } catch (a) { }
                                console.log("ERROR: Server communication failed.", "\n   EXPECTED:", {
                                    status: "success",
                                    items: [{
                                        id: 1,
                                        text: "item"
                                    }]
                                }, "\n         OR:", {
                                        status: "error",
                                        message: "error message"
                                    }, "\n   RECEIVED:", "object" == typeof f ? f : a.responseText)
                            }
                            obj.trigger($.extend(e, {
                                phase: "after"
                            }))
                        }
                    }), this.trigger($.extend(edata, {
                        phase: "after"
                    }))
                }
            },
            submit: function (a, b) {
                return this.save(a, b)
            },
            save: function (postData, callBack) {
                var obj = this;
                $(this.box).find(":focus").change(), "function" == typeof postData && (callBack = postData, postData = null);
                var errors = obj.validate(!0);
                if (0 === errors.length) {
                    if (null == postData && (postData = {}), !obj.url || "object" == typeof obj.url && !obj.url.save) return void console.log("ERROR: Form cannot be saved because no url is defined.");
                    obj.lock(w2utils.lang(obj.msgSaving) + ' <span id="' + obj.name + '_progress"></span>'), setTimeout(function () {
                        function apend(a, b, c, d) {
                            function e(b, c, d) {
                                if ("object" == typeof b && b instanceof File && a.append(d, b), "object" == typeof b)
                                    if (b && b.constructor === Array)
                                        for (var f = 0; f < b.length; f++) {
                                            var g = c ? c[f] : c;
                                            e(b[f], g, d + "[" + f + "]")
                                        } else apend(a, b, c, d)
                            }
                            null == d && (d = "");
                            for (var f in b) {
                                var g = "" == d ? f : "${p}[${prop}]",
                                    h = c ? c[f] : c;
                                e(b[f], h, g)
                            }
                        }
                        var params = {};
                        params.cmd = "save", params.recid = obj.recid, params.name = obj.name, $.extend(params, obj.postData), $.extend(params, postData), obj.multipart || obj.fields.forEach(function (a) {
                            "file" === a.type && Array.isArray(obj.record[a.field]) && obj.record[a.field].forEach(function (a) {
                                delete a.file
                            })
                        }), params.record = $.extend(!0, {}, obj.record);
                        var edata = obj.trigger({
                            phase: "before",
                            type: "submit",
                            target: obj.name,
                            url: obj.url,
                            postData: params,
                            httpHeaders: obj.httpHeaders
                        });
                        if (edata.isCancelled !== !0) {
                            var url = edata.url;
                            if ("object" == typeof edata.url && edata.url.save && (url = edata.url.save), obj.last.xhr) try {
                                obj.last.xhr.abort()
                            } catch (a) { }
                            if (!$.isEmptyObject(obj.routeData)) {
                                var info = w2utils.parseRoute(url);
                                if (info.keys.length > 0)
                                    for (var k = 0; k < info.keys.length; k++) null != obj.routeData[info.keys[k].name] && (url = url.replace(new RegExp(":" + info.keys[k].name, "g"), obj.routeData[info.keys[k].name]))
                            }
                            var ajaxOptions = {
                                type: "POST",
                                url: url,
                                data: edata.postData,
                                headers: edata.httpHeaders,
                                dataType: "text",
                                xhr: function () {
                                    var a = new window.XMLHttpRequest;
                                    return a.upload.addEventListener("progress", function (a) {
                                        if (a.lengthComputable) {
                                            var b = obj.trigger({
                                                phase: "before",
                                                type: "progress",
                                                total: a.total,
                                                loaded: a.loaded,
                                                originalEvent: a
                                            });
                                            if (b.isCancelled === !0) return;
                                            var c = Math.round(a.loaded / a.total * 100);
                                            (c && 100 != c || "" != $("#" + obj.name + "_progress").text()) && $("#" + obj.name + "_progress").text("" + c + "%"), obj.trigger($.extend(b, {
                                                phase: "after"
                                            }))
                                        }
                                    }, !1), a
                                }
                            },
                                dataType = obj.dataType || w2utils.settings.dataType;
                            switch (edata.dataType && (dataType = edata.dataType), dataType) {
                                case "HTTP":
                                    ajaxOptions.data = String($.param(ajaxOptions.data, !1)).replace(/%5B/g, "[").replace(/%5D/g, "]");
                                    break;
                                case "HTTPJSON":
                                    ajaxOptions.data = {
                                        request: JSON.stringify(ajaxOptions.data)
                                    };
                                    break;
                                case "RESTFULL":
                                    0 !== obj.recid && null != obj.recid && (ajaxOptions.type = "PUT"), ajaxOptions.data = String($.param(ajaxOptions.data, !1)).replace(/%5B/g, "[").replace(/%5D/g, "]");
                                    break;
                                case "RESTFULLJSON":
                                    0 !== obj.recid && null != obj.recid && (ajaxOptions.type = "PUT"), ajaxOptions.data = JSON.stringify(ajaxOptions.data), ajaxOptions.contentType = "application/json";
                                    break;
                                case "JSON":
                                    if (ajaxOptions.type = "POST", ajaxOptions.contentType = "application/json", obj.multipart) {
                                        var fdata = new FormData;
                                        fdata.append("__body", JSON.stringify(ajaxOptions.data)), apend(fdata, ajaxOptions.data), ajaxOptions.data = fdata, ajaxOptions.contentType = !1, ajaxOptions.processData = !1
                                    } else ajaxOptions.data = JSON.stringify(ajaxOptions.data)
                            }
                            this.method && (ajaxOptions.type = this.method), edata.method && (ajaxOptions.type = edata.method), obj.last.xhr = $.ajax(ajaxOptions).done(function (data, status, xhr) {
                                obj.unlock();
                                var edata = obj.trigger({
                                    phase: "before",
                                    target: obj.name,
                                    type: "save",
                                    xhr: xhr,
                                    status: status
                                });
                                if (edata.isCancelled !== !0) {
                                    var data, responseText = xhr.responseText;
                                    if ("error" !== status) {
                                        if (null != responseText && "" !== responseText) {
                                            if ("object" == typeof responseText) data = responseText;
                                            else try {
                                                eval("data = " + responseText)
                                            } catch (a) { }
                                            null == data && (data = {
                                                status: "error",
                                                message: w2utils.lang(obj.msgNotJSON),
                                                responseText: responseText
                                            }), "error" === data.status ? obj.error(w2utils.lang(data.message)) : obj.original = {}
                                        }
                                    } else obj.error("AJAX Error " + xhr.status + ": " + xhr.statusText), data = {
                                        status: "error",
                                        message: w2utils.lang(obj.msgAJAXerror),
                                        responseText: responseText
                                    };
                                    obj.trigger($.extend(edata, {
                                        phase: "after"
                                    })), obj.refresh(), "function" == typeof callBack && callBack(data, xhr)
                                }
                            }).fail(function (a, b, c) {
                                var d = {
                                    status: b,
                                    error: c,
                                    rawResponseText: a.responseText
                                },
                                    e = obj.trigger({
                                        phase: "before",
                                        type: "error",
                                        error: d,
                                        xhr: a
                                    });
                                e.isCancelled !== !0 && (console.log("ERROR: server communication failed. The server should return", {
                                    status: "success"
                                }, "OR", {
                                        status: "error",
                                        message: "error message"
                                    }, ", instead the AJAX request produced this: ", d), obj.trigger($.extend(e, {
                                        phase: "after"
                                    })))
                            }), obj.trigger($.extend(edata, {
                                phase: "after"
                            }))
                        }
                    }, 50)
                }
            },
            lock: function (a, b) {
                var c = Array.prototype.slice.call(arguments, 0);
                c.unshift(this.box), setTimeout(function () {
                    w2utils.lock.apply(window, c)
                }, 10)
            },
            unlock: function (a) {
                var b = this.box;
                setTimeout(function () {
                    w2utils.unlock(b, a)
                }, 25)
            },
            lockPage: function (a, b) {
                var c = $(this.box).find(".page-" + a);
                return !!c.length && (w2utils.lock(c, b), !0)
            },
            unlockPage: function (a, b) {
                var c = $(this.box).find(".page-" + a);
                return !!c.length && (w2utils.unlock(c, b), !0)
            },
            goto: function (a) {
                this.page !== a && (null != a && (this.page = a), $(this.box).data("auto-size") === !0 && $(this.box).height(0), this.refresh())
            },
            generateHTML: function () {
                for (var a, b, c, d, e, f = [], g = "", h = 0; h < this.fields.length; h++) {
                    c = "", d = this.tabindexBase + h + 1, e = ' tabindex="' + d + '"';
                    var i = this.fields[h];
                    null == i.html && (i.html = {}), null == i.options && (i.options = {}), i.html = $.extend(!0, {
                        caption: "",
                        span: 6,
                        attr: "",
                        text: "",
                        style: "",
                        page: 0,
                        column: 0
                    }, i.html), null == a && (a = i.html.page), null == b && (b = i.html.column), "" === i.html.caption && (i.html.caption = i.name);
                    var j = '<input name="' + i.name + '" class="form-control" type="text" ' + i.html.attr + e + "/>";
                    switch (i.type) {
                        case "pass":
                        case "password":
                            j = '<input name="' + i.name + '" class="form-control" type = "password" ' + i.html.attr + e + "/>";
                            break;
                        case "checkbox":
                            j = '<input name="' + i.name + '" class="" type="checkbox" ' + i.html.attr + e + "/>";
                            break;
                        case "radio":
                            j = "";
                            var k = i.options.items ? i.options.items : i.html.items;
                            $.isArray(k) || (k = []), k.length > 0 && (k = w2obj.field.prototype.normMenu(k));
                            for (var l = 0; l < k.length; l++) j += '<label><input name="' + i.name + '" class="form-control" type = "radio" ' + i.html.attr + (0 === l ? e : "") + ' value="' + k[l].id + '"/>&#160;' + k[l].text + "</label><br/>";
                            break;
                        case "select":
                            j = '<select name="' + i.name + '" class="form-control" ' + i.html.attr + e + ">";
                            var k = i.options.items ? i.options.items : i.html.items;
                            $.isArray(k) || (k = []), k.length > 0 && (k = w2obj.field.prototype.normMenu(k));
                            for (var l = 0; l < k.length; l++) j += '<option value="' + k[l].id + '">' + k[l].text + "</option>";
                            j += "</select>";
                            break;
                        case "textarea":
                            j = '<textarea name="' + i.name + '" class="form-control" ' + i.html.attr + e + "></textarea>";
                            break;
                        case "toggle":
                            j = '<input name="' + i.name + '" type="checkbox" ' + i.html.attr + e + ' class=" w2ui-toggle"/><div><div></div></div>';
                            break;
                        case "html":
                        case "custom":
                        case "empty":
                            j = ""
                    }
                    "" !== g && (a != i.html.page || b != i.html.column || i.html.group && g != i.html.group) && (f[a][b] += "\n   </div>", g = ""), i.html.group && g != i.html.group && (c += '\n   <div class="w2ui-group-title">' + i.html.group + '</div>\n   <div class="w2ui-group" style="' + (i.html.groupStyle || "") + '">', g = i.html.group), c += '\n      <div class="w2ui-field ' + (null != i.html.span ? "w2ui-span" + i.html.span : "") + '" style="' + i.html.style + '">\n         <label>' + w2utils.lang(i.html.caption) + "</label>" + ("empty" === i.type ? "" : "\n         <div>" + j + w2utils.lang(i.html.text) + "</div>") + "\n      </div>", null == f[i.html.page] && (f[i.html.page] = []), null == f[i.html.page][i.html.column] && (f[i.html.page][i.html.column] = ""), f[i.html.page][i.html.column] += c, a = i.html.page, b = i.html.column
                }
                if ("" !== g && (f[a][b] += "\n   </div>"), this.tabs.tabs)
                    for (var l = 0; l < this.tabs.tabs.length; l++) null == f[l] && (f[l] = []);
                var m = "";
                if (!$.isEmptyObject(this.actions)) {
                    m += '\n<div class="w2ui-buttons">', d = this.tabindexBase + this.fields.length + 1;
                    for (var n in this.actions) {
                        var o = this.actions[n],
                            p = {
                                caption: "",
                                style: "",
                                class: ""
                            };
                        $.isPlainObject(o) ? (o.caption && (p.caption = o.caption), o.style && (p.style = o.style), o.class && (p.class = o.class)) : (p.caption = n, ["save", "update", "create"].indexOf(n.toLowerCase()) !== -1 ? p.class = "w2ui-btn-blue" : p.class = ""), m += '\n    <button name="' + n + '" class="w2ui-btn ' + p.class + '" style="' + p.style + '" tabindex="' + d + '">' + w2utils.lang(p.caption) + "</button>", d++
                    }
                    m += "\n</div>"
                }
                c = "";
                for (var q = 0; q < f.length; q++) {
                    c += '<div class="w2ui-page page-' + q + '" ' + (0 === q ? "" : 'style="display: none;"') + '><div class="w2ui-column-container">';
                    for (var r = 0; r < f[q].length; r++) c += '<div class="w2ui-column col-' + r + '">' + (f[q][r] || "") + "\n</div>";
                    c += "\n</div>", f[q][-1] && (c += f[q][-1]), c += "\n</div>"
                }
                return c += m
            },
            action: function (a, b) {
                var c = this.actions[a],
                    d = c;
                $.isPlainObject(c) && c.onClick && (d = c.onClick);
                var e = this.trigger({
                    phase: "before",
                    target: a,
                    type: "action",
                    click: d,
                    originalEvent: b
                });
                e.isCancelled !== !0 && ("function" == typeof d && d.call(this, b), this.trigger($.extend(e, {
                    phase: "after"
                })))
            },
            resize: function () {
                function a() {
                    d.width($(b.box).width()).height($(b.box).height()), f.css("top", "" !== b.header ? w2utils.getSize(e, "height") : 0), g.css("top", ("" !== b.header ? w2utils.getSize(e, "height") : 0) + ("object" == typeof b.toolbar && $.isArray(b.toolbar.items) && b.toolbar.items.length > 0 ? w2utils.getSize(f, "height") : 0)), h.css("top", ("" !== b.header ? w2utils.getSize(e, "height") : 0) + ("object" == typeof b.toolbar && $.isArray(b.toolbar.items) && b.toolbar.items.length > 0 ? w2utils.getSize(f, "height") + 5 : 0) + ("object" == typeof b.tabs && $.isArray(b.tabs.tabs) && b.tabs.tabs.length > 0 ? w2utils.getSize(g, "height") + 5 : 0)), h.css("bottom", k.length > 0 ? w2utils.getSize(k, "height") : 0)
                }
                var b = this,
                    c = this.trigger({
                        phase: "before",
                        target: this.name,
                        type: "resize"
                    });
                if (c.isCancelled !== !0) {
                    var d = $(this.box).find("> divform-box"),
                        e = $(this.box).find("> div form-header"),
                        f = $(this.box).find("> div form-toolbar"),
                        g = $(this.box).find("> div form-tabs"),
                        h = $(this.box).find("> div page"),
                        i = $(this.box).find("> div page.page-" + this.page),
                        j = $(this.box).find("> div page.page-" + this.page + " > div"),
                        k = $(this.box).find("> div buttons");
                    a(), this.autosize && (0 !== parseInt($(this.box).height()) && $(this.box).data("auto-size") !== !0 || ($(this.box).height((e.length > 0 ? w2utils.getSize(e, "height") : 0) + ("object" == typeof this.tabs && $.isArray(this.tabs.tabs) && this.tabs.tabs.length > 0 ? w2utils.getSize(g, "height") : 0) + ("object" == typeof this.toolbar && $.isArray(this.toolbar.items) && this.toolbar.items.length > 0 ? w2utils.getSize(f, "height") : 0) + (h.length > 0 ? w2utils.getSize(j, "height") + w2utils.getSize(i, "+height") + 12 : 0) + (k.length > 0 ? w2utils.getSize(k, "height") : 0)), $(this.box).data("auto-size", !0)), a()), this.toolbar && this.toolbar.resize && this.toolbar.resize(), this.tabs && this.tabs.resize && this.tabs.resize(), b.trigger($.extend(c, {
                        phase: "after"
                    }))
                }
            },
            refresh: function (a) {
                var b = (new Date).getTime(),
                    c = this;
                if (this.box && this.isGenerated && null != $(this.box).html()) {
                    var d = this.trigger({
                        phase: "before",
                        target: this.name,
                        type: "refresh",
                        page: this.page,
                        field: a
                    });
                    if (d.isCancelled !== !0) {
                        if (null != a) var e = c.get(a, !0),
                            f = e + 1;
                        else {
                            $(this.box).find("input, textarea, select").each(function (a, b) {
                                var d = null != $(b).attr("name") ? $(b).attr("name") : $(b).attr("id"),
                                    e = c.get(d);
                                if (e) {
                                    var f = $(b).parents("page");
                                    if (f.length > 0)
                                        for (var g = 0; g < 100; g++)
                                            if (f.hasClass("page-" + g)) {
                                                e.page = g;
                                                break
                                            }
                                }
                            }), $(this.box).find("page").hide(), $(this.box).find("page.page-" + this.page).show(), $(this.box).find("form-header").html(this.header), "object" == typeof this.tabs && $.isArray(this.tabs.tabs) && this.tabs.tabs.length > 0 ? ($("#form_" + this.name + "_tabs").show(), this.tabs.active = this.tabs.tabs[this.page].id, this.tabs.refresh()) : $("#form_" + this.name + "_tabs").hide(), "object" == typeof this.toolbar && $.isArray(this.toolbar.items) && this.toolbar.items.length > 0 ? ($("#form_" + this.name + "_toolbar").show(), this.toolbar.refresh()) : $("#form_" + this.name + "_toolbar").hide();
                            var e = 0,
                                f = this.fields.length
                        }
                        for (var g = e; g < f; g++) {
                            var a = this.fields[g];
                            if (null == a.name && null != a.field && (a.name = a.field), null == a.field && null != a.name && (a.field = a.name), a.$el = $(this.box).find('[name="' + String(a.name).replace(/\\/g, "\\\\") + '"]'), a.el = a.$el[0], null != a.el) {
                                a.el && (a.el.id = a.name);
                                var h = $(a).data("w2field");
                                h && h.clear(), $(a.$el).off(".w2form").on("change.w2form", function (a) {
                                    var b = this.value,
                                        d = null != c.record[this.name] ? c.record[this.name] : "",
                                        e = c.get(this.name);
                                    if (["list", "enum", "file"].indexOf(e.type) !== -1 && $(this).data("selected")) {
                                        var f = $(this).data("selected"),
                                            g = c.record[this.name];
                                        if ($.isArray(f)) {
                                            b = [];
                                            for (var h = 0; h < f.length; h++) b[h] = $.extend(!0, {}, f[h])
                                        }
                                        if ($.isPlainObject(f) && (b = $.extend(!0, {}, f)), $.isArray(g)) {
                                            d = [];
                                            for (var h = 0; h < g.length; h++) d[h] = $.extend(!0, {}, g[h])
                                        }
                                        $.isPlainObject(g) && (d = $.extend(!0, {}, g))
                                    }
                                    if (["toggle", "checkbox"].indexOf(e.type) !== -1 && (b = !!$(this).prop("checked") && ("on" === $(this).prop("value") || $(this).prop("value"))), ["int", "float", "percent", "money", "currency"].indexOf(e.type) !== -1 && (b = $(this).data("w2field").clean(b)), b !== d) {
                                        var i = c.trigger({
                                            phase: "before",
                                            target: this.name,
                                            type: "change",
                                            value_new: b,
                                            value_previous: d,
                                            originalEvent: a
                                        });
                                        if (i.isCancelled === !0) return void $(this).val(c.record[this.name]);
                                        var j = this.value;
                                        if ("select" === this.type && (j = this.value), "checkbox" === this.type && (j = !!this.checked), "radio" === this.type && e.$el.each(function (a, b) {
                                            b.checked && (j = b.value)
                                        }), ["int", "float", "percent", "money", "currency", "list", "combo", "enum", "file", "toggle"].indexOf(e.type) !== -1 && (j = b), ["enum", "file"].indexOf(e.type) !== -1 && j.length > 0) {
                                            var k = $(e.el).data("w2field").helpers.multi;
                                            $(k).removeClass("w2ui-error")
                                        } ("" === j || null == j || $.isArray(j) && 0 === j.length || $.isPlainObject(j) && $.isEmptyObject(j)) && (j = null), c.record[this.name] = j, c.trigger($.extend(i, {
                                            phase: "after"
                                        }))
                                    }
                                }).on("input.w2form", function (a) {
                                    var b = this.value;
                                    "checkbox" == a.target.type && (b = a.target.checked), $.isEmptyObject(c.original) && !$.isEmptyObject(c.record) && (c.original = $.extend(!0, {}, c.record));
                                    var d = c.trigger({
                                        phase: "before",
                                        target: this.name,
                                        type: "input",
                                        value_new: b,
                                        originalEvent: a
                                    });
                                    d.isCancelled !== !0 && c.trigger($.extend(d, {
                                        phase: "after"
                                    }))
                                }), a.required ? $(a.el).parent().parent().addClass("w2ui-required") : $(a.el).parent().parent().removeClass("w2ui-required"), null != a.disabled && (a.disabled ? $(a.el).prop("readonly", !0) : $(a.el).prop("readonly", !1)), a.hidden ? $(a.el).parents("field").hide() : $(a.el).parents("field").show()
                            } else "empty" !== a.type && console.log('ERROR: Cannot associate field "' + a.name + '" with html control. Make sure html control exists with the same name.')
                        }
                        $(this.box).find("button, input[type=button]").each(function (a, b) {
                            $(b).off("click").on("click", function (a) {
                                var b = this.value;
                                this.id && (b = this.id), this.name && (b = this.name), c.action(b, a)
                            })
                        });
                        for (var g = e; g < f; g++) {
                            var a = this.fields[g],
                                i = null != this.record[a.name] ? this.record[a.name] : "";
                            if (a.el) switch ($(a.el).hasClass("form-control") || $(a.el).addClass("form-control"), a.type = String(a.type).toLowerCase(), a.options || (a.options = {}), a.type) {
                                case "text":
                                case "textarea":
                                case "email":
                                case "pass":
                                case "password":
                                    a.el.value = i;
                                    break;
                                case "int":
                                case "float":
                                case "money":
                                case "currency":
                                case "percent":
                                    a.el.value = i, $(a.el).w2field($.extend({}, a.options, {
                                        type: a.type
                                    }));
                                    break;
                                case "hex":
                                case "alphanumeric":
                                case "color":
                                case "date":
                                case "time":
                                    a.el.value = i, $(a.el).w2field($.extend({}, a.options, {
                                        type: a.type
                                    }));
                                    break;
                                case "toggle":
                                    w2utils.isFloat(i) && (i = parseFloat(i)), $(a.el).prop("checked", !!i), this.record[a.name] = !!i && i;
                                    break;
                                case "list":
                                case "combo":
                                    if ("list" === a.type) {
                                        var j = $.isPlainObject(i) ? i.id : $.isPlainObject(a.options.selected) ? a.options.selected.id : i;
                                        a.options.items || (a.options.items = []);
                                        var k = a.options.items;
                                        $.isArray(k) && k.length > 0 && !$.isPlainObject(k[0]) && (a.options.items = w2obj.field.prototype.normMenu(k));
                                        for (var l = 0; l < a.options.items.length; l++) {
                                            var m = a.options.items[l];
                                            if (m.id == j) {
                                                i = $.extend(!0, {}, m), c.record[a.name] = i;
                                                break
                                            }
                                        }
                                    } else "combo" !== a.type || $.isPlainObject(i) ? $.isPlainObject(i) && null != i.text ? a.el.value = i.text : a.el.value = "" : a.el.value = i;
                                    $.isPlainObject(i) || (i = {}), $(a.el).w2field($.extend({}, a.options, {
                                        type: a.type,
                                        selected: i
                                    }));
                                    break;
                                case "enum":
                                case "file":
                                    $.isArray(i) || (i = []), $(a.el).w2field($.extend({}, a.options, {
                                        type: a.type,
                                        selected: i
                                    }));
                                    break;
                                case "select":
                                    var k = a.options.items;
                                    if (null != k && k.length > 0) {
                                        k = w2obj.field.prototype.normMenu(k), $(a.el).html("");
                                        for (var n = 0; n < k.length; n++) $(a.el).append('<option value="' + k[n].id + '">' + k[n].text + "</option")
                                    }
                                    $(a.el).val(i);
                                    break;
                                case "radio":
                                    $(a.$el).prop("checked", !1).each(function (a, b) {
                                        $(b).val() == i && $(b).prop("checked", !0)
                                    });
                                    break;
                                case "checkbox":
                                    $(a.el).prop("checked", !!i);
                                    break;
                                case "html":
                                case "custom":
                                case "empty":
                                    break;
                                default:
                                    $(a.el).val(i), $(a.el).w2field($.extend({}, a.options, {
                                        type: a.type
                                    }))
                            }
                        }
                        for (var h = $(this.box).find("page"), l = 0; l < h.length; l++) $(h[l]).find("> *").length > 1 && $(h[l]).wrapInner("<div></div>");
                        return this.trigger($.extend(d, {
                            phase: "after"
                        })), this.resize(), (new Date).getTime() - b
                    }
                }
            },
            render: function (a) {
                function b() {
                    var a = $(d.box).find("div:not(field-helper) > input, select, textarea, div > label:nth-child(1) > :radio").not(".file-input");
                    a.length > d.focus && a[d.focus].focus()
                }
                var c = (new Date).getTime(),
                    d = this;
                if ("object" == typeof a && ($(this.box).find("#form_" + this.name + "_tabs").length > 0 && $(this.box).removeAttr("name").removeClass("w2ui-reset w2ui-form").html(""), this.box = a), this.isGenerated && this.box) {
                    var e = this.trigger({
                        phase: "before",
                        target: this.name,
                        type: "render",
                        box: null != a ? a : this.box
                    });
                    if (e.isCancelled !== !0) {
                        var f = '<div class="w2ui-form-box">' + ("" !== this.header ? '<div class="w2ui-form-header">' + this.header + "</div>" : "") + '    <div id="form_' + this.name + '_toolbar" class="w2ui-form-toolbar" style="display: none"></div>    <div id="form_' + this.name + '_tabs" class="w2ui-form-tabs" style="display: none"></div>' + this.formHTML + "</div>";
                        $(this.box).attr("name", this.name).addClass("w2ui-reset w2ui-form").html(f), $(this.box).length > 0 && ($(this.box)[0].style.cssText += this.style), "function" != typeof this.toolbar.render && (this.toolbar = $().w2toolbar($.extend({}, this.toolbar, {
                            name: this.name + "_toolbar",
                            owner: this
                        })), this.toolbar.on("click", function (a) {
                            var b = d.trigger({
                                phase: "before",
                                type: "toolbar",
                                target: a.target,
                                originalEvent: a
                            });
                            b.isCancelled !== !0 && d.trigger($.extend(b, {
                                phase: "after"
                            }))
                        })), "object" == typeof this.toolbar && "function" == typeof this.toolbar.render && this.toolbar.render($("#form_" + this.name + "_toolbar")[0]), "function" != typeof this.tabs.render && (this.tabs = $().w2tabs($.extend({}, this.tabs, {
                            name: this.name + "_tabs",
                            owner: this,
                            active: this.tabs.active
                        })), this.tabs.on("click", function (a) {
                            d.goto(this.get(a.target, !0))
                        })), "object" == typeof this.tabs && "function" == typeof this.tabs.render && (this.tabs.render($("#form_" + this.name + "_tabs")[0]), this.tabs.active && this.tabs.click(this.tabs.active)), this.trigger($.extend(e, {
                            phase: "after"
                        })), this.resize();
                        var g = "object" != typeof this.url ? this.url : this.url.get;
                        return g && 0 !== this.recid && null != this.recid ? this.request() : this.refresh(), 0 === $("layout").length && (this.tmp_resize = function (a) {
                            w2ui[d.name].resize()
                        }, $(window).off("resize", "body").on("resize", "body", this.tmp_resize)), this.focus >= 0 && setTimeout(function () {
                            0 === $(d.box).find("input, select, textarea").length ? setTimeout(b, 500) : b()
                        }, 10), (new Date).getTime() - c
                    }
                }
            },
            destroy: function () {
                var a = this.trigger({
                    phase: "before",
                    target: this.name,
                    type: "destroy"
                });
                a.isCancelled !== !0 && ("object" == typeof this.toolbar && this.toolbar.destroy && this.toolbar.destroy(), "object" == typeof this.tabs && this.tabs.destroy && this.tabs.destroy(), $(this.box).find("#form_" + this.name + "_tabs").length > 0 && $(this.box).removeAttr("name").removeClass("w2ui-reset w2ui-form").html(""), delete w2ui[this.name], this.trigger($.extend(a, {
                    phase: "after"
                })), $(window).off("resize", "body"))
            }
        }, $.extend(w2form.prototype, w2utils.event), w2obj.form = w2form
    }(jQuery),
    function (a, b) {
        if ("function" == typeof define && define.amd) return define(function () {
            return b
        });
        if ("undefined" != typeof exports) {
            if ("undefined" != typeof module && module.exports) return exports = module.exports = b;
            a = exports
        }
        for (var c in b) a[c] = b[c]
    }(this, {
    w2ui: w2ui,
    w2obj: w2obj,
    w2utils: w2utils,
    w2popup: w2popup,
    w2alert: w2alert,
    w2confirm: w2confirm,
    w2prompt: w2prompt
    });