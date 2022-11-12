import { yupResolver } from "@hookform/resolvers/yup"
import * as AlertDialog from "@radix-ui/react-alert-dialog"
import { v4 as uuid } from "uuid"
import * as Checkbox from "@radix-ui/react-checkbox"
import * as Icon from "phosphor-react"
import * as Dialog from "@radix-ui/react-dialog"
import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import * as y from "yup"
import { AlertDialogContent } from "../components/AlertDialogContent"
import { TaskContext } from "../context/TaskContext"
import {
  ButtonNewTask,
  CheckboxRoot,
  Container,
  Item,
  NewTaskContainer,
} from "../css/pages/home.styles"
import { DialogEditTaskContent } from "../components/DialogEditTask"

const schema = y.object({
  title: y.string().required("Campo obrigatório"),
  completed: y.boolean().notRequired(),
})

interface TaskForm extends y.InferType<typeof schema> {}

export default function Home() {
  const [openDialog, setOpenDialog] = useState(false)
  const { tasks } = useContext(TaskContext)
  const { createNewTask } = useContext(TaskContext)
  const {
    setFocus,
    register,
    handleSubmit,
    reset,
    watch,
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
    await new Promise((resolve) => setTimeout(resolve, 800))

    createNewTask({
      title,
      completed,
      createdAt: new Date(),
      id: uuid(),
    })

    setFocus("title")
    reset()
  }

  const title = watch("title")
  const isButtonDisabled = !title

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
            <ButtonNewTask disabled={isButtonDisabled} type="submit">
              Nova tarefa
            </ButtonNewTask>
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
              <CheckboxRoot>
                <Checkbox.Indicator asChild>
                  <Icon.Check size={25} weight="bold" />
                </Checkbox.Indicator>
              </CheckboxRoot>

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
