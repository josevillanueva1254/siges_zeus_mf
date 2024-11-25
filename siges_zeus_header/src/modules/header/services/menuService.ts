export const fetchMenuItems = async () => {
    // Simulación de llamada a una API
    return new Promise((resolve) =>
      setTimeout(() => resolve(['1', '2', '3']), 500)
    );
  };
  