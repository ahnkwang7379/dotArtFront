import React from 'react';
import SaveLoadContainer from '../dotArtTools/SaveLoadContainer';
import DotAreaContainer from '../dotArtTools/DotAreaContainer';
import PaintColorContainer from '../dotArtTools/PaintColorContainer';
import PaintToolContainer from '../dotArtTools/PaintToolContainer';
import PalettesContainer from '../dotArtTools/PalettesContainer';
import RedoUndoContainer from '../dotArtTools/RedoUndoContainer';
import styled from 'styled-components';

const LeftToolBox = styled.div`
  display: flex;
  flex-direction: column;
  left: 0px;
  width: 250px;
  min-width: 250px;
  margin-left: 8px;
  margin-right: 4px;
  & > * {
    margin-bottom: 16px;
  }
`;

const LeftToolContainer = () => {
  return (
    <LeftToolBox>
      <SaveLoadContainer />
      <DotAreaContainer />
      <PaintToolContainer />
      <RedoUndoContainer />
      <PalettesContainer />
      <PaintColorContainer />
    </LeftToolBox>
  );
};

export default LeftToolContainer;
