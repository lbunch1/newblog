import { A } from "solid-start";
import { For } from "solid-js";
import "./Articles.css";
import { articles } from './articleList'

export default () => {

  const articleList = [
    {
      title: "Introduction",
      route: "Intro",
      date: new Date("2023-6-13")
    },
  ]

  return (
    <div class="articles">
      <ul>
        <For each={articles} fallback={
          <li>No articles</li>
        }>
          {(article, index) => (
            <li data-index={index}>
              <A href={"/article/" + article.route}>{article.title}</A>
            </li>
          )}
        </For>
      </ul>
    </div>
  )
}

