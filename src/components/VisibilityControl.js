export const VisibilityControl = ({isChecked ,setShowCompleted, cleanTask}) =>{
  
    const handleDelete = () =>{
        if(window.confirm('are you sure delete it?')){
            cleanTask()
        }
    }
  
    return(
        <div>
        <input checked = {isChecked} type="checkbox" onChange={(e) => setShowCompleted(e.target.checked)}/>
        {" "} 
        <label>task done</label>

        <button onClick={handleDelete}>
            clear
        </button>
      </div>
    )
}