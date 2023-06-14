import "./ArticleHeader.css";
import { Show } from "solid-js";
import { Head, Title } from "solid-start";

export default function(props: any) {
  return (
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
}
