import path, {dirname} from 'path';
import fs from 'fs';
import st from 'st';
import {createServer} from 'http';
import localizeURLs from './localize-urls.js';
import {fileURLToPath} from 'url';
import {createRequire} from 'module';

const require = createRequire(import.meta.url);
const __dirname = dirname(fileURLToPath(import.meta.url));

export default function () {
    const port = 2900;
    const integrationMount = st({path: path.join(__dirname, '..')});
    const mapboxGLStylesMount = st({path: path.dirname(require.resolve('mapbox-gl-styles')), url: 'mapbox-gl-styles'});
    const mapboxMVTFixturesMount = st({path: path.dirname(require.resolve('@mapbox/mvt-fixtures')), url: 'mvt-fixtures'});
    const server = createServer((req, res) => {
        if (req.method === 'POST' && req.url === '/write-file') {
            let body = '';
            req.on('data', (data) => {
                body += data;
            });
            req.on('end', () => {

                //Write data to disk
                const {filePath, data} = JSON.parse(body);
                fs.writeFile(path.join(process.cwd(), filePath), data, 'base64', () => {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end('ok');
                });
            });
        }

        return mapboxMVTFixturesMount(req, res, () => {
            return mapboxGLStylesMount(req, res, () => {
                return integrationMount(req, res);
            });
        });
    });

    return {
        listen(callback) {
            server.listen(port, callback);
        },

        close(callback) {
            server.close(callback);
        },

        localizeURLs(style) {
            return localizeURLs(style, port);
        }
    };
}
