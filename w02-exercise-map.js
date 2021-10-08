const pacientesLista = [
  {
    paciente: {
      nombre: "Manuel",
      edad: 25,
      sexo: "H",
    },
    diasIngresado: 3,
    dieta: "Baja en fibra",
  },
  {
    paciente: {
      nombre: "Marta",
      edad: 56,
      sexo: "M",
    },
    diasIngresado: 5,
    dieta: "Diabetes",
  },
  {
    paciente: {
      nombre: "Julia",
      edad: 38,
      sexo: "M",
    },
    diasIngresado: 1,
    dieta: "Sin sal",
  },
  {
    paciente: {
      nombre: "Esteban",
      edad: 40,
      sexo: "H",
    },
    diasIngresado: 3,
    dieta: "Diabetes",
  },
  {
    paciente: {
      nombre: "Arturo",
      edad: 19,
      sexo: "H",
    },
    diasIngresado: 2,
    dieta: "Baja en fibra",
  },
  {
    paciente: {
      nombre: "Isabel",
      edad: 63,
      sexo: "M",
    },
    diasIngresado: 6,
    dieta: "Sin sal",
  },
];

function pacientesDatos(pacientes) {
  return {
    npacientes: pacientes.length,
    nMayoresEdad: pacientes.filter((paciente) => paciente.paciente.edad >= 18)
      .length,
    nHombresDiabeticos: pacientes.filter(
      (paciente) =>
        paciente.dieta === "Diabetes" && paciente.paciente.sexo === "H"
    ).length,
    totalDiasIngreso: pacientes
      .map((paciente) => paciente.diasIngresado)
      .reduce((x, y) => x + y),

    mediaEdadMujeres:
      pacientes
        .filter((paciente) => paciente.paciente.sexo === "M")
        .map((paciente) => paciente.paciente.edad)
        .reduce((x, y) => x + y) /
      pacientes.filter((paciente) => paciente.paciente.sexo === "M").length,
  };
}
console.log(pacientesDatos(pacientesLista));
