import { configureStore } from '@reduxjs/toolkit'

import addReducer from '../slice/todolist';
import progressReducer from '../slice/progress';
import completedTodos from '../slice/completed';


const store=configureStore({
  reducer: {
  addReducer,
  progressReducer,
  completedTodos,



     

    
  },
})

export {store}