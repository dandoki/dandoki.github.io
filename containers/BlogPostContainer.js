import React from 'react';
import { Router, Route, browserHistory, Link } from "react-router";
import {
  createApp,
  createContainer,
  query,
  BodyRenderer
} from "@phenomic/preset-react-app/lib/client";

import PageError from '../components/PageError';
import Layout from '../components/Layout';
import PostLayouts from './LayoutContainer';

const BlogPost = ({ hasError, isLoading, page }) => {
    console.log(hasError, page);
    if (hasError) {
        return <PageError error={page.error} />;
    }

    const PostLayout =
        (page.node && PostLayouts[page.node.layout]) || PostLayouts.default;
        return (
            <Layout>
                {isLoading && "Loading..."}
                {!isLoading && page.node && <PostLayout {...page.node} />}
                <footer>
                    <Link to="/">Go to home</Link>
                </footer>
            </Layout>
        );
    };

const BlogPostContainer = createContainer(BlogPost, props => ({
    page: query({ 
        path: "posts", 
        id: props.params.splat,
        limit: 1,
    })
}));

export default BlogPostContainer;
