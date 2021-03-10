function luasSegitiga(alas, tinggi) {
    return 0.5*alas*tinggi
}

test("hasil fungsi luas segitiga harus sesuai dengan rumus luas segitiga", () => {
    const a = 10;
    const t = 5;
    const rumusSegitiga = 0.5 * a * t;
    expect(luasSegitiga(a, t)).toEqual(rumusSegitiga);
})