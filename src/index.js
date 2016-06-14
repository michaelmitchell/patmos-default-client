import polyfill from 'babel-polyfill';
import { install } from 'source-map-support';

install();

export default require('./middleware/default-client');
