import * as React from "react"
import { Computer3, FolderSettings, Notepad, ReaderClosed } from "@react95/icons"
import { List, TaskBar } from "@react95/core"
import { Shutdown } from "./shutdown"
import { LocalDisk } from "./localDisk"
import { Settings as SettingsModal } from "./settings"
import { Note } from "./note"
import { IconContainer } from "./iconContainer"
import styled from "styled-components"

export const Desktop = () => {
	const [showNote, setShowNote] = React.useState(true)
	const [showLocalDisk, setShowLocalDisk] = React.useState(true)
	const [showSettings, setShowSettings] = React.useState(true)
	const [showShutdown, setShowShutdown] = React.useState(false)
	const [restarting, setRestarting] = React.useState(false)

	// reset will simulate a shutdown and restart, opening all the original windows in original position.
	const reset = () => {
		setShowShutdown(false)
		setShowNote(false)
		setShowLocalDisk(false)
		setShowSettings(false)

		// Run timeouts to simulate a restart with icons disappearing etc.
		setTimeout(() => {
			setRestarting(true)
			setTimeout(() => {
				setRestarting(false)
				setTimeout(() => {
					setShowNote(true)
					setShowLocalDisk(true)
					setShowSettings(true)
				}, 500)
			}, 1000)
		}, 500)
	}

	return (
		<>
			{showLocalDisk && <LocalDisk closeModal={() => setShowLocalDisk(false)} />}

			{showShutdown && <Shutdown closeModal={() => setShowShutdown(false)} reset={reset} />}

			{showSettings && <SettingsModal closeModal={() => setShowSettings(false)} />}

			{showNote && <Note closeModal={() => setShowNote(false)} />}

			{!restarting && (
				<DesktopIcons>
					<IconContainer onClick={() => setShowNote(true)}>
						<Notepad variant="32x32_4" />
						about-me.txt
					</IconContainer>
				</DesktopIcons>
			)}

			{!restarting && (
				<TaskBar
					list={
						<List>
							<List.Item icon={<ReaderClosed variant="32x32_4" />} onClick={() => setShowLocalDisk(true)}>
								Local Disk (C:)
							</List.Item>
							<List.Item icon={<FolderSettings variant="32x32_4" />} onClick={() => setShowSettings(true)}>
								Control Panel
							</List.Item>
							<List.Divider />
							<List.Item icon={<Computer3 variant="32x32_4" />} onClick={() => setShowShutdown(true)}>
								Shut Down...
							</List.Item>
						</List>
					}
				/>
			)}
		</>
	)
}

const DesktopIcons = styled.div`
	padding: 20px;
`
