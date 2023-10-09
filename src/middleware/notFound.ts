export const notFound = (req: Request, res: Response, next: any) => {
    res.status(404).json({
      error: 'URL not  found'
    })
  }
  