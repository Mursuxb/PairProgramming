import { createContext, useReducer } from 'react'

export const GoalContext = createContext()

export const goalsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_GOALS': 
      return {
        goals: action.payload
      }
    case 'CREATE_GOAL':
      return {
        goals: [action.payload, ...state.goals]
      }
    case 'DELETE_GOAL':
      return {
        goals: state.goals.filter((w) => w._id !== action.payload._id)
      }
    default:
      return state
  }
}

export const GoalsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(goalsReducer, {
    goals: null
  })

  return (
    <GoalContext.Provider value={{...state, dispatch}}>
      { children }
    </GoalContext.Provider>
  )
}