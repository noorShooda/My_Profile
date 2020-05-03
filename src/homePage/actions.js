export const GET_STUDIES_PATH_REQUEST = "getStudiesPathRequest";
export const GET_STUDIES_PATH_FAIL = "getStudiesPathFail";
export const GET_STUDIES_PATH_SUC = "getStudiesPathSuccess";

export const getStudiesPathRequest = () =>{
    return(
        {
            type: GET_STUDIES_PATH_REQUEST
        }
    )
}

export const getStudiesPathSuccess = (data) =>{
    return(
        {
            type: GET_STUDIES_PATH_SUC,
            payload: data
        }
    )
}

export const getStudiesPathFail = (error) =>{
    return(
        {
            type: GET_STUDIES_PATH_FAIL,
            payload: error
        }
    )
}