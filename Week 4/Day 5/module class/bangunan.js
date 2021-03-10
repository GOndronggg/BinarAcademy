class Bangunan {
  luasSegitiga(a, t) {
    return 0.5 * a * t;
  }

  luasPersegi(s) {
    return s * s;
  }

  luasPersegiPanjang(p, l) {
    return p * l;
  }

  luasLingkaran(r) {
    return 3.14 * r * r;
  }
}

module.exports = Object.freeze(new Bangunan());
