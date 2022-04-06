export const objToCssString = (obj: Record<string, unknown>) =>
    Object.entries(obj).reduce((acc, [key, value]) => acc + `${key}:${value};`,'');

export const hexToRgb = (hex: string) => {
    const hexColor = hex.replace('#', '');

    if (hexColor.length === 6) {
        const [r1, r2, g1, g2, b1, b2] = hexColor;
        const r = parseInt(r1 + r2, 16);
        const g = parseInt(g1 + g2, 16);
        const b = parseInt(b1 + b2, 16);
        return [r, g, b].join();
    }

    if (hexColor.length === 3) {
        const [r1, g1, b1] = hexColor;
        const r = parseInt(r1, 16);
        const g = parseInt(g1, 16);
        const b = parseInt(b1, 16);
        return [r, g, b].join();
    }

    return [0, 0, 0].join();
}

export const hexToRgba = (hex: string, opacity: number) => [hexToRgb(hex), opacity].join();

export const getBoxShadow = ({ x = 0, y = 0, blur = 0, spread = 0, color = '0,0,0,1' }) =>
    `${x}px ${y}px ${blur}px ${spread}px rgba(${color})`;

/*
* Вычислить разницу между самым широким и нашим элементами. 300 - 210 = 90.
Посчитать оставшийся зазор между фоном + видимая разница = 300 * 4 - (210 * 4 + 90) = 270
Суммировать зазор слева и справа и разделить на 2 - получим значение несмещенного центра. (270 + 90) / 2 = 180
Поделить пополам - получим расстояние от смещенного центра до несмещенного. 180/ 2 = 90
Далее наше значение умножить на отношение всей полосы к невидимой части. 90 * 4 / 3 = 120
И наконец разделить полученный результат на самую длинную полосу. 120 / 1200 = 0.1 = 10%
* */

export const getKeyframes = (theBiggestLineWidth: number, currentLineWidth: number, multiplier: number, keyframesName: string) => {
    const visibleWidthDiff = theBiggestLineWidth - currentLineWidth; // step 1
    const invisibleWidthDiff = (theBiggestLineWidth * multiplier) - (currentLineWidth * multiplier + visibleWidthDiff); // step 2
    const centerWithoutOffset = (visibleWidthDiff + invisibleWidthDiff) / 2; // step 3
    const centerWithOffsetToCenterWithoutOffsetDistance = centerWithoutOffset / 2; // step 4

    const visibleWidthToInvisibleWidthRatio = (theBiggestLineWidth * multiplier) / (theBiggestLineWidth * multiplier - theBiggestLineWidth); // step 5
    const finalValue = centerWithOffsetToCenterWithoutOffsetDistance * visibleWidthToInvisibleWidthRatio; // step 5

    const startPercent = finalValue / (theBiggestLineWidth * multiplier) * 100;
    const finishPercent = currentLineWidth / theBiggestLineWidth * 100 + startPercent;

    return `
      @keyframes ${keyframesName} {
        0% {
          background-position-x: 100%;
        }
        
        ${theBiggestLineWidth !== currentLineWidth ? `
          ${startPercent}% {
            background-position-x: 100%;
          }
      
          ${finishPercent}% {
            background-position-x: 0;
          }
        `: ''}
      
        100% {
          background-position-x: 0;
        }
      }
  `;
};

export const generateStylesForAnimation = ({
    id,
    containerWidth,
    lineWidth,
    multiplier,
    animationName,
   }) => {
    const styleTag = document.getElementById(id);
    const keyframe = getKeyframes(containerWidth, lineWidth, multiplier, animationName);

    if (styleTag) {
        styleTag.innerHTML = keyframe;
    } else {
        const newStyleTag = document.createElement('style');
        newStyleTag.id = id;
        newStyleTag.innerHTML = keyframe;
        document.head.appendChild(newStyleTag);
    }
}
