const flower = (src, alt, cls = '') => { const fb = src.includes('1F339') ? '/fallback/rose.svg' : src.includes('1F33B') ? '/fallback/sunflower.svg' : src.includes('1F337') ? '/fallback/tulip.svg' : '/fallback/rose.svg'; return `<img class="${cls}" src="${src}" data-fallback="${fb}" alt="${alt}" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src=this.dataset.fallback" />`; };

const assets = {
  rose: 'https://openmoji.org/data/color/svg/1F339.svg',
  sunflower: 'https://openmoji.org/data/color/svg/1F33B.svg',
  tulip: 'https://openmoji.org/data/color/svg/1F337.svg',
  blossom: 'https://openmoji.org/data/color/svg/1F33C.svg',
  bouquet: 'https://openmoji.org/data/color/svg/1F490.svg',
  heart: 'https://openmoji.org/data/color/svg/2764-FE0F.svg'
};

const app = document.querySelector('#app');

app.innerHTML = `
  <div class="page-shell">
    <div class="cursor-glow"></div>
    <div class="grain"></div>
    <div class="spark-field" aria-hidden="true"></div>

    <header class="topbar">
      <div class="brand"><span>♡</span> a tiny thing for Marang</div>
      <button class="sound-toggle" id="soundToggle" aria-label="Toggle tiny ambient sound">
        <iconify-icon icon="lucide:music-2"></iconify-icon><span>little soundtrack</span>
      </button>
    </header>

    <main>
      <section class="door" id="door">
        <div class="door-orbit orbit-1"></div>
        <div class="door-orbit orbit-2"></div>
        <div class="intro-copy">
          <div class="tiny-label">for the girl who accidentally became a website</div>
          <h1>Marang<span>♡</span></h1>
          <p class="intro-sub">I could've just waited for the proper date.<br>Instead, I made you a tiny world.</p>
        </div>
        <button class="envelope" id="openLetter" aria-label="Open the letter">
          <div class="envelope-flap"></div>
          <div class="envelope-body"></div>
          <div class="seal"><span>♡</span></div>
          <div class="envelope-label">open me</div>
        </button>
        <div class="scroll-hint">tap the envelope <span>↓</span></div>
      </section>

      <section class="world" id="world">
        <div class="section-tag">01 / coincidence, maybe</div>
        <div class="split reveal">
          <div class="headline-block">
            <p class="eyebrow">somewhere between a crush & cosmic timing</p>
            <h2>Maybe it's<br><em>infatuation.</em></h2>
            <div class="handnote">or maybe the universe is just being funny again</div>
          </div>
          <div class="paper-note">
            <p>Maybe it is infatuation. Maybe it is just one of those fleeting moments that somehow feels bigger than it should. I like to think sometimes the strongest foundations are built from the most unexpected little moments, and maybe there is such a thing as universal alignment.</p>
            <p>Whatever it is, you have me a little confused, because I genuinely have no idea where this is heading in your head. 😭 I don't know if you're slowly figuring me out, already know exactly what you think, or are just enjoying watching me try to figure you out.</p>
            <p>Either way, I like you. I like talking to you, I like your energy, and apparently I like making unnecessarily elaborate websites for people I haven't even properly linked with yet. 😂</p>
            <p>Maybe that's enough for now. No pressure, no grand conclusion. I'm just enjoying the mystery, and I'd like to see where it takes us.</p>
            <span class="signature">Theo ♡</span>
          </div>
        </div>
      </section>

      <section class="noticed" id="noticed">
        <div class="section-tag">02 / little observations</div>
        <div class="section-title reveal">
          <p class="eyebrow">I noticed a few things</p>
          <h2>Not <span>everything.</span><br>Just enough.</h2>
        </div>
        <div class="observation-grid">
          <article class="obs-card reveal">
            <div class="obs-num">01</div>
            <iconify-icon class="obs-icon" icon="lucide:sparkles"></iconify-icon>
            <h3>petite</h3>
            <p>Yes, I'm still standing by my original observation. You can complain to management.</p>
          </article>
          <article class="obs-card reveal">
            <div class="obs-num">02</div>
            <iconify-icon class="obs-icon" icon="lucide:pen-line"></iconify-icon>
            <h3>the writer thing</h3>
            <p>You called out my hyperboles before I had even finished being dramatic. I respected it.</p>
          </article>
          <article class="obs-card featured reveal">
            <div class="obs-num">03</div>
            <div class="tiny-flower-pair">${flower(assets.rose, 'rose')}${flower(assets.sunflower, 'sunflower')}</div>
            <h3>this one</h3>
            <p>I saw the sunflower and quietly decided it belonged somewhere in this story.</p>
          </article>
        </div>
      </section>

      <section class="garden" id="garden">
        <div class="garden-sky"></div>
        <div class="section-tag">03 / a little garden</div>
        <div class="garden-copy reveal">
          <p class="eyebrow">hover around</p>
          <h2>There had to be<br><em>flowers</em> somewhere.</h2>
          <p>Move your cursor through the garden. Some things react when you get close.</p>
        </div>
        <div class="garden-stage" id="gardenStage" aria-label="Interactive flower garden">
          <div class="garden-moon"></div>
          <div class="garden-hill hill-a"></div>
          <div class="garden-hill hill-b"></div>
          <div class="flower-bed">
            ${[0,1,2,3,4,5,6,7,8,9,10,11].map(i => flower(i % 4 === 0 ? assets.sunflower : i % 3 === 0 ? assets.tulip : assets.rose, 'flower', `garden-flower gf-${i}`)).join('')}
          </div>
          <div class="sunflower-hero" title="you know why this one is here">
            ${flower(assets.sunflower, 'sunflower')}
            <span>you know why ♡</span>
          </div>
          <div class="garden-badge"><iconify-icon icon="lucide:sparkle"></iconify-icon> tiny ecosystem of affection</div>
        </div>
      </section>

      <section class="unfinished" id="unfinished">
        <div class="section-tag">04 / almost a game</div>
        <div class="unfinished-card reveal">
          <div class="unfinished-icon"><iconify-icon icon="lucide:gamepad-2"></iconify-icon></div>
          <div>
            <p class="eyebrow">we never did get around to it</p>
            <h2>That tiny game we were supposed to play.</h2>
            <p>I decided not to turn this whole website into a tic-tac-toe tournament. You have enough unfinished business with me already. 😌</p>
            <div class="mini-board" aria-label="A nod to the unfinished game">
              <span>×</span><span>○</span><span>×</span>
              <span>○</span><span>×</span><span>○</span>
              <span>×</span><span>·</span><span>·</span>
            </div>
          </div>
        </div>
      </section>

      <section class="date" id="date">
        <div class="section-tag">05 / the actual plan</div>
        <div class="date-stage reveal">
          <div class="floating-petal p1">♡</div><div class="floating-petal p2">✦</div><div class="floating-petal p3">♡</div>
          <div class="date-kicker">not cancelled. just postponed.</div>
          <h2>The proper date<br><em>is still coming.</em></h2>
          <p>I don't want our first proper link-up to feel like I squeezed it into a bad month. I'd rather save it, do it properly, and make the second date feel like something you actually remember.</p>
          <div class="date-stamp"><span>RESERVED</span><strong>for later ♡</strong></div>
        </div>
      </section>

      <section class="finale" id="finale">
        <div class="final-flower-row">
          ${flower(assets.rose,'rose')}${flower(assets.rose,'rose')}${flower(assets.sunflower,'sunflower')}${flower(assets.rose,'rose')}${flower(assets.rose,'rose')}
        </div>
        <p class="eyebrow">one last thing</p>
        <h2>Thanks for being<br><em>interesting.</em></h2>
        <p class="final-copy">This was never meant to answer the question of where we're going. I don't know yet either. I just know I'm curious enough to find out.</p>
        <button class="keep-button" id="keepButton"><span>keep this little world</span> <iconify-icon icon="lucide:heart"></iconify-icon></button>
        <div class="madeby">made for Marang, by Theo <span>♡</span></div>
      </section>
    </main>

    <div class="toast" id="toast"><span>♡</span> okay, now you can go back to being cute.</div>
  </div>
`;

const door = document.querySelector('#door');
const openBtn = document.querySelector('#openLetter');
const toast = document.querySelector('#toast');

openBtn.addEventListener('click', () => {
  door.classList.add('opened');
  document.body.classList.add('story-open');
  setTimeout(() => document.querySelector('.world')?.scrollIntoView({behavior:'smooth', block:'start'}), 380);
  burstHearts(14);
});

document.addEventListener('mousemove', (e) => {
  document.documentElement.style.setProperty('--mx', `${e.clientX}px`);
  document.documentElement.style.setProperty('--my', `${e.clientY}px`);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, {threshold: 0.16});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const stage = document.querySelector('#gardenStage');
stage.addEventListener('mousemove', (e) => {
  const rect = stage.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width - .5) * 2;
  const y = ((e.clientY - rect.top) / rect.height - .5) * 2;
  stage.style.setProperty('--px', x.toFixed(3));
  stage.style.setProperty('--py', y.toFixed(3));
});

stage.addEventListener('mouseleave', () => {
  stage.style.setProperty('--px', 0);
  stage.style.setProperty('--py', 0);
});

document.querySelectorAll('.garden-flower').forEach((el, i) => {
  el.addEventListener('click', () => {
    el.classList.add('bloomed');
    setTimeout(() => el.classList.remove('bloomed'), 800);
    burstHearts(3 + (i % 3));
  });
});

document.querySelector('#keepButton').addEventListener('click', () => {
  burstHearts(28);
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4200);
});

function burstHearts(count = 10) {
  const symbols = ['♡', '✦', '·', '♥'];
  for (let i=0; i<count; i++) {
    const s = document.createElement('span');
    s.className = 'burst';
    s.textContent = symbols[Math.floor(Math.random()*symbols.length)];
    s.style.left = `${50 + (Math.random()*28 - 14)}%`;
    s.style.top = `${45 + (Math.random()*12 - 6)}%`;
    s.style.setProperty('--dx', `${Math.random()*180 - 90}px`);
    s.style.setProperty('--dy', `${-120 - Math.random()*150}px`);
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 1500);
  }
}

const sparkField = document.querySelector('.spark-field');
for (let i=0; i<42; i++) {
  const s = document.createElement('i');
  s.style.left = `${Math.random()*100}%`;
  s.style.top = `${Math.random()*100}%`;
  s.style.animationDelay = `${Math.random()*4}s`;
  s.style.animationDuration = `${3+Math.random()*5}s`;
  sparkField.appendChild(s);
}

// A tiny optional ambient oscillator. Nothing plays until the visitor asks for it.
let audioCtx = null;
let audioTimer = null;
let soundOn = false;
const soundToggle = document.querySelector('#soundToggle');
soundToggle.addEventListener('click', () => {
  soundOn = !soundOn;
  if (soundOn) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    playChime();
    audioTimer = setInterval(playChime, 5200);
    soundToggle.classList.add('on');
    soundToggle.querySelector('span').textContent = 'little soundtrack on';
  } else {
    clearInterval(audioTimer);
    soundToggle.classList.remove('on');
    soundToggle.querySelector('span').textContent = 'little soundtrack';
  }
});
function playChime() {
  if (!audioCtx) return;
  const now = audioCtx.currentTime;
  [261.63, 329.63, 392.00].forEach((freq, idx) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.0001, now + idx*.11);
    gain.gain.exponentialRampToValueAtTime(0.035, now + idx*.11 + .03);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + idx*.11 + 1.4);
    osc.connect(gain).connect(audioCtx.destination);
    osc.start(now + idx*.11);
    osc.stop(now + idx*.11 + 1.5);
  });
}
