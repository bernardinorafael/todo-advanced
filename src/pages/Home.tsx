import { yupResolver } from "@hookform/resolvers/yup"
import * as AlertDialog from "@radix-ui/react-alert-dialog"
import * as Dialog from "@radix-ui/react-dialog"
import * as Icon from "phosphor-react"
import { useContext, useState } from "react"
import { v4 as uuid } from "uuid"
import * as y from "yup"
import { useForm } from "react-hook-form"
import { AlertDialogContent } from "../components/AlertDialogContent"
import { DialogEditTaskContent } from "../components/DialogEditTask"
import useTasks, { TaskContext } from "../context/TaskContext"
import { ButtonNewTask, Container, Item, NewTaskContainer } from "../css/pages/home.styles"

const schema = y.object({
  title: y.string().required("Campo obrigatório"),
  completed: y.boolean(),
})

interface TaskForm extends y.InferType<typeof schema> {}

export default function Home() {
  const [openDialog, setOpenDialog] = useState(false)
  const { tasks } = useTasks()
  const { createNewTask } = useContext(TaskContext)
  const {
    setFocus,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<TaskForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      completed: false,
    },
  })

  function handleCloseDialog() {
    setTimeout(() => {
      setOpenDialog(!openDialog)
    }, 500)
  }

  async function handleCreateNewTask({ completed, title }: TaskForm) {
    await new Promise((resolve) => setTimeout(resolve, 500))

    createNewTask({
      title,
      completed,
      createdAt: new Date(),
      id: uuid(),
    })

    setFocus("title")
    reset()
  }

  return (
    <Container>
      <div>
        <h1>Lista de tarefas</h1>
        <Icon.Notepad size={64} weight="duotone" />
      </div>

      <NewTaskContainer>
        <form onSubmit={handleSubmit(handleCreateNewTask)}>
          <input placeholder="Crie uma nova tarefa" type="text" {...register("title")} />
          {!isSubmitting ? (
            <ButtonNewTask type="submit">Nova tarefa</ButtonNewTask>
          ) : (
            <ButtonNewTask type="submit">
              <Icon.CircleNotch size={24} weight="bold" />
              Nova tarefa
            </ButtonNewTask>
          )}
        </form>
      </NewTaskContainer>

      <section>
        {tasks?.map((task) => {
          return (
            <Item key={task.id}>
              <p>{task.title}</p>

              <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
                <AlertDialog.Root>
                  <AlertDialog.Trigger asChild>
                    <button>
                      <Icon.Trash size={25} weight="light" />
                    </button>
                  </AlertDialog.Trigger>

                  <AlertDialogContent id={task.id!} />
                </AlertDialog.Root>

                <Dialog.Root open={openDialog} onOpenChange={setOpenDialog}>
                  <Dialog.Trigger asChild>
                    <button>
                      <Icon.NotePencil size={25} weight="light" />
                    </button>
                  </Dialog.Trigger>

                  <DialogEditTaskContent
                    id={task.id!}
                    title={task.title}
                    onHandleCloseDialog={handleCloseDialog}
                  />
                </Dialog.Root>
              </div>
            </Item>
          )
        })}
      </section>
    </Container>
  )
}
