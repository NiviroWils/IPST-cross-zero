import {type ReactNode} from 'react'
import MainPage from "@/pages/main";
import {GameProvider} from "@/shared/store";

const App = (): ReactNode => (
	<GameProvider>
		<MainPage />
	</GameProvider>
)

export default App;