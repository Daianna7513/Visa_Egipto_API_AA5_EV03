
const SolicitudVisa = require("./models/SolicitudVisa");

describe("Pruebas del modelo SolicitudVisa", () => {
  test("Debe aceptar una solicitud con datos válidos", async () => {
    const solicitud = new SolicitudVisa({
      nombreCompleto: "Usuario de prueba",
      correoElectronico: "prueba@ejemplo.com",
      tipoVisa: "Turismo"
    });

    await expect(solicitud.validate()).resolves.toBeUndefined();
  });

  test("Debe rechazar un tipo de visa no permitido", async () => {
    const solicitud = new SolicitudVisa({
      nombreCompleto: "Usuario de prueba",
      correoElectronico: "prueba@ejemplo.com",
      tipoVisa: "Trabajo"
    });

    await expect(solicitud.validate()).rejects.toThrow();
  });

  test("Debe asignar el estado Pendiente por defecto", () => {
    const solicitud = new SolicitudVisa({
      nombreCompleto: "Usuario de prueba",
      correoElectronico: "prueba@ejemplo.com",
      tipoVisa: "Turismo"
    });

    expect(solicitud.estado).toBe("Pendiente");
  });
});
