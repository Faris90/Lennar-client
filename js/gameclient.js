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
 * product will be punished by Interstellar Corporate Police. Punishment may
 * include the destruction of the offending beings planet.
 *
 */
;

$(function () {
  $('#setting-table a:first').tab('show'),
  $('#ayarlar').on('click', function () {
    var a = $('#ayarlr');
    return a.hasClass('visible') ? (a.removeClass('visible').animate({
      'margin-left': '-300px'
    }), $('#content').css({
      'margin-right': '0px'
    }))  : (a.addClass('visible').animate({
      'margin-left': '0px'
    }), $('#content').css({
      'margin-right': '-300px'
    })),
    !1,
    $('#news').hide(),$('#about').hide()
  })
}),
$(function () {
  $('#scores-table a:first').tab('show'),
  $('#opener').on('click', function () {
    var a = $('#slide-panel');
    return a.hasClass('visible') ? (a.removeClass('visible').animate({
      'margin-left': '-300px'
    }), $('#content').css({
      'margin-right': '0px'
    }))  : (a.addClass('visible').animate({
      'margin-left': '0px'
    }), $('#content').css({
      'margin-right': '-300px'
    })),
    !1,
    $('#news').hide(),$('#about').hide()
  })
});
var SplitInterval;
var MacroInterval;
var SplitDebounce = false;
var MacroDebounce = false;
$(document).on('keydown', function(input) {
    if (input.keyCode == 16) {
        if (SplitDebounce) {
            return;
        }
        SplitDebounce = true;
        SplitInterval = setInterval(function() {
            $("body").trigger($.Event("keydown", {
                keyCode: 32
            }));
            $("body").trigger($.Event("keyup", {
                keyCode: 32
            }));
        }, 0);
    } else if (input.keyCode == 81) {
  if (MacroDebounce) {
            return;
        }
        MacroDebounce = true;
        MacroInterval = setInterval(function() {
            $("body").trigger($.Event("keydown", {
                keyCode: 87
            }));
            $("body").trigger($.Event("keyup", {
                keyCode: 87
            }));
        }, 0);
 }
})

$(document).on('keyup', function(input) {
    if (input.keyCode == 16) {
        SplitDebounce = false;
        clearInterval(SplitInterval);
        return;
    } else if (input.keyCode == 81) {
        MacroDebounce = false;
        clearInterval(MacroInterval);
        return;
    }
})
$(function () {
  setRegion('UK-Europe')
});
var CONNECTION_URL;
(function (ak, C) {
  ak.setserver = function (w) {
    if (w != D) {
      CONNECTION_URL = w;
      D = $('#agarios').find('option:selected').attr('mode');
      ag();
      jQuery('#playBtn').show();
      jQuery('#SettingsBtn').show();
      gotsts = 0;
      var z = $('#agarios option:selected:selected').attr('sname');
      var url = 'img/bg_' + z + '.jpg';
      $.get(url)
        .done(function() {
          document.getElementById('overlays').style.backgroundImage = 'url(\'img/bg_' + z + '.jpg\')';
        }).fail(function() {
          document.getElementById('overlays').style.backgroundImage = '';
        })
    }
  };
  var bL,
  bK,
  bw = 'createTouch' in document,
  d = [
  ];
  var aW = - 1,
  r = new Vector2(0, 0),
  ae = new Vector2(0, 0),
  au = new Vector2(0, 0);
  var aG = 'http://agarioforums.io/skins/';
  function i() {
    bQ = !0;
    document.getElementById('canvas').focus();
    var z = false;
    var X;
    n = g = document.getElementById('canvas');
    aM = document.getElementById('statsGraph');
    bJ = n.getContext('2d');
    n.onmousemove = function (bW) {
      aD = bW.clientX;
      aC = bW.clientY;
      am()
    };
    if (bw) {
      n.addEventListener('touchstart', aV, false);
      n.addEventListener('touchmove', u, false);
      n.addEventListener('touchend', t, false);
      C('#minimap').hide()
      bN = 2;
      h = false;
      C('#skinon').prop('checked', !0);
      C('#loset').prop('checked', !0);
    }
    n.onmouseup = function () {
    };
    if (/firefox/i.test(navigator.userAgent)) {
      document.addEventListener('DOMMouseScroll', R, false)
    } else {
      document.body.onmousewheel = R
    }
    n.onfocus = function () {
      z = false
    };
    document.getElementById('chtbox').onblur = function () {
      z = false
    };
    document.getElementById('chtbox').onfocus = function () {
      z = !0
    };
    var w = false,
    Y = false,
    T = false;
    ak.onkeydown = function (bW) {
      switch (bW.keyCode) {
        case 32:
          if ((!w) && (!z)) {
            bz();
            Z(17);
            w = !0
          }
          break;
        case 81:
          if ((!Y) && (!z)) {
            Z(18);
            Y = !0
          }
          break;
        case 87:
          if ((!T) && (!z)) {
            bz();
            Z(21);
            T = !0
          }
          break;
        case 27:
          az(!0);
          ak.isSpectating = false;
          break;
        case 13:
          if (z) {
            z = false;
            document.getElementById('chtbox').blur();
            X = document.getElementById('chtbox').value;
            if ((X.length < 101) && (X.length > 0)) {
              bG(X)
            }
            document.getElementById('chtbox').value = ''
          } else {
            if (!F) {
              document.getElementById('chtbox').focus();
              z = !0
            }
          }
      }
    };
    ak.onkeyup = function (bW) {
      switch (bW.keyCode) {
        case 32:
          w = false;
          break;
        case 87:
          T = false;
          break;
        case 81:
          if (Y) {
            Z(19);
            Y = false
          }
          break
      }
    };
    ak.onblur = function () {
      Z(19);
      T = Y = w = false
    };
    ak.onresize = bc;
    bc;
    if (ak.requestAnimationFrame) {
      ak.requestAnimationFrame(y)
    } else {
      setInterval(S, 1000 / 60)
    }
    setInterval(bz, 40);
    if (a2) {
      C('#region').val(a2)
    }
    bP();
    av(C('#region').val());
    null == k && a2 && ag();
    C('#overlays').show();
    bc()
  }
  function aV(T) {
    for (var z = 0; z < T.changedTouches.length; z++) {
      var X = T.changedTouches[z];
      if ((aW < 0) && (X.clientX < aY / 2)) {
        aW = X.identifier;
        ae.reset(X.clientX, X.clientY);
        r.copyFrom(ae);
        au.reset(0, 0)
      }
      var w = ~~(aY / 7);
      if ((X.clientX > aY - w) && (X.clientY > ap - w)) {
        bz();
        Z(17)
      }
      if ((X.clientX > aY - w) && (X.clientY > ap - 2 * w - 10) && (X.clientY < ap - w - 10)) {
        bz();
        Z(21)
      }
    }
    d = T.touches
  }
  function bE(X) {
    X = Number(X);
    var T = Math.floor(X / 3600);
    var w = Math.floor(X % 3600 / 60);
    var z = Math.floor(X % 3600 % 60);
    return ((T > 0 ? T + ':' + (w < 10 ? '0' : '')  : '') + w + ':' + (z < 10 ? '0' : '') + z)
  }
  function bs() {
    if (aM) {
      var bZ = aM.getContext('2d'),
      bY = aM.width,
      b2 = aM.height;
      bZ.clearRect(0, 0, bY, b2);
      if (2 < a7.length) {
        for (var bW = 200, w = 0; w < a7.length; w++) {
          bW = Math.max(a7[w], bW)
        }
        bZ.lineWidth = 3;
        bZ.lineCap = 'round';
        bZ.lineJoin = 'round';
        bZ.strokeStyle = '#3071A9';
        bZ.fillStyle = '#3071A9';
        bZ.beginPath();
        bZ.moveTo(0, b2 - a7[0] / bW * (b2 - 10) + 10);
        for (w = 1; w < a7.length; w += Math.max(~~(a7.length / bY), 1)) {
          for (var Y = w / (a7.length - 1) * bY, X = [
          ], T = - 20; 20 >= T; ++T) {
            0 > w + T || w + T >= a7.length || X.push(a7[w + T])
          }
          X = X.reduce(function (b5, b4) {
            return b5 + b4
          }) / X.length / bW;
          bZ.lineTo(Y, b2 - X * (b2 - 10) + 10)
        }
        bZ.stroke();
        bZ.globalAlpha = 0.5;
        bZ.lineTo(bY, b2);
        bZ.lineTo(0, b2);
        bZ.fill();
        bZ.globalAlpha = 1
      }
      totalSeconds = a7.length;
      var b3 = (totalSeconds % 60).toFixed(0);
      var b1 = totalSeconds / 60;
      var z = (b1 % 60).toFixed(0);
      var b0 = (b1 / 60).toFixed(0);
      var bX = Date.now();
      bE((bX - ad) / 1000);
      document.getElementById('statsTextTime').innerHTML = (bE((bX - ad) / 1000));
      document.getElementById('statsTextMass').innerHTML = ((aw / 100).toFixed(0).toString());
      document.getElementById('statsTextFood').innerHTML = (aI.toString());
      document.getElementById('statsTextCell').innerHTML = (ax.toString())
    }
    a7 = [
    ];
    aw = 0
  }
  function u(z) {
    z.preventDefault();
    for (var w = 0; w < z.changedTouches.length; w++) {
      var T = z.changedTouches[w];
      if (aW == T.identifier) {
        r.reset(T.clientX, T.clientY);
        au.copyFrom(r);
        au.minusEq(ae);
        aD = au.x * 3 + aY / 2;
        aC = au.y * 3 + ap / 2;
        am();
        bz()
      }
    }
    d = z.touches
  }
  function t(z) {
    d = z.touches;
    for (var w = 0; w < z.changedTouches.length; w++) {
      var T = z.changedTouches[w];
      if (aW == T.identifier) {
        aW = - 1;
        au.reset(0, 0);
        break
      }
    }
  }
  function R(w) {
    aT *= Math.pow(0.9, w.wheelDelta / - 120 || w.detail || 0);
    1 > aT && (aT = 1);
    aT > 4 / U && (aT = 4 / U)
  }
  function aX() {
    if (0.4 > U) {
      bB = null
    } else {
      var z = Number.POSITIVE_INFINITY,
      w = Number.POSITIVE_INFINITY,
      bX = Number.NEGATIVE_INFINITY,
      bW = Number.NEGATIVE_INFINITY,
      Y = 0;
      for (var T = 0; T < H.length; T++) {
        var X = H[T];
        if (X.shouldRender() && !X.prepareData && 20 < X.size * U) {
          Y = Math.max(X.size, Y);
          z = Math.min(X.x, z);
          w = Math.min(X.y, w);
          bX = Math.max(X.x, bX);
          bW = Math.max(X.y, bW)
        }
      }
      bB = bD.init({
        minX: z - (Y + 100),
        minY: w - (Y + 100),
        maxX: bX + (Y + 100),
        maxY: bW + (Y + 100),
        maxChildren: 2,
        maxDepth: 4
      });
      for (T = 0; T < H.length; T++) {
        X = H[T];
        if (X.shouldRender() && !(20 >= X.size * U)) {
          for (z = 0; z < X.points.length; ++z) {
            w = X.points[z].x;
            bX = X.points[z].y;
            w < a6 - aY / 2 / U || bX < a5 - ap / 2 / U || w > a6 + aY / 2 / U || bX > a5 + ap / 2 / U || bB.insert(X.points[z])
          }
        }
      }
    }
  }
  function am() {
    bh = (aD - aY / 2) / U + a6;
    bg = (aC - ap / 2) / U + a5
  }
  function av(w) {
    if (w && w != a2) {
      if (C('#region').val() != w) {
        C('#region').val(w)
      }
      a2 = ak.localStorage.location = w;
      C('.btn-needs-play').prop('disabled', false);
      bQ && ag()
    }
  }
  function magic() {
    // Play music > $("#unlock")[0].play();
    $(".magic").show();var x = 0;var y = 0;var intLevel=setInterval(function(){if(x > 578){x=0;y+=192;}else{x+=192;}if(y > 1152){x = 0;y = 0;clearInterval(intLevel);$(".magic").hide();}$(".magic").css("background-position","-" + x + "px -" + y + "px");},50);
  }
  function aS() {
    bq();
    a7 = [
    ];
    aI = 0;
    ax = 0;
    ad = Date.now();
    F = false;
    C('#mappos').show();
    C('#advert').hide();
    magic();
    bP()
  }
  function v() {
    setTimeout(aS, 300);
    C('#overlays').hide();
    C('#mappos').hide();
    C('#advert').hide()
  }
  function ay() {
    C('#overlays').fadeIn(300)
  }
  function aj(w) {
    bs();
    aU('Aww! Well lets<br>try again!');
    C('#advert').fadeIn(1400);
    C('#mappos').hide();
    F = !0;
    ac = null
  }
  function az(w) {
    F = !0;
    ac = null;
    C('#mappos').hide();
    C('#overlays').fadeIn(300)
  }
  function bP() {
    C('#region').val() ? ak.localStorage.location = C('#region').val()  : ak.localStorage.location && C('#region').val(ak.localStorage.location);
    C('#region').val() ? C('#locationKnown').append(C('#region'))  : C('#locationUnknown').append(C('#region'))
  }
  function ag() {
    if (bQ && a2 && (CONNECTION_URL != null)) {
      setTimeout(aA('ws://' + CONNECTION_URL), 1000)
    }
  }
  function ai() {
    $('.progress-bar1').removeAttr('style');
    var X = ($('.progress-wrap1').data('progress-percent') / 100);
    var w = $('.progress-wrap1').width();
    var z = X * w;
    var T = 10000;
    $('.progress-bar1').stop().animate({
      left: z
    }, T)
  }
  function ah() {
    $('.progress-bar2').removeAttr('style');
    var X = ($('.progress-wrap2').data('progress-percent') / 100);
    var w = $('.progress-wrap2').width();
    var z = X * w;
    var T = 3000;
    $('.progress-bar2').stop().animate({
      left: z
    }, T)
  }
  function aA(z) {
    if (z != null && CONNECTION_URL != null) {
      if (k) {
        k.onopen = null;
        k.onmessage = null;
        k.onclose = null;
        try {
          k.close()
        } catch (w) {
        }
        k = null
      }
      var T = CONNECTION_URL;
      z = 'ws://' + T;
      W = [
      ];
      al = [
      ];
      aQ = {
      };
      H = [
      ];
      bU = [
      ];
      a3 = [
      ];
      n = x = null;
      bv = 0;
      jQuery('#dispconn').show();
      jQuery('#connecting').hide();
      console.log('Connecting to ' + z);
      k = new WebSocket(z);
      k.binaryType = 'arraybuffer';
      k.onopen = aF;
      k.onmessage = M;
      k.onclose = V;
      k.onerror = function () {
        console.log('socket error')
      }
    }
  }
  function bV(w) {
    return new DataView(new ArrayBuffer(w))
  }
  function aP(w) {
    k.send(w.buffer)
  }
  function aF() {
    jQuery('#dispconn').hide();
    by.push({
      name: 'AgarioForums.io',
      color: '#0AFF0A',
      message: 'Connected to server',
      time: Date.now()
    });
    af();
    var w;
    aio = null;
    aB = 500;
    ar = new Date;
    curser = '<font size=\'+1\'><span id=\'smode\'>' + $('#agarios option:selected:selected').attr('mode') + '</span></font> :: ' + $('#agarios option:selected:selected').attr('alt') + ' :: Map <span id=\'mapsize\'>' + $('#agarios option:selected:selected').attr('map') + '</span> :: Food <span id=\'mapfood\'>' + $('#agarios option:selected:selected').attr('food') + '</span> :: <font size=\'+1\'><span id=\'onlinestat\'>Unknown</span></font> <span id=\'uptime\'></span> <span id=\'latency\'></span> <span id=\'fps\'></span>';
    $('#curser').html(curser);
    console.log('socket open');
    aJ = [
    ];
    // Send connect
    w = bV(5);
    w.setUint8(0, 254);
    w.setUint32(1, 5, true);
    aP(w);
    // Send Handshake
    w = bV(5);
    w.setUint8(0, 255);
    w.setUint32(1, 1332175218, true); // 2200049715
    aP(w);
    // Send...
    /*
    var b = decodeURIComponent( ak.location.hash ).replace(/.*#/gim, "");
    w = bV(1 + b.length);
    w.setUint8(0, 80);
    for (var c = 0; c < b.length; ++c)
        w.setUint8(c + 1, b.charCodeAt(c));
    R(a);
    */
    bq()
  }
  function V() {
    console.log('socket close');
    jQuery('#dispconn').hide();
    jQuery('#connecting').show();
    by.push({
      name: 'AgarioForums.io',
      color: '#FF0A0A',
      message: 'Disconnected from server',
      time: Date.now()
    });
    af();
    setTimeout(ag, aB);
    aB *= 1.5
  }
  function M(w) {
    b(new DataView(w.data))
  }
  function bM(z, X) {
    var w = [
      {
        value: 1000000000000000000,
        symbol: 'E'
      },
      {
        value: 1000000000000000,
        symbol: 'P'
      },
      {
        value: 1000000000000,
        symbol: 'T'
      },
      {
        value: 1000000000,
        symbol: 'G'
      },
      {
        value: 1000000,
        symbol: 'M'
      },
      {
        value: 1000,
        symbol: 'k'
      }
    ],
    T;
    for (T = 0; T < w.length; T++) {
      if (z >= w[T].value) {
        return (z / w[T].value).toFixed(X).replace(/\.?0+$/, '') + w[T].symbol
      }
    }
    return z
  }
  function b(T) {
    function z() {
      var b7 = '',
      b6;
      while ((b6 = T.getUint16(bW, !0)) != 0) {
        bW += 2;
        b7 += String.fromCharCode(b6)
      }
      bW += 2;
      return b7
    }
    var bW = 0,
    b1 = false;
    240 == T.getUint8(bW) && (bW += 5);
    switch (T.getUint8(bW++)) {
      case 16:
        e(T, bW);
        break;
      case 17:
        J = T.getFloat32(bW, !0);
        bW += 4;
        I = T.getFloat32(bW, !0);
        bW += 4;
        j = T.getFloat32(bW, !0);
        bW += 4;
        break;
      case 20:
        al = [];
        W = [];
        break;
      case 21:
        bI = T.getInt16(bW, !0);
        bW += 2;
        bH = T.getInt16(bW, !0);
        bW += 2;
        bt || (bt = !0, L = bI, K = bH);
        break;
      case 32:
        W.push(T.getUint32(bW, !0));
        bW += 4;
        break;
      case 48:
        b1 = !0;
        bR = !0;
        break;
      case 49:
        if (!b1) {
          bR = false
        }
        x = null;
        var w = T.getUint32(bW, !0);
        bW += 4;
        a3 = [
        ];
        for (bX = 0; bX < w; ++bX) {
          var X = T.getUint32(bW, !0);
          bW += 4;
          a3.push({
            id: X,
            name: z()
          })
        }
        if (gotsts == 0) {
          var mu = '';
          if ( w >= 10 ) mu = ' or more';
          jQuery('#onlinestat').html('Players ' + w + mu)
        }
        aR();
        break;
      case 50:
        x = [];
        var bY = T.getUint32(bW, !0);
        bW += 4;
        for (var bX = 0; bX < bY; ++bX) x.push(T.getFloat32(bW, !0)), bW += 4;
        aR();
        break;
      case 64:
        bO = T.getFloat64(bW, !0);
        bW += 8;
        bA = T.getFloat64(bW, !0);
        bW += 8;
        O = T.getFloat64(bW, !0);
        bW += 8;
        bC = T.getFloat64(bW, !0);
        bW += 8;
        J = (O + bO) / 2;
        I = (bC + bA) / 2;
        j = 1;
        if (0 == al.length) {
          a6 = J;
          a5 = I;
          U = j
        }
        T.byteLength > bW && (T.getUint32(bW, !0), bW += 4, rb = z(), console.log("Server version " + rb));
        break;
      case 81: // Personal Score //
        var f = a.getUint32(bW, !0),
          bW = bW + 4,
          k = a.getUint32(bW, !0),
          bW = bW + 4,
          h = a.getUint32(bW, !0),
          bW = bW + 4;
          /* setTimeout(function() { Z({ d: f, e: k, c: h }) }, 1200); */
        break;
      case 90:
        gotsts = 1;
        uptime = T.getFloat64(bW, !0);
        bW += 8;
        var Y = Math.floor(uptime / 60);
        var b2 = Math.floor(Y / 60);
        var b5 = Math.floor(b2 / 24);
        b2 = b2 - (b5 * 24);
        Y = Y - (b5 * 24 * 60) - (b2 * 60);
        if (b5 > 0) {
          jQuery('#uptime').html(':: Uptime ' + b5 + ' day(s) ' + b2 + ':' + (Y < 10 ? '0' : '') + Y + ' ')
        } else {
          jQuery('#uptime').html(':: Uptime ' + b2 + ':' + (Y < 10 ? '0' : '') + Y + ' ')
        }
        onlinestat = T.getFloat64(bW, !0);
        bW += 8;
        jQuery('#onlinestat').html('Players ' + onlinestat );
        onlinestat = T.getFloat64(bW, !0);
        bW += 8;
        jQuery('#mapsize').html(bM(onlinestat, 1));
        onlinestat = T.getFloat64(bW, !0);
        bW += 8;
        jQuery('#mapfood').html(bM(onlinestat, 1));
        var b3 = (new Date) - ar;
        jQuery('#latency').html(' :: Latency ' + b3 + 'ms');
        if (T.byteLength > 36) {
          onlinestat = T.getFloat64(bW, !0);
          var bZ = s(onlinestat);
          if (D != bZ) {
            D = bZ;
            jQuery('#smode').html(D)
          }
        }
        break;
      case 91:
        ban = T.getUint8(bW, !0);
        aB = 5000;
        bW += 1;
        jQuery('#servermsg').empty('<div>');
        jQuery('#servermsg').html('<div style=\'width: 336px; background-color: red; margin: 10px auto; border-radius: 15px; padding: 5px 15px 5px 15px;\'><h2>You have been banned!</h2></div>');
        jQuery('#warning').show();
        ah();
        setTimeout('$("#warning").hide()', 3000);
        var b0 = setTimeout(function () {
          b0 = setInterval(window.location.assign('https://www.google.com/logos/2010/pacman10-i.html'), 100)
        }, 3000);
        break;
      case 92:
        connlimit = T.getUint8(bW, !0);
        aB = 5000;
        bW += 1;
        jQuery('#servermsg').empty('<div>');
        jQuery('#servermsg').html('<div style=\'width: 336px; background-color: red; margin: 10px auto; border-radius: 15px; padding: 5px 15px 5px 15px;\'><h2>Too many connections from your IP</h2></div>');
        jQuery('#warning').show();
        ah();
        setTimeout('$("#warning").hide()', 3000);
        break;
      case 93:
        slotslimit = T.getUint8(bW, !0);
        aB = 5000;
        bW += 1;
        jQuery('#servermsg').empty('<div>');
        jQuery('#servermsg').html('<div style=\'width: 336px; background-color: red; margin: 10px auto; border-radius: 15px; padding: 5px 15px 5px 15px;\'><h2>Server Full!, No more slots</h2></div>');
        jQuery('#warning').show();
        ah();
        setTimeout('$("#warning").hide()', 3000);
        break;
      case 94:
        nickslimit = T.getUint8(bW, !0);
        jQuery('.btn-needs-nick').prop('disabled', !0);
        aB = 4000;
        bW += 1;
        jQuery('#servermsg').empty('<div>');
        jQuery('#servermsg').html('<div style=\'width: 336px; background-color: red; margin: 10px auto; border-radius: 15px; padding: 5px 15px 5px 15px;\'><h2>The name you selected is already is in game</h2></div>');
        jQuery('#warning').show();
        ah();
        setTimeout('$("#warning").hide()', 3000);
        var b4 = setTimeout(function () {
          b4 = setInterval(window.location.reload(), 100)
        }, 3000);
        break;
      case 99:
        bp(T, bW);
        break
    }
  }
  function s(w) {
    switch (w) {
      case 0:
        return 'FFA';
        break;
      case 1:
        return 'Teams';
        break;
      case 2:
        return 'Experimental FFA';
        break;
      case 10:
        return 'Tournament';
        break;
      case 11:
        return 'HungerGames';
        break;
      case 12:
        return 'Zombie FFA';
        break;
      case 13:
        return 'Zombie Team';
        break;
      case 14:
        return 'Experimental Team';
        break;
      case 20:
        return 'Rainbow FFA';
        break;
      case 21:
        return 'Debug FFA';
        break;
      case 22:
        return 'Blackhole FFA';
        break
    }
  }
  function bp(X, bY) {
    function T() {
      var b0 = '',
      bZ;
      while ((bZ = X.getUint16(bY, !0)) != 0) {
        bY += 2;
        b0 += String.fromCharCode(bZ)
      }
      bY += 2;
      return b0
    }
    var z = X.getUint8(bY++);
    if (z & 2) {
      bY += 4
    }
    if (z & 4) {
      bY += 8
    }
    if (z & 8) {
      bY += 16
    }
    var bX = X.getUint8(bY++),
    bW = X.getUint8(bY++),
    w = X.getUint8(bY++),
    Y = (bX << 16 | bW << 8 | w).toString(16);
    while (Y.length < 6) {
      Y = '0' + Y
    }
    Y = '#' + Y;
    by.push({
      name: T(),
      color: Y,
      message: T(),
      time: Date.now()
    });
    af()
  }
  function af() {
    var b1 = 0;
    var bY = Date.now();
    if (by.length > 0) {
      b1 = by[by.length - 1].time;
      for (var bW = 0; bW < by.length; bW++) {
        if (bY >= (120000 + by[bW].time)) {
          by.splice(bW, 1)
        }
      }
    } else {
      return
    }
    bf = document.createElement('canvas');
    var b7 = bf.getContext('2d');
    var b3 = Math.min(Math.max(aY / 1200, 1), 1);
    bf.width = 1000 * b3;
    bf.height = 450 * b3;
    b7.scale(b3, b3);
    var z = bY - b1;
    b7.globalAlpha = 1 * Math.exp(0);
    b7.globalAlpha = 0.8;
    var bZ = by.length;
    var b6;
    var b4 = bZ - 12;
    if (b4 < 0) {
      b4 = 0
    }
    for (var bW = 0; bW < (bZ - b4); bW++) {
      var b0 = new bn(15, by[bW + b4].color);
      b0.setValue(by[bW + b4].name);
      var w = b7.measureText(by[bW + b4].name);
      var b2 = b0.render();
      b7.drawImage(b2, 10, bf.height / b3 - 18 * (bZ - bW - b4));
      var bX;
      if (!ab) {
        bX = new bn(15, '#3B5998')
      } else {
        bX = new bn(15, '#F5F6CE')
      }
      var b6 = ': ' + by[bW + b4].message;
      bX.font = 'Bold 30px Sans-Serif';
      b7.globalAlpha = 0.9;
      for (var Y = 0; Y < br.length; Y++) {
        while (b6.indexOf(br[Y]) >= 0) {
          var T = b6.indexOf(br[Y]);
          var X = new Image();
          var b5 = b7.measureText(b6.substring(0, T));
          X.src = 'http://AgarioForums.io/emotes/' + br[Y] + '.png';
          b7.drawImage(X, 10 + (w.width * 1.6) + (b5.width * 1.515), bf.height / b3 - 18 * (bZ - b4 - bW) - 2);
          b6 = b6.replace(br[Y], '     ')
        }
      }
      b7.globalAlpha = 0.8;
      bX.setValue(b6);
      b2 = bX.render();
      b7.drawImage(b2, 10 + (w.width * 1.6), bf.height / b3 - 18 * (bZ - b4 - bW))
    }
  }
  function bo(w) {
    w = w.replace('/&/g', '&amp;');
    w = w.replace('/</g', '&lt;');
    w = w.replace('/>/g', '&gt;');
    w = w.replace('/"/g', '&quot;');
    return w
  }
  function aZ(X, z) {
    var bX = X.name;
    var bW = z.name;
    if (bX == '') {
      bX = 'An unnamed cell'
    }
    if (bW == '') {
      bW = 'An unnamed cell'
    }
    var Y = Math.floor((z.size * z.size) / 100);
    var T = false;
    var bZ = '';
    if (aJ.length > 12) {
      aJ.splice(0, 1)
    }
    if ((Y >= 16) && (!z.isVirus) && (bX != bW)) {
      aJ.push({
       // data: '<strong style=\'color:' + X.color + '\'>' + bo(bX) + '</strong> eats <strong style=\'color:' + z.color + '\'>' + bo(bW) + '</strong> (+' + bM(Y, 1) + ' mass)',
        ts: Date.now()
      });
      T = !0;
      if (bX == ac) {
        if (Y > 1000) {
          aU('Wow! ' + bM(Y, 1) + '<br>mass gained')
        } else {
          if (Y > 500) {
            aU('Nice! ' + bM(Y, 1) + '<br>mass gained')
          } else {
            if (Y < 100) {
              aU('Grr! Not the<br>small players!')
            }
          }
        }
      } else {
        if (Y > 1000 && bX != bW) {
          aU('<font style=\'color:' + X.color + '\'>' + bo(bX) + '</font> just<br>gained ' + bM(Y, 1) + ' mass!')
        }
      }
    }
    if (z.isVirus) {
      aJ.push({
       // data: '<strong style=\'color:' + X.color + '\'>' + bo(bX) + '</strong> eats a virus</strong> (+' + bM(Y, 1) + ' mass)',
        ts: Date.now()
      });
      T = !0;
      if (bX == ac) {
        var w = [
          'And a other<br>virus gone!',
          'Virus makes<br>you strong!',
          'Yumm, a virus!',
          'It\'s green and<br>gives mass!'
        ];
        var bY = Math.floor(Math.random() * w.length);
        aU(w[bY])
      }
    }
    if (bW == ac && bX != ac) {
      aU('Yikes, Carfull!')
    }
    if (bX == ac && bW != ac && X.color != z.color) {
      if (Y < 15) {
        ++aI;
        if (aI == 45) {
          aU('Try splitting your<br>cell (space key)!')
        }
        if (aI == 100) {
          aU('Try eating a<br>green virus!')
        }
        if (aI % 1000 == 0) {
          aU('WOW! ' + bM(aI, 1) + ' food<br>cells consumed!')
        }
      } else {
        ++ax;
        if (ax == 10) {
          aU('10 cells<br>consumed!')
        }
        if (ax % 100 == 0) {
          aU('Yay! ' + bM(ax, 1) + ' cells<br>consumed!')
        }
      }
    }
    if (T) {
      if (aJ.length > 12) {
        aJ.splice(0, 1)
      }
      bF()
    }
  }
  function aU(w) {
    var z = Date.now();
    if ((z - N) > 20500) {
      N = z;
      jQuery('#minimapbg').html('<bubble class=\'bubble\'>' + w + '</bubble>')
    }
  }
  function bF() {
    var w = '';
    if (aJ.length > 0) {
      for (z = 0; z < aJ.length; ++z) {
        w += aJ[z].data + '<br>'
      }
    }
    if (bm != w) {
      bm = w;
      var z = window.jQuery;
      var T = document.getElementById('livekills');
      $(T).html(w)
    }
  }
  function e(b1, X) {
    q = + new Date;
    var w = Math.random();
    Q = false;
    var b5 = b1.getUint16(X, !0);
    X += 2;
    for (ca = 0; ca < b5; ++ca) {
      var b7 = aQ[b1.getUint32(X, !0)],
      b8 = aQ[b1.getUint32(X + 4, !0)];
      X += 8;
      if (b7 && b8) {
        aZ(b7, b8);
        b8.destroy();
        b8.ox = b8.x;
        b8.oy = b8.y;
        b8.oSize = b8.size;
        b8.nx = b7.x;
        b8.ny = b7.y;
        b8.nSize = b8.size;
        b8.updateTime = q
      }
    }
    for (var ca = 0; ; ) {

      var bX = b1.getUint32(X, !0); // ID
      X += 4;
      if (0 == bX) {
        break
      }
      ++ca;
      var b3,
      bW;
      if ( b1.getInt32(X, !0) > 100000 && aio == null ) { aio = 1; console.log("Switching to old protocol"); }
      if ( aio != 1 )
      {
        // Client v561.20 and up
        bY = b1.getInt32(X, !0), X += 4;
        bW = b1.getInt32(X, !0), X += 4;
      }
      else
      {
        // OLD Client support
        bY = b1.getInt16(X, !0), X += 2;
        bW = b1.getInt16(X, !0), X += 2;
      }
      b3 = b1.getInt16(X, !0); // SIZE
      X += 2;
      for (var b2 = b1.getUint8(X++), cb = b1.getUint8(X++), cc = b1.getUint8(X++), b9 = (b2 << 16 | cb << 8 | cc).toString(16); 6 > b9.length; ) {
        b9 = '0' + b9
      }
      var T = '#' + b9,
      Y = b1.getUint8(X++),
      b0 = !!(Y & 1),
      b4 = !!(Y & 16);
      Y & 2 && (X += 4);
      Y & 4 && (X += 8);
      Y & 8 && (X += 16);
      for (var z, cd = ''; ; ) {
        z = b1.getUint16(X, !0);
        X += 2;
        if (0 == z) {
          break
        }
        cd += String.fromCharCode(z)
      }
      var b6 = null;
      if (aQ.hasOwnProperty(bX)) {
        b6 = aQ[bX];
        b6.updatePos();
        b6.ox = b6.x;
        b6.oy = b6.y;
        b6.oSize = b6.size;
        b6.color = T
      } else {
        b6 = new l(bX, bY, bW, b3, T, cd);
        H.push(b6);
        aQ[bX] = b6;
        b6.ka = bY;
        b6.la = bW
      }
      b6.isVirus = b0;
      b6.isAgitated = b4;
      b6.nx = bY;
      b6.ny = bW;
      b6.nSize = b3;
      b6.updateCode = w;
      b6.updateTime = q;
      b6.flag = Y;
      cd && b6.setName(cd);
      if ( - 1 != W.indexOf(bX) && - 1 == al.indexOf(b6)) {
        document.getElementById('overlays').style.display = 'none';
        al.push(b6);
        if (1 == al.length) {
          a6 = b6.x;
          a5 = b6.y
        }
      }
    }
    b5 = b1.getUint32(X, !0);
    X += 4;
    for (ca = 0; ca < b5; ca++) {
      var bZ = b1.getUint32(X, !0);
      X += 4;
      b6 = aQ[bZ];
      null != b6 && b6.destroy()
    }
    Q && 0 == al.length && aj(false)
  }
  function bz() {
    var z;
    if (E()) {
      z = aD - aY / 2;
      var w = aC - ap / 2;
      if (64 <= z * z + w * w && !(0.01 > Math.abs(ba - bh) && 0.01 > Math.abs(a9 - bg))) {
        ba = bh;
        a9 = bg;
        if(aio != 1)
        {
            // Client v561.20 and up
            z = bV(9);
            z.setUint8(0, 16);
            z.setUint16(1, bh, !0);
            z.setUint16(3, bg, !0);
            z.setUint32(5, 0, !0);
        }
        else
        {
            z = bV(21);
            z.setUint8(0, 16);
            z.setFloat64(1, bh, !0);
            z.setFloat64(9, bg, !0);
            z.setUint32(17, 0, !0);
        }
        aP(z)
      }
    }
  }
  function bq() {
    N = (Date.now() - 20500);
    if (E() && null != ac) {
      var z = bV(1 + 2 * ac.length);
      z.setUint8(0, 0);
      aU('Welcome!<br>' + bo(ac));
      for (var w = 0; w < ac.length; ++w) {
        z.setUint16(1 + 2 * w, ac.charCodeAt(w), !0)
      }
      aP(z)
    }
  }
  function bG(X) {
    if (E() && (X.length < 200) && (X.length > 0)) {
      var T = bV(2 + 2 * X.length);
      var z = 0;
      T.setUint8(z++, 99);
      T.setUint8(z++, 0);
      for (var w = 0; w < X.length; ++w) {
        T.setUint16(z, X.charCodeAt(w), !0);
        z += 2
      }
      aP(T)
    }
  }
  function E() {
    return null != k && k.readyState == k.OPEN
  }
  function Z(w) {
    if (E()) {
      var z = bV(1);
      z.setUint8(0, w);
      aP(z)
    }
  }
  function y() {
    S();
    ak.requestAnimationFrame(y)
  }
  function bc() {
    window.scrollTo(0, 0);
    aY = ak.innerWidth;
    ap = ak.innerHeight;
    if (ap < 720) {
      C('#minimap').hide()
    }
    g.width = aY;
    g.height = ap;
    var z = C('#helloDialog');
    z.css('transform', 'none');
    var w = z.height();
    w > ap / 1.1 ? z.css('transform', 'translate(-50%, -50%) scale(' + ap / w / 1.1 + ')')  : z.css('transform', 'translate(-50%, -50%)');
    z = C('#scorebox');
    z.css('transform', 'none');
    var w = z.height();
    w > ap / 1.25 ? z.css('transform', 'translate(-50%, -50%) scale(' + ap / w / 1.25 + ')')  : z.css('transform', 'translate(-50%, -50%)');
    S()
  }
  function a1() {
    var w;
    w = Math.max(ap / 1080, aY / 1920);
    return w * aT * 0.5
  }
  function ao() {
    if (0 != al.length) {
      for (var z = 0, w = 0; w < al.length; w++) {
        z += al[w].size
      }
      z = Math.pow(Math.min(64 / z, 1), 0.4) * a1();
      U = (9 * U + z) / 10
    }
  }
  function S() {
    var w,
    z = Date.now();
    ++a8;
    q = z;
    if (0 < al.length) {
      ao();
      var Y = w = 0;
      for (var X = 0; X < al.length; X++) {
        al[X].updatePos();
        w += al[X].x / al.length;
        Y += al[X].y / al.length
      }
      J = w;
      I = Y;
      j = U;
      a6 = (a6 + w) / 2;
      a5 = (a5 + Y) / 2
    } else {
      a6 = (29 * a6 + J) / 30;
      a5 = (29 * a5 + I) / 30;
      U = (9 * U + j * a1()) / 10
    }
    aX();
    am();
    f || bJ.clearRect(0, 0, aY, ap);
    if (f) {
      if (ab) {
        bJ.fillStyle = '#111111';
        bJ.globalAlpha = 0.05;
        bJ.fillRect(0, 0, aY, ap);
        bJ.globalAlpha = 1
      } else {
        bJ.fillStyle = '#F2FBFF';
        bJ.globalAlpha = 0.05;
        bJ.fillRect(0, 0, aY, ap);
        bJ.globalAlpha = 1
      }
    } else {
      aE()
    }
    H.sort(function (bX, bW) {
      return bX.size == bW.size ? bX.id - bW.id : bX.size - bW.size
    });
    bJ.save();
    bJ.translate(aY / 2, ap / 2);
    bJ.scale(U, U);
    bJ.translate( - a6, - a5);
    for (X = 0; X < bU.length; X++) {
      bU[X].drawOneCell(bJ)
    }
    for (X = 0; X < H.length; X++) {
      H[X].drawOneCell(bJ)
    }
    if (bt) {
      L = (3 * L + bI) / 4;
      K = (3 * K + bH) / 4;
      bJ.save();
      bJ.strokeStyle = '#FFAAAA';
      bJ.lineWidth = 10;
      bJ.lineCap = 'round';
      bJ.lineJoin = 'round';
      bJ.globalAlpha = 0.5;
      bJ.beginPath();
      for (X = 0; X < al.length; X++) {
        bJ.moveTo(al[X].x, al[X].y);
        bJ.lineTo(L, K)
      }
      bJ.stroke();
      bJ.restore()
    }
    if (!a4) {
      bJ.strokeStyle = '#FF0000';
      bJ.lineWidth = 5;
      bJ.lineCap = 'round';
      bJ.lineJoin = 'round';
      bJ.beginPath();
      bJ.moveTo(bO, bA);
      bJ.lineTo(O, bA);
      bJ.lineTo(O, bC);
      bJ.lineTo(bO, bC);
      bJ.closePath();
      bJ.stroke()
    }
    bJ.restore();
    bk && bk.width && bJ.drawImage(bk, aY - bk.width - 10, 10);
    if (!aK) {
      if ((bf != null) && (bf.width > 0)) {
        bJ.drawImage(bf, 0, ap - bf.height - 50)
      }
    }
    aw = Math.max(bv, P());
    bv = P();
    if (0 != bv) {
      if (null == aq) {
        aq = new bn(24, '#FFFFFF')
      }
      aq.setValue('Mass: ' + ~~(bv / 100));
      Y = aq.render();
      w = Y.width;
      bJ.globalAlpha = 0.6;
      bJ.fillStyle = '#000000';
      bJ.globalAlpha = 1;
      bJ.drawImage(Y, 15, 15)
    }
    bb(bJ);
    bx(bJ);
    var T = Date.now() - z;
    T > 1000 / 60 ? a0 -= 0.01 : T < 1000 / 65 && (a0 += 0.01);
    0.4 > a0 && (a0 = 0.4);
    1 < a0 && (a0 = 1)
  }
  function bx(w) {
    w.save();
    if (bw) {
      for (var z = 0; z < d.length; z++) {
        var T = d[z];
        if (T.identifier == aW) {
          w.beginPath();
          w.strokeStyle = '#0096ff';
          w.lineWidth = 6;
          w.arc(ae.x, ae.y, 40, 0, Math.PI * 2, !0);
          w.stroke();
          w.beginPath();
          w.strokeStyle = '#0096ff';
          w.lineWidth = 2;
          w.arc(ae.x, ae.y, 60, 0, Math.PI * 2, !0);
          w.stroke();
          w.beginPath();
          w.strokeStyle = '#0096ff';
          w.arc(r.x, r.y, 40, 0, Math.PI * 2, !0);
          w.stroke()
        } else {
          w.beginPath();
          w.beginPath();
          w.strokeStyle = '#0096ff';
          w.lineWidth = '6';
          w.arc(T.clientX, T.clientY, 40, 0, Math.PI * 2, !0);
          w.stroke()
        }
      }
    }
    w.restore()
  }
  function aE() {
    bJ.globalAlpha = 0.7;
    bJ.fillStyle = ab ? '#111111' : '#F2FBFF';
    bJ.fillRect(0, 0, aY, ap);
    if (bN == 0.4) {
      bJ.save();
      bJ.strokeStyle = ab ? '#AAAAAA' : '#000000';
      bJ.globalAlpha = 0.2;
      bJ.scale(U, U);
      var z = aY / U,
      w = ap / U;
      for (var T = - 0.5 + ( - a6 + z / 2) % 50; T < z; T += 50) {
        bJ.beginPath();
        bJ.moveTo(T, 0);
        bJ.lineTo(T, w);
        bJ.stroke()
      }
      for (T = - 0.5 + ( - a5 + w / 2) % 50; T < w; T += 50) {
        bJ.beginPath();
        bJ.moveTo(0, T);
        bJ.lineTo(z, T);
        bJ.stroke()
      }
      bJ.restore()
    }
  }
  function bb(w) {
    if (aN && B.width) {
      var z = ~~(aY / 7);
      w.drawImage(B, aY - z, ap - z, z, z)
    }
    if (aN && B.width) {
      var z = ~~(aY / 7);
      w.drawImage(an, aY - z, ap - 2 * z - 10, z, z)
    }
  }
  function P() {
    for (var z = 0, w = 0; w < al.length; w++) {
      z += al[w].nSize * al[w].nSize
    }
    return z
  }
  function p(X, T, bY, Y, z, w, bX, bW) {
    if (typeof bW == 'undefined') {
      bW = !0
    }
    if (typeof w === 'undefined') {
      w = 5
    }
    X.beginPath();
    X.moveTo(T + w, bY);
    X.lineTo(T + Y - w, bY);
    X.quadraticCurveTo(T + Y, bY, T + Y, bY + w);
    X.lineTo(T + Y, bY + z - w);
    X.quadraticCurveTo(T + Y, bY + z, T + Y - w, bY + z);
    X.lineTo(T + w, bY + z);
    X.quadraticCurveTo(T, bY + z, T, bY + z - w);
    X.lineTo(T, bY + w);
    X.quadraticCurveTo(T, bY, T + w, bY);
    X.closePath();
    if (bW) {
      X.stroke()
    }
    if (bX) {
      X.fill()
    }
  }
  function aR() {
    bk = null;
    if (null != x || 0 != a3.length) {
      if (null != x || bd) {
        bk = document.createElement('canvas');
        var T = bk.getContext('2d'),
        z = 60;
        z = null == x ? z + 24 * a3.length : z + 180;
        var X = Math.min(0.22 * ap, Math.min(200, 0.3 * aY)) / 200;
        bk.width = 200 * X;
        bk.height = z * X;
        T.scale(X, X);
        T.globalAlpha = 0.8;
        T.strokeStyle = '#000000';
        T.fillStyle = 'rgb(22, 32, 56)';
        T.lineWidth = 2;
        p(T, 0, 0, 200, z, 8, !0, !0);
        T.fillStyle = '#EE7744';
        var bX = 'Leaderboard';
        T.font = '30px Ubuntu';
        T.shadowColor = 'black';
        T.shadowOffsetX = 2;
        T.shadowOffsetY = 2;
        T.shadowBlur = 3;
        T.fillText(bX, 100 - T.measureText(bX).width / 2, 40);
        var w;
        var Y = [
          '#FF5656',
          '#EC6856',
          '#D97B56',
          '#C68E56',
          '#B3A156',
          '#A1B356',
          '#8EC656',
          '#7BD956',
          '#68EC56',
          '#56FF56',
          '#66FF66',
          '#77FF77',
          '#88FF88',
          '#99FF99',
          '#AAFFAA',
          '#BBFFBB',
          '#CCFFCC',
          '#DDFFDD',
          '#EEFFEE',
          '#FFFFFF',
          '#FFFFFF',
          '#FFFFFF',
          '#FFFFFF',
          '#FFFFFF',
          '#FFFFFF'
        ];
        if (null == x) {
          for (T.font = '18px Ubuntu', w = 0; w < a3.length; ++w) {
            bX = a3[w].name || 'No Name';
            if (!bd) {
              (bX = 'No Name')
            }
            if ( - 1 != W.indexOf(a3[w].id)) {
              al[0].name && (bX = al[0].name);
              T.fillStyle = '#FFAAAA';
              if (!bR) {
                bX = w + 1 + '. ' + bX
              }
              T.fillText(bX, 100 - T.measureText(bX).width / 2, 70 + 24 * w)
            } else {
              T.fillStyle = Y[w];
              if (!bR) {
                bX = w + 1 + '. ' + bX
              }
              T.fillText(bX, 100 - T.measureText(bX).width / 2, 70 + 24 * w)
            }
          }
        } else {
          for (w = bX = 0; w < x.length; ++w) {
            var bW = bX + x[w] * Math.PI * 2;
            T.fillStyle = a[w + 1];
            T.beginPath();
            T.moveTo(100, 140);
            T.arc(100, 140, 80, bX, bW, false);
            T.fill();
            bX = bW
          }
        }
      }
    }
  }
  function l(Y, X, T, z, bW, w) {
    this.id = Y;
    this.ox = this.x = X;
    this.oy = this.y = T;
    this.oSize = this.size = z;
    this.color = bW;
    this.points = [
    ];
    this.pointsAcc = [
    ];
    this.createPoints();
    this.setName(w)
  }
  function bn(w, T, z, X) {
    w && (this._size = w);
    T && (this._color = T);
    this._stroke = !!z;
    X && (this._strokeColor = X)
  }
  var A = ak.location.protocol,
  bl = 'https:' == A;
  var aM,
  gotsts = 0,
  g,
  bJ,
  n,
  bk,
  bf,
  aY,
  ap,
  aio = null,
  bB = null,
  aJ = [
  ],
  bm = '',
  k = null,
  a6 = 0,
  a5 = 0,
  W = [
  ],
  al = [
  ],
  aQ = {
  },
  H = [
  ],
  bU = [
  ],
  a3 = [
  ],
  N = 0,
  by = [
  ],
  aD = 0,
  aC = 0,
  bh = - 1,
  bg = - 1,
  a8 = 0,
  q = 0,
  ac = null,
  bO = 0,
  bA = 0,
  O = 10000,
  bC = 10000,
  U = 1,
  a2 = null,
  h = !0,
  bd = !0,
  bi = false,
  Q = false,
  aI = 0,
  aa = 0,
  aw = 0,
  aL = 0,
  ax = 0,
  bS = 0,
  ar,
  a7 = [
  ],
  ad = 0,
  bv = 0,
  ab = !0,
  G = false,
  a4 = !0,
  be = !0,
  c = false,
  bN = 0.4,
  aK = false,
  J = a6 = ~~((bO + O) / 2),
  I = a5 = ~~((bA + bC) / 2),
  j = 1,
  D = '',
  x = null,
  bQ = false,
  F = !0,
  bt = false,
  bI = 0,
  bH = 0,
  L = 0,
  K = 0,
  o = 0,
  a = [
    '#333333',
    '#FF3333',
    '#33FF33',
    '#3333FF'
  ],
  f = false,
  aT = 1,
  aN = 'ontouchstart' in ak && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
  B = new Image,
  an = new Image,
  bR = false;
  B.src = 'img/split.png';
  an.src = 'img/feed.png';
  var bu = document.createElement('canvas');
  var at = null;
  ak.isSpectating = false;
  clearbubble = setInterval(function () {
    jQuery('#minimapbg').empty('<div>');
    var T = Date.now();
    if ((T - N) > 300000) {
      var w = [
        'You still there?',
        'I\'m bored!',
        'Ohh wake up!',
        'Knock knock...',
        'Spectating?<br>Try to play!'
      ];
      var z = Math.floor(Math.random() * w.length);
      aU(w[z])
    }
  }, 20000);
  google = setInterval(function () {
    if (typeof window.ga == 'function') {
      var w;
      if (ac == '' || ac == null) {
        w = 'Spectator'
      } else {
        w = ac
      }
      window.ga('send', 'event', w, CONNECTION_URL, ( bv / 100 ).toFixed(0) )
    }
  }, 30000);
  updatestat = setInterval(function () {
    if (CONNECTION_URL != null) {
      if (bv) {
        a7.push( bv / 100 )
      }
      var z = bV(5);
      z.setUint8(0, 90);
      z.setUint32(1, 2200049715, !0); // 1441210800
      ar = new Date;
      aP(z)
    }
    if (aJ.length > 0) {
      var T = Date.now();
      for (var w = 0; w < aJ.length; w++) {
        if (T >= (60000 + aJ[w].ts)) {
          aJ.splice(w, 1)
        }
      }
      bF()
    }
  }, 1750);
  ak.setNick = function (w) {
    ac = w;
    var z = ['hitler', 'nazi', 'porno', 'fuck', 'lul', 'eikel', 'mivabe.nl', 'ISIS', 'mivabe.com'];
    var T = w.toLowerCase();
    if (z.indexOf(T) > - 1) {
      alert('Please choose a correct name - Bad Nick')
    } else {
      v();
      C('#mini-map-wrapper').show();
      bv = 0;
      C('.btn-needs-nick').prop('disabled', false)
    }
  };
  ak.setRegion = av;
  ak.setSkins = function (w) {
    h = w
  };
  ak.setNames = function (w) {
    bd = w
  };
  ak.setDarkTheme = function (w) {
    ab = w;
    if (w) {
      $('body').css('background', '#000 url("img/space2.png") repeat')
    } else {
      $('body').css('background', '#000 url("img/clouds.jpg") repeat')
    }
  };
  ak.setColors = function (w) {
    bi = w
  };
  ak.setShowMass = function (w) {
    c = w
  };
  ak.setLargeName = function (w) {
    G = w
  };
  ak.setVirusTrans = function (w) {
    be = w
  };
  ak.setKoseGoster = function (w) {
    a4 = w
  };
  ak.setSmooth = function (w) {
    bN = w ? 2 : 0.4
  };
  ak.setHideChat = function (w) {
    aK = w;
    if (w) {
      C('#chtbox').hide()
    } else {
      C('#chtbox').show()
    }
  };
  ak.setHideMap = function (w) {
    if (w) {
      C('#minimap').hide()
    } else {
      C('#minimap').show()
    }
  };
  ak.closeStats = function (w) {
    C('#overlays').fadeIn(300);
    C('#advert').hide()
  };
  ak.setHidePos = function (w) {
    if (w) {
      C('#mini-map-pos').hide()
    } else {
      C('#mini-map-pos').show()
    }
  };
  ak.spectate = function () {
    ac = null;
    ak.isSpectating = !0;
    Z(1);
    C('#mappos').hide();
    v()
  };
  ak.setGameMode = function (w) {
    if (w != D) {
      D = w;
      ag()
    }
  };
  ak.setAcid = function (w) {
    f = w
  };
  if (null != ak.localStorage) {
    if (null == ak.localStorage.AB8) {
      ak.localStorage.AB8 = ~~(100 * Math.random())
    }
    o = + ak.localStorage.AB8;
    ak.ABGroup = o
  }
  setTimeout(function () {
  }, 300000);
  var bj = {
    ZW: 'EU-London'
  };
  ak.connect = aA;
  var aO = {
    action: 'test'
  };
  C.ajax({
    type: 'POST',
    dataType: 'json',
    url: 'http://AgarioForums.io/skins.php',
    data: aO,
    success: function (w) {
      knownNameDict = JSON.parse(w.names)
    }
  });
  var bT = setInterval(function () {
    if (CONNECTION_URL != null) {
      C.ajax({
        type: 'POST',
        dataType: 'json',
        url: 'http://AgarioForums.io/skins.php',
        data: aO,
        success: function (w) {
          knownNameDict = JSON.parse(w.names)
        }
      })
    }
  }, 30000);
  var aB = 500,
  ba = - 1,
  a9 = - 1,
  aH = null,
  a0 = 1,
  aq = null,
  m = {
  },
  defm = {
  },
  br = [
    '+best',
    '+cry',
    '+hello',
    '+pain',
    '+smile',
    '+yay',
    '+call',
    '+dizzy',
    '+joy',
    '+quiet',
    '+sweat',
    '+yes',
    '+calm',
    '+drunk',
    '+kiss',
    '+sad',
    '+coffee',
    '+fight',
    '+love',
    '+shy',
    '+tongue',
    '+cold',
    '+haha',
    '+mad',
    '+sigh',
    '+wink',
    '+cool',
    '+heart',
    '+no',
    '+sleepy',
    '+wow',
    '+top',
    '+ok'
  ];
  knownNameDict = '.;agarioforums.net;rice;kazuto;krow;GalaxyWolf;console;lkd70;oninoby;2ch;european union;maldivas;russia;4chan;facepunch;mars;sanik;8ch;feminism;matriarchy;satanist;9gag;finland;mexico;scotland;argentina;france;sealand;australia;french kingdom;sir;austria;german eempire;somalia;ayy lmao;germany;moon;south korea;bait;greece;nasa;spain;bangladesh;hitler;nazi;stalin;belarus;hong kong;netherlands;steam;belgium;hungary;nigeria;stussy;bosnia;imperial japan;north korea;sweden;botswana;norway;switzerland;brazil;indiana;origin;taiwan;bulgaria;india;pakistan;texas;byzantium;indonesia;patriarchy;cambodia;iran;peru;thailand;canada;iraq;pewdiepie;tsarist russia;chile;ireland;piccolo;tumblr;china;isis;pokerface;turkey;cia;italy;poland;ukraine;confederate;jamaica;portugal;united kingdom;croatia;japan;prodota;usa;denmark;jara;prussia;ussr;doge;kc;qing dynasty;vinesauce;ea;latvia;quebec;wojak;earth;lithuania;reddit;yaranaika;estonia;luxembourg;romania'.split(';'),
  knownNameDict_noDisp = [
    'Un named cell',
    'isis',
    'hitler',
    'nazi'
  ],
  ib = [
    '_canvas\'blob'
  ];
  l.prototype = {
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
    flag: 0,
    updateTime: 0,
    updateCode: 0,
    drawTime: 0,
    destroyed: false,
    isVirus: false,
    isAgitated: false,
    wasSimpleDrawing: !0,
    destroy: function () {
      var w;
      for (w = 0; w < H.length; w++) {
        if (H[w] == this) {
          H.splice(w, 1);
          break
        }
      }
      delete aQ[this.id];
      w = al.indexOf(this);
      if ( - 1 != w) {
        Q = !0;
        al.splice(w, 1)
      }
      w = W.indexOf(this.id);
      if ( - 1 != w) {
        W.splice(w, 1)
      }
      this.destroyed = !0;
      bU.push(this)
    },
    getNameSize: function () {
      if (G) {
        return 50 + 0.3 * this.size
      } else {
        return Math.max(~~(0.3 * this.size), 24)
      }
    },
    setName: function (w) {
      if (this.name = w) {
        if (null == this.nameCache) {
          this.nameCache = new bn(this.getNameSize(), '#FFFFFF', !0, '#000000');
          this.nameCache.setValue(this.name)
        } else {
          this.nameCache.setSize(this.getNameSize());
          this.nameCache.setValue(this.name)
        }
      }
    },
    createPoints: function () {
      for (var z = this.getNumPoints(); this.points.length > z; ) {
        var X = ~~(Math.random() * this.points.length);
        this.points.splice(X, 1);
        this.pointsAcc.splice(X, 1)
      }
      if (0 == this.points.length && 0 < z) {
        this.points.push({
          ref: this,
          size: this.size,
          x: this.x,
          y: this.y
        });
        this.pointsAcc.push(Math.random() - 0.5)
      }
      while (this.points.length < z) {
        var T = ~~(Math.random() * this.points.length),
        w = this.points[T];
        this.points.splice(T, 0, {
          ref: this,
          size: w.size,
          x: w.x,
          y: w.y
        });
        this.pointsAcc.splice(T, 0, this.pointsAcc[T])
      }
    },
    getNumPoints: function () {
      if (0 == this.id) {
        return 16
      }
      var z = 10;
      if (20 > this.size) {
        z = 0
      }
      if (this.isVirus) {
        z = 30
      }
      var w = this.size;
      if (!this.isVirus) {
        (w *= U)
      }
      w *= a0;
      if (this.flag & 32) {
        (w *= 0.25)
      }
      return ~~Math.max(w, z)
    },
    movePoints: function () {
      this.createPoints();
      for (var b5 = this.points, bX = this.pointsAcc, bZ = b5.length, bY = 0; bY < bZ; ++bY) {
        var b4 = bX[(bY - 1 + bZ) % bZ],
        b3 = bX[(bY + 1) % bZ];
        bX[bY] += (Math.random() - 0.5) * (this.isAgitated ? 3 : 1);
        bX[bY] *= 0.7;
        10 < bX[bY] && (bX[bY] = 10);
        - 10 > bX[bY] && (bX[bY] = - 10);
        bX[bY] = (b4 + b3 + 8 * bX[bY]) / 10
      }
      for (var T = this, b1 = this.isVirus ? 0 : (this.id / 1000 + q / 10000) % (2 * Math.PI), bW = 0; bW < bZ; ++bW) {
        var b0 = b5[bW].size,
        b2 = b5[(bW - 1 + bZ) % bZ].size,
        X = b5[(bW + 1) % bZ].size;
        if (15 < this.size && null != bB && 20 < this.size * U && 0 != this.id) {
          var Y = false,
          z = b5[bW].x,
          w = b5[bW].y;
          bB.retrieve2(z - 5, w - 5, 10, 10, function (b6) {
            if (b6.ref != T && 25 > (z - b6.x) * (z - b6.x) + (w - b6.y) * (w - b6.y)) {
              Y = !0
            }
          });
          if (!Y && b5[bW].x < bO || b5[bW].y < bA || b5[bW].x > O || b5[bW].y > bC) {
            Y = !0
          }
          if (Y) {
            if (0 < bX[bW]) {
              (bX[bW] = 0)
            }
            bX[bW] -= 1
          }
        }
        b0 += bX[bW];
        0 > b0 && (b0 = 0);
        b0 = this.isAgitated ? (19 * b0 + this.size) / 20 : (12 * b0 + this.size) / 13;
        b5[bW].size = (b2 + X + 8 * b0) / 10;
        b2 = 2 * Math.PI / bZ;
        X = this.points[bW].size;
        this.isVirus && 0 == bW % 2 && (X += 5);
        b5[bW].x = this.x + Math.cos(b2 * bW + b1) * X;
        b5[bW].y = this.y + Math.sin(b2 * bW + b1) * X
      }
    },
    updatePos: function () {
      if (0 == this.id) {
        return 1
      }
      var z;
      z = (q - this.updateTime) / 120;
      z = 0 > z ? 0 : 1 < z ? 1 : z;
      var w = 0 > z ? 0 : 1 < z ? 1 : z;
      this.getNameSize();
      if (this.destroyed && 1 <= w) {
        var T = bU.indexOf(this);
        - 1 != T && bU.splice(T, 1)
      }
      this.x = z * (this.nx - this.ox) + this.ox;
      this.y = z * (this.ny - this.oy) + this.oy;
      this.size = w * (this.nSize - this.oSize) + this.oSize;
      return w
    },
    shouldRender: function () {
      if (0 == this.id) {
        return !0
      } else {
        return !(this.x + this.size + 40 < a6 - aY / 2 / U || this.y + this.size + 40 < a5 - ap / 2 / U || this.x - this.size - 40 > a6 + aY / 2 / U || this.y - this.size - 40 > a5 + ap / 2 / U)
      }
    },
    drawOneCell: function (b6) {
      if (this.shouldRender()) {
        var b3 = (0 != this.id && !this.isVirus && !this.isAgitated && bN > U);
        if (5 > this.getNumPoints()) {
          b3 = !0
        }
        if (this.wasSimpleDrawing && !b3) {
          for (var b2 = 0; b2 < this.points.length; b2++) {
            this.points[b2].size = this.size
          }
        }
        this.wasSimpleDrawing = b3;
        b6.save();
        this.drawTime = q;
        b2 = this.updatePos();
        b6.globalAlpha = 1;
        this.destroyed && (b6.globalAlpha *= 1 - b2);
        if (this.color != '#0a0a0a') {
          b6.globalAlpha = 0.95;
          b6.lineWidth = 10;
          b6.lineCap = 'round';
          b6.lineJoin = this.isVirus ? 'miter' : 'round'
        }
        if (bi) {
          b6.fillStyle = '#FFFFFF';
          b6.strokeStyle = '#AAAAAA'
        } else {
          b6.fillStyle = this.color;
          b6.strokeStyle = this.color
        }
        if (b3) {
          b6.beginPath();
          b6.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false)
        } else {
          this.movePoints();
          b6.beginPath();
          var b1 = this.getNumPoints();
          b6.moveTo(this.points[0].x, this.points[0].y);
          for (b2 = 1; b2 <= b1; ++b2) {
            var bY = b2 % b1;
            b6.lineTo(this.points[bY].x, this.points[bY].y)
          }
        }
        if (be && this.isVirus) {
          b6.globalAlpha = 0.7
        }
        b6.closePath();
        var bW = this.name.toLowerCase();
        if (this.color == '#0a0a0a') {
          b6.globalAlpha = 1.0
        }
        var z = '';
        if (bW.indexOf('[') == 0 && bW.indexOf(']') != - 1) {
          var bZ = bW.indexOf('[');
          var w = bW.indexOf(']');
          var b5 = bW.indexOf('] ');
          if (b5) {
            ++w
          }
          z = bW.slice(bZ + 1, w - 1);
          bW = bW.slice(w + 1, bW.length);
          if ( - 1 != knownNameDict.indexOf(z) ) {
            bW = z;
          }
        }
        if (!this.isAgitated && h && ':teams' != D && bW != '') {
          if ( - 1 != knownNameDict.indexOf(bW) && - 1 == knownNameDict_noDisp.indexOf(bW)) {
            if (!m.hasOwnProperty(bW)) {
              m[bW] = new Image;
              m[bW].src = aG + bW + '.png'
            }
            if (0 != m[bW].width && m[bW].complete) {
              b2 = m[bW]
            } else {
              b2 = null
            }
          }
          else {
            if (!m.hasOwnProperty(bW)) {
              m[bW] = new Image;
              m[bW].src = aG + 'default.png'
            }
            if (0 != m[bW].width && m[bW].complete) {
              b2 = m[bW]
            } else {
              b2 = null
            }
          }
          // else b2 = null
        } else {
          b2 = null
        }
        b2 = (bY = b2) ? - 1 != ib.indexOf(bW)  : false;
        b3 || b6.stroke();
        b6.fill();
        b6.globalAlpha = 0.85;
        if (!(null == bY || b2)) {
          b6.save();
          b6.clip();
          b6.drawImage(bY, this.x - this.size, this.y - this.size, 2 * this.size, 2 * this.size);
          b6.restore()
        }
        if ((bi || 15 < this.size) && !b3) {
          b6.strokeStyle = '#000000';
          b6.stroke()
        }
        if (null != bY && b2) {
          b6.drawImage(bY, this.x - 2 * this.size, this.y - 2 * this.size, 4 * this.size, 4 * this.size)
        }
        b6.globalAlpha = 0.95;
        b2 = - 1 != al.indexOf(this);
        var b4;
        if (0 != this.id) {
          var b3 = ~~this.y;
          if ((bd || b2) && this.name && this.nameCache && (null == bY || - 1 == knownNameDict_noDisp.indexOf(bW))) {
            var b0 = Math.ceil(10 * U) / 10;
            var T = this.name;
            if (z != '') {
              rclan = this.name.slice(bZ + 1, w - 1);
              T = this.name.slice(w, this.name.length);
              b4 = this.nameCache;
              b4.setValue(rclan);
              b4.setSize(this.getNameSize() / 2);
              b4.setScale(b0);
              var X = b4.render(),
              Y = ~~(X.width / b0),
              bX = ~~(X.height / b0);
              b6.drawImage(X, ~~this.x - ~~(Y / 2), b3 - ~~(bX / 2) - (X.height / 0.75 / b0 + 2), Y, bX)
            }
            b4 = this.nameCache;
            b4.setValue(T);
            b4.setSize(this.getNameSize());
            b4.setScale(b0);
            var X = b4.render(),
            Y = ~~(X.width / b0),
            bX = ~~(X.height / b0);
            b6.drawImage(X, ~~this.x - ~~(Y / 2), b3 - ~~(bX / 2), Y, bX);
            b3 += X.height / 1.5 / b0 + 4
          }
          if (c && (b2 || 0 == al.length && (!this.isVirus || this.isAgitated) && 20 < this.size)) {
            if (null == this.sizeCache) {
              this.sizeCache = new bn(this.getNameSize() / 2, '#FFFFFF', !0, '#000000')
            }
            b2 = this.sizeCache;
            b2.setSize(this.getNameSize() / 2);
            b2.setValue(~~(this.size * this.size / 100));
            b0 = Math.ceil(10 * U) / 10;
            b2.setScale(b0);
            bY = b2.render();
            Y = ~~(bY.width / b0);
            bX = ~~(bY.height / b0);
            b6.drawImage(bY, ~~this.x - ~~(Y / 2), b3 - ~~(bX / 2), Y, bX)
          }
        }
        b6.restore()
      }
    }
  };
  bn.prototype = {
    _value: '',
    _color: '#000000',
    _stroke: false,
    _strokeColor: '#000000',
    _size: 16,
    _canvas: null,
    _ctx: null,
    _dirty: false,
    _scale: 1,
    setSize: function (w) {
      if (this._size != w) {
        this._size = w;
        this._dirty = !0
      }
    },
    setScale: function (w) {
      if (this._scale != w) {
        this._scale = w;
        this._dirty = !0
      }
    },
    setStrokeColor: function (w) {
      if (this._strokeColor != w) {
        this._strokeColor = w;
        this._dirty = !0
      }
    },
    setValue: function (w) {
      if (w != this._value) {
        this._value = w;
        this._dirty = !0
      }
    },
    render: function () {
      if (null == this._canvas) {
        this._canvas = document.createElement('canvas');
        this._ctx = this._canvas.getContext('2d')
      }
      if (this._dirty) {
        this._dirty = false;
        var T = this._canvas,
        w = this._ctx,
        Y = this._value,
        bW = this._scale,
        bX = this._size,
        z = bX + 'px Ubuntu';
        w.font = z;
        var X = ~~(0.2 * bX);
        T.width = (w.measureText(Y).width + 6) * bW;
        T.height = (bX + X) * bW;
        w.font = z;
        w.scale(bW, bW);
        w.globalAlpha = 1;
        w.lineWidth = 3;
        w.strokeStyle = this._strokeColor;
        w.fillStyle = this._color;
        w.shadowColor = 'black';
        w.shadowOffsetX = 1;
        w.shadowOffsetY = 1;
        this._stroke && w.strokeText(Y, 3, bX - X / 2);
        w.fillText(Y, 3, bX - X / 2)
      }
      return this._canvas
    },
    getWidth: function () {
      return (bJ.measureText(this._value).width + 6)
    }
  };
  Date.now || (Date.now = function () {
    return (new Date).getTime()
  });
  var bD = {
    init: function (T) {
      function z(bW, b0, bX, bY, bZ) {
        this.x = bW;
        this.y = b0;
        this.w = bX;
        this.h = bY;
        this.depth = bZ;
        this.items = [
        ];
        this.nodes = [
        ]
      }
      var Y = T.maxChildren || 2,
      X = T.maxDepth || 4;
      z.prototype = {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        depth: 0,
        items: null,
        nodes: null,
        exists: function (bW) {
          for (var bY = 0; bY < this.items.length; ++bY) {
            var bZ = this.items[bY];
            if (bZ.x >= bW.x && bZ.y >= bW.y && bZ.x < bW.x + bW.w && bZ.y < bW.y + bW.h) {
              return !0
            }
          }
          if (0 != this.nodes.length) {
            var bX = this;
            return this.findOverlappingNodes(bW, function (b0) {
              return bX.nodes[b0].exists(bW)
            })
          }
          return false
        },
        retrieve: function (bY, bZ) {
          for (var bX = 0; bX < this.items.length; ++bX) {
            bZ(this.items[bX])
          }
          if (0 != this.nodes.length) {
            var bW = this;
            this.findOverlappingNodes(bY, function (b0) {
              bW.nodes[b0].retrieve(bY, bZ)
            })
          }
        },
        insert: function (bW) {
          if (0 != this.nodes.length) {
            this.nodes[this.findInsertNode(bW)].insert(bW)
          } else {
            if (this.items.length >= Y && this.depth < X) {
              this.devide();
              this.nodes[this.findInsertNode(bW)].insert(bW)
            } else {
              this.items.push(bW)
            }
          }
        },
        findInsertNode: function (bW) {
          return bW.x < this.x + this.w / 2 ? bW.y < this.y + this.h / 2 ? 0 : 2 : bW.y < this.y + this.h / 2 ? 1 : 3
        },
        findOverlappingNodes: function (bX, bW) {
          return bX.x < this.x + this.w / 2 && (bX.y < this.y + this.h / 2 && bW(0) || bX.y >= this.y + this.h / 2 && bW(2)) || bX.x >= this.x + this.w / 2 && (bX.y < this.y + this.h / 2 && bW(1) || bX.y >= this.y + this.h / 2 && bW(3)) ? !0 : false
        },
        devide: function () {
          var bW = this.depth + 1,
          bY = this.w / 2,
          bX = this.h / 2;
          this.nodes.push(new z(this.x, this.y, bY, bX, bW));
          this.nodes.push(new z(this.x + bY, this.y, bY, bX, bW));
          this.nodes.push(new z(this.x, this.y + bX, bY, bX, bW));
          this.nodes.push(new z(this.x + bY, this.y + bX, bY, bX, bW));
          bW = this.items;
          this.items = [
          ];
          for (bY = 0; bY < bW.length; bY++) {
            this.insert(bW[bY])
          }
        },
        clear: function () {
          for (var bW = 0; bW < this.nodes.length; bW++) {
            this.nodes[bW].clear()
          }
          this.items.length = 0;
          this.nodes.length = 0
        }
      };
      var w = {
        x: 0,
        y: 0,
        w: 0,
        h: 0
      };
      return {
        root: new z(T.minX, T.minY, T.maxX - T.minX, T.maxY - T.minY, 0),
        insert: function (bW) {
          this.root.insert(bW)
        },
        retrieve: function (bX, bW) {
          this.root.retrieve(bX, bW)
        },
        retrieve2: function (bX, bW, b0, bY, bZ) {
          w.x = bX;
          w.y = bW;
          w.w = b0;
          w.h = bY;
          this.root.retrieve(w, bZ)
        },
        exists: function (bW) {
          return this.root.exists(bW)
        },
        clear: function () {
          this.root.clear()
        }
      }
    }
  };
  C(function () {
    function z() {
      if (0 < al.length) {
        T.color = al[0].color;
        T.setName(al[0].name)
      }
      w.clearRect(0, 0, 32, 32);
      w.save();
      w.translate(16, 16);
      w.scale(0.4, 0.4);
      T.drawOneCell(w);
      w.restore();
      var Y = document.getElementById('favicon'),
      bW = Y.cloneNode(!0);
      bW.setAttribute('href', X.toDataURL('image/png'));
      Y.parentNode.replaceChild(bW, Y)
    }
    var T = new l(0, 0, 0, 32, '#ED1C24', ''),
    X = document.createElement('canvas');
    X.width = 32;
    X.height = 32;
    var w = X.getContext('2d');
    z();
    setInterval(z, 7500);
    setInterval(af, 1000)
  });
  ak.onload = i
}) (window, window.jQuery);
$(document).ready(function () {
  $('#chtbox').bind('cut copy paste', function (a) {
    a.preventDefault()
  })
});
$(document).ready(function () {
  $('#chtbox').focus();
  $(document).keydown(function (a) {
    if ((a.ctrlKey) && (a.which == '90' || a.which == '122')) {
      a.preventDefault()
    }
  })
});
