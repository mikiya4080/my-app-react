import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";

// GitHub Pages 用の `basename` を設定
const basename = "/my-app-react";
window.__remixContext = {
  ...window.__remixContext,
  basename,
};

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <RemixBrowser />
    </StrictMode>
  );
});
