const productos = [
    {
        id: 1,
        nombre: "La constitución de los argentinos",
        descripcion: "Libro derecho constitucional argentino",
        stock: 7,
        categoria: "constitucional",
        img: 'https://tiendaonline.errepar.com/3421-large_default/la-constitucion-de-los-argentinos.jpg',
        precio: 7500
    },
    {
        id: 2,
        nombre: "Trabajo y seguridad social",
        descripcion: "Libro seguridad social",
        stock: 3,
        categoria: "laboral",
        img: 'https://tiendaonline.errepar.com/3264-large_default/manual-del-trabajo-y-de-la-seguridad-social.jpg',
        precio: 2700
    },
    {
        id: 3,
        nombre: "Jubilaciones y pensiones",
        descripcion: "Libro derecho jubilatorio",
        stock: 5,
        categoria: "jubilatorio",
        img: 'https://tiendaonline.errepar.com/3655-large_default/jubilaciones-y-pensiones.jpg',
        precio: 10000
    }
];

export const getFetch = new Promise ((resolve,rejected) => {
    let url = 'www.productos.com.ar'

    if (url === 'www.productos.com.ar'){
        setTimeout(()=>{
            resolve(productos);
            },2000);
    }else {
        rejected('404 not found')
    }

})