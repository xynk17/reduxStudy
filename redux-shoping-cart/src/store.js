// src/store.js

import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

//这么写就相当于直接去找这个目录下的index.js了
import rootReducer from './reducers';

//需要创建并把缓冲器绑定上去（带redux Devtools的写法）
const store = createStore(rootReducer, composeWithDevTools());

//需要创建并把缓冲器绑定上去（普通写法）
//let store = createStore(rootReducer);

export default store;


