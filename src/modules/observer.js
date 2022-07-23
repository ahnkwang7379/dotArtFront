import { createAction, handleActions } from 'redux-actions';

const CHANGE_TYPING_STATE = 'observer/CHANGE_TYPING_STATE';
const MOUSE_LEAVES_PAINT_AREA = 'observer/MOUSE_LEAVES_PAINT_AREA';
const CHANGE_DOT_BORDER_SIZE = 'observer/CHANGE_DOT_BORDER_SIZE';
const CHANGE_DOT_BORDER_COLOR = 'observer/CHANGE_DOT_BORDER_COLOR';
const INCREASE_DOT_SIZE = 'observer/INCREASE_DOT_SIZE';
const DECREASE_DOT_SIZE = 'observer/DECREASE_DOT_SIZE';
const CHANGE_DOT_SIZE = 'observer/CHANGE_DOT_SIZE';
const LOAD_DATA = 'observer/LOAD_DATA';
const CHANGE_SHOW_LAYERS = 'observer/CHANGE_SHOW_LAYERS';
const CHANGE_BACKGROUND_IMG = 'observer/CHANGE_BACKGROUND_IMG';
const SAVE_START = 'observer/SAVE_START';

export const changeTypingState = createAction(
  CHANGE_TYPING_STATE,
  (isTyping) => isTyping,
);
export const mouseLeavesPaintArea = createAction(MOUSE_LEAVES_PAINT_AREA);

export const changeDotBorderSize = createAction(
  CHANGE_DOT_BORDER_SIZE,
  (size) => size,
);
export const changeDotBorderColor = createAction(
  CHANGE_DOT_BORDER_COLOR,
  (color) => color,
);
export const increaseDotSize = createAction(INCREASE_DOT_SIZE);
export const decreaseDotSize = createAction(DECREASE_DOT_SIZE);
export const changeDotSize = createAction(
  CHANGE_DOT_SIZE,
  (dotSize) => dotSize,
);
export const loadData = createAction(LOAD_DATA, (observerData) => observerData);
export const changeShowLayers = createAction(CHANGE_SHOW_LAYERS);
export const changeBackgroundImg = createAction(
  CHANGE_BACKGROUND_IMG,
  (type) => type,
);
export const saveStart = createAction(SAVE_START, (flag) => flag);

const initialState = {
  isTyping: false,
  mousePosition: { x: '', y: '' },
  startPosition: { x: '', y: '' },
  dotSize: 32,
  dotBorder: { size: 1, color: '#000000' },
  showLayers: true,
  backgroundImg: 1,
  saveState: false,
};

const observer = handleActions(
  {
    [CHANGE_TYPING_STATE]: (state, { payload: isTyping }) => ({
      ...state,
      isTyping: isTyping,
    }),
    [MOUSE_LEAVES_PAINT_AREA]: (state) => ({
      ...state,
      mousePosition: { x: '', y: '' },
    }),
    [CHANGE_DOT_BORDER_SIZE]: (state, { payload: size }) => ({
      ...state,
      dotBorder: {
        ...state.dotBorder,
        size: size,
      },
    }),
    [CHANGE_DOT_BORDER_COLOR]: (state, { payload: color }) => ({
      ...state,
      dotBorder: {
        ...state.dotBorder,
        color: color,
      },
    }),
    [INCREASE_DOT_SIZE]: (state) => ({
      ...state,
      dotSize: state.dotSize < 100 ? state.dotSize + 4 : state.dotSize,
    }),
    [DECREASE_DOT_SIZE]: (state) => ({
      ...state,
      dotSize: state.dotSize > 4 ? state.dotSize - 4 : state.dotSize,
    }),
    [CHANGE_DOT_SIZE]: (state, { payload: dotSize }) => ({
      ...state,
      dotSize: dotSize,
    }),
    [LOAD_DATA]: (state, { payload: observerData }) => ({
      ...state,
      ...observerData,
    }),
    [CHANGE_SHOW_LAYERS]: (state) => ({
      ...state,
      showLayers: !state.showLayers,
    }),
    [CHANGE_BACKGROUND_IMG]: (state, { payload: type }) => ({
      ...state,
      backgroundImg: type,
    }),
    [SAVE_START]: (state, { payload: flag }) => ({
      ...state,
      saveState: flag,
    }),
  },
  initialState,
);

export default observer;
