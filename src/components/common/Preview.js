import React from 'react';
import {
  generateAnimationCSSData,
  generatePixelDrawCss,
} from '../../util/cssParser';
import Animation from './Animation';

const Preview = ({
  dotSet,
  dotList,
  column,
  size,
  animation,
  duration,
  zIndex,
  opacity,
}) => {
  const cellSize = typeof size === 'string' ? parseFloat(size) : size;

  const generatePreview = () => {
    const columns = column;
    let cssString;
    let animationData;
    let cssOpacity = opacity ? opacity : 1;

    if (animation) {
      animationData = generateAnimationCSSData(dotList, columns, cellSize);
      return <Animation boxShadow={animationData} duration={duration} />;
    } else {
      cssString = generatePixelDrawCss(dotSet, columns, cellSize, 'string');

      const styles = {
        previewWrapper: {
          position: 'absolute',
          height: cellSize,
          width: cellSize,
          boxShadow: cssString,
          MozBoxShadow: cssString,
          WebkitBoxShadow: cssString,
          border: '0px',
          zIndex: zIndex ? zIndex : '',
          opacity: cssOpacity,
        },
      };
      return <div style={styles.previewWrapper} />;
    }
  };

  const style = {
    position: 'relative',
    top: `-${cellSize}px`,
    left: `-${cellSize}px`,
  };

  return (
    <div className="preview" style={style}>
      {generatePreview()}
    </div>
  );
};

export default React.memo(Preview);
