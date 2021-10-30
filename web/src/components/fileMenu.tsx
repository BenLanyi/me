import { List } from "@react95/core"
import * as React from "react"
import styled from "styled-components"

export const FileMenu = () => {
	return (
		<Container>
			<Item>File</Item>
			<Item>Edit</Item>
			<Item>View</Item>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
`

const Item = styled(List.Item)`
	padding-left: 6px;
`
