import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { createBrowserRouter, RouterProvider } from "react-router";
import LoginPage from "./app/pages/LoginPage";
import ListPage from "./app/pages/ListPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <ListPage />,
	},
	{
		path: "/login",
		element: <LoginPage />,
	},
]);

const queryClient = new QueryClient();

function App() {
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />,
			</QueryClientProvider>
		</Provider>
	);
}

export default App;
