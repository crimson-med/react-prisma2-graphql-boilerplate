import { GraphQLServer } from 'graphql-yoga'
import { permissions } from './permissions'
import { schema } from './schema'
import { createContext } from './context'
import { log, LogType } from '@argus-inc/logger'

new GraphQLServer({
  schema,
  context: createContext,
  middlewares: [permissions],
}).start(() =>
    log(`🚀 Server ready at: http://localhost:4000\n⭐️ See sample queries: http://pris.ly/e/ts/graphql-auth#using-the-graphql-api`, LogType.Success)
)
