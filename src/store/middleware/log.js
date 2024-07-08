// action is the action objext whcich we dispatch
//next will pass action to next middleware, if there is only one middleware, then next woll pass to root reducer
const log = (store) => (next) => (action) => {
  next(action);
};
export default log;
