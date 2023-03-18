<template>
  <v-container>
    <div>
      You can make {{ numberOfPortions*4 }} blins
    </div>
    <v-card class="mx-auto" max-width="350" title="Blin-cooker">
      <v-container>
        <v-text-field
          label="Eggs"
          hint="How many eggs you have"
          variant="outlined"
          color="primary"
          v-model="eggsCount"
          type="number"
          class="mb-2"
        ></v-text-field>

        <v-text-field
          label="Milk"
          hint="How much milk you have"
          suffix="ml"
          variant="outlined"
          color="primary"
          v-model="milkVolume"
          type="number"
          class="mb-2"
        ></v-text-field>

        <v-text-field
          label="Flour"
          hint="How much flour you have"
          suffix="gr"
          variant="outlined"
          color="primary"
          v-model="flourMass"
          type="number"
          class="mb-2"
        ></v-text-field>
      </v-container>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
const eggsMin = 1
const eggsCount = ref(0)
const eggsPortions = ref(0)
const milkMin = 200
const milkVolume = ref(0)
const milkPortions = ref(0)
const flourMin = 100
const flourMass = ref(0)
const flourPortions = ref(0)

const numberOfPortions = ref(0)

watch(eggsCount, (eggs) => {
  eggsPortions.value = eggs / eggsMin
  calculateHowManyBlinsYouCanMake()
})

watch(milkVolume, (milk) => {
  milkPortions.value = milk / milkMin
  calculateHowManyBlinsYouCanMake()
})

watch(flourMass, (flour) => {
  flourPortions.value = flour / flourMin
  calculateHowManyBlinsYouCanMake()
})

const calculateHowManyBlinsYouCanMake = () => {
  numberOfPortions.value = [flourPortions.value, milkPortions.value, eggsPortions.value].reduce(
    (accumulator, currentValue) => Math.min(accumulator, currentValue)
  )
}
</script>
