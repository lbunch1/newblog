// @refresh reload
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import Articles from "./components/Articles";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>logno.dev</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/panda-syntax-dark.min.css" />
      </Head>
      <Body>
        <ErrorBoundary>
          <TopBar />
          <Suspense>
            <div class="wrapper">
              <aside>
                <Articles />
              </aside>
              <main>
                <Routes>
                  <FileRoutes />
                </Routes>
              </main>
            </div>
          </Suspense>
          <Footer />
        </ErrorBoundary>
        <Scripts />
        <script src="//unpkg.com/@highlightjs/cdn-assets@11.7.0/highlight.min.js"></script>
        <script>hljs.highlightAll();</script>
      </Body>
    </Html>
  );
}
