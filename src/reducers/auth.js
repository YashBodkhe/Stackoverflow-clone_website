const authReducer = (state ={},action)=>{
    switch (action.type) {
        case 'AUTH':
            localStorage.setItem('Profile',JSON.stringify({...action?.data}))
            return {...state, data:action?.data}
            // break;
    
        default:
            return state;
    }
}
export default authReducer;