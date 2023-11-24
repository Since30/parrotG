const servicesModel = {
  getServices: async (connection) => {
    try {
      const results = await connection.query("SELECT * FROM services");
      return results;
    } catch (error) {
      throw error;
    }
  },
  getServiceById: async (connection, id) => {
    try {
      const results = await connection.query(
        "SELECT * FROM services WHERE id = $1",
        [id]
      );
      return results;
    } catch (error) {
      throw error;
    }
  },
  addService: async (connection, data) => {
    try {
      const results = await connection.query(
        "INSERT INTO services (name, description, price, image) VALUES ($1, $2, $3, $4) RETURNING *",
        [data.name, data.description, data.price, data.image]
      );
      return results.rows[0];
    } catch (error) {
      throw error;
    }
  },
  updateService: async (connection, id, data) => {
    try {
      const results = await connection.query(
        "UPDATE services SET name = $1, description = $2, price = $3, image = $4 WHERE id = $5 RETURNING *",
        [data.name, data.description, data.price, data.image, id]
      );
      return results;
    } catch (error) {
      throw error;
    }
  },
  deleteService: async (connection, id) => {
    try {
      const results = await connection.query(
        "DELETE FROM services WHERE id = $1",
        [id]
      );
      return results;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = servicesModel;
