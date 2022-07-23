import React, { useCallback } from 'react';
import { ActionCreators } from 'redux-undo';
import { useSelector, useDispatch } from 'react-redux';
import { clearFakeDotArt } from '../../modules/index';
import RedoUndo from '../../components/dotArtTools/RedoUndo';

const RedoUndoContainer = () => {
  const dispatch = useDispatch();
  const { redoundoShortcuts } = useSelector(({ keybind }) => ({
    redoundoShortcuts: keybind.misc,
  }));

  const redoHandle = useCallback(() => {
    dispatch(ActionCreators.redo());
    dispatch(clearFakeDotArt());
  }, [dispatch]);
  const undoHandle = useCallback(() => {
    dispatch(ActionCreators.undo());
    dispatch(clearFakeDotArt());
  }, [dispatch]);
  return (
    <RedoUndo
      redoundoShortcuts={redoundoShortcuts}
      redoHandle={redoHandle}
      undoHandle={undoHandle}
    />
  );
};

export default RedoUndoContainer;
