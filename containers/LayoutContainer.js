import React from 'react';
import Head from 'react-helmet';
import {
    BodyRenderer,
    textRenderer
  } from "@phenomic/preset-react-app/lib/client";

const DefaultPostLayout = ({ title, body }) => (
    <article>
        <Head>
        <title>{title}</title>
        <meta
            name="description"
            content={textRenderer(body).slice(0, 150) + "…"}
        />
        </Head>
        <h1>{title}</h1>
        <BodyRenderer>{body}</BodyRenderer>
    </article>
);

const HeroPostLayout = ({ title, body }) => (
    <article>
        <Head>
        <title>{title}</title>
        <meta
            name="description"
            content={textRenderer(body).slice(0, 150) + "…"}
        />
        </Head>
        <div style={{ padding: "4rem", background: "pink", color: "#fff" }}>
            <h1>{title}</h1>
        </div>
        <BodyRenderer>{body}</BodyRenderer>
    </article>
);

const PostLayouts = {
    default: DefaultPostLayout,
    hero: HeroPostLayout
};

export default PostLayouts;
