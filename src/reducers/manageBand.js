export default function manageBand(state = {
  let id = 0;
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      id++
      const band = Object.assign({}, action.band, {id:id})
      return { bands: state.bands.concat(action.band) }
    case 'DELETE_BAND':
      const bands = state.bands.filter(band => band.id !== action.id);
      return {bands};
    default:
      return state;
  }
};
