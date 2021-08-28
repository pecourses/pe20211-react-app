const counterReducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case 'increment': {
      const { count, step } = state;
      return { ...state, count: count + step };
    }
    case 'decrement': {
      const { count, step } = state;
      return { ...state, count: count - step };
    }
    case 'changeStep': {
      const { newStep } = action;
      return { ...state, step: newStep };
    }
  }
  return state;
};

export default counterReducer;
