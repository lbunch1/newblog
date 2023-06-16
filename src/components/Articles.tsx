import { A } from "solid-start";
import { For } from "solid-js";
import "./Articles.css";
import { articles } from './articleList'

export default () => {

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

