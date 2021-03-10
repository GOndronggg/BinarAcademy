let car = {
    nama: "Ferrari",
    weight: 1200,
    model: "Hypercar",
    color: "Red",
    start: function(){
        console.log("vroomvroom")
    },
    drive: function(){
        console.log("VROOOOOOOM")
      },
    brake: function(){
        console.log("ciiiiiiit")
      },
    stop: function(){
        console.log("what now?")
      },
  }

  console.log(car.nama)
  car.start()
  car.drive()
  car.brake()
  car.stop()