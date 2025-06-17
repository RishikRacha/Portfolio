import { legacy_createStore , applyMiddleware} from "redux";
import logger from 'redux-logger';
import reducerPortfolio from "./reducerPortfolio";

export default legacy_createStore(reducerPortfolio, applyMiddleware(logger));



