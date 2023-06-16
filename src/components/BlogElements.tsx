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


export const linkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="anchor-icon">
    <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
  </svg>
)

export const Anchor = (props: any) => (
  <a id={props.id} href={"#" + props.id}>{linkIcon}</a>
)

