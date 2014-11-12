//= require js_example/sync_input_fields

describe("NS.SyncInputFields", function() {
  var sourceInput, targetInput;

  beforeEach(function() {
    sourceInput = $("<input type='text' value='sourceInput'>");
    targetInput = $("<input type='text' value='targetInput'>");
  });

  it("syncs the targetInput to sourceInput upon instantiation", function() {
    sourceInput.val("hello");

    new NS.SyncInputFields({
      sourceInput: sourceInput,
      targetInput: targetInput
    });

    expect(targetInput.val()).toEqual("hello");
  });

  it("syncs the targetInput to sourceInput", function() {
    var syncer = new NS.SyncInputFields({
      sourceInput: sourceInput,
      targetInput: targetInput
    });

    syncer.bindEvents();

    sourceInput.val("hello");
    sourceInput.trigger("change");

    expect(targetInput.val()).toEqual("hello");

    syncer.unbindEvents();
  });

  it("syncs the targetInput to sourceInput if conditionFn returns true", function() {
    var syncer = new NS.SyncInputFields({
      sourceInput: sourceInput,
      targetInput: targetInput,
      conditionFn: function() { return true; }
    });

    syncer.bindEvents();

    sourceInput.val("hello");
    sourceInput.trigger("change");

    expect(targetInput.val()).toEqual("hello");

    syncer.unbindEvents();
  });

  it("does not sync the targetInput to sourceInput if conditionFn returns false", function() {
    var syncer = new NS.SyncInputFields({
      sourceInput: sourceInput,
      targetInput: targetInput,
      conditionFn: function() { return false; }
    });

    syncer.bindEvents();

    sourceInput.val("hello");
    sourceInput.trigger("change");

    expect(targetInput.val()).toEqual("targetInput");

    syncer.unbindEvents();
  });

  it("syncs the targetInput to sourceInput when a watched element changes", function() {
    var checkbox, syncer;

    checkbox = $("<input type='checkbox'>");
    syncer = new NS.SyncInputFields({
      sourceInput: sourceInput,
      targetInput: targetInput,
      watchedElements: [checkbox]
    });

    syncer.bindEvents();

    sourceInput.val("hello");
    checkbox.trigger("change");

    expect(targetInput.val()).toEqual("hello");

    syncer.unbindEvents();
  });

  it("passes watchedElements to conditionFn", function() {
    var checkbox, syncer;

    checkbox = $("<input type='checkbox'>");
    syncer = new NS.SyncInputFields({
      sourceInput: sourceInput,
      targetInput: targetInput,
      watchedElements: [checkbox],
      conditionFn: function(watchedElements) { return watchedElements[0].prop('checked'); }
    });

    syncer.bindEvents();

    sourceInput.val("hello");
    sourceInput.trigger("change");

    expect(targetInput.val()).toEqual("targetInput");

    checkbox.prop('checked', true);
    checkbox.trigger("change");

    expect(targetInput.val()).toEqual("hello");

    syncer.unbindEvents();
  });

  it("formats the source input value when syncing to the target input", function() {
    var syncer, formatterFn;

    formatterFn = function(value) { return value + "!"; };
    syncer = new NS.SyncInputFields({
      sourceInput: sourceInput,
      targetInput: targetInput,
      formatterFn: formatterFn
    });

    syncer.bindEvents();

    sourceInput.val("hello");
    sourceInput.trigger("change");

    expect(targetInput.val()).toEqual("hello!");

    syncer.unbindEvents();
  });

});
