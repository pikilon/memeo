
export default Vue.extend({
  template: /*html*/`
  <v-card>
    <v-card-text className="title">Hello componet</v-card-text>
    <div v-if="showWorld">World</div>
    <div v-else>{{someValue}}</div>
    <v-btn @click="toggleWorld" color="teal">Toggle World</v-btn>
  </v-card>
  `,
  props: {
    showWorld: Boolean,
    someValue: {
      type: String,
      default: 'someValue'
    }
  },
  methods: {
    toggleWorld() {
      const oppositeWorld = !this.showWorld
      console.log('this.showWorld', this.showWorld);
      this.$emit('setWorld', oppositeWorld)
    }
  },
})

