/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query launchLatest {\n    launchLatest {\n      mission_name\n      id\n      launch_date_utc\n      rocket {\n        rocket_type\n        rocket_name\n      }\n      links {\n        video_link\n      }\n    }\n  }\n": types.LaunchLatestDocument,
    "\n  query Launches {\n    launches {\n      mission_name\n      rocket {\n        rocket_name\n        rocket_type\n      }\n      launch_date_utc\n      links {\n        video_link\n      }\n      id\n    }\n  }\n": types.LaunchesDocument,
    "\nquery GetLaunch($launchId: ID!) {\n  launch(id: $launchId) {\n    id\n    launch_date_utc\n    launch_site {\n      site_name\n    }\n    launch_success\n    links {\n      video_link\n      wikipedia\n      article_link\n      flickr_images\n    }\n    mission_name\n    rocket {\n      rocket_name\n      rocket_type\n    }\n    ships {\n      name\n    }\n  }\n}\n": types.GetLaunchDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query launchLatest {\n    launchLatest {\n      mission_name\n      id\n      launch_date_utc\n      rocket {\n        rocket_type\n        rocket_name\n      }\n      links {\n        video_link\n      }\n    }\n  }\n"): (typeof documents)["\n  query launchLatest {\n    launchLatest {\n      mission_name\n      id\n      launch_date_utc\n      rocket {\n        rocket_type\n        rocket_name\n      }\n      links {\n        video_link\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Launches {\n    launches {\n      mission_name\n      rocket {\n        rocket_name\n        rocket_type\n      }\n      launch_date_utc\n      links {\n        video_link\n      }\n      id\n    }\n  }\n"): (typeof documents)["\n  query Launches {\n    launches {\n      mission_name\n      rocket {\n        rocket_name\n        rocket_type\n      }\n      launch_date_utc\n      links {\n        video_link\n      }\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetLaunch($launchId: ID!) {\n  launch(id: $launchId) {\n    id\n    launch_date_utc\n    launch_site {\n      site_name\n    }\n    launch_success\n    links {\n      video_link\n      wikipedia\n      article_link\n      flickr_images\n    }\n    mission_name\n    rocket {\n      rocket_name\n      rocket_type\n    }\n    ships {\n      name\n    }\n  }\n}\n"): (typeof documents)["\nquery GetLaunch($launchId: ID!) {\n  launch(id: $launchId) {\n    id\n    launch_date_utc\n    launch_site {\n      site_name\n    }\n    launch_success\n    links {\n      video_link\n      wikipedia\n      article_link\n      flickr_images\n    }\n    mission_name\n    rocket {\n      rocket_name\n      rocket_type\n    }\n    ships {\n      name\n    }\n  }\n}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;