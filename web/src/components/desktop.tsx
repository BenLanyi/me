import * as React from "react"
import { Computer3, FolderSettings, ReaderClosed, WindowsExplorer } from "@react95/icons"
import { List, TaskBar } from "@react95/core"
import { Shutdown } from "./shutdown"
import { LocalDisk } from "./localDisk"
import { Settings as SettingsModal } from "./settings"
import { Note } from "./note"

export const Desktop = () => {
	const [showNote, setShowNote] = React.useState(true)
	const [showLocalDisk, setShowLocalDisk] = React.useState(true)
	const [showSettings, setShowSettings] = React.useState(true)
	const [showShutdown, setShowShutdown] = React.useState(false)

	return (
		<>
			{showLocalDisk && <LocalDisk closeModal={() => setShowLocalDisk(false)} />}

			{showShutdown && <Shutdown closeModal={() => setShowShutdown(false)} />}

			{showSettings && <SettingsModal closeModal={() => setShowSettings(false)} />}

			{showNote && <Note closeModal={() => setShowNote(false)} />}

			<TaskBar
				list={
					<List>
						<List.Item icon={<ReaderClosed variant="32x32_4" />} onClick={() => setShowLocalDisk(true)}>
							Local Disk (C:)
						</List.Item>
						<List.Item
							icon={<WindowsExplorer variant="32x32_4" />}
							onClick={() => {
								setShowNote(true)
							}}
						>
							Windows Explorer
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
		</>
	)
}
