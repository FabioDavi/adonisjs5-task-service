import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Tasks from 'App/Models/Task'

export default class TasksController {
  public index ({view}:HttpContextContract){
    return view.render('tasks/index')
  }
  public async store ({request, response}:HttpContextContract){
    await Tasks.create({
      title: request.input('title'),
    })
    return response.redirect('back')
  }
}
