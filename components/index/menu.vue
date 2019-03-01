<template>
  <div class="m-menu">
    <dl
      class="nav" 
      @mouseleave="mleave">
      <dt>全部分类</dt>
      <dd 
        v-for="(item,idx) in menu" 
        :key="idx"
        @mouseenter="menter">
        <i :class="item.type"/> {{ item.name }} <span class="arrow"/> 
      </dd>
    </dl>
    <div 
      v-if="kind" 
      class="detail"
      @mouseenter="sover"
      @mouseleave="sout">
      <template
      v-for="(item,idx) in curdetail.child">
        <h4 :key="idx">{{ item.title }}</h4>
        <span
          v-for="v in item.child"
          :key="v">{{ v }}</span>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      kind: '',
      menu: [
        {
          type: 'food',
          name: '美食',
          child: [
            {
              title: '美食',
              child: ['代金卷1', '代金卷2']
            }
          ]
        },
        {
          type: 'takeout',
          name: '外卖',
          child: [
            {
              title: '外卖',
              child: ['代金卷3', '代金卷4']
            }
          ]
        },
        {
          type: 'hotel',
          name: '酒店',
          child: [
            {
              title: '酒店',
              child: ['代金卷5', '代金卷6']
            }
          ]
        }
      ]
    }
  },
  computed: {
    curdetail: function() {
      return this.menu.filter(item => item.type === this.kind)[0]
    }
  },
  methods: {
    mleave: function() {
      let self = this
      self._timer = setTimeout(function() {
        self.kind = ''
      }, 150)
    },
    menter: function(e) {
      this.kind = e.target.querySelector('i').className
    },
    sover: function() {
      clearTimeout(this._timer)
    },
    sout: function() {
      this.kind = ''
    }
  }
}
</script>
