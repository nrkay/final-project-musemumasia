import { combineReducers, createStore, applyMiddleware  } from 'redux'
import thunk from "redux-thunk"
import developerReducer from '../reducer/developerReducer'
import dataBendaReducer from '../reducer/dataBendaReducer'
import userReducer from '../reducer/userReduser'


const allReducer = combineReducers({
  developer: developerReducer,
  benda: dataBendaReducer,
  user: userReducer,
})

const store = createStore(allReducer, applyMiddleware(thunk))

export default store