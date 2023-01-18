/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '../trpc';
import { Picture } from '../../../utils/api-data';

export const exampleRouter = createTRPCRouter({
	hello: publicProcedure
		.input(z.object({ text: z.string() }))
		.query(({ input }) => {
			return {
				greeting: `Hello ${input.text}`,
			};
		}),
	getAll: publicProcedure.query(({ ctx }) => {
		return ctx.prisma.example.findMany();
	}),
	signUp: publicProcedure
		.input(z.object({ email: z.string(), password: z.string() }))
		.mutation(({ input, ctx }) => {
			const user = ctx.prisma.user.create({
				data: {
					email: input.email,
					password: input.password,
				},
			});
			return user;
		}),
	getUsers: publicProcedure.query(({ ctx }) => {
		return ctx.prisma.user.findMany();
	}),
	addPicture: publicProcedure
		.input(
			z.object({ title: z.string(), url: z.string(), thumbnailUrl: z.string() })
		)
		.mutation(({ input, ctx }) => {
			const picture = ctx.prisma.picture.create({
				data: {
					title: input.title,
					url: input.url,
					thumbnailUrl: input.thumbnailUrl,
				},
			});
			return picture;
		}),
});
