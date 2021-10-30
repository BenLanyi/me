import { ReaderClosed, Shell32136 } from "@react95/icons"
import { Modal, RadioButton, Button } from "@react95/core"
import * as React from "react"
import styled from "styled-components"

interface Props {
	closeModal: () => void
}

export const Shutdown = ({ closeModal }: Props) => {
	return (
		<Modal
			defaultPosition={{ x: window.innerWidth / 2 - 175, y: window.innerHeight / 2 - 100 }}
			width="350"
			height="200"
			icon={<ReaderClosed variant="16x16_4" />}
			title="Shut Down"
			closeModal={closeModal}
		>
			<Container>
				<Left>
					<Shell32136 width={"50px"} height={"50px"} />
				</Left>
				<Right>
					<div>What do you want the computer to do?</div>
					<RadioButtonList>
						<RadioButton readOnly checked>
							Exit to google.com
						</RadioButton>
						<RadioButton readOnly disabled>
							Shut down
						</RadioButton>
					</RadioButtonList>
					<Actions>
						<StyledButton onClick={() => window.open("https://www.google.com", "_self")}>OK</StyledButton>
						<StyledButton onClick={closeModal}>Cancel</StyledButton>
						<StyledButton disabled>Help</StyledButton>
					</Actions>
				</Right>
			</Container>
		</Modal>
	)
}

const Actions = styled.div`
	display: flex;
	gap: 5px;
	width: 100%;
`

const StyledButton = styled(Button)`
	flex: 1;
`

const Container = styled.div`
	display: flex;
	height: 100%;
`

const Left = styled.div`
	display: flex;
	width: 20%;
	justify-content: center;
`

const RadioButtonList = styled.div`
	display: flex;
	flex-direction: column;
`

const Right = styled.div`
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: space-between;
`
