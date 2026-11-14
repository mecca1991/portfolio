# Loop prompt: build the portfolio task by task

Run with: `/loop Follow tasks/loop.md` (no interval, so it paces itself).

---

Each iteration completes exactly one task from `tasks/todo.md`, then schedules the next.

## 1. Orient
- Read `tasks/todo.md` and `tasks/plan.md`. They are the source of truth.
- `git status` must be clean. If it isn't, finish or explain the leftover work before starting anything new.
- Use Node 22 for every npm command: `source ~/.nvm/nvm.sh && nvm use >/dev/null && <command>`.

## 2. Pick the task
- Take the first task that still has unchecked acceptance criteria and whose dependencies are all done.
- If the next unchecked item is a **Checkpoint**: verify the items you can check yourself, tick those, report what's left, and **stop the loop** to wait for review. If I've already approved that checkpoint in chat, tick it and carry on.
- If every box is ticked, stop the loop and say so.

## 3. Build it
- The design source is the canvas https://claude.ai/artifact/1u5mcMR1p11RRbJGzR2qVF. Read the relevant artboard with the Artifact tool (`action: read`, `path: <Name>.dc.html`). Match it; don't invent.
- Reuse `src/styles/tokens.css`, existing components and `src/data/site.ts`. Plain CSS, zero client JS except the Rust playground.
- Keep canvas placeholder text verbatim, and keep the "Illustrative reconstruction" badges.
- Stay inside the task's scope. If something else needs fixing, note it in `tasks/todo.md` instead of doing it.
- Reader-facing text (page copy, captions, alt text, meta descriptions, README) goes through the `clarity` skill before you commit: review mode first, then apply rewrites that keep every fact. Never invent facts, and leave canvas placeholder text verbatim.

## 4. Verify
- `npm run build && npm run check` must both pass with 0 errors.
- Visual check: run `npm run preview`, open the page in Chrome at 1440 px and 390 px, compare it with the artboard, and fix the differences. Tab through the page to check focus. No horizontal scroll at 390 px.
- Tick a box in `tasks/todo.md` only once it has actually been verified. Anything that needs me goes under the task as `> Needs Wilfred: …`.

## 5. Commit and push
- Work on the phase branch: `phase-3-ship`, branched from `phase-2-pages` (it already exists, with an Amplify preview at https://phase-3-ship.dshdhrt6lgmzs.amplifyapp.com).
- **Never push to `main`.** It deploys straight to www.wilfredchetat.com. Since launch, changes reach `main` only through a PR from `phase-3-ship`, merged after I approve a checkpoint.
- One commit per task, covering the code plus the `tasks/todo.md` update. Imperative subject line ≤ 60 chars; the body says why.
- **No `Co-Authored-By: Claude` line and no other Claude attribution in commit messages or PRs.** After committing, run `git log -1 --format=%B | grep -i 'co-authored-by'`. If it prints anything, amend the message before pushing.
- `git push -u origin <branch>`. Never force-push.

## 6. Schedule the next iteration
- If the task finished cleanly: schedule the next iteration in 60 s.
- **Stop the loop** (`stop: true`) and tell me why if any of these happen:
  - you reach a checkpoint
  - a task needs content, a decision or console access from me
  - the same check fails twice in a row
  - anything would touch AWS outside `--profile personal`. Never use the `default` profile; it's a client account.

End each iteration with a 3-line report: task done, what was verified, what's next or what's blocking.
