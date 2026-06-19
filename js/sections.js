// sections.js — All section HTML content. Edit this file to customise your portfolio.

window.SECTIONS = {

  about: `
    <p class="cmd-echo">cat about.txt</p>
    <h2 class="sec-title">JANAKI RAMAIAH THOTA</h2>
    <hr class="sec-divider">
    <div class="about-grid">
      <div class="about-meta">
        <div class="meta-line"><span class="key">name      :</span> Janaki Ramaiah Thota</div>
        <div class="meta-line"><span class="key">role      :</span> Lead Engineer &middot; Embedded Firmware &amp; Device Drivers</div>
        <div class="meta-line"><span class="key">exp       :</span> 10+ yrs &mdash; Bluetooth / UWB firmware, on/off-chip peripheral drivers</div>
        <div class="meta-line"><span class="key">stack     :</span> Embedded C &middot; I²C / SPI / UART &middot; Qualcomm QCC / WCN</div>
        <div class="meta-line"><span class="key">interests :</span> Linux kernel internals &amp; debugging</div>
        <div class="meta-line"><span class="key">location  :</span> Hyderabad, India</div>
        <div class="meta-line"><span class="key">email     :</span> <a href="mailto:jt.ramaiah@gmail.com">jt.ramaiah@gmail.com</a></div>
        <div class="meta-line"><span class="key">github    :</span> <a href="https://github.com/janaki-ramaiah-thota" target="_blank">github.com/janaki-ramaiah-thota</a></div>
        <div class="meta-line"><span class="key">linkedin  :</span> <a href="https://linkedin.com/in/thota-janaki-ramaiah" target="_blank">linkedin.com/in/thota-janaki-ramaiah</a></div>
      </div>
      <div class="about-ascii">
 ╔═══════════════╗
 ║   J · R · T   ║
 ║  firmware-dev ║
 ╚═══════════════╝
      </div>
    </div>
    <p class="about-bio">
      Embedded software engineer with 10+ years building firmware and device
      drivers across Qualcomm Bluetooth / UWB chipsets and microcontroller
      platforms — from sports earbuds and headsets to host-side Linux
      bring-up. Currently a Lead Engineer on Qualcomm platforms at ThunderSoft.
      I like working close to the hardware, owning features end to end, and
      digging into Linux at the source level — process lifecycle, memory
      management, and the scheduler. Understanding systems deeply, and
      teaching what I learn, is the part I enjoy most.
    </p>
  `,

  experience: `
    <p class="cmd-echo">cat experience.log</p>
    <h2 class="sec-title">WORK EXPERIENCE</h2>
    <hr class="sec-divider">
    <div class="exp-list">

      <div class="exp-item">
        <div class="exp-header">
          <span class="exp-role">Lead Engineer</span>
          <span class="exp-period">Feb 2022 — present</span>
        </div>
        <div class="exp-company">ThunderSoft India Pvt Ltd · Client: Qualcomm · Hyderabad, India</div>
        <ul class="exp-desc">
          <li>Built a unified interface synchronising SoC access for the Bluetooth and UWB host subsystems (HALs)</li>
          <li>Brought up the WCN6750 Bluetooth device over UART on a new Qualcomm Linux platform</li>
          <li>Developed <code>nvmtool</code> to update the BD_ADDR tag in the firmware NVM binary, plus a systemd service that assigns a unique BD address at boot</li>
          <li>Upstreamed the platform changes into the mainline Linux kernel</li>
          <li>Built real-time load generation and DMIPS benchmarking (stress-ng, FFT) to validate a critical performance use case</li>
        </ul>
      </div>

      <div class="exp-item">
        <div class="exp-header">
          <span class="exp-role">Senior Software Engineer</span>
          <span class="exp-period">Jul 2018 — Jan 2022</span>
        </div>
        <div class="exp-company">Global Edge Software Ltd (Capgemini) · Clients: Qualcomm, Logitech · Hyderabad, India</div>
        <ul class="exp-desc">
          <li>Implemented custom Bluetooth firmware for sports earbuds on Qualcomm QCC5141: peer-command sync, DAC gain by volume table, manufacturing test commands, app-comms, sound DFU image generation, factory reset, button/UX customisation, auto power-off</li>
          <li>Implemented system firmware for a sports headset on QCC5126: magnetic-latch attach/detach, battery temperature via NTC, audio prompts &amp; tones, dormant (system sleep), and an accelerometer driver</li>
          <li>Owned requirements, implementation, unit testing, release builds, and field issue debugging across both programs</li>
        </ul>
      </div>

      <div class="exp-item">
        <div class="exp-header">
          <span class="exp-role">Software Engineer</span>
          <span class="exp-period">Aug 2015 — Jun 2018</span>
        </div>
        <div class="exp-company">Global Edge Software Ltd · Client: Qualcomm · India</div>
        <ul class="exp-desc">
          <li>Implemented Low-Power Mode (LPM) and HCI RAM-dump-in-LPM in Bluetooth firmware to cut idle power on an Android TV host; controller-side packet filtering via VS command / NVM, with crash-time host wake-up and transport resume</li>
          <li>Developed and validated BSP drivers for the LPC1343 SoC: GPIO, ADC, PWM, UART, SPI, I²C</li>
          <li>Built an I²C client driver for an AT24C02 EEPROM (cross-toolchain + TFTP boot) — first hands-on Linux device-driver work</li>
        </ul>
      </div>

    </div>
  `,

  skills: `
    <p class="cmd-echo">lsmod --skills</p>
    <h2 class="sec-title">SKILLS &amp; TECH STACK</h2>
    <hr class="sec-divider">
    <div class="skills-grid" id="skills-grid">

      <div class="skill-group">
        <div class="skill-group-title">Firmware &amp; Embedded</div>
        <div class="skill-bar-row"><div class="skill-bar-label"><span>Embedded C</span><span>95%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-pct="95"></div></div></div>
        <div class="skill-bar-row"><div class="skill-bar-label"><span>Bluetooth FW (Qualcomm QCC / WCN)</span><span>92%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-pct="92"></div></div></div>
        <div class="skill-bar-row"><div class="skill-bar-label"><span>Device drivers (on/off-chip peripherals)</span><span>90%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-pct="90"></div></div></div>
        <div class="skill-bar-row"><div class="skill-bar-label"><span>I²C / SPI / UART / GPIO</span><span>90%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-pct="90"></div></div></div>
        <div class="skill-bar-row"><div class="skill-bar-label"><span>Microcontrollers / RTOS (µCOS-II, QNX)</span><span>80%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-pct="80"></div></div></div>
      </div>

      <div class="skill-group">
        <div class="skill-group-title">Linux &amp; Kernel</div>
        <div class="skill-bar-row"><div class="skill-bar-label"><span>Linux Kernel Internals</span><span>85%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-pct="85"></div></div></div>
        <div class="skill-bar-row"><div class="skill-bar-label"><span>Kernel Driver Dev (char/platform)</span><span>82%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-pct="82"></div></div></div>
        <div class="skill-bar-row"><div class="skill-bar-label"><span>Device Tree / DTS</span><span>78%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-pct="78"></div></div></div>
        <div class="skill-bar-row"><div class="skill-bar-label"><span>Embedded Linux bring-up</span><span>80%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-pct="80"></div></div></div>
      </div>

      <div class="skill-group">
        <div class="skill-group-title">Platforms &amp; Toolchain</div>
        <div class="skill-bar-row"><div class="skill-bar-label"><span>Qualcomm QCC51xx / WCN67xx</span><span>90%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-pct="90"></div></div></div>
        <div class="skill-bar-row"><div class="skill-bar-label"><span>ARM Cortex-A (ARMv7)</span><span>85%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-pct="85"></div></div></div>
        <div class="skill-bar-row"><div class="skill-bar-label"><span>ARM Cortex-M / MCUs</span><span>82%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-pct="82"></div></div></div>
        <div class="skill-bar-row"><div class="skill-bar-label"><span>GCC cross-compilation (ARM32)</span><span>85%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-pct="85"></div></div></div>
      </div>

      <div class="skill-group">
        <div class="skill-group-title">Tools &amp; Debug</div>
        <div class="skill-bar-row"><div class="skill-bar-label"><span>Lauterbach Trace32</span><span>90%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-pct="90"></div></div></div>
        <div class="skill-bar-row"><div class="skill-bar-label"><span>Git / Perforce</span><span>90%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-pct="90"></div></div></div>
        <div class="skill-bar-row"><div class="skill-bar-label"><span>GDB</span><span>85%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-pct="85"></div></div></div>
        <div class="skill-bar-row"><div class="skill-bar-label"><span>Bash / Shell scripting</span><span>85%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-pct="85"></div></div></div>
        <div class="skill-bar-row"><div class="skill-bar-label"><span>Python</span><span>70%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-pct="70"></div></div></div>
      </div>

    </div>
  `,

  projects: `
    <p class="cmd-echo">ls -la ~/projects/</p>
    <h2 class="sec-title">PROJECTS</h2>
    <hr class="sec-divider">
    <div class="projects-grid">

      <div class="project-card">
        <div class="project-card-header">
          <span class="project-name">wcn6750-bt-bringup</span>
          <span class="project-badge">UPSTREAM</span>
        </div>
        <p class="project-desc">
          Brought up the WCN6750 Bluetooth device over UART on a new Qualcomm
          Linux platform. Built nvmtool to write the BD_ADDR tag into the
          firmware NVM binary and a systemd service to assign a unique address
          at boot. Changes upstreamed to the mainline kernel.
        </p>
        <div class="project-tags">
          <span class="tag">Bluetooth</span><span class="tag">UART</span>
          <span class="tag">Linux</span><span class="tag">systemd</span>
          <span class="tag">upstream</span>
        </div>
      </div>

      <div class="project-card">
        <div class="project-card-header">
          <span class="project-name">bt-uwb-soc-sync</span>
          <span class="project-badge">HAL</span>
        </div>
        <p class="project-desc">
          Unified interface giving the Bluetooth and UWB host subsystems
          synchronised, contention-free access to the SoC — coordinating two
          HALs over a shared resource.
        </p>
        <div class="project-tags">
          <span class="tag">Bluetooth</span><span class="tag">UWB</span>
          <span class="tag">HAL</span><span class="tag">SoC</span>
        </div>
      </div>

      <div class="project-card">
        <div class="project-card-header">
          <span class="project-name">qcc5141-earbuds-fw</span>
          <span class="project-badge">FIRMWARE</span>
        </div>
        <p class="project-desc">
          Custom Bluetooth firmware features for sports earbuds on Qualcomm
          QCC5141: peer-command sync, DAC gain by volume table, manufacturing
          test commands, app-comms, sound DFU generation, factory reset,
          button/UX customisation, and auto power-off.
        </p>
        <div class="project-tags">
          <span class="tag">QCC5141</span><span class="tag">Bluetooth</span>
          <span class="tag">DFU</span><span class="tag">audio</span>
        </div>
      </div>

      <div class="project-card">
        <div class="project-card-header">
          <span class="project-name">qcc5126-headset-fw</span>
          <span class="project-badge">FIRMWARE</span>
        </div>
        <p class="project-desc">
          System firmware for a sports headset on QCC5126: magnetic-latch
          attach/detach, battery temperature via NTC, audio prompts and tones,
          dormant system sleep, and an accelerometer driver.
        </p>
        <div class="project-tags">
          <span class="tag">QCC5126</span><span class="tag">sensors</span>
          <span class="tag">accelerometer</span><span class="tag">power</span>
        </div>
      </div>

      <div class="project-card">
        <div class="project-card-header">
          <span class="project-name">bt-lpm-hci-ramdump</span>
          <span class="project-badge">FIRMWARE</span>
        </div>
        <p class="project-desc">
          Low-Power Mode + HCI RAM-dump-in-LPM for Bluetooth firmware on an
          Android TV host. Controller-side packet filtering via VS command/NVM,
          plus crash-time host wake-up and transport resume to cut idle power.
        </p>
        <div class="project-tags">
          <span class="tag">Bluetooth</span><span class="tag">LPM</span>
          <span class="tag">HCI</span><span class="tag">RAM-dump</span>
        </div>
      </div>

      <div class="project-card">
        <div class="project-card-header">
          <span class="project-name">lpc1343-bsp</span>
          <span class="project-badge">BSP</span>
        </div>
        <p class="project-desc">
          BSP drivers for the LPC1343 SoC — GPIO, ADC, PWM, UART, SPI and I²C —
          developed and unit-tested against on-chip peripherals.
        </p>
        <div class="project-tags">
          <span class="tag">LPC1343</span><span class="tag">BSP</span>
          <span class="tag">ADC</span><span class="tag">PWM</span>
        </div>
      </div>

    </div>
  `,

  articles: `
    <p class="cmd-echo">ls -lt ~/articles/ | head -10</p>
    <h2 class="sec-title">ARTICLES / NOTES</h2>
    <hr class="sec-divider">
    <div class="blog-list">

      <div class="blog-post">
        <span class="blog-date">2026-05-18</span>
        <div class="blog-content">
          <div class="blog-title">Understanding the Linux process lifecycle: fork → execve → ELF → CRT</div>
          <div class="blog-excerpt">A deep dive into what actually happens from the moment a shell forks until your main() runs — covering copy_process(), do_execve(), the ELF loader, and dynamic linker internals.</div>
          <div class="blog-tags-row"><span class="tag">kernel</span><span class="tag">process</span><span class="tag">ELF</span></div>
          <div class="note-links">
            <a href="viewer.html?file=notes/process-lifecycle.md" target="_blank">→ read note (.md)</a>
          </div>
        </div>
      </div>

      <div class="blog-post">
        <span class="blog-date">2025-12-10</span>
        <div class="blog-content">
          <div class="blog-title">Linux memory management internals for embedded developers</div>
          <div class="blog-excerpt">The page allocator, slab/slub, and vmalloc zones explained for a memory-constrained ARM target — with practical commands to inspect each layer.</div>
          <div class="blog-tags-row"><span class="tag">mm</span><span class="tag">slab</span><span class="tag">ARM</span></div>
          <div class="note-links">
            <a href="viewer.html?file=notes/kernel-memory.md" target="_blank">→ read note (.md)</a>
          </div>
        </div>
      </div>

      <div class="blog-post">
        <span class="blog-date">2025-10-05</span>
        <div class="blog-content">
          <div class="blog-title">Magic SysRq demystified: from userspace trigger to kernel handler</div>
          <div class="blog-excerpt">How echo c &gt; /proc/sysrq-trigger reaches the kernel, what each SysRq key does, and why it sometimes fails on embedded targets.</div>
          <div class="blog-tags-row"><span class="tag">sysrq</span><span class="tag">kernel</span><span class="tag">debug</span></div>
          <div class="note-links">
            <a href="viewer.html?file=notes/sysrq-notes.md" target="_blank">→ read note (.md)</a>
          </div>
        </div>
      </div>

    </div>
  `

};

// Animate skill bars whenever the skills section becomes visible
window.animateSkillBars = function () {
  const fills = document.querySelectorAll('.skill-bar-fill');
  fills.forEach(el => {
    el.style.width = el.dataset.pct + '%';
  });
};
