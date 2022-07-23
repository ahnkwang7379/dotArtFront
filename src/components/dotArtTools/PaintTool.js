import React from 'react';
import styled from 'styled-components';
import {
  DOT,
  BUCKET,
  PICKER,
  ERASER,
  MOVE,
  SAMECOLOR,
  DITHERING,
  RECTANGLE,
} from '../../modules/paintTool';
import CustomButton from '../common/CustomButton';
import { TiPencil, TiPipette } from 'react-icons/ti';
import { BsFillBucketFill } from 'react-icons/bs';
import { CgColorBucket } from 'react-icons/cg';
import { BiRectangle } from 'react-icons/bi';
import { FaEraser, FaHandPaper, FaBorderAll } from 'react-icons/fa';
import ToolTip from '../common/ToolTip';

const PaintToolWrapper = styled.div`
  padding: 4px;
  /* border: 2px solid #59564f; */
  border-radius: 3px;
  & > * {
    margin-bottom: 8px;
    justify-content: center;
  }
`;

const PaintButtonBlock = styled.div`
  height: 48px;
  display: flex;
  & > * {
    margin-right: 1px;
  }
`;

const PaintTool = ({
  paintToolsShortcuts,
  selectedPaintTool,
  onChangePaintTool,
}) => {
  return (
    <PaintTools
      paintToolsShortcuts={paintToolsShortcuts}
      selectedPaintTool={selectedPaintTool}
      onChangePaintTool={onChangePaintTool}
    />
  );
};

const PaintTools = React.memo(
  ({ paintToolsShortcuts, selectedPaintTool, onChangePaintTool }) => {
    return (
      <PaintToolWrapper>
        <PaintButtonBlock>
          <ToolTip
            placement="top"
            tooltip={
              <div>
                {paintToolsShortcuts[DOT].helpText}
                <span className="tooltip-shortcut">{`(${paintToolsShortcuts[DOT].key})`}</span>
              </div>
            }
          >
            <CustomButton
              width="48"
              selected={selectedPaintTool === DOT}
              onClick={() => onChangePaintTool(DOT)}
            >
              <TiPencil />
            </CustomButton>
          </ToolTip>

          <ToolTip
            placement="top"
            tooltip={
              <div>
                {paintToolsShortcuts[BUCKET].helpText}
                <span className="tooltip-shortcut">{`(${paintToolsShortcuts[BUCKET].key})`}</span>
              </div>
            }
          >
            <CustomButton
              width="48"
              selected={selectedPaintTool === BUCKET}
              onClick={() => onChangePaintTool(BUCKET)}
            >
              <BsFillBucketFill />
            </CustomButton>
          </ToolTip>
          <ToolTip
            placement="top"
            tooltip={
              <div>
                {paintToolsShortcuts[SAMECOLOR].helpText}
                <span className="tooltip-shortcut">{`(${paintToolsShortcuts[SAMECOLOR].key})`}</span>
              </div>
            }
          >
            <CustomButton
              width="48"
              selected={selectedPaintTool === SAMECOLOR}
              onClick={() => onChangePaintTool(SAMECOLOR)}
            >
              <CgColorBucket />
            </CustomButton>
          </ToolTip>
          <ToolTip
            placement="top"
            tooltip={
              <div>
                {paintToolsShortcuts[ERASER].helpText}
                <span className="tooltip-shortcut">{`(${paintToolsShortcuts[ERASER].key})`}</span>
              </div>
            }
          >
            <CustomButton
              width="48"
              selected={selectedPaintTool === ERASER}
              onClick={() => onChangePaintTool(ERASER)}
            >
              <FaEraser />
            </CustomButton>
          </ToolTip>
        </PaintButtonBlock>
        <PaintButtonBlock>
          <ToolTip
            placement="top"
            tooltip={
              <div>
                {paintToolsShortcuts[PICKER].helpText}
                <span className="tooltip-shortcut">{`(${paintToolsShortcuts[PICKER].key})`}</span>
              </div>
            }
          >
            <CustomButton
              width="48"
              selected={selectedPaintTool === PICKER}
              onClick={() => onChangePaintTool(PICKER)}
            >
              <TiPipette />
            </CustomButton>
          </ToolTip>
          <ToolTip
            placement="top"
            tooltip={
              <div>
                {paintToolsShortcuts[MOVE].helpText}
                <span className="tooltip-shortcut">{`(${paintToolsShortcuts[MOVE].key})`}</span>
                <div className="tooltip-name">
                  <span className="tooltip-key">ALT</span>Wrap mod
                </div>
              </div>
            }
          >
            <CustomButton
              width="48"
              selected={selectedPaintTool === MOVE}
              onClick={() => onChangePaintTool(MOVE)}
            >
              <FaHandPaper />
            </CustomButton>
          </ToolTip>
          <ToolTip
            placement="top"
            tooltip={
              <div>
                {paintToolsShortcuts[RECTANGLE].helpText}
                <span className="tooltip-shortcut">{`(${paintToolsShortcuts[RECTANGLE].key})`}</span>
              </div>
            }
          >
            <CustomButton
              width="48"
              selected={selectedPaintTool === RECTANGLE}
              onClick={() => onChangePaintTool(RECTANGLE)}
            >
              <BiRectangle />
            </CustomButton>
          </ToolTip>
          <ToolTip
            placement="top"
            tooltip={
              <div>
                {paintToolsShortcuts[DITHERING].helpText}
                <span className="tooltip-shortcut">{`(${paintToolsShortcuts[DITHERING].key})`}</span>
              </div>
            }
          >
            <CustomButton
              width="48"
              selected={selectedPaintTool === DITHERING}
              onClick={() => onChangePaintTool(DITHERING)}
            >
              <FaBorderAll />
            </CustomButton>
          </ToolTip>
        </PaintButtonBlock>
      </PaintToolWrapper>
    );
  },
);

export default PaintTool;
