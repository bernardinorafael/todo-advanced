import { createContext, useEffect, useState } from "react"
import { Task } from "../@types/task"

interface TaskContextProps {
  tasks: Task[]
  createNewTask: (data: Task) => void
  deleteTask: (id: string) => void
  updateTask: (id: string, data: string) => void
  toggleCompleteTask: (id: string, data: boolean) => void
}

export const TaskContext = createContext({} as TaskContextProps)

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const currTask = JSON.parse(localStorage.getItem("tasks")!)

  const [tasks, setTasks] = useState<Task[] | []>(currTask ?? [])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  function createNewTask(data: Task) {
    setTasks((state) => [...state, data])
  }

  function updateTask(id: string, data: string) {
    setTasks((tasks) => {
      const newTasks = tasks.map((task) => {
        if (task.id === id) return { ...task, title: data }
        return task
      })

      return newTasks
    })
  }

  function deleteTask(id: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== id
    })

    setTasks(tasksWithoutDeletedOne)
  }

  function toggleCompleteTask(id: string, data: boolean) {
    setTasks((tasks) => {
      const newTasks = tasks.map((task) => {
        if (task.id === id) return { ...task, completed: data }
        return task
      })

      return newTasks
    })
  }

  return (
    <TaskContext.Provider
      value={{ updateTask, deleteTask, createNewTask, tasks, toggleCompleteTask }}
    >
      {children}
    </TaskContext.Provider>
  )
}
