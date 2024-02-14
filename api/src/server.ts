import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";

import { postNote } from "./routes/create-note";
import { deleteNote } from "./routes/delete-note";
import { getNote } from "./routes/get-note";
import { putNote } from "./routes/put-note";
import { initDatabase } from "./lib/prisma";
import { getUser } from "./routes/get-user";
import { postUser } from "./routes/create-user";

const app = fastify();

app.register(fastifyCors, {
	origin: "*",
});

app.register(getUser);
app.register(postUser);

app.register(postNote);
app.register(putNote);
app.register(getNote);
app.register(deleteNote);

initDatabase()
	.then(() => {
		console.log("Database connected");
	})
	.catch((err) => {
		console.log("Error connecting to database: ", err);
		process.exit(1);
	});

app
	.listen({ port: 3333 })
	.then(() => {
		console.log("listening on port 3333");
	})
	.catch((err) => {
		console.log("Error starting server: ", err);
		process.exit(1);
	});
