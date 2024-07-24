import {a, type ClientSchema, defineData} from "@aws-amplify/backend";
// @ts-expect-error caused by not resolving to jsx?
import UnitOfTimeEnum from "../../src/model/UnitOfTimeEnum";

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any user authenticated via an API key can "create", "read",
"update", and "delete" any "Todo" records.
=========================================================================*/
const schema = a.schema({
  Categories: a.model({
    category: a.string(),
    tasks: a.hasMany('Tasks', 'taskId')
  }).authorization(allow => [allow.owner()]),
  Tasks: a.model({
    taskId: a.id().required(),
    task: a.string().required().default('New Task'),
    lastCompletedDate: a.date(),
    howOften: a.integer().required().default(1),
    unitOfTime: a.enum([UnitOfTimeEnum.days, UnitOfTimeEnum.months, UnitOfTimeEnum.years]),
    taskLogs: a.hasMany('TaskLogs', 'id'),
    category: a.belongsTo('Categories', "taskId")
  }).authorization(allow => [allow.owner()]),
  TaskLogs: a.model({
    id: a.id().required(),
    taskId: a.string(),
    notes: a.string(),
    completionDate: a.date().required(),
    attachmentPath: a.string(),
    task: a.belongsTo('Tasks', "id")
  }).authorization(allow => [allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
  },
});
/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>