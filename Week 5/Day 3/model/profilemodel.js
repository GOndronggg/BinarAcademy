class profileModel {
  #dataProfile;
  constructor() {
    this.#dataProfile = [
      {
        id: 1,
        name: "kurniawan",
        jk: "laki",
      },
      {
        id: 2,
        name: "eka",
        jk: "perempuan",
      },
      {
        id: 3,
        name: "bayu",
        jk: "laki",
      },
    ];
  }

  getAllProfile() {
    return this.#dataProfile;
  }
}

module.exports = Object.freeze(new profileModel());
