import React, { useCallback } from 'react';
import DotPaint from '../../components/dotPaint/DotPaint';
import { useSelector, useDispatch } from 'react-redux';
import { changePaintState, setDirection } from '../../modules/paintTool';
import { increaseDotSize, decreaseDotSize } from '../../modules/observer';
import { mouseLeavesPaintArea } from '../../modules/observer';
import { dotActions } from '../../modules/index';

const DotpaintContainer = () => {
  const dispatch = useDispatch();
  const { rowCount } = useSelector(({ dotArt }) => ({
    rowCount: dotArt.present.dot.rowCount,
  }));
  const { border, dotSize, backgroundImg } = useSelector(({ observer }) => ({
    border: observer.dotBorder,
    dotSize: observer.dotSize,
    backgroundImg: observer.backgroundImg,
  }));

  const onWheelHandle = useCallback(
    (e) => {
      if (e.deltaY > 0) {
        dispatch(decreaseDotSize());
      } else {
        dispatch(increaseDotSize());
      }
    },
    [dispatch],
  );

  const onChangePaintStateHandle = useCallback(
    (paintState) => dispatch(changePaintState(paintState)),
    [dispatch],
  );

  const onDotActionHandle = useCallback(
    (rowIdx, columnIdx, altDown) =>
      dispatch(dotActions({ rowIdx, columnIdx, altDown })),
    [dispatch],
  );

  const onSetDirectionHandle = useCallback(
    (direction) => dispatch(setDirection(direction)),
    [dispatch],
  );

  const onLeavesPaintAreaHandle = useCallback(
    () => dispatch(mouseLeavesPaintArea()),
    [dispatch],
  );

  return (
    <DotPaint
      border={border}
      dotSize={dotSize}
      rowCount={rowCount}
      backgroundImg={backgroundImg}
      onWheelHandle={onWheelHandle}
      onChangePaintStateHandle={onChangePaintStateHandle}
      onDotActionHandle={onDotActionHandle}
      onSetDirectionHandle={onSetDirectionHandle}
      onLeavesPaintAreaHandle={onLeavesPaintAreaHandle}
    />
  );
};

export default DotpaintContainer;
