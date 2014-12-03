//= require js_example/toggle_input_based_on_checkbox
//= require jasmine-jquery

describe("NS.ToggleInputBasedOnCheckbox", function() {
  var input, checkbox, toggler;

  beforeEach(function() {
    input = $("<input type='text'>");
    checkbox = $("<input type='checkbox'>");
  });

  it("disables the input if the checkbox is checked upon instantiation", function() {
    checkbox.prop("checked", true);

    new NS.ToggleInputBasedOnCheckbox({
      input: input,
      checkbox: checkbox
    });

    expect(input).toBeDisabled();
  });

  describe("after binding to events", function() {
    it("disables the input if the checkbox is checked", function() {
      toggler = new NS.ToggleInputBasedOnCheckbox({
        input: input,
        checkbox: checkbox
      });

      checkbox.prop("checked", true);

      toggler.execute();

      expect(input).toBeDisabled();
    });

    it("enables the input if the checkbox is unchecked", function() {
      toggler = new NS.ToggleInputBasedOnCheckbox({
        input: input,
        checkbox: checkbox
      });

      checkbox.prop("checked", true);
      toggler.execute();

      checkbox.prop("checked", false);
      toggler.execute();

      expect(input).not.toBeDisabled();
    });
  });
});
