
function validarSolicitud(nombre, correo, tipoVisa) {
  return (
    nombre.trim() !== "" &&
    correo.trim() !== "" &&
    tipoVisa.trim() !== ""
  );
}

describe("Validación de solicitudes de visa", () => {
  test("Debe aceptar una solicitud con todos los campos completos", () => {
    expect(
      validarSolicitud("Usuario de prueba", "prueba@ejemplo.com", "Turismo")
    ).toBe(true);
  });

  test("Debe rechazar una solicitud con campos vacíos", () => {
    expect(
      validarSolicitud("", "prueba@ejemplo.com", "Turismo")
    ).toBe(false);
  });
});
