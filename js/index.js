import myHello from './components/hello.js'

var app = new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  components: {myHello},
  template: /*html*/`
      <div>
      {{someObject.first.nested}}
        <my-hello
          someValue="rain"
          :showWorld="showWorld"
          @setWorld="setWorld"
        />
      </div>
  `,
  data: () => ({
    showWorld: false,
    someArray: '1234123453456'.split(''),
    someObject: {
      first: {
        nested: 'original',
      }
    }

  }),
  methods: {
    setWorld(newWorld) {
      console.log('this.someObject', this.someObject);
      this.someObject = 'changed'
      this.showWorld = newWorld }
  }
})