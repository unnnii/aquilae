/* Aquilae demo registration. No data leaves the browser. */
(function () {
  var events = (window.AQUILAE_EVENTS || []).filter(function (event) { return event.status !== "Closed"; });
  var mode = "batch";
  var eventSelect = document.querySelector("#entry-event");
  var rows = document.querySelector("#participants");
  var add = document.querySelector("[data-add-participant]");
  var count = document.querySelector("[data-participant-count]");
  var modeButtons = document.querySelectorAll("[data-mode]");

  function options() {
    return events.map(function (event) {
      var label = event.name + " (" + event.route + ")";
      return '<option value="' + event.slug + '">' + label + "</option>";
    }).join("");
  }

  function renderRows() {
    var total = rows.children.length;
    if (count) count.textContent = String(total);
    Array.prototype.forEach.call(rows.children, function (row, index) {
      var number = row.querySelector("[data-row-number]");
      if (number) number.textContent = String(index + 1).padStart(2, "0");
    });
  }

  function addRow() {
    var row = document.createElement("div");
    row.className = "participant";
    row.innerHTML =
      '<div class="field"><label>Participant name</label><input name="player_name" required autocomplete="name"></div>' +
      '<div class="field"><label>Roll number</label><input name="player_roll" required></div>' +
      '<div class="field"><label>Year</label><select name="player_year" required><option value="">Select</option><option>1st year</option><option>2nd year</option><option>3rd year</option></select></div>' +
      '<div class="field"><span data-row-number></span><button class="btn btn--secondary" type="button" data-remove-row>Remove</button></div>';
    row.querySelector("[data-remove-row]").addEventListener("click", function () {
      if (rows.children.length > 1) {
        row.remove();
        renderRows();
      }
    });
    rows.appendChild(row);
    renderRows();
  }

  if (eventSelect) eventSelect.innerHTML = '<option value="">Choose an event</option>' + options();
  if (add) add.addEventListener("click", addRow);
  addRow();

  modeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      mode = button.getAttribute("data-mode");
      modeButtons.forEach(function (other) {
        other.setAttribute("aria-pressed", String(other === button));
      });
      var hint = document.querySelector("#route-hint");
      if (hint) hint.textContent = mode === "team"
        ? "Team entry needs a captain plus the full playing squad."
        : "Batch entry lets one captain list several players.";
    });
  });

  var form = document.querySelector("#entry-form");
  if (!form) return;
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var chosen = events.filter(function (item) { return item.slug === eventSelect.value; })[0];
    var summary = document.querySelector("#entry-summary");
    var panel = document.querySelector("#entry-confirmation");
    if (!summary || !panel) return;
    var name = form.querySelector("#captain-name") ? form.querySelector("#captain-name").value : "Captain";
    summary.textContent = mode === "team"
      ? "Preview for " + (name || "the captain") + " entering " + (chosen ? chosen.name : "an event") + ". Nothing has been saved."
      : "Preview for " + (name || "the captain") + " listing " + rows.children.length + " player(s) in " + (chosen ? chosen.name : "an event") + ". Nothing has been saved.";
    panel.hidden = false;
    panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
})();
