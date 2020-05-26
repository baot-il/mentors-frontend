// import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

//TODO: switch to import
let Adapter = require('enzyme-adapter-react-16');
let Enzyme = require('enzyme');

Enzyme.configure({adapter: new Adapter()});
