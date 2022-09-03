import React,{
    createContext,
    useContext,
    useState
    
} from 'react'


export const AuthContex = createContext(null);


export const AuthProvider = ({user,children})=>{

const [userdata,setUserdata]= useState(user)
return(
    <AuthContex.Provider value={{userdata,setUserdata}}>
        {children}
    </AuthContex.Provider>
);
}

export const useAuth = ()=> useContext(AuthContex)

// create use context for user regestration

export const RegContext = createContext(null)



export const RegProvider =({data,children})=>{
    const [reguser,setReguser]= useState(data)
    return(
        <RegContext.Provider value={{reguser,setReguser}}>
            {children}
        </RegContext.Provider>
    )

}

export const useReg =()=> useContext(RegContext)



