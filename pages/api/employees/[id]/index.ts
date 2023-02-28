import type { NextApiRequest, NextApiResponse } from 'next'
import * as employeeController from '../../../../features/employees/employees.controller'
import prisma from '../../../../lib/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { method } = req

  switch (method?.toLowerCase()) {
    case 'patch':
      await employeeController.updateEmployee(req, res)
      break
    case 'get':
      await employeeController.getEmployee(req, res)
      break
    default:
      // Gir 405 Method Not Allowed hvis brukeren prøver på noe annet enn PATCH eller GET
      res.status(405).end
  }
}
