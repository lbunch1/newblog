import { A } from "solid-start";
import { For } from "solid-js";
import "./Articles.css";
import { articles } from './articleList'

export default () => {

function compareFn(a: any, b: any) {
    if (a.date > b.date) {
        return -1
    }
    if (a.date < b.date) {
        return 1
    }
    return 0
}

const sortArticles = articles.slice().sort(compareFn)

  return (
    <div class="articles">
      <ul>
        <li><A href="/about">About</A></li>
        <br />
        <li><h5 style="text-decoration: underline">Posts</h5></li>
        <For each={sortArticles} fallback={
          <li>No articles</li>
        }>
          {(article, index) => (
            <li data-index={index}>
              <A href={"/article/" + article.route}>{article.title} <br />
              <small>{article.date.toLocaleDateString()}</small></A>
            </li>
          )}
        </For>
      </ul>
    </div>
  )
}

