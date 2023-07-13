import {
  StartServer,
  createHandler,
  renderAsync,
} from "solid-start/entry-server";
import { inject } from '@vercel/analytics'

inject();

export default createHandler(
  renderAsync((event) => <StartServer event={event} />)
);
