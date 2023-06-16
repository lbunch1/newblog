import "./BlogElements.css";
import { Show } from "solid-js";
import { Head, Title } from "solid-start";

export const ArticleHeader = (props: any) => (
  <>
    <Head>
      <Title>{props.title} - logno.dev</Title>
    </Head>
    <div>
      <h1>{props.title}</h1>
      <div class="small">Posted: {props.date}</div>
      <Show when={props.updated}>
        <div class="small">Updated: {props.updated}</div>
      </Show>
      <div class="author">Written by: {props.author}</div>
      <Show when={props.img}>
        <figure>
          <img src={props.img.src} alt={props.img.credit} />
          <figcaption>Image by {props.img.credit}</figcaption>
        </figure>
      </Show>
    </div>
  </>
)


export const Anchor = (props: any) => (
  <a id={props.id} href={"#" + props.id}>#</a>
)

