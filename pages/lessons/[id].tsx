import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import InfoLayout from 'layouts/info-layout'
import { components } from 'providers/mdx-provider'
import { GetStaticPaths, GetStaticProps } from 'next'
import { PostData, PostUtil } from 'utils/md_utils'
import { Heading } from '@chakra-ui/react'

export default function TestPage({ source, data }) {
  return (
    <InfoLayout>
      <Heading as="h1" fontSize="5xl" mb="10">{data.title}</Heading>
      <MDXRemote {...source} components={components} />
    </InfoLayout>
  )
}

export async function getStaticProps({ params }) {
  const postData = PostUtil.getPostData(params.id as string)
  const mdxSource = await serialize(postData.mdString)
  return {
    props: {
      source: mdxSource,
      data: postData
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = PostUtil.getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}