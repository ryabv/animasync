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
