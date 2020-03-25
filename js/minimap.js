/*!                   * INTERSTELLAR POLICE WARNING *
 * As provided by the Galactic Treaty of 4410, this computer software product is
 * hereby declared the Interllectual Property of the human author, Jara Lowell.
 * All rights are henceforth reserved in space and time.
 *
 * Provision for the protection of Interlllectual Property is covered under
 * Section 8.9.1A-f of the Intengible Property Act of 4506, ratified by all
 * beings except the Gazurtoids of planet Gazuria.
 *
 * WARNING: Any being caught with an unautorized copy or version of this software
 * product will be punished by Interstellar Corporate Police. Punishment may.
 * include the destruction of the offending beings planet.
 *
 */
!function () {
  function A(c, a) {
    var e = o('<div>').attr('id', 'mini-map-token-' + c).css({
      position: 'absolute',
      width: '5%',
      height: '5%',
      background: a,
      top: '0%',
      left: '0%'
    });
    return e
  }
  function v(a) {
    void 0 !== window.mini_map_tokens[a] && (window.mini_map_tokens[a].detach(), delete window.mini_map_tokens[a])
  }
  function D(a) {
    return void 0 !== window.mini_map_tokens[a]
  }
  function b() {
    x.lineWidth = 0.5;
    x.beginPath();
    x.moveTo(0, 100);
    x.lineTo(200, 100);
    x.moveTo(100, 0);
    x.lineTo(100, 200);
    x.closePath();
    x.strokeStyle = '#000000';
    x.stroke()
  }
  function t() {
    x.clearRect(0, 0, 200, 200);
    x.globalAlpha = 1;
    b()
  }
  function G(a, m, i, e, s, h, l) {
    var r = ((m * 200) / k).toFixed(0);
    var n = ((i * 200) / j).toFixed(0);
    var c = 1 + (s / 85);
    x.beginPath();
    x.arc(r, n, c, 0, 2 * Math.PI, false);
    if (h) {
      if (e == '#0a0a0a') {
        x.globalAlpha = 1;
        x.strokeStyle = e;
        x.fillStyle = e;
        x.fill()
      } else {
        x.globalAlpha = 0.5;
        x.strokeStyle = e
      }
    } else {
      x.strokeStyle = '#FFFFFF';
      x.fillStyle = e;
      x.fill()
    }
    x.lineWidth = 0.5;
    x.stroke();
    x.globalAlpha = 1
  }
  function p(c, a) {
    window.mini_map_pos.text('x: ' + c.toFixed(0) + ' / y: ' + a.toFixed(0))
  }
  function F() {
    var a = window.jQuery;
    if (window.mini_map_tokens = {
    }, 0 === a('#mini-map-pos').length && (window.mini_map_pos = a('<div>').attr({
      id: 'mappos',
      'class': 'mappos'
    }).appendTo(document.body)), 0 === a('#mini-map-wrapper').length) {
      var c = $('<canvas>').attr({
        id: 'mini-map',
        width: '200px',
        height: '200px',
        'class': 'mini-map'
      });
      var e = $('<div>').attr('id', 'minimap');
      e.append(c).appendTo(document.body);
      window.mini_map = c[0];
      e = $('<div>').attr({
        id: 'curser',
        'class': 'curser'
      });
      e.appendTo(document.body);
      e = $('<div>').attr({
        id: 'livekills',
        'class': 'map-kills'
      });
      e.appendTo(document.body);
      e = $('<div>').attr({
        id: 'minimapbg',
        'class': 'map-bg'
      });
      e.appendTo(document.body);
      d = window.mini_map;
      x = d.getContext('2d');
      x.clearRect(0, 0, 200, 200)
    }
  }
  function q(c, a, r, l, m, h) {
    w[c] = this,
    this.id = c,
    this.ox = this.x = a,
    this.oy = this.y = r,
    this.oSize = this.size = l,
    this.color = m,
    this.points = [
    ],
    this.pointsAcc = [
    ],
    this.setName(h)
  }
  function z(c, a, e) {
    Object.defineProperty(c, e, {
      get: function () {
        return a[e]
      },
      set: function (h) {
        a[e] = h
      },
      enumerable: !0,
      configurable: !0
    })
  }
  function f(J, T) {
    var H = + new Date,
    N = Math.random(),
    r = T,
    U = J.getUint16(r, !0);
    r += 2;
    for (var Q = 0; U > Q; ++Q) {
      var O = w[J.getUint32(r, !0)],
      m = w[J.getUint32(r + 4, !0)],
      r = r + 8;
      O && m && (m.destroy(), m.ox = m.x, m.oy = m.y, m.oSize = m.size, m.nx = O.x, m.ny = O.y, m.nSize = m.size, m.updateTime = H)
    }
    for (Q = 0; ; ) {
      var P = J.getUint32(r, !0); // ID
      if (r += 4, 0 == P) {
        break
      }
      ++Q;
      var O;
      if (J.getInt32(r, !0) > 100000 && aio == null) aio = 1;

      if (!aio)
      {
        O = J.getInt32(r, !0), r = r + 4;
        m = J.getInt32(r, !0), r = r + 4;
      }
      else
      {
        O = J.getInt16(r, !0), r = r + 2;
        m = J.getInt16(r, !0), r = r + 2;
      }
      g = J.getInt16(r, !0), r += 2;
      for (var L = J.getUint8(r++), S = J.getUint8(r++), I = J.getUint8(r++), L = (L << 16 | S << 8 | I).toString(16); 6 > L.length; ) {
        L = '0' + L
      }
      var L = '#' + L,
      R = J.getUint8(r++),
      S = !!(1 & R),
      I = !!(16 & R);
      2 & R && (r += 4),
      4 & R && (r += 8),
      8 & R && (r += 16);
      for (var M, R = ''; M = J.getUint16(r, !0), r += 2, 0 != M; ) {
        R += String.fromCharCode(M)
      }
      M = R;
      R = null;
      var K = false;
      w.hasOwnProperty(P) ? (R = w[P], R.updatePos(), R.ox = R.x, R.oy = R.y, R.oSize = R.size, R.color = L, K = true)  : (R = new q(P, O, m, g, L, M), R.pX = O, R.pY = m);
      R.isVirus = S;
      R.isAgitated = I;
      R.nx = O;
      R.ny = m;
      R.nSize = g;
      R.updateCode = N;
      R.updateTime = H;
      M && R.setName(M);
      if (K && C && R.nSize > 20) {
        G(R.id, R.nx, R.ny, R.color, R.nSize, R.isVirus, M)
      }
    }
    for (N = J.getUint32(r, !0), r += 4, Q = 0; N > Q; Q++) {
      P = J.getUint32(r, !0),
      r += 4,
      R = w[P],
      null != R && R.destroy()
    }
  }
  function E(c) {
    var a = 0,
    l = new DataView(c.data);
    switch (240 == l.getUint8(a) && (a += 5), l.getUint8(a++)) {
      case 16:
        if (C) {
          t()
        }
        f(l, a);
        break;
      case 20:
        y = [
        ];
        break;
      case 32:
        var h = l.getUint32(a, !0);
        y.push(h);
        break;
      case 64:
        leftPos = l.getFloat64(a, true);
        a += 8;
        topPos = l.getFloat64(a, true);
        a += 8;
        rightPos = l.getFloat64(a, true);
        a += 8;
        bottomPos = l.getFloat64(a, true);
        a += 8;
        k = (rightPos + leftPos);
        j = (bottomPos + topPos);
        console.log('Map size update: ' + k + '/' + j);
        break
    }
  }
  var B = window.WebSocket,
  o = window.jQuery,
  w = [
  ],
  y = [
  ],
  d,
  aio = null,
  k = 1200,
  j = 1200,
  C = null,
  x;
  tesmapz = setInterval(function () {
    var a = $('#minimap').css('display');
    if (a == 'none' && (C == true || C == null)) {
      C = false;
      jQuery('#minimapbg').hide();
      jQuery('#livekills').hide();
      $('#hmm').prop('checked', true);
      t()
    }
    if (a == 'block' && (C == false || C == null)) {
      C = true;
      jQuery('#minimapbg').show();
      jQuery('#livekills').show();
      $('#hmm').prop('checked', false)
    }
  }, 5000);
  q.prototype = {
    id: 0,
    points: null,
    pointsAcc: null,
    name: null,
    nameCache: null,
    sizeCache: null,
    x: 0,
    y: 0,
    size: 0,
    ox: 0,
    oy: 0,
    oSize: 0,
    nx: 0,
    ny: 0,
    nSize: 0,
    updateTime: 0,
    updateCode: 0,
    drawTime: 0,
    destroyed: !1,
    isVirus: !1,
    isAgitated: !1,
    wasSimpleDrawing: !0,
    destroy: function () {
      delete w[this.id],
      id = y.indexOf(this.id),
      - 1 != id && y.splice(id, 1),
      this.destroyed = !0,
      v(this.id)
    },
    setName: function (a) {
      this.name = a
    },
    updatePos: function () {
      - 1 != y.indexOf(this.id) && (D(this.id) || p(this.nx, this.ny))
    }
  },
  window.WebSocket = function (c, a) {
    void 0 === a && (a = [
    ]);
    var e = new B(c, a);
    z(this, e, 'binaryType'),
    z(this, e, 'bufferedAmount'),
    z(this, e, 'extensions'),
    z(this, e, 'protocol'),
    z(this, e, 'readyState'),
    z(this, e, 'url'),
    this.send = function (h) {
      return e.send.call(e, h)
    },
    this.close = function (l, h) {
      return e.close.call(e, l, h)
    },
    this.onopen = function () {
    },
    this.onclose = function () {
    },
    this.onerror = function () {
    },
    this.onmessage = function () {
    },
    e.onopen = function (h) {
      aio = null;
      return this.onopen.call(e, h)
    }.bind(this),
    e.onmessage = function (h) {
      return E(h),
      this.onmessage.call(e, h)
    }.bind(this),
    e.onclose = function (h) {
      return this.onclose.call(e, h)
    }.bind(this),
    e.onerror = function (h) {
      return this.onerror.call(e, h)
    }.bind(this)
  },
  window.WebSocket.prototype = B,
  F()
}();
