import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PagesController {
    
   
        public home ({view}: HttpContextContract){
            return view.render('welcome')
        }

        public about ({view}: HttpContextContract){
            return view.render('about')
        }

        public contact ({view}: HttpContextContract){
            return view.render('contact')
        }


        public test ({params}: HttpContextContract){
                       return params.name ? `This is ${params.name}'s about page`  : 'This is the about page'           
        }

        
        

}
