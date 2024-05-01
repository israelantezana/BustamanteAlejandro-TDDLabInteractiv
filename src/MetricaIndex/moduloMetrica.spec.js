import { crearMetrica,agregarMetricaAProyecto } from "./moduloMetrica.js";
import Metrica from "../Metrica.js"; 
import Proyecto from "../Proyecto.js"; 

describe("crearMetrica", () => {
  it("Debería crear una nueva instancia de Metrica con los valores dados (no refactor)", () => {
    const metrica = crearMetrica(10, 100, 80);
    expect(metrica).toBeInstanceOf(Metrica);
    expect(metrica.pruebasAñadidas).toBe(10);
    expect(metrica.lineasDeCodigo).toBe(100);
    expect(metrica.cobertura).toBe(80);
  });

  it("Debería manejar valores nulos o indefinidos", () => {
    const metrica = crearMetrica(null, undefined, 50);
    expect(metrica.pruebasAñadidas).toBe(0);
    expect(metrica.lineasDeCodigo).toBe(0);
    expect(metrica.cobertura).toBe(50);
  });

  it("Debería manejar valores negativos", () => {
    const metrica = crearMetrica(-5, -50, -20);
    expect(metrica.pruebasAñadidas).toBe(0);
    expect(metrica.lineasDeCodigo).toBe(0);
    expect(metrica.cobertura).toBe(0);
  });

  it("Debería limitar los valores a un máximo de 100", () => {
    const metrica = crearMetrica(200, 150, 120);
    expect(metrica).toBeNull();
  });

  it("Debería mostrar un mensaje si los valores superan 100", () => {
    console.log = jest.fn(); 
    crearMetrica(200, 150, 120);
    expect(console.log).toHaveBeenCalledWith("Ponga un valor real porfavor");
  });

});

describe("agregarMetricaAProyecto", () => {
    it("Debería agregar la métrica al proyecto y retornar la última métrica agregada (no refac)", () => {
      const proyecto = new Proyecto(); 
      const metrica = new Metrica(10, 100, 80);
      const ultimaMetricaAgregada = agregarMetricaAProyecto(metrica, proyecto);
      expect(proyecto.metricas.length).toBe(1);
      expect(ultimaMetricaAgregada).toBe(metrica);
    });
  });