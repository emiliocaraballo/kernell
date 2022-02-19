
// para los resultado de salida 401,404
interface Error{
    code:string,
    description:string,
    title:string,
    statusCode:number,
    path:string
}

export{
    Error
}