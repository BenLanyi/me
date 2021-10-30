import { Notepad } from "@react95/icons"
import { Frame, Modal } from "@react95/core"
import * as React from "react"
import styled from "styled-components"

interface Props {
	closeModal: () => void
}

// Note will show some general info, like who this page is about in a notepad type style
export const Note = ({ closeModal }: Props) => {
	return (
		<StyledModal
			defaultPosition={{ x: window.innerWidth / 10, y: 0 }}
			icon={<Notepad />}
			title="General - Notepad"
			closeModal={closeModal}
			width="300"
			height="200"
		>
			<Frame width={"100%"} height={"100%"} boxShadow="in" bg={"white"}>
				<div>========================</div>
				<div style={{ fontSize: "20px" }}>Ben Lanyi</div>
				<div>Software Developer</div>
				<div>========================</div>
			</Frame>
		</StyledModal>
	)
}

const StyledModal = styled(Modal)`
	div {
	}
`
