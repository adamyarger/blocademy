import { GetStaticPaths, GetStaticProps } from 'next'
import { PostData, PostUtil } from 'utils/md_utils'
import InfoLayout from 'layouts/info-layout'

interface PostProps {
  postData: PostData
}

export default function Lesson({ postData }: PostProps) {
  return <InfoLayout>{postData.mdString}</InfoLayout>
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = PostUtil.getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) => {
  const postData = PostUtil.getPostData(params.id as string)
  return {
    props: {
      postData,
    },
  }
}
