/*
 * ARIA tabs with manual markup: [role=tab] buttons that name their panel via
 * aria-controls. Arrow keys, Home and End move and select; only the selected
 * tab is in the tab order.
 */
export function initTabs(list: HTMLElement, onChange?: (index: number) => void) {
  const tabs = Array.from(list.querySelectorAll<HTMLElement>('[role="tab"]'));
  const panels = tabs.map((tab) => document.getElementById(tab.getAttribute('aria-controls') ?? ''));

  const select = (index: number, focus = false) => {
    tabs.forEach((tab, i) => {
      const on = i === index;
      tab.setAttribute('aria-selected', String(on));
      tab.tabIndex = on ? 0 : -1;
      panels[i]?.classList.toggle('is-active', on);
    });
    if (focus) tabs[index].focus();
    onChange?.(index);
  };

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => select(i));
    tab.addEventListener('keydown', (event) => {
      const last = tabs.length - 1;
      let next = -1;
      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = i === last ? 0 : i + 1;
      else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = i === 0 ? last : i - 1;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = last;
      if (next < 0) return;
      event.preventDefault();
      select(next, true);
    });
  });

  return { select };
}
