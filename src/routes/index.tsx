import { A } from "solid-start";
import { For, Show } from "solid-js";

import { articles } from "../components/articleList"

export default function() {
  return (
    <div class="home">
      <h1>Welcome</h1>
      <p>This is my blog about software, tech and anything else I might feel like writing about. Check out my <A href="/article/Intro">introduction post</A> or read more <A href="/about">about me</A>.</p>

      <hr />
      <h2>Posts</h2>
      <div class="article-feeder">
        <For each={articles}>
          {(article) => (
            <A class="snippet" href={"/article/" + article.route}>
              <h3>{article.title}</h3>
              <small>{article.date.toDateString()}</small>
              <Show when={article.img}>
                <img src={article.img.src} alt={article.img.credit} />
              </Show>
              <p>{article.blurb.substring(0, 83)}...</p>
            </A>
          )}
        </For>
      </div>

    </div>
  )
}
