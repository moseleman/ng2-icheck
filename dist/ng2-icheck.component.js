"use strict";
var core_1 = require('@angular/core');
var ICheckComponent = (function () {
    function ICheckComponent() {
    }
    ICheckComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: '[iCheck]',
                    template: "\n        <!--<div (click)=\"isChecked = !isChecked;\" class=\"ng2-icheck\">-->\n            <!--<div [class.checked]=\"isChecked\"></div>-->\n            <!--&lt;!&ndash;<ng-content class=\"label\"></ng-content>&ndash;&gt;-->\n        <!--</div>-->\n        <div>ciao</div>\n    ",
                    styles: [
                        "\n            :host {\n                font-family: \"Consolas\", \"Microsoft YaHei\", Arial, arial, sans-serif;\n                overflow: hidden;\n            }\n        ",
                        "\n            :host .checkbox {\n                width: 22px;\n                height: 22px;\n                display: inline-block;\n                vertical-align: middle;\n                background: url('ng2-icheck.png') no-repeat left;\n            }\n        ",
                        "\n            :host .checkbox.checked {\n              background-position: -48px 0;\n            }\n        ",
                        "\n            :host .label {\n                display: inline-block;\n                vertical-align: middle;\n            }\n        ",
                    ]
                },] },
    ];
    /** @nocollapse */
    ICheckComponent.ctorParameters = function () { return []; };
    return ICheckComponent;
}());
exports.ICheckComponent = ICheckComponent;
