// terminal.js — Navigation, command-line input, and interactivity

(function () {

  // ── Helpers ──────────────────────────────────────────────
  function showSection(name) {
    document.querySelectorAll('.section').forEach(el => {
      el.classList.remove('active');
      el.classList.add('hidden');
    });
    const target = document.getElementById('section-' + name);
    if (!target) return;
    target.innerHTML = window.SECTIONS[name] || '<p>Section not found.</p>';
    target.classList.remove('hidden');
    target.classList.add('active');

    // Animate skill bars if switching to skills
    if (name === 'skills') {
      setTimeout(() => window.animateSkillBars && window.animateSkillBars(), 100);
    }

    // Highlight active nav button
    document.querySelectorAll('.nav-cmd').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.section === name);
    });
  }

  // ── Command definitions ───────────────────────────────────
  const COMMANDS = {
    help: () => `
      <div class="help-output">
        <div><span class="help-cmd">about</span><span class="help-sep">──</span><span class="help-desc">who I am</span></div>
        <div><span class="help-cmd">experience</span><span class="help-sep">──</span><span class="help-desc">work history</span></div>
        <div><span class="help-cmd">skills</span><span class="help-sep">──</span><span class="help-desc">tech stack &amp; proficiencies</span></div>
        <div><span class="help-cmd">projects</span><span class="help-sep">──</span><span class="help-desc">open-source work</span></div>
        <div><span class="help-cmd">articles</span><span class="help-sep">──</span><span class="help-desc">articles &amp; write-ups</span></div>
        <div><span class="help-cmd">whoami</span><span class="help-sep">──</span><span class="help-desc">print user info</span></div>
        <div><span class="help-cmd">uname -a</span><span class="help-sep">──</span><span class="help-desc">system info</span></div>
        <div><span class="help-cmd">clear</span><span class="help-sep">──</span><span class="help-desc">clear the terminal</span></div>
        <div><span class="help-cmd">ls</span><span class="help-sep">──</span><span class="help-desc">list sections</span></div>
        <div><span class="help-cmd">cat contact.txt</span><span class="help-sep">──</span><span class="help-desc">contact info</span></div>
      </div>`,
    whoami: () => '<div class="cmd-response">janakiram — Embedded Linux &amp; Kernel Developer, Hyderabad, India</div>',
    'uname -a': () => '<div class="cmd-response">Linux kernel-dev 6.6.21-rt26 #1 SMP PREEMPT_DYNAMIC Thu Jun 5 2026 armv7l GNU/Linux</div>',
    ls: () => '<div class="cmd-response">about/&nbsp;&nbsp; experience/&nbsp;&nbsp; skills/&nbsp;&nbsp; projects/&nbsp;&nbsp; articles/&nbsp;&nbsp; contact.txt</div>',
    'cat contact.txt': () => `
      <div class="cmd-response">
        email   : you@example.com<br>
        github  : github.com/yourhandle<br>
        linkedin: linkedin.com/in/yourhandle<br>
        location: Hyderabad, India
      </div>`,
    pwd: () => '<div class="cmd-response">/home/janakiram/portfolio</div>',
    date: () => `<div class="cmd-response">${new Date().toString()}</div>`,
    uptime: () => '<div class="cmd-response">up 8 years,  3 days,  2 users,  load average: 0.42, 0.35, 0.28</div>',
    clear: null, // handled separately
  };

  // Nav sections also work as commands
  ['about','experience','skills','projects','articles'].forEach(s => {
    COMMANDS[s] = () => { showSection(s); return null; };
    COMMANDS['./' + s] = COMMANDS[s];
    COMMANDS['cd ' + s] = COMMANDS[s];
  });

  // ── Command input handler ─────────────────────────────────
  const input = document.getElementById('cmd-input');
  const body  = document.getElementById('terminal-body');

  function injectOutput(html) {
    const active = document.querySelector('.section.active');
    if (!active) return;
    const div = document.createElement('div');
    div.innerHTML = html;
    div.style.marginTop = '12px';
    active.appendChild(div);
    body.scrollTop = body.scrollHeight;
  }

  function handleCommand(raw) {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    // Echo the command
    const echo = document.createElement('p');
    echo.className = 'cmd-echo';
    echo.textContent = cmd;
    const active = document.querySelector('.section.active');
    if (active) active.appendChild(echo);

    if (cmd === 'clear') {
      if (active) active.innerHTML = '';
      return;
    }

    const fn = COMMANDS[cmd];
    if (fn) {
      const out = fn();
      if (out) injectOutput(out);
    } else {
      injectOutput(`<div class="cmd-response" style="color:var(--red)">bash: ${raw}: command not found. Type <span style="color:var(--green)">help</span> for available commands.</div>`);
    }
  }

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const val = input.value;
      input.value = '';
      handleCommand(val);
    }
  });

  // ── Nav button clicks ─────────────────────────────────────
  document.querySelectorAll('.nav-cmd').forEach(btn => {
    btn.addEventListener('click', () => showSection(btn.dataset.section));
  });

  // ── Init: load about section ──────────────────────────────
  showSection('about');

  // Focus input on any click
  document.getElementById('terminal').addEventListener('click', () => input.focus());

})();
