YUI Popup Plugin
============

Plug this plugin into any YUI plugin host to give it popup support.

Notes
----
*   Can be plugged into anything that is a plugin host that has a UI representation

Dependencies
----
*   plugin

Configuration & Use
---------
*   hideOn: Configuration object for hiding the module
*   showOn: Configuration object for showing the module
*   target: Anything that can fire an event
*   event: The event to listen for

```javascript
var calendar = new Y.Calendar(),
    myNode = Y.one('#myNode'),
    config = {
        hideOn: {
            target: Y.one('button'),
            event: 'click'
        },
        showOn: {
            target: sliderInstance,
            event: 'move'
        },
        visibility: false
    };

calendar.plug(Y.Plugin.Popup, config );

myNode.plug(Y.Plugin.popup, config);
```

To Do
-----
*   Finish the plugin

Feature request, bug reports and pull requests welcome!