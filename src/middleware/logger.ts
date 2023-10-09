export const logger = (req: Request, res: Response, next: any) => {
    console.log(req.method)
    console.log(req)
    console.log(req.body)
    console.log('-------')
    next()
  }