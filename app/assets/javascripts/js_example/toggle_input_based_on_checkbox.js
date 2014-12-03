(function(window, _) {
  "use strict";

  function ToggleInputBasedOnCheckbox(options) {
    this.input = options.input;
    this.checkbox = options.checkbox;
    this._init();
  }

  ToggleInputBasedOnCheckbox.prototype = {
    execute: function() {
      var disabled = this.checkbox.prop("checked");
      this.input.prop("disabled", disabled);
    },

    _init: function() {
      this.execute();
    }
  };

  window.NS = window.NS || {};
  window.NS.ToggleInputBasedOnCheckbox = ToggleInputBasedOnCheckbox;
})(window, _);
