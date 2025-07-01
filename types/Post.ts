export type Post = {
    id: number;
    title: string;
    description: string | null;
    body: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    is_deleted: boolean;
    user_id: number;
};