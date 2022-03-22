import './css/MenuPath.css';
import _ from 'lodash';

const MenuPath = ({ util, menuReader }) => ({ item, onClick }) => {

    if (!item.labelSingleLine) return null;
    if (item.items) return null;

    const pathIncrements = util.inflate(item.pathArray);
    pathIncrements.shift(); // remove ["HOME"]

    const items = pathIncrements.map(menuReader.getMenuItem);


    const pathItems = items.map(item => {
        const { labelSingleLine, backColor, textColor } = item;
        const label = labelSingleLine.length ? labelSingleLine : '(BLANK)';
        const className = `path-segment back-color-${backColor} text-color-${textColor}`.toLowerCase();
        return <span className={className}>{label}</span>
    });

    const isPenultimate = i => i === pathItems.length - 1;
    const fullPaths = pathItems.flatMap((el, i) => [el, isPenultimate(i) ? null : ' ▶︎ ']);

    const keywords = item.keywords?.map(keyword => {
        return <span className="keyword">{keyword}</span>
    });

    return <div className="path" onClick={onClick}>{fullPaths}{keywords}</div>
}

export default MenuPath;
