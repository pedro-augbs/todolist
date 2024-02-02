import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";

import { postNote } from "./routes/post-note";
import { deleteNote } from "./routes/delete-note";
import { getNote } from "./routes/get-note";
import { putNote } from "./routes/put-note";

const app = fastify();

app.register(fastifyCors, {
	origin: "*",
});

app.register(postNote);
app.register(putNote);
app.register(getNote);
app.register(deleteNote);

app.listen({ port: 3333 }).then(() => {
	console.log("listening on port 3333");
});
