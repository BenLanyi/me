import { Inetcfg2303, Install, ReaderClosed } from "@react95/icons"
import { Frame } from "@react95/core"
import * as React from "react"
import styled from "styled-components"
import { IconContainer } from "./iconContainer"
import { StyledModal } from "./styledModal"
import { FileMenu } from "./fileMenu"

interface Props {
	closeModal: () => void
}

// LocalDisk will look like file explorer showing C drive with icons for links to social networks etc.
export const LocalDisk = ({ closeModal }: Props) => {
	return (
		<StyledModal
			defaultPosition={{ x: window.innerWidth / 8, y: window.innerHeight / 4 }}
			width="300"
			height="200"
			icon={<ReaderClosed variant="16x16_4" />}
			title="Local Disk (C:)"
			closeModal={closeModal}
		>
			<FileMenu />
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
		</StyledModal>
	)
}

const Container = styled.div`
	display: flex;
	margin: 10px;
`
