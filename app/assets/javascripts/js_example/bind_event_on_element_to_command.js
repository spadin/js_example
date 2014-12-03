(function(window, _) {
  "use strict";

  function BindEventOnElementToCommand(options) {
    this.eventName = options.eventName;
    this.element = options.element;
    this.command = options.command;
  }

  BindEventOnElementToCommand.prototype = {
    execute: function() {
      this.element.on(this.eventName, _(this._executeCommand).bind(this));
    },

    _executeCommand: function() {
      this.command.execute();
    }
  };

  window.NS = window.NS || {};
  window.NS.BindEventOnElementToCommand = BindEventOnElementToCommand;
})(window, _);
