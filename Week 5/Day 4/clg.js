const data = [
  [
    {
      transaksi: {
        id: 1,
        name: "Pepsodent",
        harga: 5000,
        qty: 1,
      },
    },
    {
      transaksi: {
        id: 2,
        name: "Kecap ABC",
        harga: 10000,
        qty: 12,
      },
    },
  ],
  [
    {
      transaksi: {
        id: 12,
        name: "Shampo Pantene",
        harga: 20000,
        qty: 10,
      },
    },
  ],
];

// qty
console.log("jumlah kuantitas kecap abc sebanyak " + data[0][1].transaksi.qty);

// length
const jumlahTransaksi = data[0].length + data[1].length;
console.log("jumlah transaksi sebanyak " + jumlahTransaksi + " kali");

// p/pc
const hargaSatuan = data[1][0].transaksi.harga / data[1][0].transaksi.qty;
console.log("harga satuan shampoo pantene adalah " + hargaSatuan);
