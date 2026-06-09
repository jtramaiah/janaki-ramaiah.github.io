// boot.js — Simulates a Linux kernel boot sequence
(function () {
  const bootLines = [
    { text: '[    0.000000] Linux version 6.6.21-rt26 (janakiram@kernel-dev) (gcc version 13.2.0)', cls: 'info' },
    { text: '[    0.000000] Machine model: TI AM335x BeagleBone Black', cls: 'ok' },
    { text: '[    0.001234] earlycon: ns16550a0 at MMIO 0x44e09000', cls: 'info' },
    { text: '[    0.012419] Memory: 512MB RAM detected, reserving 64MB for crashkernel', cls: 'ok' },
    { text: '[    0.023011] SLUB: HWalign=64, Order=0-3, MinObjects=0, CPUs=1, Nodes=1', cls: 'info' },
    { text: '[    0.034902] rcu: Hierarchical RCU implementation.', cls: 'info' },
    { text: '[    0.041233] platform ocp: Fixed dependency cycle(s) with /ocp/scm@44e10800', cls: 'warn' },
    { text: '[    0.056781] kexec: loaded capture kernel at 0xc4000000', cls: 'ok' },
    { text: '[    0.071002] crash_dump: vmcore interface registered', cls: 'ok' },
    { text: '[    0.082441] EXT4-fs (mmcblk0p2): mounted filesystem', cls: 'ok' },
    { text: '[    0.093187] systemd[1]: Starting portfolio.service...', cls: 'info' },
    { text: '[    0.104330] kdump: registered on /dev/mem', cls: 'ok' },
    { text: '[    0.115920] portfolio[42]: Janakiram — Embedded Linux & Kernel Developer', cls: 'ok' },
    { text: '[    0.121000] portfolio[42]: all modules loaded. welcome.', cls: 'ok' },
  ];

  const log = document.getElementById('boot-log');
  let i = 0;

  function printLine() {
    if (i >= bootLines.length) {
      setTimeout(finishBoot, 600);
      return;
    }
    const span = document.createElement('span');
    span.className = 'boot-line ' + bootLines[i].cls;
    span.textContent = bootLines[i].text;
    log.appendChild(span);
    log.scrollTop = log.scrollHeight;
    i++;
    const delay = 60 + Math.random() * 80;
    setTimeout(printLine, delay);
  }

  function finishBoot() {
    const bootScreen = document.getElementById('boot-screen');
    bootScreen.style.transition = 'opacity 0.5s';
    bootScreen.style.opacity = '0';
    setTimeout(() => {
      bootScreen.style.display = 'none';
      const terminal = document.getElementById('terminal');
      terminal.classList.remove('hidden');
      // Trigger skill bar animation after section loads
      setTimeout(() => window.animateSkillBars && window.animateSkillBars(), 400);
    }, 500);
  }

  // Start boot after a brief pause
  setTimeout(printLine, 300);
})();
