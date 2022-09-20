class Inventario {
    constructor(){
        this.inventario = [];
    }

    agregar(producto){
        this.inventario.push(producto);
    }

    eliminar(codigo){
        let x = 0;
        for(let i = 0; i < this.inventario.length;i++){
            if(codigo===this.inventario[i].codigo){
                for( let j=i;j<this.inventario.length-1;j++){
                    this.inventario[j]=this.inventario[j+1];
                }
                this.inventario.pop()
                x=1;

                }else if(i>this.inventario.length){
                    x=1;
                }
               i++;
        }
    }

    modificar(codigo,codigoN){
        for(let i = 0; i < this.inventario.length;i++){
            if(codigo === this.inventario[i]){
                this.inventario[i] = codigoN;
            }
        }
    }

    buscar(codigo){
        let i = 0;
        let x = 0;
        while(x==0){
           if(codigo==this.inventario[i].codigo){
            return(this.inventario[i]);            
            }else if(i>this.inventario.length){
                x=1;
            }
           i++;
        }

    }

    inv(){
        return(this.inventario);
    }

    invInverso(){
        let inventarioInverso=[];
        for(let i=0; i<this.inventario.length; i++){
            inventarioInverso[i]=this.inventario[this.inventario.length-1-i];
        }
        return(inventarioInverso);
    }

}

class Listado {
    constructor(codigo, producto){
        this.codigo = codigo;
        this.nombre = producto;
    }

}

let lista = new Inventario ();

function addProducto(){
        
    let producto = document.getElementById("nombre").value;
    let codigo = document.getElementById("codigo").value;
    if(producto == ""){
        alert("El nombre es obligatorio para agregar un producto");
        document.getElementById("nombre").focus();

    }else if(codigo == ""){
        alert("El codigo es obligatorio para agregar un producto")
        document.getElementById("codigo").focus();
    }
    let articulo = new Listado (producto, codigo);
    lista.agregar(articulo);
    console.log(lista);
    document.getElementById("nombre").value="";
    document.getElementById("codigo").value="";
}

function eliminarX(){
    let cod = document.getElementById("eliminar").value;
    lista.eliminar(cod);


}

function modificar(){
    let codigo = document.getElementById("codigo");
    let codigoN = document.getElementById("codgo1");
    for(let i = 0; i < lista.length; i++){
        if(codigo === lista[i]){
            lista[i]= codigoN;
        }
    }
}

function buscarX(){
    let codigo = document.getElementById("buscar").value;
    let producto = lista.buscar(codigo);
    let tp = document.getElementById("buscarProductos");
    let cTab = document.createElement("tbody"); 
    let f = document.createElement("tr");
    let y = document.createElement("td");
    y.innerText = producto.codigo;
    f.appendChild(y);
    y = document.createElement("td");
    y.innerText = producto.nombre;
    f.appendChild(y);
    cTab.appendChild(f);
    tp.appendChild(cTab);
}

function listar(){
    let x = lista.inv();
    let tProd = document.getElementById("productos");
    let cTab = document.createElement("tbody"); 
    x.forEach(y => {
    let f = document.createElement("tr");
    let td = document.createElement("td");
    td.innerText = y.codigo;
    f.appendChild(td);
    td = document.createElement("td");
    td.innerText = y.nombre;
    f.appendChild(td);
    cTab.appendChild(f);
});

tProd.appendChild(cTab);
}

function listInverted(){
    let x = lista.invInverso();
    let tProd = document.getElementById("productos2");
    let cTab = document.createElement("tbody"); 
    x.forEach(y => {
    let f = document.createElement("tr");
    let td = document.createElement("td");
    td.innerText = y.codigo;
    f.appendChild(td);
    td = document.createElement("td");
    td.innerText = y.nombre;
    f.appendChild(td);
    td = document.createElement("td");
    cTab.appendChild(f);
});

tProd.appendChild(cTab);
}
