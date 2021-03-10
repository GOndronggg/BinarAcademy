const data = { id: 1, name: "john", age: 21 };

const keysData = Object.keys(data);

const data2 = { id: 2, name: "rudi", age: 22 };

const keysData2 = Object.keys(data2);

for (let i = 0; i < keysData2.length; i++) {
  if (!keysData.includes(keysData2[i])) {
    console.log(`data key ${keysData2[i]} tidak sesuai format`);
    break;
  }
}
