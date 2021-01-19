<template>
  <div>
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>User</a-breadcrumb-item>
      <a-breadcrumb-item>UserList</a-breadcrumb-item>
    </a-breadcrumb>
    <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
      用户列表
    </div>
  </div>
</template>

<script>
import { Breadcrumb } from "ant-design-vue";
export default {
  name: "User",
  components: {
    ABreadcrumb: Breadcrumb,
    ABreadcrumbItem: Breadcrumb.Item
  }
};
</script>
<style lang="" scoped></style>
