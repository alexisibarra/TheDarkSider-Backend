const app = require('./config/app')

require('./config/mongoose');
require('./models/Users');
require('./config/passport');

app.use(require('./routes'));
app.use(require('./middlewares/errorHandler'));

app.listen(3000, () => console.log(`Server running on http://localhost:3000/`));