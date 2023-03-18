<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <v-app id="calc-list">
    <v-app-bar flat>
      <v-container class="fill-height d-flex align-center">
        <v-app-bar-title>
          Joke Calc
        </v-app-bar-title>
      </v-container>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list rounded="lg">
                <RouterLink to="/">
                  <v-list-item>
                    <v-list-item-title>
                      BlinCalc
                    </v-list-item-title>
                  </v-list-item>
                </RouterLink>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet
              rounded="lg"
              min-height="70vh"
            >
              <RouterView />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer border>
      <div class="text-center w-100">
        {{ new Date().getFullYear() }} — <strong>Joke Calc</strong>
      </div>
    </v-footer>
  </v-app>

</template>
