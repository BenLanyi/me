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
					<IconContainer onClick={() => window.open("https://www.linkedin.com/in/ben-lanyi/", "_blank")}>
						<Inetcfg2303 />
						LinkedIn
					</IconContainer>
				</Container>
			</Frame>
			<Details>
				<div>2 item(s)</div>
				<div>0 bytes</div>
			</Details>
		</StyledModal>
	)
}

const Container = styled.div`
	display: flex;
	margin: 10px;
`

const Details = styled.div`
	display: flex;
	gap: 2px;
	width: 100%;
	margin-top: 5px;
	margin-bottom: -6px;
	div {
		border-style: inset;
		border-width: 1px;
		flex: 1;
		padding-left: 5px;
	}
`
