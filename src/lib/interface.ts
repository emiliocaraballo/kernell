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

export{
    ResponseValidateForm,
    TypeValidateStrings
}