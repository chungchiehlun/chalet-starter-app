import { combineReducers } from 'redux'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    /*
      The store import counter reducer dynamically when the client directs
      to /counter. The "app" is just a workaround because combineReducers
      can not accept empty reducer objects. In real app, you might have
      initial reducer such as auth.
     */
    app: (state = {}, action) => {
      switch (action.type) {
        default:
          return state
      }
    },
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
