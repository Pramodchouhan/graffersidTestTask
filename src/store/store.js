import { legacy_createStore as createStore } from 'redux';
import rootReducer from '../reducer/Rootreducers';

const store = createStore(rootReducer);

export default store;
