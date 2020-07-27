import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PagesController {
    
   
        public home ({view}: HttpContextContract){
            return view.render('welcome')
        }


        public test ({params}: HttpContextContract){
           
            return params.name ? `This is ${params.name}'s about page`  : 'This is the about page'
           
        }

        public contact (){
            return 'this is the contact page'
        }

        

}
