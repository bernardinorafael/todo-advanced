import * as AlertDialog from "@radix-ui/react-alert-dialog"
import styled, { keyframes } from "styled-components"

const fadeAnimation = keyframes`
	from {
		opacity: 0;
		transform: translate(-50%, -48%) scale(0.96);
  }

	to {
		opacity: 1;
		transform: translate(-50%, -50%) scale(1);
  }
`

const overlayAnimation = keyframes`
	from {
    opacity: 0;
  }

	to {
    opacity: 1;
  }
`

export const AlertDialogContainer = styled(AlertDialog.Content)`
  animation: ${fadeAnimation} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  background-color: ${({ theme }) => theme.colors.gray[800]};
  border-radius: ${({ theme }) => theme.radii.sm};
  border: 1px solid ${({ theme }) => theme.colors.gray[700]};
  box-shadow: 0px 8px 10px -7px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  left: 50%;
  max-width: 600px;
  padding: 2rem;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
  width: 90vw;
`

export const AlertDialogTitle = styled(AlertDialog.Title)`
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  line-height: ${({ theme }) => theme.lineHeight.base};
`

export const AlertDialogDescription = styled(AlertDialog.Description)`
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.gray[500]};
  line-height: ${({ theme }) => theme.lineHeight.short};
  margin-bottom: 1.5rem;
`

export const AlertDialogOverlay = styled(AlertDialog.Overlay)`
  animation: ${overlayAnimation} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  background: rgba(0, 0, 0, 0.2);
  inset: 0;
  position: fixed;
`

export const ButtonCancel = styled.button`
  align-items: center;
  border-radius: ${({ theme }) => theme.radii.xs};
  border: none;
  cursor: default;
  display: flex;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  justify-content: center;
  outline: none;
  padding: 0.875rem;

  &:hover {
    background: ${({ theme }) => theme.colors.gray[300]};
    transition: background-color 0.3s;
  }

  &:focus {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.gray[400]};
    outline: none;
  }
`

export const ButtonConfirmDelete = styled.button`
  align-items: center;
  background: ${({ theme }) => theme.colors.red[50]};
  border-radius: ${({ theme }) => theme.radii.xs};
  border: none;
  cursor: default;
  color: ${({ theme }) => theme.colors.red[300]};
  display: flex;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  justify-content: center;
  outline: none;
  padding: 0.875rem;

  &:focus {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.red[500]};
    outline: none;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.red[100]};
    transition: background-color 0.3s;
  }
`
