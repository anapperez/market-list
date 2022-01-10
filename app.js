const app = new Vue({
el: '#app',
data: {
    titulo: 'Shopping List',
    list: [
       { nombre: 'pera', cantidad: 0},
       { nombre: 'manzana', cantidad: 9},
       { nombre: 'platano', cantidad: 12}
    ],

    newItem: '',
    total: 0
    
 },

 methods: {
     addItem () {
        this.list.push({
            nombre: this.newItem, cantidad: 0
        });
       this.newItem = ''
     }
 
 },

 computed: {
     sumItem () {
      this.total = 0;
      for(fruta of this.list){
          this.total = this.total + fruta.cantidad;
      }
      return this.total;
     }
 }
})