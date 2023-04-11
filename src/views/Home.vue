<template>
  <div class="home">
    <div class="example-title"> # 播放flv视频流 </div>
    <Button type="primary" size="large" style="margin:0 0 2em;" @click="captureImg">截图</Button>
    <Row type="flex" justify="left">
      <Col :span="18">
        <Flv src="http://192.168.20.132:8080/live/test.live.flv?secret=035c73f7-bb6b-4889-a715-d9eb2d1925cc"></Flv>
      </Col>
    </Row>
    <Row type="flex" justify="right">
      <Col :span="16">
        <div style="width:0px;height:0px;overflow:hidden;">
          <canvas id="canvas" width="515" height="300"></canvas>
        </div>
        <img :src="imgSrc" style="margin-top:5px;"/>
      </Col>
    </Row>
  </div>
</template>

<script>
import GithubButton from 'vue-github-button'
import RtmpLive from "@/components/RtmpLive.vue";
import HlsLive from "@/components/HlsLive.vue";
import Flv from "@/components/flv.vue";
import HttpFlv from "@/components/httpFlv.vue";

export default {
  name: "home",
  components: {
    GithubButton,
    RtmpLive,
    HlsLive,
    Flv,
    HttpFlv
  },
  data () {
    return {
      title: '',
      subtitle: '',
      videoInfo: [
        { title: '海康摄像头', videoSrc: 'rtmp://192.168.20.132/live/test?secret=035c73f7-bb6b-4889-a715-d9eb2d1925cc'},
        { title: '香港卫视', videoSrc: 'rtmp://live.hkstv.hk.lxdns.com/live/hks1'},
        { title: '香港财经', videoSrc: 'rtmp://202.69.69.180:443/webcast/bshdlive-pc'},
        { title: '湖南卫视', videoSrc: 'rtmp://58.200.131.2:1935/livetv/hunantv'},
        { title: '美国中文电视', videoSrc: 'rtmp://media3.sinovision.net:1935/live/livestream'}
      ],
      imgSrc: '', // 图片路径
      canvas: '',
      context: '',
      videoTag: ''
    }
  },
  mounted () {
    this.videoTag = document.getElementById('videoElement')
    this.canvas = document.getElementById('canvas')
    this.context = this.canvas.getContext('2d')
    console.log('加载数据：', this.videoTag, this.canvas, this.context)
  },
  methods: {
    captureImg () {
      this.context.drawImage(this.videoTag, 0, 0, 515, 300)
      let base64 = this.canvas.toDataURL('image/jpeg')
      console.log('base64:', base64)
      this.imgSrc = base64
    }
  }
};
</script>

<style lang="less" scoped>
a {
  // color: #42b983;
  color: #fff;
}
a:hover {
  color: #fff;
}
.title {
  height: 1em;
  line-height: 1em;
  font-weight: 700;
  font-size: 4rem;
  margin: 1.5em 0 1.2em;
}
.subtitle {
  font-size: 1.8em;
  color: #a5a5a5;
  margin: 1em 0;
  font-weight: bold;
}
.actions {
  margin-top: 3em;
  margin-bottom: 2em;
}
.example-title {
  font-size: 1.8em;
  font-weight: bold;
  margin-top: 3em;
  margin-bottom: 2em;
}
</style>

