const timelines = document.querySelectorAll<HTMLDivElement>('.vid-timeline');

timelines.forEach(timeline => {

  const cursor = timeline.querySelector<HTMLDivElement>('.vid-timeline__cursor');
  // cursor?.style

  timeline.addEventListener('mousemove', (e: MouseEvent) => {
    if (!cursor) return;

    const node = e.target as HTMLElement;
    const rect = node.getBoundingClientRect();

    const x = e.clientX - rect.left;
    // const y = e.clientY - rect.top;

    // Excluding 0 value stops flickering
    if (x === 0) return;

    console.log(x);

    cursor.style.left = `${x}px`;
  });

  const lanes = timeline.querySelectorAll('.vid-timeline__lane');
  console.log(lanes);

});

export {};
