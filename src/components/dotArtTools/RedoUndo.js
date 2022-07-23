import React from 'react';
import { FaUndo, FaRedo } from 'react-icons/fa';
import CustomButton from '../common/CustomButton';
import styled from 'styled-components';
import ToolTip from '../common/ToolTip';

const RedoUndoBlock = styled.div`
  display: flex;
  height: 40px;
  justify-content: center;
  & > * {
    margin-right: 1px;
  }
`;

const RedoUndoComponent = React.memo(
  ({ redoundoShortcuts, redoHandle, undoHandle }) => {
    return (
      <RedoUndoBlock>
        <ToolTip
          placement="top"
          tooltip={
            <div>
              {redoundoShortcuts['UNDO'].helpText}
              <span className="tooltip-shortcut">{`(${redoundoShortcuts['UNDO'].key})`}</span>
            </div>
          }
        >
          <CustomButton width="96" onClick={() => undoHandle()}>
            <FaUndo />
          </CustomButton>
        </ToolTip>
        <ToolTip
          placement="top"
          tooltip={
            <div>
              {redoundoShortcuts['REDO'].helpText}
              <span className="tooltip-shortcut">{`(${redoundoShortcuts['REDO'].key})`}</span>
            </div>
          }
        >
          <CustomButton width="96" onClick={() => redoHandle()}>
            <FaRedo />
          </CustomButton>
        </ToolTip>
      </RedoUndoBlock>
    );
  },
);

const RedoUndo = ({ redoundoShortcuts, redoHandle, undoHandle }) => {
  return (
    <RedoUndoComponent
      redoundoShortcuts={redoundoShortcuts}
      redoHandle={redoHandle}
      undoHandle={undoHandle}
    />
  );
};

export default RedoUndo;
