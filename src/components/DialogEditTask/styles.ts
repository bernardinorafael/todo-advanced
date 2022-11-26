import * as Dialog from "@radix-ui/react-dialog"
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

export const DialogContent = styled(Dialog.Content)`
  animation: ${fadeAnimation} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  background: ${({ theme }) => theme.colors.gray[800]};
  border-radius: ${({ theme }) => theme.radii.sm};
  border: 1px solid ${({ theme }) => theme.colors.gray[700]};
  left: 50%;
  max-height: 85vh;
  max-width: 550px;
  padding: 2rem;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;

  form {
    align-items: center;
    flex-direction: column;
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
    width: 100%;

    input {
      background: ${({ theme }) => theme.colors.gray[700]};
      border-radius: ${({ theme }) => theme.radii.sm};
      border: none;
      color: ${({ theme }) => theme.colors.gray[300]};
      width: 100%;
      font-size: ${({ theme }) => theme.fontSize.xl};
      height: 3rem;

      outline: none;
      padding: 0 1rem;

      &:focus {
        box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.violet[500]};
        outline: none;
      }

      &::placeholder {
        color: ${({ theme }) => theme.colors.gray[400]};
      }
    }
  }
`

const spinnerLoading = keyframes`
	100% {
		transform: rotate(360deg);
	}
`

export const ButtonConfirmChanges = styled.button`
  align-items: center;
  background: ${({ theme }) => theme.colors.violet[50]};
  border-radius: ${({ theme }) => theme.radii.xs};
  border: none;
  position: relative;
  color: ${({ theme }) => theme.colors.violet[300]};
  display: flex;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  justify-content: center;
  outline: none;
  align-self: flex-end;
  width: 100%;
  padding: 0.875rem 2rem;

  svg {
    animation: ${spinnerLoading} 1s ease-in-out infinite;
    position: absolute;
    left: 10px;
  }

  &:focus {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.violet[500]};
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors.violet[100]};
    transition: background-color 0.3s;
  }
`

export const DialogTitle = styled(Dialog.Title)`
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  line-height: ${({ theme }) => theme.lineHeight.base};
`

export const DialogDescription = styled(Dialog.Description)`
  color: ${({ theme }) => theme.colors.gray[500]};
  font-size: ${({ theme }) => theme.fontSize.lg};
  line-height: ${({ theme }) => theme.lineHeight.short};
`

export const CloseDialogButton = styled.button`
  align-items: center;
  background: transparent;
  border-radius: ${({ theme }) => theme.radii.sm};
  border: none;
  cursor: default;
  display: flex;
  justify-content: center;
  line-height: 0;
  outline: none;
  padding: 0.225rem;
  position: absolute;
  right: 8px;
  top: 8px;

  svg {
    color: ${({ theme }) => theme.colors.gray[300]};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.gray[700]};
    transition: background-color 0.2s;
  }
`

export const DialogOverlay = styled(Dialog.Overlay)`
  animation: ${overlayAnimation} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  background: rgba(0, 0, 0, 0.05);
  inset: 0;
  position: fixed;
`
