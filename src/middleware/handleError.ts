const ERROR_HANDLERS = {
    CastError: res: Response =>
      res.status(400).send({ error: 'id used is malformed' }),
  
    ValidationError: (res: Response, { message }) =>
      res.status(409).send({ error: message }),
  
    JsonWebTokenError: res: Response =>
      res.status(401).send({ error: 'invalid token' }),
  
    defaultError: res: Response => res.status(500).end()
  }
  
  export const handlerError = (error: Error, _request: Request, response: Response, next: any) => {
    console.log('ERROR NAME => ' + error.name)
    console.error(error.name)
  
  const handler =
    ERROR_HANDLERS[error.name] || ERROR_HANDLERS.defaultError
  
    handler(response, error)
  }
  