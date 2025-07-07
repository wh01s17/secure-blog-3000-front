import { FullPost } from "@/components/blog/FullPost";

interface PostProps {
    params: Promise<{ id: String }>
}

export default async function PostPage({ params }: Awaited<PostProps>) {
    const { id } = await params

    return (
        <FullPost id={id} />
    )
}

