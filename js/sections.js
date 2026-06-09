// sections.js — All section HTML content. Edit this file to customise your portfolio.

window.SECTIONS = {

  about: `
    <p class="cmd-echo">cat about.txt</p>
    <h2 class="sec-title">JANAKIRAM</h2>
    <hr class="sec-divider">
    <div class="about-grid">
      <div class="about-meta">
        <div class="meta-line"><span class="key">name     :</span> Janakiram</div>
        <div class="meta-line"><span class="key">role     :</span> Embedded Linux &amp; Kernel Driver Developer</div>
        <div class="meta-line"><span class="key">hardware :</span> BeagleBone Black (TI AM335x Cortex-A8)</div>
        <div class="meta-line"><span class="key">host     :</span> x86-64 Ubuntu 24.04 / Mac Mini M4</div>
        <div class="meta-line"><span class="key">focus    :</span> Kernel internals, kdump/kexec, vmcore analysis</div>
        <div class="meta-line"><span class="key">location :</span> Hyderabad, India</div>
        <div class="meta-line"><span class="key">email    :</span> <a href="mailto:you@example.com">you@example.com</a></div>
        <div class="meta-line"><span class="key">github   :</span> <a href="https://github.com/" target="_blank">github.com/yourhandle</a></div>
        <div class="meta-line"><span class="key">linkedin :</span> <a href="https://linkedin.com/in/" target="_blank">linkedin.com/in/yourhandle</a></div>
      </div>
      <div class="about-ascii">
  ____  ____  ____
 ||J ||||A ||||N ||
 ||__||||__||||__||
 |/__\\||/__\\||/__\\|
  __ _  _ __
 | || || || |
 | || || || |
 |_||_||_||_|
      </div>
    </div>
    <p class="about-bio">
      Experienced embedded Linux and kernel driver developer specialising in
      the TI AM335x / ARMv7 ecosystem. Deep focus on kernel debugging
      infrastructure: kdump / kexec pipelines, vmcore analysis with the crash
      utility and gdb-multiarch, Buildroot-based cross-compilation, and
      low-level ARM architecture internals. Passionate about understanding
      Linux at the source-code level — process lifecycle, memory management,
      scheduler internals — and equally passionate about teaching those
      concepts clearly.
    </p>
  `,

  experience: `
    <p class="cmd-echo">cat experience.log</p>
    <h2 class="sec-title">WORK EXPERIENCE</h2>
    <hr class="sec-divider">
    <div class="exp-list">

      <div class="exp-item">
        <div class="exp-header">
          <span class="exp-role">Senior Embedded Linux Engineer</span>
          <span class="exp-period">2021 — present</span>
        </div>
        <div class="exp-company">YourCompany · Hyderabad, India</div>
        <ul class="exp-desc">
          <li>Developed and maintained kernel drivers for TI AM335x/AM57xx platforms</li>
          <li>Built end-to-end kdump pipelines: kexec-tools, makedumpfile, crash kernel tuning</li>
          <li>Automated vmcore triage workflows using crash utility + gdb-multiarch on x86-64</li>
          <li>Maintained Buildroot-based BSPs (2024.x – 2026.x), resolving cross-compilation dependency chains</li>
          <li>Diagnosed production panics by analysing vmcore symbols, call stacks, and slab state</li>
        </ul>
      </div>

      <div class="exp-item">
        <div class="exp-header">
          <span class="exp-role">Embedded Linux Developer</span>
          <span class="exp-period">2018 — 2021</span>
        </div>
        <div class="exp-company">PreviousCompany · Hyderabad, India</div>
        <ul class="exp-desc">
          <li>Wrote character and platform drivers for I²C, SPI, GPIO peripherals on BeagleBone Black</li>
          <li>Integrated U-Boot with custom device-tree overlays for AM335x hardware variants</li>
          <li>Introduced kernel debug config discipline: CONFIG_DEBUG_INFO, KASAN, lockdep</li>
          <li>Mentored junior engineers on kernel module development and debugging methodology</li>
        </ul>
      </div>

      <div class="exp-item">
        <div class="exp-header">
          <span class="exp-role">Junior Systems Engineer</span>
          <span class="exp-period">2016 — 2018</span>
        </div>
        <div class="exp-company">EarlyCompany · Bengaluru, India</div>
        <ul class="exp-desc">
          <li>Ported and validated BSPs for ARM Cortex-A8/A9 targets</li>
          <li>Wrote shell and Python tooling for automated boot-test farms</li>
          <li>Contributed to Yocto-based build systems and layer maintenance</li>
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
        <div class="skill-group-title">Kernel &amp; Drivers</div>
        <div class="skill-bar-row"><div class="skill-bar-label"><span>Linux Kernel Internals</span><span>95%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-pct="95"></div></div></div>
        <div class="skill-bar-row"><div class="skill-bar-label"><span>Kernel Driver Dev (char/platform)</span><span>92%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-pct="92"></div></div></div>
        <div class="skill-bar-row"><div class="skill-bar-label"><span>kdump / kexec</span><span>90%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-pct="90"></div></div></div>
        <div class="skill-bar-row"><div class="skill-bar-label"><span>vmcore analysis (crash / gdb)</span><span>88%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-pct="88"></div></div></div>
        <div class="skill-bar-row"><div class="skill-bar-label"><span>Device Tree / DTS</span><span>85%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-pct="85"></div></div></div>
      </div>

      <div class="skill-group">
        <div class="skill-group-title">Hardware Platforms</div>
        <div class="skill-bar-row"><div class="skill-bar-label"><span>BeagleBone Black / AM335x</span><span>98%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-pct="98"></div></div></div>
        <div class="skill-bar-row"><div class="skill-bar-label"><span>ARM Cortex-A8 (ARMv7)</span><span>90%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-pct="90"></div></div></div>
        <div class="skill-bar-row"><div class="skill-bar-label"><span>x86-64 (host dev)</span><span>80%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-pct="80"></div></div></div>
        <div class="skill-bar-row"><div class="skill-bar-label"><span>Mac Mini M4 (tooling)</span><span>75%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-pct="75"></div></div></div>
      </div>

      <div class="skill-group">
        <div class="skill-group-title">Build &amp; Toolchain</div>
        <div class="skill-bar-row"><div class="skill-bar-label"><span>Buildroot</span><span>92%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-pct="92"></div></div></div>
        <div class="skill-bar-row"><div class="skill-bar-label"><span>Yocto / OE</span><span>78%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-pct="78"></div></div></div>
        <div class="skill-bar-row"><div class="skill-bar-label"><span>GCC cross-compilation (ARM32)</span><span>88%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-pct="88"></div></div></div>
        <div class="skill-bar-row"><div class="skill-bar-label"><span>U-Boot / TFTP boot</span><span>83%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-pct="83"></div></div></div>
        <div class="skill-bar-row"><div class="skill-bar-label"><span>Makefile / Kconfig</span><span>85%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-pct="85"></div></div></div>
      </div>

      <div class="skill-group">
        <div class="skill-group-title">Languages &amp; Tools</div>
        <div class="skill-bar-row"><div class="skill-bar-label"><span>C (kernel / userspace)</span><span>95%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-pct="95"></div></div></div>
        <div class="skill-bar-row"><div class="skill-bar-label"><span>Bash / Shell scripting</span><span>88%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-pct="88"></div></div></div>
        <div class="skill-bar-row"><div class="skill-bar-label"><span>Python</span><span>72%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-pct="72"></div></div></div>
        <div class="skill-bar-row"><div class="skill-bar-label"><span>GDB / gdb-multiarch</span><span>85%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-pct="85"></div></div></div>
        <div class="skill-bar-row"><div class="skill-bar-label"><span>Git</span><span>90%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-pct="90"></div></div></div>
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
          <span class="project-name">bbb-kdump-pipeline</span>
          <span class="project-badge">FEATURED</span>
        </div>
        <p class="project-desc">
          End-to-end kdump implementation for BeagleBone Black. Covers kernel
          config, U-Boot crashkernel reservation, cross-compiled kexec-tools /
          makedumpfile (ARM32, static), capture kernel tuning, and vmcore
          analysis with crash + gdb-multiarch.
        </p>
        <div class="project-tags">
          <span class="tag">ARM32</span><span class="tag">kdump</span>
          <span class="tag">kexec</span><span class="tag">makedumpfile</span>
          <span class="tag">Buildroot</span>
        </div>
        <div class="project-links">
          <a href="#">→ GitHub</a>
          <a href="#">→ Write-up</a>
        </div>
      </div>

      <div class="project-card">
        <div class="project-card-header">
          <span class="project-name">crash-arm32-host</span>
          <span class="project-badge">TOOL</span>
        </div>
        <p class="project-desc">
          Build system and patches for compiling crash utility v9.0.2 + GDB 16.2
          targeting ARM vmcore analysis on an x86-64 Ubuntu 24.04 host. Resolves
          multilib, GMP/MPFR i386, and target=ARM build-chain subtleties.
        </p>
        <div class="project-tags">
          <span class="tag">crash</span><span class="tag">GDB</span>
          <span class="tag">ARM</span><span class="tag">vmcore</span>
          <span class="tag">Ubuntu</span>
        </div>
        <div class="project-links">
          <a href="#">→ GitHub</a>
        </div>
      </div>

      <div class="project-card">
        <div class="project-card-header">
          <span class="project-name">am335x-driver-kit</span>
          <span class="project-badge">DRIVER</span>
        </div>
        <p class="project-desc">
          Collection of production-grade Linux kernel drivers for AM335x
          peripherals: I²C, SPI, PWM, GPIO with interrupt handling, and a
          custom character device with IOCTL interface. Device-tree bindings
          included.
        </p>
        <div class="project-tags">
          <span class="tag">kernel</span><span class="tag">I2C</span>
          <span class="tag">SPI</span><span class="tag">GPIO</span>
          <span class="tag">DTS</span>
        </div>
        <div class="project-links">
          <a href="#">→ GitHub</a>
        </div>
      </div>

      <div class="project-card">
        <div class="project-card-header">
          <span class="project-name">buildroot-am335x-bsp</span>
          <span class="project-badge">BSP</span>
        </div>
        <p class="project-desc">
          Minimal but complete Buildroot BSP for BeagleBone Black targeting
          embedded debug workloads: includes kdump, crash, gdb-multiarch,
          busybox init, static kexec-tools, and a size-optimised rootfs.
        </p>
        <div class="project-tags">
          <span class="tag">Buildroot</span><span class="tag">BBB</span>
          <span class="tag">rootfs</span><span class="tag">kexec-tools</span>
        </div>
        <div class="project-links">
          <a href="#">→ GitHub</a>
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
          <div class="blog-excerpt">A deep dive into what actually happens from the moment a shell forks until your main() runs — covering copy_process(), do_execve(), ELF loader, and dynamic linker internals.</div>
          <div class="blog-tags-row"><span class="tag">kernel</span><span class="tag">process</span><span class="tag">ELF</span><span class="tag">ARM32</span></div>
          <div class="note-links">
            <a href="viewer.html?file=notes/process-lifecycle.md" target="_blank">→ read note (.md)</a>
            <a href="notes/process-lifecycle.pdf" target="_blank">→ PDF</a>
          </div>
        </div>
      </div>

      <div class="blog-post">
        <span class="blog-date">2026-04-02</span>
        <div class="blog-content">
          <div class="blog-title">Building crash utility for ARM vmcore analysis on x86-64</div>
          <div class="blog-excerpt">Step-by-step walkthrough of building crash v9.0.2 + GDB 16.2 with target=ARM on Ubuntu 24.04 — resolving multilib, i386 GMP/MPFR, and GDB configure quirks along the way.</div>
          <div class="blog-tags-row"><span class="tag">crash</span><span class="tag">vmcore</span><span class="tag">GDB</span></div>
          <div class="note-links">
            <a href="viewer.html?file=notes/crash-arm32.md" target="_blank">→ read note (.md)</a>
          </div>
        </div>
      </div>

      <div class="blog-post">
        <span class="blog-date">2026-02-14</span>
        <div class="blog-content">
          <div class="blog-title">End-to-end kdump on BeagleBone Black: the complete guide</div>
          <div class="blog-excerpt">Everything from kernel config and U-Boot crashkernel= through static kexec-tools cross-compilation, capture kernel pitfalls, and post-panic vmcore extraction.</div>
          <div class="blog-tags-row"><span class="tag">kdump</span><span class="tag">BBB</span><span class="tag">Buildroot</span><span class="tag">kexec</span></div>
          <div class="note-links">
            <a href="viewer.html?file=notes/kdump-pipeline.md" target="_blank">→ read note (.md)</a>
            <a href="notes/kdump-pipeline.pdf" target="_blank">→ PDF</a>
          </div>
        </div>
      </div>

      <div class="blog-post">
        <span class="blog-date">2025-12-10</span>
        <div class="blog-content">
          <div class="blog-title">Linux memory management internals for embedded developers</div>
          <div class="blog-excerpt">Page allocator, slab/slub, vmalloc zones, and CMA on a 512MB Cortex-A8 — with practical crash utility commands to inspect each layer in a live vmcore.</div>
          <div class="blog-tags-row"><span class="tag">mm</span><span class="tag">slab</span><span class="tag">ARM</span><span class="tag">crash</span></div>
          <div class="note-links">
            <a href="viewer.html?file=notes/kernel-memory.md" target="_blank">→ read note (.md)</a>
          </div>
        </div>
      </div>

      <div class="blog-post">
        <span class="blog-date">2025-10-05</span>
        <div class="blog-content">
          <div class="blog-title">Magic SysRq demystified: kernel bypass from userspace to hardware</div>
          <div class="blog-excerpt">How echo c &gt; /proc/sysrq-trigger actually triggers a panic, why it can fail on embedded boards, and when to use physical keyboard bypass instead.</div>
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
