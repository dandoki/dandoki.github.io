import React from 'react';
import Head from "react-helmet";
import { Router, Route, browserHistory, Link } from "react-router";
import {
  createApp,
  createContainer,
  query,
  BodyRenderer
} from "@phenomic/preset-react-app/lib/client";

import Layout from '../components/Layout';

const Home = ({ isLoading, posts }) => (
    <Layout>
        <Head>
            <title>Pixel Brush</title>
            <meta name="description" content="Everything is awesome!" />
        </Head>
        <a href="/">
            <h1>Pixel Brush</h1>
        </a>
        <nav />
        {isLoading && "Loading..."}
        {!isLoading && (
            <ul>
                {posts &&
                posts.node &&
                posts.node.list &&
                posts.node.list.map(post => (
                    <li key={post.id}>
                    <Link to={`/blog/${post.id}/`}>{post.title || post.id}</Link>
                    </li>
                ))}
            </ul>
        )}
        <div>
            {posts.node &&
            posts.node.hasPreviousPage && (
                <Link
                    to={
                        posts.node.previousPageIsFirst ? (
                        `/`
                        ) : (
                        `/after/${posts.node.previous}/`
                        )
                    }
                >
                    Newer posts
                </Link>
            )}{" "}
            {posts.node &&
            posts.node.hasNextPage && (
                <Link to={`/after/${posts.node.next}/`}>Older posts</Link>
            )}
        </div>
    </Layout>
    );

const HomeContainer = createContainer(Home, props => ({
    posts: query({ 
        path: "posts",
        limit: 2,
        after: props.params.after,
    }),
}));

export default HomeContainer;
