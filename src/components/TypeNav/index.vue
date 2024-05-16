<script>
import {mapState} from "vuex";

export default {
  name: "TypeNav",
  data() {
    return {
      isShow: true,
    }
  },
  mounted() {
    if (this.$route.path !== '/home') {
      this.isShow = false;
    }
  },
  methods: {
    goSearch(event) {
      console.log(event.target.dataset);
      let {categoryname, category1id, category2id, category3id} = event.target.dataset; //对象解构
      let location = {
        name: 'search',
        query: {
          categoryName: categoryname,
        }
      };
      if (categoryname) {
        if (category1id) {
          location.query.category1Id = category1id;
        } else if (category2id) {
          location.query.category2Id = category2id;
        } else {
          location.query.category3Id = category3id;
        }
        console.log(location)
        this.$router.push(location);
      }
    },
    changeVisibility(event) {
      if (event.type == 'mouseenter') {
        if (this.$route.path !== '/home') {
          this.isShow = true;
        }
      }else if(event.type == 'mouseleave') {
        if(this.$route.path !== '/home') {
          this.isShow = false;
        }
      }


    }
  },
  computed: {
    ...
        mapState('home', ['categoryList']),
  }
}
</script>
<template>
  <div class="type-nav">
    <div class="container"  @mouseenter="changeVisibility" @mouseleave="changeVisibility">
      <h2 class="all">全部商品分类</h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <div class="sort" v-show="isShow">
        <div class="all-sort-list2" @click.prevent="goSearch">
          <div class="item" v-for="(item, index) in categoryList.slice(0,16)" :key="item.categoryId">
            <h3>
              <a href="#" :data-categoryName="item.categoryName" :data-category1Id="item.categoryId">{{ item.categoryName }}</a>
            </h3>
            <div class="item-list clearfix">
              <div class="subitem" v-for="(item2,index) in item.categoryChild" :key="item2.categoryId">
                <dl class="fore">
                  <dt>
                    <a href="" :data-categoryName="item2.categoryName " :data-category2Id="item2.categoryId">{{
                        item2.categoryName
                      }}</a>
                  </dt>
                  <dd>
                    <em v-for="(item3,index) in item2.categoryChild" :key="item3.categoryId">
                      <a href="" :data-categoryName="item3.categoryName" :data-category3Id="item3.categoryId">{{
                          item3.categoryName
                        }}</a>
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {


            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;

            }

          }

          .item-list {

            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }

        .item:hover {
          background-color: skyblue;
        }
      }
    }
  }
}
</style>