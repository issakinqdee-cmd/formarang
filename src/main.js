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

    <main><section class="music-gate" id="musicGate"><div class="gate-orbit"></div><div class="gate-copy"><p class="tiny-label">before you enter</p><h1>One song.<br><em>Then the rest.</em></h1><p>I wanted the first thing waiting for you to be something soft. Put this on, stay for a minute, then come see what I made.</p></div><div class="player-shell"><div class="player-top"><span>NOW PLAYING</span><span>♡</span></div><div class="player-body"><div class="record"><div class="record-label">GS</div></div><div class="track-info"><span class="track-kicker">a little soundtrack</span><h2>Glue Song</h2><p>beabadoobee</p><div class="fake-progress"><i></i></div><div class="player-time"><span>soft</span><span>♡</span></div></div></div><div class="spotify-frame gate-spotify"><iframe title="Glue Song by beabadoobee on Spotify" src="https://open.spotify.com/embed/track/3iBgrkexCzVuPy4O9vx7Mf?utm_source=generator&theme=0&autoplay=1" width="100%" height="152" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="eager"></iframe></div></div><div class="lyric-window" id="lyricWindow"><div class="lyric-label"><span>LYRIC WINDOW</span><span>♡</span></div><div class="lyric-line" id="lyricLine">a little song about closeness, softness, and finding something that feels easy</div><div class="lyric-credit">lyric mood, not a transcript ♡</div></div><button class="enter-button" id="enterWorld">I'm listening. Let me in <span>→</span></button><p class="gate-note">The rest stays locked until you press this. I wanted you to actually start with the song.</p></section>
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
          <div class="envelope-label"><strong>Marang</strong><span>open me ♡</span></div>
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

      

<section class="chapter-divider"><span>then I started noticing things</span><b>02</b></section>
<section class="likes" id="likes"><div class="section-tag">02 / the Marang index</div><div class="likes-head reveal"><p class="eyebrow">things I have filed away</p><h2>Apparently you<br><em>have a whole universe.</em></h2><p>Literature. Disney. Thrillers. Shopping. Pinterest. Ice cream. I am collecting evidence at an alarming rate.</p></div><div class="likes-grid"><article class="like-card reveal"><span>BOOKS</span><iconify-icon icon="lucide:book-open"></iconify-icon><h3>literature</h3><p>Which makes me wonder what kind of stories you keep returning to when nobody is asking.</p></article><article class="like-card reveal"><span>SCREEN</span><iconify-icon icon="lucide:clapperboard"></iconify-icon><h3>thrillers</h3><p>Noted. Movie night now has a minimum level of suspense.</p></article><article class="like-card reveal"><span>MAGIC</span><iconify-icon icon="lucide:sparkles"></iconify-icon><h3>Disney</h3><p>So apparently there is room for a little magic and a little nonsense too.</p></article><article class="like-card reveal"><span>MOODBOARD</span><iconify-icon icon="lucide:images"></iconify-icon><h3>Pinterest</h3><p>I already know one day you are going to show me a board and expect me to understand the assignment.</p></article></div></section>
<section class="icecream" id="icecream"><div class="section-tag">03 / scientifically important</div><div class="icecream-layout"><div class="reveal"><p class="eyebrow">one undeniable compatibility test</p><h2>We both like<br><em>ice cream.</em></h2><p class="body-copy">This may be the most convincing evidence that the universe knows what it is doing.</p><span class="scribble">peer reviewed by absolutely nobody</span></div><div class="flavour-machine reveal" id="flavourMachine"><div class="machine-top">ICE CREAM DEPARTMENT <span>♡</span></div><button class="flavour" data-flavour="vanilla">01 <strong>Vanilla</strong><small>quietly elite</small></button><button class="flavour" data-flavour="chocolate">02 <strong>Chocolate</strong><small>classic behaviour</small></button><button class="flavour" data-flavour="strawberry">03 <strong>Strawberry</strong><small>romantic allegations</small></button><button class="flavour" data-flavour="surprise">04 <strong>Surprise me</strong><small>dangerous answer</small></button><div class="flavour-result" id="flavourResult">Pick one. I will pretend this doesn't tell me anything.</div></div></div></section>
<section class="conversation" id="conversation"><div class="section-tag">04 / the receipts</div><div class="conversation-head reveal"><p class="eyebrow">things you actually said</p><h2>You ask<br><em>good questions.</em></h2><p>Not the kind you answer once and forget. The kind that make me explain myself.</p></div><div class="chat-stack"><div class="chat-bubble mar reveal"><span>Marang</span>“You're an author? You're not one of those tortured ones are you”</div><div class="chat-bubble theo reveal"><span>Theo</span>“I'm a lot of things.”</div><div class="chat-bubble mar reveal"><span>Marang</span>“How does one get into debt without realizing?”</div><div class="chat-bubble theo reveal"><span>Theo</span>“Long story short...”</div><div class="chat-bubble mar reveal"><span>Marang</span>“And you didn't say please.”</div><div class="chat-bubble theo reveal"><span>Theo</span>“I please.”</div><div class="chat-bubble mar reveal"><span>Marang</span>“You please?”</div><div class="chat-bubble theo reveal"><span>Theo</span>“Exactly.”</div></div><div class="conversation-foot reveal">That exchange still makes me laugh. You have a talent for making me explain myself.</div></section>
<section class="figuring" id="figuring"><div class="figuring-inner"><div class="reveal"><p class="eyebrow">05 / the line that stayed with me</p><h2>“I'm still<br><em>figuring things out.</em>”</h2></div><div class="figuring-note reveal"><p>That is probably the most useful thing you could have told me.</p><p>Not because I need an answer from you right now. I don't. I just like knowing what is actually happening in your head, even when the honest answer is “I don't know yet.”</p><p>So this site isn't a proposal. It is me leaving the door open and seeing what happens.</p></div></div></section>
<section class="question" id="question"><div class="question-card reveal"><p class="eyebrow">06 / one thing I genuinely want to know</p><h2>When you said<br>“what about giving me money?”</h2><p class="question-intro">Were you teasing me, or were you quietly telling me something about the kind of relationship you want?</p><div class="answer-grid"><button data-answer="generous">I like a generous man.</button><button data-answer="provider">I want someone who can take care of things.</button><button data-answer="teasing">I was just teasing you 😂</button><button data-answer="figuring">Honestly, I'm still figuring that out too.</button></div><div class="answer-result" id="answerResult">Choose whichever is closest. No wrong answer.</div></div></section>
<section class="disney" id="disney"><div class="disney-card reveal"><div class="magic-stars">✦ · ✧ · ✦</div><p class="eyebrow">07 / one future excuse</p><h2>Disney is involved<br>somehow.</h2><p>Which is convenient because “we should watch something” is an extremely sophisticated excuse to spend time together.</p><div class="movie-ticket"><span>ADMIT ONE</span><strong>MARANG</strong><small>one future movie night</small><b>♡</b></div></div></section><section class="noticed" id="noticed">
        <div class="section-tag">03 / little observations</div>
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
          <button class="obs-card featured reveal sunflower-card" id="sunflowerCard">
            <div class="obs-num">03</div>
            <div class="tiny-flower-pair">${flower(assets.rose, 'rose')}${flower(assets.sunflower, 'sunflower')}</div>
            <h3>this one</h3>
            <p>I saw the sunflower and quietly decided it belonged somewhere in this story.</p>
            <span class="sunflower-secret">tap me ♡</span>
          </button>
          <article class="obs-card quote-card reveal">
            <div class="quote-mini">“</div>
            <p>Apparently one conversation was enough for me to start making websites.</p>
            <span>an entirely reasonable man</span>
          </article>
        </div>
      </section>

      <section class="garden" id="garden">
        <div class="garden-sky"></div>
        <div class="section-tag">09 / a little garden</div>
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
        <div class="section-tag">10 / almost a game</div>
        <div class="unfinished-card reveal">
          <div class="unfinished-icon"><iconify-icon icon="lucide:sparkles"></iconify-icon></div>
          <div>
            <p class="eyebrow">one tiny loose end</p>
            <h2>That little game we never got around to.</h2>
            <p>I decided not to turn this whole website into a tic-tac-toe tournament. I would rather keep one tiny thing unfinished so we have an excuse to play when we actually link up.</p>
            <div class="unfinished-note">P.S. I remember. 😌 ♡</div>
          </div>
        </div>
      </section>

      
<section class="archive" id="archive">
  <div class="section-tag">11 / don't open everything at once</div>
  <div class="archive-head reveal">
    <p class="eyebrow">a small collection of things I haven't said yet</p>
    <h2>Open one.<br><em>Then another.</em></h2>
    <p>There are no wrong answers. Some are sweet. One is mildly incriminating.</p>
  </div>
  <div class="open-when-grid">
    <button class="open-when reveal" data-note="when-bored"><span>01</span><strong>open when you're bored</strong><small>there is something stupid in here</small></button>
    <button class="open-when reveal" data-note="when-curious"><span>02</span><strong>open when you're curious</strong><small>about what I'm thinking</small></button>
    <button class="open-when reveal" data-note="when-smiling"><span>03</span><strong>open when you're smiling</strong><small>don't ruin it, just read this</small></button>
    <button class="open-when reveal" data-note="when-late"><span>04</span><strong>open when it's late</strong><small>this one is quieter</small></button>
  </div>
  <div class="note-reveal" id="noteReveal" aria-live="polite">
    <span class="note-close" id="noteClose">×</span>
    <p class="eyebrow" id="noteEyebrow"></p>
    <p id="noteText"></p>
  </div>
</section>
<section class="date-menu" id="dateMenu"><div class="section-tag">10 / hypothetical, obviously</div><div class="date-menu-head reveal"><p class="eyebrow">if you were planning it</p><h2>What would<br><em>you pick?</em></h2><p>I already know I want ice cream involved. The rest is negotiable.</p></div><div class="date-options"><button class="date-option reveal" data-date="bookshop"><span>01</span><strong>Bookshop + ice cream</strong><small>dangerously on brand</small></button><button class="date-option reveal" data-date="movie"><span>02</span><strong>Thriller + snacks</strong><small>you choose the film, I judge</small></button><button class="date-option reveal" data-date="shopping"><span>03</span><strong>Shopping + dessert</strong><small>I carry the bags, allegedly</small></button><button class="date-option reveal" data-date="surprise"><span>04</span><strong>Don't tell me yet</strong><small>let me figure it out</small></button></div><div class="date-choice" id="dateChoice">Your future itinerary is currently blank. Suspicious.</div></section><section class="date" id="date">
        <div class="section-tag">13 / the actual plan</div>
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
        <div class="date-invitation reveal" id="dateInvitation">
          <span class="date-invitation-kicker">and when everything is okay...</span>
          <h3>I'll ask you<br><em>properly.</em></h3>
          <p>Not rushed. Not squeezed between everything else. Just a proper date, planned with intention, when the timing is right.</p>
          <div class="date-invitation-note">I hope, when everything settles, you'll still want to see where this goes. ♡</div>
          <button class="keep-button" id="keepButton"><span>save me a little spot</span> <iconify-icon icon="lucide:heart"></iconify-icon></button>
        </div>
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
document.querySelectorAll('.obs-card').forEach(card => {
  card.addEventListener('pointermove', (e) => {
    const r = card.getBoundingClientRect();
    const x = ((e.clientX-r.left)/r.width-.5)*2;
    const y = ((e.clientY-r.top)/r.height-.5)*2;
    card.style.setProperty('--tx', (y*-3.5).toFixed(2)+'deg');
    card.style.setProperty('--ty', (x*3.5).toFixed(2)+'deg');
  });
  card.addEventListener('pointerleave', () => {
    card.style.setProperty('--tx','0deg');
    card.style.setProperty('--ty','0deg');
  });
});
const sunflowerCard = document.querySelector('#sunflowerCard');
sunflowerCard?.addEventListener('click', () => {
  sunflowerCard.classList.toggle('revealed');
  burstHearts(7);
});
const enterWorld=document.querySelector('#enterWorld');
const musicGate=document.querySelector('#musicGate');
const lockedSections=[...document.querySelectorAll('main > section:not(#musicGate)')];
lockedSections.forEach(section=>section.classList.add('site-locked'));
enterWorld?.addEventListener('click',()=>{musicGate.classList.add('completed');lockedSections.forEach(section=>section.classList.remove('site-locked'));document.body.classList.add('story-open');setTimeout(()=>document.querySelector('#door')?.scrollIntoView({behavior:'smooth',block:'start'}),450);burstHearts(14);});
const lyricLines=['a little song about closeness, softness, and finding something that feels easy','the kind of feeling that makes ordinary moments feel closer','something warm, simple, and slightly ridiculous','the part where the whole room feels a little quieter','soft enough to leave room for whatever happens next'];
let lyricIndex=0;
setInterval(()=>{const line=document.querySelector('#lyricLine');if(!line)return;line.classList.add('changing');setTimeout(()=>{lyricIndex=(lyricIndex+1)%lyricLines.length;line.textContent=lyricLines[lyricIndex];line.classList.remove('changing');},300);},4200);
document.querySelectorAll('.flavour').forEach(btn=>btn.addEventListener('click',()=>{const replies={vanilla:'quietly elite. I respect it.',chocolate:'classic. dependable. suspiciously safe.',strawberry:'okay, romantic allegations accepted.',surprise:'bold. I like that answer.'};document.querySelector('#flavourResult').textContent=replies[btn.dataset.flavour];burstHearts(4);}));
document.querySelectorAll('.answer-grid button').forEach(btn=>btn.addEventListener('click',()=>{const replies={generous:'Noted. I can work with generosity being part of the love language.',provider:'That tells me you value someone who can show up and handle things, not just talk about them.',teasing:'😂 Fair. I had to ask before building an entire theory around one line.',figuring:'Honestly, that might be the most honest answer. We can leave it there.'};document.querySelector('#answerResult').textContent=replies[btn.dataset.answer];document.querySelectorAll('.answer-grid button').forEach(x=>x.classList.remove('chosen'));btn.classList.add('chosen');burstHearts(4);}));
document.querySelectorAll('.date-option').forEach(btn=>btn.addEventListener('click',()=>{const replies={bookshop:'Bookshop + ice cream. That is an alarmingly good answer.',movie:'Thriller + snacks. I am already suspicious of your film choices.',shopping:'Shopping + dessert. I will need a budget briefing first. 😂',surprise:'Keeping it secret. Fine. I respect a little mystery.'};document.querySelector('#dateChoice').textContent=replies[btn.dataset.date];document.querySelectorAll('.date-option').forEach(x=>x.classList.remove('chosen'));btn.classList.add('chosen');burstHearts(4);}));


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


const noteCopy = {
  'when-bored': ["for when you're bored", 'I was going to make this a whole game. Then I remembered you already tolerate enough of my nonsense. So here is your official reminder that I am, in fact, still funny. Probably.'],
  'when-curious': ["for when you're curious", 'I like you. That is the uncomplicated part. The complicated part is figuring out what you think while I pretend I am completely normal about it.'],
  'when-smiling': ["for when you're smiling", 'Keep that. Seriously. I have not even taken you on the proper date yet and I am already campaigning for more of that smile.'],
  'when-late': ['for when it is late', 'Maybe this is infatuation. Maybe it is timing. Maybe the universe has terrible scheduling but surprisingly good taste. Either way, goodnight, Marang. ♡']
};
document.querySelectorAll('.open-when').forEach(btn => {
  btn.addEventListener('click', () => {
    const [label, note] = noteCopy[btn.dataset.note];
    document.querySelector('#noteEyebrow').textContent = label;
    document.querySelector('#noteText').textContent = note;
    document.querySelector('#noteReveal').classList.add('show');
    burstHearts(5);
  });
});
document.querySelector('#noteClose')?.addEventListener('click', () => document.querySelector('#noteReveal').classList.remove('show'));

const visits = Number(localStorage.getItem('marangVisits') || 0) + 1;
localStorage.setItem('marangVisits', visits);
if (visits > 1) {
  const brand = document.querySelector('.brand');
  if (brand) brand.innerHTML = '<span>♡</span> you came back';
}

document.querySelector('#keepButton').addEventListener('click', () => {
  document.querySelector('#dateInvitation')?.classList.add('saved');
  burstHearts(28);
  toast.classList.add('show');
  toast.querySelector('span').textContent = '♡';
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
