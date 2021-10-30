import React from "react"
import { Button, ThemeProvider } from "@react95/core"
import "@react95/icons/icons.css"
import { Desktop } from "./components/desktop"
import styled from "styled-components"

const Background = styled.div`
	height: 100%;
	background-color: #018281;
`

function App() {
	return (
		<ThemeProvider>
			<Background>
				<Desktop />
			</Background>
		</ThemeProvider>
	)
}

export default App
