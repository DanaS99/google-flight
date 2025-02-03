import { createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main';
import Banner from '../components/Banner';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
    },
    {
        path: '/',
        element: <Banner />
    }
   
])

export default router;