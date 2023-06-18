import { For } from "solid-js";
import "./gallery.css";


export default function() {

  let fileNames = []

  for (let i = 1; i <= 20; i++) {
    let path = "./paintings/" + i.toString().padStart(3, "0") + ".PNG";
    fileNames.push(path);
  }

  return (
    <div class="gallery">
      <h1>Gallery</h1>
      <For each={fileNames}>{(path) =>
        <img src={path} />}
      </For>
    </div>
  )
} 
