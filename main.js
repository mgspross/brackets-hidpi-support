define(function (require, exports, module) {
    "use strict";

    var ZOOM_FACTOR = 2.0;

    var bodyZoom = ZOOM_FACTOR;
    var editorZoom = 1.0 / ZOOM_FACTOR;
    var ExtensionUtils = brackets.getModule("utils/ExtensionUtils");
    ExtensionUtils.addEmbeddedStyleSheet("body { zoom: " + bodyZoom +"}" +
        "#editor-holder { zoom: " + editorZoom + "}");
});
