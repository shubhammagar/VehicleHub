const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors())

  app.use(bodyParser.json());
const db = require('./models');
db.sequelize.sync();

const vehicleRoutes = require('./routes/vehicle.routes');
app.use('/api/vehicles', vehicleRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Removed invalid syntax. CORS is already configured above.
//but cors is not working fix it
