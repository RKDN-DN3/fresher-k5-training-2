import {shallowMount} from '@vue/test-utils'
import LoginForm from '@/components/Auth/Login.vue'

describe("LoginForm.vue", ()=>{

    let loginForm= null

    beforeEach(()=>{
        loginForm = shallowMount(LoginForm)
    })
    describe("Email Input Field", ()=>{
        it("Nhap email sai dinh dang -> emailIsInvalid 'true' ",()=>{
            loginForm.vm.details.email = 'tranhoanganh12gmail'
            expect(loginForm.vm.emailIsInvalid).toBe(true)
        })
        it("Nhap email đúng dinh dang  -> emailIsInvalid 'false'",()=>{
            loginForm.vm.details.email = 'tranhoanganh12@gmail.com'
            expect(loginForm.vm.emailIsInvalid).toBe(false)
        })
        it('Hien thi thong bao loi khi nhap email sai dinh dang', () => {
            loginForm.vm.details.email = 'hoanganh.email@123,456'
            expect(loginForm.find('.form-input.email> .error-message').exists()).toBe(true)
          })

    })
})