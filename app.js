const app = new Vue({
el: '#app',
data: {
    titulo: 'Lista de Almacen',
    list: [
       { nombre: 'Pera', cantidad: 0},
       { nombre: 'Manzana', cantidad: 9},
       { nombre: 'Platano', cantidad: 12},
       { nombre: 'Mango', cantidad: 1},
       { nombre: 'Fresa', cantidad: 6},
       { nombre: 'Huevos', cantidad: 8}
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