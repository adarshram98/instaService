export const initialState = {
  jobs: [
  ],
  user: null,
};

// export const getSubtotal=(jobs) =>
// jobs?.reduce((amount,item)=>item.price +amount,0)

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_JOBS":
      // logic to add to jobs
      return { ...state, jobs: [...state.jobs, action.jobs] };

    case "REMOVE_FROM_JOBS":
      //clone the jobs
      let newjobs = [...state.jobs];
      //find the index
      const index = state.jobs.findIndex((item) => item.id === action.id);
      if (index >= 0) {
        //remove the item at the index
        newjobs?.splice(index, 1);
      }
      return { ...state, jobs: newjobs };

    default:
      return state;
  }
}

export default reducer;
