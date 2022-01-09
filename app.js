const app = new Vue({
el: '#app',
data: {
    titulo: 'Shopping List',
    list: [
       { nombre: 'pera', cantidad: 0},
       { nombre: 'manzana', cantidad: 9},
       { nombre: 'platano', cantidad: 12}
    ],

    newItem: ''
    
 },

 methods: {
     addItem () {
        this.list.push({
            nombre: this.newItem, cantidad: 0
        })
     }
    
   
 }
})