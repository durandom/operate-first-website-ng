// import Layout from "./layout"
// import Listing from "./listing"
// import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
// import replaceSlashes from "../utils/replaceSlashes"
// import Seo from "./seo"

import React from 'react';
import PropTypes from 'prop-types';

import { ActionIcon, Image, Card, Badge, Avatar, createStyles } from '@mantine/core';
import { Heart, Bookmark, Share } from 'tabler-icons-react';

import { Text, SimpleGrid, Container, Title } from '@mantine/core';
import { Group } from '@mantine/core';

import { Code, Cloud, BuildingCommunity } from 'tabler-icons-react';

import '../pages/style.css';
// Component imports
import Layout from "./Layout";

const useStyles = createStyles((theme) => ({
  card: {
      position: 'relative',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },
  footer: {
      padding: `${theme.spacing.xs}px ${theme.spacing.lg}px`,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
      }`,
  },
}));

type PostsProps = {
  posts: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    tags?: {
      name: string
      slug: string
    }[]
  }[]
}

export const Blog = ({ posts }: PostsProps) => {
  // const { tagsPath, basePath } = useMinimalBlogConfig()
  const { classes, theme } = useStyles();
  console.log(posts);

  return (
    <Layout>
      {posts.map((post) => (
                <Card withBorder p="lg" radius="md" className={classes.card}>
                <Card.Section mb="sm">
                  {/* <Image src={c.image} alt={c.title} height={180} /> */}
                </Card.Section>

                {/* {post.tags.map((tag) => (
                  <Badge>{tag.name}</Badge>
                ))} */}

                <Text weight={700} className={classes.title} mt="xs">
                  {post.title}
                </Text>

                {/* <Group mt="lg">
                  <Avatar src={c.author.image} radius="sm" />
                  <div>
                    <Text weight={500}>{c.author.name}</Text>
                    <Text size="xs" color="dimmed">
                      {c.author.description}
                    </Text>
                  </div>
                </Group>

                <Card.Section className={classes.footer}>
                  <Group position="apart">
                    <Text size="xs" color="dimmed">
                      {c.footer}
                    </Text>
                  </Group>
                  <Group spacing={0}>
                    <ActionIcon>
                      <Heart size={18} color={theme.colors.red[6]} />
                    </ActionIcon>
                    <ActionIcon>
                      <Bookmark size={18} color={theme.colors.yellow[6]} />
                    </ActionIcon>
                    <ActionIcon>
                      <Share size={16} color={theme.colors.blue[6]} />
                    </ActionIcon>
                  </Group>
                </Card.Section> */}
              </Card>
      ))}
    </Layout>
);
}

export default Blog


      // <BlogListItem key={post.slug} post={post} showTags={showTags} />

    //   <Box mb={4}>
    //   <Link to={post.slug} sx={(t) => ({ ...t.styles?.a, fontSize: [1, 2, 3], color: `text` })}>
    //     {post.title}
    //   </Link>
    //   <p sx={{ color: `secondary`, mt: 1, a: { color: `secondary` }, fontSize: [1, 1, 2] }}>
    //     <time>{post.date}</time>
    //     {post.tags && showTags && (
    //       <React.Fragment>
    //         {` — `}
    //         <ItemTags tags={post.tags} />
    //       </React.Fragment>
    //     )}
    //   </p>
    // </Box>
    // ))}


    // <main>
    //   <Layout>
    //   </Layout>
    // </main>
    // <Layout>
    //   <Seo title="Blog" />
    //   <Flex sx={{ alignItems: `center`, justifyContent: `space-between`, flexFlow: `wrap` }}>
    //     <Heading as="h1" variant="styles.h1" sx={{ marginY: 2 }}>
    //       Blog
    //     </Heading>
    //     <Link
    //       sx={(t) => ({ ...t.styles?.a, variant: `links.secondary`, marginY: 2 })}
    //       to={replaceSlashes(`/${basePath}/${tagsPath}`)}
    //     >
    //       View all tags
    //     </Link>
    //   </Flex>
    //   <Listing posts={posts} sx={{ mt: [4, 5] }} />
    // </Layout>
