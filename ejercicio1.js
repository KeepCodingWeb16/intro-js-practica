const miInformacion = {
  nombre: "Kevin",
  apellidos: "Martínez",
  temasBootcamp: ["HTML & CSS", "Tema 2", "Tema 3"],
  busquedaActiva: false,
  redesSociales: [
    {
      nombre: "GitHub",
      link: "https://github.com/kevinccbsg",
    },
    {
      nombre: "LinkedIn",
      link: "https://www.linkedin.com/in/kevinjmartinez/",
    },
  ],
};

console.log("Nombre:", miInformacion.nombre);
console.log("Apellidos:", miInformacion.apellidos);
console.log("Temas del bootcamp:", miInformacion.temasBootcamp);
console.log("Búsqueda activa:", miInformacion.busquedaActiva);
console.log("Redes sociales:");
miInformacion.redesSociales.forEach((redSocial) => {
  console.log(`${redSocial.nombre}: ${redSocial.link}`);
});
