import { createContext, useState } from "react"
import { Task } from "../@types/task"

interface TaskContextProps {
  tasks: Task[]
  createNewTask: (data: Task) => void
  deleteTask: (id: string) => void
  updateTask: (id: string, data: string) => void
  toggleCompletedTask: (id: string, data: boolean) => void
}

export const TaskContext = createContext({} as TaskContextProps)

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "db85d68c-mks0-00c6-a1ac-a5ff359mkb3f",
      title: "cadastrar transação",
      completed: false,
    },
    {
      id: "db85d68c-mks0-00c6-a1ac-a5ff359m3b1b",
      title: "aprender typescript",
      completed: true,
    },
  ])

  function createNewTask(data: Task) {
    setTasks((state) => [...state, data])
  }

  function updateTask(id: string, data: string) {
    setTasks((tasks) => {
      const newTasks = tasks.map((task) => {
        if (task.id === id) {
          return { ...task, title: data }
        }
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

  function toggleCompletedTask(id: string, data: boolean) {
    setTasks((tasks) => {
      const newTasks = tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: data }
        }
        return task
      })

      return newTasks
    })
  }

  return (
    <TaskContext.Provider
      value={{ updateTask, deleteTask, createNewTask, tasks, toggleCompletedTask }}
    >
      {children}
    </TaskContext.Provider>
  )
}
