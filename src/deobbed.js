var _0x5ef1 = [
  "POST",
  "Checking\x20key!",
  "Not\x20Found",
  "backgroundColor",
  "Please\x20reset\x20your\x20key.",
  "1758188JIjqFq",
  "license",
  "userkey",
  "loginversion",
  "local",
  "textContent",
  "addEventListener",
  "parse",
  "topRight",
  "1412101kMLIxI",
  "Version\x20",
  "value",
  "5PWqkcO",
  "GET",
  "metadata",
  "open",
  "Can\x27t\x20find\x20key",
  "storage",
  "Bearer\x20pk_R0VSbdKr9oW9Z7gdReZkzBipacEnHIA3",
  "getElementsByClassName",
  "1ChbroY",
  "log",
  "getManifest",
  "then",
  "219927HzMeHz",
  "version",
  "2XAmvEj",
  "dot",
  "main.html",
  "undefiend",
  "getElementById",
  "793745wPMGHS",
  "send",
  "VGhpc2lzVGhlQXV0aEtleQ==",
  "Authorization",
  "validUser",
  "https://etherealscripts.herokuapp.com/api/newlogin",
  "set",
  "click",
  "success",
  "stringify",
  "login-btn",
  "href",
  "responseText",
  "application/json",
  "error",
  "username",
  "https://api.metalabs.io/v4/licenses/",
  "56578jvpiUp",
  "652301ZvyEjY",
  "https://null/",
  "Key\x20not\x20found\x20/\x20Reset\x20key",
  "application/json,\x20text/plain,\x20*/*",
  "style",
  "setRequestHeader",
  "876974vXDMLN",
  "Please\x20input\x20a\x20Key",
  "json",
  "authkey",
  "runtime",
  "PATCH",
];
var _0x3b1029 = _0x4f43;
(function (_0x251b0c, _0xa36c9b) {
  var _0x3f53dd = _0x4f43;
  while (!![]) {
    try {
      var _0x5c47fd =
        parseInt(_0x3f53dd(0x1f4)) +
        parseInt(_0x3f53dd(0x200)) * parseInt(_0x3f53dd(0x20c)) +
        parseInt(_0x3f53dd(0x1e9)) +
        -parseInt(_0x3f53dd(0x20e)) * -parseInt(_0x3f53dd(0x1e2)) +
        -parseInt(_0x3f53dd(0x1fd)) +
        -parseInt(_0x3f53dd(0x213)) +
        -parseInt(_0x3f53dd(0x208)) * parseInt(_0x3f53dd(0x1e3));
      if (_0x5c47fd === _0xa36c9b) break;
      else _0x251b0c["push"](_0x251b0c["shift"]());
    } catch (_0x572dba) {
      _0x251b0c["push"](_0x251b0c["shift"]());
    }
  }
})(_0x5ef1, 0xf1a6e);
async function timeout(_0x205e90) {
  return new Promise((_0x511954) => setTimeout(_0x511954, _0x205e90));
}
async function loginCheckVersion() {
  var _0x590113 = _0x4f43;
  const _0x4a7bd8 = await fetch(
      "https://etherealscripts.herokuapp.com/api/v2/version",
      {
        method: "GET",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      }
    ),
    _0x3c6717 = await _0x4a7bd8["json"]();
  var _0x59de18 = _0x3c6717[0x0]["version"],
    _0x36db2d = chrome["runtime"]["getManifest"]();
  _0x59de18 != _0x36db2d["version"]
    ? ((document["getElementById"]("loginversion")["textContent"] =
        "Version " + _0x59de18),
      (document["getElementsByClassName"]("dot")[0x0]["style"][
        "backgroundColor"
      ] = "#FCB905"))
    : (document["getElementById"]("loginversion")["textContent"] =
        "Version " + _0x59de18);
}
loginCheckVersion();
async function timeout(_0x18e00b) {
  return new Promise((_0x2d4b17) => setTimeout(_0x2d4b17, _0x18e00b));
}
function _0x4f43(_0x1392ed, _0x5f09cb) {
  _0x1392ed = _0x1392ed - 0x1db;
  var _0x5ef1f8 = _0x5ef1[_0x1392ed];
  return _0x5ef1f8;
}
document[_0x3b1029(0x212)](_0x3b1029(0x1db))[_0x3b1029(0x1fa)](
  _0x3b1029(0x21a),
  checkkeyv2
),
  document[_0x3b1029(0x212)]("reset")[_0x3b1029(0x1fa)](
    _0x3b1029(0x21a),
    resetkey
  );
function checkkeyv2() {
  var _0x19dff3 = _0x3b1029,
    _0x2c2950 = document['getElementById']('license')['value'];
  if (_0x2c2950 === "") {
    iziToast['error']({
      title: 'Please input a Key',
      position: 'topRight',
    });
    return;
  }
  {
    try {
      var _0x18e6db = new XMLHttpRequest();
      _0x18e6db["open"]('GET', 'https://api.metalabs.io/v4/licenses/' + _0x2c2950, ![]),
        _0x18e6db['setRequestHeader'](
          'Authorization',
          "Bearer\x20pk_R0VSbdKr9oW9Z7gdReZkzBipacEnHIA3"
        ),
        _0x18e6db['send'](null);
      var _0x44c844 = JSON['parse'](_0x18e6db["responseText"]);
      console['log'](_0x44c844);
    } catch (_0x5f3a7e) {
      iziToast['error']({
        title: 'Can't find key',
        position: 'topRight',
      });
    }
    var _0x41bd58 = new XMLHttpRequest();
    _0x41bd58['open']('GET', 'https://api.myip.com/', ![]),
      _0x41bd58['send'](),
      (ipp_add_req = JSON['parse'](_0x41bd58['responseText'])),
      console['log'](_0x44c844);
    !_0x44c844["user"] == null
      ? (login_username = _0x44c844["user"]['username'])
      : (login_username = 'undefiend');
    if (_0x44c844["metadata"]["ip"] == null)
      chrome['storage']["local"]["set"]({
        validUser: !![],
        session: "active",
        authkey: _0x2c2950,
        username: login_username,
        userkey: _0x2c2950,
      }),
        loginstatistic(),
        fetch('https://api.metalabs.io/v4/licenses/' + _0x2c2950, {
          method: 'PATCH',
          headers: {
            Accept: 'application/json, text/plain, */*',
            "Content-Type": 'application/json',
            Authorization: 'Bearer pk_R0VSbdKr9oW9Z7gdReZkzBipacEnHIA3',
          },
          body: JSON['stringify']({ metadata: { ip: ipp_add_req["ip"] } }),
        })
          ['then']((_0x463c9f) => _0x463c9f['json']())
          ["then"]((_0x54a5a1) => console['log'](_0x54a5a1)),
        fetch('https://etherealscripts.herokuapp.com/api/newlogin', {
          method: 'POST',
          headers: {
            Accept: 'application/json, text/plain, */*',
            "Content-Type": 'application/json',
          },
          body: JSON['stringify']({
            login: !![],
            key: _0x2c2950,
            ip: ipp_add_req["ip"],
          }),
        }),
        setTimeout(() => {
          var _0x100490 = _0x19dff3;
          window["location"][_0x100490(0x1dc)] = "main.html";
        }, 0x3e8);
    else {
      _0x44c844['metadata']["ip"] == ipp_add_req["ip"] &&
        chrome['storage']['local']['set']({
          validUser: !![],
          session: "active",
          authkey: _0x2c2950,
        });
      if (ipp_add_req["ip"] !== _0x44c844["metadata"]["ip"]) {
        if ('Not Found' == _0x18e6db['responseText'])
          iziToast['error']({
            title: 'Key not found / Reset key',
            position: "topRight",
          });
        else {
          iziToast['error']({
            title: 'Please reset your key.',
            position: "topRight",
          });
          const _0x4c0063 = JSON['parse'](_0x18e6db['responseText']);
        }
      } else
        iziToast["error"]({
          title: "Please\x20reset\x20your\x20key.",
          position: "topRight",
        });
    }
  }
}
function updatelicense() {
  var _0x164026 = _0x3b1029,
    _0x2451df = new XMLHttpRequest();
  _0x2451df["open"]("GET", "https://api.myip.com/", ![]), _0x2451df["send"]();
  let _0x3545f6 = { ip: "cooking_station" };
  console["log"](_0x3545f6["ip"]),
    fetch("https://api.metalabs.io/v4/licenses/" + authkey, {
      method: "PATCH",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        Authorization: "Bearer\x20pk_R0VSbdKr9oW9Z7gdReZkzBipacEnHIA3",
      },
      body: JSON["stringify"]({ metadata: { ip: _0x3545f6["ip"] } }),
    })
      ["then"]((_0x19eac4) => _0x19eac4["json"]())
      ["then"]((_0x110735) => console["log"](_0x110735));
}
function resetkey() {
  var _0x229149 = _0x3b1029,
    _0x5d3bc4 = document[_0x229149(0x212)](_0x229149(0x1f5))[_0x229149(0x1ff)];
  if (_0x5d3bc4 === "") {
    iziToast[_0x229149(0x1df)]({
      title: _0x229149(0x1ea),
      position: _0x229149(0x1fc),
    });
    return;
  }
  fetch(_0x229149(0x1e1) + _0x5d3bc4, {
    method: _0x229149(0x1ee),
    headers: {
      Accept: _0x229149(0x1e6),
      "Content-Type": _0x229149(0x1de),
      Authorization: _0x229149(0x206),
    },
    body: JSON[_0x229149(0x21c)]({ metadata: { ip: null } }),
  })[_0x229149(0x20b)]((_0x2fbe52) => _0x2fbe52["json"]()),
    iziToast[_0x229149(0x21b)]({
      title: "Key\x20Reset!",
      position: _0x229149(0x1fc),
    });
}
async function loginstatistic() {
  var _0x54d60a = _0x3b1029,
    _0x45d744 = new XMLHttpRequest();
  _0x45d744[_0x54d60a(0x203)](
    _0x54d60a(0x201),
    "https://dashboardtbb.herokuapp.com/login",
    ![]
  ),
    _0x45d744["setRequestHeader"]("authkey", _0x54d60a(0x215)),
    _0x45d744[_0x54d60a(0x214)](null);
}
async function grabbing() {
  var _0x40d165 = _0x3b1029;
  await chrome[_0x40d165(0x205)][_0x40d165(0x1f8)]["get"](
    [_0x40d165(0x1f6)],
    async function (_0x572d47) {
      var _0x58c5cd = _0x40d165,
        _0x535a67 = _0x572d47["userkey"];
      _0x535a67 &&
        (document[_0x58c5cd(0x212)](_0x58c5cd(0x1f5))["value"] = _0x535a67);
    }
  );
  async function _0x5b684b() {
    var _0x4feac = _0x40d165;
    await chrome[_0x4feac(0x205)][_0x4feac(0x1f8)]["get"](
      ["validUser", _0x4feac(0x1ec)],
      async function (_0x50a087) {
        var _0x85bde3 = _0x4feac,
          _0x1416be = _0x50a087[_0x85bde3(0x217)],
          _0x33f0a2 = _0x50a087[_0x85bde3(0x1ec)];
        if (_0x1416be == !![]) {
          iziToast[_0x85bde3(0x21b)]({
            title: _0x85bde3(0x1f0),
            position: "topRight",
          });
          const _0x18152e = await fetch(_0x85bde3(0x1e1) + _0x33f0a2, {
              method: _0x85bde3(0x201),
              headers: {
                Accept: _0x85bde3(0x1e6),
                "Content-Type": _0x85bde3(0x1de),
                Authorization: _0x85bde3(0x206),
              },
            }),
            _0x3d1b8c = await _0x18152e[_0x85bde3(0x1eb)](),
            _0x134a6c = await fetch(_0x85bde3(0x1e4), {
              method: "GET",
              headers: {
                Accept: "application/json,\x20text/plain,\x20*/*",
                "Content-Type": _0x85bde3(0x1de),
              },
            }),
            _0x2d539d = await _0x134a6c["json"]();
          _0x3d1b8c[_0x85bde3(0x202)]["ip"] == _0x2d539d["ip"] &&
            ((window["location"][_0x85bde3(0x1dc)] = _0x85bde3(0x210)),
            fetch("https://etherealscripts.herokuapp.com/api/login", {
              method: _0x85bde3(0x1ef),
              headers: {
                Accept: _0x85bde3(0x1e6),
                "Content-Type": _0x85bde3(0x1de),
              },
              body: JSON["stringify"]({
                login: !![],
                key: _0x33f0a2,
                ip: _0x2d539d["ip"],
              }),
            }));
        }
      }
    );
  }
  _0x5b684b();
}
grabbing();
