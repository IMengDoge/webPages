<template>
	<view>
		<view v-for="(item,index) in chatDatas" class="card" @click="getMsg" :id="'card_'+index" :class="item.sqrSoul">
			<view class="msg">{{item.msg}}</view>
			<view class="publisher" :style="'color:#'+item.v + '; background-image: url( ../../static/qIcons/'+item.sqr+'.png);'">
				—— {{item.pblisher}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// item.sqrSoul + item.sqr
				cSoul: 's01',
				cSqr: 'q01',
				chatDatas: [{
						msg: '好看的皮囊千篇一律，有趣的灵魂万里挑一。',
						pblisher: '易萌教主',
						sqrSoul: 's02',
						sqr: 'q12',
						v: '007AFF'
					},
					{
						msg: '人呐，不容易。时也命也，运也。天有不测风云，人有旦夕祸福。蜈蚣百足行不及蛇，灵鸡有翼飞不如鸦。马有千里之程，无人不能自往。人有凌云之志，非运不能腾达。文章盖世，孔子困于陈蔡；武略超群，太公垂钓渭水；盗跖年幼，不是善良之辈；颜回命短，实非凶恶之徒；尧舜至圣，反生不孝之子；无所顽呆，却生大圣之儿。张良原是布衣，萧何称谓县吏；晏子身无五尺；能做齐国首相；孔明卧居草庐，做了蜀汉军事；韩信手无缚鸡之力，封了汉朝大将。有先贫而后富，有先富而后贫。蛟龙未遇，潜身于鱼虾之间；君子失时，拱手与小人之下。此乃天理循环，终而复始者也。',
						pblisher: '老郭',
						sqrSoul: 's03',
						sqr: 'q04',
						v: 'FFFFFF'
					},
					{
						msg: '好不容易来人间一趟，别活的太沮丧。',
						pblisher: '握不住的沙不如扬了',
						sqrSoul: 's01',
						sqr: 'q14',
						v: 'FFFFFF'
					},
					{
						msg: '我不知道风是在哪一个方向吹，我是在梦中，寂寞是梦里的光辉',
						pblisher: '云中-漫步',
						sqrSoul: 's01',
						sqr: 'q12',
						v: 'FFFFFF'
					},
					{
						msg: '珍缘惜缘但看终究有缘？寻爱痴爱应懂是否能爱？爱的付出不一定都被接受，但总应得到尊重。对一个不尊重对方的人，不值得去爱',
						pblisher: '清风拂明月明月醉清风',
						sqrSoul: 's04',
						sqr: 'q04',
						v: 'FFFFFF'
					},
					{
						msg: '我以前总觉得孤独是件很酷的事，但随着年龄的增长，我渐渐讨厌冷暖自知的状态，开始渴望被理解 被真诚相待，麻烦又坚定的友谊和酸臭又甜蜜的恋爱，对我而言 都变得比孤独更酷，被爱愈发值得铭记在心',
						pblisher: '嗯呢哦嗷喔',
						sqrSoul: 's02',
						sqr: 'q03',
						v: 'FFFFFF'
					},
					{
						msg: '每个人其实都是孤独的行者。',
						pblisher: '他家本是无情物',
						sqrSoul: 's04',
						sqr: 'q08',
						v: 'FFFFFF'
					},
					{
						msg: '我是你近旁的一株木棉，作为树的形象和你粘在一起。根，紧握在地下；叶，相融在云里。每一阵风过，我们都互相致意，但没有人听懂我们的言语。',
						pblisher: '云海雾天',
						sqrSoul: 's03',
						sqr: 'q14',
						v: 'FFFFFF'
					}
				],

				// v : 是否是VIP-->如果是,名字是自定义颜色的;如果不是,名字颜色为白色;

				// sqlSoul 务实家宇宙:s01、思想家宇宙:s02、艺术家宇宙:s03、仁爱宇宙:s04


				// sqr 	元气才子:q01、谦谦才子:q02、王侯将相:q03、魅力少帅:q04、品质小资:q05、多元领袖:q06、忧郁骑士:q07、守护天使:q08、低调学霸:q09、社交达人:q10
				// 		百变大咖:q11、博学小咖:q12、温暖大白:q13、温暖甜心:q14、细致精英:q15、效率精英:q16、补位精英:q17、科学怪人:q18、万能舵手:q19、谦和智者:q20
				//		灵性艺术家:q21、温和艺术家:q22、中坚实干家:q23、温润多面手:q24、极致多面手:q25
			}
		},
		onLoad: function(e) {
			console.log(e)
		},
		methods: {
			getMsg: function(e) {
				var cId = e.currentTarget.id;
				cId = cId.substr(5);
				console.log(cId);
				console.log(e);
			}
		}
	}
</script>

<style>
	.card {
		width: 640rpx;
		margin: 20rpx auto;
		/* min-height: 52rpx; */
		font-size: 32rpx;
		line-height: 32rpx;
		padding: 20rpx;
		border-radius: 16px;
		/* background-color: #007AFF; */
	}

	.msg {
		font-size: 32rpx;
		padding: 20rpx;
		color: #FFFFFF;
	}

	.publisher {
		text-align: right;
		font-size: 28rpx;
		padding: 20rpx;
		background-repeat: no-repeat;
		/* background-position: 20rpx 20rpx; */
		background-size: 68rpx;
	}
</style>
<style>
	/* sqrSoul */
	.s01 {
		background-color: #A268D4;
	}

	.s02 {
		background-color: #FA5E8A;
	}

	.s03 {
		background-color: #58C4CC;
	}

	.s04 {
		background-color: #7E8FEF;
	}
</style>
<style>
	/* sql */
</style>
