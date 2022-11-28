import styled, { keyframes } from "styled-components"

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 1rem auto 3rem;
  max-width: 820px;
  padding: 3rem 1rem 0;
  width: 100%;

  > div:first-child {
    align-items: center;
    border-bottom: 3px solid ${({ theme }) => theme.colors.violet[500]};
    display: flex;
    gap: 1rem;
    padding-bottom: 0.5rem;

    h1 {
      font-size: ${({ theme }) => theme.fontSize.xxxl};
      user-select: none;
    }
  }

  section:last-child {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
  }

  @media (max-width: 992px) {
    max-width: 768px;
  }

  @media (max-width: 992px) {
    max-width: 588px;
  }
`

export const Item = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.colors.gray[700]};
  border-radius: ${({ theme }) => theme.radii.sm};
  box-shadow: 0px 8px 10px -7px rgba(0, 0, 0, 0.5);
  display: flex;
  gap: 1.5rem;
  padding: 0.5rem 1rem;
  width: 100%;

  p {
    font-size: ${({ theme }) => theme.fontSize.lg};
    max-width: 50ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  div {
    margin-left: auto;

    button {
      background: transparent;
      border-radius: ${({ theme }) => theme.radii.sm};
      border: none;
      cursor: default;
      line-height: 0;
      outline: none;
      padding: 0.4rem;

      &:focus {
        outline: none;
        box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.violet[500]};
      }

      &:hover {
        background: ${({ theme }) => theme.colors.gray[800]};
        transition: background-color 0.3s, color 0.3s;
      }

      svg {
        color: ${({ theme }) => theme.colors.gray[400]};
      }
    }
  }
`

export const NewTaskContainer = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 780px;
  width: 100%;

  form {
    align-items: center;
    display: flex;
    gap: 1rem;
    width: 100%;

    input {
      background: ${({ theme }) => theme.colors.gray[700]};
      border-radius: ${({ theme }) => theme.radii.sm};
      border-top: 3px solid transparent;
      border: 3px solid transparent;
      color: ${({ theme }) => theme.colors.gray[100]};
      font-size: ${({ theme }) => theme.fontSize.xl};
      height: 3rem;
      outline: none;
      padding: 0 1rem;
      width: 100%;

      &:focus {
        outline: none;
        border-bottom: 3px solid ${({ theme }) => theme.colors.violet[500]};
      }

      &::placeholder {
        color: ${({ theme }) => theme.colors.gray[400]};
      }
    }

    @media (max-width: 414px) {
      flex-direction: column;
    }
  }
`

const spinnerLoading = keyframes`
	100% {
		transform: rotate(360deg);
	}
`

export const ButtonNewTask = styled.button`
  align-items: center;
  background: ${({ theme }) => theme.colors.violet[500]};
  border-radius: ${({ theme }) => theme.radii.sm};
  border: none;
  color: ${({ theme }) => theme.colors.gray[100]};
  display: flex;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  height: 3rem;
  justify-content: center;
  outline: none;
  padding: 0.5rem;
  position: relative;
  width: 15rem;

  svg {
    animation: ${spinnerLoading} 1s ease-in-out infinite;
    left: 10px;
    position: absolute;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.violet[700]};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.violet[50]};
    color: ${({ theme }) => theme.colors.gray[500]};
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors.violet[700]};
    transition: background-color 0.3s;
  }

  @media (max-width: 414px) {
    width: 100%;
  }
`
