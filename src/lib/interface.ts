interface ResponseValidateForm {
    status: boolean
    code: number
}

enum typeValidate{
    string='string',
    mail='mail',
    number='number',
    url='url',
    real='real',
    password='password',
    date='date',
    datetime='datetime',
    time='time'
}
type TypeValidateStrings = keyof typeof typeValidate;


interface IError{
    statusCode:number,
    message:string,
    path:string
}

export interface IQueryResponse {
    ok: boolean
    data?: any
}

export{
    ResponseValidateForm,
    TypeValidateStrings,
    IError
}


