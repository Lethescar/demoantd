<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="state.collapsed" collapsible>
      <div class="logo" />
      <a-menu theme="dark" :selectedKeys="[$route.path]" mode="inline">
        <a-menu-item :key="'/User'">
          <pie-chart-outlined />
          <span>
            <router-link to="User" class="menu-item-link">用户列表</router-link>
          </span>
        </a-menu-item>
        <a-menu-item key="2">
          <desktop-outlined />
          <span>Option 2</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #title>
            <span><user-outlined /><span>User</span></span>
          </template>
          <a-menu-item key="3">Tom</a-menu-item>
          <a-menu-item key="4">Bill</a-menu-item>
          <a-menu-item key="5">Alex</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
            <span><team-outlined /><span>Team</span></span>
          </template>
          <a-menu-item key="6">Team 1</a-menu-item>
          <a-menu-item key="8">Team 2</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <file-outlined />
          <span>File</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-spin size="large" :spinning="state.spinning">
        <a-layout-header style="background: #fff; padding: 0" />
        <a-layout-content style="margin: 0 16px">
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          Ant Design ©2018 Created by Ant UED
        </a-layout-footer>
      </a-spin>
    </a-layout>
  </a-layout>
</template>
<script>
import { reactive, onMounted } from "vue";
import { Layout, Menu, Spin } from "ant-design-vue";
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined
} from "@ant-design/icons-vue";

export default {
  components: {
    ALayout: Layout,
    ALayoutHeader: Layout.Header,
    ALayoutSider: Layout.Sider,
    ALayoutContent: Layout.Content,
    ALayoutFooter: Layout.Footer,
    AMenu: Menu,
    AMenuItem: Menu.Item,
    ASubMenu: Menu.SubMenu,
    ASpin: Spin,
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined
  },
  setup() {
    let state = reactive({
      selectedKeys: ["1"],
      collapsed: false,
      spinning: true
    });
    function changeSpinning() {
      setTimeout(() => {
        state.spinning = false;
      }, 1000);
    }
    onMounted(() => {
      changeSpinning();
    });
    return { state, onMounted };
  }
};
</script>
<style scoped>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.spin-content {
  border: 1px solid #91d5ff;
  background-color: #e6f7ff;
  padding: 30px;
}
.menu-item-link {
  color: #fff;
}
</style>
