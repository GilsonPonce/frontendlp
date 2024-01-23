
const pedidos = [
  {
    id: 1,
    producto: { title: "Laptop", marca: "Dell", imagen: "https://i.ibb.co/KNGfvhm/Laptop-dell.jpg"},
    fecha: "2024-01-22",
    estado: "Reserva",
  },
  {
    id: 2,
    producto: { title: "Smartphone", marca: "Samsung", imagen:"https://i.ibb.co/rGRhQ9n/samsung.jpg" },
    fecha: "2024-01-23",
    estado: "Comprado",
  },
  {
    id: 3,
    producto: { title: "Cámara", marca: "Canon", imagen:"https://i.ibb.co/y04xqwB/canon.jpg"},
    fecha: "2024-01-25",
    estado: "Enviado",
  },
  {
    id: 4,
    producto: { title: "Tablet", marca: "Apple", imagen: "https://i.ibb.co/rwzfBrn/apple2.jpg"},
    fecha: "2024-01-23",
    estado: "Entregado",
  },
];

console.log(pedidos);

export default pedidos;
