<template>
  <div>
    <div class="search-container">
      <div class="search-inp-container">
        <el-input @keyup.enter.native="handleSearch" placeholder="" v-model="listQuery.username" clearable>
        </el-input>
      </div>
      <el-button class="search-btn" type="primary" icon="el-icon-search" @click="handleSearch">查询</el-button>
      <el-button class="search-btn" type="primary" icon="el-icon-plus" @click="handleCreate">添加</el-button>
      <el-button class="search-btn" :autofocus="true" icon="el-icon-refresh" @click="refreshHandle">刷新</el-button>
    </div>
    <el-table :key='tableKey' :data="list" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">

      <el-table-column width="200px" align="center" label="数据库地址">
        <template slot-scope="scope">
          <span>{{scope.row.host}}</span>
        </template>
      </el-table-column>
      <el-table-column width="200px" align="center" label="数据库端口">
        <template slot-scope="scope">
          <span>{{scope.row.port}}</span>
        </template>
      </el-table-column>
      <el-table-column width="200px" align="center" label="数据库类型">
        <template slot-scope="scope">
          <span>{{scope.row.dbType}}</span>
        </template>
      </el-table-column>
      <el-table-column width="200px" align="center" label="jdbc驱动类名">
        <template slot-scope="scope">
          <span>{{scope.row.driverClassName}}</span>
        </template>
      </el-table-column>
      <el-table-column width="200px" align="center" label="具体数据库名">
        <template slot-scope="scope">
          <span>{{scope.row.databaseName}}</span>
        </template>
      </el-table-column>
      <el-table-column width="200px" align="center" label="用户名">
        <template slot-scope="scope">
          <span>{{scope.row.userName}}</span>
        </template>
      </el-table-column>
      <el-table-column width="200px" align="center" label="密码">
        <template slot-scope="scope">
          <span>{{scope.row.password}}</span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" align="center" label="操作" width="150"> <template slot-scope="scope">
        <el-button v-if="sys_gen_db_config_update" size="small" type="success" @click="handleUpdate(scope.row)">编辑
        </el-button>
        <el-button v-if="sys_gen_db_config_delete" size="small" type="danger" @click="handleDelete(scope.row)">删除
        </el-button>
      </template> </el-table-column>
    </el-table>
    <div v-show="!listLoading" class="pagination-container">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="listQuery.current" :page-sizes="[10,20,30, 50]" :page-size="listQuery.size" layout="total, sizes, prev, pager, next, jumper" :total="total"> </el-pagination>
    </div>
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="form" label-width="100px">
        <el-form-item label="数据库地址" prop="host">
          <el-input v-model="form.host" placeholder="请输入数据库地址"></el-input>
        </el-form-item>
        <el-form-item label="数据库端口" prop="port">
          <el-input v-model="form.port" placeholder="请输入数据库端口"></el-input>
        </el-form-item>
        <el-form-item label="数据库类型" prop="dbType">
          <el-input v-model="form.dbType" placeholder="请输入数据库类型"></el-input>
        </el-form-item>
        <el-form-item label="jdbc驱动类名" prop="driverClassName">
          <el-input v-model="form.driverClassName" placeholder="请输入jdbc驱动类名"></el-input>
        </el-form-item>
        <el-form-item label="具体数据库名" prop="databaseName">
          <el-input v-model="form.databaseName" placeholder="请输入具体数据库名"></el-input>
        </el-form-item>
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="form.userName" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel('form')">取 消</el-button>
        <el-button v-if="dialogStatus=='create'" type="primary" @click="create('form')">确 定</el-button>
        <el-button v-else type="primary" @click="update('form')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import {
    pageSysGenDbConfigApi,
    addSysGenDbConfigApi,
    getSysGenDbConfigApi,
    delSysGenDbConfigApi,
    updateSysGenDbConfigApi
  } from '@/api/gen/sysGenDbConfig'
  import { mapGetters } from 'vuex'
  export default {
    name: 'sysGenDbConfig',
    data() {
      return {
        form: {
          id: '', /** 主键*/
          host: '', /** 数据库地址*/
          port: '', /** 数据库端口*/
          dbType: '', /** 数据库类型*/
          driverClassName: '', /** jdbc驱动类名*/
          databaseName: '', /** 具体数据库名*/
          userName: '', /** 用户名*/
          password: '', /** 密码*/
          createTime: '', /** 创建时间*/
          modifyTime: '' /** 更新时间*/
        },
        rules: {
          id: [
            {
              required: true,
              message: '请输入主键',
              trigger: 'blur'
            },
            {
              min: 3,
              max: 20,
              message: '长度在 3 到 20 个字符',
              trigger: 'blur'
            }
          ], //
          host: [
            {
              required: true,
              message: '请输入数据库地址',
              trigger: 'blur'
            },
            {
              min: 3,
              max: 20,
              message: '长度在 3 到 20 个字符',
              trigger: 'blur'
            }
          ], //
          port: [
            {
              required: true,
              message: '请输入数据库端口',
              trigger: 'blur'
            },
            {
              min: 3,
              max: 20,
              message: '长度在 3 到 20 个字符',
              trigger: 'blur'
            }
          ], //
          dbType: [
            {
              required: true,
              message: '请输入数据库类型',
              trigger: 'blur'
            },
            {
              min: 3,
              max: 20,
              message: '长度在 3 到 20 个字符',
              trigger: 'blur'
            }
          ], //
          driverClassName: [
            {
              required: true,
              message: '请输入jdbc驱动类名',
              trigger: 'blur'
            },
            {
              min: 3,
              max: 20,
              message: '长度在 3 到 20 个字符',
              trigger: 'blur'
            }
          ], //
          databaseName: [
            {
              required: true,
              message: '请输入具体数据库名',
              trigger: 'blur'
            },
            {
              min: 3,
              max: 20,
              message: '长度在 3 到 20 个字符',
              trigger: 'blur'
            }
          ], //
          userName: [
            {
              required: true,
              message: '请输入用户名',
              trigger: 'blur'
            },
            {
              min: 3,
              max: 20,
              message: '长度在 3 到 20 个字符',
              trigger: 'blur'
            }
          ], //
          password: [
            {
              required: true,
              message: '请输入密码',
              trigger: 'blur'
            },
            {
              min: 3,
              max: 20,
              message: '长度在 3 到 20 个字符',
              trigger: 'blur'
            }
          ], //
          createTime: [
            {
              required: true,
              message: '请输入创建时间',
              trigger: 'blur'
            },
            {
              min: 3,
              max: 20,
              message: '长度在 3 到 20 个字符',
              trigger: 'blur'
            }
          ], //
          modifyTime: [
            {
              required: true,
              message: '请输入更新时间',
              trigger: 'blur'
            },
            {
              min: 3,
              max: 20,
              message: '长度在 3 到 20 个字符',
              trigger: 'blur'
            }
          ] //
        },
        list: null,
        total: null,
        listLoading: true,
        listQuery: {
          current: 1,
          size: 20,
          name: undefined
        },
        dialogFormVisible: false,
        dialogStatus: '',
        sys_gen_db_config_update: false,
        sys_gen_db_config_delete: false,
        sys_gen_db_config_add: false,
        textMap: {
          update: '编辑',
          create: '创建'
        },
        tableKey: 0
      }
    },
    mounted() {
      this.getList()
      this.sys_gen_db_config_add = this.permissions['sys_gen_db_config_add']
      this.sys_gen_db_config_update = this.permissions['sys_gen_db_config_update']
      this.sys_gen_db_config_delete = this.permissions['sys_gen_db_config_delete']
      this.sys_gen_db_config_select = this.permissions['sys_gen_db_config_select']
    },
    computed: {
      ...mapGetters(['permissions'])
    },
    methods: {
      getList() {
        this.listLoading = true;
        pageSysGenDbConfigApi(this.listQuery)
          .then(response => {
            this.list = response.data.records
            this.total = response.data.total
            this.listLoading = false
          })
      },
      handleSearch() {
        this.listQuery.current = 1
        this.getList()
      },
      refreshHandle() {
        this.listQuery.current = 1
        this.listQuery.size = 10
        this.listQuery.username = ''
        this.getList()
      },
      handleSizeChange(val) {
        this.listQuery.size = val
        this.getList()
      },
      handleCurrentChange(val) {
        this.listQuery.current = val
        this.getList()
      },
      handleCreate() {
        this.resetTemp();
        this.dialogStatus = 'create'
        this.dialogFormVisible = true
      },
      handleUpdate(row) {
        getSysGenDbConfigApi(row.id)
          .then(response => {
            this.form = response.data
            this.dialogFormVisible = true
            this.dialogStatus = 'update'
          })
      },
      handleDelete(row) {
        this.$confirm('此操作将永久删除, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            delSysGenDbConfigApi(row.id)
              .then(() => {
                this.$notify({
                  title: '成功',
                  message: '删除成功',
                  type: 'success',
                  duration: 2000
                });
                const index = this.list.indexOf(row);
                this.list.splice(index, 1);
              });
          });
      },
      create(formName) {
        const set = this.$refs;
        set[formName].validate(valid => {
          if (valid) {
            addSysGenDbConfigApi(this.form).then(() => {
              this.dialogFormVisible = false
              this.getList();
              this.$notify({
                title: '成功',
                message: '创建成功',
                type: 'success',
                duration: 2000
              });
            })
          } else {
            return false;
          }
        });
      },
      cancel(formName) {
        this.dialogFormVisible = false;
        const set = this.$refs
        set[formName].resetFields()
      },
      update(formName) {
        const set = this.$refs
        set[formName].validate(valid => {
          if (valid) {
            this.dialogFormVisible = false;
            this.form.password = undefined;
            updateSysGenDbConfigApi(this.form).then(() => {
              this.dialogFormVisible = false;
              this.getList()
              this.$notify({
                title: '成功',
                message: '创建成功',
                type: 'success',
                duration: 2000
              });
            });
          } else {
            return false;
          }
        })
      },
      resetTemp() {
        this.form = {
        }
      }
    }
  }
</script>
