import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Switch, Route } from "wouter";
import "./index.css";
import { SWRConfig } from "swr";
import { fetcher } from "./lib/fetcher";
import CaseSummary from "./pages/CaseSummary";
import Info from "./pages/Info";
import Chat from "./pages/Chat";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SWRConfig value={{ fetcher }}>
      <Switch>
        <Route path="/" component={CaseSummary} />
        <Route path="/info" component={Info} />
        <Route path="/chat" component={Chat} />
        <Route>404 Page Not Found</Route>
      </Switch>
    </SWRConfig>
  </StrictMode>,
);
