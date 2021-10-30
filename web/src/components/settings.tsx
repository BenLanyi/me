import { FolderSettings } from "@react95/icons"
import { Checkbox, Fieldset, Button } from "@react95/core"
import * as React from "react"
import styled from "styled-components"
import { StyledModal } from "./styledModal"

interface Props {
	closeModal: () => void
}

// Settings is a component to display dev skills
export const Settings = ({ closeModal }: Props) => {
	return (
		<StyledModal
			defaultPosition={{ x: window.innerWidth / 11, y: window.innerHeight / 1.9 }}
			icon={<FolderSettings />}
			title="Control Panel"
			closeModal={closeModal}
			width="300"
		>
			<div style={{ marginBottom: "10px" }}>Full stack developer settings</div>
			<Fieldset legend="Primary Skills">
				<CheckboxList>
					<Checkbox checked>Golang</Checkbox>
					<Checkbox checked>JavaScript/TypeScript</Checkbox>
					<Checkbox checked>React</Checkbox>
					<Checkbox checked>PostgreSQL</Checkbox>
				</CheckboxList>
			</Fieldset>
			<ButtonContainer>
				<Button onClick={closeModal}>OK</Button>
				<Button onClick={closeModal}>Cancel</Button>
			</ButtonContainer>
		</StyledModal>
	)
}

const CheckboxList = styled.div`
	display: flex;
	flex-direction: column;
`

const ButtonContainer = styled.div`
	display: flex;
	gap: 5px;
	justify-content: flex-end;
	margin-top: 10px;
`
