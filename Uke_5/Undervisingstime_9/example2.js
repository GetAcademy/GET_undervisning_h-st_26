const now = new Date();

const msPerDay = 1000 * 60 * 60 * 24;

const start = new Date("2026-09-08");
const end = new Date("2026-12-24");

const diffMs = end.getTime() - start.getTime();

function dagerTilBursdag(dag, maaned) {
  const MS_PER_DAG = 1000 * 60 * 60 * 24;
  const idag = new Date();
  const bursdag = new Date(idag.getFullYear(), maaned - 1, dag);
  return Math.ceil((bursdag - idag) / MS_PER_DAG);
}

function kvittering(){
    const idag = new Date();
    const dato = idag.toLocaleString("nb-No",{
        day:"numeric",
        month:"long",
        year:"numeric"
    })
    return "Bestilt " + dato
    //Bestilt: 8 september 2026
}
