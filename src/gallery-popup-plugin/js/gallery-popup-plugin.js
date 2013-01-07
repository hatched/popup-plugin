/**
  Plug this plugin into any YUI plugin host to give it popup support.
 
  @class PopupPlugin
  @module gallery-popup-plugin
  @namespace Plugin
  @constructor
*/
function PopupPlugin() {
    PopupPlugin.superclass.constructor.apply(this, arguments);
}

/**
  Plugin name

  @property NAME
  @type string
*/
PopupPlugin.NAME = "popup-plugin";

/**
  Plugin namespace on the host object

  @property NS
  @type string
*/
PopupPlugin.NS = "popup";

/**
  Static property to define plugin attributes

  @property ATTRS
  @type object
  @static
*/
PopupPlugin.ATTRS = {
    /**
      Indicates if the host should be visible by default

      @attribute visible
      @public
      @default false
      @type boolean
    */
    visible: {
        value: false
    }
};

Y.extend(PopupPlugin, Y.Plugin.Base, {

    /**
      Sets up the plugin on instantiation

      @method initializer
      @private
    */
    initializer: function() {
        Y.log('initializer', 'info', this.name);
    },

    /**
      Cleans up the plugin on destruction

      @method destructor
      @private
    */
    destructor: function() {
        Y.log('destructor', 'info', this.name);
    }

});

Y.namespace('Plugin').PopupPlugin = PopupPlugin;