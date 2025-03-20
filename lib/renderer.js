"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const local_components_1 = require("@getflywheel/local-components");
module.exports = function (context) {
    const hooks = context.hooks;
    hooks.addContent('SiteInfo_Top_TopRight', (site) => {
        return (React.createElement(local_components_1.TextButton, { onClick: () => require('electron').shell.openExternal(`phpstorm://open?file=${site.path + '/app/public/'}`) }, "Open in PHPStorm"));
    });
};
//# sourceMappingURL=renderer.js.map