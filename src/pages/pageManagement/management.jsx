import ManagementHeader from '../../components/Header/ManagementHeader'
import ManagementCategory from '../../components/Header/ManagementCategory'
import MainManagement from '../../components/Main/MainManagement/mainManagement'
import Menu from "../../components/Menu/menu"
import './management.css'


function getInfo(){
    
}
export default function Scheduling(){
    return (
        <div className='container-management'>
            <Menu />
            <MainManagement />
        </div>
    )
}