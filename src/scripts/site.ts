/*
 * Site-wide behaviour, kept small: section entrances, the header's scrolled
 * state and copy-to-clipboard buttons. Every piece degrades to plain HTML.
 */

const root = document.documentElement;

// entrances: [data-reveal] elements rise in once as they enter the viewport
const revealables = document.querySelectorAll<HTMLElement>('[data-reveal]');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  revealables.forEach((el) => io.observe(el));
} else {
  revealables.forEach((el) => el.classList.add('is-in'));
}
root.dataset.revealReady = 'true';

// header: marked once content scrolls under it, so it can lift off the page
const header = document.querySelector<HTMLElement>('.site-header');
if (header) {
  const update = () => header.toggleAttribute('data-scrolled', window.scrollY > 4);
  update();
  window.addEventListener('scroll', update, { passive: true });
}

// copy buttons: [data-copy="text"], with the label swapped to confirm
for (const button of document.querySelectorAll<HTMLButtonElement>('[data-copy]')) {
  let timer: number | undefined;
  button.hidden = !navigator.clipboard;
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy ?? '');
      button.dataset.state = 'copied';
      const live = button.querySelector('[aria-live]');
      if (live) live.textContent = 'Email address copied';
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        delete button.dataset.state;
        if (live) live.textContent = '';
      }, 1800);
    } catch {
      button.dataset.state = 'failed';
    }
  });
}

// phone menu: close after choosing a link or pressing Escape
for (const menu of document.querySelectorAll<HTMLDetailsElement>('details[data-menu]')) {
  menu.addEventListener('click', (event) => {
    if ((event.target as HTMLElement).closest('a')) menu.open = false;
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.open) {
      menu.open = false;
      menu.querySelector('summary')?.focus();
    }
  });
}
