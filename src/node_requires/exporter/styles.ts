const {styleToTextStyle} = require('./../styleUtils');
export const stringifyStyles = (proj: IProject): string => {
    var styles = '';
    for (const styl in proj.styles) {
        var s = proj.styles[styl],
            o = styleToTextStyle(s);
        styles += `
ct.styles.new(
    "${s.name}",
    ${JSON.stringify(o, null, '    ')});
`;
    }
    return styles;
};

