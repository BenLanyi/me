import { Inetcfg2303, Install, ReaderClosed } from "@react95/icons"
import { Frame, Modal } from "@react95/core"
import * as React from "react"
import styled from "styled-components"

interface Props {
	closeModal: () => void
}

// LocalDisk will look like file explorer showing C drive with icons for links to social networks etc.
export const LocalDisk = ({ closeModal }: Props) => {
	return (
		<Modal
			defaultPosition={{ x: window.innerWidth / 8, y: window.innerHeight / 4 }}
			width="300"
			height="200"
			icon={<ReaderClosed variant="16x16_4" />}
			title="Local Disk (C:)"
			closeModal={closeModal}
		>
			<Frame width={"100%"} height={"100%"} boxShadow="in" bg={"white"}>
				<Container>
					<IconContainer onClick={() => window.open("https://github.com/BenLanyi", "_blank")}>
						<Install />
						GitHub
					</IconContainer>
					<IconContainer onClick={() => window.open("https://www.linkedin.com/in/ben-lanyi-b9308a172/", "_blank")}>
						<Inetcfg2303 />
						LinkedIn
					</IconContainer>
				</Container>
			</Frame>
		</Modal>
	)
}

const IconContainer = styled.button`
	display: inline-flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 4;
	flex: 1;
	border: none;
	background-color: transparent;

	i,
	:hover {
		cursor: pointer;
	}

	i {
		margin-bottom: 8;
	}

	:hover {
		box-shadow: out;
	}
`

const Container = styled.div`
	display: flex;
	margin: 10px;
`
