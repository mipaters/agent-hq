export function launchDemo(url: string) {
  const width = window.screen.availWidth;
  const height = window.screen.availHeight;
  const features = [
    "popup=yes",
    `width=${width}`,
    `height=${height}`,
    "left=0",
    "top=0",
    "menubar=no",
    "toolbar=no",
    "location=no",
    "status=no",
    "resizable=yes",
    "scrollbars=yes",
    "fullscreen=yes",
  ].join(",");

  const win = window.open(url, "_blank", features);

  if (!win) {
    // Popup blocked or failed — fall back to a normal tab.
    window.open(url, "_blank", "noopener,noreferrer");
    return;
  }

  try {
    win.focus();

    // For same-origin pages we can ask the new window to go fullscreen.
    // These demos are hosted on different domains, so the browser will
    // normally block this cross-origin call. It is wrapped so it fails silently.
    const doc = win.document;
    const elem = doc.documentElement as HTMLElement & {
      requestFullscreen?: () => Promise<void>;
    };
    if (typeof elem.requestFullscreen === "function") {
      setTimeout(() => {
        elem.requestFullscreen?.().catch(() => {
          // Cross-origin or not allowed — the full-size popup is still open.
        });
      }, 250);
    }
  } catch {
    // Cross-origin access denied. The popup remains open at full screen size.
  }
}
