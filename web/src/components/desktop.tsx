import * as React from "react"

import { ReaderClosed, WindowsExplorer } from "@react95/icons"
import { List, Modal, TaskBar } from "@react95/core"

export const Desktop = () => {
	const [first, toggleFirst] = React.useState(false)
	const [second, toggleSecond] = React.useState(false)

	const closeFirst = () => toggleFirst(false)
	const closeSecond = () => toggleSecond(false)

	return (
		<>
			{first && <Modal icon={<WindowsExplorer variant="16x16_4" />} title="Windows Explorer" closeModal={closeFirst} width="300" height="200" />}

			{second && (
				<Modal
					defaultPosition={{ x: 50, y: 50 }}
					width="300"
					height="200"
					icon={<ReaderClosed variant="16x16_4" />}
					title="Local Disk (C:)"
					closeModal={closeSecond}
				/>
			)}

			<TaskBar
				list={
					<List>
						<List.Item icon={<ReaderClosed variant="32x32_4" />} onClick={() => toggleSecond(true)}>
							Local Disk (C:)
						</List.Item>
						<List.Item
							icon={<WindowsExplorer variant="32x32_4" />}
							onClick={() => {
								toggleFirst(true)
							}}
						>
							Windows Explorer
						</List.Item>
					</List>
				}
			/>
		</>
	)
}