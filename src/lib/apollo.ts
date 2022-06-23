import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oyicec18wx01xt9lph5s5d/master',
    cache: new InMemoryCache()
})