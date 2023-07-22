import ProjectList from "./pages/ProjectList";
import Main from './pages/Main'
import ProjectSingle from "./pages/ProjectSingle";

export const routes = [
    {
        path: '/',
        component: Main,
        name: 'main',
    },
    {
        path: '/projects',
        component: ProjectList,
        name: 'project-list',
    },
    {
        path: '/projects/:slug',
        component: ProjectSingle,
        name: 'project-item',
    },
    {
        path: '/:catchAll(.*)',
        component: Main,
    }
]