(function(window, _) {
  "use strict";

  function SyncInputFields(options) {
    this.sourceInput = options.sourceInput;
    this.targetInput = options.targetInput;
    this.conditionFn = options.conditionFn || function() { return true; };
    this.formatterFn = options.formatterFn || function(x) { return x; };
    this.watchedElements = options.watchedElements || [];
    this._init();
  }

  SyncInputFields.prototype = {
    bindEvents: function() {
      _(this.elements).each(function(elem) {
        elem.on("change", _.bind(this._syncInput, this));
      }, this);
    },

    unbindEvents: function() {
      _(this.elements).each(function(elem) {
        elem.off("change");
      });
    },

    _init: function() {
      this._setElements();
      this._syncInput();
    },

    _syncInput: function() {
      if(this.conditionFn(this.watchedElements)) {
        this.targetInput.val(this.formatterFn(this.sourceInput.val()));
      }
    },

    _setElements: function() {
      this.elements = this.watchedElements.concat(this.sourceInput);
    }
  };

  window.NS = window.NS || {};
  window.NS.SyncInputFields = SyncInputFields;
})(window, _);
