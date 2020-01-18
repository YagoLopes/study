const INITIAL_STATE = [];

export function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_FAVORITE":
      return [
        ...state,
        {
          id: Math.random(),
          name: "facebook/react",
          description:
            "(We're gonna rock this house until we knock it down. So turn the volume loud. 'Cause it's mayhem 'til the A.M.. So, baby, make just like K-Fed. And let yourself go, let yourself go. Say Fuck it! before we kick the bucket. Life's too short to not go for broke. So everybody, everybody, go berserk, grab your vial, yeah.)",
          url: "https://github.com/facebook/react"
        }
      ];
    default:
      return state;
  }
}
