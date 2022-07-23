import React, { useState } from 'react';
import Preview from '../common/Preview';
import CustomButton from '../common/CustomButton';
import styled from 'styled-components';
import { MdPlayArrow, MdPause } from 'react-icons/md';
import TextField from '@material-ui/core/TextField';
import {
  layerListMerge,
  mergeLayersByDotFrameList,
} from '../../util/dotArrayUtil';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 8px;
  & > * {
    margin: 8px;
    max-width: 160px;
  }
`;

const PreviewScrollWrapper = styled.div`
  overflow: auto;
  max-width: 100%;
  max-height: 100%;
  border: 1px solid #9e9e9e;
`;

const PreviewBlock = styled.div.attrs(
  ({ pixelSize, columnCount, rowCount }) => ({
    style: {
      width: `${columnCount * pixelSize}px`,
      height: `${rowCount * pixelSize}px`,
    },
  }),
)``;

const PreviewDialog = ({
  dotFrameList,
  activeIdx,
  rowCount,
  columnCount,
  animationDuration,
  pixelSize,
  layerData,
  handleChangeAnimationDuration,
  handleChangePixelSize,
}) => {
  const [animation, setAnimation] = useState(true);
  const toggleAnimation = () => {
    setAnimation(!animation);
  };

  const onChangePixelSize = (e) => {
    handleChangePixelSize(e.target.value);
  };

  const onChangeAnimationDuration = (e) => {
    setAnimation(false);
    if (e.target.value <= 0 || e.target.value === '') {
      handleChangeAnimationDuration(0);
    } else {
      handleChangeAnimationDuration(e.target.value);
    }
  };

  return (
    <Wrapper>
      <ButtonWrapper>
        <TextField
          size="small"
          variant="outlined"
          type="number"
          label="Animation Duration"
          color="secondary"
          value={animationDuration}
          onChange={(e) => onChangeAnimationDuration(e)}
        />
        <TextField
          size="small"
          variant="outlined"
          type="number"
          label="PixelSize"
          color="secondary"
          value={pixelSize}
          onChange={(e) => onChangePixelSize(e)}
        />
        <CustomButton
          onClick={toggleAnimation}
          selected={animation}
          selectColor="#f05556"
          color={animation ? '#b71b2d' : '#008000'}
          width="40"
          height="40"
          baseColor="#3db12a"
        >
          {animation ? <MdPause /> : <MdPlayArrow />}
        </CustomButton>
      </ButtonWrapper>
      <PreviewScrollWrapper>
        <PreviewBlock
          pixelSize={pixelSize}
          columnCount={columnCount}
          rowCount={rowCount}
        >
          {!animation && (
            <Preview
              dotSet={layerListMerge(
                dotFrameList[activeIdx].layerList,
                layerData,
              )}
              column={columnCount}
              size={pixelSize}
            />
          )}
          {animation && (
            <Preview
              dotList={mergeLayersByDotFrameList(dotFrameList, layerData)}
              column={columnCount}
              size={pixelSize}
              animation={animation}
              duration={animationDuration}
            />
          )}
        </PreviewBlock>
      </PreviewScrollWrapper>
    </Wrapper>
  );
};

export default PreviewDialog;
