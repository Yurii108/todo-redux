import {
  ADD_TODO,
  FILTER_TODOS,
  MARK_ALL_COMPLETED,
  MARK_COMPLETED,
  MARK_INCOMPLETE,
  REMOVE_TODO,
  TOGGLE_TODO,
  UPDATE_SEARCH_TERM,
} from "./actionTypes";

export interface ITodoState {
  todos: { id: number; text: string; completed: boolean }[];
  filter: string;
  searchTerm: string;
}

type TodoAction =
  | { type: typeof ADD_TODO; payload: { text: string; id: number } }
  | { type: typeof TOGGLE_TODO; payload: { id: number } }
  | { type: typeof REMOVE_TODO; payload: { id: number } }
  | { type: typeof MARK_COMPLETED; payload: { id: number } }
  | { type: typeof MARK_INCOMPLETE; payload: { id: number } }
  | { type: typeof FILTER_TODOS; payload: { filter: string } }
  | { type: typeof UPDATE_SEARCH_TERM; payload: { searchTerm: string } }
  | { type: typeof MARK_ALL_COMPLETED };

const dataExample = [
  {
    id: 12,
    text: "Complete Homework Assignment",
    completed: false,
  },
  {
    id: 23,
    text: "Exercise Routine",
    completed: true,
  },
  {
    id: 34,
    text: "Grocery Shopping",
    completed: false,
  },
];

const initialState: ITodoState = {
  todos: dataExample,
  filter: "ALL",
  searchTerm: "",
};

const todoReducer = (state: ITodoState = initialState, action: TodoAction): ITodoState => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          { id: action.payload.id, text: action.payload.text, completed: false },
        ],
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    case TOGGLE_TODO:
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
        ),
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    case REMOVE_TODO:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    case MARK_COMPLETED:
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, completed: true } : todo
        ),
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    case MARK_INCOMPLETE:
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, completed: false } : todo
        ),
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    case FILTER_TODOS:
      return {
        todos: state.todos,
        filter: action.payload.filter,
        searchTerm: state.searchTerm,
      };

    case UPDATE_SEARCH_TERM:
      return {
        todos: state.todos,
        filter: state.filter,
        searchTerm: action.payload.searchTerm,
      };

    case MARK_ALL_COMPLETED:
      return {
        todos: state.todos.map((todo) => ({ ...todo, completed: true })),
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    default:
      return state;
  }
};

export default todoReducer;
