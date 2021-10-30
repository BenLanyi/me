import { Notepad } from "@react95/icons"
import { Frame } from "@react95/core"
import * as React from "react"
import styled from "styled-components"
import { StyledModal } from "./styledModal"
import { FileMenu } from "./fileMenu"

interface Props {
	closeModal: () => void
}

// Note will show some general info, like who this page is about in a notepad type style
export const Note = ({ closeModal }: Props) => {
	return (
		<StyledModal
			defaultPosition={{ x: window.innerWidth / 10, y: 0 }}
			icon={<Notepad />}
			title="about-me.txt - Notepad"
			closeModal={closeModal}
			width="300"
			height="200"
		>
			<FileMenu />
			<Frame width={"100%"} height={"100%"} boxShadow="in" bg={"white"}>
				<TextLine>========================</TextLine>
				<TextLine style={{ fontSize: "20px" }}>Ben Lanyi</TextLine>
				<TextLine>Software Developer</TextLine>
				<TextLine>========================</TextLine>
			</Frame>
		</StyledModal>
	)
}

const TextLine = styled.div`
	margin-left: 5px;
`
