import './style.css';

import Application from './Application/Application';

const env = process.env.NODE_ENV || 'development';
console.log(`Running in >> ${env} << mode`);

const iframe_src = process.env.IFRAME_SRC
console.log(`Frame in >> ${iframe_src} << URL`)

const app: Application = new Application();
