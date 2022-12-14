import { FilterBar } from '../filterBar/FilterBar'
import { SearchBar } from '../searchBar/SearchBar'
import './style.css'

type Props = {
	handleChangeUsername: (value: string) => void
	handleDeleteUsers: () => void
	handleCopyUsers: () => void
	handleToggleEdit: () => void
	editOn: boolean
	selectedID: number[]
	handleSelectAll: () => void
	handleUnSelectAll: () => void
}

export const TopBar = ({
	handleChangeUsername,
	handleDeleteUsers,
	handleCopyUsers,
	handleToggleEdit,
	editOn,
	selectedID,
	handleSelectAll,
	handleUnSelectAll,
}: Props): JSX.Element => {
	return (
		<div className='Topbar'>
			<div className='Title'>
				<p>Github Search</p>
			</div>
			<SearchBar handleChangeUsername={handleChangeUsername} />
			<FilterBar
				handleDeleteUsers={handleDeleteUsers}
				handleCopyUsers={handleCopyUsers}
				handleToggleEdit={handleToggleEdit}
				editOn={editOn}
				selectedID={selectedID}
				handleSelectAll={handleSelectAll}
				handleUnSelectAll={handleUnSelectAll}
			/>
		</div>
	)
}
