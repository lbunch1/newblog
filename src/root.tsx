// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
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
      </Body>
    </Html>
  );
}
