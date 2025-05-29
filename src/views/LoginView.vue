<template>
    <div>
        <h1 class="subtitle is-4 has-text-centered">登入</h1>

        <div class="container columns">
            <div class="column"></div>

            <form class="column is-half" @submit.prevent="login">
                <div class="field">
                    <label for="username" class="label">使用者帳號</label>
                    <div class="control has-icons-left has-icons-right">
                        <input class="input is-success" type="text" placeholder="請輸入 username" id="username"
                            name="username" v-model="formData.username">
                        <span class="icon is-small is-left">
                            <i class="fas fa-user"></i>
                        </span>
                        <span class="icon is-small is-right">
                            <i class="fas fa-check"></i>
                        </span>
                    </div>
                    <p class="help is-danger" v-if="formErrors.username">{{ formErrors.username }}</p>
                </div>

                <div class="field">
                    <label for="password" class="label">密碼</label>
                    <div class="control has-icons-left has-icons-right">
                        <input id="password" name="password" v-model="formData.password" class="input is-success"
                            type="password" placeholder="請輸入密碼">
                        <span class="icon is-small is-left">
                            <i class="fas fa-user"></i>
                        </span>
                        <span class="icon is-small is-right">
                            <i class="fas fa-check"></i>
                        </span>
                    </div>
                    <p class="help is-danger" v-if="formErrors.password">{{ formErrors.password }}</p>
                </div>

                <div class="field">
                    <label class="label">Email</label>
                    <div class="control has-icons-left has-icons-right">
                        <input class="input is-danger" type="email" placeholder="Email input" id="email" name="email"
                            v-model="formData.email">
                        <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                        </span>
                        <span class="icon is-small is-right">
                            <i class="fas fa-exclamation-triangle"></i>
                        </span>
                    </div>
                    <p class="help is-danger" v-if="formErrors.email">{{ formErrors.email }}</p>
                </div>

                <div class="field">
                    <label class="label">選擇主題</label>
                    <div class="control">
                        <div class="select">
                            <select v-model="formData.subject">
                                <option value="" disabled selected>請選擇主題</option>
                                <option value="1">主題一</option>
                                <option value="2">主題二</option>
                            </select>
                        </div>
                    </div>
                    <p class="help is-danger" v-if="formErrors.subject">{{ formErrors.subject }}</p>
                </div>

                <div class="field">
                    <div class="control">
                        <label class="checkbox">
                            <input type="checkbox" v-model="formData.agreed">
                            我同意條款
                        </label>
                    </div>
                    <p class="help is-danger" v-if="formErrors.agreed">{{ formErrors.agreed }}</p>
                </div>

                <div class="field">
                    <div class="control">
                        <label class="radio pr-4">
                            <input type="radio" name="question" v-model="formData.question" value="yes">
                            Yes
                        </label>
                        <label class="radio">
                            <input type="radio" name="question" v-model="formData.question" value="no">
                            No
                        </label>
                    </div>
                    <p class="help is-danger" v-if="formErrors.question">{{ formErrors.question }}</p>
                </div>

                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-link">登入</button>
                    </div>
                    <div class="control">
                        <button class="button is-link is-light" type="button">取消</button>
                    </div>
                    <div class="control  ml-auto">
                        <button class="button is-link is-light" type="reset">清空</button>
                    </div>
                </div>

            </form>

            <div class="column"></div>
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'

const userStore = useUserStore()
const route = useRoute()
const router = useRouter()

const formData = ref({
    username: '',
    password: '',
    email: '',
    subject: '',
    agreed: false,
    question: ''
})

const formErrors = ref({
    username: '',
    password: '',
    email: '',
    subject: '',
    agreed: '',
    question: ''
})

const formValidate = () => {
    formErrors.value.username = formData.value.username ? '' : '使用者帳號為必填'
    formErrors.value.password = formData.value.password ? '' : '密碼為必填'

    if (!formData.value.email) {
        formErrors.value.email = '請輸入 Email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
        formErrors.value.email = 'Email 格式不正確';
    } else {
        formErrors.value.email = '';
    }

    formErrors.value.subject = formData.value.subject ? '' : '主題為必選'
    formErrors.value.agreed = formData.value.agreed ? '' : '必須同意條款'
    formErrors.value.question = formData.value.question ? '' : '請選擇一個選項'

    return Object.values(formErrors.value).every(error => !error)
}

const login = () => {
    console.log('formData', formData.value)

    if (!formValidate()) {
        console.error('表單驗證失敗', formErrors.value)
        return
    }

    userStore.login(1)

    console.log('userId', userStore.userId)
    console.log('userName', userStore.userName)
    console.log('isLogin', userStore.isLogin)

    if (route.query.redirect) {
        // 如果有 redirect 參數，則重定向到該路徑
        router.push(route.query.redirect)
    } else {
        // 否則重定向到首頁
        router.push('/')
    }
}
</script>
