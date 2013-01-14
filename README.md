YUI Popup Plugin
============

Plug this plugin into any YUI plugin host to give it popup support.

Notes
----
*   Can be plugged into anything that is a plugin host that has a UI representation
*   hideOn and showOn follow a similar syntax to widget-autohide

Dependencies
----
*   plugin
*   widget-position
*   widget-position-align
*   widget-autohide

Configuration & Use
---------
*   visible: Boolean value which determines if the host is visible by default
*   hideOn: Configuration array for hiding the module - similar to widget-autohide syntax
*   showOn: Configuration array for showing the module - similar to widget-autohide syntax
*   target: Anything that can fire an event (node, eventTarget)
*   eventName: The event to listen for
*   keyCode: the keycode to listen for on the target

```javascript
var calendar = new Y.Calendar(),
    myNode = Y.one('#myNode'),
    config = {
        visible: false,
        showOn: [
            { target: Y.one('button.show'), eventName: 'click' }
        ],
        hideOn: [
            { target: Y.one('document'), eventName: 'mousedownoutside' }
        ]
    };

calendar.plug(Y.Plugin.Popup, config );

myNode.plug(Y.Plugin.popup, config);
```

To Do
-----
*   Finish the plugin
*   Look into refactoring widget positioning modules to use in this module
    *   http://yuilibrary.com/projects/yui3/ticket/2533054
    *   http://yuilibrary.com/projects/yui3/ticket/2531095
    *   http://yuilibrary.com/projects/yui3/ticket/2531355


Feature request, bug reports and pull requests welcome!