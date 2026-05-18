/**
 * Target Tracking — Pre-Training Assessment
 * Baseline check: what do solution specialists & sales know TODAY?
 *
 * HOW TO USE:
 * 1. Go to https://script.google.com
 * 2. Create a new project
 * 3. Paste this entire script
 * 4. Click "Run" (the play button)
 * 5. Authorize when prompted
 * 6. Check the Logs (View > Logs) for the form URL
 *
 * IMPORTANT: Send this form BEFORE the training session.
 * Results will help calibrate the depth of the training.
 */

function myFunction() {
  var form = FormApp.create('Target Tracking — Pre-Training Assessment');

  form.setDescription(
    'Quick anonymous check before the training session. No pressure — we want to understand where to focus. Takes ~3 minutes.'
  );

  // Anonymous
  form.setCollectEmail(false);
  form.setRequireLogin(false);

  // Make it a quiz so we can score knowledge questions
  form.setIsQuiz(true);

  // ──────────────────────────────────────────────────
  // SECTION 1: THEORY (Scope 1/2/3, emissions basics)
  // ──────────────────────────────────────────────────

  form.addSectionHeaderItem()
    .setTitle('Part 1: Theory')
    .setHelpText('4 quick questions about emissions and environmental targets.');

  // Q1 — Scope 1
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('A factory burns natural gas in its own boiler. Those emissions are classified as:')
    .setChoices([
      q1.createChoice('Scope 1', true),
      q1.createChoice('Scope 2', false),
      q1.createChoice('Scope 3', false),
      q1.createChoice('Not sure', false)
    ])
    .setRequired(true);
  q1.setPoints(1);

  // Q2 — Scope 2
  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('A company buys conventional electricity from the grid. The associated emissions are:')
    .setChoices([
      q2.createChoice('Scope 1', false),
      q2.createChoice('Scope 2', true),
      q2.createChoice('Scope 3', false),
      q2.createChoice('Not sure', false)
    ])
    .setRequired(true);
  q2.setPoints(1);

  // Q3 — Conversion/Emission factors
  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('What is the purpose of an emission factor (conversion factor) in carbon tracking?')
    .setChoices([
      q3.createChoice('Convert currency to carbon credits', false),
      q3.createChoice('Convert activity data (e.g. m³ of gas) into CO₂ equivalent emissions', true),
      q3.createChoice('Calculate the electricity price per site', false),
      q3.createChoice('Not sure', false)
    ])
    .setRequired(true);
  q3.setPoints(1);

  // Q4 — What does "on-track" mean?
  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('A company set a water reduction target for 2030. What does "on-track" mean?')
    .setChoices([
      q4.createChoice('They already reached the goal', false),
      q4.createChoice('Their current forecast (with planned projects) will meet the target', true),
      q4.createChoice('They submitted the report to CDP', false),
      q4.createChoice('Not sure', false)
    ])
    .setRequired(true);
  q4.setPoints(1);

  // ──────────────────────────────────────────────────
  // SECTION 2: PLATFORM CAPABILITIES
  // ──────────────────────────────────────────────────

  form.addSectionHeaderItem()
    .setTitle('Part 2: Waterplan Platform')
    .setHelpText('4 questions about what Target Tracking can do in the platform.');

  // Q5 — Target levels
  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('At which levels can you create targets in Waterplan?')
    .setChoices([
      q5.createChoice('Only at company level', false),
      q5.createChoice('Company and site level', false),
      q5.createChoice('Company, site group, and site level', true),
      q5.createChoice('Not sure', false)
    ])
    .setRequired(true);
  q5.setPoints(1);

  // Q6 — Scenarios
  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('A client asks: "If I only implement 3 approved projects, will I reach my target?" What do you show them?')
    .setChoices([
      q6.createChoice('The Evolution Chart', false),
      q6.createChoice('A scenario with those 3 projects and the Scenario Gap Chart', true),
      q6.createChoice('A filtered Excel export', false),
      q6.createChoice('Not sure', false)
    ])
    .setRequired(true);
  q6.setPoints(1);

  // Q7 — Target Locking
  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('What does "Target Locking" do in Waterplan?')
    .setChoices([
      q7.createChoice('Hides the target from other users', false),
      q7.createChoice('Freezes the target so it cannot be edited (corporate governance)', true),
      q7.createChoice('Blocks the creation of new targets', false),
      q7.createChoice('Not sure', false)
    ])
    .setRequired(true);
  q7.setPoints(1);

  // Q8 — Carbon vs Water targets
  var q8 = form.addMultipleChoiceItem();
  q8.setTitle("What extra step is needed for carbon/energy targets that water targets don't require?")
    .setChoices([
      q8.createChoice('Creating a scenario', false),
      q8.createChoice('Loading conversion factors (emission factors)', true),
      q8.createChoice('Having at least 5 sites', false),
      q8.createChoice('Not sure', false)
    ])
    .setRequired(true);
  q8.setPoints(1);

  // ──────────────────────────────────────────────────
  // SECTION 3: SELF-ASSESSMENT (not scored)
  // ──────────────────────────────────────────────────

  form.addSectionHeaderItem()
    .setTitle('Part 3: Self-Assessment')
    .setHelpText('How do you feel about these topics today?');

  // Q9 — Confidence level
  var q9 = form.addScaleItem();
  q9.setTitle('Right now, how confident are you to explain Target Tracking to a client?')
    .setBounds(1, 5)
    .setLabels('Not confident at all', 'I could do a demo today')
    .setRequired(true);

  // Q10 — What do you want to learn?
  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('What would be most valuable for you in this training?')
    .setChoices([
      q10.createChoice('Understanding scope 1/2/3 theory better'),
      q10.createChoice('Learning how to navigate the platform and do a demo'),
      q10.createChoice('Knowing what to say to clients (sales pitch)'),
      q10.createChoice('All of the above')
    ])
    .setRequired(true);

  // Log the URLs
  var editUrl = form.getEditUrl();
  var publishedUrl = form.getPublishedUrl();

  Logger.log('=== PRE-TRAINING FORM CREATED ===');
  Logger.log('Edit URL (for you):    ' + editUrl);
  Logger.log('Published URL (share): ' + publishedUrl);
  Logger.log('=================================');
  Logger.log('');
  Logger.log('SCORING: Questions 1-8 are scored (1 pt each, max 8).');
  Logger.log('Questions 9-10 are self-assessment (not scored).');
  Logger.log('');
  Logger.log('TIP: Send this form 1-2 days before the training.');
  Logger.log('Review results to calibrate the session depth.');

  return form;
}
