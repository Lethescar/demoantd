<template>
  <div class="background">
    <vue-particles
      color="#dedede"
      :particleOpacity="0.2"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="1"
      linesColor="#40e0d0"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.2"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="cash"
    >
    </vue-particles>
    <a-form
      ref="ruleForm"
      :wrapper-col="{ span: 24,}"
      class="form-box"
    >
      <h1>登录</h1>
      <a-form-item name="user" v-bind="validateInfos.user">
        <a-input v-model:value="modelRef.user" placeholder="请输入账号" @blur="validate('user', { trigger: 'blur' }).catch(() => {})">
          <template #prefix
            ><UserOutlined style="color: rgba(0, 0, 0, 0.25)"
          /></template>
        </a-input>
      </a-form-item>
      <a-form-item name="password" v-bind="validateInfos.password">
        <a-input v-model:value="modelRef.password" type="password" placeholder="请输入密码" @blur="validate('password', { trigger: 'blur' }).catch(() => {})">
          <template #prefix
            ><LockOutlined style="color: rgba(0, 0, 0, 0.25)"
          /></template>
        </a-input>
      </a-form-item>
      <span class="reset-event" @click="resetFields">重置</span>
      <a-form-item :wrapper-col="{ span: 24}">
        <a-button type="primary" block @click="onSubmit">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { Form, Input, Button, notification } from "ant-design-vue";
import { useForm } from '@ant-design-vue/use';
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { reactive, ref, onMounted, toRaw } from "vue";
import { useRouter } from 'vue-router'

export default {
  name: "Login",
  components: {
    AForm: Form,
    AFormItem: Form.Item,
    AInput: Input,
    AButton: Button,
    UserOutlined,
    LockOutlined,
  },
  setup() {
    const router = useRouter();
    const modelRef = reactive({
      user: '',
      password: '',
    });
    const rulesRef = reactive({
      user: [
        {
          required: true,
          message: 'Please input user',
        },
        {
          min: 3,
          max: 5,
          message: 'Length should be 3 to 5',
          trigger: 'blur',
        },
      ],
      password: [
        {
          required: true,
          message: 'Please select password',
        },
      ],
    });
    const { resetFields, validate, validateInfos } = useForm(modelRef, rulesRef);
    const onSubmit = e => {
      e.preventDefault();   // 取消事件的默认动作
      validate()
        .then(() => {
          let info = toRaw(modelRef)
          if (info.user == "admin" && info.password == "1qaz_WSX") {
            sessionStorage.setItem('userInfo',info)
            router.push('./home')
            notification['success']({
              message: '登录提示',
              description:'登录成功',
            });
          } else {
            notification['error']({
              message: '登录提示',
              description:'账号或密码错误',
            });
          }
        })
        .catch(err => {
          console.log('error', err);
        });
    };
    return { validate, validateInfos, resetFields, modelRef, onSubmit, };
  }
};
</script>

<style lang="scss" scoped>
.background {
  width: 100%;
  height: 100vh;
  background: radial-gradient(
    220% 105% at top center,
    #001a52 10%,
    #002577 40%,
    #004988 65%,
    #000000
  );
  background-attachment: fixed;
}
h1{
  color: #fff;
}
.cash {
  position: fixed;
  width: 100%;
}
.form-box {
  width: 340px;
  height: 370px;
  padding: 50px;
  top: 50%;
  left: 50%;
  position: absolute;
  background: #40b4e02e;
  border-radius: 5px;
  box-shadow: 5px 5px 16px turquoise;
  transform: translate(-50%, -50%);
  text-align: center;
}
.reset-event{
  width: 100%;
  display: block;
  cursor: pointer;
  padding: 0 0 10px 0;
  color: #0ac6ff;
  text-align: right;
}
:deep(.ant-input-affix-wrapper){
  background: #ffffff2a;
}
:deep(.ant-input-affix-wrapper > input.ant-input){
  background: transparent;
}
:deep(.ant-input-affix-wrapper > input.ant-input::-webkit-input-placeholder){
  color: #ffffff85;
}
:deep(.anticon){
  color: #ffffffa6 !important;
}
:deep(.ant-input-affix-wrapper){
  border: 1px solid #3e6ea0;;
}
:deep(.ant-input-affix-wrapper > input.ant-input:-webkit-autofill , textarea:-webkit-autofill, select:-webkit-autofill) {// 选中账号密码后input样式修改
  -webkit-text-fill-color: #ededed !important;
  -webkit-box-shadow: 0 0 0px 1000px transparent  inset !important;
  background-color:transparent;
  background-image: none;
  transition: background-color 50000s ease-in-out 0s;
}  
</style>
