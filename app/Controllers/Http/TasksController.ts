import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Tasks from 'App/Models/Task'
import { rules, schema } from '@ioc:Adonis/Core/Validator'

export default class TasksController {
  public index ({view}:HttpContextContract){
    return view.render('tasks/index')
  }
  public async store ({request, response}:HttpContextContract){
    const validationSchema = schema.create({
      title: schema.string({ trim: true }, [
        rules.maxLength(255),
      ]),
    })

    const validatedData = await request.validate({
      schema: validationSchema,
      messages: {
        'title.required': 'Enter task title',
        'title.maxLength': 'Task title can not exceed 255 character',
      },
    })

    await Tasks.create({
      //title: request.input('title'),
      title: validatedData.title,
    })
    return response.redirect('back')
  }
}
