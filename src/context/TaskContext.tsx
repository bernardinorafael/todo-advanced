import { createContext, useContext, useEffect, useState } from "react"
import { Task } from "../@types/task"

interface TaskContextProps {
  tasks: Task[]
  createNewTask: (data: Task) => void
  deleteTask: (id: string) => void
  updateTask: (id: string, data: string) => void
}

export const TaskContext = createContext({} as TaskContextProps)

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const storedTask = JSON.parse(localStorage.getItem("@BERNARDINO:TODO-LIST")!)

  const [tasks, setTasks] = useState<Task[] | []>(storedTask ?? [])

  useEffect(() => {
    localStorage.setItem("@BERNARDINO:TODO-LIST", JSON.stringify(tasks))
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

  // function toggleCompleteTask(id: string, data: boolean) {
  //   setTasks((tasks) => {
  //     const newTasks = tasks.map((task) => {
  //       if (task.id === id) return { ...task, completed: data }
  //       return task
  //     })

  //     return newTasks
  //   })
  // }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        updateTask,
        deleteTask,
        createNewTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}

export default function useTasks() {
  const context = useContext(TaskContext)

  if (!context) throw new Error("useTask cannot be used within TaskContext")

  return context
}
