import { A } from "solid-start";
import { createSignal } from "solid-js";
import "./TopBar.css"
import Articles from "./Articles";

export const burgerIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="burger icon">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
)

export const closeIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="close icon">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>

)

export default function TopBar() {

  const [showMenu, setShowMenu] = createSignal(false)

  return (
    <div class="site-header">
      <a href="#" onClick={() => setShowMenu(!showMenu())}>
        {burgerIcon}
      </a>
      <A href="/">logno.dev <span class="cursive">blog</span></A>
      <div classList={{ ["menu-open"]: showMenu(), menu: true }}>
        <a href="#" onClick={() => setShowMenu(!showMenu())}>
          {closeIcon}
        </a>
        <div onClick={() => setShowMenu(!showMenu())}>
          <Articles />
        </div>
      </div>
    </div >
  )
}
