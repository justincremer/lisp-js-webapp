import { Arg, Int, Mutation, Query } from 'type-graphql';
import { Post } from '../entities';

export class PostResolver {
	@Query(() => [Post])
	async listPosts(): Promise<Array<Post>> {
		try {
			const result = Post.find();

			return result ?? null;
		} catch (e) {
			throw new Error(e);
		}
	}

	@Query(() => Post, { nullable: true })
	async getPost(@Arg('id', () => Int) id: number): Promise<Post | null> {
		try {
			const result = await Post.findOne(id);

			return result ?? null;
		} catch (e) {
			throw new Error(e);
		}
	}

	@Mutation(() => Post)
	async createPost(
		@Arg('content', () => String)
		content: string,
	): Promise<Post> {
		try {
			const post = { content };

			const result = await Post.create(post);
			await Post.save(result);

			return result;
		} catch (e) {
			throw new Error(e);
		}
	}

	@Mutation(() => Post)
	async updatePost(
		@Arg('id', () => Int)
		id: number,
		@Arg('content', () => String)
		content: string,
	): Promise<Post> {
		try {
			const post = await this.getPost(id);
			const data = { content };

			Object.assign(post, data);
			await post?.save();

			return post!;
		} catch (e) {
			throw new Error(e);
		}
	}

	@Mutation(() => Post)
	async upsertPost(
		@Arg('id', () => Int)
		id: number,
		@Arg('content', () => String)
		content: string,
	): Promise<Post> {
		try {
			const user = await this.getPost(id);

			if (user) {
				const data = { content };

				Object.assign(user, data);
				await user?.save();

				return user!;
			} else {
				const result = await this.createPost(content);

				return result;
			}
		} catch (e) {
			throw new Error(e);
		}
	}

	@Mutation(() => Boolean)
	async deletePost(
		@Arg('id', () => Int)
		id: number,
	): Promise<Boolean> {
		try {
			try {
				await Post.delete(id);
				return true;
			} catch {
				return false;
			}
		} catch (e) {
			throw new Error(e);
		}
	}
}
