"use strict";
var core_1 = require('@angular/core');
var ICheckComponent = (function () {
    function ICheckComponent() {
        this.isChecked = false;
    }
    ICheckComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: '[iCheck]',
                    styles: ["\n    :host {\n        font-family: \"Consolas\", \"Microsoft YaHei\", Arial, arial, sans-serif;\n        overflow: hidden;\n    }\n  ", "\n    :host > div > div {\n        width: 24px;\n        height: 24px;\n        display: inline-block;\n        vertical-align: middle;\n        background: url('https://cdn.rawgit.com/fronteed/icheck/1.x/skins/square/blue.png') no-repeat left;\n        background-position: 0 0;\n        cursor: pointer;\n    }\n  ", "\n    :host > div > div:hover {\n        background-position: -24px 0;\n    }\n  ", "\n    :host > div > div.disabled {\n        background-position: -72px 0;\n        cursor: default;\n    }    \n  ", "\n    :host > div > div.checked {\n        background-position: -48px 0;\n    }\n  ", "\n    :host > div > div.checked.disabled {\n        background-position: -96px 0;\n    }\n  ", "\n    :host .label {\n        display: inline-block;\n        vertical-align: middle;\n    }\n  "],
                    template: "\n    <div (click)=\"isChecked = !isChecked;\" class=\"ng2-icheck\">\n        <div [class.checked]=\"isChecked\"></div>\n        <ng-content class=\"label\"></ng-content>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    ICheckComponent.ctorParameters = function () { return []; };
    return ICheckComponent;
}());
exports.ICheckComponent = ICheckComponent;
