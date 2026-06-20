<template>
  <div>
    <h1>{{ car1.info.title }} - {{ car1.info.color }}</h1>
    <h1>{{ car2.info.title }} - {{ car2.info.color }}</h1>
    <h1>{{ car3.info.title }} - {{ car3.info.color }}</h1>
    <h1>{{car3.getModel(1245) }} - </h1>
  </div>
</template>

<script setup lang="ts">

class Car {

  constructor(
    public title: string,
    public year: number,
    public speed: number,
    public color: string,
    private age?: number
  ) {}



  getModel(made: number) {
    const currentYear = new Date().getFullYear()
    const carAge = currentYear - made

    if (carAge === 0) {
      return "This car is new"
    }

    return `Car age: ${carAge} years`
  }

  set changeAge(age: number) {
    this.age = age
  }
}

const car1 = new Car("Land Cruiser", 2026, 400, "black", 2026)
const car2 = new Car("KMC", 2020, 220, "pale blue", 2012)
const car3 = new Car("Santa Fe", 2022, 240, "white", 2022)

var bb = car3.getModel(2024) 

</script>
