import { shallowMount } from '@vue/test-utils'
import Login from '@/components/Auth/Login.vue'

describe("Login test", () => {
    let loginForm

    beforeEach(() => {
        loginForm = shallowMount(Login)
    })

    describe('Email Input Field', () => {
        it('Hien thi msg thong bao loi khi nhap sai email', () => {
            loginForm.vm.details.email = 'hoanganh.email@123,456'

            expect(loginForm.vm.emailIsInvalid).toBe(true)
        });
        it('Khong hien thi msg thong bao loi khi nhap email dung', () => {
            loginForm.vm.details.email = 'hoanganh2311@gmail.com'

            expect(loginForm.vm.emailIsInvalid).toBe(false)
        });
    })
    describe('Password Input Field', () => {
        it('Hien thi msg thong bao loi khi nhap password sai dinh dang', () => {
            loginForm.vm.details.password = '12345'

            expect(loginForm.vm.passwordIsInvalid).toBe(true)
        });
        it('Khong hien thi msg thong bao loi khi nhap email dung', () => {
            loginForm.vm.details.password = '123456as'

            expect(loginForm.vm.passwordIsInvalid).toBe(false)
        });
    })

    describe("Form Submission",()=>{
        let loginFormElement
        
        beforeEach(()=>{
            loginFormElement = loginForm.find('form')
        })

        it('Form submit triggers sumbmitForm()', () => {
            const submitFormMock = jest.fn()
            loginForm.vm.login = submitFormMock
            loginFormElement.trigger('submit')
            expect(submitFormMock.mock.calls.length).toBe(1)
          })
      
    })
})

