import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	body {
		background-attachment: fixed;
		background-image: url("/images/background.svg");
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		background: ${({ theme }) => theme.colors.gray[900]};
		color: ${({ theme }) => theme.colors.gray[100]};
	}

	body, input, select, textarea, button {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		font-size: ${({ theme }) => theme.fontSize.md};
		font-weight: ${({ theme }) => theme.fontWeight.regular};
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	button {
		cursor: pointer;
	}

	@media (max-width: 992px) {
		body {
			background: ${({ theme }) => theme.colors.gray[900]};
			background-image: url("/images/background-900.svg");
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;
			background-attachment: fixed;
		}
	}

	@media (max-width: 786px) {
		body {
			background: ${({ theme }) => theme.colors.gray[900]};
			background-image: url("/images/background-768.svg");
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;
			background-attachment: fixed;
		}
	}

	@media (max-width: 414px) {
		body {
			background: ${({ theme }) => theme.colors.gray[900]};
			background-image: url("/images/background-414.svg");
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;
			background-attachment: fixed;
		}
	}

	@media (max-width: 992px) {
		html {
			font-size: 93.75%;
		}
	}

	@media (max-width: 768px) {
		html {
			font-size: 87.5%;
		}
	}
`
