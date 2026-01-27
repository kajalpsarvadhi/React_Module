import UserProfile from "./ConditionalRendering"
import ListsTS from "./ListsTS"
import RenderingList from "./RenderingList"
import { TaskMain } from "./TaskMain"

const ListRender = ()=>{
    return(
        <div>
            <TaskMain/>
      
      
      <UserProfile/>
      <RenderingList/>
      <ListsTS/>
        </div>
    )
}

export default ListRender