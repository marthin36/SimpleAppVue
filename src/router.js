import EmployeeList from './components/EmployeeList.vue'
import Home from './components/Home.vue'
//import App from './App.vue'
import DetailEmployee from './components/DetailEmployee'
import FavoriteEmployee from './components/FavoriteEmployee'
import Data from './components/Data'
import Calculator from './components/Calculator.vue'

export default [
    {
        path: '/',
        component: Home
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/employee',
        component:EmployeeList        
    },
    {
        path: '/detail/:id',
        component:DetailEmployee
    },
    {
        path: '/favorite',
        component: FavoriteEmployee
    },
    {
        path: '/data',
        component: Data
    },
    {
        path: '/calculator',
        component: Calculator
    }
]