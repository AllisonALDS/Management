import ManagementHeader from '../../components/Header/ManagementHeader'
import ManagementCategory from '../../components/Header/ManagementCategory'
import MainManagement from '../../components/Main/MainManagement/mainManagement'
import './management.css'


function getInfo(){
    
}
export default function Scheduling(){
    return (
        <>
            <ManagementHeader />  
            <ManagementCategory />       
            <MainManagement />   
        </>
    )
}