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

    sourceInput.val("hello");

    syncer.execute();

    expect(targetInput.val()).toEqual("hello");
  });

  it("syncs the targetInput to sourceInput if conditionFn returns true", function() {
    var syncer = new NS.SyncInputFields({
      sourceInput: sourceInput,
      targetInput: targetInput,
      conditionFn: function() { return true; }
    });

    sourceInput.val("hello");

    syncer.execute();

    expect(targetInput.val()).toEqual("hello");
  });

  it("does not sync the targetInput to sourceInput if conditionFn returns false", function() {
    var syncer = new NS.SyncInputFields({
      sourceInput: sourceInput,
      targetInput: targetInput,
      conditionFn: function() { return false; }
    });

    sourceInput.val("hello");

    syncer.execute();

    expect(targetInput.val()).toEqual("targetInput");
  });

  it("formats the source input value when syncing to the target input", function() {
    var syncer, formatterFn;

    formatterFn = function(value) { return value + "!"; };
    syncer = new NS.SyncInputFields({
      sourceInput: sourceInput,
      targetInput: targetInput,
      formatterFn: formatterFn
    });

    sourceInput.val("hello");

    syncer.execute();

    expect(targetInput.val()).toEqual("hello!");
  });

});
