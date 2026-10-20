const numeroProcesos = Number(process.argv[2]);
const lineasDisponibles = [
  "a = 1 + 2;",
  'console.log("Hola");',
  "b = 3 * 4;",
  "c = 10 / 2;",
  "console.log(b);",
];

function elegirLinea() {
  const indice = Math.floor(Math.random() * lineasDisponibles.length);
  return lineasDisponibles[indice];
}

function crearProcesos(numeroProcesos) {
  const procesos = [];

  for (let i = 0; i < numeroProcesos; i++) {
    const lineas = [];

    for (let j = 0; j < 3; j++) {
      lineas.push(elegirLinea());
    }
    const proceso = {
      numero: i + 1,
      lineas: lineas,
    };
    procesos.push(proceso);
  }

  return procesos;
}

function simularRoundRobin(procesos) {
  if (procesos.length === 0) {
    console.log("No hay procesos para simular.");
    return;
  }
  console.log("Simulación de Round Robin:");
  let ronda = 0;
  while (procesos.some((proceso) => proceso.lineas.length > 0)) {
    ronda += 1;
    console.log(`\nRonda ${ronda}:`);
    for (let i = 0; i < procesos.length; i++) {
      if (procesos[i].lineas.length > 0) {
        const linea = procesos[i].lineas.shift();

        console.log(`\nProceso ${procesos[i].numero}: ${linea}`);

        if (procesos[i].lineas.length > 0) {
          console.log(
            `Proceso ${procesos[i].numero} restante: ${procesos[i].lineas.length} líneas`,
          );
        } else {
          console.log(`Proceso ${procesos[i].numero} ha terminado.`);
        }
      } else {
        console.log(`\nProceso ${procesos[i].numero}: Terminado`);
      }
    }
  }
}

const procesos = crearProcesos(numeroProcesos);
simularRoundRobin(procesos);
