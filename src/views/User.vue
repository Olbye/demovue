<template>
  <div class="about">
    <h1>This is an user page</h1>
    <div class="box">
      <table border="1" cellspacing="0" width="600px">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Sex</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.sex }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { getUsers } from "@/api/user";
export default {
  name: "User",
  data: function() {
    return {
      users: []
    };
  },
  created: function() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      getUsers().then(res => {
        this.users = res;
      });
    }
  }
};
</script>

<style scoped>
.box {
  display: flex;
  justify-content: center;
}
</style>
