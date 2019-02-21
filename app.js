const app = require('./config/app')
const { PORT } = process.env;

require('./config/mongoose');
require('./models/Users');
require('./config/passport');

app.use(require('./routes'));
app.use(require('./middlewares/errorHandler'));

app.listen(8000, () => console.log(`Server running on http://localhost:${PORT}/`));