import * as AlertDialog from "@radix-ui/react-alert-dialog"
import useTasks from "../../context/TaskContext"
import {
  AlertDialogContainer,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogTitle,
  ButtonCancel,
  ButtonConfirmDelete,
} from "./styles"

export function AlertDialogContent({ id }: { id: string }) {
  const { deleteTask } = useTasks()

  async function handleDeleteTask(id: string) {
    await new Promise((resolve) => setTimeout(resolve, 300))

    deleteTask(id)
  }

  return (
    <AlertDialog.Portal>
      <AlertDialogOverlay />

      <AlertDialogContainer>
        <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
        <AlertDialogDescription>
          Essa ação não pode ser desfeita. Isso excluirá permanentemente a tarefa e removerá os
          dados de nossos servidores.
        </AlertDialogDescription>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <AlertDialog.Cancel asChild>
            <ButtonCancel>Cancelar</ButtonCancel>
          </AlertDialog.Cancel>

          <AlertDialog.Action onClick={() => handleDeleteTask(id)} asChild>
            <ButtonConfirmDelete>Sim, excluir tarefa</ButtonConfirmDelete>
          </AlertDialog.Action>
        </div>
      </AlertDialogContainer>
    </AlertDialog.Portal>
  )
}
