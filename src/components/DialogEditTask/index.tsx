import { yupResolver } from "@hookform/resolvers/yup"
import * as Dialog from "@radix-ui/react-dialog"
import * as Icon from "phosphor-react"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import * as y from "yup"
import { TaskContext } from "../../context/TaskContext"
import {
  ButtonConfirmChanges,
  CloseDialogButton,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogTitle,
} from "./styles"

interface DialogEditTaskContentProps {
  title: string
  id: string
  onHandleCloseDialog: () => void
}

const schema = y.object({
  title: y.string().required("Campo obrigatório"),
})

interface TaskForm extends y.InferType<typeof schema> {}

export function DialogEditTaskContent({
  id,
  title,
  onHandleCloseDialog,
}: DialogEditTaskContentProps) {
  const { updateTask } = useContext(TaskContext)
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<TaskForm>({
    resolver: yupResolver(schema),
  })

  async function handleEditTask({ title }: TaskForm) {
    await new Promise((resolve) => setTimeout(resolve, 800))

    onHandleCloseDialog()
    updateTask(id, title)
  }

  return (
    <Dialog.Portal>
      <DialogOverlay />

      <DialogContent>
        <Dialog.Close asChild>
          <CloseDialogButton>
            <Icon.X size={24} weight="bold" />
          </CloseDialogButton>
        </Dialog.Close>

        <DialogTitle>Edite sua tarefa</DialogTitle>
        <DialogDescription>Clique em salvar quando terminar.</DialogDescription>

        <form onSubmit={handleSubmit(handleEditTask)}>
          <input
            autoFocus
            defaultValue={title}
            id="edit-task"
            placeholder="Edite sua tarefa"
            type="text"
            {...register("title")}
          />
          {!isSubmitting ? (
            <ButtonConfirmChanges type="submit">Salvar</ButtonConfirmChanges>
          ) : (
            <ButtonConfirmChanges disabled={isSubmitting} type="submit">
              <Icon.CircleNotch size={24} weight="bold" />
              Salvar
            </ButtonConfirmChanges>
          )}
        </form>
      </DialogContent>
    </Dialog.Portal>
  )
}
