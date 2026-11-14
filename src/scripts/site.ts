/*
 * Site-wide behaviour, kept small: section entrances, copy-to-clipboard
 * buttons and the phone menu. Every piece degrades to plain HTML.
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

// phone menu: a button that opens the stacked list; it closes on a link tap or Escape
const menuButton = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const menu = menuButton && document.getElementById(menuButton.getAttribute('aria-controls') ?? '');
if (menuButton && menu) {
  const setOpen = (open: boolean) => {
    menu.toggleAttribute('data-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.textContent = open ? 'Close' : 'Menu';
  };
  menuButton.addEventListener('click', () => setOpen(!menu.hasAttribute('data-open')));
  menu.addEventListener('click', (event) => {
    if ((event.target as HTMLElement).closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.hasAttribute('data-open')) {
      setOpen(false);
      menuButton.focus();
    }
  });
  // the wide layout has no menu, so leave nothing open behind it
  window.matchMedia('(max-width: 760px)').addEventListener('change', () => setOpen(false));
}
