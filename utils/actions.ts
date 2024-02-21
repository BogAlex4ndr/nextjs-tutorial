'use server'

import { revalidatePath } from "next/cache";
import prisma from "./db";
import { redirect } from "next/navigation";
import { z } from "zod";


export const getAllTasks = async () => {
    const allTasks = await prisma.tasks.findMany({
        orderBy: {
            createtAt: "desc"
        }
    })
    return allTasks;
}

export const createTask = async (formData: any) => {
    const content = await formData.get('content')
    await prisma.tasks.create(
        {
            data: {
                content
            }
        }
    )
    revalidatePath('/tasks')
    return content;
}

export const createTaskCustom = async (prevState: any, formData: any) => {
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    const content = formData.get('content');
    const Task = z.object({
        content: z.string().min(5, "add more latter")
    })

    try {
        Task.parse({ content })

        await prisma.tasks.create({
            data: {
                content,
            },
        });
        // revalidate path
        revalidatePath('/tasks');
        return { message: "success" }
    } catch (error) {
        return { message: "error" }
    }

};

export const deleteTask = async (formData: any) => {
    const id = formData.get("id")
    await prisma.tasks.delete({
        where: {
            id
        }
    })
    revalidatePath('/tasks')
}

export const getTask = async (id: any) => {
    return prisma.tasks.findUnique({
        where: {
            id
        }
    })
}
export const editTask = async (formData: any) => {
    const id = formData.get("id")
    const content = formData.get("content")
    const completed = formData.get("completed")

    await prisma.tasks.update({
        where: {
            id,
        },
        data: {
            content,
            completed: completed === "on" ? true : false
        }
    })
    redirect('/tasks')
}