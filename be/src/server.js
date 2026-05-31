import 'dotenv/config';
import app from './app.js';
import swaggerSpec from './config/swagger.js';
const PORT = process.env.PORT || 3000;
function printRoutes() {
  const paths = swaggerSpec.paths || {};
  const routes = [];
  for (const [path, pathObj] of Object.entries(paths)) {
    const methods = Object.keys(pathObj).filter(method => ['get', 'post', 'put', 'delete', 'patch'].includes(method.toLowerCase())).map(method => method.toUpperCase()).join(', ');
    routes.push({
      Path: path,
      Methods: methods
    });
  }
  console.log('\n📍 Registered API Endpoints:');
  console.table(routes.length ? routes : [{
    Path: 'No routes found',
    Methods: 'N/A'
  }]);
}
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  printRoutes();
});